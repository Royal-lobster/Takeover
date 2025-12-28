#!/usr/bin/env node

/**
 * Script to find working icons for apps with broken favicons
 * Tests both Simple Icons and alternative favicon domains
 */

const BROKEN_APPS = [
  {
    id: "kitty",
    name: "Kitty",
    currentIcon: 'favicon("sw.kovidgoyal.net")',
    simpleIconOptions: ["kitty", "gnometerminal", "windowsterminal", "hyper"],
    faviconOptions: ["sw.kovidgoyal.net", "github.com"]
  },
  {
    id: "logseq",
    name: "Logseq",
    currentIcon: 'favicon("logseq.com")',
    simpleIconOptions: ["logseq"],
    faviconOptions: ["logseq.com", "www.logseq.com"]
  },
  {
    id: "mailspring",
    name: "Mailspring",
    currentIcon: 'favicon("getmailspring.com")',
    simpleIconOptions: ["mailspring", "maildotru", "gmail"],
    faviconOptions: ["getmailspring.com", "www.getmailspring.com", "mailspring.com"]
  },
  {
    id: "appcleaner",
    name: "AppCleaner",
    currentIcon: 'favicon("freemacsoft.net")',
    simpleIconOptions: ["appcleaner", "macos", "apple"],
    faviconOptions: ["freemacsoft.net", "www.freemacsoft.net"]
  },
  {
    id: "monitorcontrol",
    name: "MonitorControl",
    currentIcon: 'favicon("monitorcontrol.app")',
    simpleIconOptions: ["monitorcontrol"],
    faviconOptions: ["monitorcontrol.app", "github.com"]
  },
  {
    id: "coconutbattery",
    name: "coconutBattery",
    currentIcon: 'favicon("www.coconut-flavour.com")',
    simpleIconOptions: ["coconutbattery", "apple", "macos"],
    faviconOptions: ["www.coconut-flavour.com", "coconut-flavour.com"]
  },
  {
    id: "principle",
    name: "Principle",
    currentIcon: 'favicon("principleformac.com")',
    simpleIconOptions: ["principle", "framer", "invision", "protopie"],
    faviconOptions: ["principleformac.com", "www.principleformac.com"]
  },
  {
    id: "jq",
    name: "jq",
    currentIcon: 'favicon("jqlang.org")',
    simpleIconOptions: ["jq", "json"],
    faviconOptions: ["jqlang.org", "jqlang.github.io", "stedolan.github.io"]
  },
];

async function checkSimpleIcon(name) {
  const url = `https://cdn.simpleicons.org/${name}`;
  try {
    const response = await fetch(url, { method: "HEAD" });
    return { name, url, ok: response.ok, type: "simpleIcon" };
  } catch (error) {
    return { name, url, ok: false, type: "simpleIcon" };
  }
}

async function checkFavicon(domain) {
  const url = `https://icons.duckduckgo.com/ip3/${domain}.ico`;
  try {
    const response = await fetch(url, { method: "HEAD" });
    return { domain, url, ok: response.ok, type: "favicon" };
  } catch (error) {
    return { domain, url, ok: false, type: "favicon" };
  }
}

async function findWorkingIcon(app) {
  console.log(`\n🔍 ${app.name} (${app.id})`);
  console.log(`   Current: ${app.currentIcon}`);

  // Check Simple Icons first
  for (const iconName of app.simpleIconOptions) {
    const result = await checkSimpleIcon(iconName);
    if (result.ok) {
      console.log(`   ✅ Found: simpleIcon("${iconName}")`);
      return { ...app, solution: `simpleIcon("${iconName}")`, solutionType: "simpleIcon", iconName };
    }
  }

  // Check Favicons
  for (const domain of app.faviconOptions) {
    const result = await checkFavicon(domain);
    if (result.ok) {
      console.log(`   ✅ Found: favicon("${domain}")`);
      return { ...app, solution: `favicon("${domain}")`, solutionType: "favicon", domain };
    }
  }

  console.log(`   ❌ No working icon found`);
  return { ...app, solution: null };
}

async function main() {
  console.log("🔧 Finding working icons for apps with broken favicons...");

  const results = [];

  for (const app of BROKEN_APPS) {
    const result = await findWorkingIcon(app);
    results.push(result);
  }

  console.log("\n" + "=".repeat(70));
  console.log("📊 SUMMARY - Changes needed in apps.ts");
  console.log("=".repeat(70));

  const fixed = results.filter(r => r.solution);
  const broken = results.filter(r => !r.solution);

  if (fixed.length > 0) {
    console.log("\n✅ CAN BE FIXED:");
    fixed.forEach(r => {
      console.log(`   ${r.name}: ${r.currentIcon} → ${r.solution}`);
    });
  }

  if (broken.length > 0) {
    console.log("\n❌ NEED MANUAL ATTENTION (no automatic solution found):");
    broken.forEach(r => {
      console.log(`   ${r.name}: Consider using a generic icon or custom solution`);
    });
  }

  // Output code changes
  console.log("\n" + "=".repeat(70));
  console.log("📝 CODE CHANGES");
  console.log("=".repeat(70));

  fixed.forEach(r => {
    console.log(`\n// ${r.name}`);
    console.log(`iconUrl: ${r.solution},`);
  });
}

main().catch(console.error);

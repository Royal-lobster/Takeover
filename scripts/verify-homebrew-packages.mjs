#!/usr/bin/env node

/**
 * Script to verify which Homebrew packages are casks vs formulas
 * Queries Homebrew API to determine package type and updates apps.ts
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const APPS_FILE = path.join(__dirname, "../src/lib/data/apps.ts");

// Homebrew API endpoints
const BREW_FORMULA_API = "https://formulae.brew.sh/api/formula.json";
const BREW_CASK_API = "https://formulae.brew.sh/api/cask.json";

async function fetchBrewData() {
  console.log("📦 Fetching Homebrew formula and cask data...\n");

  try {
    const [formulasRes, casksRes] = await Promise.all([
      fetch(BREW_FORMULA_API),
      fetch(BREW_CASK_API),
    ]);

    if (!formulasRes.ok || !casksRes.ok) {
      throw new Error("Failed to fetch Homebrew data");
    }

    const formulas = await formulasRes.json();
    const casks = await casksRes.json();

    // Create lookup objects
    const formulaNames = new Set(formulas.map((f) => f.name));
    const caskNames = new Set(casks.map((c) => c.token));

    return { formulaNames, caskNames };
  } catch (error) {
    console.error("❌ Error fetching Homebrew data:", error.message);
    process.exit(1);
  }
}

function extractBrewNames(appsContent) {
  const brewNameRegex = /brewName:\s*"([^"]+)"/g;
  const brewNames = new Set();
  let match = brewNameRegex.exec(appsContent);

  while (match !== null) {
    brewNames.add(match[1]);
    match = brewNameRegex.exec(appsContent);
  }

  return brewNames;
}

function verifyPackages(brewNames, formulaNames, caskNames) {
  const results = {
    verified: [],
    unverified: [],
    casks: [],
    formulas: [],
  };

  for (const brewName of brewNames) {
    const isCask = caskNames.has(brewName);
    const isFormula = formulaNames.has(brewName);

    const record = {
      name: brewName,
      isCask,
      isFormula,
    };

    if (isCask || isFormula) {
      results.verified.push(record);
      if (isCask) results.casks.push(brewName);
      if (isFormula) results.formulas.push(brewName);
    } else {
      results.unverified.push(record);
    }
  }

  return results;
}

function generateIsCaskMap(results) {
  const map = {};

  for (const record of results.verified) {
    map[record.name] = record.isCask;
  }

  return map;
}

function updateAppsFile(appsContent, isCaskMap) {
  let updated = appsContent;
  let lines = updated.split("\n");
  let result = [];
  let i = 0;

  while (i < lines.length) {
    let line = lines[i];
    result.push(line);

    // Check if this line contains brewName
    const brewNameMatch = line.match(/brewName:\s*"([^"]+)"/);
    if (brewNameMatch) {
      const brewName = brewNameMatch[1];
      const isCask = isCaskMap[brewName];

      if (isCask !== undefined) {
        // Look ahead to find where to insert isCask
        let j = i + 1;
        let foundIconUrl = false;

        // Skip ahead until we find iconUrl or closing brace
        while (j < lines.length) {
          if (lines[j].includes("iconUrl:")) {
            foundIconUrl = true;
            // Add the iconUrl line
            result.push(lines[j]);
            // Then add isCask on next line if not already present
            if (!lines[j + 1].includes("isCask:")) {
              result.push(`\t\tisCask: ${isCask},`);
            } else if (lines[j + 1].includes("isCask:")) {
              // Update existing isCask
              result.push(
                lines[j + 1].replace(
                  /isCask:\s*(true|false)/,
                  `isCask: ${isCask}`,
                ),
              );
            }
            i = j + 1;
            break;
          } else if (lines[j].includes("},")) {
            // End of object without iconUrl, insert before closing
            result.push(`\t\tisCask: ${isCask},`);
            i = j - 1;
            break;
          }
          result.push(lines[j]);
          j++;
        }
      }
    }
    i++;
  }

  return result.join("\n");
}

function printReport(results) {
  console.log("\n📊 Verification Report:\n");
  console.log(`✅ Verified: ${results.verified.length}`);
  console.log(`   - Casks: ${results.casks.length}`);
  console.log(`   - Formulas: ${results.formulas.length}`);
  console.log(`❓ Unverified: ${results.unverified.length}\n`);

  if (results.unverified.length > 0) {
    console.log("⚠️  Packages not found in Homebrew:");
    results.unverified.forEach((pkg) => {
      console.log(`   - ${pkg.name}`);
    });
    console.log();
  }

  console.log("📦 Casks:");
  results.casks.forEach((name) => console.log(`   - ${name}`));

  console.log("\n🔧 Formulas:");
  results.formulas.forEach((name) => console.log(`   - ${name}`));
}

async function main() {
  console.log("🍺 Homebrew Package Verifier\n");
  console.log("=".repeat(50) + "\n");

  // Fetch Homebrew data
  const { formulaNames, caskNames } = await fetchBrewData();

  // Read apps.ts
  const appsContent = fs.readFileSync(APPS_FILE, "utf-8");

  // Extract brew names
  const brewNames = extractBrewNames(appsContent);
  console.log(`Found ${brewNames.size} unique brew packages to verify.\n`);

  // Verify packages
  const results = verifyPackages(brewNames, formulaNames, caskNames);

  // Print report
  printReport(results);

  // Generate isCask map
  const isCaskMap = generateIsCaskMap(results);

  // Update apps.ts with isCask values
  console.log("\n" + "=".repeat(50));
  console.log("\n📝 Updating apps.ts with isCask property...\n");

  const updatedContent = updateAppsFile(appsContent, isCaskMap);
  fs.writeFileSync(APPS_FILE, updatedContent);

  console.log("✅ Successfully updated apps.ts!");
  console.log(
    "\nNow you should update the generateBrewCommand function to use the isCask property.\n",
  );
}

main().catch((error) => {
  console.error("❌ Error:", error);
  process.exit(1);
});

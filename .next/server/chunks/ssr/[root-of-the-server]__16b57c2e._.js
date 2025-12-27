module.exports = [
"[project]/.next-internal/server/app/(landing)/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/lib/schema.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppCategoryEnum",
    ()=>AppCategoryEnum,
    "AppSchema",
    ()=>AppSchema,
    "CATEGORIES",
    ()=>CATEGORIES
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$2$2e$1$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.2.1/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
;
const AppCategoryEnum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$2$2e$1$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'browsers',
    'development',
    'productivity',
    'communication',
    'media',
    'utilities',
    'security',
    'design',
    'cli',
    'languages',
    'package-managers'
]);
const AppSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$2$2e$1$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$2$2e$1$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$2$2e$1$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    brewName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$2$2e$1$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    category: AppCategoryEnum,
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$2$2e$1$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    iconUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$2$2e$1$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    isCask: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$2$2e$1$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional(),
    invertInDark: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$2$2e$1$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional()
});
const CATEGORIES = [
    {
        id: AppCategoryEnum.enum.browsers,
        label: 'Browsers'
    },
    {
        id: AppCategoryEnum.enum.development,
        label: 'Development'
    },
    {
        id: AppCategoryEnum.enum.productivity,
        label: 'Productivity'
    },
    {
        id: AppCategoryEnum.enum.communication,
        label: 'Communication'
    },
    {
        id: AppCategoryEnum.enum.media,
        label: 'Media'
    },
    {
        id: AppCategoryEnum.enum.utilities,
        label: 'Utilities'
    },
    {
        id: AppCategoryEnum.enum.security,
        label: 'Security'
    },
    {
        id: AppCategoryEnum.enum.design,
        label: 'Design'
    },
    {
        id: AppCategoryEnum.enum.cli,
        label: 'CLI Tools'
    },
    {
        id: AppCategoryEnum.enum.languages,
        label: 'Languages'
    },
    {
        id: AppCategoryEnum.enum['package-managers'],
        label: 'Package Managers'
    }
];
}),
"[project]/lib/helpers/icons.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "favicon",
    ()=>favicon,
    "simpleIcon",
    ()=>simpleIcon
]);
const simpleIcon = (name)=>`https://cdn.simpleicons.org/${name.toLowerCase().replace(/\s+/g, '')}`;
const favicon = (domain)=>`https://icons.duckduckgo.com/ip3/${domain}.ico`;
}),
"[project]/lib/data/apps.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "APPS",
    ()=>APPS,
    "APPS_BY_CATEGORY",
    ()=>APPS_BY_CATEGORY,
    "generateBrewCommand",
    ()=>generateBrewCommand,
    "getAppsByCategory",
    ()=>getAppsByCategory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/schema.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/helpers/icons.ts [app-rsc] (ecmascript)");
;
;
const BROWSER_APPS = [
    {
        id: 'chrome',
        name: 'Google Chrome',
        brewName: 'google-chrome',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.browsers,
        description: 'Fast, secure web browser by Google',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('googlechrome'),
        isCask: true
    },
    {
        id: 'firefox',
        name: 'Firefox',
        brewName: 'firefox',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.browsers,
        description: 'Privacy-focused browser by Mozilla',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('firefox'),
        isCask: true
    },
    {
        id: 'brave',
        name: 'Brave',
        brewName: 'brave-browser',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.browsers,
        description: 'Privacy-first browser with built-in ad blocker',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('brave'),
        isCask: true
    },
    {
        id: 'arc',
        name: 'Arc',
        brewName: 'arc',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.browsers,
        description: 'The browser that reimagines web browsing',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('arc'),
        isCask: true
    },
    {
        id: 'opera',
        name: 'Opera',
        brewName: 'opera',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.browsers,
        description: 'Feature-rich browser with built-in VPN',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('opera'),
        isCask: true
    },
    {
        id: 'edge',
        name: 'Microsoft Edge',
        brewName: 'microsoft-edge',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.browsers,
        description: 'Chromium-based browser by Microsoft',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('www.microsoft.com'),
        isCask: true
    },
    {
        id: 'vivaldi',
        name: 'Vivaldi',
        brewName: 'vivaldi',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.browsers,
        description: 'Highly customizable browser for power users',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('vivaldi'),
        isCask: true
    },
    {
        id: 'tor-browser',
        name: 'Tor Browser',
        brewName: 'tor-browser',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.browsers,
        description: 'Privacy browser using Tor network',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('torbrowser'),
        isCask: true
    },
    {
        id: 'orion',
        name: 'Orion',
        brewName: 'orion',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.browsers,
        description: 'WebKit browser with Chrome/Firefox extension support',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('browser.kagi.com'),
        isCask: true
    }
];
const DEVELOPMENT_APPS = [
    {
        id: 'vscode',
        name: 'Visual Studio Code',
        brewName: 'visual-studio-code',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'Lightweight but powerful source code editor',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('code.visualstudio.com'),
        isCask: true
    },
    {
        id: 'cursor',
        name: 'Cursor',
        brewName: 'cursor',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'AI-first code editor built for pair programming',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('cursor'),
        isCask: true,
        invertInDark: true
    },
    {
        id: 'zed',
        name: 'Zed',
        brewName: 'zed',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'High-performance multiplayer code editor',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('zed.dev'),
        isCask: true
    },
    {
        id: 'iterm2',
        name: 'iTerm2',
        brewName: 'iterm2',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'Terminal emulator for macOS',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('iterm2'),
        isCask: true,
        invertInDark: true
    },
    {
        id: 'warp',
        name: 'Warp',
        brewName: 'warp',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'Modern, Rust-based terminal with AI',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('warp'),
        isCask: true
    },
    {
        id: 'alacritty',
        name: 'Alacritty',
        brewName: 'alacritty',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'GPU-accelerated terminal emulator',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('alacritty'),
        isCask: true
    },
    {
        id: 'kitty',
        name: 'Kitty',
        brewName: 'kitty',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'Fast, feature-rich GPU terminal',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('sw.kovidgoyal.net'),
        isCask: true
    },
    {
        id: 'docker',
        name: 'Docker Desktop',
        brewName: 'docker',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'Container platform for developers',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('docker'),
        isCask: false
    },
    {
        id: 'github-desktop',
        name: 'GitHub Desktop',
        brewName: 'github',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'Git client by GitHub',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('github'),
        isCask: true,
        invertInDark: true
    },
    {
        id: 'sourcetree',
        name: 'Sourcetree',
        brewName: 'sourcetree',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'Free Git client by Atlassian',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('sourcetree'),
        isCask: true
    },
    {
        id: 'fork',
        name: 'Fork',
        brewName: 'fork',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'Fast and friendly Git client',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('git'),
        isCask: true
    },
    {
        id: 'sublime-text',
        name: 'Sublime Text',
        brewName: 'sublime-text',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'Sophisticated text editor for code',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('sublimetext'),
        isCask: true
    },
    {
        id: 'sublime-merge',
        name: 'Sublime Merge',
        brewName: 'sublime-merge',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'Git client from Sublime HQ',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('sublimetext'),
        isCask: true
    },
    {
        id: 'postman',
        name: 'Postman',
        brewName: 'postman',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'API platform for building and using APIs',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('postman'),
        isCask: true
    },
    {
        id: 'insomnia',
        name: 'Insomnia',
        brewName: 'insomnia',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'Open-source API client',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('insomnia'),
        isCask: true
    },
    {
        id: 'httpie',
        name: 'HTTPie',
        brewName: 'httpie',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'User-friendly HTTP client',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('httpie'),
        isCask: false
    },
    {
        id: 'tableplus',
        name: 'TablePlus',
        brewName: 'tableplus',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'Modern database management GUI',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('tableplus.com'),
        isCask: true
    },
    {
        id: 'dbeaver',
        name: 'DBeaver',
        brewName: 'dbeaver-community',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'Universal database tool',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('dbeaver'),
        isCask: true,
        invertInDark: true
    },
    {
        id: 'sequel-ace',
        name: 'Sequel Ace',
        brewName: 'sequel-ace',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'MySQL/MariaDB database manager',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('mysql'),
        isCask: true
    },
    {
        id: 'android-studio',
        name: 'Android Studio',
        brewName: 'android-studio',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'Official IDE for Android development',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('androidstudio'),
        isCask: true
    },
    {
        id: 'jetbrains-toolbox',
        name: 'JetBrains Toolbox',
        brewName: 'jetbrains-toolbox',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'Manage JetBrains IDEs',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('jetbrains'),
        isCask: true,
        invertInDark: true
    },
    {
        id: 'intellij-idea-ce',
        name: 'IntelliJ IDEA CE',
        brewName: 'intellij-idea-ce',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'Java IDE by JetBrains',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('intellijidea'),
        isCask: true,
        invertInDark: true
    },
    {
        id: 'pycharm-ce',
        name: 'PyCharm CE',
        brewName: 'pycharm-ce',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'Python IDE by JetBrains',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('pycharm'),
        isCask: true,
        invertInDark: true
    },
    {
        id: 'webstorm',
        name: 'WebStorm',
        brewName: 'webstorm',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'JavaScript IDE by JetBrains',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('webstorm'),
        isCask: true,
        invertInDark: true
    },
    {
        id: 'ngrok',
        name: 'ngrok',
        brewName: 'ngrok',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'Secure tunnels to localhost',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('ngrok'),
        isCask: true,
        invertInDark: true
    },
    {
        id: 'proxyman',
        name: 'Proxyman',
        brewName: 'proxyman',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'Modern HTTP debugging proxy',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('proxyman.com'),
        isCask: true
    },
    {
        id: 'charles',
        name: 'Charles',
        brewName: 'charles',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'HTTP proxy and monitor',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('charles'),
        isCask: true
    },
    {
        id: 'devtoys',
        name: 'DevToys',
        brewName: 'devtoys',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'Swiss Army knife for developers',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('devtoys.app'),
        isCask: true
    }
];
const PRODUCTIVITY_APPS = [
    {
        id: 'notion',
        name: 'Notion',
        brewName: 'notion',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.productivity,
        description: 'All-in-one workspace for notes and docs',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('notion'),
        isCask: true,
        invertInDark: true
    },
    {
        id: 'obsidian',
        name: 'Obsidian',
        brewName: 'obsidian',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.productivity,
        description: 'Private knowledge base with local Markdown files',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('obsidian'),
        isCask: true
    },
    {
        id: 'logseq',
        name: 'Logseq',
        brewName: 'logseq',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.productivity,
        description: 'Privacy-first outliner and knowledge base',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('logseq.com'),
        isCask: true
    },
    {
        id: 'craft',
        name: 'Craft',
        brewName: 'craft',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.productivity,
        description: 'Beautiful document editor for Mac',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('craft.do'),
        isCask: true
    },
    {
        id: 'raycast',
        name: 'Raycast',
        brewName: 'raycast',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.productivity,
        description: 'Blazingly fast productivity launcher',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('raycast'),
        isCask: true
    },
    {
        id: 'alfred',
        name: 'Alfred',
        brewName: 'alfred',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.productivity,
        description: 'Productivity app with custom workflows',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('alfred'),
        isCask: true
    },
    {
        id: 'rectangle',
        name: 'Rectangle',
        brewName: 'rectangle',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.productivity,
        description: 'Window management for macOS',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('rectangleapp.com'),
        isCask: true
    },
    {
        id: 'alt-tab',
        name: 'AltTab',
        brewName: 'alt-tab',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.productivity,
        description: 'Windows-style Alt+Tab window switcher',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('alt-tab-macos.netlify.app'),
        isCask: true
    },
    {
        id: 'maccy',
        name: 'Maccy',
        brewName: 'maccy',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.productivity,
        description: 'Lightweight clipboard manager',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('maccy.app'),
        isCask: true
    },
    {
        id: 'shottr',
        name: 'Shottr',
        brewName: 'shottr',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.productivity,
        description: 'Screenshot tool with annotations',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('shottr.cc'),
        isCask: true
    },
    {
        id: 'cleanshot',
        name: 'CleanShot X',
        brewName: 'cleanshot',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.productivity,
        description: 'Advanced screenshot and recording tool',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('cleanshot.com'),
        isCask: true
    },
    {
        id: 'dropzone',
        name: 'Dropzone',
        brewName: 'dropzone',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.productivity,
        description: 'Drag and drop file actions',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('aptonic.com'),
        isCask: true
    },
    {
        id: 'numi',
        name: 'Numi',
        brewName: 'numi',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.productivity,
        description: 'Beautiful calculator app',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('numi.app'),
        isCask: true
    },
    {
        id: 'cheatsheet',
        name: 'CheatSheet',
        brewName: 'cheatsheet',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.productivity,
        description: 'Show all keyboard shortcuts',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('cheatsheetapp.com'),
        isCask: true
    },
    {
        id: '1password',
        name: '1Password',
        brewName: '1password',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.productivity,
        description: 'Password manager for families and businesses',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('1password'),
        isCask: true
    },
    {
        id: 'bitwarden',
        name: 'Bitwarden',
        brewName: 'bitwarden',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.productivity,
        description: 'Open-source password manager',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('bitwarden'),
        isCask: true
    },
    {
        id: 'todoist',
        name: 'Todoist',
        brewName: 'todoist-app',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.productivity,
        description: 'Task manager and to-do list app',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('todoist'),
        isCask: true
    },
    {
        id: 'ticktick',
        name: 'TickTick',
        brewName: 'ticktick',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.productivity,
        description: 'To-do list with calendar and habits',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('ticktick'),
        isCask: true
    },
    {
        id: 'linear',
        name: 'Linear',
        brewName: 'linear-linear',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.productivity,
        description: 'Modern issue tracking for teams',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('linear'),
        isCask: true
    },
    {
        id: 'fantastical',
        name: 'Fantastical',
        brewName: 'fantastical',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.productivity,
        description: 'Calendar app with natural language input',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('flexibits.com'),
        isCask: true
    },
    {
        id: 'grammarly',
        name: 'Grammarly Desktop',
        brewName: 'grammarly-desktop',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.productivity,
        description: 'Writing assistant for clear communication',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('grammarly'),
        isCask: true
    }
];
const COMMUNICATION_APPS = [
    {
        id: 'slack',
        name: 'Slack',
        brewName: 'slack',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.communication,
        description: 'Business communication platform',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('slack'),
        isCask: true
    },
    {
        id: 'discord',
        name: 'Discord',
        brewName: 'discord',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.communication,
        description: 'Voice, video, and text chat platform',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('discord'),
        isCask: true
    },
    {
        id: 'zoom',
        name: 'Zoom',
        brewName: 'zoom',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.communication,
        description: 'Video conferencing platform',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('zoom'),
        isCask: true
    },
    {
        id: 'telegram',
        name: 'Telegram',
        brewName: 'telegram',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.communication,
        description: 'Cloud-based messaging app',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('telegram'),
        isCask: true
    },
    {
        id: 'whatsapp',
        name: 'WhatsApp',
        brewName: 'whatsapp',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.communication,
        description: 'Messaging and calling app',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('whatsapp'),
        isCask: true
    },
    {
        id: 'signal',
        name: 'Signal',
        brewName: 'signal',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.communication,
        description: 'Private messenger with end-to-end encryption',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('signal'),
        isCask: true
    },
    {
        id: 'microsoft-teams',
        name: 'Microsoft Teams',
        brewName: 'microsoft-teams',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.communication,
        description: 'Team collaboration platform',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('www.microsoft.com'),
        isCask: true
    },
    {
        id: 'webex',
        name: 'Webex',
        brewName: 'webex',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.communication,
        description: 'Video conferencing by Cisco',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('webex'),
        isCask: true,
        invertInDark: true
    },
    {
        id: 'skype',
        name: 'Skype',
        brewName: 'skype',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.communication,
        description: 'Video calling and messaging',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('www.skype.com'),
        isCask: true
    },
    {
        id: 'element',
        name: 'Element',
        brewName: 'element',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.communication,
        description: 'Decentralized Matrix messenger',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('element'),
        isCask: true
    },
    {
        id: 'mailspring',
        name: 'Mailspring',
        brewName: 'mailspring',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.communication,
        description: 'Beautiful email client',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('getmailspring.com'),
        isCask: true
    },
    {
        id: 'spark',
        name: 'Spark',
        brewName: 'spark',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.communication,
        description: 'Smart email client by Readdle',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('www.shadowlab.org'),
        isCask: false
    }
];
const MEDIA_APPS = [
    {
        id: 'spotify',
        name: 'Spotify',
        brewName: 'spotify',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.media,
        description: 'Music streaming service',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('spotify'),
        isCask: true
    },
    {
        id: 'vlc',
        name: 'VLC',
        brewName: 'vlc',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.media,
        description: 'Free and open-source media player',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('vlcmediaplayer'),
        isCask: true
    },
    {
        id: 'iina',
        name: 'IINA',
        brewName: 'iina',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.media,
        description: 'Modern media player for macOS',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('iina.io'),
        isCask: true
    },
    {
        id: 'plex',
        name: 'Plex',
        brewName: 'plex',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.media,
        description: 'Media server and streaming',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('plex'),
        isCask: true
    },
    {
        id: 'handbrake',
        name: 'HandBrake',
        brewName: 'handbrake',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.media,
        description: 'Open-source video transcoder',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('handbrake.fr'),
        isCask: false
    },
    {
        id: 'obs',
        name: 'OBS Studio',
        brewName: 'obs',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.media,
        description: 'Free streaming and recording software',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('obsstudio'),
        isCask: true,
        invertInDark: true
    },
    {
        id: 'streamlabs',
        name: 'Streamlabs Desktop',
        brewName: 'streamlabs',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.media,
        description: 'Streaming software with alerts',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('streamlabs'),
        isCask: true
    },
    {
        id: 'audacity',
        name: 'Audacity',
        brewName: 'audacity',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.media,
        description: 'Free audio editor and recorder',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('audacity'),
        isCask: true
    },
    {
        id: 'steam',
        name: 'Steam',
        brewName: 'steam',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.media,
        description: 'Gaming platform by Valve',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('steam'),
        isCask: true,
        invertInDark: true
    },
    {
        id: 'epic-games',
        name: 'Epic Games Launcher',
        brewName: 'epic-games',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.media,
        description: 'Epic Games store and launcher',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('epicgames'),
        isCask: true,
        invertInDark: true
    },
    {
        id: 'gog-galaxy',
        name: 'GOG Galaxy',
        brewName: 'gog-galaxy',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.media,
        description: 'DRM-free game launcher',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('www.gog.com'),
        isCask: true
    },
    {
        id: 'downie',
        name: 'Downie',
        brewName: 'downie',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.media,
        description: 'Video downloader for thousands of sites',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('youtube'),
        isCask: true
    },
    {
        id: 'permute',
        name: 'Permute',
        brewName: 'permute',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.media,
        description: 'Media converter for Mac',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('convertio'),
        isCask: true
    }
];
const UTILITY_APPS = [
    {
        id: 'the-unarchiver',
        name: 'The Unarchiver',
        brewName: 'the-unarchiver',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'Archive extraction tool',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('theunarchiver.com'),
        isCask: true
    },
    {
        id: 'keka',
        name: 'Keka',
        brewName: 'keka',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'macOS file archiver',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('www.keka.io'),
        isCask: true
    },
    {
        id: 'appcleaner',
        name: 'AppCleaner',
        brewName: 'appcleaner',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'Thoroughly uninstall apps',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('freemacsoft.net'),
        isCask: true
    },
    {
        id: 'cleanmymac',
        name: 'CleanMyMac X',
        brewName: 'cleanmymac',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'Mac cleaning and optimization tool',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('macpaw.com'),
        isCask: true
    },
    {
        id: 'daisydisk',
        name: 'DaisyDisk',
        brewName: 'daisydisk',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'Visualize disk space usage',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('daisydiskapp.com'),
        isCask: true
    },
    {
        id: 'stats',
        name: 'Stats',
        brewName: 'stats',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'System monitor in your menu bar',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('exelban.github.io'),
        isCask: true
    },
    {
        id: 'istatmenus',
        name: 'iStat Menus',
        brewName: 'istat-menus',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'Advanced system monitor',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('bjango.com'),
        isCask: true
    },
    {
        id: 'aldente',
        name: 'AlDente',
        brewName: 'aldente',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'MacBook battery charge limiter',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('apphousekitchen.com'),
        isCask: true
    },
    {
        id: 'karabiner-elements',
        name: 'Karabiner-Elements',
        brewName: 'karabiner-elements',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'Keyboard customizer for macOS',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('karabiner-elements.pqrs.org'),
        isCask: true
    },
    {
        id: 'bartender',
        name: 'Bartender',
        brewName: 'bartender',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'Organize your menu bar icons',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('www.macbartender.com'),
        isCask: true
    },
    {
        id: 'ice',
        name: 'Ice',
        brewName: 'jordanbaird-ice',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'Free menu bar manager',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('macos'),
        isCask: true,
        invertInDark: true
    },
    {
        id: 'hiddenbar',
        name: 'Hidden Bar',
        brewName: 'hiddenbar',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'Hide menu bar items',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('superbits.co'),
        isCask: true
    },
    {
        id: 'monitorcontrol',
        name: 'MonitorControl',
        brewName: 'monitorcontrol',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'Control external display brightness',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('monitorcontrol.app'),
        isCask: true
    },
    {
        id: 'lunar',
        name: 'Lunar',
        brewName: 'lunar',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'Intelligent adaptive brightness',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('lunar.fyi'),
        isCask: true
    },
    {
        id: 'flux',
        name: 'f.lux',
        brewName: 'flux',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'Adjusts display color for better sleep',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('flux'),
        isCask: false
    },
    {
        id: 'coconutbattery',
        name: 'coconutBattery',
        brewName: 'coconutbattery',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'Battery health monitor',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('www.coconut-flavour.com'),
        isCask: true
    },
    {
        id: 'suspicious-package',
        name: 'Suspicious Package',
        brewName: 'suspicious-package',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'Inspect macOS installer packages',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('macos'),
        isCask: true,
        invertInDark: true
    },
    {
        id: 'onyx',
        name: 'OnyX',
        brewName: 'onyx',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'System maintenance and optimization',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('macos'),
        isCask: true,
        invertInDark: true
    },
    {
        id: 'transmit',
        name: 'Transmit',
        brewName: 'transmit',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'FTP/SFTP client by Panic',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('panic.com'),
        isCask: true
    },
    {
        id: 'cyberduck',
        name: 'Cyberduck',
        brewName: 'cyberduck',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'FTP, SFTP, and cloud storage browser',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('cyberduck.io'),
        isCask: true
    },
    {
        id: 'syncthing',
        name: 'Syncthing',
        brewName: 'syncthing',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'Continuous file synchronization',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('syncthing'),
        isCask: false
    },
    {
        id: 'mountain-duck',
        name: 'Mountain Duck',
        brewName: 'mountain-duck',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'Mount cloud storage as disk',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('mountainduck.io'),
        isCask: true
    }
];
const SECURITY_APPS = [
    {
        id: 'nordvpn',
        name: 'NordVPN',
        brewName: 'nordvpn',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.security,
        description: 'VPN service for secure browsing',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('nordvpn'),
        isCask: true
    },
    {
        id: 'mullvad-vpn',
        name: 'Mullvad VPN',
        brewName: 'mullvad-vpn',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.security,
        description: 'Privacy-focused VPN service',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('mullvad'),
        isCask: true
    },
    {
        id: 'protonvpn',
        name: 'ProtonVPN',
        brewName: 'protonvpn',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.security,
        description: 'Secure VPN by Proton',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('protonvpn'),
        isCask: true
    },
    {
        id: 'expressvpn',
        name: 'ExpressVPN',
        brewName: 'expressvpn',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.security,
        description: 'Fast and secure VPN',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('expressvpn'),
        isCask: true
    },
    {
        id: 'tunnelblick',
        name: 'Tunnelblick',
        brewName: 'tunnelblick',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.security,
        description: 'Free OpenVPN client',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('openvpn'),
        isCask: true
    },
    {
        id: 'wireguard',
        name: 'WireGuard',
        brewName: 'wireguard-tools',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.security,
        description: 'Fast, modern VPN protocol',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('wireguard'),
        isCask: false
    },
    {
        id: 'lulu',
        name: 'LuLu',
        brewName: 'lulu',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.security,
        description: 'Free macOS firewall',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('objective-see.org'),
        isCask: true
    },
    {
        id: 'little-snitch',
        name: 'Little Snitch',
        brewName: 'little-snitch',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.security,
        description: 'Network monitor and firewall',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('www.obdev.at'),
        isCask: true
    },
    {
        id: 'micro-snitch',
        name: 'Micro Snitch',
        brewName: 'micro-snitch',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.security,
        description: 'Microphone and camera monitor',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('www.obdev.at'),
        isCask: true
    },
    {
        id: 'oversight',
        name: 'OverSight',
        brewName: 'oversight',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.security,
        description: 'Monitor mic and webcam access',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('objective-see.org'),
        isCask: true
    },
    {
        id: 'knockknock',
        name: 'KnockKnock',
        brewName: 'knockknock',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.security,
        description: "See what's persistently installed",
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('macos'),
        isCask: true,
        invertInDark: true
    },
    {
        id: 'blockblock',
        name: 'BlockBlock',
        brewName: 'blockblock',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.security,
        description: 'Monitor persistent components',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('macos'),
        isCask: true,
        invertInDark: true
    },
    {
        id: 'gpg-suite',
        name: 'GPG Suite',
        brewName: 'gpg-suite',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.security,
        description: 'Email and file encryption',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('gnuprivacyguard'),
        isCask: true
    },
    {
        id: 'keepassxc',
        name: 'KeePassXC',
        brewName: 'keepassxc',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.security,
        description: 'Cross-platform password manager',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('keepassxc'),
        isCask: true
    }
];
const CLI_APPS = [
    {
        id: 'git',
        name: 'Git',
        brewName: 'git',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Version control system',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('git'),
        isCask: false
    },
    {
        id: 'fzf',
        name: 'fzf',
        brewName: 'fzf',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Command-line fuzzy finder',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('macos'),
        isCask: false,
        invertInDark: true
    },
    {
        id: 'ripgrep',
        name: 'ripgrep',
        brewName: 'ripgrep',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Fast recursive search tool (rg)',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('rust'),
        isCask: false
    },
    {
        id: 'fd',
        name: 'fd',
        brewName: 'fd',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Fast alternative to find',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('rust'),
        isCask: false
    },
    {
        id: 'exa',
        name: 'eza',
        brewName: 'eza',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Modern ls replacement with git integration',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('rust'),
        isCask: false
    },
    {
        id: 'bat',
        name: 'bat',
        brewName: 'bat',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Cat clone with syntax highlighting',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('rust'),
        isCask: false
    },
    {
        id: 'zoxide',
        name: 'zoxide',
        brewName: 'zoxide',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Smarter cd command with directory jumping',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('rust'),
        isCask: false
    },
    {
        id: 'tldr',
        name: 'tldr',
        brewName: 'tldr',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Simplified man pages',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('macos'),
        isCask: false,
        invertInDark: true
    },
    {
        id: 'jq',
        name: 'jq',
        brewName: 'jq',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'JSON query and transformation tool',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('macos'),
        isCask: false,
        invertInDark: true
    },
    {
        id: 'yq',
        name: 'yq',
        brewName: 'yq',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'YAML processor like jq',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('macos'),
        isCask: false,
        invertInDark: true
    },
    {
        id: 'httpie',
        name: 'HTTPie',
        brewName: 'httpie',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'User-friendly HTTP client',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('httpie'),
        isCask: false
    },
    {
        id: 'lazygit',
        name: 'Lazygit',
        brewName: 'lazygit',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Simple TUI for git commands',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('git'),
        isCask: false
    },
    {
        id: 'lazydocker',
        name: 'Lazydocker',
        brewName: 'lazydocker',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Docker/Docker-compose TUI',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('docker'),
        isCask: false
    },
    {
        id: 'nnn',
        name: 'nnn',
        brewName: 'nnn',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Terminal file browser',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('macos'),
        isCask: false,
        invertInDark: true
    },
    {
        id: 'starship',
        name: 'Starship',
        brewName: 'starship',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Cross-shell prompt',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('macos'),
        isCask: false,
        invertInDark: true
    },
    {
        id: 'tmux',
        name: 'tmux',
        brewName: 'tmux',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Terminal multiplexer',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('macos'),
        isCask: false,
        invertInDark: true
    },
    {
        id: 'vim',
        name: 'Vim',
        brewName: 'vim',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Highly configurable text editor',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('vim'),
        isCask: false
    },
    {
        id: 'neovim',
        name: 'Neovim',
        brewName: 'neovim',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Modern vim fork',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('vim'),
        isCask: false
    },
    {
        id: 'ag',
        name: 'The Silver Searcher',
        brewName: 'the_silver_searcher',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Code searching tool (ag)',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('macos'),
        isCask: false,
        invertInDark: true
    },
    {
        id: 'imagemagick',
        name: 'ImageMagick',
        brewName: 'imagemagick',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Image manipulation tool',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('macos'),
        isCask: false,
        invertInDark: true
    },
    {
        id: 'ffmpeg',
        name: 'FFmpeg',
        brewName: 'ffmpeg',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Multimedia framework',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('macos'),
        isCask: false,
        invertInDark: true
    },
    {
        id: 'graphviz',
        name: 'Graphviz',
        brewName: 'graphviz',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Graph visualization software',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('macos'),
        isCask: false,
        invertInDark: true
    },
    {
        id: 'meson',
        name: 'Meson',
        brewName: 'meson',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Build system',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('macos'),
        isCask: false,
        invertInDark: true
    },
    {
        id: 'cmake',
        name: 'CMake',
        brewName: 'cmake',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Cross-platform build system',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('macos'),
        isCask: false,
        invertInDark: true
    }
];
const LANGUAGES_APPS = [
    {
        id: 'node',
        name: 'Node.js',
        brewName: 'node',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.languages,
        description: 'JavaScript runtime',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('nodedotjs'),
        isCask: false
    },
    {
        id: 'python',
        name: 'Python',
        brewName: 'python@3.13',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.languages,
        description: 'Python programming language (3.13)',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('python'),
        isCask: false
    },
    {
        id: 'ruby',
        name: 'Ruby',
        brewName: 'ruby',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.languages,
        description: 'Ruby programming language',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('ruby'),
        isCask: false
    },
    {
        id: 'go',
        name: 'Go',
        brewName: 'go',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.languages,
        description: 'Go programming language',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('go'),
        isCask: false
    },
    {
        id: 'rust',
        name: 'Rust',
        brewName: 'rust',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.languages,
        description: 'Rust programming language',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('rust'),
        isCask: false
    },
    {
        id: 'java',
        name: 'Java',
        brewName: 'openjdk',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.languages,
        description: 'Java programming language',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('java'),
        isCask: false
    },
    {
        id: 'php',
        name: 'PHP',
        brewName: 'php',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.languages,
        description: 'PHP programming language',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('php'),
        isCask: false
    },
    {
        id: 'kotlin',
        name: 'Kotlin',
        brewName: 'kotlin',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.languages,
        description: 'Kotlin programming language',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('kotlin'),
        isCask: false
    },
    {
        id: 'scala',
        name: 'Scala',
        brewName: 'scala',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.languages,
        description: 'Scala programming language',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('scala'),
        isCask: false
    }
];
const DATABASES_APPS = [
    {
        id: 'postgres',
        name: 'PostgreSQL',
        brewName: 'postgresql@18',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Object-relational database (18)',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('postgresql'),
        isCask: false
    },
    {
        id: 'mysql',
        name: 'MySQL',
        brewName: 'mysql',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Relational database management',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('mysql'),
        isCask: false
    },
    {
        id: 'redis',
        name: 'Redis',
        brewName: 'redis',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'In-memory data store',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('redis'),
        isCask: false
    }
];
const PACKAGE_MANAGERS_APPS = [
    {
        id: 'npm',
        name: 'npm',
        brewName: 'npm',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum['package-managers'],
        description: 'Node.js package manager',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('npm'),
        isCask: false
    },
    {
        id: 'pnpm',
        name: 'pnpm',
        brewName: 'pnpm',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum['package-managers'],
        description: 'Fast, disk space efficient npm replacement',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('pnpm'),
        isCask: false
    },
    {
        id: 'yarn',
        name: 'Yarn',
        brewName: 'yarn',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum['package-managers'],
        description: 'Fast, reliable JavaScript package manager',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('yarn'),
        isCask: false
    },
    {
        id: 'bun',
        name: 'Bun',
        brewName: 'bun',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum['package-managers'],
        description: 'Fast all-in-one JavaScript runtime',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('bun'),
        isCask: false
    },
    {
        id: 'uv',
        name: 'uv',
        brewName: 'uv',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum['package-managers'],
        description: 'Fast Python package installer and resolver',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('python'),
        isCask: false
    },
    {
        id: 'pip',
        name: 'pip',
        brewName: 'pip',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum['package-managers'],
        description: 'Python package installer',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('python'),
        isCask: false
    },
    {
        id: 'pipx',
        name: 'pipx',
        brewName: 'pipx',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum['package-managers'],
        description: 'Install and run Python applications in isolation',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('python'),
        isCask: false
    },
    {
        id: 'poetry',
        name: 'Poetry',
        brewName: 'poetry',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum['package-managers'],
        description: 'Python dependency management and packaging',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('poetry'),
        isCask: false
    },
    {
        id: 'cargo',
        name: 'Cargo',
        brewName: 'cargo',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum['package-managers'],
        description: 'Rust package manager',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('rust'),
        isCask: false
    },
    {
        id: 'gems',
        name: 'RubyGems',
        brewName: 'rubygems',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum['package-managers'],
        description: 'Ruby package manager',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('ruby'),
        isCask: false
    },
    {
        id: 'nvm',
        name: 'nvm',
        brewName: 'nvm',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum['package-managers'],
        description: 'Node Version Manager',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('nodedotjs'),
        isCask: false
    },
    {
        id: 'fnm',
        name: 'fnm',
        brewName: 'fnm',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum['package-managers'],
        description: 'Fast Node Manager',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('nodedotjs'),
        isCask: false
    },
    {
        id: 'pyenv',
        name: 'pyenv',
        brewName: 'pyenv',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum['package-managers'],
        description: 'Python version manager',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('python'),
        isCask: false
    },
    {
        id: 'rbenv',
        name: 'rbenv',
        brewName: 'rbenv',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum['package-managers'],
        description: 'Ruby version manager',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('ruby'),
        isCask: false
    },
    {
        id: 'rustup',
        name: 'rustup',
        brewName: 'rustup-init',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum['package-managers'],
        description: 'Rust toolchain installer',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('rust'),
        isCask: false
    },
    {
        id: 'jenv',
        name: 'jenv',
        brewName: 'jenv',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum['package-managers'],
        description: 'Java version manager',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('java'),
        isCask: false
    },
    {
        id: 'gvm',
        name: 'gvm',
        brewName: 'gvm',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum['package-managers'],
        description: 'Go version manager',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('go'),
        isCask: false
    }
];
const DESIGN_APPS = [
    {
        id: 'figma',
        name: 'Figma',
        brewName: 'figma',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.design,
        description: 'Collaborative design tool',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('figma'),
        isCask: true
    },
    {
        id: 'sketch',
        name: 'Sketch',
        brewName: 'sketch',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.design,
        description: 'Digital design toolkit for Mac',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('sketch'),
        isCask: true
    },
    {
        id: 'affinity-designer',
        name: 'Affinity Designer 2',
        brewName: 'affinity-designer',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.design,
        description: 'Professional vector graphics editor',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('affinity.serif.com'),
        isCask: true
    },
    {
        id: 'affinity-photo',
        name: 'Affinity Photo 2',
        brewName: 'affinity-photo',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.design,
        description: 'Professional photo editing',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('affinity.serif.com'),
        isCask: true
    },
    {
        id: 'affinity-publisher',
        name: 'Affinity Publisher 2',
        brewName: 'affinity-publisher',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.design,
        description: 'Professional publishing software',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('affinity.serif.com'),
        isCask: true
    },
    {
        id: 'imageoptim',
        name: 'ImageOptim',
        brewName: 'imageoptim',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.design,
        description: 'Image compression tool',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('imageoptim.com'),
        isCask: true
    },
    {
        id: 'gimp',
        name: 'GIMP',
        brewName: 'gimp',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.design,
        description: 'Free and open-source image editor',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('gimp'),
        isCask: true
    },
    {
        id: 'inkscape',
        name: 'Inkscape',
        brewName: 'inkscape',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.design,
        description: 'Free vector graphics editor',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('inkscape'),
        isCask: true,
        invertInDark: true
    },
    {
        id: 'blender',
        name: 'Blender',
        brewName: 'blender',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.design,
        description: 'Free 3D creation suite',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('blender'),
        isCask: true
    },
    {
        id: 'colorsnapper',
        name: 'ColorSnapper',
        brewName: 'colorsnapper',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.design,
        description: 'Color picker for designers',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('colorsnapper.com'),
        isCask: true
    },
    {
        id: 'sip',
        name: 'Sip',
        brewName: 'sip',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.design,
        description: 'Color picker and palette manager',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('sipapp.io'),
        isCask: false
    },
    {
        id: 'rightfont',
        name: 'RightFont',
        brewName: 'rightfont',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.design,
        description: 'Font manager for designers',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('fontbase'),
        isCask: true
    },
    {
        id: 'iconjar',
        name: 'IconJar',
        brewName: 'iconjar',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.design,
        description: 'Icon organizer for designers',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('geticonjar.com'),
        isCask: true
    },
    {
        id: 'principle',
        name: 'Principle',
        brewName: 'principle',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.design,
        description: 'Animation and prototyping tool',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["favicon"])('principleformac.com'),
        isCask: true
    },
    {
        id: 'framer',
        name: 'Framer',
        brewName: 'framer',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.design,
        description: 'Interactive design tool',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["simpleIcon"])('framer'),
        isCask: true
    }
];
const APPS = [
    ...BROWSER_APPS,
    ...DEVELOPMENT_APPS,
    ...PRODUCTIVITY_APPS,
    ...COMMUNICATION_APPS,
    ...MEDIA_APPS,
    ...UTILITY_APPS,
    ...SECURITY_APPS,
    ...DESIGN_APPS,
    ...CLI_APPS,
    ...LANGUAGES_APPS,
    ...DATABASES_APPS,
    ...PACKAGE_MANAGERS_APPS
];
const APPS_BY_CATEGORY = {
    browsers: BROWSER_APPS,
    development: DEVELOPMENT_APPS,
    productivity: PRODUCTIVITY_APPS,
    communication: COMMUNICATION_APPS,
    media: MEDIA_APPS,
    utilities: UTILITY_APPS,
    security: SECURITY_APPS,
    design: DESIGN_APPS,
    cli: CLI_APPS,
    languages: LANGUAGES_APPS,
    'package-managers': PACKAGE_MANAGERS_APPS
};
function getAppsByCategory(category) {
    const apps = APPS_BY_CATEGORY[category];
    return apps ? [
        ...apps
    ] : [];
}
function generateBrewCommand(appIds) {
    if (appIds.length === 0) return '';
    const apps = appIds.map((id)=>APPS.find((app)=>app.id === id)).filter((app)=>app !== undefined);
    // Separate cask apps from formula apps based on isCask property
    const caskApps = apps.filter((app)=>app.isCask);
    const formulaApps = apps.filter((app)=>!app.isCask);
    const commands = [];
    if (caskApps.length > 0) {
        const caskNames = caskApps.map((app)=>app.brewName).join(' ');
        commands.push(`brew install --cask ${caskNames}`);
    }
    if (formulaApps.length > 0) {
        const formulaNames = formulaApps.map((app)=>app.brewName).join(' ');
        commands.push(`brew install ${formulaNames}`);
    }
    return commands.join(' && ');
}
}),
"[project]/app/(landing)/_components/brew-picker.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "BrewPicker",
    ()=>BrewPicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const BrewPicker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BrewPicker() from the server but BrewPicker is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/(landing)/_components/brew-picker.tsx <module evaluation>", "BrewPicker");
}),
"[project]/app/(landing)/_components/brew-picker.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "BrewPicker",
    ()=>BrewPicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const BrewPicker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BrewPicker() from the server but BrewPicker is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/(landing)/_components/brew-picker.tsx", "BrewPicker");
}),
"[project]/app/(landing)/_components/brew-picker.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$landing$292f$_components$2f$brew$2d$picker$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/(landing)/_components/brew-picker.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$landing$292f$_components$2f$brew$2d$picker$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/(landing)/_components/brew-picker.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$landing$292f$_components$2f$brew$2d$picker$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/(landing)/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$apps$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/apps.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/schema.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$landing$292f$_components$2f$brew$2d$picker$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(landing)/_components/brew-picker.tsx [app-rsc] (ecmascript)");
;
;
;
;
function HomePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$landing$292f$_components$2f$brew$2d$picker$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BrewPicker"], {
        apps: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$apps$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APPS"],
        categories: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CATEGORIES"]
    }, void 0, false, {
        fileName: "[project]/app/(landing)/page.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
}),
"[project]/app/(landing)/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/(landing)/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__16b57c2e._.js.map
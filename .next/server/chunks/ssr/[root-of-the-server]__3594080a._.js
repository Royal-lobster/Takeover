module.exports = [
"[project]/lib/schema.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppCategoryEnum",
    ()=>AppCategoryEnum,
    "AppSchema",
    ()=>AppSchema,
    "CATEGORIES",
    ()=>CATEGORIES
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$2$2e$1$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.2.1/node_modules/zod/v4/classic/external.js [app-ssr] (ecmascript) <export * as z>");
;
const AppCategoryEnum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$2$2e$1$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
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
const AppSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$2$2e$1$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$2$2e$1$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$2$2e$1$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    brewName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$2$2e$1$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    category: AppCategoryEnum,
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$2$2e$1$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    iconUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$2$2e$1$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    isCask: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$2$2e$1$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional(),
    invertInDark: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$2$2e$1$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional()
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
"[project]/lib/helpers/icons.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/data/apps.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/schema.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/helpers/icons.ts [app-ssr] (ecmascript)");
;
;
const BROWSER_APPS = [
    {
        id: 'chrome',
        name: 'Google Chrome',
        brewName: 'google-chrome',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.browsers,
        description: 'Fast, secure web browser by Google',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('googlechrome'),
        isCask: true
    },
    {
        id: 'firefox',
        name: 'Firefox',
        brewName: 'firefox',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.browsers,
        description: 'Privacy-focused browser by Mozilla',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('firefox'),
        isCask: true
    },
    {
        id: 'brave',
        name: 'Brave',
        brewName: 'brave-browser',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.browsers,
        description: 'Privacy-first browser with built-in ad blocker',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('brave'),
        isCask: true
    },
    {
        id: 'arc',
        name: 'Arc',
        brewName: 'arc',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.browsers,
        description: 'The browser that reimagines web browsing',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('arc'),
        isCask: true
    },
    {
        id: 'opera',
        name: 'Opera',
        brewName: 'opera',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.browsers,
        description: 'Feature-rich browser with built-in VPN',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('opera'),
        isCask: true
    },
    {
        id: 'edge',
        name: 'Microsoft Edge',
        brewName: 'microsoft-edge',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.browsers,
        description: 'Chromium-based browser by Microsoft',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('www.microsoft.com'),
        isCask: true
    },
    {
        id: 'vivaldi',
        name: 'Vivaldi',
        brewName: 'vivaldi',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.browsers,
        description: 'Highly customizable browser for power users',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('vivaldi'),
        isCask: true
    },
    {
        id: 'tor-browser',
        name: 'Tor Browser',
        brewName: 'tor-browser',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.browsers,
        description: 'Privacy browser using Tor network',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('torbrowser'),
        isCask: true
    },
    {
        id: 'orion',
        name: 'Orion',
        brewName: 'orion',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.browsers,
        description: 'WebKit browser with Chrome/Firefox extension support',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('browser.kagi.com'),
        isCask: true
    }
];
const DEVELOPMENT_APPS = [
    {
        id: 'vscode',
        name: 'Visual Studio Code',
        brewName: 'visual-studio-code',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'Lightweight but powerful source code editor',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('code.visualstudio.com'),
        isCask: true
    },
    {
        id: 'cursor',
        name: 'Cursor',
        brewName: 'cursor',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'AI-first code editor built for pair programming',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('cursor'),
        isCask: true,
        invertInDark: true
    },
    {
        id: 'zed',
        name: 'Zed',
        brewName: 'zed',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'High-performance multiplayer code editor',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('zed.dev'),
        isCask: true
    },
    {
        id: 'iterm2',
        name: 'iTerm2',
        brewName: 'iterm2',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'Terminal emulator for macOS',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('iterm2'),
        isCask: true,
        invertInDark: true
    },
    {
        id: 'warp',
        name: 'Warp',
        brewName: 'warp',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'Modern, Rust-based terminal with AI',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('warp'),
        isCask: true
    },
    {
        id: 'alacritty',
        name: 'Alacritty',
        brewName: 'alacritty',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'GPU-accelerated terminal emulator',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('alacritty'),
        isCask: true
    },
    {
        id: 'kitty',
        name: 'Kitty',
        brewName: 'kitty',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'Fast, feature-rich GPU terminal',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('sw.kovidgoyal.net'),
        isCask: true
    },
    {
        id: 'docker',
        name: 'Docker Desktop',
        brewName: 'docker',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'Container platform for developers',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('docker'),
        isCask: false
    },
    {
        id: 'github-desktop',
        name: 'GitHub Desktop',
        brewName: 'github',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'Git client by GitHub',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('github'),
        isCask: true,
        invertInDark: true
    },
    {
        id: 'sourcetree',
        name: 'Sourcetree',
        brewName: 'sourcetree',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'Free Git client by Atlassian',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('sourcetree'),
        isCask: true
    },
    {
        id: 'fork',
        name: 'Fork',
        brewName: 'fork',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'Fast and friendly Git client',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('git'),
        isCask: true
    },
    {
        id: 'sublime-text',
        name: 'Sublime Text',
        brewName: 'sublime-text',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'Sophisticated text editor for code',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('sublimetext'),
        isCask: true
    },
    {
        id: 'sublime-merge',
        name: 'Sublime Merge',
        brewName: 'sublime-merge',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'Git client from Sublime HQ',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('sublimetext'),
        isCask: true
    },
    {
        id: 'postman',
        name: 'Postman',
        brewName: 'postman',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'API platform for building and using APIs',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('postman'),
        isCask: true
    },
    {
        id: 'insomnia',
        name: 'Insomnia',
        brewName: 'insomnia',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'Open-source API client',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('insomnia'),
        isCask: true
    },
    {
        id: 'httpie',
        name: 'HTTPie',
        brewName: 'httpie',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'User-friendly HTTP client',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('httpie'),
        isCask: false
    },
    {
        id: 'tableplus',
        name: 'TablePlus',
        brewName: 'tableplus',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'Modern database management GUI',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('tableplus.com'),
        isCask: true
    },
    {
        id: 'dbeaver',
        name: 'DBeaver',
        brewName: 'dbeaver-community',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'Universal database tool',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('dbeaver'),
        isCask: true,
        invertInDark: true
    },
    {
        id: 'sequel-ace',
        name: 'Sequel Ace',
        brewName: 'sequel-ace',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'MySQL/MariaDB database manager',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('mysql'),
        isCask: true
    },
    {
        id: 'android-studio',
        name: 'Android Studio',
        brewName: 'android-studio',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'Official IDE for Android development',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('androidstudio'),
        isCask: true
    },
    {
        id: 'jetbrains-toolbox',
        name: 'JetBrains Toolbox',
        brewName: 'jetbrains-toolbox',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'Manage JetBrains IDEs',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('jetbrains'),
        isCask: true,
        invertInDark: true
    },
    {
        id: 'intellij-idea-ce',
        name: 'IntelliJ IDEA CE',
        brewName: 'intellij-idea-ce',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'Java IDE by JetBrains',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('intellijidea'),
        isCask: true,
        invertInDark: true
    },
    {
        id: 'pycharm-ce',
        name: 'PyCharm CE',
        brewName: 'pycharm-ce',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'Python IDE by JetBrains',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('pycharm'),
        isCask: true,
        invertInDark: true
    },
    {
        id: 'webstorm',
        name: 'WebStorm',
        brewName: 'webstorm',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'JavaScript IDE by JetBrains',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('webstorm'),
        isCask: true,
        invertInDark: true
    },
    {
        id: 'ngrok',
        name: 'ngrok',
        brewName: 'ngrok',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'Secure tunnels to localhost',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('ngrok'),
        isCask: true,
        invertInDark: true
    },
    {
        id: 'proxyman',
        name: 'Proxyman',
        brewName: 'proxyman',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'Modern HTTP debugging proxy',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('proxyman.com'),
        isCask: true
    },
    {
        id: 'charles',
        name: 'Charles',
        brewName: 'charles',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'HTTP proxy and monitor',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('charles'),
        isCask: true
    },
    {
        id: 'devtoys',
        name: 'DevToys',
        brewName: 'devtoys',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.development,
        description: 'Swiss Army knife for developers',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('devtoys.app'),
        isCask: true
    }
];
const PRODUCTIVITY_APPS = [
    {
        id: 'notion',
        name: 'Notion',
        brewName: 'notion',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.productivity,
        description: 'All-in-one workspace for notes and docs',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('notion'),
        isCask: true,
        invertInDark: true
    },
    {
        id: 'obsidian',
        name: 'Obsidian',
        brewName: 'obsidian',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.productivity,
        description: 'Private knowledge base with local Markdown files',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('obsidian'),
        isCask: true
    },
    {
        id: 'logseq',
        name: 'Logseq',
        brewName: 'logseq',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.productivity,
        description: 'Privacy-first outliner and knowledge base',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('logseq.com'),
        isCask: true
    },
    {
        id: 'craft',
        name: 'Craft',
        brewName: 'craft',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.productivity,
        description: 'Beautiful document editor for Mac',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('craft.do'),
        isCask: true
    },
    {
        id: 'raycast',
        name: 'Raycast',
        brewName: 'raycast',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.productivity,
        description: 'Blazingly fast productivity launcher',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('raycast'),
        isCask: true
    },
    {
        id: 'alfred',
        name: 'Alfred',
        brewName: 'alfred',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.productivity,
        description: 'Productivity app with custom workflows',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('alfred'),
        isCask: true
    },
    {
        id: 'rectangle',
        name: 'Rectangle',
        brewName: 'rectangle',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.productivity,
        description: 'Window management for macOS',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('rectangleapp.com'),
        isCask: true
    },
    {
        id: 'alt-tab',
        name: 'AltTab',
        brewName: 'alt-tab',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.productivity,
        description: 'Windows-style Alt+Tab window switcher',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('alt-tab-macos.netlify.app'),
        isCask: true
    },
    {
        id: 'maccy',
        name: 'Maccy',
        brewName: 'maccy',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.productivity,
        description: 'Lightweight clipboard manager',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('maccy.app'),
        isCask: true
    },
    {
        id: 'shottr',
        name: 'Shottr',
        brewName: 'shottr',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.productivity,
        description: 'Screenshot tool with annotations',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('shottr.cc'),
        isCask: true
    },
    {
        id: 'cleanshot',
        name: 'CleanShot X',
        brewName: 'cleanshot',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.productivity,
        description: 'Advanced screenshot and recording tool',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('cleanshot.com'),
        isCask: true
    },
    {
        id: 'dropzone',
        name: 'Dropzone',
        brewName: 'dropzone',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.productivity,
        description: 'Drag and drop file actions',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('aptonic.com'),
        isCask: true
    },
    {
        id: 'numi',
        name: 'Numi',
        brewName: 'numi',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.productivity,
        description: 'Beautiful calculator app',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('numi.app'),
        isCask: true
    },
    {
        id: 'cheatsheet',
        name: 'CheatSheet',
        brewName: 'cheatsheet',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.productivity,
        description: 'Show all keyboard shortcuts',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('cheatsheetapp.com'),
        isCask: true
    },
    {
        id: '1password',
        name: '1Password',
        brewName: '1password',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.productivity,
        description: 'Password manager for families and businesses',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('1password'),
        isCask: true
    },
    {
        id: 'bitwarden',
        name: 'Bitwarden',
        brewName: 'bitwarden',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.productivity,
        description: 'Open-source password manager',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('bitwarden'),
        isCask: true
    },
    {
        id: 'todoist',
        name: 'Todoist',
        brewName: 'todoist-app',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.productivity,
        description: 'Task manager and to-do list app',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('todoist'),
        isCask: true
    },
    {
        id: 'ticktick',
        name: 'TickTick',
        brewName: 'ticktick',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.productivity,
        description: 'To-do list with calendar and habits',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('ticktick'),
        isCask: true
    },
    {
        id: 'linear',
        name: 'Linear',
        brewName: 'linear-linear',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.productivity,
        description: 'Modern issue tracking for teams',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('linear'),
        isCask: true
    },
    {
        id: 'fantastical',
        name: 'Fantastical',
        brewName: 'fantastical',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.productivity,
        description: 'Calendar app with natural language input',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('flexibits.com'),
        isCask: true
    },
    {
        id: 'grammarly',
        name: 'Grammarly Desktop',
        brewName: 'grammarly-desktop',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.productivity,
        description: 'Writing assistant for clear communication',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('grammarly'),
        isCask: true
    }
];
const COMMUNICATION_APPS = [
    {
        id: 'slack',
        name: 'Slack',
        brewName: 'slack',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.communication,
        description: 'Business communication platform',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('slack'),
        isCask: true
    },
    {
        id: 'discord',
        name: 'Discord',
        brewName: 'discord',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.communication,
        description: 'Voice, video, and text chat platform',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('discord'),
        isCask: true
    },
    {
        id: 'zoom',
        name: 'Zoom',
        brewName: 'zoom',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.communication,
        description: 'Video conferencing platform',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('zoom'),
        isCask: true
    },
    {
        id: 'telegram',
        name: 'Telegram',
        brewName: 'telegram',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.communication,
        description: 'Cloud-based messaging app',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('telegram'),
        isCask: true
    },
    {
        id: 'whatsapp',
        name: 'WhatsApp',
        brewName: 'whatsapp',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.communication,
        description: 'Messaging and calling app',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('whatsapp'),
        isCask: true
    },
    {
        id: 'signal',
        name: 'Signal',
        brewName: 'signal',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.communication,
        description: 'Private messenger with end-to-end encryption',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('signal'),
        isCask: true
    },
    {
        id: 'microsoft-teams',
        name: 'Microsoft Teams',
        brewName: 'microsoft-teams',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.communication,
        description: 'Team collaboration platform',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('www.microsoft.com'),
        isCask: true
    },
    {
        id: 'webex',
        name: 'Webex',
        brewName: 'webex',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.communication,
        description: 'Video conferencing by Cisco',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('webex'),
        isCask: true,
        invertInDark: true
    },
    {
        id: 'skype',
        name: 'Skype',
        brewName: 'skype',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.communication,
        description: 'Video calling and messaging',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('www.skype.com'),
        isCask: true
    },
    {
        id: 'element',
        name: 'Element',
        brewName: 'element',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.communication,
        description: 'Decentralized Matrix messenger',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('element'),
        isCask: true
    },
    {
        id: 'mailspring',
        name: 'Mailspring',
        brewName: 'mailspring',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.communication,
        description: 'Beautiful email client',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('getmailspring.com'),
        isCask: true
    },
    {
        id: 'spark',
        name: 'Spark',
        brewName: 'spark',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.communication,
        description: 'Smart email client by Readdle',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('www.shadowlab.org'),
        isCask: false
    }
];
const MEDIA_APPS = [
    {
        id: 'spotify',
        name: 'Spotify',
        brewName: 'spotify',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.media,
        description: 'Music streaming service',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('spotify'),
        isCask: true
    },
    {
        id: 'vlc',
        name: 'VLC',
        brewName: 'vlc',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.media,
        description: 'Free and open-source media player',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('vlcmediaplayer'),
        isCask: true
    },
    {
        id: 'iina',
        name: 'IINA',
        brewName: 'iina',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.media,
        description: 'Modern media player for macOS',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('iina.io'),
        isCask: true
    },
    {
        id: 'plex',
        name: 'Plex',
        brewName: 'plex',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.media,
        description: 'Media server and streaming',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('plex'),
        isCask: true
    },
    {
        id: 'handbrake',
        name: 'HandBrake',
        brewName: 'handbrake',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.media,
        description: 'Open-source video transcoder',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('handbrake.fr'),
        isCask: false
    },
    {
        id: 'obs',
        name: 'OBS Studio',
        brewName: 'obs',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.media,
        description: 'Free streaming and recording software',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('obsstudio'),
        isCask: true,
        invertInDark: true
    },
    {
        id: 'streamlabs',
        name: 'Streamlabs Desktop',
        brewName: 'streamlabs',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.media,
        description: 'Streaming software with alerts',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('streamlabs'),
        isCask: true
    },
    {
        id: 'audacity',
        name: 'Audacity',
        brewName: 'audacity',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.media,
        description: 'Free audio editor and recorder',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('audacity'),
        isCask: true
    },
    {
        id: 'steam',
        name: 'Steam',
        brewName: 'steam',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.media,
        description: 'Gaming platform by Valve',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('steam'),
        isCask: true,
        invertInDark: true
    },
    {
        id: 'epic-games',
        name: 'Epic Games Launcher',
        brewName: 'epic-games',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.media,
        description: 'Epic Games store and launcher',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('epicgames'),
        isCask: true,
        invertInDark: true
    },
    {
        id: 'gog-galaxy',
        name: 'GOG Galaxy',
        brewName: 'gog-galaxy',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.media,
        description: 'DRM-free game launcher',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('www.gog.com'),
        isCask: true
    },
    {
        id: 'downie',
        name: 'Downie',
        brewName: 'downie',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.media,
        description: 'Video downloader for thousands of sites',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('youtube'),
        isCask: true
    },
    {
        id: 'permute',
        name: 'Permute',
        brewName: 'permute',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.media,
        description: 'Media converter for Mac',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('convertio'),
        isCask: true
    }
];
const UTILITY_APPS = [
    {
        id: 'the-unarchiver',
        name: 'The Unarchiver',
        brewName: 'the-unarchiver',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'Archive extraction tool',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('theunarchiver.com'),
        isCask: true
    },
    {
        id: 'keka',
        name: 'Keka',
        brewName: 'keka',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'macOS file archiver',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('www.keka.io'),
        isCask: true
    },
    {
        id: 'appcleaner',
        name: 'AppCleaner',
        brewName: 'appcleaner',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'Thoroughly uninstall apps',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('freemacsoft.net'),
        isCask: true
    },
    {
        id: 'cleanmymac',
        name: 'CleanMyMac X',
        brewName: 'cleanmymac',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'Mac cleaning and optimization tool',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('macpaw.com'),
        isCask: true
    },
    {
        id: 'daisydisk',
        name: 'DaisyDisk',
        brewName: 'daisydisk',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'Visualize disk space usage',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('daisydiskapp.com'),
        isCask: true
    },
    {
        id: 'stats',
        name: 'Stats',
        brewName: 'stats',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'System monitor in your menu bar',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('exelban.github.io'),
        isCask: true
    },
    {
        id: 'istatmenus',
        name: 'iStat Menus',
        brewName: 'istat-menus',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'Advanced system monitor',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('bjango.com'),
        isCask: true
    },
    {
        id: 'aldente',
        name: 'AlDente',
        brewName: 'aldente',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'MacBook battery charge limiter',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('apphousekitchen.com'),
        isCask: true
    },
    {
        id: 'karabiner-elements',
        name: 'Karabiner-Elements',
        brewName: 'karabiner-elements',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'Keyboard customizer for macOS',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('karabiner-elements.pqrs.org'),
        isCask: true
    },
    {
        id: 'bartender',
        name: 'Bartender',
        brewName: 'bartender',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'Organize your menu bar icons',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('www.macbartender.com'),
        isCask: true
    },
    {
        id: 'ice',
        name: 'Ice',
        brewName: 'jordanbaird-ice',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'Free menu bar manager',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('macos'),
        isCask: true,
        invertInDark: true
    },
    {
        id: 'hiddenbar',
        name: 'Hidden Bar',
        brewName: 'hiddenbar',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'Hide menu bar items',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('superbits.co'),
        isCask: true
    },
    {
        id: 'monitorcontrol',
        name: 'MonitorControl',
        brewName: 'monitorcontrol',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'Control external display brightness',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('monitorcontrol.app'),
        isCask: true
    },
    {
        id: 'lunar',
        name: 'Lunar',
        brewName: 'lunar',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'Intelligent adaptive brightness',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('lunar.fyi'),
        isCask: true
    },
    {
        id: 'flux',
        name: 'f.lux',
        brewName: 'flux',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'Adjusts display color for better sleep',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('flux'),
        isCask: false
    },
    {
        id: 'coconutbattery',
        name: 'coconutBattery',
        brewName: 'coconutbattery',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'Battery health monitor',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('www.coconut-flavour.com'),
        isCask: true
    },
    {
        id: 'suspicious-package',
        name: 'Suspicious Package',
        brewName: 'suspicious-package',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'Inspect macOS installer packages',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('macos'),
        isCask: true,
        invertInDark: true
    },
    {
        id: 'onyx',
        name: 'OnyX',
        brewName: 'onyx',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'System maintenance and optimization',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('macos'),
        isCask: true,
        invertInDark: true
    },
    {
        id: 'transmit',
        name: 'Transmit',
        brewName: 'transmit',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'FTP/SFTP client by Panic',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('panic.com'),
        isCask: true
    },
    {
        id: 'cyberduck',
        name: 'Cyberduck',
        brewName: 'cyberduck',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'FTP, SFTP, and cloud storage browser',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('cyberduck.io'),
        isCask: true
    },
    {
        id: 'syncthing',
        name: 'Syncthing',
        brewName: 'syncthing',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'Continuous file synchronization',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('syncthing'),
        isCask: false
    },
    {
        id: 'mountain-duck',
        name: 'Mountain Duck',
        brewName: 'mountain-duck',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.utilities,
        description: 'Mount cloud storage as disk',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('mountainduck.io'),
        isCask: true
    }
];
const SECURITY_APPS = [
    {
        id: 'nordvpn',
        name: 'NordVPN',
        brewName: 'nordvpn',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.security,
        description: 'VPN service for secure browsing',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('nordvpn'),
        isCask: true
    },
    {
        id: 'mullvad-vpn',
        name: 'Mullvad VPN',
        brewName: 'mullvad-vpn',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.security,
        description: 'Privacy-focused VPN service',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('mullvad'),
        isCask: true
    },
    {
        id: 'protonvpn',
        name: 'ProtonVPN',
        brewName: 'protonvpn',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.security,
        description: 'Secure VPN by Proton',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('protonvpn'),
        isCask: true
    },
    {
        id: 'expressvpn',
        name: 'ExpressVPN',
        brewName: 'expressvpn',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.security,
        description: 'Fast and secure VPN',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('expressvpn'),
        isCask: true
    },
    {
        id: 'tunnelblick',
        name: 'Tunnelblick',
        brewName: 'tunnelblick',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.security,
        description: 'Free OpenVPN client',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('openvpn'),
        isCask: true
    },
    {
        id: 'wireguard',
        name: 'WireGuard',
        brewName: 'wireguard-tools',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.security,
        description: 'Fast, modern VPN protocol',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('wireguard'),
        isCask: false
    },
    {
        id: 'lulu',
        name: 'LuLu',
        brewName: 'lulu',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.security,
        description: 'Free macOS firewall',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('objective-see.org'),
        isCask: true
    },
    {
        id: 'little-snitch',
        name: 'Little Snitch',
        brewName: 'little-snitch',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.security,
        description: 'Network monitor and firewall',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('www.obdev.at'),
        isCask: true
    },
    {
        id: 'micro-snitch',
        name: 'Micro Snitch',
        brewName: 'micro-snitch',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.security,
        description: 'Microphone and camera monitor',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('www.obdev.at'),
        isCask: true
    },
    {
        id: 'oversight',
        name: 'OverSight',
        brewName: 'oversight',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.security,
        description: 'Monitor mic and webcam access',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('objective-see.org'),
        isCask: true
    },
    {
        id: 'knockknock',
        name: 'KnockKnock',
        brewName: 'knockknock',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.security,
        description: "See what's persistently installed",
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('macos'),
        isCask: true,
        invertInDark: true
    },
    {
        id: 'blockblock',
        name: 'BlockBlock',
        brewName: 'blockblock',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.security,
        description: 'Monitor persistent components',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('macos'),
        isCask: true,
        invertInDark: true
    },
    {
        id: 'gpg-suite',
        name: 'GPG Suite',
        brewName: 'gpg-suite',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.security,
        description: 'Email and file encryption',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('gnuprivacyguard'),
        isCask: true
    },
    {
        id: 'keepassxc',
        name: 'KeePassXC',
        brewName: 'keepassxc',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.security,
        description: 'Cross-platform password manager',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('keepassxc'),
        isCask: true
    }
];
const CLI_APPS = [
    {
        id: 'git',
        name: 'Git',
        brewName: 'git',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Version control system',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('git'),
        isCask: false
    },
    {
        id: 'fzf',
        name: 'fzf',
        brewName: 'fzf',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Command-line fuzzy finder',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('macos'),
        isCask: false,
        invertInDark: true
    },
    {
        id: 'ripgrep',
        name: 'ripgrep',
        brewName: 'ripgrep',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Fast recursive search tool (rg)',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('rust'),
        isCask: false
    },
    {
        id: 'fd',
        name: 'fd',
        brewName: 'fd',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Fast alternative to find',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('rust'),
        isCask: false
    },
    {
        id: 'exa',
        name: 'eza',
        brewName: 'eza',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Modern ls replacement with git integration',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('rust'),
        isCask: false
    },
    {
        id: 'bat',
        name: 'bat',
        brewName: 'bat',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Cat clone with syntax highlighting',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('rust'),
        isCask: false
    },
    {
        id: 'zoxide',
        name: 'zoxide',
        brewName: 'zoxide',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Smarter cd command with directory jumping',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('rust'),
        isCask: false
    },
    {
        id: 'tldr',
        name: 'tldr',
        brewName: 'tldr',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Simplified man pages',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('macos'),
        isCask: false,
        invertInDark: true
    },
    {
        id: 'jq',
        name: 'jq',
        brewName: 'jq',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'JSON query and transformation tool',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('macos'),
        isCask: false,
        invertInDark: true
    },
    {
        id: 'yq',
        name: 'yq',
        brewName: 'yq',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'YAML processor like jq',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('macos'),
        isCask: false,
        invertInDark: true
    },
    {
        id: 'httpie',
        name: 'HTTPie',
        brewName: 'httpie',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'User-friendly HTTP client',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('httpie'),
        isCask: false
    },
    {
        id: 'lazygit',
        name: 'Lazygit',
        brewName: 'lazygit',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Simple TUI for git commands',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('git'),
        isCask: false
    },
    {
        id: 'lazydocker',
        name: 'Lazydocker',
        brewName: 'lazydocker',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Docker/Docker-compose TUI',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('docker'),
        isCask: false
    },
    {
        id: 'nnn',
        name: 'nnn',
        brewName: 'nnn',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Terminal file browser',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('macos'),
        isCask: false,
        invertInDark: true
    },
    {
        id: 'starship',
        name: 'Starship',
        brewName: 'starship',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Cross-shell prompt',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('macos'),
        isCask: false,
        invertInDark: true
    },
    {
        id: 'tmux',
        name: 'tmux',
        brewName: 'tmux',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Terminal multiplexer',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('macos'),
        isCask: false,
        invertInDark: true
    },
    {
        id: 'vim',
        name: 'Vim',
        brewName: 'vim',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Highly configurable text editor',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('vim'),
        isCask: false
    },
    {
        id: 'neovim',
        name: 'Neovim',
        brewName: 'neovim',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Modern vim fork',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('vim'),
        isCask: false
    },
    {
        id: 'ag',
        name: 'The Silver Searcher',
        brewName: 'the_silver_searcher',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Code searching tool (ag)',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('macos'),
        isCask: false,
        invertInDark: true
    },
    {
        id: 'imagemagick',
        name: 'ImageMagick',
        brewName: 'imagemagick',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Image manipulation tool',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('macos'),
        isCask: false,
        invertInDark: true
    },
    {
        id: 'ffmpeg',
        name: 'FFmpeg',
        brewName: 'ffmpeg',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Multimedia framework',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('macos'),
        isCask: false,
        invertInDark: true
    },
    {
        id: 'graphviz',
        name: 'Graphviz',
        brewName: 'graphviz',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Graph visualization software',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('macos'),
        isCask: false,
        invertInDark: true
    },
    {
        id: 'meson',
        name: 'Meson',
        brewName: 'meson',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Build system',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('macos'),
        isCask: false,
        invertInDark: true
    },
    {
        id: 'cmake',
        name: 'CMake',
        brewName: 'cmake',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Cross-platform build system',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('macos'),
        isCask: false,
        invertInDark: true
    }
];
const LANGUAGES_APPS = [
    {
        id: 'node',
        name: 'Node.js',
        brewName: 'node',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.languages,
        description: 'JavaScript runtime',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('nodedotjs'),
        isCask: false
    },
    {
        id: 'python',
        name: 'Python',
        brewName: 'python@3.13',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.languages,
        description: 'Python programming language (3.13)',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('python'),
        isCask: false
    },
    {
        id: 'ruby',
        name: 'Ruby',
        brewName: 'ruby',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.languages,
        description: 'Ruby programming language',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('ruby'),
        isCask: false
    },
    {
        id: 'go',
        name: 'Go',
        brewName: 'go',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.languages,
        description: 'Go programming language',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('go'),
        isCask: false
    },
    {
        id: 'rust',
        name: 'Rust',
        brewName: 'rust',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.languages,
        description: 'Rust programming language',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('rust'),
        isCask: false
    },
    {
        id: 'java',
        name: 'Java',
        brewName: 'openjdk',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.languages,
        description: 'Java programming language',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('java'),
        isCask: false
    },
    {
        id: 'php',
        name: 'PHP',
        brewName: 'php',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.languages,
        description: 'PHP programming language',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('php'),
        isCask: false
    },
    {
        id: 'kotlin',
        name: 'Kotlin',
        brewName: 'kotlin',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.languages,
        description: 'Kotlin programming language',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('kotlin'),
        isCask: false
    },
    {
        id: 'scala',
        name: 'Scala',
        brewName: 'scala',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.languages,
        description: 'Scala programming language',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('scala'),
        isCask: false
    }
];
const DATABASES_APPS = [
    {
        id: 'postgres',
        name: 'PostgreSQL',
        brewName: 'postgresql@18',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Object-relational database (18)',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('postgresql'),
        isCask: false
    },
    {
        id: 'mysql',
        name: 'MySQL',
        brewName: 'mysql',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'Relational database management',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('mysql'),
        isCask: false
    },
    {
        id: 'redis',
        name: 'Redis',
        brewName: 'redis',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.cli,
        description: 'In-memory data store',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('redis'),
        isCask: false
    }
];
const PACKAGE_MANAGERS_APPS = [
    {
        id: 'npm',
        name: 'npm',
        brewName: 'npm',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum['package-managers'],
        description: 'Node.js package manager',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('npm'),
        isCask: false
    },
    {
        id: 'pnpm',
        name: 'pnpm',
        brewName: 'pnpm',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum['package-managers'],
        description: 'Fast, disk space efficient npm replacement',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('pnpm'),
        isCask: false
    },
    {
        id: 'yarn',
        name: 'Yarn',
        brewName: 'yarn',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum['package-managers'],
        description: 'Fast, reliable JavaScript package manager',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('yarn'),
        isCask: false
    },
    {
        id: 'bun',
        name: 'Bun',
        brewName: 'bun',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum['package-managers'],
        description: 'Fast all-in-one JavaScript runtime',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('bun'),
        isCask: false
    },
    {
        id: 'uv',
        name: 'uv',
        brewName: 'uv',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum['package-managers'],
        description: 'Fast Python package installer and resolver',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('python'),
        isCask: false
    },
    {
        id: 'pip',
        name: 'pip',
        brewName: 'pip',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum['package-managers'],
        description: 'Python package installer',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('python'),
        isCask: false
    },
    {
        id: 'pipx',
        name: 'pipx',
        brewName: 'pipx',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum['package-managers'],
        description: 'Install and run Python applications in isolation',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('python'),
        isCask: false
    },
    {
        id: 'poetry',
        name: 'Poetry',
        brewName: 'poetry',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum['package-managers'],
        description: 'Python dependency management and packaging',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('poetry'),
        isCask: false
    },
    {
        id: 'cargo',
        name: 'Cargo',
        brewName: 'cargo',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum['package-managers'],
        description: 'Rust package manager',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('rust'),
        isCask: false
    },
    {
        id: 'gems',
        name: 'RubyGems',
        brewName: 'rubygems',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum['package-managers'],
        description: 'Ruby package manager',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('ruby'),
        isCask: false
    },
    {
        id: 'nvm',
        name: 'nvm',
        brewName: 'nvm',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum['package-managers'],
        description: 'Node Version Manager',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('nodedotjs'),
        isCask: false
    },
    {
        id: 'fnm',
        name: 'fnm',
        brewName: 'fnm',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum['package-managers'],
        description: 'Fast Node Manager',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('nodedotjs'),
        isCask: false
    },
    {
        id: 'pyenv',
        name: 'pyenv',
        brewName: 'pyenv',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum['package-managers'],
        description: 'Python version manager',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('python'),
        isCask: false
    },
    {
        id: 'rbenv',
        name: 'rbenv',
        brewName: 'rbenv',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum['package-managers'],
        description: 'Ruby version manager',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('ruby'),
        isCask: false
    },
    {
        id: 'rustup',
        name: 'rustup',
        brewName: 'rustup-init',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum['package-managers'],
        description: 'Rust toolchain installer',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('rust'),
        isCask: false
    },
    {
        id: 'jenv',
        name: 'jenv',
        brewName: 'jenv',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum['package-managers'],
        description: 'Java version manager',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('java'),
        isCask: false
    },
    {
        id: 'gvm',
        name: 'gvm',
        brewName: 'gvm',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum['package-managers'],
        description: 'Go version manager',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('go'),
        isCask: false
    }
];
const DESIGN_APPS = [
    {
        id: 'figma',
        name: 'Figma',
        brewName: 'figma',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.design,
        description: 'Collaborative design tool',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('figma'),
        isCask: true
    },
    {
        id: 'sketch',
        name: 'Sketch',
        brewName: 'sketch',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.design,
        description: 'Digital design toolkit for Mac',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('sketch'),
        isCask: true
    },
    {
        id: 'affinity-designer',
        name: 'Affinity Designer 2',
        brewName: 'affinity-designer',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.design,
        description: 'Professional vector graphics editor',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('affinity.serif.com'),
        isCask: true
    },
    {
        id: 'affinity-photo',
        name: 'Affinity Photo 2',
        brewName: 'affinity-photo',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.design,
        description: 'Professional photo editing',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('affinity.serif.com'),
        isCask: true
    },
    {
        id: 'affinity-publisher',
        name: 'Affinity Publisher 2',
        brewName: 'affinity-publisher',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.design,
        description: 'Professional publishing software',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('affinity.serif.com'),
        isCask: true
    },
    {
        id: 'imageoptim',
        name: 'ImageOptim',
        brewName: 'imageoptim',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.design,
        description: 'Image compression tool',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('imageoptim.com'),
        isCask: true
    },
    {
        id: 'gimp',
        name: 'GIMP',
        brewName: 'gimp',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.design,
        description: 'Free and open-source image editor',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('gimp'),
        isCask: true
    },
    {
        id: 'inkscape',
        name: 'Inkscape',
        brewName: 'inkscape',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.design,
        description: 'Free vector graphics editor',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('inkscape'),
        isCask: true,
        invertInDark: true
    },
    {
        id: 'blender',
        name: 'Blender',
        brewName: 'blender',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.design,
        description: 'Free 3D creation suite',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('blender'),
        isCask: true
    },
    {
        id: 'colorsnapper',
        name: 'ColorSnapper',
        brewName: 'colorsnapper',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.design,
        description: 'Color picker for designers',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('colorsnapper.com'),
        isCask: true
    },
    {
        id: 'sip',
        name: 'Sip',
        brewName: 'sip',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.design,
        description: 'Color picker and palette manager',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('sipapp.io'),
        isCask: false
    },
    {
        id: 'rightfont',
        name: 'RightFont',
        brewName: 'rightfont',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.design,
        description: 'Font manager for designers',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('fontbase'),
        isCask: true
    },
    {
        id: 'iconjar',
        name: 'IconJar',
        brewName: 'iconjar',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.design,
        description: 'Icon organizer for designers',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('geticonjar.com'),
        isCask: true
    },
    {
        id: 'principle',
        name: 'Principle',
        brewName: 'principle',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.design,
        description: 'Animation and prototyping tool',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favicon"])('principleformac.com'),
        isCask: true
    },
    {
        id: 'framer',
        name: 'Framer',
        brewName: 'framer',
        category: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCategoryEnum"].enum.design,
        description: 'Interactive design tool',
        iconUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$helpers$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleIcon"])('framer'),
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
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$4$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwind-merge@3.4.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$4$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/app/(landing)/_components/app-icon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppIcon",
    ()=>AppIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Package$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.10_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@phosphor-icons/react/dist/csr/Package.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const sizeClasses = {
    sm: 'size-5',
    md: 'size-6'
};
function AppIcon({ iconUrl, invertInDark, size = 'sm', className }) {
    const [hasError, setHasError] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const sizeClass = sizeClasses[size];
    if (hasError) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Package$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PackageIcon"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(sizeClass, 'text-muted-foreground', className)
        }, void 0, false, {
            fileName: "[project]/app/(landing)/_components/app-icon.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: iconUrl,
        alt: "",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(sizeClass, 'object-contain', invertInDark && 'dark:invert', className),
        onError: ()=>setHasError(true)
    }, void 0, false, {
        fileName: "[project]/app/(landing)/_components/app-icon.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/ui/badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$base$2d$ui$2b$react$40$1$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$7_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@base-ui+react@1.0.0_@types+react@19.2.7_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@base-ui/react/esm/merge-props/mergeProps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$base$2d$ui$2b$react$40$1$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$7_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$use$2d$render$2f$useRender$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@base-ui+react@1.0.0_@types+react@19.2.7_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@base-ui/react/esm/use-render/useRender.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("h-5 gap-1 rounded-full border border-transparent px-2 py-0.5 text-[0.625rem] font-medium transition-all has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&>svg]:size-2.5! inline-flex items-center justify-center w-fit whitespace-nowrap shrink-0 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-colors overflow-hidden group/badge", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
            secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
            destructive: "bg-destructive/10 [a]:hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 text-destructive dark:bg-destructive/20",
            outline: "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground bg-input/20 dark:bg-input/30",
            ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
            link: "text-primary underline-offset-4 hover:underline"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant = "default", render, ...props }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$base$2d$ui$2b$react$40$1$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$7_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$use$2d$render$2f$useRender$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRender"])({
        defaultTagName: "span",
        props: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$base$2d$ui$2b$react$40$1$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$7_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeProps"])({
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
                className,
                variant
            }))
        }, props),
        render,
        state: {
            slot: "badge",
            variant
        }
    });
}
;
}),
"[project]/app/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$base$2d$ui$2b$react$40$1$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$7_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@base-ui+react@1.0.0_@types+react@19.2.7_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@base-ui/react/esm/button/Button.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("focus-visible:border-ring focus-visible:ring-ring/30 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border border-transparent bg-clip-padding text-xs/relaxed font-medium focus-visible:ring-[2px] aria-invalid:ring-[2px] [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/80",
            outline: "border-border dark:bg-input/30 hover:bg-input/50 hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
            ghost: "hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground",
            destructive: "bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-7 gap-1 px-2 text-xs/relaxed has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
            xs: "h-5 gap-1 rounded-sm px-2 text-[0.625rem] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-2.5",
            sm: "h-6 gap-1 px-2 text-xs/relaxed has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
            lg: "h-8 gap-1 px-2.5 text-xs/relaxed has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-4",
            icon: "size-7 [&_svg:not([class*='size-'])]:size-3.5",
            "icon-xs": "size-5 rounded-sm [&_svg:not([class*='size-'])]:size-2.5",
            "icon-sm": "size-6 [&_svg:not([class*='size-'])]:size-3",
            "icon-lg": "size-8 [&_svg:not([class*='size-'])]:size-4"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant = "default", size = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$base$2d$ui$2b$react$40$1$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$7_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/button.tsx",
        lineNumber: 49,
        columnNumber: 3
    }, this);
}
;
}),
"[project]/app/components/ui/popover.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Popover",
    ()=>Popover,
    "PopoverContent",
    ()=>PopoverContent,
    "PopoverTrigger",
    ()=>PopoverTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$base$2d$ui$2b$react$40$1$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$7_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Popover$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@base-ui+react@1.0.0_@types+react@19.2.7_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@base-ui/react/esm/popover/index.parts.js [app-ssr] (ecmascript) <export * as Popover>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
function Popover({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$base$2d$ui$2b$react$40$1$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$7_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Popover$3e$__["Popover"].Root, {
        "data-slot": "popover",
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/popover.tsx",
        lineNumber: 6,
        columnNumber: 9
    }, this);
}
function PopoverTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$base$2d$ui$2b$react$40$1$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$7_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Popover$3e$__["Popover"].Trigger, {
        "data-slot": "popover-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/popover.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
function PopoverContent({ align = "center", alignOffset = 0, side = "top", sideOffset = 8, className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$base$2d$ui$2b$react$40$1$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$7_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Popover$3e$__["Popover"].Portal, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$base$2d$ui$2b$react$40$1$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$7_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Popover$3e$__["Popover"].Positioner, {
            className: "isolate z-50 outline-none",
            align: align,
            alignOffset: alignOffset,
            side: side,
            sideOffset: sideOffset,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$base$2d$ui$2b$react$40$1$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$7_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$popover$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Popover$3e$__["Popover"].Popup, {
                "data-slot": "popover-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 bg-popover text-popover-foreground w-80 max-w-[min(90vw,22rem)] rounded-lg border border-border/60 p-3 shadow-lg ring-1 duration-150 origin-(--transform-origin)", className),
                ...props
            }, void 0, false, {
                fileName: "[project]/app/components/ui/popover.tsx",
                lineNumber: 34,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/ui/popover.tsx",
            lineNumber: 27,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/ui/popover.tsx",
        lineNumber: 26,
        columnNumber: 3
    }, this);
}
;
}),
"[project]/app/(landing)/_components/app-info-popover.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppInfoPopover",
    ()=>AppInfoPopover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Info$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.10_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@phosphor-icons/react/dist/csr/Info.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/popover.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$landing$292f$_components$2f$app$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(landing)/_components/app-icon.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function getHomebrewUrl(brewInfo, brewName) {
    return brewInfo?.url ?? `https://formulae.brew.sh/cask/${brewName}`;
}
function getDescription(brewInfo, fallback, error) {
    if (error) return 'Could not load Homebrew details';
    const desc = (brewInfo?.description ?? '').trim();
    return desc || fallback || 'No description available yet.';
}
function getBrewCommand(brewInfo, brewName) {
    const caskFlag = brewInfo?.kind === 'cask' ? '--cask ' : '';
    return `brew install ${caskFlag}${brewName}`;
}
function AppInfoPopover({ app, brewInfo, isLoading, error, onTrigger }) {
    const homebrewUrl = getHomebrewUrl(brewInfo, app.brewName);
    const description = getDescription(brewInfo, app.description, error);
    const brewCommand = getBrewCommand(brewInfo, app.brewName);
    const handleClick = (event)=>{
        event.stopPropagation();
        onTrigger();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Popover"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                openOnHover: true,
                delay: 120,
                "aria-label": `More about ${app.name}`,
                onClick: handleClick,
                onMouseEnter: onTrigger,
                render: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "ghost",
                    size: "icon-sm",
                    className: "rounded-full border border-transparent hover:border-muted-foreground/60"
                }, void 0, false, {
                    fileName: "[project]/app/(landing)/_components/app-info-popover.tsx",
                    lineNumber: 68,
                    columnNumber: 11
                }, void 0),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Info$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Info"], {
                    className: "size-3.5",
                    weight: "bold"
                }, void 0, false, {
                    fileName: "[project]/app/(landing)/_components/app-info-popover.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(landing)/_components/app-info-popover.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverContent"], {
                align: "end",
                side: "top",
                sideOffset: 12,
                onClick: (e)=>e.stopPropagation(),
                className: "pointer-events-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-md border bg-card",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$landing$292f$_components$2f$app$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppIcon"], {
                                iconUrl: app.iconUrl,
                                invertInDark: app.invertInDark,
                                size: "md"
                            }, void 0, false, {
                                fileName: "[project]/app/(landing)/_components/app-info-popover.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(landing)/_components/app-info-popover.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-0 space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "truncate text-sm font-semibold",
                                            children: brewInfo?.name ?? app.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/(landing)/_components/app-info-popover.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "secondary",
                                            className: "uppercase tracking-wider",
                                            children: brewInfo?.kind ?? 'brew'
                                        }, void 0, false, {
                                            fileName: "[project]/app/(landing)/_components/app-info-popover.tsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(landing)/_components/app-info-popover.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: description
                                }, void 0, false, {
                                    fileName: "[project]/app/(landing)/_components/app-info-popover.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "outline",
                                            className: "max-w-full truncate font-mono",
                                            children: brewCommand
                                        }, void 0, false, {
                                            fileName: "[project]/app/(landing)/_components/app-info-popover.tsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this),
                                        brewInfo?.version && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "outline",
                                            className: "max-w-full truncate",
                                            children: [
                                                "v",
                                                brewInfo.version
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(landing)/_components/app-info-popover.tsx",
                                            lineNumber: 110,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(landing)/_components/app-info-popover.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2 pt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: homebrewUrl,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            onClick: (e)=>e.stopPropagation(),
                                            className: "text-[11px] font-medium text-primary hover:underline",
                                            children: "Homebrew page"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(landing)/_components/app-info-popover.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this),
                                        brewInfo?.homepage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: brewInfo.homepage,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            onClick: (e)=>e.stopPropagation(),
                                            className: "text-[11px] font-medium text-muted-foreground hover:underline",
                                            children: "Homepage"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(landing)/_components/app-info-popover.tsx",
                                            lineNumber: 126,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(landing)/_components/app-info-popover.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-muted-foreground",
                                    children: "Loading Homebrew data..."
                                }, void 0, false, {
                                    fileName: "[project]/app/(landing)/_components/app-info-popover.tsx",
                                    lineNumber: 138,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(landing)/_components/app-info-popover.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(landing)/_components/app-info-popover.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(landing)/_components/app-info-popover.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(landing)/_components/app-info-popover.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/(landing)/_components/selection-checkbox.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectionCheckbox",
    ()=>SelectionCheckbox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Check$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.10_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@phosphor-icons/react/dist/csr/Check.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function SelectionCheckbox({ isSelected }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex size-4 shrink-0 items-center justify-center border transition-colors', isSelected ? 'border-primary bg-primary text-primary-foreground' : 'border-muted-foreground/30 bg-transparent'),
        children: isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Check$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckIcon"], {
            className: "size-2.5",
            weight: "bold"
        }, void 0, false, {
            fileName: "[project]/app/(landing)/_components/selection-checkbox.tsx",
            lineNumber: 21,
            columnNumber: 22
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(landing)/_components/selection-checkbox.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/lib/api/axios.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "homebrewApi",
    ()=>homebrewApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$axios$40$1$2e$13$2e$2$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
const homebrewApi = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$axios$40$1$2e$13$2e$2$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: 'https://formulae.brew.sh/api',
    timeout: 10000
});
}),
"[project]/lib/api/homebrew.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchHomebrewInfo",
    ()=>fetchHomebrewInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/axios.ts [app-ssr] (ecmascript)");
;
function getEndpoints(brewName) {
    return [
        {
            path: `/cask/${brewName}.json`,
            kind: 'cask',
            pageUrl: `https://formulae.brew.sh/cask/${brewName}`
        },
        {
            path: `/formula/${brewName}.json`,
            kind: 'formula',
            pageUrl: `https://formulae.brew.sh/formula/${brewName}`
        }
    ];
}
function parseVersion(data) {
    if (typeof data.version === 'string') {
        return data.version;
    }
    const versions = data.versions;
    if (typeof versions?.stable === 'string') {
        return versions.stable;
    }
    return undefined;
}
function parseName(data) {
    const name = data.name;
    return Array.isArray(name) ? name[0] : name;
}
async function fetchHomebrewInfo(brewName) {
    const endpoints = getEndpoints(brewName);
    for (const endpoint of endpoints){
        try {
            const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["homebrewApi"].get(endpoint.path);
            return {
                name: parseName(data),
                description: data.desc ?? data.description,
                homepage: data.homepage ?? data.url,
                version: parseVersion(data),
                url: endpoint.pageUrl,
                kind: endpoint.kind
            };
        } catch  {}
    }
    throw new Error('No Homebrew metadata available');
}
}),
"[project]/app/(landing)/_components/_hooks/use-homebrew-info.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "homebrewInfoKeys",
    ()=>homebrewInfoKeys,
    "useHomebrewInfo",
    ()=>useHomebrewInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.90.12_react@19.2.3/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$homebrew$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/homebrew.ts [app-ssr] (ecmascript)");
'use client';
;
;
const homebrewInfoKeys = {
    all: [
        'homebrew-info'
    ],
    detail: (brewName)=>[
            ...homebrewInfoKeys.all,
            brewName
        ]
};
function useHomebrewInfo(brewName, enabled = false) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: homebrewInfoKeys.detail(brewName),
        queryFn: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$homebrew$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchHomebrewInfo"])(brewName),
        enabled,
        staleTime: Infinity
    });
}
}),
"[project]/app/(landing)/_components/app-card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppCard",
    ()=>AppCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$landing$292f$_components$2f$app$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(landing)/_components/app-icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$landing$292f$_components$2f$app$2d$info$2d$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(landing)/_components/app-info-popover.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$landing$292f$_components$2f$selection$2d$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(landing)/_components/selection-checkbox.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$landing$292f$_components$2f$_hooks$2f$use$2d$homebrew$2d$info$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(landing)/_components/_hooks/use-homebrew-info.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function AppCard({ app, isSelected, onToggle }) {
    const [shouldFetch, setShouldFetch] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const { data: brewInfo, isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$landing$292f$_components$2f$_hooks$2f$use$2d$homebrew$2d$info$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useHomebrewInfo"])(app.brewName, shouldFetch);
    const handleTriggerFetch = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        setShouldFetch(true);
    }, []);
    const handleKeyDown = (event)=>{
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onToggle(app.id);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        "aria-pressed": isSelected,
        onClick: ()=>onToggle(app.id),
        onKeyDown: handleKeyDown,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('group flex cursor-pointer select-none items-center gap-2.5 border px-2.5 py-2 text-left transition-colors', 'hover:bg-muted/50', 'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring', isSelected ? 'border-primary/50 bg-primary/5' : 'border-border bg-card'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex size-5 shrink-0 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$landing$292f$_components$2f$app$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppIcon"], {
                    iconUrl: app.iconUrl,
                    invertInDark: app.invertInDark
                }, void 0, false, {
                    fileName: "[project]/app/(landing)/_components/app-card.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(landing)/_components/app-card.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "min-w-0 flex-1 truncate font-mono text-xs",
                children: app.name
            }, void 0, false, {
                fileName: "[project]/app/(landing)/_components/app-card.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$landing$292f$_components$2f$app$2d$info$2d$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppInfoPopover"], {
                        app: app,
                        brewInfo: brewInfo,
                        isLoading: isLoading,
                        error: error,
                        onTrigger: handleTriggerFetch
                    }, void 0, false, {
                        fileName: "[project]/app/(landing)/_components/app-card.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$landing$292f$_components$2f$selection$2d$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectionCheckbox"], {
                        isSelected: isSelected
                    }, void 0, false, {
                        fileName: "[project]/app/(landing)/_components/app-card.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(landing)/_components/app-card.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(landing)/_components/app-card.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/ui/toggle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toggle",
    ()=>Toggle,
    "toggleVariants",
    ()=>toggleVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$base$2d$ui$2b$react$40$1$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$7_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$toggle$2f$Toggle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@base-ui+react@1.0.0_@types+react@19.2.7_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@base-ui/react/esm/toggle/Toggle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const toggleVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("hover:text-foreground aria-pressed:bg-muted focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[state=on]:bg-muted gap-1 rounded-md text-xs font-medium transition-all [&_svg:not([class*='size-'])]:size-3.5 group/toggle hover:bg-muted inline-flex items-center justify-center whitespace-nowrap outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-transparent",
            outline: "border-input hover:bg-muted border bg-transparent"
        },
        size: {
            default: "h-7 min-w-7 px-2",
            sm: "h-6 min-w-6 rounded-[min(var(--radius-md),8px)] px-1.5 text-[0.625rem] [&_svg:not([class*='size-'])]:size-3",
            lg: "h-8 min-w-8 px-2"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Toggle({ className, variant = "default", size = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$base$2d$ui$2b$react$40$1$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$7_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$toggle$2f$Toggle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toggle"], {
        "data-slot": "toggle",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(toggleVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/toggle.tsx",
        lineNumber: 35,
        columnNumber: 3
    }, this);
}
;
}),
"[project]/app/components/ui/toggle-group.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToggleGroup",
    ()=>ToggleGroup,
    "ToggleGroupItem",
    ()=>ToggleGroupItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$base$2d$ui$2b$react$40$1$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$7_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$toggle$2f$Toggle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@base-ui+react@1.0.0_@types+react@19.2.7_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@base-ui/react/esm/toggle/Toggle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$base$2d$ui$2b$react$40$1$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$7_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$toggle$2d$group$2f$ToggleGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@base-ui+react@1.0.0_@types+react@19.2.7_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@base-ui/react/esm/toggle-group/ToggleGroup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$toggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/toggle.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const ToggleGroupContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"]({
    size: 'default',
    variant: 'default',
    spacing: 0,
    orientation: 'horizontal'
});
function ToggleGroup({ className, variant, size, spacing = 0, orientation = 'horizontal', children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$base$2d$ui$2b$react$40$1$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$7_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$toggle$2d$group$2f$ToggleGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToggleGroup"], {
        "data-slot": "toggle-group",
        "data-variant": variant,
        "data-size": size,
        "data-spacing": spacing,
        "data-orientation": orientation,
        style: {
            '--gap': spacing
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('rounded-md data-[size=sm]:rounded-[min(var(--radius-md),8px)] group/toggle-group flex w-fit flex-row items-center gap-[--spacing(var(--gap))] data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-stretch', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToggleGroupContext.Provider, {
            value: {
                variant,
                size,
                spacing,
                orientation
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/app/components/ui/toggle-group.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/ui/toggle-group.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
function ToggleGroupItem({ className, children, variant = 'default', size = 'default', ...props }) {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](ToggleGroupContext);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$base$2d$ui$2b$react$40$1$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$7_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$toggle$2f$Toggle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toggle"], {
        "data-slot": "toggle-group-item",
        "data-variant": context.variant || variant,
        "data-size": context.size || size,
        "data-spacing": context.spacing,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('group-data-[spacing=0]/toggle-group:rounded-none group-data-[spacing=0]/toggle-group:px-2 group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-md group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-md group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-md group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-md shrink-0 focus:z-10 focus-visible:z-10 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t', (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$toggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleVariants"])({
            variant: context.variant || variant,
            size: context.size || size
        }), className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/ui/toggle-group.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/app/(landing)/_components/category-filter.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryFilter",
    ()=>CategoryFilter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/toggle-group.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToggleGroup"], {
        value: [
            selectedCategory
        ],
        onValueChange: (values)=>{
            const newValue = values.find((v)=>v !== selectedCategory);
            if (newValue) {
                onCategoryChange(newValue);
            }
        },
        spacing: 1,
        className: "flex-wrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToggleGroupItem"], {
                value: "all",
                className: "px-2.5 py-1 font-mono text-[11px]",
                children: "All"
            }, void 0, false, {
                fileName: "[project]/app/(landing)/_components/category-filter.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToggleGroupItem"], {
                    value: category.id,
                    className: "px-2.5 py-1 font-mono text-[11px]",
                    children: category.label
                }, category.id, false, {
                    fileName: "[project]/app/(landing)/_components/category-filter.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/app/(landing)/_components/category-filter.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/(landing)/_components/category-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategorySection",
    ()=>CategorySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$landing$292f$_components$2f$app$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(landing)/_components/app-card.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function CategorySection({ categoryId, apps, categories, selectedApps, onToggle }) {
    const category = categories.find((c)=>c.id === categoryId);
    if (!category) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground",
                        children: category.label
                    }, void 0, false, {
                        fileName: "[project]/app/(landing)/_components/category-section.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-[10px] text-muted-foreground/60",
                        children: [
                            "(",
                            apps.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(landing)/_components/category-section.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-px flex-1 bg-border"
                    }, void 0, false, {
                        fileName: "[project]/app/(landing)/_components/category-section.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(landing)/_components/category-section.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
                children: apps.map((app)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$landing$292f$_components$2f$app$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCard"], {
                        app: app,
                        isSelected: selectedApps.has(app.id),
                        onToggle: onToggle
                    }, app.id, false, {
                        fileName: "[project]/app/(landing)/_components/category-section.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/(landing)/_components/category-section.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(landing)/_components/category-section.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/(landing)/_components/command-footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CommandFooter",
    ()=>CommandFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Check$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.10_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@phosphor-icons/react/dist/csr/Check.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Copy$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.10_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@phosphor-icons/react/dist/csr/Copy.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function CommandFooter({ brewCommand, selectedCount, copied, onCopy }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "fixed inset-x-0 bottom-0 border-t border-border bg-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl px-4 py-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-stretch gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex flex-1 items-center overflow-x-auto border border-border bg-card px-3 font-mono text-xs', !brewCommand && 'text-muted-foreground'),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                className: "whitespace-nowrap",
                                children: brewCommand || '$ brew install --cask ...'
                            }, void 0, false, {
                                fileName: "[project]/app/(landing)/_components/command-footer.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(landing)/_components/command-footer.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: onCopy,
                            disabled: !brewCommand,
                            className: "h-auto shrink-0 gap-1.5 px-4 py-2.5 font-mono text-xs",
                            children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Check$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckIcon"], {
                                        className: "size-3.5",
                                        weight: "bold"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(landing)/_components/command-footer.tsx",
                                        lineNumber: 42,
                                        columnNumber: 17
                                    }, this),
                                    "COPIED"
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Copy$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CopyIcon"], {
                                        className: "size-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(landing)/_components/command-footer.tsx",
                                        lineNumber: 47,
                                        columnNumber: 17
                                    }, this),
                                    "COPY"
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/app/(landing)/_components/command-footer.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(landing)/_components/command-footer.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 font-mono text-[10px] text-muted-foreground",
                    children: selectedCount > 0 ? `${selectedCount} app${selectedCount !== 1 ? 's' : ''} selected` : 'Select apps to generate brew install command'
                }, void 0, false, {
                    fileName: "[project]/app/(landing)/_components/command-footer.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(landing)/_components/command-footer.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(landing)/_components/command-footer.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$base$2d$ui$2b$react$40$1$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$7_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$input$2f$Input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@base-ui+react@1.0.0_@types+react@19.2.7_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@base-ui/react/esm/input/Input.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$base$2d$ui$2b$react$40$1$2e$0$2e$0_$40$types$2b$react$40$19$2e$2$2e$7_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$input$2f$Input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-input/20 dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/30 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-7 rounded-md border px-2 py-0.5 text-sm transition-colors file:h-6 file:text-xs/relaxed file:font-medium focus-visible:ring-[2px] aria-invalid:ring-[2px] md:text-xs/relaxed file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/input.tsx",
        lineNumber: 8,
        columnNumber: 3
    }, this);
}
;
}),
"[project]/app/(landing)/_components/header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$MagnifyingGlass$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.10_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@phosphor-icons/react/dist/csr/MagnifyingGlass.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$TerminalWindow$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.10_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@phosphor-icons/react/dist/csr/TerminalWindow.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$X$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@phosphor-icons+react@2.1.10_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/@phosphor-icons/react/dist/csr/X.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/input.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Header({ selectedCount, onClearAll, searchQuery, onSearchChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-10 border-b border-border bg-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl px-4 py-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-w-0 items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex size-8 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$TerminalWindow$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TerminalWindowIcon"], {
                                    className: "size-5",
                                    weight: "bold"
                                }, void 0, false, {
                                    fileName: "[project]/app/(landing)/_components/header.tsx",
                                    lineNumber: 31,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(landing)/_components/header.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "font-mono text-sm font-bold tracking-tight",
                                        children: "TAKEOVER"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(landing)/_components/header.tsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-mono text-[10px] text-muted-foreground",
                                        children: "Select apps → Copy brew command → Paste in terminal"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(landing)/_components/header.tsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(landing)/_components/header.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(landing)/_components/header.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$MagnifyingGlass$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MagnifyingGlassIcon"], {
                                        className: "absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(landing)/_components/header.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        type: "text",
                                        placeholder: "Search...",
                                        value: searchQuery,
                                        onChange: (e)=>onSearchChange(e.target.value),
                                        className: "h-8 w-40 pl-8 pr-8 font-mono text-xs md:w-56"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(landing)/_components/header.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this),
                                    searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>onSearchChange(''),
                                        className: "absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$phosphor$2d$icons$2b$react$40$2$2e$1$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$X$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XIcon"], {
                                            className: "size-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(landing)/_components/header.tsx",
                                            lineNumber: 60,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(landing)/_components/header.tsx",
                                        lineNumber: 55,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(landing)/_components/header.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this),
                            selectedCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                onClick: onClearAll,
                                className: "font-mono text-xs",
                                children: [
                                    "Clear (",
                                    selectedCount,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(landing)/_components/header.tsx",
                                lineNumber: 65,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(landing)/_components/header.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(landing)/_components/header.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(landing)/_components/header.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(landing)/_components/header.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/(landing)/_components/brew-picker.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrewPicker",
    ()=>BrewPicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fuse$2e$js$40$7$2e$1$2e$0$2f$node_modules$2f$fuse$2e$js$2f$dist$2f$fuse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fuse.js@7.1.0/node_modules/fuse.js/dist/fuse.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.9_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$apps$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/apps.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$landing$292f$_components$2f$app$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(landing)/_components/app-card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$landing$292f$_components$2f$category$2d$filter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(landing)/_components/category-filter.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$landing$292f$_components$2f$category$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(landing)/_components/category-section.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$landing$292f$_components$2f$command$2d$footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(landing)/_components/command-footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$landing$292f$_components$2f$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(landing)/_components/header.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
function BrewPicker({ apps, categories }) {
    const [selectedApps, setSelectedApps] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](new Set());
    const [selectedCategory, setSelectedCategory] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]('all');
    const [searchQuery, setSearchQuery] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]('');
    const [copied, setCopied] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const fuse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fuse$2e$js$40$7$2e$1$2e$0$2f$node_modules$2f$fuse$2e$js$2f$dist$2f$fuse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](apps, {
            keys: [
                'name',
                'description',
                'brewName'
            ],
            threshold: 0.4,
            ignoreLocation: true
        }), [
        apps
    ]);
    const filteredApps = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        let result;
        if (searchQuery.trim()) {
            const results = fuse.search(searchQuery.trim());
            result = results.map((r)=>r.item);
        } else {
            result = apps;
        }
        if (selectedCategory !== 'all') {
            result = result.filter((app)=>app.category === selectedCategory);
        }
        return result;
    }, [
        searchQuery,
        selectedCategory,
        fuse,
        apps
    ]);
    const appsByCategory = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const grouped = new Map();
        for (const category of categories){
            const categoryApps = filteredApps.filter((app)=>app.category === category.id);
            if (categoryApps.length > 0) {
                grouped.set(category.id, categoryApps);
            }
        }
        return grouped;
    }, [
        filteredApps,
        categories
    ]);
    const brewCommand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$apps$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateBrewCommand"])(Array.from(selectedApps));
    const handleToggle = (appId)=>{
        setSelectedApps((prev)=>{
            const next = new Set(prev);
            if (next.has(appId)) {
                next.delete(appId);
            } else {
                next.add(appId);
            }
            return next;
        });
    };
    const handleCopy = async ()=>{
        if (!brewCommand) return;
        await navigator.clipboard.writeText(brewCommand);
        setCopied(true);
        setTimeout(()=>setCopied(false), 2000);
    };
    const handleClearAll = ()=>{
        setSelectedApps(new Set());
    };
    const showCategorySections = selectedCategory === 'all';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen flex-col bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$landing$292f$_components$2f$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {
                selectedCount: selectedApps.size,
                onClearAll: handleClearAll,
                searchQuery: searchQuery,
                onSearchChange: setSearchQuery
            }, void 0, false, {
                fileName: "[project]/app/(landing)/_components/brew-picker.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 pb-24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-6xl px-4 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$landing$292f$_components$2f$category$2d$filter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CategoryFilter"], {
                            categories: categories,
                            selectedCategory: selectedCategory,
                            onCategoryChange: setSelectedCategory
                        }, void 0, false, {
                            fileName: "[project]/app/(landing)/_components/brew-picker.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6",
                            children: filteredApps.length > 0 ? showCategorySections ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-8",
                                children: Array.from(appsByCategory.entries()).map(([categoryId, categoryApps])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$landing$292f$_components$2f$category$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CategorySection"], {
                                        categoryId: categoryId,
                                        apps: categoryApps,
                                        categories: categories,
                                        selectedApps: selectedApps,
                                        onToggle: handleToggle
                                    }, categoryId, false, {
                                        fileName: "[project]/app/(landing)/_components/brew-picker.tsx",
                                        lineNumber: 116,
                                        columnNumber: 23
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/(landing)/_components/brew-picker.tsx",
                                lineNumber: 113,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
                                children: filteredApps.map((app)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$landing$292f$_components$2f$app$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppCard"], {
                                        app: app,
                                        isSelected: selectedApps.has(app.id),
                                        onToggle: handleToggle
                                    }, app.id, false, {
                                        fileName: "[project]/app/(landing)/_components/brew-picker.tsx",
                                        lineNumber: 130,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/(landing)/_components/brew-picker.tsx",
                                lineNumber: 128,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "py-16 text-center font-mono text-sm text-muted-foreground",
                                children: [
                                    'No apps found for "',
                                    searchQuery,
                                    '"'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(landing)/_components/brew-picker.tsx",
                                lineNumber: 140,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(landing)/_components/brew-picker.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(landing)/_components/brew-picker.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(landing)/_components/brew-picker.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$landing$292f$_components$2f$command$2d$footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandFooter"], {
                brewCommand: brewCommand,
                selectedCount: selectedApps.size,
                copied: copied,
                onCopy: handleCopy
            }, void 0, false, {
                fileName: "[project]/app/(landing)/_components/brew-picker.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(landing)/_components/brew-picker.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3594080a._.js.map
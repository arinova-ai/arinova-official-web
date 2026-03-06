## 1. Project Setup

- [x] 1.1 Initialize Next.js 15 project with TypeScript, Tailwind CSS 4, and App Router
- [x] 1.2 Install and configure Fumadocs (fumadocs-core, fumadocs-ui, fumadocs-mdx)
- [x] 1.3 Configure dev server to run on port 3600
- [x] 1.4 Set up Tailwind theme with brand CSS variables (primary indigo/violet, accent emerald)

## 2. i18n Infrastructure

- [x] 2.1 Create i18n config (supported locales, default locale, dictionaries for en/zh-CN/zh-TW)
- [x] 2.2 Set up `[lang]` route segment with locale validation middleware
- [x] 2.3 Create root `/` redirect to `/en`
- [x] 2.4 Create language switcher component

## 3. Site Layout & Navigation

- [x] 3.1 Create root layout with HTML lang attribute from `[lang]` param
- [x] 3.2 Create navigation header with Arinova logo/name, Docs link, and language switcher
- [x] 3.3 Create Fumadocs layout for `/[lang]/docs/[[...slug]]` route with sidebar

## 4. Landing Page

- [x] 4.1 Create Hero section with headline, subtitle, and CTA button (translated per locale)
- [x] 4.2 Create Features section with grid of platform capabilities
- [x] 4.3 Create CTA section at page bottom
- [x] 4.4 Ensure responsive layout across mobile/tablet/desktop

## 5. Fumadocs Content Source

- [x] 5.1 Configure fumadocs-mdx content source with i18n (locale file suffixes)
- [x] 5.2 Create `source.ts` with locale-aware page tree generation
- [x] 5.3 Create docs catch-all route `[lang]/docs/[[...slug]]/page.tsx`

## 6. Agent SDK Documentation (English)

- [x] 6.1 Write `en/agent-sdk/index.mdx` — Overview page
- [x] 6.2 Write `en/agent-sdk/getting-started.mdx` — Install, token, first agent
- [x] 6.3 Write `en/agent-sdk/core-concepts.mdx` — Connection, tasks, streaming, skills
- [x] 6.4 Write `en/agent-sdk/api-reference.mdx` — Full API: ArinovaAgent, TaskContext, types
- [x] 6.5 Write `en/agent-sdk/examples.mdx` — Echo bot, LLM integration, multi-skill agent

## 7. Agent SDK Documentation (zh-CN / zh-TW)

- [x] 7.1 Translate all 5 Agent SDK docs to Simplified Chinese (zh-CN)
- [x] 7.2 Translate all 5 Agent SDK docs to Traditional Chinese (zh-TW)

## 8. Verification

- [x] 8.1 Verify dev server starts on port 3600 without errors
- [x] 8.2 Verify all three locales render correctly (en, zh-CN, zh-TW)
- [x] 8.3 Verify docs sidebar navigation order and page rendering
- [x] 8.4 Verify language switcher preserves current path

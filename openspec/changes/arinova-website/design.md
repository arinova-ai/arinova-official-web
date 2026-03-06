## Context

arinova-web is a greenfield project. The goal is a brand website + developer docs for the Arinova platform, whose main product (arinova-chat) is a separate monorepo. The website is purely static/marketing — no backend, no auth, no dynamic data.

## Goals / Non-Goals

**Goals:**
- SEO-optimized static site with i18n (en, zh-CN, zh-TW)
- General-user-friendly landing page explaining AI agent conversation
- Complete Agent SDK documentation with code examples
- Dev server on port 3600

**Non-Goals:**
- App SDK / OpenClaw Plugin docs (future phases)
- User dashboard or authenticated features
- Blog system
- CMS integration
- Production deployment pipeline (just dev for now)

## Decisions

### 1. Framework: Next.js 15 (App Router) + Fumadocs

**Rationale:** Same stack as arinova-chat frontend. Fumadocs provides MDX-based docs with built-in search, ToC, and i18n — no need to build docs infrastructure from scratch.

**Alternatives considered:**
- Astro + Starlight: Slightly better Core Web Vitals but different stack from main product
- Docusaurus: Less design flexibility for custom landing pages

### 2. i18n Strategy: Next.js middleware + `[lang]` route segment

Route structure: `/{lang}/docs/...` where lang is `en`, `zh-CN`, or `zh-TW`.

Content files are organized by locale:
```
content/docs/{lang}/agent-sdk/*.mdx
```

UI strings use a simple dictionary object per locale (no heavy i18n library needed for a static site).

**Default locale:** `en` (with redirect from `/` to `/en`)

### 3. Styling: Tailwind CSS 4 + Fumadocs UI

Fumadocs UI provides pre-built doc components (sidebar, ToC, search). Landing page uses custom Tailwind components. Temporary brand palette:
- Primary: Indigo/violet gradient
- Background: White/slate
- Accent: Emerald for CTAs

### 4. Content Source: MDX via fumadocs-mdx

Docs content lives in `content/docs/{lang}/` as `.mdx` files. Fumadocs content source handles frontmatter, navigation tree, and search indexing.

### 5. Project Structure

```
arinova-web/
├── src/
│   ├── app/
│   │   ├── [lang]/
│   │   │   ├── layout.tsx          # Root layout with i18n
│   │   │   ├── page.tsx            # Landing page
│   │   │   └── docs/
│   │   │       └── [[...slug]]/
│   │   │           └── page.tsx    # Fumadocs catch-all
│   │   ├── layout.tsx              # HTML root
│   │   └── page.tsx                # Redirect to /en
│   ├── components/
│   │   ├── landing/                # Hero, Features, CTA
│   │   └── ui/                     # Shared UI
│   ├── lib/
│   │   ├── i18n.ts                 # Locale config & dictionaries
│   │   └── source.ts               # Fumadocs content source
│   └── content/
│       └── docs/
│           ├── en/agent-sdk/       # English docs
│           ├── zh-CN/agent-sdk/    # Simplified Chinese
│           └── zh-TW/agent-sdk/    # Traditional Chinese
├── public/
│   └── images/
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

### 6. Agent SDK Docs Structure

```
agent-sdk/
├── index.mdx           # Overview — what is Arinova, why Agent SDK
├── getting-started.mdx # Install, get token, first agent in 5 min
├── core-concepts.mdx   # Connection, tasks, streaming, skills
├── api-reference.mdx   # Full API: ArinovaAgent, TaskContext, types
└── examples.mdx        # Echo bot, LLM integration, multi-skill
```

## Risks / Trade-offs

- **[Fumadocs i18n maturity]** → Fumadocs i18n support exists but is less battle-tested than Docusaurus. Mitigation: content-folder-per-locale approach is simple and doesn't depend on complex i18n routing.
- **[3x content maintenance]** → Three locales means triple the doc content to maintain. Mitigation: Start with English as source of truth, translate after content stabilizes.
- **[Temporary branding]** → Placeholder logo/colors may need full replacement later. Mitigation: Use CSS variables / Tailwind theme so brand refresh is a config change, not a rewrite.

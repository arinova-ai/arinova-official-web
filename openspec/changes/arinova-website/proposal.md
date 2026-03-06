## Why

Arinova needs a public-facing brand website to introduce the platform to general users and developers. The primary product—arinova-chat (an AI agent conversation platform)—currently has no marketing presence or developer documentation. As human-to-AI-agent interaction becomes mainstream, a clear, approachable website with SDK docs is essential for adoption.

## What Changes

- Create a new Next.js 15 website with Fumadocs for documentation
- Landing page with Hero, Features, and CTA sections targeting general users
- Agent SDK documentation (getting-started, core-concepts, api-reference, examples)
- i18n support for English, Simplified Chinese (zh-CN), and Traditional Chinese (zh-TW)
- Temporary branding (logo, color palette) as a starting point
- Dev server configured on port 3600

## Capabilities

### New Capabilities
- `landing-page`: Brand homepage with Hero, Features, and CTA sections. General-user-friendly design explaining what Arinova is and why AI agent conversation matters.
- `agent-sdk-docs`: Developer documentation for @arinova-ai/agent-sdk covering installation, authentication, task handling, streaming, skills, and API reference.
- `i18n`: Multi-language support (en, zh-CN, zh-TW) for both landing pages and documentation content.
- `site-infra`: Next.js 15 + Fumadocs + Tailwind CSS 4 project setup, dev server on port 3600, content source configuration.

### Modified Capabilities
<!-- None - this is a new project -->

## Impact

- New project initialized in /Users/ripple/arinova-web
- Dependencies: next, fumadocs-core, fumadocs-ui, fumadocs-mdx, tailwindcss, typescript
- References @arinova-ai/agent-sdk source at /Users/ripple/arinova-chat/packages/agent-sdk for documentation accuracy
- No impact on existing arinova-chat codebase

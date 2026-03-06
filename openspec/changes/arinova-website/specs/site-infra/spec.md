## ADDED Requirements

### Requirement: Next.js project initialization
The system SHALL be a Next.js 15 project using App Router with TypeScript and Tailwind CSS 4.

#### Scenario: Project runs on port 3600
- **WHEN** the developer runs `npm run dev`
- **THEN** the dev server starts on port 3600

#### Scenario: TypeScript compilation
- **WHEN** the project is built
- **THEN** there are no TypeScript errors

### Requirement: Fumadocs integration
The system SHALL use fumadocs-core, fumadocs-ui, and fumadocs-mdx for documentation pages.

#### Scenario: Docs route renders MDX content
- **WHEN** a user navigates to `/{lang}/docs/agent-sdk`
- **THEN** the page renders the corresponding MDX file with sidebar navigation, table of contents, and search

#### Scenario: Fumadocs search works
- **WHEN** a user opens the search dialog on any docs page
- **THEN** the built-in search indexes all docs content and returns matching results

### Requirement: Content source configuration
The system SHALL use fumadocs-mdx to load MDX files from `src/content/docs/{lang}/` directories.

#### Scenario: Content files are discovered
- **WHEN** Fumadocs content source is initialized
- **THEN** all `.mdx` files under `src/content/docs/en/`, `src/content/docs/zh-CN/`, and `src/content/docs/zh-TW/` are available as pages

### Requirement: Tailwind CSS theming
The system SHALL define brand colors as Tailwind CSS theme variables so branding can be updated by changing config only.

#### Scenario: Brand color change
- **WHEN** the primary color is changed in the Tailwind config
- **THEN** all components using the primary color update accordingly without code changes

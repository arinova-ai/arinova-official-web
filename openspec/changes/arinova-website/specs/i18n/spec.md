## ADDED Requirements

### Requirement: Three locale support
The system SHALL support three locales: `en` (English), `zh-CN` (Simplified Chinese), and `zh-TW` (Traditional Chinese).

#### Scenario: English content
- **WHEN** a user navigates to `/en/docs/agent-sdk`
- **THEN** the page renders in English

#### Scenario: Simplified Chinese content
- **WHEN** a user navigates to `/zh-CN/docs/agent-sdk`
- **THEN** the page renders in Simplified Chinese

#### Scenario: Traditional Chinese content
- **WHEN** a user navigates to `/zh-TW/docs/agent-sdk`
- **THEN** the page renders in Traditional Chinese

### Requirement: Root redirect
The system SHALL redirect `/` to `/en` (default locale).

#### Scenario: Root path redirect
- **WHEN** a user navigates to `/`
- **THEN** they are redirected to `/en`

### Requirement: Locale-aware routing
All pages SHALL be under the `[lang]` route segment. The lang parameter SHALL be validated against supported locales.

#### Scenario: Invalid locale
- **WHEN** a user navigates to `/fr/docs/agent-sdk`
- **THEN** the system returns a 404 page

### Requirement: UI string translations
Landing page UI strings (header, hero, features, CTA) SHALL be translated for all three locales using a dictionary-based approach.

#### Scenario: Landing page in Traditional Chinese
- **WHEN** a user navigates to `/zh-TW`
- **THEN** the hero headline, feature descriptions, and CTA text are all in Traditional Chinese

### Requirement: Language switcher
The navigation header SHALL include a language switcher that preserves the current path when switching locales.

#### Scenario: Switch language on docs page
- **WHEN** a user is on `/en/docs/agent-sdk/getting-started` and switches to `zh-TW`
- **THEN** they navigate to `/zh-TW/docs/agent-sdk/getting-started`

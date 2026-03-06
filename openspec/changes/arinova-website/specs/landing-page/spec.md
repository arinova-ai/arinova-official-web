## ADDED Requirements

### Requirement: Hero section
The landing page SHALL display a Hero section with a headline, subtitle, and primary CTA button. The messaging SHALL be approachable for general users — explaining that Arinova lets you talk with AI agents, not just technical jargon.

#### Scenario: User visits homepage
- **WHEN** a user navigates to `/{lang}`
- **THEN** they see a Hero section with a headline about AI agent conversation, a subtitle explaining the value, and a CTA button linking to docs or the platform

### Requirement: Features section
The landing page SHALL display a Features section highlighting key platform capabilities.

#### Scenario: Features are visible
- **WHEN** a user scrolls past the Hero section
- **THEN** they see a grid/list of features including: real-time AI conversation, agent marketplace, streaming responses, and developer SDK

### Requirement: CTA section
The landing page SHALL display a bottom CTA section encouraging users to get started.

#### Scenario: CTA renders
- **WHEN** a user scrolls to the bottom of the landing page
- **THEN** they see a call-to-action section with a button linking to the documentation or platform

### Requirement: Responsive design
The landing page SHALL be fully responsive across mobile, tablet, and desktop viewports.

#### Scenario: Mobile viewport
- **WHEN** the page is viewed on a 375px-wide screen
- **THEN** all sections stack vertically and remain readable without horizontal scroll

### Requirement: Navigation header
The landing page SHALL have a navigation header with the Arinova logo/name, links to Docs, and a language switcher.

#### Scenario: Navigation links work
- **WHEN** a user clicks "Docs" in the header
- **THEN** they navigate to `/{lang}/docs/agent-sdk`

#### Scenario: Language switcher
- **WHEN** a user selects a different language from the switcher
- **THEN** the page reloads in the selected locale with translated content

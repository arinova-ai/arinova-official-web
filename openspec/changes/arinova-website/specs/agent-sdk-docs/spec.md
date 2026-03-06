## ADDED Requirements

### Requirement: SDK overview page
The docs SHALL include an overview page (`/docs/agent-sdk`) explaining what the Agent SDK is, who it's for, and what you can build with it.

#### Scenario: Overview page content
- **WHEN** a user navigates to `/{lang}/docs/agent-sdk`
- **THEN** they see an introduction to the Arinova Agent SDK with a link to the getting-started guide

### Requirement: Getting started guide
The docs SHALL include a getting-started page that walks through installation, obtaining a bot token, and creating a minimal working agent.

#### Scenario: Install instructions
- **WHEN** a user reads the getting-started page
- **THEN** they see `npm install @arinova-ai/agent-sdk` with copy button

#### Scenario: First agent example
- **WHEN** a user follows the getting-started guide
- **THEN** they have a working agent that connects to Arinova Chat and echoes messages back, in under 5 minutes

### Requirement: Core concepts page
The docs SHALL include a core-concepts page covering connection lifecycle, task handling, streaming responses, and skills.

#### Scenario: Connection lifecycle explained
- **WHEN** a user reads the core concepts page
- **THEN** they understand: connect → authenticate → receive tasks → auto-reconnect on disconnect

#### Scenario: Streaming explained
- **WHEN** a user reads the streaming section
- **THEN** they understand how to use `sendChunk()` for incremental responses and `sendComplete()` to finalize

#### Scenario: Skills explained
- **WHEN** a user reads the skills section
- **THEN** they understand how to declare `AgentSkill` objects and how they appear as slash commands to users

### Requirement: API reference page
The docs SHALL include a complete API reference page documenting every public class, method, interface, and type exported by @arinova-ai/agent-sdk.

#### Scenario: ArinovaAgent class documented
- **WHEN** a user reads the API reference
- **THEN** they see constructor options (`ArinovaAgentOptions`), methods (`connect`, `disconnect`, `onTask`, `on`), and their signatures

#### Scenario: TaskContext documented
- **WHEN** a user reads the API reference
- **THEN** they see all `TaskContext` properties: `taskId`, `conversationId`, `content`, `sendChunk`, `sendComplete`, `sendError`

#### Scenario: Type definitions documented
- **WHEN** a user reads the API reference
- **THEN** they see `AgentSkill`, `AgentEvent`, `AgentEventListener`, and `TaskHandler` types with descriptions

### Requirement: Examples page
The docs SHALL include an examples page with practical, copy-pasteable code samples.

#### Scenario: Echo bot example
- **WHEN** a user reads the examples page
- **THEN** they see a complete echo bot example that echoes user messages back

#### Scenario: LLM integration example
- **WHEN** a user reads the examples page
- **THEN** they see an example integrating with an LLM (e.g., OpenAI) with streaming

#### Scenario: Multi-skill agent example
- **WHEN** a user reads the examples page
- **THEN** they see an example agent that declares multiple skills and handles them differently

### Requirement: Docs sidebar navigation
The Agent SDK docs SHALL have a sidebar with ordered navigation: Overview → Getting Started → Core Concepts → API Reference → Examples.

#### Scenario: Sidebar order
- **WHEN** a user views any Agent SDK doc page
- **THEN** the sidebar shows all 5 pages in the correct order with the current page highlighted

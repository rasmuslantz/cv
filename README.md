<div align="center">

# Rasmus Lantz

### Software Developer · AI & Automation · iOS / macOS

I build products, automation systems and developer tooling, with a strong focus on turning ideas into working software.

[![GitHub](https://img.shields.io/badge/GitHub-rasmuslantz-181717?logo=github)](https://github.com/rasmuslantz)
[![DriveSplit](https://img.shields.io/badge/DriveSplit-iOS%20App-000000?logo=apple)](https://drivesplit.pages.dev)
[![PinShift](https://img.shields.io/badge/PinShift-macOS%20App-000000?logo=apple)](https://pinshift.pages.dev)
[![Projects](https://img.shields.io/badge/Selected-Projects-2ea44f?logo=github)](PROJECTS.md)

</div>

## About me

I'm a developer interested in the intersection of **software engineering, AI and automation**. Most of my work starts with a practical problem, then grows into a product, internal tool or automated workflow that solves it.

I particularly enjoy projects where several areas meet: native applications, APIs, AI agents, workflow automation, release engineering, product design and infrastructure.

A large part of my current work lives in private repositories while products are being developed, so this profile focuses on the engineering problems, architecture and technologies behind them rather than exposing proprietary source code.

```text
Build first. Explain it once it works.
```

## Currently building

### DriveSplit

**Native iOS route planning and trip-cost sharing app**

DriveSplit estimates the real fuel cost of a journey and splits it between passengers. It combines route planning, vehicle consumption, fuel pricing, trip history and live trip information in a polished native iPhone experience.

**Engineering:** Swift · SwiftUI · SwiftData · MapKit · ActivityKit · XCTest · iOS

Highlights:

- route alternatives and journey selection
- vehicle and fuel-consumption modeling
- deterministic trip-cost calculations
- passenger expense splitting
- GPS filtering and live-trip state
- Live Activities
- localized decimal handling
- persistent trip and vehicle data
- native light/dark UI

→ [drivesplit.pages.dev](https://drivesplit.pages.dev)

### PinShift

**Local-first macOS developer utility for iPhone Core Location simulation**

PinShift is a desktop application that coordinates Apple's developer-location capabilities on an authorized iPhone. The project combines a Tauri desktop frontend with Rust and a Python device bridge, while keeping strict safety boundaries around Trust, Developer Mode, signing and device ownership.

**Engineering:** TypeScript · React · Tauri · Rust · Python · Astro · Cloudflare · GitHub Actions

Highlights:

- USB device discovery and state management
- iOS-version-aware simulation paths
- route simulation and live telemetry
- local-first application state
- installation-bound signed entitlements
- macOS Keychain integration
- release signing and notarization workflows
- updater trust and release attestation
- CI regression and security checks
- privacy-oriented redaction of technical output

→ [pinshift.pages.dev](https://pinshift.pages.dev)

## Other projects

For a faster overview, see **[Selected Projects →](PROJECTS.md)**.

### Health wearable platform

Native SwiftUI health application built around a third-party smartband SDK and Apple Health. The architecture explores HealthKit-first data storage, Bluetooth/device abstractions, explainable wellness scoring, SwiftData caching and privacy-first health-data handling.

`Swift` `SwiftUI` `HealthKit` `SwiftData` `Bluetooth` `XCTest`

### Daily Frame

Experimental privacy-first iOS memory application combining daily selfies, one-second video, journaling, memories, local search and offline backup/restore.

The project became a useful engineering sandbox for actor-based storage, AVFoundation, schema migrations, atomic restores, file protection and local-first architecture.

`Swift` `SwiftUI` `AVFoundation` `LocalAuthentication` `XCTest`

### Casa Puffy Marketing

Private internal marketing platform inspired by tools such as Klaviyo, designed around a real ecommerce environment rather than as a generic SaaS project.

Work includes contact ingestion, segmentation foundations, event tracking, Shopify webhooks, email infrastructure, consent handling, admin authentication and audit logging.

`Next.js` `TypeScript` `Supabase` `PostgreSQL` `Shopify` `Resend` `Cloudflare`

### AI & workflow automation

I build automation workflows that connect services, repositories, webhooks and AI agents. n8n is frequently the orchestration layer, with scripts and APIs handling transformation, validation and application-specific logic.

Examples include:

- Git / GitHub workflow automation
- automated repository backups with change detection
- AI-assisted development pipelines
- webhook-driven actions
- structured content generation and validation
- ecommerce and operational workflows

`n8n` `REST APIs` `Webhooks` `JavaScript` `Python` `AI Agents`

## Tech I work with

### Application development

![Swift](https://img.shields.io/badge/Swift-F05138?logo=swift&logoColor=white)
![SwiftUI](https://img.shields.io/badge/SwiftUI-0D96F6?logo=swift&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white)

### Apple ecosystem

`iOS` · `macOS` · `SwiftData` · `MapKit` · `HealthKit` · `ActivityKit` · `AVFoundation` · `LocalAuthentication` · `Keychain`

### Backend, infrastructure & delivery

![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?logo=cloudflare&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?logo=supabase&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?logo=githubactions&logoColor=white)
![Tauri](https://img.shields.io/badge/Tauri-24C8DB?logo=tauri&logoColor=white)

### Automation & AI

`n8n` · `AI Agents` · `LLM-assisted development` · `REST APIs` · `Webhooks` · `Workflow orchestration` · `Structured generation` · `Automated validation`

### Platforms & tools

`Git` · `GitHub` · `Xcode` · `VS Code` · `Cloudflare Pages / Workers` · `Shopify` · `ServiceNow` · `Azure`

## How I like to build

I tend to work end-to-end rather than staying inside one layer of a project. That can mean designing the product flow, implementing the application, connecting services, writing tests, setting up CI, automating repetitive work and then shipping the result.

Some recurring engineering principles in my projects:

- **Automate repetitive work**, but only when the automation reflects real state changes.
- **Keep critical logic testable**, especially calculations, persistence, migrations and release paths.
- **Prefer explicit failure over silent corruption** for user data, billing and release workflows.
- **Keep privacy boundaries intentional**, particularly around device identifiers, health data and local user data.
- **Treat release engineering as part of the product**, not an afterthought.
- **Prototype quickly, then harden what proves useful.**

## AI-assisted development

I use AI extensively as part of my development workflow, but not simply as a code generator. I use agents for implementation, repository analysis, test generation, code review, refactoring, documentation and repetitive engineering tasks, while keeping validation and product decisions explicit.

That has also led me to build workflows around AI itself, especially where agents can be connected to GitHub, n8n, APIs or structured datasets instead of being used only through a chat interface.

## Professional experience

My professional background includes **ServiceNow technical consulting and development** in enterprise environments, alongside independent product and automation work.

Relevant experience includes:

- custom ServiceNow applications and portal/widget development
- JavaScript-based platform work and configuration
- integrations through REST APIs and external services
- security assessment, remediation and platform hardening work
- an Azure-based integration connecting ServiceNow Business Continuity workflows with SafeBreach
- troubleshooting and support in large enterprise environments
- Git-based development, debugging and iterative delivery in Agile/Scrum-style workflows

### ServiceNow certifications

- **Certified System Administrator (CSA)**
- **Certified Application Developer (CAD)**
- Dynamic SecOps Professional
- Technical Sales Professional

Alongside enterprise platform work, I have focused heavily on building independent software and automation products that give me hands-on exposure across native apps, web platforms, AI tooling, APIs and engineering operations.

I am especially interested in roles involving:

- software development
- AI engineering / applied AI
- business and workflow automation
- agentic systems
- integrations and APIs
- developer tooling
- product engineering

## Education

Currently completing a university degree in **Information and Digital Documentation Management** at the University of Barcelona, alongside previous university studies in Sweden.

My academic background complements software development with information architecture, structured data, information systems and digital information management.

## Languages

- **English** · Fluent
- **Spanish** · Native
- **Catalan** · Fluent
- **Swedish** · Native

## What you will find on this GitHub

Most production and active product repositories are private, but GitHub is still the main development history for many of my projects. Public repositories are used for selected projects, support infrastructure, experiments and technical documentation.

Private activity includes application development, pull requests, release work, testing, CI, refactors and AI-assisted engineering workflows.

If a project interests you, feel free to ask about the architecture, engineering decisions or the problems it solves.

<div align="center">

### Build things. Automate the boring parts. Ship the useful parts.

</div>

<div align="center">

# Rasmus Lantz

### AI, Automation & Integration Developer · Product Builder · iOS / macOS

I build native apps, automation systems and developer tools, usually from the first rough idea through implementation, integrations, testing and release.

[![Portfolio](https://img.shields.io/badge/Portfolio-Website-174B3A?logo=githubpages&logoColor=white)](https://rasmuslantz.github.io/cv/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Rasmus%20Lantz-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rasmus-lantz)
[![Projects](https://img.shields.io/badge/Selected-Projects-181717?logo=github)](projects.html)
[![Engineering](https://img.shields.io/badge/Engineering-Approach-181717)](engineering.html)
[![Results](https://img.shields.io/badge/Execution-Results-181717)](results.html)
[![Automation](https://img.shields.io/badge/n8n-Automation-181717?logo=n8n)](automation.html)

</div>

## About

I'm interested in the point where **software engineering, automation and real operational problems** meet.

My projects range from native iOS products and macOS developer tooling to community platforms, ecommerce systems and n8n workflows. I tend to work end-to-end: understand the process, model the state, build the interface or service, connect the APIs, test the risky logic and automate the repetitive parts.

A large part of my active product source stays private, so this repository acts as the public engineering layer around that work.

```text
Build first. Explain it once it works.
```

## Selected execution

- **~50K organic downloads** for BeMyV, with a peak at **Top 6 in Spain's Free Entertainment chart** without paid promotion.
- Native iOS and macOS products taken through real distribution and release workflows.
- Production automation around ecommerce, support and document operations.
- Cross-platform product work across iOS, Android and web.
- Daily enterprise IT experience with ServiceNow-driven incident and ticket workflows.

[Execution & results →](results.html)

## Flagship work

### DriveSplit

**Native iOS route planning and trip-cost sharing**

DriveSplit estimates the real fuel cost of a journey and splits it between passengers. It combines route planning, vehicle consumption, fuel pricing, trip history and live trip information in a native iPhone experience.

`Swift` `SwiftUI` `SwiftData` `MapKit` `ActivityKit` `XCTest`

- route alternatives and explicit route selection
- deterministic trip-cost calculations
- passenger splitting
- persistent vehicles and trip history
- GPS filtering and live-trip state
- Live Activities
- localized number handling

[Product site](https://drivesplit.pages.dev) · [Case study](case-studies.html#drivesplit)

### PinShift

**Local-first macOS developer utility for authorized iPhone Core Location testing**

PinShift spans a React/TypeScript desktop interface, Tauri/Rust native boundary and Python device bridge, with release and platform-safety work around physical iPhones.

`React` `TypeScript` `Tauri` `Rust` `Python` `GitHub Actions`

- USB device discovery and state
- iOS-version-aware simulation paths
- route simulation and telemetry
- local-first state
- Keychain-backed values
- signing and notarization
- updater trust and release attestation
- privacy-aware diagnostics

[Product site](https://pinshift.pages.dev) · [Public architecture](https://github.com/rasmuslantz/PinShift-Support)

### Illa del Bosc Pàdel

**Cross-platform reservation system for a real residential community**

A private product for residents to reserve padel courts, see live availability, manage bookings, publish open matches and access community information. A role-protected admin workspace handles closures, invites, content, schedules and booking policy.

`Expo` `React Native` `TypeScript` `Expo Router` `Supabase` `Postgres` `RLS`

- iOS, Android and web from one codebase
- invite-only resident onboarding
- backend-enforced booking rules
- live availability
- open-match / looking-for-players flows
- Catalan, Spanish and English foundations
- admin operations without direct database editing

[Case study](case-studies.html#padel)

### Neon Swipe

**Swipe-first consumer photo cleanup**

A focused mobile product built around one photo and one decision at a time, with progress, resumable sessions, undo and safe recovery.

The public repository contains the bilingual product website and architecture documentation.

[Public repository](https://github.com/rasmuslantz/NeonSwipe)

## Automation systems

I use **n8n** as an orchestration layer for operational workflows involving APIs, webhooks, structured data and AI-assisted steps.

Typical work includes:

- AI-assisted customer support
- Instagram and email routing
- ecommerce / Shopify operations
- document and delivery-note workflows
- GitHub and repository automation
- structured generation and validation
- change-aware backups
- internal dashboards and small operational tools

My preferred workflow shape is:

```text
Trigger → Normalize → Validate → Decide → Act → Trace
```

The emphasis is on idempotency, change detection, traceability and explicit failure paths rather than simply making a workflow run frequently.

[Explore automation](automation.html)

## Professional experience

### Casa Puffy · Co-Founder & Automation Lead

Automation and technical systems across support, operations, localisation, content, backend services and internal tooling for a Shopify business.

### LLORCASA INOX · Automation & AI Consultant

Process mapping and practical automation with n8n, connected services, document workflows, validation, traceability and customer-facing AI tooling.

### Computacenter · First Line Analyst / IT Analyst

Enterprise IT support with daily ServiceNow use for incident/ticket handling, troubleshooting, escalation, documentation and cross-team coordination in SLA-driven workflows.

### Keystream Holding AB · Software Developer Intern

Built a C-based command-line tool for iOS SDK developers working and debugging on macOS targets.

[Full experience](experience.html)

## Tech

### Product development

`Swift` · `SwiftUI` · `SwiftData` · `MapKit` · `ActivityKit` · `HealthKit` · `AVFoundation` · `React Native` · `React` · `TypeScript` · `JavaScript` · `Python` · `Java` · `C` · `Rust`

### Backend & data

`Supabase` · `PostgreSQL` · `REST APIs` · `Webhooks` · `OAuth 2.0` · `JSON` · `Shopify`

### Automation & delivery

`n8n` · `AI-assisted workflows` · `GitHub Actions` · `Cloudflare Pages / Workers` · `Tauri` · `macOS signing / notarization` · `Linux` · `self-hosted systems`

### Enterprise

`ServiceNow operational use` · `ITSM workflows` · `SLA-driven support` · `documentation` · `validation` · `traceability`

## How I build

- **Own the full path.** UI, logic, APIs, tests, release and operations are one product.
- **Keep risky logic testable.** Calculations, persistence, migrations and permissions should be explicit.
- **Automate meaningful state changes.** Scheduled noise is not useful automation.
- **Prefer useful failure.** A visible, diagnosable failure is better than silent corruption.
- **Prototype fast, harden selectively.** Not every experiment deserves production architecture.
- **Archive honestly.** Paused or abandoned projects stay clearly separate from active work.

## Other work

**BeMyV** · shipped iOS product · ~50K organic downloads · Top 6 Spain at peak  
**Daily Frame** · paused iOS experiment  
**Invitely** · paused iOS experiment  
**Aurelia** · archived / abandoned earlier prototype

University coursework is intentionally kept separate from independent product work.

## Explore

**[Portfolio](https://rasmuslantz.github.io/cv/)** · **[LinkedIn](https://www.linkedin.com/in/rasmus-lantz)** · **[Projects](projects.html)** · **[Engineering](engineering.html)** · **[Results](results.html)** · **[Experience](experience.html)** · **[Case studies](case-studies.html)** · **[Automation](automation.html)**

<div align="center">

### Build useful things. Automate the repetitive parts. Ship the result.

</div>

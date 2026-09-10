# Engineering Case Studies

A closer look at a few projects, focused on the engineering problems and decisions rather than only the feature list.

## DriveSplit

**Problem:** splitting fuel costs sounds simple until route selection, vehicle consumption, fuel prices, passenger count, localization and live trip state all have to agree on the same answer.

**What I built**

- native iPhone flow in SwiftUI
- persistent vehicle and trip data with SwiftData
- route alternatives and route selection with MapKit
- deterministic trip-cost calculations
- passenger-level cost splitting
- live trip state and GPS filtering
- Live Activity support through ActivityKit
- localized numeric input and decimal handling
- unit tests around calculations, invalid states and edge cases

**Engineering decisions**

The calculation layer is kept separate from presentation so cost logic can be tested without the UI. Route choice is explicit rather than hidden behind a single automatic result. Invalid transport paths are treated as invalid product states instead of being silently accepted. Persistent entities such as vehicles and trips are modeled independently from transient route and live-session state.

**What it demonstrates:** native product engineering, MapKit, state modeling, persistence, testing, UX decisions and shipping an end-to-end consumer app.

[Product site](https://drivesplit.pages.dev)

---

## PinShift

**Problem:** developer location testing on physical iPhones spans several systems at once: the Mac application, USB device communication, Apple's development requirements, local state, signing and release delivery.

**What I built**

- macOS desktop application with React and TypeScript
- Tauri/Rust desktop boundary
- Python-based device bridge
- device discovery and connection state
- iOS-version-aware location simulation paths
- route simulation and live telemetry
- local-first application state
- installation-bound entitlement handling
- macOS Keychain integration
- signed and notarized release workflows
- updater trust and release attestation checks
- privacy-oriented redaction of technical output

**Engineering decisions**

PinShift deliberately does not try to hide or bypass Apple's trust boundaries. Device ownership, Trust, Developer Mode and signing requirements are treated as product constraints. Diagnostic output is useful enough for debugging while avoiding unnecessary exposure of device identifiers and private location data.

**What it demonstrates:** desktop architecture, multi-language integration, native platform constraints, release engineering, security boundaries and developer tooling.

[Product site](https://pinshift.pages.dev) · [Public support repository](https://github.com/rasmuslantz/PinShift-Support)

---

## Automation systems

**Problem:** repetitive operational work is often automated too early, producing noisy workflows that run constantly without checking whether the underlying state actually changed.

**How I approach it**

- use n8n as an orchestration layer where it fits
- connect services through APIs and webhooks
- normalize data before downstream actions
- separate trigger, transformation, validation and side effects
- make workflows idempotent where possible
- only create commits, messages or updates when there is a meaningful change
- keep secrets and environment-specific values outside workflow logic
- add explicit error paths instead of silently dropping failed actions

**Typical use cases**

- GitHub and repository automation
- change-aware backups
- AI-assisted processing pipelines
- ecommerce operations
- document and structured-data workflows
- webhook-driven internal tools

**What it demonstrates:** process design, integration thinking, APIs, structured data, automation reliability and AI-assisted workflows.

---

## Casa Puffy Marketing

**Problem:** ecommerce marketing tooling needs more than campaign screens. Contact ingestion, consent, segmentation, events, webhooks, email infrastructure and auditability all need to agree on the same customer state.

**Architecture explored**

- Next.js and TypeScript application layer
- Supabase and PostgreSQL data model
- Shopify webhook ingestion
- event and contact foundations
- segmentation primitives
- email infrastructure
- admin authentication
- consent-aware data handling
- audit logging

**What it demonstrates:** product architecture, ecommerce integration, backend modeling, event-driven systems and operational software.

---

## WalkMates

**Problem:** software testing concepts are easier to understand when the system under test has realistic boundaries rather than toy functions.

**What the project covers**

- specification-based testing
- equivalence partitioning and boundary-value analysis
- structural coverage
- mutation testing with PIT
- mocks and test seams
- testing AI-assisted behavior
- CI evidence through GitHub Actions

**Stack:** Java 21, Spring Boot, Maven, H2, JUnit 5, Mockito, AssertJ, JaCoCo and PIT.

**What it demonstrates:** testing methodology, Java/Spring engineering, CI and deliberately testable architecture.

[View repository](https://github.com/rasmuslantz/walkmates-test)

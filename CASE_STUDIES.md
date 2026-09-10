# Engineering Case Studies

A closer look at selected products and systems, focused on engineering problems and decisions rather than only feature lists.

## DriveSplit

**Problem:** splitting fuel costs sounds simple until route selection, vehicle consumption, fuel prices, passenger count, localization and live trip state all need to produce the same answer.

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

**Engineering approach:** keep calculation logic separate from presentation, make route choice explicit, distinguish persistent entities from transient live-session state, and treat unsupported journeys as invalid product states instead of silently accepting them.

[Product site](https://drivesplit.pages.dev) · [Visual case study](case-studies.html#drivesplit)

---

## PinShift

**Problem:** developer location testing on physical iPhones spans several systems at once: the Mac application, USB device communication, Apple's development requirements, local state, signing and release delivery.

**What I built**

- React and TypeScript macOS desktop interface
- Tauri/Rust native application boundary
- Python-based device bridge
- device discovery and connection state
- iOS-version-aware location simulation paths
- route simulation and live telemetry
- local-first application state
- installation-bound entitlement handling
- macOS Keychain integration
- signed and notarized release workflows
- updater trust and release-attestation checks
- privacy-oriented diagnostic redaction

**Engineering approach:** model device compatibility and trust as explicit states, keep native-sensitive functionality behind a small boundary, and treat signing, notarization and updater trust as part of the product rather than release chores.

[Product site](https://pinshift.pages.dev) · [Public architecture](https://github.com/rasmuslantz/PinShift-Support/blob/main/ARCHITECTURE.md)

---

## Illa del Bosc Pàdel

**Problem:** a real community booking system needs more than a calendar. Availability, resident access, booking limits, admin closures, open matches and community content all need a consistent source of truth.

**Architecture**

- Expo + React Native
- TypeScript
- Expo Router
- Supabase Auth
- Postgres
- Row Level Security
- TanStack Query
- React Hook Form + Zod
- multilingual foundation for Catalan, Spanish and English
- migration-driven backend

**Product scope**

- live court availability
- 30, 60 and 90-minute reservations
- booking creation and cancellation
- open matches / looking-for-players flows
- invite-only resident onboarding
- resident rules, notices and schedules
- admin closures, invite codes, content and booking-policy controls

**Engineering approach:** enforce access and booking rules close to the data layer, keep resident and admin functionality role-aware, and make the same product work across iOS, Android and web.

[Visual case study](case-studies.html#padel)

---

## Automation systems

**Problem:** scheduled workflows often create noise because they act every time they run, even when the underlying state did not change.

**How I approach automation**

```text
Trigger → Normalize → Validate → Decide → Act → Trace
```

Typical work includes:

- n8n orchestration
- REST APIs and webhooks
- structured JSON transformation
- change detection
- idempotent actions
- explicit failure branches
- AI-assisted processing with validation
- ecommerce and support operations
- repository and GitHub workflows

The goal is to automate meaningful state transitions, not simply to make workflows run frequently.

[Automation page](automation.html)

---

## Neon Swipe

**Problem:** deleting photos should feel quick without making destructive actions feel unsafe.

The product reduces the interaction to one item and one decision at a time, while keeping progress, undo and recovery visible.

Work included:

- swipe-first review flow
- media-type filtering
- queue and progress state
- resumable sessions
- undo and recovery behavior
- bilingual public product website
- lightweight responsive frontend

[Public repository](https://github.com/rasmuslantz/NeonSwipe) · [Architecture notes](https://github.com/rasmuslantz/NeonSwipe/blob/main/ARCHITECTURE.md)

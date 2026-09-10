# Project Index

A compact overview of selected products and engineering systems. Most active product source repositories are private, so this page focuses on what each project solves and the engineering work behind it.

| Project | Status | Area | Main technologies |
| --- | --- | --- | --- |
| **DriveSplit** | Active | Native iOS / mobility | Swift, SwiftUI, SwiftData, MapKit, ActivityKit, XCTest |
| **PinShift** | Active | macOS developer tooling | TypeScript, React, Tauri, Rust, Python, GitHub Actions |
| **Illa del Bosc Pàdel** | Active / private | Community booking platform | Expo, React Native, TypeScript, Supabase, Postgres, RLS |
| **Neon Swipe** | Shipped / maintenance | Consumer mobile product | Mobile UX, HTML, CSS, JavaScript, bilingual web |
| **Automation systems** | Ongoing | Workflow automation | n8n, REST APIs, webhooks, JSON, JavaScript, Python, AI workflows |
| **Casa Puffy systems** | Production / internal | Ecommerce automation | Shopify, APIs, webhooks, internal tooling, AI-assisted support |
| **BeMyV** | Shipped / maintenance | Consumer iOS app | Swift, iOS, StoreKit, XCTest |
| **Daily Frame** | Paused | Local-first iOS media | Swift, SwiftUI, AVFoundation, LocalAuthentication |
| **Invitely** | Paused | Native iOS product | Swift, SwiftUI, QR/link sharing, publishing abstractions |
| **Aurelia** | Archived / abandoned | Earlier AI product concept | React, TypeScript, Vite, Tailwind CSS, Framer Motion |

## DriveSplit

A native iPhone app for route planning, estimating fuel cost and splitting real journey expenses between passengers. The engineering covers routing, persistent vehicle/trip state, location handling, Live Activities, localized number formats and deterministic cost calculations.

Product: [drivesplit.pages.dev](https://drivesplit.pages.dev)

## PinShift

A local-first macOS utility that coordinates Apple's developer-location capabilities on an authorized iPhone. It combines a React/TypeScript frontend, Tauri/Rust native boundary and Python device bridge with explicit device-state, security and release boundaries.

Product: [pinshift.pages.dev](https://pinshift.pages.dev)

Public architecture: [github.com/rasmuslantz/PinShift-Support](https://github.com/rasmuslantz/PinShift-Support)

## Illa del Bosc Pàdel

A private cross-platform reservation system for residents of a real residential community.

The app includes:

- live court availability
- bookings and cancellations
- open matches / looking-for-players flows
- invite-only resident access
- Catalan, Spanish and English foundations
- community rules and schedules
- admin tools for closures, invites, content and booking policy

The implementation uses Expo, React Native, TypeScript and Expo Router, with Supabase Auth, Postgres and Row Level Security as the backend foundation.

## Neon Swipe

A consumer photo-cleanup product built around one-action-at-a-time review: swipe to keep or remove, filter by media type, track progress and safely undo decisions.

Public repository: [github.com/rasmuslantz/NeonSwipe](https://github.com/rasmuslantz/NeonSwipe)

## Automation systems

I build operational automation around n8n, APIs, webhooks and structured data. The emphasis is on reliable workflows rather than activity for activity's sake.

Typical patterns include:

- AI-assisted support routing and draft generation
- Shopify and ecommerce operations
- document and delivery-note workflows
- repository and GitHub automation
- change-aware backups
- structured AI generation with validation
- internal dashboards and small operational tools

[See the visual automation page](automation.html)

## Casa Puffy systems

Automation and internal tooling for a Shopify business, covering support, operations, content, backend services and integrations. Work includes AI-assisted support workflows, routing, escalation logic, APIs, webhooks and internal dashboards.

## BeMyV

A shipped native iOS entertainment product including StoreKit monetization, testing and the full independent app-release process.

## Daily Frame

A paused privacy-first iOS memory experiment exploring local storage, AVFoundation, schema migrations, file protection and backup/restore.

## Invitely

A paused native iOS invitation-creation experiment with templates, themes, reveal animations, QR/link sharing and reusable service abstractions.

## Aurelia

**Archived / abandoned.** An earlier AI-personalized jewelry discovery experiment built with React and TypeScript. It is retained only as past product exploration and is not an active project.

## Academic work

University coursework is intentionally kept separate from independent projects. For example, **WalkMates** is software-testing coursework and is not presented here as one of my own standalone products.

---

**Private source does not mean invisible work.** Architecture, product decisions, testing, release engineering and technical trade-offs can still be documented without exposing proprietary implementation.

# Project Index

A compact overview of selected products, experiments and engineering projects. Most active product source repositories are private, so this page focuses on what each project solves and the engineering areas explored.

| Project | Status | Area | Main technologies |
| --- | --- | --- | --- |
| **DriveSplit** | Active | Native iOS / mobility | Swift, SwiftUI, SwiftData, MapKit, ActivityKit, XCTest |
| **PinShift** | Active | macOS developer tooling | TypeScript, React, Tauri, Rust, Python, Astro, GitHub Actions |
| **WalkMates** | Active / educational | Software testing / Java | Java 21, Spring Boot, JUnit 5, Mockito, JaCoCo, PIT |
| **HT** | Development / experiment | Health & wearable platform | Swift, SwiftUI, HealthKit, SwiftData, wearable SDK integration |
| **Casa Puffy Marketing** | Private internal project | Ecommerce automation | Next.js, TypeScript, Supabase, PostgreSQL, Shopify, Resend |
| **BeMyV** | Shipped / maintenance | Consumer iOS app | Swift, iOS, StoreKit, XCTest |
| **Daily Frame** | Paused experiment | Local-first iOS media | Swift, SwiftUI, AVFoundation, LocalAuthentication, XCTest |
| **Invitely / Invites** | Paused experiment | Native iOS product | Swift, SwiftUI, local/remote service abstractions, QR/link sharing |
| **Neon Swipe** | Maintenance mode | Consumer mobile product / web | HTML, CSS, JavaScript, bilingual product frontend |
| **Aurelia** | Prototype | AI product concept / frontend | React, TypeScript, Vite, Tailwind CSS, Framer Motion |
| **n8n Git Automation** | Ongoing tooling | Developer automation | n8n, GitHub, webhooks, APIs, AI-assisted workflows |

## DriveSplit

A native iPhone app for route planning, estimating fuel cost and splitting real journey expenses between passengers. The engineering work covers routing, persistent vehicle/trip state, location handling, Live Activities, localized number formats and deterministic cost calculations.

Product: [drivesplit.pages.dev](https://drivesplit.pages.dev)

## PinShift

A local-first desktop utility that coordinates Apple's developer-location services on an authorized iPhone. It combines a Tauri/React frontend, Rust native layer and Python device bridge with strict release, security and device-state boundaries.

Product: [pinshift.pages.dev](https://pinshift.pages.dev)

Public architecture/support: [github.com/rasmuslantz/PinShift-Support](https://github.com/rasmuslantz/PinShift-Support)

## WalkMates

A deliberately testable Spring Boot system built for software-testing coursework. The project covers specification-based testing, structural coverage, mutation testing, mocks, CI evidence and testing AI-assisted behavior.

It is designed so the domain has clean boundaries and explicit testing seams rather than only toy functions created for individual exercises.

Repository: [github.com/rasmuslantz/walkmates-test](https://github.com/rasmuslantz/walkmates-test)

## HT

A native health and smartband experiment centered on Apple Health as the durable data store. It explores HealthKit authorization, wearable integration, local caching, explainable wellness scoring and privacy-first health-data architecture.

## Casa Puffy Marketing

An internal marketing platform designed around a real ecommerce environment. It explores contact ingestion, Shopify event/webhook handling, consent-aware tracking, Supabase/PostgreSQL data modeling, email infrastructure, authentication and audit logging.

## BeMyV

A shipped native iOS entertainment product built in Swift. The project includes StoreKit monetization, application testing and the full process of taking an independent consumer app from development to release.

The launch reached more than 800 organic downloads on its first day and entered the free Entertainment category rankings in both Spain and the United States. The implementation repository remains private.

## Daily Frame

A privacy-first native iOS memory experiment combining daily selfies, one-second video, journaling and offline memories. Its strongest engineering areas include actor-based local storage, schema migrations, file protection, AVFoundation and atomic backup/restore.

## Invitely / Invites

A native iOS invitation-creation experiment with templates, themes, reveal animations, QR/link sharing, multi-step creation, reusable design-system primitives and separate storage/publishing service layers.

## Neon Swipe

A consumer photo-cleanup concept built around one-action-at-a-time review: swipe to keep or delete, sort by media type, track progress and safely undo decisions. The public repository contains its bilingual product website and architecture notes.

Repository: [github.com/rasmuslantz/NeonSwipe](https://github.com/rasmuslantz/NeonSwipe)

## Aurelia

An AI-personalized jewelry discovery concept used to explore premium consumer UX, bilingual interfaces and AI positioning without making the product feel like a technical demo.

Repository: [github.com/rasmuslantz/Aurelia](https://github.com/rasmuslantz/Aurelia)

## Automation work

Across projects I also build automation around GitHub, n8n, APIs and AI agents. The aim is not to manufacture activity, but to make real engineering work easier to trace: change detection, repository backups, structured PR generation, validation, code-review assistance and webhook-driven workflows.

---

**Private source does not mean invisible work.** Architecture, product decisions, testing, release engineering and technical trade-offs can still be discussed without exposing proprietary repositories.

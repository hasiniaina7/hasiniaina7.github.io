# Spec - Portfolio B2B Hasiniaina Christian

## Product Positioning

The portfolio presents Hasiniaina Christian LOVANIRINA as a senior full-stack engineer who designs reliable business systems for real operations.

Primary audience:

- B2B clients.
- Product and operations leaders.
- Technical decision makers needing web, mobile, AI, network, payment, or logistics systems.

Primary promise:

> Je conçois des plateformes SaaS B2B, des applications terrain, des outils de paiement et des systèmes d'IA appliquée adaptés à des environnements complexes.

## Anti-Positioning

The site must not lead with:

- Tourism websites.
- Photography.
- Journalism.
- Generic web developer claims.
- Over-stated AI transformation language.
- Metrics that are not traceable to the CV.

These elements can appear only as minor historical context if needed. They cannot shape the main narrative.

## Core Narrative

1. Terrain reality
   - The profile started with IT support, data collection, GPS/CAPI, connectivity and field constraints.

2. Data and operations
   - The profile moved into data quality, payments, beneficiaries, logistics, reporting and audit trails.

3. Business platforms
   - The current positioning is SaaS B2B, multi-tenant systems, operational dashboards, payments, field apps and production support.

4. Applied AI and infrastructure
   - AI is framed as controlled automation with human handoff, prompt audit, confidence thresholds and observability.
   - Infrastructure is framed as service reliability: Linux, Docker, Caddy/Nginx, FreeRADIUS, MikroTik, RadiusDesk, Starlink, WireGuard.

## User Stories

### US01 - B2B Client Orientation

As a B2B client, I want to understand in less than 10 seconds what Hasiniaina builds, so I can decide whether this portfolio is relevant to my operational problem.

Acceptance criteria:

- Hero headline communicates reliable systems for real operations.
- Subheading mentions SaaS B2B, field apps, payments and applied AI.
- Location and remote availability are visible.
- Primary CTA is contact-oriented.

### US02 - Proof Through Projects

As a decision maker, I want to see concrete projects with context, problem, flow, stack and result, so I can judge delivery capability.

Acceptance criteria:

- Four project pillars are visible: TZ Smart, AI Commerce Orchestrator, Fretunia/Trackmada, AIM Madagascar.
- Each project includes context, problem treated, simplified architecture/flow, real stack, and operational result.
- No project contains unsupported metrics.

### US03 - Journey Credibility

As a reader, I want to see how the profile evolved from field operations to business platforms, so the senior positioning feels earned.

Acceptance criteria:

- Timeline covers 2021-2026.
- Experiences include INSTAT, FID, Action Contre la Faim, AIM Madagascar, Fretunia/Trackmada, TECHZONE IT SOLUTION.
- The page explains progression: terrain -> data -> operations -> SaaS/AI -> infrastructure.

### US04 - Skills as Business Flows

As a client, I want to understand what the technical stack enables operationally, not just see technology badges.

Acceptance criteria:

- Skills are grouped by backend, frontend, mobile, IA, infrastructure, product/operations.
- Left side shows real use cases.
- Center shows capability groups and technologies.
- Right side shows business impacts.

### US05 - Honest Contact

As a prospect, I want to contact the engineer without being misled by a fake form.

Acceptance criteria:

- v1 supports mailto and real links.
- If a visual form is built before a backend exists, it must open mail client or clearly state that it prepares a message.
- No fake success toast saying a message was sent to a server.

## Content Requirements

### Profile

- Name: Hasiniaina Christian LOVANIRINA.
- Title: Senior Full-Stack Engineer or Ingénieur Full-Stack Senior.
- Location: Madagascar.
- Availability: Remote Afrique-Europe.
- Email: `hasiniainachristian7@gmail.com`.
- GitHub: `https://github.com/hasiniaina7`.
- LinkedIn: `https://www.linkedin.com/in/hasiniaina-christian/`.
- Portfolio: `https://hasiniaina7.github.io/`.
- TechZone: `https://www.techzone.lat`.
- TZ Smart: `https://app.techzone.lat`.
- Fretunia: `https://fretunia.com`.

### Project Pillars

#### TZ Smart

CV evidence:

- SaaS réseau, exploitation terrain and payment client.
- Django Ninja, PostgreSQL, React/Vite, TypeScript, Android Kotlin, Jetpack Compose, FCM, MVola, RadiusDesk, Starlink.
- CRM clients, zones, staff, incidents, visits, monitoring, notifications, payments, Android releases.

Allowed result wording:

- Suivi consolidé des clients, incidents, visites terrain, paiements intégrés et notifications en temps réel.

#### AI Commerce Orchestrator

CV evidence:

- Meta Webhooks, Messenger/WhatsApp, queue, worker, endpoint agent, RAG, ChromaDB, OpenAI, human handoff.
- Shadow/live modes, prompt audit, confidence thresholds, token security.

Allowed result wording:

- Réponses automatiques pertinentes et bilingues avec contrôle humain et audit complet des prompts.

#### Fretunia / Trackmada

CV evidence:

- Logistics B2B, multi-tenant, parcels, lots, events, invoicing, tariffs, public tracking, RLS/RBAC, API keys, webhooks.
- Used by 20+ enterprises in Africa.

Allowed result wording:

- Plateforme utilisée par 20+ entreprises en Afrique pour suivre et gérer leurs opérations logistiques.

#### AIM Madagascar

CV evidence:

- Beneficiary and cash payment management system.
- Express/Sequelize/PostgreSQL, React/Vite, Flutter, ExcelJS.
- Mobile cashier app, local recording, batch synchronization, partial/refused payments, Excel financial exports, audit trail.
- Financial workflows involving confirmed volumes of 500M+ Ar to 2Md+ Ar as system criticality.

Allowed result wording:

- Paiements tracés et sécurisés, exports financiers prêts à l'emploi et audit trail complet.

Forbidden wording:

- Any wording implying personal ownership of all financial volume outcomes.

## SEO Requirements

- HTML language: `fr`.
- Title: `Hasiniaina Christian LOVANIRINA - Ingénieur Full-Stack Senior B2B`.
- Description: must mention SaaS B2B, applications terrain, paiements, IA appliquée, infrastructure réseau, Madagascar and Afrique-Europe.
- Open Graph image: generated or implemented after visual identity is ready.
- One H1 per route.
- H2 sections must match the page purpose.
- Content must be statically indexable.

## Accessibility Requirements

- Visible focus states.
- Semantic navigation.
- Buttons and links must be distinguishable.
- Form labels visible.
- No text rendered only inside decorative SVG without accessible label.
- Color contrast target: WCAG AA.

## Constraints

- Static GitHub Pages optimized.
- No backend dependency for v1.
- No fake contact send.
- No runtime CMS.
- No duplicate content source.
- No old portfolio content unless deliberately migrated and verified.

## Open Risks

- The local folder is not an isolated Git repository.
- The published site source is remote and old.
- Contact endpoint is absent.
- Some images are mockups; implementation must convert them into responsive, accessible components, not raw screenshots.

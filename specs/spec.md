# Spec - Portfolio Recruteur Hasiniaina Christian

## Product Positioning

The portfolio presents Hasiniaina Christian LOVANIRINA as a senior full-stack engineer for recruiters and hiring managers.

Primary audience:

- Technical recruiters.
- Hiring managers.
- Product/IT leaders recruiting senior full-stack engineers.
- CTOs/founders evaluating hands-on delivery capability.

Primary promise:

> Ingénieur Full-Stack Senior capable de livrer des applications métier complètes : backend, frontend, mobile, données, IA appliquée, sécurité, tests et production, avec une méthode specs-driven augmentée par agents IA.

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

### US01 - Recruiter Orientation

As a recruiter, I want to understand in less than 10 seconds the target role, seniority level and core stack.

Acceptance criteria:

- Hero headline communicates Senior Full-Stack Engineer.
- Subheading mentions backend, frontend, mobile, data, applied AI, security, tests and production.
- Location and remote availability are visible.
- Primary CTAs lead to projects, skills and contact.

### US02 - Proof Through Projects

As a hiring manager, I want to see short case studies with role, stack, built scope, technical complexity and public proof.

Acceptance criteria:

- Four project pillars are visible: TZ Smart, AI Commerce Orchestrator, Fretunia/Trackmada, AIM Madagascar.
- Each project includes context, role, stack, built scope, technical complexity, public proof and private interview proof note.
- No project contains unsupported metrics.

### US03 - Skills Clarity

As a recruiter, I want to scan the technology coverage and map each capability to real projects.

Acceptance criteria:

- Skills show backend, frontend, mobile, data/security, applied AI and delivery.
- Backend includes Python/Django/Django Ninja and Node/Next.js/Express/Prisma/Sequelize.
- Frontend includes React, TypeScript, Next.js, Vite, dashboards, forms, PWA and SEO.
- Each skill block includes stack, project proof, level of usage and recruiter-readable result.

### US04 - Working Method

As a recruiter, I want to understand how the candidate uses AI agents without outsourcing engineering responsibility.

Acceptance criteria:

- A visible method section/page explains specs-driven development with AI agents.
- It states that agents accelerate execution while design, validation and responsibility remain human.
- It includes workflow steps and quality gates: specs, contracts, tasks, implementation, tests, review, delivery.

### US05 - Honest Contact

As a recruiter, I want direct contact and public links without being misled by a fake form.

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
- Do not change existing project dates.
- Do not frame private repositories as a weakness.
- Public proof should be sites, apps, demos, direct links, anonymized specs and interview discussion.

## Open Risks

- The local folder is not an isolated Git repository.
- The published site source is remote and old.
- Contact endpoint is absent.
- Some images are mockups; implementation must convert them into responsive, accessible components, not raw screenshots.

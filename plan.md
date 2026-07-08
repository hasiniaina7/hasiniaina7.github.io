# Plan - Refonte Portfolio B2B Hasiniaina Christian

## Objectif

Construire une refonte statique du portfolio autour d'un positionnement clair:

> Des systèmes fiables pour des opérations réelles.

Le site doit vendre une capacité senior de livraison bout en bout: cadrage, architecture, backend, frontend, mobile terrain, IA appliquée, infrastructure, sécurité, supervision et support production.

## Vérité Source

- CV analysé: `C:\Users\Mastershark\OneDrive\Documents\CV\CV_Hasiniaina_Christian_Long.pdf`
- Références design analysées:
  - `C:\Users\Mastershark\Downloads\ChatGPT Image 8 juil. 2026, 17_15_56.png`
  - `C:\Users\Mastershark\Downloads\ChatGPT Image 8 juil. 2026, 17_14_34.png`
  - `C:\Users\Mastershark\Downloads\ChatGPT Image 8 juil. 2026, 17_14_25.png`
  - `C:\Users\Mastershark\Downloads\ChatGPT Image 8 juil. 2026, 17_14_17.png`
  - `C:\Users\Mastershark\Downloads\ChatGPT Image 8 juil. 2026, 17_14_09.png`
- Workspace: `F:\dev\hasina-portfolio`
- Git boundary risk: `git rev-parse --show-toplevel` returns `F:/dev`, not this folder.

## Stack Recommandée

- Vite
- React
- TypeScript
- CSS Modules or Tailwind, final decision before implementation
- Native SVG/HTML diagrams for maps, flows, matrices, timelines
- Static GitHub Pages deployment

Decision: use React/TypeScript because the CV sells React, TypeScript, Vite, interfaces métier and SaaS B2B delivery. A plain static HTML build would be lighter, but weaker as a proof artifact for the target positioning.

## Architecture Prévue

```text
F:\dev\hasina-portfolio
|-- AGENTS.md
|-- plan.md
|-- task.md
|-- specs
|   |-- spec.md
|   |-- design.md
|   |-- data-model.md
|   |-- contracts.md
|   |-- test-strategy.md
|   `-- execution-status.md
`-- src                 # created only during implementation
    |-- data
    |   `-- portfolioData.ts
    |-- components
    |-- sections
    |-- diagrams
    |-- styles
    `-- tests
```

## Pages

1. Accueil
   - Hero editorial.
   - Operational map Africa-Europe-Madagascar.
   - Four proof pillars: SaaS multi-tenant, applications terrain offline, paiements et traçabilité, IA appliquée.
   - Selected project cards.
   - Operating principles.

2. Parcours
   - Progression from terrain to business platforms.
   - Timeline 2021-2026.
   - Experiences: INSTAT, FID, Action Contre la Faim, AIM Madagascar, Fretunia/Trackmada, TECHZONE IT SOLUTION.
   - Capability progression: terrain, data, operations, SaaS/IA, infrastructure.

3. Projets
   - TZ Smart.
   - AI Commerce Orchestrator.
   - Fretunia / Trackmada.
   - AIM Madagascar.
   - Each card must show context, problem, system flow, stack, operational result.

4. Compétences
   - Skills organized by usage and value flow, not a simple technology list.
   - Categories: backend, frontend, mobile, IA, infrastructure, product/operations.
   - Inputs and outputs must show business use cases and business impacts.

5. Contact
   - Client-facing engagement page.
   - v1 contact must be mailto + GitHub + LinkedIn.
   - A visual form may exist only as a mailto composer or clearly non-backend interaction. No fake "sent" state.

## Milestones

1. Specification baseline
   - Create AGENTS, plan, task, spec, design, data model, contracts, test strategy, execution status.
   - Status: in progress.

2. Project bootstrap
   - Decide repository boundary: initialize this folder or clone/replace the GitHub Pages source.
   - Create Vite + React + TypeScript app.
   - Configure routing, SEO, lint/build scripts.

3. Content implementation
   - Create `portfolioData.ts`.
   - Build navigation and page sections.
   - Implement diagrams as reusable components.

4. Design implementation
   - Implement tokens from `specs/design.md`.
   - Create responsive layouts.
   - Validate mobile, tablet, desktop.

5. Validation and deployment preparation
   - Run build and tests.
   - Run browser screenshots.
   - Audit links, SEO, a11y, and content claims.
   - Prepare GitHub Pages deployment path.

## Hard Decisions Before Implementation

- Repository source of truth:
  - Option A: initialize `F:\dev\hasina-portfolio` as new source, then push to GitHub Pages repo later.
  - Option B: clone `hasiniaina7.github.io` into this folder or replace from remote.
  - Current recommendation: Option A for clean refactor, then controlled migration.

- Styling:
  - CSS Modules gives strong local control and avoids utility noise.
  - Tailwind accelerates layout but can make design tokens less explicit unless constrained.
  - Current recommendation: CSS Modules plus global CSS variables for a portfolio with strict visual identity.

- Contact:
  - No backend in v1.
  - Do not implement a misleading send workflow.

## Non-Negotiable Quality Gates

- `npm run build` passes.
- Desktop and mobile screenshots reviewed.
- No dominant old narrative: tourism, photo, journalism.
- No unsupported metrics.
- All links real or intentionally hidden.
- H1/H2 hierarchy valid.
- `html lang="fr"`.
- Keyboard navigation visible.
- Contrast checked against the defined palette.
- Data-driven content: projects and skills come from typed data.

# Tasks - Refonte Portfolio B2B

## Phase 0 - Specs Baseline

- [x] T001 Create `AGENTS.md` with mentor and project guardrails.
- [x] T002 Create `plan.md`.
- [x] T003 Create `task.md`.
- [x] T004 Create `specs/spec.md`.
- [x] T005 Create `specs/design.md`.
- [x] T006 Create `specs/data-model.md`.
- [x] T007 Create `specs/contracts.md`.
- [x] T008 Create `specs/test-strategy.md`.
- [x] T009 Create `specs/execution-status.md`.
- [x] T010 Review docs for internal consistency and resume readiness.

## Phase 1 - Repository and Bootstrap

- [x] T011 Decide source-of-truth strategy for GitHub Pages replacement.
- [x] T012 If keeping this workspace, initialize isolated project boundaries so `F:\dev` parent Git does not pollute portfolio commits.
- [x] T013 Bootstrap Vite + React + TypeScript.
- [x] T014 Add lint/build scripts.
- [x] T015 Add static deployment configuration for GitHub Pages.
- [x] T016 Add route structure: Accueil, Parcours, Projets, Compétences, Contact.

## Phase 2 - Content Model

- [x] T017 Create `src/data/portfolioData.ts`.
- [x] T018 Model `profile`.
- [x] T019 Model `projects`.
- [x] T020 Model `experiences`.
- [x] T021 Model `skills`.
- [x] T022 Model `operatingPrinciples`.
- [x] T023 Model `contactChannels`.
- [x] T024 Add claim-source notes for sensitive metrics and proof statements.

## Phase 3 - Design System

- [x] T025 Implement global CSS variables from `specs/design.md`.
- [x] T026 Implement typography scale and responsive type constraints.
- [x] T027 Implement layout primitives.
- [x] T028 Implement card, tag, section title, button, icon, and flow styles.
- [x] T029 Implement focus states and accessible hover states.

## Phase 4 - Sections and Diagrams

- [x] T030 Build persistent header and active navigation.
- [x] T031 Build Accueil hero with operational map diagram.
- [x] T032 Build Accueil proof pillars.
- [x] T033 Build selected projects cards.
- [x] T034 Build Parcours timeline.
- [x] T035 Build project detail flow cards.
- [x] T036 Build skills matrix with input flows and output impacts.
- [x] T037 Build Contact page with mailto-safe interaction.
- [x] T038 Build footer CTA.

## Phase 5 - Validation

- [x] T039 Run `npm run build`.
- [x] T040 Run lint/typecheck.
- [x] T041 Run desktop browser screenshot.
- [x] T042 Run mobile browser screenshot.
- [x] T043 Check keyboard navigation.
- [x] T044 Check color contrast.
- [x] T045 Check SEO tags and `lang="fr"`.
- [x] T046 Check links: GitHub, LinkedIn, Portfolio, TechZone, TZ Smart, Fretunia.
- [x] T047 Run anti-regression content audit for banned/obsolete narrative.
- [ ] T048 Verify every project claim is traceable to CV or marked as hypothesis.
- [x] T049 Rewrite visible site copy for client-facing B2B language.
- [x] T050 Run internal-copy, obsolete-narrative and overclaim text audits after rewrite.

## Current Status

Execution 2 implemented the complete UI for the 5 required pages with typed centralized data, native SVG/HTML diagrams, honest mailto contact, build validation, typecheck, lint, desktop route smoke and mobile route smoke.

Execution 4 responsive validation completed the requested viewport matrix for the 5 required pages: `/`, `/parcours`, `/projets`, `/competences`, and `/contact` across 360x800, 390x844, 430x932, 768x1024, 820x1180, 1280x900, 1440x1200, 1920x1080, and 2560x1440. Screenshots and review sheets are stored in `artifacts/screenshots/responsive/`, with `responsive-audit.json` reporting zero failures after the final pass. Keyboard navigation, contact mailto composer input propagation, link target/rel smoke, and calculated color contrast smoke passed. Typecheck, lint, and build pass after the validation tooling update. Remaining publication hardening: final claim traceability review against the CV.

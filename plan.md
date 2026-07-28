# Plan — AI Integration & Agentic Full-Stack Engineer

## Objective

Reposition the portfolio for international recruiters looking for a confirmed engineer who can orchestrate autonomous AI agent teams and deliver reliable full-stack systems.

The public positioning is **AI Integration & Agentic Full-Stack Engineer**. English is the default locale; French is complete and equivalent. Public level is **Mid-level / Confirmé**, never Senior.

## Locked product decisions

- Primary promise:
  - EN: “I orchestrate autonomous AI agent teams to design, build, test, and ship reliable full-stack systems, while keeping production and sensitive actions under human approval.”
  - FR: “J’orchestre des équipes d’agents IA autonomes pour concevoir, construire, tester et livrer des systèmes full-stack fiables, avec validation humaine des actions de production et sensibles.”
- Market: international remote employment, with relocation openness.
- Claude Code is the principal coordination agent. Codex is a secondary implementation and review tool.
- The three qualitative agentic proofs are TZ Smart, Fretunia, and ACM/iagasy.
- Agentic proof never includes unmeasured duration, cost, multiplier, or autonomy rate.
- Human approval is mandatory for production, secrets, payments, real data, sensitive migrations, and external actions.
- Product AI and development agents remain explicitly separate.
- The existing palette, portrait, media, blueprint, lightbox, motion system, six-page structure, and typed `WorkItem` product evidence are retained.
- No client artifact or internal administration detail is published.
- The optional demo video is absent until both a real URL and thumbnail exist.

## Route model

Route IDs are independent from localized slugs.

- EN: `/en`, `/en/projects`, `/en/skills`, `/en/agentic-delivery`, `/en/experience`, `/en/contact`
- FR: `/fr`, `/fr/projets`, `/fr/competences`, `/fr/orchestration-agentique`, `/fr/parcours`, `/fr/contact`
- `/` redirects to `/en`.
- Historical French routes redirect to their new French equivalents.
- The locale switch preserves the equivalent route ID.

## Content architecture

1. Home: agent orchestration first, three immediate proofs, then delivered systems.
2. Projects: retain the complete product inventory and clearly separate product AI from development orchestration.
3. Skills: prioritize agent orchestration, AI integration, full-stack engineering, and reliability.
4. Agentic Delivery: central seven-stage workflow demonstration, approval gates, and three qualitative cases.
5. Experience: field operations → business systems → integrated AI → agentic orchestration.
6. Contact: recruiter-oriented roles, company, role, location/work model, and message through `mailto:`.

All navigation, marketing copy, SEO, routes, CV links, agentic cases, approval gates, and optional video configuration live in typed data. Components contain presentation logic only.

## Resume assets

Copy the existing AI/RAG/Automation and Full-Stack Product PDFs in English and French into public assets without changing source CVs. The AI resume is the primary download in the active language; the Full-Stack resume is secondary.

## SEO and discovery

- Set document `lang`, canonical, Open Graph, and alternate `hreflang` links per localized URL.
- Publish all twelve localized URLs in `sitemap.xml`.
- Add a verified, conservative `Person` JSON-LD schema.
- Preserve SPA direct navigation through the existing GitHub Pages build/deploy workflow.

## Execution sequence

1. Align `plan.md`, `task.md`, and every file under `specs/`.
2. Introduce the typed locale, route, agentic method, approval gate, recruiter CTA, resume, and optional video contracts.
3. Implement route resolution, redirects, locale preservation, shared shell, metadata, and bilingual page content.
4. Copy the four resume assets and update the sitemap.
5. Run static validation and explicit forbidden-content audits.
6. Validate direct and client-side navigation, locale switching, metadata, accessibility, reduced motion, links, and responsive layouts from 360 to 1440 px.
7. Store reports and screenshots in a timestamped `artifacts/` directory.

## Acceptance gates

- `npm run typecheck`, `npm run lint`, `npm run build`, and `npm run media:check` pass.
- All twelve localized routes work directly and through client-side navigation.
- Historical redirects resolve correctly.
- EN/FR parity is complete; no missing keys or fallback marketing copy.
- No public positioning contains “Senior”.
- No invented agentic metric, unbounded production autonomy, or claim that programming languages are no longer needed.
- Claude Code is primary; Codex is secondary.
- Product AI and development agents are clearly distinguished.
- Four resume links resolve; no video CTA renders without real URL and thumbnail.
- Canonical, `hreflang`, `lang`, sitemap, JSON-LD, and Open Graph are verified.
- Responsive, keyboard, focus, contrast, reduced-motion, console, link, and performance checks are documented.

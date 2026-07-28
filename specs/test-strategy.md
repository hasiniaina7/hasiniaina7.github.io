# Test strategy — Bilingual agentic portfolio

## Static gates

- `npm run typecheck`
- `npm run lint`
- `npm run build`
- `npm run media:check`
- Typed locale parity and route uniqueness audit.
- Four resume-file existence and non-empty checks.
- Sitemap contains exactly the twelve localized canonical URLs.

## Content guardrail audit

Fail if public source data:

- uses “Senior” in the current positioning;
- publishes agentic duration, cost, multiplier, or autonomy rate;
- presents Codex as the primary coordinator;
- claims programming languages are no longer necessary;
- merges development agents with product AI;
- grants unbounded autonomy over production, secrets, payments, real data, sensitive migrations, or external actions;
- renders a demo-video CTA while the required URL and thumbnail are absent.

Historical project role descriptions are reviewed separately; the active positioning and recruiter copy must never present the candidate as Senior.

## Route and metadata matrix

Test direct load and client navigation for:

- `/en`, `/en/projects`, `/en/skills`, `/en/agentic-delivery`, `/en/experience`, `/en/contact`
- `/fr`, `/fr/projets`, `/fr/competences`, `/fr/orchestration-agentique`, `/fr/parcours`, `/fr/contact`

Test redirects from `/`, `/projets`, `/competences`, `/methode`, `/parcours`, `/contact`, and unknown paths.

For every canonical page verify H1, active navigation, locale switch equivalence, `lang`, canonical, both `hreflang` alternates, description, Open Graph, and JSON-LD.

## Browser matrix

Validate widths 360, 390, 430, 768, 1024, 1280, and 1440 px. At minimum capture Home, Agentic Delivery, Projects, and Contact in both a mobile and desktop state, then inspect the remaining pages for overflow and layout regressions.

Validate keyboard navigation, focus visibility, menu behavior, locale switch, filters, lightbox, resume links, `mailto:`, reduced motion, console errors, broken links, and basic load performance.

## Artifacts

Store command logs, audits, route/metadata results, and screenshots under `artifacts/agentic-bilingual-YYYYMMDD-HHMMSS/`.

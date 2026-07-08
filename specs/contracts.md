# Contracts - Portfolio Static Site

## Content Contract

### Single Source of Truth

All route content must come from typed data files under `src/data/`.

Contract:

- Components may contain presentational labels.
- Components must not contain project-specific claims unless they are static UI headings.
- Data must include `evidenceLevel` for proof-sensitive items.

### Evidence Contract

Allowed evidence levels:

- `cv-confirmed`: directly present in the CV.
- `derived-from-cv`: conservative wording derived from CV facts.
- `requires-validation`: not ready to publish.

Rule:

- Production build must not render `requires-validation` claims unless they are hidden behind an internal debug flag.

### Old Narrative Contract

The following terms must not dominate headings, hero, project cards, or SEO:

- tourisme
- photographie
- photo
- journalisme

They may appear only in a minor historical list if explicitly justified.

## Route Contract

Required routes:

- `/` Accueil
- `/parcours`
- `/projets`
- `/competences`
- `/contact`

Navigation contract:

- Each route has one H1.
- Header active state reflects route.
- CTA `Échanger` links to contact.
- Footer CTA appears on all pages.

## SEO Contract

Required static metadata:

```ts
type SeoMeta = {
  title: string;
  description: string;
  canonicalPath: string;
  ogTitle: string;
  ogDescription: string;
  ogImage?: string;
};
```

Minimum route metadata:

- Home: full positioning.
- Parcours: terrain to SaaS/AI/infrastructure progression.
- Projets: systems for network, commerce, logistics, payments.
- Compétences: stack organized by business flows.
- Contact: collaboration around reliable business systems.

## Contact Contract

v1 has no backend.

Allowed interactions:

- `mailto:` with generated subject/body.
- external links to GitHub and LinkedIn.
- visual form that prepares a mailto link.

Forbidden interactions:

- HTTP POST to a non-existent endpoint.
- Success message implying server delivery.
- Collection of personal data without clear handling.

Contact fields if visual form exists:

- full name
- email
- organization
- subject
- project type
- message

Validation:

- email format checked client-side.
- message length max 1000 characters.
- submit button label must be honest, for example `Préparer l'e-mail` unless a real endpoint exists.

## Diagram Contract

Diagrams must be implemented as accessible components.

Requirements:

- Each diagram has an `aria-label` or adjacent text summary.
- SVGs must not be the only source of important text if the text is tiny on mobile.
- Flow colors follow `specs/design.md`.
- Diagrams simplify on mobile.

Required diagrams:

- Africa-Europe-Madagascar operational map.
- Project flow diagrams.
- Parcours timeline/progression.
- Skills matrix with input flows and business impacts.

## Deployment Contract

Target:

- GitHub Pages static site.

Required build assumptions:

- No server runtime.
- Correct base path for `hasiniaina7.github.io`.
- Assets hashed by Vite.
- Links work after static deployment.

## Test Contract

Before deployment candidate:

- Build passes.
- Typecheck passes.
- Lint passes.
- Browser screenshot desktop passes.
- Browser screenshot mobile passes.
- SEO route metadata checked.
- Accessibility smoke checked.
- Link audit checked.
- Content anti-regression checked.

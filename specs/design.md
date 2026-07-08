# Design System - Portfolio B2B

## Design Direction

Reference direction: refined editorial B2B with operational diagrams.

The site must feel like a senior technical portfolio for business systems, not a generic developer landing page. The memorable element is the combination of editorial headlines and system diagrams that explain real operational flows.

## Visual Principles

- Clear before decorative.
- Diagram every important claim.
- Use cards for bounded proof blocks, not for every section.
- Keep density high enough for B2B credibility.
- Use whitespace and thin borders to avoid heavy dashboard aesthetics.
- Accent colors must encode flow types, not random decoration.

## Color Tokens

```css
:root {
  --color-page: #fbfdff;
  --color-surface: #ffffff;
  --color-surface-soft: #f6f9ff;
  --color-text: #061c4f;
  --color-text-muted: #39527d;
  --color-line: #c8d6ee;
  --color-line-strong: #8faee0;
  --color-blue: #0b63ff;
  --color-blue-dark: #072a73;
  --color-green: #04966f;
  --color-orange: #ff5a1f;
  --color-violet: #6d4edb;
  --color-danger: #c2410c;
  --color-focus: #0b63ff;
}
```

Palette rules:

- Navy is the dominant text color.
- Blue is the primary action and application-flow color.
- Green represents data, field reliability and operational trust.
- Orange represents payments, integration, AI automation warnings or handoff.
- Violet is reserved for product/security/operations secondary flows.
- Avoid purple-blue gradient dominance.
- Avoid beige/cream dominance.
- Avoid dark dashboard themes.

## Typography

Recommended implementation:

- Display: a serif with strong editorial authority, for example `Fraunces`, `Cormorant Garamond`, or `Libre Baskerville`.
- Body/UI: a readable sans with technical neutrality, for example `IBM Plex Sans`, `Source Sans 3`, or `Atkinson Hyperlegible`.

Rules:

- No viewport-width font scaling.
- No negative letter spacing.
- H1 must be large but must wrap cleanly on mobile.
- UI labels and tags stay compact and readable.

Indicative scale:

```css
--font-display: "Fraunces", Georgia, serif;
--font-body: "IBM Plex Sans", Arial, sans-serif;
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.35rem;
--text-2xl: 1.75rem;
--text-3xl: 2.5rem;
--text-hero-mobile: 2.75rem;
--text-hero-tablet: 3.75rem;
--text-hero-desktop: 5rem;
```

Hero sizing must use breakpoint-based fixed sizes, not viewport-width scaling.

## Spacing and Layout

```css
--space-1: 0.25rem;
--space-2: 0.5rem;
--space-3: 0.75rem;
--space-4: 1rem;
--space-5: 1.5rem;
--space-6: 2rem;
--space-7: 3rem;
--space-8: 4rem;
--radius-sm: 6px;
--radius-md: 8px;
--shadow-subtle: 0 18px 50px rgba(6, 28, 79, 0.06);
```

Rules:

- Cards max radius: 8px.
- Page width: 1180px to 1240px.
- Header fixed or sticky only if it does not cover anchor targets.
- Sections are full-width layouts with constrained inner content.
- Do not nest cards inside cards.

## Components

### Header

- Left: `HCL` monogram + full name.
- Center/right: Accueil, Parcours, Projets, Compétences, Contact.
- CTA: `Échanger` with arrow icon.
- Active item: blue underline.

### Section Title

- Serif heading.
- Short blue underline.
- Supporting text below or aligned opposite on wide screens.

### Cards

- White surface.
- Thin border.
- 8px radius.
- Minimal shadow.
- Icons line-based, preferably lucide icons where possible.

### Tags

- Small bordered pills.
- No decorative gradients.
- Used for stacks and categories.

### Diagrams

- Native SVG/HTML components.
- Dashed lines:
  - Blue: application/data exchange.
  - Green: data/operations.
  - Orange: integration/AI/payment.
  - Navy dashed: infrastructure/network.
- Every diagram must have accessible text summary.

## Page-Specific Design

### Accueil

- Left editorial hero.
- Right Africa-Europe-Madagascar operational map.
- Four horizontal proof pillars below the map/hero.
- Project cards below.
- Operating principles strip near the end.

### Parcours

- Hero with world map progression.
- Timeline cards.
- Capability progression diagrams.
- Lessons learned cards.

### Projets

- Stacked wide project cards.
- Each card has three columns:
  - Context/problem.
  - Flow diagram.
  - Stack/result.

### Compétences

- Three-column capability matrix:
  - real use cases.
  - skill groups.
  - business impacts.
- Flow arrows connect use cases to skill groups and impacts.

### Contact

- Left: client-oriented copy and intervention domains.
- Right: form-like composer or mailto-safe form.
- Lower cards: availability, channels, geography, approach, collaboration modes.

## Responsive Rules

- Desktop: diagram-first editorial layout.
- Tablet: two-column sections collapse carefully.
- Mobile:
  - Header becomes compact.
  - Diagrams become simplified stacked cards or horizontally scrollable if unavoidable.
  - No text overlap.
  - Buttons keep stable dimensions.

## Design Risks

- Raw screenshot replication would fail accessibility and responsiveness.
- Too many flow lines can become visual noise on mobile.
- Fake contact form would damage trust.
- Using generic dashboard UI would weaken the premium editorial feel.

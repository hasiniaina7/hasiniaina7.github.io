# Design System - Portfolio B2B

## Design Direction

Reference direction: light agentic workflow blueprint for reliable B2B operations.

The site must feel like a senior technical portfolio for business systems, not a generic developer landing page. The memorable element is a clear operational architecture blueprint: application flows, queues, payment traceability, AI handoff, human validation and observability.

## Visual Principles

- Clear before decorative.
- Diagram every important claim as an operational system, not as decoration.
- Use cards for bounded proof blocks, not for every section.
- Keep density high enough for B2B credibility.
- Use whitespace and thin borders to avoid heavy dashboard aesthetics.
- Accent colors must encode flow types, not random decoration.
- The Africa-Europe-Madagascar map remains required, but it is secondary to the system blueprint identity.

## Color Tokens

```css
:root {
  --color-page: #f8fafc;
  --color-surface: #ffffff;
  --color-surface-soft: #f1f5f9;
  --color-text: #0f172a;
  --color-text-muted: #475569;
  --color-line: rgba(226, 232, 240, 0.8);
  --color-line-strong: #cbd5e1;
  --color-blue: #2563eb;
  --color-blue-dark: #1e3a8a;
  --color-green: #059669;
  --color-orange: #ea580c;
  --color-violet: #7c3aed;
  --color-danger: #dc2626;
  --color-focus: #2563eb;

  /* Semi-transparent accents for modern UI elements */
  --color-blue-soft: rgba(37, 99, 235, 0.05);
  --color-blue-border: rgba(37, 99, 235, 0.2);
  --color-green-soft: rgba(5, 150, 105, 0.05);
  --color-green-border: rgba(5, 150, 105, 0.2);
  --color-orange-soft: rgba(234, 88, 12, 0.05);
  --color-orange-border: rgba(234, 88, 12, 0.2);
  --color-violet-soft: rgba(124, 58, 237, 0.05);
  --color-violet-border: rgba(124, 58, 237, 0.2);
  --color-navy-soft: rgba(15, 23, 42, 0.05);
  --color-navy-border: rgba(15, 23, 42, 0.2);
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

- Left: typographic branding (full name and role, no monogram box).
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
- Right operational system blueprint with field teams, apps, API, database, payment gateway, queue worker, AI assistant, human validation and monitoring.
- Proof modules below the hero show offline sync, multi-tenant operations, payment traceability, controlled AI and monitoring.
- Africa-Europe-Madagascar operational map appears as a secondary required diagram.
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
- Dark cyberpunk, neon overload, code-wall backgrounds and generic AI claims would weaken the B2B operational positioning.

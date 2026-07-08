# Test Strategy - Frontend Validation and Non-Regression

## Goal

Prove that the portfolio is buildable, readable, responsive, accessible, SEO-ready, and truthful to the CV.

## Test Layers

### 1. Static Build

Commands after implementation:

```powershell
npm run build
npm run typecheck
npm run lint
```

Pass criteria:

- No TypeScript errors.
- No build errors.
- No lint errors that affect reliability, accessibility, or maintainability.

### 2. Browser Smoke

Use the in-app Browser or Playwright against the local dev server.

Viewport targets:

- Desktop: 1440 x 1200.
- Laptop: 1280 x 900.
- Tablet: 768 x 1024.
- Mobile: 390 x 844.

Pass criteria:

- Hero visible and readable.
- Header navigation usable.
- No text overlap.
- Diagrams visible and not blank.
- CTA visible.
- Footer visible.

### 3. Responsive Regression

Pages to screenshot:

- `/`
- `/parcours`
- `/projets`
- `/competences`
- `/contact`

Pass criteria:

- No horizontal page overflow except intentional diagram scrollers.
- Cards keep stable dimensions.
- Buttons do not resize unpredictably.
- Long French words do not escape containers.

### 4. Accessibility Smoke

Checks:

- Keyboard tab through header, CTA, project links, contact fields.
- Visible focus ring.
- H1 present once per route.
- Form labels visible.
- SVG diagrams have accessible names or adjacent summaries.
- Contrast visually checked for navy/blue/green/orange on white.

Recommended automated check:

```powershell
npx axe http://localhost:5173
```

If axe is unavailable, use browser inspection and manual keyboard pass.

### 5. SEO Static Audit

Checks:

- `html lang="fr"`.
- Route-specific `title`.
- Route-specific `description`.
- Open Graph tags.
- One H1.
- H2 structure meaningful.
- Content is present in built HTML or hydrated reliably for crawlers.
- Canonical URL correct for GitHub Pages.

### 6. Link Audit

Links to verify:

- `https://github.com/hasiniaina7`
- `https://www.linkedin.com/in/hasiniaina-christian/`
- `https://hasiniaina7.github.io/`
- `https://www.techzone.lat`
- `https://app.techzone.lat`
- `https://fretunia.com`
- `mailto:hasiniainachristian7@gmail.com`

Pass criteria:

- External links open in new tab with safe `rel`.
- Mailto contains usable subject/body if generated.
- No dead placeholder links.

### 7. Content Truth Audit

Required checks:

- Search for banned dominant narrative:

```powershell
rg -n "tourisme|photo|photographie|journalisme" src
```

Allowed only if intentionally documented as minor historical context.

- Search for unsupported performance language:

```powershell
rg -n "%|ROI|revenu|croissance|leader|expert mondial|mission-critical|enterprise-grade" src
```

Every hit must be verified or rewritten.

- Verify claims against CV:
  - `20+ entreprises` only for Fretunia/Trackmada.
  - `500M+ Ar à 2Md+ Ar` only as AIM system criticality, not personal performance.
  - TZ Smart stack matches CV.
  - AI orchestrator stack matches CV.

### 8. Visual Non-Regression

After the first approved implementation:

- Store baseline screenshots under `artifacts/screenshots/baseline/`.
- Store later screenshots under `artifacts/screenshots/current/`.
- Compare manually first; add automated visual diff only if design churn becomes frequent.

## Stop Rules

Do not deploy if:

- Build fails.
- Contact form lies about message delivery.
- Mobile has overlapping text.
- A major claim is not traceable to the CV.
- The page still reads primarily as generic web/tourism/photo/journalism portfolio.
- The local Git boundary is unresolved for commit/deploy.

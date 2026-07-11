# Plan — Refonte premium B2B

## Objectif

Refondre les six routes du portfolio en une expérience premium, claire et crédible pour des décideurs techniques et opérationnels. Le positionnement reste celui d’un ingénieur Full-Stack Senior qui conçoit et livre des systèmes métier fiables.

## Sources de vérité

- `src/data/portfolioData.ts` : contenus, faits, projets, expériences et liens publiables.
- `tmp/image 1.png` : direction artistique uniquement, jamais publiée.
- `tmp/image 2.png` : état visuel initial uniquement, jamais publié.
- Sept illustrations décoratives explicitement autorisées par `PROMPT_REFONTE_PREMIUM.md`.
- Toutes les images projet de `tmp` sont hors périmètre et restent intactes.

## Stack et routes

- Vite, React 19, TypeScript, React Router et CSS natif.
- Routes : `/`, `/projets`, `/competences`, `/methode`, `/parcours`, `/contact`.
- Contact v1 honnête par `mailto:` et liens publics réels.

## Séquence d’exécution

1. Auditer et normaliser les sept illustrations autorisées, produire AVIF/WebP et le manifeste typé.
2. Aligner `plan.md`, `task.md` et les six documents de `specs/`.
3. Mettre en place les composants média, placeholders et navigation mobile.
4. Appliquer le système visuel premium partagé aux six routes.
5. Valider typecheck, lint, build, médias, contenu, accessibilité, SEO et responsive.

## Direction visuelle

- Sans-serif moderne, navy profond, bleu, indigo, violet et cyan.
- Fonds blancs/bleutés, conteneur de 1280 px, cartes de 20–28 px, bordures fines et ombres diffuses.
- Gradient réservé aux CTA et accents stratégiques.
- Verre limité au header, hero et rares surfaces utiles.
- Illustrations décoratives seulement ; schémas et informations restent en HTML/CSS/SVG.

## Garde-fous

- Aucun fait, métrique, projet, certificat ou portrait inventé.
- Aucun média projet importé ou publié.
- Placeholder honnête pour le portrait et les projets.
- Données métier centralisées et typées.
- Aucun commit, push ou déploiement.

## Gates qualité

- Médias sans upscale, dimensions exactes et budgets respectés.
- Un H1 par route, focus visible, clavier complet, WCAG AA et `prefers-reduced-motion`.
- Aucun débordement horizontal de 360 à 1440 px.
- `npm run typecheck`, `npm run lint` et `npm run build` réussissent.
- Captures et audits conservés comme artefacts de validation.

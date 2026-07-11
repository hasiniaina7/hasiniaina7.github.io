# Tâches — Réorganisation éditoriale des réalisations

## Phase 1 — Spécifications

- [x] Intégrer `specs/portfolio-reorganisation.md` comme nouvelle source de vérité.
- [x] Retirer la limite de quatre projets et documenter la taxonomie système/web/mobile/IA.
- [x] Définir le contrat des médias éditoriaux, des filtres et de la visionneuse.

## Phase 2 — Données et médias

- [x] Migrer les quatre anciennes entrées vers le modèle `WorkItem`.
- [x] Ajouter SBT Travel, RMB Cargo, JN Travel et les trois applications mobiles.
- [x] Séparer IA produit et agents de développement.
- [x] Générer les variantes AVIF/WebP des treize médias publiables sans upscale.
- [x] Conserver `image 1` et `image 2` hors publication.

## Phase 3 — Implémentation

- [x] Créer la carte générique de réalisation et les filtres accessibles.
- [x] Créer la visionneuse accessible avec restitution du focus.
- [x] Recomposer l’accueil avec quatre médias sélectionnés et la rangée des sites.
- [x] Refaire `/projets` en inventaire filtrable et études de cas principales.
- [x] Relier `/competences`, `/methode`, `/parcours` et `/contact` aux nouvelles données.
- [x] Ajouter Codex/Claude à la méthode et n8n/OpenClaw aux contenus IA produit.

## Phase 4 — Validation

- [x] Exécuter typecheck, lint, build et audit média.
- [x] Tester les six routes aux largeurs 1440, 1280, 1024, 768, 430, 390 et 360 px.
- [x] Auditer visionneuse, filtres, menu mobile, clavier, focus, titres et mouvement réduit.
- [x] Auditer console, liens, SEO, poids média, layout shift et métriques non traçables.
- [x] Corriger tous les échecs avant clôture.

## État

Réorganisation éditoriale, médias et validation terminés. Rapport : `artifacts/validation-2026-07-11/validation-report.md`.

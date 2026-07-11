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
- [x] Optimiser et intégrer le portrait réel `hasiniaina.png` dans le hero.

## Phase 3 — Implémentation

- [x] Créer la carte générique de réalisation et les filtres accessibles.
- [x] Créer la visionneuse accessible avec restitution du focus.
- [x] Recomposer l’accueil avec quatre médias sélectionnés et la rangée des sites.
- [x] Refaire `/projets` en inventaire filtrable et études de cas principales.
- [x] Relier `/competences`, `/methode`, `/parcours` et `/contact` aux nouvelles données.
- [x] Ajouter Codex/Claude à la méthode et n8n/OpenClaw aux contenus IA produit.
- [x] Détourer et optimiser le portrait bras croisés et le portail généré.
- [x] Recomposer le hero selon la référence `image 1-hero.png`.
- [x] Remplacer la liste textuelle de stack par une grille visuelle accessible.

## Phase 4 — Validation

- [x] Exécuter typecheck, lint, build et audit média.
- [x] Tester les six routes aux largeurs 1440, 1280, 1024, 768, 430, 390 et 360 px.
- [x] Auditer visionneuse, filtres, menu mobile, clavier, focus, titres et mouvement réduit.
- [x] Auditer console, liens, SEO, poids média, layout shift et métriques non traçables.
- [x] Corriger tous les échecs avant clôture.
- [x] Valider visuellement le portrait sur desktop et mobile.
- [x] Intégrer la palette fournie aux CTA, états actifs et accents de cartes.
- [x] Vérifier visuellement la nouvelle palette et ses contrastes sur desktop/mobile.
- [x] Valider le nouveau hero à 1440, 1024, 768, 430, 390 et 360 px.

## Phase 5 — Blueprint système interactif

- [x] Remplacer les connexions textuelles par des identifiants de nœuds stables.
- [x] Ajouter les zones, icônes, niveaux de preuve et réalisations associées aux nœuds.
- [x] Définir les vues Vue globale, Paiements, Mobile offline, IA contrôlée et Monitoring.
- [x] Construire les filtres accessibles, le résumé live et les connexions SVG responsive.
- [x] Fournir un parcours vertical ordonné sans SVG complexe sur mobile.
- [x] Placer les quatre cartes de valeur vérifiées sous le diagramme.
- [x] Valider les cinq vues, les sept largeurs, le clavier, WCAG AA et le mouvement réduit.
- [x] Exécuter typecheck, lint, build, audit média et audit des termes interdits.

## Phase 6 — Blueprint premium durable

- [x] Remplacer la géométrie SVG artisanale par `@xyflow/react` en lecture seule.
- [x] Centraliser les positions et dimensions dans les données typées, avec ancrages nommés stables.
- [x] Recomposer les onglets, zones, cartes, badges et légende sans modifier le contenu métier.
- [x] Conserver le parcours vertical accessible sous 700 px.
- [x] Valider les cinq vues, le responsive, le clavier, le mouvement réduit, le build et le bundle.

## État

Réorganisation éditoriale, médias et modernisation premium du blueprint terminés. Captures : `artifacts/blueprint-premium-2026-07-11/`. Rapports historiques : `artifacts/validation-2026-07-11/validation-report.md` et `artifacts/blueprint-validation/browser-audit.json`.

## Phase 7 — Pipeline méthode connecté

- [x] Centraliser les six étapes détaillées de la méthode dans les données typées.
- [x] Remplacer la grille statique par un graphe React Flow fixe avec connecteurs visibles.
- [x] Fournir un parcours vertical accessible sous 700 px.
- [x] Valider responsive, mouvement réduit, typecheck, lint et build.

Captures : `artifacts/method-flow-2026-07-11/`.

## Phase 8 — Découpage du bundle par route

- [x] Charger les six pages par imports dynamiques.
- [x] Ajouter un fallback de navigation accessible et stable visuellement.
- [x] Vérifier les chunks générés et l’absence de duplication majeure.
- [x] Valider les six URLs directes, typecheck, lint et build.

## Phase 9 — Motion globale premium

- [x] Ajouter les tokens motion et l’orchestrateur partagé basé sur Motion.
- [x] Couvrir transition de route, signature du hero, groupes séquentiels et interactions existantes.
- [x] Fournir un mode mouvement réduit sans déplacement ni contenu masqué.
- [x] Valider les six routes, les interactions, le responsive, le bundle et les gates automatiques.

Captures et rapport : `artifacts/motion-premium-2026-07-11/`.

## Phase 10 — Visionneuse directe

- [x] Transformer l’image en déclencheur accessible et retirer le bouton « Agrandir l’image ».
- [x] Supprimer le zoom et remplacer les contrôles par un unique bouton `X`.
- [x] Conserver animation, Échap, légende, focus et responsive.
- [x] Valider typecheck, lint, build et interaction navigateur.

Captures : `artifacts/lightbox-direct-2026-07-11/`.

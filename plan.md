# Plan — Portfolio éditorial des réalisations

## Objectif

Faire évoluer les six routes du portfolio premium afin de montrer l’étendue réelle des systèmes, sites, applications mobiles et intégrations IA livrés, sans transformer les compositions marketing en preuves factuelles.

## Sources de vérité

- `specs/portfolio-reorganisation.md` : taxonomie et périmètre éditorial validés.
- `src/data/portfolioData.ts` : contenus, affirmations, relations, URLs et sélections publiables.
- `tmp/image 1.png` : direction artistique uniquement, jamais publiée.
- `tmp/image 2.png` : état visuel initial uniquement, jamais publié.
- Treize compositions validées comme médias de présentation ; leurs métriques intégrées ne sont jamais reprises automatiquement dans le HTML.

## Stack et routes

- Vite, React 19, TypeScript, React Router et CSS natif.
- Routes : `/`, `/projets`, `/competences`, `/methode`, `/parcours`, `/contact`.
- Contact v1 honnête par `mailto:` et liens publics réels.

## Séquence d’exécution

1. Aligner les spécifications et retirer l’invariant obsolète des quatre projets.
2. Remplacer le modèle `Project` par un inventaire relationnel de réalisations typées.
3. Optimiser les treize compositions publiables et le portrait réel en AVIF/WebP, puis étendre le manifeste.
4. Ajouter cartes éditoriales, filtres accessibles, études de cas et visionneuse.
5. Recomposer l’accueil et relier compétences, méthode, parcours et contact aux nouvelles données.
6. Valider typecheck, lint, build, médias, contenu, accessibilité, SEO et responsive.

## Direction visuelle média

- Portfolio stable en navy, bleu, indigo, violet et cyan, indépendamment des identités des produits.
- Médias 4:3 ou 16:9 affichés sans recadrage sur surface claire ou sombre selon leur composition.
- Deux cartes dominantes et deux secondaires seulement sur l’accueil.
- Études de cas principales généreuses, texte métier en HTML avant le média.
- Visionneuse accessible avec fermeture Échap, clic hors image, restitution du focus, image non recadrée et lien produit conditionnel issu des données centralisées.

## Palette d’accent

- Palette fournie : `#6274E7`, `#686EDC`, `#6E69D0`, `#7563C5`, `#7B5DBA`, `#8158AE`, `#8752A3`.
- Les tons les plus sombres portent les CTA avec texte blanc ; les tons clairs servent aux bordures, halos et surfaces teintées.
- Les cartes restent majoritairement blanches et reçoivent seulement une ligne d’accent, une ombre colorée ou un hover maîtrisé.

## Hero cible

- Recomposer le hero selon `tmp/image 1-hero.png` : texte compact à gauche, portrait dominant au centre, stack visuelle à droite.
- Utiliser le portrait généré validé comme édition fidèle du portrait réel et le portail généré uniquement comme décoration.
- Détourer les deux sources chroma-key, conserver leurs sources intactes et publier des variantes AVIF/WebP.
- Remplacer les métriques fictives de la référence par des faits vérifiés : base, disponibilité et méthode.
- Construire badges, expertises, stack et boutons en HTML/CSS ; aucun texte ne dépend des images.

## Garde-fous

- Aucun fait, métrique, certificat, rôle ou projet inventé.
- Les chiffres visibles dans les compositions restent des éléments de représentation visuelle non repris comme preuve.
- `image 1` et `image 2` restent non publiables.
- JN Travel utilise un placeholder tant qu’aucun média réel validé n’est fourni.
- Le hero utilise `tmp/hasiniaina.png`, portrait réel au ratio 4:5, sans transformation d’identité.
- Codex et Claude décrivent la méthode de développement ; n8n et OpenClaw illustrent les intégrations produit.
- Données métier centralisées et typées ; aucun domaine ni URL dispersé dans les composants.

## Gates qualité

- Médias sans upscale, dimensions explicites, AVIF/WebP et trois variantes maximum.
- Un H1 par route, focus visible, clavier complet, WCAG AA et `prefers-reduced-motion`.
- Aucun débordement horizontal de 360 à 1440 px.
- `npm run typecheck`, `npm run lint`, `npm run build` et `npm run media:check` réussissent.
- Captures et audits conservés comme artefacts de validation.

## Évolution — Blueprint système interactif

1. Remplacer le blueprint vertical par une carte pleine largeur construite en HTML et CSS, avec un graphe `@xyflow/react` non manipulable pour les connexions desktop/tablette.
2. Centraliser quatre zones de nœuds vérifiés et cinq vues de flux typées dans `portfolioData.ts`.
3. Relier chaque connexion par identifiants stables et chaque parcours à ses réalisations de preuve.
4. Déplacer sous le diagramme les cartes Sécurité intégrée, Continuité terrain, Traçabilité et Observabilité.
5. Fournir une carte connectée à positions et ancrages déterministes sur desktop/tablette, et un parcours vertical sans graphe sur mobile.
6. Valider clavier, `aria-pressed`, zone live, mouvement réduit, responsive et absence de technologies non démontrées.
7. Donner au blueprint une finition premium inspirée de la référence fournie : onglets, zones teintées, cartes blanches, badges d'état et connexions nettes, sans en reprendre le contenu.

La section porte le titre « Concevoir des systèmes fiables, traçables et orientés opérations ». Elle ne publie aucun raster et exclut MongoDB, Redis, S3, IoT, l’API Gateway générique, les microservices systématiques et la haute disponibilité non démontrée.

## Évolution — Pipeline méthode connecté

1. Remplacer les six cartes juxtaposées de `/methode` par un graphe linéaire `@xyflow/react` en lecture seule.
2. Centraliser les étapes, rôles, descriptions et accents dans `portfolioData.ts`.
3. Utiliser des poignées et arêtes explicites pour matérialiser la progression, avec un état visuel distinct pour le contrôle humain final.
4. Conserver une liste verticale sémantique sous 700 px, sans dépendance au canvas pour comprendre la méthode.
5. Valider responsive, clavier, mouvement réduit, typecheck, lint et build.

## Évolution — Découpage du bundle par route

1. Remplacer les imports synchrones des six pages par des imports dynamiques React.
2. Conserver le shell, la navigation et un fallback accessible dans le bundle initial.
3. Laisser Vite extraire les dépendances partagées sans dupliquer React Flow entre les routes qui l’utilisent.
4. Comparer les chunks produits et valider la navigation directe sur chaque route.

## Évolution — Motion globale premium

1. Monter une orchestration Motion unique dans le shell afin de couvrir les six routes sans dupliquer la logique dans les pages.
2. Conserver une signature d’entrée forte sur l’accueil, puis réserver les révélations aux groupes qui portent une hiérarchie ou une séquence réelle.
3. Harmoniser les transitions de route, listes, filtres, graphes, menu mobile, visionneuse et champs avec des durées et courbes centralisées.
4. Maintenir le contenu visible avant initialisation, éviter les animations de layout et neutraliser les déplacements sous `prefers-reduced-motion`.
5. Valider fluidité, accessibilité, responsive, chargement direct, bundle et absence de régression fonctionnelle sur les six routes.

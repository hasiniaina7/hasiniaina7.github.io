# Spécification produit — Portfolio éditorial B2B

## Promesse

Présenter Hasiniaina Christian LOVANIRINA comme Ingénieur Full-Stack Senior capable de cadrer, construire, sécuriser et maintenir des systèmes métier complets pour des opérations réelles.

## Routes

`/`, `/projets`, `/competences`, `/methode`, `/parcours`, `/contact`.

## Exigences

- L’accueil sélectionne TZ Smart, Fretunia, AIM et ACM/Iagasy, puis distingue SBT Travel, RMB Cargo et JN Travel dans une rangée dédiée.
- `/projets` rend toutes les réalisations consultables via `Tous`, `Systèmes`, `Web`, `Mobile` et `IA intégrée`.
- TZ Smart, Fretunia, AIM et ACM/Iagasy disposent d’une étude de cas principale.
- Les trois applications mobiles sont autonomes et de même importance éditoriale que les réalisations web.
- Les compétences citent des réalisations typées ; la méthode distingue agents de développement et IA intégrée au produit.
- Le contact reste un composeur `mailto:` sans faux envoi.
- L’accueil présente une carte système interactive pleine largeur, limitée aux capacités vérifiées et pilotée par cinq vues de flux.
- Les vues Paiements, Mobile offline, IA contrôlée et Monitoring citent leurs réalisations de preuve sans transformer l’architecture en affirmation générique.
- Sur desktop et tablette, la carte est un graphe de lecture fixe : aucun nœud déplaçable, zoom, minimap ou contrôle exploratoire n'est exposé.
- La page méthode représente ses six étapes par un graphe React Flow linéaire en lecture seule sur desktop et tablette, puis par une liste ordonnée sous 700 px.

## Médias

- Treize compositions validées sont des médias éditoriaux ou explicatifs, optimisés et servis via manifeste.
- Le portrait réel `hasiniaina.png` est publié dans le hero au ratio 4:5, sans génération ni modification d’identité.
- Pour la nouvelle composition du hero, une édition identity-preserve validée du portrait peut remplacer la source initiale ; le portail généré reste purement décoratif.
- Les métriques, slogans et données visibles dans ces compositions ne deviennent pas des preuves HTML.
- `image 1` et `image 2` sont non publiables.
- JN Travel conserve un placeholder neutre faute de média validé.
- Aucun contenu essentiel ne dépend d’une image ; les descriptions et légendes restent en HTML.

## Interdictions

- Aucun fait, chiffre, rôle, résultat, certification ou fonctionnalité inventé.
- Aucune mention publique d’un socle partagé entre SBT Travel, RMB Cargo et JN Travel.
- Codex ou Claude ne sont jamais présentés comme fonctionnalités d’un produit.
- Aucun retour dominant au tourisme, à la photographie ou au journalisme.
- Les volumes AIM expriment la criticité du système, jamais une performance personnelle.
- Le blueprint ne présente pas MongoDB, Redis, S3, IoT, une API Gateway générique, des microservices systématiques ou une haute disponibilité non démontrée.

## Acceptation

- Sept réalisations web et trois applications mobiles représentables dans les données.
- Six routes cohérentes et responsive de 360 à 1440 px.
- Filtres et visionneuse accessibles au clavier ; les liens de produits affichent leur domaine lisible et les médias de réalisations exposent la même URL dans la visionneuse.
- SEO par route, liens réels, aucune erreur console.
- Typecheck, lint, build et audit média réussis.
- Le hero reprend clairement les proportions de `image 1-hero.png` sans recopier ses métriques non vérifiées.
- Le blueprint conserve son contexte lorsque les flux sont filtrés, devient un parcours vertical sous 700 px et n’utilise aucun raster.
- Les connexions utilisent des ancrages explicites et ne traversent aucune carte aux largeurs de validation.
- Au chargement initial, seul le portrait du hero est un média prioritaire. Les images éditoriales hors viewport et les grands formats de visionneuse ne sont demandés qu’à l’approche du viewport ou après une action explicite.

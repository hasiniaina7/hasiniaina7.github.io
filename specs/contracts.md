# Contrats d’interface

## Navigation

- Les six routes exposent l’état actif ; le menu mobile se ferme après navigation et avec Échap.
- Le lien d’évitement cible `#main-content`.

## Média responsive

- `ResponsiveMedia` reçoit un `MediaAsset`, `sizes`, priorité et classes facultatives.
- Ordre `<picture>` : AVIF puis WebP ; `srcset`, `sizes`, `width` et `height` obligatoires.
- Le média principal d’une étude de cas est prioritaire ; les suivants sont lazy-loadés.
- Le portrait du hero est chargé en priorité, conserve son ratio 4:5 et fournit des dimensions explicites.
- Le portail du hero utilise `alt=""` et `aria-hidden`; le portrait détouré porte le texte alternatif et reste le seul média prioritaire de cette zone.
- `object-fit: contain` et aucune métrique n’est extraite du média vers le DOM.
- Une légende visible précise qu’une composition est une représentation visuelle lorsque nécessaire.

## Réalisations et filtres

- `WorkCard` reçoit uniquement un `WorkItem` centralisé et résout ses médias via le manifeste.
- Les filtres sont des boutons avec état `aria-pressed`, utilisables sans souris.
- Une réalisation peut répondre à plusieurs filtres sans être dupliquée dans les données.
- JN Travel utilise le placeholder partagé tant qu’aucun média n’est disponible.

## Blueprint interactif

- Les cinq filtres sont des boutons natifs exposant `aria-pressed` et un focus visible.
- Le changement de vue met à jour un résumé dans une zone `aria-live="polite"` et les réalisations de preuve associées.
- Desktop et tablette conservent tous les nœuds ; les éléments hors parcours sont atténués, jamais supprimés.
- Le graphe `@xyflow/react` est en lecture seule : aucun déplacement, zoom, panoramique, sélection ou contrôle visible.
- Les connexions sont décoratives et exclues de l’ordre de lecture. L’ordre des zones et nœuds dans les données suffit à comprendre l’architecture.
- Chaque connexion utilise des côtés source/cible et un routage centralisés par flux ; positions, dimensions et ancrages sont déterministes.
- Une couche SVG décorative appartient au viewport du graphe et reçoit un z-index entre les zones et les cartes. Les 23 arêtes existent dès le premier rendu, sans dépendre d’un `ResizeObserver`.
- Sous 700 px, le parcours actif est rendu comme une liste verticale ordonnée sans réseau SVG.
- Le composant ne contient aucune formulation métier : il consomme exclusivement les données typées centralisées.

## Visionneuse

- Dialogue modal avec fond sombre, image non recadrée, légende HTML et bouton de fermeture nommé. Lorsqu’un média est rattaché à une réalisation avec URL publique, le dialogue expose ce lien externe avec son domaine lisible.
- L’image miniature entière est le bouton d’ouverture ; aucun bouton textuel « Agrandir l’image » n’est affiché.
- La visionneuse ne propose pas de zoom. Un unique bouton icône `X`, nommé « Fermer la visionneuse », assure la fermeture visible.
- Fermeture par Échap, bouton, clic sur le backdrop ou sur l’espace vide autour de l’image ; focus initial dans le dialogue et restitution au déclencheur.
- Le document arrière ne doit pas être parcourable pendant l’ouverture.

## Pipeline méthode

- Desktop et tablette rendent les six étapes avec `@xyflow/react` et des connexions décoratives orientées.
- Le graphe est en lecture seule : aucun déplacement, zoom, panoramique, sélection ou contrôle visible.
- Sous 700 px, une liste ordonnée restitue le même contenu et le même ordre sans graphe.
- Le composant consomme exclusivement les étapes typées centralisées.

## Contact et SEO

- Le formulaire compose une URL `mailto:` et n’effectue aucun POST.
- Chaque route consomme `seoByPath`, fournit title, description, canonical et Open Graph.
- `lang="fr"` et un seul H1 par route.

## Chargement des routes

- Les six pages sont des frontières d’import dynamique ; le shell partagé reste disponible immédiatement.
- Un fallback annoncé avec `role="status"` occupe la zone principale pendant le chargement.
- La navigation directe et la navigation client-side conservent les mêmes contrats SEO et d’accessibilité.

## Orchestration motion

- Une orchestration montée dans `SiteFrame` couvre les six routes et se réinitialise sur `location.pathname`.
- La transition de contenu ne démonte ni le header ni le footer et ne bloque jamais la navigation ou le focus.
- Les familles animées sont déclarées dans un registre central de sélecteurs ; les pages ne portent pas de logique Motion dupliquée.
- Toute révélation part d’un DOM déjà visible et reste lisible si JavaScript ou Intersection Observer ne s’exécute pas.
- `prefers-reduced-motion` désactive les transformations spatiales, les staggers, les tracés et les animations permanentes.

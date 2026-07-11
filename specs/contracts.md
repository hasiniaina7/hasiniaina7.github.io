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

## Visionneuse

- Dialogue modal avec fond sombre, image non recadrée, légende HTML et bouton de fermeture nommé.
- Fermeture par Échap et clic explicite ; focus initial dans le dialogue et restitution au déclencheur.
- Le document arrière ne doit pas être parcourable pendant l’ouverture.

## Contact et SEO

- Le formulaire compose une URL `mailto:` et n’effectue aucun POST.
- Chaque route consomme `seoByPath`, fournit title, description, canonical et Open Graph.
- `lang="fr"` et un seul H1 par route.

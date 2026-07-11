# Contrats d’interface

## Navigation

- Les six routes utilisent `NavLink` et exposent l’état actif.
- Le menu mobile annonce son état, se ferme après navigation et avec Échap.
- Le lien d’évitement cible `#main-content`.

## Média responsive

- `ResponsiveMedia` reçoit un `MediaAsset`, un `sizes`, une priorité et une classe facultative.
- Ordre `<picture>` : AVIF puis WebP.
- `srcset`, `sizes`, `width` et `height` sont obligatoires.
- Le média hero prioritaire n’est pas lazy-loadé ; les décorations suivantes le sont.
- Une décoration expose `alt=""` et `aria-hidden` ; un placeholder contextuel a un libellé adjacent dans le DOM.

## Projets

- Les cartes et études de cas reçoivent uniquement un objet `Project` centralisé.
- Le placeholder reste uniforme et ne simule pas une capture réelle.

## Contact

- Le formulaire compose une URL `mailto:` ; il n’effectue aucun POST et ne présente aucun faux succès.

## SEO

- Chaque route consomme `seoByPath`, fournit title, description, canonical et Open Graph.
- `lang="fr"` et un seul H1 par route.

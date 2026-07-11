# Design system — Direction premium

## Principes

Clarté avant décoration, espace généreux, hiérarchie nette et crédibilité B2B. Les illustrations soutiennent la composition sans porter de texte métier.

## Tokens

```css
--color-navy-950: #0b1538;
--color-blue-600: #315bff;
--color-blue-500: #4772ff;
--color-indigo-600: #5a48f5;
--color-violet-500: #8b5cf6;
--color-cyan-400: #35d4e7;
--color-surface: #ffffff;
--color-surface-soft: #f5f7ff;
--color-border-soft: rgba(70, 92, 180, 0.14);
--gradient-primary: linear-gradient(135deg, #315bff 0%, #5a48f5 52%, #8b5cf6 72%, #35d4e7 100%);
--media-radius: 24px;
--media-border: rgba(70, 92, 180, 0.16);
--media-shadow: 0 28px 80px rgba(11, 21, 56, 0.18);
--media-dark-surface: #080d1f;
--media-light-surface: #f5f7ff;
--media-max-reading-width: 1280px;
--palette-periwinkle: #6274e7;
--palette-blue-violet: #686edc;
--palette-indigo: #6e69d0;
--palette-purple: #7563c5;
--palette-mauve: #7b5dba;
--palette-plum: #8158ae;
--palette-deep-plum: #8752a3;
```

## Règles

- Sans-serif système moderne et lisible.
- Conteneur maximal : 1280 px, dans la plage autorisée 1240–1360 px.
- Grandes cartes : 24–28 px ; petites surfaces : 14–16 px.
- Ombres larges et faibles, bordures discrètes.
- Gradient sur CTA et accents stratégiques uniquement.
- Verre translucide limité au header, hero et rares cartes.
- Transitions de 150–300 ms, neutralisées sous `prefers-reduced-motion`.
- Le gradient principal des CTA utilise uniquement les tons `#6E69D0` à `#8752A3`, suffisamment sombres pour conserver le contraste du texte blanc.
- `#6274E7` et `#686EDC` servent aux halos, bordures et fonds doux plutôt qu’aux textes blancs de petite taille.
- Les cartes conservent une surface blanche : la palette intervient par accents fins et non par aplats concurrençant les médias.
- Les compositions riches en texte utilisent `object-fit: contain`, jamais de recadrage.
- Les surfaces média réservent leur ratio et présentent un état de chargement discret ; l’image apparaît par fondu après décodage et l’échec reste lisible.
- La visionneuse utilise une image grand format uniquement après ouverture. Cette demande volontaire peut recevoir une priorité haute, sans préchargement global.
- Les surfaces d’accueil sombres ou claires encadrent les identités produit sans modifier les tokens du site.
- L’accueil limite les médias projet à quatre ; `/projets` leur donne une largeur éditoriale généreuse.
- Le portrait réel conserve son ratio 4:5, un cadrage centré sur le visage et une découpe de carte douce cohérente avec le portail du hero.
- Le hero desktop tient dans une composition compacte : environ 44 % texte, 27 % portrait/portail et 29 % stack.
- Le portrait détouré domine le portail sans carte opaque ; les badges flottants restent en HTML et ne masquent pas le visage.
- Sous 900 px, le texte reste premier, puis le portrait, puis la stack ; aucun chevauchement essentiel n’est conservé sur mobile.
- La visionneuse conserve la légende dans le DOM, s’ouvre par clic ou clavier sur l’image, ferme avec un unique `X`, Échap ou un clic hors de l’image et restitue le focus. Aucun contrôle de zoom n’est exposé. Quand une réalisation possède une URL publique, son domaine est visible dans la barre de la visionneuse et ouvre le produit dans un nouvel onglet.

## Responsive

- Texte avant visuel dans le hero mobile.
- Pipeline méthode horizontal sur desktop et tablette via `@xyflow/react`, avec cartes premium, connecteurs orientés, jalons numérotés et lecture verticale native sur mobile.
- Le graphe méthode reste fixe, sans déplacement, zoom, sélection, minimap ni contrôle. Ses animations décoratives sont supprimées avec `prefers-reduced-motion`.
- Schémas simplifiés sous 768 px, avec résumé textuel conservé.
- Aucun overflow horizontal à partir de 360 px.
- Les médias riches en texte passent en pleine largeur sur mobile et restent agrandissables.
- Le blueprint occupe toute la largeur du conteneur. Sur desktop et tablette, `@xyflow/react` rend une carte fixe avec positions déterministes et zones teintées. Une couche SVG déclarative montée dans le même viewport rend les arêtes entre les fonds de zones et les cartes, ce qui garantit leur visibilité et leur mise à l’échelle commune. Le déplacement, la sélection, le zoom et les contrôles sont désactivés.
- Les filtres prennent la forme d’onglets segmentés ; le contexte et les preuves restent dans un bandeau séparé. Les cartes utilisent une surface blanche, une bordure fine, une ombre contenue, un bloc icône teinté et un badge d’état.
- Sur tablette, le graphe conserve sa composition et est ajusté au viewport sans défilement horizontal ; les quatre cartes de valeur forment une grille 2×2.
- Sous 700 px, le graphe disparaît au profit d’un parcours vertical ordonné ; les filtres reviennent à la ligne sans défilement horizontal.
- Les nœuds hors parcours restent visibles à opacité réduite afin de préserver le contexte.
- Les transitions du blueprint durent 180 à 240 ms et sont neutralisées avec `prefers-reduced-motion`.

## Accessibilité

- Focus très visible, contraste AA, cibles tactiles d’au moins 44 px.
- Décorations avec `alt=""` ; placeholders expliqués dans le DOM.
- Un seul H1 par route et hiérarchie de titres cohérente.

## Motion globale

- Direction « premium calme » : une signature orchestrée sur le hero d’accueil, puis des transitions courtes qui clarifient hiérarchie, séquence ou changement d’état.
- Durées communes : 120 ms pour la pression, 220 ms pour un état, 420 ms pour une révélation et 650 ms maximum pour la signature d’entrée.
- Courbes communes : ease-out-quart, ease-out-quint et ease-out-expo ; aucun bounce ou elastic.
- Les listes peuvent utiliser un stagger plafonné à 300 ms. Les sections entières ne reçoivent pas toutes le même fade-and-rise automatique.
- Blur, masque et profondeur restent limités au hero et aux petites surfaces. Aucune animation de largeur, hauteur, marge ou position de layout.
- Le contenu est visible par défaut. Sous mouvement réduit, les déplacements, staggers et tracés disparaissent ; les changements d’état restent instantanés ou utilisent un fondu très court.

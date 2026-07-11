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
- Les surfaces d’accueil sombres ou claires encadrent les identités produit sans modifier les tokens du site.
- L’accueil limite les médias projet à quatre ; `/projets` leur donne une largeur éditoriale généreuse.
- Le portrait réel conserve son ratio 4:5, un cadrage centré sur le visage et une découpe de carte douce cohérente avec le portail du hero.
- Le hero desktop tient dans une composition compacte : environ 44 % texte, 27 % portrait/portail et 29 % stack.
- Le portrait détouré domine le portail sans carte opaque ; les badges flottants restent en HTML et ne masquent pas le visage.
- Sous 900 px, le texte reste premier, puis le portrait, puis la stack ; aucun chevauchement essentiel n’est conservé sur mobile.
- La visionneuse conserve la légende dans le DOM, ferme avec Échap et restitue le focus.

## Responsive

- Texte avant visuel dans le hero mobile.
- Pipeline méthode horizontal sur desktop, vertical sur mobile.
- Schémas simplifiés sous 768 px, avec résumé textuel conservé.
- Aucun overflow horizontal à partir de 360 px.
- Les médias riches en texte passent en pleine largeur sur mobile et restent agrandissables.

## Accessibilité

- Focus très visible, contraste AA, cibles tactiles d’au moins 44 px.
- Décorations avec `alt=""` ; placeholders expliqués dans le DOM.
- Un seul H1 par route et hiérarchie de titres cohérente.

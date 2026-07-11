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
```

## Règles

- Sans-serif système moderne et lisible.
- Conteneur maximal : 1280 px, dans la plage autorisée 1240–1360 px.
- Grandes cartes : 24–28 px ; petites surfaces : 14–16 px.
- Ombres larges et faibles, bordures discrètes.
- Gradient sur CTA et accents stratégiques uniquement.
- Verre translucide limité au header, hero et rares cartes.
- Transitions de 150–300 ms, neutralisées sous `prefers-reduced-motion`.

## Responsive

- Texte avant visuel dans le hero mobile.
- Pipeline méthode horizontal sur desktop, vertical sur mobile.
- Schémas simplifiés sous 768 px, avec résumé textuel conservé.
- Aucun overflow horizontal à partir de 360 px.

## Accessibilité

- Focus très visible, contraste AA, cibles tactiles d’au moins 44 px.
- Décorations avec `alt=""` ; placeholders expliqués dans le DOM.
- Un seul H1 par route et hiérarchie de titres cohérente.

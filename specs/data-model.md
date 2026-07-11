# Modèle de données

## Source métier

`src/data/portfolioData.ts` centralise profil, navigation, SEO, projets, expériences, compétences, méthode, principes, collaboration et schémas. Les composants ne doivent pas dupliquer d’affirmations métier.

## Contrat média

```ts
type MediaVariant = {
  src: string;
  width: number;
  height: number;
  format: 'avif' | 'webp';
  bytes: number;
};

type MediaAsset = {
  id: string;
  role: 'decorative' | 'portrait-placeholder' | 'project-placeholder';
  alt: string;
  decorative: boolean;
  ratio: number;
  source?: { path: string; width: number; height: number; bytes: number; colorSpace: string; hasAlpha: boolean };
  variants: MediaVariant[];
};
```

Les sept décorations et les placeholders sont indexés par identifiant stable. Dimensions et poids correspondent aux fichiers générés. Aucun chemin média n’est dispersé dans les composants.

## Invariants

- Quatre `ProjectId` seulement.
- Routes limitées aux six chemins publiés.
- Métriques associées à leur niveau de preuve et à leur garde-fou.
- Les images projet de `tmp` ne sont jamais des données applicatives.

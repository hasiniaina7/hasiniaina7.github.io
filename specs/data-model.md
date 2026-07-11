# Modèle de données

## Source métier

`src/data/portfolioData.ts` centralise profil, navigation, SEO, réalisations, expériences, compétences, méthode, principes, collaboration et sélections éditoriales.

## Réalisations

```ts
type WorkId =
  | 'tz-smart' | 'fretunia' | 'aim-beneficiaries' | 'acm-iagasy'
  | 'sbt-travel' | 'rmb-cargo' | 'jn-travel'
  | 'rmb-cargo-mobile' | 'aim-mobile' | 'tz-smart-mobile';

type WorkCategory = 'system' | 'web' | 'mobile' | 'product-ai';

type WorkItem = {
  id: WorkId;
  title: string;
  categories: WorkCategory[];
  relatedSystemId?: WorkId;
  summary: string;
  operationalPurpose: string;
  stack: string[];
  capabilities: string[];
  publicUrl?: string;
  alternatePublicUrl?: string;
  mediaIds: string[];
  featured: boolean;
  caseStudy: boolean;
};
```

Une réalisation peut apparaître dans plusieurs vues sans duplication. `relatedSystemId` fournit du contexte sans créer de hiérarchie visuelle.

## Contrat média

```ts
type MediaAsset = {
  id: string;
  role: 'decorative' | 'work-editorial' | 'method-illustration' | 'product-ai-illustration';
  alt: string;
  decorative: boolean;
  ratio: number;
  surface: 'light' | 'dark' | 'adaptive';
  variants: MediaVariant[];
};
```

Chaque média publié possède AVIF/WebP, dimensions, poids, ratio, rôle et texte alternatif. Les métriques visibles dans une composition ne sont pas stockées comme faits métier.

## Invariants

- Dix `WorkId`, dont trois applications mobiles autonomes.
- Sélections d’accueil explicites, jamais dérivées de l’ordre d’un tableau.
- URLs, stacks, relations et identifiants média centralisés.
- Agents de développement modélisés séparément des capacités `product-ai`.
- `image 1` et `image 2` absents du manifeste publié.

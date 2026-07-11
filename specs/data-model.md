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
  role: 'decorative' | 'portrait' | 'work-editorial' | 'method-illustration' | 'product-ai-illustration';
  alt: string;
  decorative: boolean;
  ratio: number;
  surface: 'light' | 'dark' | 'adaptive';
  variants: MediaVariant[];
};
```

Le statut de chargement est un état d’interface transitoire du composant média, pas une donnée métier stockée dans le manifeste. Une variante grand format n’est jamais préchargée seulement pour une éventuelle ouverture de visionneuse.

Chaque média publié possède AVIF/WebP, dimensions, poids, ratio, rôle et texte alternatif. Les métriques visibles dans une composition ne sont pas stockées comme faits métier.

Le portrait `hasiniaina-portrait` est un média non décoratif avec un texte alternatif descriptif et un chargement prioritaire dans le hero.

Le hero v2 ajoute `hasiniaina-portrait-cutout` (`portrait`) et `hero-glass-portal-v2` (`decorative`). Les anciens actifs restent disponibles jusqu’à validation finale afin de permettre un retour arrière.

## Invariants

- Dix `WorkId`, dont trois applications mobiles autonomes.
- Sélections d’accueil explicites, jamais dérivées de l’ordre d’un tableau.
- URLs, stacks, relations et identifiants média centralisés. Les composants dérivent uniquement un libellé de domaine à partir de `publicUrl` ; ils ne stockent pas de lien produit local.
- Agents de développement modélisés séparément des capacités `product-ai`.
- `image 1` et `image 2` absents du manifeste publié.

## Blueprint système

```ts
type BlueprintViewId = 'overview' | 'payments' | 'offline-mobile' | 'controlled-ai' | 'monitoring';
type BlueprintZone = 'entry' | 'core' | 'integration' | 'data';

type BlueprintNode = {
  id: BlueprintNodeId;
  zone: BlueprintZone;
  icon: BlueprintIcon;
  evidenceLevel: EvidenceLevel;
  proofWorkIds: WorkId[];
};

type BlueprintFlow = {
  id: BlueprintFlowId;
  from: BlueprintNodeId;
  to: BlueprintNodeId;
};

type BlueprintView = {
  id: BlueprintViewId;
  summary: string;
  nodeIds: BlueprintNodeId[];
  flowIds: BlueprintFlowId[];
  proofWorkIds: WorkId[];
};
```

Un registre `blueprintNodeLayout: Record<BlueprintNodeId, BlueprintNodeLayout>` centralise position et largeur de chaque carte. `blueprintFlowLayout: Record<BlueprintFlowId, BlueprintFlowLayout>` fixe les côtés source/cible et le décalage de routage de chaque connexion. Ces données décrivent uniquement la présentation du graphe fixe et ne contiennent aucun texte éditorial.

Les libellés ne servent jamais de clés relationnelles. Les nœuds, flux, résumés, preuves, zones et cartes de valeur restent centralisés dans `portfolioData.ts`.

## Pipeline méthode

```ts
type MethodStep = {
  id: string;
  title: string;
  description: string;
  role: string;
  accent: 'blue' | 'violet' | 'green';
};
```

Les six étapes et leur ordre sont centralisés dans `portfolioData.ts`. Les connexions sont dérivées de cet ordre et ne portent aucun contenu métier supplémentaire.

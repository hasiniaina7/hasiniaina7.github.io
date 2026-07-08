# Data Model - Portfolio Content

## Goal

All publishable content must be centralized in typed data. Components render data; they do not own business copy.

## Proposed Types

```ts
export type EvidenceLevel = "cv-confirmed" | "derived-from-cv" | "requires-validation";

export type Profile = {
  fullName: string;
  initials: string;
  role: string;
  location: string;
  availability: string;
  email: string;
  links: ContactLink[];
  hero: {
    headline: string;
    subheadline: string;
    proofPillars: ProofPillar[];
  };
};

export type ContactLink = {
  label: string;
  href: string;
  kind: "email" | "github" | "linkedin" | "portfolio" | "product";
  isPublic: boolean;
};

export type ProofPillar = {
  id: string;
  title: string;
  summary: string;
  icon: string;
  accent: "blue" | "green" | "orange" | "violet";
  evidenceLevel: EvidenceLevel;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  period?: string;
  domain: string;
  context: string;
  problem: string;
  solutionFlow: FlowNode[];
  stack: string[];
  operationalResult: string;
  sourceNotes: string[];
  evidenceLevel: EvidenceLevel;
  publishableMetrics: PublishableMetric[];
};

export type PublishableMetric = {
  label: string;
  value: string;
  wordingGuardrail: string;
  evidenceLevel: EvidenceLevel;
};

export type FlowNode = {
  id: string;
  label: string;
  description?: string;
  kind: "actor" | "system" | "data" | "payment" | "ai" | "infrastructure" | "output";
  accent: "blue" | "green" | "orange" | "navy" | "violet";
};

export type Experience = {
  id: string;
  organization: string;
  role: string;
  period: string;
  summary: string;
  capabilityTags: string[];
  progressionStage: "terrain" | "data" | "operations" | "saas-ai" | "infrastructure";
  evidenceLevel: EvidenceLevel;
};

export type SkillGroup = {
  id: string;
  title: string;
  icon: string;
  accent: "blue" | "green" | "orange" | "violet";
  technologies: string[];
  useCases: string[];
  impacts: string[];
  evidenceLevel: EvidenceLevel;
};

export type OperatingPrinciple = {
  id: string;
  title: string;
  summary: string;
  icon: string;
  accent: "blue" | "green" | "orange" | "violet";
};

export type CollaborationMode = {
  id: string;
  title: string;
  summary: string;
  bestFor: string[];
};
```

## Required Data Instances

### `profile`

Required values:

- `fullName`: `Hasiniaina Christian LOVANIRINA`
- `initials`: `HCL`
- `role`: `Ingénieur Full-Stack Senior`
- `location`: `Madagascar`
- `availability`: `Remote Afrique-Europe`
- `email`: `hasiniainachristian7@gmail.com`

### `projects`

Required ids:

- `tz-smart`
- `ai-commerce-orchestrator`
- `fretunia-trackmada`
- `aim-madagascar`

### `experiences`

Required ids:

- `instat`
- `fid`
- `action-contre-la-faim`
- `aim-madagascar`
- `fretunia-trackmada`
- `techzone-it-solution`

### `skillGroups`

Required ids:

- `backend`
- `frontend`
- `mobile`
- `ai`
- `infrastructure`
- `product-operations`

## Claim Guardrails

Every `Project.operationalResult` must have one of:

- direct CV support;
- conservative derived phrasing;
- `requires-validation`, which means it should not be published until verified.

Forbidden data patterns:

- `impact: "x% improvement"` without source.
- `revenue`, `ROI`, `conversion`, `enterprise-grade`, or `mission-critical` claims without proof.
- AIM financial volumes framed as personal achievement.
- Old project narratives used as leading proof.

## Suggested Initial Data Seeds

### Proof Pillars

- SaaS multi-tenant: secured, isolated, evolutive platforms for several organizations.
- Applications terrain offline: offline operation, synchronization, continuity.
- Paiements et traçabilité: integrated payments, transaction tracking, audit.
- IA appliquée et automatisation: measurable assistant workflows with human control.

### Operating Principles

- Fiabilité d'abord.
- Impact métier.
- Qualité du code.
- Données maîtrisées.
- Autonomie et collaboration.

### Collaboration Modes

- Mission produit.
- Renfort technique.
- Cadrage d'architecture.
- Modernisation d'outils métier.

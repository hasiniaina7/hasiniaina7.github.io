# Data model — Localized agentic portfolio

## Core localization

```ts
type Locale = 'en' | 'fr';
type RouteId = 'home' | 'projects' | 'skills' | 'agenticDelivery' | 'experience' | 'contact';
type Localized<T> = Record<Locale, T>;
type RouteDefinition = { id: RouteId; slugs: Localized<string> };
```

Route identity is never inferred from translated labels. Dictionaries use `satisfies Record<Locale, ...>` so missing locale keys fail typecheck.

## Agentic proof

```ts
type AgenticStage = {
  id: string;
  title: string;
  description: string;
  owner: 'human' | 'coordinator' | 'specialist-agents';
  boundedBy: string;
};

type HumanApprovalGate = {
  id: 'production' | 'secrets' | 'payments' | 'real-data' | 'sensitive-migrations' | 'external-actions';
  label: string;
  reason: string;
};

type AgenticCaseSummary = {
  id: 'tz-smart' | 'fretunia' | 'acm-iagasy';
  title: string;
  summary: string;
  coordination: string[];
  boundary: string;
};

type AgenticMethod = {
  title: string;
  promise: string;
  coordinator: 'Claude Code';
  secondaryTools: ['Codex'];
  stages: AgenticStage[];
  approvalGates: HumanApprovalGate[];
  cases: AgenticCaseSummary[];
};
```

## Recruiter actions

```ts
type RecruiterCta = {
  primaryRoute: 'agenticDelivery';
  targetRoles: string[];
  resumes: {
    ai: Localized<string>;
    fullStack: Localized<string>;
  };
};

type ExternalDemoVideo =
  | { enabled: false; url?: never; thumbnail?: never }
  | {
      enabled: true;
      url: string;
      thumbnail: string;
      spokenLanguage: 'fr';
      subtitleLanguage: 'en';
      safetyReviewed: true;
    };
```

## Existing evidence

`WorkItem` remains the product-delivery evidence model. Agentic case summaries reference work IDs but do not merge with product AI capabilities. Existing media IDs, evidence levels, public URLs, and publishable metric guardrails remain intact.

## SEO

Each route/locale pair has title, description, canonical path, Open Graph copy, and its alternate locale path. A single conservative `Person` JSON-LD object contains only verified name, role, location, public profiles, and site URL.

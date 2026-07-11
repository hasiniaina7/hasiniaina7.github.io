export type EvidenceLevel = 'cv-confirmed' | 'derived-from-cv' | 'requires-validation';

export type Accent = 'blue' | 'green' | 'orange' | 'violet' | 'navy';

export type WorkId =
  | 'tz-smart'
  | 'fretunia'
  | 'aim-beneficiaries'
  | 'acm-iagasy'
  | 'sbt-travel'
  | 'rmb-cargo'
  | 'jn-travel'
  | 'rmb-cargo-mobile'
  | 'aim-mobile'
  | 'tz-smart-mobile';

export type WorkCategory = 'system' | 'web' | 'mobile' | 'product-ai';

export type ContactLink = {
  label: string;
  href: string;
  kind: 'email' | 'github' | 'linkedin' | 'portfolio' | 'product';
  isPublic: boolean;
};

export type ProofPillar = {
  id: string;
  title: string;
  summary: string;
  accent: Accent;
  evidenceLevel: EvidenceLevel;
};

export type FlowNode = {
  id: string;
  label: string;
  description?: string;
  kind: 'actor' | 'system' | 'data' | 'payment' | 'ai' | 'infrastructure' | 'output';
  accent: Accent;
};

export type PublishableMetric = {
  label: string;
  value: string;
  wordingGuardrail: string;
  evidenceLevel: EvidenceLevel;
};

export type WorkItem = {
  id: WorkId;
  title: string;
  categories: WorkCategory[];
  categoryLabel: string;
  period?: string;
  summary: string;
  operationalPurpose: string;
  role: string;
  capabilities: string[];
  technicalComplexity: string[];
  stack: string[];
  publicUrl?: string;
  alternatePublicUrl?: string;
  relatedSystemId?: WorkId;
  mediaIds: string[];
  featured: boolean;
  caseStudy: boolean;
  mediaLayout: 'editorial-4-3' | 'wide-16-9' | 'placeholder';
  mediaNote?: string;
  evidenceLevel: EvidenceLevel;
  publishableMetrics: PublishableMetric[];
};

export type Experience = {
  id: string;
  organization: string;
  role: string;
  period: string;
  summary: string;
  capabilityTags: string[];
  progressionStage: 'terrain' | 'data' | 'operations' | 'saas-ai' | 'infrastructure';
  evidenceLevel: EvidenceLevel;
};

export type SkillGroup = {
  id: string;
  title: string;
  icon: string;
  accent: Accent;
  technologies: string[];
  useCases: string[];
  impacts: string[];
  evidenceLevel: EvidenceLevel;
};

export type RecruiterValue = {
  title: string;
  summary: string;
  proofWorkIds: WorkId[];
  keywords: string[];
};

export type SkillEvidence = {
  category: string;
  technologies: string[];
  workIds: WorkId[];
  proof: string;
  interviewTalkingPoint: string;
  level: 'production' | 'advanced' | 'solid';
  accent: Accent;
};

export type WorkingMethod = {
  title: string;
  summary: string;
  steps: string[];
  agentUsageNote: string;
  qualityGates: string[];
};

export type OperatingPrinciple = {
  id: string;
  title: string;
  summary: string;
  accent: Accent;
};

export type CollaborationMode = {
  id: string;
  title: string;
  summary: string;
  bestFor: string[];
};

export type BlueprintStatus = 'operational' | 'processing' | 'queued' | 'review' | 'verified' | 'observing';

export type BlueprintViewId = 'overview' | 'payments' | 'offline-mobile' | 'controlled-ai' | 'monitoring';

export type BlueprintZone = 'entry' | 'core' | 'integration' | 'data';

export type BlueprintIcon =
  | 'teams' | 'web' | 'mobile' | 'partners'
  | 'api' | 'identity' | 'payments' | 'business-data'
  | 'mvola' | 'notifications' | 'radiusdesk' | 'automation' | 'human'
  | 'postgresql' | 'local-storage' | 'worker' | 'audit' | 'monitoring';

export type BlueprintNodeId =
  | 'field-teams' | 'web-app' | 'mobile-app' | 'partner-systems'
  | 'business-api' | 'identities' | 'payment-reconciliation' | 'business-data'
  | 'mvola' | 'notifications' | 'radiusdesk' | 'ai-automation' | 'human-validation'
  | 'postgresql' | 'local-storage' | 'queue-worker' | 'audit' | 'monitoring';

export type BlueprintFlowId =
  | 'field-mobile' | 'web-api' | 'mobile-api' | 'partner-api'
  | 'api-identities' | 'api-payments' | 'api-data' | 'api-notifications' | 'api-radiusdesk'
  | 'payments-mvola' | 'payments-postgresql' | 'payments-audit'
  | 'mobile-local' | 'local-api' | 'api-postgresql'
  | 'api-queue' | 'queue-ai' | 'ai-human' | 'human-audit'
  | 'api-monitoring' | 'queue-monitoring' | 'postgresql-monitoring' | 'monitoring-notifications';

export type BlueprintNode = {
  id: BlueprintNodeId;
  label: string;
  detail: string;
  accent: Accent;
  status: BlueprintStatus;
  zone: BlueprintZone;
  icon: BlueprintIcon;
  evidenceLevel: EvidenceLevel;
  proofWorkIds: WorkId[];
};

export type BlueprintFlow = {
  id: BlueprintFlowId;
  from: BlueprintNodeId;
  to: BlueprintNodeId;
  label: string;
  accent: Accent;
};

export type BlueprintView = {
  id: BlueprintViewId;
  label: string;
  summary: string;
  nodeIds: BlueprintNodeId[];
  mobileNodeIds: BlueprintNodeId[];
  flowIds: BlueprintFlowId[];
  proofWorkIds: WorkId[];
};

export type ArchitectureValue = {
  id: string;
  title: string;
  summary: string;
  accent: Accent;
};

export type BlueprintModule = {
  id: string;
  title: string;
  summary: string;
  accent: Accent;
  steps: string[];
  status: BlueprintStatus;
  evidenceLevel: EvidenceLevel;
};

export type SeoMeta = {
  title: string;
  description: string;
  canonicalPath: string;
  ogTitle: string;
  ogDescription: string;
  ogImage?: string;
};

export type NavigationItem = {
  path: '/' | '/projets' | '/competences' | '/methode' | '/parcours' | '/contact';
  label: string;
};

export type HeroTechnology = {
  id: 'django' | 'react' | 'typescript' | 'node' | 'flutter' | 'postgresql' | 'docker' | 'linux' | 'n8n' | 'github';
  label: string;
};

export const evidenceLabels: Record<EvidenceLevel, string> = {
  'cv-confirmed': 'Réalisé sur projet',
  'derived-from-cv': 'Approche éprouvée',
  'requires-validation': 'À confirmer avant publication',
};

export const accentLabels: Record<Accent, string> = {
  blue: 'Application',
  green: 'Données terrain',
  orange: 'Paiement / IA',
  violet: 'Produit / sécurité',
  navy: 'Infrastructure',
};

export const statusLabels: Record<BlueprintStatus, string> = {
  operational: 'Opérationnel',
  processing: 'Traitement',
  queued: 'En file',
  review: 'Revue humaine',
  verified: 'Vérifié',
  observing: 'Observé',
};

export const profile = {
  fullName: 'Hasiniaina Christian LOVANIRINA',
  initials: 'HCL',
  role: 'Ingénieur Full-Stack Senior',
  location: 'Madagascar',
  availability: 'Remote Afrique-Europe',
  email: 'hasiniainachristian7@gmail.com',
  hero: {
    headline: 'Ingénieur Full-Stack Senior — Backend, Frontend, Mobile & IA appliquée',
    subheadline:
      'Je livre des applications métier complètes: backend, frontend, mobile, données, IA appliquée, sécurité, tests et production, avec une méthode specs-driven augmentée par agents IA.',
    proofPillars: [
      {
        id: 'saas-multi-tenant',
        title: 'SaaS multi-tenant',
        summary: 'Des espaces clients séparés, des droits clairs et une base prête à évoluer sans mélanger les opérations.',
        accent: 'blue',
        evidenceLevel: 'derived-from-cv',
      },
      {
        id: 'field-offline',
        title: 'Applications terrain offline',
        summary: 'Les équipes peuvent saisir, vérifier et synchroniser même quand le réseau n’est pas fiable.',
        accent: 'green',
        evidenceLevel: 'derived-from-cv',
      },
      {
        id: 'payments-traceability',
        title: 'Paiements et traçabilité',
        summary: 'Chaque paiement reste lisible: statut, synchronisation, export financier et historique exploitable.',
        accent: 'orange',
        evidenceLevel: 'cv-confirmed',
      },
      {
        id: 'applied-ai',
        title: 'IA appliquée avec contrôle',
        summary: 'L’automatisation accélère les réponses, mais garde un relais humain quand le risque augmente.',
        accent: 'violet',
        evidenceLevel: 'cv-confirmed',
      },
    ] satisfies ProofPillar[],
  },
  links: [
    { label: 'E-mail', href: 'mailto:hasiniainachristian7@gmail.com', kind: 'email', isPublic: true },
    { label: 'GitHub', href: 'https://github.com/hasiniaina7', kind: 'github', isPublic: true },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hasiniaina-christian/', kind: 'linkedin', isPublic: true },
    { label: 'Portfolio', href: 'https://hasiniaina7.github.io/', kind: 'portfolio', isPublic: true },
    { label: 'TechZone', href: 'https://www.techzone.lat', kind: 'product', isPublic: true },
    { label: 'TZ Smart', href: 'https://app.techzone.lat', kind: 'product', isPublic: true },
    { label: 'Fretunia', href: 'https://fretunia.com', kind: 'product', isPublic: true },
  ] satisfies ContactLink[],
};

export const blueprintNodes: BlueprintNode[] = [
  { id: 'field-teams', label: 'Équipes terrain', detail: 'Collecte, incidents, visites', accent: 'green', status: 'operational', zone: 'entry', icon: 'teams', evidenceLevel: 'cv-confirmed', proofWorkIds: ['aim-beneficiaries', 'tz-smart-mobile'] },
  { id: 'web-app', label: 'Web App', detail: 'Pilotage des opérations', accent: 'blue', status: 'operational', zone: 'entry', icon: 'web', evidenceLevel: 'cv-confirmed', proofWorkIds: ['tz-smart', 'fretunia', 'aim-beneficiaries'] },
  { id: 'mobile-app', label: 'Mobile App', detail: 'Usage terrain et synchronisation', accent: 'green', status: 'operational', zone: 'entry', icon: 'mobile', evidenceLevel: 'cv-confirmed', proofWorkIds: ['aim-mobile', 'tz-smart-mobile', 'rmb-cargo-mobile'] },
  { id: 'partner-systems', label: 'Systèmes partenaires', detail: 'Webhooks et services connectés', accent: 'violet', status: 'processing', zone: 'entry', icon: 'partners', evidenceLevel: 'cv-confirmed', proofWorkIds: ['acm-iagasy', 'fretunia'] },
  { id: 'business-api', label: 'API métier', detail: 'Règles, droits et intégrations', accent: 'blue', status: 'processing', zone: 'core', icon: 'api', evidenceLevel: 'cv-confirmed', proofWorkIds: ['tz-smart', 'fretunia', 'aim-beneficiaries', 'acm-iagasy'] },
  { id: 'identities', label: 'Identités & droits', detail: 'RBAC, RLS et validation', accent: 'violet', status: 'verified', zone: 'core', icon: 'identity', evidenceLevel: 'cv-confirmed', proofWorkIds: ['fretunia', 'tz-smart'] },
  { id: 'payment-reconciliation', label: 'Paiements & rapprochement', detail: 'Statuts, confirmation et suivi', accent: 'orange', status: 'verified', zone: 'core', icon: 'payments', evidenceLevel: 'cv-confirmed', proofWorkIds: ['aim-beneficiaries', 'tz-smart'] },
  { id: 'business-data', label: 'Données & audit', detail: 'Historique, règles et exports', accent: 'navy', status: 'verified', zone: 'core', icon: 'business-data', evidenceLevel: 'cv-confirmed', proofWorkIds: ['aim-beneficiaries', 'tz-smart', 'fretunia'] },
  { id: 'mvola', label: 'MVola', detail: 'Paiement mobile et confirmation', accent: 'orange', status: 'verified', zone: 'integration', icon: 'mvola', evidenceLevel: 'cv-confirmed', proofWorkIds: ['aim-beneficiaries'] },
  { id: 'notifications', label: 'Notifications multicanales', detail: 'FCM, SMS, e-mail, WhatsApp', accent: 'blue', status: 'operational', zone: 'integration', icon: 'notifications', evidenceLevel: 'cv-confirmed', proofWorkIds: ['tz-smart', 'acm-iagasy', 'aim-mobile'] },
  { id: 'radiusdesk', label: 'RadiusDesk', detail: 'Accès réseau et consommation', accent: 'navy', status: 'operational', zone: 'integration', icon: 'radiusdesk', evidenceLevel: 'cv-confirmed', proofWorkIds: ['tz-smart'] },
  { id: 'ai-automation', label: 'IA & automatisations', detail: 'OpenAI, n8n et OpenClaw', accent: 'violet', status: 'processing', zone: 'integration', icon: 'automation', evidenceLevel: 'cv-confirmed', proofWorkIds: ['acm-iagasy'] },
  { id: 'human-validation', label: 'Validation humaine', detail: 'Décision sur les cas sensibles', accent: 'green', status: 'review', zone: 'integration', icon: 'human', evidenceLevel: 'cv-confirmed', proofWorkIds: ['acm-iagasy', 'aim-beneficiaries'] },
  { id: 'postgresql', label: 'PostgreSQL', detail: 'Persistance et isolation', accent: 'navy', status: 'verified', zone: 'data', icon: 'postgresql', evidenceLevel: 'cv-confirmed', proofWorkIds: ['tz-smart', 'fretunia', 'aim-beneficiaries'] },
  { id: 'local-storage', label: 'Stockage local', detail: 'File offline et reprise', accent: 'green', status: 'operational', zone: 'data', icon: 'local-storage', evidenceLevel: 'cv-confirmed', proofWorkIds: ['aim-mobile', 'tz-smart-mobile'] },
  { id: 'queue-worker', label: 'Queue Worker', detail: 'Lots, priorités et reprise', accent: 'violet', status: 'queued', zone: 'data', icon: 'worker', evidenceLevel: 'cv-confirmed', proofWorkIds: ['acm-iagasy', 'tz-smart'] },
  { id: 'audit', label: 'Audit', detail: 'Actions et décisions tracées', accent: 'orange', status: 'verified', zone: 'data', icon: 'audit', evidenceLevel: 'cv-confirmed', proofWorkIds: ['aim-beneficiaries', 'tz-smart', 'fretunia'] },
  { id: 'monitoring', label: 'Monitoring', detail: 'Logs, métriques, traces, alertes', accent: 'blue', status: 'observing', zone: 'data', icon: 'monitoring', evidenceLevel: 'cv-confirmed', proofWorkIds: ['tz-smart', 'fretunia'] },
];

export const blueprintFlows: BlueprintFlow[] = [
  { id: 'field-mobile', from: 'field-teams', to: 'mobile-app', label: 'Collecte terrain', accent: 'green' },
  { id: 'web-api', from: 'web-app', to: 'business-api', label: 'Flux web', accent: 'blue' },
  { id: 'mobile-api', from: 'mobile-app', to: 'business-api', label: 'Synchronisation', accent: 'green' },
  { id: 'partner-api', from: 'partner-systems', to: 'business-api', label: 'Événements partenaires', accent: 'violet' },
  { id: 'api-identities', from: 'business-api', to: 'identities', label: 'Contrôle d’accès', accent: 'violet' },
  { id: 'api-payments', from: 'business-api', to: 'payment-reconciliation', label: 'Paiement', accent: 'orange' },
  { id: 'api-data', from: 'business-api', to: 'business-data', label: 'Règles métier', accent: 'navy' },
  { id: 'api-notifications', from: 'business-api', to: 'notifications', label: 'Notification', accent: 'blue' },
  { id: 'api-radiusdesk', from: 'business-api', to: 'radiusdesk', label: 'Provisionnement', accent: 'navy' },
  { id: 'payments-mvola', from: 'payment-reconciliation', to: 'mvola', label: 'Confirmation MVola', accent: 'orange' },
  { id: 'payments-postgresql', from: 'payment-reconciliation', to: 'postgresql', label: 'Écriture', accent: 'navy' },
  { id: 'payments-audit', from: 'payment-reconciliation', to: 'audit', label: 'Rapprochement audité', accent: 'orange' },
  { id: 'mobile-local', from: 'mobile-app', to: 'local-storage', label: 'Capture offline', accent: 'green' },
  { id: 'local-api', from: 'local-storage', to: 'business-api', label: 'Reprise de synchronisation', accent: 'green' },
  { id: 'api-postgresql', from: 'business-api', to: 'postgresql', label: 'Persistance', accent: 'navy' },
  { id: 'api-queue', from: 'business-api', to: 'queue-worker', label: 'Traitement différé', accent: 'violet' },
  { id: 'queue-ai', from: 'queue-worker', to: 'ai-automation', label: 'Automatisation', accent: 'violet' },
  { id: 'ai-human', from: 'ai-automation', to: 'human-validation', label: 'Relais humain', accent: 'green' },
  { id: 'human-audit', from: 'human-validation', to: 'audit', label: 'Décision auditée', accent: 'orange' },
  { id: 'api-monitoring', from: 'business-api', to: 'monitoring', label: 'Télémétrie API', accent: 'blue' },
  { id: 'queue-monitoring', from: 'queue-worker', to: 'monitoring', label: 'Télémétrie workers', accent: 'blue' },
  { id: 'postgresql-monitoring', from: 'postgresql', to: 'monitoring', label: 'Signaux données', accent: 'blue' },
  { id: 'monitoring-notifications', from: 'monitoring', to: 'notifications', label: 'Alertes', accent: 'blue' },
];

export const blueprintViews: BlueprintView[] = [
  { id: 'overview', label: 'Vue globale', summary: 'Une vue d’ensemble des entrées opérationnelles, du cœur métier, des intégrations et de la supervision.', nodeIds: blueprintNodes.map((node) => node.id), mobileNodeIds: ['web-app', 'business-api', 'business-data', 'postgresql', 'monitoring'], flowIds: blueprintFlows.map((flow) => flow.id), proofWorkIds: ['tz-smart', 'fretunia', 'aim-beneficiaries', 'acm-iagasy'] },
  { id: 'payments', label: 'Paiements', summary: 'Web et mobile alimentent une API métier qui confirme, rapproche et audite les paiements MVola.', nodeIds: ['web-app', 'mobile-app', 'business-api', 'payment-reconciliation', 'mvola', 'postgresql', 'audit'], mobileNodeIds: ['web-app', 'mobile-app', 'business-api', 'payment-reconciliation', 'mvola', 'postgresql', 'audit'], flowIds: ['web-api', 'mobile-api', 'api-payments', 'payments-mvola', 'payments-postgresql', 'payments-audit'], proofWorkIds: ['aim-beneficiaries', 'tz-smart'] },
  { id: 'offline-mobile', label: 'Mobile offline', summary: 'Les équipes terrain capturent localement, puis reprennent la synchronisation vers l’API et PostgreSQL.', nodeIds: ['field-teams', 'mobile-app', 'local-storage', 'business-api', 'postgresql'], mobileNodeIds: ['field-teams', 'mobile-app', 'local-storage', 'business-api', 'postgresql'], flowIds: ['field-mobile', 'mobile-local', 'local-api', 'api-postgresql'], proofWorkIds: ['aim-mobile', 'tz-smart-mobile'] },
  { id: 'controlled-ai', label: 'IA contrôlée', summary: 'Les événements partenaires passent par la file de traitement, l’automatisation et une validation humaine auditée.', nodeIds: ['partner-systems', 'business-api', 'queue-worker', 'ai-automation', 'human-validation', 'audit'], mobileNodeIds: ['partner-systems', 'business-api', 'queue-worker', 'ai-automation', 'human-validation', 'audit'], flowIds: ['partner-api', 'api-queue', 'queue-ai', 'ai-human', 'human-audit'], proofWorkIds: ['acm-iagasy'] },
  { id: 'monitoring', label: 'Monitoring', summary: 'API, workers et PostgreSQL exposent des signaux regroupés par le monitoring puis transmis comme alertes.', nodeIds: ['business-api', 'queue-worker', 'postgresql', 'monitoring', 'notifications'], mobileNodeIds: ['business-api', 'queue-worker', 'postgresql', 'monitoring', 'notifications'], flowIds: ['api-monitoring', 'queue-monitoring', 'postgresql-monitoring', 'monitoring-notifications'], proofWorkIds: ['tz-smart', 'fretunia'] },
];

export const blueprintZoneLabels: Record<BlueprintZone, string> = {
  entry: 'Points d’entrée',
  core: 'Cœur métier',
  integration: 'Intégrations',
  data: 'Données & supervision',
};

export const blueprintSectionCopy = {
  eyebrow: 'Architecture & vue système',
  title: 'Concevoir des systèmes fiables, traçables et orientés opérations',
  introduction: 'Sélectionnez un parcours pour isoler les composants et les preuves qui répondent à une contrainte opérationnelle précise.',
  filtersLabel: 'Choisir un parcours système',
  proofLabel: 'Réalisations de preuve',
  mapLabel: 'Carte des composants du système',
};

export const architectureValues: ArchitectureValue[] = [
  { id: 'security', title: 'Sécurité intégrée', summary: 'RBAC, RLS et validation au plus près des règles métier.', accent: 'blue' },
  { id: 'continuity', title: 'Continuité terrain', summary: 'Offline, synchronisation batch et reprise quand le réseau revient.', accent: 'green' },
  { id: 'traceability', title: 'Traçabilité', summary: 'Statuts, rapprochement et audit pour expliquer chaque opération.', accent: 'orange' },
  { id: 'observability', title: 'Observabilité', summary: 'Logs, métriques, traces et alertes utiles au diagnostic.', accent: 'violet' },
];

export const blueprintModules: BlueprintModule[] = [
  {
    id: 'offline-sync',
    title: 'Offline Mobile Field App Synchronization',
    summary: 'Capturer localement, détecter la reconnexion et synchroniser sans perdre la trace.',
    accent: 'green',
    steps: ['Capture offline', 'File locale', 'Reconnect detected', 'Sync serveur'],
    status: 'operational',
    evidenceLevel: 'derived-from-cv',
  },
  {
    id: 'multi-tenant-admin',
    title: 'SaaS Multi-Tenant Admin',
    summary: 'Isoler les tenants, router les droits et garder une administration contrôlée.',
    accent: 'blue',
    steps: ['Request', 'Tenant routing', 'Role access', 'Admin control'],
    status: 'verified',
    evidenceLevel: 'derived-from-cv',
  },
  {
    id: 'payment-traceability',
    title: 'Payment Traceability',
    summary: 'Rendre chaque paiement lisible depuis la capture jusqu’à l’audit.',
    accent: 'orange',
    steps: ['Payment captured', 'Gateway confirmed', 'Ledger matched', 'Audit recorded'],
    status: 'verified',
    evidenceLevel: 'cv-confirmed',
  },
  {
    id: 'ai-human-control',
    title: 'AI Assistant with Human Control',
    summary: 'Accélérer les réponses tout en gardant une revue humaine pour les cas sensibles.',
    accent: 'violet',
    steps: ['AI suggestion', 'Human review', 'Approve / edit', 'Apply with audit'],
    status: 'review',
    evidenceLevel: 'cv-confirmed',
  },
  {
    id: 'monitoring',
    title: 'Infrastructure Monitoring',
    summary: 'Lire les signaux utiles pour diagnostiquer plus vite et maintenir le service.',
    accent: 'navy',
    steps: ['Logs', 'Metrics', 'Traces', 'Alerts'],
    status: 'observing',
    evidenceLevel: 'cv-confirmed',
  },
];

export const navigation = [
  { path: '/', label: 'Accueil' },
  { path: '/projets', label: 'Projets' },
  { path: '/competences', label: 'Compétences' },
  { path: '/methode', label: 'Méthode' },
  { path: '/parcours', label: 'Parcours' },
  { path: '/contact', label: 'Contact' },
] satisfies NavigationItem[];

export const heroTechnologies: HeroTechnology[] = [
  { id: 'django', label: 'Django' },
  { id: 'react', label: 'React' },
  { id: 'typescript', label: 'TypeScript' },
  { id: 'node', label: 'Node.js' },
  { id: 'flutter', label: 'Flutter' },
  { id: 'postgresql', label: 'PostgreSQL' },
  { id: 'docker', label: 'Docker' },
  { id: 'linux', label: 'Linux' },
  { id: 'n8n', label: 'n8n' },
  { id: 'github', label: 'GitHub' },
];

export const seoByPath: Record<NavigationItem['path'], SeoMeta> = {
  '/': {
    title: 'Hasiniaina Christian LOVANIRINA - Ingénieur Full-Stack Senior',
    description:
      'Ingénieur Full-Stack Senior basé à Madagascar: backend, frontend, mobile, données, IA appliquée, sécurité, tests et production pour équipes Afrique-Europe.',
    canonicalPath: '/',
    ogTitle: 'Hasiniaina Christian LOVANIRINA - Ingénieur Full-Stack Senior',
    ogDescription: 'Backend, frontend, mobile, données, IA appliquée, sécurité, tests et production.',
  },
  '/parcours': {
    title: 'Parcours - Hasiniaina Christian LOVANIRINA',
    description:
      'Parcours construit du terrain vers les plateformes métier: données, paiements, logistique, SaaS B2B, IA appliquée et infrastructure.',
    canonicalPath: '/parcours',
    ogTitle: 'Parcours - Hasiniaina Christian LOVANIRINA',
    ogDescription: 'Une progression terrain, données, opérations, SaaS B2B, IA appliquée et infrastructure.',
  },
  '/projets': {
    title: 'Projets - Hasiniaina Christian LOVANIRINA',
    description:
      'Projets B2B pour réseau terrain, commerce conversationnel, logistique multi-tenant et paiements tracés.',
    canonicalPath: '/projets',
    ogTitle: 'Projets - Hasiniaina Christian LOVANIRINA',
    ogDescription: 'Des systèmes livrés pour cadrer, automatiser, tracer et maintenir des opérations réelles.',
  },
  '/competences': {
    title: 'Compétences - Hasiniaina Christian LOVANIRINA',
    description:
      'Compétences full-stack prouvées: backend Python/Node, frontend React/Next.js, mobile, data, sécurité, IA appliquée et delivery.',
    canonicalPath: '/competences',
    ogTitle: 'Compétences - Hasiniaina Christian LOVANIRINA',
    ogDescription: 'Stack senior full-stack avec réalisations concrètes et thématiques d’échange.',
  },
  '/methode': {
    title: 'Méthode - Hasiniaina Christian LOVANIRINA',
    description:
      'Méthode specs-driven avec agents IA: cadrage, contrats API, découpage, implémentation assistée, tests, revue de diff et livraison.',
    canonicalPath: '/methode',
    ogTitle: 'Méthode - Hasiniaina Christian LOVANIRINA',
    ogDescription: 'Comment les agents IA accélèrent l’exécution sans remplacer l’ingénierie, les tests et la responsabilité humaine.',
  },
  '/contact': {
    title: 'Contact - Hasiniaina Christian LOVANIRINA',
    description:
      'Contacter Hasiniaina Christian LOVANIRINA pour des opportunités de collaboration senior full-stack, missions produit ou échange technique.',
    canonicalPath: '/contact',
    ogTitle: 'Contact - Hasiniaina Christian LOVANIRINA',
    ogDescription: 'Contact direct via e-mail, GitHub et LinkedIn.',
  },
};

export const works: WorkItem[] = [
  {
    id: 'tz-smart',
    title: 'TZ Smart / TechZone Smart',
    categories: ['system', 'web', 'product-ai'],
    categoryLabel: 'Plateforme FAI',
    period: '2024-2026',
    summary: 'Plateforme complète pour fournisseur d’accès à Internet, du pilotage web aux opérations terrain.',
    operationalPurpose: 'Consolider clients, zones, incidents, visites, paiements, notifications et supervision réseau dans un même environnement.',
    role: 'Fondateur technique et ingénieur full-stack senior : cadrage, architecture, backend, frontend, mobile, intégrations paiement/réseau et support production.',
    capabilities: [
      'Backend Django Ninja/PostgreSQL structuré par domaines métier.',
      'Back-office React/Vite pour les opérations et le monitoring.',
      'API OpenAI intégrée aux réponses et au chat IA.',
      'Automatisations n8n pour les notifications et traitements métier.',
    ],
    technicalComplexity: ['Contrats API web/mobile/backend.', 'RBAC par rôle opérationnel.', 'Paiements, rapprochement et contraintes réseau.', 'Suggestions IA séparées des décisions opérationnelles.'],
    stack: ['Django Ninja', 'PostgreSQL', 'React', 'Vite', 'TypeScript', 'OpenAI API', 'n8n', 'MVola', 'RadiusDesk'],
    publicUrl: 'https://www.tzsmart.app',
    alternatePublicUrl: 'https://app.techzone.lat',
    mediaIds: ['tz-smart-web'],
    featured: true,
    caseStudy: true,
    mediaLayout: 'editorial-4-3',
    mediaNote: 'Composition éditoriale : les chiffres visibles dans l’image ne sont pas présentés comme des métriques vérifiées.',
    evidenceLevel: 'cv-confirmed',
    publishableMetrics: [],
  },
  {
    id: 'fretunia',
    title: 'Fretunia',
    categories: ['system', 'web', 'product-ai'],
    categoryLabel: 'SaaS logistique',
    period: '2024-2026',
    summary: 'Plateforme SaaS multi-tenant de gestion logistique, de facturation et de suivi de colis.',
    operationalPurpose: 'Unifier les opérations internes, les espaces clients et le suivi public sans mélanger les données des organisations.',
    role: 'Développeur full-stack / product engineer sur plateforme logistique multi-tenant : opérations, facturation, tracking public, PWA, SEO et intégrations.',
    capabilities: [
      'Gestion des colis, lots, événements, tarifs, factures et suivi public.',
      'Notifications WhatsApp, e-mail et SMS automatisées par n8n.',
      'Statistiques et analyses avancées produites à partir des données logistiques.',
      'API OpenAI intégrée à la gestion intelligente des colis pour assister l’analyse opérationnelle.',
    ],
    technicalComplexity: ['Isolation tenant avec RLS/RBAC.', 'Workflows logistiques multi-rôles.', 'Outbox de notifications multicanales.', 'IA d’assistance sans décision autonome non validée.'],
    stack: ['React', 'TypeScript', 'PostgreSQL', 'RLS', 'RBAC', 'n8n', 'OpenAI API', 'Webhooks', 'PWA'],
    publicUrl: 'https://www.fretunia.com',
    mediaIds: ['fretunia-web', 'n8n-product-automation'],
    featured: true,
    caseStudy: true,
    mediaLayout: 'editorial-4-3',
    mediaNote: 'Composition éditoriale : seuls les repères explicitement publiés dans le texte HTML constituent des preuves.',
    evidenceLevel: 'cv-confirmed',
    publishableMetrics: [{ label: 'Entreprises utilisatrices', value: '20+ entreprises', wordingGuardrail: 'Usage de la plateforme, pas performance personnelle.', evidenceLevel: 'cv-confirmed' }],
  },
  {
    id: 'aim-beneficiaries',
    title: 'Système Bénéficiaires AIM',
    categories: ['system', 'web'],
    categoryLabel: 'Système bénéficiaires et paiements',
    period: '2023-2025',
    summary: 'Système web de gestion des bénéficiaires, des paiements cash, des contrôles et des exports financiers.',
    operationalPurpose: 'Maintenir la continuité terrain, tracer les statuts de paiement et produire des fichiers financiers contrôlables.',
    role: 'Développeur full-stack web/mobile : backend, back-office, application caissier, exports financiers et support production.',
    capabilities: ['Gestion des bénéficiaires, caissiers, périodes et paiements.', 'Imports, rapports, assignations, corrections et clôtures.', 'Exports Excel financiers et historique d’audit.', 'Synchronisation mobile par lots en réseau contraint.'],
    technicalComplexity: ['Paiements partiels ou refusés.', 'Synchronisations tardives et reprise réseau.', 'Audit trail et corrections post-clôture.', 'Volumes financiers traités comme preuve de criticité système.'],
    stack: ['Express', 'Sequelize', 'PostgreSQL', 'React', 'Vite', 'ExcelJS'],
    publicUrl: 'https://www.dms-aim.online',
    mediaIds: ['aim-web'],
    featured: true,
    caseStudy: true,
    mediaLayout: 'editorial-4-3',
    mediaNote: 'Composition éditoriale : les données visibles servent à présenter l’interface, pas à publier des volumes.',
    evidenceLevel: 'cv-confirmed',
    publishableMetrics: [],
  },
  {
    id: 'acm-iagasy',
    title: 'ACM / Iagasy',
    categories: ['system', 'web', 'product-ai'],
    categoryLabel: 'Commerce social et IA produit',
    period: '2024-2026',
    summary: 'Orchestrateur de commerce social pour Messenger et WhatsApp avec automatisations et relais humain.',
    operationalPurpose: 'Répondre avec le contexte catalogue et métier, orchestrer les conversations et conserver des contrôles opérationnels.',
    role: 'Product engineer IA appliquée : architecture, webhooks Meta, orchestration, contexte métier, sécurité des accès, traces et handoff humain.',
    capabilities: ['Interactions Messenger et WhatsApp.', 'Orchestration des automatisations par n8n.', 'Exécution agentique avec OpenClaw.', 'Catalogue, contexte métier, traces et relais humains.'],
    technicalComplexity: ['Validation des webhooks et séparation des secrets.', 'File de traitement et reprise.', 'Seuils et garde-fous de livraison.', 'Responsabilité humaine sur les cas sensibles.'],
    stack: ['n8n', 'OpenClaw', 'Meta Webhooks', 'Messenger', 'WhatsApp', 'Queue', 'RAG', 'OpenAI'],
    publicUrl: 'https://www.iagasy.com',
    alternatePublicUrl: 'https://acmv2.techzone.lat/',
    mediaIds: ['iagasy-web', 'openclaw-product-agent', 'n8n-product-automation'],
    featured: true,
    caseStudy: true,
    mediaLayout: 'editorial-4-3',
    mediaNote: 'Composition éditoriale : les nombres visibles dans la maquette ne sont pas repris comme résultats publiables.',
    evidenceLevel: 'cv-confirmed',
    publishableMetrics: [],
  },
  {
    id: 'sbt-travel',
    title: 'SBT Travel',
    categories: ['web'],
    categoryLabel: 'Réalisation web full-stack',
    summary: 'Site web full-stack livré comme réalisation autonome.',
    operationalPurpose: 'Présenter l’offre et fournir une présence web publique adaptée à l’activité.',
    role: 'Ingénierie full-stack.',
    capabilities: ['Conception et réalisation du site web.', 'Mise à disposition sur un domaine public.'],
    technicalComplexity: ['Expérience responsive.', 'Publication web.'],
    stack: ['Application web full-stack'],
    publicUrl: 'https://www.sbt-travel.mg',
    mediaIds: ['sbt-travel-web'],
    featured: false,
    caseStudy: false,
    mediaLayout: 'editorial-4-3',
    mediaNote: 'Composition de présentation ; les promesses visibles dans l’image appartiennent au visuel client.',
    evidenceLevel: 'cv-confirmed',
    publishableMetrics: [],
  },
  {
    id: 'rmb-cargo',
    title: 'RMB Cargo',
    categories: ['web'],
    categoryLabel: 'Réalisation web full-stack',
    summary: 'Site web logistique livré comme réalisation autonome.',
    operationalPurpose: 'Présenter les services de fret et donner accès à une présence publique structurée.',
    role: 'Ingénierie full-stack.',
    capabilities: ['Conception et réalisation du site web.', 'Mise à disposition sur un domaine public.'],
    technicalComplexity: ['Présentation d’une offre logistique.', 'Expérience responsive.'],
    stack: ['Application web full-stack'],
    publicUrl: 'https://www.rmb-cargo.mg',
    mediaIds: ['rmb-cargo-web'],
    featured: false,
    caseStudy: false,
    mediaLayout: 'editorial-4-3',
    mediaNote: 'Composition de présentation ; aucune donnée fournisseur ou promesse commerciale n’est reprise comme preuve.',
    evidenceLevel: 'cv-confirmed',
    publishableMetrics: [],
  },
  {
    id: 'jn-travel',
    title: 'JN Travel',
    categories: ['web'],
    categoryLabel: 'Réalisation web full-stack',
    summary: 'Site web livré comme réalisation autonome.',
    operationalPurpose: 'Fournir une présence web publique claire pour l’activité.',
    role: 'Ingénierie full-stack.',
    capabilities: ['Conception et réalisation du site web.', 'Mise à disposition sur un domaine public.'],
    technicalComplexity: ['Expérience responsive.', 'Publication web.'],
    stack: ['Application web full-stack'],
    publicUrl: 'https://jntravel.mg',
    mediaIds: [],
    featured: false,
    caseStudy: false,
    mediaLayout: 'placeholder',
    mediaNote: 'Aucun média réel validé n’est disponible pour cette réalisation.',
    evidenceLevel: 'cv-confirmed',
    publishableMetrics: [],
  },
  {
    id: 'rmb-cargo-mobile',
    title: 'RMB Cargo — espace client mobile',
    categories: ['mobile'],
    categoryLabel: 'Application mobile',
    summary: 'Espace client mobile RMB Cargo présenté comme réalisation autonome.',
    operationalPurpose: 'Donner aux clients un accès mobile aux services et informations RMB Cargo.',
    role: 'Ingénierie mobile et intégration produit.',
    capabilities: ['Espace client mobile.', 'Intégration au contexte opérationnel RMB Cargo.'],
    technicalComplexity: ['Interface mobile dédiée.', 'Continuité avec les services métier.'],
    stack: ['Application mobile'],
    relatedSystemId: 'rmb-cargo',
    mediaIds: ['rmb-cargo-mobile'],
    featured: false,
    caseStudy: false,
    mediaLayout: 'wide-16-9',
    mediaNote: 'Composition éditoriale présentée en entier, sans extraction de ses promesses commerciales.',
    evidenceLevel: 'cv-confirmed',
    publishableMetrics: [],
  },
  {
    id: 'aim-mobile',
    title: 'AIM — application mobile de paiement',
    categories: ['mobile'],
    categoryLabel: 'Application mobile Flutter',
    summary: 'Application terrain de paiement et de gestion des bénéficiaires, conçue pour les réseaux contraints.',
    operationalPurpose: 'Enregistrer les paiements localement puis synchroniser les données par lots avec une trace exploitable.',
    role: 'Développement mobile Flutter, contrats backend et synchronisation.',
    capabilities: ['Stockage local.', 'Synchronisation par batch.', 'Gestion des paiements partiels ou refusés.', 'Usage terrain hors ligne.'],
    technicalComplexity: ['Reprise après incident réseau.', 'Cohérence des statuts.', 'Contrats mobiles et migrations.'],
    stack: ['Flutter', 'Stockage local', 'Synchronisation batch'],
    relatedSystemId: 'aim-beneficiaries',
    mediaIds: ['aim-mobile'],
    featured: true,
    caseStudy: false,
    mediaLayout: 'wide-16-9',
    mediaNote: 'Composition éditoriale : les volumes visibles illustrent l’interface et non une performance personnelle.',
    evidenceLevel: 'cv-confirmed',
    publishableMetrics: [],
  },
  {
    id: 'tz-smart-mobile',
    title: 'TZ Smart — application mobile FAI',
    categories: ['mobile'],
    categoryLabel: 'Application mobile opérateur FAI',
    summary: 'Application mobile pour les opérations terrain et client d’un fournisseur d’accès à Internet.',
    operationalPurpose: 'Accompagner diagnostics, notifications, interventions et continuité des opérations réseau sur mobile.',
    role: 'Architecture et développement mobile intégré à TZ Smart.',
    capabilities: ['Diagnostics terrain.', 'Notifications FCM.', 'Interventions et récupération CPE.', 'Intégration aux contrats API métier.'],
    technicalComplexity: ['Contraintes réseau.', 'Synchronisation terrain.', 'Droits par rôle.'],
    stack: ['Android Kotlin', 'Jetpack Compose', 'FCM', 'API métier'],
    relatedSystemId: 'tz-smart',
    mediaIds: ['tz-smart-mobile'],
    featured: false,
    caseStudy: false,
    mediaLayout: 'wide-16-9',
    mediaNote: 'Composition éditoriale présentée sans recadrage ; ses nombres ne sont pas des métriques publiées.',
    evidenceLevel: 'cv-confirmed',
    publishableMetrics: [],
  },
];

export const workById = Object.fromEntries(works.map((work) => [work.id, work])) as Record<WorkId, WorkItem>;

export const homeSelections = {
  products: ['tz-smart', 'fretunia', 'aim-mobile', 'acm-iagasy'] as WorkId[],
  productionSites: ['sbt-travel', 'rmb-cargo', 'jn-travel'] as WorkId[],
};

export const recruiterValues: RecruiterValue[] = [
  {
    title: 'Livrer un MVP fiable',
    summary: 'Transformer une spec métier en produit exploitable avec backend, frontend, données, tests et déploiement.',
    proofWorkIds: ['tz-smart', 'fretunia'],
    keywords: ['MVP', 'architecture', 'tests', 'production'],
  },
  {
    title: 'Renforcer une équipe produit',
    summary: 'Prendre un sujet complexe, découper les tâches, sécuriser les choix techniques et livrer avec une équipe.',
    proofWorkIds: ['fretunia', 'aim-beneficiaries'],
    keywords: ['full-stack', 'delivery', 'support production', 'qualité'],
  },
  {
    title: 'Moderniser un outil métier',
    summary: 'Remplacer des flux dispersés par une application lisible, traçable et maintenable.',
    proofWorkIds: ['aim-beneficiaries', 'tz-smart'],
    keywords: ['audit trail', 'exports', 'données', 'workflow'],
  },
  {
    title: 'Sécuriser données et paiements',
    summary: 'Concevoir des flux avec validation, rôles, audit, synchronisation et garde-fous adaptés aux opérations sensibles.',
    proofWorkIds: ['tz-smart', 'aim-beneficiaries'],
    keywords: ['RBAC', 'RLS', 'paiements', 'audit'],
  },
  {
    title: 'Accélérer avec agents IA',
    summary: 'Utiliser Claude Code, Codex, Antigravity et autres outils selon les phases, sous specs, tests et revue humaine.',
    proofWorkIds: ['acm-iagasy', 'tz-smart'],
    keywords: ['specs-driven', 'agents IA', 'revue diff', 'tests'],
  },
];

export const skillEvidence: SkillEvidence[] = [
  {
    category: 'Backend',
    technologies: ['Python', 'Django', 'Django Ninja', 'Node.js', 'Next.js API', 'Express', 'Sequelize', 'Prisma', 'PostgreSQL', 'Supabase', 'Zod', 'OpenAPI'],
    workIds: ['tz-smart', 'fretunia', 'acm-iagasy', 'aim-beneficiaries'],
    proof: 'APIs modulaires, workers, webhooks, migrations, exports Excel/PDF, contrats API et domaines métier séparés.',
    interviewTalkingPoint: 'Comment une règle métier se décline en modèle de données, endpoint, permissions, tests et script de déploiement.',
    level: 'production',
    accent: 'blue',
  },
  {
    category: 'Frontend',
    technologies: ['React', 'TypeScript', 'Next.js', 'Vite', 'React Router', 'React Query', 'PWA', 'SEO technique', 'dashboards', 'formulaires complexes'],
    workIds: ['fretunia', 'tz-smart', 'aim-beneficiaries', 'sbt-travel', 'rmb-cargo', 'jn-travel'],
    proof: 'Back-offices B2B, tracking public, interfaces de paiements, dashboards, tables, filtres, statuts et pages publiques indexables.',
    interviewTalkingPoint: 'Comment concevoir et organiser une interface dense (back-office, dashboard) pour les opérateurs et administrateurs.',
    level: 'production',
    accent: 'violet',
  },
  {
    category: 'Mobile',
    technologies: ['Android Kotlin', 'Jetpack Compose', 'WorkManager', 'Room/SQLCipher', 'FCM', 'Flutter', 'offline sync', 'Retrofit/OkHttp'],
    workIds: ['tz-smart-mobile', 'aim-mobile', 'rmb-cargo-mobile'],
    proof: 'Apps terrain/client, notifications, diagnostics, paiements SMS/MVola, stockage local, synchronisation batch et reprise réseau.',
    interviewTalkingPoint: 'Les choix d’architecture offline-first et les mécanismes de synchronisation sans conflit.',
    level: 'advanced',
    accent: 'green',
  },
  {
    category: 'Data / Sécurité',
    technologies: ['PostgreSQL', 'RLS', 'RBAC', 'audit trail', 'migrations', 'validation input/output', 'secrets', 'logs sans données sensibles'],
    workIds: ['fretunia', 'acm-iagasy', 'tz-smart', 'aim-beneficiaries'],
    proof: 'Isolation tenant, permissions, validations, audit, signatures HMAC, chiffrement, rapports financiers et contrôles de cohérence.',
    interviewTalkingPoint: 'L’équilibre entre rapidité de livraison d’un MVP et exigences de sécurité fondamentales.',
    level: 'production',
    accent: 'navy',
  },
  {
    category: 'IA appliquée',
    technologies: ['OpenAI API', 'n8n', 'OpenClaw', 'RAG', 'Meta Webhooks', 'human handoff', 'traces IA', 'workers'],
    workIds: ['acm-iagasy', 'tz-smart', 'fretunia'],
    proof: 'Orchestration Messenger/WhatsApp, automatisations n8n, exécution OpenClaw, intégrations OpenAI, traces et relais humain.',
    interviewTalkingPoint: 'L’intégration de l’IA en production : traçabilité, garde-fous et gestion des relais humains.',
    level: 'advanced',
    accent: 'orange',
  },
  {
    category: 'Delivery',
    technologies: ['specs-driven', 'tests', 'lint/typecheck', 'scripts de déploiement', 'CI/GitHub Pages', 'support production', 'runbooks'],
    workIds: ['tz-smart', 'acm-iagasy', 'fretunia', 'aim-beneficiaries'],
    proof: 'Specs, contrats, data-models, tasks, tests unitaires/intégration/contract, scripts migration/deploy et validation build.',
    interviewTalkingPoint: 'Le workflow de développement collaboratif specs-first : conception, implémentation outillée et intégration continue.',
    level: 'production',
    accent: 'blue',
  },
];

export const workingMethod: WorkingMethod = {
  title: 'Specs-driven development avec agents IA',
  summary:
    'Je pilote les agents IA comme une équipe technique assistée : je définis les specs, découpe les tâches, vérifie les diffs, impose les tests, sécurise les accès, valide l’architecture et garde la responsabilité finale.',
  steps: [
    'Spec produit et règles métier',
    'Contrats API / modèle de données',
    'Découpage en tâches contrôlables',
    'Implémentation assistée par agents',
    'Tests, lint, typecheck et revue de diff',
    'Validation et livraison',
  ],
  agentUsageNote: 'Claude Code et Codex principalement, Antigravity et autres outils selon les phases.',
  qualityGates: [
    'Critères d’acceptation écrits avant l’implémentation',
    'Validation input/output et permissions dès le MVP',
    'Tests unitaires, intégration ou contrats selon le risque',
    'Revue de diff avant merge ou livraison',
    'Secrets, logs et environnements contrôlés',
  ],
};

export const experiences: Experience[] = [
  {
    id: 'instat',
    organization: 'INSTAT',
    role: 'Collecte de données et support terrain',
    period: '2021',
    summary: 'Compréhension directe des contraintes terrain: collecte, qualité des données, équipements et exécution sous pression.',
    capabilityTags: ['terrain', 'collecte', 'qualité des données'],
    progressionStage: 'terrain',
    evidenceLevel: 'derived-from-cv',
  },
  {
    id: 'fid',
    organization: 'FID',
    role: 'Données, suivi et procédures',
    period: '2021-2022',
    summary: 'Rigueur sur les procédures, le suivi des informations et la traçabilité utile aux décisions opérationnelles.',
    capabilityTags: ['traçabilité', 'opérations', 'données'],
    progressionStage: 'data',
    evidenceLevel: 'derived-from-cv',
  },
  {
    id: 'action-contre-la-faim',
    organization: 'Action Contre la Faim',
    role: 'Collecte, terrain et coordination',
    period: '2022-2023',
    summary: 'Expérience de contextes où le système reste simple, exploitable et fiable pour les équipes terrain.',
    capabilityTags: ['terrain', 'coordination', 'continuité'],
    progressionStage: 'operations',
    evidenceLevel: 'derived-from-cv',
  },
  {
    id: 'aim-madagascar',
    organization: 'AIM Madagascar',
    role: 'Développement système de paiements',
    period: '2023-2024',
    summary: 'Mise en pratique de systèmes sensibles: paiement, synchronisation, exports financiers et historique de contrôle.',
    capabilityTags: ['paiements', 'audit', 'exports'],
    progressionStage: 'operations',
    evidenceLevel: 'cv-confirmed',
  },
  {
    id: 'fretunia-trackmada',
    organization: 'Fretunia / Trackmada',
    role: 'Plateforme logistique multi-tenant',
    period: '2024-2025',
    summary: 'Construction de plateformes logistiques où l’isolation client, le suivi public et les intégrations structurent l’exploitation.',
    capabilityTags: ['multi-tenant', 'logistique', 'tracking public'],
    progressionStage: 'saas-ai',
    evidenceLevel: 'cv-confirmed',
  },
  {
    id: 'techzone-it-solution',
    organization: 'TECHZONE IT SOLUTION',
    role: 'Ingénierie SaaS, réseau et IA appliquée',
    period: '2025-2026',
    summary: 'Consolidation sur des plateformes complètes qui combinent web, mobile, réseau, automatisations n8n, IA intégrée et maintien en production.',
    capabilityTags: ['SaaS', 'mobile', 'IA produit', 'infrastructure'],
    progressionStage: 'infrastructure',
    evidenceLevel: 'derived-from-cv',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    id: 'backend',
    title: 'Backend métier',
    icon: 'API',
    accent: 'blue',
    technologies: ['Django Ninja', 'Express', 'Sequelize', 'PostgreSQL', 'RLS', 'RBAC'],
    useCases: ['structurer les règles métier', 'contrôler les accès', 'séparer les clients', 'préparer la facturation'],
    impacts: ['données plus fiables', 'décisions mieux tracées', 'risques d’accès réduits'],
    evidenceLevel: 'cv-confirmed',
  },
  {
    id: 'frontend',
    title: 'Interfaces B2B',
    icon: 'UI',
    accent: 'violet',
    technologies: ['React', 'Vite', 'TypeScript'],
    useCases: ['piloter les opérations', 'lire les alertes', 'suivre les clients', 'ouvrir un tracking public'],
    impacts: ['moins d’ambiguïté pour les équipes', 'actions plus rapides', 'interfaces utilisables au quotidien'],
    evidenceLevel: 'cv-confirmed',
  },
  {
    id: 'mobile',
    title: 'Mobile terrain',
    icon: 'MOB',
    accent: 'green',
    technologies: ['Flutter', 'Android Kotlin', 'Jetpack Compose', 'FCM'],
    useCases: ['collecter hors ligne', 'synchroniser par lot', 'notifier les équipes', 'travailler en zone contrainte'],
    impacts: ['continuité terrain', 'moins de ressaisie', 'meilleure remontée des événements'],
    evidenceLevel: 'cv-confirmed',
  },
  {
    id: 'ai',
    title: 'IA appliquée',
    icon: 'AI',
    accent: 'orange',
    technologies: ['OpenAI', 'RAG', 'ChromaDB', 'Meta Webhooks'],
    useCases: ['répondre aux demandes fréquentes', 'retrouver le bon contexte', 'transférer les cas sensibles', 'auditer les réponses'],
    impacts: ['temps de réponse réduit', 'contrôle humain conservé', 'qualité suivie dans le temps'],
    evidenceLevel: 'cv-confirmed',
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure réseau',
    icon: 'NET',
    accent: 'navy',
    technologies: ['Linux', 'Docker', 'Caddy', 'Nginx', 'FreeRADIUS', 'MikroTik', 'WireGuard', 'Starlink'],
    useCases: ['déployer les services', 'sécuriser les accès', 'connecter les sites', 'surveiller les incidents'],
    impacts: ['service plus stable', 'accès maîtrisés', 'diagnostic plus rapide'],
    evidenceLevel: 'cv-confirmed',
  },
  {
    id: 'product-operations',
    title: 'Produit et opérations',
    icon: 'OPS',
    accent: 'blue',
    technologies: ['cadrage', 'support production', 'documentation', 'exports Excel'],
    useCases: ['clarifier les besoins', 'prioriser les risques', 'documenter les décisions', 'accompagner la production'],
    impacts: ['meilleure exécution', 'moins de flou entre métier et technique', 'maintenance plus durable'],
    evidenceLevel: 'derived-from-cv',
  },
];

export const operatingPrinciples: OperatingPrinciple[] = [
  { id: 'reliability-first', title: 'Fiabilité d’abord', summary: 'Un système utile reste stable pendant l’exploitation, pas seulement pendant la démonstration.', accent: 'blue' },
  { id: 'business-impact', title: 'Décisions plus claires', summary: 'Les écrans doivent réduire l’ambiguïté et aider les équipes à agir.', accent: 'green' },
  { id: 'code-quality', title: 'Base maintenable', summary: 'Une architecture lisible facilite les évolutions et le support.', accent: 'violet' },
  { id: 'data-mastery', title: 'Données maîtrisées', summary: 'Validation, traçabilité et exports fiables pour garder le contrôle.', accent: 'orange' },
  { id: 'autonomy-collaboration', title: 'Collaboration nette', summary: 'Avancer vite tout en gardant les responsabilités et les décisions visibles.', accent: 'navy' },
];

export const collaborationModes: CollaborationMode[] = [
  {
    id: 'mission-produit',
    title: 'Mission produit',
    summary: 'Cadrer, prioriser et livrer un outil directement utile à vos opérations.',
    bestFor: ['nouveau produit', 'refonte structurée', 'alignement métier-technique'],
  },
  {
    id: 'renfort-technique',
    title: 'Renfort technique',
    summary: 'Renforcer une équipe existante sur un sujet sensible, bloqué ou proche de la production.',
    bestFor: ['pic de charge', 'blocage technique', 'mise en production'],
  },
  {
    id: 'cadrage-architecture',
    title: 'Cadrage d’architecture',
    summary: 'Clarifier vos flux, vos risques et les choix techniques avant de construire.',
    bestFor: ['systèmes connectés', 'contraintes réseau', 'flux transactionnels'],
  },
  {
    id: 'modernisation-metier',
    title: 'Modernisation métier',
    summary: 'Remplacer des outils fragiles par une base plus durable, traçable et maintenable.',
    bestFor: ['Excel critique', 'processus dispersés', 'outils difficiles à maintenir'],
  },
];

export const pageCopy = {
  home: {
    eyebrow: 'Portfolio technique',
    mapTitle: 'Opérations entre terrain, clients et distance',
    mapSummary: 'Madagascar comme base, collaboration remote Afrique-Europe, et expérience sur des produits utilisés dans des contextes opérationnels réels.',
    valuesTitle: 'Ce que je peux apporter à une équipe',
    valuesSummary: 'Un profil senior utile quand il faut transformer une contrainte métier en produit livré, testé et maintenable.',
    productsTitle: 'Produits et systèmes livrés',
    productsSummary: 'Une sélection resserrée entre plateforme métier, SaaS logistique, application mobile et IA directement intégrée au produit.',
    productionSitesTitle: 'Sites en production',
    productionSitesSummary: 'Trois réalisations web autonomes, présentées sans suggérer de socle ou de processus partagé.',
    automationTitle: 'Automatisations contrôlées',
    automationSummary: 'n8n orchestre des notifications et des traitements métier dans plusieurs produits. Les règles, traces et décisions sensibles restent contrôlées.',
    principlesSummary: 'La séniorité se voit dans les choix, la traçabilité, les tests et la capacité à livrer sans abandonner la qualité.',
  },
  parcours: {
    eyebrow: 'Trajectoire',
    intro: 'Une trajectoire construite sur le terrain, les données, les paiements, la logistique, les plateformes métier et l’infrastructure.',
    timelineTitle: 'Du terrain aux plateformes métier',
    timelineSummary: 'Chaque étape ajoute une contrainte utile pour vos projets: fiabilité terrain, données propres, flux sensibles, automatisation contrôlée et production.',
    lessons: [
      'Les outils doivent rester utilisables quand le réseau, le temps ou les données ne sont pas parfaits.',
      'Les données métier doivent rester exportables, auditables et compréhensibles par les responsables.',
      'L’automatisation devient utile quand elle garde un relais humain et une trace claire.',
    ],
  },
  projets: {
    eyebrow: 'Projets',
    intro: 'Systèmes, sites web, applications mobiles et IA intégrée : un inventaire éditorial des produits livrés et de leur rôle opérationnel.',
  },
  competences: {
    eyebrow: 'Compétences',
    intro: 'Compétences full-stack reliées aux systèmes, sites, applications mobiles et intégrations IA réellement livrés.',
    productAiSummary: 'OpenAI API, n8n, OpenClaw, webhooks, contexte métier, traces et relais humains participent au fonctionnement des produits livrés.',
    developmentAgentsSummary: 'Codex, Claude Code et les agents similaires assistent la conception et l’exécution sous specs, tests et revue humaine.',
  },
  methode: {
    eyebrow: 'Méthode',
    intro: 'J’utilise les agents IA pour accélérer l’exécution, pas pour remplacer l’ingénierie. Les specs, tests, revues et décisions restent sous responsabilité humaine.',
  },
  contact: {
    eyebrow: 'Contact',
    intro: 'Opportunités senior full-stack, missions produit ou collaborations techniques.',
    interventionDomains: ['plateforme métier full-stack', 'application mobile', 'SaaS opérationnel', 'intégration IA / automatisation', 'reprise et fiabilisation'],
    projectTypes: ['Plateforme métier full-stack', 'Application mobile', 'SaaS opérationnel', 'Intégration IA / automatisation', 'Reprise et fiabilisation'],
  },
} as const;

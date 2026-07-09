export type EvidenceLevel = 'cv-confirmed' | 'derived-from-cv' | 'requires-validation';

export type Accent = 'blue' | 'green' | 'orange' | 'violet' | 'navy';

export type ProjectId = 'tz-smart' | 'ai-commerce-orchestrator' | 'fretunia-trackmada' | 'aim-madagascar';

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

export type Project = {
  id: ProjectId;
  title: string;
  category: string;
  period?: string;
  domain: string;
  context: string;
  problem: string;
  role: string;
  built: string[];
  technicalComplexity: string[];
  publicProofLinks: ContactLink[];
  privateProofNote: string;
  solutionFlow: FlowNode[];
  stack: string[];
  operationalResult: string;
  sourceNotes: string[];
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
  proofProjectIds: ProjectId[];
  keywords: string[];
};

export type SkillEvidence = {
  category: string;
  technologies: string[];
  projects: string[];
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

export type BlueprintNode = {
  id: string;
  label: string;
  detail: string;
  accent: Accent;
  status: BlueprintStatus;
  lane: 'input' | 'application' | 'control' | 'output';
};

export type BlueprintFlow = {
  id: string;
  from: string;
  to: string;
  label: string;
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
  { id: 'field-teams', label: 'Équipes terrain', detail: 'Collecte, incidents, visites', accent: 'green', status: 'operational', lane: 'input' },
  { id: 'web-app', label: 'Web App', detail: 'Pilotage métier', accent: 'blue', status: 'processing', lane: 'application' },
  { id: 'mobile-app', label: 'Mobile App', detail: 'Usage offline / sync', accent: 'green', status: 'operational', lane: 'application' },
  { id: 'api', label: 'API métier', detail: 'Règles, droits, intégrations', accent: 'blue', status: 'processing', lane: 'control' },
  { id: 'postgresql', label: 'PostgreSQL', detail: 'Données, audit, isolation', accent: 'navy', status: 'verified', lane: 'output' },
  { id: 'payment', label: 'Payment Gateway', detail: 'Autorisé, confirmé, rapproché', accent: 'orange', status: 'verified', lane: 'input' },
  { id: 'queue', label: 'Queue Worker', detail: 'Priorités, reprise, lots', accent: 'violet', status: 'queued', lane: 'control' },
  { id: 'ai', label: 'AI Assistant', detail: 'RAG, prompts, seuils', accent: 'orange', status: 'processing', lane: 'control' },
  { id: 'human', label: 'Human Validation', detail: 'Décision si risque', accent: 'violet', status: 'review', lane: 'output' },
  { id: 'approved', label: 'Approved', detail: 'Action auditée', accent: 'green', status: 'verified', lane: 'output' },
  { id: 'monitoring', label: 'Monitoring', detail: 'Logs, métriques, traces, alertes', accent: 'blue', status: 'observing', lane: 'application' },
];

export const blueprintFlows: BlueprintFlow[] = [
  { id: 'field-web', from: 'Équipes terrain', to: 'Web App', label: 'Données terrain', accent: 'green' },
  { id: 'field-mobile', from: 'Équipes terrain', to: 'Mobile App', label: 'Capture offline', accent: 'green' },
  { id: 'web-api', from: 'Web App', to: 'API métier', label: 'Flux applicatif', accent: 'blue' },
  { id: 'mobile-api', from: 'Mobile App', to: 'API métier', label: 'Synchronisation', accent: 'blue' },
  { id: 'payment-api', from: 'Payment Gateway', to: 'API métier', label: 'Paiement', accent: 'orange' },
  { id: 'api-db', from: 'API métier', to: 'PostgreSQL', label: 'Écriture auditée', accent: 'navy' },
  { id: 'api-queue', from: 'API métier', to: 'Queue Worker', label: 'Tâches', accent: 'violet' },
  { id: 'queue-ai', from: 'Queue Worker', to: 'AI Assistant', label: 'Assistance', accent: 'orange' },
  { id: 'ai-human', from: 'AI Assistant', to: 'Human Validation', label: 'Handoff', accent: 'violet' },
  { id: 'human-approved', from: 'Human Validation', to: 'Approved', label: 'Validation', accent: 'green' },
  { id: 'monitoring-loop', from: 'Monitoring', to: 'API métier', label: 'Observabilité', accent: 'blue' },
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

export const projects: Project[] = [
  {
    id: 'tz-smart',
    title: 'TZ Smart',
    category: 'SaaS réseau et opérations terrain',
    period: '2024-2026',
    domain: 'CRM, incidents, visites terrain, paiements et notifications',
    context: 'Un opérateur réseau suit ses clients, ses zones, ses incidents, ses visites et ses paiements dans un même environnement.',
    problem: 'Les informations critiques se dispersent vite entre terrain, support, paiement et supervision réseau.',
    role: 'Fondateur technique et ingénieur full-stack senior: cadrage, architecture, backend, frontend, mobile, intégrations paiement/réseau et support production.',
    built: [
      'Backend Django Ninja/PostgreSQL structuré par domaines métier.',
      'Back-office React/Vite pour clients, zones, staff, monitoring, météo, notifications et paiements.',
      'Application Android Kotlin pour terrain/client, diagnostics, notifications et récupération CPE.',
      'Passerelle SMS/MVola et intégration RadiusDesk pour fulfillment réseau.',
    ],
    technicalComplexity: [
      'Contrats API entre web, mobile et backend.',
      'RBAC admin/NOC/technicien/client.',
      'Synchronisation terrain et notifications FCM.',
      'Paiements, reconciliation, ledger, quarantaines et contraintes réseau.',
    ],
    publicProofLinks: [
      { label: 'TZ Smart', href: 'https://app.techzone.lat', kind: 'product', isPublic: true },
      { label: 'TechZone', href: 'https://www.techzone.lat', kind: 'product', isPublic: true },
    ],
    privateProofNote: 'Architecture, démonstrations applicatives, spécifications et extraits de code disponibles lors de nos échanges.',
    solutionFlow: [
      { id: 'tz-field', label: 'Équipes terrain', description: 'Visites, incidents, interventions', kind: 'actor', accent: 'green' },
      { id: 'tz-api', label: 'API métier', description: 'Clients, zones, droits', kind: 'system', accent: 'blue' },
      { id: 'tz-db', label: 'Base consolidée', description: 'Historique exploitable', kind: 'data', accent: 'navy' },
      { id: 'tz-mobile', label: 'Application mobile', description: 'Usage terrain', kind: 'system', accent: 'violet' },
      { id: 'tz-fcm', label: 'Notifications', description: 'Alertes utiles', kind: 'output', accent: 'orange' },
      { id: 'tz-mvola', label: 'Paiements MVola', description: 'Encaissement suivi', kind: 'payment', accent: 'orange' },
    ],
    stack: ['Django Ninja', 'PostgreSQL', 'React', 'Vite', 'TypeScript', 'Android Kotlin', 'Jetpack Compose', 'FCM', 'MVola', 'RadiusDesk', 'Starlink'],
    operationalResult: 'Les équipes disposent d’un suivi consolidé des clients, incidents, visites terrain, paiements intégrés et notifications.',
    sourceNotes: [
      'CV: SaaS réseau, exploitation terrain et paiement client.',
      'CV: Django Ninja, PostgreSQL, React/Vite, TypeScript, Android Kotlin, Jetpack Compose, FCM, MVola, RadiusDesk, Starlink.',
    ],
    evidenceLevel: 'cv-confirmed',
    publishableMetrics: [],
  },
  {
    id: 'ai-commerce-orchestrator',
    title: 'AI Commerce Orchestrator',
    category: 'Orchestration de support commercial',
    period: '2024-2026',
    domain: 'Meta webhooks, Messenger, WhatsApp, queue, worker et RAG',
    context: 'Les conversations clients arrivent par Messenger et WhatsApp, avec un besoin de réponse rapide et cohérente.',
    problem: 'Répondre plus vite sans laisser l’IA décider seule des cas sensibles.',
    role: 'Product engineer IA appliquée: architecture SaaS, webhooks Meta, pipeline RAG, prompts, sécurité des tokens, traces et handoff humain.',
    built: [
      'SaaS multi-tenant Next.js/Supabase pour orchestration Messenger/WhatsApp.',
      'Queue de messages, worker, endpoint agent et modes shadow/live.',
      'Pipeline RAG avec ingestion, chunking, embeddings, base de connaissance et seuils de confiance.',
      'Extracteur Facebook Graph API avec checkpoints, anti-duplication et exports.',
    ],
    technicalComplexity: [
      'Validation webhooks Meta et séparation des secrets.',
      'Audit des prompts, traces IA et garde-fous de livraison.',
      'Handoff humain, pause/reprise conversation et rejet des doublons/stale events.',
      'Tests contractuels sur payloads, runtime agent et anti-régression.',
    ],
    publicProofLinks: [],
    privateProofNote: 'Démonstrations des flux, spécifications, tests et décisions d’architecture disponibles lors de nos échanges.',
    solutionFlow: [
      { id: 'ai-channels', label: 'Messenger / WhatsApp', description: 'Demandes clients', kind: 'actor', accent: 'orange' },
      { id: 'ai-webhooks', label: 'Webhooks Meta', description: 'Messages entrants', kind: 'system', accent: 'blue' },
      { id: 'ai-queue', label: 'File de traitement', description: 'Priorités et reprise', kind: 'system', accent: 'violet' },
      { id: 'ai-rag', label: 'Base de connaissance', description: 'Réponses contextualisées', kind: 'data', accent: 'green' },
      { id: 'ai-openai', label: 'Modèle IA', description: 'Assistance contrôlée', kind: 'ai', accent: 'orange' },
      { id: 'ai-human', label: 'Relais humain', description: 'Décision si besoin', kind: 'output', accent: 'navy' },
    ],
    stack: ['Meta Webhooks', 'Messenger', 'WhatsApp', 'Queue', 'Worker', 'RAG', 'ChromaDB', 'OpenAI'],
    operationalResult: 'Les réponses peuvent être automatisées tout en conservant un contrôle humain, une trace des prompts et des seuils de confiance.',
    sourceNotes: ['CV: Meta Webhooks, Messenger/WhatsApp, queue, worker, RAG, ChromaDB, OpenAI, human handoff.'],
    evidenceLevel: 'cv-confirmed',
    publishableMetrics: [],
  },
  {
    id: 'fretunia-trackmada',
    title: 'Fretunia / Trackmada',
    category: 'Logistique B2B multi-tenant',
    period: '2024-2026',
    domain: 'Colis, lots, événements, facturation, tracking public et webhooks',
    context: 'Des entreprises logistiques doivent suivre les colis, lots, événements, tarifs et factures par client.',
    problem: 'Unifier les opérations internes, les accès clients et le suivi public sans mélanger les données des organisations.',
    role: 'Développeur full-stack / product engineer sur plateforme logistique multi-tenant: opérations, facturation, tracking public, PWA, SEO et intégrations.',
    built: [
      'Surfaces Next.js/React pour colis, lots, événements, facturation, tarifs et suivi public.',
      'Architecture multi-tenant avec RLS/RBAC, memberships, settings, API keys et webhooks.',
      'Facturation PDF, moteur tarifaire, devis, paliers et workflows partenaires.',
      'SEO technique, PWA, cache local, tracking public tenant-scoped et notifications.',
    ],
    technicalComplexity: [
      'Isolation tenant et garde-fous SQL sur données sensibles.',
      'Workflows logistiques multi-rôles: agence, client, partenaire, public.',
      'Outbox notifications email/SMS/WhatsApp et webhooks Meta WhatsApp.',
      'Large surface de tests API, composants, billing, tracking, tenants et PWA.',
    ],
    publicProofLinks: [
      { label: 'Fretunia', href: 'https://fretunia.com', kind: 'product', isPublic: true },
    ],
    privateProofNote: 'Parcours produit, architecture, tests et détails multi-tenant disponibles lors de nos échanges.',
    solutionFlow: [
      { id: 'ft-clients', label: 'Entreprises clientes', description: 'Opérations séparées', kind: 'actor', accent: 'green' },
      { id: 'ft-api', label: 'API multi-tenant', description: 'Droits et isolation', kind: 'system', accent: 'blue' },
      { id: 'ft-parcels', label: 'Colis et lots', description: 'Événements logistiques', kind: 'data', accent: 'navy' },
      { id: 'ft-invoice', label: 'Facturation', description: 'Tarifs et factures', kind: 'payment', accent: 'orange' },
      { id: 'ft-tracking', label: 'Suivi public', description: 'Visibilité client', kind: 'output', accent: 'violet' },
      { id: 'ft-webhooks', label: 'Webhooks', description: 'Systèmes partenaires', kind: 'system', accent: 'orange' },
    ],
    stack: ['React', 'TypeScript', 'API multi-tenant', 'RBAC', 'RLS', 'Webhooks', 'Facturation', 'Tracking public'],
    operationalResult: 'La plateforme est utilisée par 20+ entreprises en Afrique pour suivre et gérer leurs opérations logistiques.',
    sourceNotes: [
      'CV: logistique B2B, multi-tenant, parcels, lots, events, invoicing, tariffs, public tracking, RLS/RBAC, API keys, webhooks.',
      'CV: used by 20+ enterprises in Africa.',
    ],
    evidenceLevel: 'cv-confirmed',
    publishableMetrics: [
      {
        label: 'Entreprises utilisatrices',
        value: '20+ entreprises',
        wordingGuardrail: 'Uniquement pour Fretunia / Trackmada, formulé comme usage plateforme.',
        evidenceLevel: 'cv-confirmed',
      },
    ],
  },
  {
    id: 'aim-madagascar',
    title: 'AIM Madagascar',
    category: 'Gestion bénéficiaires et paiements cash',
    period: '2023-2025',
    domain: 'Paiements, synchronisation locale, exports financiers et audit trail',
    context: 'Les paiements cash à des bénéficiaires exigent une saisie fiable, des statuts clairs et des exports financiers exploitables.',
    problem: 'Maintenir la continuité terrain, éviter les pertes de trace et produire des fichiers financiers prêts à contrôler.',
    role: 'Développeur full-stack web/mobile sur système bénéficiaires et paiements: backend, back-office, application caissier, exports financiers et support production.',
    built: [
      'Backend Express/Sequelize/PostgreSQL pour bénéficiaires, caissiers, périodes, lignes et paiements.',
      'Back-office React/Vite pour imports, rapports, assignations, corrections, audit et clôtures.',
      'Application mobile Flutter caissier avec stockage local et synchronisation par batch.',
      'Exports Excel financiers avec montants prévus, payés, non payés, arriérés et contrôles métier.',
    ],
    technicalComplexity: [
      'Paiements partiels/refusés, synchronisations tardives et reprise après incident réseau.',
      'Audit trail, validations/clôtures, corrections post-clôture et garde-fous de suppression.',
      'Volumes financiers présentés comme criticité système, pas comme performance personnelle.',
      'Contrats mobiles, scripts de migration et tests contractuels ciblés.',
    ],
    publicProofLinks: [],
    privateProofNote: 'Détails fonctionnels, captures anonymisées, exports et indicateurs de criticité disponibles lors de nos échanges.',
    solutionFlow: [
      { id: 'aim-cashier', label: 'Application caissier', description: 'Paiement sur terrain', kind: 'actor', accent: 'green' },
      { id: 'aim-local', label: 'Stockage local', description: 'Continuité hors ligne', kind: 'data', accent: 'navy' },
      { id: 'aim-sync', label: 'Synchronisation batch', description: 'Remontée contrôlée', kind: 'system', accent: 'blue' },
      { id: 'aim-payment', label: 'Paiements partiels / refusés', description: 'Cas réels gérés', kind: 'payment', accent: 'orange' },
      { id: 'aim-export', label: 'Exports Excel', description: 'Contrôle financier', kind: 'output', accent: 'violet' },
      { id: 'aim-audit', label: 'Historique complet', description: 'Audit et vérification', kind: 'system', accent: 'green' },
    ],
    stack: ['Express', 'Sequelize', 'PostgreSQL', 'React', 'Vite', 'Flutter', 'ExcelJS'],
    operationalResult: 'Les paiements restent tracés, les statuts sont gérés et les exports financiers peuvent être contrôlés.',
    sourceNotes: [
      'CV: beneficiary and cash payment management system.',
      'CV: Express/Sequelize/PostgreSQL, React/Vite, Flutter, ExcelJS.',
      'CV: mobile cashier app, local recording, batch synchronization, partial/refused payments, Excel financial exports, audit trail.',
    ],
    evidenceLevel: 'cv-confirmed',
    publishableMetrics: [],
  },
];

export const recruiterValues: RecruiterValue[] = [
  {
    title: 'Livrer un MVP fiable',
    summary: 'Transformer une spec métier en produit exploitable avec backend, frontend, données, tests et déploiement.',
    proofProjectIds: ['tz-smart', 'fretunia-trackmada'],
    keywords: ['MVP', 'architecture', 'tests', 'production'],
  },
  {
    title: 'Renforcer une équipe produit',
    summary: 'Prendre un sujet complexe, découper les tâches, sécuriser les choix techniques et livrer avec une équipe.',
    proofProjectIds: ['fretunia-trackmada', 'aim-madagascar'],
    keywords: ['full-stack', 'delivery', 'support production', 'qualité'],
  },
  {
    title: 'Moderniser un outil métier',
    summary: 'Remplacer des flux dispersés par une application lisible, traçable et maintenable.',
    proofProjectIds: ['aim-madagascar', 'tz-smart'],
    keywords: ['audit trail', 'exports', 'données', 'workflow'],
  },
  {
    title: 'Sécuriser données et paiements',
    summary: 'Concevoir des flux avec validation, rôles, audit, synchronisation et garde-fous adaptés aux opérations sensibles.',
    proofProjectIds: ['tz-smart', 'aim-madagascar'],
    keywords: ['RBAC', 'RLS', 'paiements', 'audit'],
  },
  {
    title: 'Accélérer avec agents IA',
    summary: 'Utiliser Claude Code, Codex, Antigravity et autres outils selon les phases, sous specs, tests et revue humaine.',
    proofProjectIds: ['ai-commerce-orchestrator', 'tz-smart'],
    keywords: ['specs-driven', 'agents IA', 'revue diff', 'tests'],
  },
];

export const skillEvidence: SkillEvidence[] = [
  {
    category: 'Backend',
    technologies: ['Python', 'Django', 'Django Ninja', 'Node.js', 'Next.js API', 'Express', 'Sequelize', 'Prisma', 'PostgreSQL', 'Supabase', 'Zod', 'OpenAPI'],
    projects: ['TZ Smart', 'Trackmada', 'Agent CM', 'AIM Madagascar', 'TechZone'],
    proof: 'APIs modulaires, workers, webhooks, migrations, exports Excel/PDF, contrats API et domaines métier séparés.',
    interviewTalkingPoint: 'Comment une règle métier se décline en modèle de données, endpoint, permissions, tests et script de déploiement.',
    level: 'production',
    accent: 'blue',
  },
  {
    category: 'Frontend',
    technologies: ['React', 'TypeScript', 'Next.js', 'Vite', 'React Router', 'React Query', 'PWA', 'SEO technique', 'dashboards', 'formulaires complexes'],
    projects: ['Trackmada', 'TZ Smart Frontend', 'AIM Frontend', 'Portfolio', 'TechZone'],
    proof: 'Back-offices B2B, tracking public, interfaces de paiements, dashboards, tables, filtres, statuts et pages publiques indexables.',
    interviewTalkingPoint: 'Comment concevoir et organiser une interface dense (back-office, dashboard) pour les opérateurs et administrateurs.',
    level: 'production',
    accent: 'violet',
  },
  {
    category: 'Mobile',
    technologies: ['Android Kotlin', 'Jetpack Compose', 'WorkManager', 'Room/SQLCipher', 'FCM', 'Flutter', 'offline sync', 'Retrofit/OkHttp'],
    projects: ['TZ Smart Android', 'SMS Paiement Gateway', 'AIM Mobile'],
    proof: 'Apps terrain/client, notifications, diagnostics, paiements SMS/MVola, stockage local, synchronisation batch et reprise réseau.',
    interviewTalkingPoint: 'Les choix d’architecture offline-first et les mécanismes de synchronisation sans conflit.',
    level: 'advanced',
    accent: 'green',
  },
  {
    category: 'Data / Sécurité',
    technologies: ['PostgreSQL', 'RLS', 'RBAC', 'audit trail', 'migrations', 'validation input/output', 'secrets', 'logs sans données sensibles'],
    projects: ['Trackmada', 'Agent CM', 'TZ Smart', 'AIM Madagascar'],
    proof: 'Isolation tenant, permissions, validations, audit, signatures HMAC, chiffrement, rapports financiers et contrôles de cohérence.',
    interviewTalkingPoint: 'L’équilibre entre rapidité de livraison d’un MVP et exigences de sécurité fondamentales.',
    level: 'production',
    accent: 'navy',
  },
  {
    category: 'IA appliquée',
    technologies: ['OpenAI API', 'RAG', 'ChromaDB', 'Meta Webhooks', 'prompts versionnés', 'human handoff', 'traces IA', 'workers'],
    projects: ['Agent CM', 'Facebook App', 'Trackmada', 'TZ Smart'],
    proof: 'Orchestration Messenger/WhatsApp, queue, RAG, seuils de confiance, audit prompts, shadow/live modes et relais humain.',
    interviewTalkingPoint: 'L’intégration de l’IA en production : traçabilité, garde-fous et gestion des relais humains.',
    level: 'advanced',
    accent: 'orange',
  },
  {
    category: 'Delivery',
    technologies: ['specs-driven', 'tests', 'lint/typecheck', 'scripts de déploiement', 'CI/GitHub Pages', 'support production', 'runbooks'],
    projects: ['TZ Smart Specs', 'Agent CM', 'Trackmada', 'Portfolio'],
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
    summary: 'Consolidation sur des plateformes métier qui combinent logiciel, réseau, automatisation IA et maintien en production.',
    capabilityTags: ['SaaS', 'IA appliquée', 'infrastructure'],
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
    featuredProjectIds: ['tz-smart', 'ai-commerce-orchestrator', 'fretunia-trackmada', 'aim-madagascar'] satisfies ProjectId[],
    valuesTitle: 'Ce que je peux apporter à une équipe',
    valuesSummary: 'Un profil senior utile quand il faut transformer une contrainte métier en produit livré, testé et maintenable.',
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
    intro: 'Études de cas courtes pour évaluer mon rôle, mon stack, ce que j’ai construit, la complexité technique et les preuves disponibles.',
  },
  competences: {
    eyebrow: 'Compétences',
    intro: 'Présentation de mes compétences full-stack : stack technologique, projets de preuve, niveau d’usage et thématiques d’échange.',
  },
  methode: {
    eyebrow: 'Méthode',
    intro: 'J’utilise les agents IA pour accélérer l’exécution, pas pour remplacer l’ingénierie. Les specs, tests, revues et décisions restent sous responsabilité humaine.',
  },
  contact: {
    eyebrow: 'Contact',
    intro: 'Opportunités senior full-stack, missions produit ou collaborations techniques.',
    interventionDomains: ['Senior full-stack', 'backend Python/Node', 'frontend React/Next.js', 'mobile terrain', 'IA appliquée', 'sécurité et delivery'],
  },
} as const;

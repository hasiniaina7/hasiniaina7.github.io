import {
  works,
  type Accent,
  type BlueprintNodeId,
  type BlueprintStatus,
  type BlueprintViewId,
  type BlueprintZone,
  type EvidenceLevel,
  type WorkId,
  type WorkItem,
} from './portfolioData';

export type Locale = 'en' | 'fr';
export type RouteId = 'home' | 'projects' | 'skills' | 'agenticDelivery' | 'experience' | 'contact';
export type Localized<T> = Record<Locale, T>;

export type RouteDefinition = {
  id: RouteId;
  slugs: Localized<string>;
};

export type AgenticStage = {
  id: string;
  title: string;
  description: string;
  owner: 'human' | 'coordinator' | 'specialist-agents';
  ownerLabel: string;
  boundedBy: string;
  accent: 'blue' | 'violet' | 'green';
};

export type AgenticCaseSummary = {
  id: 'tz-smart' | 'fretunia' | 'acm-iagasy';
  title: string;
  summary: string;
  coordination: string[];
  boundary: string;
};

export type HumanApprovalGate = {
  id: 'production' | 'secrets' | 'payments' | 'real-data' | 'sensitive-migrations' | 'external-actions';
  label: string;
  reason: string;
};

export type AgenticMethod = {
  title: string;
  promise: string;
  coordinator: 'Claude Code';
  secondaryTools: ['Codex'];
  stages: AgenticStage[];
  cases: AgenticCaseSummary[];
  approvalGates: HumanApprovalGate[];
};

export type RecruiterCta = {
  targetRoles: string[];
  primaryRoute: 'agenticDelivery';
  resumes: {
    ai: Localized<string>;
    fullStack: Localized<string>;
  };
};

export type ExternalDemoVideo =
  | { enabled: false; url?: never; thumbnail?: never }
  | {
      enabled: true;
      url: string;
      thumbnail: string;
      spokenLanguage: 'fr';
      subtitleLanguage: 'en';
      safetyReviewed: true;
    };

export type SeoEntry = {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
};

export type SkillSummary = {
  id: string;
  title: string;
  level: string;
  summary: string;
  technologies: string[];
  proofWorkIds: WorkId[];
  accent: Accent;
};

export type ExperienceSummary = {
  id: string;
  stage: string;
  period: string;
  title: string;
  role: string;
  summary: string;
  tags: string[];
  evidenceLevel: EvidenceLevel;
  accent: Accent;
};

export type PortfolioContent = {
  locale: Locale;
  languageName: string;
  profile: {
    fullName: string;
    role: string;
    level: string;
    based: string;
    remote: string;
    relocation: string;
    promise: string;
    availability: string;
    email: string;
  };
  navigation: Record<RouteId, string>;
  common: {
    skipLink: string;
    menuOpen: string;
    menuClose: string;
    contact: string;
    navigation: string;
    channels: string;
    verifiedContent: string;
    loading: string;
    evidence: Record<EvidenceLevel, string>;
    publicSite: string;
    publicApp: string;
    caseStudy: string;
    noMedia: string;
    relatedWork: string;
    tools: string;
    moreTools: string;
    methodAria: string;
    openImage: string;
    loadingImage: string;
    imageError: string;
    closeViewer: string;
  };
  home: {
    eyebrow: string;
    primaryCta: string;
    secondaryCta: string;
    fullStackCta: string;
    factsLabel: string;
    factLabels: [string, string, string, string];
    approach: string;
    orchestrationEyebrow: string;
    orchestrationTitle: string;
    orchestrationSummary: string;
    proofsEyebrow: string;
    proofsTitle: string;
    proofsSummary: string;
    systemsEyebrow: string;
    systemsTitle: string;
    systemsSummary: string;
    allProjects: string;
    distinctionEyebrow: string;
    distinctionTitle: string;
    productAiTitle: string;
    productAiSummary: string;
    developmentAgentsTitle: string;
    developmentAgentsSummary: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    intro: string;
    inventoryEyebrow: string;
    inventoryTitle: string;
    inventorySummary: string;
    filters: Record<'all' | 'system' | 'web' | 'mobile' | 'product-ai', string>;
    result: (count: number) => string;
    casesEyebrow: string;
    casesTitle: string;
    casesSummary: string;
    purpose: string;
    delivery: string;
    capabilities: string;
    complexity: string;
    stack: string;
    verifiedMarkers: string;
    mediaCaption: (title: string) => string;
  };
  skillsPage: {
    eyebrow: string;
    title: string;
    intro: string;
    pattern: [string, string, string, string];
    matrixEyebrow: string;
    matrixTitle: string;
    matrixSummary: string;
    proofLabel: string;
    reliabilityEyebrow: string;
    reliabilityTitle: string;
    reliabilitySummary: string;
  };
  method: {
    eyebrow: string;
    title: string;
    intro: string;
    hierarchyEyebrow: string;
    hierarchyTitle: string;
    hierarchySummary: string;
    primaryAgent: string;
    secondaryTool: string;
    stagesEyebrow: string;
    stagesSummary: string;
    gatesEyebrow: string;
    gatesTitle: string;
    gatesSummary: string;
    casesEyebrow: string;
    casesTitle: string;
    casesSummary: string;
    boundaryLabel: string;
    videoTitle: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    intro: string;
    timelineEyebrow: string;
    timelineTitle: string;
    timelineSummary: string;
    lessonsEyebrow: string;
    lessonsTitle: string;
    lessonsSummary: string;
    lessons: string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    targetEyebrow: string;
    targetTitle: string;
    channels: string;
    resumeTitle: string;
    aiResume: string;
    aiResumeSummary: string;
    fullStackResume: string;
    fullStackResumeSummary: string;
    composerEyebrow: string;
    composerTitle: string;
    composerSummary: string;
    fields: {
      name: string;
      email: string;
      company: string;
      role: string;
      workModel: string;
      message: string;
      submit: string;
      defaultSubject: string;
      unspecified: string;
    };
    workModels: string[];
  };
  finalCta: {
    eyebrow: string;
    title: string;
    summary: string;
    primary: string;
    email: string;
  };
  agenticMethod: AgenticMethod;
  skillSummaries: SkillSummary[];
  experiences: ExperienceSummary[];
  seo: Record<RouteId, SeoEntry>;
};

export const routeDefinitions = [
  { id: 'home', slugs: { en: '/en', fr: '/fr' } },
  { id: 'projects', slugs: { en: '/en/projects', fr: '/fr/projets' } },
  { id: 'skills', slugs: { en: '/en/skills', fr: '/fr/competences' } },
  { id: 'agenticDelivery', slugs: { en: '/en/agentic-delivery', fr: '/fr/orchestration-agentique' } },
  { id: 'experience', slugs: { en: '/en/experience', fr: '/fr/parcours' } },
  { id: 'contact', slugs: { en: '/en/contact', fr: '/fr/contact' } },
] as const satisfies readonly RouteDefinition[];

export const historicalRedirects: Record<string, string> = {
  '/': '/en',
  '/projets': '/fr/projets',
  '/competences': '/fr/competences',
  '/methode': '/fr/orchestration-agentique',
  '/parcours': '/fr/parcours',
  '/contact': '/fr/contact',
};

export function pathFor(locale: Locale, routeId: RouteId) {
  return routeDefinitions.find((route) => route.id === routeId)?.slugs[locale] ?? `/${locale}`;
}

export function resolveLocalizedRoute(pathname: string): { locale: Locale; routeId: RouteId } | null {
  for (const route of routeDefinitions) {
    for (const locale of ['en', 'fr'] as const) {
      if (route.slugs[locale] === pathname) return { locale, routeId: route.id };
    }
  }
  return null;
}

export const recruiterCta: RecruiterCta = {
  primaryRoute: 'agenticDelivery',
  targetRoles: ['AI Integration Engineer', 'Agentic Full-Stack Engineer', 'Applied AI Engineer', 'Forward Deployed Engineer'],
  resumes: {
    ai: {
      en: '/assets/resumes/hasiniaina-ai-rag-automation-en.pdf',
      fr: '/assets/resumes/hasiniaina-ia-rag-automatisation-fr.pdf',
    },
    fullStack: {
      en: '/assets/resumes/hasiniaina-full-stack-product-en.pdf',
      fr: '/assets/resumes/hasiniaina-full-stack-produit-fr.pdf',
    },
  },
};

export const externalDemoVideo: ExternalDemoVideo = { enabled: false };

const enAgenticMethod: AgenticMethod = {
  title: 'A bounded Agentic Delivery system',
  promise: 'Autonomous execution inside explicit boundaries, with a coordinator integrating the work and a human approving every sensitive action.',
  coordinator: 'Claude Code',
  secondaryTools: ['Codex'],
  stages: [
    { id: 'outcome', title: 'Define the outcome', description: 'Write the desired result, constraints, risks, and acceptance criteria before execution begins.', owner: 'human', ownerLabel: 'Human direction', boundedBy: 'Published scope and acceptance criteria', accent: 'blue' },
    { id: 'plan', title: 'Coordinator plans', description: 'Claude Code turns the outcome into an integration plan, dependencies, and testable work packages.', owner: 'coordinator', ownerLabel: 'Coordinator agent', boundedBy: 'Architecture and repository rules', accent: 'blue' },
    { id: 'delegate', title: 'Delegate to specialists', description: 'The coordinator assigns bounded backend, frontend, mobile, data, QA, or review tasks to specialized agents.', owner: 'coordinator', ownerLabel: 'Coordinator agent', boundedBy: 'Atomic tasks and explicit ownership', accent: 'violet' },
    { id: 'execute', title: 'Execute autonomously', description: 'Specialized agents work in constrained environments with scoped tools, data, and permissions.', owner: 'specialist-agents', ownerLabel: 'Specialist agents', boundedBy: 'Sandbox, branch, tool, and data limits', accent: 'violet' },
    { id: 'verify', title: 'Test and synthesize', description: 'Agents run the relevant checks, review evidence, surface conflicts, and return auditable results.', owner: 'specialist-agents', ownerLabel: 'Specialist agents', boundedBy: 'Acceptance gates and evidence', accent: 'green' },
    { id: 'integrate', title: 'Coordinator integrates', description: 'Claude Code reconciles the outputs, reviews diffs, resolves dependencies, and prepares the final candidate.', owner: 'coordinator', ownerLabel: 'Coordinator agent', boundedBy: 'Integration review and regression checks', accent: 'green' },
    { id: 'approve', title: 'Human approves sensitive actions', description: 'A human decides on production, secrets, payments, real data, sensitive migrations, and external actions.', owner: 'human', ownerLabel: 'Human approval', boundedBy: 'No sensitive action without approval', accent: 'green' },
  ],
  approvalGates: [
    { id: 'production', label: 'Production', reason: 'Deployment and live configuration changes require explicit human approval.' },
    { id: 'secrets', label: 'Secrets', reason: 'Credentials, keys, and permission changes remain human-controlled.' },
    { id: 'payments', label: 'Payments', reason: 'Financial actions and reconciliation decisions cannot be delegated without approval.' },
    { id: 'real-data', label: 'Real data', reason: 'Access, mutation, export, or deletion of real data requires a verified scope.' },
    { id: 'sensitive-migrations', label: 'Sensitive migrations', reason: 'Irreversible or high-impact schema and data migrations are reviewed before execution.' },
    { id: 'external-actions', label: 'External actions', reason: 'Messages, submissions, purchases, and third-party mutations need explicit authorization.' },
  ],
  cases: [
    { id: 'tz-smart', title: 'TZ Smart', summary: 'Coordinating backend, frontend, and Android work around a sensitive operational system.', coordination: ['Domain contracts across web, mobile, and backend', 'Payments, roles, network operations, and production checks', 'Cross-stack tests and integration review'], boundary: 'Production, payment, secrets, and real operational data stay behind human approval.' },
    { id: 'fretunia', title: 'Fretunia', summary: 'Orchestrating a multi-tenant SaaS across security, data, billing, public tracking, and automations.', coordination: ['Tenant isolation and role-aware workflows', 'Billing, logistics data, notifications, and public interfaces', 'Product changes integrated through shared acceptance gates'], boundary: 'Tenant data, billing actions, and live migrations are never treated as unbounded agent work.' },
    { id: 'acm-iagasy', title: 'ACM / iagasy', summary: 'Separating development-agent orchestration from the AI agent integrated into the product.', coordination: ['Development agents build and verify the system', 'Product AI handles bounded conversational workflows', 'Handoff, traces, and operational review remain explicit'], boundary: 'Product AI is a delivered capability; it does not receive the development agents’ tools or production authority.' },
  ],
};

const frAgenticMethod: AgenticMethod = {
  title: 'Un système d’Agentic Delivery borné',
  promise: 'Une exécution autonome dans des limites explicites, un coordinateur qui intègre le travail et un humain qui approuve chaque action sensible.',
  coordinator: 'Claude Code',
  secondaryTools: ['Codex'],
  stages: [
    { id: 'outcome', title: 'Définir le résultat', description: 'Écrire le résultat attendu, les contraintes, les risques et les critères d’acceptation avant toute exécution.', owner: 'human', ownerLabel: 'Direction humaine', boundedBy: 'Périmètre et critères publiés', accent: 'blue' },
    { id: 'plan', title: 'Le coordinateur planifie', description: 'Claude Code transforme le résultat en plan d’intégration, dépendances et lots de travail testables.', owner: 'coordinator', ownerLabel: 'Agent coordinateur', boundedBy: 'Architecture et règles du dépôt', accent: 'blue' },
    { id: 'delegate', title: 'Déléguer aux spécialistes', description: 'Le coordinateur attribue des tâches bornées backend, frontend, mobile, données, QA ou revue à des agents spécialisés.', owner: 'coordinator', ownerLabel: 'Agent coordinateur', boundedBy: 'Tâches atomiques et responsabilités explicites', accent: 'violet' },
    { id: 'execute', title: 'Exécuter en autonomie', description: 'Les agents spécialisés travaillent dans des environnements contraints avec outils, données et permissions limités.', owner: 'specialist-agents', ownerLabel: 'Agents spécialisés', boundedBy: 'Limites de sandbox, branche, outils et données', accent: 'violet' },
    { id: 'verify', title: 'Tester et synthétiser', description: 'Les agents exécutent les contrôles utiles, examinent les preuves, signalent les conflits et retournent des résultats auditables.', owner: 'specialist-agents', ownerLabel: 'Agents spécialisés', boundedBy: 'Gates d’acceptation et preuves', accent: 'green' },
    { id: 'integrate', title: 'Le coordinateur intègre', description: 'Claude Code réconcilie les sorties, revoit les diffs, résout les dépendances et prépare la version finale.', owner: 'coordinator', ownerLabel: 'Agent coordinateur', boundedBy: 'Revue d’intégration et non-régression', accent: 'green' },
    { id: 'approve', title: 'L’humain approuve le sensible', description: 'Un humain décide pour la production, les secrets, les paiements, les données réelles, les migrations sensibles et les actions externes.', owner: 'human', ownerLabel: 'Validation humaine', boundedBy: 'Aucune action sensible sans validation', accent: 'green' },
  ],
  approvalGates: [
    { id: 'production', label: 'Production', reason: 'Les déploiements et changements de configuration live exigent une validation humaine explicite.' },
    { id: 'secrets', label: 'Secrets', reason: 'Les identifiants, clés et changements de permissions restent sous contrôle humain.' },
    { id: 'payments', label: 'Paiements', reason: 'Les actions financières et décisions de rapprochement ne sont pas déléguées sans validation.' },
    { id: 'real-data', label: 'Données réelles', reason: 'L’accès, la mutation, l’export ou la suppression de données réelles exige un périmètre vérifié.' },
    { id: 'sensitive-migrations', label: 'Migrations sensibles', reason: 'Les migrations irréversibles ou à fort impact sont revues avant exécution.' },
    { id: 'external-actions', label: 'Actions externes', reason: 'Messages, candidatures, achats et mutations tierces exigent une autorisation explicite.' },
  ],
  cases: [
    { id: 'tz-smart', title: 'TZ Smart', summary: 'Coordination backend, frontend et Android autour d’un système opérationnel sensible.', coordination: ['Contrats métier partagés entre web, mobile et backend', 'Paiements, rôles, opérations réseau et contrôles de production', 'Tests cross-stack et revue d’intégration'], boundary: 'Production, paiements, secrets et données opérationnelles réelles restent soumis à validation humaine.' },
    { id: 'fretunia', title: 'Fretunia', summary: 'Orchestration d’un SaaS multi-tenant entre sécurité, données, facturation, suivi public et automatisations.', coordination: ['Isolation tenant et workflows multi-rôles', 'Facturation, données logistiques, notifications et interfaces publiques', 'Évolutions intégrées avec des gates d’acceptation partagées'], boundary: 'Les données tenant, la facturation et les migrations live ne sont jamais traitées comme un terrain d’autonomie non bornée.' },
    { id: 'acm-iagasy', title: 'ACM / iagasy', summary: 'Séparation claire entre les agents de développement et l’agent IA intégré au produit.', coordination: ['Les agents de développement construisent et vérifient le système', 'L’IA produit exécute des workflows conversationnels bornés', 'Handoff, traces et revue opérationnelle restent explicites'], boundary: 'L’IA produit est une fonctionnalité livrée ; elle ne reçoit ni les outils ni l’autorité de production des agents de développement.' },
  ],
};

const sharedSeoNames = 'Hasiniaina Christian LOVANIRINA';

const portfolioContent = {
  en: {
    locale: 'en',
    languageName: 'English',
    profile: {
      fullName: sharedSeoNames,
      role: 'AI Integration & Agentic Full-Stack Engineer',
      level: 'Mid-level',
      based: 'Based in Madagascar',
      remote: 'Remote worldwide',
      relocation: 'Open to relocation',
      availability: 'Remote worldwide · Open to relocation',
      email: 'hasiniainachristian7@gmail.com',
      promise: 'I orchestrate autonomous AI agent teams to design, build, test, and ship reliable full-stack systems, while keeping production and sensitive actions under human approval.',
    },
    navigation: { home: 'Home', projects: 'Projects', skills: 'Skills', agenticDelivery: 'Agentic Delivery', experience: 'Experience', contact: 'Contact' },
    common: {
      skipLink: 'Skip to content', menuOpen: 'Open menu', menuClose: 'Close menu', contact: 'Discuss an opportunity', navigation: 'Navigation', channels: 'Channels', verifiedContent: 'Technical portfolio · Verified content and links', loading: 'Loading page…',
      evidence: { 'cv-confirmed': 'Delivered on a real project', 'derived-from-cv': 'Evidence-backed practice', 'requires-validation': 'Validate before publishing' },
      publicSite: 'Public site', publicApp: 'Public app', caseStudy: 'View case study', noMedia: 'No validated real media — neutral preview', relatedWork: 'Connected to a wider operational system', tools: 'Stack & tools', moreTools: 'Other technologies are selected to fit the product constraints.', methodAria: 'Seven connected Agentic Delivery stages from outcome definition to human approval', openImage: 'Open larger image', loadingImage: 'Loading image…', imageError: 'The image could not be loaded', closeViewer: 'Close image viewer',
    },
    home: {
      eyebrow: 'Agentic engineering portfolio', primaryCta: 'Explore Agentic Delivery', secondaryCta: 'Download AI resume', fullStackCta: 'Full-Stack resume',
      factsLabel: 'Professional information', factLabels: ['Level', 'Base', 'Work model', 'Mobility'], approach: 'Specs · agents · tests · approval',
      orchestrationEyebrow: 'How I deliver', orchestrationTitle: 'Autonomous agent teams. Explicit boundaries. Human accountability.', orchestrationSummary: 'Claude Code coordinates the plan and integration. Specialized agents execute bounded work. Codex supports implementation and review. Sensitive actions remain human decisions.',
      proofsEyebrow: 'Agentic proof', proofsTitle: 'Three systems, three coordination problems', proofsSummary: 'Qualitative evidence only, without speculative performance claims.',
      systemsEyebrow: 'Delivered systems', systemsTitle: 'Full-stack products built for real operations', systemsSummary: 'Product evidence stays separate from development orchestration evidence.', allProjects: 'View all projects',
      distinctionEyebrow: 'Two forms of AI', distinctionTitle: 'Development orchestration is not product AI', productAiTitle: 'AI inside the product', productAiSummary: 'OpenAI, RAG, n8n, OpenClaw, webhooks, traces, and human handoff support bounded business capabilities.', developmentAgentsTitle: 'Agents building the product', developmentAgentsSummary: 'Claude Code coordinates implementation. Codex is a secondary tool. Specs, tests, reviews, and human approvals control delivery.',
    },
    projects: {
      eyebrow: 'Product evidence', title: 'Projects', intro: 'Operational systems, public web products, mobile applications, and bounded product AI — kept distinct from the agents used to build them.',
      inventoryEyebrow: 'Inventory', inventoryTitle: 'Delivered work, viewed by product surface', inventorySummary: 'Filters change the reading angle without inflating proof or mixing product AI with development orchestration.',
      filters: { all: 'All', system: 'Systems', web: 'Web', mobile: 'Mobile', 'product-ai': 'Product AI' }, result: (count) => `${count} project${count === 1 ? '' : 's'} shown`,
      casesEyebrow: 'Case studies', casesTitle: 'Four operational systems', casesSummary: 'Accessible text carries the evidence. Editorial compositions provide context without turning their visual numbers into published metrics.',
      purpose: 'Operational purpose', delivery: 'Delivery responsibility', capabilities: 'Delivered capabilities', complexity: 'Technical complexity', stack: 'Stack', verifiedMarkers: 'Verified markers', mediaCaption: (title) => `Editorial presentation of ${title}. Verified product facts remain in the accessible text.`,
    },
    skillsPage: {
      eyebrow: 'Capabilities', title: 'Skills', intro: 'Agent orchestration, AI integration, full-stack engineering, and reliability — connected to systems that were actually delivered.',
      pattern: ['Orchestrate', 'Integrate', 'Build', 'Verify'], matrixEyebrow: 'Evidence matrix', matrixTitle: 'Capabilities tied to delivered systems', matrixSummary: 'The stack matters because it supports bounded execution, reliable integration, and operational outcomes.', proofLabel: 'Proof systems',
      reliabilityEyebrow: 'Reliability', reliabilityTitle: 'Production remains an approval boundary', reliabilitySummary: 'Tests, permissions, secrets, logs, migrations, and rollback conditions are treated as engineering constraints — never as optional cleanup.',
    },
    method: {
      eyebrow: 'Agentic Delivery', title: 'How autonomous agent teams ship reliable systems', intro: 'A practical orchestration method: clear outcomes, specialized delegation, bounded execution, evidence-driven integration, and mandatory human approval for sensitive actions.',
      hierarchyEyebrow: 'Tool hierarchy', hierarchyTitle: 'One coordinator, specialized execution, human authority', hierarchySummary: 'Claude Code is the principal coordination agent. Codex supports implementation and review. Neither receives unrestricted authority over production or sensitive data.', primaryAgent: 'Primary coordinator', secondaryTool: 'Secondary tool',
      stagesEyebrow: 'Seven stages', stagesSummary: 'Each stage has an owner and an explicit boundary. Autonomy applies to execution inside the boundary — not to expanding it.',
      gatesEyebrow: 'Human approval gates', gatesTitle: 'Sensitive actions are decisions, not agent defaults', gatesSummary: 'These categories always require explicit human approval and a verified scope.',
      casesEyebrow: 'Qualitative cases', casesTitle: 'What orchestration means on real systems', casesSummary: 'The cases describe coordination and boundaries without publishing client artifacts or unmeasured autonomy claims.', boundaryLabel: 'Boundary',
      videoTitle: 'Agentic Delivery demonstration',
    },
    experience: {
      eyebrow: 'Progression', title: 'Experience', intro: 'A progression from field constraints to business systems, integrated AI, and agentic orchestration.',
      timelineEyebrow: 'Timeline', timelineTitle: 'Field → business systems → integrated AI → agentic orchestration', timelineSummary: 'Each stage adds an operational constraint that shapes how I design and deliver reliable software.',
      lessonsEyebrow: 'Operating perspective', lessonsTitle: 'What this trajectory contributes', lessonsSummary: 'Agent orchestration is credible only when it respects the constraints learned from real operations.',
      lessons: ['Field systems must survive imperfect networks, time pressure, and incomplete data.', 'Business data must stay traceable, exportable, and understandable to operators.', 'AI delivery needs bounded execution, observable evidence, and a human authority model.'],
    },
    contact: {
      eyebrow: 'Recruitment', title: 'Contact', intro: 'Open to international remote roles and relocation conversations in AI integration, agentic full-stack delivery, applied AI, and forward-deployed engineering.',
      targetEyebrow: 'Target roles', targetTitle: 'Where this profile fits', channels: 'Public channels', resumeTitle: 'Choose the relevant resume', aiResume: 'AI / RAG / Automation resume', aiResumeSummary: 'Primary version for AI integration, agentic delivery, RAG, and automation roles.', fullStackResume: 'Full-Stack Product resume', fullStackResumeSummary: 'Secondary version for product engineering and full-stack roles.',
      composerEyebrow: 'Recruiter email', composerTitle: 'Prepare a clear opportunity brief', composerSummary: 'The button opens your email client. Nothing is submitted to a server.',
      fields: { name: 'Your name', email: 'Your email', company: 'Company', role: 'Role', workModel: 'Location / work model', message: 'Message', submit: 'Prepare recruitment email', defaultSubject: 'International recruitment opportunity', unspecified: 'Not specified' },
      workModels: ['Remote worldwide', 'Remote with time-zone overlap', 'Hybrid with relocation', 'On-site with relocation'],
    },
    finalCta: { eyebrow: 'Recruitment', title: 'Need an engineer who can coordinate agents and own the integration?', summary: 'Share the role, operating context, location model, and delivery constraints.', primary: 'Discuss an opportunity', email: 'Send an email' },
    agenticMethod: enAgenticMethod,
    skillSummaries: [
      { id: 'orchestration', title: 'Agent orchestration', level: 'Primary capability', summary: 'Outcome framing, coordinator planning, bounded delegation, evidence synthesis, diff review, and human approval gates.', technologies: ['Claude Code', 'Codex', 'specs-first', 'task delegation', 'acceptance gates'], proofWorkIds: ['tz-smart', 'fretunia', 'acm-iagasy'], accent: 'violet' },
      { id: 'ai-integration', title: 'AI integration', level: 'Advanced use', summary: 'RAG, webhooks, product agents, automation, traces, human handoff, and operational guardrails.', technologies: ['OpenAI API', 'RAG', 'n8n', 'OpenClaw', 'Meta Webhooks'], proofWorkIds: ['acm-iagasy', 'tz-smart', 'fretunia'], accent: 'orange' },
      { id: 'full-stack', title: 'Full-stack engineering', level: 'Production use', summary: 'Domain APIs, typed web interfaces, mobile clients, multi-tenant data, billing, and public products.', technologies: ['Django', 'Node.js', 'React', 'TypeScript', 'Flutter', 'Android Kotlin', 'PostgreSQL'], proofWorkIds: ['tz-smart', 'fretunia', 'aim-beneficiaries'], accent: 'blue' },
      { id: 'reliability', title: 'Reliability & delivery', level: 'Production use', summary: 'Tests, type checks, permissions, audit trails, migrations, deployment controls, logs, and support.', technologies: ['RBAC', 'RLS', 'CI', 'Docker', 'Linux', 'monitoring', 'runbooks'], proofWorkIds: ['tz-smart', 'fretunia', 'aim-beneficiaries'], accent: 'green' },
    ],
    experiences: [
      { id: 'field', stage: 'Field operations', period: '2021–2023', title: 'INSTAT · FID · Action Contre la Faim', role: 'Collection, support, procedures, and coordination', summary: 'Direct exposure to constrained networks, imperfect data, operational procedures, and teams working under time pressure.', tags: ['field constraints', 'data quality', 'continuity'], evidenceLevel: 'derived-from-cv', accent: 'green' },
      { id: 'systems', stage: 'Business systems', period: '2023–2024', title: 'AIM Madagascar', role: 'Web and mobile payment-system development', summary: 'Built around payment states, offline synchronization, financial exports, audit history, and production support.', tags: ['payments', 'offline', 'audit'], evidenceLevel: 'cv-confirmed', accent: 'blue' },
      { id: 'integrated-ai', stage: 'Integrated AI', period: '2024–2025', title: 'Fretunia · ACM / iagasy', role: 'Multi-tenant product and applied AI engineering', summary: 'Combined tenant-aware logistics, billing, automation, conversational workflows, traces, and human handoff.', tags: ['multi-tenant', 'product AI', 'automation'], evidenceLevel: 'cv-confirmed', accent: 'orange' },
      { id: 'agentic', stage: 'Agentic orchestration', period: '2025–2026', title: 'TECHZONE IT SOLUTION · TZ Smart', role: 'AI integration and coordinated full-stack delivery', summary: 'Coordinates agent teams across backend, frontend, mobile, data, testing, and integration with explicit human approval boundaries.', tags: ['Claude Code', 'specialist agents', 'human approval'], evidenceLevel: 'derived-from-cv', accent: 'violet' },
    ],
    seo: {
      home: { title: `${sharedSeoNames} — AI Integration & Agentic Full-Stack Engineer`, description: 'Agentic full-stack engineer orchestrating autonomous AI agent teams to deliver reliable systems with human approval for production and sensitive actions.', ogTitle: 'AI Integration & Agentic Full-Stack Engineer', ogDescription: 'Agent teams, full-stack integration, reliable delivery, and explicit human approval boundaries.' },
      projects: { title: `Projects — ${sharedSeoNames}`, description: 'Operational systems, web products, mobile applications, and bounded product AI delivered for real operations.', ogTitle: 'Full-stack systems and product AI projects', ogDescription: 'Product evidence kept distinct from development-agent orchestration.' },
      skills: { title: `Skills — ${sharedSeoNames}`, description: 'Agent orchestration, AI integration, full-stack engineering, and reliability connected to delivered systems.', ogTitle: 'Agentic engineering skills', ogDescription: 'Orchestration, integration, full-stack delivery, and production reliability.' },
      agenticDelivery: { title: `Agentic Delivery — ${sharedSeoNames}`, description: 'A seven-stage workflow for bounded autonomous execution, coordinator integration, and human approval of sensitive actions.', ogTitle: 'A bounded Agentic Delivery workflow', ogDescription: 'Claude Code coordinates, specialized agents execute, and humans approve sensitive actions.' },
      experience: { title: `Experience — ${sharedSeoNames}`, description: 'A progression from field operations to business systems, integrated AI, and agentic orchestration.', ogTitle: 'Experience from field operations to agentic delivery', ogDescription: 'Operational constraints shape reliable AI-assisted engineering.' },
      contact: { title: `Contact — ${sharedSeoNames}`, description: 'Recruit Hasiniaina for AI integration, agentic full-stack, applied AI, or forward-deployed engineering roles.', ogTitle: 'Discuss an international engineering opportunity', ogDescription: 'Remote worldwide and open to relocation.' },
    },
  },
  fr: {
    locale: 'fr',
    languageName: 'Français',
    profile: {
      fullName: sharedSeoNames,
      role: 'AI Integration & Agentic Full-Stack Engineer',
      level: 'Confirmé',
      based: 'Basé à Madagascar',
      remote: 'Remote mondial',
      relocation: 'Ouvert à la relocalisation',
      availability: 'Remote mondial · Ouvert à la relocalisation',
      email: 'hasiniainachristian7@gmail.com',
      promise: 'J’orchestre des équipes d’agents IA autonomes pour concevoir, construire, tester et livrer des systèmes full-stack fiables, avec validation humaine des actions de production et sensibles.',
    },
    navigation: { home: 'Accueil', projects: 'Projets', skills: 'Compétences', agenticDelivery: 'Orchestration agentique', experience: 'Parcours', contact: 'Contact' },
    common: {
      skipLink: 'Aller au contenu', menuOpen: 'Ouvrir le menu', menuClose: 'Fermer le menu', contact: 'Échanger sur une opportunité', navigation: 'Navigation', channels: 'Canaux', verifiedContent: 'Portfolio technique · Contenus et liens vérifiés', loading: 'Chargement de la page…',
      evidence: { 'cv-confirmed': 'Réalisé sur un projet réel', 'derived-from-cv': 'Pratique étayée par les preuves', 'requires-validation': 'À valider avant publication' },
      publicSite: 'Site public', publicApp: 'Application publique', caseStudy: 'Voir l’étude', noMedia: 'Aucun média réel validé — aperçu neutre', relatedWork: 'Relié à un système opérationnel plus large', tools: 'Stack & outils', moreTools: 'Les autres technologies sont choisies selon les contraintes du produit.', methodAria: 'Sept étapes connectées de l’Agentic Delivery, de la définition du résultat à la validation humaine', openImage: 'Ouvrir l’image en grand', loadingImage: 'Chargement de l’image…', imageError: 'L’image n’a pas pu être chargée', closeViewer: 'Fermer la visionneuse',
    },
    home: {
      eyebrow: 'Portfolio d’ingénierie agentique', primaryCta: 'Explorer l’Agentic Delivery', secondaryCta: 'Télécharger le CV IA', fullStackCta: 'CV Full-Stack',
      factsLabel: 'Informations professionnelles', factLabels: ['Niveau', 'Base', 'Mode de travail', 'Mobilité'], approach: 'Specs · agents · tests · validation',
      orchestrationEyebrow: 'Ma méthode de livraison', orchestrationTitle: 'Équipes d’agents autonomes. Limites explicites. Responsabilité humaine.', orchestrationSummary: 'Claude Code coordonne le plan et l’intégration. Des agents spécialisés exécutent des tâches bornées. Codex assiste l’implémentation et la revue. Les actions sensibles restent des décisions humaines.',
      proofsEyebrow: 'Preuves agentiques', proofsTitle: 'Trois systèmes, trois problèmes de coordination', proofsSummary: 'Preuves qualitatives uniquement, sans affirmation spéculative de performance.',
      systemsEyebrow: 'Systèmes livrés', systemsTitle: 'Des produits full-stack construits pour des opérations réelles', systemsSummary: 'Les preuves produit restent séparées des preuves d’orchestration du développement.', allProjects: 'Voir tous les projets',
      distinctionEyebrow: 'Deux formes d’IA', distinctionTitle: 'L’orchestration du développement n’est pas l’IA produit', productAiTitle: 'IA intégrée au produit', productAiSummary: 'OpenAI, RAG, n8n, OpenClaw, webhooks, traces et relais humain portent des fonctions métier bornées.', developmentAgentsTitle: 'Agents qui construisent le produit', developmentAgentsSummary: 'Claude Code coordonne l’implémentation. Codex reste secondaire. Specs, tests, revues et validations humaines contrôlent la livraison.',
    },
    projects: {
      eyebrow: 'Preuves produit', title: 'Projets', intro: 'Systèmes opérationnels, produits web publics, applications mobiles et IA produit bornée — clairement séparés des agents utilisés pour les construire.',
      inventoryEyebrow: 'Inventaire', inventoryTitle: 'Les réalisations par surface produit', inventorySummary: 'Les filtres changent l’angle de lecture sans gonfler les preuves ni mélanger IA produit et orchestration du développement.',
      filters: { all: 'Tous', system: 'Systèmes', web: 'Web', mobile: 'Mobile', 'product-ai': 'IA produit' }, result: (count) => `${count} réalisation${count === 1 ? '' : 's'} affichée${count === 1 ? '' : 's'}`,
      casesEyebrow: 'Études de cas', casesTitle: 'Quatre systèmes opérationnels', casesSummary: 'Le texte accessible porte les preuves. Les compositions éditoriales donnent du contexte sans transformer leurs chiffres visuels en métriques publiées.',
      purpose: 'Rôle opérationnel', delivery: 'Prise en charge', capabilities: 'Fonctions livrées', complexity: 'Complexité technique', stack: 'Stack', verifiedMarkers: 'Repères vérifiés', mediaCaption: (title) => `Présentation éditoriale de ${title}. Les faits produit vérifiés restent dans le texte accessible.`,
    },
    skillsPage: {
      eyebrow: 'Capacités', title: 'Compétences', intro: 'Orchestration d’agents, intégration IA, ingénierie full-stack et fiabilité — reliées à des systèmes réellement livrés.',
      pattern: ['Orchestrer', 'Intégrer', 'Construire', 'Vérifier'], matrixEyebrow: 'Matrice de preuve', matrixTitle: 'Des capacités reliées aux systèmes livrés', matrixSummary: 'La stack compte parce qu’elle soutient une exécution bornée, une intégration fiable et des résultats opérationnels.', proofLabel: 'Systèmes de preuve',
      reliabilityEyebrow: 'Fiabilité', reliabilityTitle: 'La production reste une frontière d’approbation', reliabilitySummary: 'Tests, permissions, secrets, logs, migrations et conditions de retour arrière sont des contraintes d’ingénierie, jamais du nettoyage facultatif.',
    },
    method: {
      eyebrow: 'Agentic Delivery', title: 'Comment des équipes d’agents autonomes livrent des systèmes fiables', intro: 'Une méthode d’orchestration pratique : résultats clairs, délégation spécialisée, exécution bornée, intégration fondée sur les preuves et validation humaine obligatoire des actions sensibles.',
      hierarchyEyebrow: 'Hiérarchie des outils', hierarchyTitle: 'Un coordinateur, une exécution spécialisée, une autorité humaine', hierarchySummary: 'Claude Code est l’agent principal de coordination. Codex assiste l’implémentation et la revue. Aucun des deux ne reçoit une autorité illimitée sur la production ou les données sensibles.', primaryAgent: 'Coordinateur principal', secondaryTool: 'Outil secondaire',
      stagesEyebrow: 'Sept étapes', stagesSummary: 'Chaque étape a un responsable et une limite explicite. L’autonomie s’applique à l’exécution dans cette limite, pas à son extension.',
      gatesEyebrow: 'Gates de validation humaine', gatesTitle: 'Les actions sensibles sont des décisions, pas des comportements par défaut', gatesSummary: 'Ces catégories exigent toujours une validation humaine explicite et un périmètre vérifié.',
      casesEyebrow: 'Cas qualitatifs', casesTitle: 'Ce que l’orchestration signifie sur des systèmes réels', casesSummary: 'Les cas décrivent la coordination et les limites sans publier d’artefacts client ni d’affirmations d’autonomie non mesurée.', boundaryLabel: 'Limite',
      videoTitle: 'Démonstration Agentic Delivery',
    },
    experience: {
      eyebrow: 'Progression', title: 'Parcours', intro: 'Une évolution des contraintes terrain vers les systèmes métier, l’IA intégrée et l’orchestration agentique.',
      timelineEyebrow: 'Chronologie', timelineTitle: 'Terrain → systèmes métier → IA intégrée → orchestration agentique', timelineSummary: 'Chaque étape ajoute une contrainte opérationnelle qui façonne ma manière de concevoir et livrer des logiciels fiables.',
      lessonsEyebrow: 'Perspective opérationnelle', lessonsTitle: 'Ce que cette trajectoire apporte', lessonsSummary: 'L’orchestration agentique n’est crédible que lorsqu’elle respecte les contraintes apprises dans les opérations réelles.',
      lessons: ['Un système terrain doit résister au réseau imparfait, à la pression du temps et aux données incomplètes.', 'Les données métier doivent rester traçables, exportables et compréhensibles par les opérateurs.', 'La livraison IA exige une exécution bornée, des preuves observables et un modèle clair d’autorité humaine.'],
    },
    contact: {
      eyebrow: 'Recrutement', title: 'Contact', intro: 'Ouvert aux postes internationaux remote et aux échanges de relocalisation en intégration IA, full-stack agentique, IA appliquée et forward-deployed engineering.',
      targetEyebrow: 'Rôles ciblés', targetTitle: 'Là où ce profil est pertinent', channels: 'Canaux publics', resumeTitle: 'Choisir le CV adapté', aiResume: 'CV IA / RAG / Automatisation', aiResumeSummary: 'Version prioritaire pour les rôles en intégration IA, Agentic Delivery, RAG et automatisation.', fullStackResume: 'CV Full-Stack Produit', fullStackResumeSummary: 'Version secondaire pour les rôles en product engineering et développement full-stack.',
      composerEyebrow: 'E-mail recruteur', composerTitle: 'Préparer une opportunité claire', composerSummary: 'Le bouton ouvre votre client mail. Aucune donnée n’est envoyée à un serveur.',
      fields: { name: 'Votre nom', email: 'Votre e-mail', company: 'Entreprise', role: 'Rôle', workModel: 'Localisation / modèle de travail', message: 'Message', submit: 'Préparer l’e-mail de recrutement', defaultSubject: 'Opportunité de recrutement international', unspecified: 'Non précisé' },
      workModels: ['Remote mondial', 'Remote avec chevauchement horaire', 'Hybride avec relocalisation', 'Sur site avec relocalisation'],
    },
    finalCta: { eyebrow: 'Recrutement', title: 'Besoin d’un ingénieur capable de coordonner les agents et d’assumer l’intégration ?', summary: 'Partagez le rôle, le contexte opérationnel, le modèle de localisation et les contraintes de livraison.', primary: 'Échanger sur une opportunité', email: 'Envoyer un e-mail' },
    agenticMethod: frAgenticMethod,
    skillSummaries: [
      { id: 'orchestration', title: 'Orchestration d’agents', level: 'Capacité prioritaire', summary: 'Cadrage du résultat, planification par le coordinateur, délégation bornée, synthèse des preuves, revue de diff et gates humaines.', technologies: ['Claude Code', 'Codex', 'specs-first', 'délégation de tâches', 'gates d’acceptation'], proofWorkIds: ['tz-smart', 'fretunia', 'acm-iagasy'], accent: 'violet' },
      { id: 'ai-integration', title: 'Intégration IA', level: 'Usage avancé', summary: 'RAG, webhooks, agents produit, automatisation, traces, relais humain et garde-fous opérationnels.', technologies: ['OpenAI API', 'RAG', 'n8n', 'OpenClaw', 'Meta Webhooks'], proofWorkIds: ['acm-iagasy', 'tz-smart', 'fretunia'], accent: 'orange' },
      { id: 'full-stack', title: 'Ingénierie full-stack', level: 'Usage en production', summary: 'API métier, interfaces web typées, clients mobiles, données multi-tenant, facturation et produits publics.', technologies: ['Django', 'Node.js', 'React', 'TypeScript', 'Flutter', 'Android Kotlin', 'PostgreSQL'], proofWorkIds: ['tz-smart', 'fretunia', 'aim-beneficiaries'], accent: 'blue' },
      { id: 'reliability', title: 'Fiabilité et delivery', level: 'Usage en production', summary: 'Tests, typecheck, permissions, audit, migrations, contrôles de déploiement, logs et support.', technologies: ['RBAC', 'RLS', 'CI', 'Docker', 'Linux', 'monitoring', 'runbooks'], proofWorkIds: ['tz-smart', 'fretunia', 'aim-beneficiaries'], accent: 'green' },
    ],
    experiences: [
      { id: 'field', stage: 'Opérations terrain', period: '2021–2023', title: 'INSTAT · FID · Action Contre la Faim', role: 'Collecte, support, procédures et coordination', summary: 'Exposition directe aux réseaux contraints, aux données imparfaites, aux procédures opérationnelles et aux équipes sous pression temporelle.', tags: ['contraintes terrain', 'qualité des données', 'continuité'], evidenceLevel: 'derived-from-cv', accent: 'green' },
      { id: 'systems', stage: 'Systèmes métier', period: '2023–2024', title: 'AIM Madagascar', role: 'Développement d’un système web et mobile de paiements', summary: 'Construction autour des statuts de paiement, de la synchronisation offline, des exports financiers, de l’audit et du support production.', tags: ['paiements', 'offline', 'audit'], evidenceLevel: 'cv-confirmed', accent: 'blue' },
      { id: 'integrated-ai', stage: 'IA intégrée', period: '2024–2025', title: 'Fretunia · ACM / iagasy', role: 'Produit multi-tenant et ingénierie IA appliquée', summary: 'Combinaison de logistique tenant-aware, facturation, automatisation, workflows conversationnels, traces et relais humain.', tags: ['multi-tenant', 'IA produit', 'automatisation'], evidenceLevel: 'cv-confirmed', accent: 'orange' },
      { id: 'agentic', stage: 'Orchestration agentique', period: '2025–2026', title: 'TECHZONE IT SOLUTION · TZ Smart', role: 'Intégration IA et delivery full-stack coordonné', summary: 'Coordination d’équipes d’agents sur backend, frontend, mobile, données, tests et intégration avec des frontières explicites de validation humaine.', tags: ['Claude Code', 'agents spécialisés', 'validation humaine'], evidenceLevel: 'derived-from-cv', accent: 'violet' },
    ],
    seo: {
      home: { title: `${sharedSeoNames} — AI Integration & Agentic Full-Stack Engineer`, description: 'Ingénieur full-stack agentique orchestrant des équipes d’agents IA autonomes pour livrer des systèmes fiables avec validation humaine des actions sensibles.', ogTitle: 'AI Integration & Agentic Full-Stack Engineer', ogDescription: 'Équipes d’agents, intégration full-stack, livraison fiable et frontières explicites de validation humaine.' },
      projects: { title: `Projets — ${sharedSeoNames}`, description: 'Systèmes opérationnels, produits web, applications mobiles et IA produit bornée livrés pour des opérations réelles.', ogTitle: 'Projets full-stack et IA produit', ogDescription: 'Les preuves produit restent séparées de l’orchestration des agents de développement.' },
      skills: { title: `Compétences — ${sharedSeoNames}`, description: 'Orchestration d’agents, intégration IA, ingénierie full-stack et fiabilité reliées aux systèmes livrés.', ogTitle: 'Compétences en ingénierie agentique', ogDescription: 'Orchestration, intégration, delivery full-stack et fiabilité de production.' },
      agenticDelivery: { title: `Orchestration agentique — ${sharedSeoNames}`, description: 'Un workflow en sept étapes pour l’exécution autonome bornée, l’intégration par le coordinateur et la validation humaine des actions sensibles.', ogTitle: 'Un workflow Agentic Delivery borné', ogDescription: 'Claude Code coordonne, les agents spécialisés exécutent et l’humain valide les actions sensibles.' },
      experience: { title: `Parcours — ${sharedSeoNames}`, description: 'Une progression du terrain aux systèmes métier, à l’IA intégrée et à l’orchestration agentique.', ogTitle: 'Du terrain à l’Agentic Delivery', ogDescription: 'Les contraintes opérationnelles façonnent une ingénierie assistée par IA fiable.' },
      contact: { title: `Contact — ${sharedSeoNames}`, description: 'Recruter Hasiniaina pour des rôles en intégration IA, full-stack agentique, IA appliquée ou forward-deployed engineering.', ogTitle: 'Échanger sur une opportunité internationale', ogDescription: 'Remote mondial et ouvert à la relocalisation.' },
    },
  },
} satisfies Record<Locale, PortfolioContent>;

export function getPortfolioContent(locale: Locale): PortfolioContent {
  return portfolioContent[locale];
}

type WorkTranslation = Pick<WorkItem, 'categoryLabel' | 'summary' | 'operationalPurpose' | 'role' | 'capabilities' | 'technicalComplexity' | 'mediaNote'>;

const enWorkTranslations: Record<WorkId, WorkTranslation> = {
  'tz-smart': { categoryLabel: 'ISP operations platform', summary: 'A complete platform for an Internet service provider, from web operations to field work.', operationalPurpose: 'Consolidate customers, zones, incidents, visits, payments, notifications, and network supervision in one operating environment.', role: 'Technical founder and full-stack engineer: framing, architecture, backend, frontend, mobile, payment/network integrations, and production support.', capabilities: ['Domain-structured Django Ninja/PostgreSQL backend.', 'React/Vite operations and monitoring back office.', 'OpenAI API integrated into assisted responses and chat.', 'n8n automations for notifications and business processing.'], technicalComplexity: ['Shared API contracts across web, mobile, and backend.', 'Role-based access for operational teams.', 'Payments, reconciliation, and network constraints.', 'AI suggestions kept separate from operational decisions.'], mediaNote: 'Editorial composition: visible numbers are not presented as verified metrics.' },
  fretunia: { categoryLabel: 'Logistics SaaS', summary: 'Multi-tenant SaaS for logistics operations, billing, and parcel tracking.', operationalPurpose: 'Unify internal operations, customer spaces, and public tracking without mixing organization data.', role: 'Full-stack product engineering for multi-tenant logistics: operations, billing, public tracking, PWA, SEO, and integrations.', capabilities: ['Parcels, batches, events, tariffs, invoices, and public tracking.', 'WhatsApp, email, and SMS notifications orchestrated through n8n.', 'Operational analysis produced from logistics data.', 'OpenAI integration assisting bounded operational analysis.'], technicalComplexity: ['Tenant isolation with RLS/RBAC.', 'Multi-role logistics workflows.', 'Multichannel notification outbox.', 'Assistive AI without unapproved autonomous decisions.'], mediaNote: 'Editorial composition: only facts published in accessible text are treated as evidence.' },
  'aim-beneficiaries': { categoryLabel: 'Beneficiary and payment system', summary: 'Web system for beneficiaries, cash payments, controls, and financial exports.', operationalPurpose: 'Maintain field continuity, trace payment states, and produce controllable financial files.', role: 'Full-stack web/mobile engineering: backend, back office, cashier app, financial exports, and production support.', capabilities: ['Beneficiaries, cashiers, periods, and payments.', 'Imports, reports, assignments, corrections, and closures.', 'Financial Excel exports and audit history.', 'Batch mobile synchronization on constrained networks.'], technicalComplexity: ['Partial or rejected payments.', 'Late synchronization and network recovery.', 'Audit trail and post-closure corrections.', 'Financial volumes treated as system criticality, not personal performance.'], mediaNote: 'Editorial composition: visible data presents the interface, not published volumes.' },
  'acm-iagasy': { categoryLabel: 'Social commerce and product AI', summary: 'Social-commerce orchestrator for Messenger and WhatsApp with automations and human handoff.', operationalPurpose: 'Respond with catalog and business context, orchestrate conversations, and preserve operational controls.', role: 'Applied AI product engineering: architecture, Meta webhooks, orchestration, context, access security, traces, and human handoff.', capabilities: ['Messenger and WhatsApp interactions.', 'Automation orchestration through n8n.', 'Bounded product-agent execution with OpenClaw.', 'Catalog, business context, traces, and human handoff.'], technicalComplexity: ['Webhook validation and secret separation.', 'Processing queue and recovery.', 'Delivery thresholds and guardrails.', 'Human responsibility for sensitive cases.'], mediaNote: 'Editorial composition: visible numbers are not reused as published results.' },
  'sbt-travel': { categoryLabel: 'Full-stack web delivery', summary: 'Public full-stack website designed, built, tested, and deployed as an end-to-end delivery.', operationalPurpose: 'Present the service offer through a public web presence adapted to the business.', role: 'Full-stack web engineering.', capabilities: ['Website design and implementation.', 'Deployment on a public domain.'], technicalComplexity: ['Responsive experience.', 'Web publication.'], mediaNote: 'Presentation composition: visible commercial claims belong to the client visual.' },
  'rmb-cargo': { categoryLabel: 'Full-stack web delivery', summary: 'Public logistics website delivered from design through testing and deployment.', operationalPurpose: 'Present freight services through a structured public presence.', role: 'Full-stack web engineering.', capabilities: ['Website design and implementation.', 'Deployment on a public domain.'], technicalComplexity: ['Logistics-offer presentation.', 'Responsive experience.'], mediaNote: 'Presentation composition: no supplier data or commercial promise is reused as evidence.' },
  'jn-travel': { categoryLabel: 'Full-stack web delivery', summary: 'Public full-stack website delivered from design through testing and deployment.', operationalPurpose: 'Provide a clear public web presence for the business.', role: 'Full-stack web engineering.', capabilities: ['Website design and implementation.', 'Deployment on a public domain.'], technicalComplexity: ['Responsive experience.', 'Web publication.'], mediaNote: 'No validated real media is currently available for this project.' },
  'rmb-cargo-mobile': { categoryLabel: 'Mobile application', summary: 'RMB Cargo mobile customer space presented as a standalone mobile delivery.', operationalPurpose: 'Give customers mobile access to RMB Cargo services and information.', role: 'Mobile engineering and product integration.', capabilities: ['Mobile customer space.', 'Integration with the RMB Cargo operating context.'], technicalComplexity: ['Dedicated mobile interface.', 'Continuity with business services.'], mediaNote: 'Editorial composition shown in full without extracting commercial claims.' },
  'aim-mobile': { categoryLabel: 'Flutter mobile application', summary: 'Field payment and beneficiary-management application designed for constrained networks.', operationalPurpose: 'Record payments locally, then synchronize batches with an auditable trace.', role: 'Flutter development, backend contracts, and synchronization.', capabilities: ['Local storage.', 'Batch synchronization.', 'Partial or rejected payment handling.', 'Offline field use.'], technicalComplexity: ['Network incident recovery.', 'Status consistency.', 'Mobile contracts and migrations.'], mediaNote: 'Editorial composition: visible volumes illustrate the interface, not personal performance.' },
  'tz-smart-mobile': { categoryLabel: 'ISP operator mobile application', summary: 'Mobile application for field and customer operations at an Internet service provider.', operationalPurpose: 'Support diagnostics, notifications, interventions, and network-operating continuity on mobile.', role: 'Architecture and mobile development integrated with TZ Smart.', capabilities: ['Field diagnostics.', 'FCM notifications.', 'Interventions and CPE recovery.', 'Integration with business API contracts.'], technicalComplexity: ['Network constraints.', 'Field synchronization.', 'Role-based rights.'], mediaNote: 'Editorial composition shown without cropping; visible numbers are not published metrics.' },
};

export function getLocalizedWorks(locale: Locale): WorkItem[] {
  if (locale === 'fr') return works;
  return works.map((work) => ({
    ...work,
    ...enWorkTranslations[work.id],
    publishableMetrics: work.id === 'fretunia'
      ? [{ label: 'Organizations using the platform', value: '20+ organizations', wordingGuardrail: 'Platform usage, not personal performance.', evidenceLevel: 'cv-confirmed' }]
      : work.publishableMetrics,
  }));
}

export const localizedBlueprintCopy: Record<Locale, {
  section: { eyebrow: string; title: string; introduction: string; filtersLabel: string; proofLabel: string; mapLabel: string; statesLabel: string; orderedPath: string };
  statuses: Record<BlueprintStatus, string>;
  zones: Record<BlueprintZone, string>;
  nodes: Record<BlueprintNodeId, { label: string; detail: string }>;
  views: Record<BlueprintViewId, { label: string; summary: string }>;
}> = {
  en: {
    section: { eyebrow: 'Operational architecture', title: 'Reliable systems remain traceable from field action to human decision', introduction: 'A fixed blueprint of verified patterns across web, mobile, business APIs, integrations, data, monitoring, and human review.', filtersLabel: 'Select an operational flow', proofLabel: 'Proof systems', mapLabel: 'Operational system architecture blueprint', statesLabel: 'States', orderedPath: 'ordered path' },
    statuses: { operational: 'Operational', processing: 'Processing', queued: 'Queued', review: 'Human review', verified: 'Verified', observing: 'Observed' },
    zones: { entry: 'Users & channels', core: 'Business core', integration: 'Integrations & control', data: 'Data & operations' },
    nodes: {
      'field-teams': { label: 'Field teams', detail: 'Collection, incidents, visits' }, 'web-app': { label: 'Web app', detail: 'Operations control' }, 'mobile-app': { label: 'Mobile app', detail: 'Field use and synchronization' }, 'partner-systems': { label: 'Partner systems', detail: 'Webhooks and connected services' },
      'business-api': { label: 'Business API', detail: 'Rules, rights, and integrations' }, identities: { label: 'Identity & access', detail: 'RBAC, RLS, and validation' }, 'payment-reconciliation': { label: 'Payments & reconciliation', detail: 'States, confirmation, and tracking' }, 'business-data': { label: 'Data & audit', detail: 'History, rules, and exports' },
      mvola: { label: 'MVola', detail: 'Mobile payment and confirmation' }, notifications: { label: 'Multichannel notifications', detail: 'FCM, SMS, email, WhatsApp' }, radiusdesk: { label: 'RadiusDesk', detail: 'Network access and consumption' }, 'ai-automation': { label: 'AI & automation', detail: 'OpenAI, n8n, and OpenClaw' }, 'human-validation': { label: 'Human approval', detail: 'Decision on sensitive cases' },
      postgresql: { label: 'PostgreSQL', detail: 'Persistence and isolation' }, 'local-storage': { label: 'Local storage', detail: 'Offline queue and recovery' }, 'queue-worker': { label: 'Queue worker', detail: 'Batches, priorities, and retries' }, audit: { label: 'Audit', detail: 'Actions and decisions traced' }, monitoring: { label: 'Monitoring', detail: 'Logs, metrics, traces, alerts' },
    },
    views: {
      overview: { label: 'Overview', summary: 'Connected web, mobile, business, integration, data, and monitoring layers.' }, payments: { label: 'Payments', summary: 'Payment states, confirmation, persistence, and audit stay observable.' }, 'offline-mobile': { label: 'Offline mobile', summary: 'Field work continues locally and synchronizes through controlled recovery paths.' }, 'controlled-ai': { label: 'Bounded AI', summary: 'AI and automation run behind business APIs, queues, traces, and human review.' }, monitoring: { label: 'Monitoring', summary: 'Operational signals connect APIs, workers, data, alerts, and support.' },
    },
  },
  fr: {
    section: { eyebrow: 'Architecture opérationnelle', title: 'Les systèmes fiables restent traçables de l’action terrain à la décision humaine', introduction: 'Un blueprint fixe de patterns vérifiés entre web, mobile, API métier, intégrations, données, monitoring et revue humaine.', filtersLabel: 'Choisir un flux opérationnel', proofLabel: 'Systèmes de preuve', mapLabel: 'Blueprint d’architecture du système opérationnel', statesLabel: 'États', orderedPath: 'parcours ordonné' },
    statuses: { operational: 'Opérationnel', processing: 'Traitement', queued: 'En file', review: 'Revue humaine', verified: 'Vérifié', observing: 'Observé' },
    zones: { entry: 'Utilisateurs et canaux', core: 'Cœur métier', integration: 'Intégrations et contrôle', data: 'Données et opérations' },
    nodes: {
      'field-teams': { label: 'Équipes terrain', detail: 'Collecte, incidents, visites' }, 'web-app': { label: 'Application web', detail: 'Pilotage des opérations' }, 'mobile-app': { label: 'Application mobile', detail: 'Usage terrain et synchronisation' }, 'partner-systems': { label: 'Systèmes partenaires', detail: 'Webhooks et services connectés' },
      'business-api': { label: 'API métier', detail: 'Règles, droits et intégrations' }, identities: { label: 'Identités et accès', detail: 'RBAC, RLS et validation' }, 'payment-reconciliation': { label: 'Paiements et rapprochement', detail: 'Statuts, confirmation et suivi' }, 'business-data': { label: 'Données et audit', detail: 'Historique, règles et exports' },
      mvola: { label: 'MVola', detail: 'Paiement mobile et confirmation' }, notifications: { label: 'Notifications multicanales', detail: 'FCM, SMS, e-mail, WhatsApp' }, radiusdesk: { label: 'RadiusDesk', detail: 'Accès réseau et consommation' }, 'ai-automation': { label: 'IA et automatisations', detail: 'OpenAI, n8n et OpenClaw' }, 'human-validation': { label: 'Validation humaine', detail: 'Décision sur les cas sensibles' },
      postgresql: { label: 'PostgreSQL', detail: 'Persistance et isolation' }, 'local-storage': { label: 'Stockage local', detail: 'File offline et reprise' }, 'queue-worker': { label: 'Queue worker', detail: 'Lots, priorités et reprise' }, audit: { label: 'Audit', detail: 'Actions et décisions tracées' }, monitoring: { label: 'Monitoring', detail: 'Logs, métriques, traces, alertes' },
    },
    views: {
      overview: { label: 'Vue globale', summary: 'Couches web, mobile, métier, intégration, données et monitoring connectées.' }, payments: { label: 'Paiements', summary: 'Statuts, confirmation, persistance et audit des paiements restent observables.' }, 'offline-mobile': { label: 'Mobile offline', summary: 'Le travail terrain continue localement puis se synchronise par des chemins de reprise contrôlés.' }, 'controlled-ai': { label: 'IA bornée', summary: 'IA et automatisations s’exécutent derrière les API métier, files, traces et revues humaines.' }, monitoring: { label: 'Monitoring', summary: 'Les signaux opérationnels relient API, workers, données, alertes et support.' },
    },
  },
};

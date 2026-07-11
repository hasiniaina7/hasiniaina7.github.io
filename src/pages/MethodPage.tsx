import { pageCopy, workingMethod } from '@/data/portfolioData';
import { SectionHeading } from '@/components/SectionHeading';
import { ResponsiveMedia } from '@/components/ResponsiveMedia';
import { getMediaAsset } from '@/data/mediaData';
import { FinalCta } from '@/components/FinalCta';
import { MediaLightbox } from '@/components/MediaLightbox';
import { Link } from 'react-router-dom';

const detailedSteps = [
  {
    title: 'Spec produit et règles métier',
    desc: 'Clarifier les objectifs business, formaliser les critères d’acceptation et valider la valeur opérationnelle avant d’initier tout développement.',
    accent: 'blue',
    role: 'Cadrage fonctionnel',
  },
  {
    title: 'Contrats API / modèle de données',
    desc: 'Modéliser la structure de données PostgreSQL et figer les contrats d’API (OpenAPI / Zod) pour garantir un couplage propre et documenté.',
    accent: 'blue',
    role: 'Architecture de données',
  },
  {
    title: 'Découpage en tâches contrôlables',
    desc: 'Traduire l’implémentation en petites étapes atomiques et testables, réduisant la complexité et les risques de régression.',
    accent: 'violet',
    role: 'Planification technique',
  },
  {
    title: 'Implémentation assistée par agents',
    desc: 'Exécuter le développement assisté par des agents IA autonomes (comme Claude Code et Antigravity) sous supervision et contrôle humain strict.',
    accent: 'violet',
    role: 'Ingénierie & Productivité',
  },
  {
    title: 'Tests, lint, typecheck et revue de diff',
    desc: 'Imposer des barrières de qualité strictes : typage rigide, tests de contrats et revue méticuleuse de chaque ligne de code modifiée.',
    accent: 'green',
    role: 'Assurance Qualité (QA)',
  },
  {
    title: 'Validation et livraison',
    desc: 'Déployer la solution en production de manière automatisée et sécurisée après validation complète de l’intégralité des critères.',
    accent: 'green',
    role: 'Déploiement Continu (CI/CD)',
  },
];

export function MethodPage() {
  return (
    <div className="page">
      <section className="page-hero page-hero--blueprint">
        <SectionHeading as="h1" eyebrow={pageCopy.methode.eyebrow} title="Méthode" summary={pageCopy.methode.intro} />
      </section>

      <section className="content-section method-band">
        <SectionHeading align="split" eyebrow="Specs-driven" title={workingMethod.title} summary={workingMethod.summary} />
        <ResponsiveMedia asset={getMediaAsset('specs-driven-agent-flow')} sizes="(max-width: 768px) 90vw, 900px" className="method-illustration" />
        
        <div className="method-pipeline">
          {detailedSteps.map((step, index) => (
            <article key={step.title} className={`pipeline-step pipeline-step--${step.accent}`}>
              <div className="pipeline-step__head">
                <span className="pipeline-step__number">{String(index + 1).padStart(2, '0')}</span>
                <span className="pipeline-step__role">{step.role}</span>
              </div>
              <h3 className="pipeline-step__title">{step.title}</h3>
              <p className="pipeline-step__desc">{step.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section card-grid card-grid--two">
        <article className="surface-card surface-card--accent-violet">
          <div className="card-header-with-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="card-title-icon card-title-icon--violet">
              <polyline points="4 17 10 11 4 5" />
              <line x1="12" y1="19" x2="20" y2="19" />
            </svg>
            <h2>Usage des agents IA</h2>
          </div>
          <p><strong>Note d'usage :</strong> {workingMethod.agentUsageNote}</p>
          <p>
            Les agents accélèrent l’exécution, les variantes de solution et les refactors, mais la conception, les arbitrages, la revue
            et la responsabilité finale restent strictement humaines.
          </p>
        </article>

        <article className="surface-card surface-card--accent-blue">
          <div className="card-header-with-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="card-title-icon card-title-icon--blue">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <h2>Garde-fous qualité</h2>
          </div>
          <ul className="quality-gates-list">
            {workingMethod.qualityGates.map((gate) => (
              <li key={gate}>{gate}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="content-section method-agents">
        <SectionHeading align="split" eyebrow="Agents de développement" title="Accélérer l’exécution sans déléguer la responsabilité" summary="Codex et Claude Code interviennent dans la conception, l’implémentation, les tests et la revue. Ils ne sont pas présentés comme des fonctionnalités utilisateur des produits." />
        <div className="method-agent-row">
          <MediaLightbox asset={getMediaAsset('codex-development-agent')} caption="Codex dans le processus de développement supervisé. Les nombres visibles dans la composition ne sont pas des métriques publiées." sizes="(max-width: 700px) 94vw, 620px" />
          <div><h3>Exécution contrôlée</h3><p>Les tâches partent de spécifications, de contrats et de critères d’acceptation. Les diffs restent revus et les gates qualité restent obligatoires.</p></div>
        </div>
        <div className="method-agent-row method-agent-row--reverse">
          <MediaLightbox asset={getMediaAsset('claude-development-agent')} caption="Claude Code dans le processus d’implémentation et de revue. Les indicateurs visibles appartiennent à l’illustration." sizes="(max-width: 700px) 94vw, 620px" />
          <div><h3>Deux usages à ne pas confondre</h3><p>Les agents utilisés pour développer accélèrent le travail d’ingénierie. L’IA intégrée au produit exécute, elle, des fonctions métier encadrées et documentées.</p><Link className="text-link" to="/projets">Voir les intégrations IA produit <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>
      <FinalCta />
    </div>
  );
}

import { Link } from 'react-router';
import { BlueprintDiagram } from '@/components/BlueprintDiagram';
import { FinalCta } from '@/components/FinalCta';
import { HeroTechnologyGrid } from '@/components/HeroTechnologyGrid';
import { MethodFlow } from '@/components/MethodFlow';
import { ResponsiveMedia } from '@/components/ResponsiveMedia';
import { SectionHeading } from '@/components/SectionHeading';
import { WorkCard } from '@/components/WorkCard';
import { getMediaAsset } from '@/data/mediaData';
import { getLocalizedWorks, pathFor, recruiterCta } from '@/data/localizedPortfolio';
import { usePortfolioLocale } from '@/hooks/usePortfolioLocale';

const featuredWorkIds = ['tz-smart', 'fretunia', 'acm-iagasy', 'aim-beneficiaries'] as const;

export function HomePage() {
  const { locale, content } = usePortfolioLocale();
  const works = getLocalizedWorks(locale);
  const featuredWorks = featuredWorkIds.map((id) => works.find((work) => work.id === id)!);
  const method = content.agenticMethod;
  const approvalStage = method.stages[method.stages.length - 1]!;

  return (
    <div className="page page--home">
      <section className="premium-hero agentic-hero">
        <div className="premium-hero__copy">
          <p className="section-heading__eyebrow">{content.home.eyebrow}</p>
          <h1 className="hero-title">{content.profile.role}</h1>
          <p className="hero-summary hero-summary--promise">{content.profile.promise}</p>
          <p className="hero-support">{content.home.orchestrationSummary}</p>
          <div className="hero-actions">
            <Link className="button button--primary" to={pathFor(locale, 'agenticDelivery')}>{content.home.primaryCta} <span aria-hidden="true">→</span></Link>
            <a className="button button--secondary" href={recruiterCta.resumes.ai[locale]} download>{content.home.secondaryCta}</a>
            <a className="text-link resume-variant-link" href={recruiterCta.resumes.fullStack[locale]} download>{content.home.fullStackCta} <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-facts" aria-label={content.home.factsLabel}>
            <div><span>{content.home.factLabels[0]}</span><strong>{content.profile.level}</strong></div>
            <div><span>{content.home.factLabels[1]}</span><strong>{content.profile.based}</strong></div>
            <div><span>{content.home.factLabels[2]}</span><strong>{content.profile.remote}</strong></div>
            <div><span>{content.home.factLabels[3]}</span><strong>{content.profile.relocation}</strong></div>
          </div>
        </div>
        <div className="premium-hero__visual">
          <ResponsiveMedia asset={getMediaAsset('hero-glass-portal-v2')} sizes="(max-width: 700px) 88vw, 410px" className="hero-portal-media" />
          <ResponsiveMedia asset={getMediaAsset('hasiniaina-portrait-cutout')} sizes="(max-width: 700px) 76vw, 350px" priority className="portrait-media portrait-media--cutout" alt={`${content.profile.fullName} — ${content.profile.role}`} />
          <div className="availability-card"><span aria-hidden="true" /> {content.profile.remote}</div>
          <div className="expertise-card"><p>{content.profile.level}</p><strong>{content.profile.role}</strong><strong>{content.home.approach}</strong></div>
        </div>
        <HeroTechnologyGrid content={content} />
      </section>

      <section className="content-section method-showcase agentic-overview">
        <SectionHeading eyebrow={content.home.orchestrationEyebrow} title={content.home.orchestrationTitle} summary={content.home.orchestrationSummary} />
        <div className="agent-hierarchy" aria-label={content.method.hierarchyTitle}>
          <article className="agent-hierarchy__primary">
            <span>{content.method.primaryAgent}</span>
            <strong>{method.coordinator}</strong>
            <p>{content.method.hierarchySummary}</p>
          </article>
          <div className="agent-hierarchy__connector" aria-hidden="true">→</div>
          <article>
            <span>{content.method.secondaryTool}</span>
            <strong>{method.secondaryTools.join(', ')}</strong>
            <p>{content.home.developmentAgentsSummary}</p>
          </article>
          <div className="agent-hierarchy__connector" aria-hidden="true">→</div>
          <article className="agent-hierarchy__human">
            <span>{approvalStage.ownerLabel}</span>
            <strong>{approvalStage.title}</strong>
            <p>{approvalStage.boundedBy}</p>
          </article>
        </div>
        <MethodFlow steps={method.stages} ariaLabel={content.common.methodAria} />
        <Link className="text-link" to={pathFor(locale, 'agenticDelivery')}>{content.home.primaryCta} <span aria-hidden="true">→</span></Link>
      </section>

      <section className="content-section">
        <SectionHeading align="split" eyebrow={content.home.proofsEyebrow} title={content.home.proofsTitle} summary={content.home.proofsSummary} />
        <div className="agentic-case-grid">
          {method.cases.map((agenticCase, index) => (
            <article className={`agentic-case agentic-case--${index + 1}`} key={agenticCase.id}>
              <div className="agentic-case__index">0{index + 1}</div>
              <p className="card-label">{content.home.proofsEyebrow}</p>
              <h3>{agenticCase.title}</h3>
              <p>{agenticCase.summary}</p>
              <ul className="plain-list">
                {agenticCase.coordination.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <p className="agentic-case__boundary"><strong>{content.method.boundaryLabel}.</strong> {agenticCase.boundary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section architecture-section">
        <BlueprintDiagram locale={locale} />
      </section>

      <section className="content-section">
        <SectionHeading align="split" eyebrow={content.home.systemsEyebrow} title={content.home.systemsTitle} summary={content.home.systemsSummary} />
        <div className="work-grid work-grid--home">
          {featuredWorks.map((work, index) => <WorkCard key={work.id} work={work} content={content} homeLayout={index < 2 ? 'dominant' : 'secondary'} />)}
        </div>
        <div className="section-action"><Link className="button button--secondary" to={pathFor(locale, 'projects')}>{content.home.allProjects}</Link></div>
      </section>

      <section className="content-section">
        <SectionHeading align="split" eyebrow={content.home.distinctionEyebrow} title={content.home.distinctionTitle} summary={content.home.systemsSummary} />
        <div className="ai-distinction">
          <article className="surface-card surface-card--accent-orange"><p className="card-label">{content.home.productAiTitle}</p><h2>{content.home.productAiTitle}</h2><p>{content.home.productAiSummary}</p></article>
          <article className="surface-card surface-card--accent-violet"><p className="card-label">{content.home.developmentAgentsTitle}</p><h2>{content.home.developmentAgentsTitle}</h2><p>{content.home.developmentAgentsSummary}</p></article>
        </div>
      </section>

      <FinalCta />
    </div>
  );
}

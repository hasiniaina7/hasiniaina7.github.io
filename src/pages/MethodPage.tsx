import { FinalCta } from '@/components/FinalCta';
import { MediaLightbox } from '@/components/MediaLightbox';
import { MethodFlow } from '@/components/MethodFlow';
import { SectionHeading } from '@/components/SectionHeading';
import { getMediaAsset } from '@/data/mediaData';
import { externalDemoVideo } from '@/data/localizedPortfolio';
import { usePortfolioLocale } from '@/hooks/usePortfolioLocale';

export function MethodPage() {
  const { content } = usePortfolioLocale();
  const method = content.agenticMethod;
  const approvalStage = method.stages[method.stages.length - 1]!;

  return (
    <div className="page">
      <section className="page-hero page-hero--blueprint agentic-method-hero">
        <SectionHeading as="h1" eyebrow={content.method.eyebrow} title={content.method.title} summary={content.method.intro} />
        <div className="agentic-method-hero__rule"><span>{method.coordinator}</span><i aria-hidden="true" /><span>{method.secondaryTools.join(', ')}</span><i aria-hidden="true" /><span>{approvalStage.ownerLabel}</span></div>
      </section>

      <section className="content-section">
        <SectionHeading align="split" eyebrow={content.method.hierarchyEyebrow} title={content.method.hierarchyTitle} summary={content.method.hierarchySummary} />
        <div className="method-agent-row">
          <MediaLightbox asset={getMediaAsset('claude-development-agent')} caption={`${content.method.primaryAgent}: ${method.coordinator}`} sizes="(max-width: 700px) 94vw, 620px" />
          <div className="agent-role-card agent-role-card--primary"><p className="card-label">{content.method.primaryAgent}</p><h3>{method.coordinator}</h3><p>{method.promise}</p></div>
        </div>
        <div className="method-agent-row method-agent-row--reverse">
          <MediaLightbox asset={getMediaAsset('codex-development-agent')} caption={`${content.method.secondaryTool}: ${method.secondaryTools.join(', ')}`} sizes="(max-width: 700px) 94vw, 620px" />
          <div className="agent-role-card"><p className="card-label">{content.method.secondaryTool}</p><h3>{method.secondaryTools.join(', ')}</h3><p>{content.home.developmentAgentsSummary}</p></div>
        </div>
      </section>

      <section className="content-section method-band">
        <SectionHeading align="split" eyebrow={content.method.stagesEyebrow} title={method.title} summary={content.method.stagesSummary} />
        <MethodFlow steps={method.stages} ariaLabel={content.common.methodAria} />
      </section>

      <section className="content-section approval-section">
        <SectionHeading align="split" eyebrow={content.method.gatesEyebrow} title={content.method.gatesTitle} summary={content.method.gatesSummary} />
        <div className="approval-grid">
          {method.approvalGates.map((gate, index) => (
            <article className="approval-card" key={gate.id}>
              <span className="approval-card__index">{String(index + 1).padStart(2, '0')}</span>
              <div><h3>{gate.label}</h3><p>{gate.reason}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <SectionHeading align="split" eyebrow={content.method.casesEyebrow} title={content.method.casesTitle} summary={content.method.casesSummary} />
        <div className="agentic-case-grid">
          {method.cases.map((agenticCase, index) => (
            <article className={`agentic-case agentic-case--${index + 1}`} key={agenticCase.id}>
              <div className="agentic-case__index">0{index + 1}</div>
              <h3>{agenticCase.title}</h3>
              <p>{agenticCase.summary}</p>
              <ul className="plain-list">{agenticCase.coordination.map((item) => <li key={item}>{item}</li>)}</ul>
              <p className="agentic-case__boundary"><strong>{content.method.boundaryLabel}.</strong> {agenticCase.boundary}</p>
            </article>
          ))}
        </div>
      </section>

      {externalDemoVideo.enabled ? (
        <section className="content-section external-demo">
          <a href={externalDemoVideo.url} target="_blank" rel="noopener noreferrer">
            <img src={externalDemoVideo.thumbnail} alt={content.method.videoTitle} width="1280" height="720" loading="lazy" />
            <span>{content.method.videoTitle}</span>
          </a>
        </section>
      ) : null}

      <FinalCta />
    </div>
  );
}

import { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { FinalCta } from '@/components/FinalCta';
import { MediaLightbox } from '@/components/MediaLightbox';
import { SectionHeading } from '@/components/SectionHeading';
import { WorkCard } from '@/components/WorkCard';
import { WorkFilters, type WorkFilter } from '@/components/WorkFilters';
import { getMediaAsset } from '@/data/mediaData';
import { getLocalizedWorks, type PortfolioContent } from '@/data/localizedPortfolio';
import type { WorkItem } from '@/data/portfolioData';
import { usePortfolioLocale } from '@/hooks/usePortfolioLocale';

function CaseStudy({ work, content }: { work: WorkItem; content: PortfolioContent }) {
  const [mainMediaId, ...supportingMediaIds] = work.mediaIds;
  const mainAsset = mainMediaId ? getMediaAsset(mainMediaId) : null;

  return (
    <article className="case-study" id={`case-${work.id}`}>
      <header className="case-study__header">
        <div><p className="card-label">{work.categoryLabel}</p><h2>{work.title}</h2></div>
        <p>{work.summary}</p>
      </header>
      <section className="case-study__purpose" aria-label={`${content.projects.purpose}: ${work.title}`}>
        <h3>{content.projects.purpose}</h3><p>{work.operationalPurpose}</p>
      </section>
      {mainAsset ? <MediaLightbox asset={mainAsset} caption={work.mediaNote ?? content.projects.mediaCaption(work.title)} publicUrl={work.publicUrl} sizes="(max-width: 700px) 96vw, 1280px" className="case-study__media" /> : null}
      <div className="case-study__details">
        <section><h3>{content.projects.delivery}</h3><p>{work.role}</p></section>
        <section><h3>{content.projects.capabilities}</h3><ul className="plain-list">{work.capabilities.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <section><h3>{content.projects.complexity}</h3><ul className="plain-list">{work.technicalComplexity.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <section><h3>{content.projects.stack}</h3><div className="tag-row">{work.stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div></section>
      </div>
      {work.publishableMetrics.length > 0 ? <div className="verified-metrics" aria-label={content.projects.verifiedMarkers}>{work.publishableMetrics.map((metric) => <p key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></p>)}</div> : null}
      {supportingMediaIds.length > 0 ? (
        <div className="supporting-media">
          {supportingMediaIds.map((mediaId) => <MediaLightbox key={mediaId} asset={getMediaAsset(mediaId)} caption={content.projects.mediaCaption(work.title)} publicUrl={work.publicUrl} sizes="(max-width: 700px) 94vw, 600px" />)}
        </div>
      ) : null}
      <footer className="case-study__footer">
        <span className="card-label">{content.common.evidence[work.evidenceLevel]}</span>
        <div className="tag-row">
          {work.publicUrl ? <a className="tag tag--link" href={work.publicUrl} target="_blank" rel="noopener noreferrer">{content.common.publicSite} ↗</a> : null}
          {work.alternatePublicUrl ? <a className="tag tag--link" href={work.alternatePublicUrl} target="_blank" rel="noopener noreferrer">{content.common.publicApp} ↗</a> : null}
        </div>
      </footer>
    </article>
  );
}

export function ProjectsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { locale, content } = usePortfolioLocale();
  const works = useMemo(() => getLocalizedWorks(locale), [locale]);
  const requestedFilter = searchParams.get('filter');
  const filter: WorkFilter = ['system', 'web', 'mobile', 'product-ai'].includes(requestedFilter ?? '') ? requestedFilter as WorkFilter : 'all';
  const setFilter = (nextFilter: WorkFilter) => {
    const next = new URLSearchParams(searchParams);
    if (nextFilter === 'all') next.delete('filter');
    else next.set('filter', nextFilter);
    setSearchParams(next, { replace: true });
  };
  const filteredWorks = useMemo(() => filter === 'all' ? works : works.filter((work) => work.categories.includes(filter)), [filter, works]);
  const caseStudies = works.filter((work) => work.caseStudy);

  return (
    <div className="page">
      <section className="page-hero page-hero--blueprint">
        <SectionHeading as="h1" eyebrow={content.projects.eyebrow} title={content.projects.title} summary={content.projects.intro} />
      </section>

      <section className="content-section">
        <SectionHeading align="split" eyebrow={content.projects.inventoryEyebrow} title={content.projects.inventoryTitle} summary={content.projects.inventorySummary} />
        <WorkFilters active={filter} onChange={setFilter} content={content} />
        <p className="filter-result" aria-live="polite">{content.projects.result(filteredWorks.length)}</p>
        <div className="work-grid">{filteredWorks.map((work) => <WorkCard key={work.id} work={work} content={content} />)}</div>
      </section>

      <section className="content-section case-studies">
        <SectionHeading align="split" eyebrow={content.projects.casesEyebrow} title={content.projects.casesTitle} summary={content.projects.casesSummary} />
        {caseStudies.map((work) => <CaseStudy key={work.id} work={work} content={content} />)}
      </section>
      <FinalCta />
    </div>
  );
}

import { getMediaAsset } from '@/data/mediaData';
import type { WorkItem } from '@/data/portfolioData';
import type { PortfolioContent } from '@/data/localizedPortfolio';
import { VisualPlaceholder } from './VisualPlaceholder';
import { MediaLightbox } from './MediaLightbox';

type WorkCardProps = {
  work: WorkItem;
  priority?: boolean;
  homeLayout?: 'dominant' | 'secondary';
  content: PortfolioContent;
};

export function WorkCard({ work, content, priority = false, homeLayout }: WorkCardProps) {
  const asset = work.mediaIds[0] ? getMediaAsset(work.mediaIds[0]) : null;
  const relation = work.relatedSystemId ? content.common.relatedWork : null;

  return (
    <article className={`work-card work-card--${work.mediaLayout}${homeLayout ? ` work-card--${homeLayout}` : ''}`}>
      {asset ? (
        <MediaLightbox
          asset={asset}
          caption={work.mediaNote ?? content.projects.mediaCaption(work.title)}
          publicUrl={work.publicUrl}
          sizes={homeLayout ? '(max-width: 700px) 94vw, (max-width: 1100px) 46vw, 600px' : '(max-width: 700px) 94vw, (max-width: 1100px) 46vw, 620px'}
          priority={priority}
        />
      ) : (
        <VisualPlaceholder kind="project" label={content.common.noMedia} compact />
      )}
      <div className="work-card__body">
        <div className="work-card__meta"><span>{work.categoryLabel}</span>{work.period ? <span>{work.period}</span> : null}</div>
        <h3>{work.title}</h3>
        <p>{work.summary}</p>
        {relation ? <p className="work-card__relation">{relation}</p> : null}
        <div className="tag-row">{work.stack.slice(0, 5).map((item) => <span className="tag" key={item}>{item}</span>)}</div>
        <div className="work-card__footer">
          <span className="card-label">{content.common.evidence[work.evidenceLevel]}</span>
          <div className="work-card__links">
            {work.caseStudy ? <a className="text-link" href={`#case-${work.id}`}>{content.common.caseStudy} <span aria-hidden="true">↓</span></a> : null}
            {work.publicUrl ? <a className="text-link" href={work.publicUrl} target="_blank" rel="noopener noreferrer">{work.publicUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')} <span aria-hidden="true">↗</span></a> : null}
          </div>
        </div>
      </div>
    </article>
  );
}

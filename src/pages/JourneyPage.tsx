import { FinalCta } from '@/components/FinalCta';
import { SectionHeading } from '@/components/SectionHeading';
import { usePortfolioLocale } from '@/hooks/usePortfolioLocale';

export function JourneyPage() {
  const { content } = usePortfolioLocale();

  return (
    <div className="page">
      <section className="page-hero page-hero--split page-hero--blueprint">
        <SectionHeading as="h1" eyebrow={content.experience.eyebrow} title={content.experience.title} summary={content.experience.intro} />
        <div className="journey-progression" role="img" aria-label={content.experience.timelineTitle}>
          {content.experiences.map((experience, index) => (
            <div key={experience.id} className={`journey-stage journey-stage--${experience.accent}`}>
              <span className="journey-stage__index">{String(index + 1).padStart(2, '0')}</span>
              <strong>{experience.stage}</strong>
              <span>{experience.title}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <SectionHeading align="split" eyebrow={content.experience.timelineEyebrow} title={content.experience.timelineTitle} summary={content.experience.timelineSummary} />
        <div className="timeline">
          {content.experiences.map((experience, index) => (
            <article key={experience.id} className={`timeline-item timeline-item--${experience.accent}`}>
              <div className="timeline-item__index">{String(index + 1).padStart(2, '0')}</div>
              <div className="timeline-item__body">
                <div className="timeline-item__meta">
                  <p className="card-label">{experience.period}</p>
                  <span className="tag">{content.common.evidence[experience.evidenceLevel]}</span>
                </div>
                <p className="card-label">{experience.stage}</p>
                <h2>{experience.title}</h2>
                <p className="timeline-item__role">{experience.role}</p>
                <p>{experience.summary}</p>
                <div className="tag-row">{experience.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <SectionHeading eyebrow={content.experience.lessonsEyebrow} title={content.experience.lessonsTitle} summary={content.experience.lessonsSummary} />
        <div className="card-grid card-grid--three">
          {content.experience.lessons.map((lesson) => <article key={lesson} className="surface-card"><p>{lesson}</p></article>)}
        </div>
      </section>
      <FinalCta />
    </div>
  );
}

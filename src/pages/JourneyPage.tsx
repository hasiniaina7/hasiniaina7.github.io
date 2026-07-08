import { evidenceLabels, experiences, pageCopy } from '@/data/portfolioData';
import { JourneyProgression } from '@/components/JourneyProgression';
import { SectionHeading } from '@/components/SectionHeading';

export function JourneyPage() {
  return (
    <div className="page">
      <section className="page-hero page-hero--split">
        <SectionHeading as="h1" eyebrow={pageCopy.parcours.eyebrow} title="Parcours" summary={pageCopy.parcours.intro} />
        <JourneyProgression />
      </section>

      <section className="content-section">
        <SectionHeading align="split" eyebrow="Chronologie" title={pageCopy.parcours.timelineTitle} summary={pageCopy.parcours.timelineSummary} />
        <div className="timeline">
          {experiences.map((experience, index) => (
            <article key={experience.id} className={`timeline-item timeline-item--${experience.progressionStage}`}>
              <div className="timeline-item__index">{String(index + 1).padStart(2, '0')}</div>
              <div className="timeline-item__body">
                <div className="timeline-item__meta">
                  <p className="card-label">{experience.period}</p>
                  <span className="tag">{evidenceLabels[experience.evidenceLevel]}</span>
                </div>
                <h2>{experience.organization}</h2>
                <p className="timeline-item__role">{experience.role}</p>
                <p>{experience.summary}</p>
                <div className="tag-row">
                  {experience.capabilityTags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow="Leçons"
          title="Ce que cette trajectoire apporte à vos projets"
          summary="Le parcours relie le terrain, les données et la production. C’est utile pour construire des outils qui restent exploitables après la mise en ligne."
        />
        <div className="card-grid card-grid--three">
          {pageCopy.parcours.lessons.map((lesson) => (
            <article key={lesson} className="surface-card">
              <p>{lesson}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

import { FinalCta } from '@/components/FinalCta';
import { ResponsiveMedia } from '@/components/ResponsiveMedia';
import { SectionHeading } from '@/components/SectionHeading';
import { getMediaAsset } from '@/data/mediaData';
import { getLocalizedWorks } from '@/data/localizedPortfolio';
import { usePortfolioLocale } from '@/hooks/usePortfolioLocale';

export function SkillsPage() {
  const { locale, content } = usePortfolioLocale();
  const workById = Object.fromEntries(getLocalizedWorks(locale).map((work) => [work.id, work]));

  return (
    <div className="page skills-page">
      <section className="page-hero page-hero--blueprint skills-page__hero">
        <SectionHeading as="h1" eyebrow={content.skillsPage.eyebrow} title={content.skillsPage.title} summary={content.skillsPage.intro} />
        <div className="skills-page__hero-pattern" aria-hidden="true">
          {content.skillsPage.pattern.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="content-section">
        <SectionHeading align="split" eyebrow={content.skillsPage.matrixEyebrow} title={content.skillsPage.matrixTitle} summary={content.skillsPage.matrixSummary} />
        <div className="skill-evidence-grid">
          {content.skillSummaries.map((skill) => (
            <article className={`skill-evidence-card skill-evidence-card--${skill.accent}`} key={skill.id}>
              <div className="skill-evidence-card__head">
                <div className="skill-evidence-card__identity">
                  <span className="skill-evidence-card__icon" aria-hidden="true">{skill.id.slice(0, 2).toUpperCase()}</span>
                  <div><p className="card-label">{skill.level}</p><h3>{skill.title}</h3></div>
                </div>
              </div>
              <div className="tag-row skill-evidence-card__tags">{skill.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}</div>
              <div className="skill-evidence-card__section skill-evidence-card__section--proof">
                <h4>{content.skillsPage.proofLabel}</h4>
                <p>{skill.proofWorkIds.map((id) => workById[id]?.title).filter(Boolean).join(' · ')}</p>
              </div>
              <div className="skill-evidence-card__section skill-evidence-card__section--outcome">
                <p>{skill.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section ai-distinction" aria-label={content.home.distinctionTitle}>
        <article className="surface-card surface-card--accent-orange"><p className="card-label">{content.home.productAiTitle}</p><h2>{content.home.productAiTitle}</h2><p>{content.home.productAiSummary}</p></article>
        <article className="surface-card surface-card--accent-violet"><p className="card-label">{content.home.developmentAgentsTitle}</p><h2>{content.home.developmentAgentsTitle}</h2><p>{content.home.developmentAgentsSummary}</p></article>
      </section>

      <section className="content-section skills-proof">
        <ResponsiveMedia asset={getMediaAsset('security-reliability-shield')} sizes="(max-width: 768px) 90vw, 620px" alt={content.skillsPage.reliabilityTitle} />
        <SectionHeading eyebrow={content.skillsPage.reliabilityEyebrow} title={content.skillsPage.reliabilityTitle} summary={content.skillsPage.reliabilitySummary} />
      </section>
      <FinalCta />
    </div>
  );
}

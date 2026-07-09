import { pageCopy } from '@/data/portfolioData';
import { SectionHeading } from '@/components/SectionHeading';
import { SkillsMatrix } from '@/components/SkillsMatrix';

export function SkillsPage() {
  return (
    <div className="page">
      <section className="page-hero page-hero--blueprint">
        <SectionHeading as="h1" eyebrow={pageCopy.competences.eyebrow} title="Compétences" summary={pageCopy.competences.intro} />
      </section>

      <section className="content-section">
        <SectionHeading
          align="split"
          eyebrow="Stack et réalisations"
          title="Savoir-faire et réalisations techniques"
          summary="Chaque domaine détaille mes technologies de prédilection, mes réalisations concrètes, mon niveau d'usage et les thématiques d'échange."
        />
        <SkillsMatrix />
      </section>
    </div>
  );
}

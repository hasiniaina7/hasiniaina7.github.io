import { pageCopy } from '@/data/portfolioData';
import { SectionHeading } from '@/components/SectionHeading';
import { SkillsMatrix } from '@/components/SkillsMatrix';

export function SkillsPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <SectionHeading as="h1" eyebrow={pageCopy.competences.eyebrow} title="Compétences" summary={pageCopy.competences.intro} />
      </section>

      <section className="content-section">
        <SectionHeading
          align="split"
          eyebrow="Flux métier"
          title="Des compétences utiles quand l’opération dépend du système"
          summary="L’enjeu n’est pas d’empiler des technologies. L’enjeu est de collecter, synchroniser, payer, tracer, superviser, automatiser et sécuriser correctement."
        />
        <SkillsMatrix />
      </section>
    </div>
  );
}

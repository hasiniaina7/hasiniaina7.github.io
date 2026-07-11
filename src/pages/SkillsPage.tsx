import { pageCopy } from '@/data/portfolioData';
import { SectionHeading } from '@/components/SectionHeading';
import { SkillsMatrix } from '@/components/SkillsMatrix';
import { FinalCta } from '@/components/FinalCta';
import { ResponsiveMedia } from '@/components/ResponsiveMedia';
import { getMediaAsset } from '@/data/mediaData';

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
      <section className="content-section skills-proof"><ResponsiveMedia asset={getMediaAsset('cloud-certification-stack')} sizes="(max-width: 768px) 90vw, 620px" /><div><SectionHeading eyebrow="Spécialisations" title="Une stack reliée à des preuves concrètes" summary="Cette illustration reste décorative. Les technologies, usages et niveaux de pratique sont intégralement lisibles dans la matrice ci-dessus." /></div></section>
      <FinalCta />
    </div>
  );
}

import { pageCopy } from '@/data/portfolioData';
import { SectionHeading } from '@/components/SectionHeading';
import { SkillsMatrix } from '@/components/SkillsMatrix';
import { FinalCta } from '@/components/FinalCta';
import { ResponsiveMedia } from '@/components/ResponsiveMedia';
import { getMediaAsset } from '@/data/mediaData';

export function SkillsPage() {
  return (
    <div className="page skills-page">
      <section className="page-hero page-hero--blueprint skills-page__hero">
        <SectionHeading as="h1" eyebrow={pageCopy.competences.eyebrow} title="Compétences" summary={pageCopy.competences.intro} />
        <div className="skills-page__hero-pattern" aria-hidden="true">
          <span>Produit</span><span>Flux</span><span>Terrain</span><span>Fiabilité</span>
        </div>
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
      <section className="content-section ai-distinction" aria-label="Distinguer l’IA produit des agents de développement">
        <article className="surface-card surface-card--accent-orange"><p className="card-label">Fonction produit</p><h2>IA intégrée aux produits</h2><p>{pageCopy.competences.productAiSummary}</p></article>
        <article className="surface-card surface-card--accent-violet"><p className="card-label">Méthode d’ingénierie</p><h2>Agents de développement</h2><p>{pageCopy.competences.developmentAgentsSummary}</p></article>
      </section>
      <section className="content-section skills-proof"><ResponsiveMedia asset={getMediaAsset('cloud-certification-stack')} sizes="(max-width: 768px) 90vw, 620px" /><div><SectionHeading eyebrow="Sécurisation" title="Pour moi, la sécurité est une priorité" summary="La sécurité est primordiale, que ce soit pour les utilisateurs et pendant le developpement.  L'audit des logs et les preventions en cas de pannes sont systematique pour eviter toutes surprise en PROD" /></div></section>
      <FinalCta />
    </div>
  );
}

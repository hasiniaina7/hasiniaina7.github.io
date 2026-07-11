import { Link } from 'react-router-dom';
import { blueprintModules, homeSelections, operatingPrinciples, pageCopy, profile, recruiterValues, skillGroups, workById, workingMethod } from '@/data/portfolioData';
import { getMediaAsset } from '@/data/mediaData';
import { BlueprintDiagram } from '@/components/BlueprintDiagram';
import { OperationalMap } from '@/components/OperationalMap';
import { SectionHeading } from '@/components/SectionHeading';
import { ResponsiveMedia } from '@/components/ResponsiveMedia';
import { WorkCard } from '@/components/WorkCard';
import { MediaLightbox } from '@/components/MediaLightbox';
import { FinalCta } from '@/components/FinalCta';
import { HeroTechnologyGrid } from '@/components/HeroTechnologyGrid';

export function HomePage() {
  const featuredWorks = homeSelections.products.map((id) => workById[id]);
  const productionSites = homeSelections.productionSites.map((id) => workById[id]);

  return (
    <div className="page page--home">
      <section className="premium-hero">
        <div className="premium-hero__copy">
          <p className="section-heading__eyebrow">{pageCopy.home.eyebrow}</p>
          <h1 className="hero-title">{profile.hero.headline}</h1>
          <p className="hero-summary">{profile.hero.subheadline}</p>
          <div className="hero-actions">
            <Link className="button button--primary" to="/projets">Voir mes projets <span aria-hidden="true">→</span></Link>
            <Link className="button button--secondary" to="/contact">Me contacter</Link>
          </div>
          <div className="hero-facts" aria-label="Informations professionnelles">
            <div><span>Base</span><strong>{profile.location}</strong></div>
            <div><span>Disponibilité</span><strong>{profile.availability}</strong></div>
            <div><span>Approche</span><strong>Specs · tests · production</strong></div>
          </div>
        </div>
        <div className="premium-hero__visual">
          <ResponsiveMedia asset={getMediaAsset('hero-glass-portal-v2')} sizes="(max-width: 700px) 88vw, 410px" className="hero-portal-media" />
          <ResponsiveMedia asset={getMediaAsset('hasiniaina-portrait-cutout')} sizes="(max-width: 700px) 76vw, 350px" priority className="portrait-media portrait-media--cutout" />
          <div className="availability-card"><span aria-hidden="true" /> Disponible pour collaboration remote</div>
          <div className="expertise-card"><p>Expertises</p><strong>Backend · Frontend</strong><strong>Mobile · IA appliquée</strong></div>
        </div>
        <HeroTechnologyGrid />
      </section>

      <section className="content-section architecture-section">
        <div className="architecture-visual">
          <ResponsiveMedia asset={getMediaAsset('architecture-system-core')} sizes="(max-width: 768px) 92vw, 660px" />
          <BlueprintDiagram />
        </div>
        <div className="value-column">
          <SectionHeading eyebrow="Architecture & valeur" title={pageCopy.home.valuesTitle} summary={pageCopy.home.valuesSummary} />
          {recruiterValues.slice(0, 4).map((value, index) => <article className={`value-card value-card--${index + 1}`} key={value.title}><span>0{index + 1}</span><div><h3>{value.title}</h3><p>{value.summary}</p></div></article>)}
        </div>
      </section>

      <section className="content-section method-showcase">
        <div><SectionHeading eyebrow="Méthode" title={workingMethod.title} summary={workingMethod.summary} /><ResponsiveMedia asset={getMediaAsset('specs-driven-agent-flow')} sizes="(max-width: 768px) 90vw, 760px" /></div>
        <div className="method-pipeline">{workingMethod.steps.map((step, index) => <article className="pipeline-step" key={step}><span className="pipeline-step__number">{String(index + 1).padStart(2, '0')}</span><h3>{step}</h3></article>)}</div>
        <Link className="text-link" to="/methode">Explorer la méthode <span aria-hidden="true">→</span></Link>
      </section>

      <section className="content-section">
        <SectionHeading align="split" eyebrow="Capacités techniques" title="Des briques déjà rencontrées sur projets réels." summary="Synchronisation, isolation, paiements, IA contrôlée et monitoring : chaque capacité répond à une contrainte opérationnelle vécue." />
        <div className="capability-grid">{blueprintModules.map((module, index) => <article className="capability-card" key={module.id}><span>0{index + 1}</span><h3>{module.title}</h3><p>{module.summary}</p><div className="tag-row">{module.steps.map((step) => <span className="tag" key={step}>{step}</span>)}</div></article>)}</div>
      </section>

      <section className="content-section automation-feature">
        <MediaLightbox asset={getMediaAsset('n8n-product-automation')} caption="Illustration explicative des automatisations n8n. Les nombres éventuellement visibles appartiennent à la composition et ne sont pas publiés comme résultats." sizes="(max-width: 700px) 94vw, 620px" />
        <SectionHeading eyebrow="IA intégrée aux produits" title={pageCopy.home.automationTitle} summary={pageCopy.home.automationSummary} />
      </section>

      <section className="content-section operations-section">
        <div><SectionHeading eyebrow="Opérations internationales" title={pageCopy.home.mapTitle} summary={pageCopy.home.mapSummary} /><OperationalMap /></div>
        <div className="orb-placeholder"><span aria-hidden="true">AF</span><p>L’orbe décoratif a été écarté après contrôle qualité. La géographie utile reste portée par le schéma accessible.</p></div>
      </section>

      <section className="content-section">
        <SectionHeading align="split" eyebrow="Réalisations sélectionnées" title={pageCopy.home.productsTitle} summary={pageCopy.home.productsSummary} />
        <div className="work-grid work-grid--home">{featuredWorks.map((work, index) => <WorkCard key={work.id} work={work} homeLayout={index < 2 ? 'dominant' : 'secondary'} />)}</div>
        <div className="section-action"><Link className="button button--secondary" to="/projets">Voir toutes les réalisations</Link></div>
      </section>

      <section className="content-section">
        <SectionHeading align="split" eyebrow="Web full-stack" title={pageCopy.home.productionSitesTitle} summary={pageCopy.home.productionSitesSummary} />
        <div className="production-sites">{productionSites.map((work) => <WorkCard key={work.id} work={work} />)}</div>
      </section>

      <section className="content-section principles-showcase">
        <div><SectionHeading eyebrow="Principes" title="Fiabilité, clarté et responsabilité" summary={pageCopy.home.principlesSummary} /><div className="principles-grid">{operatingPrinciples.map((principle) => <article key={principle.id} className="principle"><h3>{principle.title}</h3><p>{principle.summary}</p></article>)}</div></div>
        <div className="specialization-card"><ResponsiveMedia asset={getMediaAsset('security-reliability-shield')} sizes="(max-width: 768px) 90vw, 520px" /><h3>Sécurité et fiabilité</h3><p>Des spécialisations techniques issues de systèmes réellement livrés, sans intitulé de certification inventé.</p><div className="tag-row">{skillGroups.flatMap((group) => group.technologies).filter((item) => ['PostgreSQL','RBAC','RLS','Docker','Linux','WireGuard'].includes(item)).map((item) => <span className="tag" key={item}>{item}</span>)}</div></div>
      </section>

      <FinalCta />
    </div>
  );
}

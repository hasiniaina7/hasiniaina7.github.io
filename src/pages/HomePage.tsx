import { Link } from 'react-router-dom';
import { evidenceLabels, operatingPrinciples, pageCopy, profile, projects } from '@/data/portfolioData';
import { OperationalMap } from '@/components/OperationalMap';
import { SectionHeading } from '@/components/SectionHeading';

export function HomePage() {
  const featuredProjects = projects.filter((project) => pageCopy.home.featuredProjectIds.includes(project.id));

  return (
    <div className="page page--home">
      <section className="hero-grid">
        <div className="hero-card hero-card--editorial">
          <p className="section-heading__eyebrow">{pageCopy.home.eyebrow}</p>
          <h1 className="hero-title">{profile.hero.headline}</h1>
          <p className="hero-summary">{profile.hero.subheadline}</p>
          <div className="hero-meta" aria-label="Profil">
            <span>{profile.role}</span>
            <span>{profile.location}</span>
            <span>{profile.availability}</span>
          </div>
          <div className="hero-actions">
            <Link className="button button--primary" to="/contact">
              Échanger <span aria-hidden="true">→</span>
            </Link>
            <Link className="button button--secondary" to="/projets">
              Voir les projets
            </Link>
          </div>
        </div>
        <div className="hero-card hero-card--diagram">
          <SectionHeading eyebrow="Flux" title={pageCopy.home.mapTitle} summary={pageCopy.home.mapSummary} />
          <OperationalMap />
        </div>
      </section>

      <section className="content-section">
        <SectionHeading
          align="split"
          eyebrow="Preuves"
          title="Quatre capacités pour fiabiliser une opération."
          summary="SaaS B2B, terrain, paiements et automatisation: des briques utiles quand vos équipes doivent travailler sans perdre la trace."
        />
        <div className="proof-strip">
          {profile.hero.proofPillars.map((pillar) => (
            <article key={pillar.id} className={`surface-card surface-card--accent-${pillar.accent}`}>
              <p className="card-label">{evidenceLabels[pillar.evidenceLevel]}</p>
              <h3>{pillar.title}</h3>
              <p>{pillar.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <SectionHeading
          align="split"
          eyebrow="Réalisations"
          title="Projets sélectionnés"
          summary="Chaque projet part d’un problème métier concret et relie la réponse technique à un résultat opérationnel prudent."
        />
        <div className="project-preview-grid">
          {featuredProjects.map((project) => (
            <article key={project.id} className={`project-preview project-preview--${project.solutionFlow[0]?.accent ?? 'blue'}`}>
              <div className="project-preview__head">
                <div>
                  <p className="card-label">{project.category}</p>
                  <h3>{project.title}</h3>
                </div>
                <span className="tag">{project.period}</span>
              </div>
              <p>{project.domain}</p>
              <p className="project-preview__result">{project.operationalResult}</p>
              <Link className="text-link" to="/projets">
                Voir le projet <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section operating-band">
        <SectionHeading eyebrow="Principes" title="Règles d’exploitation" summary={pageCopy.home.principlesSummary} />
        <div className="principles-grid">
          {operatingPrinciples.map((principle) => (
            <article key={principle.id} className={`principle principle--${principle.accent}`}>
              <h3>{principle.title}</h3>
              <p>{principle.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { evidenceLabels, operatingPrinciples, pageCopy, profile, projects } from '@/data/portfolioData';
import { BlueprintDiagram } from '@/components/BlueprintDiagram';
import { BlueprintModules } from '@/components/BlueprintModules';
import { OperationalMap } from '@/components/OperationalMap';
import { SectionHeading } from '@/components/SectionHeading';

export function HomePage() {
  const featuredProjects = projects.filter((project) => pageCopy.home.featuredProjectIds.includes(project.id));

  return (
    <div className="page page--home">
      <section className="hero-grid hero-grid--blueprint">
        <div className="hero-card hero-card--editorial hero-card--command">
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
              Voir l’architecture
            </Link>
          </div>
          <p className="hero-assurance">Systèmes pensés pour rester lisibles quand les flux métier, les données et les décisions deviennent sensibles.</p>
        </div>
        <BlueprintDiagram />
      </section>

      <section className="content-section">
        <SectionHeading
          align="split"
          eyebrow="Blueprint"
          title="Cinq modules pour garder le contrôle opérationnel."
          summary="Chaque brique relie une contrainte métier à un flux technique traçable: synchroniser, isoler, payer, automatiser et surveiller."
        />
        <BlueprintModules />
      </section>

      <section className="content-section map-band">
        <SectionHeading align="split" eyebrow="Présence" title={pageCopy.home.mapTitle} summary={pageCopy.home.mapSummary} />
        <OperationalMap />
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
                  <p className="card-label">{evidenceLabels[project.evidenceLevel]}</p>
                  <h3>{project.title}</h3>
                </div>
                <span className="tag">{project.period}</span>
              </div>
              <p className="project-preview__domain">{project.category}</p>
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

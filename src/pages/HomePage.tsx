import { Link } from 'react-router-dom';
import { evidenceLabels, operatingPrinciples, pageCopy, profile, projects, recruiterValues, workingMethod } from '@/data/portfolioData';
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
            <Link className="button button--primary" to="/projets">
              Voir mes projets <span aria-hidden="true">→</span>
            </Link>
            <Link className="button button--secondary" to="/competences">
              Voir mes compétences
            </Link>
            <Link className="button button--secondary" to="/contact">
              Me contacter
            </Link>
          </div>
          <p className="hero-assurance">Profil orienté livraison réelle : specs, code, tests, sécurité, production et responsabilité finale.</p>
        </div>
        <BlueprintDiagram />
      </section>

      <section className="content-section">
        <SectionHeading align="split" eyebrow="Valeur opérationnelle" title={pageCopy.home.valuesTitle} summary={pageCopy.home.valuesSummary} />
        <div className="recruiter-value-grid">
          {recruiterValues.map((value) => (
            <article key={value.title} className="surface-card recruiter-value-card">
              <h3>{value.title}</h3>
              <p>{value.summary}</p>
              <div className="tag-row">
                {value.keywords.map((keyword) => (
                  <span key={keyword} className="tag">
                    {keyword}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section method-band">
        <SectionHeading
          align="split"
          eyebrow="Méthode"
          title={workingMethod.title}
          summary={workingMethod.summary}
        />
        <div className="method-preview">
          {workingMethod.steps.map((step, index) => (
            <article key={step} className="method-step">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{step}</h3>
            </article>
          ))}
        </div>
        <Link className="text-link" to="/methode">
          Voir ma méthode de travail <span aria-hidden="true">→</span>
        </Link>
      </section>

      <section className="content-section">
        <SectionHeading
          align="split"
          eyebrow="Preuves techniques"
          title="Des briques déjà rencontrées sur projets réels."
          summary="Ces modules résument les sujets qui reviennent dans mes projets : synchronisation, isolation, paiements, IA contrôlée et monitoring."
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
          summary="Chaque projet détaille un rôle, une stack technologique, une complexité et les réalisations concrètes associées."
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

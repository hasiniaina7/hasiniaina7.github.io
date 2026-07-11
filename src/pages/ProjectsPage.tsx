import { evidenceLabels, projects } from '@/data/portfolioData';
import { SectionHeading } from '@/components/SectionHeading';
import { pageCopy } from '@/data/portfolioData';
import { VisualPlaceholder } from '@/components/VisualPlaceholder';
import { FinalCta } from '@/components/FinalCta';

export function ProjectsPage() {
  return (
    <div className="page">
      <section className="page-hero page-hero--blueprint">
        <SectionHeading as="h1" eyebrow={pageCopy.projets.eyebrow} title="Projets" summary={pageCopy.projets.intro} />
      </section>

      <section className="content-section stack">
        {projects.map((project) => (
          <article key={project.id} className="project-case">
            <VisualPlaceholder kind="project" label="Média projet volontairement non publié" />
            <div className="project-case__header">
              <div className="project-detail__meta">
                <p className="card-label">{project.category}</p>
                <span className="tag">{project.period}</span>
              </div>
              <h2>{project.title}</h2>
              <p>{project.domain}</p>
            </div>

            <div className="project-case__grid">
              <section className="project-case__section">
                <h3>Contexte</h3>
                <p>{project.context}</p>
                <p>{project.problem}</p>
              </section>

              <section className="project-case__section">
                <h3>Rôle</h3>
                <p>{project.role}</p>
              </section>

              <section className="project-case__section project-case__section--wide">
                <h3>Stack</h3>
                <div className="tag-row">
                  {project.stack.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </section>

              <section className="project-case__section">
                <h3>Ce que j’ai construit</h3>
                <ul className="plain-list">
                  {project.built.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="project-case__section">
                <h3>Complexité technique</h3>
                <ul className="plain-list">
                  {project.technicalComplexity.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="project-case__proof">
              <div>
                <h3>Résultat lisible</h3>
                <p>{project.operationalResult}</p>
              </div>
              {project.publishableMetrics.length > 0 ? (
                <div>
                  <h3>Repère vérifié</h3>
                  {project.publishableMetrics.map((metric) => (
                    <p key={metric.label} className="metric">
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                    </p>
                  ))}
                </div>
              ) : null}
              <div>
                <h3>Preuve publique</h3>
                {project.publicProofLinks.length > 0 ? (
                  <div className="tag-row">
                    {project.publicProofLinks.map((link) => (
                      <a key={link.href} className="tag tag--link" href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : (
                  <p>Architecture, démonstration ou captures anonymisées disponibles sur demande.</p>
                )}
              </div>
              <div>
                <h3>Détails techniques complémentaires</h3>
                <p>{project.privateProofNote}</p>
              </div>
              <p className="card-label">{evidenceLabels[project.evidenceLevel]}</p>
            </div>
          </article>
        ))}
      </section>
      <FinalCta />
    </div>
  );
}

import { evidenceLabels, projects } from '@/data/portfolioData';
import { FlowDiagram } from '@/components/FlowDiagram';
import { SectionHeading } from '@/components/SectionHeading';
import { pageCopy } from '@/data/portfolioData';

export function ProjectsPage() {
  return (
    <div className="page">
      <section className="page-hero">
        <SectionHeading as="h1" eyebrow={pageCopy.projets.eyebrow} title="Projets" summary={pageCopy.projets.intro} />
      </section>

      <section className="content-section stack">
        {projects.map((project) => (
          <article key={project.id} className="project-detail">
            <div className="project-detail__intro">
              <div className="project-detail__meta">
                <p className="card-label">{project.category}</p>
                <span className="tag">{project.period}</span>
              </div>
              <h2>{project.title}</h2>
              <dl className="fact-list">
                <div>
                  <dt>Contexte</dt>
                  <dd>{project.context}</dd>
                </div>
                <div>
                  <dt>Problème</dt>
                  <dd>{project.problem}</dd>
                </div>
              </dl>
            </div>
            <div className="project-detail__flow">
              <FlowDiagram nodes={project.solutionFlow} label={`${project.title}: flux principal`} />
            </div>
            <div className="project-detail__side">
              <div>
                <h3>Socle technique</h3>
                <div className="tag-row">
                  {project.stack.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3>Ce que l’opération gagne</h3>
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
              <p className="card-label">{evidenceLabels[project.evidenceLevel]}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

import { Link } from 'react-router-dom';
import type { Project } from '@/data/portfolioData';
import { evidenceLabels } from '@/data/portfolioData';
import { VisualPlaceholder } from './VisualPlaceholder';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <VisualPlaceholder kind="project" label="Aperçu visuel volontairement non publié" compact />
      <div className="project-card__body">
        <div className="project-card__meta">
          <span>{project.category}</span>
          <span>{project.period}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.domain}</p>
        <p className="project-card__result">{project.operationalResult}</p>
        <div className="tag-row">
          {project.stack.slice(0, 5).map((item) => <span className="tag" key={item}>{item}</span>)}
        </div>
        <div className="project-card__footer">
          <span className="card-label">{evidenceLabels[project.evidenceLevel]}</span>
          <Link className="text-link" to="/projets">Voir l’étude de cas <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </article>
  );
}

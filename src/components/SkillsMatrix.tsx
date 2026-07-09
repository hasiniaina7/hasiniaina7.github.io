import { skillEvidence } from '@/data/portfolioData';

export function SkillsMatrix() {
  return (
    <div className="skill-evidence-grid" aria-label="Compétences prouvées par projets">
      {skillEvidence.map((skill) => (
        <article key={skill.category} className={`skill-evidence-card skill-evidence-card--${skill.accent}`}>
          <div className="skill-evidence-card__head">
            <div>
              <p className="card-label">{skill.level === 'production' ? 'Utilisé en production' : skill.level === 'advanced' ? 'Usage avancé' : 'Socle solide'}</p>
              <h3>{skill.category}</h3>
            </div>
          </div>
          <div className="tag-row">
            {skill.technologies.map((technology) => (
              <span key={technology} className="tag">
                {technology}
              </span>
            ))}
          </div>
          <div className="skill-evidence-card__section">
            <h4>Projets de preuve</h4>
            <p>{skill.projects.join(' · ')}</p>
          </div>
          <div className="skill-evidence-card__section">
            <h4>Réalisations clés</h4>
            <p>{skill.proof}</p>
          </div>
          <div className="skill-evidence-card__section skill-evidence-card__section--talking">
            <h4>Sujets d'échange</h4>
            <p>{skill.interviewTalkingPoint}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

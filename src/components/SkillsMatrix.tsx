import { evidenceLabels, skillGroups } from '@/data/portfolioData';

export function SkillsMatrix() {
  return (
    <div className="skills-matrix" aria-label="Matrice des compétences par flux métier">
      <div className="skills-matrix__heading">Cas d’usage</div>
      <div className="skills-matrix__heading">Capacités techniques</div>
      <div className="skills-matrix__heading">Impact opérationnel</div>
      {skillGroups.map((group) => (
        <article key={group.id} className={`skills-row skills-row--${group.accent}`}>
          <div className="skills-row__cell">
            <span className="skills-row__icon">{group.icon}</span>
            <ul className="plain-list">
              {group.useCases.map((useCase) => (
                <li key={useCase}>{useCase}</li>
              ))}
            </ul>
          </div>
          <div className="skills-row__cell skills-row__cell--center">
            <div>
              <p className="card-label">{evidenceLabels[group.evidenceLevel]}</p>
              <h3>{group.title}</h3>
            </div>
            <div className="tag-row">
              {group.technologies.map((technology) => (
                <span key={technology} className="tag">
                  {technology}
                </span>
              ))}
            </div>
          </div>
          <div className="skills-row__cell">
            <ul className="plain-list">
              {group.impacts.map((impact) => (
                <li key={impact}>{impact}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}

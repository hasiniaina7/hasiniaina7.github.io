import { blueprintModules, evidenceLabels, statusLabels } from '@/data/portfolioData';

export function BlueprintModules() {
  return (
    <div className="blueprint-modules">
      {blueprintModules.map((module, index) => (
        <article key={module.id} className={`blueprint-module blueprint-module--${module.accent}`}>
          <div className="blueprint-module__head">
            <span className="blueprint-module__index">{index + 1}</span>
            <div>
              <p className="card-label">{evidenceLabels[module.evidenceLevel]}</p>
              <h3>{module.title}</h3>
            </div>
          </div>
          <p>{module.summary}</p>
          <div className="blueprint-module__steps" aria-label={`${module.title}: étapes`}>
            {module.steps.map((step) => (
              <span key={step}>{step}</span>
            ))}
          </div>
          <span className={`status-pill status-pill--${module.status}`}>{statusLabels[module.status]}</span>
        </article>
      ))}
    </div>
  );
}

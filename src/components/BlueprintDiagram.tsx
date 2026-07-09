import { blueprintFlows, blueprintNodes, statusLabels } from '@/data/portfolioData';

const laneLabels = {
  input: 'Entrées opérationnelles',
  application: 'Applications et observation',
  control: 'Traitement et contrôle',
  output: 'Sorties validées',
} as const;

export function BlueprintDiagram() {
  return (
    <section className="blueprint" aria-labelledby="blueprint-title">
      <div className="blueprint__header">
        <div>
          <p className="blueprint__eyebrow">Operational System Blueprint</p>
          <h2 id="blueprint-title">Fiabilité, traçabilité, contrôle humain.</h2>
        </div>
        <span className="status-pill status-pill--operational">Tous systèmes opérationnels</span>
      </div>

      <div className="blueprint__canvas" aria-label="Architecture opérationnelle: terrain, applications, API, données, paiements, IA, validation humaine et monitoring">
        {(Object.keys(laneLabels) as Array<keyof typeof laneLabels>).map((lane) => (
          <div key={lane} className={`blueprint__lane blueprint__lane--${lane}`}>
            <p className="blueprint__lane-title">{laneLabels[lane]}</p>
            <div className="blueprint__nodes">
              {blueprintNodes
                .filter((node) => node.lane === lane)
                .map((node) => (
                  <article key={node.id} className={`blueprint-node blueprint-node--${node.accent}`}>
                    <span className={`blueprint-node__icon blueprint-node__icon--${node.accent}`} aria-hidden="true">
                      {node.label.slice(0, 2).toUpperCase()}
                    </span>
                    <div>
                      <h3>{node.label}</h3>
                      <p>{node.detail}</p>
                    </div>
                    <span className={`status-pill status-pill--${node.status}`}>{statusLabels[node.status]}</span>
                  </article>
                ))}
            </div>
          </div>
        ))}

        <div className="blueprint__flows" aria-label="Types de flux représentés">
          {blueprintFlows.map((flow) => (
            <span key={flow.id} className={`flow-chip flow-chip--${flow.accent}`}>
              <span aria-hidden="true" />
              {flow.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

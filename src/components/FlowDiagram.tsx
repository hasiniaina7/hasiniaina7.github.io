import type { FlowNode } from '@/data/portfolioData';
import { accentLabels } from '@/data/portfolioData';

type FlowDiagramProps = {
  nodes: FlowNode[];
  label: string;
};

export function FlowDiagram({ nodes, label }: FlowDiagramProps) {
  return (
    <div className="flow-diagram" aria-label={label}>
      {nodes.map((node, index) => (
        <div key={node.id} className={`flow-diagram__node flow-diagram__node--${node.accent}`}>
          <span className="flow-diagram__kind">{accentLabels[node.accent]}</span>
          <strong>{node.label}</strong>
          {node.description ? <span>{node.description}</span> : null}
          {index < nodes.length - 1 ? (
            <span className="flow-diagram__arrow" aria-hidden="true">
              →
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}

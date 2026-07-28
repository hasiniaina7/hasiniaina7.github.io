import { useMemo } from 'react';
import {
  Handle,
  Position,
  ReactFlow,
  type Edge,
  type Node,
  type NodeProps,
  type NodeTypes,
} from '@xyflow/react';
import { FiCheckCircle, FiCode, FiDatabase, FiFileText, FiGitPullRequest, FiList } from 'react-icons/fi';
import type { IconType } from 'react-icons';
import type { AgenticStage } from '@/data/localizedPortfolio';

type MethodFlowProps = { steps: AgenticStage[]; ariaLabel: string };
type MethodNodeData = AgenticStage & { index: number; icon: IconType };

const icons: IconType[] = [FiFileText, FiDatabase, FiList, FiCode, FiGitPullRequest, FiCheckCircle];

function MethodCard({ data }: NodeProps<Node<MethodNodeData>>) {
  const Icon = data.icon;
  return (
    <article className={`method-node method-node--${data.accent}`}>
      <Handle type="target" position={Position.Left} className="method-node__handle" />
      <Handle type="source" position={Position.Right} className="method-node__handle" />
      <header className="method-node__header">
        <span className="method-node__icon" aria-hidden="true"><Icon /></span>
        <span className="method-node__number">{String(data.index + 1).padStart(2, '0')}</span>
      </header>
      <p className="method-node__role">{data.ownerLabel}</p>
      <h3>{data.title}</h3>
      <p className="method-node__description">{data.description}</p>
    </article>
  );
}

const nodeTypes: NodeTypes = { methodStep: MethodCard };

export function MethodFlow({ steps, ariaLabel }: MethodFlowProps) {
  const nodes = useMemo<Node[]>(() => steps.map((step, index) => ({
    id: step.id,
    type: 'methodStep',
    position: { x: index * 194, y: index % 2 === 0 ? 18 : 54 },
    data: { ...step, index, icon: icons[index] ?? FiCheckCircle },
    width: 174,
    height: 224,
    initialWidth: 174,
    initialHeight: 224,
    style: { width: 174, height: 224 },
    draggable: false,
    selectable: false,
    focusable: false,
  })), [steps]);

  const edges = useMemo<Edge[]>(() => steps.slice(0, -1).map((step, index) => ({
    id: `${step.id}-${steps[index + 1]!.id}`,
    source: step.id,
    target: steps[index + 1]!.id,
    type: 'smoothstep',
    className: 'method-flow__edge',
    markerEnd: { type: 'arrowclosed', width: 18, height: 18, color: '#7563c5' },
  })), [steps]);

  return (
    <>
      <div className="method-flow" aria-label={ariaLabel}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.035, minZoom: 0.65, maxZoom: 1 }}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          panOnDrag={false}
          panOnScroll={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          preventScrolling={false}
          proOptions={{ hideAttribution: true }}
        />
      </div>
      <ol className="method-flow-mobile" aria-label={ariaLabel}>
        {steps.map((step, index) => (
          <li key={step.id} className={`method-mobile-step method-mobile-step--${step.accent}`}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div><small>{step.ownerLabel}</small><h3>{step.title}</h3><p>{step.description}</p></div>
          </li>
        ))}
      </ol>
    </>
  );
}

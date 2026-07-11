import { useMemo, useState } from 'react';
import {
  Handle,
  Position,
  ReactFlow,
  type Node,
  type NodeProps,
  type NodeTypes,
} from '@xyflow/react';
import {
  FiActivity,
  FiBell,
  FiBriefcase,
  FiCheckCircle,
  FiCloud,
  FiCpu,
  FiCreditCard,
  FiDatabase,
  FiFileText,
  FiGlobe,
  FiHardDrive,
  FiLayers,
  FiLock,
  FiMonitor,
  FiRadio,
  FiRefreshCw,
  FiServer,
  FiSmartphone,
  FiUsers,
} from 'react-icons/fi';
import type { IconType } from 'react-icons';
import {
  blueprintFlows,
  blueprintFlowLayout,
  blueprintNodeLayout,
  blueprintNodes,
  blueprintSectionCopy,
  blueprintViews,
  blueprintZoneLabels,
  statusLabels,
  workById,
  type BlueprintIcon,
  type BlueprintNode,
  type BlueprintViewId,
  type BlueprintZone,
} from '@/data/portfolioData';

type DiagramNodeData = BlueprintNode & { active: boolean };
type ZoneNodeData = { label: string; zone: BlueprintZone };
type ConnectorLayerData = { activeFlowIds: string[] };

const iconById: Record<BlueprintIcon, IconType> = {
  teams: FiUsers, web: FiMonitor, mobile: FiSmartphone, partners: FiBriefcase,
  api: FiServer, identity: FiLock, payments: FiCreditCard, 'business-data': FiLayers,
  mvola: FiRefreshCw, notifications: FiBell, radiusdesk: FiRadio, automation: FiCpu,
  human: FiCheckCircle, postgresql: FiDatabase, 'local-storage': FiHardDrive,
  worker: FiCloud, audit: FiFileText, monitoring: FiActivity,
};

const viewIconById: Record<BlueprintViewId, IconType> = {
  overview: FiGlobe,
  payments: FiCreditCard,
  'offline-mobile': FiSmartphone,
  'controlled-ai': FiCpu,
  monitoring: FiActivity,
};

const zoneGeometry: Record<BlueprintZone, { x: number; y: number; width: number; height: number }> = {
  entry: { x: 0, y: 0, width: 276, height: 480 },
  core: { x: 292, y: 0, width: 516, height: 310 },
  integration: { x: 822, y: 0, width: 306, height: 580 },
  data: { x: 292, y: 355, width: 516, height: 400 },
};

const handlePosition = {
  top: Position.Top,
  right: Position.Right,
  bottom: Position.Bottom,
  left: Position.Left,
} as const;

function initialHandles(width: number, height: number) {
  const points = {
    top: { x: width / 2 - 1, y: -1 },
    right: { x: width - 1, y: height / 2 - 1 },
    bottom: { x: width / 2 - 1, y: height - 1 },
    left: { x: -1, y: height / 2 - 1 },
  } as const;
  return Object.entries(handlePosition).flatMap(([side, position]) => {
    const point = points[side as keyof typeof points];
    return [
      { id: `${side}-target`, type: 'target' as const, position, ...point, width: 2, height: 2 },
      { id: `${side}-source`, type: 'source' as const, position, ...point, width: 2, height: 2 },
    ];
  });
}

function DiagramCard({ data }: NodeProps<Node<DiagramNodeData>>) {
  const Icon = iconById[data.icon];
  return (
    <article className={`blueprint-node blueprint-node--${data.accent} ${data.active ? 'is-active' : 'is-muted'}`}>
      {Object.entries(handlePosition).flatMap(([side, position]) => [
        <Handle key={`${side}-target`} id={`${side}-target`} type="target" position={position} className="blueprint-node__handle" />,
        <Handle key={`${side}-source`} id={`${side}-source`} type="source" position={position} className="blueprint-node__handle" />,
      ])}
      <span className="blueprint-node__icon" aria-hidden="true"><Icon /></span>
      <div><h4>{data.label}</h4><p>{data.detail}</p></div>
      <span className={`blueprint-node__status blueprint-node__status--${data.status}`}>{statusLabels[data.status]}</span>
    </article>
  );
}

function DiagramZone({ data }: NodeProps<Node<ZoneNodeData>>) {
  return <section className={`blueprint-zone blueprint-zone--${data.zone}`}><h3>{data.label}</h3></section>;
}

function anchorPoint(nodeId: BlueprintNode['id'], side: keyof typeof handlePosition) {
  const layout = blueprintNodeLayout[nodeId];
  const height = 82;
  if (side === 'top') return { x: layout.position.x + layout.width / 2, y: layout.position.y };
  if (side === 'right') return { x: layout.position.x + layout.width, y: layout.position.y + height / 2 };
  if (side === 'bottom') return { x: layout.position.x + layout.width / 2, y: layout.position.y + height };
  return { x: layout.position.x, y: layout.position.y + height / 2 };
}

function offsetPoint(point: { x: number; y: number }, side: keyof typeof handlePosition, offset: number) {
  if (side === 'top') return { x: point.x, y: point.y - offset };
  if (side === 'right') return { x: point.x + offset, y: point.y };
  if (side === 'bottom') return { x: point.x, y: point.y + offset };
  return { x: point.x - offset, y: point.y };
}

function connectorPath(flow: (typeof blueprintFlows)[number]) {
  const layout = blueprintFlowLayout[flow.id];
  const offset = layout.offset ?? 20;
  const start = anchorPoint(flow.from, layout.source);
  const end = anchorPoint(flow.to, layout.target);
  const out = offsetPoint(start, layout.source, offset);
  const approach = offsetPoint(end, layout.target, offset);
  const sourceIsHorizontal = layout.source === 'left' || layout.source === 'right';
  const targetIsHorizontal = layout.target === 'left' || layout.target === 'right';

  if (sourceIsHorizontal && targetIsHorizontal) {
    const midX = (out.x + approach.x) / 2;
    return `M ${start.x} ${start.y} L ${out.x} ${out.y} L ${midX} ${out.y} L ${midX} ${approach.y} L ${approach.x} ${approach.y} L ${end.x} ${end.y}`;
  }
  if (!sourceIsHorizontal && !targetIsHorizontal) {
    const midY = (out.y + approach.y) / 2;
    return `M ${start.x} ${start.y} L ${out.x} ${out.y} L ${out.x} ${midY} L ${approach.x} ${midY} L ${approach.x} ${approach.y} L ${end.x} ${end.y}`;
  }
  if (sourceIsHorizontal) {
    return `M ${start.x} ${start.y} L ${out.x} ${out.y} L ${out.x} ${approach.y} L ${approach.x} ${approach.y} L ${end.x} ${end.y}`;
  }
  return `M ${start.x} ${start.y} L ${out.x} ${out.y} L ${approach.x} ${out.y} L ${approach.x} ${approach.y} L ${end.x} ${end.y}`;
}

function ConnectorLayer({ data }: NodeProps<Node<ConnectorLayerData>>) {
  const activeFlowIds = new Set(data.activeFlowIds);
  return (
    <svg className="blueprint-connectors" viewBox="0 0 1128 755" aria-hidden="true" focusable="false">
      <defs>
        <marker id="blueprint-flow-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" />
        </marker>
      </defs>
      {blueprintFlows.map((flow) => <path key={flow.id} d={connectorPath(flow)} className={activeFlowIds.has(flow.id) ? 'is-active' : 'is-muted'} markerEnd="url(#blueprint-flow-arrow)" />)}
    </svg>
  );
}

const nodeTypes: NodeTypes = { blueprintCard: DiagramCard, blueprintZone: DiagramZone, connectorLayer: ConnectorLayer };

export function BlueprintDiagram() {
  const [activeViewId, setActiveViewId] = useState<BlueprintViewId>('overview');
  const activeView = blueprintViews.find((view) => view.id === activeViewId) ?? blueprintViews[0]!;

  const nodes = useMemo<Node[]>(() => {
    const activeNodeIds = new Set(activeView.nodeIds);
    const zoneNodes = (Object.keys(zoneGeometry) as BlueprintZone[]).map((zone) => {
      const geometry = zoneGeometry[zone];
      return {
        id: `zone-${zone}`,
        type: 'blueprintZone',
        position: { x: geometry.x, y: geometry.y },
        data: { label: blueprintZoneLabels[zone], zone },
        width: geometry.width,
        height: geometry.height,
        initialWidth: geometry.width,
        initialHeight: geometry.height,
        style: { width: geometry.width, height: geometry.height },
        selectable: false,
        draggable: false,
        focusable: false,
        zIndex: -1,
      };
    });
    const cardNodes = blueprintNodes.map((node) => {
      const layout = blueprintNodeLayout[node.id];
      return {
        id: node.id,
        type: 'blueprintCard',
        position: layout.position,
        data: { ...node, active: activeNodeIds.has(node.id) },
        width: layout.width,
        height: 82,
        initialWidth: layout.width,
        initialHeight: 82,
        handles: initialHandles(layout.width, 82),
        style: { width: layout.width, height: 82 },
        selectable: false,
        draggable: false,
        focusable: false,
        zIndex: 2,
      };
    });
    const connectorNode = {
      id: 'connector-layer',
      type: 'connectorLayer',
      position: { x: 0, y: 0 },
      data: { activeFlowIds: activeView.flowIds },
      width: 1128,
      height: 755,
      initialWidth: 1128,
      initialHeight: 755,
      style: { width: 1128, height: 755 },
      selectable: false,
      draggable: false,
      focusable: false,
      zIndex: 10,
    };
    return [...zoneNodes, connectorNode, ...cardNodes];
  }, [activeView]);

  return (
    <section className="blueprint" aria-labelledby="blueprint-title">
      <header className="blueprint__header">
        <p className="blueprint__eyebrow">{blueprintSectionCopy.eyebrow}</p>
        <h2 id="blueprint-title">{blueprintSectionCopy.title}</h2>
        <p>{blueprintSectionCopy.introduction}</p>
      </header>

      <div className="blueprint__filters" role="group" aria-label={blueprintSectionCopy.filtersLabel}>
        {blueprintViews.map((view) => {
          const Icon = viewIconById[view.id];
          return <button key={view.id} type="button" aria-pressed={view.id === activeViewId} onClick={() => setActiveViewId(view.id)}><Icon aria-hidden="true" /><span>{view.label}</span></button>;
        })}
      </div>

      <div className="blueprint__context" aria-live="polite" aria-atomic="true">
        <p><strong>{activeView.label}.</strong> {activeView.summary}</p>
        <p className="blueprint__proofs"><span>{blueprintSectionCopy.proofLabel}</span>{activeView.proofWorkIds.map((id) => <strong key={id}>{workById[id].title}</strong>)}</p>
      </div>

      <div className="blueprint__map" aria-label={blueprintSectionCopy.mapLabel}>
        <ReactFlow
          nodes={nodes}
          edges={[]}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.025, minZoom: 0.55, maxZoom: 1 }}
          minZoom={0.55}
          maxZoom={1}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          panOnDrag={false}
          panOnScroll={false}
          zoomOnDoubleClick={false}
          zoomOnPinch={false}
          zoomOnScroll={false}
          preventScrolling={false}
          proOptions={{ hideAttribution: true }}
          aria-label={blueprintSectionCopy.mapLabel}
        />
      </div>

      <div className="blueprint__legend" aria-label="États">
        {Object.entries(statusLabels).map(([status, label]) => <span key={status}><i className={`blueprint__legend-dot blueprint__legend-dot--${status}`} aria-hidden="true" />{label}</span>)}
      </div>

      <ol className="blueprint__mobile-path" aria-label={`${activeView.label} : parcours ordonné`}>
        {activeView.mobileNodeIds.map((nodeId, index) => {
          const node = blueprintNodes.find((item) => item.id === nodeId);
          if (!node) return null;
          const Icon = iconById[node.icon];
          return <li key={node.id} className={`blueprint-mobile-node blueprint-mobile-node--${node.accent}`}><span className="blueprint-mobile-node__index">{String(index + 1).padStart(2, '0')}</span><span className="blueprint-node__icon" aria-hidden="true"><Icon /></span><div><h3>{node.label}</h3><p>{node.detail}</p></div></li>;
        })}
      </ol>
    </section>
  );
}

import { useLayoutEffect, useRef, useState, type CSSProperties } from 'react';
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
  blueprintNodes,
  blueprintSectionCopy,
  blueprintViews,
  blueprintZoneLabels,
  statusLabels,
  workById,
  type BlueprintFlow,
  type BlueprintIcon,
  type BlueprintNodeId,
  type BlueprintViewId,
  type BlueprintZone,
} from '@/data/portfolioData';

type Point = { x: number; y: number };
type ConnectionGeometry = { id: BlueprintFlow['id']; path: string };

const zones: BlueprintZone[] = ['entry', 'core', 'integration', 'data'];

const iconById: Record<BlueprintIcon, IconType> = {
  teams: FiUsers,
  web: FiMonitor,
  mobile: FiSmartphone,
  partners: FiBriefcase,
  api: FiServer,
  identity: FiLock,
  payments: FiCreditCard,
  'business-data': FiLayers,
  mvola: FiRefreshCw,
  notifications: FiBell,
  radiusdesk: FiRadio,
  automation: FiCpu,
  human: FiCheckCircle,
  postgresql: FiDatabase,
  'local-storage': FiHardDrive,
  worker: FiCloud,
  audit: FiFileText,
  monitoring: FiActivity,
};

function getBoxIntersection(center: Point, target: Point, box: DOMRect, mapBox: DOMRect, padding = 8): Point {
  const x1 = box.left - mapBox.left - padding;
  const y1 = box.top - mapBox.top - padding;
  const x2 = box.right - mapBox.left + padding;
  const y2 = box.bottom - mapBox.top + padding;

  const dx = target.x - center.x;
  const dy = target.y - center.y;

  if (Math.abs(dx) < 0.001 && Math.abs(dy) < 0.001) {
    return center;
  }

  let minT = Infinity;
  let intersection = center;

  // Check vertical edge (left or right)
  if (dx > 0) {
    const t = (x2 - center.x) / dx;
    const y = center.y + t * dy;
    if (y >= y1 && y <= y2 && t < minT) {
      minT = t;
      intersection = { x: x2, y };
    }
  } else if (dx < 0) {
    const t = (x1 - center.x) / dx;
    const y = center.y + t * dy;
    if (y >= y1 && y <= y2 && t < minT) {
      minT = t;
      intersection = { x: x1, y };
    }
  }

  // Check horizontal edge (top or bottom)
  if (dy > 0) {
    const t = (y2 - center.y) / dy;
    const x = center.x + t * dx;
    if (x >= x1 && x <= x2 && t < minT) {
      minT = t;
      intersection = { x, y: y2 };
    }
  } else if (dy < 0) {
    const t = (y1 - center.y) / dy;
    const x = center.x + t * dx;
    if (x >= x1 && x <= x2 && t < minT) {
      minT = t;
      intersection = { x, y: y1 };
    }
  }

  return intersection;
}

function connectorPath(from: Point, to: Point) {
  const horizontalDistance = Math.abs(to.x - from.x);
  const verticalDistance = Math.abs(to.y - from.y);

  if (horizontalDistance >= verticalDistance) {
    const bend = Math.max(44, horizontalDistance * 0.42);
    const direction = to.x >= from.x ? 1 : -1;
    return `M ${from.x} ${from.y} C ${from.x + bend * direction} ${from.y}, ${to.x - bend * direction} ${to.y}, ${to.x} ${to.y}`;
  }

  const bend = Math.max(38, verticalDistance * 0.38);
  const direction = to.y >= from.y ? 1 : -1;
  return `M ${from.x} ${from.y} C ${from.x} ${from.y + bend * direction}, ${to.x} ${to.y - bend * direction}, ${to.x} ${to.y}`;
}

export function BlueprintDiagram() {
  const [activeViewId, setActiveViewId] = useState<BlueprintViewId>('overview');
  const [connections, setConnections] = useState<ConnectionGeometry[]>([]);
  const mapRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef(new Map<BlueprintNodeId, HTMLElement>());
  const activeView = blueprintViews.find((view) => view.id === activeViewId) ?? blueprintViews[0]!;
  const activeNodeIds = new Set(activeView.nodeIds);
  const activeFlowIds = new Set(activeView.flowIds);

  useLayoutEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const updateConnections = () => {
      const mapBox = map.getBoundingClientRect();
      const nextConnections = blueprintFlows.flatMap((flow) => {
        const fromNode = nodeRefs.current.get(flow.from);
        const toNode = nodeRefs.current.get(flow.to);
        if (!fromNode || !toNode) return [];
        const fromBox = fromNode.getBoundingClientRect();
        const toBox = toNode.getBoundingClientRect();

        const fromCenter = {
          x: fromBox.left - mapBox.left + fromBox.width / 2,
          y: fromBox.top - mapBox.top + fromBox.height / 2,
        };
        const toCenter = {
          x: toBox.left - mapBox.left + toBox.width / 2,
          y: toBox.top - mapBox.top + toBox.height / 2,
        };

        const from = getBoxIntersection(fromCenter, toCenter, fromBox, mapBox, 8);
        const to = getBoxIntersection(toCenter, fromCenter, toBox, mapBox, 8);

        return [{ id: flow.id, path: connectorPath(from, to) }];
      });
      setConnections(nextConnections);
    };

    updateConnections();
    const observer = new ResizeObserver(updateConnections);
    observer.observe(map);
    nodeRefs.current.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="blueprint" aria-labelledby="blueprint-title">
      <header className="blueprint__header">
        <p className="blueprint__eyebrow">{blueprintSectionCopy.eyebrow}</p>
        <h2 id="blueprint-title">{blueprintSectionCopy.title}</h2>
        <p>{blueprintSectionCopy.introduction}</p>
      </header>

      <div className="blueprint__filters" role="group" aria-label={blueprintSectionCopy.filtersLabel}>
        {blueprintViews.map((view) => (
          <button
            key={view.id}
            type="button"
            aria-pressed={view.id === activeViewId}
            onClick={() => setActiveViewId(view.id)}
          >
            {view.label}
          </button>
        ))}
      </div>

      <div className="blueprint__context" aria-live="polite" aria-atomic="true">
        <p><strong>{activeView.label}.</strong> {activeView.summary}</p>
        <p className="blueprint__proofs"><span>{blueprintSectionCopy.proofLabel}</span>{activeView.proofWorkIds.map((id) => <strong key={id}>{workById[id].title}</strong>)}</p>
      </div>

      <div ref={mapRef} className="blueprint__map" aria-label={blueprintSectionCopy.mapLabel}>
        <svg className="blueprint__connections" aria-hidden="true" focusable="false">
          <defs>
            <marker id="blueprint-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" />
            </marker>
          </defs>
          {connections.map((connection) => (
            <path key={connection.id} d={connection.path} className={activeFlowIds.has(connection.id) ? 'is-active' : 'is-muted'} markerEnd="url(#blueprint-arrow)" />
          ))}
        </svg>

        {zones.map((zone) => (
          <section key={zone} className={`blueprint-zone blueprint-zone--${zone}`} aria-labelledby={`blueprint-zone-${zone}`}>
            <div className="blueprint-zone__bg" aria-hidden="true" />
            <h3 id={`blueprint-zone-${zone}`} className="blueprint-zone__title">{blueprintZoneLabels[zone]}</h3>
            <div className="blueprint-zone__nodes">
              {blueprintNodes.filter((node) => node.zone === zone).map((node) => {
                const Icon = iconById[node.icon];
                const isActive = activeNodeIds.has(node.id);
                return (
                  <article
                    key={node.id}
                    ref={(element) => {
                      if (element) nodeRefs.current.set(node.id, element);
                      else nodeRefs.current.delete(node.id);
                    }}
                    className={`blueprint-node blueprint-node--${node.accent} ${isActive ? 'is-active' : 'is-muted'}`}
                    style={{ '--node-index': blueprintNodes.indexOf(node) } as CSSProperties}
                  >
                    <span className="blueprint-node__icon" aria-hidden="true"><Icon /></span>
                    <div><h4>{node.label}</h4><p>{node.detail}</p></div>
                    <span className="blueprint-node__status">{statusLabels[node.status]}</span>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <ol className="blueprint__mobile-path" aria-label={`${activeView.label} : parcours ordonné`}>
        {activeView.mobileNodeIds.map((nodeId, index) => {
          const node = blueprintNodes.find((item) => item.id === nodeId);
          if (!node) return null;
          const Icon = iconById[node.icon];
          return (
            <li key={node.id} className={`blueprint-mobile-node blueprint-mobile-node--${node.accent}`}>
              <span className="blueprint-mobile-node__index">{String(index + 1).padStart(2, '0')}</span>
              <span className="blueprint-node__icon" aria-hidden="true"><Icon /></span>
              <div><h3>{node.label}</h3><p>{node.detail}</p></div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

import { experiences } from '@/data/portfolioData';

const stages = [
  { id: 'terrain', label: 'Terrain', accent: 'green' },
  { id: 'data', label: 'Données', accent: 'blue' },
  { id: 'operations', label: 'Opérations', accent: 'orange' },
  { id: 'saas-ai', label: 'SaaS / IA', accent: 'violet' },
  { id: 'infrastructure', label: 'Infrastructure', accent: 'navy' },
] as const;

export function JourneyProgression() {
  return (
    <div className="journey-progression" role="img" aria-label="Progression du terrain vers les systèmes métier, SaaS, IA et infrastructure">
      {stages.map((stage, index) => {
        const related = experiences.filter((experience) => experience.progressionStage === stage.id);
        return (
          <div key={stage.id} className={`journey-stage journey-stage--${stage.accent}`}>
            <span className="journey-stage__index">{String(index + 1).padStart(2, '0')}</span>
            <strong>{stage.label}</strong>
            <span>{related.map((item) => item.organization).join(' / ') || 'Consolidation'}</span>
          </div>
        );
      })}
    </div>
  );
}

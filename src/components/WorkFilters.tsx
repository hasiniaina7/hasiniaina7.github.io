import type { WorkCategory } from '@/data/portfolioData';

export type WorkFilter = 'all' | WorkCategory;

const filters: { id: WorkFilter; label: string }[] = [
  { id: 'all', label: 'Tous' },
  { id: 'system', label: 'Systèmes' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'product-ai', label: 'IA intégrée' },
];

export function WorkFilters({ active, onChange }: { active: WorkFilter; onChange: (filter: WorkFilter) => void }) {
  return (
    <div className="work-filters" aria-label="Filtrer les réalisations">
      {filters.map((filter) => (
        <button key={filter.id} type="button" aria-pressed={active === filter.id} onClick={() => onChange(filter.id)}>
          {filter.label}
        </button>
      ))}
    </div>
  );
}

import type { WorkCategory } from '@/data/portfolioData';
import type { PortfolioContent } from '@/data/localizedPortfolio';

export type WorkFilter = 'all' | WorkCategory;

const filters: WorkFilter[] = ['all', 'system', 'web', 'mobile', 'product-ai'];

export function WorkFilters({ active, onChange, content }: { active: WorkFilter; onChange: (filter: WorkFilter) => void; content: PortfolioContent }) {
  return (
    <div className="work-filters" aria-label={content.projects.inventoryTitle}>
      {filters.map((filter) => (
        <button key={filter} type="button" aria-pressed={active === filter} onClick={() => onChange(filter)}>
          {content.projects.filters[filter]}
        </button>
      ))}
    </div>
  );
}

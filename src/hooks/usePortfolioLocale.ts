import { useLocation } from 'react-router';
import {
  getPortfolioContent,
  resolveLocalizedRoute,
  type Locale,
  type RouteId,
} from '@/data/localizedPortfolio';

export function usePortfolioLocale(): {
  locale: Locale;
  routeId: RouteId;
  content: ReturnType<typeof getPortfolioContent>;
} {
  const location = useLocation();
  const resolved = resolveLocalizedRoute(location.pathname) ?? { locale: 'en' as const, routeId: 'home' as const };

  return {
    ...resolved,
    content: getPortfolioContent(resolved.locale),
  };
}

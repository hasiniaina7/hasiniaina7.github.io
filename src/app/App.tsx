import { lazy, Suspense, type ReactNode } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import { SiteFrame } from '@/components/SiteFrame';
import {
  getPortfolioContent,
  historicalRedirects,
  resolveLocalizedRoute,
  routeDefinitions,
  type RouteId,
} from '@/data/localizedPortfolio';

const HomePage = lazy(() => import('@/pages/HomePage').then((module) => ({ default: module.HomePage })));
const JourneyPage = lazy(() => import('@/pages/JourneyPage').then((module) => ({ default: module.JourneyPage })));
const ProjectsPage = lazy(() => import('@/pages/ProjectsPage').then((module) => ({ default: module.ProjectsPage })));
const SkillsPage = lazy(() => import('@/pages/SkillsPage').then((module) => ({ default: module.SkillsPage })));
const MethodPage = lazy(() => import('@/pages/MethodPage').then((module) => ({ default: module.MethodPage })));
const ContactPage = lazy(() => import('@/pages/ContactPage').then((module) => ({ default: module.ContactPage })));

function LazyRoute({ children }: { children: ReactNode }) {
  const location = useLocation();
  const locale = resolveLocalizedRoute(location.pathname)?.locale ?? 'en';
  const label = getPortfolioContent(locale).common.loading;

  return (
    <Suspense fallback={<div className="route-loading" role="status"><span aria-hidden="true" />{label}</div>}>
      {children}
    </Suspense>
  );
}

const pages: Record<RouteId, ReactNode> = {
  home: <HomePage />,
  projects: <ProjectsPage />,
  skills: <SkillsPage />,
  agenticDelivery: <MethodPage />,
  experience: <JourneyPage />,
  contact: <ContactPage />,
};

export function App() {
  return (
    <Routes>
      {Object.entries(historicalRedirects).map(([from, to]) => (
        <Route key={from} path={from} element={<Navigate to={to} replace />} />
      ))}
      <Route element={<SiteFrame />}>
        {routeDefinitions.flatMap((route) => (
          (['en', 'fr'] as const).map((locale) => (
            <Route
              key={`${locale}-${route.id}`}
              path={route.slugs[locale]}
              element={<LazyRoute>{pages[route.id]}</LazyRoute>}
            />
          ))
        ))}
      </Route>
      <Route path="*" element={<Navigate to="/en" replace />} />
    </Routes>
  );
}

import { lazy, Suspense, type ReactNode } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SiteFrame } from '@/components/SiteFrame';

const HomePage = lazy(() => import('@/pages/HomePage').then((module) => ({ default: module.HomePage })));
const JourneyPage = lazy(() => import('@/pages/JourneyPage').then((module) => ({ default: module.JourneyPage })));
const ProjectsPage = lazy(() => import('@/pages/ProjectsPage').then((module) => ({ default: module.ProjectsPage })));
const SkillsPage = lazy(() => import('@/pages/SkillsPage').then((module) => ({ default: module.SkillsPage })));
const MethodPage = lazy(() => import('@/pages/MethodPage').then((module) => ({ default: module.MethodPage })));
const ContactPage = lazy(() => import('@/pages/ContactPage').then((module) => ({ default: module.ContactPage })));

function LazyRoute({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<div className="route-loading" role="status"><span aria-hidden="true" />Chargement de la page…</div>}>
      {children}
    </Suspense>
  );
}

export function App() {
  return (
    <Routes>
      <Route element={<SiteFrame />}>
        <Route index element={<LazyRoute><HomePage /></LazyRoute>} />
        <Route path="/parcours" element={<LazyRoute><JourneyPage /></LazyRoute>} />
        <Route path="/projets" element={<LazyRoute><ProjectsPage /></LazyRoute>} />
        <Route path="/competences" element={<LazyRoute><SkillsPage /></LazyRoute>} />
        <Route path="/methode" element={<LazyRoute><MethodPage /></LazyRoute>} />
        <Route path="/contact" element={<LazyRoute><ContactPage /></LazyRoute>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

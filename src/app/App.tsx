import { Navigate, Route, Routes } from 'react-router-dom';
import { SiteFrame } from '@/components/SiteFrame';
import { HomePage } from '@/pages/HomePage';
import { JourneyPage } from '@/pages/JourneyPage';
import { ProjectsPage } from '@/pages/ProjectsPage';
import { SkillsPage } from '@/pages/SkillsPage';
import { MethodPage } from '@/pages/MethodPage';
import { ContactPage } from '@/pages/ContactPage';

export function App() {
  return (
    <Routes>
      <Route element={<SiteFrame />}>
        <Route index element={<HomePage />} />
        <Route path="/parcours" element={<JourneyPage />} />
        <Route path="/projets" element={<ProjectsPage />} />
        <Route path="/competences" element={<SkillsPage />} />
        <Route path="/methode" element={<MethodPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

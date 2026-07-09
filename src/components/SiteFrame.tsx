import { NavLink, Outlet } from 'react-router-dom';
import { profile, navigation } from '@/data/portfolioData';
import { Seo } from './Seo';
import { ScrollManager } from './ScrollManager';

const baseUrl = 'https://hasiniaina7.github.io';

export function SiteFrame() {
  const githubLink = profile.links.find((link) => link.kind === 'github')?.href ?? '#';
  const linkedinLink = profile.links.find((link) => link.kind === 'linkedin')?.href ?? '#';
  const portfolioLink = profile.links.find((link) => link.kind === 'portfolio')?.href ?? '#';
  const footerLinks = [
    { label: 'GitHub', href: githubLink },
    { label: 'LinkedIn', href: linkedinLink },
    { label: 'Portfolio', href: portfolioLink },
  ];

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Aller au contenu
      </a>
      <header className="site-header">
        <div className="site-header__inner">
          <NavLink className="brand" to="/" aria-label={`${profile.fullName}, accueil`}>
            <span className="brand__text">
              <strong>{profile.fullName}</strong>
              <span>{profile.role}</span>
            </span>
          </NavLink>
          <div className="site-header__actions">
            <nav className="site-nav" aria-label="Navigation principale">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `site-nav__link${isActive ? ' is-active' : ''}`}
                  end={item.path === '/'}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <NavLink className="site-cta" to="/contact">
              Échanger <span aria-hidden="true">→</span>
            </NavLink>
          </div>
        </div>
      </header>
      <main id="main-content" className="site-main">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="site-footer__brand">
            <div>
              <p className="site-footer__kicker">Senior full-stack, delivery produit, specs et production.</p>
              <p>
                {profile.location} · {profile.availability}
              </p>
            </div>
          </div>
          <NavLink className="site-footer__cta" to="/contact">
            Me contacter <span aria-hidden="true">→</span>
          </NavLink>
          <div className="site-footer__columns" aria-label="Liens de pied de page">
            <div className="site-footer__group">
              <p>Navigation</p>
              <div className="site-footer__links">
                {navigation.map((item) => (
                  <NavLink key={item.path} to={item.path}>
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="site-footer__group">
              <p>Canaux</p>
              <div className="site-footer__links">
                {footerLinks.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                ))}
                <NavLink to="/contact">Contact</NavLink>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <ScrollManager />
      <Seo baseUrl={baseUrl} />
    </div>
  );
}

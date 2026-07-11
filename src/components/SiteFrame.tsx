import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { profile, navigation } from '@/data/portfolioData';
import { Seo } from './Seo';
import { ScrollManager } from './ScrollManager';
import { PortfolioMotion } from './PortfolioMotion';

const baseUrl = 'https://hasiniaina7.github.io';

export function SiteFrame() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const socialLinks = profile.links.filter((link) => ['github', 'linkedin', 'portfolio'].includes(link.kind));

  useEffect(() => setMenuOpen(false), [location.pathname]);
  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Aller au contenu</a>
      <header className="site-header">
        <div className="site-header__inner">
          <NavLink className="brand" to="/">
            <span className="brand__mark brand__mark--portrait" aria-hidden="true">
              <picture>
                <source srcSet="/assets/media/hasiniaina-portrait-320.avif" type="image/avif" />
                <img src="/assets/media/hasiniaina-portrait-320.webp" alt="" width="320" height="400" />
              </picture>
            </span>
            <span className="brand__text"><strong>Hasiniaina Christian</strong><span>Full-Stack Senior</span></span><span className="sr-only">, accueil</span>
          </NavLink>
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}>
            <span className="sr-only">{menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}</span>
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
          <div className={`site-header__actions${menuOpen ? ' is-open' : ''}`}>
            <nav id="primary-navigation" className="site-nav" aria-label="Navigation principale">
              {navigation.map((item) => (
                <NavLink key={item.path} to={item.path} className={({ isActive }) => `site-nav__link${isActive ? ' is-active' : ''}`} end={item.path === '/'}>
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <NavLink className="site-cta" to="/contact">Me contacter <span aria-hidden="true">↗</span></NavLink>
          </div>
        </div>
      </header>
      <main id="main-content" className="site-main"><PortfolioMotion><Outlet /></PortfolioMotion></main>
      <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="site-footer__brand"><span className="brand__mark brand__mark--portrait" aria-hidden="true"><picture><source srcSet="/assets/media/hasiniaina-portrait-320.avif" type="image/avif" /><img src="/assets/media/hasiniaina-portrait-320.webp" alt="" width="320" height="400" /></picture></span><div><p className="site-footer__kicker">{profile.fullName}</p><p>{profile.location} · {profile.availability}</p></div></div>
          <div className="site-footer__columns">
            <div className="site-footer__group"><p>Navigation</p><div className="site-footer__links">{navigation.map((item) => <NavLink key={item.path} to={item.path}>{item.label}</NavLink>)}</div></div>
            <div className="site-footer__group"><p>Canaux</p><div className="site-footer__links">{socialLinks.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>)}<a href={`mailto:${profile.email}`}>E-mail</a></div></div>
          </div>
          <p className="site-footer__legal">Portfolio technique · Contenus et liens vérifiés</p>
        </div>
      </footer>
      <ScrollManager />
      <Seo baseUrl={baseUrl} />
    </div>
  );
}

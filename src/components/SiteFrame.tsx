import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router';
import { profile as verifiedProfile } from '@/data/portfolioData';
import { pathFor, routeDefinitions } from '@/data/localizedPortfolio';
import { usePortfolioLocale } from '@/hooks/usePortfolioLocale';
import { Seo } from './Seo';
import { ScrollManager } from './ScrollManager';
import { PortfolioMotion } from './PortfolioMotion';

const baseUrl = 'https://hasiniaina7.github.io';

export function SiteFrame() {
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const location = useLocation();
  const { locale, routeId, content } = usePortfolioLocale();
  const socialLinks = verifiedProfile.links.filter((link) => ['github', 'linkedin', 'portfolio'].includes(link.kind));
  const alternateLocale = locale === 'en' ? 'fr' : 'en';
  const menuOpen = menuPath === location.pathname;

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && setMenuPath(null);
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">{content.common.skipLink}</a>
      <header className="site-header">
        <div className="site-header__inner">
          <NavLink className="brand" to={pathFor(locale, 'home')}>
            <span className="brand__mark brand__mark--portrait" aria-hidden="true">
              <picture>
                <source srcSet="/assets/media/hasiniaina-portrait-320.avif" type="image/avif" />
                <img src="/assets/media/hasiniaina-portrait-320.webp" alt="" width="320" height="400" />
              </picture>
            </span>
            <span className="brand__text"><strong>Hasiniaina Christian</strong><span>{content.profile.role}</span></span>
          </NavLink>
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuPath(menuOpen ? null : location.pathname)}>
            <span className="sr-only">{menuOpen ? content.common.menuClose : content.common.menuOpen}</span>
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
          <div className={`site-header__actions${menuOpen ? ' is-open' : ''}`}>
            <nav id="primary-navigation" className="site-nav" aria-label={content.common.navigation}>
              {routeDefinitions.map((item) => (
                <NavLink key={item.id} to={item.slugs[locale]} className={({ isActive }) => `site-nav__link${isActive ? ' is-active' : ''}`} onClick={() => setMenuPath(null)} end>
                  {content.navigation[item.id]}
                </NavLink>
              ))}
            </nav>
            <NavLink
              className="locale-switch"
              to={pathFor(alternateLocale, routeId)}
              lang={alternateLocale}
              hrefLang={alternateLocale}
              aria-label={alternateLocale === 'en' ? 'Switch to English' : 'Passer en français'}
              onClick={() => setMenuPath(null)}
            >
              {alternateLocale.toUpperCase()}
            </NavLink>
            <NavLink className="site-cta" to={pathFor(locale, 'contact')} onClick={() => setMenuPath(null)}>{content.common.contact} <span aria-hidden="true">↗</span></NavLink>
          </div>
        </div>
      </header>
      <main id="main-content" className="site-main"><PortfolioMotion><Outlet /></PortfolioMotion></main>
      <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="site-footer__brand"><span className="brand__mark brand__mark--portrait" aria-hidden="true"><picture><source srcSet="/assets/media/hasiniaina-portrait-320.avif" type="image/avif" /><img src="/assets/media/hasiniaina-portrait-320.webp" alt="" width="320" height="400" /></picture></span><div><p className="site-footer__kicker">{content.profile.fullName}</p><p>{content.profile.based} · {content.profile.remote} · {content.profile.relocation}</p></div></div>
          <div className="site-footer__columns">
            <div className="site-footer__group"><p>{content.common.navigation}</p><div className="site-footer__links">{routeDefinitions.map((item) => <NavLink key={item.id} to={item.slugs[locale]}>{content.navigation[item.id]}</NavLink>)}</div></div>
            <div className="site-footer__group"><p>{content.common.channels}</p><div className="site-footer__links">{socialLinks.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>)}<a href={`mailto:${content.profile.email}`}>E-mail</a></div></div>
          </div>
          <p className="site-footer__legal">{content.common.verifiedContent}</p>
        </div>
      </footer>
      <ScrollManager />
      <Seo baseUrl={baseUrl} />
    </div>
  );
}

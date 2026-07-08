import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { seoByPath } from '@/data/portfolioData';

type SeoProps = {
  baseUrl: string;
};

function setMetaTag(selector: string, value: string) {
  const meta = document.querySelector<HTMLMetaElement>(selector);
  if (meta) {
    meta.setAttribute('content', value);
    return;
  }

  const created = document.createElement('meta');
  const match = selector.match(/\[([^=]+)="([^"]+)"\]/);
  if (!match?.[1] || !match[2]) return;
  created.setAttribute(match[1], match[2]);
  created.setAttribute('content', value);
  document.head.appendChild(created);
}

export function Seo({ baseUrl }: SeoProps) {
  const location = useLocation();

  useEffect(() => {
    const path = (location.pathname === '/' ? '/' : location.pathname) as keyof typeof seoByPath;
    const meta = seoByPath[path] ?? seoByPath['/'];
    const canonicalHref = new URL(meta.canonicalPath, baseUrl).toString();

    document.title = meta.title;
    document.documentElement.lang = 'fr';
    setMetaTag('meta[name="description"]', meta.description);
    setMetaTag('meta[property="og:title"]', meta.ogTitle);
    setMetaTag('meta[property="og:description"]', meta.ogDescription);
    setMetaTag('meta[property="og:image"]', `${baseUrl}/og-image.svg`);
    setMetaTag('meta[name="theme-color"]', '#fbfdff');

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalHref;
  }, [baseUrl, location.pathname]);

  return null;
}

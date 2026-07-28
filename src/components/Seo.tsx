import { useEffect } from 'react';
import { pathFor, type Locale } from '@/data/localizedPortfolio';
import { usePortfolioLocale } from '@/hooks/usePortfolioLocale';

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
  const { locale, routeId, content } = usePortfolioLocale();

  useEffect(() => {
    const meta = content.seo[routeId];
    const canonicalHref = new URL(pathFor(locale, routeId), baseUrl).toString();

    document.title = meta.title;
    document.documentElement.lang = locale;
    setMetaTag('meta[name="description"]', meta.description);
    setMetaTag('meta[property="og:title"]', meta.ogTitle);
    setMetaTag('meta[property="og:description"]', meta.ogDescription);
    setMetaTag('meta[property="og:image"]', `${baseUrl}/og-image.svg`);
    setMetaTag('meta[property="og:url"]', canonicalHref);
    setMetaTag('meta[property="og:type"]', 'website');
    setMetaTag('meta[property="og:locale"]', locale === 'en' ? 'en_US' : 'fr_FR');
    setMetaTag('meta[name="twitter:card"]', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', meta.ogTitle);
    setMetaTag('meta[name="twitter:description"]', meta.ogDescription);
    setMetaTag('meta[name="theme-color"]', '#f7f9ff');

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalHref;

    (['en', 'fr'] as Locale[]).forEach((alternateLocale) => {
      let alternate = document.querySelector<HTMLLinkElement>(`link[rel="alternate"][hreflang="${alternateLocale}"]`);
      if (!alternate) {
        alternate = document.createElement('link');
        alternate.rel = 'alternate';
        alternate.hreflang = alternateLocale;
        document.head.appendChild(alternate);
      }
      alternate.href = new URL(pathFor(alternateLocale, routeId), baseUrl).toString();
    });

    let structuredData = document.querySelector<HTMLScriptElement>('script[data-portfolio-person]');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.type = 'application/ld+json';
      structuredData.dataset.portfolioPerson = 'true';
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: content.profile.fullName,
      jobTitle: content.profile.role,
      email: `mailto:${content.profile.email}`,
      url: `${baseUrl}/`,
      homeLocation: { '@type': 'Country', name: 'Madagascar' },
      sameAs: [
        'https://github.com/hasiniaina7',
        'https://www.linkedin.com/in/hasiniaina-christian/',
      ],
    });
  }, [baseUrl, content, locale, routeId]);

  return null;
}

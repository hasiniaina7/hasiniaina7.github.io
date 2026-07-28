import { Link } from 'react-router';
import { getMediaAsset } from '@/data/mediaData';
import { pathFor } from '@/data/localizedPortfolio';
import { usePortfolioLocale } from '@/hooks/usePortfolioLocale';
import { ResponsiveMedia } from './ResponsiveMedia';

export function FinalCta() {
  const { locale, content } = usePortfolioLocale();

  return (
    <section className="final-cta">
      <div>
        <p className="section-heading__eyebrow">{content.finalCta.eyebrow}</p>
        <h2>{content.finalCta.title}</h2>
        <p>{content.finalCta.summary}</p>
        <div className="hero-actions">
          <Link className="button button--light" to={pathFor(locale, 'contact')}>{content.finalCta.primary}</Link>
          <a className="button button--ghost" href={`mailto:${content.profile.email}`}>{content.finalCta.email}</a>
        </div>
      </div>
      <ResponsiveMedia asset={getMediaAsset('cta-modular-system')} sizes="(max-width: 768px) 80vw, 420px" className="final-cta__media" alt="" />
    </section>
  );
}

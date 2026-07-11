import { Link } from 'react-router-dom';
import { getMediaAsset } from '@/data/mediaData';
import { ResponsiveMedia } from './ResponsiveMedia';

export function FinalCta() {
  return (
    <section className="final-cta">
      <div>
        <p className="section-heading__eyebrow">Construisons utile</p>
        <h2>Prêt à construire votre prochain produit&nbsp;?</h2>
        <p>Échangeons sur vos contraintes métier, vos risques et la meilleure manière de livrer une solution fiable.</p>
        <div className="hero-actions">
          <Link className="button button--light" to="/contact">Démarrer un échange</Link>
          <a className="button button--ghost" href="mailto:hasiniainachristian7@gmail.com">Envoyer un e-mail</a>
        </div>
      </div>
      <ResponsiveMedia asset={getMediaAsset('cta-modular-system')} sizes="(max-width: 768px) 80vw, 420px" className="final-cta__media" />
    </section>
  );
}

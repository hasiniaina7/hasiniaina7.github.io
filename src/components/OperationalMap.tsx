import { getMediaAsset } from '@/data/mediaData';

const mobileMap = getMediaAsset('operational-map-mobile');
const mobileAvif = mobileMap.variants.filter((variant) => variant.format === 'avif').map((variant) => `${variant.src} ${variant.width}w`).join(', ');
const mobileWebp = mobileMap.variants.filter((variant) => variant.format === 'webp').map((variant) => `${variant.src} ${variant.width}w`).join(', ');

export function OperationalMap() {
  return (
    <figure className="operation-map" aria-labelledby="operation-map-title">
      <figcaption id="operation-map-title" className="sr-only">
        Carte opérationnelle montrant les flux de données, synchronisation terrain, paiements et points de contrôle IA entre Madagascar, Afrique et Europe.
      </figcaption>
      <picture className="operation-map__picture">
        <source media="(max-width: 700px)" type="image/avif" srcSet={mobileAvif} sizes="calc(100vw - 1.25rem)" />
        <source media="(max-width: 700px)" type="image/webp" srcSet={mobileWebp} sizes="calc(100vw - 1.25rem)" />
        <source srcSet="/assets/field-to-cloud-blueprint.webp" type="image/webp" />
        <img
          src="/assets/field-to-cloud-blueprint.png"
          width="1400"
          height="721"
          loading="lazy"
          decoding="async"
          alt="Carte opérationnelle reliant Madagascar, l’Afrique et l’Europe avec flux applicatifs, synchronisation terrain, événements de paiement, routage sécurisé, contrôle IA et revue humaine."
        />
      </picture>
      <p id="operation-map-summary" className="operation-map__summary">
        Cette vue résume le positionnement opérationnel: applications terrain hors ligne, synchronisation, paiements tracés, sécurité, points de contrôle IA et relais humain.
      </p>
    </figure>
  );
}

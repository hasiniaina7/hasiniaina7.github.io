export function OperationalMap() {
  return (
    <figure className="operation-map" aria-labelledby="operation-map-title">
      <figcaption id="operation-map-title" className="sr-only">
        Carte opérationnelle montrant les flux de données, synchronisation terrain, paiements et points de contrôle IA entre Madagascar, Afrique et Europe.
      </figcaption>
      <picture className="operation-map__picture">
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

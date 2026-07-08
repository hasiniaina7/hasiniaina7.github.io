export function OperationalMap() {
  return (
    <figure className="operation-map" aria-labelledby="operation-map-title">
      <figcaption id="operation-map-title" className="sr-only">
        Base à Madagascar, clients en Afrique et collaboration possible avec des équipes Europe.
      </figcaption>
      <svg viewBox="0 0 760 480" role="img" aria-describedby="operation-map-summary">
        <defs>
          <pattern id="map-grid-pattern" width="38" height="38" patternUnits="userSpaceOnUse">
            <path d="M 38 0 L 0 0 0 38" fill="none" stroke="#c8d6ee" strokeWidth="1" opacity="0.45" />
          </pattern>
          <filter id="map-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="14" stdDeviation="18" floodColor="#061c4f" floodOpacity="0.14" />
          </filter>
        </defs>
        <rect width="760" height="480" rx="8" fill="#f6f9ff" />
        <rect width="760" height="480" rx="8" fill="url(#map-grid-pattern)" />
        <path className="operation-map__land operation-map__land--europe" d="M421 82l48-18 61 18 39 44-18 49-62 24-60-17-34-46z" />
        <path className="operation-map__land operation-map__land--africa" d="M362 158l80 10 64 66-8 91-48 72-74 28-66-38-28-91 19-83z" />
        <path className="operation-map__land operation-map__land--madagascar" d="M555 302l28 24 4 57-22 64-27-18-10-58 8-45z" />
        <path className="operation-map__route operation-map__route--blue" d="M548 116 C500 150 482 177 430 225 C380 272 332 286 238 318" />
        <path className="operation-map__route operation-map__route--green" d="M565 366 C514 330 480 308 420 292 C352 273 309 286 238 318" />
        <path className="operation-map__route operation-map__route--orange" d="M565 366 C529 314 510 260 506 205 C500 166 512 136 548 116" />
        <g filter="url(#map-shadow)">
          <g className="operation-map__node" transform="translate(122 286)">
            <rect width="166" height="64" rx="8" />
            <text x="18" y="28">Madagascar</text>
            <text x="18" y="48">terrain + production</text>
          </g>
          <g className="operation-map__node operation-map__node--blue" transform="translate(360 202)">
            <rect width="154" height="64" rx="8" />
            <text x="18" y="28">Afrique</text>
            <text x="18" y="48">clients + opérations</text>
          </g>
          <g className="operation-map__node operation-map__node--violet" transform="translate(488 84)">
            <rect width="158" height="64" rx="8" />
            <text x="18" y="28">Europe</text>
            <text x="18" y="48">remote + B2B</text>
          </g>
        </g>
        <g className="operation-map__legend" transform="translate(34 34)">
          <rect width="246" height="108" rx="8" />
          <circle cx="24" cy="28" r="5" className="legend-blue" />
          <text x="42" y="33">Flux applicatifs</text>
          <circle cx="24" cy="58" r="5" className="legend-green" />
          <text x="42" y="63">Données terrain</text>
          <circle cx="24" cy="88" r="5" className="legend-orange" />
          <text x="42" y="93">Paiement / IA / handoff</text>
        </g>
      </svg>
      <p id="operation-map-summary" className="operation-map__summary">
        Le travail se concentre sur des systèmes web, mobile, réseau, paiement et automatisation utilisables entre équipes terrain, clients B2B et collaboration distante.
      </p>
    </figure>
  );
}

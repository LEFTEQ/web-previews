/** Jednoduchá linková kresba kráčivého rypadla na svahu (dekorace). */
export function WalkingExcavator({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 320 150" fill="none" aria-hidden="true" focusable="false">
      <path d="M0 138 L110 126 L320 62" stroke="var(--color-clay)" strokeWidth="3" strokeLinecap="round" />
      <path d="M0 146 L110 134 L320 70" stroke="var(--color-clay)" strokeWidth="1" strokeDasharray="4 6" opacity=".6" />
      <g transform="translate(0 -4) rotate(-16 175 100)" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <line x1="150" y1="70" x2="122" y2="98" />
        <line x1="200" y1="70" x2="228" y2="98" />
        <circle cx="120" cy="104" r="9" />
        <circle cx="230" cy="104" r="9" />
        <rect x="144" y="56" width="62" height="16" rx="2" />
        <rect x="168" y="30" width="32" height="26" rx="3" />
        <path d="M176 36 h16 v12 h-16 z" strokeWidth="1.6" />
        <path d="M150 58 L112 22 L82 52" />
        <path d="M82 52 l-12 13 l15 4 z" />
        <line x1="206" y1="64" x2="222" y2="78" />
        <path d="M222 78 l10 4" />
      </g>
    </svg>
  );
}

/** Řez: protlak pod komunikací. */
export function ProtlakSection({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 360 170" role="img" aria-labelledby="protlak-title" focusable="false">
      <title id="protlak-title">Schéma: potrubí vedené protlakem pod silnicí ze startovací do cílové jámy</title>
      <rect x="0" y="44" width="360" height="126" fill="#C9A27F" />
      <rect x="0" y="44" width="360" height="8" fill="#8A6A4C" />
      <rect x="118" y="34" width="124" height="14" fill="#3B2E22" />
      <path d="M128 41 h14 M160 41 h14 M192 41 h14 M224 41 h10" stroke="#FAF8F3" strokeWidth="2" />
      <rect x="26" y="44" width="54" height="96" fill="#FAF8F3" stroke="#3B2E22" strokeWidth="2" />
      <rect x="282" y="44" width="52" height="96" fill="#FAF8F3" stroke="#3B2E22" strokeWidth="2" />
      <line x1="70" y1="118" x2="292" y2="118" stroke="#1E6FB8" strokeWidth="9" strokeLinecap="round" />
      <path d="M44 118 h18" stroke="#3B2E22" strokeWidth="4" />
      <path d="M60 112 l8 6 l-8 6" fill="none" stroke="#3B2E22" strokeWidth="2.4" />
      <g fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#3B2E22">
        <text x="180" y="24" textAnchor="middle">komunikace</text>
        <text x="53" y="160" textAnchor="middle">startovací jáma</text>
        <text x="308" y="160" textAnchor="middle">cílová jáma</text>
        <text x="180" y="104" textAnchor="middle">protlak</text>
      </g>
    </svg>
  );
}

/** Statický řez terénem — výchozí obsah i záloha bez WebGL/JS. */
export function GroundFallback() {
  return (
    <svg className="h-full w-full" viewBox="0 0 400 300" aria-hidden="true" focusable="false">
      <rect x="30" y="60" width="340" height="34" fill="#3B2E22" />
      <rect x="30" y="94" width="340" height="96" fill="#A8714A" />
      <rect x="30" y="190" width="340" height="60" fill="#8A5C3C" />
      <rect x="30" y="250" width="340" height="30" fill="#9C978D" />
      <rect x="230" y="50" width="140" height="10" fill="#4A4743" />
      <circle cx="110" cy="140" r="15" fill="#1E6FB8" stroke="#FAF8F3" strokeWidth="2" />
      <circle cx="200" cy="170" r="20" fill="#6B4A2B" stroke="#FAF8F3" strokeWidth="2" />
      <circle cx="290" cy="112" r="5" fill="#C8321E" />
      <circle cx="304" cy="112" r="5" fill="#C8321E" />
      <circle cx="318" cy="112" r="5" fill="#C8321E" />
      <g fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#3B2E22">
        <text x="110" y="40" textAnchor="middle">vodovod · kanalizace · kabely</text>
      </g>
    </svg>
  );
}

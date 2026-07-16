// ——— data: the five services become the plan legend ———
const legend = [
  {
    n: "01",
    name: "Návrhy zahrad",
    tag: "Q. robur ×3",
    text: "Kompletní projekt zahrady od osazovacího plánu po výběr dřevin. Víte předem, kde co poroste — než přijede první bagr.",
  },
  {
    n: "02",
    name: "Veřejná zeleň",
    tag: "Tilia cordata",
    text: "Parky, sídlištní záhony a stromořadí pro obce na Strakonicku. Návrh, výsadba i následná péče v jednom.",
  },
  {
    n: "03",
    name: "Krajinná zeleň",
    tag: "Corylus avellana",
    text: "Remízky, aleje a protierozní výsadby, které drží pošumavskou krajinu pohromadě.",
  },
  {
    n: "04",
    name: "Údržba zeleně",
    tag: "Buxus / Taxus",
    text: "Sekání, řez živých plotů, tvarování stromů a péče o záhony v pravidelných cyklech přes celý rok.",
  },
  {
    n: "05",
    name: "Stavební práce",
    tag: "kontura · 1:100",
    text: "Cesty, opěrné zídky, závlahy a dětská hřiště — drobné stavby, které zahradu drží v provozu.",
  },
];

// reusable plant symbol: circle + crosshair, in a group we can animate
function Plant({
  cx,
  cy,
  r,
  delay,
  className,
}: {
  cx: number;
  cy: number;
  r: number;
  delay: number;
  className?: string;
}) {
  return (
    <g
      className={`plant ${className ?? ""}`}
      style={{ animationDelay: `${delay}s`, transformOrigin: `${cx}px ${cy}px` }}
    >
      <circle cx={cx} cy={cy} r={r} className="plant-ring" />
      <line x1={cx - r - 4} y1={cy} x2={cx + r + 4} y2={cy} className="plant-hair" />
      <line x1={cx} y1={cy - r - 4} x2={cx} y2={cy + r + 4} className="plant-hair" />
      <circle cx={cx} cy={cy} r={2.2} className="plant-dot" />
    </g>
  );
}

export default function Page() {
  return (
    <main className="page">
      {/* ————————————————— HERO ————————————————— */}
      <header className="hero" aria-label="Jihočeské zahrady — úvod">
        <div className="grid-overlay" aria-hidden="true" />

        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-mark">49°15′N · 13°54′E</span>
              <span className="eyebrow-sep">/</span>
              Strakonice · Jižní Čechy
            </p>

            <div className="wordmark" aria-label="Jihočeské zahrady, s.r.o.">
              <span className="wordmark-line">Jihočeské</span>
              <span className="wordmark-line wordmark-accent">zahrady</span>
              <span className="wordmark-sub">s.r.o. · zahradní architektura</span>
            </div>

            <h1 className="hero-title">
              Napřed výkres,
              <br />
              <em>potom</em> zahrada.
            </h1>

            <p className="hero-lead">
              Navrhujeme, zakládáme a udržujeme zahrady i veřejnou zeleň v
              Pošumaví. Každou plochu nejdřív nakreslíme do osazovacího plánu —
              teprve pak sázíme první keř.
            </p>
          </div>

          {/* the plan drafts itself */}
          <div className="hero-plan" aria-hidden="true">
            <svg viewBox="0 0 400 400" className="plan-svg" role="presentation">
              {/* north arrow — sever */}
              <g className="tag" style={{ animationDelay: "1.25s" }}>
                <line x1={370} y1={54} x2={370} y2={22} className="north-line" />
                <path d="M370 18 l-5 10 h10 z" className="north-head" />
                <text x={370} y={68} className="north-label">S</text>
              </g>

              {/* dashed bed outline */}
              <path
                className="bed"
                style={{ animationDelay: "0.2s" }}
                d="M150 62 C240 42 332 72 340 142 C348 212 300 252 220 252 C140 252 92 210 100 142 C108 92 120 74 150 62 Z"
              />

              {/* contour lines that stroke in */}
              <path
                className="contour"
                pathLength={1}
                style={{ animationDelay: "0s" }}
                d="M18 168 C92 128 162 208 244 158 S362 208 392 158"
              />
              <path
                className="contour"
                pathLength={1}
                style={{ animationDelay: "0.18s" }}
                d="M10 226 C92 196 172 256 252 216 S372 256 396 216"
              />
              <path
                className="contour"
                pathLength={1}
                style={{ animationDelay: "0.34s" }}
                d="M30 288 C102 266 182 306 262 276 S362 306 392 276"
              />

              {/* plant symbols pop into place */}
              <Plant cx={140} cy={128} r={46} delay={0.6} />
              <Plant cx={286} cy={104} r={27} delay={0.72} />
              <Plant cx={316} cy={196} r={19} delay={0.84} />
              <Plant cx={110} cy={214} r={16} delay={0.94} />
              <Plant cx={148} cy={236} r={13} delay={1.02} />
              <Plant cx={118} cy={252} r={13} delay={1.1} />

              {/* mono tags settle last */}
              <text x={140} y={130} className="pl-tag" style={{ animationDelay: "1.32s" }}>
                01
              </text>
              <text x={318} y={90} className="pl-tag pl-tag-lead" style={{ animationDelay: "1.4s" }}>
                Q. robur
              </text>
              <text x={344} y={200} className="pl-tag pl-tag-lead" style={{ animationDelay: "1.46s" }}>
                Corylus
              </text>
            </svg>
          </div>
        </div>
      </header>

      {/* ————————————————— SLUŽBY / LEGENDA ————————————————— */}
      <section className="section reveal-group" aria-labelledby="sluzby-nadpis">
        <div className="section-head reveal">
          <p className="sheet">02 · Legenda výkresu</p>
          <h2 id="sluzby-nadpis" className="section-title">
            Pět čar v legendě,
            <br />
            pět služeb.
          </h2>
          <p className="section-note">
            Každou položku umíme dodat samostatně, nebo jako celý cyklus —
            návrh, výsadba i následná péče.
          </p>
        </div>

        <ol className="legend">
          {legend.map((item, i) => (
            <li
              className="legend-row reveal"
              key={item.n}
              style={{ ["--i" as string]: i }}
            >
              <div className="legend-sym" aria-hidden="true">
                <svg viewBox="0 0 40 40" role="presentation">
                  <circle cx={20} cy={20} r={13} className="plant-ring" />
                  <line x1={2} y1={20} x2={38} y2={20} className="plant-hair" />
                  <line x1={20} y1={2} x2={20} y2={38} className="plant-hair" />
                  <circle cx={20} cy={20} r={2} className="plant-dot" />
                </svg>
              </div>
              <span className="legend-num">{item.n}</span>
              <div className="legend-body">
                <div className="legend-top">
                  <h3 className="legend-name">{item.name}</h3>
                  <span className="legend-tag">{item.tag}</span>
                </div>
                <p className="legend-text">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ————————————————— O NÁS / TITULNÍ BLOK ————————————————— */}
      <section className="section section-about reveal-group" aria-labelledby="onas-nadpis">
        <div className="about-grid">
          <div className="about-copy reveal">
            <p className="sheet">03 · Titulní blok</p>
            <h2 id="onas-nadpis" className="section-title">
              Navrhneme, založíme,
              <br />
              staráme se dál.
            </h2>
            <p className="about-text">
              Jsme parta zahradníků a projektantů ze Strakonic. Umíme rodinné
              zahrady i veřejnou a krajinnou zeleň pro obce — od prvního
              osazovacího plánu přes výsadbu až po pravidelný řez a sekání.
            </p>
            <p className="about-text">
              Celý životní cyklus zahrady tak zůstává pod jednou firmou. Díky
              tomu vypadá vaše plocha stejně dobře i za deset let, ne jen v den
              předání.
            </p>
          </div>

          {/* architect's title block */}
          <div className="titleblock reveal" role="group" aria-label="Údaje o firmě">
            <div className="tb-row tb-head">
              <span className="tb-key">Ateliér</span>
              <span className="tb-val">Jihočeské zahrady s.r.o.</span>
            </div>
            <div className="tb-grid">
              <div className="tb-cell">
                <span className="tb-key">Lokalita</span>
                <span className="tb-val">Holečkova, Strakonice 386 01</span>
              </div>
              <div className="tb-cell">
                <span className="tb-key">Působnost</span>
                <span className="tb-val">Strakonicko · Pošumaví</span>
              </div>
              <div className="tb-cell">
                <span className="tb-key">Stupeň</span>
                <span className="tb-val">Návrh + realizace + údržba</span>
              </div>
              <div className="tb-cell">
                <span className="tb-key">Měřítko</span>
                <span className="tb-val">1 : 100</span>
              </div>
              <div className="tb-cell">
                <span className="tb-key">Telefon</span>
                <span className="tb-val">+420 604 586 330</span>
              </div>
              <div className="tb-cell">
                <span className="tb-key">E-mail</span>
                <span className="tb-val">info@jhc-garden.cz</span>
              </div>
            </div>
            <div className="tb-row tb-foot">
              <span className="tb-key">List</span>
              <span className="tb-val tb-mono">01 / 01 · vyd. 2025</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

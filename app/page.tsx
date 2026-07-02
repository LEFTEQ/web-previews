import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PETAKS s.r.o. — Servis plynových spotřebičů a topení, Liberec",
  description:
    "Autorizovaný servis plynových teplovzdušných jednotek a infrazářičů ApenGroup, Lersen, GEA a Immergas. Pravidelné roční prohlídky, opravy a havarijní zásahy v Liberci a okolí. Volejte +420 733 500 624.",
  openGraph: {
    title: "PETAKS s.r.o. — plynařství Liberec",
    description:
      "Servis a roční prohlídky plynových spotřebičů, infrazářičů a teplovzdušných jednotek. Přes 20 let praxe v Liberci a okolí.",
    type: "website",
    locale: "cs_CZ",
  },
};

const brands = [
  {
    name: "ApenGroup",
    detail: "Aermax · Aermax PO Plus · Rapid",
    scope: "Prodej, instalace a opravy teplovzdušných jednotek a infrazářičů.",
  },
  {
    name: "Lersen",
    detail: "Air Mix · Penta · IMD Inframax · Alfa",
    scope: "Opravy a pravidelné roční prohlídky jednotek a infrazářičů.",
  },
  {
    name: "GEA LVZ",
    detail: "Sahara Maxx HG · tmavé infrazářiče RAY G",
    scope: "Servis a prodej plynových sahar a tmavých infrazářičů.",
  },
  {
    name: "Vips solar / Immergas",
    detail: "řada Vips solar · Immergas · agregáty Technoklima",
    scope: "Autorizovaný servis od roku 2011 — s razítkem výrobce.",
  },
];

const services = [
  {
    tag: "PROHLÍDKA",
    title: "Roční prohlídka plynového zařízení",
    text: "Změříme tlak, zkontrolujeme těsnost, vyčistíme hořák a vystavíme protokol. Termín pohlídáme za vás — ozveme se, až se bude blížit další.",
  },
  {
    tag: "OPRAVA",
    title: "Oprava a havarijní zásah",
    text: "Nehřeje hala, zapáchá plyn nebo zářič vypadává? Zavolejte — u havárií jezdíme přednostně, náhradní díly na běžné jednotky vozíme s sebou.",
  },
  {
    tag: "INSTALACE",
    title: "Instalace nové jednotky či infrazářiče",
    text: "Pomůžeme vybrat výkon podle velikosti haly, jednotku dodáme, zapojíme a zaškolíme obsluhu. Vše od montáže po úklid.",
  },
  {
    tag: "VODA · TOPENÍ · ELEKTRO",
    title: "Instalatérské a elektro práce",
    text: "Drobné vodoinstalatérské, elektroinstalační a zámečnické práce k tomu — nemusíte shánět tři řemeslníky, když stačí jeden.",
  },
];

export default function Page() {
  return (
    <main className="pk">
      {/* ============ HERO ============ */}
      <header className="pk-hero">
        <div className="pk-hero-inner">
          <div className="pk-topbar">
            <span className="pk-wordmark" aria-label="PETAKS s.r.o.">
              PET<span className="pk-wordmark-flame">A</span>KS
              <span className="pk-wordmark-sro">s.r.o.</span>
            </span>
            <a className="pk-topbar-tel" href="tel:+420733500624">
              +420 733 500 624
            </a>
          </div>

          <div className="pk-hero-grid">
            <div className="pk-hero-copy">
              <p className="pk-eyebrow">
                Plynařství · Liberec a okolí · přes 20 let praxe
              </p>
              <h1 className="pk-h1">
                Váš plyn hoří
                <br />
                <em>modře.</em>
                <br />
                Ne žlutě.
              </h1>
              <p className="pk-lede">
                Žlutý plamen znamená špatné spalování — a to je přesně to, co při
                roční prohlídce odhalíme dřív, než z toho bude problém.
                Servisujeme plynové teplovzdušné jednotky, infrazářiče a kotle
                v halách, dílnách i domech po celém Liberecku.
              </p>
              <div className="pk-hero-actions">
                <a className="pk-btn pk-btn-flame" href="tel:+420733500624">
                  Zavolat servis
                </a>
                <a className="pk-btn pk-btn-ghost" href="mailto:info@petaks.cz">
                  Napsat e‑mail
                </a>
              </div>
            </div>

            {/* Signature: manometrová stupnice plamene */}
            <div className="pk-gauge" aria-hidden="true">
              <svg
                viewBox="0 0 340 340"
                className="pk-gauge-svg"
                role="presentation"
              >
                <circle cx="170" cy="170" r="158" className="pk-gauge-rim" />
                <circle cx="170" cy="170" r="140" className="pk-gauge-face" />
                {/* stupnice */}
                <g className="pk-gauge-ticks">
                  <line x1="60" y1="170" x2="78" y2="170" />
                  <line x1="84" y1="96" x2="98" y2="108" />
                  <line x1="170" y1="48" x2="170" y2="66" />
                  <line x1="256" y1="96" x2="242" y2="108" />
                  <line x1="280" y1="170" x2="262" y2="170" />
                </g>
                {/* modrý plamen ve středu */}
                <g className="pk-gauge-flame">
                  <path
                    d="M170 96c10 26 40 44 40 78 0 26-18 46-40 46s-40-20-40-46c0-34 30-52 40-78z"
                    className="pk-flame-outer"
                  />
                  <path
                    d="M170 142c6 14 20 22 20 38 0 14-9 24-20 24s-20-10-20-24c0-16 14-24 20-38z"
                    className="pk-flame-inner"
                  />
                </g>
                {/* ručička */}
                <g className="pk-gauge-needle">
                  <line x1="170" y1="170" x2="170" y2="270" />
                  <circle cx="170" cy="170" r="7" />
                </g>
                <text x="170" y="306" className="pk-gauge-label">
                  kPa · TĚSNOST OK
                </text>
              </svg>
              <p className="pk-gauge-caption">
                Každou prohlídku končíme tlakovou zkouškou a protokolem.
              </p>
            </div>
          </div>

          <ul className="pk-hero-strip">
            <li>Roční prohlídky s protokolem</li>
            <li>Havarijní opravy přednostně</li>
            <li>Autorizace Vips solar &amp; Immergas</li>
          </ul>
        </div>
      </header>

      {/* ============ SLUŽBY ============ */}
      <section className="pk-section pk-services" aria-labelledby="sluzby">
        <div className="pk-container">
          <p className="pk-eyebrow pk-eyebrow-dark">Co pro vás uděláme</p>
          <h2 id="sluzby" className="pk-h2">
            Od roční prohlídky
            <br />
            po novou jednotku v hale
          </h2>

          <div className="pk-service-grid">
            {services.map((s) => (
              <article className="pk-card" key={s.title}>
                <p className="pk-card-tag">{s.tag}</p>
                <h3 className="pk-card-title">{s.title}</h3>
                <p className="pk-card-text">{s.text}</p>
              </article>
            ))}
          </div>

          <div className="pk-brands">
            <h3 className="pk-brands-title">Značky, které známe do šroubku</h3>
            <div className="pk-brand-rows">
              {brands.map((b) => (
                <div className="pk-brand-row" key={b.name}>
                  <span className="pk-brand-name">{b.name}</span>
                  <span className="pk-brand-detail">{b.detail}</span>
                  <span className="pk-brand-scope">{b.scope}</span>
                </div>
              ))}
            </div>
            <p className="pk-brands-note">
              Máte jiné plynové zařízení? Přijedeme, prohlédneme ho a řekneme
              rovnou, jestli si na něj troufáme. Cenu vždy domlouváme předem —
              podle rozsahu práce a vzdálenosti, bez překvapení na faktuře.
            </p>
          </div>
        </div>
      </section>

      {/* ============ DŮVĚRA ============ */}
      <section className="pk-section pk-trust" aria-labelledby="duvera">
        <div className="pk-container">
          <div className="pk-trust-grid">
            <div className="pk-trust-copy">
              <p className="pk-eyebrow">Proč lidé volají zpátky nám</p>
              <h2 id="duvera" className="pk-h2 pk-h2-light">
                Přes 20 let stejné číslo,
                <br />
                stejný člověk, stejná práce
              </h2>
              <p className="pk-trust-text">
                PETAKS není call centrum. Když zavoláte, mluvíte rovnou s
                technikem, který k vám pak přijede — zná vaši kotelnu, vaši
                halu i vaše zářiče z minulého roku. Držíme si osvědčení a
                autorizace výrobců, takže servisem nepřijdete o záruku.
              </p>
              <ul className="pk-trust-list">
                <li>
                  <strong>Liberec a okolí</strong> — jsme na místě rychle,
                  cestu neúčtujeme jako hlavní položku.
                </li>
                <li>
                  <strong>Osvědčení a autorizace</strong> — pro plynová
                  zařízení i servis Vips solar a Immergas od roku 2011.
                </li>
                <li>
                  <strong>Termíny hlídáme my</strong> — před další roční
                  prohlídkou se ozveme sami.
                </li>
              </ul>
            </div>

            <figure className="pk-quote">
              <blockquote>
                <p>
                  „Pan Suchomel vždy naslouchá našim potřebám a pokaždé nám
                  vyšel vstříc — i když šlo o nečekané havarijní stavy. Musím
                  vyzdvihnout rychlost, přesnost, spolehlivost a kvalitu.
                  Vřele doporučuji.“
                </p>
              </blockquote>
              <figcaption>
                <span className="pk-quote-name">Petr Antes</span>
                <span className="pk-quote-place">zákazník, Liberec</span>
              </figcaption>
              <div className="pk-quote-facts">
                <div>
                  <span className="pk-fact-num">20+</span>
                  <span className="pk-fact-label">let na trhu</span>
                </div>
                <div>
                  <span className="pk-fact-num">4</span>
                  <span className="pk-fact-label">autorizované značky</span>
                </div>
                <div>
                  <span className="pk-fact-num">1</span>
                  <span className="pk-fact-label">číslo na technika</span>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}

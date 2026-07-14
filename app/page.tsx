const services = [
  {
    title: "Prodej nemovitosti",
    text: "Stanovíme cenu podle skutečných obchodů v Liberci, připravíme prezentaci a provedeme vás jednáním až k předání klíčů.",
    tag: "Odhad · příprava · prodej",
  },
  {
    title: "Koupě a pronájem",
    text: "Pomůžeme prověřit stav nemovitosti, smlouvy i financování, abyste se mohli rozhodnout bez zbytečného tlaku.",
    tag: "Výběr · prověření · smlouvy",
  },
  {
    title: "Financování bydlení",
    text: "Reality a finance řešíme společně. Hned víte, na jaké bydlení dosáhnete a co bude následovat.",
    tag: "Rozpočet · hypotéka · pojištění",
  },
];

const facts = [
  { value: "13 590", label: "prodaných nemovitostí od roku 2010" },
  { value: "23 let", label: "zkušeností skupiny Bidli na českém trhu" },
  { value: "749", label: "specialistů napříč bydlením a financemi" },
];

export default function Home() {
  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#nahoru" aria-label="Bidli Reality Liberec – úvod">
            <span className="wordmark-roof" aria-hidden="true" />
            <span>bidli</span>
            <small>reality · Liberec</small>
          </a>

          <nav className="desktop-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Jak pomůžeme</a>
            <a href="#duvera">Proč Bidli</a>
          </nav>

          <a className="header-action" href="#sluzby">
            Prodat nemovitost
            <span aria-hidden="true">↗</span>
          </a>
        </header>

        <div className="hero-grid" id="nahoru">
          <div className="hero-copy">
            <p className="eyebrow">
              <span>Liberec a okolí</span>
              <span className="eyebrow-line" aria-hidden="true" />
              <span>Reality</span>
            </p>

            <h1 id="hero-title">
              Bydlení pod
              <span>Ještědem.</span>
              Prodané s hlavou.
            </h1>

            <p className="hero-lead">
              Známe hodnotu libereckých bytů, domů i pozemků. Od prvního odhadu po podpis smlouvy máte jednoho partnera pro reality i financování.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#sluzby">
                Chci prodat nemovitost
                <span aria-hidden="true">→</span>
              </a>
              <a className="text-link" href="#duvera">Poznat náš postup</a>
            </div>
          </div>

          <div className="property-frame">
            <div className="contours" aria-hidden="true">
              <svg viewBox="0 0 680 760" preserveAspectRatio="none">
                <path d="M-40 132C87 41 192 54 268 125s157 92 257 35 170-49 214-9" />
                <path d="M-43 174c134-91 233-65 302 3s157 87 259 27 174-41 218 11" />
                <path d="M-40 217c129-79 222-52 285 13s159 85 265 23 179-33 226 22" />
                <path d="M-35 565c117-65 212-50 282 8s154 69 256 12 183-40 230 12" />
                <path d="M-40 610c121-68 220-49 289 8s153 66 253 11 183-35 234 17" />
              </svg>
            </div>

            <div className="parcel-image">
              <img
                src="/hero.webp"
                alt="Rezidenční nemovitost v krajině Liberecka pod Ještědem"
              />
            </div>

            <div className="property-passport" aria-label="Lokalita nabídky">
              <span className="passport-code">LIB / 001</span>
              <span className="passport-place">Liberec</span>
              <span className="passport-detail">50.7663° N<br />15.0543° E</span>
            </div>

            <p className="image-note">Místní znalost.<br />Celý servis pod jednou střechou.</p>
          </div>
        </div>

        <a className="mobile-action" href="#sluzby">Chci prodat nemovitost <span aria-hidden="true">→</span></a>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="section-kicker">Co právě řešíte?</p>
          <h2 id="services-title">Jedna adresa pro celý obchod.</h2>
          <p>Vyberte situaci, ve které jste. Navážeme konkrétním postupem, ne obecným formulářem.</p>
        </div>

        <div className="services-layout">
          <div className="services-image-wrap">
            <img
              src="/section-1.webp"
              alt="Realitní specialista při prohlídce světlého interiéru v Liberci"
            />
            <div className="image-label">
              <span>Od odhadu</span>
              <span>k předání</span>
            </div>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div>
                  <p className="service-tag">{service.tag}</p>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                <span className="card-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" id="duvera" aria-labelledby="trust-title">
        <div className="trust-visual">
          <img
            src="/section-2.webp"
            alt="Detail předání klíčů novému majiteli nemovitosti"
          />
          <div className="key-line" aria-hidden="true">
            <span />
            <span />
          </div>
        </div>

        <div className="trust-content">
          <p className="section-kicker">Zázemí, které je vidět v praxi</p>
          <h2 id="trust-title">Klíče si předáváte jednou. Jistotu potřebujete celou cestu.</h2>
          <p className="trust-intro">
            V Liberci řešíme nemovitost v souvislostech: reálnou prodejní cenu, kvalitní prezentaci, bezpečné smlouvy i návazné financování. Nemusíte koordinovat několik různých firem.
          </p>

          <div className="facts" aria-label="Zkušenosti skupiny Bidli">
            {facts.map((fact) => (
              <div className="fact" key={fact.value}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </div>
            ))}
          </div>

          <div className="freshness">
            <span className="freshness-dot" aria-hidden="true" />
            <p><strong>Informace ověřeny 10. 7. 2026</strong><br />Aktuální přehled služeb pro Liberec a okolí.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

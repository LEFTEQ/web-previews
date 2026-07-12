const services = [
  {
    title: "Vrtané studny",
    text: "Navrhneme vrt, provedeme realizaci a osadíme montážní šachtu pro rodinný dům, chatu i provoz.",
    tag: "vrt • pažení • šachta",
  },
  {
    title: "Kopané studny",
    text: "Postavíme novou kopanou studnu nebo obnovíme stávající zdroj včetně prohloubení vrtem.",
    tag: "výstavba • prohloubení",
  },
  {
    title: "Voda až ke kohoutku",
    text: "Doplníme čerpadlo, domácí či průmyslovou vodárnu, úpravnu vody a navazující závlahu.",
    tag: "čerpadla • úprava • závlaha",
  },
];

const references = [
  {
    place: "Olomouc — Neředín",
    work: "30 kopaných studní",
    detail: "Výstavba samostatných zdrojů vody pro rodinné domy v novém satelitním sídlišti.",
  },
  {
    place: "JE Dukovany",
    work: "Průzkum kanalizační sítě",
    detail: "Vyhledávání neprůchodných tras systémem studničních šachet v náročném provozu.",
  },
  {
    place: "Čerpací stanice BENZINA",
    work: "Technické vrty",
    detail: "Realizace vrtů pro provozní areály benzinových čerpacích stanic.",
  },
];

export default function Page() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-head">
          <a className="wordmark" href="#nahore" aria-label="Studny Doležel a Janíček — úvod">
            <span className="wordmark-main">STUDNY</span>
            <span className="wordmark-names">Doležel × Janíček</span>
          </a>

          <nav className="nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Co umíme</a>
            <a href="#reference">Naše práce</a>
          </nav>

          <a className="head-action" href="#sluzby">Vybrat řešení</a>
        </header>

        <div className="hero-grid" id="nahore">
          <div className="hero-copy">
            <p className="eyebrow">Studnařská firma · Olomouc</p>
            <h1 id="hero-title">
              Voda nezačíná
              <span>kohoutkem.</span>
            </h1>
            <p className="hero-thesis">Začíná správně provedeným vrtem pod vaším pozemkem.</p>
            <p className="hero-intro">
              Stavíme vrtané i kopané studny a zapojujeme vše, co dostane vodu bezpečně až do domu, provozu nebo zahrady.
            </p>
            <a className="primary-action" href="#sluzby">
              Zjistit, co potřebuji
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="hero-visual">
            <img
              src="/hero.webp"
              alt="Vrtná souprava při hloubení studny na pozemku u Olomouce"
            />
            <div className="depth-scale" aria-hidden="true">
              <span className="depth-label">řez podložím</span>
              <i style={{ "--depth": "12%" } as React.CSSProperties}>0 m</i>
              <i style={{ "--depth": "38%" } as React.CSSProperties}>20 m</i>
              <i style={{ "--depth": "65%" } as React.CSSProperties}>40 m</i>
              <i style={{ "--depth": "88%" } as React.CSSProperties}>60 m</i>
            </div>
            <div className="visual-note">
              <span>Od vrtu po vodárnu</span>
              <strong>Jeden odpovědný tým</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Studna jako funkční celek</p>
          <h2 id="services-title">Nejen otvor v zemi. Voda, která funguje.</h2>
          <p>
            Podle pozemku a zamýšleného odběru zvolíme vhodné řešení. Navazující techniku nemusíte skládat od několika dodavatelů.
          </p>
        </div>

        <div className="services-layout">
          <div className="service-image">
            <img
              src="/section-1.webp"
              alt="Detail profesionálního vrtání studny a práce se studnařskou technikou"
            />
            <p><span>70 cm</span> maximální hloubka rýh pro přípojky v rostlé půdě</p>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <article className="service" key={service.title}>
                <div className="service-mark" aria-hidden="true" />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <span className="service-tag">{service.tag}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" id="reference" aria-labelledby="trust-title">
        <div className="trust-image">
          <img
            src="/section-2.webp"
            alt="Hotová studniční šachta s čerpací technikou po realizaci"
          />
          <div className="image-stamp">
            <span>Olomouc</span>
            <strong>studny &amp; vodárny</strong>
          </div>
        </div>

        <div className="trust-content">
          <div className="section-heading section-heading-light">
            <p className="eyebrow">Prověřeno rozdílnými podmínkami</p>
            <h2 id="trust-title">Od zahrady v Neředíně po průmyslový areál.</h2>
            <p>
              Stejnou péči věnujeme zdroji pro rodinný dům i technicky náročné zakázce. Rozhoduje spolehlivý výsledek pod zemí, ne velikost cedule na stavbě.
            </p>
          </div>

          <div className="reference-list">
            {references.map((reference) => (
              <article className="reference" key={reference.place}>
                <p className="reference-place">{reference.place}</p>
                <h3>{reference.work}</h3>
                <p>{reference.detail}</p>
              </article>
            ))}
          </div>

          <div className="confidence">
            <svg viewBox="0 0 48 48" aria-hidden="true">
              <path d="M24 3C18 12 9 21 9 31a15 15 0 0 0 30 0C39 21 30 12 24 3Z" />
              <path d="M17 32c1 5 4 7 9 7" />
            </svg>
            <p><strong>Od povolení po čerpadlo.</strong> Pomůžeme s přípravou stavby, realizací zdroje i technologií pro jeho každodenní provoz.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

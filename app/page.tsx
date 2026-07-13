export default function Page() {
  const systems = [
    {
      code: "01",
      title: "Suchá výstavba",
      text: "Sádrokartonové a sádrovláknité desky, profily, spojovací materiál i kazetové podhledy pro kompletní skladbu.",
      detail: "Knauf · Fermacell · OSB · EasyBoard",
    },
    {
      code: "02",
      title: "Akustika a izolace",
      text: "Minerální izolace a akustické desky pro příčky, podhledy i konstrukce, kde záleží na skutečném útlumu hluku.",
      detail: "Stěny · stropy · podlahy",
    },
    {
      code: "03",
      title: "Fasády a zateplení",
      text: "Materiály pro kontaktní zateplení, povrchové úpravy a detaily, které chrání dům před chladem i vlhkostí.",
      detail: "Izolant · stěrka · omítka",
    },
    {
      code: "04",
      title: "Odolné desky",
      text: "Cementové desky Aquafire pro vlhké, požárně namáhané a venkovní konstrukce, kde běžná deska nestačí.",
      detail: "Voda · oheň · exteriér",
    },
  ];

  const facts = [
    {
      value: "1992",
      label: "rok, od kterého známe suchou výstavbu do posledního detailu",
    },
    {
      value: "Liberec",
      label: "místo, kde poradíme s materiálem i celou skladbou",
    },
    {
      value: "Aquafire",
      label: "cementové desky, které dovážíme na český trh",
    },
  ];

  return (
    <main className="ais-page">
      <section className="ais-hero" aria-labelledby="hero-title">
        <header className="ais-header">
          <a className="ais-wordmark" href="#hero-title" aria-label="AIS, úvodní stránka">
            <span className="ais-wordmark-main">AIS</span>
            <span className="ais-wordmark-sub">akustické &amp; izolační systémy</span>
          </a>

          <nav className="ais-nav" aria-label="Hlavní navigace">
            <a href="#sortiment">Co dodáváme</a>
            <a href="#zkusenost">Proč AIS</a>
          </nav>
        </header>

        <div className="ais-hero-grid">
          <div className="ais-hero-copy">
            <p className="ais-kicker">
              <span>Specializované stavebniny</span>
              <span>Liberec</span>
            </p>

            <h1 id="hero-title">
              Ticho se
              <span>nestaví náhodou.</span>
            </h1>

            <p className="ais-lead">
              Pomůžeme vám vybrat sádrokarton, izolaci i správné příslušenství tak, aby celá konstrukce fungovala jako jeden systém.
            </p>

            <div className="ais-hero-actions">
              <a className="ais-button ais-button-primary" href="#sortiment">
                Vybrat správnou skladbu
                <span aria-hidden="true">↓</span>
              </a>
              <a className="ais-text-link" href="#zkusenost">
                Zjistit, proč nakoupit u AIS
              </a>
            </div>
          </div>

          <figure className="ais-hero-visual">
            <div className="ais-image-shell">
              <img
                src="/hero.webp"
                alt="Sádrokartonová konstrukce a izolační materiály pro suchou výstavbu"
              />
              <span className="ais-image-note">Materiál / systém / výsledek</span>
            </div>

            <figcaption className="ais-layer-stack" aria-label="Základní vrstvy akustické příčky">
              <span className="ais-layer ais-layer-board">
                <b>01</b> opláštění
              </span>
              <span className="ais-layer ais-layer-frame">
                <b>02</b> nosný profil
              </span>
              <span className="ais-layer ais-layer-wool">
                <b>03</b> akustická izolace
              </span>
            </figcaption>
          </figure>
        </div>

        <a className="ais-mobile-cta" href="#sortiment">
          Potřebujete materiál? <strong>Začněte výběrem skladby</strong>
          <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="ais-offer" id="sortiment" aria-labelledby="offer-title">
        <div className="ais-section-heading">
          <p className="ais-section-label">Systémy pod jednou střechou</p>
          <h2 id="offer-title">Nejen deska. Všechno, co musí být za ní.</h2>
          <p>
            Řekněte nám, co stavíte. Doplníme desky o profily, izolaci, tmely, pásky i spojovací materiál, aby na stavbě nic nechybělo.
          </p>
        </div>

        <div className="ais-offer-layout">
          <figure className="ais-section-image ais-offer-image">
            <img
              src="/section-1.webp"
              alt="Sádrokartonové desky, profily a izolace připravené pro stavbu"
            />
            <figcaption>
              <span>Jedna skladba</span>
              <span>Jeden kompatibilní systém</span>
            </figcaption>
          </figure>

          <div className="ais-system-list">
            {systems.map((system) => (
              <article className="ais-system" key={system.code}>
                <div className="ais-system-code" aria-hidden="true">{system.code}</div>
                <div>
                  <h3>{system.title}</h3>
                  <p>{system.text}</p>
                  <span className="ais-system-detail">{system.detail}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ais-trust" id="zkusenost" aria-labelledby="trust-title">
        <div className="ais-trust-layout">
          <div className="ais-trust-copy">
            <p className="ais-section-label">Zkušenost, která je na skladě</p>
            <h2 id="trust-title">Když detail rozhoduje, poradí člověk, který materiál zná.</h2>
            <p className="ais-trust-intro">
              Od roku 1992 se věnujeme suché výstavbě, tepelným a akustickým izolacím i fasádním systémům. Neprodáváme jen položky z regálu — hledáme řešení pro konkrétní stěnu, strop nebo rekonstrukci.
            </p>

            <div className="ais-facts" aria-label="Důležité informace o AIS">
              {facts.map((fact) => (
                <div className="ais-fact" key={fact.value}>
                  <strong>{fact.value}</strong>
                  <span>{fact.label}</span>
                </div>
              ))}
            </div>
          </div>

          <figure className="ais-section-image ais-trust-image">
            <img
              src="/section-2.webp"
              alt="Detail práce se sádrokartonovým a izolačním systémem"
            />
            <figcaption>
              <strong>Správná skladba začíná otázkou.</strong>
              <span>Co má konstrukce unést, utlumit a vydržet?</span>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}

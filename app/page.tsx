export default function HomePage() {
  const services = [
    {
      title: "Židle, křesla a lavice",
      text: "Výměna potahové látky, unavených výplní i drobné opravy konstrukce — pro solitéry i celé jídelní sestavy.",
    },
    {
      title: "Pohovky a moderní nábytek",
      text: "Nový potah a pohodlí pro sedačky, které rozměrově vyhovují, ale čas se na nich už podepsal.",
    },
    {
      title: "Ordinace a dveře",
      text: "Čalounění vybavení s vyšší zátěží a odhlučnění dveří pro klidnější provoz doma i na pracovišti.",
    },
  ];

  return (
    <>
      <title>Čalounictví Pavel Kasl | Opravy nábytku v Plzni</title>
      <meta
        name="description"
        content="Čalounění židlí, křesel, pohovek, lavic a dveří v Plzni. Pavel Kasl, Motýlí 24. Zavolejte na 603 518 916."
      />
      <meta property="og:title" content="Čalounictví Pavel Kasl — Plzeň" />
      <meta
        property="og:description"
        content="Opravy staršího i moderního nábytku, výměna potahů a výplní."
      />
      <meta property="og:image" content="/hero.webp" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="cs_CZ" />
      <link
        rel="icon"
        href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%23173552'/%3E%3Cpath d='M14 19h36v26H14z' fill='%23ff8d6b'/%3E%3Cpath d='M20 19v26M44 19v26' stroke='%23f5f7f2' stroke-width='3' stroke-dasharray='2 4'/%3E%3C/svg%3E"
      />

      <main className="pk-page">
        <section className="hero" aria-labelledby="hero-title">
          <nav className="topbar" aria-label="Hlavní navigace">
            <a className="wordmark" href="#top" aria-label="Čalounictví Pavel Kasl, začátek stránky">
              <span className="wordmark-name">Pavel Kasl</span>
              <span className="wordmark-trade">čalounictví · Plzeň</span>
            </a>

            <div className="topbar-links">
              <a href="#sluzby">Co opravím</a>
              <a href="#dilna">O dílně</a>
              <a className="phone-link" href="tel:+420603518916">
                Zavolat <span>603 518 916</span>
              </a>
            </div>
          </nav>

          <div className="hero-grid" id="top">
            <div className="hero-copy">
              <p className="eyebrow">Čalounická dílna · Motýlí 24, Plzeň</p>
              <h1 id="hero-title">
                <span>Dobré křeslo</span>
                <strong>se nevyhazuje.</strong>
              </h1>
              <p className="hero-lead">
                Vrátím pohodlí židli po prarodičích, oblíbené pohovce i lavici z čekárny. Opravím potah,
                výplň a domluvím s vámi materiál, který bude dávat smysl pro každodenní používání.
              </p>

              <div className="hero-actions">
                <a className="primary-button" href="tel:+420603518916">
                  <span>Zavolat do dílny</span>
                  <span aria-hidden="true">↗</span>
                </a>
                <a className="text-link" href="#sluzby">
                  Prohlédnout nabídku
                </a>
              </div>

              <dl className="hero-facts" aria-label="Základní informace">
                <div>
                  <dt>Zakázky</dt>
                  <dd>starší i moderní nábytek</dd>
                </div>
                <div>
                  <dt>Doprava</dt>
                  <dd>po domluvě s autodopravou Pech</dd>
                </div>
              </dl>
            </div>

            <figure className="hero-visual">
              <img
                src="/hero.webp"
                alt="Ukázka pečlivé čalounické práce z dílny Pavla Kasla"
              />
              <div className="selvedge" aria-hidden="true">
                <span>POTAH</span>
                <span>VÝPLŇ</span>
                <span>ŠEV</span>
              </div>
              <figcaption>
                <span>Řemeslo v detailu</span>
                <span>Plzeň</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="services" id="sluzby" aria-labelledby="services-title">
          <div className="section-heading">
            <p className="eyebrow">Co můžete přivézt</p>
            <h2 id="services-title">Od prošoupané látky po sesedlou výplň.</h2>
            <p>
              Nejprve se podíváme, co nábytek skutečně potřebuje. Někdy stačí nový potah, jindy je
              potřeba obnovit i vrstvy pod ním.
            </p>
          </div>

          <div className="services-layout">
            <div className="service-list">
              {services.map((service) => (
                <article className="service-item" key={service.title}>
                  <span className="stitch-mark" aria-hidden="true" />
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <figure className="section-image service-image">
              <img
                src="/section-1.webp"
                alt="Detail renovovaného čalouněného nábytku s novým potahem"
                loading="lazy"
              />
              <figcaption>Nový povrch, zachovaný charakter.</figcaption>
            </figure>
          </div>
        </section>

        <section className="workshop" id="dilna" aria-labelledby="workshop-title">
          <div className="workshop-grid">
            <figure className="section-image workshop-image">
              <img
                src="/section-2.webp"
                alt="Neobvyklá čalounická zakázka z dílny Pavla Kasla"
                loading="lazy"
              />
              <figcaption>
                <span>Zakázka mimo obývák</span>
                <strong>Sedačka do historické techniky</strong>
              </figcaption>
            </figure>

            <div className="workshop-copy">
              <p className="eyebrow">Dílna Pavla Kasla</p>
              <h2 id="workshop-title">Když je zakázka neobvyklá, tím spíš stojí za rozhovor.</h2>
              <p className="workshop-intro">
                Vedle běžného nábytku vznikají v dílně i sedačky pro historickou techniku nebo
                řešení pro ordinace. Každý kus se posuzuje podle konstrukce, způsobu používání a
                očekávané zátěže.
              </p>

              <div className="trust-panels">
                <article>
                  <p className="panel-label">Osobně v Plzni</p>
                  <h3>Motýlí 24</h3>
                  <p>Návštěvu a předání zakázky si předem domluvte telefonicky.</p>
                </article>
                <article>
                  <p className="panel-label">Spojení s místní komunitou</p>
                  <h3>Radioklub OK1RCA</h3>
                  <p>Dílna je hrdým sponzorem plzeňského radioklubu.</p>
                </article>
              </div>

              <div className="direct-contact">
                <span>Máte doma kus, který stojí za záchranu?</span>
                <a href="tel:+420603518916">603 518 916</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

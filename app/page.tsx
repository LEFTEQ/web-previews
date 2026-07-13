export default function Page() {
  const steps = [
    {
      number: "01",
      title: "Prohlídka a návrh",
      text: "Na místě ověříme střechu, orientaci, stínění i vaši skutečnou spotřebu. Teprve potom navrhneme výkon elektrárny a kapacitu baterie.",
    },
    {
      number: "02",
      title: "Projekt a vyřízení",
      text: "Připravíme dokumentaci, žádost o připojení i podklady k dotaci. U elektráren nad 20 kWp zajistíme také stavební povolení, statiku a požárně bezpečnostní řešení.",
    },
    {
      number: "03",
      title: "Montáž a servis",
      text: "Elektrárnu namontujeme, zrevidujeme a naučíme vás sledovat výrobu. Zůstáváme k dispozici pro záruční i pozáruční servis.",
    },
  ];

  return (
    <main className="enkis-page">
      <a className="skip-link" href="#obsah">
        Přeskočit na obsah
      </a>

      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Enkis, úvodní stránka">
            <span className="wordmark-sun" aria-hidden="true" />
            <span>enkis</span>
            <small>energetická řešení</small>
          </a>

          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#reseni">Jak pracujeme</a>
            <a href="#realizace">Realizace</a>
          </nav>

          <a className="header-phone" href="tel:+420296180430">
            <span>Poradíme vám</span>
            +420 296 180 430
          </a>
        </header>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Fotovoltaika na klíč · Hradec Králové</p>
            <h1 id="hero-title">
              Vaše střecha
              <span>umí pracovat.</span>
            </h1>
            <p className="hero-lead">
              Navrhneme elektrárnu podle domu, spotřeby a světla na vaší střeše. Vyřídíme připojení, dotaci, montáž i revizi — bez přehazování odpovědnosti.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="tel:+420296180430">
                Domluvit prohlídku střechy
                <span aria-hidden="true">↗</span>
              </a>
              <p>
                Osobně v Hradci Králové
                <span>Královéhradecký kraj a okolí</span>
              </p>
            </div>
          </div>

          <div className="hero-visual">
            <img
              src="/hero.webp"
              alt="Fotovoltaické panely instalované na střeše domu"
              width="1600"
              height="1100"
              fetchPriority="high"
            />
            <div className="azimuth" aria-hidden="true">
              <span className="azimuth-label">ideální orientace</span>
              <strong>JIH</strong>
              <span className="azimuth-degree">180°</span>
              <i className="azimuth-needle" />
            </div>
            <div className="hero-note">
              <span>Od návrhu po zapnutí</span>
              <strong>jeden tým</strong>
            </div>
          </div>
        </div>
      </section>

      <div id="obsah">
        <section className="process-section" id="reseni" aria-labelledby="process-title">
          <div className="section-heading">
            <p className="eyebrow">Celá elektrárna pod jednou střechou</p>
            <h2 id="process-title">Nejdřív dům. Potom technologie.</h2>
            <p>
              Univerzální sestava neexistuje. Výkon panelů, baterii i řízení spotřeby skládáme tak, aby spolu fungovaly ve vašem konkrétním domě.
            </p>
          </div>

          <div className="process-layout">
            <figure className="process-image">
              <img
                src="/section-1.webp"
                alt="Technik při odborné instalaci fotovoltaických panelů"
                width="1200"
                height="900"
                loading="lazy"
              />
              <figcaption>
                <span>Osobní zaměření</span>
                Žádná nabídka od stolu
              </figcaption>
            </figure>

            <ol className="steps">
              {steps.map((step) => (
                <li key={step.number}>
                  <span className="step-number">{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="reference-section" id="realizace" aria-labelledby="reference-title">
          <div className="reference-image">
            <img
              src="/section-2.webp"
              alt="Dokončená fotovoltaická elektrárna na střeše rodinného domu"
              width="1500"
              height="1050"
              loading="lazy"
            />
            <p className="image-location">Svinary · Královéhradecký kraj</p>
          </div>

          <article className="reference-copy">
            <p className="eyebrow">Hotová realizace v regionu</p>
            <h2 id="reference-title">24 panelů. Jedna sladěná elektrárna.</h2>
            <p className="reference-intro">
              Na rovnou střechu ve Svinary jsme instalovali malou výrobnu s jižní orientací. Hybridní střídač a baterie ukládají výrobu pro dobu, kdy ji domácnost skutečně potřebuje.
            </p>

            <dl className="specs">
              <div>
                <dt>Celkový výkon</dt>
                <dd>12,96 kWp</dd>
              </div>
              <div>
                <dt>Fotovoltaické panely</dt>
                <dd>24 × 540 Wp</dd>
              </div>
              <div>
                <dt>Bateriové úložiště</dt>
                <dd>11,6 kWh</dd>
              </div>
              <div>
                <dt>Technologie</dt>
                <dd>Solax X3 Hybrid 15 D</dd>
              </div>
            </dl>

            <aside className="trust-note">
              <span aria-hidden="true">✓</span>
              <p>
                <strong>Po předání nekončíme.</strong>
                Součástí řešení je revize, zaškolení obsluhy a záruční i pozáruční servis.
              </p>
            </aside>
          </article>
        </section>
      </div>
    </main>
  );
}

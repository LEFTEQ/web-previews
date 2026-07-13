export default function Page() {
  const services = [
    {
      code: "SV",
      title: "Světelná reklama",
      text: "3D svítící písmena, loga a nápisy navržené pro dobrou čitelnost ve dne i v noci."
    },
    {
      code: "OR",
      title: "Orientační systémy",
      text: "Srozumitelné značení budov, nádraží, areálů i interiérů v jednotném vizuálním stylu."
    },
    {
      code: "KO",
      title: "Kov a CORTEN",
      text: "Totemy, pylony, městský mobiliář a konstrukce vyráběné s důrazem na detail a životnost."
    },
    {
      code: "PO",
      title: "Polepy a malby",
      text: "Výlohy, skleněné příčky, stěny i vozidla proměníme v dobře viditelnou součást značky."
    }
  ];

  return (
    <>
      <title>NeonKov — světelná reklama a orientační systémy z Brna</title>
      <meta
        name="description"
        content="NeonKov navrhuje a vyrábí světelné nápisy, 3D loga, orientační systémy, reklamní totemy a kovové konstrukce pro firmy, města a veřejné budovy."
      />
      <link
        rel="icon"
        href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%232549ff'/%3E%3Cpath d='M17 47V17h8l14 19V17h8v30h-8L25 28v19z' fill='white'/%3E%3C/svg%3E"
      />

      <main>
        <section className="hero" id="uvod">
          <header className="site-header">
            <a className="wordmark" href="#uvod" aria-label="NeonKov, úvodní stránka">
              <span className="wordmark-neon">NEON</span>
              <span className="wordmark-kov">KOV</span>
            </a>

            <nav className="site-nav" aria-label="Hlavní navigace">
              <a href="#vyroba">Co vyrábíme</a>
              <a href="#postup">Jak pracujeme</a>
              <a className="nav-phone" href="tel:+420773774653">773 774 653</a>
            </nav>
          </header>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span>Brno / Blansko</span> Reklama od návrhu po montáž</p>
              <h1>Značení, které<br /><em>vede i svítí.</em></h1>
              <p className="hero-lead">
                Navrhujeme a vyrábíme světelné nápisy, orientační systémy a kovové prvky pro firmy,
                města i veřejné budovy. Jedno zadání, jeden tým, hotový výsledek.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="mailto:neonkov@neonkov.cz?subject=Poptávka%20výroby">
                  Poptat výrobu
                  <span aria-hidden="true">↗</span>
                </a>
                <a className="text-link" href="tel:+420773774653">Zavolat 773 774 653</a>
              </div>
            </div>

            <div className="hero-visual">
              <img
                src="/hero.webp"
                alt="Rozsvícený reklamní nápis vyrobený v dílně NeonKov"
                fetchPriority="high"
              />
              <div className="light-trace" aria-hidden="true">
                <span className="trace-dot" />
              </div>
              <p className="image-note">Návrh · kovový základ · světlo · montáž</p>
            </div>
          </div>

          <div className="hero-facts" aria-label="Hlavní výhody">
            <p><strong>Na míru</strong><span>žádné katalogové řešení</span></p>
            <p><strong>V jednom týmu</strong><span>grafika, výroba i instalace</span></p>
            <p><strong>Pro Česko</strong><span>z provozovny v Blansku</span></p>
          </div>
        </section>

        <section className="services" id="vyroba">
          <div className="section-heading">
            <p className="eyebrow"><span>Výroba</span> Co pro vás umíme</p>
            <h2>Od jemného nápisu<br />po orientaci celého areálu.</h2>
            <p>
              Materiál, konstrukci i typ osvětlení volíme podle místa, vzdálenosti čtení a provozu —
              ne podle toho, co zrovna leží ve skladu.
            </p>
          </div>

          <div className="services-layout">
            <div className="service-image-wrap">
              <img
                src="/section-1.webp"
                alt="Detail výroby prostorového světelného písmene v dílně"
                loading="lazy"
              />
              <span className="material-label">Hliník / akryl / LED</span>
            </div>

            <div className="service-list">
              {services.map((service) => (
                <article className="service-item" key={service.code}>
                  <span className="service-code" aria-hidden="true">{service.code}</span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="process" id="postup">
          <div className="process-intro">
            <div>
              <p className="eyebrow"><span>Spolupráce</span> Od zadání k montáži</p>
              <h2>Víte, co se děje<br />v každém kroku.</h2>
            </div>
            <p className="process-lead">
              Stačí poslat rozměry, fotografii místa a představu. Ověříme proveditelnost,
              doporučíme řešení a výrobu převezmeme až po finální instalaci.
            </p>
          </div>

          <div className="process-grid">
            <ol className="steps">
              <li>
                <span>01</span>
                <div><h3>Zadání a zaměření</h3><p>Probereme místo, účel, rozpočet a termín. Když je třeba, přijedeme zaměřit.</p></div>
              </li>
              <li>
                <span>02</span>
                <div><h3>Návrh a výroba</h3><p>Připravíme podobu, konstrukční řešení a cenu. Po odsouhlasení vyrábíme v Blansku.</p></div>
              </li>
              <li>
                <span>03</span>
                <div><h3>Montáž na místě</h3><p>Dopravíme hotové prvky, bezpečně je osadíme a zkontrolujeme výsledný provoz.</p></div>
              </li>
            </ol>

            <div className="trust-panel">
              <img
                src="/section-2.webp"
                alt="Montáž venkovního orientačního značení týmem NeonKov"
                loading="lazy"
              />
              <div className="trust-copy">
                <p className="trust-kicker">Provozovna</p>
                <h3>Areál ČKD Blansko</h3>
                <address>Gellhornova 2239/12<br />678 01 Blansko · brána č. 2</address>
                <p className="freshness">Obsah a nabídka aktualizovány 07/2026</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

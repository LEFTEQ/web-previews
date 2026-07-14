export default function Page() {
  const services = [
    {
      name: "Gravírování a značení",
      copy: "Trvalé popisy, loga a sériová čísla do kovu, dřeva, plastu, skla i kůže. Od jednoho kusu po pravidelné série.",
      tech: "CO₂ a vláknový laser",
    },
    {
      name: "Štítky a panely",
      copy: "Výrobní štítky, ovládací panely, orientační cedule a pamětní plakety připravené pro skutečný provoz.",
      tech: "Laser + CNC frézování",
    },
    {
      name: "Barevný potisk",
      copy: "UV potisk reklamních předmětů a velkoformátový tisk s přesnou barevností, ostrým detailem a odolným povrchem.",
      tech: "UV a eco-solventní tisk",
    },
  ];

  return (
    <>
      <title>KAVALÍR CZ — gravírování, štítky a výroba reklam v Praze</title>
      <meta
        name="description"
        content="Laserové gravírování, CNC frézování, výrobní štítky a UV potisk v Praze 10. KAVALÍR CZ poradí s materiálem a vyrobí jeden kus i celou sérii."
      />
      <meta property="og:title" content="KAVALÍR CZ — přesná výroba reklam v Praze" />
      <meta
        property="og:description"
        content="Gravírování, štítky, CNC frézování a UV potisk od návrhu po hotový výrobek."
      />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="cs_CZ" />
      <meta property="og:image" content="/hero.webp" />

      <a className="skip-link" href="#hlavni-obsah">
        Přeskočit na obsah
      </a>

      <main id="hlavni-obsah">
        <section className="hero" aria-labelledby="hero-title">
          <header className="site-header">
            <a className="wordmark" href="#hlavni-obsah" aria-label="KAVALÍR CZ, úvodní strana">
              <span>KAVALÍR</span>
              <small>výroba reklam · Praha</small>
            </a>

            <nav className="main-nav" aria-label="Hlavní navigace">
              <a href="#vyroba">Co vyrábíme</a>
              <a href="#dilna">Jak pracujeme</a>
              <a className="nav-phone" href="tel:+420602263323">
                602 263 323
              </a>
            </nav>
          </header>

          <div className="hero-visual">
            <img
              src="/hero.webp"
              alt="Detail laserového gravírování kovového výrobního štítku v dílně KAVALÍR CZ"
              width="1800"
              height="1200"
              fetchPriority="high"
            />
            <div className="laser-line" aria-hidden="true" />
            <div className="material-stamp" aria-hidden="true">
              <span>AL 1,5 mm</span>
              <span>Praha 10</span>
            </div>
          </div>

          <div className="hero-copy">
            <p className="eyebrow">Laser · frézka · tisk · lidská kontrola</p>
            <h1 id="hero-title">
              Vaše značka.
              <span>Vyrytá přesně.</span>
            </h1>
            <p className="hero-lead">
              V Praze vyrábíme cedule, štítky, panely i reklamní předměty, které mají vydržet. Pomůžeme
              s návrhem, vybereme správnou technologii a pohlídáme každý detail.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="mailto:info@kavalir.cz?subject=Poptávka výroby">
                Poptat výrobu
                <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-secondary" href="tel:+420602263323">
                Zavolat do dílny
              </a>
            </div>
            <dl className="hero-facts">
              <div>
                <dt>Dílna</dt>
                <dd>Moskevská 659/63, Praha 10</dd>
              </div>
              <div>
                <dt>Otevřeno</dt>
                <dd>Po–Pá, 7–15 hod.</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="services" id="vyroba" aria-labelledby="services-title">
          <div className="section-heading">
            <p className="eyebrow">Od jednoho kusu po tisícovou sérii</p>
            <h2 id="services-title">Materiál rozhoduje. My víme, co s ním.</h2>
            <p>
              Neprodáváme jednu technologii na všechno. Podle použití, povrchu a požadované životnosti
              zvolíme postup, který dává smysl.
            </p>
          </div>

          <div className="services-layout">
            <figure className="services-image">
              <img
                src="/section-1.webp"
                alt="Kovové výrobní štítky a přesně frézované díly připravené v pražské dílně"
                width="1400"
                height="1050"
                loading="lazy"
              />
              <figcaption>
                <span>Kontrola detailu</span>
                Každý kus před předáním projde rukama člověka.
              </figcaption>
            </figure>

            <div className="service-list">
              {services.map((service) => (
                <article className="service-card" key={service.name}>
                  <div className="service-mark" aria-hidden="true" />
                  <div>
                    <h3>{service.name}</h3>
                    <p>{service.copy}</p>
                    <span className="tech-label">{service.tech}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="material-rail" aria-label="Materiály, které zpracováváme">
            <span>Kov</span>
            <span>Dřevo</span>
            <span>Plast</span>
            <span>Sklo</span>
            <span>Kůže</span>
            <span>Papír</span>
          </div>
        </section>

        <section className="workshop" id="dilna" aria-labelledby="workshop-title">
          <div className="workshop-image">
            <img
              src="/section-2.webp"
              alt="Pracovník KAVALÍR CZ kontroluje výrobu reklamního prvku u laserového stroje"
              width="1600"
              height="1100"
              loading="lazy"
            />
            <div className="image-note">
              <strong>15 let zkušeností</strong>
              <span>Rodinná firma ve Vršovicích</span>
            </div>
          </div>

          <div className="workshop-copy">
            <p className="eyebrow">Zakázka bez bloudění mezi dodavateli</p>
            <h2 id="workshop-title">Od souboru k hotovému kusu pod jednou střechou.</h2>
            <p className="workshop-intro">
              Ozvete se přímo lidem, kteří zakázku připraví a vyrobí. Předem řekneme, co bude fungovat,
              kolik výroba zabere a jak dodat podklady.
            </p>

            <ol className="process-list">
              <li>
                <span>01</span>
                <div>
                  <h3>Probereme použití</h3>
                  <p>Stačí popsat předmět, množství a termín. Soubory můžete poslat e-mailem.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h3>Navrhneme výrobu</h3>
                  <p>Doporučíme materiál i technologii a před sérií odsouhlasíme podobu.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h3>Vyrobíme a předáme</h3>
                  <p>Hotovou zakázku vyzvednete s parkováním v areálu, nebo ji pošleme po ČR a SR.</p>
                </div>
              </li>
            </ol>

            <div className="trust-strip" aria-label="Praktické výhody">
              <span>Výroba od 1 kusu</span>
              <span>Parkování zdarma</span>
              <span>Osobní konzultace</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

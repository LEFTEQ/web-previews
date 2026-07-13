export default function Page() {
  const services = [
    {
      code: "01",
      title: "Autoelektrika a diagnostika",
      text: "Načteme paměť závad, proměříme elektrické okruhy a dohledáme skutečnou příčinu — od vybíjení baterie po chybu řídicí jednotky.",
      price: "Diagnostika od 500 Kč",
    },
    {
      code: "02",
      title: "Mechanika a příprava na STK",
      text: "Servisujeme brzdy, podvozek i motor. Vůz připravíme na technickou kontrolu a zařídíme také měření emisí.",
      price: "Osobní vozy všech značek",
    },
    {
      code: "03",
      title: "Klimatizace",
      text: "Odsátí, vyčištění, kontrola těsnosti a doplnění chladiva včetně oleje a detekční kapaliny.",
      price: "Servis od 500 Kč",
    },
    {
      code: "04",
      title: "Pneuservis a geometrie",
      text: "Přezujeme, vyvážíme a opravíme pneumatiky. Změříme i nastavíme geometrii osobních vozů, SUV a dodávek.",
      price: "Geometrie od 500 Kč",
    },
  ];

  return (
    <main className="apsar-site">
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#uvod" aria-label="APSAR — úvodní stránka">
            <span className="wordmark-main">APSAR</span>
            <span className="wordmark-detail">autoelektrika / Ostrava</span>
          </a>

          <nav className="main-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Služby</a>
            <a href="#jak-pracujeme">Jak pracujeme</a>
            <a className="nav-phone" href="tel:+420603844711">603 844 711</a>
          </nav>

          <a className="mobile-call" href="tel:+420603844711" aria-label="Zavolat do servisu APSAR">
            Zavolat
          </a>
        </header>

        <div className="hero-grid" id="uvod">
          <div className="hero-copy">
            <p className="eyebrow"><span aria-hidden="true" /> Autoelektrika · Ostrava–Vřesina</p>
            <h1 id="hero-title">Když auto mlčí, my posloucháme proud.</h1>
            <p className="hero-lead">
              Diagnostiku nepovažujeme za výměnu dílů naslepo. Závadu nejdřív načteme, proměříme a teprve potom navrhneme opravu.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="tel:+420603844711">Rezervovat termín</a>
              <a className="button button-secondary" href="#sluzby">Prohlédnout služby</a>
            </div>

            <dl className="hero-facts">
              <div>
                <dt>Otevřeno</dt>
                <dd>Po–Pá, 8:00–17:00</dd>
              </div>
              <div>
                <dt>Najdete nás</dt>
                <dd>Vřesina 846, u Vřesinské strže</dd>
              </div>
            </dl>
          </div>

          <figure className="hero-visual">
            <img src="/hero.webp" alt="Technik autoservisu APSAR při diagnostice automobilu" />
            <figcaption>
              <span>Diagnostický záznam</span>
              <strong>Příčinu hledáme měřením</strong>
            </figcaption>
            <svg className="signal-line" viewBox="0 0 720 180" aria-hidden="true" focusable="false">
              <path d="M0 94H112L137 94L155 28L183 151L214 69L240 94H352L373 94L392 54L414 127L440 94H720" />
            </svg>
          </figure>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="section-label">Co vyřešíme v jedné dílně</p>
          <h2 id="services-title">Od konektoru po geometrii.</h2>
          <p>Nové i starší vozy tuzemských a světových značek. Každou další práci s vámi nejdřív probereme.</p>
        </div>

        <div className="services-layout">
          <figure className="section-image service-image">
            <img src="/section-1.webp" alt="Detail měření elektrických obvodů automobilu v servisu APSAR" />
            <figcaption>Čtení chybového kódu je začátek. Rozhoduje následné proměření.</figcaption>
          </figure>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-card" key={service.code}>
                <span className="service-code" aria-hidden="true">{service.code}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <strong>{service.price}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" id="jak-pracujeme" aria-labelledby="trust-title">
        <div className="trust-grid">
          <div className="trust-copy">
            <p className="section-label">Přes 20 let u aut</p>
            <h2 id="trust-title">Nejdřív víte proč. Potom co to bude stát.</h2>
            <p className="trust-intro">
              Závadu vám popíšeme srozumitelně a doporučíme řešení podle stavu i stáří vozu. Bez automatické výměny všeho, co se objeví v paměti závad.
            </p>

            <ol className="process-list">
              <li>
                <span>1</span>
                <div><strong>Vyslechneme příznaky</strong><p>Kdy se problém objevuje, co svítí a jak se auto chová.</p></div>
              </li>
              <li>
                <span>2</span>
                <div><strong>Načteme a proměříme</strong><p>Diagnostiku ověříme reálným měřením elektrických i mechanických částí.</p></div>
              </li>
              <li>
                <span>3</span>
                <div><strong>Domluvíme opravu</strong><p>Než začneme, znáte doporučený postup i předpokládaný rozsah práce.</p></div>
              </li>
            </ol>

            <div className="contact-strip">
              <div><span>Telefon</span><a href="tel:+420603844711">603 844 711</a></div>
              <div><span>E-mail</span><a href="mailto:info@apsar.cz">info@apsar.cz</a></div>
            </div>
          </div>

          <figure className="section-image trust-image">
            <img src="/section-2.webp" alt="Servisní pracoviště APSAR ve Vřesině u Ostravy" />
            <figcaption>
              <span>APSAR s.r.o.</span>
              <strong>Vřesina 846 · Ostravsko</strong>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}

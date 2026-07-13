export default function Page() {
  const services = [
    {
      title: "Plastová okna na míru",
      text: "Profil, zasklení i způsob otevírání navrhneme podle vašeho domu, hluku v ulici a nároků na úsporu energie.",
      detail: "zaměření · výroba · montáž",
    },
    {
      title: "Vchodové a balkonové dveře",
      text: "Bezpečné dveře se spolehlivým kováním, nízkým prahem a povrchem, který obstojí v každodenním provozu.",
      detail: "plast · hliník · příslušenství",
    },
    {
      title: "Výměna a repase",
      text: "Posoudíme stav stávajících oken a doporučíme výměnu nebo repasi bez zbytečných zásahů do ostění.",
      detail: "servis · seřízení · obnova",
    },
  ];

  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <header className="topbar">
          <a className="wordmark" href="#top" aria-label="Geus okna – úvod">
            <span className="wordmark-main">GEUS</span>
            <span className="wordmark-sub">okna · Praha</span>
          </a>

          <nav className="nav" aria-label="Hlavní navigace">
            <a href="#nabidka">Co vyrábíme</a>
            <a href="#zazemi">Proč Geus</a>
            <a className="nav-phone" href="tel:+420800270270">800 270 270</a>
          </nav>
        </header>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Plastová okna vyráběná v Kralupech nad Vltavou</p>
            <h1 id="hero-title">
              Klid doma začíná
              <span>dobře osazeným oknem.</span>
            </h1>
            <p className="hero-lead">
              Navrhneme, vyrobíme a namontujeme plastová okna pro byty i domy v Praze. Jedna firma ručí za celý výsledek – od zaměření po seřízení.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="tel:+420800270270">Zavolat pro zaměření</a>
              <a className="text-link" href="mailto:info@geusokna.cz">Napsat na info@geusokna.cz</a>
            </div>
          </div>

          <div className="window-stage" aria-label="Ukázka plastového okna Geus v moderním interiéru">
            <div className="window-frame">
              <img
                src="/hero.webp"
                alt="Moderní interiér s velkým plastovým oknem a výhledem ven"
                width="1200"
                height="900"
                fetchPriority="high"
              />
              <span className="mullion mullion-vertical" aria-hidden="true" />
              <span className="mullion mullion-horizontal" aria-hidden="true" />
              <span className="window-handle" aria-hidden="true" />
            </div>
            <p className="frame-note">Navrženo pro konkrétní otvor. Vyrobeno na milimetr.</p>
          </div>
        </div>
      </section>

      <section className="services" id="nabidka" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Co vyřešíme</p>
          <h2 id="services-title">Okno není jen rám a sklo.</h2>
          <p>Je to tepelný komfort, méně hluku a kování, které bude fungovat každý den.</p>
        </div>

        <div className="services-layout">
          <div className="services-image-wrap">
            <img
              src="/section-1.webp"
              alt="Detail bílého plastového okenního profilu, těsnění a izolačního skla"
              width="900"
              height="1100"
              loading="lazy"
            />
            <span className="material-label">profil · těsnění · sklo · kování</span>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span>{service.detail}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" id="zazemi" aria-labelledby="trust-title">
        <div className="trust-image">
          <img
            src="/section-2.webp"
            alt="Odborník kontroluje rozměry plastového okna při montáži"
            width="1200"
            height="900"
            loading="lazy"
          />
          <div className="measurement" aria-hidden="true">
            <span>zaměřeno</span>
            <strong>± 1 mm</strong>
          </div>
        </div>

        <div className="trust-copy">
          <p className="eyebrow">Od roku 1992</p>
          <h2 id="trust-title">Zkušenost poznáte hlavně po montáži.</h2>
          <p className="trust-intro">
            Geus okna začínala prodejem a montážemi různých okenních systémů. Právě zkušenost z realizací vedla v roce 1994 k vlastní výrobě v Kralupech nad Vltavou.
          </p>

          <dl className="proof-list">
            <div>
              <dt>Jedna odpovědnost</dt>
              <dd>Zaměření, výrobu, montáž i následný servis držíme pod jednou střechou.</dd>
            </div>
            <div>
              <dt>Praha a okolí</dt>
              <dd>Zakázku řešíte s týmem, který zná pražské byty, rodinné domy i rekonstrukce.</dd>
            </div>
            <div>
              <dt>Osobní konzultace</dt>
              <dd>Navštivte nás na adrese Modřanská 409/68, Praha 4 – Modřany.</dd>
            </div>
          </dl>

          <blockquote>
            „Doporučíme řešení, které dává smysl vašemu domu – ne to, které je nejsnazší prodat.“
            <cite>Geus okna a.s.</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}

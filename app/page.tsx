const services = [
  {
    title: "Výkopy a sítě",
    text: "Připravíme výkop pro vodu, elektřinu, kanalizaci, jímku, čističku, bazén i zahradní jezírko. Kde technika nestačí, dokončíme práci ručně.",
  },
  {
    title: "Terén a demolice",
    text: "Srovnáme pozemek, vymodelujeme zahradu, odstraníme drobné stavby a připravíme terén pro další řemesla.",
  },
  {
    title: "Plot od vrtu po bránu",
    text: "Vyhloubíme základy a namontujeme pletivo, 2D či 3D panely, betonový plot, gabiony, bránu i branku na míru.",
  },
];

export default function Page() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero__image"
          src="/hero.webp"
          alt="Zemní technika MB Profi při práci v terénu na Plzeňsku"
          width="1920"
          height="1280"
          fetchPriority="high"
        />
        <div className="hero__shade" aria-hidden="true" />

        <header className="site-header">
          <a className="wordmark" href="#nahoru" aria-label="MB Profi — začátek stránky">
            <span className="wordmark__mb">MB</span>
            <span className="wordmark__profi">PROFI</span>
            <span className="wordmark__trade">ZEMĚ • PLOTY</span>
          </a>
          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Co umíme</a>
            <a href="#spoluprace">Jak pracujeme</a>
            <a className="site-nav__phone" href="tel:+420720119198">720 119 198</a>
          </nav>
        </header>

        <div className="hero__content" id="nahoru">
          <p className="eyebrow">Zemní a výkopové práce • Plzeň a okolí</p>
          <h1 id="hero-title">Nejdřív zem.<br />Pak jistota.</h1>
          <p className="hero__lead">
            Vykopeme, srovnáme a připravíme pozemek tak, aby na něm další práce mohly rovnou pokračovat. Bez dohadování mezi bagrem a montáží plotu.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="tel:+420720119198">Zavolat kvůli termínu</a>
            <a className="button button--ghost" href="#sluzby">Prohlédnout práce</a>
          </div>
        </div>

        <div className="ground-cut" aria-label="Práce od povrchu po hotový základ">
          <span><small>01 / POVRCH</small>Zaměření terénu</span>
          <span><small>02 / VÝKOP</small>Strojně i ručně</span>
          <span><small>03 / ZÁKLAD</small>Připraveno k montáži</span>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="services__intro">
          <p className="section-label">Co pro vás uděláme</p>
          <h2 id="services-title">Od první lžíce<br />po rovný terén.</h2>
          <p>
            Pro rodinné domy, zahrady, firmy i veřejné pozemky. Rozsah práce domluvíme předem a navážeme na to, co se bude na místě stavět nebo montovat.
          </p>
        </div>

        <div className="services__visual">
          <img
            src="/section-1.webp"
            alt="Výkopové práce prováděné technikou MB Profi"
            width="1200"
            height="900"
            loading="lazy"
          />
          <span className="services__stamp">PLZEŇSKO<br />V TERÉNU</span>
        </div>

        <div className="service-list">
          {services.map((service) => (
            <article className="service" key={service.title}>
              <span className="service__mark" aria-hidden="true" />
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="trust" id="spoluprace" aria-labelledby="trust-title">
        <div className="trust__image-wrap">
          <img
            src="/section-2.webp"
            alt="Dokončená terénní úprava a oplocení od MB Profi"
            width="1200"
            height="1000"
            loading="lazy"
          />
          <p className="image-note">Výkop, příprava i oplocení řeší jedna parta.</p>
        </div>

        <div className="trust__content">
          <p className="section-label">Domluva bez objížděk</p>
          <h2 id="trust-title">Víte, kdo přijede a co bude následovat.</h2>
          <p className="trust__lead">
            Než technika vyjede, projdeme přístup na pozemek, rozsah výkopu i návazné práce. Díky tomu se na místě neztrácí čas a hotový výkop odpovídá tomu, co do něj přijde.
          </p>

          <dl className="facts">
            <div>
              <dt>Odezva</dt>
              <dd>Na zprávy běžně reagujeme do 24 hodin.</dd>
            </div>
            <div>
              <dt>Termín</dt>
              <dd>Práci zpravidla zahájíme během několika týdnů od objednání.</dd>
            </div>
            <div>
              <dt>Dostupnost</dt>
              <dd>Telefon zvedáme v pracovní dny od 7:00 do 17:00.</dd>
            </div>
          </dl>

          <div className="contact-line">
            <span>Proberme váš pozemek</span>
            <a href="tel:+420720119198">720 119 198</a>
            <a href="mailto:info@mbprofi.cz">info@mbprofi.cz</a>
          </div>
        </div>
      </section>
    </main>
  );
}

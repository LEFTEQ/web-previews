export default function Page() {
  const services = [
    {
      title: "Sádrokartonové konstrukce",
      text: "Příčky, předstěny a podhledy pro byty, kanceláře i náročné provozy. Dodáme a namontujeme celý systém podle požární, akustické i bezpečnostní specifikace.",
      systems: "Rigips · Knauf · Siniat",
    },
    {
      title: "Akustické podhledy",
      text: "Zkrátíme dozvuk ve třídě, herně, kanceláři nebo studiu. Navrhneme skladbu, připravíme nosnou konstrukci a přesně osadíme pohledové desky.",
      systems: "Ecophon · Rockfon · OWA · AMF",
    },
    {
      title: "Tvrdé desky a fasády",
      text: "Montujeme podlahy, venkovní obklady a atypické konstrukce z cementotřískových a cementovláknitých desek pro odolné interiéry i exteriéry.",
      systems: "Cetris · Cembonit",
    },
  ];

  return (
    <>
      <title>Falco DD | Montáž suchých staveb v Liberci</title>
      <meta
        name="description"
        content="Sádrokartony, akustické podhledy a atypické suché konstrukce v Liberci a okolí. Řemeslná praxe od roku 1994."
      />
      <meta property="og:title" content="Falco DD | Suché stavby bez improvizace" />
      <meta
        property="og:description"
        content="Montáž sádrokartonů, akustických podhledů a atypických konstrukcí v Liberci a okolí."
      />
      <meta property="og:type" content="website" />

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <header className="site-header">
            <a className="wordmark" href="#nahoru" aria-label="Falco DD – úvod">
              <span className="wordmark-main">FALCO</span>
              <span className="wordmark-cut" aria-hidden="true" />
              <span className="wordmark-sub">DD / SUCHÉ STAVBY</span>
            </a>

            <nav className="desktop-nav" aria-label="Hlavní navigace">
              <a href="#sluzby">Co montujeme</a>
              <a href="#zkusenost">Proč Falco</a>
              <a className="nav-phone" href="tel:+420775658005">Zavolat 775 658 005</a>
            </nav>

            <details className="mobile-menu">
              <summary aria-label="Otevřít navigaci">Menu</summary>
              <nav aria-label="Mobilní navigace">
                <a href="#sluzby">Co montujeme</a>
                <a href="#zkusenost">Proč Falco</a>
                <a href="tel:+420775658005">Zavolat 775 658 005</a>
              </nav>
            </details>
          </header>

          <div className="hero-image" id="nahoru">
            <img
              src="/hero.webp"
              alt="Montér Falco DD při přesné montáži sádrokartonové konstrukce"
            />
            <div className="hero-scrim" aria-hidden="true" />
            <div className="measure-line" aria-hidden="true">
              <span>0</span><i /><span>600</span><i /><span>1200 mm</span>
            </div>
          </div>

          <div className="hero-copy">
            <p className="eyebrow">Liberec a severní Čechy / praxe od roku 1994</p>
            <h1 id="hero-title">
              Suchá stavba.
              <span>Přesně na míru.</span>
            </h1>
            <div className="hero-bottom">
              <p>
                Sádrokartony, akustické podhledy a atypické konstrukce montujeme jako
                kompletní funkční systém — čistě, přesně a podle projektu.
              </p>
              <a className="primary-action" href="mailto:montaze@falcodd.cz?subject=Poptávka%20montáže">
                Poptat montáž
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="services" id="sluzby" aria-labelledby="services-title">
          <div className="section-heading">
            <p className="section-label">Systémy, které montujeme</p>
            <h2 id="services-title">Od příčky po akustický strop</h2>
            <p>
              Neprodáváme jednu univerzální desku. Volíme skladbu podle toho, co má
              konstrukce skutečně zvládnout: hluk, oheň, vlhkost nebo vysoké zatížení.
            </p>
          </div>

          <div className="services-layout">
            <div className="services-image">
              <img
                src="/section-1.webp"
                alt="Detail nosných profilů a sádrokartonových desek při montáži"
              />
              <span className="image-note">Profily / desky / izolace / přesná skladba</span>
            </div>

            <div className="service-list">
              {services.map((service) => (
                <article className="service-item" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <span>{service.systems}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="trust" id="zkusenost" aria-labelledby="trust-title">
          <div className="trust-image">
            <img
              src="/section-2.webp"
              alt="Hotový interiér s precizně provedeným podhledem Falco DD"
            />
            <div className="project-tag">
              <span>Realizace</span>
              <strong>Liberecký kraj</strong>
            </div>
          </div>

          <div className="trust-copy">
            <p className="section-label">Řemeslo pod povrchem</p>
            <h2 id="trust-title">Výsledek je rovný. Důležité je ale to, co není vidět.</h2>
            <p className="trust-lead">
              Pavel Molnár pracuje v suché výstavbě od roku 1994 — od samotné montáže
              přes přípravu a rozpočty až po vedení realizací. Díky tomu řešíme detail
              dřív, než se z něj na stavbě stane problém.
            </p>

            <dl className="proof-grid">
              <div>
                <dt>Od roku 1994</dt>
                <dd>praktická zkušenost se suchou výstavbou</dd>
              </div>
              <div>
                <dt>Jedna skladba</dt>
                <dd>navržená pro konkrétní akustiku, požár či vlhkost</dd>
              </div>
              <div>
                <dt>Stálí montéři</dt>
                <dd>sehraný tým, který zná naše nároky na detail</dd>
              </div>
            </dl>

            <div className="references" aria-label="Vybrané reference">
              <p>Vybrané realizace</p>
              <ul>
                <li>Vila pod Špičákem, Varnsdorf</li>
                <li>Lůžkový hospic Libereckého kraje</li>
                <li>Vstupní hala Auto Partner</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

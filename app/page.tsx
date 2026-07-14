export default function Page() {
  const services = [
    {
      title: "Pravidelný úklid",
      text: "Byty, rodinné domy, kanceláře i společné prostory. Přijedeme denně, týdně nebo měsíčně podle vašeho režimu.",
      tag: "Doma i ve firmě",
    },
    {
      title: "Generální úklid",
      text: "Důkladná péče před svátky, po stěhování, malování nebo rekonstrukci — včetně oken a těžko dostupných míst.",
      tag: "Jednorázově",
    },
    {
      title: "Čisté povrchy navíc",
      text: "Mytí oken, čištění koberců, žehlení i kompletní čištění vozidel. Rozsah si domluvíte předem.",
      tag: "Podle potřeby",
    },
  ];

  const clients = [
    "Sothys Paris Ostrava",
    "FABRIC Ostrava",
    "Akademie FC Baník",
    "Kamenolomy ČR",
    "Rybka Reality",
    "SBD Vítkovice",
  ];

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <nav className="nav shell" aria-label="Hlavní navigace">
          <a className="wordmark" href="#zacatek" aria-label="Brilliant cleaning — úvod">
            <span>brilliant</span>
            <small>cleaning · Ostrava</small>
          </a>

          <div className="nav-links">
            <a href="#sluzby">Služby</a>
            <a href="#duvera">Jak uklízíme</a>
          </div>

          <a className="nav-call" href="tel:+420777554645">
            Zavolat
          </a>
        </nav>

        <div className="hero-stage" id="zacatek">
          <img
            className="hero-image"
            src="/hero.webp"
            alt="Profesionální úklid světlého interiéru v Ostravě"
          />
          <div className="hero-shade" aria-hidden="true" />
          <div className="clean-swipe" aria-hidden="true">
            <span className="swipe-line" />
          </div>

          <div className="hero-content shell">
            <p className="eyebrow">Úklidové služby · Ostrava a okolí</p>
            <h1 id="hero-title">
              Čisto, které
              <span>zůstane v klidu.</span>
            </h1>
            <p className="hero-lead">
              Pečlivě uklidíme váš domov, kancelář i dům. Šetrně k povrchům,
              ohleduplně k soukromí a vždy v domluveném čase.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="tel:+420777554645">
                Domluvit úklid
                <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#sluzby">
                Prohlédnout služby
              </a>
            </div>
          </div>

          <div className="hero-note">
            <span className="eco-mark" aria-hidden="true">EKO</span>
            <p>
              Vlákna a šetrné prostředky Jemako
              <strong>pro domácnosti i provozy</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="services shell section" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow blue">Co pro vás uklidíme</p>
          <h2 id="services-title">Jeden spolehlivý tým. Každý typ nepořádku.</h2>
          <p>
            Rozsah i četnost nastavíme podle prostoru — bez univerzálních balíčků,
            které platíte, i když je nepotřebujete.
          </p>
        </div>

        <div className="services-layout">
          <div className="service-list">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <span className="service-tag">{service.tag}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>

          <figure className="service-visual">
            <img
              src="/section-1.webp"
              alt="Pečlivé čištění povrchů profesionální pracovnicí"
              loading="lazy"
            />
            <figcaption>
              <span>Od 350 Kč</span>
              <p>za osobu a hodinu generálního úklidu</p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="trust section" id="duvera" aria-labelledby="trust-title">
        <div className="trust-grid shell">
          <div className="trust-visual">
            <img
              src="/section-2.webp"
              alt="Čistý a upravený interiér po profesionálním úklidu"
              loading="lazy"
            />
            <div className="same-person">
              <span aria-hidden="true">✓</span>
              <p>
                K vám chodí
                <strong>stejný pracovník</strong>
              </p>
            </div>
          </div>

          <div className="trust-content">
            <p className="eyebrow aqua">Důvěra začíná u dveří</p>
            <h2 id="trust-title">Váš prostor poznáme. Vaše soukromí respektujeme.</h2>
            <p className="trust-intro">
              Jsme menší ostravská firma, a proto se nemusíte pokaždé seznamovat
              s někým novým. Stejný pracovník zná vaše požadavky, povrchy i to,
              na čem vám záleží.
            </p>

            <ul className="promise-list">
              <li>
                <span>01</span>
                <p><strong>Domluva bez překvapení</strong>Termín, rozsah i orientační cenu potvrdíme předem.</p>
              </li>
              <li>
                <span>02</span>
                <p><strong>Šetrná čistota</strong>Používáme speciální vlákna a ekologické prostředky Jemako.</p>
              </li>
              <li>
                <span>03</span>
                <p><strong>Péče o každý prostor</strong>Dáváme pozor na nábytek, citlivé povrchy i domácí mazlíčky.</p>
              </li>
            </ul>

            <div className="client-proof" aria-label="Výběr klientů">
              <p>Spoléhají na nás v Ostravě a okolí</p>
              <div className="client-list">
                {clients.map((client) => <span key={client}>{client}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function HomePage() {
  const services = [
    {
      label: "BYTOVÉ DOMY",
      title: "Společné prostory bez starostí",
      text: "Pravidelně uklízíme vstupy, schodiště, výtahy, sklepy i okolí domu. Rozsah a četnost nastavíme podle provozu vašeho SVJ.",
    },
    {
      label: "KANCELÁŘE",
      title: "Čisté zázemí pro každý pracovní den",
      text: "Postaráme se o pracovní plochy, kuchyňky, sociální zařízení i frekventované kontaktní body — v čase, který nenaruší váš provoz.",
    },
    {
      label: "PRŮMYSL",
      title: "Úklid, který respektuje výrobu",
      text: "Udržujeme výrobní, skladové a provozní prostory. Práci plánujeme podle vašich směn a bezpečnostních pravidel.",
    },
  ];

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__image" aria-hidden="true">
          <img
            src="/hero.webp"
            alt=""
            className="hero__photo"
            width="1600"
            height="1100"
            fetchPriority="high"
          />
          <span className="hero__wash" />
        </div>

        <nav className="topbar" aria-label="Hlavní navigace">
          <a className="wordmark" href="#zacatek" aria-label="Plzeňské služby facility — úvod">
            <span className="wordmark__mark" aria-hidden="true">P</span>
            <span>
              <strong>PLZEŇSKÉ</strong>
              <small>SLUŽBY FACILITY</small>
            </span>
          </a>
          <a className="topbar__phone" href="tel:+420734330438">
            <span>Domluvit úklid</span>
            <strong>734 330 438</strong>
          </a>
        </nav>

        <div className="hero__content" id="zacatek">
          <p className="eyebrow">Úklidové služby · Plzeň a okolí</p>
          <h1 id="hero-title">
            Čistý prostor.
            <span>Klidná hlava.</span>
          </h1>
          <p className="hero__lead">
            Pravidelný úklid bytových domů, kanceláří a průmyslových provozů. Přijedeme včas, držíme domluvený standard a víme, že čistota se pozná v detailu.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="tel:+420734330438">Zavolat a domluvit úklid</a>
            <a className="text-link" href="#sluzby">Prohlédnout služby <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="hero__proof" aria-label="Zkušenosti a působnost firmy">
          <div><strong>20+</strong><span>let zkušeností</span></div>
          <div><strong>20+</strong><span>SVJ v péči</span></div>
          <div><strong>100 %</strong><span>Plzeňského kraje</span></div>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow eyebrow--blue">Co pro vás uklidíme</p>
          <h2 id="services-title">Pořádek podle rytmu vašeho prostoru</h2>
          <p>Neprodáváme jeden univerzální balíček. Nejdřív projdeme místo, zjistíme jeho provoz a navrhneme konkrétní rozsah úklidu.</p>
        </div>

        <div className="services__layout">
          <figure className="services__figure">
            <img
              src="/section-1.webp"
              alt="Profesionální úklid společných prostor bytového domu v Plzni"
              width="1100"
              height="1300"
              loading="lazy"
            />
            <figcaption>Pravidelná péče, ne jednorázový dojem.</figcaption>
          </figure>

          <div className="service-list">
            {services.map((service) => (
              <article className="service" key={service.label}>
                <p className="service__label">{service.label}</p>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" aria-labelledby="trust-title">
        <div className="trust__visual">
          <img
            src="/section-2.webp"
            alt="Pracovnice úklidové firmy při pečlivém čištění komerčního prostoru"
            width="1400"
            height="1050"
            loading="lazy"
          />
          <div className="trust__stamp">
            <span>PLZEŇ</span>
            <strong>Na Poříčí 3</strong>
          </div>
        </div>

        <div className="trust__content">
          <p className="eyebrow eyebrow--light">Na čem se můžete spolehnout</p>
          <h2 id="trust-title">Stejný standard. Každá návštěva.</h2>
          <p className="trust__intro">
            Úklid má fungovat tiše a spolehlivě. Proto máte jasně domluvený rozsah, přímý kontakt a tým, který zná váš objekt.
          </p>

          <dl className="commitments">
            <div>
              <dt>Stálá péče</dt>
              <dd>Kontrolujeme výsledek a hlídáme, aby kvalita neklesala s časem.</dd>
            </div>
            <div>
              <dt>Domluva bez kolečka</dt>
              <dd>Voláte přímo člověku, který zná vaši zakázku i její provoz.</dd>
            </div>
            <div>
              <dt>Plzeňská dostupnost</dt>
              <dd>Jsme z Plzně a zajišťujeme objekty po celém Plzeňském kraji.</dd>
            </div>
          </dl>

          <div className="contact-line">
            <p>Potřebujete nacenit svůj objekt?</p>
            <a href="tel:+420734330438">+420 734 330 438</a>
            <a href="mailto:info@uklidplzen.cz">info@uklidplzen.cz</a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function Page() {
  const services = [
    {
      name: "Karoserie",
      detail: "Rovnání a opravy poškozených dílů, výměny prahů, lemů, blatníků i nosných částí.",
      tag: "Klempírna",
    },
    {
      name: "Lakování",
      detail: "Příprava povrchu, přesné sladění odstínu a lakování jednotlivých dílů i větších celků.",
      tag: "Lakovna",
    },
    {
      name: "Nehody",
      detail: "Posouzení škody, oprava karoserie, komunikace k opravě a zapůjčení náhradního vozu.",
      tag: "Po nehodě",
    },
    {
      name: "Speciální vozy",
      detail: "Karosářské práce pro firemní flotily, obytné vozy do 3,5 t a veterány.",
      tag: "Na míru",
    },
  ];

  return (
    <main className="ng-page">
      <section className="ng-hero" id="uvod" aria-labelledby="hero-title">
        <img
          className="ng-hero__image"
          src="/hero.webp"
          alt="Autoklempíř při přesné opravě karoserie v dílně Autoservisu Neugebauer"
        />
        <div className="ng-hero__shade" aria-hidden="true" />

        <header className="ng-header">
          <a className="ng-wordmark" href="#uvod" aria-label="Autoservis Neugebauer – úvod">
            <span className="ng-wordmark__main">NEUGEBAUER</span>
            <span className="ng-wordmark__sub">autoklempířství · Hradec Králové</span>
          </a>

          <nav className="ng-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Karosářské práce</a>
            <a href="#zkusenost">Proč k nám</a>
            <a className="ng-nav__phone" href="tel:+420602405782">602 405 782</a>
          </nav>
        </header>

        <div className="ng-hero__content">
          <p className="ng-eyebrow">Karosářská dílna · od roku 1991</p>
          <h1 id="hero-title">
            Karoserie se
            <span>nevyhazuje.</span>
            Vrací se do tvaru.
          </h1>
          <p className="ng-hero__lead">
            Promáčklý blatník, poškození po nehodě i rozsáhlá renovace. V Hradci Králové opravujeme
            karoserie všech značek tak, aby vůz znovu držel tvar, odstín i hodnotu.
          </p>
          <div className="ng-hero__actions">
            <a className="ng-button ng-button--primary" href="tel:+420602405782">
              Zavolat do dílny
            </a>
            <a className="ng-button ng-button--quiet" href="#sluzby">
              Prohlédnout služby
            </a>
          </div>
        </div>

        <div className="ng-metal-note" aria-label="Základní informace">
          <span>Všechny značky</span>
          <span>Hradec Králové</span>
          <span>Náhradní vůz</span>
        </div>
      </section>

      <section className="ng-services" id="sluzby" aria-labelledby="services-title">
        <div className="ng-section-head">
          <div>
            <p className="ng-kicker">Co vyřešíme v dílně</p>
            <h2 id="services-title">Od prvního proměření po poslední vrstvu laku.</h2>
          </div>
          <p>
            Nejprve zjistíme skutečný rozsah poškození. Pak navrhneme opravu, která dává smysl
            technicky i cenou — bez výměny dílů, které lze poctivě zachránit.
          </p>
        </div>

        <div className="ng-services__layout">
          <figure className="ng-workshop-figure">
            <img
              src="/section-1.webp"
              alt="Detail karosářské práce na poškozeném dílu automobilu"
            />
            <figcaption>
              <span>01</span>
              <p><strong>Proměření poškození</strong> ukáže, co lze opravit a co je bezpečnější vyměnit.</p>
            </figcaption>
          </figure>

          <ul className="ng-service-list">
            {services.map((service) => (
              <li key={service.name}>
                <span className="ng-service-list__tag">{service.tag}</span>
                <h3>{service.name}</h3>
                <p>{service.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ng-trust" id="zkusenost" aria-labelledby="trust-title">
        <div className="ng-trust__image-wrap">
          <img
            src="/section-2.webp"
            alt="Hotová karoserie vozu po opravě v Autoservisu Neugebauer v Hradci Králové"
          />
          <div className="ng-quality-stamp" aria-label="Tradice od roku 1991">
            <span>od</span>
            <strong>1991</strong>
            <span>v Hradci</span>
          </div>
        </div>

        <div className="ng-trust__content">
          <p className="ng-kicker">Důvěra stojí na detailu</p>
          <h2 id="trust-title">Oprava, která není poznat. Přístup, který ano.</h2>
          <p className="ng-trust__intro">
            Neugebauer je rodinně vedený servis s dlouhou praxí v opravách běžných vozů, firemních
            flotil, obytných automobilů i veteránů. Zakázku s vámi řeší lidé, kteří ji také vidí v dílně.
          </p>

          <dl className="ng-proof-list">
            <div>
              <dt>Než začneme</dt>
              <dd>Projdeme rozsah práce a řekneme vám, jaký postup doporučujeme.</dd>
            </div>
            <div>
              <dt>Během opravy</dt>
              <dd>Karosářské, lakýrnické i navazující servisní práce řešíte na jednom místě.</dd>
            </div>
            <div>
              <dt>Než odjedete</dt>
              <dd>Zkontrolujeme slícování dílů, povrch, odstín i funkci opravovaných částí.</dd>
            </div>
          </dl>

          <div className="ng-current">
            <span className="ng-current__dot" aria-hidden="true" />
            Aktuální nabídka služeb · Hradec Králové · 2026
          </div>
        </div>
      </section>

      <a className="ng-mobile-call" href="tel:+420602405782" aria-label="Zavolat do Autoservisu Neugebauer">
        <span>Zavolat do dílny</span>
        <strong>602 405 782</strong>
      </a>
    </main>
  );
}

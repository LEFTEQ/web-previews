export default function Page() {
  const services = [
    {
      title: "Klimatizace a rekuperace",
      text: "Navrhneme, dodáme a zapojíme jednotku podle dispozice budovy, provozu i požadovaného komfortu.",
      tag: "Byty · kanceláře · provozy",
    },
    {
      title: "Průmyslové odsávání",
      text: "Odvedeme prach, výpary i teplo přímo od robotické linky nebo technologie. Včetně projektu, měření a regulace.",
      tag: "Výroba · robotické linky",
    },
    {
      title: "Vzduchové clony",
      text: "Omezíme únik tepla přes dveře a vrata. Dodáváme dveřní i vratové clony pro obchody, haly a sklady.",
      tag: "Vstupy · vrata · expedice",
    },
    {
      title: "Tichá vzduchotechnika",
      text: "Upravíme hlučné rozvody a zařízení tak, aby vzduchotechnika splnila svůj účel bez zbytečného hluku.",
      tag: "Tlumení · protihlukové úpravy",
    },
  ];

  return (
    <main className="kk-site">
      <section className="kk-hero" aria-labelledby="hero-title">
        <header className="kk-header">
          <a className="kk-wordmark" href="#nahore" aria-label="Klima Komplex – úvod">
            <span className="kk-wordmark-air" aria-hidden="true">K</span>
            <span>
              KLIMA
              <b>KOMPLEX</b>
            </span>
          </a>

          <nav className="kk-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Co řešíme</a>
            <a href="#zkusenosti">Zkušenosti</a>
          </nav>

          <a className="kk-phone" href="tel:+420606818484">
            <span>Technická konzultace</span>
            +420 606 818 484
          </a>
        </header>

        <div className="kk-hero-grid" id="nahore">
          <div className="kk-hero-copy">
            <p className="kk-kicker">Vzduchotechnika · Liberec · od roku 1991</p>
            <h1 id="hero-title">
              Čistý vzduch.
              <span>Správným směrem.</span>
            </h1>
            <p className="kk-lead">
              Projektujeme a realizujeme klimatizace, rekuperaci a průmyslové odsávání. Od prvního výpočtu až po servis drží celý systém pohromadě jeden zkušený tým.
            </p>
            <div className="kk-actions">
              <a className="kk-primary" href="tel:+420606818484">Zavolat technikovi</a>
              <a className="kk-secondary" href="#sluzby">Prohlédnout řešení</a>
            </div>
          </div>

          <div className="kk-hero-visual">
            <div className="kk-air-rings" aria-hidden="true">
              <i></i><i></i><i></i>
            </div>
            <div className="kk-hero-image">
              <img
                src="/hero.webp"
                alt="Moderní klimatizační jednotka instalovaná techniky Klima Komplex"
              />
            </div>
            <div className="kk-system-label">
              <span className="kk-pulse" aria-hidden="true"></span>
              Návrh · dodávka · montáž · servis
            </div>
          </div>
        </div>

        <div className="kk-airline" aria-hidden="true">
          <span></span>
        </div>
      </section>

      <section className="kk-services" id="sluzby" aria-labelledby="services-title">
        <div className="kk-section-heading">
          <p className="kk-kicker">Od místnosti po výrobní halu</p>
          <h2 id="services-title">Vzduch řešíme jako celý systém.</h2>
          <p>
            Neprodáváme krabici ze skladu. Nejprve zjistíme, kudy má vzduch proudit, co má odvést a jak tiše má zařízení pracovat.
          </p>
        </div>

        <div className="kk-services-layout">
          <figure className="kk-service-photo">
            <img
              src="/section-1.webp"
              alt="Technik při odborné montáži vzduchotechnického systému"
              loading="lazy"
            />
            <figcaption>
              <span>Kompletní dodávka</span>
              Projekt i montáž koordinujeme bez přehazování odpovědnosti.
            </figcaption>
          </figure>

          <div className="kk-service-list">
            {services.map((service) => (
              <article className="kk-service" key={service.title}>
                <p>{service.tag}</p>
                <h3>{service.title}</h3>
                <div className="kk-service-detail">
                  <span>{service.text}</span>
                  <span className="kk-arrow" aria-hidden="true">→</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="kk-trust" id="zkusenosti" aria-labelledby="trust-title">
        <div className="kk-trust-image">
          <img
            src="/section-2.webp"
            alt="Rozvody vzduchotechniky v průmyslovém provozu"
            loading="lazy"
          />
          <div className="kk-image-note">Liberec / realizace v ČR i Evropě</div>
        </div>

        <div className="kk-trust-copy">
          <p className="kk-kicker">Technika prostředí bez improvizace</p>
          <h2 id="trust-title">Zkušenost, která je znát ještě před spuštěním.</h2>
          <p className="kk-trust-intro">
            Klima-Komplex vznikl v Liberci v roce 1991 na zkušenostech odborníků z Libereckých vzduchotechnických závodů. Dnes navrhujeme zařízení pro menší budovy i náročné průmyslové technologie.
          </p>

          <dl className="kk-facts">
            <div>
              <dt>35 let</dt>
              <dd>projekce, montáží a odborného servisu</dd>
            </div>
            <div>
              <dt>Jeden tým</dt>
              <dd>od návrhu přes regulaci až po uvedení do provozu</dd>
            </div>
            <div>
              <dt>Průmysl</dt>
              <dd>zkušenosti s odsáváním linek a výrobních technologií</dd>
            </div>
          </dl>

          <aside className="kk-quote">
            <p>„Potřebujeme, aby zařízení fungovalo v reálném provozu — ne jen na výkresu.“</p>
            <span>Princip, podle kterého řešíme každou zakázku</span>
          </aside>

          <div className="kk-contact-line">
            <span>Provozovna: Hodkovická 135, Liberec–Doubí</span>
            <a href="mailto:info@klimakomplex.cz">info@klimakomplex.cz</a>
          </div>
        </div>
      </section>
    </main>
  );
}

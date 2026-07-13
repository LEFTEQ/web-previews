export default function Page() {
  const services = [
    {
      name: "Tvarování obočí",
      detail: "Mapování, šetrná úprava a odstín zvolený podle vlasů i tónu pleti.",
      result: "Přesný tvar bez tvrdých hran",
    },
    {
      name: "Laminace obočí",
      detail: "Uspořádá neposlušné chloupky, opticky doplní tvar a usnadní každodenní úpravu.",
      result: "Upravený vzhled po probuzení",
    },
    {
      name: "Lash lifting",
      detail: "Zvýrazní přirozené řasy natočením a barvou, bez prodlužování a každodenních kleštiček.",
      result: "Otevřenější pohled bez řasenky",
    },
  ];

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#uvod" aria-label="Prime Studio, úvod">
            <span>PRIME</span>
            <small>STUDIO · PLZEŇ</small>
          </a>
          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#pece">Péče o pohled</a>
            <a href="#studio">Studio</a>
            <a className="nav-call" href="tel:+420776696849">Zavolat</a>
          </nav>
        </header>

        <div className="hero-stage" id="uvod">
          <div className="hero-copy">
            <p className="eyebrow">Na Roudné 26 · Plzeň</p>
            <h1 id="hero-title">Váš pohled.<br /><span>Jen přesněji.</span></h1>
            <p className="hero-intro">
              Obočí a řasy upravujeme podle vašich rysů, ne podle jedné šablony. Výsledek působí přirozeně zblízka i bez filtru.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="tel:+420776696849">Rezervovat péči</a>
              <span>Po–Pá · 9.00–17.00</span>
            </div>
          </div>

          <figure className="hero-visual">
            <img src="/hero.webp" alt="Detail precizně upraveného obočí a řas v Prime Studiu" />
            <figcaption>Individuální tvarování · Plzeň</figcaption>
            <span className="brow-line" aria-hidden="true" />
          </figure>
        </div>
      </section>

      <section className="services" id="pece" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Péče o pohled</p>
          <h2 id="services-title">Nejdřív rysy.<br />Potom technika.</h2>
          <p>
            Před úpravou si společně ujasníme, co vám vyhovuje. Respektujeme směr růstu, přirozenou hustotu i to, kolik času chcete obočí a řasám věnovat doma.
          </p>
        </div>

        <div className="services-layout">
          <figure className="section-image service-image">
            <img src="/section-1.webp" alt="Detail práce kosmetičky při úpravě obočí" />
            <figcaption>Klidná práce, čisté linie</figcaption>
          </figure>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-item" key={service.name}>
                <h3>{service.name}</h3>
                <p>{service.detail}</p>
                <span>{service.result}</span>
              </article>
            ))}
            <a className="text-link" href="tel:+420776696849">Probrat vhodnou péči <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section className="studio" id="studio" aria-labelledby="studio-title">
        <div className="studio-grid">
          <div className="studio-copy">
            <p className="eyebrow">Prime Studio · Plzeň</p>
            <h2 id="studio-title">Péče bez spěchu a bez univerzálních řešení.</h2>
            <p className="studio-lead">
              Přijdete s konkrétní představou, nebo klidně bez ní. Doporučíme jen takovou úpravu, která sedí vašemu obličeji a běžnému rytmu.
            </p>

            <dl className="studio-facts">
              <div>
                <dt>Kde nás najdete</dt>
                <dd>Na Roudné 26<br />301 00 Plzeň 1</dd>
              </div>
              <div>
                <dt>Kdy máme otevřeno</dt>
                <dd>Po–Pá: 9.00–17.00<br />So–Ne: zavřeno</dd>
              </div>
              <div>
                <dt>Rezervace</dt>
                <dd><a href="tel:+420776696849">+420 776 696 849</a><br /><a href="mailto:info@prime-studio.cz">info@prime-studio.cz</a></dd>
              </div>
            </dl>
          </div>

          <figure className="section-image studio-image">
            <img src="/section-2.webp" alt="Interiér Prime Studia v Plzni připravený na kosmetické ošetření" />
            <figcaption>
              <strong>Na Roudné</strong>
              <span>Soukromí, čistota a čas vyhrazený pro vás</span>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}

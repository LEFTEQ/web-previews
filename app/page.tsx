export default function Page() {
  const services = [
    {
      name: "Přírodní manikúra",
      time: "60 minut",
      price: "od 690 Kč",
      description:
        "Úprava tvaru, šetrné ošetření kůžičky, leštění a výživný olej. Pro upravené nehty bez zbytečného nánosu.",
      detail: "pilník • lázeň • olej",
    },
    {
      name: "Péče s lakováním",
      time: "75 minut",
      price: "od 850 Kč",
      description:
        "Kompletní manikúra a precizní lakování v odstínu, který sedí tónu pokožky i vašemu běžnému dni.",
      detail: "tvar • barva • výživa",
    },
    {
      name: "Pedikúra a chodidla",
      time: "90 minut",
      price: "od 990 Kč",
      description:
        "Změkčující koupel, úprava nehtů a zrohovatělé kůže, závěrečná masáž chodidel přírodním balzámem.",
      detail: "koupel • úprava • masáž",
    },
  ];

  return (
    <main className="haaro-page">
      <section className="hero" id="uvod">
        <header className="site-header">
          <a className="wordmark" href="#uvod" aria-label="Haaro Naturo – na začátek stránky">
            <span>haaro</span>
            <small>naturo · ruce &amp; chodidla</small>
          </a>

          <nav className="main-nav" aria-label="Hlavní navigace">
            <a href="#pece">Péče</a>
            <a href="#salon">Salon</a>
          </nav>

          <a className="header-call" href="tel:+420775374065">
            Zavolat pro termín
          </a>
        </header>

        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">Manikúra a pedikúra · Liberec</p>
            <h1>
              Klid pro vás.
              <span>Péče až ke konečkům.</span>
            </h1>
            <p className="hero-lead">
              Šetrně upravíme ruce i chodidla, vybereme péči podle stavu pokožky a dopřejeme vám hodinu,
              během které nemusíte nic řešit.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="tel:+420775374065">
                Zavolat a rezervovat
              </a>
              <span className="availability">Po–Pá · 7:00–15:00</span>
            </div>
          </div>

          <div className="nail-stage" aria-label="Přírodní péče o nehty v salonu Haaro Naturo">
            <div className="nail-frame">
              <img
                src="/hero.webp"
                alt="Detail upravených rukou při přírodní manikúře Haaro Naturo"
                width="1200"
                height="1500"
                fetchPriority="high"
                decoding="async"
              />
              <span className="nail-lunula" aria-hidden="true" />
            </div>
            <p className="stage-note">Tvar, který respektuje váš přirozený nehet.</p>
          </div>
        </div>
      </section>

      <section className="services" id="pece">
        <div className="section-intro">
          <p className="eyebrow">Co si u nás dopřejete</p>
          <h2>Péče bez spěchu a bez univerzálního postupu.</h2>
          <p>
            Nejdřív se podíváme, co vaše nehty a pokožka skutečně potřebují. Teprve potom vybíráme
            nástroje, intenzitu ošetření i závěrečný olej.
          </p>
        </div>

        <div className="services-layout">
          <figure className="service-image">
            <img
              src="/section-1.webp"
              alt="Manikérka při přesné úpravě přírodního nehtu"
              width="1200"
              height="1500"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Jemná práce, čisté nástroje, čas vyhrazený jen vám.</figcaption>
          </figure>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-item" key={service.name}>
                <div className="service-heading">
                  <h3>{service.name}</h3>
                  <p>{service.price}</p>
                </div>
                <p className="service-description">{service.description}</p>
                <div className="service-meta">
                  <span>{service.detail}</span>
                  <span>{service.time}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" id="salon">
        <div className="trust-image-wrap">
          <img
            src="/section-2.webp"
            alt="Klidné zázemí salonu Haaro Naturo v Liberci"
            width="1500"
            height="1100"
            loading="lazy"
            decoding="async"
          />
          <div className="location-tag">
            <span>Liberec 5</span>
            <strong>Chelčického 293/5</strong>
          </div>
        </div>

        <div className="trust-copy">
          <p className="eyebrow">Salon, kde víte, kdo se o vás stará</p>
          <h2>Čistota je součást služby. Ne poznámka pod čarou.</h2>
          <p className="trust-lead">
            Každý termín má vlastní časový blok. Pracovní plochu i nástroje připravujeme před vaším
            příchodem a postup vysvětlíme dřív, než začneme.
          </p>

          <dl className="care-facts">
            <div>
              <dt>Hygiena</dt>
              <dd>Dezinfikované nástroje a jednorázové pomůcky tam, kde dávají smysl.</dd>
            </div>
            <div>
              <dt>Přípravky</dt>
              <dd>Šetrná péče, rostlinné oleje a balzámy vybrané podle aktuálního stavu pokožky.</dd>
            </div>
            <div>
              <dt>Domácí péče</dt>
              <dd>Odcházíte s konkrétním doporučením, ne s dlouhým seznamem produktů.</dd>
            </div>
          </dl>

          <blockquote>
            <p>
              „Oceňuji pečlivost, příjemný přístup a to, že jsem přesně věděla, co se při ošetření děje.“
            </p>
            <cite>— klientka salonu Haaro Naturo</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}

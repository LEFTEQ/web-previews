export default function Page() {
  const services = [
    {
      title: "Ostraha objektů",
      text: "Kontrola vstupů, obchůzky a řešení incidentů podle režimu vašeho provozu — od administrativy po výrobní areál.",
      tag: "Areály · provozy · kanceláře",
    },
    {
      title: "Dohled a prevence",
      text: "Nejdřív pojmenujeme slabá místa. Potom nastavíme kontrolní body, evidenci návštěv, klíčů i pohybu vozidel.",
      tag: "Perimetr · vstupy · evidence",
    },
    {
      title: "Recepční a pořadatelská služba",
      text: "Slušné přivítání, přehled o pohybu osob a jasná reakce ve chvíli, kdy běžný provoz přestane být běžný.",
      tag: "Recepce · akce · koordinace",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Projdeme objekt",
      text: "Na místě si ujasníme rizika, pohyb lidí, kritická místa i očekávání vašeho týmu.",
    },
    {
      number: "02",
      title: "Sepíšeme režim",
      text: "Dostanete srozumitelný rozsah služby, odpovědnosti a postupy pro běžné i mimořádné situace.",
    },
    {
      number: "03",
      title: "Držíme dohled",
      text: "Určíme kontaktní osobu, vedeme záznamy a průběžně reportujeme, co se v objektu skutečně děje.",
    },
  ];

  return (
    <main>
      <section className="hero" id="uvod" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#uvod" aria-label="Slezská bezpečnostní — úvod">
            <span className="wordmark__mark" aria-hidden="true">
              SB
            </span>
            <span className="wordmark__name">
              Slezská
              <strong>bezpečnostní</strong>
            </span>
          </a>

          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Služby</a>
            <a href="#postup">Jak pracujeme</a>
            <a className="site-nav__cta" href="mailto:info@slezska-bs.cz?subject=Poptávka%20bezpečnostních%20služeb">
              Napsat poptávku
            </a>
          </nav>
        </header>

        <div className="hero__media" aria-hidden="true">
          <img
            src="/hero.webp"
            alt=""
            width="1600"
            height="1100"
            fetchPriority="high"
          />
          <div className="hero__shade" />
          <div className="viewfinder">
            <span className="viewfinder__corner viewfinder__corner--tl" />
            <span className="viewfinder__corner viewfinder__corner--tr" />
            <span className="viewfinder__corner viewfinder__corner--bl" />
            <span className="viewfinder__corner viewfinder__corner--br" />
            <span className="viewfinder__axis" />
          </div>
        </div>

        <div className="hero__content">
          <p className="eyebrow">Bezpečnostní služby · Ostrava</p>
          <h1 id="hero-title">
            Klid není náhoda.
            <span>Má svůj režim.</span>
          </h1>
          <p className="hero__lead">
            Ostraha, dohled a recepční služby nastavené podle toho, jak váš objekt opravdu funguje — ne podle univerzální šablony.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="mailto:info@slezska-bs.cz?subject=Poptávka%20bezpečnostních%20služeb">
              Popsat, co potřebujete
              <span aria-hidden="true">↗</span>
            </a>
            <a className="button button--quiet" href="#sluzby">
              Prohlédnout služby
            </a>
          </div>
        </div>

        <div className="hero__status" aria-label="Informace o působnosti">
          <span className="hero__status-dot" aria-hidden="true" />
          <span>Působíme v Ostravě a okolí</span>
          <span className="hero__status-line" aria-hidden="true" />
          <span>Slezská Ostrava</span>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow eyebrow--dark">Co pro vás zajistíme</p>
          <h2 id="services-title">Bezpečnost, která zapadne do provozu.</h2>
          <p>
            Každý objekt má jiný rytmus, lidi i rizika. Rozsah služby proto skládáme až podle místa a odpovědností, které nám svěříte.
          </p>
        </div>

        <div className="services__layout">
          <figure className="services__image image-frame">
            <img
              src="/section-1.webp"
              alt="Pracovník bezpečnostní služby při kontrole střeženého objektu"
              width="900"
              height="1100"
              loading="lazy"
            />
            <figcaption>Viditelná přítomnost. Jasné postupy. Dohled bez zbytečného rozruchu.</figcaption>
          </figure>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <p className="service-card__tag">{service.tag}</p>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" id="postup" aria-labelledby="trust-title">
        <div className="trust__visual">
          <img
            src="/section-2.webp"
            alt="Bezpečnostní pracovník sleduje dění v ostravském areálu"
            width="1200"
            height="900"
            loading="lazy"
          />
          <div className="trust__address">
            <span>Naše základna</span>
            <strong>U Staré elektrárny 1881/4</strong>
            <span>Ostrava — Slezská Ostrava</span>
          </div>
        </div>

        <div className="trust__content">
          <p className="eyebrow">Důvěra se dá ověřit</p>
          <h2 id="trust-title">Víte, kdo hlídá. I podle čeho.</h2>
          <p className="trust__intro">
            Bezpečnostní služba má přinést přehled, ne další nejistotu. Proto si před zahájením odsouhlasíme konkrétní režim, kontakty a způsob evidence.
          </p>

          <ol className="process-list">
            {process.map((item) => (
              <li key={item.number}>
                <span className="process-list__number">{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="trust__facts" aria-label="Ověřitelné informace">
            <div>
              <span>Přímý kontakt</span>
              <a href="mailto:info@slezska-bs.cz">info@slezska-bs.cz</a>
            </div>
            <div>
              <span>Aktuálnost informací</span>
              <time dateTime="2026-07">červenec 2026</time>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

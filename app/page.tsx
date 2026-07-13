export default function Page() {
  const services = [
    {
      title: "Brány a branky",
      text: "Pevný ocelový rám a výplň DL PANELS navržená na konkrétní otvor, způsob otevírání i styl domu.",
      tag: "VJEZD / VSTUP",
    },
    {
      title: "Plotová pole",
      text: "Souvislé oplocení nebo solitérní dílce s laserovým motivem, který propouští světlo a drží soukromí.",
      tag: "HRANICE POZEMKU",
    },
    {
      title: "Zástěny a pergoly",
      text: "Odolné výplně pro terasy, přístřešky a krytá stání. Vždy připravené pro snadnou montáž.",
      tag: "SOUKROMÍ / STÍN",
    },
  ];

  return (
    <main>
      <a className="skip-link" href="#obsah">
        Přeskočit na obsah
      </a>

      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero__image"
          src="/hero.webp"
          alt="Detail laserem vyřezané ocelové výplně brány"
          width="1600"
          height="1000"
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero__shade" aria-hidden="true" />

        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="České brány – začátek stránky">
            <span>ČESKÉ</span>
            <span className="wordmark__cut">BRÁNY</span>
          </a>

          <nav className="nav" aria-label="Hlavní navigace">
            <a href="#nabidka">Co vyrábíme</a>
            <a href="#provedeni">Jak pracujeme</a>
            <a className="nav__phone" href="tel:+420792354110">
              Zavolat
            </a>
          </nav>
        </header>

        <div className="hero__content" id="top">
          <p className="eyebrow">Zakázková kovovýroba · Ostrava</p>
          <h1 id="hero-title">
            Plot, který má
            <span className="cut-word"> vlastní kresbu.</span>
          </h1>
          <p className="hero__lead">
            Navrhujeme a vyrábíme brány, branky a plotová pole s laserem řezanými výplněmi DL PANELS z pozinkované oceli.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="tel:+420792354110">
              Probrat váš plot
              <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="mailto:info@ceskebrany.cz">
              info@ceskebrany.cz
            </a>
          </div>
        </div>

        <div className="material-note" aria-label="Materiál výplní">
          <span className="material-note__line" aria-hidden="true" />
          <span className="material-note__value">2,5 mm</span>
          <span className="material-note__label">pozinkovaná ocel</span>
        </div>
      </section>

      <section className="services section-shell" id="obsah" aria-labelledby="nabidka">
        <div className="section-heading">
          <p className="eyebrow eyebrow--dark">DL PANELS · Design Lasered Panels</p>
          <h2 id="nabidka">Jeden motiv. Přesně pro váš dům.</h2>
          <p>
            Výplň nevytahujeme ze skladu. Rozměr, hustotu vzoru i rám přizpůsobíme místu, kde má brána nebo plot skutečně stát.
          </p>
        </div>

        <div className="services__layout">
          <figure className="panel-figure">
            <img
              src="/section-1.webp"
              alt="Moderní oplocení s laserem vyřezávanými panely DL PANELS"
              width="1200"
              height="900"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span>Řez světlem</span>
              Vzor vytváří soukromí, ale plot nepůsobí jako plná stěna.
            </figcaption>
          </figure>

          <div className="service-list">
            {services.map((service) => (
              <article className="service" key={service.title}>
                <p className="service__tag">{service.tag}</p>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="craft" id="provedeni" aria-labelledby="craft-title">
        <div className="craft__image-wrap">
          <img
            src="/section-2.webp"
            alt="Precizní zpracování ocelové brány v dílně Českých bran"
            width="1400"
            height="1050"
            loading="lazy"
            decoding="async"
          />
          <p className="image-stamp">Vyrobeno v Ostravě</p>
        </div>

        <div className="craft__content">
          <p className="eyebrow eyebrow--dark">Od oceli k hotové bráně</p>
          <h2 id="craft-title">Rám i výplň držíme v jedněch rukou.</h2>
          <p className="craft__intro">
            Jsme prvovýrobci. Neobjednáváte jen dekorativní panel, ale promyšlený celek od lidí, kteří rozumějí řezu, svařování i montáži.
          </p>

          <dl className="proof-list">
            <div>
              <dt>Materiál</dt>
              <dd>Pozinkovaná ocel o tloušťce 2,5 mm pro pevnost a dlouhou životnost.</dd>
            </div>
            <div>
              <dt>Provedení</dt>
              <dd>Zakázkový rozměr, vlastní rám a motiv zvolený podle míry soukromí.</dd>
            </div>
            <div>
              <dt>Zázemí</dt>
              <dd>Osobní domluva a výroba v Ostravě, bez anonymního přeprodávání.</dd>
            </div>
          </dl>

          <p className="freshness">Informace a nabídka aktualizovány 07 / 2026</p>
        </div>
      </section>
    </main>
  );
}

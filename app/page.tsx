export default function Page() {
  const services = [
    {
      name: "Komunikace",
      detail: "Nové silnice, místní komunikace, opravy povrchů i pravidelná údržba.",
      tag: "silnice / ulice",
    },
    {
      name: "Železnice",
      detail: "Výstavba, rekonstrukce a údržba železničního svršku.",
      tag: "koleje / přejezdy",
    },
    {
      name: "Mosty",
      detail: "Mostní konstrukce, propustky a navazující stavební práce.",
      tag: "mosty / propustky",
    },
    {
      name: "Průmyslové stavby",
      detail: "Pozemní realizace a zpevněné plochy pro provozy a areály.",
      tag: "haly / areály",
    },
    {
      name: "Recyklace a demolice",
      detail: "Řízené demolice, zemní práce a další využití stavebních hmot.",
      tag: "demolice / zemina",
    },
    {
      name: "Inženýrské sítě",
      detail: "Příprava území a pokládka sítí v souvislosti s celou stavbou.",
      tag: "voda / sítě",
    },
  ];

  return (
    <main className="miros-page">
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero__image"
          src="/hero.webp"
          alt="Stavební technika společnosti MIROS při realizaci dopravní stavby"
          fetchPriority="high"
        />
        <div className="hero__shade" aria-hidden="true" />

        <header className="site-header">
          <a className="wordmark" href="#zacatek" aria-label="MIROS Pardubice – úvod">
            <span className="wordmark__name">miros</span>
            <span className="wordmark__place">Pardubice</span>
          </a>

          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Co stavíme</a>
            <a href="#prubeh">Jak pracujeme</a>
          </nav>

          <a className="header-phone" href="tel:+420466797911">
            <span>Zavolat</span>
            <strong>466 797 911</strong>
          </a>
        </header>

        <div className="hero__content" id="zacatek">
          <p className="hero__eyebrow">Stavební společnost · Pardubice · od roku 1993</p>
          <h1 id="hero-title">
            Pevný bod
            <span>pro cesty</span>
            Pardubicka.
          </h1>
          <p className="hero__intro">
            Stavíme a obnovujeme komunikace, železnice, mosty i inženýrské sítě. Jeden tým pro
            práce, které na sebe musí přesně navazovat.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="mailto:miros@miros-pce.cz?subject=Poptávka%20stavby">
              Popsat plánovanou stavbu
              <span aria-hidden="true">↗</span>
            </a>
            <a className="button button--quiet" href="#sluzby">
              Projít naše práce
            </a>
          </div>
        </div>

        <div className="hero__datum" aria-label="Sídlo společnosti v Pardubicích">
          <span className="hero__datum-line" aria-hidden="true" />
          <span>50.0343° N</span>
          <span>15.7812° E</span>
          <strong>Pardubice</strong>
        </div>

        <p className="hero__caption">Komunikace · železnice · mosty</p>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="section-label">Rozsah prací / 6 odborností</p>
          <h2 id="services-title">Od podloží až po hotovou trasu.</h2>
          <p>
            Pro obce, správce infrastruktury i průmyslové areály zajišťujeme profese, které se na
            stavbě potkávají každý den.
          </p>
        </div>

        <div className="services__visual">
          <img
            src="/section-1.webp"
            alt="Práce stavebních strojů MIROS na infrastrukturní zakázce"
            loading="lazy"
            decoding="async"
          />
          <div className="services__visual-note">
            <span>MIROS / terén</span>
            <strong>Stavba jako celek, ne izolované úkony.</strong>
          </div>
        </div>

        <div className="service-list">
          {services.map((service) => (
            <article className="service-card" key={service.name}>
              <p>{service.tag}</p>
              <h3>{service.name}</h3>
              <span>{service.detail}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="process" id="prubeh" aria-labelledby="process-title">
        <div className="process__image-wrap">
          <img
            src="/section-2.webp"
            alt="Detail realizace stavebních prací společnosti MIROS v Pardubicích"
            loading="lazy"
            decoding="async"
          />
          <p className="process__image-label">Hradecká 545 · Pardubice</p>
        </div>

        <div className="process__content">
          <div className="section-heading section-heading--light">
            <p className="section-label">Od prvního podkladu po předání</p>
            <h2 id="process-title">Víte, co se bude dít dál.</h2>
            <p>
              Srozumitelný postup drží rozpočet, termín i provoz kolem stavby pod kontrolou.
            </p>
          </div>

          <ol className="process-list">
            <li>
              <span className="process-list__number">01</span>
              <div>
                <h3>Konzultace na místě</h3>
                <p>Projdeme záměr, podmínky terénu, napojení i omezení provozu.</p>
              </div>
            </li>
            <li>
              <span className="process-list__number">02</span>
              <div>
                <h3>Konkrétní nabídka</h3>
                <p>Rozepíšeme rozsah prací, návaznosti, cenu a realistický harmonogram.</p>
              </div>
            </li>
            <li>
              <span className="process-list__number">03</span>
              <div>
                <h3>Realizace a předání</h3>
                <p>Koordinujeme profese, průběžně informujeme a hotové dílo řádně předáme.</p>
              </div>
            </li>
          </ol>

          <div className="trust-bar" aria-label="Údaje o společnosti">
            <div>
              <span>Zkušenost</span>
              <strong>od roku 1993</strong>
            </div>
            <div>
              <span>Sídlo</span>
              <strong>Pardubice</strong>
            </div>
            <div>
              <span>IČ</span>
              <strong>275 23 934</strong>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

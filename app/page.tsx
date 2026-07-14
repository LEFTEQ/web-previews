export default function Page() {
  const services = [
    {
      title: "Nápisy a světelná reklama",
      text: "Prostorová 3D písmena, 2D nápisy, světelné panely i oboustranné výstrče. Vyrobíme správnou hloubku, svítivost a kotvení pro konkrétní fasádu.",
      tags: ["3D písmena", "LED", "výstrče"],
    },
    {
      title: "Provozovny a navigace",
      text: "Sjednotíme výlohu, vstup, orientační systém, pylony i polepy do jednoho čitelného celku — od zaměření po poslední montážní bod.",
      tags: ["branding", "pylony", "orientace"],
    },
    {
      title: "Velký formát a speciály",
      text: "Reklamní plachty, tvarované ABS prvky, fólie, malby, vlajky i pohyblivá reklama pro místa, kde běžná tabule nestačí.",
      tags: ["ABS plast", "fólie", "plachty"],
    },
  ];

  return (
    <main className="sw-page">
      <section className="sw-hero" aria-labelledby="hero-title">
        <header className="sw-header">
          <a className="sw-brand" href="#nahoru" aria-label="Sky-Walker Reklama — úvod">
            <span className="sw-brand-main">SKY—WALKER</span>
            <span className="sw-brand-sub">reklama / Praha</span>
          </a>

          <nav className="sw-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Co vyrábíme</a>
            <a href="#zazemi">Jak pracujeme</a>
          </nav>

          <a className="sw-header-action" href="#sluzby">
            Vybrat provedení
          </a>
        </header>

        <div className="sw-hero-grid" id="nahoru">
          <div className="sw-hero-copy">
            <p className="sw-kicker">Výroba a instalace reklamy · Praha</p>
            <h1 id="hero-title" className="sw-title">
              Značka, která
              <span className="sw-built-word" data-word="vystoupí">
                vystoupí
              </span>
              z fasády.
            </h1>
            <p className="sw-intro">
              Vyrábíme světelné nápisy, prostorová písmena a kompletní označení provozoven. Ve vlastní dílně, s vlastní montážní plošinou a týmem pro práce ve výškách.
            </p>
            <div className="sw-hero-actions">
              <a className="sw-primary-action" href="#sluzby">
                Projít možnosti výroby
                <span aria-hidden="true">↘</span>
              </a>
              <p>Od návrhu a povolení až po bezpečnou montáž.</p>
            </div>
          </div>

          <figure className="sw-hero-figure">
            <img
              src="/hero.webp"
              alt="Výroba prostorového reklamního nápisu v dílně Sky-Walker Reklama"
            />
            <figcaption>
              <span>01 / konstrukce</span>
              <span>02 / světlo</span>
              <span>03 / montáž</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="sw-services" id="sluzby" aria-labelledby="services-title">
        <div className="sw-section-heading">
          <p className="sw-kicker">Co dostanete na jednom místě</p>
          <h2 id="services-title">Od prvního řezu po rozsvícení.</h2>
          <p>
            Nemusíte zvlášť shánět grafika, výrobce konstrukce a montážní firmu. Zakázku držíme pohromadě, aby materiál, elektroinstalace i kotvení fungovaly jako jeden celek.
          </p>
        </div>

        <div className="sw-services-layout">
          <figure className="sw-process-image">
            <img
              src="/section-1.webp"
              alt="Detail výroby světelného plastického nápisu"
            />
            <figcaption>Vlastní výroba · Praha · od roku 2000</figcaption>
          </figure>

          <div className="sw-service-list">
            {services.map((service) => (
              <article className="sw-service" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ul aria-label={`Typy realizací: ${service.title}`}>
                  {service.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sw-trust" id="zazemi" aria-labelledby="trust-title">
        <div className="sw-trust-image-wrap">
          <img
            src="/section-2.webp"
            alt="Montáž reklamního označení na pražské provozovně"
          />
          <div className="sw-image-note">
            <strong>Praha i práce ve výškách</strong>
            <span>Vlastní plošina a zkušení montážníci</span>
          </div>
        </div>

        <div className="sw-trust-copy">
          <p className="sw-kicker">Zázemí, které je za nápisem vidět</p>
          <h2 id="trust-title">Více než pěkný návrh. Reklama musí vydržet venku.</h2>
          <p className="sw-trust-lead">
            Materiál volíme podle místa, světelných podmínek a způsobu kotvení. Připravíme projektovou dokumentaci, pomůžeme s povolením reklamy a po instalaci zůstáváme k dispozici pro servis.
          </p>

          <dl className="sw-facts">
            <div>
              <dt>Od roku 2000</dt>
              <dd>Zkušenosti s výrobou, elektroinstalací i montáží.</dd>
            </div>
            <div>
              <dt>Vlastní výroba</dt>
              <dd>Kontrola nad materiálem, zpracováním i termínem.</dd>
            </div>
            <div>
              <dt>Kompletní příprava</dt>
              <dd>Zaměření, povolení, dokumentace a bezpečné kotvení.</dd>
            </div>
          </dl>

          <blockquote>
            „Svůj obor dobře známe. Navrhneme řešení, které bude čitelné, vyrobitelné a spolehlivé.“
            <cite>Jan Běhounek · jednatel společnosti</cite>
          </blockquote>
          <p className="sw-freshness">Informace o službách aktualizovány v roce 2026.</p>
        </div>
      </section>
    </main>
  );
}

const services = [
  {
    name: "Pravidelný úklid budov",
    detail: "Kanceláře, společné prostory, provozy i sociální zázemí v domluveném režimu.",
    cue: "Každý den / podle provozu",
  },
  {
    name: "Čištění oken a fasád",
    detail: "Skla, rámy a prosklené plochy bez šmouh — včetně hůře dostupných míst.",
    cue: "Jednorázově / sezónně",
  },
  {
    name: "Hloubkové čištění",
    detail: "Podlahy, koberce a namáhané povrchy po stěhování, stavbě nebo intenzivním provozu.",
    cue: "Na objednání",
  },
];

export default function Page() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#nahore" aria-label="Dorfner — začátek stránky">
            <span>Dorfner</span>
            <small>úklid budov · Plzeň</small>
          </a>
          <a className="header-phone" href="tel:+420377422034">
            <span>Domluvit úklid</span>
            +420 377 422 034
          </a>
        </header>

        <div className="hero-stage" id="nahore">
          <img
            className="hero-image"
            src="/hero.webp"
            alt="Profesionální úklid prosklených firemních prostor"
          />
          <div className="clean-pass" aria-hidden="true">
            <span className="squeegee" />
          </div>
          <div className="hero-shade" aria-hidden="true" />

          <div className="hero-copy">
            <p className="eyebrow">Úklidové služby pro firmy v Plzni</p>
            <h1 id="hero-title">
              Čistota, která
              <span>udrží hodnotu.</span>
            </h1>
            <p className="hero-intro">
              Postaráme se o budovu v rytmu vašeho provozu — od každodenního úklidu přes okna až po náročné čištění povrchů.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="tel:+420377422034">
                Zavolat a domluvit rozsah
              </a>
              <a className="text-link" href="#sluzby">
                Prohlédnout služby <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <p className="hero-note">
            <span>Republikánská 45</span>
            312 00 Plzeň
          </p>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow eyebrow-dark">Co vyřešíme</p>
          <h2 id="services-title">Jedna budova. Přesně nastavená péče.</h2>
          <p>
            Vyberete si samostatnou službu, nebo sestavíme pravidelný plán podle povrchů, pohybu lidí a provozní doby.
          </p>
        </div>

        <div className="services-layout">
          <figure className="service-image-wrap">
            <img
              src="/section-1.webp"
              alt="Pracovník při profesionálním čištění firemních prostor"
              loading="lazy"
            />
            <figcaption>Vybavení i postup volíme podle konkrétního povrchu.</figcaption>
          </figure>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-item" key={service.name}>
                <p className="service-cue">{service.cue}</p>
                <h3>{service.name}</h3>
                <p>{service.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" aria-labelledby="trust-title">
        <div className="trust-image-wrap">
          <img
            src="/section-2.webp"
            alt="Detail čistého pracovního prostředí po úklidu"
            loading="lazy"
          />
          <div className="quality-tag" aria-hidden="true">
            <span>od</span>
            <strong>1949</strong>
          </div>
        </div>

        <div className="trust-copy">
          <p className="eyebrow eyebrow-dark">Dorfner v Plzni</p>
          <h2 id="trust-title">Váš provoz nemusí ustoupit úklidu.</h2>
          <p className="trust-lead">
            Začínali jsme jako řemeslná firma. Dnes stavíme na stejném principu: dobře znát místo, správně zvolit postup a odvést práci spolehlivě.
          </p>

          <dl className="proof-list">
            <div>
              <dt>Plán podle vás</dt>
              <dd>Časy i četnost sladíme s pohybem zaměstnanců, zákazníků a směn.</dd>
            </div>
            <div>
              <dt>Jasný rozsah</dt>
              <dd>Předem víte, které prostory a povrchy jsou v domluvené péči.</dd>
            </div>
            <div>
              <dt>Místní kontakt</dt>
              <dd>Plzeňská pobočka na Republikánské 45 je dostupná na telefonu i e-mailu.</dd>
            </div>
          </dl>

          <div className="contact-line">
            <a href="mailto:info@dorfner.cz">info@dorfner.cz</a>
            <span aria-hidden="true">/</span>
            <a href="tel:+420377422034">+420 377 422 034</a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function Page() {
  const services = [
    {
      title: "Odborné překlady",
      text: "Technické, medicínské, ekonomické i stavební texty překládá specialista na daný obor. Výsledek kontroluje rodilý mluvčí.",
      note: "Dokumentace · studie · rešerše",
    },
    {
      title: "Soudní překlady",
      text: "Připravíme úředně ověřený překlad a podle potřeby zajistíme také notářské ověření.",
      note: "Listiny · smlouvy · osvědčení",
    },
    {
      title: "Tlumočení",
      text: "Zajistíme simultánní, konsekutivní, doprovodné i soudní tlumočení včetně konferenční techniky a obsluhy.",
      note: "Konference · média · jednání",
    },
  ];

  return (
    <main>
      <section className="hero" id="uvod" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#uvod" aria-label="I.T.C. Jan Žižka – úvodní stránka">
            <span className="wordmark-main">I·T·C</span>
            <span className="wordmark-sub">Jan Žižka / Praha</span>
          </a>

          <nav className="hero-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Překlady a tlumočení</a>
            <a href="#duvera">Zkušenosti</a>
          </nav>

          <a className="header-phone" href="tel:+420603763196">
            Zavolat <span>+420 603 763 196</span>
          </a>
        </header>

        <div className="hero-media" aria-hidden="true">
          <img
            src="/hero.webp"
            alt=""
            className="hero-image"
          />
          <div className="hero-wash" />
        </div>

        <div className="hero-content">
          <p className="eyebrow">Překladatelská a tlumočnická kancelář · od roku 1998</p>
          <h1 id="hero-title">
            Jeden význam.
            <span>V každém jazyce.</span>
          </h1>
          <p className="hero-lead">
            Odborné a soudní překlady, tlumočení i konferenční technika. V Praze dáváme vašim slovům přesný význam — od stavební dokumentace po živé vysílání.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:itc@itc.cz?subject=Poptávka%20překladu">
              Poptat překlad
              <span aria-hidden="true">→</span>
            </a>
            <a className="text-link" href="mailto:itc@itc.cz">itc@itc.cz</a>
          </div>
        </div>

        <div className="translation-mark" aria-hidden="true">
          <span>význam</span>
          <i />
          <span>meaning</span>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-intro">
          <p className="section-label">Co pro vás přeložíme</p>
          <h2 id="services-title">Správná slova nestačí. Musí sedět i obor.</h2>
          <p>
            Pracujeme se všemi evropskými jazyky i s japonštinou, čínštinou, arabštinou, korejštinou a hebrejštinou.
          </p>
        </div>

        <div className="services-layout">
          <figure className="services-visual">
            <img
              src="/section-1.webp"
              alt="Překladatel při práci s odborným dokumentem a poznámkami"
            />
            <figcaption>
              <span>kontrola významu</span>
              <span>odborník + rodilý mluvčí</span>
            </figcaption>
          </figure>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-item" key={service.title}>
                <p className="service-note">{service.note}</p>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" id="duvera" aria-labelledby="trust-title">
        <div className="trust-grid">
          <div className="trust-copy">
            <p className="section-label">Prověřeno v praxi</p>
            <h2 id="trust-title">Když překlad zazní živě, není prostor pro druhý pokus.</h2>
            <p className="trust-lead">
              Tlumočili jsme tiskové konference WHO a NATO, korunovaci Karla III. i rozhovory pro Televizi Nova. Stejnou pečlivost věnujeme každé smlouvě, studii a technickému výkresu.
            </p>

            <blockquote>
              <p>
                „Jsou pružní, rychlí, mají specializované překladatele na různá odborná témata a pro korekturu rodilé mluvčí.“
              </p>
              <cite>
                doc. Jiří Kofránek, Ph.D.
                <span>Univerzita Karlova v Praze</span>
              </cite>
            </blockquote>

            <div className="trust-facts" aria-label="Důležité informace o kanceláři">
              <span>Člen České hospodářské komory</span>
              <span>Kancelář v Praze</span>
              <span>Odborné i soudní zakázky</span>
            </div>
          </div>

          <figure className="trust-visual">
            <img
              src="/section-2.webp"
              alt="Profesionální tlumočení během tiskové konference"
            />
            <figcaption>
              <strong>Od roku 1998</strong>
              <span>překládáme význam, ne jen slova</span>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}

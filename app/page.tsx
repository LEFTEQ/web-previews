export default function HomePage() {
  const services = [
    {
      title: "Bytové oddělení",
      text: "Nájemní smlouvy, změny v užívání bytu, předpisy plateb i praktické otázky k bydlení vyřídíte na jednom místě.",
      link: "Zjistit, co vyřídit",
    },
    {
      title: "Městské domy",
      text: "Zajišťujeme provoz, údržbu a dokumentaci objektů ve vlastnictví města České Budějovice.",
      link: "Přejít ke správě domů",
    },
    {
      title: "Soukromé domy",
      text: "Majitelům a společenstvím nabízíme technickou, ekonomickou i administrativní správu nemovitostí.",
      link: "Prohlédnout služby a ceník",
    },
  ];

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero__image"
          src="/hero.webp"
          alt="Spravovaný bytový dům v Českých Budějovicích"
        />
        <div className="hero__shade" aria-hidden="true" />

        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="SPRÁVA DOMŮ – úvod">
            <span>SPRÁVA</span>
            <span>DOMŮ</span>
          </a>
          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Co vyřídíte</a>
            <a href="#sprava">Jak spravujeme</a>
            <a className="site-nav__phone" href="tel:+420387784111">387 784 111</a>
          </nav>
        </header>

        <div className="hero__content" id="top">
          <p className="eyebrow">Správce nemovitostí · České Budějovice</p>
          <h1 id="hero-title">
            Dům má svou adresu.
            <span>Starosti mají naše číslo.</span>
          </h1>
          <p className="hero__lead">
            Spravujeme městské i soukromé domy, řešíme provoz, dokumenty a havárie. Vy víte, na koho se obrátit.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="tel:+420387784111">Zavolat správci</a>
            <a className="button button--quiet" href="#sluzby">Najít správnou agendu</a>
          </div>
        </div>

        <aside className="service-plate" aria-label="Rychlý kontakt">
          <span className="service-plate__label">Havarijní servis</span>
          <strong>Porucha v domě?</strong>
          <span>Postup a důležitá čísla najdete bez hledání v menu.</span>
          <a href="#sprava">Otevřít informace</a>
        </aside>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow eyebrow--dark">Podle toho, co právě řešíte</p>
          <h2 id="services-title">Správné dveře na první pokus.</h2>
          <p>
            Nemusíte znát naši organizační strukturu. Začněte svou situací a rychle se dostanete k dokumentům, kontaktům i konkrétnímu postupu.
          </p>
        </div>

        <div className="services__layout">
          <div className="services__image-wrap">
            <img
              src="/section-1.webp"
              alt="Detail bytového domu ve správě společnosti"
              className="services__image"
              loading="lazy"
            />
            <span className="image-note">České Budějovice · každodenní péče o domy</span>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <article className="service" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#sprava">{service.link}<span aria-hidden="true"> →</span></a>
              </article>
            ))}
            <article className="service service--rental">
              <div>
                <span className="service__tag">Volné prostory</span>
                <h3>Nabídka pronájmů</h3>
              </div>
              <p>Městské byty a nebytové prostory přehledně na jednom místě.</p>
              <a href="#sprava">Prohlédnout nabídku<span aria-hidden="true"> →</span></a>
            </article>
          </div>
        </div>
      </section>

      <section className="trust" id="sprava" aria-labelledby="trust-title">
        <div className="trust__visual">
          <img
            src="/section-2.webp"
            alt="Technická kontrola spravované nemovitosti"
            className="trust__image"
            loading="lazy"
          />
          <div className="inspection-card" aria-hidden="true">
            <span>SPRÁVA / PROVOZ</span>
            <span className="inspection-card__line" />
            <span>ČESKÉ BUDĚJOVICE</span>
          </div>
        </div>

        <div className="trust__content">
          <p className="eyebrow eyebrow--light">Odpovědnost za celý dům</p>
          <h2 id="trust-title">Správa není jen účetnictví.</h2>
          <p className="trust__intro">
            Dobrý správce zná dokumentaci i skutečný stav domu. Propojujeme technickou péči, ekonomiku a komunikaci s nájemníky či vlastníky, aby se problémy neztrácely mezi odděleními.
          </p>

          <dl className="trust__facts">
            <div>
              <dt>Technická péče</dt>
              <dd>Kontroly, opravy, revize a koordinace dodavatelů.</dd>
            </div>
            <div>
              <dt>Jasná administrativa</dt>
              <dd>Smlouvy, předpisy, dokumenty a dohledatelné informace.</dd>
            </div>
            <div>
              <dt>Místní dostupnost</dt>
              <dd>Jsme přímo v Českých Budějovicích a známe místní domy.</dd>
            </div>
          </dl>

          <div className="trust__contact">
            <p>Potřebujete konkrétního pracovníka nebo dokument?</p>
            <div>
              <a href="tel:+420387784111">Zavolat +420 387 784 111</a>
              <a href="mailto:sekret@sdcb.cz">Napsat na sekret@sdcb.cz</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

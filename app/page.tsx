export default function Page() {
  return (
    <main className="istar-page">
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero__image"
          src="/hero.webp"
          alt="Dokončená komerční budova realizovaná stavební firmou"
        />
        <div className="hero__shade" aria-hidden="true" />

        <header className="site-header">
          <a className="wordmark" href="#zacatek" aria-label="ISTAR – úvodní stránka">
            <span className="wordmark__beam" aria-hidden="true" />
            <span>I S T A R</span>
            <small>stavební společnost</small>
          </a>
          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Co stavíme</a>
            <a href="#duvera">Proč ISTAR</a>
          </nav>
        </header>

        <div className="hero__content" id="zacatek">
          <p className="eyebrow">Stavební firma · Ústí nad Labem</p>
          <h1 id="hero-title">
            Stavby,
            <span>které drží</span>
            provoz.
          </h1>
          <p className="hero__intro">
            Pozemní stavby, rekonstrukce a energetická řešení pro firmy a investory
            v Ústí nad Labem a okolí.
          </p>
          <a className="button button--light" href="#sluzby">
            Prohlédnout naše řešení
            <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="hero__section-mark" aria-hidden="true">
          <span>ÚSTÍ</span>
          <span>NAD LABEM</span>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow eyebrow--dark">Od konstrukce po hotový provoz</p>
          <h2 id="services-title">Jedna stavba. Souvislosti pod kontrolou.</h2>
          <p>
            Řešíme budovu jako celek — návaznost profesí, provoz během rekonstrukce
            i úspornější fungování po předání.
          </p>
        </div>

        <div className="services__layout">
          <figure className="services__photo image-frame">
            <img
              src="/section-1.webp"
              alt="Práce na konstrukci moderní pozemní stavby"
            />
            <figcaption>Realizace pro firemní a komerční využití</figcaption>
          </figure>

          <div className="service-list">
            <article className="service-item">
              <p className="service-item__code">PS</p>
              <div>
                <h3>Pozemní stavby</h3>
                <p>
                  Nové objekty pro výrobu, služby a administrativu s důrazem na
                  odolné materiály a praktický provoz.
                </p>
              </div>
            </article>
            <article className="service-item">
              <p className="service-item__code">RE</p>
              <div>
                <h3>Rekonstrukce</h3>
                <p>
                  Obnova stávajících budov, dispozic a technického zázemí tak, aby
                  mohl objekt znovu spolehlivě sloužit.
                </p>
              </div>
            </article>
            <article className="service-item">
              <p className="service-item__code">EN</p>
              <div>
                <h3>Energetická řešení</h3>
                <p>
                  Stavební připravenost a úpravy spojené s fotovoltaikou,
                  akumulací a snižováním energetické náročnosti provozu.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="trust" id="duvera" aria-labelledby="trust-title">
        <div className="trust__visual image-frame image-frame--dark">
          <img
            src="/section-2.webp"
            alt="Detail dokončené stavby a jejího technického provedení"
          />
          <div className="trust__location">
            <span>Zázemí firmy</span>
            <strong>Ústí nad Labem</strong>
          </div>
        </div>

        <div className="trust__content">
          <p className="eyebrow">Odpovědnost začíná u vlastní firmy</p>
          <h2 id="trust-title">Zkušenost, která nezůstává jen na papíře.</h2>
          <p className="trust__lead">
            ISTAR investuje do lidí i vlastního energetického zázemí. Stejnou
            praktičnost přenášíme do staveb, které připravujeme pro zákazníky.
          </p>

          <div className="proof-list">
            <article>
              <span className="proof-list__year">2020–2022</span>
              <div>
                <h3>Vzdělávání zaměstnanců ISTAR</h3>
                <p>
                  Projekt zaměřený na zvýšení úrovně znalostí a dovedností
                  zaměstnanců společnosti.
                </p>
                <p className="proof-list__meta">
                  Reg. číslo CZ.03.1.52/0.0/0.0/19_097/0012305
                </p>
              </div>
            </article>
            <article>
              <span className="proof-list__year">ENERGIE</span>
              <div>
                <h3>Fotovoltaika ISTAR</h3>
                <p>
                  Vlastní fotovoltaický systém s akumulací pro nižší náklady a
                  větší energetickou soběstačnost.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

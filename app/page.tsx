export default function Page() {
  return (
    <>
      <title>Autokomplex Baďura | Autodoprava z Olomouce</title>
      <meta
        name="description"
        content="Vnitrostátní a mezinárodní autodoprava do 3,5 t z Olomouce. Přímá domluva, přeprava zboží a odtahy osobních vozů po Evropě."
      />
      <meta property="og:title" content="Autokomplex Baďura — autodoprava z Olomouce" />
      <meta
        property="og:description"
        content="Přeprava zboží do 3,5 t po Česku i Evropě. Zavolejte přímo člověku, který s vámi naplánuje cestu."
      />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="cs_CZ" />
      <meta property="og:image" content="/hero.webp" />

      <main className="badura-page">
        <section className="hero" aria-labelledby="hero-title">
          <img
            className="hero__image"
            src="/hero.webp"
            alt="Vůz Autokomplex Baďura připravený k přepravě z Olomouce"
          />
          <div className="hero__shade" aria-hidden="true" />

          <header className="site-header">
            <a className="wordmark" href="#zacatek" aria-label="Autokomplex Baďura, úvodní stránka">
              <span className="wordmark__main">AUTOKOMPLEX</span>
              <span className="wordmark__name">BAĎURA</span>
            </a>

            <nav className="site-nav" aria-label="Hlavní navigace">
              <a href="#sluzby">Co převezeme</a>
              <a href="#jistota">Jak pracujeme</a>
            </nav>

            <a className="header-call" href="tel:+420722198042">
              <span className="header-call__desktop">+420 722 198 042</span>
              <span className="header-call__mobile">Zavolat</span>
            </a>
          </header>

          <div className="hero__content" id="zacatek">
            <p className="eyebrow">Autodoprava · Olomouc · Česko a Evropa</p>
            <h1 id="hero-title">
              Naložíme.
              <span>Dovezeme.</span>
            </h1>
            <p className="hero__lead">
              Přepravíme vaše zboží do 3,5 tuny po Česku i za hranice. Bez přepojování — trasu,
              termín i cenu řešíte přímo s námi.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="tel:+420722198042">
                Zavolat kvůli přepravě
              </a>
              <a className="button button--quiet" href="mailto:info@autokomplexbadura.cz">
                Napsat poptávku
              </a>
            </div>
          </div>

          <div className="route-mark" aria-label="Přeprava z Olomouce po Česku a Evropě">
            <span className="route-mark__point route-mark__point--start">Olomouc</span>
            <span className="route-mark__line" aria-hidden="true" />
            <span className="route-mark__point">Česko</span>
            <span className="route-mark__line" aria-hidden="true" />
            <span className="route-mark__point route-mark__point--end">Evropa</span>
          </div>

          <div className="dispatch-card" aria-label="Základní údaje o dopravě">
            <div>
              <span className="dispatch-card__label">Náklad</span>
              <strong>do 3,5 t</strong>
            </div>
            <div>
              <span className="dispatch-card__label">Provoz</span>
              <strong>Po–Pá 8:00–16:00</strong>
            </div>
            <div>
              <span className="dispatch-card__label">Výjezd</span>
              <strong>Olomouc</strong>
            </div>
          </div>
        </section>

        <section className="services" id="sluzby" aria-labelledby="services-title">
          <div className="section-heading">
            <p className="eyebrow eyebrow--dark">Přeprava podle cíle a nákladu</p>
            <h2 id="services-title">Váš náklad má jasnou cestu.</h2>
            <p>
              Od zásilky mezi provozovnami po cestu přes hranice. Řeknete nám rozměry, hmotnost,
              místo nakládky a termín — my navrhneme konkrétní přepravu.
            </p>
          </div>

          <div className="services__layout">
            <div className="service-list">
              <article className="service-item">
                <span className="service-item__code">CZ</span>
                <div>
                  <h3>Vnitrostátní doprava</h3>
                  <p>Přeprava zboží do 3,5 t z Olomouce po celé České republice.</p>
                </div>
                <span className="service-item__arrow" aria-hidden="true">↗</span>
              </article>

              <article className="service-item">
                <span className="service-item__code">EU</span>
                <div>
                  <h3>Mezinárodní doprava</h3>
                  <p>Domluvená trasa, termín a předání zásilky napříč Evropou.</p>
                </div>
                <span className="service-item__arrow" aria-hidden="true">→</span>
              </article>

              <article className="service-item">
                <span className="service-item__code">2,35</span>
                <div>
                  <h3>Odtahy osobních vozů</h3>
                  <p>Odtah automobilů do hmotnosti 2 350 kg po Česku i Evropě.</p>
                </div>
                <span className="service-item__arrow" aria-hidden="true">↙</span>
              </article>
            </div>

            <figure className="service-image">
              <img
                src="/section-1.webp"
                alt="Nakládka vozu pro vnitrostátní a mezinárodní přepravu"
              />
              <figcaption>
                <span>Každý kilometr začíná přesnou domluvou.</span>
                <small>Olomouc / CZ / EU</small>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="trust" id="jistota" aria-labelledby="trust-title">
          <div className="trust__image-wrap">
            <img
              src="/section-2.webp"
              alt="Detail přepravního vozu Autokomplex Baďura v provozu"
            />
            <div className="trust__stamp" aria-hidden="true">
              <span>HÁLKOVA 37</span>
              <strong>OLOMOUC</strong>
            </div>
          </div>

          <div className="trust__content">
            <p className="eyebrow eyebrow--dark">Přímo, věcně, bez čekání na operátora</p>
            <h2 id="trust-title">Víte, kdo váš náklad veze.</h2>
            <p className="trust__intro">
              Jsme malá olomoucká firma. Díky tomu s vámi od první poptávky po předání mluví jeden
              tým, který zná domluvenou trasu i náklad.
            </p>

            <dl className="trust-list">
              <div>
                <dt>Před cestou</dt>
                <dd>Potvrdíme místo, čas, hmotnost nákladu a cenu přepravy.</dd>
              </div>
              <div>
                <dt>Na trase</dt>
                <dd>Když se situace změní, voláte přímo nám — ne anonymnímu call centru.</dd>
              </div>
              <div>
                <dt>Při předání</dt>
                <dd>Zásilku předáme na sjednaném místě a dáme vám vědět, že dorazila.</dd>
              </div>
            </dl>

            <div className="contact-plate">
              <div>
                <span>Zázemí</span>
                <strong>Hálkova 37, Olomouc</strong>
              </div>
              <div>
                <span>E-mail</span>
                <a href="mailto:info@autokomplexbadura.cz">info@autokomplexbadura.cz</a>
              </div>
              <small>Informace aktualizovány 07/2026</small>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

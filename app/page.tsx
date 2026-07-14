export default function Page() {
  return (
    <main className="cleaning-page">
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#zacatek" aria-label="Služba čistírna – úvod">
            <span className="wordmark-main">SLUŽBA</span>
            <span className="wordmark-sub">čistírna · družstvo</span>
          </a>

          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Co čistíme</a>
            <a href="#druzstvo">O družstvu</a>
          </nav>

          <a className="header-call" href="tel:+420387312321">
            <span>Zavolat</span>
            <strong>387 312 321</strong>
          </a>
        </header>

        <div className="hero-media" id="zacatek">
          <img
            src="/hero.webp"
            alt="Profesionální čistírna oděvů družstva Služba v Českých Budějovicích"
          />
          <div className="hero-shade" aria-hidden="true" />
        </div>

        <div className="hero-content">
          <p className="eyebrow">Čistírna oděvů · České Budějovice</p>
          <h1 id="hero-title">
            Skvrny pryč.
            <span>Střih zůstává.</span>
          </h1>
          <p className="hero-intro">
            Odborně čistíme kabáty, obleky, šaty i bytový textil. Každý kus
            nejdřív posoudíme podle materiálu, aby se vám vrátil čistý,
            upravený a připravený k nošení.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="tel:+420387312321">
              Zavolat do čistírny
            </a>
            <a className="text-link" href="#sluzby">
              Zjistit, co čistíme <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <aside className="care-tag" aria-label="Způsob péče o oděv">
          <span className="tag-kicker">Zakázkový list</span>
          <strong>Váš oblíbený kus</strong>
          <dl>
            <div>
              <dt>Materiál</dt>
              <dd>zkontrolujeme</dd>
            </div>
            <div>
              <dt>Skvrny</dt>
              <dd>ošetříme zvlášť</dd>
            </div>
            <div>
              <dt>Výdej</dt>
              <dd>čistý a vyvěšený</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow eyebrow-blue">Péče podle materiálu</p>
          <h2 id="services-title">Co nám můžete svěřit</h2>
          <p>
            Jinak se čistí vlna, jinak podšívka a jinak peří. Proto volíme
            postup až po prohlídce konkrétního kusu, ne podle univerzálního
            programu.
          </p>
        </div>

        <div className="services-layout">
          <figure className="service-photo">
            <img
              src="/section-1.webp"
              alt="Pracovník čistírny kontroluje oděv před odborným čištěním"
              loading="lazy"
            />
            <figcaption>Kontrola materiálu je první krok každé zakázky.</figcaption>
          </figure>

          <div className="service-list">
            <article className="service-card">
              <span className="material-mark" aria-hidden="true">VL</span>
              <div>
                <h3>Kabáty, saka a obleky</h3>
                <p>
                  Pomůžeme odstranit běžné skvrny a pachy, přitom chráníme
                  tvar, podšívku i povrch vlněných materiálů.
                </p>
              </div>
            </article>

            <article className="service-card">
              <span className="material-mark" aria-hidden="true">ŠA</span>
              <div>
                <h3>Šaty a společenské oděvy</h3>
                <p>
                  Jemné látky, sklady i zdobení před čištěním prohlédneme a
                  upozorníme vás na místa, která vyžadují zvláštní péči.
                </p>
              </div>
            </article>

            <article className="service-card">
              <span className="material-mark" aria-hidden="true">PE</span>
              <div>
                <h3>Lůžkoviny a peří</h3>
                <p>
                  Čistíme objemný bytový textil a navazujeme na zkušenosti
                  družstva s čištěním peří.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="trust" id="druzstvo" aria-labelledby="trust-title">
        <div className="trust-copy">
          <p className="eyebrow eyebrow-light">Českobudějovické družstvo</p>
          <h2 id="trust-title">Řemeslo, které tu má své místo od roku 1921.</h2>
          <p className="trust-lead">
            Služba, výrobní družstvo stojí na praktické práci a dlouhodobé
            odpovědnosti. Činnost provozuje ve vlastních prostorách a většinu
            pracovních míst vytváří pro lidi se zdravotním postižením.
          </p>

          <div className="facts" aria-label="Základní údaje o družstvu">
            <div className="fact">
              <strong>530+</strong>
              <span>zaměstnanců v družstvu</span>
            </div>
            <div className="fact">
              <strong>83 %</strong>
              <span>pracovníků se ZPS a T-ZPS</span>
            </div>
          </div>

          <p className="local-note">
            <span aria-hidden="true">⌖</span>
            Oděvy čistíme pro zákazníky z Českých Budějovic a okolí.
          </p>
        </div>

        <figure className="trust-photo">
          <img
            src="/section-2.webp"
            alt="Čisté oděvy připravené k předání zákazníkům čistírny Služba"
            loading="lazy"
          />
          <figcaption>
            <span>Po vyčištění</span>
            Každý kus připravíme tak, aby mohl rovnou zpátky do skříně.
          </figcaption>
        </figure>
      </section>
    </main>
  );
}

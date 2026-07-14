import React from "react";

export default function Page() {
  return (
    <main className="ji-page">
      <section className="ji-hero" aria-label="Úvod">
        <div className="ji-hero-media">
          <img
            src="/hero.webp"
            alt="Instalatér Jančík - Instal při práci na vodovodním potrubí v Ostravě"
            className="ji-hero-img"
          />
          <div className="ji-hero-shade" aria-hidden="true"></div>
        </div>

        <div className="ji-hero-content">
          <div className="ji-wordmark">
            <span className="ji-wordmark-main">Jančík</span>
            <span className="ji-wordmark-sub">INSTAL</span>
          </div>

          <p className="ji-eyebrow">
            <span className="ji-eyebrow-dot" aria-hidden="true"></span>
            Vodo &middot; Topení &middot; Plyn — Ostrava a okolí
          </p>

          <h1 className="ji-h1">
            Když teče,<br />
            kde nemá.
          </h1>

          <p className="ji-hero-lead">
            Praskle potrubí, studený radiátor nebo revize plynu — přijedeme, najdeme
            příčinu a opravíme na místě. V Ostravě-Nové Bělé jsme doma už od roku 2009.
          </p>

          <div className="ji-hero-actions">
            <a className="ji-btn ji-btn-primary" href="tel:+420602123456">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.2c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z" fill="currentColor"/>
              </svg>
              Zavolat teď
            </a>
            <a className="ji-btn ji-btn-ghost" href="mailto:info@jancik-instal.cz">
              Napsat e-mail
            </a>
          </div>

          <p className="ji-hero-note">Havárie vody a topení: nonstop výjezd v Ostravě a okolí.</p>
        </div>
      </section>

      <section className="ji-services" aria-label="Nabídka služeb">
        <div className="ji-section-head">
          <p className="ji-kicker">Co u nás poptáte</p>
          <h2 className="ji-h2">Řemesla pod jednou střechou</h2>
          <p className="ji-section-lead">
            Od kapající baterie po kompletní rozvody v novostavbě. Přijedeme s materiálem,
            neplatíte za to, že si musíme dojet pro díl.
          </p>
        </div>

        <div className="ji-services-grid">
          <figure className="ji-services-media">
            <img
              src="/section-1.webp"
              alt="Detail instalace měděného potrubí a armatur v kotelně"
              className="ji-media-img"
            />
          </figure>

          <ol className="ji-service-list">
            <li className="ji-service-item">
              <span className="ji-service-tag">voda</span>
              <h3 className="ji-service-title">Vodoinstalatérství</h3>
              <p className="ji-service-text">
                Rozvody vody, výměna baterií a WC, oprava prasklého potrubí, montáž bojlerů
                a filtrů. Řešíme byty, rodinné domy i provozovny.
              </p>
            </li>

            <li className="ji-service-item">
              <span className="ji-service-tag">teplo</span>
              <h3 className="ji-service-title">Topenářství</h3>
              <p className="ji-service-text">
                Radiátory, podlahové topení, tepelná čerpadla, servis a zprovoznění kotlů
                před topnou sezónou.
              </p>
            </li>

            <li className="ji-service-item">
              <span className="ji-service-tag">plyn</span>
              <h3 className="ji-service-title">Plynová zařízení</h3>
              <p className="ji-service-text">
                Montáž, opravy a revize plynových spotřebičů a plnění nádob plyny —
                s platnou revizní zprávou do ruky.
              </p>
            </li>

            <li className="ji-service-item">
              <span className="ji-service-tag">chlazení</span>
              <h3 className="ji-service-title">Chlazení a klimatizace</h3>
              <p className="ji-service-text">
                Montáž, opravy a rekonstrukce chladicích zařízení a tepelných čerpadel
                pro domácnosti i provozy.
              </p>
            </li>

            <li className="ji-service-item">
              <span className="ji-service-tag">kov</span>
              <h3 className="ji-service-title">Zámečnictví</h3>
              <p className="ji-service-text">
                Drobné i větší kovodělné práce — úchyty, konzoly, opravy kovových
                konstrukcí přímo na míru instalaci.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="ji-trust" aria-label="O firmě a reference">
        <div className="ji-trust-grid">
          <div className="ji-trust-text">
            <p className="ji-kicker">Proč zrovna my</p>
            <h2 className="ji-h2">Firma z Nové Bělé, ne z call centra</h2>
            <p className="ji-section-lead">
              Jančík - Instal vede od založení v roce 2009 Michael Jančík osobně — je to on,
              kdo často stojí i na místě zásahu, ne jen v papírech.
            </p>

            <dl className="ji-facts">
              <div className="ji-fact">
                <dt>Na trhu</dt>
                <dd>od roku 2009</dd>
              </div>
              <div className="ji-fact">
                <dt>Sídlo</dt>
                <dd>Petrovských 435/4, Nová Bělá, Ostrava</dd>
              </div>
              <div className="ji-fact">
                <dt>Obor</dt>
                <dd>vodo, topo, plyn, chlazení, zámečnictví</dd>
              </div>
              <div className="ji-fact">
                <dt>Jednatel</dt>
                <dd>Michael Jančík</dd>
              </div>
            </dl>

            <blockquote className="ji-quote">
              „Klientovi vždy řeknu rovnou, co je za problém a co to bude stát — bez
              překvapení na konci, bez zbytečných oprav navíc.“
              <span className="ji-quote-author">— Michael Jančík, jednatel</span>
            </blockquote>
          </div>

          <figure className="ji-trust-media">
            <img
              src="/section-2.webp"
              alt="Michael Jančík kontroluje plynový spotřebič při revizi"
              className="ji-media-img"
            />
            <figcaption className="ji-trust-caption">
              Ostrava a okolí · IČO 28593871
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}

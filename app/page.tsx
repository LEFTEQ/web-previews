export default function Page() {
  return (
    <main>
      <section className="hero">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Instalace fotovoltaických panelů na střeše firemní haly ve Zaklade"
            className="hero-img"
          />
          <div className="hero-scrim" aria-hidden="true"></div>
        </div>

        <div className="hero-grid">
          <div className="hero-mark">
            <span className="mark-symbol" aria-hidden="true">
              <svg viewBox="0 0 40 40" width="36" height="36">
                <path d="M22 2 L8 22 H18 L14 38 L32 16 H20 Z" fill="currentColor" />
              </svg>
            </span>
            <span className="mark-text">
              VODÍKOVÁ<br />ENERGIE
            </span>
          </div>

          <p className="hero-eyebrow">FOTOVOLTAIKA PRO FIRMY&nbsp;&mdash;&nbsp;HRADEC KRÁLOVÉ A OKOLÍ</p>

          <h1 className="hero-title">
            Vlastní elektrárna<br />
            na vaší střeše<span className="hero-dot">.</span>
          </h1>

          <p className="hero-lead">
            Navrhujeme a stavíme firemní fotovoltaické systémy na klíč &mdash; od střechy
            výrobní haly po zálohu na naftovou elektrocentrálu pro případ výpadku.
            Bez kompromisů v revizích, bez odkladů v harmonogramu.
          </p>

          <div className="hero-actions">
            <a className="btn-primary" href="tel:+420737221505">
              Zavolat: 737 221 505
            </a>
            <a className="btn-ghost" href="mailto:sales@h2energie.cz">
              sales@h2energie.cz
            </a>
          </div>

          <dl className="hero-stats">
            <div className="hero-stat">
              <dt>Obor</dt>
              <dd>FVE + záložní zdroje</dd>
            </div>
            <div className="hero-stat">
              <dt>Zákazníci</dt>
              <dd>Firmy a průmysl</dd>
            </div>
            <div className="hero-stat">
              <dt>Působnost</dt>
              <dd>Hradec Králové a okolí</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="panel panel-services" aria-labelledby="sluzby-title">
        <div className="panel-inner">
          <div className="panel-head">
            <span className="panel-eyebrow">01 &mdash; CO INSTALUJEME</span>
            <h2 id="sluzby-title" className="panel-title">
              Od střešní konstrukce<br />po jištění výpadku
            </h2>
          </div>

          <div className="services-body">
            <div className="services-media">
              <img
                src="/section-1.webp"
                alt="Detail fotovoltaických panelů a měniče na firemní hale"
                className="services-img"
              />
            </div>

            <ol className="service-list">
              <li className="service-item">
                <span className="service-num">01</span>
                <div>
                  <h3>Fotovoltaické systémy pro firmy</h3>
                  <p>
                    Návrh, projekci, montáž i revize FVE na střechách výrobních hal,
                    skladů a administrativních budov. Dimenzujeme na reálnou spotřebu
                    provozu, ne na katalogové maximum.
                  </p>
                </div>
              </li>
              <li className="service-item">
                <span className="service-num">02</span>
                <div>
                  <h3>Zálohování naftovými elektrocentrálami</h3>
                  <p>
                    Pro provozy, kde výpadek znamená ztrátu &mdash; chlazení, výrobní linky,
                    servery. Naftová elektrocentrála nastupuje automaticky a drží chod
                    objektu, dokud se síť nevrátí.
                  </p>
                </div>
              </li>
              <li className="service-item">
                <span className="service-num">03</span>
                <div>
                  <h3>Servis a revize po instalaci</h3>
                  <p>
                    Pravidelné revize, kontrola měničů a výkonu, servisní zásah do
                    24 hodin od nahlášení poruchy v regionu Hradec Králové.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <a className="mobile-cta" href="tel:+420737221505">
            Zavolat ohledně nabídky &rarr;
          </a>
        </div>
      </section>

      <section className="panel panel-trust" aria-labelledby="duvera-title">
        <div className="panel-inner">
          <div className="panel-head">
            <span className="panel-eyebrow">02 &mdash; PROČ S NÁMI</span>
            <h2 id="duvera-title" className="panel-title">
              Firma z Hradce,<br />postavená na řemesle
            </h2>
          </div>

          <div className="trust-body">
            <ul className="trust-list">
              <li>
                <span className="trust-tag">Lokalita</span>
                <p>
                  Sídlíme a pracujeme v Hradci Králové &mdash; na místo dojíždíme sami,
                  bez subdodavatelů odjinud. Znáte nás, víte, kde nás najít.
                </p>
              </li>
              <li>
                <span className="trust-tag">Zaměření</span>
                <p>
                  Specializujeme se výhradně na firemní zákazníky &mdash; rozumíme
                  provozní spotřebě, směnnému provozu i požadavkům na zálohování.
                </p>
              </li>
              <li>
                <span className="trust-tag">Kontinuita</span>
                <p>
                  Po instalaci zůstáváme dostupní na revize a servis &mdash; nejsme
                  firma, která po předání zmizí.
                </p>
              </li>
            </ul>

            <div className="trust-media">
              <img
                src="/section-2.webp"
                alt="Technik kontroluje fotovoltaickou instalaci na firemní budově"
                className="trust-img"
              />
              <p className="trust-caption">Kontrola instalace na firemním objektu, Hradec Králové.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

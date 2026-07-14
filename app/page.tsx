export default function Page() {
  return (
    <main className="dukase-page">
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Dukase — úvod">
            <span>DUKA</span><strong>SE</strong>
          </a>

          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#nabidka">Co tiskneme</a>
            <a href="#jistota">Proč Dukase</a>
          </nav>

          <a className="header-contact" href="tel:+420495260233">495 260 233</a>
        </header>

        <div className="hero-content" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Ofsetová a digitální tiskárna · Hradec Králové</p>
            <h1 id="hero-title">
              Barvy pod kontrolou.
              <em> Termín taky.</em>
            </h1>
            <p className="hero-lead">
              Tiskneme katalogy, obaly, knihy i firemní tiskoviny. Od kontroly dat po dokončení a dopravu — v kvalitě podle ISO 12647.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="mailto:info@dukase.cz?subject=Poptávka%20tisku">Poptat tisk</a>
              <a className="text-link" href="#nabidka">Prohlédnout možnosti <span aria-hidden="true">↓</span></a>
            </div>
          </div>

          <div className="proof-wrap" aria-label="Tiskový náhled z výroby Dukase">
            <div className="crop-mark crop-mark-tl" aria-hidden="true" />
            <div className="crop-mark crop-mark-tr" aria-hidden="true" />
            <div className="crop-mark crop-mark-bl" aria-hidden="true" />
            <div className="crop-mark crop-mark-br" aria-hidden="true" />
            <figure className="proof-sheet">
              <div className="proof-meta">
                <span>DUKASE / NÁTISK</span>
                <span>HK · CMYK</span>
              </div>
              <img
                src="/hero.webp"
                alt="Detail profesionální tiskové výroby v tiskárně Dukase"
              />
              <figcaption>
                <span>Kontrola barvy</span>
                <span className="registration" aria-hidden="true">⊕</span>
                <span>Výstup 1:1</span>
              </figcaption>
              <div className="color-bar" aria-label="Kontrolní proužek tiskových barev">
                <i className="cyan" /><i className="magenta" /><i className="yellow" /><i className="black" />
              </div>
            </figure>
          </div>
        </div>

        <div className="hero-facts" aria-label="Základní informace">
          <span>Kladská 1178/12a</span>
          <span>Po–Pá · 8–16 hodin</span>
          <span>50.2166656N · 15.8622469E</span>
        </div>
      </section>

      <section className="offer section-shell" id="nabidka" aria-labelledby="offer-title">
        <div className="section-heading">
          <p className="eyebrow">Co dostanete na papír</p>
          <h2 id="offer-title">Od jednoho prototypu po patnáct tisíc archů za hodinu.</h2>
          <p>
            Zvolíme technologii podle nákladu, materiálu a termínu — ne podle univerzálního ceníku.
          </p>
        </div>

        <div className="offer-layout">
          <figure className="image-panel image-panel-offer">
            <img
              src="/section-1.webp"
              alt="Archy tiskovin během zpracování v provozu Dukase"
            />
            <figcaption>KBA Rapida 75 · ofset až 15 000 výtisků za hodinu</figcaption>
          </figure>

          <div className="production-list">
            <article>
              <div className="process-color process-cyan" aria-hidden="true" />
              <div>
                <p className="process-label">Menší náklad a personalizace</p>
                <h3>Digitální tisk</h3>
                <p>Vizitky, pozvánky, variabilní tiskoviny a rychlé série bez zbytečných příprav.</p>
              </div>
            </article>

            <article>
              <div className="process-color process-magenta" aria-hidden="true" />
              <div>
                <p className="process-label">Vyšší náklad a přesná barva</p>
                <h3>Ofsetový tisk</h3>
                <p>Katalogy, časopisy, knihy, mapy, plakáty a firemní tiskoviny v opakovatelné kvalitě.</p>
              </div>
            </article>

            <article>
              <div className="process-color process-yellow" aria-hidden="true" />
              <div>
                <p className="process-label">Tvar, povrch a kompletace</p>
                <h3>Dokončovací výroba</h3>
                <p>Obaly, krabičky, samolepky, etikety, desky i papírové modely připravené k použití.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="trust section-shell" id="jistota" aria-labelledby="trust-title">
        <div className="trust-grid">
          <div className="trust-copy">
            <p className="eyebrow">Jistota před spuštěním stroje</p>
            <h2 id="trust-title">Neplatíte za pokusy. Data nejdřív zkontrolujeme.</h2>
            <p className="trust-intro">
              Pomůžeme s přípravou, doporučíme vhodný papír i náklad a předem potvrdíme cenu a termín. Zakázku pak dokončíme pod jednou střechou v Hradci Králové.
            </p>

            <dl className="trust-list">
              <div>
                <dt>ISO 12647</dt>
                <dd>Stabilní a měřitelná barevnost tisku</dd>
              </div>
              <div>
                <dt>ISO 9001</dt>
                <dd>Řízená kvalita výrobního procesu</dd>
              </div>
              <div>
                <dt>Vlastní doprava</dt>
                <dd>Hotové tiskoviny doručíme po celé ČR</dd>
              </div>
            </dl>

            <div className="contact-line">
              <span>Proberte zakázku přímo s tiskárnou</span>
              <a href="tel:+420495260233">495 260 233</a>
              <a href="mailto:info@dukase.cz">info@dukase.cz</a>
            </div>
          </div>

          <figure className="image-panel image-panel-trust">
            <img
              src="/section-2.webp"
              alt="Kontrola hotových tiskovin pracovníkem tiskárny Dukase"
            />
            <figcaption>
              <span>Kontrola před dokončením</span>
              <span>Hradec Králové</span>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}

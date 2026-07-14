export default function Page() {
  return (
    <main className="takecars-page">
      <section className="hero" aria-labelledby="hero-title">
        <nav className="nav shell" aria-label="Hlavní navigace">
          <a className="wordmark" href="#top" aria-label="Takecars – úvod">
            <span>TAKE</span><span className="wordmark-accent">CARS</span>
          </a>
          <div className="nav-links">
            <a href="#sluzby">Co vozíme</a>
            <a href="#jistota">Proč Takecars</a>
          </div>
          <a className="nav-phone" href="tel:+420224800224">224 800 224</a>
        </nav>

        <div className="hero-grid shell" id="top">
          <div className="hero-copy">
            <p className="eyebrow"><span aria-hidden="true" /> Expresní kurýrní služba · Praha</p>
            <h1 id="hero-title">Praha se nezastaví.<br /><em>Ani vaše zásilka.</em></h1>
            <p className="hero-lead">
              Dokumenty, klíče, balíky i zásilky pro e-shop vyzvedneme u vás a doručíme po Praze, celé ČR i do světa.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="tel:+420224800224">Objednat kurýra</a>
              <a className="text-link" href="#sluzby">Zjistit, co převezeme <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-facts" aria-label="Základní informace">
              <p><strong>od 149 Kč</strong><span>zásilka po Praze</span></p>
              <p><strong>non-stop</strong><span>telefonická linka</span></p>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-photo-frame">
              <img
                src="/hero.webp"
                alt="Kurýr Takecars při expresním doručování zásilky v Praze"
                width="1600"
                height="1200"
                className="hero-image"
              />
            </div>
            <div className="dispatch-card" aria-label="Ukázková trasa zásilky">
              <p className="dispatch-label">Ukázková pražská trasa</p>
              <div className="dispatch-route">
                <div><span className="route-dot" /><small>Vyzvednout</small><strong>Praha 7</strong></div>
                <span className="route-line" aria-hidden="true"><i /></span>
                <div><span className="route-dot route-dot-end" /><small>Doručit</small><strong>Praha 2</strong></div>
              </div>
              <p className="dispatch-status"><span aria-hidden="true">●</span> Kurýr jede přímo k cíli</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services shell" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow eyebrow-dark"><span aria-hidden="true" /> Jedna jízda, konkrétní úkol</p>
          <h2 id="services-title">Co potřebujete<br />doručit dnes?</h2>
          <p>Stačí říct odkud, kam a co vezeme. Zbytek trasy zařídíme za vás.</p>
        </div>

        <div className="services-layout">
          <div className="service-image-wrap">
            <img
              src="/section-1.webp"
              alt="Expresní kurýr přebírá zásilku určenou k doručení po Praze"
              width="1400"
              height="1100"
              className="section-image"
            />
            <p className="image-note">Praha a okolí · ČR · Slovensko · EU · svět</p>
          </div>

          <div className="service-list">
            <article>
              <span className="service-code">EXP</span>
              <div><h3>Expres po Praze</h3><p>Zapomenuté klíče, smlouvy, vstupenky, květiny nebo balík převezmeme přímo mezi dvěma adresami.</p></div>
            </article>
            <article>
              <span className="service-code">CZ+</span>
              <div><h3>Zásilky mimo Prahu</h3><p>Doručení po celé ČR, na Slovensko i do zemí EU. Pro světové zásilky využíváme partnerství s DHL.</p></div>
            </article>
            <article>
              <span className="service-code">E-S</span>
              <div><h3>Sklad a expedice e-shopu</h3><p>Zboží uskladníme, objednávky zabalíme a předáme do rozvozu. Logistika roste spolu s vaším e-shopem.</p></div>
            </article>
            <article>
              <span className="service-code">RET</span>
              <div><h3>Reklamace a zpětné svozy</h3><p>Vyzvedneme vrácené zboží nebo dokumenty u zákazníka a dopravíme je zpět do firmy či skladu.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="trust" id="jistota" aria-labelledby="trust-title">
        <div className="trust-grid shell">
          <div className="trust-copy">
            <p className="eyebrow"><span aria-hidden="true" /> Zásilka pod kontrolou</p>
            <h2 id="trust-title">Citlivý balík.<br />Pevný postup.</h2>
            <p className="trust-intro">Kurýra nevybíráte jen podle rychlosti. Potřebujete vědět, kdo zásilku převzal a že dorazí tam, kam má.</p>

            <div className="trust-points">
              <article><strong>ISO 9001</strong><p>Řízení kvality pro opakovatelný a spolehlivý servis.</p></article>
              <article><strong>ISO 13485</strong><p>Procesy nastavené také pro přepravu ve zdravotnickém oboru.</p></article>
              <article><strong>Pojištění zásilek</strong><p>Rozsah přepravy a případné připojištění si domluvíte před jízdou.</p></article>
            </div>

            <div className="direct-contact">
              <p>Potřebujete ověřit trasu nebo cenu?</p>
              <a href="tel:+420224800224">224 800 224</a>
              <a href="mailto:info@takecars.cz">info@takecars.cz</a>
            </div>
          </div>

          <div className="trust-visual">
            <img
              src="/section-2.webp"
              alt="Pečlivě připravená zásilka ve skladu kurýrní služby Takecars"
              width="1400"
              height="1600"
              className="trust-image"
            />
            <div className="proof-stamp" aria-label="Certifikované procesy ISO">
              <span>Certifikované</span>
              <strong>ISO</strong>
              <span>procesy přepravy</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function HomePage() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="AUTOPROFI CZ – úvod">
            <span>AUTO</span>PROFI
            <small>chlazení na cestu</small>
          </a>

          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#chlazeni">Chlazení</a>
            <a href="#zkusenosti">Proč AUTOPROFI</a>
            <a className="nav-phone" href="tel:+420485150621">485 150 621</a>
          </nav>
        </header>

        <div className="hero-media" id="top">
          <img
            src="/hero.webp"
            alt="Automobil vybavený profesionálním mobilním chlazením od AUTOPROFI CZ"
          />
          <div className="hero-shade" aria-hidden="true" />
        </div>

        <div className="hero-content">
          <p className="eyebrow">Liberec · chlazení do auta, karavanu i kamionu</p>
          <h1 id="hero-title">
            Chlad, který
            <span>jede s vámi.</span>
          </h1>
          <p className="hero-lead">
            Vybereme kompresorovou lednici nebo klimatizaci, která se vejde do vašeho vozu,
            zvládne jeho napájení a vydrží každodenní provoz.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="tel:+420485150621">Zavolat odborníkovi</a>
            <a className="text-link" href="#chlazeni">Najít vhodné řešení <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="voltage-mark" aria-label="Napájení 12 nebo 24 voltů">
          <strong>12/24</strong>
          <span>V</span>
        </div>
      </section>

      <section className="solutions" id="chlazeni" aria-labelledby="solutions-title">
        <div className="section-heading">
          <p className="eyebrow">Podle vozu, prostoru a provozu</p>
          <h2 id="solutions-title">Nejdřív změříme. Potom chladíme.</h2>
          <p>
            Jiný kompresor patří do kabiny kamionu, jiný do obytné vestavby. Doporučení stavíme
            na rozměrech, ventilaci, příkonu a způsobu, jakým vůz skutečně používáte.
          </p>
        </div>

        <div className="solutions-layout">
          <figure className="section-image section-image-cold">
            <img
              src="/section-1.webp"
              alt="Detail kompresorové autochladničky připravené k vestavbě"
            />
            <figcaption>Kompresorové chlazení pro stabilní teplotu i v letním provozu.</figcaption>
          </figure>

          <div className="service-list">
            <article>
              <div className="service-code">CAB</div>
              <div>
                <h3>Do kabiny a na dlouhé trasy</h3>
                <p>Přenosné i vestavné autochladničky na 12/24 V pro řidiče dodávek, autobusů a kamionů.</p>
              </div>
            </article>
            <article>
              <div className="service-code">RV</div>
              <div>
                <h3>Do karavanu a obytného vozu</h3>
                <p>Úsporné lednice, mrazicí boxy a klimatizace navržené pro omezený prostor a energii na cestách.</p>
              </div>
            </article>
            <article>
              <div className="service-code">FIX</div>
              <div>
                <h3>Vestavba, nastavení a podpora</h3>
                <p>Prověříme odvětrání i napájení, poradíme s montáží a pomůžeme také po nákupu.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="trust" id="zkusenosti" aria-labelledby="trust-title">
        <div className="trust-copy">
          <p className="eyebrow">AUTOPROFI CZ · Liberec</p>
          <h2 id="trust-title">Technice rozumíme už 32 let.</h2>
          <p className="trust-intro">
            Neprodáváme krabici naslepo. Řeknete nám typ vozu, dostupný prostor a způsob používání;
            my ověříme kompatibilitu a vysvětlíme rozdíly bez katalogové mlhy.
          </p>

          <dl className="proof-list">
            <div>
              <dt>Výběr bez pokusů</dt>
              <dd>Kontrola rozměrů, napětí a typu kompresoru před objednávkou.</dd>
            </div>
            <div>
              <dt>Reálná odborná podpora</dt>
              <dd>Na telefonu jsou lidé, kteří chlazení montují a nastavují.</dd>
            </div>
            <div>
              <dt>Zázemí v Liberci</dt>
              <dd>Česká firma s dlouhodobě udržovanou nabídkou a dostupným servisem.</dd>
            </div>
          </dl>

          <div className="contact-line" aria-label="Kontaktní údaje">
            <a href="tel:+420485150621">485 150 621</a>
            <span aria-hidden="true">/</span>
            <a href="mailto:621obchod@autoprofi.cz">621obchod@autoprofi.cz</a>
          </div>
        </div>

        <figure className="section-image section-image-workshop">
          <img
            src="/section-2.webp"
            alt="Technik AUTOPROFI CZ při kontrole automobilového chladicího systému"
          />
          <figcaption>
            <span>LIB</span>
            Odborné zázemí v Liberci
          </figcaption>
        </figure>
      </section>
    </main>
  );
}

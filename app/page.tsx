export default function HomePage() {
  return (
    <main className="tb-site">
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header reveal reveal-first">
          <a className="wordmark" href="#nahoru" aria-label="Termobazény – úvod">
            <span className="wordmark-mark" aria-hidden="true"><i /></span>
            <span>TERMO<strong>BAZÉNY</strong></span>
          </a>

          <nav className="desktop-nav" aria-label="Hlavní navigace">
            <a href="#zakryti">Zakrytí na míru</a>
            <a href="#bezpecnost">Bezpečnost</a>
          </nav>

          <a className="header-call" href="tel:+420728598229">
            <span>Zavolat</span>
            <strong>728 598 229</strong>
          </a>
        </header>

        <div className="hero-grid" id="nahoru">
          <div className="hero-copy">
            <p className="eyebrow reveal reveal-second">
              Bezpečnostní zakrytí bazénů · České Budějovice
            </p>
            <h1 className="reveal reveal-third" id="hero-title">
              Bazén pod krytem.
              <span>Klid nad vodou.</span>
            </h1>
            <p className="hero-lead reveal reveal-fourth">
              Celoroční plachtu vyrobíme přesně pro váš bazén. Pevná hliníková
              konstrukce chrání před náhlým pádem, nečistotami i sněhem — bez
              těžkého zastřešení nad zahradou.
            </p>
            <div className="hero-actions reveal reveal-fourth">
              <a
                className="button button-primary"
                href="mailto:info@termobazeny.cz?subject=Poptávka%20bezpečnostního%20zakrytí"
              >
                Chci spočítat zakrytí
                <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-text" href="tel:+420728598229">
                Raději zavolám
              </a>
            </div>
          </div>

          <figure className="hero-visual reveal reveal-image">
            <div className="image-frame">
              <img
                src="/hero.webp"
                alt="Bezpečnostní plachta napnutá přes zahradní bazén"
                width="1600"
                height="1100"
                fetchPriority="high"
              />
              <div className="cover-seam" aria-hidden="true"><span /></div>
            </div>
            <figcaption className="load-note">
              <span>Posouzená únosnost</span>
              <strong>85 kg</strong>
              <small>ochrana při náhlém pádu dospělé osoby</small>
            </figcaption>
          </figure>
        </div>

        <div className="spec-rail reveal reveal-fourth" aria-label="Základní parametry konstrukce">
          <span className="rail-label">Konstrukce zakrytí</span>
          <span><b>Ø 50 mm</b> hliníkové nosníky</span>
          <span><b>3 mm</b> síla stěny</span>
          <span><b>do 15 cm</b> sněhové pokrývky</span>
        </div>
      </section>

      <section className="services" id="zakryti" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Co pro váš bazén vyřešíme</p>
          <h2 id="services-title">Zakrytí, které sedí od hrany k hraně.</h2>
          <p>
            Každý bazén zaměříme jako konkrétní konstrukci, ne jako položku z regálu.
            Zohledníme jeho šířku, okolní dlažbu i prostor potřebný pro stáčení plachty.
          </p>
        </div>

        <div className="services-layout">
          <figure className="service-image">
            <img
              src="/section-1.webp"
              alt="Detail pevného bezpečnostního zakrytí bazénu s hliníkovou výztuhou"
              width="1200"
              height="900"
              loading="lazy"
            />
            <figcaption>Plachta a nosná konstrukce vyrobené na rozměr bazénu</figcaption>
          </figure>

          <div className="service-list">
            <article>
              <span className="service-type">Hlavní řešení</span>
              <h3>Celoroční bezpečnostní plachta</h3>
              <p>
                Stabilní zakrytí pomáhá zabránit náhlému pádu do vody a omezuje
                množství listí i dalších nečistot v bazénu.
              </p>
            </article>
            <article>
              <span className="service-type">Každodenní obsluha</span>
              <h3>Stáčení a roztáčení</h3>
              <p>
                Navrhneme způsob manipulace podle prostoru kolem bazénu, aby se
                zakrytí používalo snadno a nezůstávalo odložené v koutě zahrady.
              </p>
            </article>
            <article>
              <span className="service-type">Pro naše realizace</span>
              <h3>Náhradní díly</h3>
              <p>
                K zakrytím, která jsme vyrobili, dodáváme odpovídající náhradní
                díly. Stačí nám popsat zakázku a potřebnou součást.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="trust" id="bezpecnost" aria-labelledby="trust-title">
        <div className="trust-grid">
          <div className="trust-copy">
            <p className="eyebrow">Bezpečnost bez přehánění</p>
            <h2 id="trust-title">Pevné zakrytí není pochozí terasa.</h2>
            <p className="trust-intro">
              Řekneme vám přesně, co plachta zvládne. Systém je posouzený pro
              ochranu při náhlém pádu a pro rovnoměrnou sněhovou zátěž. Není určený
              k běžné chůzi ani jako plocha pro hraní.
            </p>

            <dl className="facts">
              <div>
                <dt>85 kg</dt>
                <dd>posouzené nahodilé zatížení dospělou osobou</dd>
              </div>
              <div>
                <dt>4–6 m</dt>
                <dd>posuzované šířky bazénů při rozteči nosníků 1 500 mm</dd>
              </div>
              <div>
                <dt>Č. Budějovice</dt>
                <dd>místní firma a přímý kontakt bez anonymního call centra</dd>
              </div>
            </dl>

            <div className="contact-card">
              <span>Potřebujete ověřit rozměr nebo vhodnost řešení?</span>
              <a href="tel:+420728598229">Zavolat technikovi</a>
              <a href="mailto:info@termobazeny.cz">info@termobazeny.cz</a>
            </div>
          </div>

          <figure className="trust-image">
            <img
              src="/section-2.webp"
              alt="Hotové bezpečnostní zakrytí venkovního bazénu u rodinného domu"
              width="1200"
              height="1400"
              loading="lazy"
            />
            <figcaption>
              <span>Navrženo pro konkrétní bazén</span>
              <strong>Zakrytí bez zbytečné stavby nad vodou.</strong>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}

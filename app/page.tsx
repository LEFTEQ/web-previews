export default function Page() {
  return (
    <main className="site-main">
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero__image"
          src="/hero.webp"
          alt="Kominík při odborném čištění komína"
        />
        <div className="hero__shade" aria-hidden="true" />

        <header className="site-header">
          <a className="wordmark" href="#nahoru" aria-label="Zeman Systems – úvod">
            <span className="wordmark__name">ZEMAN</span>
            <span className="wordmark__trade">komínové systémy</span>
          </a>

          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Co vyřešíme</a>
            <a href="#zazemi">Naše zázemí</a>
          </nav>

          <a className="header-call" href="tel:+420602410072">
            <span>Zavolat</span>
            <strong>602 410 072</strong>
          </a>
        </header>

        <div className="hero__content" id="nahoru">
          <p className="hero__eyebrow">Čištění komínů · Ploskovice a Litoměřicko</p>
          <h1 id="hero-title">
            <span>Čistý</span>
            <span className="hero__title-cut">tah.</span>
            <span className="hero__title-small">Klid doma.</span>
          </h1>
          <p className="hero__intro">
            Vyčistíme spalinovou cestu, prověříme její stav a řekneme vám srozumitelně,
            co potřebuje teď — a co ještě může počkat.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="tel:+420602410072">
              Objednat čištění
            </a>
            <a className="button button--quiet" href="mailto:info@levnekominy.cz">
              Napsat e-mail
            </a>
          </div>
          <p className="hero__availability">
            Zákaznický servis: po–čt 8:00–16:00, pá 8:00–15:30
          </p>
        </div>

        <div className="hero__brush-mark" aria-hidden="true">
          <span />
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="section-kicker">Co dostanete při jedné návštěvě</p>
          <h2 id="services-title">Nejen vymést saze. Rozumět celému komínu.</h2>
          <p>
            Známe keramické i nerezové systémy, vložky, kouřovody a napojení spotřebičů.
            Díky tomu při čištění nehledíme jen na kartáč, ale na cestu spalin jako celek.
          </p>
        </div>

        <div className="services__layout">
          <figure className="services__figure">
            <img
              src="/section-1.webp"
              alt="Detail kominického kartáče při čištění spalinové cesty"
            />
            <figcaption>Kartáč volíme podle materiálu a průměru spalinové cesty.</figcaption>
          </figure>

          <div className="service-list">
            <article className="service-item">
              <p className="service-item__label">Čištění</p>
              <h3>Průchodná spalinová cesta</h3>
              <p>
                Odstraníme saze a usazeniny z komína i přístupných částí kouřovodu s ohledem
                na použitý systém a palivo.
              </p>
            </article>

            <article className="service-item">
              <p className="service-item__label">Kontrola stavu</p>
              <h3>Včas si všimnout problému</h3>
              <p>
                Při práci sledujeme napojení, stav vložky, vybírací otvor i bezpečný přístup.
                Nález vám ukážeme a vysvětlíme bez zbytečného strašení.
              </p>
            </article>

            <article className="service-item">
              <p className="service-item__label">Řešení</p>
              <h3>Díl, vložka nebo nový systém</h3>
              <p>
                Když komín potřebuje opravu, navrhneme konkrétní další krok. Náhradní díly,
                nerezové vložky i komínové systémy držíme ve vlastním sortimentu.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="trust" id="zazemi" aria-labelledby="trust-title">
        <div className="trust__image-wrap">
          <img
            src="/section-2.webp"
            alt="Areál rodinné společnosti Zeman Systems v Ploskovicích"
          />
          <p className="trust__location">Ploskovice 102 · Litoměřicko</p>
        </div>

        <div className="trust__content">
          <p className="section-kicker">Zázemí, které nekončí u žebříku</p>
          <h2 id="trust-title">Komíny známe zevnitř. Od roku 1993.</h2>
          <p className="trust__lead">
            Zeman Systems je rodinná firma z Ploskovic. Komínové systémy nejen čistíme a
            posuzujeme — dlouhodobě je dodáváme, skládáme a technicky řešíme pro domy, chaty
            i stavební firmy po celé republice.
          </p>

          <dl className="facts">
            <div>
              <dt>Od roku 1993</dt>
              <dd>stálé rodinné zázemí a zkušenost s různými typy komínů</dd>
            </div>
            <div>
              <dt>3 000 m² v Ploskovicích</dt>
              <dd>prodejna, sklad a skutečné díly, které můžeme porovnat na místě</dd>
            </div>
            <div>
              <dt>Technické poradenství</dt>
              <dd>
                <a href="tel:+420702020280">702 020 280</a> pro nerezové komíny, vložky a přechodky
              </dd>
            </div>
          </dl>

          <address className="trust__address">
            Zeman Systems s.r.o.<br />
            Ploskovice 102, 411 42 Ploskovice
          </address>
        </div>
      </section>
    </main>
  );
}

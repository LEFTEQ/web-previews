export default function Page() {
  return (
    <>
      <a className="skip-link" href="#obsah">Přeskočit na obsah</a>

      <header className="hero">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Detail italské kamenné dlažby s výraznou žílou, položené v showroomu Julia Uno Group"
          />
          <div className="hero-scrim" aria-hidden="true" />
        </div>

        <div className="hero-grain" aria-hidden="true" />

        <div className="hero-inner">
          <p className="wordmark">
            <span className="wordmark-julia">JULIA</span>
            <span className="wordmark-uno">UNO</span>
            <span className="wordmark-group">GROUP</span>
          </p>

          <p className="eyebrow">
            Litvínovická 1478 &middot; České Budějovice &middot; od roku 1991
          </p>

          <h1 className="hero-title">
            Kámen a hlína,
            <br />
            <em>položené na míru</em>
          </h1>

          <p className="hero-lede">
            Dovážíme italské a španělské obklady a dlažby pro domácnosti
            i komerční prostory jižních Čech &mdash; od formátu do kapsy
            po velkoformátové desky přes celou stěnu.
          </p>

          <div className="hero-actions">
            <a className="btn-call" href="tel:+420387021411">
              <span className="btn-num">01</span>
              Zavolat: 387 021 411
            </a>
            <a className="btn-mail" href="mailto:obchod@julia-uno.cz">
              <span className="btn-num">02</span>
              Napsat e-mail
            </a>
          </div>
        </div>

        <div className="hero-swatch" aria-hidden="true">
          <span className="swatch swatch-1" title="Terakota" />
          <span className="swatch swatch-2" title="Carrara" />
          <span className="swatch swatch-3" title="Antracit" />
          <span className="swatch swatch-4" title="Travertin" />
        </div>
      </header>

      <main id="obsah">
        <section className="section section-offer" aria-labelledby="nabidka-title">
          <div className="section-head">
            <span className="section-num">I.</span>
            <div>
              <p className="section-eyebrow">Sortiment</p>
              <h2 id="nabidka-title">Co u nás najdete</h2>
            </div>
          </div>

          <div className="offer-grid">
            <figure className="offer-photo">
              <img
                src="/section-1.webp"
                alt="Velkoformátové obklady a dlažby vystavené v showroomu Julia Uno Group v Litvínovicích"
              />
              <figcaption>Showroom Litvínovice &mdash; stálá expozice italských a španělských kolekcí</figcaption>
            </figure>

            <div className="offer-list">
              <article className="offer-item">
                <span className="offer-mark">01</span>
                <div>
                  <h3>Obklady a dlažby</h3>
                  <p>
                    Výhradně italští a španělští výrobci &mdash; KEOPE, SAIME,
                    CERDOMUS &mdash; s nejnovějšími technologickými i designovými
                    kolekcemi přímo ze světových výstav. Pro byt, koupelnu
                    i rozlehlé komerční plochy.
                  </p>
                </div>
              </article>

              <article className="offer-item">
                <span className="offer-mark">02</span>
                <div>
                  <h3>Venkovní grily Big Green Egg</h3>
                  <p>
                    Keramické grily, které vydrží generace &mdash; stejná
                    filozofie trvanlivého materiálu, kterou máme rádi
                    u obkladů, jen na zahradě místo na stěně.
                  </p>
                </div>
              </article>

              <article className="offer-item">
                <span className="offer-mark">03</span>
                <div>
                  <h3>Poradenství a výběr na míru</h3>
                  <p>
                    Poradíme s formátem, spárou i skladbou pro váš konkrétní
                    prostor &mdash; ať řešíte rodinnou koupelnu, nebo obklad
                    celé provozovny.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-trust" aria-labelledby="duvera-title">
          <div className="section-head">
            <span className="section-num">II.</span>
            <div>
              <p className="section-eyebrow">Od roku 1991</p>
              <h2 id="duvera-title">Proč Julia Uno Group</h2>
            </div>
          </div>

          <div className="trust-grid">
            <div className="trust-text">
              <p className="trust-lede">
                Firmu jsme založili v červenci 1991 ve spolupráci s italským
                partnerem s dlouholetou zkušeností v prodeji keramických
                dlažeb a obkladů. Od roku 2001 sídlíme v obchodní zóně
                v Litvínovicích při výjezdu z Českých Budějovic &mdash;
                s dostatkem prostoru pro showroom i sklad materiálu.
              </p>

              <ul className="trust-brands">
                <li>
                  <span className="brand-name">KEOPE</span>
                  <span className="brand-desc">italský výrobce obkladů a dlažeb</span>
                </li>
                <li>
                  <span className="brand-name">SAIME</span>
                  <span className="brand-desc">italský výrobce obkladů a dlažeb</span>
                </li>
                <li>
                  <span className="brand-name">CERDOMUS</span>
                  <span className="brand-desc">italský výrobce obkladů a dlažeb</span>
                </li>
              </ul>

              <div className="trust-stats">
                <div className="stat">
                  <span className="stat-num">1991</span>
                  <span className="stat-label">Rok založení</span>
                </div>
                <div className="stat">
                  <span className="stat-num">2001</span>
                  <span className="stat-label">Sídlo v Litvínovicích</span>
                </div>
                <div className="stat">
                  <span className="stat-num">3</span>
                  <span className="stat-label">Prověřené výrobní značky</span>
                </div>
              </div>
            </div>

            <figure className="trust-photo">
              <img
                src="/section-2.webp"
                alt="Detailní záběr na spáru a povrch italské kamenné dlažby v realizaci Julia Uno Group"
              />
              <figcaption>Materiál, který obstojí v provozu i po letech</figcaption>
            </figure>
          </div>

          <address className="contact-strip">
            <a href="tel:+420387021411" className="contact-item">
              <span className="contact-label">Telefon</span>
              <span className="contact-value">387 021 411</span>
            </a>
            <a href="mailto:obchod@julia-uno.cz" className="contact-item">
              <span className="contact-label">E-mail</span>
              <span className="contact-value">obchod@julia-uno.cz</span>
            </a>
            <span className="contact-item contact-item-static">
              <span className="contact-label">Showroom</span>
              <span className="contact-value">Litvínovická 1478, České Budějovice</span>
            </span>
          </address>
        </section>
      </main>
    </>
  );
}

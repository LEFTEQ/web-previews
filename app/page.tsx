export default function Page() {
  return (
    <main className="hc">
      <a className="skip-link" href="#nabidka">
        Přeskočit na obsah
      </a>

      {/* HERO */}
      <section className="hero" aria-label="Úvod">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Ortopedické a kompenzační pomůcky v prodejně Help Centrum v Olomouci — vozíky, chodítka a zdravotní potřeby srovnané na regálech"
            className="hero-img"
            width={1600}
            height={1000}
          />
          <div className="hero-scrim" aria-hidden="true" />
        </div>

        <div className="hero-content">
          <div className="wordmark" aria-hidden="true">
            <span className="wm-cross">+</span>
            <span className="wm-text">
              <span className="wm-help">HELP</span>
              <span className="wm-centrum">CENTRUM</span>
            </span>
          </div>

          <p className="hero-eyebrow">Ortopedické a kompenzační pomůcky · Olomouc</p>
          <h1 className="hero-title">
            Pomůcka, která<br />
            <span className="hl">sedí na míru</span>
          </h1>
          <p className="hero-lead">
            Vozík, chodítko, ortéza nebo lůžko — poradíme, změříme, upravíme
            a vyřídíme papírování se zdravotní pojišťovnou. Osobně na
            pobočce, ne přes telefonní strom.
          </p>

          <div className="hero-actions">
            <a className="btn-tel" href="tel:+420585202500">
              <span className="btn-tel-ico" aria-hidden="true">
                ☎
              </span>
              <span>
                Zavolat na pobočku
                <small>585 202 500 · Olomouc</small>
              </span>
            </a>
            <span className="hero-note">Po–Pá 8:00–16:30, bez objednání</span>
          </div>
        </div>

        <div className="hero-strip" role="list" aria-label="Klíčové údaje o pobočce">
          <span role="listitem">
            <b>od r. 1992</b>
            <em>na trhu zdravotních pomůcek</em>
          </span>
          <span role="listitem">
            <b>13 poboček</b>
            <em>po celé ČR</em>
          </span>
          <span role="listitem">
            <b>hrazeno pojišťovnou</b>
            <em>u vybraného sortimentu</em>
          </span>
        </div>
      </section>

      {/* NABÍDKA / SORTIMENT */}
      <section className="section offer" id="nabidka" aria-label="Sortiment pomůcek">
        <div className="section-head">
          <p className="section-eyebrow">Sortiment podle potřeby</p>
          <h2 className="section-title">Od prvního kroku po jízdu na vozíku</h2>
          <p className="section-lead">
            Vybíráme s vámi podle diagnózy a míry, ne podle katalogového čísla.
            Kategorie, se kterými pracujeme nejčastěji:
          </p>
        </div>

        <div className="offer-media">
          <img
            src="/section-1.webp"
            alt="Poradkyně v Help Centru pomáhá klientovi vybrat a nastavit invalidní vozík"
            className="offer-img"
            width={1400}
            height={900}
          />
        </div>

        <ul className="offer-grid" role="list">
          <li className="offer-card">
            <span className="offer-num">01</span>
            <h3>Vozíky</h3>
            <p>Mechanické i elektrické, od základních po aktivní sportovní.</p>
          </li>
          <li className="offer-card">
            <span className="offer-num">02</span>
            <h3>Pomůcky k chůzi</h3>
            <p>Berle, chodítka a rolátory nastavené přesně na vaši výšku.</p>
          </li>
          <li className="offer-card">
            <span className="offer-num">03</span>
            <h3>Bandáže a pásy</h3>
            <p>Bederní, kolenní a kotníkové opory pro rekonvalescenci i sport.</p>
          </li>
          <li className="offer-card">
            <span className="offer-num">04</span>
            <h3>Lůžka a matrace</h3>
            <p>Polohovací postele a antidekubitní matrace pro domácí péči.</p>
          </li>
          <li className="offer-card">
            <span className="offer-num">05</span>
            <h3>Dětský program</h3>
            <p>Speciální sedačky, kočárky a polohovací pomůcky pro děti.</p>
          </li>
          <li className="offer-card">
            <span className="offer-num">06</span>
            <h3>Toaletní program</h3>
            <p>Toaletní křesla, nástavce a madla pro bezpečnou koupelnu.</p>
          </li>
        </ul>

        <div className="offer-note">
          <p>
            <strong>Repasované pomůcky:</strong> vozík nebo chodítko po odborné
            revizi za nižší cenu — ideální na přechodnou dobu léčby nebo jako
            záloha.
          </p>
        </div>
      </section>

      {/* DŮVĚRA / JAK TO FUNGUJE */}
      <section className="section trust" aria-label="Jak získáte pomůcku">
        <div className="trust-media">
          <img
            src="/section-2.webp"
            alt="Zdravotní pomůcka připravená k vyzvednutí na pobočce Help Centrum v Olomouci"
            className="trust-img"
            width={1400}
            height={1000}
          />
        </div>

        <div className="trust-content">
          <p className="section-eyebrow">Postup vyřízení</p>
          <h2 className="section-title">Jak se ke pomůcce dostanete</h2>

          <ol className="steps">
            <li className="step">
              <span className="step-num">1</span>
              <div>
                <h3>Doporučení od lékaře</h3>
                <p>
                  Praktický nebo odborný lékař vystaví poukaz (ePoukaz nebo
                  papírový) na konkrétní typ pomůcky.
                </p>
              </div>
            </li>
            <li className="step">
              <span className="step-num">2</span>
              <div>
                <h3>Zaměření na pobočce</h3>
                <p>
                  V Olomouci vás změříme a vyzkoušíme víc variant, ať sedí
                  postava, výška i způsob užívání.
                </p>
              </div>
            </li>
            <li className="step">
              <span className="step-num">3</span>
              <div>
                <h3>Vyřízení s pojišťovnou</h3>
                <p>
                  Poukaz i schválení revizním lékařem vyřídíme za vás — víme,
                  co pojišťovny vyžadují.
                </p>
              </div>
            </li>
            <li className="step">
              <span className="step-num">4</span>
              <div>
                <h3>Předání a seřízení</h3>
                <p>
                  Pomůcku doladíme na místě a ukážeme, jak s ní zacházet a
                  udržovat ji.
                </p>
              </div>
            </li>
          </ol>

          <div className="trust-footnote">
            <p>
              Pobočka Olomouc · Po–Pá 8:00–16:30 · konzultace bez objednání,
              zaměření na míru raději předem domluvte telefonicky.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

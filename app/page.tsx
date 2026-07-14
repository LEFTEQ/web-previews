export default function Page() {
  return (
    <main>
      <section className="hero">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Sekční garážová vrata Almma na rodinném domě v Praze, detail lamel a pohonu"
            className="hero-img"
          />
          <div className="hero-scrim" aria-hidden="true"></div>
        </div>

        <div className="hero-content">
          <div className="wordmark">
            <span className="wordmark-main">ALMMA</span>
            <span className="wordmark-rule" aria-hidden="true"></span>
            <span className="wordmark-sub">GARÁŽOVÁ VRATA</span>
          </div>

          <p className="hero-eyebrow">Praha 4 &amp; Dobříš &nbsp;·&nbsp; výroba na míru od roku 1994</p>

          <h1 className="hero-headline">
            Vrata, která se<br />
            <span className="hero-headline-accent">zavřou napoprvé.</span><br />
            A za dvacet let taky.
          </h1>

          <p className="hero-lead">
            Motor doběhne, lamely dosednou, zámek cvakne — a je ticho. Navrhujeme
            a vyrábíme sekční a rolovací garážová vrata na míru, montujeme je
            v Praze a okolí a servisujeme i to, co postavil někdo jiný.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420222590590">
              <span className="btn-num">01</span> Zavolat na +420 222 590 590
            </a>
            <a className="btn btn-ghost" href="#nabidka">
              Prohlédnout nabídku
            </a>
          </div>

          <dl className="hero-stats">
            <div className="hero-stat">
              <dt>Založeno</dt>
              <dd>1994</dd>
            </div>
            <div className="hero-stat">
              <dt>Výrobní areál</dt>
              <dd>Dobříš</dd>
            </div>
            <div className="hero-stat">
              <dt>Servis</dt>
              <dd>i cizí vrata</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section offer" id="nabidka" aria-labelledby="offer-heading">
        <div className="section-head">
          <span className="section-eyebrow">Nabídka — 01/02</span>
          <h2 className="section-heading" id="offer-heading">
            Od vzorkovny po servisní vůz
          </h2>
          <p className="section-lead">
            Nekupujete jen vrata, ale celý servisní vztah. Tady je, co reálně
            řešíme — v tomto pořadí, jak to na zakázce přichází.
          </p>
        </div>

        <div className="offer-grid">
          <figure className="offer-media">
            <img
              src="/section-1.webp"
              alt="Detail lamelové výplně a vodicí lišty garážových vrat Almma ve výrobě v Dobříši"
              className="offer-img"
            />
            <figcaption>Výroba — Příbramská 1945, Dobříš</figcaption>
          </figure>

          <ol className="offer-list">
            <li className="offer-item">
              <span className="offer-marker">01</span>
              <div>
                <h3>Kalkulace na míru</h3>
                <p>
                  Zaměříme otvor, poradíme s typem pohonu a do pár dnů máte
                  cenu na stole — bez skrytých položek za montáž.
                </p>
              </div>
            </li>
            <li className="offer-item">
              <span className="offer-marker">02</span>
              <div>
                <h3>Sekční a rolovací vrata</h3>
                <p>
                  Sekční do stropu garáže, rolovací tam, kde nad autem
                  nezbývá místo. Lamely, povrchy i ovládání volíte vy.
                </p>
              </div>
            </li>
            <li className="offer-item">
              <span className="offer-marker">03</span>
              <div>
                <h3>Montáž v Praze a okolí</h3>
                <p>
                  Vlastní montéři, ne subdodávka. Staré vrata odvezeme,
                  nová seřídíme tak, aby dosedla na milimetr přesně.
                </p>
              </div>
            </li>
            <li className="offer-item">
              <span className="offer-marker">04</span>
              <div>
                <h3>Servis, i když nejsme výrobce</h3>
                <p>
                  Vrzající pohon, uvolněné lano, prasklá pružina — servisní
                  středisko vyjede i k vratům, která jsme nemontovali my.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="section trust" aria-labelledby="trust-heading">
        <div className="section-head">
          <span className="section-eyebrow">Reference — 02/02</span>
          <h2 className="section-heading" id="trust-heading">
            Třicet let vrat kolem Prahy
          </h2>
          <p className="section-lead">
            Vzorkovnu máme na Antala Staška, výrobu v Dobříši. Mezi tím stojí
            tisíce vrat, která jsme navrhli, smontovali nebo aspoň seřídili.
          </p>
        </div>

        <div className="trust-grid">
          <figure className="trust-media">
            <img
              src="/section-2.webp"
              alt="Showroom Almma v Praze na Antala Staška s ukázkovými vzorky garážových vrat"
              className="trust-img"
            />
            <figcaption>Vzorkovna — Antala Staška 121/22, Praha 4</figcaption>
          </figure>

          <div className="trust-body">
            <blockquote className="trust-quote">
              „Přijeli, změřili, za tři neděle byla nová sekční vrata smontovaná
              a starou plechovou roletu odvezli s sebou. Nejvíc oceňuju, že
              zvedák teď skutečně nedělá hluk.“
              <footer>— zákazník z Prahy 4, montáž sekčních vrat</footer>
            </blockquote>

            <ul className="trust-facts">
              <li>
                <span className="trust-fact-label">IČ</span>
                <span>26198002</span>
              </li>
              <li>
                <span className="trust-fact-label">Sídlo</span>
                <span>Antala Staška 121/22, Praha 4</span>
              </li>
              <li>
                <span className="trust-fact-label">Výroba</span>
                <span>Příbramská 1945, Dobříš</span>
              </li>
              <li>
                <span className="trust-fact-label">Zapsáno</span>
                <span>OR u Městského soudu v Praze, C 78974</span>
              </li>
            </ul>

            <div className="trust-contact">
              <div>
                <p className="trust-contact-label">Dotazy k nabídce</p>
                <a href="tel:+420222590590">+420 222 590 590</a>
              </div>
              <div>
                <p className="trust-contact-label">Servisní středisko</p>
                <a href="tel:+420773447541">+420 773 447 541</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

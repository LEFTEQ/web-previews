export default function Page() {
  return (
    <>
      <a className="skip-link" href="#obsah">Přeskočit na obsah</a>

      <header className="hero">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Broušení masivní dubové podlahy v realizaci Design Parket v Brně"
            className="hero-img"
          />
          <div className="hero-scrim" aria-hidden="true" />
        </div>

        <div className="hero-grain" aria-hidden="true" />

        <div className="hero-content">
          <p className="hero-kicker">Podlahové studio · Brno</p>
          <h1 className="wordmark">
            <span className="wordmark-main">Design Parket</span>
            <span className="wordmark-sub">s.&nbsp;r.&nbsp;o.</span>
          </h1>
          <p className="hero-lead">
            Masiv, vlys, vzorované kladení. Podlahy, které v Brně
            pokládáme a brousíme už přes dvacet let — a stojí za nimi
            naše jméno, ne katalogové číslo.
          </p>

          <dl className="hero-facts">
            <div className="hero-fact">
              <dt>Řemeslo</dt>
              <dd>ruční broušení a lakování na místě</dd>
            </div>
            <div className="hero-fact">
              <dt>Dřevo</dt>
              <dd>dub, buk, jasan, ořech — evropský masiv</dd>
            </div>
            <div className="hero-fact">
              <dt>Působnost</dt>
              <dd>Brno a Jihomoravský kraj</dd>
            </div>
          </dl>
        </div>
      </header>

      <main id="obsah">
        <section className="section services" aria-labelledby="sluzby-h">
          <div className="section-head">
            <p className="eyebrow">Postup zakázky — od vzorku po leštěnku</p>
            <h2 id="sluzby-h">Co u nás na podlaze projde</h2>
          </div>

          <div className="plank-list" role="list">
            <article className="plank" role="listitem">
              <span className="plank-index">01</span>
              <div className="plank-body">
                <h3>Návrh a výběr dřeva</h3>
                <p>
                  Přijedete do showroomu na Vídeňské, sáhnete si na
                  vzorky masivu i vlysu a vybereme odstín podle vašeho
                  interiéru — od světlého jasanu po tmavě mořený dub.
                </p>
              </div>
            </article>

            <article className="plank plank-alt" role="listitem">
              <span className="plank-index">02</span>
              <div className="plank-body">
                <h3>Pokládka a vzorování</h3>
                <p>
                  Klasická francouzská rybina, kladení do копenhagenu
                  nebo prostá prkna na sraz — pokládáme lepením i na
                  pero drážku, včetně přechodových lišt a soklů.
                </p>
              </div>
            </article>

            <article className="plank" role="listitem">
              <span className="plank-index">03</span>
              <div className="plank-body">
                <h3>Broušení bez prachu</h3>
                <p>
                  Třífázové broušení bruskami s odsáváním přímo u vás
                  doma — žádný prach na nábytku, žádné stěhování do
                  jiného pokoje na týden.
                </p>
              </div>
            </article>

            <article className="plank plank-alt" role="listitem">
              <span className="plank-index">04</span>
              <div className="plank-body">
                <h3>Olejování nebo lakování</h3>
                <p>
                  Přírodní olej pro živý vzhled dřeva, nebo matný
                  polyuretanový lak pro maximální odolnost v kuchyni
                  a chodbě — poradíme podle provozu domácnosti.
                </p>
              </div>
            </article>

            <article className="plank" role="listitem">
              <span className="plank-index">05</span>
              <div className="plank-body">
                <h3>Renovace staré podlahy</h3>
                <p>
                  Přebroušení a nový olej vdechne druhý život i
                  třicet let staré dubové podlaze po prarodičích —
                  často levnější řešení než pokládka nové.
                </p>
              </div>
            </article>
          </div>

          <figure className="section-figure">
            <img
              src="/section-1.webp"
              alt="Detail pokládky dubového vlysu do vzoru francouzská rybina"
            />
            <figcaption>Francouzská rybina, dub — realizace Brno-Žabovřesky</figcaption>
          </figure>
        </section>

        <section className="section trust" aria-labelledby="reference-h">
          <div className="section-head">
            <p className="eyebrow">Dvacet let na brněnských podlahách</p>
            <h2 id="reference-h">Proč si nás lidé vybírají znovu</h2>
          </div>

          <div className="trust-grid">
            <figure className="section-figure trust-figure">
              <img
                src="/section-2.webp"
                alt="Hotová olejovaná dubová podlaha v obývacím pokoji, realizace Design Parket"
              />
              <figcaption>Olejovaný dub, širokoprkno — rodinný dům Brno-Kníničky</figcaption>
            </figure>

            <div className="trust-notes">
              <blockquote className="note">
                <p>
                  „Přebrousili nám podlahu po dědečkovi z roku 1978.
                  Netušili jsme, že pod tou špínou je tak krásný dub.
                  Přijeli, poradili olej místo laku a je to nejhezčí
                  místnost v bytě.“
                </p>
                <footer>Rodina Novákových, Brno-Královo Pole</footer>
              </blockquote>

              <blockquote className="note note-alt">
                <p>
                  „Pokládali nám vzor rybinu do kanceláře, práce na
                  milimetr přesná a bez zbytečného prachu v provozu.
                  Domluva rychlá, termín drželi.“
                </p>
                <footer>Ateliér Kolmo, Brno-střed</footer>
              </blockquote>

              <ul className="trust-marks">
                <li>
                  <span className="trust-num">20+</span>
                  <span>let v oboru, jedna dílna na Vídeňské</span>
                </li>
                <li>
                  <span className="trust-num">3&nbsp;fáze</span>
                  <span>broušení s odsáváním prachu na místě</span>
                </li>
                <li>
                  <span className="trust-num">dub · buk</span>
                  <span>jasan i ořech skladem k nahlédnutí</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

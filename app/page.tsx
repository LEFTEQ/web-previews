export default function Page() {
  return (
    <main className="kr">
      {/* ===== HERO ===== */}
      <header className="kr-hero">
        <div className="kr-hero__topbar">
          <div className="kr-wordmark" aria-label="Kopta reality">
            <span className="kr-wordmark__k">K</span>
            <span className="kr-wordmark__text">opta&nbsp;<em>reality</em></span>
          </div>
          <a className="kr-hero__phone" href="tel:+420775681050">
            +420 775 681 050
          </a>
        </div>

        <div className="kr-hero__grid">
          <div className="kr-hero__copy">
            <p className="kr-eyebrow">Realitní kancelář · Plzeň a Plzeňský kraj</p>
            <h1 className="kr-hero__title">
              Váš dům, byt nebo chalupu prodám tak,
              <span className="kr-hero__title-accent"> jako by byla moje.</span>
            </h1>
            <p className="kr-hero__lead">
              Jsem Jan Kopta, makléř s&nbsp;vlastní značkou od roku 2012. Na
              Plzeňsku žiju celý život a&nbsp;beru cíleně méně zakázek, abych se
              každé mohl věnovat naplno. Když se rozhodnu prodat, prodám.
            </p>
            <div className="kr-hero__actions">
              <a className="kr-btn kr-btn--solid" href="tel:+420775681050">
                Zavolat Janu Koptovi
              </a>
              <a className="kr-btn kr-btn--ghost" href="#nabidka">
                Prohlédnout nemovitosti
              </a>
            </div>

            <dl className="kr-hero__facts">
              <div className="kr-fact">
                <dt>17 let</dt>
                <dd>praxe makléře na Plzeňsku</dd>
              </div>
              <div className="kr-fact">
                <dt>750+</dt>
                <dd>dokončených prodejů</dd>
              </div>
              <div className="kr-fact">
                <dt>Realiťák roku</dt>
                <dd>1.&nbsp;místo v&nbsp;kraji 2018/19</dd>
              </div>
            </dl>
          </div>

          <figure className="kr-hero__figure">
            <img
              src="/hero.webp"
              alt="Rodinný dům na prodej v Plzeňském kraji za letního podvečera"
              className="kr-hero__img"
            />
            <figcaption className="kr-hero__caption">
              „Místo, kde budete jednou žít, si vás přitáhne jako magnet.“
              <span> — Jan Kopta, DiS.</span>
            </figcaption>
          </figure>
        </div>
      </header>

      {/* ===== SEKCE: NABÍDKA ===== */}
      <section className="kr-section kr-section--listings" id="nabidka" aria-labelledby="nabidka-h">
        <div className="kr-section__head">
          <p className="kr-eyebrow">Aktuální nabídka</p>
          <h2 id="nabidka-h">Málo nemovitostí. Schválně.</h2>
          <p className="kr-section__sub">
            Nedržím stovky inzerátů. V&nbsp;nabídce mám jen tolik nemovitostí,
            kolika se dokážu věnovat osobně — od nafocení po předání klíčů.
          </p>
        </div>

        <ul className="kr-listings">
          <li className="kr-card">
            <span className="kr-card__tag">Novinka</span>
            <h3>Chata u řeky Radbuzy</h3>
            <p className="kr-card__place">Hradec u Stoda, okr. Plzeň-jih</p>
            <p className="kr-card__price">1 650 000 Kč</p>
          </li>
          <li className="kr-card">
            <span className="kr-card__tag">Novinka</span>
            <h3>Byt 3+1 s&nbsp;lodžií, 5.&nbsp;NP, Skupova</h3>
            <p className="kr-card__place">Plzeň – Bory / Doudlevce</p>
            <p className="kr-card__price">5 290 000 Kč</p>
          </li>
          <li className="kr-card">
            <span className="kr-card__tag">Novinka</span>
            <h3>Byt 3+1, cihla, 92&nbsp;m², přízemí</h3>
            <p className="kr-card__place">Plzeň – Bory, Jižní Předměstí</p>
            <p className="kr-card__price">6 590 000 Kč</p>
          </li>
          <li className="kr-card">
            <span className="kr-card__tag">Novinka</span>
            <h3>Domek 2+1 s&nbsp;dvorem a&nbsp;garáží</h3>
            <p className="kr-card__place">Roupov, okr. Plzeň-jih</p>
            <p className="kr-card__price">3 490 000 Kč</p>
          </li>
        </ul>

        <p className="kr-listings__note">
          Prodávám hlavně byty, domy, chaty, chalupy a&nbsp;pozemky
          v&nbsp;Plzni a&nbsp;okolí. Chcete vědět, na kolik vyjde ta vaše?
          Odhad ceny udělám zdarma a&nbsp;bez závazku.
        </p>
      </section>

      {/* ===== SEKCE: JAK PRACUJI / DŮVĚRA ===== */}
      <section className="kr-section kr-section--about" aria-labelledby="about-h">
        <div className="kr-about__grid">
          <figure className="kr-about__figure">
            <img
              src="/section-2.webp"
              alt="Předání klíčů od nemovitosti novým majitelům v Plzni"
              className="kr-about__img"
            />
          </figure>

          <div className="kr-about__copy">
            <p className="kr-eyebrow">Jak pracuji</p>
            <h2 id="about-h">Neslibuju nesplnitelné. Slíbené splním.</h2>
            <p>
              V&nbsp;realitách jsem od roku 2007, vlastní značku Kopta reality
              stavím od roku 2012. Za tu dobu mi rukama prošlo přes 750
              obchodů — a&nbsp;každý byl jiný. Na Plzeňsku žiju 47 let, takže
              vím, co která čtvrť a&nbsp;vesnice obnáší, dřív než otevřete
              katastrální mapu.
            </p>

            <ol className="kr-steps">
              <li className="kr-step">
                <span className="kr-step__num" aria-hidden="true">1</span>
                <div>
                  <h3>Sejdeme se u&nbsp;vás</h3>
                  <p>
                    Projdu nemovitost, řeknu vám reálnou prodejní cenu
                    a&nbsp;co jí případně pomůže. Bez závazku, bez smlouvy.
                  </p>
                </div>
              </li>
              <li className="kr-step">
                <span className="kr-step__num" aria-hidden="true">2</span>
                <div>
                  <h3>Připravím prodej</h3>
                  <p>
                    Profesionální fotky, právní podklady, PENB, inzerce tam,
                    kde kupující na Plzeňsku opravdu hledají.
                  </p>
                </div>
              </li>
              <li className="kr-step">
                <span className="kr-step__num" aria-hidden="true">3</span>
                <div>
                  <h3>Dotáhnu to do konce</h3>
                  <p>
                    Prohlídky, vyjednávání, úschova kupní ceny, katastr
                    i&nbsp;předání. U&nbsp;telefonu jsem po celou dobu já,
                    ne call centrum.
                  </p>
                </div>
              </li>
            </ol>

            <blockquote className="kr-quote">
              <p>
                „Když se rozhodnu prodat, tak prodávám a&nbsp;nerad něco
                vzdávám. Každý obchod je pro mě výzva.“
              </p>
              <footer>Jan Kopta, DiS. — jednatel a&nbsp;realitní makléř</footer>
            </blockquote>

            <p className="kr-about__trust">
              37 recenzí na Google · Realiťák roku 2018 a&nbsp;2019 —
              dvakrát 1.&nbsp;místo v&nbsp;Plzeňském kraji i&nbsp;okrese
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

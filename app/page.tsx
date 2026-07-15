export default function Page() {
  return (
    <>
      <header className="site">
        <div className="wrap nav">
          <a className="mark" href="#top" aria-label="VSM carpaint, autolakovna Brno">
            <span className="mark-v">VSM</span>
            <span className="mark-c">carpaint</span>
          </a>
          <a className="nav-tel" href="tel:+420703390542">
            <span className="nav-tel-dot" aria-hidden="true" />
            703&nbsp;390&nbsp;542
          </a>
        </div>
      </header>

      <main id="top">
        {/* HERO — a freshly lacquered panel, gloss sweeps once on load */}
        <section className="band hero" aria-labelledby="hero-h">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="tape">Autolakovna&nbsp;·&nbsp;Brno</p>
              <h1 id="hero-h" className="display hero-h">
                Dokonalý
                <br />
                <span className="hero-h-accent">lesk</span>
              </h1>
              <p className="lede">
                Kompletní opravy vozidel po nehodě. Vůz převezmeme zohýbaný,
                vrátíme s lakem, který vypadá jako z výroby — a pojistnou
                událost vyřídíme za vás.
              </p>
              <a className="btn" href="tel:+420703390542">
                Zavolat 703 390 542
              </a>
              <p className="micro">
                Po&ndash;Pá po domluvě · vsm.carpaint@gmail.com
              </p>
            </div>

            <div className="hero-panel" role="img" aria-label="Vzorník laku candy red s vysokým leskem">
              <div className="gloss gloss-hero" aria-hidden="true" />
              <span className="panel-watermark" aria-hidden="true">VSM</span>
              <div className="panel-spec">
                <span className="panel-spec-name">Candy&nbsp;Red</span>
                <span className="panel-spec-code">2K clearcoat · vysoký lesk</span>
              </div>
            </div>
          </div>
        </section>

        {/* SLUŽBY */}
        <section className="band services" aria-labelledby="svc-h">
          <div className="wrap">
            <p className="eyebrow">Co u nás uděláme</p>
            <h2 id="svc-h" className="display sec-h">Tři vrstvy práce</h2>
            <div className="cards">
              <article className="card reveal">
                <div className="gloss gloss-scroll" aria-hidden="true" />
                <p className="card-tag">Karosářské &amp; lakýrnické</p>
                <h3 className="card-h display">Opravy po nehodě</h3>
                <p className="card-p">
                  Karosářské, lakýrnické i mechanické práce pod jednou střechou.
                  Vytáhneme plech, srovnáme geometrii a znovu nalakujeme —
                  komplet od nárazníku po nárazník.
                </p>
              </article>

              <article className="card reveal">
                <div className="gloss gloss-scroll" aria-hidden="true" />
                <p className="card-tag">Míchání odstínu na kód</p>
                <h3 className="card-h display">Lakování</h3>
                <p className="card-p">
                  Celý vůz i jednotlivý díl. Odstín namícháme přesně na váš lak,
                  nastříkáme v prachově čisté kabině a zapečeme do plného,
                  rovnoměrného lesku.
                </p>
              </article>

              <article className="card reveal">
                <div className="gloss gloss-scroll" aria-hidden="true" />
                <p className="card-tag">Renovace clearcoatu</p>
                <h3 className="card-h display">Leštění</h3>
                <p className="card-p">
                  Hloubkové leštění laku, odstranění škrábanců, matu a hologramů.
                  Vrátíme starší kůži laku zpět zrcadlový, mokrý clearcoat.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* PROCES — genuine 3-step sequence, spray-booth white */}
        <section className="band process" aria-labelledby="proc-h">
          <div className="wrap">
            <p className="eyebrow eyebrow-dark">Oprava po nehodě, krok za krokem</p>
            <h2 id="proc-h" className="display sec-h sec-h-dark">
              Vy se nestaráte o nic
            </h2>
            <p className="process-lede">
              Postaráme se o vše — od komunikace s pojišťovnou až po předání
              opraveného vozu. Přijedete do Brna s pomačkaným autem, odjedete
              s hotovým.
            </p>

            <ol className="steps">
              <li className="step reveal">
                <span className="step-num display">01</span>
                <div>
                  <h3 className="step-h display">Vyřídíme pojišťovnu</h3>
                  <p className="step-p">
                    Převezmeme komunikaci s pojišťovnou a připravíme všechny
                    potřebné podklady k pojistné události.
                  </p>
                </div>
              </li>
              <li className="step reveal">
                <span className="step-num display">02</span>
                <div>
                  <h3 className="step-h display">Prohlédneme vůz</h3>
                  <p className="step-p">
                    Zkontrolujeme rozsah poškození a připravíme kalkulaci
                    opravy, abyste přesně věděli, co se bude dít.
                  </p>
                </div>
              </li>
              <li className="step reveal">
                <span className="step-num display">03</span>
                <div>
                  <h3 className="step-h display">Opravíme a vrátíme</h3>
                  <p className="step-p">
                    Provedeme karosářské, lakýrnické i mechanické práce a vůz
                    vám předáme v perfektním stavu — s dokonalým leskem.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>
      </main>
    </>
  );
}

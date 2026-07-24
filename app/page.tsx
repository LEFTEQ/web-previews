import { AiImage } from "./_ui";

export default function Page() {
  return (
    <main className="mc">
      <header className="mc-topbar">
        <div className="mc-wordmark" aria-label="MADRE-CAT">
          MADRE<span className="mc-dash">—</span>CAT
        </div>
        <p className="mc-topbar-note">zemní a terénní práce · Chodov u&nbsp;Karlových&nbsp;Var</p>
      </header>

      <section className="mc-hero" id="uvod">
        <div className="mc-hero-grid">
          <div className="mc-hero-lede">
            <p className="mc-eyebrow">Sonda 01 · profil pozemku</p>
            <h1 className="mc-h1">
              Z&nbsp;pozemku<br />
              <em>uděláme</em><br />
              rovnou zem.
            </h1>
            <p className="mc-sub">
              Sejmeme ornici, vymodelujeme pláň na přesné spády a&nbsp;zhutníme
              podklad, na kterém se dá stavět i&nbsp;sázet. Od hrubé skrývky až
              po finální srovnání na centimetry.
            </p>
            <a className="mc-cta" href="#sluzby">Poptat úpravu terénu</a>
            <ul className="mc-chips">
              <li>Pásové i&nbsp;kolové stroje</li>
              <li>Doklad o&nbsp;způsobilosti</li>
              <li>Chodovsko a&nbsp;Karlovarsko</li>
            </ul>
          </div>

          <aside className="mc-log" aria-label="Profil terénu — svislý řez">
            <div className="mc-log-head">
              <span>PROFIL TERÉNU</span>
              <span>řez A–A′</span>
            </div>
            <ol className="mc-strata">
              <li className="s1" style={{ ["--h" as string]: "20%" }}>
                <span className="d">0,0&nbsp;m</span>
                <span className="n">ornice</span>
              </li>
              <li className="s2" style={{ ["--h" as string]: "22%" }}>
                <span className="d">−0,3&nbsp;m</span>
                <span className="n">podorničí</span>
              </li>
              <li className="s3" style={{ ["--h" as string]: "22%" }}>
                <span className="d">−0,8&nbsp;m</span>
                <span className="n">jílovité podloží</span>
              </li>
              <li className="s4" style={{ ["--h" as string]: "18%" }}>
                <span className="d">−1,4&nbsp;m</span>
                <span className="n">štěrkové lože</span>
              </li>
              <li className="s5" style={{ ["--h" as string]: "18%" }}>
                <span className="d">−2,0&nbsp;m</span>
                <span className="n">rostlý terén</span>
              </li>
            </ol>
          </aside>
        </div>
      </section>

      <div className="mc-cut mc-cut--light" aria-hidden="true">
        <span className="mc-cut-fill" />
      </div>

      <section className="mc-section mc-section--light" id="sluzby">
        <div className="mc-wrap">
          <p className="mc-eyebrow mc-eyebrow--dark">Co pro váš pozemek uděláme</p>
          <h2 className="mc-h2">Čtyři vrstvy práce, odshora dolů</h2>
          <p className="mc-lead">
            Terén se srovnává po vrstvách — přesně v&nbsp;tom pořadí, v&nbsp;jakém
            ho stroj projíždí. Každý krok má svůj smysl a&nbsp;vy víte, za co
            platíte.
          </p>

          <div className="mc-services">
            <ol className="mc-steps">
              <li>
                <span className="mc-step-no">01</span>
                <div>
                  <h3>Skrývka ornice</h3>
                  <p>
                    Úrodnou vrstvu sejmeme a&nbsp;uložíme na deponii, ať ji
                    později vrátíte zpět na zahradu — nepřijdete o&nbsp;ni.
                  </p>
                </div>
              </li>
              <li>
                <span className="mc-step-no">02</span>
                <div>
                  <h3>Hrubé terénní úpravy</h3>
                  <p>
                    Vymodelujeme pláň, spády a&nbsp;svahy podle projektu —
                    základ, na kterém všechno další stojí.
                  </p>
                </div>
              </li>
              <li>
                <span className="mc-step-no">03</span>
                <div>
                  <h3>Navážky a&nbsp;hutnění</h3>
                  <p>
                    Dovezeme materiál, rozprostřeme ho a&nbsp;zhutníme na
                    únosnost pod stavbu, cestu i&nbsp;zpevněnou plochu.
                  </p>
                </div>
              </li>
              <li>
                <span className="mc-step-no">04</span>
                <div>
                  <h3>Finální srovnání</h3>
                  <p>
                    Doladíme roviny a&nbsp;spády na centimetry — připravené
                    k&nbsp;dláždění, položení trávníku nebo betonáži.
                  </p>
                </div>
              </li>
            </ol>

            <figure className="mc-shot-wrap">
              <AiImage
                src="/section-1.webp"
                alt="Stroj MADRE-CAT srovnává pláň pozemku do roviny"
                className="mc-shot"
              />
              <figcaption>
                Také výkopy základů, jímek a&nbsp;bazénů, příprava pod
                komunikace a&nbsp;odvodnění pozemku.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <div className="mc-cut mc-cut--dark" aria-hidden="true">
        <span className="mc-cut-fill" />
      </div>

      <section className="mc-section mc-section--dark" id="o-nas">
        <div className="mc-wrap">
          <p className="mc-eyebrow">Proč to svěřit nám</p>
          <h2 className="mc-h2 mc-h2--light">Stroje, lidé a&nbsp;papíry, co&nbsp;zem uhlídají</h2>

          <div className="mc-trust">
            <div className="mc-trust-text">
              <p className="mc-lead mc-lead--light">
                Sídlíme v&nbsp;Chodově kousek od Karlových Varů a&nbsp;točíme se
                po celém Karlovarsku a&nbsp;Sokolovsku. Přijedeme se na pozemek
                podívat, změříme spády a&nbsp;řekneme rovnou, co jde
                a&nbsp;za&nbsp;kolik.
              </p>

              <dl className="mc-facts">
                <div>
                  <dt>Hloubka výkopů</dt>
                  <dd>0,3–2,0&nbsp;m</dd>
                </div>
                <div>
                  <dt>Působíme</dt>
                  <dd>Chodov · K.&nbsp;Vary · Sokolov</dd>
                </div>
                <div>
                  <dt>Rozsah</dt>
                  <dd>skrývka → finální pláň</dd>
                </div>
              </dl>

              <ul className="mc-refs">
                <li>Zpevné termíny a&nbsp;odvoz přebytečné zeminy v&nbsp;ceně.</li>
                <li>Pojištěné stroje s&nbsp;platnou technickou kontrolou.</li>
                <li>Předáme rovný, zhutněný pozemek připravený k&nbsp;práci.</li>
              </ul>
            </div>

            <div className="mc-diploma">
              <div className="mc-diploma-inner">
                <p className="mc-diploma-kicker">Doklad na stěně kanceláře</p>
                <p className="mc-diploma-title">
                  Odborná způsobilost k&nbsp;zemním
                  a&nbsp;výkopovým pracím
                </p>
                <p className="mc-diploma-body">
                  Rámováno stejně, jako gradujeme zem — vrstvu po&nbsp;vrstvě.
                  Kvalifikace i&nbsp;technika, o&nbsp;které se můžete přesvědčit
                  před podpisem.
                </p>
              </div>
              <AiImage
                src="/section-2.webp"
                alt="Zemní stroje a technika MADRE-CAT v terénu"
                className="mc-diploma-shot"
              />
            </div>
          </div>
        </div>
      </section>

      <a className="mc-sticky" href="#sluzby">Poptat úpravu terénu</a>
    </main>
  );
}

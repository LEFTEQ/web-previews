export default function Page() {
  return (
    <main className="audio-page">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <p className="wordmark">
              <span className="wordmark-euc">EUC</span>
              <span className="wordmark-sep" aria-hidden="true"></span>
              <span className="wordmark-place">Klinika Liberec — sluchadla</span>
            </p>

            <h1 className="hero-title">
              <span className="hero-line hero-line-1">Slyšet vnuky,</span>
              <span className="hero-line hero-line-2">zvonek i ptáky</span>
              <span className="hero-line hero-line-3">v Jizerkách.</span>
            </h1>

            <p className="hero-lead">
              Audiologická ambulance EUC v Liberci, Klášterní 2/117. Změříme vám
              sluch, vybereme sluchadlo přesně na vaše ucho a naučíme vás s ním
              žít. Vyšetření hradí všechny pojišťovny.
            </p>

            <div className="hero-actions">
              <a className="btn btn-solid" href="tel:+420485341111">
                Zavolat ambulanci
              </a>
              <a className="btn btn-ghost" href="#cesta">
                Jak probíhá vyšetření
              </a>
            </div>

            <p className="hero-note">
              Po–Pá 8:00–15:00 · objednání i online · první konzultace zdarma
            </p>
          </div>

          <figure className="hero-figure">
            <img
              src="/hero.webp"
              alt="Audioložka nasazuje pacientce moderní sluchadlo v ambulanci EUC Kliniky Liberec"
              className="hero-img"
            />
            {/* Signature: živý audiogram — křivka sluchu jako grafický podpis kliniky */}
            <div className="audiogram" aria-hidden="true">
              <svg viewBox="0 0 320 90" preserveAspectRatio="none" className="audiogram-svg">
                <polyline
                  className="audiogram-line"
                  points="0,62 40,58 80,50 120,40 160,44 200,30 240,34 280,20 320,24"
                  fill="none"
                />
                <g className="audiogram-dots">
                  <circle cx="40" cy="58" r="4" />
                  <circle cx="120" cy="40" r="4" />
                  <circle cx="200" cy="30" r="4" />
                  <circle cx="280" cy="20" r="4" />
                </g>
              </svg>
              <div className="audiogram-labels">
                <span>250&nbsp;Hz</span>
                <span>1&nbsp;kHz</span>
                <span>4&nbsp;kHz</span>
                <span>8&nbsp;kHz</span>
              </div>
            </div>
          </figure>
        </div>
      </header>

      {/* ===== CESTA KE SLUCHADLU ===== */}
      <section className="journey" id="cesta" aria-labelledby="journey-title">
        <div className="section-inner">
          <p className="eyebrow">Od prvního tónu k vlastnímu sluchadlu</p>
          <h2 className="section-title" id="journey-title">
            Čtyři návštěvy. Víc jich nepotřebujete.
          </h2>

          <ol className="journey-list">
            <li className="journey-step">
              <span className="step-freq" aria-hidden="true">250&nbsp;Hz</span>
              <h3 className="step-title">Audiometrie ve zvukotěsné kabině</h3>
              <p className="step-text">
                Nasadíte si sluchátka a zmáčknete tlačítko, kdykoli uslyšíte tón.
                Za dvacet minut víme přesně, které frekvence vám unikají. Vyšetření
                plně hradí pojišťovna.
              </p>
            </li>
            <li className="journey-step">
              <span className="step-freq" aria-hidden="true">1&nbsp;kHz</span>
              <h3 className="step-title">Výběr sluchadla podle vašeho dne</h3>
              <p className="step-text">
                Chodíte na spolky, hlídáte vnoučata, nebo hlavně televize a telefon?
                Podle toho vybereme závěsné či zvukovodové sluchadlo — od modelů
                hrazených pojišťovnou po dobíjecí s připojením k mobilu.
              </p>
            </li>
            <li className="journey-step">
              <span className="step-freq" aria-hidden="true">4&nbsp;kHz</span>
              <h3 className="step-title">Otisk ucha a nastavení na míru</h3>
              <p className="step-text">
                Zhotovíme otisk zvukovodu pro tvarovku, která sedí jen vám. Sluchadlo
                naladíme přesně podle vašeho audiogramu — žádné pískání, žádné
                dunění vlastního hlasu.
              </p>
            </li>
            <li className="journey-step">
              <span className="step-freq" aria-hidden="true">8&nbsp;kHz</span>
              <h3 className="step-title">Doladění po měsíci nošení</h3>
              <p className="step-text">
                Mozek si na nové zvuky zvyká zhruba čtyři týdny. Pak přijdete znovu,
                řeknete nám, co ruší, a my sluchadlo doladíme. Servis a čištění pak
                zvládneme kdykoli na počkání.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* ===== DŮVĚRA / AMBULANCE ===== */}
      <section className="trust" aria-labelledby="trust-title">
        <div className="section-inner trust-grid">
          <figure className="trust-figure">
            <img
              src="/section-2.webp"
              alt="Vyšetření sluchu ve zvukotěsné kabině audiologické ambulance v Liberci"
              className="trust-img"
            />
            <figcaption className="trust-caption">
              Zvukotěsná kabina audiologie, EUC Klinika Liberec, Klášterní 2/117
            </figcaption>
          </figure>

          <div className="trust-text">
            <p className="eyebrow">Ambulance, kterou znáte pod Ještědem</p>
            <h2 className="section-title" id="trust-title">
              Sluch tu měříme přes dvacet let. Dvě zastávky od radnice.
            </h2>
            <p className="trust-lead">
              Audiologie je součást EUC Kliniky Liberec v Klášterní ulici — pět
              minut pěšky od zastávky Šaldovo náměstí. Nemusíte za sluchadlem
              jezdit do Prahy ani do Hradce; naladění i servis vyřídíte tam, kam
              chodíte k praktikovi.
            </p>

            <ul className="trust-points">
              <li>
                <strong>Všechny pojišťovny.</strong> Základní sluchadlo můžete mít
                zcela bez doplatku, jednou za pět let.
              </li>
              <li>
                <strong>Baterie, tvarovky, čištění.</strong> Drobný servis vyřešíme
                na počkání, bez objednání.
              </li>
              <li>
                <strong>Přijdeme i k vám domů.</strong> Pro pacienty, kteří se do
                ambulance nedostanou, zajistíme vyšetření v Liberci a okolí.
              </li>
            </ul>

            <blockquote className="trust-quote">
              <p>
                „Máma pět let odmítala sluchadlo, protože ‚to píská a je to vidět‘.
                V Klášterní jí vybrali zvukovodové, které není vidět vůbec — a po
                měsíci mi volala, že poprvé slyšela kosa na zahradě."
              </p>
              <cite>— dcera pacientky, Liberec-Ruprechtice</cite>
            </blockquote>

            <a className="btn btn-solid" href="tel:+420485341111">
              Objednat vyšetření sluchu
            </a>
            <p className="trust-mail">
              Nebo napište na{" "}
              <a href="mailto:liberec@eucklinika.cz">liberec@eucklinika.cz</a> —
              ozveme se do druhého pracovního dne.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

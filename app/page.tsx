export default function Page() {
  return (
    <main className="page">
      {/* ===== HERO ===== */}
      <header className="hero" aria-label="ORL Spurná — sluchadla Liberec">
        <nav className="topbar">
          <div className="wordmark">
            <span className="wordmark-orl">ORL</span>
            <span className="wordmark-spurna">Spurná</span>
          </div>
          <a className="topbar-tel" href="#navsteva">Objednat vyšetření sluchu</a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-eyebrow">Ordinace ORL a sluchová protetika · Liberec</p>
            <h1 className="hero-title">
              Slyšet <em>zase</em><br />
              každé slovo.
            </h1>
            <p className="hero-lead">
              Vyšetříme váš sluch, vybereme sluchadlo přesně pro vaše ucho
              a nastavíme ho tak, aby vám v hlučné restauraci i&nbsp;doma u&nbsp;televize
              znělo přirozeně. Bez doporučení, bez čekání na velkou kliniku.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#navsteva">Objednat se na audiometrii</a>
              <a className="btn btn-ghost" href="#sluchadla">Jak vybíráme sluchadlo</a>
            </div>
            <p className="hero-note">
              Vyšetření sluchu hradí zdravotní pojišťovna. Sluchadla s&nbsp;příspěvkem pojišťovny
              pro dospělé i&nbsp;seniory.
            </p>
          </div>

          {/* Signature: audiogram — the one artifact every patient of this trade knows */}
          <figure className="audiogram" aria-hidden="true">
            <div className="audiogram-frame">
              <span className="audiogram-label audiogram-label-x">frekvence · Hz</span>
              <span className="audiogram-label audiogram-label-y">hlasitost · dB</span>
              <svg viewBox="0 0 400 300" preserveAspectRatio="none" role="presentation">
                {/* grid */}
                <g className="ag-grid">
                  <line x1="0" y1="50" x2="400" y2="50" />
                  <line x1="0" y1="100" x2="400" y2="100" />
                  <line x1="0" y1="150" x2="400" y2="150" />
                  <line x1="0" y1="200" x2="400" y2="200" />
                  <line x1="0" y1="250" x2="400" y2="250" />
                  <line x1="66" y1="0" x2="66" y2="300" />
                  <line x1="133" y1="0" x2="133" y2="300" />
                  <line x1="200" y1="0" x2="200" y2="300" />
                  <line x1="266" y1="0" x2="266" y2="300" />
                  <line x1="333" y1="0" x2="333" y2="300" />
                </g>
                {/* speech banana — the zone of speech sounds */}
                <path
                  className="ag-banana"
                  d="M40,120 C110,70 220,60 330,110 C365,128 372,170 340,190 C240,250 120,240 60,180 C35,155 22,134 40,120 Z"
                />
                {/* hearing curve before */}
                <path className="ag-curve ag-curve-before" d="M20,90 L86,110 L153,150 L220,190 L286,225 L353,250" />
                {/* hearing curve after fitting */}
                <path className="ag-curve ag-curve-after" d="M20,60 L86,68 L153,80 L220,92 L286,100 L353,112" />
                {/* markers */}
                <g className="ag-marks-before">
                  <circle cx="20" cy="90" r="6" />
                  <circle cx="86" cy="110" r="6" />
                  <circle cx="153" cy="150" r="6" />
                  <circle cx="220" cy="190" r="6" />
                  <circle cx="286" cy="225" r="6" />
                  <circle cx="353" cy="250" r="6" />
                </g>
                <g className="ag-marks-after">
                  <path d="M14,54 L26,66 M26,54 L14,66" />
                  <path d="M80,62 L92,74 M92,62 L80,74" />
                  <path d="M147,74 L159,86 M159,74 L147,86" />
                  <path d="M214,86 L226,98 M226,86 L214,98" />
                  <path d="M280,94 L292,106 M292,94 L280,106" />
                  <path d="M347,106 L359,118 M359,106 L347,118" />
                </g>
              </svg>
              <figcaption className="audiogram-legend">
                <span className="legend-item legend-before">sluch před nastavením</span>
                <span className="legend-item legend-after">se sluchadlem</span>
                <span className="legend-item legend-banana">pásmo lidské řeči</span>
              </figcaption>
            </div>
          </figure>
        </div>
      </header>

      {/* ===== SEKCE 1: CESTA KE SLUCHADLU ===== */}
      <section className="section section-path" id="sluchadla" aria-labelledby="path-title">
        <div className="section-inner">
          <p className="section-eyebrow">Od prvního vyšetření k jistotě, že dobře slyšíte</p>
          <h2 className="section-title" id="path-title">Sluchadlo není nákup.<br />Je to nastavení na míru vašemu uchu.</h2>

          <ol className="path">
            <li className="path-step">
              <span className="path-freq">250&nbsp;Hz</span>
              <h3>Audiometrie</h3>
              <p>
                V tiché kabině změříme, které tóny a jak hlasitě slyšíte. Výsledkem je audiogram —
                mapa vašeho sluchu, podle které se řídí všechno další. Vyšetření trvá asi 30&nbsp;minut
                a hradí ho pojišťovna.
              </p>
            </li>
            <li className="path-step">
              <span className="path-freq">1&nbsp;kHz</span>
              <h3>Výběr sluchadla</h3>
              <p>
                Podle audiogramu, tvaru zvukovodu a toho, kde nejvíc potřebujete slyšet — doma,
                v práci, mezi vnoučaty — doporučíme závěsné nebo zvukovodové sluchadlo.
                Vysvětlíme, na co máte nárok od pojišťovny a co znamená doplatek.
              </p>
            </li>
            <li className="path-step">
              <span className="path-freq">4&nbsp;kHz</span>
              <h3>Zkouška a doladění</h3>
              <p>
                Sluchadlo si u nás vyzkoušíte v běžném hovoru. Doladíme hlasitost jednotlivých
                frekvencí, aby řeč byla čistá a okolní hluk nerušil. Na doladění se vracíte,
                dokud vám zvuk nesedí — to je součást péče, ne nadstandard.
              </p>
            </li>
            <li className="path-step">
              <span className="path-freq">8&nbsp;kHz</span>
              <h3>Servis a kontroly</h3>
              <p>
                Vyměníme hadičky a filtry, vyčistíme tvarovku, zkontrolujeme baterie
                i&nbsp;nabíjecí sluchadla. Jednou ročně přeměříme sluch a nastavení upravíme —
                sluch se v čase mění a sluchadlo má jít s&nbsp;ním.
              </p>
            </li>
          </ol>

          <div className="path-extra">
            <h3>Co u nás dál vyřešíte</h3>
            <ul className="extra-list">
              <li>Ušní tvarovky na míru — ke sluchadlu i&nbsp;jako ochrana sluchu pro muzikanty a&nbsp;plavce</li>
              <li>Odstranění ušní mazové zátky a běžná ORL péče o&nbsp;uši, nos a&nbsp;krk</li>
              <li>Baterie, hadičky, filtry a čisticí prostředky ke sluchadlům přímo v&nbsp;ordinaci</li>
              <li>Poradenství pro rodinu — jak mluvit s&nbsp;blízkým, který začíná hůř slyšet</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== SEKCE 2: DŮVĚRA / NÁVŠTĚVA ===== */}
      <section className="section section-trust" id="navsteva" aria-labelledby="trust-title">
        <div className="section-inner">
          <p className="section-eyebrow section-eyebrow-light">Ordinace MUDr. Spurné, Liberec</p>
          <h2 className="section-title section-title-light" id="trust-title">
            Lékařka, která sluchadlo předepíše<br />i&nbsp;nastaví. Na jednom místě.
          </h2>

          <div className="trust-grid">
            <div className="trust-main">
              <p>
                V ORL Spurná se o váš sluch stará ušní lékařka spolu se sluchovou protetikou —
                nemusíte obíhat výdejnu sluchadel na druhém konci města. Vyšetření, předpis,
                výběr, nastavení i&nbsp;servis proběhnou v&nbsp;jedné ordinaci v&nbsp;Liberci,
                u&nbsp;lidí, kteří váš audiogram znají.
              </p>
              <p>
                Většina našich pacientů jsou dospělí a senioři z Liberce a okolí — z Jablonce,
                Chrastavy i&nbsp;Frýdlantska. Víme, že první sluchadlo je velký krok, proto na nic
                nespěcháme: vysvětlíme, vyzkoušíme, doladíme.
              </p>
            </div>

            <ul className="trust-facts">
              <li>
                <strong>Na pojišťovnu</strong>
                <span>Vyšetření sluchu i&nbsp;příspěvek na sluchadlo přes zdravotní pojišťovnu. Doplatky vám spočítáme předem, bez překvapení.</span>
              </li>
              <li>
                <strong>Bez doporučení</strong>
                <span>K vyšetření sluchu nepotřebujete žádanku od praktického lékaře — stačí se objednat.</span>
              </li>
              <li>
                <strong>Doladění v ceně péče</strong>
                <span>Návraty na úpravu nastavení sluchadla jsou samozřejmá součást péče, ne zpoplatněná služba navíc.</span>
              </li>
            </ul>
          </div>

          <blockquote className="trust-quote">
            <p>
              „Manžel roky odmítal sluchadlo, protože ‚hučí‘. Paní doktorka mu ho třikrát
              doladila a dnes ho nosí od rána do večera. U&nbsp;nedělního oběda se zase směje
              s&nbsp;námi, ne vedle nás.“
            </p>
            <cite>— paní Věra, Liberec-Ruprechtice, manželka pacienta</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}

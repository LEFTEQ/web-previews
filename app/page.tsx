export default function Page() {
  return (
    <main className="gate-main">
      {/* ===== HERO ===== */}
      <section className="hero" aria-label="Ideální vrata – garážová vrata Brno">
        <header className="hero-top">
          <div className="wordmark">
            <span className="wordmark-ideal">IDEÁLNÍ</span>
            <span className="wordmark-vrata">VRATA</span>
          </div>
          <a className="hero-tel" href="tel:+420732581669">732 581 669</a>
        </header>

        <div className="hero-body">
          <p className="hero-eyebrow">Montáž a servis · Brno a okolí do 100 km</p>
          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Garážová</span>
            <span className="hero-line hero-line-2">vrata,</span>
            <span className="hero-line hero-line-3">která se otevřou</span>
            <span className="hero-line hero-line-4">na první stisk.</span>
          </h1>

          {/* Signature: lamely sekčních vrat, které se "vysouvají" nahoru */}
          <div className="gate-panels" aria-hidden="true">
            <div className="gate-panel p1"></div>
            <div className="gate-panel p2"></div>
            <div className="gate-panel p3"></div>
            <div className="gate-panel p4"></div>
          </div>

          <div className="hero-foot">
            <p className="hero-lede">
              Sekční, rolovací i průmyslová vrata, vjezdové brány a závory.
              Zaměříme, vyrobíme v Česku, namontujeme a jezdíme na servis.
              Vrata volíte z 2 500 odstínů RAL a NCS nebo v dekoru dřeva.
            </p>
            <a className="hero-cta" href="tel:+420732581669">Zavolat pro zaměření zdarma</a>
          </div>
        </div>

        <div className="hero-strip" aria-hidden="true">
          <span>SEKČNÍ</span><span>·</span>
          <span>ROLOVACÍ</span><span>·</span>
          <span>PRŮMYSLOVÁ</span><span>·</span>
          <span>BRÁNY</span><span>·</span>
          <span>ZÁVORY</span><span>·</span>
          <span>POHONY</span>
        </div>
      </section>

      {/* ===== SEKCE 1: NABÍDKA / PRŮBĚH ZAKÁZKY ===== */}
      <section className="offer" aria-labelledby="offer-heading">
        <div className="offer-inner">
          <div className="offer-head">
            <h2 id="offer-heading">Od zaměření po první otevření</h2>
            <p className="offer-sub">
              Každá zakázka jede stejnou trasou jako vrata po kolejnici — pět
              zastávek, žádné překvapení v ceně.
            </p>
          </div>

          <ol className="rail">
            <li className="rail-step">
              <span className="rail-dot" aria-hidden="true"></span>
              <h3>Zaměření u vás doma</h3>
              <p>Přijedeme do garáže, změříme otvor, nadpraží i ostění. Zdarma v Brně a okolí.</p>
            </li>
            <li className="rail-step">
              <span className="rail-dot" aria-hidden="true"></span>
              <h3>Kalkulace do 3 dnů</h3>
              <p>Dostanete konkrétní cenu za vrata, pohon i montáž. Bez skrytých položek.</p>
            </li>
            <li className="rail-step">
              <span className="rail-dot" aria-hidden="true"></span>
              <h3>Česká výroba na míru</h3>
              <p>Vrata vyrábíme na milimetr přesně, komponenty výhradně ze zemí EU.</p>
            </li>
            <li className="rail-step">
              <span className="rail-dot" aria-hidden="true"></span>
              <h3>Montáž za jeden den</h3>
              <p>Vyškolení montážníci s dlouholetou praxí. Po nás zůstane uklizená garáž.</p>
            </li>
            <li className="rail-step">
              <span className="rail-dot" aria-hidden="true"></span>
              <h3>Servis, dokud vrata jezdí</h3>
              <p>Seřízení pružin, výměna lanek, nový ovladač. Jezdíme i k cizím vratům.</p>
            </li>
          </ol>

          <div className="offer-grid">
            <figure className="offer-figure">
              <img
                src="/section-1.webp"
                alt="Sekční garážová vrata v antracitovém provedení na rodinném domě"
              />
              <figcaption>Sekční vrata v antracitu — nejžádanější volba pro rodinné domy v Brně</figcaption>
            </figure>
            <div className="offer-list">
              <h3>Co montujeme</h3>
              <ul className="product-list">
                <li><strong>Garážová vrata</strong> — sekční, rolovací i průmyslová</li>
                <li><strong>Vjezdové brány</strong> — posuvné a křídlové, s pohonem</li>
                <li><strong>Ploty a branky</strong> — v jednotném designu s bránou</li>
                <li><strong>Závory a zábrany</strong> — pro firmy, dvory a parkoviště</li>
                <li><strong>Pohony a ovladače</strong> — dodáme i k vašim stávajícím vratům</li>
              </ul>
              <p className="offer-note">
                2 500 odstínů dle vzorníku RAL a NCS, fólie v dekoru dřeva
                nebo kovu. Vrata sladíme s fasádou i vchodovými dveřmi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SEKCE 2: DŮVĚRA / O NÁS ===== */}
      <section className="trust" aria-labelledby="trust-heading">
        <div className="trust-inner">
          <div className="trust-text">
            <h2 id="trust-heading">Vrata z Moravan, servis po celé jižní Moravě</h2>
            <p>
              Sídlíme na Bohunické cestě v Moravanech u Brna. Odsud vyjíždíme
              na zaměření, montáže i servisy v okruhu zhruba 100 kilometrů —
              od Tišnova po Hodonín, od Vyškova po Znojmo.
            </p>
            <p>
              Nejsme překupníci: máme vlastní výrobu a montujeme jen produkty
              renomovaných českých a evropských výrobců. Když se něco pokazí,
              nevoláte na infolinku — voláte člověku, který vaše vrata montoval.
            </p>

            <dl className="trust-facts">
              <div className="fact">
                <dt>Dojezd na servis</dt>
                <dd>do 100 km od Brna</dd>
              </div>
              <div className="fact">
                <dt>Barevných odstínů</dt>
                <dd>2 500 dle RAL a NCS</dd>
              </div>
              <div className="fact">
                <dt>Komponenty</dt>
                <dd>výhradně ze zemí EU</dd>
              </div>
            </dl>
          </div>

          <figure className="trust-figure">
            <img
              src="/section-2.webp"
              alt="Montážník seřizuje pohon garážových vrat na kolejnici"
            />
            <figcaption>Každou montáž končíme seřízením pohonu a zkouškou koncových poloh</figcaption>
          </figure>
        </div>

        <blockquote className="trust-quote">
          <p>
            „Zaměřili v úterý, za tři týdny montovali. Vrata jezdí tiše
            a ovladač spároval technik i s autem. Doporučuji sousedům.“
          </p>
          <cite>— pan Havlíček, Brno-Líšeň, sekční vrata s pohonem</cite>
        </blockquote>
      </section>
    </main>
  );
}

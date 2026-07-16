function MiniArc() {
  return (
    <svg className="mini-arc" viewBox="0 0 44 24" aria-hidden="true">
      <path d="M2 22 C 16 21, 30 15, 42 2" pathLength={1} fill="none" />
    </svg>
  );
}

export default function Page() {
  return (
    <main className="page">
      <header className="masthead">
        <a className="wordmark" href="#top" aria-label="DSA — Dlouhodobá správa aktiv, Liberec">
          <span className="wordmark-mark">DSA</span>
          <span className="wordmark-full">Dlouhodobá správa aktiv · Liberec</span>
        </a>
        <a className="masthead-tel" href="tel:+420725416500">725 416 500</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true">
          <span /><span /><span /><span /><span /><span />
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Správa nemovitostí, investic a pojištění · od roku 2015</p>
          <h1 className="hero-title">Dlouhá hra<br />s&nbsp;vaším majetkem.</h1>
          <p className="hero-lead">
            Nemovitosti, investice i&nbsp;zajištění řešíme pod jednou střechou. Nejdřív
            navrhneme řešení — a&nbsp;pak ho roky ladíme, aby drželo krok s&nbsp;trhem
            i&nbsp;s&nbsp;vaším životem. Právě v&nbsp;tom je ta „dlouhodobá správa“.
          </p>
          <p className="hero-note">První konzultace je nezávazná a&nbsp;zdarma.</p>
        </div>

        <div className="hero-arc-wrap" aria-hidden="false">
          <svg
            className="hero-arc"
            viewBox="0 0 600 440"
            role="img"
            aria-label="Křivka dlouhodobého růstu hodnoty, odvozená ze siluety ještědské věže — hodnota se skládá rok po roce."
          >
            <line className="axis-base" x1="8" y1="418" x2="592" y2="418" />
            <path
              className="arc-path"
              d="M10 414 C 210 410, 400 366, 590 26"
              pathLength={1}
              fill="none"
            />
            <circle className="arc-dot" cx="590" cy="26" r="5" />
            <text className="arc-label arc-label-start" x="12" y="436">2015</text>
            <text className="arc-label arc-label-end" x="588" y="18">dnes</text>
            <text className="arc-label arc-label-axis" x="300" y="436">čas · hodnota &#8594;</text>
          </svg>
        </div>
      </section>

      <section className="section section-services" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="container">
          <div className="sec-head">
            <span className="sec-num">01<MiniArc /></span>
            <h2 className="sec-title" id="sluzby-nadpis">Naše služby</h2>
            <p className="sec-intro">
              Návrh řešení je jen začátek. Když si to přejete, výsledek pak průběžně
              hlídáme a&nbsp;upravujeme až do konce jeho platnosti — abyste necítili
              každý pohyb úrokových sazeb ani kapitálových trhů.
            </p>
          </div>

          <ol className="services">
            <li className="service">
              <span className="service-tag">Nemovitosti</span>
              <h3 className="service-title">Nákup a&nbsp;prodej nemovitosti</h3>
              <p className="service-desc">
                Kompletní servis koupě, financování i&nbsp;prodeje — od výběru bytu po
                předání klíčů.
              </p>
              <ul className="service-list">
                <li>Výběr nemovitosti a&nbsp;jednání s&nbsp;realitním agentem</li>
                <li>Hypotéka a&nbsp;výběr vhodného financování</li>
                <li>Veškerá administrativa koupě a&nbsp;převodu</li>
              </ul>
            </li>

            <li className="service">
              <span className="service-tag">Investice</span>
              <h3 className="service-title">Spoření a&nbsp;investice</h3>
              <p className="service-desc">
                Sestavíme portfolio podle vašich cílů a&nbsp;pravidelně ho vyhodnocujeme
                podle toho, kam se pohnul trh.
              </p>
              <ul className="service-list">
                <li>Portfolio podle vašich cílů a&nbsp;horizontu</li>
                <li>Pravidelná kontrola a&nbsp;úpravy podle trhu</li>
                <li>Renta a&nbsp;zajištění na stáří</li>
              </ul>
            </li>

            <li className="service">
              <span className="service-tag">Pojištění</span>
              <h3 className="service-title">Zabezpečení majetku a&nbsp;příjmu</h3>
              <p className="service-desc">
                Ochrana stojí a&nbsp;padá se správnými částkami. Vycházíme z&nbsp;důkladné
                analýzy a&nbsp;vlastního srovnávače produktů.
              </p>
              <ul className="service-list">
                <li>Analýza rizik osob, nemovitosti i&nbsp;firmy</li>
                <li>Výběr pojištění vlastním srovnávačem</li>
                <li>Podpora při vyřízení pojistné události</li>
              </ul>
            </li>

            <li className="service">
              <span className="service-tag">Klientský portál</span>
              <h3 className="service-title">Online šanon myPLANN</h3>
              <p className="service-desc">
                Všechny smlouvy a&nbsp;aktuální hodnotu majetku máte kdykoli po ruce na
                jednom místě.
              </p>
              <ul className="service-list">
                <li>Všechny smlouvy pohromadě a&nbsp;dostupné</li>
                <li>Hlídání výročí, fixací a&nbsp;termínů</li>
                <li>Aktuální hodnota portfolia i&nbsp;majetku</li>
              </ul>
            </li>
          </ol>
        </div>
      </section>

      <section className="section section-about" id="kdo-jsme" aria-labelledby="about-nadpis">
        <div className="container">
          <div className="sec-head">
            <span className="sec-num sec-num-dark">02<MiniArc /></span>
            <h2 className="sec-title" id="about-nadpis">Kdo jsme</h2>
            <p className="sec-intro">
              Dlouhodobá správa aktiv&nbsp;s.r.o. vznikla v&nbsp;roce 2015 po předchozí
              spolupráci Jakuba Vencovského a&nbsp;Martina Chalupy. Od začátku se díváme
              na finance jako na celek — nenabízíme produkty, ale řešení celé vaší
              situace.
            </p>
          </div>

          <ul className="figures">
            <li className="figure">
              <span className="figure-num">2015</span>
              <span className="figure-label">rok vzniku firmy v&nbsp;Liberci</span>
            </li>
            <li className="figure">
              <span className="figure-num">4</span>
              <span className="figure-label">oblasti pod jednou střechou</span>
            </li>
            <li className="figure">
              <span className="figure-num">100&nbsp;%</span>
              <span className="figure-label">administrativy vyřídíme za vás</span>
            </li>
            <li className="figure">
              <span className="figure-num">0&nbsp;Kč</span>
              <span className="figure-label">první nezávazná konzultace</span>
            </li>
          </ul>

          <div className="about-grid">
            <div className="reasons">
              <h3 className="about-subtitle">Proč právě my</h3>
              <dl className="reason-list">
                <div className="reason">
                  <dt>Odbornost</dt>
                  <dd>Spolupracujeme se specialisty pro každou oblast financí.</dd>
                </div>
                <div className="reason">
                  <dt>Komplexnost</dt>
                  <dd>Nemovitosti, investice i&nbsp;pojištění řešíme jako jeden celek.</dd>
                </div>
                <div className="reason">
                  <dt>Šetříme čas</dt>
                  <dd>Komunikaci s&nbsp;bankami, pojišťovnami i&nbsp;úřady vezmeme za vás.</dd>
                </div>
                <div className="reason">
                  <dt>Bez papírování</dt>
                  <dd>Kompletní administrativní podpora včetně pojistných událostí.</dd>
                </div>
              </dl>
            </div>

            <div className="people">
              <h3 className="about-subtitle">Lidé, se kterými jednáte</h3>
              <ul className="people-list">
                <li>
                  <span className="person-name">Jakub Vencovský</span>
                  <span className="person-role">jednatel</span>
                </li>
                <li>
                  <span className="person-name">Martin Chalupa</span>
                  <span className="person-role">jednatel</span>
                </li>
                <li>
                  <span className="person-name">Ing. Petr Beneš, MBA</span>
                  <span className="person-role">konzultace v&nbsp;oblasti investic</span>
                </li>
                <li>
                  <span className="person-name">Ing. Jana Šírová</span>
                  <span className="person-role">daňové poradenství</span>
                </li>
              </ul>

              <p className="about-where">
                <span className="about-where-label">Kde nás najdete</span>
                Rumjancevova 696/3, Liberec ·{" "}
                <a href="tel:+420725416500">725 416 500</a> ·{" "}
                <a href="mailto:info@dsaktiv.cz">info@dsaktiv.cz</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

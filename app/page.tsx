export default function Page() {
  return (
    <main className="er-page">
      {/* HERO */}
      <section className="er-hero" aria-label="Úvod">
        <div className="er-hero-media">
          <img
            src="/hero.webp"
            alt="Novostavba bytového domu Elite Real v Olomouci, pohled na fasádu s balkony"
            className="er-hero-img"
          />
          <div className="er-hero-shade" aria-hidden="true" />
        </div>

        <div className="er-hero-content">
          <div className="er-wordmark">
            <span className="er-wordmark-elite">ELITE</span>
            <span className="er-wordmark-real">REAL</span>
            <span className="er-wordmark-line" aria-hidden="true" />
            <span className="er-wordmark-city">OLOMOUC</span>
          </div>

          <p className="er-eyebrow">Realitní kancelář · Horní Lán 1327/6a, Olomouc</p>

          <h1 className="er-h1">
            Byt v&nbsp;Olomouci<br />
            se hledá <span className="er-h1-accent">na klíč</span>,<br />
            ne na náhodu.
          </h1>

          <p className="er-hero-lead">
            Prodáváme a pronajímáme byty, domy a pozemky v&nbsp;Olomouci a okolí.
            Vlastní developerské projekty, reálná dostupnost skladem a jedna
            schůzka místo deseti telefonátů.
          </p>

          <div className="er-hero-actions">
            <a className="er-btn er-btn-primary" href="tel:+420774922929">
              Zavolat 774 92 29 29
            </a>
            <a className="er-btn er-btn-ghost" href="#projekty">
              Zobrazit volné byty
            </a>
          </div>

          <dl className="er-hero-stats">
            <div className="er-stat">
              <dt>Aktivních projektů</dt>
              <dd>6</dd>
            </div>
            <div className="er-stat">
              <dt>Prodáno bytů Varšavská</dt>
              <dd>90 %</dd>
            </div>
            <div className="er-stat">
              <dt>Na trhu od</dt>
              <dd>2014</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* SEKCE 1 — DEVELOPERSKÉ PROJEKTY */}
      <section className="er-section er-projects" id="projekty" aria-labelledby="projekty-h2">
        <div className="er-section-head">
          <span className="er-kicker">Katastr 01 / 02 — Nabídka</span>
          <h2 id="projekty-h2" className="er-h2">Developerské projekty v&nbsp;Olomouci</h2>
          <p className="er-section-lead">
            Od základové desky po předání klíčů. Tady je aktuální stav bytů,
            domů a pozemků, které máme v&nbsp;prodeji a přípravě.
          </p>
        </div>

        <div className="er-project-media">
          <img
            src="/section-1.webp"
            alt="Vizualizace rozestavěné rezidence Elite Real s okolní zelení v Olomouci"
            className="er-project-img"
          />
        </div>

        <ul className="er-project-list" role="list">
          <li className="er-project-row">
            <span className="er-project-status er-status-live">Poslední volné byty</span>
            <h3 className="er-project-name">Rezidence Varšavská</h3>
            <p className="er-project-loc">Olomouc, centrum · byty 2+kk až 4+kk</p>
            <a className="er-project-link" href="#">Zjistit dostupnost <span aria-hidden="true">→</span></a>
          </li>
          <li className="er-project-row">
            <span className="er-project-status er-status-prep">Připravujeme nové dispozice</span>
            <h3 className="er-project-name">Šibeník 2.&nbsp;etapa</h3>
            <p className="er-project-loc">Olomouc · byty 1+kk až 3+kk</p>
            <a className="er-project-link" href="#">Nechat si hlídat <span aria-hidden="true">→</span></a>
          </li>
          <li className="er-project-row">
            <span className="er-project-status er-status-live">V přípravě</span>
            <h3 className="er-project-name">Rezidence Podkova</h3>
            <p className="er-project-loc">Olomouc · byty a garážová stání</p>
            <a className="er-project-link" href="#">Zjistit dostupnost <span aria-hidden="true">→</span></a>
          </li>
          <li className="er-project-row">
            <span className="er-project-status er-status-live">V nabídce</span>
            <h3 className="er-project-name">Nízkoenergetické domy Těrlicko</h3>
            <p className="er-project-loc">Těrlicko · rodinné domy</p>
            <a className="er-project-link" href="#">Zjistit dostupnost <span aria-hidden="true">→</span></a>
          </li>
          <li className="er-project-row er-project-sold">
            <span className="er-project-status er-status-sold">Vyprodáno</span>
            <h3 className="er-project-name">Nová Okružní</h3>
            <p className="er-project-loc">Olomouc · byty 1+kk až 3+1</p>
            <span className="er-project-link er-link-disabled">Projekt dokončen</span>
          </li>
          <li className="er-project-row er-project-sold">
            <span className="er-project-status er-status-sold">Vyprodáno</span>
            <h3 className="er-project-name">Nová Lazecká</h3>
            <p className="er-project-loc">Olomouc · byty a řadové domy</p>
            <span className="er-project-link er-link-disabled">Projekt dokončen</span>
          </li>
        </ul>
      </section>

      {/* SEKCE 2 — SLUŽBY + DŮVĚRA */}
      <section className="er-section er-trust" aria-labelledby="sluzby-h2">
        <div className="er-trust-grid">
          <div className="er-trust-media">
            <img
              src="/section-2.webp"
              alt="Interiér nově zrekonstruovaného bytu Elite Real, kuchyňská linka a obývací prostor"
              className="er-trust-img"
            />
            <p className="er-trust-caption">Horní Lán 1327/6a — naše kancelář v Olomouci</p>
          </div>

          <div className="er-trust-content">
            <span className="er-kicker">Katastr 02 / 02 — Jak pracujeme</span>
            <h2 id="sluzby-h2" className="er-h2">Realitní servis od výpisu z katastru po klíče</h2>

            <div className="er-service-list">
              <div className="er-service">
                <span className="er-service-num">01</span>
                <div>
                  <h3 className="er-service-title">Prodej bytů, domů a pozemků</h3>
                  <p className="er-service-desc">
                    Nastavíme reálnou tržní cenu podle konkrétní olomoucké lokality,
                    zajistíme prohlídky i právní servis včetně smlouvy.
                  </p>
                </div>
              </div>
              <div className="er-service">
                <span className="er-service-num">02</span>
                <div>
                  <h3 className="er-service-title">Pronájem bytů a komerčních prostor</h3>
                  <p className="er-service-desc">
                    Kanceláře, obchodní prostory i sklady — prověříme nájemce
                    a připravíme nájemní smlouvu, která vás ochrání.
                  </p>
                </div>
              </div>
              <div className="er-service">
                <span className="er-service-num">03</span>
                <div>
                  <h3 className="er-service-title">Vlastní developerské projekty</h3>
                  <p className="er-service-desc">
                    Stavíme přímo v Olomouci a okolí — od projektu po předání klíčů,
                    bez zprostředkovatele mezi vámi a stavbou.
                  </p>
                </div>
              </div>
              <div className="er-service">
                <span className="er-service-num">04</span>
                <div>
                  <h3 className="er-service-title">Vložit nabídku i poptávku</h3>
                  <p className="er-service-desc">
                    Prodáváte nemovitost, nebo naopak hledáte? Vložíte inzerát,
                    nebo nám napíšete přesně, co potřebujete.
                  </p>
                </div>
              </div>
            </div>

            <div className="er-trust-facts">
              <p className="er-trust-fact">
                <strong>Na trhu v Olomouci od roku 2014</strong> — realitní kancelář
                i developer v jednom, sídlo Horní Lán 1327/6a.
              </p>
              <p className="er-trust-fact">
                Zavoláte, domluvíme prohlídku, řekneme vám na rovinu, jestli se
                koupě nebo prodej vyplatí.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

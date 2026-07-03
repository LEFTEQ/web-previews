export default function Page() {
  return (
    <main className="ns-page">
      {/* ===== HERO ===== */}
      <header className="ns-hero">
        <div className="ns-hero-top">
          <div className="ns-wordmark" aria-label="Střechy Nosvo">
            <span className="ns-wordmark-gable" aria-hidden="true">
              <svg viewBox="0 0 48 28" width="48" height="28" role="img" aria-hidden="true">
                <path d="M2 26 L24 4 L46 26" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="square" />
                <path d="M14 26 L24 16 L34 26" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
              </svg>
            </span>
            <span className="ns-wordmark-text">
              STŘECHY<b>NOSVO</b>
            </span>
          </div>
          <a className="ns-hero-phone" href="tel:+420607887609">
            +420 607 887 609
          </a>
        </div>

        <div className="ns-hero-body">
          <p className="ns-hero-eyebrow">
            Pokrývači, tesaři a klempíři · Olomouc · od roku 2006
          </p>
          <h1 className="ns-hero-title">
            <span className="ns-line ns-line-1">Střecha,</span>
            <span className="ns-line ns-line-2">která vydrží</span>
            <span className="ns-line ns-line-3">
              déle než <em>hypotéka.</em>
            </span>
          </h1>
          <p className="ns-hero-lead">
            Krovy, krytiny a klempířina od jedné party řemeslníků. Na rodinný
            dům v Olomouci i na halu pro generálního dodavatele — se stejnou
            pečlivostí u každé lati.
          </p>
          <div className="ns-hero-actions">
            <a className="ns-btn ns-btn-solid" href="tel:+420607887609">
              Zavolat pokrývači
            </a>
            <a className="ns-btn ns-btn-ghost" href="mailto:novotny@nosvo.cz">
              Napsat poptávku
            </a>
          </div>
        </div>

        {/* Signature: velkoformátová „bobrovka" skládaná krytina */}
        <div className="ns-tiles" aria-hidden="true">
          <div className="ns-tile-row ns-tile-row-a">
            {Array.from({ length: 12 }).map((_, i) => (
              <span className="ns-tile" key={`a${i}`} />
            ))}
          </div>
          <div className="ns-tile-row ns-tile-row-b">
            {Array.from({ length: 12 }).map((_, i) => (
              <span className="ns-tile" key={`b${i}`} />
            ))}
          </div>
          <div className="ns-tile-row ns-tile-row-c">
            {Array.from({ length: 12 }).map((_, i) => (
              <span className="ns-tile" key={`c${i}`} />
            ))}
          </div>
        </div>
      </header>

      {/* ===== ŘEMESLA / SLUŽBY ===== */}
      <section className="ns-section ns-crafts" aria-labelledby="crafts-h">
        <div className="ns-section-head">
          <h2 id="crafts-h">Čtyři řemesla pod jednou střechou</h2>
          <p>
            Nemusíte shánět a koordinovat čtyři party. Krov, krytinu, plechy i
            podkroví uděláme sami — a za výsledek ručí jedna firma.
          </p>
        </div>

        <div className="ns-craft-grid">
          <article className="ns-craft">
            <span className="ns-craft-mark" aria-hidden="true">
              <svg viewBox="0 0 40 40" width="36" height="36">
                <path d="M4 34 L20 10 L36 34" fill="none" stroke="currentColor" strokeWidth="3" />
                <path d="M12 34 L12 22 M28 34 L28 22 M20 10 L20 34" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </span>
            <h3>Tesařské práce</h3>
            <p>
              Krovy na míru — od zahradního altánu po střešní konstrukci
              výrobní haly. Zdravé dřevo, přesné spoje, žádné kompromisy
              v řezivu.
            </p>
          </article>

          <article className="ns-craft">
            <span className="ns-craft-mark" aria-hidden="true">
              <svg viewBox="0 0 40 40" width="36" height="36">
                <path d="M6 14 a8 8 0 0 1 14 0 v18 h-14 z" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <path d="M20 14 a8 8 0 0 1 14 0 v18 h-14 z" fill="none" stroke="currentColor" strokeWidth="2.5" />
              </svg>
            </span>
            <h3>Pokrývačské práce</h3>
            <p>
              Pálená taška, beton i plech. Poradíme krytinu, která sedí vaší
              střeše sklonem, vzhledem i rozpočtem — a položíme ji tak, aby
              držela desítky let.
            </p>
          </article>

          <article className="ns-craft">
            <span className="ns-craft-mark" aria-hidden="true">
              <svg viewBox="0 0 40 40" width="36" height="36">
                <path d="M6 8 h20 v10 a8 8 0 0 1 -8 8 h-4 v8" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <path d="M10 34 h8" stroke="currentColor" strokeWidth="2.5" />
              </svg>
            </span>
            <h3>Klempířské práce</h3>
            <p>
              Žlaby, svody, oplechování komínů a úžlabí. Detaily, na kterých
              stojí suchá fasáda — ohýbáme a pájíme sami, nic nekupujeme
              „skoro na míru“.
            </p>
          </article>

          <article className="ns-craft">
            <span className="ns-craft-mark" aria-hidden="true">
              <svg viewBox="0 0 40 40" width="36" height="36">
                <path d="M4 22 L20 6 L36 22" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <rect x="14" y="14" width="12" height="9" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M20 14 v9 M14 18.5 h12" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </span>
            <h3>Podkroví a stolařina</h3>
            <p>
              Z půdy plné pavučin uděláme ložnici nebo pracovnu. Zateplení,
              střešní okna, sádrokarton i truhlářské detaily — vše na jednu
              objednávku.
            </p>
          </article>
        </div>

        <aside className="ns-material">
          <div className="ns-material-text">
            <h3>Ušetříme vám na materiálu, ne na kvalitě</h3>
            <p>
              Materiál sami prodáváme, takže víme, co která taška, fólie nebo
              lať skutečně umí. Vybereme to, co odpovídá vaší stavbě technicky
              i cenově — správná volba srazí vstupní náklady a hlavně budoucí
              účty za energie a údržbu.
            </p>
          </div>
          <a className="ns-btn ns-btn-solid" href="mailto:novotny@nosvo.cz">
            Poslat střechu k nacenění
          </a>
        </aside>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="ns-section ns-trust" aria-labelledby="trust-h">
        <div className="ns-trust-grid">
          <div className="ns-trust-copy">
            <h2 id="trust-h">
              Střechy stavíme v Olomouci a okolí už přes 18 let
            </h2>
            <p>
              Firmu vedeme od roku 2006 pod vlastními jmény — Novotný, Svozil,
              Masopust. Na naše střechy se spoléhají rodiny, soukromé firmy,
              generální dodavatelé velkých staveb i státní instituce a obce.
            </p>
            <p>
              Zakládáme si na spojení poctivého řemesla a moderních
              technologií. Znamená to jediné: přijedeme, kdy slíbíme, řekneme
              cenu předem a odvedeme práci, ke které se za deset let bez
              ostychu vrátíme.
            </p>
          </div>

          <dl className="ns-facts">
            <div className="ns-fact">
              <dt>Na trhu</dt>
              <dd>od r. 2006</dd>
            </div>
            <div className="ns-fact">
              <dt>Sídlo firmy</dt>
              <dd>Sokolská 44, Olomouc</dd>
            </div>
            <div className="ns-fact">
              <dt>Řemesla v jedné partě</dt>
              <dd>tesaři · pokrývači · klempíři · stolaři</dd>
            </div>
            <div className="ns-fact">
              <dt>Stavíme pro</dt>
              <dd>rodiny, firmy i veřejnou správu</dd>
            </div>
          </dl>
        </div>

        <div className="ns-quotes">
          <figure className="ns-quote">
            <blockquote>
              „Krov i krytinu zvládli za tři týdny včetně klempířiny. Když
              přišla první průtrž, střecha ani nehlesla.“
            </blockquote>
            <figcaption>Rodinný dům, Olomouc-Chválkovice</figcaption>
          </figure>
          <figure className="ns-quote">
            <blockquote>
              „Ocenili jsme, že koordinovali práci s ostatními profesemi na
              stavbě sami. Termín haly jsme drželi bez skluzu.“
            </blockquote>
            <figcaption>Střešní konstrukce výrobní haly, Olomoucko</figcaption>
          </figure>
          <figure className="ns-quote">
            <blockquote>
              „Z půdy máme dva dětské pokoje. Poradili levnější skladbu
              zateplení, než jsme měli v projektu — a funguje skvěle.“
            </blockquote>
            <figcaption>Adaptace podkroví, Šternberk</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}

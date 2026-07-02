export default function Page() {
  return (
    <main className="vt">
      {/* ========== HERO ========== */}
      <header className="vt-hero">
        <div className="vt-hero-top">
          <div className="vt-wordmark" aria-label="Miroslav Vytásek — zemní práce a doprava, Olomouc">
            <span className="vt-wordmark-name">VYTÁSEK</span>
            <span className="vt-wordmark-sub">zemní práce · doprava · beton — Olomouc</span>
          </div>
          <a className="vt-hero-phone" href="tel:+420608819263">
            <span className="vt-hero-phone-label">Volejte přímo majiteli</span>
            <span className="vt-hero-phone-num">608 819 263</span>
          </a>
        </div>

        <div className="vt-hero-main">
          <p className="vt-hero-eyebrow">Přípravné práce pro stavby · Olomouc a okolí</p>
          <h1 className="vt-hero-title">
            <span className="vt-line vt-line-1">Než se začne stavět,</span>
            <span className="vt-line vt-line-2">musí se <em>kopat</em>,</span>
            <span className="vt-line vt-line-3">vozit a <em>betonovat</em>.</span>
          </h1>
          <p className="vt-hero-lead">
            Skrývka, výkop, odvoz zeminy, základová deska. Vlastní stroje, vlastní
            lidi, jedno telefonní číslo. Pracujeme pro rodinné stavby i pro Skansku.
          </p>
          <div className="vt-hero-cta">
            <a className="vt-btn" href="tel:+420608819263">Zavolat: 608 819 263</a>
            <a className="vt-btn vt-btn-ghost" href="mailto:info@vytasek.cz">Napsat poptávku</a>
          </div>
        </div>

        {/* Signature: vrstvy zeminy / řez terénem */}
        <div className="vt-strata" aria-hidden="true">
          <div className="vt-stratum vt-stratum-1"><span>ORNICE — skrývka a uložení</span></div>
          <div className="vt-stratum vt-stratum-2"><span>ZEMINA — výkop a odvoz</span></div>
          <div className="vt-stratum vt-stratum-3"><span>ŠTĚRK — podsyp a hutnění</span></div>
          <div className="vt-stratum vt-stratum-4"><span>BETON — základová deska</span></div>
        </div>
      </header>

      {/* ========== SLUŽBY ========== */}
      <section className="vt-section vt-services" aria-labelledby="sluzby-h">
        <div className="vt-section-head">
          <h2 id="sluzby-h">Co pro vás uděláme</h2>
          <p>
            Od prvního kopnutí po hotovou desku. Zvládáme i stísněné dvory,
            svahy a přístupy, kam se velká firma nevejde.
          </p>
        </div>

        <div className="vt-services-grid">
          <article className="vt-card">
            <div className="vt-card-mark vt-mark-dig" aria-hidden="true"></div>
            <h3>Zemní a výkopové práce</h3>
            <p>
              Hrubé terénní úpravy, skrývky ornice, výkopy základů a přípojek,
              velkoobjemové přesuny zeminy. Jakýkoliv rozsah — od zahrady po staveniště.
            </p>
            <ul>
              <li>skrývka a modelace terénu</li>
              <li>výkopy základů, jímek, bazénů</li>
              <li>práce ve stísněném prostředí</li>
            </ul>
          </article>

          <article className="vt-card">
            <div className="vt-card-mark vt-mark-truck" aria-hidden="true"></div>
            <h3>Doprava a odvoz</h3>
            <p>
              Těžká a nadměrná přeprava, dovoz sypkých materiálů. Odvezeme suť,
              zeminu, živici i železobeton — včetně uložení a dokladů.
            </p>
            <ul>
              <li>dovoz kameniva, písku, štěrku</li>
              <li>odvoz a legální uložení sutě</li>
              <li>nadměrné náklady po celé Moravě</li>
            </ul>
          </article>

          <article className="vt-card">
            <div className="vt-card-mark vt-mark-concrete" aria-hidden="true"></div>
            <h3>Betonování a základy</h3>
            <p>
              Podsyp, hutnění, bednění, armování, lití. Základové pásy a desky
              připravené tak, aby na nich stavba stála desítky let.
            </p>
            <ul>
              <li>základové desky a pásy</li>
              <li>zpevněné plochy a nájezdy</li>
              <li>recyklace betonu a třídění zeminy</li>
            </ul>
          </article>
        </div>

        <p className="vt-services-note">
          Ceny říkáme předem a na rovinu. Zavolejte, přijedeme se podívat na místo — v Olomouci
          a okolí obvykle do dvou dnů.
        </p>
      </section>

      {/* ========== DŮVĚRA / REFERENCE ========== */}
      <section className="vt-section vt-trust" aria-labelledby="duvera-h">
        <div className="vt-trust-inner">
          <div className="vt-trust-copy">
            <h2 id="duvera-h">Kvalita, rychlost, spolehlivost</h2>
            <p>
              Tři slova, kterými se řídíme na každé zakázce — proto s námi
              stavební firmy spolupracují opakovaně a roky. Firma Miroslav Vytásek
              sídlí v Grygově u Olomouce a stroje máme vždy po ruce, ne na druhém
              konci republiky.
            </p>
            <dl className="vt-facts">
              <div className="vt-fact">
                <dt>Zázemí</dt>
                <dd>Vlastní vozový park — bagry, nákladní vozy, technika na nadměrnou přepravu</dd>
              </div>
              <div className="vt-fact">
                <dt>Působnost</dt>
                <dd>Olomouc, Grygov a celá střední Morava; větší zakázky po domluvě kdekoliv</dd>
              </div>
              <div className="vt-fact">
                <dt>Jednání</dt>
                <dd>Domlouváte se přímo s majitelem — žádný dispečink, žádné čekání na schválení</dd>
              </div>
            </dl>
          </div>

          <div className="vt-trust-refs">
            <p className="vt-refs-label">Dlouhodobě pro nás pracujeme mimo jiné pro:</p>
            <ul className="vt-refs-list">
              <li>
                <strong>Skanska</strong>
                <span>zemní práce a přesuny zeminy na velkých stavbách</span>
              </li>
              <li>
                <strong>ŽSD</strong>
                <span>přípravné práce u železničních staveb</span>
              </li>
              <li>
                <strong>Mafra</strong>
                <span>doprava a terénní úpravy areálů mediální skupiny</span>
              </li>
            </ul>
            <blockquote className="vt-quote">
              <p>
                „Realizujeme i náročné zakázky ve stísněném nebo jinak
                problematickém prostředí — tam, kde jiní couvnou.“
              </p>
              <cite>Miroslav Vytásek, majitel</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}

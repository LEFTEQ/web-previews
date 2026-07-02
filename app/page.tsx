export default function Page() {
  return (
    <main className="zs">
      {/* ===== HERO ===== */}
      <header className="zs-hero">
        <div className="zs-hero-inner">
          <div className="zs-brand">
            <span className="zs-brand-mark" aria-hidden="true">
              <svg viewBox="0 0 40 40" width="40" height="40" role="img" aria-hidden="true">
                <path d="M4 22 L20 8 L36 22" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="square" />
                <rect x="9" y="24" width="22" height="10" fill="currentColor" />
              </svg>
            </span>
            <span className="zs-brand-word">
              ZEMĚDĚLSKÉ<br />STAVBY <em>a.s.</em>
            </span>
          </div>

          <p className="zs-hero-eyebrow">Stavební firma · Ústí nad Labem</p>

          <h1 className="zs-hero-title">
            <span className="zs-line zs-line-1">Haly, stáje</span>
            <span className="zs-line zs-line-2">a&nbsp;stavby, které</span>
            <span className="zs-line zs-line-3">vydrží <span className="zs-accent">desítky let</span>.</span>
          </h1>

          <p className="zs-hero-lead">
            Stavíme a&nbsp;rekonstruujeme zemědělské objekty, průmyslové haly
            a&nbsp;hospodářské budovy na&nbsp;Ústecku. Od&nbsp;projektu přes základy
            po&nbsp;střechu — vlastní lidé, vlastní technika.
          </p>

          <div className="zs-hero-cta">
            <a className="zs-btn zs-btn-solid" href="tel:+420475000000">Zavolat: 475 000 000</a>
            <a className="zs-btn zs-btn-ghost" href="#sluzby">Co stavíme</a>
          </div>
        </div>

        {/* Signature: silueta hospodářské haly z profilů — vazníky a trapézový plech */}
        <div className="zs-hero-hall" aria-hidden="true">
          <svg viewBox="0 0 1200 340" preserveAspectRatio="xMidYMax meet" className="zs-hall-svg">
            {/* sedlová střecha haly */}
            <polygon points="0,340 0,180 300,60 600,180 600,340" className="zs-hall-a" />
            <polygon points="600,340 600,180 900,60 1200,180 1200,340" className="zs-hall-b" />
            {/* vazníky */}
            <g className="zs-hall-truss">
              <path d="M0,180 L300,60 L600,180 M600,180 L900,60 L1200,180" fill="none" />
              <path d="M150,120 L150,340 M300,60 L300,340 M450,120 L450,340 M750,120 L750,340 M900,60 L900,340 M1050,120 L1050,340" fill="none" />
              <path d="M0,260 L1200,260" fill="none" />
            </g>
            {/* trapézový plech — rytmus svislých pruhů */}
            <g className="zs-hall-trapez">
              {Array.from({ length: 30 }).map((_, i) => (
                <rect key={i} x={i * 40 + 12} y={272} width={12} height={68} />
              ))}
            </g>
          </svg>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="zs-section zs-services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="zs-section-head">
          <h2 id="sluzby-h">Co pro vás postavíme</h2>
          <p>
            Specializujeme se na&nbsp;stavby pro zemědělství a&nbsp;lehký průmysl.
            Každou zakázku vedeme od&nbsp;první schůzky na&nbsp;pozemku až po&nbsp;kolaudaci.
          </p>
        </div>

        <div className="zs-grid">
          <article className="zs-card">
            <div className="zs-card-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48" width="44" height="44">
                <path d="M4 26 L24 10 L44 26" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
                <rect x="9" y="28" width="30" height="14" fill="none" stroke="currentColor" strokeWidth="3" />
                <path d="M15 28 v14 M24 28 v14 M33 28 v14" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <h3>Zemědělské haly a&nbsp;stáje</h3>
            <p>
              Kravíny, ovčíny, seníky a&nbsp;sklady krmiv. Ocelové i&nbsp;železobetonové
              konstrukce, odvětrání a&nbsp;podlahy stavěné pro provoz se&nbsp;zvířaty.
            </p>
            <p className="zs-card-tag">Novostavby i&nbsp;rekonstrukce</p>
          </article>

          <article className="zs-card">
            <div className="zs-card-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48" width="44" height="44">
                <rect x="6" y="18" width="36" height="24" fill="none" stroke="currentColor" strokeWidth="3" />
                <path d="M6 18 L14 8 h20 l8 10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
                <path d="M12 24 h24 M12 30 h24 M12 36 h24" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <h3>Průmyslové a&nbsp;skladové objekty</h3>
            <p>
              Skladové haly, dílny a&nbsp;garáže pro techniku. Opláštění trapézovým
              plechem nebo sendvičovými panely, vrata a&nbsp;zpevněné plochy.
            </p>
            <p className="zs-card-tag">Včetně přípojek a&nbsp;komunikací</p>
          </article>

          <article className="zs-card">
            <div className="zs-card-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48" width="44" height="44">
                <path d="M8 42 V20 l16-12 16 12 v22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
                <path d="M18 42 V30 h12 v12" fill="none" stroke="currentColor" strokeWidth="3" />
                <path d="M4 42 h40" stroke="currentColor" strokeWidth="3" />
              </svg>
            </div>
            <h3>Rekonstrukce a&nbsp;opravy</h3>
            <p>
              Nové střechy, statické zajištění, sanace vlhkého zdiva a&nbsp;výměna
              opláštění starších hospodářských budov. Přijedeme, posoudíme, naceníme.
            </p>
            <p className="zs-card-tag">Posouzení stavu zdarma</p>
          </article>
        </div>

        <ul className="zs-facts" aria-label="Jak pracujeme">
          <li><strong>Pevný termín i&nbsp;cena</strong> ve&nbsp;smlouvě — bez dodatečných položek.</li>
          <li><strong>Vlastní parta a&nbsp;technika</strong> — neskládáme stavbu ze&nbsp;subdodávek.</li>
          <li><strong>Stavíme za&nbsp;provozu</strong> — chod farmy či skladu nezastavíme.</li>
        </ul>
      </section>

      {/* ===== DŮVĚRA / O NÁS ===== */}
      <section className="zs-section zs-trust" aria-labelledby="duvera-h">
        <div className="zs-trust-grid">
          <div className="zs-trust-text">
            <h2 id="duvera-h">Firma z&nbsp;Ústí, kterou znají farmáři v&nbsp;celém kraji</h2>
            <p>
              Zemědělské stavby a.s. staví na&nbsp;Ústecku hospodářské a&nbsp;průmyslové
              objekty už&nbsp;desítky let. Známe zdejší terén, počasí i&nbsp;úřady —
              a&nbsp;víme, co&nbsp;stavba v&nbsp;kopcích Českého středohoří musí vydržet.
            </p>
            <p>
              Většina zakázek k&nbsp;nám přichází na&nbsp;doporučení. Na&nbsp;každou
              hotovou stavbu se&nbsp;můžete přijet podívat — rádi vás na&nbsp;ni vezmeme.
            </p>
          </div>

          <dl className="zs-stats">
            <div className="zs-stat">
              <dt>Postavených hal a&nbsp;stájí</dt>
              <dd>120+</dd>
            </div>
            <div className="zs-stat">
              <dt>Let stavíme v&nbsp;Ústeckém kraji</dt>
              <dd>30</dd>
            </div>
            <div className="zs-stat">
              <dt>Záruka na&nbsp;konstrukce</dt>
              <dd>5&nbsp;let</dd>
            </div>
          </dl>
        </div>

        <div className="zs-quotes">
          <figure className="zs-quote">
            <blockquote>
              „Novou halu pro dojnice postavili za&nbsp;pět měsíců, přesně podle
              smlouvy. Provoz jsme nemuseli zastavit ani na&nbsp;den.“
            </blockquote>
            <figcaption>Farma Libouchec — hala pro 180&nbsp;dojnic, 2023</figcaption>
          </figure>
          <figure className="zs-quote">
            <blockquote>
              „Opravili nám střechu seníku po&nbsp;vichřici do&nbsp;tří týdnů.
              Přijeli hned druhý den a&nbsp;drželi slovo.“
            </blockquote>
            <figcaption>ZD Chabařovice — rekonstrukce střechy, 2024</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}

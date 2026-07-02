export default function Page() {
  return (
    <main className="gk">
      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="hero-top">
          <div className="wordmark" aria-label="Bedřich Krčka — plynařství">
            <span className="wm-flame" aria-hidden="true">
              <svg viewBox="0 0 24 32" width="22" height="30" role="img" aria-hidden="true">
                <path
                  d="M12 1c1 6-7 9-7 17a7 7 0 0 0 14 0c0-4-2.5-6-3.5-9-2 2-1.5 4-1.5 5.5C13 11 11 6 12 1z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span className="wm-text">
              KRČKA<span className="wm-sub">plynařství · České Budějovice</span>
            </span>
          </div>
          <a className="hero-tel" href="tel:+420602000000">
            <span className="tel-dot" aria-hidden="true"></span>
            602 000 000
          </a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Plynové kotle · rozvody · revize</p>
          <h1 className="hero-h1">
            <span className="h1-line h1-line-1">Plyn je řemeslo</span>
            <span className="h1-line h1-line-2">
              na <em>milimetr</em>
            </span>
            <span className="h1-line h1-line-3">a na papír.</span>
          </h1>
          <p className="hero-lead">
            Montuju, opravuju a reviduju plynová zařízení v Českých Budějovicích
            a okolí. Každý spoj těsný, každá revize s razítkem — protože u plynu
            se „skoro dobře“ nepočítá.
          </p>
          <div className="hero-actions">
            <a className="btn btn-flame" href="tel:+420602000000">Zavolat plynaři</a>
            <a className="btn btn-ghost" href="#sluzby">Co všechno dělám</a>
          </div>
        </div>

        {/* signature: manometr — tlaková zkouška jako grafický podpis */}
        <div className="gauge-wrap" aria-hidden="true">
          <svg className="gauge" viewBox="0 0 320 320">
            <circle cx="160" cy="160" r="150" className="g-ring" />
            <circle cx="160" cy="160" r="126" className="g-face" />
            {/* stupnice */}
            <g className="g-ticks">
              <line x1="160" y1="46" x2="160" y2="64" transform="rotate(-120 160 160)" />
              <line x1="160" y1="46" x2="160" y2="58" transform="rotate(-96 160 160)" />
              <line x1="160" y1="46" x2="160" y2="64" transform="rotate(-72 160 160)" />
              <line x1="160" y1="46" x2="160" y2="58" transform="rotate(-48 160 160)" />
              <line x1="160" y1="46" x2="160" y2="64" transform="rotate(-24 160 160)" />
              <line x1="160" y1="46" x2="160" y2="58" transform="rotate(0 160 160)" />
              <line x1="160" y1="46" x2="160" y2="64" transform="rotate(24 160 160)" />
              <line x1="160" y1="46" x2="160" y2="58" transform="rotate(48 160 160)" />
              <line x1="160" y1="46" x2="160" y2="64" transform="rotate(72 160 160)" />
              <line x1="160" y1="46" x2="160" y2="58" transform="rotate(96 160 160)" />
              <line x1="160" y1="46" x2="160" y2="64" transform="rotate(120 160 160)" />
            </g>
            <text x="160" y="210" className="g-label" textAnchor="middle">kPa</text>
            <text x="160" y="234" className="g-label g-label-sm" textAnchor="middle">tlaková zkouška</text>
            {/* ručička */}
            <g className="g-needle">
              <line x1="160" y1="160" x2="160" y2="58" />
              <circle cx="160" cy="160" r="9" />
            </g>
          </svg>
          <p className="gauge-caption">Drží tlak. Jinak to nepředám.</p>
        </div>

        {/* měděné potrubí vedoucí do obsahu */}
        <div className="pipe pipe-hero" aria-hidden="true"></div>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <h2 id="sluzby-h">Od hlavního uzávěru po hořák</h2>
          <p>
            Služby řadím tak, jak plyn skutečně teče vaším domem — od přípojky
            přes rozvody až ke spotřebiči. Ať vás pálí kterékoli místo, řeším ho.
          </p>
        </div>

        <ol className="trasa">
          <li className="trasa-item">
            <span className="trasa-ventil" aria-hidden="true"></span>
            <div className="trasa-body">
              <span className="trasa-kde">Přípojka a HUP</span>
              <h3>Nové rozvody a přeložky plynu</h3>
              <p>
                Rozvody v mědi i oceli pro novostavby, rekonstrukce a přeložky
                při přestavbě kuchyně. Včetně projektu, tlakové zkoušky a výchozí
                revize — do plynáren jdete s hotovými papíry.
              </p>
            </div>
          </li>
          <li className="trasa-item">
            <span className="trasa-ventil" aria-hidden="true"></span>
            <div className="trasa-body">
              <span className="trasa-kde">Rozvody v domě</span>
              <h3>Revize a servisní prohlídky</h3>
              <p>
                Výchozí i provozní revize plynových zařízení pro byty, domy,
                SVJ a firmy. Detektorem projdu každý spoj, protokol dostanete
                na místě. Termín revize vám sám pohlídám a rok dopředu připomenu.
              </p>
            </div>
          </li>
          <li className="trasa-item">
            <span className="trasa-ventil" aria-hidden="true"></span>
            <div className="trasa-body">
              <span className="trasa-kde">Kotelna</span>
              <h3>Montáž a výměna plynových kotlů</h3>
              <p>
                Výměna starého kotle za kondenzační — poradím s výběrem podle
                velikosti domu, zajistím montáž, uvedení do provozu i vyřízení
                dotace. Starý kotel odvezu, kotelnu předám uklizenou.
              </p>
            </div>
          </li>
          <li className="trasa-item">
            <span className="trasa-ventil" aria-hidden="true"></span>
            <div className="trasa-body">
              <span className="trasa-kde">Spotřebiče</span>
              <h3>Sporáky, ohřívače a karmy</h3>
              <p>
                Připojení plynového sporáku, výměna karmy, servis průtokových
                ohřívačů. Drobná zakázka pro mě není otrava — přijedu i kvůli
                jedné hadici, protože právě ta bývá nejčastější závada.
              </p>
            </div>
          </li>
        </ol>

        <div className="havarie" role="note">
          <div className="havarie-text">
            <strong>Cítíte plyn?</strong> Nesvítit, nezapalovat, otevřít okna,
            zavřít hlavní uzávěr a volat pohotovost 1239. Až bude bezpečno,
            zavolejte mně — únik najdu a opravím.
          </div>
          <a className="btn btn-flame" href="tel:1239">Pohotovost 1239</a>
        </div>
      </section>

      <div className="pipe pipe-mid" aria-hidden="true"></div>

      {/* ================= DŮVĚRA ================= */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="duvera-grid">
          <div className="duvera-o">
            <h2 id="duvera-h">Jeden plynař, jedno jméno, jedno razítko</h2>
            <p>
              Jmenuju se Bedřich Krčka a plynařinu dělám v Českých Budějovicích
              přes dvacet let. Nejsem dispečink s brigádníky — kdo zvedne telefon,
              ten k vám přijede a ten práci taky podepíše. Osvědčení TIČR na montáže,
              opravy i revize plynových zařízení mám vlastní, ne půjčené.
            </p>
            <p>
              Jezdím po Budějovicích a do 30 km okolo — Hluboká, Rudolfov, Včelná,
              Boršov, Zliv. K SVJ a bytovým domům chodím pravidelně na provozní
              revize, u rodinných domů nejčastěji měním kotle a karmy.
            </p>
            <ul className="fakta">
              <li>
                <span className="fakta-num">20+</span>
                <span className="fakta-pop">let plynařiny v jižních Čechách</span>
              </li>
              <li>
                <span className="fakta-num">TIČR</span>
                <span className="fakta-pop">osvědčení pro montáže, opravy a revize</span>
              </li>
              <li>
                <span className="fakta-num">48 h</span>
                <span className="fakta-pop">běžná oprava do dvou pracovních dnů</span>
              </li>
            </ul>
          </div>

          <div className="duvera-ref">
            <h3 className="ref-h">Co říkají sousedi</h3>
            <figure className="ref">
              <blockquote>
                „Starý kotel odešel v lednu. Pan Krčka přijel ten den večer,
                do týdne topil nový kondenzační a papíry k dotaci přinesl sám.“
              </blockquote>
              <figcaption>— rodinný dům, Rožnov</figcaption>
            </figure>
            <figure className="ref">
              <blockquote>
                „Revize pro celý dům, 24 bytů, za jedno dopoledne. Protokoly
                poslal ještě týž den a rok dopředu nám hlídá termín.“
              </blockquote>
              <figcaption>— výbor SVJ, sídliště Máj</figcaption>
            </figure>
            <figure className="ref">
              <blockquote>
                „Bylo cítit plyn u sporáku. Přijel do hodiny, našel prasklou
                hadici, vyměnil, přeměřil celý byt. Účtoval jen hadici a cestu.“
              </blockquote>
              <figcaption>— byt, Lannova třída</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* mobilní lišta pro rychlé volání */}
      <a className="call-bar" href="tel:+420602000000">Zavolat: 602 000 000</a>
    </main>
  );
}

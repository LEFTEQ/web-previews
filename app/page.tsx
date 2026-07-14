export default function Page() {
  return (
    <main className="pool-page">
      <a className="skip-link" href="#obsah">Přeskočit na obsah</a>

      {/* HERO */}
      <section className="hero" aria-label="Úvod">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Zastřešený bazén s keramickou vanou realizovaný firmou Bazénové centrum v Ústí nad Labem"
            className="hero-img"
          />
          <div className="hero-scrim" aria-hidden="true"></div>
        </div>

        <div className="hero-inner">
          <div className="wordmark">
            <span className="wm-line1">BAZÉNOVÉ</span>
            <span className="wm-line2">CENTRUM</span>
          </div>

          <p className="hero-kicker">Ústí nad Labem · Hostovická 3109/21 · od projektu po chemii ve vodě</p>

          <h1 className="hero-title">
            Hladina, která<br />vydrží roky.
          </h1>

          <p className="hero-lede">
            Stavíme keramické i fóliové bazény, zastřešení a vířivky na míru severočeským
            zahradám. Bez plovoucích slibů — jen technologie, na které je spolehnutí.
          </p>

          <div className="hero-scale" role="group" aria-label="Rychlá orientace">
            <a className="hero-chip" href="#obsah">
              <span className="chip-num">01</span>
              <span>Co stavíme</span>
            </a>
            <a className="hero-chip" href="#pece">
              <span className="chip-num">02</span>
              <span>Proč u nás</span>
            </a>
          </div>
        </div>

        <div className="depth-scale" aria-hidden="true">
          <span>0,0 m</span>
          <span>0,6 m</span>
          <span>1,2 m</span>
          <span>1,8 m</span>
        </div>
      </section>

      {/* SLUŽBY */}
      <section id="obsah" className="services" aria-label="Naše služby">
        <div className="services-head">
          <span className="eyebrow">Nabídka · Ústí nad Labem a okolí</span>
          <h2>Od výkopu po první koupání</h2>
          <p className="services-sub">
            Každá zakázka jde stejnou trasou — návrh, stavba, technologie, servis. Vyberte si,
            kde právě jste.
          </p>
        </div>

        <div className="service-media">
          <img
            src="/section-1.webp"
            alt="Detail montáže bazénové technologie a filtrace v zázemí bazénu"
            className="service-img"
          />
        </div>

        <ol className="service-list">
          <li className="service-item">
            <span className="service-num">01</span>
            <div>
              <h3>Keramické bazény Compass Pools</h3>
              <p>
                Celoroční stavba z keramických panelů — pevná vana bez fólie, dlouhá životnost
                a hladké provedení, které nešpiní vodu.
              </p>
            </div>
          </li>
          <li className="service-item">
            <span className="service-num">02</span>
            <div>
              <h3>Zastřešení POPP</h3>
              <p>
                Nízké i vysoké lamelové zastřešení, které prodlouží sezónu o měsíce a ochrání
                vodu před listím, chladem i UV zářením.
              </p>
            </div>
          </li>
          <li className="service-item">
            <span className="service-num">03</span>
            <div>
              <h3>Technologie a vytápění</h3>
              <p>
                Filtrace, tepelná čerpadla a slaná elektrolýza od Fairland, Vágner Pool
                a Zodiac Poolcare — navržené na míru objemu vaší nádrže.
              </p>
            </div>
          </li>
          <li className="service-item">
            <span className="service-num">04</span>
            <div>
              <h3>3D návrh na vaši zahradu</h3>
              <p>
                Než padne první lopata, uvidíte bazén v 3D přímo na fotce vaší zahrady —
                včetně zastřešení, dlažby a osvětlení.
              </p>
            </div>
          </li>
        </ol>
      </section>

      {/* DŮVĚRA / PÉČE */}
      <section id="pece" className="trust" aria-label="Proč si nás vybrat">
        <div className="trust-media">
          <img
            src="/section-2.webp"
            alt="Prodejna a zázemí Bazénového centra s bazénovou chemií a příslušenstvím"
            className="trust-img"
          />
          <div className="trust-badge">
            <span className="badge-value">od 2013</span>
            <span className="badge-label">stavíme bazény v Ústí nad Labem</span>
          </div>
        </div>

        <div className="trust-content">
          <span className="eyebrow">Proč Bazénové centrum</span>
          <h2>Vodu si u nás nezměříte jen jednou</h2>

          <dl className="trust-list">
            <div className="trust-row">
              <dt>Odbornost</dt>
              <dd>
                Projektujeme, dodáváme i montujeme — bazén vám poslouží roky a bude ladit
                s vaší zahradou i s tím, jak v ní opravdu trávíte čas.
              </dd>
            </div>
            <div className="trust-row">
              <dt>Prověřené značky</dt>
              <dd>
                Compass Pools, POPP, Fairland, Vágner Pool, Zodiac Poolcare — jména, za kterými
                si stojíme, protože jejich technologie sami servisujeme.
              </dd>
            </div>
            <div className="trust-row">
              <dt>Kompletní servis</dt>
              <dd>
                Údržba, chemie, náhradní díly i poradenství na jednom místě — nemusíte shánět
                pět různých dodavatelů na jeden bazén.
              </dd>
            </div>
            <div className="trust-row">
              <dt>Prodejna v Ústí</dt>
              <dd>
                Na Hostovické 3109/21 vám změříme kvalitu vody a poradíme, jak ji udržet čistou
                po celou sezónu — chemii i sůl máme skladem.
              </dd>
            </div>
          </dl>

          <div className="trust-hours">
            <span className="hours-label">Provozní doba prodejny</span>
            <span className="hours-value">Po–Pá 8–16 hod · So–Ne dle dohody</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function Page() {
  const cargo = [
    { name: "Rostlinné oleje", note: "potravinářské, v tlakové cisterně" },
    { name: "Mléko", note: "chlazené, GMP režim" },
    { name: "Víno", note: "stáčené volně ložené" },
    { name: "Melasa", note: "husté kapaliny, temperace" },
    { name: "Líh", note: "ADR, přísný režim" },
    { name: "Octy", note: "kyselé kapaliny" },
  ];

  const countries = ["CZ", "SK", "H", "A", "D", "PL", "SLO", "B", "NL", "DK"];
  const onRequest = ["IT", "FR", "ENG", "RO", "BG", "mimo EU"];

  const facts = [
    { k: "7", label: "tahačů Volvo", sub: "vlastní vozový park" },
    { k: "30–32 tis.", label: "litrů na cisternu", sub: "potravinářská tlaková" },
    { k: "2012", label: "na trhu od roku", sub: "Olomouc – Holice" },
    { k: "10 mil. Kč", label: "pojištění nákladu", sub: "navíc k havarijnímu" },
  ];

  return (
    <main className="pg">
      <header className="nav">
        <a className="mark" href="#" aria-label="KSK Transport">
          <span className="mark-ksk">KSK</span>
          <span className="mark-t">TRANSPORT</span>
          <span className="mark-sub">cisternová přeprava · Olomouc</span>
        </a>
        <a className="nav-tel" href="tel:+420585154208">585&nbsp;154&nbsp;208</a>
      </header>

      <section className="hero">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Tahač Volvo KSK Transport s potravinářskou tlakovou cisternou na silnici"
            className="hero-img"
          />
          <div className="hero-gauge" aria-hidden="true">
            <span className="gauge-tick">30 000 l</span>
            <span className="gauge-line" />
            <span className="gauge-tick">32 000 l</span>
          </div>
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Potravinářské kapaliny · GMP · ADR</p>
          <h1 className="hero-h1">
            Vezeme, co se<br />
            <span className="h1-accent">nesmí rozlít</span>
          </h1>
          <p className="hero-lead">
            Vlastní cisterny značky Volvo pro oleje, mléko, víno i líh.
            Každá jízda pod přísnou hygienou a plnou dokumentací —
            z Olomouce do celé Evropy.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="tel:+420776540022">
              Zavolat disponentovi
            </a>
            <a className="btn btn-ghost" href="mailto:cisterny@ksktransport.cz">
              Poptat přepravu
            </a>
          </div>
        </div>
      </section>

      <section className="facts" aria-label="Fakta o vozovém parku">
        {facts.map((f) => (
          <div className="fact" key={f.label}>
            <span className="fact-k">{f.k}</span>
            <span className="fact-label">{f.label}</span>
            <span className="fact-sub">{f.sub}</span>
          </div>
        ))}
      </section>

      <section className="cargo" id="preprava">
        <div className="sec-head">
          <p className="eyebrow">Co vozíme</p>
          <h2 className="sec-h2">Šest kapalin, jedna disciplína</h2>
          <p className="sec-intro">
            Volně ložené potravinářské i chemické kapaliny v tlakové
            cisterně o objemu 30 000 až 32 000 litrů. Každý druh má
            svůj režim čištění a temperace.
          </p>
        </div>

        <ul className="cargo-list">
          {cargo.map((c, i) => (
            <li className="cargo-item" key={c.name}>
              <span className="cargo-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="cargo-name">{c.name}</span>
              <span className="cargo-note">{c.note}</span>
            </li>
          ))}
        </ul>

        <div className="cargo-side">
          <img
            src="/section-1.webp"
            alt="Detail potravinářské tlakové cisterny KSK Transport při stáčení"
            className="cargo-img"
          />
          <div className="routes">
            <div className="routes-block">
              <h3 className="routes-h">Kam jezdíme běžně</h3>
              <ul className="chips">
                {countries.map((c) => (
                  <li className="chip" key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <div className="routes-block">
              <h3 className="routes-h">Zajistíme na vyžádání</h3>
              <ul className="chips chips-alt">
                {onRequest.map((c) => (
                  <li className="chip" key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="trust" id="o-nas">
        <img
          src="/section-2.webp"
          alt="Vozový park tahačů Volvo KSK Transport na odstavné ploše v Olomouci"
          className="trust-img"
        />
        <div className="trust-copy">
          <p className="eyebrow">Proč nám svěřit náklad</p>
          <h2 className="sec-h2">Od roku 2012 vozíme čistě</h2>
          <p className="sec-intro">
            KSK Transport působí na dopravním trhu od roku 2012 z Olomouce
            – Holice. Za kvalitou stojí udržovaný vozový park a řidiči,
            kteří procházejí prověrkou několikrát do roka.
          </p>

          <dl className="trust-grid">
            <div className="trust-cell">
              <dt>GMP — správná výrobní praxe</dt>
              <dd>
                Vozíme potraviny, nápoje i farmaceutické kapaliny podle
                zásad GMP. Cíl je jednoduchý: aby se ke spotřebiteli
                dostal produkt bez kontaminace.
              </dd>
            </div>
            <div className="trust-cell">
              <dt>Technický stav pod kontrolou</dt>
              <dd>
                Pravidelné servisní prohlídky dle zákona a navíc kontrola
                po každé dokončené jízdě. Nic nespoléháme na náhodu.
              </dd>
            </div>
            <div className="trust-cell">
              <dt>Pojištěno na 10 milionů</dt>
              <dd>
                Soupravy mají zákonné i havarijní pojištění, náklad je
                pojištěn na 10 000 000 Kč. Smluvní přepravce bereme jen
                prověřené a smluvně ošetřené.
              </dd>
            </div>
          </dl>

          <div className="team">
            <h3 className="team-h">Kdo to řídí</h3>
            <ul className="team-list">
              <li className="team-p">
                <span className="team-name">Tomáš Konečný</span>
                <span className="team-role">disponent · ADR officer</span>
                <a className="team-tel" href="tel:+420735777957">735&nbsp;777&nbsp;957</a>
              </li>
              <li className="team-p">
                <span className="team-name">Kamil Číhal</span>
                <span className="team-role">disponent · garážmistr</span>
                <a className="team-tel" href="tel:+420777577337">777&nbsp;577&nbsp;337</a>
              </li>
              <li className="team-p">
                <span className="team-name">Milan Kolečář</span>
                <span className="team-role">jednatel · ekonomický úsek</span>
                <a className="team-tel" href="tel:+420776540022">776&nbsp;540&nbsp;022</a>
              </li>
            </ul>
            <p className="team-addr">
              Pode Mlýnem 777/9, 779 00 Olomouc – Holice · IČ 00576646
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

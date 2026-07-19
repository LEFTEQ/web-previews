export default function Page() {
  const products = [
    {
      name: "Garážová vrata",
      desc:
        "Sekční vrata EVO a MINI do zárubně i před ni, křídlová, odsuvná do boku i rolovací. Pro každý — i atypický — rozměr garáže najdeme technické řešení.",
      spec: [
        ["MODEL", "EVO · MINI"],
        ["MONTÁŽ", "do i před zárubeň"],
        ["ZÁRUKA", "5 let"],
      ],
    },
    {
      name: "Pohony vrat a bran",
      desc:
        "Řetízkové i pásové pohony s odbornou montáží. Vrata se otevřou z auta dřív, než k nim dojdete — a večer je zavřete z mobilu.",
      spec: [
        ["PŘEVOD", "1:4"],
        ["OVLÁDÁNÍ", "dálkové"],
        ["ZÁRUKA", "5 let"],
      ],
    },
    {
      name: "Hliníkové ploty a brány",
      desc:
        "Okenicové i žaluziové provedení, branky i posuvné brány. Patnáct oblíbených barev bez příplatku, další z celé palety RAL.",
      spec: [
        ["PROFIL", "AL-LAF1"],
        ["BAREV", "15 bez příplatku"],
        ["ZÁRUKA", "5 let"],
      ],
    },
    {
      name: "Venkovní žaluzie a rolety",
      desc:
        "Nastavitelný sklon lamel — pustíte dovnitř přesně tolik světla, kolik chcete, a soukromí máte pořád. Funkční alternativa venkovních rolet.",
      spec: [
        ["LAMELA", "Z-profil"],
        ["SKLON", "nastavitelný"],
        ["ZÁRUKA", "5 let"],
      ],
    },
  ];

  const facts = [
    ["5 let", "záruka na produkt i povrchovou úpravu"],
    ["15", "barev bez příplatku, další z celé palety RAL"],
    ["25 %", "sleva v e-shopu pro šikovné kutily"],
    ["1", "řešení na míru i pro atypický rozměr"],
  ];

  return (
    <main className="page">
      {/* ---------- HERO ---------- */}
      <header className="band hero">
        <div className="door" aria-hidden="true">
          <span className="door-panel p1" />
          <span className="door-panel p2" />
          <span className="door-panel p3" />
        </div>

        <div className="hero-inner">
          <div className="wordmark">
            EUROBYT<span className="wm-cb">CB</span>
          </div>
          <p className="hero-eyebrow">Okna, dveře &amp; vrata · České Budějovice</p>
          <h1 className="hero-title">
            Za těmito vraty je řešení pro <span className="hi">každou garáž.</span>
          </h1>
          <p className="hero-sub">
            Sekční vrata EVO a MINI, pohony, hliníkové ploty a venkovní žaluzie —
            od zaměření a kalkulace až po montáž. Domácí firma z Budějovic, ne
            anonymní katalog odjinud.
          </p>
          <div className="hero-cta">
            <a className="btn-amber" href="tel:777111222">
              Zavolat zdarma · 777 111 222
            </a>
            <span className="hero-note">Kalkulace a poradenství zdarma</span>
          </div>
        </div>
      </header>

      {/* ---------- SORTIMENT & MONTÁŽE ---------- */}
      <section className="band sortiment" aria-labelledby="sortiment-nadpis">
        <div className="band-inner">
          <div className="band-head">
            <span className="sect-index">01 — Sortiment &amp; montáže</span>
            <h2 id="sortiment-nadpis" className="sect-title">
              Čtyři věci, které vám namontujeme napevno
            </h2>
            <p className="sect-lead">
              Neprodáváme z katalogu naslepo. Přijedeme, změříme a navrhneme
              řešení, které sedne na vaši zárubeň i rozpočet. Kdo si troufne na
              montáž sám, nakoupí materiál se slevou v našem e-shopu.
            </p>
          </div>

          <ol className="products">
            {products.map((p) => (
              <li className="product-band" key={p.name}>
                <span className="warning-stripe" aria-hidden="true" />
                <div className="pb-main">
                  <h3 className="pb-title">{p.name}</h3>
                  <p className="pb-desc">{p.desc}</p>
                </div>
                <dl className="spec-plate" aria-label={`Parametry — ${p.name}`}>
                  {p.spec.map(([k, v]) => (
                    <div className="sp-row" key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- O NÁS / DŮVĚRA ---------- */}
      <section className="band about" aria-labelledby="about-nadpis">
        <div className="band-inner">
          <div className="band-head">
            <span className="sect-index amber-index">02 — Kdo vám to montuje</span>
            <h2 id="about-nadpis" className="sect-title">
              Budějovická firma, ne anonymní katalog
            </h2>
            <p className="sect-lead light">
              EUROBYT CB měří, kalkuluje a montuje v Českých Budějovicích a okolí.
              Poradíme s výběrem, rovnou řekneme, co se do vaší garáže hodí a co
              ne, a montáž necháme na svých lidech — ne na subdodavateli z druhého
              konce republiky.
            </p>
          </div>

          <dl className="facts">
            {facts.map(([num, label]) => (
              <div className="fact" key={label}>
                <dt className="fact-num">{num}</dt>
                <dd className="fact-label">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}

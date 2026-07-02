const vozy = [
  {
    nazev: "Hyundai Tucson 1.6 T-GDi HEV",
    rok: "2022",
    km: "98 000 km",
    palivo: "Benzín + hybrid",
    vykon: "132 kW",
    detail: "Pohon 4×4 HTRAC, automat, původ ČR",
    cena: "259 000 Kč",
    bezDph: "214 050 Kč bez DPH",
    dph: true,
  },
  {
    nazev: "Dacia Jogger 1.0 TCe",
    rok: "2025",
    km: "6 000 km",
    palivo: "Benzín",
    vykon: "81 kW",
    detail: "Výbava Expression, téměř nové",
    cena: "209 000 Kč",
    bezDph: "172 727 Kč bez DPH",
    dph: true,
  },
  {
    nazev: "Kia Sorento GT Line 2.2 CRDi",
    rok: "2020",
    km: "149 000 km",
    palivo: "Diesel",
    vykon: "147 kW",
    detail: "4×4, 7 míst, automat, původ ČR",
    cena: "349 000 Kč",
    bezDph: "288 430 Kč bez DPH",
    dph: true,
  },
  {
    nazev: "Škoda Octavia 4 2.0 TSi 4×4",
    rok: "2022",
    km: "—",
    palivo: "Benzín",
    vykon: "140 kW",
    detail: "DSG, výbava Style, původ ČR",
    cena: "379 000 Kč",
    bezDph: "313 223 Kč bez DPH",
    dph: true,
  },
  {
    nazev: "VW Caddy Long 2.0 TDi",
    rok: "2020",
    km: "184 000 km",
    palivo: "Diesel",
    vykon: "75 kW",
    detail: "5 míst, praktický vůz pro firmu i rodinu",
    cena: "189 000 Kč",
    bezDph: "156 198 Kč bez DPH",
    dph: true,
  },
  {
    nazev: "Škoda Octavia Combi 4 2.0 TDi",
    rok: "2023",
    km: "129 000 km",
    palivo: "Diesel",
    vykon: "110 kW",
    detail: "DSG, výbava Style Plus, původ ČR",
    cena: "229 000 Kč",
    bezDph: "189 256 Kč bez DPH",
    dph: true,
  },
];

export default function Page() {
  return (
    <main className="mc">
      {/* ===== HERO ===== */}
      <header className="mc-hero">
        <div className="mc-hero-inner">
          <div className="mc-topbar">
            <span className="mc-wordmark">
              MILO<span className="mc-wordmark-accent">CAR</span>
              <span className="mc-wordmark-sub">autocentrum · Praha</span>
            </span>
            <a className="mc-topbar-tel" href="tel:+420776888800">
              +420 776 888 800
            </a>
          </div>

          <div className="mc-hero-main">
            <p className="mc-hero-eyebrow">Prověřené vozy s původem v ČR</p>
            <h1 className="mc-hero-title">
              <span className="mc-hero-line mc-hero-line-1">Auto, které</span>
              <span className="mc-hero-line mc-hero-line-2">si můžete</span>
              <span className="mc-hero-line mc-hero-line-3">
                ověřit<span className="mc-dot">.</span>
              </span>
            </h1>
            <p className="mc-hero-lead">
              Autobazar v Praze pro lidi, kteří chtějí vidět servisní knížku dřív
              než smlouvu. Každý vůz má doložený původ, reálné kilometry a
              možnost odpočtu DPH tam, kde to dává smysl.
            </p>
            <div className="mc-hero-cta">
              <a className="mc-btn mc-btn-primary" href="#nabidka">
                Prohlédnout nabídku
              </a>
              <a className="mc-btn mc-btn-ghost" href="tel:+420776888800">
                Zavolat: 776 888 800
              </a>
            </div>
          </div>

          {/* Signature: „tachometrový" pás — stupnice jako přístrojová deska */}
          <div className="mc-gauge" aria-hidden="true">
            <div className="mc-gauge-track">
              {Array.from({ length: 40 }).map((_, i) => (
                <span
                  key={i}
                  className={i % 5 === 0 ? "mc-tick mc-tick-major" : "mc-tick"}
                />
              ))}
              <span className="mc-needle" />
            </div>
            <div className="mc-gauge-labels">
              <span>0</span>
              <span>prověřený stav</span>
              <span>reálné km</span>
              <span>původ ČR</span>
              <span>DPH</span>
            </div>
          </div>

          <div className="mc-hero-strip">
            <p className="mc-strip-item">
              <strong>Odtah od 12 Kč/km</strong> — nepojízdné auto vám přivezeme
              na dvůr
            </p>
            <p className="mc-strip-item">
              <strong>Odpočet DPH</strong> u většiny vozů — cena vč. i bez DPH
              vždy uvedena
            </p>
            <p className="mc-strip-item">
              <strong>Praha</strong> — vůz si prohlédnete a projedete osobně
            </p>
          </div>
        </div>
      </header>

      {/* ===== NABÍDKA VOZŮ ===== */}
      <section className="mc-section mc-nabidka" id="nabidka" aria-labelledby="nabidka-h">
        <div className="mc-section-inner">
          <div className="mc-section-head">
            <h2 className="mc-section-title" id="nabidka-h">
              Právě na place
            </h2>
            <p className="mc-section-note">
              Aktuální výběr — u každého vozu uvádíme rok, nájezd a cenu s DPH i
              bez. Detaily a fotky vám pošleme, nebo se stavte.
            </p>
          </div>

          <ul className="mc-cars">
            {vozy.map((v) => (
              <li className="mc-car" key={v.nazev}>
                <div className="mc-car-head">
                  <h3 className="mc-car-name">{v.nazev}</h3>
                  {v.dph && <span className="mc-car-badge">odpočet DPH</span>}
                </div>
                <dl className="mc-car-specs">
                  <div>
                    <dt>Rok</dt>
                    <dd>{v.rok}</dd>
                  </div>
                  <div>
                    <dt>Nájezd</dt>
                    <dd>{v.km}</dd>
                  </div>
                  <div>
                    <dt>Palivo</dt>
                    <dd>{v.palivo}</dd>
                  </div>
                  <div>
                    <dt>Výkon</dt>
                    <dd>{v.vykon}</dd>
                  </div>
                </dl>
                <p className="mc-car-detail">{v.detail}</p>
                <div className="mc-car-price">
                  <span className="mc-car-cena">{v.cena}</span>
                  <span className="mc-car-bezdph">{v.bezDph}</span>
                </div>
                <a className="mc-car-link" href="tel:+420776888800">
                  Zeptat se na tento vůz →
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== DŮVĚRA / JAK NAKUPUJEME ===== */}
      <section className="mc-section mc-duvera" aria-labelledby="duvera-h">
        <div className="mc-section-inner">
          <div className="mc-duvera-grid">
            <div className="mc-duvera-text">
              <h2 className="mc-section-title mc-section-title-light" id="duvera-h">
                Bazar, kde vám nikdo nic nemaskuje
              </h2>
              <p className="mc-duvera-lead">
                Jsme malý pražský autobazar. Neprodáváme sny — prodáváme auta,
                která jsme sami prohlédli, a řekneme vám o nich i to, co se do
                inzerátu obvykle nepíše.
              </p>
            </div>
            <ul className="mc-sliby">
              <li className="mc-slib">
                <span className="mc-slib-kontrolka" aria-hidden="true" />
                <div>
                  <h3>Původ vozu doložíme</h3>
                  <p>
                    Vozy s původem v ČR, servisní historií a reálným nájezdem.
                    VIN vám dáme dopředu — prověřte si ho sami, kde chcete.
                  </p>
                </div>
              </li>
              <li className="mc-slib">
                <span className="mc-slib-kontrolka" aria-hidden="true" />
                <div>
                  <h3>Cena bez hvězdiček</h3>
                  <p>
                    U každého auta vidíte cenu s DPH i bez DPH. Žádné povinné
                    „administrativní poplatky" na konci jednání.
                  </p>
                </div>
              </li>
              <li className="mc-slib">
                <span className="mc-slib-kontrolka" aria-hidden="true" />
                <div>
                  <h3>Poškozený vůz? Řekneme to nahlas</h3>
                  <p>
                    Když má auto vadu, stojí to v inzerátu na prvním řádku — ne
                    schované v poznámce. Sleva je pak férová pro obě strany.
                  </p>
                </div>
              </li>
              <li className="mc-slib">
                <span className="mc-slib-kontrolka" aria-hidden="true" />
                <div>
                  <h3>Odtahová služba od 12 Kč/km</h3>
                  <p>
                    Nepojízdné auto na výkup nebo do servisu? Zavolejte na{" "}
                    <a href="tel:+420776888800">776 888 800</a> a domluvíme
                    odtah po Praze i mimo ni.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function Page() {
  const prodejny = [
    { mesto: "Ústí nad Labem", tel: "604 290 771" },
    { mesto: "Lovosice", tel: "604 290 771" },
    { mesto: "Teplice", tel: "604 290 771" },
    { mesto: "Bílina", tel: "604 290 771" },
    { mesto: "Roudnice nad Labem", tel: "604 290 771" },
    { mesto: "Libochovice", tel: "604 290 771" },
    { mesto: "Rakovník", tel: "604 290 771" },
  ];

  const sortiment = [
    {
      nazev: "Zdící materiál",
      popis: "Cihly, tvárnice, pórobeton. Ytong, Porotherm i Heluz skladem — paletu vám naložíme do 20 minut.",
    },
    {
      nazev: "Betonové výrobky",
      popis: "Ztracené bednění, obrubníky, skruže, zámková dlažba. Přímo z výroby, bez čekání.",
    },
    {
      nazev: "Střešní krytina",
      popis: "Betonová i pálená taška, plech, lepenky. Spočítáme spotřebu podle rozměrů vaší střechy.",
    },
    {
      nazev: "Tepelná izolace",
      popis: "Polystyren, minerální vata, fasádní systémy. Poradíme tloušťku podle normy i rozpočtu.",
    },
    {
      nazev: "Omítky a malty",
      popis: "Pytlované směsi i volně ložené. Vápenné, cementové, sádrové — od základů po štuk.",
    },
    {
      nazev: "Ocel a stavební železo",
      popis: "Roxory, kari sítě, profily. Nastříháme na míru přímo na prodejně.",
    },
    {
      nazev: "Dlažba a obklady",
      popis: "Interiér, exteriér, mrazuvzdorné série. Vzorky si prohlédnete na prodejně v Ústí.",
    },
    {
      nazev: "Komíny a stavební chemie",
      popis: "Komínové systémy, penetrace, hydroizolace, lepidla. Vše, co stavba spotřebuje mezi hrubou stavbou a kolaudací.",
    },
  ];

  return (
    <main className="st-main">
      {/* ===== HERO ===== */}
      <header className="st-hero">
        <div className="st-hero-inner">
          <div className="st-topbar">
            <span className="st-wordmark" aria-label="Stama a.s.">
              STA<span className="st-wordmark-joint">/</span>MA
              <span className="st-wordmark-sub">stavebniny · a.s.</span>
            </span>
            <a className="st-topbar-tel" href="tel:+420604290771">
              <span className="st-topbar-tel-label">Prodejna Ústí n. L.</span>
              604 290 771
            </a>
          </div>

          <div className="st-hero-stage">
            <p className="st-hero-eyebrow">Stavebniny pro Ústecko od roku 1992</p>
            <h1 className="st-hero-title">
              <span className="st-brick st-brick-1">Materiál</span>
              <span className="st-brick-row">
                <span className="st-brick st-brick-2">na celou</span>
              </span>
              <span className="st-brick st-brick-3">stavbu.</span>
            </h1>
            <p className="st-hero-lead">
              Od základové desky po hřeben střechy. Sedm prodejen v kraji,
              vlastní doprava s hydraulickou rukou a lidé za pultem, kteří
              stavěli vlastníma rukama.
            </p>
            <div className="st-hero-actions">
              <a className="st-btn st-btn-solid" href="tel:+420604290771">
                Zavolat prodejnu
              </a>
              <a className="st-btn st-btn-line" href="#sortiment">
                Projít sortiment
              </a>
            </div>
          </div>

          <div className="st-hero-facts" role="list">
            <div className="st-fact" role="listitem">
              <strong>7 prodejen</strong>
              <span>Ústecký a Středočeský kraj</span>
            </div>
            <div className="st-fact" role="listitem">
              <strong>Doprava s rukou</strong>
              <span>Složíme paletu tam, kde ji chcete</span>
            </div>
            <div className="st-fact" role="listitem">
              <strong>ISO 9001</strong>
              <span>Certifikovaná kvalita dodávek</span>
            </div>
          </div>
        </div>

        {/* signature: běhounová vazba — cihelný rastr jako pozadí hero */}
        <div className="st-bond" aria-hidden="true">
          <div className="st-bond-row"><i /><i /><i /><i /><i /><i /></div>
          <div className="st-bond-row st-bond-offset"><i /><i /><i /><i /><i /><i /></div>
          <div className="st-bond-row"><i /><i /><i /><i /><i /><i /></div>
        </div>
      </header>

      {/* ===== SORTIMENT ===== */}
      <section className="st-section st-sortiment" id="sortiment" aria-labelledby="sortiment-h">
        <div className="st-section-head">
          <h2 id="sortiment-h">Co u nás naložíte</h2>
          <p>
            Držíme skladem to, co stavba opravdu spotřebuje. Když něco nemáme,
            objednáme a dovezeme — obvykle do dvou pracovních dnů.
          </p>
        </div>
        <ul className="st-grid">
          {sortiment.map((s) => (
            <li className="st-card" key={s.nazev}>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
            </li>
          ))}
        </ul>
        <p className="st-sortiment-note">
          Stavíte svépomocí? Přineste projekt — spočítáme spotřebu materiálu
          zdarma a rozvrhneme závozy podle etap stavby.
        </p>
      </section>

      {/* ===== PRODEJNY / DŮVĚRA ===== */}
      <section className="st-section st-prodejny" aria-labelledby="prodejny-h">
        <div className="st-prodejny-grid">
          <div className="st-prodejny-text">
            <h2 id="prodejny-h">Sedm prodejen, jedny ceny</h2>
            <p>
              Stama a.s. prodává stavební materiál na severu Čech přes třicet
              let. Nejsme překupníci od stolu — každou prodejnu vede člověk,
              který zná zedničinu z lešení, ne z katalogu.
            </p>
            <p>
              Podnikáte se stavbou? Zaregistrujte se s IČ jako velkoobchodní
              zákazník a čerpejte partnerské ceny na celý sortiment.
            </p>
            <a className="st-btn st-btn-solid" href="mailto:info@stama.cz">
              Napsat e-mail
            </a>
          </div>
          <ul className="st-prodejny-list">
            {prodejny.map((p, i) => (
              <li key={p.mesto} className={i === 0 ? "st-prodejna st-prodejna-hlavni" : "st-prodejna"}>
                <span className="st-prodejna-mesto">{p.mesto}</span>
                <a href={`tel:+420${p.tel.replace(/ /g, "")}`}>{p.tel}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

const prodejny = [
  { mesto: "Ústí nad Labem", ulice: "hlavní sklad a prodejna", tel: "604 290 771" },
  { mesto: "Lovosice", ulice: "Třebenická 4", tel: "604 290 771" },
  { mesto: "Teplice", ulice: "prodejna stavebnin", tel: "604 290 771" },
  { mesto: "Bílina", ulice: "prodejna stavebnin", tel: "604 290 771" },
  { mesto: "Roudnice nad Labem", ulice: "prodejna stavebnin", tel: "604 290 771" },
  { mesto: "Libochovice", ulice: "prodejna stavebnin", tel: "604 290 771" },
  { mesto: "Rakovník", ulice: "prodejna stavebnin", tel: "604 290 771" },
];

const sortiment = [
  {
    nazev: "Zdící materiál",
    popis: "Cihly, tvárnice, pórobeton i vápenopísek. Na paletách, skladem, s dopravou na stavbu.",
  },
  {
    nazev: "Betonové výrobky",
    popis: "Ztracené bednění, překlady, stropní vložky, skruže. Přesně to, co zedník potřebuje mít po ruce.",
  },
  {
    nazev: "Střešní krytina",
    popis: "Tašky betonové i pálené, plechové krytiny, latě a fólie — celá střecha z jednoho místa.",
  },
  {
    nazev: "Omítky a malty",
    popis: "Pytlované směsi, lepidla, štuky. Volně ložené i po paletách, míchačku vám půjčíme.",
  },
  {
    nazev: "Tepelná izolace",
    popis: "Polystyren, minerální vata, fasádní systémy. Poradíme s tloušťkou i kotvením.",
  },
  {
    nazev: "Ocel a stavební železo",
    popis: "Roxory, kari sítě, profily. Nastříháme na míru, ať netaháte šestimetrové tyče zbytečně.",
  },
  {
    nazev: "Dlažba a obklady",
    popis: "Zámková dlažba, obrubníky, keramika do koupelny. Vzorky uvidíte přímo na prodejně.",
  },
  {
    nazev: "Komíny",
    popis: "Komínové systémy včetně příslušenství. Spočítáme sestavu podle projektu.",
  },
  {
    nazev: "Stavební chemie a nářadí",
    popis: "Penetrace, hydroizolace, kotvy, ruční i elektrické nářadí. Drobnosti, bez kterých se stavba zastaví.",
  },
];

const sluzby = [
  {
    nazev: "Doprava s hydraulickou rukou",
    popis:
      "Palety složíme přímo na vaší stavbě — na dvůr, k základové desce, kam řeknete. Vozíme po celém Ústecku, obvykle do druhého dne.",
  },
  {
    nazev: "Velkoobchod pro firmy s IČ",
    popis:
      "Stavební firmy a řemeslníci u nás nakupují na velkoobchodní ceník a na fakturu. Registrace zabere pět minut, stačí IČ.",
  },
  {
    nazev: "Poradíme u pultu, ne z callcentra",
    popis:
      "Za pultem u nás stojí lidé, kteří stavebninám rozumí. Přijďte s projektem nebo jen s náčrtem — spočítáme materiál a navrhneme, co se kde vyplatí.",
  },
  {
    nazev: "Kvalita podle ISO 9001",
    popis:
      "Jsme certifikovaní podle ISO 9001. Co objednáte, to dostanete — ve správném množství, ve správný den, s dokladem v pořádku.",
  },
];

export default function Page() {
  return (
    <main className="st-main">
      {/* ===== HERO ===== */}
      <header className="st-hero">
        <div className="st-hero-top">
          <span className="st-wordmark">
            STA<span className="st-wordmark-joint">•</span>MA
            <span className="st-wordmark-sub">stavebniny · a.s.</span>
          </span>
          <a className="st-hero-tel" href="tel:+420604290771">
            604 290 771
          </a>
        </div>

        <div className="st-hero-body">
          <p className="st-hero-eyebrow">Stavebniny pro Ústecko — od základů po hřeben</p>
          <h1 className="st-hero-title">
            <span className="st-row st-row-1">Cihla</span>
            <span className="st-row st-row-2">na cihlu,</span>
            <span className="st-row st-row-3">paleta</span>
            <span className="st-row st-row-4">na stavbu.</span>
          </h1>
          <p className="st-hero-lead">
            Sedm prodejen mezi Ústím nad Labem a Rakovníkem. Zdivo, beton, střecha i izolace
            skladem — a auto s hydraulickou rukou, které to složí přímo u vás.
          </p>
          <div className="st-hero-actions">
            <a className="st-btn st-btn-solid" href="tel:+420604290771">
              Zavolat prodejnu
            </a>
            <a className="st-btn st-btn-line" href="#sortiment">
              Co vezeme skladem
            </a>
          </div>
        </div>

        {/* signature: běhounová vazba — zdivo z typografie */}
        <div className="st-bond" aria-hidden="true">
          <div className="st-bond-row">
            <span className="st-brick">ZDIVO</span>
            <span className="st-brick">BETON</span>
            <span className="st-brick">STŘECHA</span>
            <span className="st-brick">IZOLACE</span>
            <span className="st-brick">OCEL</span>
            <span className="st-brick">ZDIVO</span>
            <span className="st-brick">BETON</span>
          </div>
          <div className="st-bond-row st-bond-shift">
            <span className="st-brick">MALTA</span>
            <span className="st-brick">DLAŽBA</span>
            <span className="st-brick">KOMÍNY</span>
            <span className="st-brick">OKNA</span>
            <span className="st-brick">CHEMIE</span>
            <span className="st-brick">MALTA</span>
            <span className="st-brick">DLAŽBA</span>
          </div>
          <div className="st-bond-row">
            <span className="st-brick st-brick-accent">ÚSTÍ</span>
            <span className="st-brick">LOVOSICE</span>
            <span className="st-brick">TEPLICE</span>
            <span className="st-brick">BÍLINA</span>
            <span className="st-brick">ROUDNICE</span>
            <span className="st-brick">LIBOCHOVICE</span>
            <span className="st-brick">RAKOVNÍK</span>
          </div>
        </div>
      </header>

      {/* ===== SORTIMENT + SLUŽBY ===== */}
      <section className="st-section" id="sortiment">
        <div className="st-section-head">
          <h2 className="st-h2">Materiál na celou hrubou stavbu</h2>
          <p className="st-section-lead">
            Nemusíte objíždět pět dodavatelů. Od základové desky po střešní tašku naložíme
            všechno u nás — a co není skladem, objednáme obvykle do dvou dnů.
          </p>
        </div>

        <ul className="st-grid">
          {sortiment.map((s) => (
            <li className="st-card" key={s.nazev}>
              <h3 className="st-card-title">{s.nazev}</h3>
              <p className="st-card-text">{s.popis}</p>
            </li>
          ))}
        </ul>

        <div className="st-services">
          {sluzby.map((s) => (
            <article className="st-service" key={s.nazev}>
              <h3 className="st-service-title">{s.nazev}</h3>
              <p className="st-service-text">{s.popis}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== PRODEJNY / DŮVĚRA ===== */}
      <section className="st-section st-section-dark" id="prodejny">
        <div className="st-section-head">
          <h2 className="st-h2 st-h2-light">Sedm prodejen, jeden telefon</h2>
          <p className="st-section-lead st-lead-light">
            Stavíte v Ústí, v Lovosicích nebo až v Rakovníku? Vždycky to máte kousek.
            Zavolejte dopředu — připravíme materiál k naložení, ať nečekáte.
          </p>
        </div>

        <ul className="st-stores">
          {prodejny.map((p, i) => (
            <li className={"st-store" + (i === 0 ? " st-store-main" : "")} key={p.mesto}>
              <span className="st-store-city">{p.mesto}</span>
              <span className="st-store-note">{p.ulice}</span>
              <a className="st-store-tel" href={"tel:+420" + p.tel.replace(/ /g, "")}>
                {p.tel}
              </a>
            </li>
          ))}
        </ul>

        <div className="st-trust">
          <p className="st-trust-item">
            <strong>Od roku 1992 na severu Čech.</strong> Stavební firmy z Ústecka u nás
            nakupují léta — protože materiál dorazí, když ho zedníci potřebují.
          </p>
          <p className="st-trust-item">
            <strong>Certifikace ISO 9001.</strong> Objednávky, doklady i reklamace vyřizujeme
            podle jasných pravidel. Bez dohadování.
          </p>
          <p className="st-trust-item">
            <strong>Otevírací doba, na kterou je spoleh.</strong> O svátcích a mimořádných
            změnách dáváme vědět dopředu na prodejnách i po telefonu.
          </p>
        </div>
      </section>
    </main>
  );
}

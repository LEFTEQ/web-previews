export default function Page() {
  const sluzby = [
    {
      nazev: "Dřevěné a masivní podlahy",
      popis:
        "Dub, jasan, ořech. Položíme masiv i vícevrstvé dřevo, povrch dokončíme olejem nebo lakem podle toho, jak místnost žije.",
      detail: "Pokládka lepením i na pero-drážku",
    },
    {
      nazev: "Vinyl a laminát",
      popis:
        "Zámkové i lepené vinylové dílce Wineo, laminátové podlahy Egger. Poradíme, kam se který povrch hodí — a kam ne.",
      detail: "Do kuchyní, předsíní i dětských pokojů",
    },
    {
      nazev: "Venkovní terasy RELAZZO",
      popis:
        "Terasová prkna z dřevoplastu k domu i k bazénu. Nekroutí se, nešednou a nemusíte je každé jaro natírat.",
      detail: "Včetně roštu a zakončovacích lišt",
    },
    {
      nazev: "Renovace a broušení",
      popis:
        "Staré parkety nebo vrzající schodiště nemusíte vyhazovat. Přebrousíme, vytmelíme a naolejujeme — podlaha vydrží další desítky let.",
      detail: "Renovace schodišť a parket",
    },
    {
      nazev: "Příprava podkladu",
      popis:
        "Nivelace, vyrovnání stěrkou, měření vlhkosti. Rovný a suchý podklad je polovina životnosti každé podlahy.",
      detail: "Bez něj nezačínáme",
    },
    {
      nazev: "Poradenství a zaměření",
      popis:
        "Přijedeme, změříme a řekneme na rovinu, co má smysl. Tabulku „kam jaká podlaha patří\u201c máme v hlavě po třiceti letech praxe.",
      detail: "Zaměření v Hradci Králové a okolí zdarma",
    },
  ];

  const kroky = [
    {
      krok: "Zaměření",
      text: "Přijedeme k vám, změříme místnosti a vlhkost podkladu. Hned na místě řekneme, co podlaha snese a co ne.",
    },
    {
      krok: "Výběr materiálu",
      text: "Vzorky vám ukážeme u vás doma, při vašem světle. Do koupelny neporadíme masiv a do ložnice studené PVC — i kdyby byly v akci.",
    },
    {
      krok: "Pokládka",
      text: "Pokládáme sami, nikoho si nenajímáme. Běžný byt zvládneme za dva až tři dny včetně lišt a přechodů.",
    },
    {
      krok: "Předání a péče",
      text: "Předáme čistou podlahu a napíšeme vám, čím ji ošetřovat. Když se za pár let ozvete kvůli přebroušení, přijedeme zas.",
    },
  ];

  return (
    <main className="hp">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-media" aria-hidden="true">
          <img
            src="/hero.webp"
            alt=""
            className="hero-img"
          />
          <div className="hero-shade" />
        </div>

        <div className="hero-inner">
          <div className="wordmark">
            <span className="wordmark-name">HLAVÁČ</span>
            <span className="wordmark-sub">podlahy · Hradec Králové</span>
          </div>

          <h1 className="hero-title">
            <span className="plank plank-1">Podlaha se</span>
            <span className="plank plank-2">pokládá jednou.</span>
            <span className="plank plank-3 plank-accent">Pořádně.</span>
          </h1>

          <p className="hero-lead">
            Dřevo, vinyl, laminát i venkovní terasy. Pokládáme podlahy v
            Hradci Králové a okolí — vlastníma rukama, bez subdodávek, od
            zaměření po poslední lištu.
          </p>

          <div className="hero-cta">
            <a href="tel:+420495000000" className="btn btn-solid">
              Zavolat: 495 000 000
            </a>
            <a href="#sluzby" className="btn btn-line">
              Co pokládáme
            </a>
          </div>

          <ul className="hero-facts" aria-label="Základní fakta o firmě">
            <li>
              <strong>30 let</strong> u podlah
            </li>
            <li>
              <strong>Vlastní parta</strong>, žádné subdodávky
            </li>
            <li>
              <strong>Zaměření zdarma</strong> v HK a okolí
            </li>
          </ul>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="eyebrow">Nabídka</p>
          <h2 id="sluzby-h">Od parket po terasu u bazénu</h2>
          <p className="section-lead">
            Každý povrch má svoje místo. Pod tabulkou „kam jaká podlaha
            patří\u201c si stojíme — proto vám některé materiály do některých
            místností prostě neprodáme.
          </p>
        </div>

        <div className="sluzby-grid">
          {sluzby.map((s) => (
            <article className="sluzba" key={s.nazev}>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <p className="sluzba-detail">{s.detail}</p>
            </article>
          ))}
        </div>

        <figure className="sluzby-figure">
          <img
            src="/section-1.webp"
            alt="Pokládka dřevěné podlahy — dílce se zaklapávají do zámku"
            className="figure-img"
          />
          <figcaption>
            Masivní vinyl Wineo DESIGNline: po pár metrech to dostanete do
            ruky. My už jich položili tisíce.
          </figcaption>
        </figure>
      </section>

      {/* ===== JAK PRACUJEME / DŮVĚRA ===== */}
      <section className="prace" aria-labelledby="prace-h">
        <div className="section-head">
          <p className="eyebrow">Jak to u nás chodí</p>
          <h2 id="prace-h">Čtyři kroky k hotové podlaze</h2>
        </div>

        <div className="prace-layout">
          <ol className="kroky">
            {kroky.map((k, i) => (
              <li className="krok" key={k.krok}>
                <span className="krok-cislo" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3>{k.krok}</h3>
                  <p>{k.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="prace-side">
            <figure className="prace-figure">
              <img
                src="/section-2.webp"
                alt="Hotová renovovaná dřevěná podlaha s olejovanou povrchovou úpravou"
                className="figure-img"
              />
              <figcaption>
                Renovované dubové parkety, povrch dokončený olejem.
              </figcaption>
            </figure>

            <blockquote className="reference">
              <p>
                „Pan Hlaváč nám rovnou řekl, že vinyl s filcem do chodby
                nechce pokládat — a vysvětlil proč. Za dva dny jsme měli
                novou podlahu v celém bytě a od té doby ho doporučuju.\u201c
              </p>
              <cite>— rodina Vachkova, Hradec Králové – Malšovice</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}

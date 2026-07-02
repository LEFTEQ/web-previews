export default function Page() {
  const sluzby = [
    {
      klic: "SVJ",
      nazev: "Správa pro SVJ",
      popis:
        "Vedeme účetnictví domu, připravujeme shromáždění, hlídáme fond oprav a vymáháme dlužné platby. Výbor od nás dostává přehledné podklady, ne hromadu papírů.",
      body: ["Účetnictví a vyúčtování služeb", "Příprava a vedení shromáždění", "Evidence vlastníků a předpisů"],
    },
    {
      klic: "BD",
      nazev: "Správa pro bytová družstva",
      popis:
        "Družstvo má jiná pravidla než SVJ — členské podíly, nájemné, převody bytů. Známe je a hlídáme, aby dům fungoval podle stanov i zákona.",
      body: ["Členská evidence a převody", "Předpisy nájemného a záloh", "Podklady pro představenstvo"],
    },
    {
      klic: "TECH",
      nazev: "Technický provoz domu",
      popis:
        "Revize výtahů, kotelen, hromosvodů i hasicích přístrojů hlídáme v termínech za vás. Havárii řešíme hned — máme ověřené řemeslníky z Plzně a okolí.",
      body: ["Plán revizí a jejich hlídání", "Havarijní služba a opravy", "Výběr dodavatelů a dozor"],
    },
    {
      klic: "BYTY",
      nazev: "Správa bytů a nájmů",
      popis:
        "Pronajímáte byt a nechcete řešit nájemníky? Převezmeme předání bytu, nájemní smlouvu, platby i drobné opravy. Vám chodí nájem, nám starosti.",
      body: ["Nájemní smlouvy a předávací protokoly", "Kontrola plateb a upomínky", "Zajištění oprav v bytě"],
    },
  ];

  const zasady = [
    {
      titulek: "Jedna správcová, jedno číslo",
      text:
        "Váš dům má u nás konkrétního člověka. Voláte Jaroslavě Šperlové na 777 588 081 — ne na anonymní linku, kde vás přepojují.",
    },
    {
      titulek: "Vyúčtování, kterému rozumíte",
      text:
        "Roční vyúčtování služeb posíláme včas a srozumitelně. Když něčemu nerozumíte, projdeme ho s vámi položku po položce.",
    },
    {
      titulek: "Peníze domu vidíte kdykoli",
      text:
        "Účet domu je váš, ne náš. Výbor má kdykoli přístup k výpisům a každý výdaj doložíme fakturou. Žádné skryté provize od dodavatelů.",
    },
    {
      titulek: "Známe plzeňské domy",
      text:
        "Panelák na Borech, činžák na Slovanech i novostavba na Vinicích — každý dům stárne jinak. Spravujeme domy tam, kam dojedeme do dvaceti minut.",
    },
  ];

  return (
    <main className="ad-main">
      {/* ===== HERO ===== */}
      <header className="ad-hero">
        <div className="ad-hero-top">
          <span className="ad-wordmark">
            ALL<span className="ad-wordmark-dom">dom</span>
            <span className="ad-wordmark-sub">správa nemovitostí · Plzeň</span>
          </span>
          <a className="ad-hero-tel" href="tel:+420777588081">
            +420 777 588 081
          </a>
        </div>

        <div className="ad-hero-grid">
          <div className="ad-hero-text">
            <p className="ad-hero-eyebrow">Pro SVJ, družstva a majitele bytů v Plzni</p>
            <h1 className="ad-hero-title">
              <span className="ad-line ad-line-1">Váš dům.</span>
              <span className="ad-line ad-line-2">Naše starost.</span>
            </h1>
            <p className="ad-hero-lead">
              Účetnictví, revize, havárie i shromáždění vlastníků — všechno, co dům potřebuje,
              na jednom místě a s jedním telefonním číslem. Spravujeme domy v Plzni a okolí.
            </p>
            <div className="ad-hero-cta">
              <a className="ad-btn" href="tel:+420777588081">
                Zavolat správcové
              </a>
              <a className="ad-btn ad-btn-ghost" href="mailto:info@alldom.cz">
                Napsat e‑mail
              </a>
            </div>
          </div>

          {/* Signature: fasáda panelového domu z okének — po načtení se „rozsvěcí“ */}
          <div className="ad-facade" aria-hidden="true">
            <div className="ad-facade-roof" />
            <div className="ad-facade-windows">
              {Array.from({ length: 48 }).map((_, i) => (
                <span
                  key={i}
                  className={`ad-okno${[2, 7, 11, 16, 21, 26, 30, 35, 41, 44].includes(i) ? " ad-okno-lit" : ""}`}
                  style={{ animationDelay: `${0.9 + (i % 12) * 0.06 + Math.floor(i / 12) * 0.12}s` }}
                />
              ))}
            </div>
            <div className="ad-facade-door" />
          </div>
        </div>

        <div className="ad-hero-strip">
          <span>Karafiátová 727/7, Plzeň</span>
          <span className="ad-strip-dot">●</span>
          <span>Jaroslava Šperlová, jednatelka</span>
          <span className="ad-strip-dot">●</span>
          <span>info@alldom.cz</span>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="ad-sluzby" aria-labelledby="sluzby-h">
        <div className="ad-section-head">
          <h2 id="sluzby-h">Co pro váš dům děláme</h2>
          <p>
            Každý dům dostane vlastní smlouvu podle toho, co skutečně potřebuje.
            Neplatíte za služby, které nevyužijete.
          </p>
        </div>
        <div className="ad-sluzby-grid">
          {sluzby.map((s) => (
            <article className="ad-karta" key={s.klic}>
              <span className="ad-karta-klic">{s.klic}</span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <ul>
                {s.body.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="ad-duvera" aria-labelledby="duvera-h">
        <div className="ad-duvera-inner">
          <div className="ad-duvera-head">
            <h2 id="duvera-h">Proč nám výbory domů věří</h2>
            <p>
              Správa domu je hlavně o důvěře — spravujeme cizí peníze a cizí majetek.
              Proto pracujeme takhle:
            </p>
          </div>
          <ol className="ad-zasady">
            {zasady.map((z, i) => (
              <li className="ad-zasada" key={z.titulek}>
                <span className="ad-zasada-okno" aria-hidden="true" />
                <h3>{z.titulek}</h3>
                <p>{z.text}</p>
              </li>
            ))}
          </ol>
          <blockquote className="ad-citace">
            <p>
              „Předchozí správce nám tři roky neposlal jediný srozumitelný výkaz. Paní Šperlová nám
              první měsíc dala do pořádku fond oprav a od té doby víme o každé koruně.“
            </p>
            <footer>— předseda výboru SVJ, Plzeň‑Slovany</footer>
          </blockquote>
        </div>
      </section>
    </main>
  );
}

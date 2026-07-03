export default function Page() {
  const vyskove = [
    {
      name: "Nátěry a opravy fasád",
      desc: "Od lokálních oprav omítky po celoplošný nátěr. Pracujeme z lan, bez lešení — rychleji a levněji.",
    },
    {
      name: "Nátěry a rekonstrukce střech",
      desc: "Ploché i šikmé střechy: lokální opravy, nátěry, výměna krytiny, izolace a zateplení.",
    },
    {
      name: "Ochrana budov před ptactvem",
      desc: "Sítě, hrotové zábrany, siluety dravců i elektronické plašiče. Opravíme i fasádu, kterou ptáci poškodili.",
    },
    {
      name: "Mytí oken výškových budov",
      desc: "Čištění oken a prosklených fasád tam, kam se plošina nedostane. Reference: Pavilon P, BVV Brno.",
    },
    {
      name: "Montáž a malba reklam",
      desc: "Instalace bannerů, plachet a poutačů ve výškách, malované reklamy na štítech domů.",
    },
    {
      name: "Odklízení sněhu ze střech",
      desc: "Sezónní SOS pohotovost. Sníh a led ze střech, říms a těžko přístupných míst — než něco spadne.",
    },
  ];

  const stavebni = [
    {
      name: "Rekonstrukce balkonů a teras",
      desc: "Napravujeme zatékání, degradaci konstrukce a odlupující se dlažbu. Nová skladba, izolace, spádování.",
    },
    {
      name: "Reprofilace a sanace betonu",
      desc: "Obnova nosnosti a povrchu betonových desek, zábradlí a konstrukcí sanačními systémy.",
    },
    {
      name: "Zateplení domů a fasád",
      desc: "Kompletní zateplovací systémy pro rodinné i bytové domy. Odborný dodavatel programu Zelená úsporám.",
    },
    {
      name: "Dřevěný šindel",
      desc: "Pokrývání a opravy střech dřevěným šindelem — řemeslo, které dnes umí málokdo.",
    },
  ];

  const reference = [
    { where: "Brno — Vlčnovská", what: "Oprava balkonů, betonových desek a zábradlí" },
    { where: "Brno — Banskobystrická", what: "Rekonstrukce ploché střechy" },
    { where: "BVV Brno — Pavilon P", what: "Mytí oken z lan, výškové práce" },
    { where: "Brno — Renneská", what: "Montáž sítí proti ptactvu" },
    { where: "Brno — Mojmírovo náměstí", what: "Rekonstrukce balkonů a teras pro SVJ" },
    { where: "Kuřim — RD", what: "Rekonstrukce balkonu a betonové terasy" },
    { where: "Židlochovice — RD", what: "Rekonstrukce venkovních ploch a teras" },
    { where: "Brno — Bohuslava Martinů", what: "Oprava fasády rodinného domu" },
  ];

  return (
    <main className="fx">
      {/* ================= HERO ================= */}
      <section className="hero" aria-label="FLEXISTAV — výškové a stavební práce v Brně">
        <div className="hero-rope" aria-hidden="true">
          <span className="rope-line" />
          <span className="rope-knot k1" />
          <span className="rope-knot k2" />
          <span className="rope-knot k3" />
          <span className="rope-karabina" />
        </div>

        <header className="hero-top">
          <div className="wordmark">
            <span className="wm-flexi">FLEXI</span>
            <span className="wm-stav">STAV</span>
          </div>
          <p className="hero-loc">Stavební 5, Brno · 603 547 598</p>
        </header>

        <div className="hero-body">
          <p className="hero-eyebrow">Štukatérské, výškové a stavební práce · Brno a jižní Morava</p>
          <h1 className="hero-title">
            <span className="ht-line ht-1">Fasádu vám</span>
            <span className="ht-line ht-2">opravíme</span>
            <span className="ht-line ht-3">
              <em>z&nbsp;lana.</em>
            </span>
          </h1>
          <p className="hero-sub">
            Kde nestačí lešení, slaníme se. Vlastní parta kvalifikovaných výškových
            pracovníků — každý ovládá lana <strong>i&nbsp;své řemeslo</strong>: štuky,
            nátěry, střechy, beton.
          </p>

          <div className="hero-facts" role="list">
            <div className="fact" role="listitem">
              <span className="fact-num">Brno</span>
              <span className="fact-label">a celá jižní Morava</span>
            </div>
            <div className="fact" role="listitem">
              <span className="fact-num">Bez lešení</span>
              <span className="fact-label">práce z lan = nižší cena</span>
            </div>
            <div className="fact" role="listitem">
              <span className="fact-num">SOS</span>
              <span className="fact-label">zimní pohotovost — sníh ze střech</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SLUŽBY ================= */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <h2 id="sluzby-h">Co pro vás uděláme</h2>
          <p>
            Dvě party, jedno telefonní číslo: výškaři na laně a zedníci na zemi.
            Většinu zakázek zvládneme vlastními lidmi, bez subdodávek.
          </p>
        </div>

        <div className="sluzby-grid">
          <div className="sluzby-col">
            <h3 className="col-title">
              <span className="col-mark col-mark--rope" aria-hidden="true" />
              Na laně
            </h3>
            <ul className="sluzby-list">
              {vyskove.map((s) => (
                <li key={s.name} className="sluzba">
                  <h4>{s.name}</h4>
                  <p>{s.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="sluzby-col">
            <h3 className="col-title">
              <span className="col-mark col-mark--zem" aria-hidden="true" />
              Na zemi
            </h3>
            <ul className="sluzby-list">
              {stavebni.map((s) => (
                <li key={s.name} className="sluzba">
                  <h4>{s.name}</h4>
                  <p>{s.desc}</p>
                </li>
              ))}
            </ul>

            <aside className="zelena">
              <p>
                <strong>Zelená úsporám.</strong> Jsme odborný dodavatel programu —
                na zateplení domu vám pomůžeme získat dotaci.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* ================= REFERENCE ================= */}
      <section className="refs" aria-labelledby="refs-h">
        <div className="section-head section-head--light">
          <h2 id="refs-h">Poznáte nás po fasádách</h2>
          <p>
            Projděte se Brnem — na těchhle adresách jsme viseli. Rádi vám dáme
            kontakt na správce domu, ať se zeptáte přímo.
          </p>
        </div>

        <ul className="refs-list">
          {reference.map((r) => (
            <li key={r.where + r.what} className="ref">
              <span className="ref-where">{r.where}</span>
              <span className="ref-what">{r.what}</span>
            </li>
          ))}
        </ul>

        <p className="refs-note">
          Voláte kvůli zatékajícímu balkonu, poškozené fasádě nebo sněhu na střeše?
          Přijedeme se podívat a řekneme rovnou, co to obnáší:{" "}
          <a className="refs-tel" href="tel:+420603547598">
            603&nbsp;547&nbsp;598
          </a>
        </p>
      </section>
    </main>
  );
}

export default function Page() {
  const sluzby = [
    {
      kod: "ZEM",
      nazev: "Výkopové a zemní práce",
      popis:
        "Výkopy pro základy, přípojky, drenáže a bazény. Přijedeme s vlastní technikou, výkop zaměříme, vykopeme a zemину odvezeme nebo rozprostřeme podle domluvy.",
      polozky: ["Základové pasy a desky", "Rýhy pro přípojky vody a kanalizace", "Drenáže kolem domu", "Terénní úpravy pozemku"],
    },
    {
      kod: "VOD",
      nazev: "Hospodaření s dešťovou vodou",
      popis:
        "Montáž vsakovacích boxů, dešťových nádrží a přepadů. Dešťovku ze střechy svedeme do nádrže na zalévání a přebytek necháme vsáknout na vašem pozemku — bez louží u domu.",
      polozky: ["Vsakovací boxy a galerie", "Podzemní nádrže na dešťovku", "Přepady a bezpečnostní odtoky", "Napojení okapů a svodů"],
    },
    {
      kod: "INS",
      nazev: "Instalatérské práce",
      popis:
        "Rozvody vody a kanalizace v novostavbách i při rekonstrukcích. Od přípojky na hranici pozemku po funkční kohoutek v kuchyni — vše jedna parta, jedna odpovědnost.",
      polozky: ["Vodovodní a kanalizační přípojky", "Rozvody vody v domě", "Odpady a lapače", "Tlakové zkoušky a revize"],
    },
    {
      kod: "PRO",
      nazev: "Projekční činnost",
      popis:
        "Než kopneme, nakreslíme. Připravíme projektovou dokumentaci pro přípojky a vsakování včetně podkladů pro úřady, takže stavbu nezdrží papírování.",
      polozky: ["Dokumentace přípojek", "Návrh vsakovacího systému", "Podklady pro stavební úřad", "Zaměření a konzultace na místě"],
    },
  ];

  const duvody = [
    {
      titul: "Rodinná firma, ne anonymní parta",
      text: "Na stavbě potkáte ty samé lidi od první schůzky po předání. Domluvíte se přímo s tím, kdo bude práci dělat — žádný dispečink, žádné přeprodávání zakázky.",
    },
    {
      titul: "Od projektu po zásyp",
      text: "Nakreslíme, vykopeme, položíme, napojíme a zasypeme. Nemusíte shánět projektanta, bagristu a instalatéra zvlášť — všechno na sebe navazuje bez čekání.",
    },
    {
      titul: "Hradec Králové a okolí",
      text: "Jezdíme po Hradci a do zhruba 30 km — Pardubice, Jaroměř, Nový Bydžov, Třebechovice. Na obhlídku dorazíme obvykle do týdne, cenu řekneme na rovinu předem.",
    },
  ];

  const postup = [
    { krok: "Obhlídka", text: "Přijedeme na místo, změříme, poradíme. Zdarma a nezávazně." },
    { krok: "Nabídka", text: "Do pár dní pošleme rozpočet po položkách. Cena platí." },
    { krok: "Realizace", text: "Kopeme, pokládáme, napojujeme. Průběžně vás informujeme." },
    { krok: "Předání", text: "Uklidíme po sobě, předáme dokumentaci a zkoušky." },
  ];

  return (
    <main className="kp">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-inner">
          <div className="topbar">
            <div className="wordmark" aria-label="T plus T Kopstav">
              <span className="wm-tt">T+T</span>
              <span className="wm-kop">KOPSTAV</span>
            </div>
            <a className="topbar-tel" href="tel:+420724044809">
              +420 724 044 809
            </a>
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hero-eyebrow">
                Zemní práce · voda · kanalizace — Hradec Králové
              </p>
              <h1 className="hero-title">
                <span className="ht-line ht-1">Vykopeme,</span>
                <span className="ht-line ht-2">položíme,</span>
                <span className="ht-line ht-3">
                  napojíme<span className="ht-dot">.</span>
                </span>
              </h1>
              <p className="hero-sub">
                Rodinná stavební firma pro výkopy, přípojky, dešťovou vodu a
                instalatérské práce. Od projektu po zásyp — jedna parta, jedno
                telefonní číslo.
              </p>
              <div className="hero-cta">
                <a className="btn btn-solid" href="tel:+420724044809">
                  Zavolat: 724 044 809
                </a>
                <a className="btn btn-ghost" href="mailto:ttkopstavsro@gmail.com">
                  Napsat e‑mail
                </a>
              </div>
            </div>

            {/* Signature: řez výkopem — vrstvy zeminy s uloženým potrubím a vsakem */}
            <div className="cut" aria-hidden="true">
              <div className="cut-layer cut-topsoil">
                <span className="cut-label">ornice · 30 cm</span>
              </div>
              <div className="cut-layer cut-subsoil">
                <span className="cut-label">podloží</span>
              </div>
              <div className="cut-layer cut-sand">
                <span className="cut-label">pískové lože · 10 cm</span>
                <span className="cut-pipe">
                  <span className="cut-pipe-bore" />
                </span>
              </div>
              <div className="cut-layer cut-gravel">
                <span className="cut-label">vsakovací boxy</span>
                <span className="cut-boxes">
                  <i />
                  <i />
                  <i />
                </span>
              </div>
              <div className="cut-depth">
                <span>0,0 m</span>
                <span>−0,8 m</span>
                <span>−1,5 m</span>
                <span>−2,2 m</span>
              </div>
            </div>
          </div>

          <div className="hero-strip" aria-hidden="true">
            <span>VÝKOPY</span>
            <span className="strip-dot">●</span>
            <span>PŘÍPOJKY</span>
            <span className="strip-dot">●</span>
            <span>VSAKOVÁNÍ</span>
            <span className="strip-dot">●</span>
            <span>DEŠŤOVÉ NÁDRŽE</span>
            <span className="strip-dot">●</span>
            <span>INSTALATÉRSTVÍ</span>
            <span className="strip-dot">●</span>
            <span>PROJEKCE</span>
          </div>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-inner">
          <div className="section-head">
            <p className="eyebrow">Co pro vás uděláme</p>
            <h2 id="sluzby-h">
              Čtyři řemesla, která na stavbě{" "}
              <em>na sebe navazují</em>
            </h2>
          </div>

          <div className="sluzby-grid">
            {sluzby.map((s) => (
              <article className="sluzba" key={s.kod}>
                <div className="sluzba-head">
                  <span className="sluzba-kod">{s.kod}</span>
                  <h3>{s.nazev}</h3>
                </div>
                <p className="sluzba-popis">{s.popis}</p>
                <ul className="sluzba-list">
                  {s.polozky.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DŮVĚRA / JAK PRACUJEME ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="section-inner">
          <div className="section-head">
            <p className="eyebrow eyebrow-light">Proč T+T Kopstav</p>
            <h2 id="duvera-h">
              Malá firma z Hradce, která drží slovo{" "}
              <em>i termín</em>
            </h2>
          </div>

          <div className="duvera-grid">
            {duvody.map((d) => (
              <div className="duvod" key={d.titul}>
                <h3>{d.titul}</h3>
                <p>{d.text}</p>
              </div>
            ))}
          </div>

          <div className="postup" role="list" aria-label="Jak zakázka probíhá">
            {postup.map((p, i) => (
              <div className="postup-krok" role="listitem" key={p.krok}>
                <span className="postup-num">{i + 1}</span>
                <div>
                  <h4>{p.krok}</h4>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="duvera-note">
            T+T KOPSTAV s.r.o. · Hradec Králové ·{" "}
            <a href="tel:+420724044809">724 044 809</a> ·{" "}
            <a href="mailto:ttkopstavsro@gmail.com">ttkopstavsro@gmail.com</a>
          </p>
        </div>
      </section>
    </main>
  );
}

export default function Page() {
  const zajezdy = [
    {
      smer: "JIH",
      azimut: "180°",
      title: "Letní moře autobusem",
      dest: "Chorvatsko · Itálie · Černá Hora",
      text: "Odjezd přímo z Ústí nad Labem, ze zastávky u Mírového náměstí. Žádné noční přejezdy do Prahy na svoz — nastoupíte doma, vystoupíte u moře.",
      detail: "8–12 dní · polopenze · od 9 990 Kč",
    },
    {
      smer: "JV",
      azimut: "135°",
      title: "Letecky za sluncem",
      dest: "Řecko · Turecko · Egypt · Bulharsko",
      text: "Charterové lety z Prahy a Drážďan — do obou letišť to máte z Ústí pod hodinu. Transfer na letiště umíme zajistit k zájezdu.",
      detail: "7–14 dní · all inclusive · od 14 490 Kč",
    },
    {
      smer: "SEVER",
      azimut: "0°",
      title: "Poznávací výpravy na sever",
      dest: "Norsko · Island · Pobaltí · Skotsko",
      text: "Naše specialita a důvod, proč se jmenujeme Sever Plus. Fjordy, polární záře a trasy, které jsme sami projeli — ne převzaté z katalogu.",
      detail: "6–10 dní · s průvodcem · od 19 900 Kč",
    },
    {
      smer: "OKOLÍ",
      azimut: "360°",
      title: "Jednodenní výlety a lázně",
      dest: "Saské Švýcarsko · Drážďany · Teplice",
      text: "Adventní trhy, Bastei, termály. Ideální pro seniory, školy i firmy — ráno odjezd, večer doma. Skupinám ušijeme trasu na míru.",
      detail: "1 den · doprava + průvodce · od 590 Kč",
    },
  ];

  const duvody = [
    {
      num: "27 let",
      label: "na jedné adrese",
      text: "Cestovní kancelář vedeme v Ústí nad Labem od roku 1998. Nejsme anonymní web — jsme kancelář, do které můžete kdykoli přijít a zeptat se.",
    },
    {
      num: "100 %",
      label: "pojištění proti úpadku",
      text: "Jsme pojištěni podle zákona č. 159/1999 Sb. Vaše záloha je v bezpečí, i kdyby se cokoli stalo. Doklad o pojištění vám ukážeme na požádání.",
    },
    {
      num: "1 člověk",
      label: "od poptávky po návrat",
      text: "Zájezd s vámi řeší pořád tentýž pracovník. Zná vaši rezervaci nazpaměť a zvedne telefon i večer před odletem, když si nejste jistí kufrem.",
    },
  ];

  const reference = [
    {
      text: "Autobus na Makarskou odjížděl od nás z Ústí a řidiči byli zlatí. Jezdíme se Sever Plus pátým rokem a vždycky to sedlo do puntíku.",
      autor: "Marie K., Ústí nad Labem — Střekov",
    },
    {
      text: "Norské fjordy s jejich průvodcem byly zážitek na celý život. Bylo vidět, že tam nejede poprvé — znal místa, která v žádném katalogu nejsou.",
      autor: "Petr a Jana H., Teplice",
    },
    {
      text: "Pro náš klub seniorů domlouváme výlety už léta. Paní v kanceláři si pamatuje, kdo špatně chodí, a podle toho vybírá hotely. To jinde nezažijete.",
      autor: "Klub seniorů Krásné Březno",
    },
  ];

  return (
    <main className="sp">
      {/* ===================== HERO ===================== */}
      <section className="sp-hero" aria-label="Cestovní kancelář Sever Plus, Ústí nad Labem">
        <div className="sp-hero-inner">
          <header className="sp-topbar">
            <span className="sp-wordmark">
              <svg className="sp-wm-needle" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <polygon points="12,1 16,12 12,23 8,12" />
                <polygon className="sp-wm-needle-n" points="12,1 16,12 12,12 8,12" />
              </svg>
              SEVER<em>PLUS</em>
            </span>
            <span className="sp-topbar-note">Cestovní kancelář · Ústí nad Labem · od 1998</span>
          </header>

          <div className="sp-hero-grid">
            <div className="sp-hero-copy">
              <p className="sp-eyebrow">
                <span className="sp-eyebrow-deg">50.66° s. š.</span> — odsud vyrážíme
              </p>
              <h1 className="sp-h1">
                <span className="sp-h1-line sp-h1-a">Váš sever</span>
                <span className="sp-h1-line sp-h1-b">je v Ústí.</span>
                <span className="sp-h1-line sp-h1-c">Zbytek světa domluvíme.</span>
              </h1>
              <p className="sp-lead">
                Autobusem k Jadranu, letecky do Řecka, s průvodcem za polární záři.
                Zájezdy plánujeme z kanceláře na Mírovém náměstí — a odjezdy začínají tady, ne v Praze.
              </p>
              <div className="sp-hero-actions">
                <a className="sp-btn sp-btn-solid" href="#zajezdy">Prohlédnout zájezdy</a>
                <a className="sp-btn sp-btn-ghost" href="#duvera">Proč s námi</a>
              </div>
            </div>

            {/* Signature: kompasová růžice s vychýlenou střelkou k severu */}
            <div className="sp-compass" aria-hidden="true">
              <svg viewBox="0 0 360 360" className="sp-compass-svg">
                <circle cx="180" cy="180" r="172" className="sp-c-ring" />
                <circle cx="180" cy="180" r="128" className="sp-c-ring sp-c-ring-dash" />
                <circle cx="180" cy="180" r="84" className="sp-c-ring" />
                {/* tick marks */}
                <g className="sp-c-ticks">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <line
                      key={i}
                      x1="180" y1="12" x2="180" y2={i % 9 === 0 ? "34" : "22"}
                      transform={`rotate(${i * 10} 180 180)`}
                    />
                  ))}
                </g>
                <text x="180" y="62" className="sp-c-label sp-c-label-n" textAnchor="middle">S</text>
                <text x="304" y="186" className="sp-c-label" textAnchor="middle">V</text>
                <text x="180" y="312" className="sp-c-label" textAnchor="middle">J</text>
                <text x="56" y="186" className="sp-c-label" textAnchor="middle">Z</text>
                {/* needle */}
                <g className="sp-c-needle">
                  <polygon points="180,52 196,180 180,308 164,180" className="sp-c-needle-s" />
                  <polygon points="180,52 196,180 164,180" className="sp-c-needle-n" />
                  <circle cx="180" cy="180" r="10" className="sp-c-hub" />
                </g>
                <text x="180" y="246" textAnchor="middle" className="sp-c-coord">50.6607 N · 14.0322 E</text>
              </svg>
            </div>
          </div>

          <p className="sp-hero-strip" aria-hidden="true">
            ÚSTÍ N. L. · 0 km &nbsp;→&nbsp; DRÁŽĎANY · 63 km &nbsp;→&nbsp; SPLIT · 1 180 km &nbsp;→&nbsp; RHODOS · 2 260 km &nbsp;→&nbsp; BERGEN · 1 290 km &nbsp;→&nbsp; REYKJAVÍK · 2 570 km
          </p>
        </div>
      </section>

      {/* ===================== ZÁJEZDY ===================== */}
      <section className="sp-section" id="zajezdy" aria-labelledby="zajezdy-h">
        <div className="sp-container">
          <div className="sp-section-head">
            <p className="sp-eyebrow">Kam s námi</p>
            <h2 className="sp-h2" id="zajezdy-h">Čtyři směry, jedna kancelář</h2>
            <p className="sp-section-lead">
              Nabídku držíme malou a osobně prověřenou. Každý hotel v katalogu někdo od nás viděl na vlastní oči.
            </p>
          </div>

          <div className="sp-cards">
            {zajezdy.map((z) => (
              <article className="sp-card" key={z.smer}>
                <div className="sp-card-head">
                  <span className="sp-card-dir">{z.smer}</span>
                  <span className="sp-card-deg">{z.azimut}</span>
                </div>
                <h3 className="sp-card-title">{z.title}</h3>
                <p className="sp-card-dest">{z.dest}</p>
                <p className="sp-card-text">{z.text}</p>
                <p className="sp-card-detail">{z.detail}</p>
              </article>
            ))}
          </div>

          <p className="sp-note">
            Nenašli jste svůj směr? Zavolejte do kanceláře — jako autorizovaný prodejce nabízíme i zájezdy
            ověřených českých pořadatelů, za stejnou cenu jako u nich.
          </p>
        </div>
      </section>

      {/* ===================== DŮVĚRA ===================== */}
      <section className="sp-section sp-section-dark" id="duvera" aria-labelledby="duvera-h">
        <div className="sp-container">
          <div className="sp-section-head">
            <p className="sp-eyebrow sp-eyebrow-light">Proč Sever Plus</p>
            <h2 className="sp-h2" id="duvera-h">Kancelář, kam se chodí osobně</h2>
          </div>

          <div className="sp-facts">
            {duvody.map((d) => (
              <div className="sp-fact" key={d.label}>
                <p className="sp-fact-num">{d.num}</p>
                <p className="sp-fact-label">{d.label}</p>
                <p className="sp-fact-text">{d.text}</p>
              </div>
            ))}
          </div>

          <div className="sp-quotes">
            <h3 className="sp-quotes-h">Co říkají cestovatelé z Ústecka</h3>
            <div className="sp-quotes-grid">
              {reference.map((r) => (
                <figure className="sp-quote" key={r.autor}>
                  <blockquote>
                    <p>„{r.text}“</p>
                  </blockquote>
                  <figcaption>{r.autor}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

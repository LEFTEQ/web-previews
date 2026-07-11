import React from "react";

export default function Page() {
  const hodiny = [
    { den: "Pondělí", cas: "07:00–21:00", dnes: false },
    { den: "Úterý", cas: "07:00–21:00", dnes: false },
    { den: "Středa", cas: "07:00–21:00", dnes: false },
    { den: "Čtvrtek", cas: "07:00–21:00", dnes: false },
    { den: "Pátek", cas: "07:00–21:00", dnes: false },
    { den: "Sobota", cas: "08:00–21:00", dnes: true },
    { den: "Neděle", cas: "08:00–21:00", dnes: false },
  ];

  const sluzby = [
    {
      nazev: "Péče o zdraví a výživu",
      popis:
        "Rozšířený sortiment doplňků stravy a péče o pleť — Ziaja, Dermacol, Aknelot, Dr. Pawpaw, Geek & Gorgeous. Poradíme, co na suchou pleť i na akné.",
    },
    {
      nazev: "Rozšířená dekorativní kosmetika",
      popis:
        "NYX Professional Makeup, miss sporty a péče o nehty Sally Hansen i Essie. Vyzkoušíte přímo na místě, než se rozhodnete.",
    },
    {
      nazev: "Zdravá výživa a Alpro",
      popis:
        "Potraviny a rostlinné alternativy značky Alpro v rozšířeném výběru. Bezlaktózové i veganské varianty na jednom místě.",
    },
    {
      nazev: "Expresní vyzvednutí do 60 minut",
      popis:
        "Objednáte online, vyzvednete v Auparku. Pro přihlášené zákazníky zdarma, bez čekání ve frontě.",
    },
    {
      nazev: "Plnicí stanice a Scan&Go",
      popis:
        "Doplňte si oblíbenou drogerii do vlastního obalu. Naskenujte zboží telefonem a projděte bez pokladny.",
    },
    {
      nazev: "Balicí pult, Wi-Fi, hrací koutek",
      popis:
        "Bezbariérový přístup, dětský koutek i bezplatná Wi-Fi. Zabalíme dárek, počkáte v pohodlí.",
    },
  ];

  const okoli = [
    { adresa: "Dukelská třída 1713/7", psc: "500 02 Hradec Králové", km: "511 m" },
    { adresa: "Akademika Bedrny 383/10a", psc: "500 03 Hradec Králové", km: "1,63 km" },
    { adresa: "Rašínova třída 1669", psc: "500 02 Hradec Králové", km: "2,71 km" },
    { adresa: "Brněnská 1825/23a", psc: "500 09 Hradec Králové", km: "3,16 km" },
  ];

  return (
    <main className="dm">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="dm drogerie markt">
          <span className="wordmark__dm">dm</span>
          <span className="wordmark__sub">lékárna &amp; drogerie</span>
        </a>
        <span className="topbar__place">Aupark · Hradec Králové</span>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Prodejna dm drogerie markt v Aupark Shopping Center v Hradci Králové"
            className="hero__img"
          />
          <div className="hero__scrim" aria-hidden="true" />
        </div>

        <div className="hero__panel">
          <p className="hero__eyebrow">Otevřeno dnes · 08:00–21:00</p>
          <h1 id="hero-title" className="hero__title">
            Vaše dm<br />
            v <span className="hero__hl">Auparku</span>
          </h1>
          <p className="hero__addr">
            Gočárova třída 1754/48a · Aupark Shopping Center · 500&nbsp;02 Hradec
            Králové
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="tel:+420491424161">
              Zavolat na prodejnu
            </a>
            <a
              className="btn btn--ghost"
              href="https://mapy.cz/zakladni?q=Go%C4%8D%C3%A1rova%20t%C5%99%C3%ADda%201754/48a%20Hradec%20Kr%C3%A1lov%C3%A9"
            >
              Navigovat do Auparku
            </a>
          </div>
          <p className="hero__verify">Otevírací dobu jsme ověřili dnes ráno.</p>
        </div>
      </section>

      <section className="hours" aria-labelledby="hours-title">
        <div className="hours__head">
          <h2 id="hours-title" className="section__title">Otevírací doba</h2>
          <p className="section__lead">
            Celý týden do devíti večer. Ve všední dny otevíráme už v sedm ráno.
          </p>
        </div>
        <ul className="hours__grid">
          {hodiny.map((h) => (
            <li
              key={h.den}
              className={"hours__row" + (h.dnes ? " hours__row--now" : "")}
            >
              <span className="hours__day">{h.den}</span>
              <span className="hours__time">{h.cas}</span>
              {h.dnes ? <span className="hours__badge">dnes</span> : null}
            </li>
          ))}
        </ul>
      </section>

      <section className="services" aria-labelledby="services-title">
        <div className="services__intro">
          <p className="eyebrow">Co u nás v Auparku najdete</p>
          <h2 id="services-title" className="section__title">
            Víc než běžná drogerie
          </h2>
          <img
            src="/section-1.webp"
            alt="Regály s kosmetikou a péčí o pleť v prodejně dm"
            className="services__img"
          />
        </div>
        <ol className="services__list">
          {sluzby.map((s, i) => (
            <li key={s.nazev} className="card">
              <span className="card__no">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="card__title">{s.nazev}</h3>
              <p className="card__text">{s.popis}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="trust" aria-labelledby="trust-title">
        <div className="trust__media">
          <img
            src="/section-2.webp"
            alt="Vstup do prodejny dm drogerie markt"
            className="trust__img"
          />
        </div>
        <div className="trust__body">
          <p className="eyebrow">Praktické, když spěcháte</p>
          <h2 id="trust-title" className="section__title">
            Kdy dorazit bez fronty
          </h2>
          <p className="section__lead">
            Nejrušněji bývá kolem poledne a odpoledne. Chcete-li klid, přijďte
            hned po otevření nebo těsně před zavírací dobou.
          </p>

          <div className="peak" aria-label="Vytíženost v týdnu">
            {[
              ["Po", 2, 3, 4, 3, 2],
              ["Út", 2, 3, 4, 3, 2],
              ["St", 2, 3, 4, 4, 2],
              ["Čt", 2, 3, 4, 4, 3],
              ["Pá", 3, 4, 4, 4, 3],
              ["So", 2, 3, 4, 3, 2],
              ["Ne", 2, 3, 3, 2, 2],
            ].map((row) => (
              <div className="peak__col" key={row[0] as string}>
                <div className="peak__bars">
                  {(row.slice(1) as number[]).map((v, j) => (
                    <span
                      key={j}
                      className={"peak__bar peak__bar--" + v}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <span className="peak__label">{row[0]}</span>
              </div>
            ))}
          </div>
          <p className="peak__legend">Sloupce: 7 · 10 · 13 · 16 · 19 hod.</p>

          <h3 className="trust__subhead">Další prodejny dm v okolí</h3>
          <ul className="nearby">
            {okoli.map((o) => (
              <li key={o.adresa} className="nearby__item">
                <span className="nearby__addr">
                  {o.adresa}
                  <span className="nearby__psc">{o.psc}</span>
                </span>
                <span className="nearby__km">{o.km}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

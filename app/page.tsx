import React from "react";

export default function Page() {
  const dny = [
    {
      cas: "14:00",
      nadpis: "Obřad v Landeku",
      text: "Sešli jsme se u vás tři měsíce dopředu, prošli seznam hostů a naplánovali každý přesun tak, aby babička nemusela nikam pěšky.",
    },
    {
      cas: "16:30",
      nadpis: "Přípitek nad Ostravicí",
      text: "Rezervujeme terasu, ladíme světla podle západu slunce a s cateringem řešíme i to, aby vegani i strýc na maso odešli spokojení.",
    },
    {
      cas: "22:00",
      nadpis: "První tanec pod žebříkovým jeřábem",
      text: "Domlouváme kapelu, časujeme dort a stojíme opodál — když něco praskne, řešíme to my, ne vy.",
    },
  ];

  const sluzby = [
    {
      cislo: "01",
      nazev: "Kompletní organizace",
      popis:
        "Od první schůzky po úklid rána poté. Vybíráme místo, hlídáme rozpočet, koordinujeme dodavatele a v den D jsme celý den na místě s vámi.",
    },
    {
      cislo: "02",
      nazev: "Koordinace na den D",
      popis:
        "Máte naplánováno vlastními silami? Přebíráme otěže poslední týden a v den svatby, ať se můžete věnovat jen sobě a hostům.",
    },
    {
      cislo: "03",
      nazev: "Svatba v industriálu",
      popis:
        "Dolní oblast Vítkovic, Trojhalí, staré haly. Umíme z ostravské oceli a cihel udělat kulisu, kterou hosté nezapomenou.",
    },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#uvod" aria-label="Ostravská svatba, domů">
          <span className="wordmark__line">Ostravská</span>
          <span className="wordmark__amp">svatba</span>
        </a>
        <nav className="nav" aria-label="Hlavní navigace">
          <a href="#den">Jak to chodí</a>
          <a href="#sluzby">Co zařídíme</a>
          <a href="#duvera">O nás</a>
        </nav>
      </header>

      <section className="hero" id="uvod">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Nevěsta a ženich na svatbě v industriálním prostředí ostravských Vítkovic"
            className="hero__img"
          />
        </div>
        <div className="hero__panel">
          <p className="eyebrow">Svatební agentura &middot; Ostrava</p>
          <h1 className="hero__title">
            Vezmeme se<br />
            <span className="hero__accent">nad haldami</span>
          </h1>
          <p className="hero__lead">
            Plánujeme svatby v Ostravě a okolí — od romantiky v Landeku po syrovou
            eleganci Vítkovic. Vy si užíváte den, my hlídáme, aby seděl každý přesun,
            přípitek i poslední tanec.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="#sluzby">Chci se poradit</a>
            <a className="btn btn--ghost" href="#den">Jak plánujeme</a>
          </div>
        </div>
      </section>

      <section className="day" id="den">
        <div className="section-head">
          <p className="eyebrow eyebrow--dark">Jeden den, minuta po minutě</p>
          <h2 className="section-title">
            Svatba je harmonogram, který nesmí být znát.
          </h2>
        </div>
        <ol className="timeline">
          {dny.map((d) => (
            <li className="timeline__item" key={d.cas}>
              <span className="timeline__time">{d.cas}</span>
              <div className="timeline__body">
                <h3 className="timeline__title">{d.nadpis}</h3>
                <p className="timeline__text">{d.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <figure className="day__figure">
          <img
            src="/section-1.webp"
            alt="Prostřený svatební stůl s výzdobou připravený na obřad v Ostravě"
            className="day__img"
          />
        </figure>
      </section>

      <section className="services" id="sluzby">
        <div className="section-head">
          <p className="eyebrow">Co pro vás zařídíme</p>
          <h2 className="section-title section-title--light">
            Tři způsoby, jak nám předat starosti.
          </h2>
        </div>
        <div className="services__grid">
          {sluzby.map((s) => (
            <article className="card" key={s.cislo}>
              <span className="card__num">{s.cislo}</span>
              <h3 className="card__title">{s.nazev}</h3>
              <p className="card__text">{s.popis}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="trust" id="duvera">
        <figure className="trust__figure">
          <img
            src="/section-2.webp"
            alt="Svatební pár při prvním tanci ve slavnostně nasvícené industriální hale"
            className="trust__img"
          />
        </figure>
        <div className="trust__body">
          <p className="eyebrow eyebrow--dark">Proč zrovna my</p>
          <h2 className="section-title">Ostravu známe jménem, ne z prospektu.</h2>
          <p className="trust__text">
            Jsme dvě organizátorky z Ostravy a za sebou máme přes osmdesát svateb
            v celém kraji. Víme, kdo v Trojhalí půjčuje židle, který kněz oddá
            v Landeku a kde v neděli ráno seženete čerstvé koláčky pro hosty.
          </p>
          <ul className="trust__facts">
            <li>
              <strong>80+</strong>
              <span>svateb od Poruby po Beskydy</span>
            </li>
            <li>
              <strong>1 dvojice</strong>
              <span>s vámi od první kávy po ranní úklid</span>
            </li>
            <li>
              <strong>0 svateb</strong>
              <span>naráz — vaše je ten den jediná</span>
            </li>
          </ul>
          <blockquote className="quote">
            &bdquo;Byla jsem přesvědčená, že industriál nezvládnu. Holky z toho
            udělaly nejhezčí den našeho života — a já se celý den jen smála.&ldquo;
            <cite>— Kateřina &amp; Tomáš, svatba v Dolní oblasti Vítkovic</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}

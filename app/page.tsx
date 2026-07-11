import React from "react";

const oddily = [
  { nazev: "Kuželky", od: "1920", detail: "Šestidráhová kuželna, ligové družstvo i nábor dětí. Trénink úterý a čtvrtek.", staveni: "Kuželna" },
  { nazev: "Moderní gymnastika", od: "1954", detail: "Sportovní hala s odpruženou podlahou, přípravka od pěti let až po závodní tým.", staveni: "Sportovní hala" },
  { nazev: "Vzpírání", od: "1948", detail: "Plná zvedárna, mistrovská družstva a otevřený trénink pro dorost.", staveni: "Tělocvična" },
  { nazev: "Badminton", od: "1990", detail: "Čtyři kurty v hale, rekreační i výkonnostní hraní pro dospělé.", staveni: "Sportovní hala" },
  { nazev: "Basketbal", od: "1946", detail: "Mládežnická družstva i městská liga mužů, domácí zápasy v hale.", staveni: "Sportovní hala" },
  { nazev: "Vodní lyžování", od: "1963", detail: "Vlek na přehradě, sezónní tréninky slalomu i skoku.", staveni: "Přehrada" }
];

const kalendar = [
  { mes: "ČVC", den: "25", cas: "25. 7. – 1. 8.", akce: "Kuželkářský kemp", kde: "kuželna + nocleh v tělocvičně" },
  { mes: "SRP", den: "17", cas: "8:30 – 15:00", akce: "Taneční soustředění", kde: "tělocvična" },
  { mes: "SRP", den: "19", cas: "19. 8. – 23. 8.", akce: "Soustředění moderní gymnastiky", kde: "sportovní hala" }
];

export default function Page() {
  return (
    <main className="tj">
      <header className="tj-nav">
        <a className="tj-mark" href="#" aria-label="TJ Slavoj Plzeň – úvod">
          <span className="tj-mark-tj">TJ</span>
          <span className="tj-mark-name">Slavoj</span>
          <span className="tj-mark-city">Plzeň</span>
        </a>
        <nav className="tj-links" aria-label="Hlavní">
          <a href="#oddily">Oddíly</a>
          <a href="#kalendar">Kalendář</a>
          <a href="#klub">O klubu</a>
        </nav>
      </header>

      <section className="tj-hero">
        <img className="tj-hero-img" src="/hero.webp" alt="Sportovci TJ Slavoj Plzeň v akci" />
        <div className="tj-hero-shade" aria-hidden="true" />
        <div className="tj-hero-body">
          <p className="tj-eyebrow">Tělovýchovná jednota · Plzeň</p>
          <h1 className="tj-hero-h">
            <span>V pohybu</span>
            <span className="tj-hero-since">od roku <em>1920</em></span>
          </h1>
          <p className="tj-hero-lead">
            Devět oddílů pod jednou střechou — od kuželny přes gymnastickou halu
            až po vlek na přehradě. Sto let plzeňského sportu, otevřených každému,
            kdo se chce hýbat.
          </p>
          <div className="tj-hero-cta">
            <a className="tj-btn" href="#oddily">Vyberte si oddíl</a>
            <a className="tj-btn tj-btn-ghost" href="#kalendar">Co se děje</a>
          </div>
        </div>
        <ul className="tj-hero-stats" aria-label="Klub v číslech">
          <li><b>9</b> oddílů</li>
          <li><b>6</b> sportovišť</li>
          <li><b>100+</b> let</li>
        </ul>
      </section>

      <section className="tj-oddily" id="oddily">
        <div className="tj-sec-head">
          <h2>Naše oddíly</h2>
          <p>Rok vedle názvu je datum, kdy se u nás daný sport poprvé trénoval. Klikněte se na nábor.</p>
        </div>
        <img className="tj-band" src="/section-1.webp" alt="Trénink v hale TJ Slavoj Plzeň" />
        <ul className="tj-grid">
          {oddily.map((o) => (
            <li className="tj-card" key={o.nazev}>
              <span className="tj-card-year">{o.od}</span>
              <h3>{o.nazev}</h3>
              <p>{o.detail}</p>
              <span className="tj-card-place">{o.staveni}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="tj-klub" id="klub">
        <div className="tj-klub-media">
          <img src="/section-2.webp" alt="Sportoviště TJ Slavoj Plzeň" />
        </div>
        <div className="tj-klub-body">
          <h2 id="kalendar">Co se u nás děje</h2>
          <ul className="tj-cal">
            {kalendar.map((k, i) => (
              <li className="tj-cal-row" key={i}>
                <div className="tj-cal-date">
                  <span className="tj-cal-mes">{k.mes}</span>
                  <span className="tj-cal-den">{k.den}</span>
                </div>
                <div className="tj-cal-info">
                  <b>{k.akce}</b>
                  <span>{k.cas} · {k.kde}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="tj-klub-info">
            <h3>Kde nás najdete</h3>
            <p>
              TJ Slavoj Plzeň, z.s.<br />
              Třebízského 2702/12, 301 00 Plzeň
            </p>
            <p className="tj-updated">Kalendář aktualizován 12. července 2024</p>
          </div>
        </div>
      </section>
    </main>
  );
}

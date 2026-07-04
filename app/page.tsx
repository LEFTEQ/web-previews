import type { CSSProperties } from "react";

export default function Page() {
  const sortiment = [
    {
      kod: "01",
      nazev: "Hrubá stavba",
      popis: "Cihly, tvárnice, betonové směsi, malty a zdicí materiály. Vše certifikované a připravené k odvozu ze skladu v Ústí.",
      polozky: ["Zdicí malta 10 MPa", "Cementy a pojiva", "Překlady a stropy"],
    },
    {
      kod: "02",
      nazev: "Střechy a klempířina",
      popis: "Krytiny, komínové sady CIKO, plechy a svitky. Na prodejně stříháme a ohýbáme na samoobslužných strojích.",
      polozky: ["Kompletní komínové sady", "Ohýbání a stříhání plechů", "Satelitní zaměření střech ST SAT"],
    },
    {
      kod: "03",
      nazev: "Dokončovací práce",
      popis: "Řada ST line — lepidla, samonivelační hmoty, malířské nátěry, silikony i nářadí obkladače za cenu, která drží.",
      polozky: ["ST line lepidlo Basic C2T", "Samonivelační hmota s vláknem", "Nářadí a stěrky"],
    },
  ];

  return (
    <main className="sm">
      <header className="sm-top">
        <a className="sm-mark" href="#" aria-label="STAVMAT stavebniny, Ústí nad Labem">
          <span className="sm-mark-st">ST</span>
          <span className="sm-mark-rest">AVMAT</span>
          <span className="sm-mark-loc">Ústí&nbsp;nad&nbsp;Labem</span>
        </a>
        <nav className="sm-nav" aria-label="Hlavní">
          <a href="#sortiment">Sortiment</a>
          <a href="#duvera">O prodejně</a>
          <a className="sm-nav-cta" href="#nabidka">Cenová nabídka</a>
        </nav>
      </header>

      <section className="sm-hero" aria-labelledby="hero-h">
        <div className="sm-hero-media">
          <img
            src="/hero.webp"
            alt="Sklad stavebnin STAVMAT s paletami cihel, cementu a stavebního materiálu"
            className="sm-hero-img"
            width={1600}
            height={1000}
          />
        </div>
        <div className="sm-hero-body">
          <p className="sm-eyebrow">Stavebniny · Ústí nad Labem</p>
          <h1 id="hero-h" className="sm-hero-h">
            Naložíme vám<br />
            <span className="sm-hero-accent">celou stavbu</span><br />
            z jednoho dvora.
          </h1>
          <p className="sm-hero-lead">
            Od základů po hřebenáč — cihly, cement, střešní krytina i nářadí máme na skladě.
            Vypíšeme cenovou nabídku a zavezeme materiál až na stavbu, včetně vykládky.
          </p>
          <div className="sm-hero-actions">
            <a className="sm-btn sm-btn-primary" href="#nabidka">Vyžádat cenovou nabídku</a>
            <a className="sm-btn sm-btn-ghost" href="#sortiment">Projít sortiment</a>
          </div>
        </div>
        <ul className="sm-hero-ticker" aria-label="Co u nás pořídíte">
          <li>Cihly &amp; tvárnice</li>
          <li>Cement &amp; malty</li>
          <li>Střešní krytina</li>
          <li>Komínové sady CIKO</li>
          <li>ST line</li>
          <li>Ohýbání plechů</li>
        </ul>
      </section>

      <section className="sm-section" id="sortiment" aria-labelledby="sort-h">
        <div className="sm-section-head">
          <p className="sm-eyebrow">Co vozíme ze skladu</p>
          <h2 id="sort-h" className="sm-h2">Materiál seřazený tak, jak roste stavba</h2>
          <p className="sm-section-lead">
            Kompletní certifikovaný sortiment od nejvýznamnějších výrobců. U větších odběrů
            spočítáme množstevní slevu a domluvíme dopravu na kterékoliv místo.
          </p>
        </div>
        <ol className="sm-cards">
          {sortiment.map((s) => (
            <li className="sm-card" key={s.kod}>
              <span className="sm-card-kod" aria-hidden="true">{s.kod}</span>
              <h3 className="sm-card-h">{s.nazev}</h3>
              <p className="sm-card-p">{s.popis}</p>
              <ul className="sm-card-list">
                {s.polozky.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
        <figure className="sm-figure">
          <img
            src="/section-1.webp"
            alt="Regály stavebnin s materiálem řady ST line a nářadím"
            className="sm-figure-img"
            width={1400}
            height={900}
          />
          <figcaption className="sm-figure-cap">
            Řada <strong>ST line</strong> — nejlepší kvalita za nejlepší cenu, jen na našich prodejnách.
          </figcaption>
        </figure>
      </section>

      <section className="sm-section sm-section-alt" id="duvera" aria-labelledby="duv-h">
        <div className="sm-duvera">
          <div className="sm-duvera-media">
            <img
              src="/section-2.webp"
              alt="Nákladní auto stavebnin STAVMAT s hydraulickou rukou při vykládce materiálu"
              className="sm-duvera-img"
              width={1200}
              height={1400}
            />
          </div>
          <div className="sm-duvera-body" id="nabidka">
            <p className="sm-eyebrow">Proč k nám na dvůr</p>
            <h2 id="duv-h" className="sm-h2">Velký sklad, který se chová jako místní stavebnina</h2>
            <p className="sm-section-lead">
              Patříme mezi největší prodejce stavebních materiálů v Česku — a tuhle sílu
              proměňujeme v lepší ceny a vlastní dopravu. Za pultem v Ústí nad Labem
              ale pořád jednáte s lidmi, co vaši stavbu znají jménem.
            </p>

            <dl className="sm-facts">
              <div className="sm-fact">
                <dt>Doprava s vykládkou</dt>
                <dd>Zavezeme materiál kamkoliv v ČR, vyložíme rukou přímo na stavbě.</dd>
              </div>
              <div className="sm-fact">
                <dt>Množstevní slevy</dt>
                <dd>U větších odběrů vypracujeme konkrétní nabídku na míru projektu.</dd>
              </div>
              <div className="sm-fact">
                <dt>ST BENEFIT</dt>
                <dd>Věrnostní program, kde se pravidelné nákupy vracejí zpět.</dd>
              </div>
              <div className="sm-fact">
                <dt>Půjčovna nářadí</dt>
                <dd>Co nechcete kupovat, půjčíme — od míchačky po ohýbačku plechů.</dd>
              </div>
            </dl>

            <a className="sm-btn sm-btn-primary" href="#nabidka">Napsat si o cenovou nabídku</a>
          </div>
        </div>
      </section>
    </main>
  );
}

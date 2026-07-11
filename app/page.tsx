import React from "react";

const pruvod = [
  {
    kod: "NH",
    nazev: "Natloukací hmoždinky",
    popis: "Rychlá montáž jedním úderem — do betonu, plné i děrované cihly. Ideál na lišty, fasádní profily a montáž ve velkých sériích.",
    prumer: "⌀ 5–8 mm",
    material: "PA6",
  },
  {
    kod: "UNI",
    nazev: "Univerzální hmoždinky",
    popis: "Roztažení i uzlování podle podkladu. Drží v betonu, cihle, pórobetonu i sádrokartonu — jedna hmoždinka na většinu situací na stavbě.",
    prumer: "⌀ 6–12 mm",
    material: "PA6",
  },
  {
    kod: "RÁM",
    nazev: "Rámové hmoždinky",
    popis: "Delší tělo pro kotvení oken, zárubní a dřevěných konstrukcí skrz omítku. Přenesou vyšší tah bez pootočení.",
    prumer: "⌀ 8–10 mm",
    material: "PA6",
  },
  {
    kod: "IZO",
    nazev: "Talířové hmoždinky do izolace",
    popis: "Talíř pro kotvení polystyrenu a minerální vaty do zateplovacího systému. Nabízíme i verze do sádry a do polystyrenu.",
    prumer: "talíř ⌀ 60 mm",
    material: "PP kopolymer",
  },
];

const duvera = [
  { cislo: "1990", popis: "Vyrábíme jako rodinná firma s ryze českým kapitálem — bez přestávky přes tři desetiletí." },
  { cislo: "25 let", popis: "Vyvážíme do zemí EU i mimo ni, objem roste každým rokem." },
  { cislo: "2 materiály", popis: "Polyamid PA6 a PP kopolymer — jen prověřené vstupní suroviny, žádná náhražka." },
];

const novinky = [
  { datum: "3. 2. 2026", text: "Nové natloukací hmoždinky s hřebem z nerezu A2" },
  { datum: "25. 3. 2026", text: "Ukončujeme výrobu typu TTH" },
  { datum: "1. 7. 2026", text: "Dočasná úprava cen a příplatky" },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a href="#" className="wordmark" aria-label="Truhlář a spol. — výroba plastových hmoždinek">
          <span className="wordmark__mark" aria-hidden="true">
            <span className="wordmark__slot" />
          </span>
          <span className="wordmark__text">
            <strong>TRUHLÁŘ</strong>
            <em>a&nbsp;spol.</em>
          </span>
        </a>
        <nav className="topnav" aria-label="Hlavní navigace">
          <a href="#sortiment">Sortiment</a>
          <a href="#o-nas">O firmě</a>
          <a href="#novinky">Novinky</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__copy">
          <p className="eyebrow">Výroba plastových hmoždinek · Praha · od roku 1990</p>
          <h1 id="hero-title">
            Hmoždinka, která<br />
            <span className="hero__accent">drží</span> na první úder.
          </h1>
          <p className="hero__lead">
            Jsme největší český výrobce plastových hmoždinek. Natloukací, univerzální,
            rámové i talířové do zateplení — vstřikujeme z polyamidu PA6 a PP kopolymeru
            v desítkách rozměrů. Krátké dodací lhůty, ceny, které drží.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#sortiment">Prohlédnout sortiment</a>
            <a className="btn btn--ghost" href="#o-nas">Poptat výrobu</a>
          </div>
        </div>
        <figure className="hero__figure">
          <img src="/hero.webp" alt="Plastové hmoždinky z výroby Truhlář a spol. — natloukací a univerzální typy" />
          <figcaption className="hero__caption">
            <span className="tick">⌀ 5–12 mm</span>
            <span className="tick">PA6 · PP</span>
          </figcaption>
        </figure>
      </section>

      <section id="sortiment" className="sortiment" aria-labelledby="sortiment-title">
        <div className="sec-head">
          <p className="eyebrow">Výrobní program</p>
          <h2 id="sortiment-title">Čtyři řady hmoždinek na většinu montáží</h2>
          <p className="sec-lead">
            Od kotvení lišty po zateplení fasády. Každou řadu držíme skladem ve více
            rozměrech — kód vedle názvu je značení, pod kterým ji najdete v ceníku.
          </p>
        </div>
        <ul className="cards">
          {pruvod.map((p) => (
            <li className="card" key={p.kod}>
              <div className="card__code" aria-hidden="true">{p.kod}</div>
              <h3 className="card__title">{p.nazev}</h3>
              <p className="card__desc">{p.popis}</p>
              <dl className="card__spec">
                <div>
                  <dt>Rozměr</dt>
                  <dd>{p.prumer}</dd>
                </div>
                <div>
                  <dt>Materiál</dt>
                  <dd>{p.material}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
        <figure className="sortiment__photo">
          <img src="/section-1.webp" alt="Detail výroby plastových hmoždinek ve výrobní hale" />
        </figure>
      </section>

      <section id="o-nas" className="onas" aria-labelledby="onas-title">
        <div className="onas__grid">
          <div className="onas__copy">
            <p className="eyebrow">O firmě</p>
            <h2 id="onas-title">Rodinná výroba s ryze českým kapitálem</h2>
            <p>
              Vyrábíme od roku 1990. Od roku 2000 zastupujeme sebe i Českou republiku
              na mezinárodních veletrzích a výstavách. Přes deset let vyvážíme do zemí
              EU i mimo ni — a objem stále roste.
            </p>
            <p>
              Cíl máme jednoduchý: kvalitní výrobek za konkurenceschopnou cenu, krátkou
              dodací lhůtu a servis, na který se dá spolehnout. Suroviny — polyamid PA6
              a PP kopolymer — bereme jen prověřené a zpracováváme moderními technologiemi.
            </p>
            <dl className="stats">
              {duvera.map((d) => (
                <div className="stat" key={d.cislo}>
                  <dt>{d.cislo}</dt>
                  <dd>{d.popis}</dd>
                </div>
              ))}
            </dl>
          </div>
          <figure className="onas__photo">
            <img src="/section-2.webp" alt="Balené plastové hmoždinky připravené k expedici" />
          </figure>
        </div>

        <div id="novinky" className="novinky">
          <h3 className="novinky__title">Novinky z výroby</h3>
          <ul className="novinky__list">
            {novinky.map((n) => (
              <li className="novinky__item" key={n.text}>
                <span className="novinky__date">{n.datum}</span>
                <span className="novinky__text">{n.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

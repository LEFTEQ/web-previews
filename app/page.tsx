import type { CSSProperties } from "react";

export const metadata = {
  title: "PHJ Trading — podlahy a pokládka v Brně",
  description:
    "Podlaháři z Brna od roku 1999. Dřevěné, laminátové, korkové a vinylové podlahy. Návrh, materiál i pokládka na klíč. Vzorkovna na Křenové 26.",
};

type Material = {
  no: string;
  name: string;
  grain: string;
  note: string;
};

const materials: Material[] = [
  {
    no: "01",
    name: "Masivní dřevěné podlahy",
    grain: "dub · jasan · buk",
    note: "Teplo a stálost pod nohama. Pro milovníky pravého dřeva, které se dá i po letech přebrousit.",
  },
  {
    no: "02",
    name: "Třívrstvé parkety BEFAG",
    grain: "lakované · olejované",
    note: "Osvědčená klasika s pevným jádrem. Rychlá pokládka, vzhled masivu, roky spokojených zákazníků.",
  },
  {
    no: "03",
    name: "Laminátové podlahy",
    grain: "kartáčovaný dekor",
    note: "Od dřeva k nerozeznání. Napodobí i broušení nebo kartáčování — za rozumnou cenu.",
  },
  {
    no: "04",
    name: "Korkové podlahy",
    grain: "přírodní izolant",
    note: "Jeden z nejlepších tepelných izolantů. Tiché, měkké a příjemné bosým nohám.",
  },
  {
    no: "05",
    name: "Vinylové a PVC podlahy",
    grain: "voděodolné",
    note: "Moderní podlahovina do koupelen i kuchyní. Odolná vlhkosti, snadná na údržbu.",
  },
  {
    no: "06",
    name: "Dřevěné a WPC terasy",
    grain: "exteriér",
    note: "Terasy z masivu i dřevoplastu. Izolace podlah, marmolea a linolea po celém Brně.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="top">
        <a className="wordmark" href="#" aria-label="PHJ Trading, podlahy Brno">
          <span className="wordmark-p">PHJ</span>
          <span className="wordmark-sub">podlahy · Brno</span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#materialy">Podlahy</a>
          <a href="#vzorkovna">Vzorkovna</a>
          <a className="nav-call" href="tel:+420777000510">777 000 510</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Podlaháři v Brně od roku 1999</p>
          <h1 id="hero-title">
            Podlaha rozhodne,
            <br />
            jestli se cítíte
            <br />
            <em>doma.</em>
          </h1>
          <p className="lede">
            Dřevo, laminát, korek i vinyl — navrhneme, poradíme s výběrem a
            položíme komplet na klíč. Návrh, technické řešení i cenová nabídka
            zdarma.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="tel:+420777000510">
              Zavolat 777 000 510
            </a>
            <a className="btn-ghost" href="#vzorkovna">
              Přijít do vzorkovny
            </a>
          </div>
          <dl className="hero-facts">
            <div>
              <dt>Od roku</dt>
              <dd>1999</dd>
            </div>
            <div>
              <dt>Působíme</dt>
              <dd>Brno a okolí</dd>
            </div>
            <div>
              <dt>Vzorkovna</dt>
              <dd>Křenová 26</dd>
            </div>
          </dl>
        </div>
        <figure className="hero-figure">
          <img
            src="/hero.webp"
            alt="Položená dřevěná podlaha v interiéru realizovaná firmou PHJ Trading"
            className="hero-img"
            width={900}
            height={1100}
          />
          <figcaption className="hero-cap">
            Pokládka masivu — reference PHJ Trading, Brno
          </figcaption>
        </figure>
      </section>

      <section className="materials" id="materialy" aria-labelledby="mat-title">
        <div className="section-head">
          <p className="eyebrow">Co u nás vyberete</p>
          <h2 id="mat-title">Šest podlah, jedna dílna</h2>
          <p className="section-note">
            Realizujeme podlahy všech druhů — komplexně na klíč. Vyberte materiál
            podle toho, jak chcete bydlet.
          </p>
        </div>
        <ul className="grain-list">
          {materials.map((m) => (
            <li className="grain-card" key={m.no}>
              <span className="grain-no" aria-hidden="true">
                {m.no}
              </span>
              <div className="grain-body">
                <h3>{m.name}</h3>
                <p className="grain-tag">{m.grain}</p>
                <p className="grain-note">{m.note}</p>
              </div>
            </li>
          ))}
        </ul>
        <figure className="strip">
          <img
            src="/section-1.webp"
            alt="Detail struktury dřevěné podlahy — letokruhy a kresba dřeva"
            className="strip-img"
            width={1400}
            height={520}
          />
        </figure>
      </section>

      <section className="trust" id="vzorkovna" aria-labelledby="trust-title">
        <figure className="trust-figure">
          <img
            src="/section-2.webp"
            alt="Vzorkovna podlah PHJ Trading na Křenové ulici v Brně"
            className="trust-img"
            width={900}
            height={1000}
          />
        </figure>
        <div className="trust-copy">
          <p className="eyebrow">Přijďte si sáhnout</p>
          <h2 id="trust-title">
            Vzorkovna v centru Brna,
            <br />
            parkování před dveřmi
          </h2>
          <p className="trust-lede">
            Zakládáme si na plné spokojenosti a lidové ceně při nejvyšší kvalitě.
            Návrh podlah, pomoc s výběrem materiálu, technické řešení i cenová
            nabídka jsou u nás samozřejmě zdarma.
          </p>
          <ul className="trust-list">
            <li>
              <span className="tick" aria-hidden="true" /> Pokládka na klíč
              včetně izolace podlah
            </li>
            <li>
              <span className="tick" aria-hidden="true" /> Montáže většího
              rozsahu po celé ČR
            </li>
            <li>
              <span className="tick" aria-hidden="true" /> Přes dvacet let
              zkušeností v oboru
            </li>
          </ul>
          <address className="card-address">
            <strong>PHJ Trading, s.r.o.</strong>
            <span>Křenová 26, 602 00 Brno</span>
            <span>naproti areálu staré Mosilany</span>
            <a href="tel:+420777000510">777 000 510</a>
            <a href="mailto:podlahyphj@seznam.cz">podlahyphj@seznam.cz</a>
          </address>
        </div>
      </section>
    </main>
  );
}

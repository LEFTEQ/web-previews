import type { ReactNode } from "react";

function Chip({ children }: { children: ReactNode }) {
  return <li className="chip">{children}</li>;
}

export default function Page() {
  const vyuziti = [
    { t: "Septik", d: "1. stupeň čištění odpadní vody" },
    { t: "Žumpa", d: "bezodtoková nádrž k vyvážení" },
    { t: "Nádrž na vodu", d: "dešťová i užitková voda" },
    { t: "Čistírna odpadních vod", d: "samočinné čištění" },
    { t: "Vodoměrná šachta", d: "osazení vodoměru" },
    { t: "Armaturní šachta", d: "ventily a rozvody" },
    { t: "Odlučovač ropných látek", d: "záchyt olejů z ploch" },
    { t: "Lapák tuku", d: "pro provozy a kuchyně" },
    { t: "Sklep", d: "suchý úložný prostor" },
  ];

  const specs = [
    { k: "Objem", v: "16 druhů tvarů a velikostí" },
    { k: "Cena", v: "od 2 700 Kč / m³" },
    { k: "Nepropustnost", v: "dle ČSN 75 0905" },
    { k: "Materiál", v: "vodostavební beton + asfaltový nátěr" },
    { k: "Montáž", v: "usadí se na základ, ihned k použití" },
    { k: "Spodní voda", v: "nevyplave, odolá zemním tlakům" },
    { k: "Certifikace", v: "technicky osvědčeno" },
  ];

  return (
    <main className="page">
      <a className="skip" href="#obsah">Přeskočit na obsah</a>

      {/* NAV */}
      <header className="nav">
        <a className="brand" href="#top" aria-label="Septiky, žumpy, jímky, garáže — Brno">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-name">
            <b>Septiky·Žumpy·Jímky</b>
            <em>betonové nádrže · Brno</em>
          </span>
        </a>
        <a className="nav-call" href="tel:+420777949993">
          <span>Zavolat</span> 777 949 993
        </a>
      </header>

      {/* HERO */}
      <section className="hero" id="top">
        <div className="datum" aria-hidden="true">
          <span className="datum-tick">0,0 m</span>
          <span className="datum-label">TERÉN</span>
        </div>

        <div className="hero-inner" id="obsah">
          <div className="hero-copy">
            <p className="eyebrow">Prefabrikované železobetonové jímky</p>
            <h1 className="hero-title">
              Betonová jímka,<br />
              která <span className="mark">nevyplave</span>.<br />
              Ani ve spodní vodě.
            </h1>
            <p className="hero-lead">
              Vyrábíme a rozvážíme nádrže z vyztuženého vodostavebního
              betonu, zvenčí natřené asfaltovým lakem. Nepropustnost dle
              ČSN 75 0905 — zabudujete je do země i tam, kde sahá spodní voda.
            </p>

            <ul className="chips" aria-label="Parametry">
              <Chip>ČSN 75 0905</Chip>
              <Chip>vodostavební beton</Chip>
              <Chip>od 2 700 Kč/m³</Chip>
              <Chip>16 objemů</Chip>
            </ul>

            <div className="cta-row">
              <a className="btn btn-primary" href="tel:+420777949993">Zavolat 777 949 993</a>
              <a className="btn btn-ghost" href="mailto:info@septiky-zumpy.cz">Napsat na e-mail</a>
            </div>
          </div>

          <figure className="hero-figure">
            <div className="gauge" aria-hidden="true">
              <span className="gauge-mark" data-pos="top"><b>0,0 m</b>terén</span>
              <span className="gauge-water"><b>−1,5 m</b>hladina spodní vody</span>
              <span className="gauge-mark" data-pos="bottom"><b>−2,5 m</b>dno jímky</span>
            </div>
            <img
              src="/hero.webp"
              alt="Betonová jímka usazená do výkopu před zasypáním zeminou"
              className="hero-img"
              width={880}
              height={660}
            />
            <figcaption className="fig-cap">Osazení jímky · Brno a okolí</figcaption>
          </figure>
        </div>
      </section>

      {/* SEKCE 1 — VYUŽITÍ / SLUŽBY */}
      <section className="section use">
        <div className="section-head">
          <p className="eyebrow eyebrow-dark">Sortiment · jedna nádrž, mnoho využití</p>
          <h2 className="section-title">Odlijeme, přivezeme, usadíme.</h2>
          <p className="section-lead">
            Tutéž betonovou jímku využijete podle potřeby jako první stupeň
            čištění i jako obyčejnou nádrž na vodu. Vyrábíme také betonové
            garáže s podlahou a prefabrikované stropní panely.
          </p>
        </div>

        <ul className="use-grid">
          {vyuziti.map((u) => (
            <li key={u.t} className="use-item">
              <h3>{u.t}</h3>
              <p>{u.d}</p>
            </li>
          ))}
        </ul>

        <figure className="band">
          <img
            src="/section-1.webp"
            alt="Betonové jímky a nádrže připravené k rozvozu"
            className="band-img"
            width={1200}
            height={620}
          />
          <figcaption className="band-cap">
            <span className="band-tag">Garáže · stropní panely</span>
            Betonové garáže se pouze usadí na předem připravený základ.
          </figcaption>
        </figure>
      </section>

      {/* SEKCE 2 — DŮVĚRA / PROČ BETON */}
      <section className="section trust">
        <div className="trust-grid">
          <div className="trust-copy">
            <p className="eyebrow eyebrow-dark">Proč beton, a ne plast</p>
            <h2 className="section-title">
              Hmotnost, která drží tvar i pod zemí.
            </h2>
            <p className="section-lead">
              Betonová jímka díky své hmotnosti nevyplave, když stoupne
              spodní voda, a odolá tlaku zeminy. Nahradí zkorodovanou
              ocelovou i prasklou plastovou nádrž — a používat ji můžete
              ihned po montáži.
            </p>

            <ul className="badges">
              <li>Certifikované a technicky osvědčené výrobky</li>
              <li>3D vizualizace produktů — projekt NextGeneration EU</li>
              <li>Rozvoz a osazení po Brně a okolí</li>
            </ul>
          </div>

          <dl className="spec-sheet" aria-label="Technický list">
            <p className="spec-title">Technický list</p>
            {specs.map((s) => (
              <div className="spec-row" key={s.k}>
                <dt>{s.k}</dt>
                <dd>{s.v}</dd>
              </div>
            ))}
            <a className="btn btn-primary spec-cta" href="tel:+420777949993">
              Zeptat se na rozměr a cenu
            </a>
          </dl>
        </div>
      </section>
    </main>
  );
}

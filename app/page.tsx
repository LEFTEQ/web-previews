import React from "react";

const materialy = [
  { jmeno: "Mramorový design", format: "120×278", popis: "Ušlechtilý vzhled mramoru s odolností slinuté dlažby." },
  { jmeno: "Kamenný design", format: "60×120", popis: "Břidlice, travertin a pískovec pro interiér i terasu." },
  { jmeno: "Betonový design", format: "100×300", popis: "Industriální pohledový beton bez studeného dojmu." },
  { jmeno: "Dřevo design", format: "20×120", popis: "Teplo dřeva v provedení, které snese i koupelnu." },
  { jmeno: "Dekor a 3D obklady", format: "40×80", popis: "Reliéfní stěny, které si pohrávají se světlem." },
  { jmeno: "Velké formáty", format: "160×320", popis: "Desky s minimem spár — plocha vypadá jako jeden kus." },
  { jmeno: "Mozaika", format: "30×30", popis: "Detail do sprchy, kuchyně i k bazénu." },
  { jmeno: "Kuchyňské desky", format: "168×320", popis: "Slinuté desky se skrytou indukcí." },
];

const duvody = [
  { c: "01", h: "Přes 25 let na trhu", t: "Obklady a dlažby prodáváme v Brně od konce devadesátých let." },
  { c: "02", h: "Téměř 1000 druhů", t: "Od skladových klasik po formáty na objednávku — vybíráte z reálné nabídky." },
  { c: "03", h: "Italská kvalita", t: "Majitel vybírá u renomovaných italských výrobců a zpracovatelů kamene osobně." },
  { c: "04", h: "Ceny držíme nízko", t: "Konkurenci sledujeme doma i v zahraničí, abyste za povrch nepřepláceli." },
  { c: "05", h: "Vizualizace zdarma", t: "Při nákupu nad 20 000 Kč dostanete vizualizaci i kladečský plán bez příplatku." },
  { c: "06", h: "Interiér i exteriér", t: "Do koupelny, kuchyně, na terasu i na fasádu — poradíme, co kam patří." },
];

export default function Page() {
  return (
    <main className="page">
      <header className="hero">
        <img className="hero__img" src="/hero.webp" alt="Velkoformátová dlažba s kresbou mramoru v showroomu MAAG" />
        <div className="hero__scrim" aria-hidden="true" />

        <nav className="topbar" aria-label="Hlavní">
          <a className="brand" href="#top" aria-label="MAAG — obklady a dlažby, domovská stránka">
            <span className="brand__mark">MAAG</span>
            <span className="brand__sub">Obklady &amp; dlažby · Brno</span>
          </a>
          <a className="topbar__tel" href="tel:+420736792678">+420 736 792 678</a>
        </nav>

        <div className="hero__body">
          <p className="eyebrow reveal r1">Showroom Brno · Karlova 7</p>
          <h1 className="hero__title reveal r2">
            Téměř tisíc povrchů z Itálie. Všechny si v Brně osaháte.
          </h1>
          <p className="hero__lead reveal r3">
            MAAG přiváží mramor, kámen, beton, dřevo i mozaiku od renomovaných italských výrobců —
            majitel je vybírá osobně. Na Karlově 7 si vzorky prohlédnete pod nohama i na stěně,
            než se rozhodnete.
          </p>
          <div className="hero__cta reveal r4">
            <a className="btn" href="tel:+420736792678">Zavolat do showroomu</a>
            <span className="hero__hours">Po–Pá 9:00–18:00 · So–Ne po domluvě</span>
          </div>
        </div>

        <div className="ruler reveal r4" aria-hidden="true" />
      </header>

      <section className="section materials" aria-labelledby="mat-h">
        <div className="secthead">
          <span className="secthead__idx">01 — Materiály</span>
          <h2 id="mat-h" className="secthead__h">Osm světů povrchů pod jednou střechou</h2>
          <p className="secthead__p">
            Každá řada má jiný formát, jinou spáru, jiný dotek. Čísla u názvů jsou reálné rozměry desek
            v centimetrech — podle nich navrhujeme i kladečský plán.
          </p>
        </div>

        <figure className="feature">
          <img src="/section-1.webp" alt="Položená mrazuvzdorná exteriérová dlažba na terase" />
          <figcaption className="feature__cap">
            <span className="tag">Akce</span>
            Exteriérová dlažba už od <strong>8,99 €/ks</strong> — mrazuvzdorná, s protiskluzem.
          </figcaption>
        </figure>

        <ul className="grid" role="list">
          {materialy.map((m) => (
            <li className="tile" key={m.jmeno}>
              <span className="tile__dim">{m.format} cm</span>
              <h3 className="tile__h">{m.jmeno}</h3>
              <p className="tile__p">{m.popis}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section trust" aria-labelledby="trust-h">
        <div className="trust__grid">
          <figure className="trust__figure">
            <img src="/section-2.webp" alt="Detail obkladu a dlažby v realizované koupelně" />
          </figure>

          <div className="trust__body">
            <span className="secthead__idx light">02 — Proč MAAG</span>
            <h2 id="trust-h" className="secthead__h light">Šest důvodů, proč sem Brno chodí vybírat</h2>
            <p className="trust__lead">
              V portfoliu máme supermarkety, banky, obchodní centra, čerpací stanice, autosalony
              i restaurace — a spoustu rezidenčních projektů, jako je zrovna ten váš.
            </p>

            <ol className="reasons" role="list">
              {duvody.map((d) => (
                <li className="reason" key={d.c}>
                  <span className="reason__c">{d.c}</span>
                  <div>
                    <h3 className="reason__h">{d.h}</h3>
                    <p className="reason__p">{d.t}</p>
                  </div>
                </li>
              ))}
            </ol>

            <address className="trust__addr">
              MAAG s.r.o. · Karlova 7, 614 00 Brno ·{" "}
              <a href="tel:+420736792678">+420 736 792 678</a> ·{" "}
              <a href="mailto:brno@maag-czech.cz">brno@maag-czech.cz</a>
            </address>
          </div>
        </div>
      </section>
    </main>
  );
}

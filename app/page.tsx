import type { CSSProperties } from "react";

const stroje = [
  {
    kod: "JCB 4CX",
    typ: "Kolový traktorbagr",
    hloubka: "do 5,9 m",
    detaily: ["Výkopy sítí — voda, plyn, kanalizace", "Svahovací lžíce šíře 140 cm", "Paletové vidle, rozhrnování"],
    cena: "1000",
  },
  {
    kod: "JCB 8035",
    typ: "Otočný bagr",
    hloubka: "3,5 t · lžíce 30–60 cm",
    detaily: ["Naklápěcí svahovací lžíce 140 cm", "Přesná práce u plotů a bazénů", "Vhodný do stísněných dvorů"],
    cena: "900",
  },
  {
    kod: "Locust 750",
    typ: "Smykový nakladač",
    hloubka: "2,8 t · zdvih 170 cm",
    detaily: ["Nakládání na méně přístupných místech", "Vertikální zdvih", "Paletové vidle"],
    cena: "800",
  },
  {
    kod: "JCB 8018",
    typ: "Mini bagr",
    hloubka: "1,82 t · dosah 4,07 m",
    detaily: ["Zemní vrtání děr 20 / 30 cm do 1,5 m", "Projede brankou i na zahradu", "Lžíce 30–60 cm"],
    cena: "800",
  },
  {
    kod: "Terex PT2000",
    typ: "Demper",
    hloubka: "nosnost 2 t · korba 1,72 m³",
    detaily: ["Transport v těžko přístupném terénu", "Nízká hmotnost 2,05 t", "Doveze materiál tam, kam auto nezajede"],
    cena: "600",
  },
  {
    kod: "Mercedes Atego",
    typ: "Kontejner 6 t",
    hloubka: "kontejnerová doprava",
    detaily: ["Odvoz zeminy, sutě a odpadu", "Přistavení kontejneru", "Celková hmotnost 10,5 t"],
    cena: "600",
  },
];

const prace = [
  {
    n: "01",
    nazev: "Základy rodinných domů",
    text: "Výkop stavební jámy i pásů a následná realizace základů. Přesně podle projektu, s odvozem přebytečné zeminy.",
  },
  {
    n: "02",
    nazev: "Výkopy a přípojky",
    text: "Rýhy pro ploty, vodu, plyn i kanalizaci. Bagrujeme v šířkách 30, 40, 50, 60 a 120 cm do hloubky až 5,9 metru.",
  },
  {
    n: "03",
    nazev: "Bazény a retenční jímky",
    text: "Výkopy pro bazény, retenční nádrže a vsakování dešťové vody. Terén upravíme přesně do roviny.",
  },
  {
    n: "04",
    nazev: "Úpravy terénu",
    text: "Rozhrnování, přemisťování a nakládání zeminy. Svahování, srovnání pozemku i příprava plochy pod dlažbu.",
  },
  {
    n: "05",
    nazev: "Bourání a demolice",
    text: "Bourací práce menšího rozsahu, odstranění staveb a naložení sutě do kontejneru s následným odvozem.",
  },
  {
    n: "06",
    nazev: "Dovoz a prodej materiálu",
    text: "Přivezeme zeminu, beton, štěrk i písek. Pronajmeme kontejner na hlínu, sutě a odpad a odvezeme ho.",
  },
];

const duvery = [
  {
    stitek: "Rodinná firma",
    text: "Od roku 1991 jsme dokončili stovky zakázek — od privátních zahrad po státní a stavební projekty. K bagru sedá ten, kdo za práci ručí.",
  },
  {
    stitek: "Žádná záloha předem",
    text: "Úhradu nechceme dopředu. Jen u větších zakázek si domluvíme průběžné zálohy, ať je vztah férový z obou stran.",
  },
  {
    stitek: "Platíte za výsledek",
    text: "Nejsme hodináři. Cena za hodinu stroje není skutečné měřítko — rozhoduje, za jak dlouho práci hotovou odevzdáme.",
  },
];

export default function Page() {
  return (
    <main className="zp">
      <header className="zp-nav">
        <a className="zp-mark" href="#uvod" aria-label="Zemní práce Praha, úvod">
          <span className="zp-mark-line1">ZEMNÍ&nbsp;PRÁCE</span>
          <span className="zp-mark-line2">
            <span className="zp-mark-dash" aria-hidden="true" />
            PRAHA
          </span>
        </a>
        <nav className="zp-nav-links" aria-label="Hlavní navigace">
          <a href="#stroje">Technika</a>
          <a href="#sluzby">Práce</a>
          <a href="#o-nas">O firmě</a>
          <a className="zp-nav-tel" href="tel:+420739709397">739&nbsp;709&nbsp;397</a>
        </nav>
      </header>

      <section className="zp-hero" id="uvod">
        <img className="zp-hero-img" src="/hero.webp" alt="Traktorbagr při výkopových pracích na stavbě v Praze" />
        <div className="zp-hero-scrim" aria-hidden="true" />
        <div className="zp-hero-body">
          <p className="zp-eyebrow">Praha 5 — Lipence · od roku 1991</p>
          <h1 className="zp-hero-title">
            Kopeme do<br />hloubky <span className="zp-accent">5,9&nbsp;metru</span>.
          </h1>
          <p className="zp-hero-lead">
            Bagry, nakladače i dempry pro pražské stavby a zahrady. Základy domů, přípojky, bazény,
            terén i odvoz sutě. Přijedeme, vykopeme a uklidíme po sobě.
          </p>
          <div className="zp-hero-actions">
            <a className="zp-btn zp-btn-primary" href="tel:+420739709397">Zavolat</a>
            <a className="zp-btn zp-btn-ghost" href="#stroje">Prohlédnout techniku</a>
          </div>
        </div>
        <dl className="zp-hero-facts">
          <div>
            <dt>Zkušenosti</dt>
            <dd>30 let</dd>
          </div>
          <div>
            <dt>Stroje v parku</dt>
            <dd>9</dd>
          </div>
          <div>
            <dt>Nejmenší lžíce</dt>
            <dd>30 cm</dd>
          </div>
        </dl>
      </section>

      <section className="zp-section zp-stroje" id="stroje">
        <div className="zp-sec-head">
          <p className="zp-eyebrow">Náš strojový park</p>
          <h2 className="zp-sec-title">Ke každé zakázce jede stroj, který ji zvládne</h2>
          <p className="zp-sec-sub">
            Od minibagru, co projede brankou na zahradu, po traktorbagr na inženýrské sítě.
            Ceny jsou orientační, hodinu si spočítáme podle rozsahu.
          </p>
        </div>
        <img className="zp-band" src="/section-1.webp" alt="Technika zemních prací připravená k nasazení" />
        <ul className="zp-fleet">
          {stroje.map((s) => (
            <li className="zp-machine" key={s.kod}>
              <div className="zp-machine-top">
                <h3>{s.kod}</h3>
                <span className="zp-machine-typ">{s.typ}</span>
              </div>
              <p className="zp-machine-spec">{s.hloubka}</p>
              <ul className="zp-machine-list">
                {s.detaily.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              <p className="zp-machine-cena">
                <span className="zp-machine-cislo">{s.cena}</span>
                <span className="zp-machine-jed">Kč / hod.</span>
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="zp-section zp-sluzby" id="sluzby">
        <div className="zp-sec-head">
          <p className="zp-eyebrow">Co pro vás vykopeme</p>
          <h2 className="zp-sec-title">Šest věcí, kvůli kterým si nás voláte</h2>
        </div>
        <ol className="zp-jobs">
          {prace.map((p) => (
            <li className="zp-job" key={p.n}>
              <span className="zp-job-n" aria-hidden="true">{p.n}</span>
              <div>
                <h3>{p.nazev}</h3>
                <p>{p.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="zp-section zp-onas" id="o-nas">
        <div className="zp-onas-grid">
          <div className="zp-onas-media">
            <img src="/section-2.webp" alt="Zemní práce a úprava terénu v okolí Prahy" />
          </div>
          <div className="zp-onas-text">
            <p className="zp-eyebrow">Proč zrovna my</p>
            <h2 className="zp-sec-title">Malá firma, na kterou se dá spolehnout</h2>
            <div className="zp-trust">
              {duvery.map((d, i) => (
                <div className="zp-trust-item" key={d.stitek} style={{ "--i": i } as CSSProperties}>
                  <h3>{d.stitek}</h3>
                  <p>{d.text}</p>
                </div>
              ))}
            </div>
            <p className="zp-onas-adr">
              Ke Štěrkovně, Praha 5 — Lipence · <a href="tel:+420739709397">739 709 397</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

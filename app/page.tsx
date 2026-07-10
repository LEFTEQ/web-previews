import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CLEGAR SERVICES — údržba zeleně a úklid nemovitostí v Praze",
  description:
    "Sekání, střihání, řez keřů i celoroční péče o zeleň a úklid společných prostor pro SVJ, bytová družstva, firmy i rodinné domy v Praze a okolí.",
};

type Sluzba = {
  mesic: string;
  nazev: string;
  popis: string;
};

const kalendar: Sluzba[] = [
  {
    mesic: "III–IV",
    nazev: "Jarní probuzení trávníku",
    popis:
      "Vertikutace, dosetí prořídlých míst, první seč a odvoz posbírané hmoty. Trávník začne sezonu bez plsti a mechu.",
  },
  {
    mesic: "V–IX",
    nazev: "Pravidelná seč a řez",
    popis:
      "Sekání v dohodnutém intervalu, tvarování živých plotů, odplevelení záhonů a zálivka. O plochu se staráme, aniž byste to museli hlídat.",
  },
  {
    mesic: "X–XI",
    nazev: "Podzimní úklid listí",
    popis:
      "Vyfoukání a odvoz spadaného listí, poslední seč, řez okrasných dřevin a příprava trávníku na zimu.",
  },
  {
    mesic: "XII–II",
    nazev: "Zimní úklid a pohotovost",
    popis:
      "Úklid společných prostor, čištění garážových stání a odklízení sněhu z chodníků u domu podle domluveného rozsahu.",
  },
];

type Reference = {
  misto: string;
  typ: string;
};

const realizace: Reference[] = [
  { misto: "Praha – Jinonice", typ: "komplexní údržba zeleně" },
  { misto: "Praha – Černý Most", typ: "komplexní údržba zeleně" },
  { misto: "Praha – Vysočany", typ: "čištění garážových stání" },
  { misto: "Čelákovice – Záluží", typ: "hřiště FK Slavoj Záluží" },
  { misto: "Tuchoměřice", typ: "čištění garážových stání" },
  { misto: "Plzeň – Skvrňany", typ: "komplexní údržba zeleně" },
];

export default function Page() {
  return (
    <main className="cg">
      <header className="cg-top">
        <a className="cg-mark" href="#uvod" aria-label="CLEGAR SERVICES — úvod">
          <span className="cg-mark-name">Clegar</span>
          <span className="cg-mark-tag">péče o zeleň · Praha</span>
        </a>
        <nav className="cg-nav" aria-label="Hlavní navigace">
          <a href="#kalendar">Co děláme</a>
          <a href="#o-nas">O nás</a>
          <a href="#realizace">Realizace</a>
        </nav>
      </header>

      <section className="cg-hero" id="uvod">
        <div className="cg-hero-media">
          <img
            src="/hero.webp"
            alt="Ostříhaný trávník a upravená zeleň u bytového domu v Praze"
            className="cg-hero-img"
          />
          <div className="cg-hero-scrim" aria-hidden="true" />
        </div>
        <div className="cg-hero-body">
          <p className="cg-eyebrow">Údržba zeleně &amp; úklid · Praha a okolí</p>
          <h1 className="cg-hero-title">
            Vaše zahrada
            <br />
            <span className="cg-outline">ostříhaná</span> na milimetr.
          </h1>
          <p className="cg-hero-lead">
            Staráme se o trávníky, živé ploty a společné prostory tak, aby o ně
            majitelé domů nemuseli přemýšlet. Jeden partner na celý rok — od
            první jarní seče po zimní úklid.
          </p>
          <div className="cg-hero-actions">
            <a className="cg-btn" href="#kalendar">
              Chci nezávaznou nabídku
            </a>
            <a className="cg-link" href="#o-nas">
              Proč zrovna Clegar
            </a>
          </div>
          <dl className="cg-stats">
            <div>
              <dt>desítky tisíc m²</dt>
              <dd>ploch v pravidelné péči</dd>
            </div>
            <div>
              <dt>5 000 000 Kč</dt>
              <dd>pojištění odpovědnosti za škodu</dd>
            </div>
            <div>
              <dt>celoročně</dt>
              <dd>zeleň i úklid od jednoho týmu</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="cg-section" id="kalendar" aria-labelledby="kalendar-nadpis">
        <div className="cg-section-head">
          <p className="cg-eyebrow cg-eyebrow-dark">Rok se zelení</p>
          <h2 id="kalendar-nadpis">
            Nesekáme jednou za sezonu.
            <br />
            Máme o vaši plochu postaráno celý rok.
          </h2>
        </div>
        <ol className="cg-cal">
          {kalendar.map((s) => (
            <li className="cg-cal-item" key={s.nazev}>
              <span className="cg-cal-month" aria-hidden="true">
                {s.mesic}
              </span>
              <div className="cg-cal-text">
                <h3>{s.nazev}</h3>
                <p>{s.popis}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="cg-splitmedia">
          <figure className="cg-figure">
            <img
              src="/section-1.webp"
              alt="Pracovník firmy Clegar seká trávník profesionální technikou"
            />
            <figcaption>Sekání a údržba zeleně</figcaption>
          </figure>
          <div className="cg-forwhom">
            <h3 className="cg-forwhom-title">Pro koho pracujeme</h3>
            <ul className="cg-forwhom-list">
              <li>
                <strong>SVJ a bytová družstva</strong>
                <span>
                  Poradíme a společně sestavíme rozsah péče přesně pro váš bytový
                  dům.
                </span>
              </li>
              <li>
                <strong>Firmy a areály</strong>
                <span>
                  Zeleň i úklid společných prostor zpravidla zajišťujeme naráz —
                  jedna schůzka, jeden dodavatel.
                </span>
              </li>
              <li>
                <strong>Rodinné domy</strong>
                <span>
                  Od jednorázového posekání po celoroční péči o desítky zahrad v
                  Praze a okolí.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cg-section cg-section-alt" id="o-nas" aria-labelledby="onas-nadpis">
        <div className="cg-about">
          <figure className="cg-figure cg-figure-tall">
            <img
              src="/section-2.webp"
              alt="Uklizené společné prostory a upravená zeleň u pražské nemovitosti"
            />
          </figure>
          <div className="cg-about-text">
            <p className="cg-eyebrow cg-eyebrow-dark">O nás</p>
            <h2 id="onas-nadpis">
              Dlouhodobá spolupráce, ne jednorázová brigáda.
            </h2>
            <p>
              Ke každé zakázce přistupujeme individuálně. Na základě telefonátu
              nebo osobní schůzky vytvoříme plán služeb šitý na míru a pak ho
              rok co rok plníme — transparentně, s jasnými pravidly a férovým
              poměrem ceny a kvality.
            </p>
            <ul className="cg-badges">
              <li>
                <span className="cg-badge-k">Zkušenost</span>
                Pečujeme o desítky tisíc m² ploch po celé Praze a okolí.
              </li>
              <li>
                <span className="cg-badge-k">Pojištění</span>
                Vyškolený tým a krytí odpovědnosti za škodu až 5 000 000 Kč.
              </li>
              <li>
                <span className="cg-badge-k">Vybavení</span>
                Kvalitní technika, díky které zvládneme i velké plochy.
              </li>
            </ul>
          </div>
        </div>

        <div className="cg-realize" id="realizace">
          <h3 className="cg-realize-title">Vybrané realizace</h3>
          <ul className="cg-realize-list">
            {realizace.map((r) => (
              <li key={r.misto + r.typ}>
                <span className="cg-realize-place">{r.misto}</span>
                <span className="cg-realize-type">{r.typ}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

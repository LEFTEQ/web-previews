import type { CSSProperties } from "react";

export const metadata = {
  title: "SQZ, s.r.o. — Zkušebna stavebních hmot a konstrukcí | Olomouc",
  description:
    "Akreditovaná laboratoř pro stavebnictví z Olomouce. Zkoušky betonu, kameniva, zemin i asfaltů, diagnostika konstrukcí a řízení kvality přímo na stavbě.",
};

type Vzorek = {
  cislo: string;
  material: string;
  norma: string;
  co: string;
};

const vzorky: Vzorek[] = [
  {
    cislo: "C 30/37",
    material: "Beton",
    norma: "ČSN EN 12390",
    co: "Pevnost v tlaku, mrazuvzdornost, hloubka průsaku tlakovou vodou.",
  },
  {
    cislo: "0/32",
    material: "Kamenivo",
    norma: "ČSN EN 933",
    co: "Zrnitost, tvar zrn, odolnost proti drcení a otěru.",
  },
  {
    cislo: "CEM II",
    material: "Cementy a malty",
    norma: "ČSN EN 196",
    co: "Počátek tuhnutí, pevnost, objemová stálost pojiva.",
  },
  {
    cislo: "S/F",
    material: "Zeminy",
    norma: "ČSN EN 1997",
    co: "Míra zhutnění, únosnost podloží, Proctorova zkouška.",
  },
  {
    cislo: "ACO 11",
    material: "Asfaltové směsi",
    norma: "ČSN EN 12697",
    co: "Mezerovitost, obsah pojiva, protismykové vlastnosti vozovky.",
  },
];

type Sluzba = {
  poradi: string;
  nazev: string;
  popis: string;
  polozky: string[];
};

const sluzby: Sluzba[] = [
  {
    poradi: "01",
    nazev: "Akreditované laboratorní zkoušky",
    popis:
      "Nezávislé testování materiálů a konstrukcí pro zhotovitele i investory. Vzorek přijmeme, zkoušíme podle normy, vydáme protokol, který obstojí u kontroly.",
    polozky: [
      "Beton — čerstvý i ztvrdlý",
      "Cementy, malty a pojiva",
      "Kamenivo do betonu i vozovek",
      "Zeminy a zemní tělesa",
      "Asfaltové vrstvy a povrch vozovek",
    ],
  },
  {
    poradi: "02",
    nazev: "Diagnostika a měření v terénu",
    popis:
      "Přijedeme přímo na stavbu — na dálnici, letištní plochu, halu i most. Měříme, vrtáme jádra, snímáme georadarem a hledáme, co pod povrchem není vidět.",
    polozky: [
      "Georadarové měření a průzkumy",
      "Zkoušky integrity pilot (PIT, CHA)",
      "Měření a monitoring kanalizací",
      "Svislé a vodorovné dopravní značení",
      "Diagnostika betonových konstrukcí",
    ],
  },
  {
    poradi: "03",
    nazev: "Řízení kvality staveb",
    popis:
      "Specialista kvality vede dokumentaci od plánování po přejímku. Hlídáme kontrolu výroby podle ČSN EN, aby stavba prošla bez dohadování o číslech.",
    polozky: [
      "Řízení kvality na stavbách",
      "Dokumentace ke kontrole výroby",
      "Kontrola výroby podle ČSN EN",
      "Laboratoř fyzikálních veličin",
      "Odborné posudky a poradenství",
    ],
  },
];

export default function Page() {
  return (
    <main className="sqz">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="SQZ, s.r.o. — úvod">
          <span className="wordmark__mark" aria-hidden="true">
            SQZ
          </span>
          <span className="wordmark__sub">zkušebna stavebních hmot</span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#duvera">O laboratoři</a>
          <a className="topnav__call" href="tel:+420724278026">
            Zavolat laboratoři
          </a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__grid" aria-hidden="true">
          <div className="specimen">
            <span className="specimen__label">vzorek · beton</span>
            <span className="specimen__code">C 30/37</span>
          </div>
        </div>

        <div className="hero__inner">
          <p className="hero__eyebrow">
            Akreditovaná zkušebna · Olomouc · od projektu po přejímku
          </p>
          <h1 id="hero-title" className="hero__title">
            <span className="line line--1">Změříme, jestli</span>
            <span className="line line--2">ten beton</span>
            <span className="line line--3">opravdu drží.</span>
          </h1>
          <p className="hero__lede">
            Odebereme vzorek, rozdrtíme ho v lisu a napíšeme vám číslo, které
            obstojí u dozoru i u soudu. Laboratoře i technika, které jezdí přímo
            na stavbu — na dálnice, letiště, haly a mosty po celém Česku i na
            Slovensku.
          </p>
          <div className="hero__cta">
            <a className="btn btn--solid" href="tel:+420724278026">
              Zavolat laboratoři
            </a>
            <a className="btn btn--ghost" href="#sluzby">
              Co umíme zkoušet
            </a>
          </div>
          <dl className="hero__facts">
            <div>
              <dt>Pracoviště</dt>
              <dd>20+ v ČR a SR</dd>
            </div>
            <div>
              <dt>Sídlo</dt>
              <dd>U místní dráhy, Olomouc</dd>
            </div>
            <div>
              <dt>Akreditace</dt>
              <dd>AZL 1135.1</dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="sluzby" className="specimens" aria-labelledby="specimens-title">
        <div className="section-head">
          <p className="section-head__eyebrow">Zkušební protokol</p>
          <h2 id="specimens-title">Co položíte na náš stůl, to zkusíme</h2>
          <p className="section-head__lede">
            Pět skupin materiálů, se kterými se na stavbě potkáte nejčastěji.
            Ke každé přesnou normu a to podstatné, co z ní pro vás vyčteme.
          </p>
        </div>

        <div className="specimen-table" role="list">
          {vzorky.map((v) => (
            <article className="specimen-row" role="listitem" key={v.material}>
              <span className="specimen-row__code">{v.cislo}</span>
              <div className="specimen-row__body">
                <h3 className="specimen-row__name">{v.material}</h3>
                <p className="specimen-row__what">{v.co}</p>
              </div>
              <span className="specimen-row__norm">{v.norma}</span>
            </article>
          ))}
        </div>

        <div className="services">
          {sluzby.map((s) => (
            <article className="service" key={s.poradi}>
              <p className="service__no">{s.poradi}</p>
              <h3 className="service__title">{s.nazev}</h3>
              <p className="service__desc">{s.popis}</p>
              <ul className="service__list">
                {s.polozky.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="duvera" className="trust" aria-labelledby="trust-title">
        <div className="trust__lead">
          <p className="section-head__eyebrow">Kdo za čísly stojí</p>
          <h2 id="trust-title">
            Nezávislá laboratoř, která jezdí i tam, kde je bláto
          </h2>
          <p className="trust__text">
            Jsme SQZ, s.r.o. z Olomouce — zkušebna stavebních hmot a konstrukcí.
            Náš tým tvoří odborníci s mnohaletou praxí, kteří se podílejí na
            klíčových stavbách v Česku i v zahraničí. Laboratoře máme vybavené
            moderní měřicí a vrtnou technikou, takže spolehlivě pracujeme jak
            u lisu, tak po kotníky v zemním tělese.
          </p>
          <p className="trust__text">
            Jsme součástí koncernu Skupina Metrostav. Naše protokoly a posudky
            slouží zhotovitelům i investorům jako nezávislý důkaz kvality —
            od plánování až po kontrolu při přejímce.
          </p>
        </div>

        <aside className="card" aria-label="Kontakt a údaje">
          <p className="card__kicker">Obchod · příjem vzorků</p>
          <a className="card__phone" href="tel:+420724278026">
            +420 724 278 026
          </a>
          <dl className="card__meta">
            <div>
              <dt>Sídlo a laboratoř</dt>
              <dd>
                U místní dráhy 939/5
                <br />
                779 00 Olomouc
              </dd>
            </div>
            <div>
              <dt>IČ / DIČ</dt>
              <dd>25743554 · CZ25743554</dd>
            </div>
            <div>
              <dt>Akreditovaná zkušební laboratoř</dt>
              <dd>AZL 1135.1</dd>
            </div>
          </dl>
          <p className="card__note">
            Součást koncernu Skupina Metrostav.
          </p>
        </aside>

        <ul className="badges" aria-label="Proč nám věřit">
          <li>
            <span className="badges__big">20+</span>
            <span className="badges__lbl">pracovišť v ČR a SR</span>
          </li>
          <li>
            <span className="badges__big">ČSN EN</span>
            <span className="badges__lbl">zkoušky podle platných norem</span>
          </li>
          <li>
            <span className="badges__big">PIT · CHA</span>
            <span className="badges__lbl">zkoušky integrity pilot</span>
          </li>
        </ul>
      </section>
    </main>
  );
}

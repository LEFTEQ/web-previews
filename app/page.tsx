import type { CSSProperties } from "react";

export const metadata = {
  title: "JUDr. Michal Bortel — advokát v Brně",
  description:
    "Advokátní kancelář JUDr. Michala Bortela na Mezírce v Brně. Trestní, rodinné, občanské i obchodní právo. Rozhodce pro spotřebitelské spory. Cenu znáte předem, zálohy neplatíte.",
};

type Paragraf = {
  cislo: string;
  odvetvi: string;
  nazev: string;
  text: string;
};

const rejstrik: Paragraf[] = [
  {
    cislo: "§ 01",
    odvetvi: "Trestní právo",
    nazev: "Obhajoba v trestním řízení",
    text: "Zastupuji podezřelé, obviněné i obžalované — od prvního výslechu po hlavní líčení. Způsobil vám pachatel škodu? Uplatním ji za vás a dohlédnu na její vymožení.",
  },
  {
    cislo: "§ 02",
    odvetvi: "Rodinné právo",
    nazev: "Rozvod a péče o děti",
    text: "Kompletní pomoc při rozvodu, úpravě rodičovské odpovědnosti, výživném a vypořádání majetku manželů. Střídavá, společná i výhradní péče, úprava styku s dítětem.",
  },
  {
    cislo: "§ 03",
    odvetvi: "Správní právo",
    nazev: "Dopravní přestupky",
    text: "Hrozí vám bodový postih nebo ztráta řidičského průkazu? Poradím s pojistnými událostmi i dopravními nehodami a budu vás hájit u správního orgánu.",
  },
  {
    cislo: "§ 04",
    odvetvi: "Občanské právo",
    nazev: "Reklamace a práva spotřebitele",
    text: "Pomohu s reklamací zboží i služeb a prosadím vaše práva. Koupili jste ojeté auto se skrytými vadami? Vím, jak se domoci nápravy.",
  },
  {
    cislo: "§ 05",
    odvetvi: "Občanské právo",
    nazev: "Nemovitosti a úschovy",
    text: "Ochráním vaše práva při koupi i prodeji nemovitosti. Provádím advokátní úschovy peněz a listin, sepíši kupní, darovací, nájemní smlouvu i věcné břemeno.",
  },
  {
    cislo: "§ 06",
    odvetvi: "Obchodní právo",
    nazev: "Vymáhání pohledávek",
    text: "Rychlé a účelné vymáhání pohledávek ve spolupráci s exekutory. Zastoupím vás před soudy i v insolvenčním řízení a připravím veškerou smluvní dokumentaci.",
  },
];

const tarif = [
  {
    hodnota: "0 Kč",
    popis: "Prvních 15 minut úvodní konzultace neúčtuji.",
  },
  {
    hodnota: "1 250 Kč",
    popis: "Za každou započatou půlhodinu úvodní konzultace, bez DPH.",
  },
  {
    hodnota: "2 500 Kč",
    popis: "Hodinová odměna advokáta bez DPH. Možná i smluvní či úkonová sazba.",
  },
  {
    hodnota: "0 Kč záloh",
    popis: "Účtuji až skutečně odvedenou práci. Cenu znáte vždy předem.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="mark" href="#uvod" aria-label="JUDr. Michal Bortel, advokát">
          <span className="mark__title">Michal Bortel</span>
          <span className="mark__rule" aria-hidden="true" />
          <span className="mark__sub">advokát · Brno · od 2005</span>
        </a>
        <a className="topbar__call" href="tel:+420776711600">
          <span className="topbar__callLabel">Zavolat</span>
          <span className="topbar__callNum">776&nbsp;711&nbsp;600</span>
        </a>
      </header>

      <section className="hero" id="uvod">
        <div className="hero__frame">
          <img
            className="hero__img"
            src="/hero.webp"
            alt="JUDr. Michal Bortel, advokát se sídlem na Mezírce v Brně"
            width={1200}
            height={1500}
          />
          <span className="hero__stamp" aria-hidden="true">
            <span className="hero__stampNum">č. 179</span>
            <span className="hero__stampTxt">rozhodce · MSp ČR</span>
          </span>
        </div>

        <div className="hero__copy">
          <p className="eyebrow">Advokátní kancelář · Mezírka 775/1, Brno</p>
          <h1 className="hero__title">
            Právo je řemeslo.
            <br />
            <em>Dělám ho po vašem boku</em> od roku 2005.
          </h1>
          <p className="hero__lead">
            Doktor práv, spoluautor Zákona o krajském referendu, rozhodce
            s osvědčením Ministerstva spravedlnosti. Občanům i firmám v Brně
            pomáhám tam, kde jde o hodně — a mluvím při tom srozumitelně.
          </p>
          <div className="hero__cta">
            <a className="btn btn--solid" href="tel:+420776711600">
              Zavolat na 776&nbsp;711&nbsp;600
            </a>
            <a className="btn btn--ghost" href="mailto:advokat@michalbortel.eu">
              Napsat e-mail
            </a>
          </div>
          <dl className="hero__facts">
            <div>
              <dt>V advokacii</dt>
              <dd>od 2005</dd>
            </div>
            <div>
              <dt>Zálohy</dt>
              <dd>neúčtuji</dd>
            </div>
            <div>
              <dt>Rozhodce</dt>
              <dd>osvědčení č. 179</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="rejstrik" id="sluzby" aria-labelledby="rejstrik-nadpis">
        <div className="section-head">
          <p className="eyebrow">Nejžádanější agendy</p>
          <h2 className="section-title" id="rejstrik-nadpis">
            Rejstřík věcí, se kterými za mnou chodíte
          </h2>
          <p className="section-note">
            Šest oblastí, které v kanceláři řeším nejčastěji. Nenašli jste tu
            svou situaci? Zavolejte — poradím, i když věc nepovedu sám.
          </p>
        </div>

        <ol className="rejstrik__list">
          {rejstrik.map((p) => (
            <li className="spis" key={p.cislo}>
              <span className="spis__num" aria-hidden="true">
                {p.cislo}
              </span>
              <div className="spis__body">
                <p className="spis__odvetvi">{p.odvetvi}</p>
                <h3 className="spis__nazev">{p.nazev}</h3>
                <p className="spis__text">{p.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="duvera" id="o-mne" aria-labelledby="duvera-nadpis">
        <div className="duvera__portret">
          <img
            className="duvera__img"
            src="/section-1.webp"
            alt="Detail z advokátní kanceláře JUDr. Michala Bortela v Brně"
            width={1000}
            height={1200}
          />
        </div>

        <div className="duvera__copy">
          <p className="eyebrow">Kdo vás bude zastupovat</p>
          <h2 className="section-title" id="duvera-nadpis">
            JUDr. Michal Bortel
          </h2>
          <p className="duvera__lead">
            Jsem doktorem práv a vykonávám svobodné povolání advokáta. V advokacii
            působím od roku 2005 a mám bohaté zkušenosti s přípravou zákonů
            v Parlamentu ČR i Evropském parlamentu — jsem autorem Zákona
            o krajském referendu. Pro firmy vykonávám rozhodcovskou činnost jako
            rozhodce s osvědčením Ministerstva spravedlnosti č. 179 pro
            spotřebitelské spory a jako akreditovaný lektor Ministerstva vnitra
            školím úředníky samospráv.
          </p>

          <div className="tarif">
            <p className="tarif__hlava">Odměna bez překvapení</p>
            <ul className="tarif__list">
              {tarif.map((t) => (
                <li className="tarif__item" key={t.hodnota}>
                  <span className="tarif__cena">{t.hodnota}</span>
                  <span className="tarif__popis">{t.popis}</span>
                </li>
              ))}
            </ul>
          </div>

          <address className="kontakt">
            <p className="kontakt__radek">
              <span className="kontakt__label">Sídlo</span>
              Mezírka 775/1, 602 00 Brno
            </p>
            <p className="kontakt__radek">
              <span className="kontakt__label">Telefon</span>
              <a href="tel:+420776711600">+420 776 711 600</a>
            </p>
            <p className="kontakt__radek">
              <span className="kontakt__label">E-mail</span>
              <a href="mailto:advokat@michalbortel.eu">advokat@michalbortel.eu</a>
            </p>
          </address>
        </div>
      </section>
    </main>
  );
}

// nevyužitý typ ponechán pro čitelnost dat
export type _Style = CSSProperties;

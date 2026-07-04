import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stoklasa — textilní galanterie z Brna | knoflíky, stuhy, korálky",
  description:
    "Galanterie Stoklasa v Brně: knoflíky, stuhy, krajky, korálky a látky pod jednou střechou. Přijďte si osahat materiál na prodejnu, nebo objednejte z tisíců položek na míru vašemu tvoření.",
  openGraph: {
    title: "Stoklasa — textilní galanterie z Brna",
    description:
      "Knoflíky, stuhy, krajky, korálky a látky. Prodejna v Brně otevřená každý den. 36 let s vámi.",
    type: "website",
    locale: "cs_CZ",
  },
};

const kategorie = [
  {
    kod: "KN",
    nazev: "Knoflíky",
    popis:
      "Perleť, kov, dřevo i kokos. Od nenápadných košilových po velké kabátové, které dělají celý střih.",
    detail: "přes 2 000 druhů",
  },
  {
    kod: "ST",
    nazev: "Stuhy a lemovky",
    popis:
      "Saténové, rypsové, sametové i s potiskem. Metráž namotáme přesně na míru vašeho projektu.",
    detail: "prodáváme na metry",
  },
  {
    kod: "KR",
    nazev: "Krajky a výšivky",
    popis:
      "Bavlněné paličkované, elastické i našívací aplikace. Pro spodní prádlo, závoje i dekor.",
    detail: "úzké i široké",
  },
  {
    kod: "KO",
    nazev: "Korálky a komponenty",
    popis:
      "Rokajl, broušené i skleněné korálky, karabinky a lůžka. Vše na vlastní šperk od začátku do konce.",
    detail: "pro bižuterii",
  },
  {
    kod: "LA",
    nazev: "Látky a metráž",
    popis:
      "Bavlny, lny, úplety i podšívky. Odstřihneme kolik potřebujete — od dvaceti centimetrů výš.",
    detail: "střih na míru",
  },
  {
    kod: "ZI",
    nazev: "Zipy a drobná spojárna",
    popis:
      "Kostěné, spirálové i dělitelné zipy, patenty, háčky a nitě. Ta drobnost, co rozhoduje o výsledku.",
    detail: "všechny délky",
  },
];

const duvery = [
  {
    cislo: "36",
    label: "let s vámi",
    text: "Galanterii Stoklasa znají švadleny i kutilové od roku 1990.",
  },
  {
    cislo: "7",
    label: "prodejen v ČR",
    text: "Brno, Praha, Ostrava, Olomouc, Zlín, Opava i Jihlava — materiál si osaháte.",
  },
  {
    cislo: "19 069",
    label: "recenzí zákazníků",
    text: "Nejčastěji chválíte rychlou expedici a ochotu poradit s výběrem.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Stoklasa galanterie, úvod">
          <span className="wordmark__stitch" aria-hidden="true" />
          <span className="wordmark__name">Stoklasa</span>
          <span className="wordmark__sub">textilní galanterie · Brno</span>
        </a>
        <a className="topbar__call" href="tel:+420228229395">
          Zavolat 228 229 395
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__grid" aria-hidden="true">
          <div className="hero__spool hero__spool--a">
            <span className="hero__spool-core" />
          </div>
          <div className="hero__spool hero__spool--b">
            <span className="hero__spool-core" />
          </div>
          <div className="hero__spool hero__spool--c">
            <span className="hero__spool-core" />
          </div>
        </div>

        <p className="hero__eyebrow">Galanterie v Brně · otevřeno každý den 8–20</p>
        <h1 id="hero-title" className="hero__title">
          <span className="hero__line hero__line--1">Knoflík,</span>
          <span className="hero__line hero__line--2">stuha, jehla</span>
          <span className="hero__line hero__line--3">— a nápad je</span>
          <span className="hero__line hero__line--4">
            <em>hotový.</em>
          </span>
        </h1>
        <p className="hero__lede">
          Tisíce knoflíků, metry stuh, korálky na šperk i látky na míru. Všechno
          na jednom místě, kde vám poradí a odstřihnou přesně tolik, kolik na
          svoje tvoření potřebujete.
        </p>
        <div className="hero__actions">
          <a className="btn btn--solid" href="#nabidka">
            Prohlédnout sortiment
          </a>
          <a className="btn btn--ghost" href="mailto:eshop@stoklasa.cz">
            Napsat na eshop@stoklasa.cz
          </a>
        </div>
      </section>

      <section className="offer" id="nabidka" aria-labelledby="offer-title">
        <div className="offer__head">
          <p className="section__eyebrow">Šest kartotéčních přihrádek</p>
          <h2 id="offer-title" className="section__title">
            Co u nás vytáhnete ze šuplíku
          </h2>
          <p className="section__intro">
            Sortiment máme srovnaný jako galanterní kartotéku — každá přihrádka
            svůj kód, každý materiál svoje místo. Vyberte si a my namotáme,
            odstřihneme nebo odsypeme.
          </p>
        </div>

        <ul className="drawers">
          {kategorie.map((k) => (
            <li className="drawer" key={k.kod}>
              <span className="drawer__pull" aria-hidden="true" />
              <span className="drawer__code">{k.kod}</span>
              <h3 className="drawer__name">{k.nazev}</h3>
              <p className="drawer__desc">{k.popis}</p>
              <span className="drawer__detail">{k.detail}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="trust" id="o-nas" aria-labelledby="trust-title">
        <div className="trust__head">
          <p className="section__eyebrow">O nás</p>
          <h2 id="trust-title" className="section__title">
            Galanterie, kterou si osaháte
          </h2>
          <p className="section__intro">
            Přes internet vyberete barvu, ale ne šustění saténu ani váhu
            knoflíku v ruce. Proto máme prodejny — přijďte do Brna, poradíme a
            odstřihneme přesně na váš projekt.
          </p>
        </div>

        <div className="trust__stats">
          {duvery.map((d) => (
            <div className="stat" key={d.label}>
              <span className="stat__num">{d.cislo}</span>
              <span className="stat__label">{d.label}</span>
              <p className="stat__text">{d.text}</p>
            </div>
          ))}
        </div>

        <blockquote className="quote">
          <p>
            „Velmi rychlá expedice zboží, reagovali na moji poznámku v
            objednávce a telefonicky si mé požadavky ověřovali.“
          </p>
          <cite>zákaznická recenze, červenec 2026</cite>
        </blockquote>

        <div className="visit">
          <div className="visit__col">
            <h3 className="visit__title">Prodejna Brno</h3>
            <p className="visit__line">Přijďte si vybrat osobně, materiál máme vyskládaný na dosah.</p>
            <p className="visit__line visit__line--strong">Po–Ne 8:00–20:00</p>
          </div>
          <div className="visit__col">
            <h3 className="visit__title">Zákaznická linka</h3>
            <a className="visit__contact" href="tel:+420228229395">
              228 229 395
            </a>
            <a className="visit__contact" href="mailto:eshop@stoklasa.cz">
              eshop@stoklasa.cz
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

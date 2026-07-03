import type { CSSProperties } from "react";

export const metadata = {
  title: "JKT OKNA Olomouc — okna a dveře na míru domu",
  description:
    "Rodinná firma z Olomouce. Vybíráme profil, barvu i kování tak, aby okna seděla přesně na váš dům — od funkcionalistické vily po památkově chráněný objekt.",
  openGraph: {
    title: "JKT OKNA Olomouc — okna a dveře na míru domu",
    description:
      "Vybíráme profil, barvu i kování tak, aby okna seděla přesně na váš dům. Wellnerova 1215/3, Olomouc.",
    images: ["/hero.webp"],
    type: "website",
    locale: "cs_CZ",
  },
};

type Detail = { u: string; label: string; note: string };

const detaily: Detail[] = [
  {
    u: "0,72",
    label: "součinitel prostupu tepla U (W/m²K)",
    note: "Číslo, které rozhoduje, kolik tepla oknem uteče. Čím níž, tím tepleji doma a míň na faktuře za topení.",
  },
  {
    u: "RAL",
    label: "celý vzorník barev a dekory dřeva",
    note: "Antracit, tmavá zeleň, dub, ořech. Slícujeme okno s fasádou i tam, kde má poslední slovo památkář.",
  },
  {
    u: "6",
    label: "komor v plastovém profilu",
    note: "Víc komor, víc těsnění, tišší ulice. U hliníku sáhneme po štíhlejším rámu a větší ploše skla.",
  },
];

type Vyber = { cislo: string; nadpis: string; text: string; pro: string };

const vybery: Vyber[] = [
  {
    cislo: "01",
    nadpis: "Plastová okna",
    text: "Šestikomorové profily s trojsklem. Nejlepší poměr ceny a tepla — volba pro většinu rodinných domů a bytů.",
    pro: "Rodinné domy · byty · rekonstrukce",
  },
  {
    cislo: "02",
    nadpis: "Hliníková okna",
    text: "Štíhlé rámy a velké prosklené plochy, které unesou i celostěnné sestavy. Pevné, tvarově stálé, na desítky let.",
    pro: "Velká prosklení · administrativa · moderní stavby",
  },
  {
    cislo: "03",
    nadpis: "Terasové a vstupní dveře",
    text: "Posuvné a zdvižně-posuvné stěny na terasu, vchodové dveře v barvě oken. Bezbariérové prahy na přání.",
    pro: "Terasy · zahrady · vchody",
  },
  {
    cislo: "04",
    nadpis: "Bezpečnostní dveře do bytů",
    text: "Řada ELEGANT — vícebodové zamykání a odolné jádro. Klid v panelovém domě i ve vile na okraji města.",
    pro: "Byty · panelové domy",
  },
];

type Ref = { misto: string; typ: string; text: string };

const reference: Ref[] = [
  {
    misto: "Centrum Olomouce",
    typ: "Funkcionalistická vila · pod dohledem památkářů",
    text: "Volbou profilu se povedlo zachovat původní čistý funkcionalistický výraz domu — nová okna, stejná tvář.",
  },
  {
    misto: "Hanácký venkov",
    typ: "Novostavba rodinného domu",
    text: "Rustikální ráz jsme podtrhli dekorem dřeva. Okna i dveře jsou od pravého dřeva téměř k nerozeznání.",
  },
  {
    misto: "Olomoucko",
    typ: "Průmyslové a administrativní objekty",
    text: "Škola, sportovní hala, sídlo firmy i logistické centrum. Dodáváme ve spolupráci se stavaři podle projektu investora.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="brand" href="#" aria-label="JKT OKNA Olomouc, domovská stránka">
          <span className="brand__mark" aria-hidden="true">
            <span className="brand__pane" />
            <span className="brand__pane" />
            <span className="brand__pane" />
            <span className="brand__pane" />
          </span>
          <span className="brand__word">
            JKT<span className="brand__thin"> OKNA</span>
            <span className="brand__city">Olomouc</span>
          </span>
        </a>
        <nav className="topbar__actions" aria-label="Rychlý kontakt">
          <a className="btn btn--ghost" href="mailto:riolomouc@mail.ri-okna.cz">
            Napsat e-mail
          </a>
          <a className="btn btn--solid" href="tel:+420773899005">
            Zavolat 773 899 005
          </a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero__frame">
          <img
            className="hero__img"
            src="/hero.webp"
            alt="Detail okna osazeného do domu v Olomouci — pohled rámem ven do zahrady"
          />
          <div className="hero__mull" aria-hidden="true" />
        </div>

        <div className="hero__copy">
          <p className="eyebrow">Olomouc · Wellnerova 1215/3 · rodinná firma bratří Kührových</p>
          <h1 className="hero__title">
            Nejsou okna<br />
            <span className="hero__title-em">jako okna.</span>
          </h1>
          <p className="hero__lede">
            Dobře zvolený profil udělá i z fádní stavby jedinečnou. Vybíráme rám, barvu i kování
            tak, aby okna seděla přesně na váš dům — od funkcionalistické vily v centru po
            památkově chráněný objekt.
          </p>
          <div className="hero__cta">
            <a className="btn btn--solid btn--lg" href="tel:+420773899005">
              Zavolat 773 899 005
            </a>
            <span className="hero__hours">po–pá 8.00–16.30</span>
          </div>
        </div>
      </section>

      <section className="section detail" aria-labelledby="detail-nadpis">
        <div className="section__head">
          <p className="eyebrow">Výběrem materiálu to začíná</p>
          <h2 id="detail-nadpis" className="section__title">
            Tři čísla, která u okna opravdu rozhodují
          </h2>
        </div>

        <div className="specs">
          {detaily.map((d) => (
            <article className="spec" key={d.label}>
              <p className="spec__u">{d.u}</p>
              <p className="spec__label">{d.label}</p>
              <p className="spec__note">{d.note}</p>
            </article>
          ))}
        </div>

        <div className="offer">
          <img
            className="offer__img"
            src="/section-1.webp"
            alt="Přehled okenních a dveřních profilů, které JKT OKNA montuje"
          />
          <ol className="cards">
            {vybery.map((v) => (
              <li className="card" key={v.cislo}>
                <span className="card__num" aria-hidden="true">
                  {v.cislo}
                </span>
                <div className="card__body">
                  <h3 className="card__title">{v.nadpis}</h3>
                  <p className="card__text">{v.text}</p>
                  <p className="card__pro">{v.pro}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section trust" aria-labelledby="trust-nadpis">
        <div className="trust__grid">
          <div className="trust__intro">
            <p className="eyebrow">Realizace na Olomoucku</p>
            <h2 id="trust-nadpis" className="section__title">
              Řešení hledáme i tam, kde byste ho nenašli
            </h2>
            <p className="trust__text">
              Profesionalita, individualita, kreativita — a hlavně kus Hané, který známe.
              Úzce spolupracujeme se stavebními firmami a dodáváme okna obcím, městům i
              soukromým investorům. Poradíme si s vilou i s kasárnami.
            </p>
            <p className="trust__names">
              Domluvte si nezávaznou schůzku:{" "}
              <a href="tel:+420773899005">Mgr. Josef Kühr</a> ·{" "}
              <a href="tel:+420734242424">Ing. Jakub Kühr</a>
            </p>
          </div>
          <img
            className="trust__img"
            src="/section-2.webp"
            alt="Dokončená realizace oken a dveří na domě v okolí Olomouce"
          />
        </div>

        <ul className="refs">
          {reference.map((r) => (
            <li className="ref" key={r.misto}>
              <p className="ref__place">{r.misto}</p>
              <p className="ref__type">{r.typ}</p>
              <p className="ref__text">{r.text}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

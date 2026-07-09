import type { CSSProperties } from "react";

const obory: { cislo: string; nazev: string; popis: string }[] = [
  {
    cislo: "01",
    nazev: "Projekce",
    popis:
      "Z kvalitně připravené projektové dokumentace vzejde všechno ostatní. Kreslíme zahrady u rodinných domů, firemní i veřejnou zeleň, parky i historické areály — vždy podle konkrétního místa, ne podle typového katalogu.",
  },
  {
    cislo: "02",
    nazev: "Realizace",
    popis:
      "Firemní a interiérová zeleň, krajinná i střešní výsadba, parky a zahrady u domů. Máme vlastní dílenské zázemí, zemní stroje i pily — a lidi, kteří s nimi umí zacházet dvacet let.",
  },
  {
    cislo: "03",
    nazev: "Údržba",
    popis:
      "O dokončená díla se dlouhodobě zajímáme. Nejdůležitější části technologie totiž nejsou vidět — projeví se ve zdravém rozvoji zeleně až po třech a více letech od založení.",
  },
];

const faze: { rok: string; text: string }[] = [
  { rok: "1992", text: "Vznik firmy jako sdružení fyzických osob v Českých Budějovicích." },
  { rok: "1993", text: "Zakládáme okrasnou školku, dnes zaměřenou na solitérní keře." },
  { rok: "2004", text: "Zakládáme společnost s ručením omezeným." },
  { rok: "dnes", text: "Působíme po celém Jihočeském kraji, s řadou kvalifikovaných zahradníků." },
];

export default function Page() {
  return (
    <main className="pg">
      <header className="nav" aria-label="Hlavní">
        <a className="mark" href="#top" aria-label="Bartl — zahradní architektura">
          <span className="mark__b">Bartl</span>
          <span className="mark__s">zahradní architektura</span>
        </a>
        <nav className="nav__links">
          <a href="#obory">Co děláme</a>
          <a href="#ofirme">O firmě</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <img
          className="hero__img"
          src="/hero.webp"
          alt="Zahrada navržená a realizovaná firmou Bartl v Jihočeském kraji"
          width={1600}
          height={1000}
        />
        <div className="hero__grad" aria-hidden="true" />
        <div className="hero__body">
          <p className="hero__eyebrow">České Budějovice · Jihočeský kraj · od roku 1992</p>
          <h1 className="hero__title">
            <span>Trpělivost</span>
            <span className="hero__title--em">růže</span>
            <span>přináší.</span>
          </h1>
          <p className="hero__lead">
            Zahradní architektura, která se počítá na roky, ne na sezóny. Vyhýbáme se
            rychlým typovým řešením — nejdůležitější části díla nejsou vidět a projeví
            se až za tři a více let ve zdravém rozvoji zeleně.
          </p>
          <p className="hero__note" role="note">
            Firma v současné době utlumuje činnost a nové zakázky bohužel nepřijímá.
          </p>
        </div>
      </section>

      <section className="obory" id="obory">
        <div className="sec__head">
          <p className="sec__eyebrow">Od zadání k dokončení díla zhruba půl roku</p>
          <h2 className="sec__title">Tři fáze jedné zahrady</h2>
          <p className="sec__intro">
            Projekce, realizace a údržba nejsou tři služby vedle sebe — je to jedna
            souvislá cesta. Rozhodující je najít společnou řeč se zadavatelem a
            ztotožnit se s cílem díla.
          </p>
        </div>

        <ol className="cards">
          {obory.map((o) => (
            <li className="card" key={o.cislo}>
              <span className="card__num" aria-hidden="true">
                {o.cislo}
              </span>
              <h3 className="card__title">{o.nazev}</h3>
              <p className="card__text">{o.popis}</p>
            </li>
          ))}
        </ol>

        <figure className="obory__fig">
          <img
            src="/section-1.webp"
            alt="Realizace zeleně firmou Bartl — parky, firemní i krajinná zeleň"
            width={1400}
            height={900}
          />
          <figcaption>
            Od firemní zeleně a interiérů přes střešní zahrady a parky až po
            krajinnou a veřejnou zeleň.
          </figcaption>
        </figure>
      </section>

      <section className="ofirme" id="ofirme">
        <div className="ofirme__grid">
          <div className="ofirme__text">
            <p className="sec__eyebrow">O firmě</p>
            <h2 className="sec__title sec__title--light">
              Autorizovaný zahradní architekt a lidé z Lednice
            </h2>
            <p className="ofirme__p">
              Oba zakladatelé jsou absolventi zahradnické fakulty v Lednici, obor
              sadovnictví a krajinářství. Majitelka je autorizovaným zahradním
              architektem — členem České komory architektů pro obor zahradní a
              krajinářská tvorba.
            </p>
            <p className="ofirme__p">
              Z malé rodinné firmy se stala firma s řadou kvalifikovaných
              zaměstnanců — absolventů zahradnických škol v Brně i v Českých
              Budějovicích. Mnozí mají v oboru praxi delší než dvacet let a jsou
              proškoleni pro práci se zemními stroji, pilami i další mechanizací.
            </p>

            <dl className="stats">
              <div>
                <dt>1992</dt>
                <dd>rok založení</dd>
              </div>
              <div>
                <dt>20+</dt>
                <dd>let praxe u řady pracovníků</dd>
              </div>
              <div>
                <dt>3+</dt>
                <dd>roky, než se dílo naplno projeví</dd>
              </div>
            </dl>
          </div>

          <figure className="ofirme__fig">
            <img
              src="/section-2.webp"
              alt="Okrasná školka Bartl — pěstování solitérních keřů"
              width={1200}
              height={1500}
            />
          </figure>
        </div>

        <ol className="timeline">
          {faze.map((f, i) => (
            <li className="tl" key={f.rok} style={{ "--i": i } as CSSProperties}>
              <span className="tl__rok">{f.rok}</span>
              <span className="tl__text">{f.text}</span>
            </li>
          ))}
        </ol>

        <p className="ofirme__closing">
          „Přejeme vám mnoho nadšení, trpělivosti a radosti z každého kousku
          zeměkoule, který se vaší zásluhou změnil na plochu, kterou lze v širším
          slova smyslu nazvat zahradou.“
        </p>
      </section>
    </main>
  );
}

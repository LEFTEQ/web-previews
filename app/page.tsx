import type { ReactNode } from "react";

type Drink = {
  base: string;
  name: string;
  formula: string[];
  price: string;
};

const drinks: Drink[] = [
  {
    base: "Rum \u00b7 Mezcal",
    name: "Vulcano",
    formula: ["Havana Verde", "pep\u0159 Penja", "Ojo de Tigre mezcal", "citrusy", "rozmar\u00fdn"],
    price: "290 K\u010d",
  },
  {
    base: "J\u00e4germeister",
    name: "Tra\u00fcm",
    formula: ["J\u00e4germeister Manifest", "pand\u00e1n", "asijsk\u00e9 ko\u0159en\u00ed", "ban\u00e1n", "ara\u0161\u00eddov\u00e9 m\u00e1slo"],
    price: "265 K\u010d",
  },
  {
    base: "Vermut \u00b7 Campari",
    name: "Good Vibrations",
    formula: ["Martini Bianco", "ricotta", "Campari", "rebarbora", "jahody", "soda"],
    price: "245 K\u010d",
  },
  {
    base: "Whisky",
    name: "Against the Tide",
    formula: ["Singleton 12y", "butterscotch kordi\u00e1l", "popcorn", "mo\u0159sk\u00e1 \u0159asa"],
    price: "245 K\u010d",
  },
  {
    base: "Tequila \u00b7 Whisky",
    name: "Unruly",
    formula: ["Smokehead Tequila Cask", "sv\u00ed\u010dkov\u00e1", "kysan\u00e9 zel\u00ed", "brusinky"],
    price: "290 K\u010d",
  },
  {
    base: "Tequila \u00b7 Mezcal",
    name: "Cantar\u00e9",
    formula: ["Padrecito Tequila", "Ojo de Tigre mezcal", "Corona", "Taj\u00edn", "tepache"],
    price: "265 K\u010d",
  },
];

const tastings = [
  { date: "8. 6. 2026", title: "Degustace japonsk\u00e9 whisky" },
  { date: "22. 6. 2026", title: "Degustace rumu" },
];

function Formula({ parts }: { parts: string[] }): ReactNode {
  return (
    <p className="drink-formula">
      {parts.map((part, i) => (
        <span key={part} className="formula-part">
          {part}
          {i < parts.length - 1 ? <span className="formula-plus" aria-hidden="true">+</span> : null}
        </span>
      ))}
    </p>
  );
}

export default function Page() {
  return (
    <main className="page">
      <section className="hero">
        <img
          className="hero-img"
          src="/hero.webp"
          alt="Barov\u00fd pult Savage Baru s koktejly v tlumen\u00e9m zelen\u00e9m sv\u011btle"
        />
        <div className="hero-shade" aria-hidden="true" />

        <header className="nav">
          <a className="wordmark" href="#hero" aria-label="Savage Bar, dom\u016f">
            <span className="wordmark-savage">Savage</span>
            <span className="wordmark-bar">Bar</span>
            <span className="wordmark-dot" aria-hidden="true" />
          </a>
          <nav className="nav-links" aria-label="Hlavn\u00ed">
            <a href="#menu">Menu</a>
            <a href="#dzungle">O baru</a>
            <a href="#degustace">Degustace</a>
          </nav>
        </header>

        <div className="hero-content" id="hero">
          <p className="hero-eyebrow reveal r0">Koktejlov\u00fd bar \u00b7 Praha</p>
          <h1 className="hero-title">
            <span className="reveal r1">Savage</span>
            <span className="reveal r2 hero-title-accent">Bar</span>
          </h1>
          <p className="hero-tagline reveal r3">D\u017eungle nev\u00eddan\u00fdch chut\u00ed.</p>
          <p className="hero-lede reveal r4">
            V\u00edtejte v na\u0161\u00ed d\u017eungli. Koktejly, kter\u00e9 jinde neochutn\u00e1te \u2014 divok\u00e9
            kombinace chut\u00ed od barman\u016f, co se neboj\u00ed experimentu.
          </p>
          <div className="hero-actions reveal r5">
            <a className="btn btn-primary" href="tel:+420777275296">Rezervovat st\u016fl</a>
            <a className="btn btn-ghost" href="#menu">Prohl\u00e9dnout menu</a>
          </div>
        </div>
      </section>

      <section className="menu" id="menu" aria-labelledby="menu-title">
        <div className="menu-head">
          <p className="section-eyebrow">The Champions Menu \u00b7 9 koktejl\u016f \u00b7 245\u2013290 K\u010d</p>
          <h2 className="section-title" id="menu-title">
            Ka\u017ed\u00fd drink je vlastn\u00ed p\u0159\u00edb\u011bh chuti
          </h2>
          <p className="section-lede">
            Fermentace, ko\u0159en\u00ed a techniky, na kter\u00e9 si troufne m\u00e1lokdo. \u010cti n\u00e1sleduj\u00edc\u00ed
            recepty jako soupis surovin \u2014 a pak si vyber, do kter\u00e9 se pust\u00ed\u0161 jako prvn\u00ed.
          </p>
        </div>

        <figure className="menu-banner">
          <img
            src="/section-1.webp"
            alt="Autorsk\u00fd koktejl Savage Baru zdoben\u00fd \u010derstv\u00fdmi bylinkami"
            loading="lazy"
          />
          <figcaption>Servírujeme na baru v Praze \u2014 každý večer čerstvé.</figcaption>
        </figure>

        <ol className="drink-list">
          {drinks.map((drink) => (
            <li className="drink" key={drink.name}>
              <p className="drink-base">{drink.base}</p>
              <h3 className="drink-name">{drink.name}</h3>
              <Formula parts={drink.formula} />
              <p className="drink-price">{drink.price}</p>
            </li>
          ))}
        </ol>

        <p className="menu-note">
          \u2026a dal\u0161\u00ed v baru \u2014 cel\u00e9 The Champions Menu ochutn\u00e1\u0161 na m\u00edst\u011b. Ka\u017ed\u00fd
          koktejl um\u00edme i nealko (0,2 l) &mdash; jm\u00e9no z\u016fst\u00e1v\u00e1, alkohol mus\u00ed pry\u010d.
        </p>
      </section>

      <section className="about" id="dzungle" aria-labelledby="about-title">
        <div className="about-media">
          <img
            src="/section-2.webp"
            alt="Interi\u00e9r Savage Baru s tropickou d\u017eungl\u00ed a barov\u00fdm pultem"
            loading="lazy"
          />
        </div>

        <div className="about-body">
          <p className="section-eyebrow">O baru \u00b7 Praha</p>
          <h2 className="section-title" id="about-title">V\u00edtejte v na\u0161\u00ed d\u017eungli</h2>
          <p className="about-text">
            Savage Bar je koktejlov\u00e1 d\u017eungle uprost\u0159ed Prahy. Nejdeme cestou, kterou zn\u00e1\u0161
            \u2014 barmani si hraj\u00ed s chut\u00ed tak dlouho, dokud z n\u00ed nen\u00ed z\u00e1\u017eitek. Todle je Savage.
          </p>

          <div className="degustace" id="degustace">
            <h3 className="about-sub">Degustace destil\u00e1t\u016f</h3>
            <p className="about-text about-text-sm">
              Rum, whisky, gin i dal\u0161\u00ed \u2014 v\u017edy s profesion\u00e1ln\u00edm ambasadorem. Voucher plat\u00ed
              rok, tak\u017ee se p\u0159id\u00e1\u0161 kdykoliv.
            </p>
            <ul className="tasting-list">
              {tastings.map((t) => (
                <li className="tasting" key={t.date}>
                  <span className="tasting-date">{t.date}</span>
                  <span className="tasting-title">{t.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <dl className="facts">
            <div className="fact">
              <dt>Vouchery a z\u00e1\u017eitky</dt>
              <dd>Od p\u011btikila po p\u011bt t\u00e1c\u016f \u2014 degustace, koktejly i cel\u00fd ve\u010der.</dd>
            </div>
            <div className="fact">
              <dt>Rezervace</dt>
              <dd>
                <a href="tel:+420777275296">+420 777 275 296</a>
                <span className="fact-sep" aria-hidden="true">\u00b7</span>
                <a href="mailto:jungle@savagebar.cz">jungle@savagebar.cz</a>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}

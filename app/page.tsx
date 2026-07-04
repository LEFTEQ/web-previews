import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teta drogerie Ústí nad Labem — poradíme vám u regálu i po telefonu",
  description:
    "Drogerie Teta v Ústí nad Labem: péče o pleť, vlasy i domácnost, poradenství přímo na prodejně, Teta klub a výhodné akce z týdenního letáku. Máme otevřeno pro vás.",
};

const usti = {
  telefon: "+420 296 335 552",
  email: "info@tetadrogerie.cz",
};

const police = [
  {
    kod: "01",
    nazev: "Pleť",
    popis:
      "Krémy, séra a čištění pro každý typ pleti. Poradíme, co nasadit na zimní suchou pokožku a co nechat na léto.",
    regal: "Regál u vchodu, po pravé ruce",
  },
  {
    kod: "02",
    nazev: "Vlasy",
    popis:
      "Šampony, masky a barvy. Ukážeme rozdíl mezi tím, co jen voní, a tím, co vlasům opravdu pomůže.",
    regal: "Prostřední ulička",
  },
  {
    kod: "03",
    nazev: "Domácnost",
    popis:
      "Prací gely, čističe a drogerie do každé místnosti. Velká balení i ekologické varianty od českých značek.",
    regal: "Zadní část prodejny",
  },
  {
    kod: "04",
    nazev: "Děti a péče o zdraví",
    popis:
      "Plenky, dětská kosmetika, doplňky stravy a vše, co doma dojde ve chvíli, kdy to nejméně čekáte.",
    regal: "U pokladen",
  },
];

export default function Page() {
  return (
    <main className="td-main">
      <header className="td-topbar">
        <a className="td-wordmark" href="#" aria-label="Teta drogerie, Ústí nad Labem">
          <span className="td-wordmark__teta">teta</span>
          <span className="td-wordmark__mesto">Ústí&nbsp;nad&nbsp;Labem</span>
        </a>
        <a className="td-tel" href={`tel:${usti.telefon.replace(/\s/g, "")}`}>
          {usti.telefon}
        </a>
      </header>

      <section className="td-hero">
        <div className="td-hero__text">
          <p className="td-eyebrow">Drogerie na rohu, Ústí nad Labem</p>
          <h1 className="td-hero__title">
            U nás vám <em>poradí</em> člověk,
            <br />
            ne vyhledávač.
          </h1>
          <p className="td-hero__lead">
            Přijďte si pro krém, prací gel nebo barvu na vlasy — a odejděte
            s tím, co opravdu funguje. Naši prodavačky vědí, co je na poličce a
            proč, a rády vám to ukážou.
          </p>
          <div className="td-hero__actions">
            <a className="td-btn td-btn--solid" href="#police">
              Projít nabídku
            </a>
            <a
              className="td-btn td-btn--ghost"
              href={`tel:${usti.telefon.replace(/\s/g, "")}`}
            >
              Zavolat na prodejnu
            </a>
          </div>
        </div>
        <figure className="td-hero__figure">
          <img
            src="/hero.webp"
            alt="Regály drogerie Teta v Ústí nad Labem plné kosmetiky a péče o domácnost"
            className="td-hero__img"
            loading="eager"
          />
          <figcaption className="td-hero__cap">
            Otevřeno v pracovní dny 8:00–16:30
          </figcaption>
        </figure>
      </section>

      <section className="td-police" id="police" aria-labelledby="police-nadpis">
        <div className="td-section-head">
          <h2 className="td-section-title" id="police-nadpis">
            Co u nás najdete
          </h2>
          <p className="td-section-sub">
            Nabídku jsme srovnali tak, jak ji projdete v prodejně — od vchodu až
            k pokladně.
          </p>
        </div>
        <ol className="td-shelf">
          {police.map((p) => (
            <li className="td-shelf__item" key={p.kod}>
              <span className="td-shelf__kod" aria-hidden="true">
                {p.kod}
              </span>
              <div className="td-shelf__body">
                <h3 className="td-shelf__nazev">{p.nazev}</h3>
                <p className="td-shelf__popis">{p.popis}</p>
                <p className="td-shelf__regal">{p.regal}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="td-duvera" aria-labelledby="duvera-nadpis">
        <figure className="td-duvera__figure">
          <img
            src="/section-1.webp"
            alt="Prodavačka z drogerie Teta radí zákaznici u regálu s péčí o pleť"
            className="td-duvera__img"
            loading="lazy"
          />
        </figure>
        <div className="td-duvera__text">
          <p className="td-eyebrow">Proč právě k nám</p>
          <h2 className="td-section-title" id="duvera-nadpis">
            Malá drogerie, která vás zná jménem
          </h2>
          <ul className="td-facts">
            <li className="td-facts__item">
              <span className="td-facts__k">Teta klub</span>
              <span className="td-facts__v">
                Sbírejte body za každý nákup a plaťte jimi. Přihlásíme vás rovnou
                u pokladny.
              </span>
            </li>
            <li className="td-facts__item">
              <span className="td-facts__k">Týdenní leták</span>
              <span className="td-facts__v">
                Akční ceny na to, co doma potřebujete pořád — od pracích gelů po
                zubní pasty.
              </span>
            </li>
            <li className="td-facts__item">
              <span className="td-facts__k">Poradenství</span>
              <span className="td-facts__v">
                Nevíte, co na citlivou pleť nebo barvené vlasy? Zeptejte se — a
                odejdete s jistotou.
              </span>
            </li>
          </ul>
          <p className="td-duvera__kontakt">
            Potřebujete poradit hned?{" "}
            <a href={`mailto:${usti.email}`}>{usti.email}</a> nebo{" "}
            <a href={`tel:${usti.telefon.replace(/\s/g, "")}`}>{usti.telefon}</a>,
            pracovní dny 8:00–16:30.
          </p>
          <figure className="td-duvera__fig2">
            <img
              src="/section-2.webp"
              alt="Výběr drogerie a kosmetiky z prodejny Teta v Ústí nad Labem"
              className="td-duvera__img2"
              loading="lazy"
            />
          </figure>
        </div>
      </section>
    </main>
  );
}

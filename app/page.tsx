import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servis oken Liberec — seřízení, těsnění, opravy kování",
  description:
    "Pozáruční servis a opravy plastových, hliníkových i dřevěných oken a dveří v Liberci a Jablonci nad Nisou. Seřízení, výměna těsnění a skel, oprava kování, rovnání balkonových dveří.",
  openGraph: {
    title: "Servis oken Liberec — okno zase těsní a lehce jde",
    description:
      "Netěsní vám okno, drhne klika nebo zapadá balkonové dveře? Přijedu do Liberce a okolí, seřídím kování a vyměním těsnění.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const zavady = [
  {
    kod: "ZAV.",
    nazev: "Táhne od okna",
    popis:
      "Prasklé nebo slehlé těsnění pustí dovnitř chlad. Vyměním pryžové těsnění po celém obvodu křídla a okno zase těsní.",
  },
  {
    kod: "ZAV.",
    nazev: "Klika drhne nebo nedovře",
    popis:
      "Kování se rozladí a křídlo dosedá nakřivo. Seřídím excentry a závěsy, aby klika šla lehce a okno dovřelo na první pokus.",
  },
  {
    kod: "ZAV.",
    nazev: "Zamlžené sklo",
    popis:
      "Když je mezi tabulemi vlhko, dvojsklo dosloužilo. Zaměřím a vyměním termoizolační sklo, staré odvezu.",
  },
  {
    kod: "ZAV.",
    nazev: "Prohnuté balkonové dveře",
    popis:
      "Velké křídlo časem klesne a škrábe o rám. Vyrovnám ho a přenastavím tak, aby zase chodilo bez zvedání.",
  },
];

const duvody = [
  {
    cislo: "01",
    titulek: "Servis, ne prodej nových oken",
    text:
      "Nechci vám prodat nová okna. Skoro vždycky stačí seřízení, těsnění nebo nové sklo — a to je zlomek ceny výměny.",
  },
  {
    cislo: "02",
    titulek: "I když už výrobce neexistuje",
    text:
      "Postarám se i o okna po záruce nebo od firem, které skončily. Kování většiny značek znám a náhradní díly seženu.",
  },
  {
    cislo: "03",
    titulek: "Z Liberce, přijedu i do Jablonce",
    text:
      "Jezdím po Liberci, Jablonci nad Nisou a okolních obcích. Termín většinou domluvíme do pár dní.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="brand" href="#" aria-label="Servis oken Liberec — domů">
          <span className="brand__mark" aria-hidden="true">
            <span className="brand__pane" />
            <span className="brand__pane" />
            <span className="brand__pane" />
            <span className="brand__pane" />
          </span>
          <span className="brand__name">
            Servis&nbsp;oken
            <em>Liberec</em>
          </span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#zavady">Co spravím</a>
          <a href="#duvera">Proč já</a>
          <a className="nav__call" href="tel:+420720000000">
            Zavolat
          </a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__frame">
          <img
            className="hero__img"
            src="/hero.webp"
            alt="Ruka seřizuje kování otevřeného plastového okna"
            width={1280}
            height={860}
          />
          <span className="hero__stamp">Liberec &amp; Jablonec n. N.</span>
        </div>
        <div className="hero__text">
          <p className="eyebrow">Pozáruční servis oken a dveří</p>
          <h1 id="hero-title">
            Okno má zase
            <br />
            <span className="hero__accent">těsnit a lehce jít.</span>
          </h1>
          <p className="hero__lead">
            Netáhne vám od rámu, drhne klika nebo nedovřete balkonové dveře?
            Přijedu, seřídím kování a vyměním, co dosloužilo — bez toho, abych
            vám hned prodával nová okna.
          </p>
          <div className="hero__cta">
            <a className="btn btn--solid" href="tel:+420720000000">
              Zavolat a domluvit termín
            </a>
            <a className="btn btn--ghost" href="#zavady">
              Co všechno spravím
            </a>
          </div>
        </div>
      </section>

      <section className="zavady" id="zavady" aria-labelledby="zavady-title">
        <div className="section-head">
          <p className="eyebrow">Nejčastější závady</p>
          <h2 id="zavady-title">Řeknete, co dělá — poznám, co s tím.</h2>
          <p className="section-head__note">
            Plastová, hliníková i eurookna a dveře. Většinu závad zvládnu na
            místě během jedné návštěvy.
          </p>
        </div>
        <ol className="cards">
          {zavady.map((z) => (
            <li className="card" key={z.nazev}>
              <h3 className="card__title">{z.nazev}</h3>
              <p className="card__text">{z.popis}</p>
            </li>
          ))}
        </ol>
        <div className="zavady__media">
          <img
            src="/section-1.webp"
            alt="Detail seřizování kování okenního křídla imbusovým klíčem"
            width={1120}
            height={720}
            loading="lazy"
          />
          <p className="zavady__caption">
            Kování se seřizuje po milimetrech — proto okno po servisu dosedá
            rovně a klika jde lehce.
          </p>
        </div>
      </section>

      <section className="duvera" id="duvera" aria-labelledby="duvera-title">
        <div className="duvera__media">
          <img
            src="/section-2.webp"
            alt="Nářadí a nové těsnění připravené k opravě okna"
            width={1120}
            height={780}
            loading="lazy"
          />
        </div>
        <div className="duvera__body">
          <p className="eyebrow">Proč to nechat na mně</p>
          <h2 id="duvera-title">Opravář oken z Liberce, ne prodejce.</h2>
          <ol className="reasons">
            {duvody.map((d) => (
              <li className="reason" key={d.cislo}>
                <span className="reason__num" aria-hidden="true">
                  {d.cislo}
                </span>
                <div>
                  <h3 className="reason__title">{d.titulek}</h3>
                  <p className="reason__text">{d.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}

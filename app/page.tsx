import type { CSSProperties } from "react";

export default function Page() {
  const zaber = [
    {
      cislo: "01",
      spara: "Interiéry",
      titulek: "Schody, dveře a nábytek na míru",
      popis:
        "Samonosné celodřevěné schody, otočné i posuvné dveře, kuchyně a vestavné skříně. Sesadíme z masivu i dýhy tak, aby letokruhy navazovaly a spára byla vlásková.",
      body: [
        "Schodiště — samonosné, sedlové, vřetenové, mlynářské",
        "Interiérové dveře — otočné, bezfalcové, posuvné",
        "Kuchyňské linky, postele, lavice a stoly",
        "Podlahy, stěnové a stropní obklady",
        "Regály a vinotéky na archivaci vína",
      ],
      obrazek: "/section-1.webp",
      alt: "Detail interiérové stolařské práce z masivního dřeva",
    },
    {
      cislo: "02",
      spara: "Exteriéry",
      titulek: "Vrata, pergoly, terasy a fasády",
      popis:
        "To, co drží déšť, mráz i ostravské léto. Vstupní dveře a vrata, celodřevěné balkóny, kastlíková okna a provětrávané fasády — poskládané tak, aby vydržely desítky let venku.",
      body: [
        "Vstupní dveře a garážová vrata",
        "Pergoly, přístřešky, ploty a zahradní posezení",
        "Dřevěné terasy a celodřevěné balkóny",
        "Kastlíková okna a fasádní obklady (CETRIS, HPL)",
        "Krovy, mostky, kryté stání a zahradní domky",
      ],
      obrazek: "/section-2.webp",
      alt: "Exteriérová dřevěná konstrukce a fasáda",
    },
  ];

  return (
    <main className="page">
      <header className="top">
        <a className="wordmark" href="#" aria-label="Stolařství Šputa, Ostrava">
          <span className="wordmark__name">Šputa</span>
          <span className="wordmark__sub">stolařství · Ostrava · od 1999</span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#interiery">Stolárna</a>
          <a href="#drevostavby">Dřevostavby</a>
          <a href="#dilna">O dílně</a>
          <a className="nav__call" href="tel:+420602574369">
            +420 602 574 369
          </a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-nadpis">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Masivní dřevo v ostravské dílně Stolařství Šputa"
            className="hero__img"
          />
        </div>
        <div className="hero__panel">
          <p className="hero__eyebrow">Zakázková stolárna · Stará Bělá</p>
          <h1 id="hero-nadpis" className="hero__nadpis">
            Ze dřeva<br />
            <span className="hero__zvyraz">vyrobíme</span><br />
            i postavíme.
          </h1>
          <p className="hero__text">
            Stolárna, truhlárna, tesařství. Od schodiště a kuchyně přes
            kastlíková okna až po celou dřevostavbu — vždycky z poctivého
            masivu a s návazností letokruhů.
          </p>
          <div className="hero__akce">
            <a className="btn btn--plny" href="tel:+420602574369">
              Zavolat do dílny
            </a>
            <a className="btn btn--linka" href="#interiery">
              Co umíme ze dřeva
            </a>
          </div>
          <dl className="hero__fakta">
            <div>
              <dt>V oboru</dt>
              <dd>od roku 1999</dd>
            </div>
            <div>
              <dt>Praxe řemeslníků</dt>
              <dd>15+ let každý</dd>
            </div>
            <div>
              <dt>Kde</dt>
              <dd>Ostrava, Stará Bělá</dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="interiery" className="zabery" aria-label="Co ze dřeva děláme">
        {zaber.map((z) => (
          <article className="zaber" key={z.cislo}>
            <div className="zaber__media">
              <img
                src={z.obrazek}
                alt={z.alt}
                className="zaber__img"
                loading="lazy"
              />
              <span className="zaber__cislo" aria-hidden="true">
                {z.cislo}
              </span>
            </div>
            <div className="zaber__text">
              <p className="zaber__spara">{z.spara}</p>
              <h2 className="zaber__titulek">{z.titulek}</h2>
              <p className="zaber__popis">{z.popis}</p>
              <ul className="zaber__list">
                {z.body.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section
        id="drevostavby"
        className="stavby"
        aria-labelledby="stavby-nadpis"
      >
        <div className="stavby__blok">
          <p className="stavby__spara">03 · Dřevostavby</p>
          <h2 id="stavby-nadpis" className="stavby__nadpis">
            Postavíme dům, o kterém jste snili.
          </h2>
          <p className="stavby__text">
            Dřevostavba znamená rychlou výstavbu, přírodní materiály a nižší
            pořizovací cenu než u zděného domu — a přitom komfortní, teplé
            bydlení. Vedeme vás od krovu po fasádu, celé v jedné dílně.
          </p>
          <a className="btn btn--plny" href="tel:+420724552092">
            Probrat stavbu: 724 552 092
          </a>
        </div>

        <div id="dilna" className="dilna">
          <p className="dilna__spara">O dílně</p>
          <p className="dilna__lead">
            Naše stolárna vznikla v Ostravě v roce 1999. Pracujeme s jakostním
            masivem vysoké kvality; na přání dodáme dřevo přesně podle vašich
            představ. Nábytek i stavby děláme tak, aby přežily víc než jednu
            generaci.
          </p>
          <ul className="dilna__grid">
            <li>
              <span className="dilna__cislo">1999</span>
              <span className="dilna__popisek">
                Založení stolárny ve Staré Bělé
              </span>
            </li>
            <li>
              <span className="dilna__cislo">Po–Pá</span>
              <span className="dilna__popisek">
                7:00–15:30, konzultaci předem domluvte telefonem
              </span>
            </li>
            <li>
              <span className="dilna__cislo">Masiv</span>
              <span className="dilna__popisek">
                Dub, smrk, dýha i laminát podle zakázky
              </span>
            </li>
          </ul>
          <address className="dilna__kontakt">
            <a href="tel:+420602574369">+420 602 574 369</a>
            <a href="mailto:stolarna@stolarna.cz">stolarna@stolarna.cz</a>
            <span>Blanická 252/172, 724 00 Ostrava — Stará Bělá</span>
          </address>
        </div>
      </section>
    </main>
  );
}

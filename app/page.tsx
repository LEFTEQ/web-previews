import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main className="vz">
      {/* ------------------------------------------------------- HERO */}
      <header className="vz-top">
        <a className="vz-mark" href="#" aria-label="Vaše zahrada, zahradní architektura">
          <span className="vz-mark__a">vaše</span>
          <span className="vz-mark__b">zahrada</span>
          <span className="vz-mark__dot" aria-hidden="true" />
        </a>
        <nav className="vz-nav" aria-label="Hlavní">
          <a href="#navrhy">Návrhy</a>
          <a href="#atelier">Atelier</a>
          <a href="tel:+420737634062" className="vz-nav__call">737&nbsp;634&nbsp;062</a>
        </nav>
      </header>

      <section className="vz-hero">
        <div className="vz-hero__frame">
          <img
            className="vz-hero__img"
            src="/hero.webp"
            width={1600}
            height={1000}
            alt="Realizovaná soukromá zahrada od atelieru Vaše zahrada — trvalkové záhony, trávník a vzrostlé stromy"
          />
          <span className="vz-hero__grain" aria-hidden="true" />
        </div>

        <div className="vz-hero__panel">
          <p className="vz-eyebrow">
            <span>Ostrava-Zábřeh</span>
            <span aria-hidden="true">·</span>
            <span>od 2013</span>
          </p>
          <h1 className="vz-hero__title">
            Zahrada
            <br />
            začíná
            <br />
            <em>snem</em>
          </h1>
          <p className="vz-hero__lead">
            Navrhujeme a realizujeme soukromé zahrady, parky a sídelní zeleň —
            od prvních skic přes 3D vizualizaci až po výsadbu a dlouhá léta péče.
          </p>
          <div className="vz-hero__cta">
            <a className="vz-btn" href="tel:+420737634062">Zavolat Davidovi</a>
            <a className="vz-btn vz-btn--ghost" href="#navrhy">Jak pracujeme</a>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------- SEKCE 1 — CESTA */}
      <section id="navrhy" className="vz-work">
        <div className="vz-work__head">
          <p className="vz-eyebrow">Cesta k zahradě</p>
          <h2 className="vz-h2">Tři jara, než se zahrada rozroste</h2>
          <p className="vz-work__intro">
            Zahradu nedoděláme za víkend a ani to neslibujeme. Vedeme vás od
            prázdného pozemku k místu, které dýchá — a zůstáváme, i když už
            kvete.
          </p>
        </div>

        <div className="vz-figure">
          <img
            src="/section-1.webp"
            width={1400}
            height={900}
            alt="Detail návrhu a osazení záhonu při realizaci zahrady"
          />
        </div>

        <ol className="vz-steps">
          {STEPS.map((s) => (
            <li key={s.phase} className="vz-step">
              <p className="vz-step__phase">{s.phase}</p>
              <h3 className="vz-step__name">{s.name}</h3>
              <p className="vz-step__note">{s.note}</p>
              <ul className="vz-step__list">
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      {/* ------------------------------------------ SEKCE 2 — REFERENCE */}
      <section id="atelier" className="vz-people">
        <div className="vz-people__grid">
          <div className="vz-people__media">
            <img
              src="/section-2.webp"
              width={1200}
              height={1400}
              alt="Vzrostlá zahrada v přírodní krajině realizovaná atelierem Vaše zahrada"
            />
            <figcaption className="vz-people__cap">
              David Vaníček, DiS. — zahradní designér a jednatel
            </figcaption>
          </div>

          <div className="vz-people__text">
            <p className="vz-eyebrow">Kdo za tím stojí</p>
            <blockquote className="vz-credo">
              „Zahrada je láska a práce na celý život, stejně jako naše děti.“
            </blockquote>
            <p className="vz-people__body">
              Tvoříme od roku 2013 a každý pozemek bereme jako jediný svého
              druhu — přizpůsobíme mu tvar cest, výběr trvalek i to, kam padne
              odpolední stín. Práci Davida Vaníčka jste mohli vidět i v pořadu
              České televize.
            </p>

            <div className="vz-quotes">
              {QUOTES.map((q) => (
                <figure key={q.name} className="vz-quote">
                  <blockquote>{q.text}</blockquote>
                  <figcaption>
                    <span className="vz-quote__name">{q.name}</span>
                    <span className="vz-quote__place">{q.place}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>

        <address className="vz-contact" style={{ "--d": "0" } as CSSProperties}>
          <span className="vz-contact__label">Atelier</span>
          <span>Svazácká 2204/15, 700 30 Ostrava-Zábřeh</span>
          <a href="mailto:david.vanicek@vasezahrada.cz">david.vanicek@vasezahrada.cz</a>
          <a href="tel:+420737634062">737 634 062</a>
        </address>
      </section>
    </main>
  );
}

const STEPS = [
  {
    phase: "Rok první — jaro",
    name: "Studie",
    note: "Nejdřív pochopíme pozemek i vás. Pak kreslíme.",
    items: [
      "Konzultace přímo na místě a analýza prostoru",
      "Koncept a 3D vizualizace, ať si zahradu projdete",
      "Výběr rostlin, materiálů a doplňků",
      "Detailní projektová dokumentace",
    ],
  },
  {
    phase: "Rok první — léto",
    name: "Realizace",
    note: "Terén, voda, výsadba — zahrada na klíč.",
    items: [
      "Terénní úpravy a modelace pozemku",
      "Výsadba stromů, keřů a trvalek",
      "Závlahové systémy a pokládka trávníku",
      "Cesty, zídky, pergoly i vodní prvky",
    ],
  },
  {
    phase: "Každé další jaro",
    name: "Údržba",
    note: "Zůstáváme, aby zahrada zrála a nezplaněla.",
    items: [
      "Pravidelná péče o trávník a záhony",
      "Sezónní řezy stromů a keřů",
      "Hnojení a ochrana proti škůdcům",
      "Revize a servis závlahy",
    ],
  },
];

const QUOTES = [
  {
    text:
      "Máme rádi přírodu, volnost a zahradu, která dýchá a žije. Přesně takovou máme — a děkujeme za ni.",
    name: "Heckelovi",
    place: "Jeseník",
  },
  {
    text:
      "Přál jsem si anglicko-venkovskou zahradu. Nová zahrada voní, hraje barvami a cítíme se v ní dobře.",
    name: "Bohuslav Hamrozi",
    place: "Řeka",
  },
  {
    text:
      "Mám ráda barvy, vůně květin a sklenku vína při západu slunce. Byla to správná volba.",
    name: "Kateřina Camerino",
    place: "Pržno",
  },
];

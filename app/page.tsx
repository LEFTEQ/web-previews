import type { CSSProperties } from "react";

const steps = [
  {
    n: "01",
    t: "Zaměření zdarma",
    tag: "na milimetr",
    d: "Přijedeme k vám, přeměříme každý otvor a poradíme s profilem, kováním i barvou. Nezávazně a bez jediné koruny předem.",
  },
  {
    n: "02",
    t: "Cenová nabídka",
    tag: "bez skrytých položek",
    d: "Do pár dní dostanete přehlednou nabídku — okna, montáž i zednické začištění v jedné ceně. Žádné dopočítávání po práci.",
  },
  {
    n: "03",
    t: "Montáž na míru",
    tag: "většinou za jeden den",
    d: "Zkušení montážníci vysadí stará okna, osadí nová a utěsní je podle normy. U běžného bytu jsme hotoví během jednoho dne.",
  },
  {
    n: "04",
    t: "Začištění a úklid",
    tag: "stará okna odvezeme",
    d: "Zednicky začistíme ostění, po sobě uklidíme a stará okna odvezeme k likvidaci. Zůstane vám jen hotová práce.",
  },
];

const spec = [
  { k: "Profil", v: "82 mm, vícekomorový" },
  { k: "Zasklení", v: "izolační trojsklo, Uw od 0,8 W/m²K" },
  { k: "Praxe", v: "18 let v Karlových Varech a okolí" },
  { k: "V ceně", v: "demontáž, zednické začištění, likvidace" },
  { k: "Zaměření", v: "zdarma a nezávazně" },
  { k: "Záruka", v: "na okna i na montáž" },
];

const PaneMark = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" className="mark">
    <rect x="1.5" y="1.5" width="21" height="21" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <line x1="12" y1="2" x2="12" y2="22" stroke="currentColor" strokeWidth="1.6" />
    <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="LiPa Window — plastová okna, Karlovy Vary">
          <span className="brand__mark"><PaneMark /></span>
          <span className="brand__word">
            <b>LiPa</b> Window
          </span>
        </a>
        <nav className="nav" aria-label="Hlavní navigace">
          <a href="#postup">Jak to probíhá</a>
          <a href="#onas">O nás</a>
        </nav>
        <a className="btn btn--sm" href="#onas">Poptat zaměření</a>
      </header>

      <section className="hero" id="top">
        <div className="hero__text reveal">
          <p className="eyebrow">Okna · dveře · vrata — Karlovy Vary od&nbsp;roku&nbsp;2006</p>
          <h1 className="hero__title">
            Nová okna,
            <br />
            která ucítíte<br /> hned první zimu.
          </h1>
          <p className="lead">
            Zaměříme, vyrobíme na míru a starou špaletu po sobě uklidíme. Přes osmnáct let
            montujeme plastová okna a dveře v&nbsp;Karlových Varech a&nbsp;okolí — s&nbsp;důrazem
            na těsnost, ticho a čistou práci.
          </p>
          <div className="hero__actions">
            <a className="btn" href="#onas">Poptat bezplatné zaměření</a>
            <a className="link-arrow" href="#postup">
              Jak montáž probíhá <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="dim" aria-hidden="true">
            <span className="dim__tick" />
            <span className="dim__rule" />
            <span className="dim__val">82 mm profil · trojsklo · Uw 0,8</span>
            <span className="dim__rule" />
            <span className="dim__tick" />
          </div>
        </div>

        <figure className="hero__media reveal reveal--2">
          <div className="framewin">
            <span className="corner corner--tl" aria-hidden="true" />
            <span className="corner corner--tr" aria-hidden="true" />
            <span className="corner corner--bl" aria-hidden="true" />
            <span className="corner corner--br" aria-hidden="true" />
            <span className="sheen" aria-hidden="true" />
            <img
              src="/hero.webp"
              alt="Nově osazené plastové okno s izolačním trojsklem v obytné místnosti"
              className="framewin__img"
            />
          </div>
          <figcaption className="framewin__cap">
            <span className="tag-dot" /> Realizace — plastové okno, antracitový profil
          </figcaption>
        </figure>
      </section>

      <section className="section" id="postup">
        <div className="section__head">
          <p className="eyebrow eyebrow--green">Postup — od&nbsp;telefonu k&nbsp;čistému ostění</p>
          <h2 className="section__title">Čtyři kroky, u&nbsp;kterých se nemusíte o&nbsp;nic starat.</h2>
        </div>

        <div className="process">
          <ol className="steps">
            {steps.map((s) => (
              <li className="step" key={s.n}>
                <span className="step__n">{s.n}</span>
                <div className="step__body">
                  <h3 className="step__t">
                    {s.t} <span className="step__tag">{s.tag}</span>
                  </h3>
                  <p className="step__d">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>

          <figure className="process__media">
            <div className="framewin framewin--slim">
              <span className="corner corner--tl" aria-hidden="true" />
              <span className="corner corner--br" aria-hidden="true" />
              <img
                src="/section-1.webp"
                alt="Montážník osazuje a těsní nové plastové okno na stavbě"
                className="framewin__img"
              />
            </div>
            <div className="dim dim--tight" aria-hidden="true">
              <span className="dim__tick" />
              <span className="dim__rule" />
              <span className="dim__val">montáž dle ČSN · utěsnění ve třech rovinách</span>
              <span className="dim__rule" />
              <span className="dim__tick" />
            </div>
          </figure>
        </div>
      </section>

      <section className="section section--onas" id="onas">
        <div className="onas">
          <figure className="onas__media">
            <div className="framewin">
              <span className="corner corner--tr" aria-hidden="true" />
              <span className="corner corner--bl" aria-hidden="true" />
              <img
                src="/section-2.webp"
                alt="Prosvětlená místnost s novými plastovými okny od LiPa Window"
                className="framewin__img"
              />
            </div>
          </figure>

          <div className="onas__text">
            <p className="eyebrow eyebrow--green">Proč LiPa Window</p>
            <h2 className="section__title">
              Okno je jen tak dobré, jak dobrá je jeho montáž.
            </h2>
            <p className="lead lead--tight">
              Vybíráme profily a kování, které splňují všechny normy — ale rozdíl mezi „nová okna“
              a „konečně teplo a ticho“ dělá řemeslo montáže. Náš tým osazuje a těsní okna už
              osmnáct let a za svou práci ručí.
            </p>

            <div className="sheet" role="table" aria-label="Parametry a služby">
              {spec.map((row) => (
                <div className="sheet__row" role="row" key={row.k}>
                  <span className="sheet__k" role="cell">{row.k}</span>
                  <span className="sheet__v" role="cell">{row.v}</span>
                </div>
              ))}
            </div>

            <blockquote className="quote">
              „Přijeli přesně na čas, za den vyměnili pět oken a po sobě všechno uklidili.
              V&nbsp;ložnici je od&nbsp;té doby ticho, jako by ulice zmizela.“
              <cite>— manželé Kučerovi, Stará Role</cite>
            </blockquote>

            <address className="place">
              <span className="tag-dot" />
              LiPa Window s.r.o. · Hraniční 201, Sedlec · 360 10 Karlovy&nbsp;Vary
            </address>
          </div>
        </div>
      </section>
    </main>
  );
}

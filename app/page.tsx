import type { CSSProperties } from "react";

const services = [
  {
    no: "01",
    name: "Kontejnerová autodoprava",
    spec: "do 7 t",
    desc: "Přistavíme kontejner, odvezeme suť, odpad i zeminu. Nakládka i odvoz na sběrný dvůr v jednom.",
  },
  {
    no: "02",
    name: "Valníková autodoprava",
    spec: "sypké i kusové",
    desc: "Písek, zemina, beton, stavební dřevo. Materiál na stavbu navezeme tam, kam potřebujete.",
  },
  {
    no: "03",
    name: "Stěhování",
    spec: "Iveco Eurocargo · 360 Kč/h",
    desc: "Byty, kanceláře i celé provozy po celé ČR. Vyklidíme objekt a zbytek odvezeme do sběrného dvora.",
  },
  {
    no: "04",
    name: "Zemní a výkopové práce",
    spec: "výkop · odvoz",
    desc: "Výkopy, terénní úpravy a odvoz vytěžené zeminy. Domluvíme se podle rozsahu stavby.",
  },
];

export default function Page() {
  return (
    <main className="ad">
      <header className="ad-top">
        <a className="ad-mark" href="#" aria-label="Autodoprava Liberec, úvod">
          <span className="ad-mark-line">AUTODOPRAVA</span>
          <span className="ad-mark-city">LIBEREC<span className="ad-mark-dot">·</span>s.r.o.</span>
        </a>
        <a className="ad-callbtn" href="tel:+420777810245">
          <span className="ad-callbtn-label">Dispečink</span>
          <span className="ad-callbtn-num">777 810 245</span>
        </a>
      </header>

      <section className="ad-hero">
        <div className="ad-hero-media">
          <img
            src="/hero.webp"
            alt="Nákladní valník Autodopravy Liberec připravený k odvozu materiálu"
            className="ad-hero-img"
          />
          <span className="ad-hero-tag">LIST&nbsp;01 — NALOŽENO</span>
        </div>
        <div className="ad-hero-text">
          <p className="ad-eyebrow">Liberec a okolí · od roku 1998 na silnici</p>
          <h1 className="ad-h1">
            Naložíme,<br />odvezeme,<br /><span className="ad-h1-accent">vyklidíme.</span>
          </h1>
          <p className="ad-lead">
            Kontejnery, valník, stěhování i zemní práce. Jeden telefon a o váš
            náklad je postaráno — od písku na stavbu po vyklizení sklepa.
          </p>
          <div className="ad-hero-actions">
            <a className="ad-btn ad-btn-primary" href="tel:+420777810245">
              Zavolat dispečink
            </a>
            <a className="ad-btn ad-btn-ghost" href="mailto:autodopravaliberec@seznam.cz">
              Napsat poptávku
            </a>
          </div>
        </div>
      </section>

      <section className="ad-services" aria-labelledby="sluzby-h">
        <div className="ad-sec-head">
          <span className="ad-sec-no">§ 02</span>
          <h2 id="sluzby-h" className="ad-h2">Co naložíme na korbu</h2>
          <p className="ad-sec-sub">Ceny domlouváme podle vzdálenosti a objemu. Tady jsou pevné body.</p>
        </div>

        <ol className="ad-manifest">
          {services.map((s) => (
            <li className="ad-row" key={s.no}>
              <span className="ad-row-no">{s.no}</span>
              <div className="ad-row-main">
                <h3 className="ad-row-name">{s.name}</h3>
                <p className="ad-row-desc">{s.desc}</p>
              </div>
              <span className="ad-row-spec">{s.spec}</span>
            </li>
          ))}
        </ol>

        <figure className="ad-fig">
          <img
            src="/section-1.webp"
            alt="Kontejner přistavený na ulici, naložený stavební sutí"
            className="ad-fig-img"
          />
          <figcaption className="ad-fig-cap">Kontejner do 7 t — přistavíme i odvezeme.</figcaption>
        </figure>
      </section>

      <section className="ad-about" aria-labelledby="onas-h">
        <figure className="ad-fig ad-fig-wide">
          <img
            src="/section-2.webp"
            alt="Řidič Autodopravy Liberec u nákladního vozu během nakládky"
            className="ad-fig-img"
          />
        </figure>
        <div className="ad-about-text">
          <span className="ad-sec-no">§ 03</span>
          <h2 id="onas-h" className="ad-h2">Místní firma, která zvedne telefon</h2>
          <p className="ad-about-p">
            Jsme malá liberecká autodoprava — žádné call centrum, žádné čekání.
            Domluvíte se přímo s tím, kdo k vám přijede. Známe město, příjezdové
            cesty i to, kde se dá zaparkovat náklaďák.
          </p>
          <dl className="ad-facts">
            <div className="ad-fact">
              <dt>Vozový park</dt>
              <dd>Iveco Eurocargo · valník · kontejner do 7 t</dd>
            </div>
            <div className="ad-fact">
              <dt>Dojezd</dt>
              <dd>Liberec a okolí, stěhování po celé ČR</dd>
            </div>
            <div className="ad-fact">
              <dt>Sídlo</dt>
              <dd>Dvorská 308, Liberec 5</dd>
            </div>
          </dl>
          <div className="ad-contact-card">
            <a className="ad-contact-line" href="tel:+420777810245">
              <span>Telefon</span><strong>+420 777 810 245</strong>
            </a>
            <a className="ad-contact-line" href="mailto:autodopravaliberec@seznam.cz">
              <span>E-mail</span><strong>autodopravaliberec@seznam.cz</strong>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

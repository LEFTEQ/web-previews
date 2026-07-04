import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ATROS sádrokartony — sádrokartonářské práce Praha",
  description:
    "ATROS sádrokartony s.r.o. — příčky, podhledy a sádrokartonové konstrukce v Praze. Rovné hrany, přesné rohy, uklizeno po sobě. Přijedeme zaměřit zdarma.",
  openGraph: {
    title: "ATROS sádrokartony — sádrokartonářské práce Praha",
    description:
      "Příčky, podhledy a sádrokartonové konstrukce v Praze. Rovné hrany, přesné rohy, uklizeno po sobě.",
    images: ["/hero.webp"],
    type: "website",
    locale: "cs_CZ",
  },
};

const sluzby = [
  {
    id: "01",
    nazev: "Příčky a předstěny",
    popis:
      "Rozdělíme byt, ordinaci i kancelář přesně tam, kde to potřebujete. Dvojité opláštění s izolací tam, kde jde o klid — soused za stěnou vás už neuslyší.",
    detail: "CW/UW profily · minerální izolace · desky 12,5 mm",
  },
  {
    id: "02",
    nazev: "Sádrokartonové podhledy",
    popis:
      "Rovný strop bez prasklin, schované rozvody i vzduchotechnika. Připravíme prostupy pro bodovky a LED pásky tak, aby seděly na milimetr.",
    detail: "zavěšené podhledy · osazení svítidel · revizní dvířka",
  },
  {
    id: "03",
    nazev: "Niky, obklady a atypy",
    popis:
      "Zapuštěná police do koupelny, oblouk nad průchodem, obložení šikmin v podkroví. Co si narýsujete, to z desek postavíme.",
    detail: "ohýbané oblouky · šikminy · zelené desky do vlhka",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="ATROS sádrokartony, úvod">
          <span className="wordmark__a">ATROS</span>
          <span className="wordmark__sub">sádrokartony</span>
        </a>
        <a className="topbar__call" href="tel:+420776112233">
          776&nbsp;112&nbsp;233
        </a>
      </header>

      <section className="hero">
        <div className="hero__grid">
          <div className="hero__text">
            <p className="eyebrow">Sádrokartonáři · Praha a okolí</p>
            <h1 className="hero__title">
              Stěna, která<br />
              stojí <span className="hero__accent">na fous</span> rovně.
            </h1>
            <p className="hero__lead">
              Postavíme příčky, podhledy a atypické konstrukce, na kterých pak
              vodováha ani nehne. Přijedeme zaměřit, řekneme cenu předem a po
              sobě zameteme.
            </p>
            <div className="hero__cta">
              <a className="btn btn--solid" href="tel:+420776112233">
                Zavolat a domluvit zaměření
              </a>
              <a className="btn btn--ghost" href="mailto:poptavka@sadrokartony-atros.cz">
                Napsat poptávku
              </a>
            </div>
          </div>

          <figure className="hero__figure">
            <img
              src="/hero.webp"
              alt="Rozestavěná sádrokartonová konstrukce příčky s kovovými CW profily před opláštěním deskou"
              className="hero__img"
              width={1200}
              height={1500}
            />
            <figcaption className="hero__tag">
              <span className="hero__tagline" />
              Konstrukce před opláštěním — profily po&nbsp;625&nbsp;mm
            </figcaption>
          </figure>
        </div>

        <ul className="scale" aria-label="Na čem si zakládáme">
          <li className="scale__item">
            <span className="scale__k">2&nbsp;mm</span>
            <span className="scale__v">tolerance rovinnosti na dvoumetrové lati</span>
          </li>
          <li className="scale__item">
            <span className="scale__k">625&nbsp;mm</span>
            <span className="scale__v">rozteč profilů, nic neproklesne</span>
          </li>
          <li className="scale__item">
            <span className="scale__k">Q2–Q4</span>
            <span className="scale__v">stupeň finálního tmelení dle přání</span>
          </li>
        </ul>
      </section>

      <section className="services" aria-labelledby="services-title">
        <div className="section-head">
          <p className="eyebrow">Co postavíme</p>
          <h2 id="services-title" className="section-title">
            Z profilů a desek uděláme prostor, který dává smysl
          </h2>
        </div>

        <div className="services__media">
          <img
            src="/section-1.webp"
            alt="Zavěšený sádrokartonový podhled s připravenými otvory pro bodová svítidla"
            className="framed"
            width={1200}
            height={800}
          />
        </div>

        <ol className="cards">
          {sluzby.map((s) => (
            <li key={s.id} className="card">
              <span className="card__num">{s.id}</span>
              <h3 className="card__title">{s.nazev}</h3>
              <p className="card__desc">{s.popis}</p>
              <p className="card__detail">{s.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="trust" aria-labelledby="trust-title">
        <div className="trust__grid">
          <div className="trust__media">
            <img
              src="/section-2.webp"
              alt="Hotová vytmelená sádrokartonová stěna připravená k malbě, hrany zaručeny rohovými lištami"
              className="framed"
              width={1000}
              height={1200}
            />
          </div>

          <div className="trust__text">
            <p className="eyebrow">O nás</p>
            <h2 id="trust-title" className="section-title">
              Parta, co bere řemeslo jako podpis
            </h2>
            <p className="trust__lead">
              ATROS sádrokartony jsou tři lidi, kteří v Praze montují
              sádrokarton už přes patnáct let — od panelákových bytů na Jižním
              Městě po půdní vestavby na Vinohradech. Práci předáváme uklizenou
              a rovnou, aby po nás mohl hned nastoupit malíř.
            </p>

            <dl className="facts">
              <div className="facts__row">
                <dt>Kde pracujeme</dt>
                <dd>Praha a okolí do 30 km</dd>
              </div>
              <div className="facts__row">
                <dt>Jak to běží</dt>
                <dd>zaměření zdarma → cena předem → montáž → úklid</dd>
              </div>
              <div className="facts__row">
                <dt>Materiál</dt>
                <dd>Rigips a Knauf, na vlhko impregnované desky</dd>
              </div>
            </dl>

            <blockquote className="quote">
              „Přišli na čas, za dva dny stála příčka i podhled a v bytě po nich
              zůstal jen zametený beton. Cena seděla na korunu.“
              <cite>— Petra H., rekonstrukce bytu, Praha&nbsp;3</cite>
            </blockquote>

            <p className="trust__contact">
              Ozvěte se —{" "}
              <a href="tel:+420776112233">776&nbsp;112&nbsp;233</a> nebo{" "}
              <a href="mailto:poptavka@sadrokartony-atros.cz">
                poptavka@sadrokartony-atros.cz
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

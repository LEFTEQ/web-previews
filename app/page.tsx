import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MATTEO s.r.o. — stavební firma, České Budějovice",
  description:
    "Stavíme v jižních Čechách od roku 1992. Bytová a občanská výstavba, průmyslové a vodní stavby, sanace, hydroizolace, injektáže a kotvení masivu.",
};

const sluzby = [
  {
    kod: "BV",
    nazev: "Bytová výstavba",
    popis:
      "Bytové domy i rodinné domy na klíč — od základové desky po předání s kolaudací. Vedeme stavbu tak, abyste se nastěhovali v termínu.",
  },
  {
    kod: "OS",
    nazev: "Občanské stavby",
    popis:
      "Školy, obchodní centra, administrativa. Postavili jsme mimo jiné OC Luka v Praze — velké zakázky s jasným rozpočtem.",
  },
  {
    kod: "PS",
    nazev: "Průmyslové stavby",
    popis:
      "Výrobní haly, sklady a provozy s náročnými nároky na nosnost a technologie. Řešíme i zpevnění podloží.",
  },
  {
    kod: "SH",
    nazev: "Sanace a hydroizolace",
    popis:
      "Zavlhlé zdivo, spodní voda, poškozené konstrukce. Najdeme příčinu a utěsníme stavbu tak, aby vydržela.",
  },
  {
    kod: "IK",
    nazev: "Injektáže a kotvení",
    popis:
      "Zpevňování, těsnění a kotvení horninového masivu i stavebních konstrukcí. Speciální zakládání tam, kde běžné metody nestačí.",
  },
  {
    kod: "VS",
    nazev: "Vodní stavby",
    popis:
      "Jezy, nádrže, opěrné a břehové konstrukce. Stavíme na vodě i pod hladinou spodní vody.",
  },
];

const reference = [
  {
    rok: "2017",
    misto: "Praha",
    nazev: "Obchodní centrum Luka",
    detail: "Dokončení a slavnostní předání kompletní hrubé i dokončovací stavby.",
  },
  {
    rok: "2019",
    misto: "jižní Čechy",
    nazev: "Kotvení horninového masivu",
    detail: "Zpevňování, těsnění a kotvení masivu a stavebních konstrukcí.",
  },
  {
    rok: "2021",
    misto: "České Budějovice",
    nazev: "Pivovarská prodejna Samson",
    detail: "Novostavba prodejny přímo v areálu budějovického pivovaru.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="nav" aria-label="Hlavní">
        <a className="wordmark" href="#" aria-label="MATTEO, domů">
          <span className="wordmark__mark" aria-hidden="true">
            M
          </span>
          <span className="wordmark__text">
            MATTEO<span className="wordmark__sro">s.r.o.</span>
          </span>
        </a>
        <a className="nav__phone" href="tel:+420727982807">
          +420 727 982 807
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__grid" aria-hidden="true">
          <div className="hero__level" />
        </div>

        <div className="hero__inner">
          <p className="hero__eyebrow">
            <span className="hero__since">est. 1992</span>
            <span className="hero__loc">České Budějovice</span>
          </p>

          <h1 id="hero-title" className="hero__title">
            <span className="hero__line hero__line--1">Stavíme</span>
            <span className="hero__line hero__line--2">na pevných</span>
            <span className="hero__line hero__line--3">
              základech<span className="hero__stop">.</span>
            </span>
          </h1>

          <p className="hero__lead">
            Bytové a občanské stavby, průmyslové haly, vodní stavby a speciální
            zakládání. Když jiní couvnou u spodní vody nebo nestabilního
            podloží, my kotvíme a těsníme masiv dál.
          </p>

          <div className="hero__cta">
            <a className="btn btn--solid" href="tel:+420727982807">
              Zavolat na stavbu
            </a>
            <a className="btn btn--ghost" href="#sluzby">
              Co postavíme
            </a>
          </div>

          <dl className="hero__facts">
            <div className="fact">
              <dt>let na stavbách</dt>
              <dd>32</dd>
            </div>
            <div className="fact">
              <dt>oborů výstavby</dt>
              <dd>6</dd>
            </div>
            <div className="fact">
              <dt>kraj</dt>
              <dd>Jihočeský</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-head">
          <p className="section-head__eyebrow">Naše řemeslo</p>
          <h2 id="services-title" className="section-head__title">
            Co pro vás postavíme
          </h2>
          <p className="section-head__note">
            Šest oborů pod jednou firmou — od základové desky po kotvení masivu.
          </p>
        </div>

        <ul className="services__list">
          {sluzby.map((s) => (
            <li className="service" key={s.kod}>
              <span className="service__kod" aria-hidden="true">
                {s.kod}
              </span>
              <div className="service__body">
                <h3 className="service__nazev">{s.nazev}</h3>
                <p className="service__popis">{s.popis}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="trust" id="reference" aria-labelledby="trust-title">
        <div className="section-head">
          <p className="section-head__eyebrow">Reference</p>
          <h2 id="trust-title" className="section-head__title">
            Postaveno, předáno, stojí
          </h2>
          <p className="section-head__note">
            Rodinná stavební firma z náměstí Bratří Čapků. Od roku 1992
            odevzdáváme stavby, které přebírá investor bez připomínek.
          </p>
        </div>

        <ol className="timeline">
          {reference.map((r) => (
            <li className="tl" key={r.rok}>
              <span className="tl__rok">{r.rok}</span>
              <div className="tl__body">
                <h3 className="tl__nazev">{r.nazev}</h3>
                <p className="tl__misto">{r.misto}</p>
                <p className="tl__detail">{r.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="trust__addr">
          MATTEO s.r.o. · nám. Bratří Čapků 6, 370 07 České Budějovice ·{" "}
          <a href="mailto:matteo@matteo.cz">matteo@matteo.cz</a>
        </p>
      </section>
    </main>
  );
}

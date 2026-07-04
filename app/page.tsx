import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEKOS GROUP — stavební firma Olomouc | stavby na klíč, rekonstrukce, elektromontáže",
  description:
    "Stavební firma z Olomouce od roku 2008. Stavby na klíč, demolice, rekonstrukce, projekce silnoproudu i slaboproudu a elektromontáže. Polská 1174/3A, Olomouc.",
  openGraph: {
    title: "MEKOS GROUP — stavíme na klíč v Olomouci",
    description:
      "Stavby na klíč, rekonstrukce objektů, inženýrská činnost a elektromontáže. Olomoucká stavební firma od roku 2008.",
    type: "website",
    locale: "cs_CZ",
  },
};

const cinnosti = [
  {
    kod: "ST",
    nazev: "Stavby",
    popis:
      "Provádění staveb na klíč, demoliční práce, rekonstrukce objektů a inženýrská činnost investiční výstavby. Vedeme stavbu od výkopu po kolaudaci.",
    body: [
      "Stavby na klíč",
      "Demoliční práce",
      "Rekonstrukce objektů",
      "Inženýrská činnost výstavby",
    ],
  },
  {
    kod: "PR",
    nazev: "Projekce",
    popis:
      "Komplexní i dílčí projekty silnoproudých i slaboproudých zařízení. Připravíme dokumentaci, kterou stavbaři skutečně postaví.",
    body: [
      "Silnoproudá zařízení",
      "Slaboproudá zařízení",
      "Komplexní i dílčí projekty",
    ],
  },
  {
    kod: "EL",
    nazev: "Elektromontáže",
    popis:
      "Elektroinstalační práce, revize elektrických zařízení a montáže zabezpečovacích i slaboproudých systémů. S osvědčením NBÚ.",
    body: [
      "Elektroinstalace",
      "Revize elektrických zařízení",
      "Zabezpečovací systémy",
    ],
  },
];

const reference = [
  {
    typ: "Administrativní budova",
    detail: "Kompletní realizace včetně elektroinstalace a slaboproudu.",
  },
  {
    typ: "Stravovací zařízení",
    detail: "Technologicky náročná stavba s revizí všech rozvodů.",
  },
  {
    typ: "Bytový komplex Promeko",
    detail: "Výstavba na klíč od projektu po předání jednotek.",
  },
];

export default function Page() {
  return (
    <main className="mekos">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="MEKOS GROUP, úvod">
          <span className="wm-mek">MEKOS</span>
          <span className="wm-group">GROUP</span>
        </a>
        <a className="tel" href="tel:+420585751093">
          <span className="tel-label">Zavolat</span>
          <span className="tel-num">+420 585 751 093</span>
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true">
          <div className="crane">
            <span className="crane-mast" />
            <span className="crane-jib" />
            <span className="crane-counter" />
            <span className="crane-line" />
            <span className="crane-hook" />
          </div>
        </div>

        <div className="hero-inner">
          <p className="eyebrow">Stavební firma · Olomouc · od 2008</p>
          <h1 id="hero-title" className="hero-title">
            <span className="line l1">Stavíme</span>
            <span className="line l2">na klíč.</span>
            <span className="line l3">Od výkopu</span>
            <span className="line l4">po zapojení</span>
            <span className="line l5">poslední zásuvky.</span>
          </h1>
          <p className="hero-lead">
            Jedna firma, která vám postaví hrubou stavbu, zrekonstruuje objekt,
            připraví projekt silnoproudu i slaboproudu a všechno nakonec sama
            zapojí a zreviduje. V Olomouci a okolí.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="mailto:info@mekos.cz">
              Napsat poptávku
            </a>
            <a className="btn btn-ghost" href="#cinnosti">
              Co stavíme
            </a>
          </div>
        </div>

        <div className="hero-meta" aria-hidden="true">
          <span>Polská 1174/3A</span>
          <span>779 00 Olomouc</span>
          <span>info@mekos.cz</span>
        </div>
      </section>

      <section id="cinnosti" className="cinnosti" aria-labelledby="cinnosti-title">
        <div className="section-head">
          <p className="eyebrow eyebrow-dark">Tři profese pod jednou střechou</p>
          <h2 id="cinnosti-title">Co pro vás uděláme</h2>
          <p className="section-note">
            Nemusíte shánět tři dodavatele. Stavbu, projekt i elektro zvládneme
            interně — a ručíme za výsledek jako celek.
          </p>
        </div>

        <div className="cards">
          {cinnosti.map((c) => (
            <article key={c.kod} className="card">
              <span className="card-kod" aria-hidden="true">
                {c.kod}
              </span>
              <h3>{c.nazev}</h3>
              <p className="card-popis">{c.popis}</p>
              <ul className="card-list">
                {c.body.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="reference" className="duvera" aria-labelledby="duvera-title">
        <div className="duvera-inner">
          <div className="duvera-text">
            <p className="eyebrow">O nás &amp; reference</p>
            <h2 id="duvera-title">
              Olomoucká stavba,
              <br /> která drží slovo od roku 2008.
            </h2>
            <p>
              MEKOS GROUP je stavební firma se sídlem na Polské ulici v Olomouci.
              Stavíme administrativní budovy, stravovací provozy i bytové
              komplexy — a k tomu si vše sami projektujeme a zapojujeme.
            </p>
            <ul className="osvedceni">
              <li>
                <span className="os-mark">✓</span> Osvědčení NBÚ pro
                zabezpečovací systémy
              </li>
              <li>
                <span className="os-mark">✓</span> Program Zelená úsporám
              </li>
              <li>
                <span className="os-mark">✓</span> Revize elektrických zařízení
                vlastními techniky
              </li>
            </ul>
          </div>

          <ul className="ref-list">
            {reference.map((r, i) => (
              <li key={r.typ} className="ref-item">
                <span className="ref-num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{r.typ}</h3>
                  <p>{r.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

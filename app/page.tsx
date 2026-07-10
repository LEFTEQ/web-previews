import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "INDEX AUTO — autobazar Ostrava-Výškovice",
  description:
    "Ojetá auta prověřená v naší vlastní dílně. Každý vůz projde servisem a pneuservisem, než ho vezmete domů. Husarova 45, Ostrava-Výškovice.",
  openGraph: {
    title: "INDEX AUTO — autobazar Ostrava",
    description:
      "Prodáváme jen vozy, které projdou naší dílnou. Prohlídka, diagnostika VW, pneuservis — vše na jednom místě ve Výškovicích.",
    type: "website",
    locale: "cs_CZ",
  },
};

const kontrolniBody = [
  {
    n: "01",
    stanice: "Diagnostika",
    popis:
      "Vůz napojíme na sériovou diagnostiku koncernu VW. Vyčteme chyby řídicích jednotek, které oko nevidí.",
  },
  {
    n: "02",
    stanice: "Motor a klima",
    popis:
      "Kontrola motoru, převodovky a klimatizace. Provozní kapaliny, netěsnosti, zápach v kabině.",
  },
  {
    n: "03",
    stanice: "Karoserie",
    popis:
      "Prohlídka karoserie a spodku. Koroze, lakové vrstvy, stopy po nárazu — poctivě a nahlas.",
  },
  {
    n: "04",
    stanice: "Pneuservis",
    popis:
      "Přezutí, rovnání ALU kol, oprava defektu. Vůz odjíždí na gumách, na které se dá spolehnout.",
  },
  {
    n: "05",
    stanice: "Před STK",
    popis:
      "Kontrola jako před technickou. Po dohodě vůz na stanici i sami přistavíme.",
  },
];

const vozy = [
  {
    znacka: "Škoda Octavia",
    verze: "2.0 TDI Combi",
    rok: "2018",
    najeto: "128 400 km",
    stav: "Po servisu v dílně",
  },
  {
    znacka: "Volkswagen Golf",
    verze: "1.5 TSI",
    rok: "2019",
    najeto: "96 700 km",
    stav: "Nové pneu, po STK",
  },
  {
    znacka: "Škoda Fabia",
    verze: "1.0 MPI",
    rok: "2020",
    najeto: "54 300 km",
    stav: "Servisní historie doložena",
  },
];

export default function Page() {
  return (
    <main className="ia">
      <header className="ia-topbar">
        <a className="ia-logo" href="#" aria-label="INDEX AUTO, úvodní strana">
          <span className="ia-logo-index">INDEX</span>
          <span className="ia-logo-auto">AUTO</span>
          <span className="ia-logo-plate" aria-hidden="true">
            T&nbsp;OV
          </span>
        </a>
        <div className="ia-topbar-right">
          <span className="ia-hours">Po–Pá&nbsp;8–16</span>
          <a className="ia-call" href="tel:+420778072270">
            <span className="ia-call-dot" aria-hidden="true" />
            Zavolat 778&nbsp;072&nbsp;270
          </a>
        </div>
      </header>

      <section className="ia-hero">
        <div className="ia-hero-media">
          <img
            src="/hero.webp"
            alt="Ojetý vůz připravený k prodeji v autobazaru INDEX AUTO v Ostravě-Výškovicích"
            width={1600}
            height={1000}
            className="ia-hero-img"
          />
          <span className="ia-hero-scrim" aria-hidden="true" />
        </div>

        <div className="ia-hero-body">
          <p className="ia-eyebrow">Autobazar &amp; dílna · Ostrava-Výškovice</p>
          <h1 className="ia-hero-title">
            Neprodáme vám auto,
            <br />
            které bychom
            <span className="ia-hl"> sami neopravili.</span>
          </h1>
          <p className="ia-hero-lede">
            Každý vůz z nabídky projde naší vlastní dílnou — diagnostikou
            koncernu VW, motorem, karoserií i pneuservisem. Co najdeme,
            řekneme nahlas. Kupujete prověřené auto, ne kočku v pytli.
          </p>
          <div className="ia-hero-cta">
            <a className="ia-btn ia-btn-primary" href="tel:+420778072270">
              Zavolat a domluvit prohlídku
            </a>
            <a className="ia-btn ia-btn-ghost" href="#vozy">
              Prohlédnout vozy na prodej
            </a>
          </div>
        </div>

        <dl className="ia-hero-facts">
          <div className="ia-fact">
            <dt>Adresa</dt>
            <dd>Husarova 741/45, Výškovice</dd>
          </div>
          <div className="ia-fact">
            <dt>Specializace</dt>
            <dd>Diagnostika koncernu VW</dd>
          </div>
          <div className="ia-fact">
            <dt>Vše na jednom místě</dt>
            <dd>Prodej · servis · pneuservis</dd>
          </div>
        </dl>
      </section>

      <section className="ia-check" aria-labelledby="check-title">
        <div className="ia-section-head">
          <p className="ia-eyebrow ia-eyebrow-dark">Než vůz předáme</p>
          <h2 id="check-title" className="ia-h2">
            Pět stanic, kterými auto projde v dílně
          </h2>
          <p className="ia-section-lede">
            Nejsme jen odstavená plocha s cedulkami za stěrači. INDEX AUTO je
            autoservis i pneuservis — a přesně tím projde každé auto, které od
            nás koupíte. Tady je pořadí, ve kterém to děláme.
          </p>
        </div>

        <ol className="ia-stations">
          {kontrolniBody.map((b) => (
            <li className="ia-station" key={b.n}>
              <span className="ia-station-n" aria-hidden="true">
                {b.n}
              </span>
              <div className="ia-station-txt">
                <h3 className="ia-station-title">{b.stanice}</h3>
                <p className="ia-station-desc">{b.popis}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="ia-check-extra">
          <img
            src="/section-1.webp"
            alt="Mechanik při prohlídce vozu v servisu INDEX AUTO"
            width={900}
            height={640}
            className="ia-check-img"
          />
          <div className="ia-check-note">
            <p className="ia-check-note-lead">Odvezeme i přivezeme.</p>
            <p>
              Nepojízdný vůz naložíme a přivezeme na servis, hotový vám vrátíme
              zpátky. Máte tak o starost míň — a nemusíte řešit odtah zvlášť.
            </p>
            <a className="ia-inline-link" href="tel:+420596746142">
              Zavolat na pevnou 596&nbsp;746&nbsp;142
            </a>
          </div>
        </div>
      </section>

      <section className="ia-trust" id="vozy" aria-labelledby="trust-title">
        <div className="ia-trust-grid">
          <div className="ia-trust-copy">
            <p className="ia-eyebrow">Vozy aktuálně k prodeji</p>
            <h2 id="trust-title" className="ia-h2 ia-h2-light">
              Menší nabídka, zato každý vůz známe do detailu
            </h2>
            <p className="ia-section-lede ia-section-lede-light">
              Nedržíme stovky aut, o kterých nic nevíme. Vybíráme kusy, které
              projdou naší dílnou a u kterých doložíme, co se s nimi dělo.
              Poradíme s nákupem i financováním — a když právě nemáme to pravé,
              pomůžeme vybrat.
            </p>
            <a className="ia-btn ia-btn-primary" href="tel:+420778072270">
              Domluvit prohlídku vozu
            </a>
          </div>

          <ul className="ia-cars">
            {vozy.map((v) => (
              <li className="ia-car" key={v.znacka + v.verze}>
                <div className="ia-car-main">
                  <span className="ia-car-znacka">{v.znacka}</span>
                  <span className="ia-car-verze">{v.verze}</span>
                </div>
                <div className="ia-car-meta">
                  <span>{v.rok}</span>
                  <span aria-hidden="true">·</span>
                  <span>{v.najeto}</span>
                </div>
                <span className="ia-car-tag">{v.stav}</span>
              </li>
            ))}
          </ul>
        </div>

        <figure className="ia-trust-figure">
          <img
            src="/section-2.webp"
            alt="Vozy na prodejní ploše autobazaru INDEX AUTO v Ostravě"
            width={1400}
            height={700}
            className="ia-trust-img"
          />
          <figcaption className="ia-trust-cap">
            Plocha na Husarově ulici, Ostrava-Výškovice — otevřeno Po–Pá 8–16.
          </figcaption>
        </figure>
      </section>
    </main>
  );
}

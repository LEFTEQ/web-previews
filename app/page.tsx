import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galant — pokrývačství a klempířství Plzeň",
  description:
    "Pokrývači a klempíři z Plzně-Hradiště. Nové střechy, okapové systémy a klempířská výroba na míru od roku 1992.",
  openGraph: {
    title: "Galant — pokrývačství a klempířství Plzeň",
    description:
      "Nové střechy, okapy a klempířská výroba na míru. Plzeň-Hradiště, od roku 1992.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Nová střecha od firmy Galant" }],
  },
};

const sluzby = [
  {
    kod: "A",
    nazev: "Pokládka střešní krytiny",
    popis:
      "Skládaná i plechová krytina, latění, kontralatě a pojistná hydroizolace. Od rodinného domu v Doubravce po sedlovou střechu na chalupě.",
    detail: ["Betonová a pálená taška", "Falcovaný plech a šindel", "Kompletní skladba střechy"],
  },
  {
    kod: "B",
    nazev: "Okapové systémy",
    popis:
      "Půlkulaté i hranaté žlaby, svody a kotlíky. Titanzinek, měď nebo lakovaný plech — spočítáme spád tak, aby voda tekla, kam má.",
    detail: ["Žlaby a svody na míru", "Titanzinek a měď", "Záchytné háky a kotlíky"],
  },
  {
    kod: "C",
    nazev: "Klempířská dílenská výroba",
    popis:
      "Oplechování atik, komínů, parapetů a úžlabí ohýbáme na míru přímo v dílně v Hradišti. Dovezeme přesně tvarovaný díl na stavbu.",
    detail: ["Oplechování komínů a atik", "Parapety a lemování", "Kusová výroba dle výkresu"],
  },
];

const duvody = [
  {
    cislo: "1992",
    label: "na trhu bez přerušení",
    text: "Firmu jsme založili v roce 1992 a od té doby stavíme střechy nepřetržitě.",
  },
  {
    cislo: "Plzeň",
    label: "vlastní provozovna v Hradišti",
    text: "Dílnu máme v Plzni-Hradišti, vybavenou moderními ohýbačkami a nůžkami na plech.",
  },
  {
    cislo: "1:1",
    label: "cena, kterou předem dohodneme",
    text: "Rozpočet dostanete rozepsaný na materiál a práci — bez příplatků, které se objeví až na faktuře.",
  },
];

export default function Page() {
  return (
    <main className="g-main">
      <header className="g-top">
        <a className="g-logo" href="#" aria-label="Galant — pokrývačství a klempířství">
          <span className="g-logo-mark" aria-hidden="true">
            <span className="g-logo-ridge" />
          </span>
          <span className="g-logo-word">Galant</span>
          <span className="g-logo-sub">pokrývačství · Plzeň</span>
        </a>
        <a className="g-top-call" href="tel:+420377220145">
          Zavolat pokrývači
        </a>
      </header>

      <section className="g-hero" aria-labelledby="g-hero-title">
        <div className="g-hero-media">
          <img
            src="/hero.webp"
            alt="Nová plechová střecha se sedlem a okapovým systémem od firmy Galant"
            className="g-hero-img"
          />
          <div className="g-hero-shade" aria-hidden="true" />
        </div>

        <div className="g-hero-inner">
          <p className="g-eyebrow">Pokrývačství &amp; klempířství · Plzeň-Hradiště</p>
          <h1 id="g-hero-title" className="g-hero-title">
            Střecha, která<br />
            <span className="g-hero-em">přečká</span> počasí
          </h1>
          <p className="g-hero-lead">
            Pokládáme krytinu, ohýbáme okapy a děláme klempířinu na míru. Odvádíme vodu tak,
            aby se dům pod ní nemusel bát ani plzeňského deště, ani ledovky.
          </p>
          <div className="g-hero-actions">
            <a className="g-btn g-btn-primary" href="tel:+420377220145">
              Zavolat: 377 220 145
            </a>
            <a className="g-btn g-btn-ghost" href="mailto:poptavka@galant-plzen.cz">
              Poslat poptávku
            </a>
          </div>
        </div>

        <dl className="g-hero-strip">
          <div className="g-strip-item">
            <dt>Založeno</dt>
            <dd>1992</dd>
          </div>
          <div className="g-strip-item">
            <dt>Dílna</dt>
            <dd>Plzeň-Hradiště</dd>
          </div>
          <div className="g-strip-item">
            <dt>Materiál</dt>
            <dd>plech · titanzinek · měď</dd>
          </div>
        </dl>
      </section>

      <section className="g-sluzby" aria-labelledby="g-sluzby-title">
        <div className="g-sec-head">
          <p className="g-eyebrow g-eyebrow-dark">Co pro střechu uděláme</p>
          <h2 id="g-sluzby-title" className="g-sec-title">
            Od latí po poslední svod
          </h2>
        </div>

        <div className="g-sluzby-grid">
          <div className="g-sluzby-media">
            <img
              src="/section-1.webp"
              alt="Klempíř ohýbá plech na oplechování v dílně firmy Galant"
              className="g-sec-img"
            />
          </div>

          <ol className="g-sluzby-list">
            {sluzby.map((s) => (
              <li key={s.kod} className="g-sluzba">
                <span className="g-sluzba-kod" aria-hidden="true">
                  {s.kod}
                </span>
                <div className="g-sluzba-body">
                  <h3 className="g-sluzba-nazev">{s.nazev}</h3>
                  <p className="g-sluzba-popis">{s.popis}</p>
                  <ul className="g-sluzba-detail">
                    {s.detail.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="g-onas" aria-labelledby="g-onas-title">
        <div className="g-onas-grid">
          <div className="g-onas-text">
            <p className="g-eyebrow">Kdo vám střechu udělá</p>
            <h2 id="g-onas-title" className="g-sec-title g-sec-title-light">
              Řemeslo, které v Plzni děláme přes třicet let
            </h2>
            <p className="g-onas-lead">
              Galant vznikl v roce 1992 a postupně se z malé dílny stal jedním z významných
              dodavatelů plechů, okapových systémů a klempířské výroby na Plzeňsku. Pracujeme
              podle přání zákazníka — od jednoho parapetu po celou střechu.
            </p>
            <p className="g-onas-lead">
              Provozovnu máme v Plzni-Hradišti, kam si k nám našlo cestu mnoho spokojených
              zákazníků. Držíme si postavení, které jsme získali kvalitní prací, precizními
              výrobky a férovými cenami.
            </p>

            <dl className="g-duvody">
              {duvody.map((d) => (
                <div key={d.cislo} className="g-duvod">
                  <dt>
                    <span className="g-duvod-cislo">{d.cislo}</span>
                    <span className="g-duvod-label">{d.label}</span>
                  </dt>
                  <dd>{d.text}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="g-onas-media">
            <img
              src="/section-2.webp"
              alt="Dokončená střecha s novým okapovým systémem na domě v Plzni"
              className="g-sec-img"
            />
            <p className="g-onas-caption">
              Provozovna Plzeň-Hradiště · plechy · okapy · klempířská výroba na míru
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

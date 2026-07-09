import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "STUDNY LOUTOCKÝ — vrtané a kopané studny, Olomoucko",
  description:
    "Rodinná firma z Liboše u Olomouce. Kopeme studny od roku 2007 — stovky hotových zdrojů vody. Vlastní technika, nejlepší ceny v kraji, oprávnění k hornické činnosti.",
  openGraph: {
    title: "STUDNY LOUTOCKÝ — voda z vlastní studny",
    description:
      "Kopané, spouštěné i vsakovací studny na Olomoucku, Přerovsku a Prostějovsku. Rodinná firma s vlastní technikou od roku 2007.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Kopání studny" }],
  },
};

const hloubky = [
  {
    znacka: "0 m",
    vrstva: "Ornice a podorničí",
    popis: "Sundáme drny, odklidíme humus. Odsud jde vytěžená zemina stranou na hromadu.",
  },
  {
    znacka: "−3 m",
    vrstva: "Jíl a hlína",
    popis: "Nejtěžší metry. Spouštíme první betonové skruže, obezdíváme stěny.",
  },
  {
    znacka: "−7 m",
    vrstva: "Štěrkopísek",
    popis: "Tady začíná téct voda. Zde poznáme vydatnost pramene a jestli stačí na dům i zahradu.",
  },
  {
    znacka: "−12 m",
    vrstva: "Zvodnělé podloží",
    popis: "Dno vysypeme praným kačírkem, osadíme poklop. Studna je hotová — čistá voda k odběru.",
  },
];

const sluzby = [
  {
    cislo: "01",
    nazev: "Kopané studny",
    text: "Levný zdroj užitkové i pitné vody pro dům a zahradu. Studna slouží i tepelnému čerpadlu — topíte pak výrazně levněji. Děláme betonové, spouštěné i vsakovací studny.",
    detaily: ["Betonové skruže", "Spouštěné studny", "Vsakovací studny"],
  },
  {
    cislo: "02",
    nazev: "Jímky",
    text: "Odvedeme z pozemku přebytečnou dešťovou vodu. Zařídíme jímky přesně na míru vašemu pozemku — od malé dešťovky po samonosnou odpadní jímku.",
    detaily: ["Plastové i betonové", "Na dešťovou vodu", "Odpadní a vsakovací"],
  },
  {
    cislo: "03",
    nazev: "Příslušenství a papíry",
    text: "Při stavbě se postaráme o všechno okolo: skruže, poklopy, piloty pro zakládání staveb. Připravíme i podklady pro stavební povolení a kolaudaci.",
    detaily: ["Skruže a poklopy", "Piloty základů", "Povolení a kolaudace"],
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="brand" href="#uvod" aria-label="Studny Loutocký, úvod">
          <span className="brand-mark" aria-hidden="true">
            <span className="brand-drop" />
          </span>
          <span className="brand-words">
            <span className="brand-small">STUDNY</span>
            <span className="brand-big">LOUTOCKÝ</span>
          </span>
        </a>
        <nav className="nav" aria-label="Hlavní navigace">
          <a href="#sluzby">Služby</a>
          <a href="#firma">O nás</a>
          <a className="nav-cta" href="tel:+420777224878">Zavolat</a>
        </nav>
      </header>

      <section className="hero" id="uvod">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Rozestavěná kopaná studna s betonovými skružemi na pozemku u domu"
            className="hero-img"
          />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Rodinná firma z Liboše&nbsp;·&nbsp;od roku 2007</p>
          <h1 className="hero-title">
            Vodu vám najdeme
            <span className="hero-title-em">tam, kde je.</span>
          </h1>
          <p className="hero-lead">
            Kopeme studny na Olomoucku, Přerovsku a Prostějovsku. Vlastní technika,
            stovky hotových studní a nejlepší ceny v Olomouckém kraji. Máme oprávnění
            k činnosti prováděné hornickým způsobem.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420777224878">
              Zavolat 777&nbsp;224&nbsp;878
            </a>
            <a className="btn btn-ghost" href="#sluzby">
              Co děláme
            </a>
          </div>
          <dl className="hero-facts">
            <div>
              <dt>Od roku</dt>
              <dd>2007</dd>
            </div>
            <div>
              <dt>Hotových studní</dt>
              <dd>stovky</dd>
            </div>
            <div>
              <dt>Technika</dt>
              <dd>vlastní</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="strata" id="sluzby" aria-labelledby="strata-nadpis">
        <div className="section-head">
          <p className="eyebrow eyebrow-dark">Řez podložím</p>
          <h2 id="strata-nadpis" className="section-title">
            Co se děje mezi drnem a vodou
          </h2>
          <p className="section-intro">
            Studna vzniká shora dolů. Každý metr má svoje pravidlo — a my víme,
            ve které vrstvě začne téct voda.
          </p>
        </div>
        <ol className="strata-list">
          {hloubky.map((v) => (
            <li className="strata-row" key={v.znacka}>
              <span className="strata-depth">{v.znacka}</span>
              <span className="strata-body">
                <span className="strata-vrstva">{v.vrstva}</span>
                <span className="strata-popis">{v.popis}</span>
              </span>
            </li>
          ))}
        </ol>

        <div className="sluzby-grid">
          {sluzby.map((s) => (
            <article className="karta" key={s.cislo}>
              <p className="karta-cislo">{s.cislo}</p>
              <h3 className="karta-nazev">{s.nazev}</h3>
              <p className="karta-text">{s.text}</p>
              <ul className="karta-detaily">
                {s.detaily.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="firma" id="firma" aria-labelledby="firma-nadpis">
        <div className="firma-media">
          <img
            src="/section-1.webp"
            alt="Technika firmy Loutocký při práci na stavbě studny"
            className="firma-img"
          />
          <img
            src="/section-2.webp"
            alt="Hotová studna s betonovým poklopem na zahradě"
            className="firma-img firma-img-second"
          />
        </div>
        <div className="firma-copy">
          <p className="eyebrow eyebrow-dark">O nás</p>
          <h2 id="firma-nadpis" className="section-title">
            Malá firma, kde si techniku řídíme sami
          </h2>
          <p className="firma-text">
            Jsme rodinná firma z&nbsp;Liboše u&nbsp;Olomouce. Studny kopeme od&nbsp;roku 2007
            a&nbsp;za tu dobu jich máme za&nbsp;sebou stovky. Protože jezdíme na&nbsp;vlastní
            technice, nabízíme nejlepší ceny v&nbsp;Olomouckém kraji — a&nbsp;na&nbsp;pozemek
            přijedeme, aniž bychom čekali na&nbsp;subdodavatele.
          </p>
          <ul className="firma-body">
            <li>
              <strong>Oprávnění k&nbsp;hornické činnosti</strong> — studnu smíme legálně
              hloubit i&nbsp;tam, kde to jinému nedovolí.
            </li>
            <li>
              <strong>Působíme na&nbsp;Olomoucku</strong>, Přerovsku, Prostějovsku,
              Brněnsku a&nbsp;v&nbsp;okolí.
            </li>
            <li>
              <strong>Všechno pod jednou střechou</strong> — od&nbsp;výkopu přes skruže
              a&nbsp;poklopy až po&nbsp;papíry ke&nbsp;kolaudaci.
            </li>
          </ul>
          <div className="firma-kontakt">
            <a className="btn btn-primary" href="tel:+420777224878">
              Zavolat a&nbsp;domluvit obhlídku
            </a>
            <p className="firma-adresa">
              Studny Loutocký s.r.o.&nbsp;· Liboš 83, 783&nbsp;13
              <br />
              <a href="mailto:studnyloutocky@studnyloutocky.cz">
                studnyloutocky@studnyloutocky.cz
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

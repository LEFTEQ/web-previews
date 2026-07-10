import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ISH PUMPS OLOMOUC — čerpací technika pro chemii, těžbu a energetiku",
  description:
    "Výroba a servis průmyslových čerpadel v Olomouci. Přes 50 let tradice ze Sigmy Olomouc — odstředivá, vertikální i turbínová čerpadla pro chemický, petrochemický a těžební průmysl.",
  openGraph: {
    title: "ISH PUMPS OLOMOUC — čerpací technika",
    description:
      "Průmyslová čerpadla vyráběná v Olomouci. Návrh, výroba, servis pro chemii, petrochemii, těžbu a energetiku.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const media = [
  { l: "Q [m³/h]", v: "3–4 000", d: "průtok jednoho čerpadla" },
  { l: "H [m]", v: "do 700", d: "dopravní výška" },
  { l: "t [°C]", v: "−120 → +450", d: "teplota čerpané kapaliny" },
  { l: "p [MPa]", v: "do 40", d: "pracovní tlak" },
];

const rady = [
  {
    typ: "CVFV",
    nazev: "Vertikální čerpadla",
    popis:
      "Velkoobjemová vertikální soustrojí pro dopravu surové i chladicí vody. Naposledy dodána pro Vodní dílo Gabčíkovo na slovenském Dunaji.",
    prostredi: "voda · vodní hospodářství · energetika",
  },
  {
    typ: "T-META-PLUS",
    nazev: "Odstředivá procesní čerpadla",
    popis:
      "Horizontální článková čerpadla, která umí pracovat i v turbínovém režimu a vracet energii zpět do provozu. Chemicky odolné materiály na míru médiu.",
    prostredi: "chemie · petrochemie · rekuperace energie",
  },
  {
    typ: "HYDRO",
    nazev: "Čerpadla pro těžbu",
    popis:
      "Robustní soustrojí pro abrazivní a agresivní kapaliny v důlním a hlubinném prostředí — dimenzovaná na vysoké tlaky a nepřetržitý provoz.",
    prostredi: "těžba · hlubinné čerpání · vysoké tlaky",
  },
];

const sluzby = [
  {
    k: "01",
    t: "Návrh a inženýring",
    p: "Hydraulický výpočet, volba materiálů a provedení podle vašeho média, teploty a tlaku. Dokumentace i atesty.",
  },
  {
    k: "02",
    t: "Výroba v Olomouci",
    p: "Vlastní obrábění, montáž a zkušebna. Každé soustrojí projde tlakovou a výkonovou zkouškou před expedicí.",
  },
  {
    k: "03",
    t: "Servis a náhradní díly",
    p: "Generální opravy, výměna hydrauliky a dodávky dílů i k čerpadlům Sigma, na která navazujeme přes 50 let.",
  },
];

export default function Page() {
  return (
    <main className="ish">
      <header className="ish-nav" aria-label="Hlavní">
        <a className="ish-brand" href="#" aria-label="ISH PUMPS Olomouc, úvod">
          <span className="ish-brand__mark" aria-hidden="true">
            <span className="ish-brand__ring" />
          </span>
          <span className="ish-brand__word">
            ISH<span className="ish-brand__thin">PUMPS</span>
            <span className="ish-brand__city">Olomouc</span>
          </span>
        </a>
        <nav className="ish-nav__links">
          <a href="#vyrobky">Výrobky</a>
          <a href="#firma">O firmě</a>
          <a href="#servis">Servis</a>
        </nav>
      </header>

      <section className="ish-hero">
        <img
          className="ish-hero__img"
          src="/hero.webp"
          alt="Průmyslové čerpadlo ISH Pumps na zkušebně v Olomouci"
        />
        <div className="ish-hero__scrim" aria-hidden="true" />
        <div className="ish-hero__inner">
          <p className="ish-eyebrop">Olomouc · dědic Sigmy · od roku 1968</p>
          <h1 className="ish-hero__title">
            Čerpáme tam,<br />
            kde běžná<br />
            čerpadla <em>končí</em>.
          </h1>
          <p className="ish-hero__lead">
            Vyrábíme odstředivá, vertikální a turbínová čerpadla pro chemii,
            petrochemii, těžbu a energetiku. Vroucí, agresivní i abrazivní
            média — každé soustrojí navrhneme přesně na váš provoz.
          </p>
          <div className="ish-hero__cta">
            <a className="ish-btn ish-btn--primary" href="#vyrobky">
              Prohlédnout řady čerpadel
            </a>
            <a className="ish-btn ish-btn--ghost" href="#servis">
              Poptat návrh
            </a>
          </div>
        </div>

        <dl className="ish-specs" aria-label="Pracovní rozsah čerpadel">
          {media.map((m) => (
            <div className="ish-spec" key={m.l}>
              <dt className="ish-spec__l">{m.l}</dt>
              <dd className="ish-spec__v">{m.v}</dd>
              <dd className="ish-spec__d">{m.d}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="ish-sec" id="vyrobky">
        <div className="ish-sec__head">
          <p className="ish-kicker">Výrobní program</p>
          <h2 className="ish-h2">Tři řady na tři světy provozu</h2>
          <p className="ish-intro">
            Nenabízíme katalogové kusy ze skladu. Typovou řadu vybereme podle
            média, tlaku a teploty — a dovedeme ji do provedení, které vydrží
            právě u vás.
          </p>
        </div>

        <div className="ish-grid">
          <img
            className="ish-grid__img"
            src="/section-1.webp"
            alt="Detail hydrauliky průmyslového čerpadla ISH Pumps"
          />
          <ul className="ish-rady">
            {rady.map((r) => (
              <li className="ish-rada" key={r.typ}>
                <span className="ish-rada__typ">{r.typ}</span>
                <div className="ish-rada__body">
                  <h3 className="ish-rada__nazev">{r.nazev}</h3>
                  <p className="ish-rada__popis">{r.popis}</p>
                  <p className="ish-rada__env">{r.prostredi}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ish-sec ish-sec--dark" id="firma">
        <div className="ish-about">
          <div className="ish-about__text">
            <p className="ish-kicker ish-kicker--light">O firmě</p>
            <h2 className="ish-h2 ish-h2--light">
              Půl století čerpadel z jednoho města
            </h2>
            <p className="ish-about__p">
              Navazujeme na jeden z bývalých závodů Sigmy Olomouc a stavíme na
              více než padesátileté tradici výroby čerpací techniky. Zůstali
              jsme tam, kde ta zkušenost vznikla — v Olomouci — a spojili ji s
              moderní výrobou a zkušebnou.
            </p>
            <p className="ish-about__p">
              Jsme středně velká firma, kde konstruktér, výroba i servis mluví
              spolu. To znamená čerpadla řešená pro váš konkrétní provoz a
              dodávky dílů i k soustrojím, která běží desítky let.
            </p>
            <ul className="ish-servis" id="servis">
              {sluzby.map((s) => (
                <li className="ish-servis__item" key={s.k}>
                  <span className="ish-servis__k">{s.k}</span>
                  <div>
                    <h3 className="ish-servis__t">{s.t}</h3>
                    <p className="ish-servis__p">{s.p}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <figure className="ish-about__fig">
            <img
              src="/section-2.webp"
              alt="Výroba a montáž čerpadel v provozu ISH Pumps Olomouc"
            />
            <figcaption className="ish-about__cap">
              Reference: vertikální čerpadla CVFV pro Vodní dílo Gabčíkovo
              (Slovensko), 2025.
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}

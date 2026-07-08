import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autoškola Helus Plzeň — řidičák sk. B a motocykly | 20+ let praxe",
  description:
    "Autoškola Helus v centru Plzně (Sady Pětatřicátníků 33). Výcvik skupin AM, A1, A2, A, B, BE i B96, kondiční jízdy, řidičák na trenažéru i B‑L17 od 15,5 let. Zahájení kurzů každé dva týdny.",
  openGraph: {
    title: "Autoškola Helus Plzeň — naučíme vás řídit tak, abyste vždy dojeli",
    description:
      "Přes 20 let za volantem s plzeňskými řidiči. Skupiny AM–BE, kondiční jízdy, dárkové poukazy, sleva na Plzeňskou kartu.",
    locale: "cs_CZ",
    type: "website",
  },
};

const skupiny = [
  {
    kod: "B",
    nazev: "Osobní automobil",
    popis: "Klasický řidičák. Od teorie po zkoušku, s vlastním tempem a jasnou cenou.",
    cena: "22 000 Kč",
  },
  {
    kod: "A / A1 / A2 / AM",
    nazev: "Motocykly a mopedy",
    popis: "Od malé pětadvacítky po neomezenou. Výcvik na moderních strojích i v terénu.",
    cena: "na dotaz",
  },
  {
    kod: "BE / B96",
    nazev: "Auto s přívěsem",
    popis: "Karavan, vlek s lodí, koně. Naučíme vás couvat a couvat s přívěsem bez nervů.",
    cena: "na dotaz",
  },
  {
    kod: "B‑L17",
    nazev: "Řidičák od 15,5 let",
    popis: "Novinka od roku 2024 — začnete dřív a jezdíte s mentorem, než vám bude 18.",
    cena: "na dotaz",
  },
];

const terminy = [
  { datum: "13. července", den: "pondělí", cas: "16:00–17:30" },
  { datum: "29. července", den: "úterý", cas: "16:00–17:30" },
  { datum: "13. srpna", den: "středa", cas: "16:00–17:30" },
];

const duvery = [
  { cislo: "20+", popis: "let výcviku plzeňských řidičů" },
  { cislo: "2", popis: "učebny — Plzeň a Kralovice" },
  { cislo: "1", popis: "kondiční jízda zdarma při neúspěchu u první zkoušky" },
];

export default function Page() {
  return (
    <main className="ah">
      <header className="ah-nav" aria-label="Hlavní navigace">
        <a className="ah-mark" href="#top" aria-label="Autoškola Helus, domů">
          <span className="ah-mark__l">H</span>
          <span className="ah-mark__word">
            Helus<span className="ah-mark__sub">autoškola&nbsp;·&nbsp;Plzeň</span>
          </span>
        </a>
        <nav className="ah-nav__links">
          <a href="#nabidka">Skupiny</a>
          <a href="#duvera">O nás</a>
          <a className="ah-nav__cta" href="#nabidka">On‑line přihláška</a>
        </nav>
      </header>

      <section className="ah-hero" id="top">
        <img
          className="ah-hero__img"
          src="/hero.webp"
          alt="Výcvikové vozidlo autoškoly Helus v ulicích Plzně"
          width={1600}
          height={1000}
        />
        <div className="ah-hero__scrim" aria-hidden="true" />

        <div className="ah-hero__inner">
          <p className="ah-hero__eyebrow">Sady Pětatřicátníků 33 · centrum Plzně</p>
          <h1 className="ah-hero__title">
            Naučíme vás řídit tak,
            <br />
            <span className="ah-hero__hl">abyste vždy dojeli.</span>
          </h1>
          <p className="ah-hero__lead">
            Bezpečně řídit neznamená jen znát předpisy. Znamená to rozumět provozu,
            předvídat a zvládnout i chvíli, kdy jde do tuhého. Přesně tohle u nás učíme —
            už přes dvacet let.
          </p>
          <div className="ah-hero__cta">
            <a className="ah-btn ah-btn--primary" href="#nabidka">
              On‑line přihláška
            </a>
            <a className="ah-btn ah-btn--ghost" href="tel:+420603323405">
              Zavolat 603 323 405
            </a>
          </div>
        </div>

        <div className="ah-plate" aria-hidden="true">
          <span className="ah-plate__eu">
            <span className="ah-plate__stars">★</span>
            CZ
          </span>
          <span className="ah-plate__num">1P · HELUS</span>
        </div>
      </section>

      <section className="ah-sec" id="nabidka" aria-labelledby="nabidka-h">
        <div className="ah-sec__head">
          <p className="ah-eyebrow">Co u nás vyjezdíte</p>
          <h2 id="nabidka-h" className="ah-h2">
            Skupiny a výcvik
          </h2>
          <p className="ah-sec__intro">
            Od mopedu přes osobák až po auto s přívěsem. Skupinové slevy už od tří lidí,
            dárkové poukazy i sleva na Plzeňskou kartu.
          </p>
        </div>

        <ul className="ah-cards">
          {skupiny.map((s) => (
            <li className="ah-card" key={s.kod}>
              <span className="ah-card__code">{s.kod}</span>
              <h3 className="ah-card__name">{s.nazev}</h3>
              <p className="ah-card__desc">{s.popis}</p>
              <span className="ah-card__price">{s.cena}</span>
            </li>
          ))}
        </ul>

        <div className="ah-terminy">
          <div className="ah-terminy__lead">
            <p className="ah-eyebrow">Nejbližší zahájení kurzů</p>
            <h3 className="ah-h3">Sedneme do lavice a pak za volant.</h3>
            <p className="ah-muted">
              Teorie v učebně v centru Plzně, jízdy podle vás. Přihlaste se online
              a místo si držíme.
            </p>
          </div>
          <ol className="ah-schedule">
            {terminy.map((t) => (
              <li className="ah-schedule__row" key={t.datum}>
                <span className="ah-schedule__date">{t.datum}</span>
                <span className="ah-schedule__meta">
                  {t.den} · {t.cas}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="ah-about" id="duvera" aria-labelledby="duvera-h">
        <div className="ah-about__media">
          <img
            src="/section-1.webp"
            alt="Instruktor autoškoly Helus při výuce v učebně"
            width={900}
            height={1100}
            loading="lazy"
          />
          <img
            className="ah-about__media2"
            src="/section-2.webp"
            alt="Kondiční jízda za volantem cvičného vozu autoškoly Helus"
            width={900}
            height={640}
            loading="lazy"
          />
        </div>

        <div className="ah-about__text">
          <p className="ah-eyebrow ah-eyebrow--dark">O nás</p>
          <h2 id="duvera-h" className="ah-h2 ah-h2--dark">
            Dvacet let za volantem s Plzní.
          </h2>
          <p className="ah-about__p">
            Jsme akreditované školicí středisko řidičů s více než dvacetiletou tradicí.
            Kromě běžného výcviku školíme řidiče referentských vozidel, jezdíme kondiční
            jízdy a začínáme i na trenažéru, který věrně simuluje skutečné vozidlo —
            bezpečné prostředí, než vyrazíte do provozu.
          </p>

          <ul className="ah-stats">
            {duvery.map((d) => (
              <li className="ah-stat" key={d.popis}>
                <span className="ah-stat__num">{d.cislo}</span>
                <span className="ah-stat__label">{d.popis}</span>
              </li>
            ))}
          </ul>

          <div className="ah-note">
            <strong>Dárkový poukaz</strong> na jakoukoli naši službu — pěkný dárek
            (nejen) k osmnáctinám. Se jménem příjemce a bez starostí.
          </div>
        </div>
      </section>
    </main>
  );
}

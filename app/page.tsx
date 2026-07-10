import type { CSSProperties } from "react";

type Listing = {
  ev: string;
  type: "prodej" | "pronájem";
  kind: string;
  title: string;
  place: string;
  size: string;
  price: string;
  note?: string;
  desc: string;
};

const listings: Listing[] = [
  {
    ev: "278911",
    type: "prodej",
    kind: "Rodinný dům",
    title: "Zrekonstruovaný dům se zahradou",
    place: "Nová Víska u Chrastavy",
    size: "venkovský charakter",
    price: "9 950 000 Kč",
    desc: "Mimořádně příjemný rodinný dům venkovského charakteru v klidné lokalitě. Vzrostlá zahrada, dostatek soukromí, hotové bydlení bez další práce.",
  },
  {
    ev: "278211",
    type: "prodej",
    kind: "Rodinný dům",
    title: "Dům u Jablonecké přehrady",
    place: "Jablonec nad Nisou",
    size: "žádaná rezidenční čtvrť",
    price: "16 500 000 Kč",
    desc: "Exkluzivní nabídka v jedné z nejžádanějších rezidenčních částí města, pár minut od přehrady. Reprezentativní dům pro rodinu, která hledá adresu.",
  },
  {
    ev: "279011",
    type: "prodej",
    kind: "Byt 3+1",
    title: "Světlý byt po rekonstrukci",
    place: "Liberec — Pavlovice, Letná",
    size: "58 m², 2. NP",
    price: "5 299 000 Kč",
    desc: "Velmi pěkný byt v revitalizovaném panelovém domě s výtahem. Připravený k nastěhování, výborná dostupnost do centra i za město.",
  },
  {
    ev: "880811",
    type: "pronájem",
    kind: "Byt 1+1",
    title: "Kompletně zrekonstruovaný byt v centru",
    place: "Liberec — Tatranská",
    size: "2. patro, dva výtahy",
    price: "12 700 Kč / měsíc",
    desc: "Velmi pěkný byt v domě se dvěma výtahy a strategickou polohou. Do práce i na nákup pěšky, ideální pro pár nebo jednotlivce.",
  },
  {
    ev: "880211",
    type: "pronájem",
    kind: "Rodinný dům",
    title: "Dům k pronájmu v podhůří Ještědu",
    place: "Osečná — Chrastná",
    size: "celý dům",
    price: "24 000 Kč / měsíc",
    desc: "Kompletně zrekonstruovaný rodinný dům v malebném podještědském prostředí. Pro ty, kdo chtějí klid a přitom zůstat na dosah Liberce.",
  },
  {
    ev: "881111",
    type: "pronájem",
    kind: "Byt 2+1",
    title: "Byt s balkonem v centru",
    place: "Liberec — Mlýnská",
    size: "56 m², 2. patro, cihla",
    price: "rezervováno",
    note: "rezervováno",
    desc: "Příjemný a světlý byt v cihlovém činžovním domě v těsné blízkosti centra. Poptávka po takových bytech je vysoká — ozvěte se včas.",
  },
];

const mesta = [
  { name: "Liberec", count: 34 },
  { name: "Jablonec nad Nisou", count: 5 },
  { name: "Semily", count: 1 },
];

const steps = [
  {
    n: "01",
    title: "Sejdeme se u vás",
    body: "Přijedeme se na nemovitost podívat, projdeme ji s vámi a řekneme si na rovinu, za kolik se v Liberci reálně prodá.",
  },
  {
    n: "02",
    title: "Připravíme prodej",
    body: "Fotografie, půdorys, znalec, právník, energetický štítek — papírování i inzerci vezmeme na sebe. Vy víte, v jaké fázi jsme.",
  },
  {
    n: "03",
    title: "Dovedeme k podpisu",
    body: "Prohlídky, jednání o ceně, rezervační i kupní smlouva, úschova peněz, předání klíčů. U toho všeho stojíme vedle vás.",
  },
];

export default function Page() {
  const nabidka = 40;
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#nabidka" aria-label="Reality — Byty Černý, Liberec">
          <span className="wordmark__key" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" role="img">
              <path
                d="M15 3a6 6 0 0 0-5.7 7.9L2 18.2V22h4v-2h2v-2h2l1.3-1.3A6 6 0 1 0 15 3Zm1.5 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span className="wordmark__text">
            <span className="wordmark__reality">Reality</span>
            <span className="wordmark__cerny">Byty Černý</span>
          </span>
        </a>
        <span className="topbar__loc">Liberec &amp; podještědí</span>
      </header>

      <section className="hero" id="nabidka">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Pohled na nemovitosti v Liberci pod Ještědem"
            className="hero__img"
          />
          <div className="hero__scrim" aria-hidden="true" />
        </div>
        <div className="hero__inner">
          <p className="hero__eyebrow">Realitní kancelář · Liberec · od bytu 1+kk po dům u přehrady</p>
          <h1 className="hero__title">
            Klíče od vašeho<br />
            <span className="hero__accentword">nového domova</span><br />
            předáme osobně.
          </h1>
          <p className="hero__lede">
            Prodáváte byt v Pavlovicích, nebo hledáte dům v podhůří Ještědu? U nás nejste číslo v systému.
            Známe Liberecko dům od domu a odvedeme za vás papírování i vyjednávání.
          </p>
          <div className="hero__cta">
            <a className="btn btn--solid" href="#sluzby">Chci prodat nemovitost</a>
            <a className="btn btn--ghost" href="#nabidka-list">Prohlédnout nabídku</a>
          </div>
          <dl className="hero__stats">
            <div>
              <dt>V nabídce právě teď</dt>
              <dd>{nabidka} nemovitostí</dd>
            </div>
            <div>
              <dt>Okresy, kde působíme</dt>
              <dd>Liberec · Jablonec · Semily</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="listings" id="nabidka-list" aria-labelledby="listings-h">
        <div className="sec-head">
          <p className="eyebrow">Aktuální nabídka</p>
          <h2 id="listings-h">Byty, domy a pozemky napříč Libereckem</h2>
          <p className="sec-head__note">
            Nabízíme k&nbsp;prodeji i&nbsp;pronájmu — od garsonky v&nbsp;panelu po rodinný dům se zahradou.
            Pár kousků z&nbsp;nabídky:
          </p>
        </div>

        <ul className="filters" aria-label="Kde nabízíme nemovitosti">
          {mesta.map((m) => (
            <li key={m.name} className="filters__item">
              <span className="filters__name">{m.name}</span>
              <span className="filters__count">{m.count}</span>
            </li>
          ))}
        </ul>

        <ul className="cards">
          {listings.map((l) => (
            <li key={l.ev} className={`card${l.note ? " card--reserved" : ""}`}>
              <div className="card__top">
                <span className={`tag tag--${l.type === "prodej" ? "sell" : "rent"}`}>
                  {l.type === "prodej" ? "Prodej" : "Pronájem"}
                </span>
                <span className="card__kind">{l.kind}</span>
              </div>
              <h3 className="card__title">{l.title}</h3>
              <p className="card__place">{l.place}</p>
              <p className="card__desc">{l.desc}</p>
              <div className="card__foot">
                <span className="card__size">{l.size}</span>
                <span className={`card__price${l.note ? " card__price--reserved" : ""}`}>
                  {l.price}
                </span>
              </div>
              <span className="card__ev">ev. č. {l.ev}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="about" id="sluzby" aria-labelledby="about-h">
        <div className="about__grid">
          <div className="about__media">
            <img
              src="/section-1.webp"
              alt="Interiér zrekonstruovaného bytu z nabídky kanceláře"
              className="about__img"
            />
            <img
              src="/section-2.webp"
              alt="Rodinný dům se zahradou v okolí Liberce"
              className="about__img about__img--2"
            />
          </div>
          <div className="about__text">
            <p className="eyebrow eyebrow--light">Jak to u nás chodí</p>
            <h2 id="about-h">Od první prohlídky<br />po předání klíčů</h2>
            <p className="about__lede">
              Prodej nemovitosti nemusí být týdny nervů. Provedeme vás celým procesem ve třech krocích —
              a v každém z nich víte, na čem jste.
            </p>
            <ol className="steps">
              {steps.map((s) => (
                <li key={s.n} className="step">
                  <span className="step__n" aria-hidden="true">{s.n}</span>
                  <div>
                    <h3 className="step__title">{s.title}</h3>
                    <p className="step__body">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <blockquote className="quote">
              „Paní Černá nám prodala byt v&nbsp;Ruprechticích za tři týdny a&nbsp;bez jediné starosti
              navíc. Papíry vyřídila celé sama.“
              <cite>— rodina Novákových, Liberec</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}

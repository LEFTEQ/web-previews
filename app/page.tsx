import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main className="pss">
      {/* HERO — postaveno na nákladní ploše a přepravním pásu */}
      <header className="hero">
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="brand">
              <span className="brand__mark" aria-hidden="true">PSS</span>
              <span className="brand__full">Stěhování PSS s.r.o.</span>
            </p>
            <p className="eyebrow">Praha 9 · Vrchlabská 40/37 · od roku 2003</p>
            <h1 className="hero__title">
              Naložit, odvézt,<br />
              <span className="hero__title-em">složit v bezpečí.</span>
            </h1>
            <p className="hero__lead">
              Stěhujeme byty i celé firmy po Praze — nonstop, o víkendu bez
              příplatku, do čtvrtého patra bez přirážky. Vaše věci nerozbíjíme,
              a kdyby přece, kryje je pojištění do 5 milionů korun.
            </p>
            <div className="hero__actions">
              <a className="btn btn--phone" href="tel:800511511">
                <span className="btn__label">Volejte zdarma</span>
                <span className="btn__num">800 511 511</span>
              </a>
              <a className="btn btn--ghost" href="#cenik">Spočítat cenu</a>
            </div>
          </div>
          <div className="hero__media">
            <img
              src="/hero.webp"
              alt="Stěhováci Stěhování PSS nakládají věci do dodávky"
              className="hero__img"
              width={880}
              height={640}
            />
            <div className="hero__stamp" aria-hidden="true">
              <span>NONSTOP</span>
              <span className="hero__stamp-sub">Po–Ne · 24/7</span>
            </div>
          </div>
        </div>
      </header>

      {/* SEKCE 1 — CENÍK jako nakládací seznam */}
      <section className="load" id="cenik" aria-labelledby="load-title">
        <div className="section-head">
          <span className="tag">Ceník</span>
          <h2 id="load-title" className="section-title">
            Podle toho, kolik toho vezete
          </h2>
          <p className="section-sub">
            Vyberte náklad, my přiřadíme vůz i posádku. Účtujeme po započaté
            hodině, přistavení v Praze zdarma.
          </p>
        </div>

        <ol className="tiers">
          {tiers.map((t, i) => (
            <li className="tier" key={t.title} style={{ "--i": i } as CSSProperties}>
              <div className="tier__top">
                <span className="tier__no">{String(i + 1).padStart(2, "0")}</span>
                <span className="tier__vehicle">{t.vehicle}</span>
              </div>
              <h3 className="tier__title">{t.title}</h3>
              <p className="tier__crew">{t.crew}</p>
              <p className="tier__price">
                <span className="tier__from">od</span>
                <span className="tier__amount">{t.price}</span>
                <span className="tier__unit">Kč / hod</span>
              </p>
            </li>
          ))}
        </ol>

        <ul className="perks">
          {perks.map((p) => (
            <li className="perk" key={p}>{p}</li>
          ))}
        </ul>

        <div className="extras">
          <h3 className="extras__title">Zvládneme i to těžší</h3>
          <div className="extras__grid">
            {extras.map((e) => (
              <div className="extra" key={e.h}>
                <h4 className="extra__h">{e.h}</h4>
                <p className="extra__p">{e.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEKCE 2 — DŮVĚRA: reference + obrázky */}
      <section className="trust" aria-labelledby="trust-title">
        <div className="trust__intro">
          <div className="section-head">
            <span className="tag">Reference</span>
            <h2 id="trust-title" className="section-title">
              Stěhujeme od roku 2003
            </h2>
            <p className="section-sub">
              Za dvě desetiletí jsme odvezli všechno od krabice s knihami po
              piano. Tady je, co říkají lidé, kterým jsme balili život do dodávky.
            </p>
          </div>
          <div className="trust__images">
            <img
              src="/section-1.webp"
              alt="Zabalený nábytek připravený k naložení do stěhovacího vozu"
              className="trust__img"
              width={640}
              height={480}
            />
            <img
              src="/section-2.webp"
              alt="Moderní stěhovací vůz PSS připravený k odjezdu"
              className="trust__img trust__img--wide"
              width={640}
              height={480}
            />
          </div>
        </div>

        <div className="quotes">
          {quotes.map((q) => (
            <figure className="quote" key={q.name}>
              <blockquote className="quote__text">{q.text}</blockquote>
              <figcaption className="quote__by">
                <span className="quote__name">{q.name}</span>
                <span className="quote__what">{q.what}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="hours" aria-label="Provozní doba a příplatky">
          <h3 className="hours__title">Kdy jezdíme</h3>
          <dl className="hours__list">
            <div className="hours__row">
              <dt>Pondělí – neděle</dt>
              <dd>Nonstop</dd>
            </div>
            <div className="hours__row">
              <dt>Víkend a svátky</dt>
              <dd>Bez příplatku</dd>
            </div>
            <div className="hours__row">
              <dt>Noční práce (22–06)</dt>
              <dd>+ 50 %</dd>
            </div>
            <div className="hours__row">
              <dt>Pojištění nákladu</dt>
              <dd>do 5 mil. Kč · celá Evropa</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}

const tiers = [
  {
    vehicle: "Dodávka + 2 lidé",
    title: "Mám pár věcí",
    crew: "Pár krabic, gauč, pračka — přestěhování v rámci Prahy během dopoledne.",
    price: "1 000",
  },
  {
    vehicle: "Auto + 2 lidé",
    title: "Stěhuji byt",
    crew: "Celá domácnost i s nábytkem. Zabalíme, odneseme, složíme na místě.",
    price: "1 200",
  },
  {
    vehicle: "Náklaďák + 3 lidé",
    title: "Stěhuji celou firmu",
    crew: "Kanceláře i sklad, klidně přes víkend a v noci, ať vám nestojí provoz.",
    price: "1 700",
  },
];

const perks = [
  "Přistavení a prohlídka v Praze zdarma",
  "Do 4. patra bez příplatku",
  "Nonstop, i o víkendu bez přirážky",
  "Moderní vozy různých velikostí",
  "Bezpečné uložení věcí 24/7",
];

const extras = [
  {
    h: "Těžká břemena",
    p: "Trezory, stroje i piano nad 100 kg — cena podle váhy a počtu pater, domluvíme předem.",
  },
  {
    h: "Bezpečné uložení",
    p: "Čisté, moderní sklady s přístupem 24/7. Krátkodobě i dlouhodobě.",
  },
  {
    h: "Zabalíme za vás",
    p: "Krabice, fólie a deky přivezeme. Vy si užíváte dovolenou, my stěhujeme.",
  },
];

const quotes = [
  {
    text:
      "Stěhovali nám velký byt, zatímco jsme byli u moře. Vrátili jsme se rovnou do zabydleného bytu — bezstarostné stěhování. Nikdy víc se nestěhuji sama!",
    name: "Šárka Němcová",
    what: "stěhování bytu",
  },
  {
    text:
      "Vezli nám piano do nových prostor. Kvůli úzkým dveřím se lehce odřel lak, ale opravu bez řečí zaplatili z pojištění. Nakonec to dopadlo skvěle.",
    name: "Petr Pokorný",
    what: "stěhování piana",
  },
  {
    text:
      "Přesouvali jsme pražskou pobočku a potřebovali mimo pracovní dny. Stěhovalo se celý víkend i v noci a stihli to profesionálně s rezervou. Díky!",
    name: "Steven Lee",
    what: "stěhování firmy",
  },
];

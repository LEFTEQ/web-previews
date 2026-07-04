import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Čajovna Šamanka — čajovna v Novém Městě, Praha 2",
  description:
    "Čajovna v Hálkově ulici na pražském Novém Městě. Otevřeno večer, čaj u koberců, hudební večery, pilates a Kírtan. Bosky, potichu, do 22:30.",
  openGraph: {
    title: "Čajovna Šamanka",
    description:
      "Ta, která pečuje o duše lidí, kteří k ní patří. Večerní čajovna na Hálkově, Praha 2.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const pravidelne = [
  {
    kdy: "Po & Út",
    cas: "od 17:30",
    nazev: "Pilates",
    popis:
      "Dvě protažení do začátku týdne, ještě než rozsvítíme čajovnu. Kapacita je malá, místo si drž e‑mailem.",
  },
  {
    kdy: "nepravidelně",
    cas: "od 18:00",
    nazev: "Om chanting & Kírtan",
    popis:
      "Společný zpěv na koberci. Nemusíš umět ani slovo — jen se posadit a nechat se nést.",
  },
  {
    kdy: "13. 8.",
    cas: "od 18:00",
    nazev: "Velmi otevřený hudební večer",
    popis:
      "Aneb jak je kytarové míti svého Filipa. Přijď s nástrojem i bez. Repertoár se dohodne na místě, žánry i nálady se střídají.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="masthead">
        <a className="wordmark" href="#" aria-label="Čajovna Šamanka — domů">
          <span className="wordmark__mark" aria-hidden="true">
            🜄
          </span>
          <span className="wordmark__name">Šamanka</span>
          <span className="wordmark__sub">čajovna · Praha 2</span>
        </a>
        <div className="masthead__hours">
          <span className="masthead__label">otevřeno</span>
          <span className="masthead__time">Po–Pá 18:00–22:30</span>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Šero večerní čajovny Šamanka — koberce, polštáře a světlo svíček"
            className="hero__img"
            width={1600}
            height={1100}
          />
          <span className="hero__glow" aria-hidden="true" />
        </div>

        <div className="hero__body">
          <p className="hero__eyebrow">Hálkova 8 · Nové Město · otevřeno po setmění</p>
          <h1 id="hero-title" className="hero__title">
            Ta, která pečuje
            <br />
            <em>o duše lidí,</em>
            <br />
            kteří k ní patří.
          </h1>
          <p className="hero__lede">
            Zuješ se u dveří, sedneš si na koberec a čas se zpomalí. Šamanka je
            večerní čajovna — od šesti do půl jedenácté, potichu, s konvicí,
            která nikam nespěchá.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="#program">
              Podívat se na program
            </a>
            <a
              className="btn btn--ghost"
              href="mailto:cajovna.samanka@gmail.com"
            >
              Napsat nám
            </a>
          </div>
          <p className="hero__note">
            <span aria-hidden="true">§ </span>
            Chodíš bez bot? Bosým hostům rádi na koberec půjčíme ponožky.
          </p>
        </div>
      </section>

      <section className="program" id="program" aria-labelledby="program-title">
        <div className="section-head">
          <p className="section-head__eyebrow">Pravidelně u nás</p>
          <h2 id="program-title" className="section-head__title">
            Co se děje na kobercích
          </h2>
          <p className="section-head__lede">
            Program se drží nálady, ne rozvrhu. Tady je to, co u nás najdeš
            nejčastěji — a co zrovna chystáme.
          </p>
        </div>

        <ul className="program__list">
          {pravidelne.map((item) => (
            <li className="card" key={item.nazev}>
              <div className="card__when">
                <span className="card__day">{item.kdy}</span>
                <span className="card__time">{item.cas}</span>
              </div>
              <h3 className="card__title">{item.nazev}</h3>
              <p className="card__text">{item.popis}</p>
            </li>
          ))}
        </ul>

        <figure className="program__figure">
          <img
            src="/section-1.webp"
            alt="Připravená konvice a šálky čaje v čajovně Šamanka"
            className="program__img"
            width={1400}
            height={900}
          />
          <figcaption className="program__cap">
            Konvice se dolévá, dokud vydržíš sedět. Co uvaříme dnes, řekneme
            u stolu.
          </figcaption>
        </figure>
      </section>

      <section className="about" id="o-nas" aria-labelledby="about-title">
        <div className="about__media">
          <img
            src="/section-2.webp"
            alt="Interiér čajovny Šamanka s polštáři a tlumeným světlem"
            className="about__img"
            width={1400}
            height={1000}
          />
        </div>

        <div className="about__body">
          <p className="section-head__eyebrow">Kdo tu vaří</p>
          <h2 id="about-title" className="section-head__title">
            Malá čajovna, kterou drží lidé
          </h2>
          <p className="about__text">
            Šamanka není podnik na rychlé kafe. Je to místnost s koberci
            v Hálkově ulici, kam se chodí zpomalit — na čaj, na tichý večer,
            na hudbu, která se domluví na místě. Otevíráme, až se venku
            setmí.
          </p>

          <dl className="facts">
            <div className="facts__row">
              <dt>Kde nás najdeš</dt>
              <dd>Hálkova 1630/8, Praha 2 — Nové Město, 120 00</dd>
            </div>
            <div className="facts__row">
              <dt>Kdy máme otevřeno</dt>
              <dd>Po–Pá 18:00–22:30 · o víkendu zavřeno</dd>
            </div>
            <div className="facts__row">
              <dt>Zavolej nebo napiš</dt>
              <dd>
                <a href="tel:+420734816240">734 816 240</a> ·{" "}
                <a href="mailto:cajovna.samanka@gmail.com">
                  cajovna.samanka@gmail.com
                </a>
              </dd>
            </div>
          </dl>

          <div className="joinus">
            <p className="joinus__lead">Chceš být u toho víc?</p>
            <p className="joinus__text">
              Hledáme <strong>nové čajovníky</strong> do party — a taky
              šikovného kutila, který občas spraví světlo nebo vyrobí
              poličku, co ladí s interiérem. Napiš nám pár řádků o sobě, nebo
              se přijď nejdřív podívat.
            </p>
            <a
              className="btn btn--ghost"
              href="mailto:cajovna.samanka@gmail.com?subject=Chci%20do%20Šamanky"
            >
              Ozvat se ohledně práce
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

import type { CSSProperties } from "react";

export const metadata = {
  title: "Truhlářství Hájek — nábytek na míru | Plzeň",
  description:
    "Kuchyně, vestavěné skříně a atypický nábytek na míru z plzeňské dílny. Od návrhu po montáž u vás doma. Rodinné truhlářství od roku 1992.",
};

type Piece = {
  no: string;
  name: string;
  detail: string;
};

const pieces: Piece[] = [
  {
    no: "01",
    name: "Kuchyňské linky",
    detail:
      "Na centimetr do vašeho půdorysu. Dvířka, pracovní deska i kování vybíráme spolu, montáž řešíme my.",
  },
  {
    no: "02",
    name: "Vestavěné skříně a stěny",
    detail:
      "Šatny a obývací stěny do šikmin i rohů, kde katalogový nábytek končí. Využijeme každý centimetr.",
  },
  {
    no: "03",
    name: "Dětské pokoje a ložnice",
    detail:
      "Postele, patra a úložné prostory, které rostou s dětmi. Materiály bez zbytečné chemie.",
  },
  {
    no: "04",
    name: "Provozy a kanceláře",
    detail:
      "Recepce, prodejny, restaurace i koupelnový nábytek. Kompletní vybavení od jednoho truhláře.",
  },
];

type Proof = {
  label: string;
  value: string;
  note: string;
};

const proof: Proof[] = [
  { label: "V dílně od", value: "1992", note: "tři desetiletí zakázek v Plzni a okolí" },
  { label: "Zázemí", value: "Roudná", note: "Pittnerova 10, Plzeň — přijďte se podívat" },
  { label: "Rozsah", value: "od návrhu", note: "konzultace, výkres, výroba i montáž u vás" },
];

export default function Page() {
  return (
    <main className="hj">
      <header className="hj-top">
        <a className="hj-mark" href="#" aria-label="Truhlářství Hájek — domů">
          <span className="hj-mark__name">Hájek</span>
          <span className="hj-mark__kind">truhlářství · Plzeň</span>
        </a>
        <nav className="hj-nav" aria-label="Hlavní">
          <a href="#nabidka">Co vyrábíme</a>
          <a href="#dilna">O dílně</a>
          <a className="hj-nav__cta" href="tel:+420602466167">Zavolat</a>
        </nav>
      </header>

      <section className="hj-hero" aria-labelledby="hj-hero-title">
        <div className="hj-hero__grain">
          <p className="hj-eyebrow">Nábytek na míru · dílna v Plzni‑Roudné</p>
          <h1 id="hj-hero-title" className="hj-hero__title">
            Změříme, nakreslíme,
            <span className="hj-hero__wood"> vyrobíme z jednoho kusu dřeva.</span>
          </h1>
          <p className="hj-hero__lead">
            Rodinné truhlářství Hájek dělá kuchyně a vestavěné skříně od roku
            1992. Žádný sklad hotových dílů — každá zakázka vzniká na váš
            půdorys, od první tužky po zašroubovaný pant.
          </p>
          <div className="hj-hero__acts">
            <a className="hj-btn hj-btn--solid" href="#nabidka">
              Chci nábytek na míru
            </a>
            <a className="hj-btn hj-btn--ghost" href="tel:+420602466167">
              +420 602 466 167
            </a>
          </div>
        </div>
        <figure className="hj-hero__img">
          <img
            src="/hero.webp"
            alt="Detail dřevěné kuchyňské linky na míru z dílny Truhlářství Hájek"
            width={1200}
            height={900}
            loading="eager"
          />
          <figcaption className="hj-hero__cap">
            Dílna Pittnerova 10, Plzeň‑Roudná
          </figcaption>
        </figure>
      </section>

      <section className="hj-work" id="nabidka" aria-labelledby="hj-work-title">
        <div className="hj-sec-head">
          <p className="hj-eyebrow">Sortiment dílny</p>
          <h2 id="hj-work-title" className="hj-sec-title">
            Co u nás vzniká na míru
          </h2>
          <p className="hj-sec-note">
            Výrobní list, ne katalog. Vyberte, co potřebujete — zbytek doladíme
            při konzultaci u vás nebo v dílně.
          </p>
        </div>

        <ol className="hj-list">
          {pieces.map((p) => (
            <li className="hj-item" key={p.no}>
              <span className="hj-item__no" aria-hidden="true">
                {p.no}
              </span>
              <div className="hj-item__body">
                <h3 className="hj-item__name">{p.name}</h3>
                <p className="hj-item__detail">{p.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="hj-work__img">
          <img
            src="/section-1.webp"
            alt="Vestavěná skříň na míru s dřevěnými dvířky"
            width={1200}
            height={800}
            loading="lazy"
          />
        </figure>
      </section>

      <section className="hj-about" id="dilna" aria-labelledby="hj-about-title">
        <figure className="hj-about__img">
          <img
            src="/section-2.webp"
            alt="Truhlář při ruční práci ve dílně Hájek v Plzni"
            width={1000}
            height={1200}
            loading="lazy"
          />
        </figure>

        <div className="hj-about__text">
          <p className="hj-eyebrow">O dílně</p>
          <h2 id="hj-about-title" className="hj-sec-title">
            Jeden truhlář od konzultace až po montáž
          </h2>
          <p className="hj-about__lead">
            Nejsme montážní firma s podomácku slepenými díly. Zakázku vedeme
            komplexně — přijedeme zaměřit, nakreslíme grafický návrh, vyrobíme
            v Roudné a přijedeme namontovat k vám domů, do bytu i do firmy.
            Nejčastěji pracujeme v Plzni a okolí, po domluvě po celé ČR.
          </p>

          <dl className="hj-proof">
            {proof.map((item) => (
              <div className="hj-proof__row" key={item.label}>
                <dt className="hj-proof__label">{item.label}</dt>
                <dd className="hj-proof__value">{item.value}</dd>
                <dd className="hj-proof__note">{item.note}</dd>
              </div>
            ))}
          </dl>

          <div
            className="hj-card"
            style={{ "--i": 0 } as CSSProperties}
          >
            <p className="hj-card__quote">
              „Kvalita, individuální přístup a rozumné ceny. Než něco vyrobíme,
              domluvíme se do posledního pantu.“
            </p>
            <p className="hj-card__by">— rodina Hájkova, Truhlářství Hájek s.r.o.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

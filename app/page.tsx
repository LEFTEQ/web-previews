import type { CSSProperties } from "react";

export const metadata = {
  title: "HORNAT podlahy — pokládka a renovace parket, Praha Žižkov",
  description:
    "Dubové a jasanové parkety na míru, položené ručně na Žižkově i po celé Praze. Zaměření, montáž, renovace i broušení. Zdravotně nezávadná lepidla Uzin a Bona.",
  openGraph: {
    title: "HORNAT podlahy — parkety pro pražské byty",
    description:
      "Ruční pokládka dřevěných podlah, teras a vinylu v Praze. Přijedeme zaměřit, poradíme s výběrem, položíme na roky dopředu.",
    images: ["/hero.webp"],
    type: "website",
    locale: "cs_CZ",
  },
};

type Pattern = {
  cz: string;
  desc: string;
  detail: string;
};

const patterns: Pattern[] = [
  {
    cz: "Rybina",
    desc: "Klasický francouzský vzor pod úhlem. Dává i malému bytu na Žižkově hloubku a řád.",
    detail: "dub · 45°",
  },
  {
    cz: "Paluba",
    desc: "Podélná prkna na plnou délku pokoje. Klidná plocha, do které se nic neplete.",
    detail: "dub, jasan",
  },
  {
    cz: "Rámová parketa",
    desc: "Krátké vlysy v pravidelné mřížce. To, co bourá, když strhne koberec ve starém pražském domě.",
    detail: "dub, ořech",
  },
];

type Service = {
  n: string;
  title: string;
  body: string;
};

const services: Service[] = [
  {
    n: "01",
    title: "Zaměření a poradenství",
    body: "Přijedeme do bytu, změříme vlhkost podkladu a poradíme dřevinu i vzor podle toho, jak se v místnosti žije. Zdarma, bez závazku.",
  },
  {
    n: "02",
    title: "Pokládka nových parket",
    body: "Masivní i vícevrstvé dřevěné podlaby, terasy a vinyl. Lepíme na Uzin a Bonu, dřevo necháme v bytě odležet, teprve pak pokládáme.",
  },
  {
    n: "03",
    title: "Broušení a renovace",
    body: "Staré parkety po nájemníkovi nebo po babičce přebrousíme, spárujeme a olejujeme. Většinou vyjde levněji než nová podlaha.",
  },
];

export default function Page() {
  return (
    <main className="pg">
      <header className="nav" aria-label="Hlavní">
        <a className="wordmark" href="#uvod" aria-label="HORNAT podlahy, úvod">
          <span className="wordmark__h">HORNAT</span>
          <span className="wordmark__sub">podlahy · vlys po vlysu</span>
        </a>
        <a className="nav__call" href="tel:+420732508076">
          Zavolat 732&nbsp;508&nbsp;076
        </a>
      </header>

      <section className="hero" id="uvod">
        <div className="hero__type">
          <p className="eyebrow">Parkety · Praha 3 Žižkov · od zaměření po poslední olej</p>
          <h1 className="hero__title">
            Podlaha, kterou
            <span className="hero__accent"> skládáme </span>
            vlys po vlysu.
          </h1>
          <p className="hero__lede">
            Dubové a jasanové parkety pro pražské byty — od nové rybiny po
            renovaci prken, na která ještě šlapala prababička. Přijedeme zaměřit,
            poradíme dřevinu a položíme tak, aby to drželo desítky let.
          </p>
          <div className="hero__cta">
            <a className="btn btn--solid" href="tel:+420732508076">
              Zavolat Pavlovi
            </a>
            <a className="btn btn--ghost" href="mailto:info@hornat-podlahy.cz">
              Napsat na e-mail
            </a>
          </div>
        </div>
        <figure className="hero__fig">
          <img
            className="hero__img"
            src="/hero.webp"
            alt="Detail položené dřevěné parketové podlahy s viditelnou kresbou dubu"
            loading="eager"
            width={900}
            height={1100}
          />
          <figcaption className="hero__cap">Dub, vzor rybina — realizace na Žižkově</figcaption>
        </figure>
      </section>

      <section className="vzory" aria-labelledby="vzory-nadpis">
        <div className="section-head">
          <p className="eyebrow">Tři způsoby, jak dřevo poskládat</p>
          <h2 id="vzory-nadpis" className="section-title">
            Vzor rozhoduje víc než dřevina
          </h2>
          <p className="section-intro">
            Než vybereme dub nebo jasan, řešíme kladení. Vzor drží pohromadě celý
            pokoj — proto vám ho ukážeme na vzorku dřeva ve vzorkovně na Jeseniově
            ulici, ne jen na obrázku.
          </p>
        </div>
        <ul className="vzory__grid">
          {patterns.map((p, i) => (
            <li className="vzory__card" key={p.cz} style={{ "--i": i } as CSSProperties}>
              <div className="vzory__glyph" aria-hidden="true" data-vzor={i} />
              <h3 className="vzory__name">{p.cz}</h3>
              <p className="vzory__detail">{p.detail}</p>
              <p className="vzory__desc">{p.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="duvera" aria-labelledby="duvera-nadpis">
        <figure className="duvera__fig">
          <img
            className="duvera__img"
            src="/section-1.webp"
            alt="Pokládka a broušení dřevěné podlahy v pražském bytě"
            loading="lazy"
            width={800}
            height={600}
          />
        </figure>
        <div className="duvera__body">
          <p className="eyebrow">Kdo k vám přijde</p>
          <h2 id="duvera-nadpis" className="section-title">
            Rodinná dílna, ne montážní parta na jeden den
          </h2>
          <p className="duvera__text">
            Zaměření a realizaci vede <strong>Pavel Horáček</strong>, výběr
            materiálu a vzorkovnu <strong>Lenka Horáčková</strong>. Pracujeme se
            zdravotně nezávadnými lepidly a tmely Uzin, Bona a Thomsit — kvůli
            dětem, alergikům i požární bezpečnosti v panelácích.
          </p>
          <ol className="duvera__list" aria-label="Jak to u nás probíhá">
            {services.map((s) => (
              <li className="duvera__step" key={s.n}>
                <span className="duvera__num">{s.n}</span>
                <div>
                  <h3 className="duvera__step-title">{s.title}</h3>
                  <p className="duvera__step-body">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <blockquote className="quote">
            <p>
              „Firma Hornat mě příjemně překvapila — doporučila mi podlahu přímo
              na míru za odpovídající cenu. Po roce na ní není žádná vada. Jsem
              spokojený.“
            </p>
            <cite>Ing. Petr Nejedlý, zákazník</cite>
          </blockquote>
          <address className="kontakt">
            <span className="kontakt__row">Vzorkovna: Jeseniova 79, 130&nbsp;00 Praha 3 — Žižkov · po domluvě</span>
            <a className="kontakt__link" href="tel:+420732508076">Pavel — realizace: 732&nbsp;508&nbsp;076</a>
            <a className="kontakt__link" href="tel:+420724124236">Lenka — vzorkovna: 724&nbsp;124&nbsp;236</a>
          </address>
        </div>
      </section>
    </main>
  );
}

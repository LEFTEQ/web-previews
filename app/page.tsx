import type { CSSProperties } from "react";

const systems = [
  {
    code: "AGS",
    name: "Anti Graffiti System",
    lead: "Odstranění graffiti a trvalá ochrana povrchu proti dalšímu posprejování.",
    detail:
      "Sprej sundáme bez otryskávání a bez poškození omítky nebo kamene. Fasádu pak ošetříme ochranným nátěrem — příští tag umyjeme vodou, ne renovací.",
  },
  {
    code: "BPS",
    name: "Building Protection System",
    lead: "Čištění a ochrana omítek, střech, kamene a fasád budov.",
    detail:
      "Zbavíme fasádu let, řas a městské špíny. Šetrnou chemií Trion Tensid, ne agresivním tlakem, který povrch rozbije.",
  },
  {
    code: "TCS",
    name: "Tensid Cleaning System",
    lead: "Speciální čištění v průmyslu a ve veřejných prostorech.",
    detail:
      "Haly, podchody, nádraží, zastávky. Řešíme povrchy, na které běžná firma nemá postup ani prostředky.",
  },
];

const proof = [
  { k: "od r.", v: "20+", label: "let na fasádách po celém Ostravsku" },
  { k: "partner", v: "Trion Tensid AB", label: "švédská technologie čištění, přímý odběr" },
  { k: "norma", v: "ISO 9001 · 14001", label: "certifikovaná kvalita i ekologie" },
];

export default function Page() {
  return (
    <main className="sk">
      <header className="sk-top">
        <a className="sk-mark" href="#" aria-label="SK Fasády, úvod">
          <span className="sk-mark__sk">SK</span>
          <span className="sk-mark__word">FASÁDY</span>
          <span className="sk-mark__loc">Ostrava</span>
        </a>
        <a className="sk-call" href="tel:+420605123456">
          Zavolat 605&nbsp;123&nbsp;456
        </a>
      </header>

      <section className="sk-hero">
        <div className="sk-hero__grid">
          <div className="sk-hero__text">
            <p className="sk-eyebrow">Čištění a ochrana fasád · Ostrava</p>
            <h1 className="sk-hero__h">
              Sprej dolů.
              <br />
              <span className="sk-hero__clean">Fasáda čistá.</span>
            </h1>
            <p className="sk-hero__p">
              Odstraníme graffiti, řasy i městskou špínu z omítky, kamene i
              betonu — a povrch ošetříme tak, aby další tag stačilo smýt vodou.
              Švédská chemie Trion Tensid, žádné otryskávání.
            </p>
            <div className="sk-hero__cta">
              <a className="sk-btn" href="tel:+420605123456">
                Zavolat na zaměření
              </a>
              <a className="sk-btn sk-btn--ghost" href="mailto:info@skfasady.cz">
                Napsat e-mail
              </a>
            </div>
          </div>

          <figure className="sk-hero__media">
            <img
              src="/hero.webp"
              alt="Čištění fasády — postup od posprejované zdi k čistému povrchu"
              className="sk-hero__img"
            />
            <figcaption className="sk-hero__cap">
              <span>PŘED</span>
              <span className="sk-hero__cap-line" aria-hidden="true" />
              <span>PO</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="sk-serv" aria-labelledby="serv-h">
        <div className="sk-serv__head">
          <h2 id="serv-h" className="sk-h2">
            Tři systémy, jeden povrch
          </h2>
          <p className="sk-serv__sub">
            Podle toho, co fasádu trápí, sáhneme po jiné technologii Trion
            Tensid. Poradíme, co je pro váš dům nebo objekt to pravé.
          </p>
        </div>

        <ul className="sk-serv__list">
          {systems.map((s) => (
            <li className="sk-card" key={s.code}>
              <span className="sk-card__code" aria-hidden="true">
                {s.code}
              </span>
              <h3 className="sk-card__name">{s.name}</h3>
              <p className="sk-card__lead">{s.lead}</p>
              <p className="sk-card__detail">{s.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="sk-about" aria-labelledby="about-h">
        <figure className="sk-about__media">
          <img
            src="/section-1.webp"
            alt="Práce na fasádě — nanášení ochranné vrstvy proti graffiti"
            className="sk-about__img"
          />
        </figure>

        <div className="sk-about__text">
          <p className="sk-eyebrow">O firmě</p>
          <h2 id="about-h" className="sk-h2">
            Fasádám z Ostravy rozumíme dvacet let
          </h2>
          <p className="sk-about__p">
            SK Fasády se specializují na odstraňování graffiti, ochranu povrchů a
            čištění fasád. Nepracujeme metodou pokus–omyl: úzce spolupracujeme se
            švédskou firmou <strong>Trion Tensid AB</strong>, která vyvíjí
            vlastní technologie i prostředky na čištění budov, laků a starých
            nátěrů.
          </p>
          <p className="sk-about__p">
            Produkty odebíráme přímo u výrobce a dodáváme je i profesionálním
            uživatelům — rozdělené do skupin AGS, BPS a TCS podle použití. K tomu
            poradíme, jaký postup a produkt zvolit.
          </p>

          <dl className="sk-proof">
            {proof.map((p) => (
              <div className="sk-proof__item" key={p.v}>
                <dt className="sk-proof__k">{p.k}</dt>
                <dd className="sk-proof__v">{p.v}</dd>
                <dd className="sk-proof__l">{p.label}</dd>
              </div>
            ))}
          </dl>

          <figure className="sk-about__media sk-about__media--in">
            <img
              src="/section-2.webp"
              alt="Vyčištěná fasáda budovy po ošetření systémem Trion Tensid"
              className="sk-about__img"
            />
          </figure>
        </div>
      </section>
    </main>
  );
}

import type { CSSProperties } from "react";

export const metadata = {
  title: "AUTOSKLO HS Expert — výměny a opravy autoskel Strakonice",
  description:
    "Prasklé čelní sklo ve Strakonicích? Vyměníme i opravíme zdarma, s pojišťovnou vše vyřídíme za vás. Kalibrace kamer ADAS a mobilní montáž kdekoliv u vás. Tel. +420 608 707 100.",
};

type Service = {
  tag: string;
  title: string;
  body: string;
  price: string;
};

const services: Service[] = [
  {
    tag: "Prasklé sklo",
    title: "Výměna autoskla",
    body: "Nové čelní, boční i zadní sklo pro osobní i užitková auta. Používáme skla světových značek a lepidla, která drží tak, jak mají.",
    price: "0 Kč",
  },
  {
    tag: "Odštěpek do 3 cm",
    title: "Oprava kamínku",
    body: "Malý zásah vpravíme pryskyřicí dřív, než se z něj stane trhlina přes celé sklo. Hotovo většinou do hodiny, sklo měnit nemusíte.",
    price: "0 Kč",
  },
  {
    tag: "Asistenční systémy",
    title: "Kalibrace kamer ADAS",
    body: "Po výměně skla seřídíme kameru za zpětným zrcátkem. Bez toho by vám asistenty jako nouzové brzdění mohly hlásit chybu.",
    price: "v ceně",
  },
];

type Proof = {
  k: string;
  v: string;
};

const proof: Proof[] = [
  { k: "Zkušený tým", v: "přes 15 let na jednom místě" },
  { k: "Servis dle dohody", v: "i mimo běžnou pracovní dobu" },
  { k: "Mobilní montáž", v: "přijedeme kamkoliv za vámi" },
  { k: "Partner pojišťoven", v: "pojistnou událost vyřídíme" },
];

export default function Page() {
  return (
    <main className="hs">
      <header className="hs-topbar">
        <a className="hs-mark" href="#" aria-label="Autosklo HS Expert, úvod">
          <span className="hs-mark__glyph" aria-hidden="true">
            <span className="hs-mark__crack" />
          </span>
          <span className="hs-mark__words">
            <strong>HS Expert</strong>
            <em>autosklo · Strakonice</em>
          </span>
        </a>
        <a className="hs-call" href="tel:+420608707100">
          <span aria-hidden="true">Zavolat</span>
          <span className="hs-call__num">+420 608 707 100</span>
        </a>
      </header>

      <section className="hs-hero" aria-labelledby="hero-title">
        <div className="hs-hero__grid" aria-hidden="true">
          <svg
            className="hs-glass"
            viewBox="0 0 800 520"
            preserveAspectRatio="xMidYMid meet"
            role="presentation"
          >
            <defs>
              <linearGradient id="glassFill" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#123f4c" />
                <stop offset="1" stopColor="#0b2730" />
              </linearGradient>
              <linearGradient id="sheen" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#aee7f0" stopOpacity="0.55" />
                <stop offset="0.5" stopColor="#aee7f0" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              className="hs-glass__pane"
              d="M96 60 L704 60 Q740 60 736 96 L700 452 Q696 480 668 480 L132 480 Q104 480 100 452 L64 96 Q60 60 96 60 Z"
              fill="url(#glassFill)"
              stroke="#2c6373"
              strokeWidth="2"
            />
            <path
              className="hs-glass__pane"
              d="M96 60 L704 60 Q740 60 736 96 L700 452 Q696 480 668 480 L132 480 Q104 480 100 452 L64 96 Q60 60 96 60 Z"
              fill="url(#sheen)"
            />
            <g className="hs-glass__crack" stroke="#f2b705" fill="none" strokeLinecap="round">
              <circle cx="400" cy="268" r="9" strokeWidth="3" fill="#f2b705" fillOpacity="0.18" />
              <path strokeWidth="2.4" d="M400 268 L318 176" />
              <path strokeWidth="2.4" d="M400 268 L520 210" />
              <path strokeWidth="2.4" d="M400 268 L470 372" />
              <path strokeWidth="2.4" d="M400 268 L300 350" />
              <path strokeWidth="1.6" d="M318 176 L262 132" />
              <path strokeWidth="1.6" d="M318 176 L344 122" />
              <path strokeWidth="1.6" d="M520 210 L590 172" />
              <path strokeWidth="1.6" d="M520 210 L560 268" />
              <path strokeWidth="1.6" d="M470 372 L516 430" />
              <path strokeWidth="1.6" d="M300 350 L244 396" />
              <path strokeWidth="1.6" d="M300 350 L320 418" />
            </g>
          </svg>
        </div>

        <div className="hs-hero__copy">
          <p className="hs-eyebrow">Volyňská 446 · Strakonice</p>
          <h1 id="hero-title" className="hs-title">
            Prasklo?
            <span className="hs-title__line">Do večera</span>
            <span className="hs-title__accent">je to za vámi.</span>
          </h1>
          <p className="hs-lede">
            Odštěpek od kamínku i trhlinu přes celé čelní sklo řešíme na počkání.
            Výměnu i opravu zaplatí pojišťovna — papíry vyřídíme za vás, vy jen
            přivezete auto. Nebo přijedeme my.
          </p>
          <div className="hs-hero__actions">
            <a className="hs-btn hs-btn--solid" href="tel:+420608707100">
              Zavolat a domluvit termín
            </a>
            <a className="hs-btn hs-btn--ghost" href="#sluzby">
              Co umíme
            </a>
          </div>
        </div>
      </section>

      <section className="hs-services" id="sluzby" aria-labelledby="services-title">
        <div className="hs-services__head">
          <h2 id="services-title">Tři věci, kvůli kterým sem lidi jezdí</h2>
          <p>
            Ať přijedete s kamínkem, nebo se sklem popraskaným přes půl kapoty,
            děláte jeden krok: zavoláte. Zbytek je na nás.
          </p>
        </div>
        <ol className="hs-cards">
          {services.map((s, i) => (
            <li className="hs-card" key={s.title} style={{ "--i": i } as CSSProperties}>
              <div className="hs-card__num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="hs-card__tag">{s.tag}</p>
              <h3 className="hs-card__title">{s.title}</h3>
              <p className="hs-card__body">{s.body}</p>
              <p className="hs-card__price">
                <span>vaše cena</span>
                <strong>{s.price}</strong>
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="hs-trust" aria-labelledby="trust-title">
        <div className="hs-trust__lead">
          <p className="hs-eyebrow hs-eyebrow--light">O dílně</p>
          <h2 id="trust-title">
            Rodinná dílna ve Strakonicích, kde sklo měníme od roku 2017.
          </h2>
          <p>
            Nejsme montovna, kde jste číslo v pořadí. Znáte jméno člověka, který
            vám sklo lepí, a on ví, že se sem s dalším autem vrátíte. Používáme
            skla a lepidla světových značek, takže na kvalitě spoje šetřit
            nemusíme — a ani vy byste na tom šetřit neměli.
          </p>
        </div>
        <dl className="hs-trust__list">
          {proof.map((p) => (
            <div className="hs-trust__item" key={p.k}>
              <dt>{p.k}</dt>
              <dd>{p.v}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}

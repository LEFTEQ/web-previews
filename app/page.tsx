import type { CSSProperties } from "react";

export const metadata = {
  title: "STROMOUREK — arboristika Praha | péče o stromy, rizikové kácení, stromolezení",
  description:
    "Certifikovaný evropský arborista Ondřej Mourek. Odborná péče o stromy, rizikové kácení a stromolezení v Praze a okolí. Intenzivní praxe od roku 2005.",
  openGraph: {
    title: "STROMOUREK — arboristika v Praze od roku 2005",
    description:
      "Ošetřujeme, jistíme a bezpečně kácíme vzrostlé stromy. Certifikovaný evropský arborista, lano a strom místo plošiny.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
  icons: {
    icon:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%232f3a2c'/%3E%3Cpath d='M16 4 L16 28 M16 12 L10 8 M16 12 L22 8 M16 18 L9 14 M16 18 L23 14' stroke='%23d6c48a' stroke-width='2' fill='none' stroke-linecap='round'/%3E%3C/svg%3E",
  },
};

const services = [
  {
    tag: "Arboristika",
    title: "Odborná péče o stromy",
    body: "Řez zdravotní, bezpečnostní i redukční — vždy podle druhu, věku a stavu koruny. Vazby, které odlehčí přetíženým větvím dřív, než praskne. Diagnostika, kterou uvidíte v pořizovaném protokolu.",
    ridge: "Řez a stabilizace",
  },
  {
    tag: "Stromolezení",
    title: "Práce v koruně na laně",
    body: "Tam, kde plošina nedosáhne nebo poškodí zahradu, lezeme. Dvojité lano, zbytkové jištění, žádná stopa v trávníku. Ideální pro vzrostlé duby, lípy a stromy v úzkých dvorech Prahy.",
    ridge: "Lano místo plošiny",
  },
  {
    tag: "Rizikové kácení",
    title: "Kácení po částech",
    body: "Strom nad střechou, plotem nebo dráty spouštíme kus po kuse na lanech. Kontrolovaně, bez škody na okolí. Součástí je úklid a odvoz dřevní hmoty.",
    ridge: "Spouštění po částech",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="STROMOUREK, arboristika Praha">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 40 48" width="28" height="34" role="presentation">
              <path
                d="M20 46 L20 20 M20 26 L9 18 M20 26 L31 18 M20 34 L11 29 M20 34 L29 29 M20 20 L13 12 M20 20 L27 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="brand-word">
            STROM<span className="brand-word-soft">OUREK</span>
          </span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#sluzby">Co ošetříme</a>
          <a href="#duvera">O arboristovi</a>
          <a className="topnav-call" href="tel:+420777273661">
            Zavolat arboristovi
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Arborista jistěný na laně pracuje vysoko v koruně vzrostlého stromu"
            className="hero-img"
            width={1600}
            height={1000}
          />
          <span className="hero-scrim" aria-hidden="true" />
        </div>

        <div className="hero-inner">
          <p className="hero-eyebrow">
            <span className="hero-height">28 m</span>
            <span className="hero-height-label">nad zemí, na dvou lanech — Praha</span>
          </p>
          <h1 className="hero-title">
            Do koruny se
            <br />
            <em>vyšplháme</em>,
            <br />
            ne vyjedeme.
          </h1>
          <p className="hero-lede">
            STROMOUREK je Ondřej Mourek, certifikovaný evropský arborista.
            Ošetřujeme, jistíme a bezpečně kácíme vzrostlé stromy tam, kde na ně
            plošina nedosáhne — v pražských dvorech, zahradách i parcích. Od roku 2005.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420777273661">
              Zavolat: 777 273 661
            </a>
            <a className="btn btn-ghost" href="#sluzby">
              Prohlédnout, co umíme
            </a>
          </div>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-h">
        <div className="section-head">
          <p className="eyebrow">Tři věci na laně</p>
          <h2 id="services-h" className="section-title">
            Co v koruně řešíme
          </h2>
          <p className="section-note">
            Každý zásah začíná pod stromem — prohlídkou, druhem a rozhodnutím, co
            se řezat smí a co ne. Teprve pak jdeme nahoru.
          </p>
        </div>

        <ol className="cards">
          {services.map((s, i) => (
            <li className="card" key={s.title} style={{ "--i": i } as CSSProperties}>
              <span className="card-ring" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="card-tag">{s.tag}</p>
              <h3 className="card-title">{s.title}</h3>
              <p className="card-body">{s.body}</p>
              <p className="card-ridge">{s.ridge}</p>
            </li>
          ))}
        </ol>

        <figure className="services-figure">
          <img
            src="/section-1.webp"
            alt="Detail řezu na vzrostlém stromě po odborném zásahu arboristy"
            width={1400}
            height={900}
          />
          <figcaption>
            Redukční řez lípy v Praze — koruna odlehčená, tvar zachovaný.
          </figcaption>
        </figure>
      </section>

      <section className="trust" id="duvera" aria-labelledby="trust-h">
        <div className="trust-grid">
          <figure className="trust-figure">
            <img
              src="/section-2.webp"
              alt="Ondřej Mourek při arboristické práci ve výškách v pražské zahradě"
              width={1200}
              height={1400}
            />
          </figure>

          <div className="trust-body">
            <p className="eyebrow">O arboristovi</p>
            <h2 id="trust-h" className="section-title">
              Ondřej Mourek, DiS.
            </h2>
            <p className="trust-lede">
              Certifikovaný evropský arborista (ETW). Devatenáct let na laně a
              intenzivní praxe po celé republice — se stromy v pražské zástavbě,
              kde je málo místa a hodně věcí, které nesmí spadnout.
            </p>

            <dl className="specs">
              <div className="spec">
                <dt>V praxi od</dt>
                <dd>2005</dd>
              </div>
              <div className="spec">
                <dt>Certifikace</dt>
                <dd>European Tree Worker</dd>
              </div>
              <div className="spec">
                <dt>Působíme</dt>
                <dd>Praha a okolí</dd>
              </div>
              <div className="spec">
                <dt>Metoda</dt>
                <dd>Lano, ne plošina</dd>
              </div>
            </dl>

            <blockquote className="quote">
              „Ke každému stromu jdu tak, aby vydržel co nejdéle. Kácení je až
              poslední možnost — a i tu odvedu tak, aby okolí zůstalo bez škrábnutí.“
            </blockquote>

            <div className="trust-contact">
              <a className="btn btn-primary" href="tel:+420777273661">
                Zavolat: 777 273 661
              </a>
              <a className="btn btn-ghost" href="mailto:ondrej.mourek@seznam.cz">
                ondrej.mourek@seznam.cz
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

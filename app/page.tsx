import { AiImage } from "./_ui";

function Seal({
  id,
  withText = false,
  className,
}: {
  id: string;
  withText?: boolean;
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="100" cy="100" r="96" className="seal-ring" />
      <circle cx="100" cy="100" r="71" className="seal-ring seal-ring--in" />
      {withText && (
        <>
          <defs>
            <path
              id={id}
              d="M100,100 m-83,0 a83,83 0 1,1 166,0 a83,83 0 1,1 -166,0"
            />
          </defs>
          <text className="seal-text">
            <textPath href={`#${id}`} startOffset="0">
              {"SVATOV\u00C1CLAVSK\u00DD \u00B7 PIVOVAR \u00B7 OLOMOUC \u00B7 ANNO \u00B7 "}
            </textPath>
          </text>
        </>
      )}
      <g className="seal-crown">
        <path d="M60 116 L70 84 L86 108 L100 76 L114 108 L130 84 L140 116 Z" />
        <rect x="60" y="116" width="80" height="15" rx="2" />
        <circle cx="70" cy="82" r="5" />
        <circle cx="100" cy="73" r="6" />
        <circle cx="130" cy="82" r="5" />
      </g>
    </svg>
  );
}

const worlds = [
  {
    tag: "Restaurace",
    label: "U stolu",
    text: "Domácí kuchyně a polední menu. Poctivá jídla k pivu, která vaříme každý den čerstvá — od svíčkové po klobásu z vlastní udírny.",
    action: "Denní menu",
    tone: "sul",
  },
  {
    tag: "Pivovar",
    label: "Ve sklepě",
    text: "Sedm druhů nefiltrovaného a nepasterovaného piva, které zraje pár metrů pod restaurací. Točíme ho tak, jak dozraje — ne jak káže etiketa.",
    action: "Objednat pivo",
    tone: "chmel",
  },
  {
    tag: "Pivní lázně",
    label: "V kádi",
    text: "Koupel v pivní lázni, solná sauna, masáž a vychlazená sklenice na dosah ruky. To nejlepší pro tělo i duši v lázeňském klidu.",
    action: "Rezervovat lázně",
    tone: "med",
  },
];

const quotes = [
  {
    text: "Nefiltrovaná dvanáctka a k ní svíčková od babičky. Takhle chutná Olomouc.",
    who: "Petr H., stálý host",
  },
  {
    text: "Pivní lázeň po celém dni na kole — a sklenice piva rovnou u vany. Vrátíme se.",
    who: "Markéta a Jan",
  },
];

export default function Page() {
  return (
    <main className="page">
      <div className="pour" aria-hidden="true">
        <div className="pour__glass">
          <div className="pour__amber" />
          <div className="pour__foam" />
        </div>
      </div>

      <header className="hero">
        <div className="hero__media">
          <AiImage
            src="/hero.webp"
            alt="Sklenice nefiltrovaného jantarového piva ze Svatováclavského pivovaru"
            className="hero__img"
          />
          <div className="hero__scrim" />
        </div>

        <nav className="nav">
          <a className="wordmark" href="#uvod">
            <Seal id="seal-nav" className="wordmark__seal" />
            <span className="wordmark__text">
              Svatováclavský
              <span className="wordmark__sub">pivovar · Olomouc</span>
            </span>
          </a>
          <a className="nav__cta" href="tel:+420777111222">
            Rezervovat · 777 111 222
          </a>
        </nav>

        <div className="hero__inner" id="uvod">
          <Seal id="seal-hero" withText className="hero__seal" />
          <p className="eyebrow hero__eyebrow">Olomouc · minipivovar &amp; restaurace</p>
          <h1 className="hero__title">
            Sedm piv z vlastního sklepa. Bez filtrace, bez pasterace.
          </h1>
          <p className="hero__sub">
            Vaříme pár metrů pod restaurací. K tomu domácí kuchyně, polední
            menu a pivní lázně pro tělo i duši — všechno na jednom místě v
            srdci Olomouce.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="tel:+420777111222">
              Rezervovat stůl
            </a>
            <a className="btn btn--ghost" href="#svety">
              Prohlédnout tři světy
            </a>
          </div>
        </div>
      </header>

      <section className="worlds" id="svety" aria-labelledby="svety-nadpis">
        <div className="worlds__head">
          <p className="eyebrow">Tři světy pod jednou pečetí</p>
          <h2 className="section__title" id="svety-nadpis">
            Jeden dům, tři důvody přijít
          </h2>
        </div>

        <div className="worlds__grid">
          {worlds.map((w, i) => (
            <article
              key={w.tag}
              className={`world world--${w.tone}`}
            >
              <div className="world__mark">
                <Seal id={`seal-w-${i}`} className="world__seal" />
              </div>
              <p className="world__label">{w.label}</p>
              <h3 className="world__tag">{w.tag}</h3>
              <p className="world__text">{w.text}</p>
              <a className="world__action" href="tel:+420777111222">
                {w.action}
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>

        <figure className="worlds__band">
          <AiImage
            src="/section-1.webp"
            alt="Interiér restaurace Svatováclavského pivovaru s výčepem"
            className="worlds__bandimg"
          />
        </figure>
      </section>

      <section className="about" aria-labelledby="about-nadpis">
        <div className="about__media">
          <AiImage
            src="/section-2.webp"
            alt="Pivní lázeň a solná sauna Svatováclavského pivovaru"
            className="about__img"
          />
        </div>

        <div className="about__body">
          <p className="eyebrow">Řemeslo &amp; místo</p>
          <h2 className="section__title" id="about-nadpis">
            Vaříme po svém, ve stínu svatého Václava
          </h2>
          <p className="about__lead">
            Naše pivo neputuje přes půl republiky. Zraje ve sklepě pod
            restaurací a do sklenice jde nefiltrované a nepasterované — přesně
            takové, jaké ho sládek uzná za hotové. Jméno svatého Václava neseme
            jako pečeť: značka řemesla, ne dekorace.
          </p>

          <ul className="about__facts">
            <li>Nefiltrované</li>
            <li>Nepasterované</li>
            <li>7 druhů piva</li>
            <li>Vlastní sklep</li>
          </ul>

          <div className="about__quotes">
            {quotes.map((q) => (
              <blockquote key={q.who} className="quote">
                <p className="quote__text">„{q.text}"</p>
                <footer className="quote__who">{q.who}</footer>
              </blockquote>
            ))}
          </div>

          <p className="about__contact">
            Rezervace a objednávky:{" "}
            <a href="tel:+420777111222">+420 777 111 222</a> ·{" "}
            <a href="mailto:info@example.cz">info@example.cz</a>
          </p>
        </div>
      </section>
    </main>
  );
}

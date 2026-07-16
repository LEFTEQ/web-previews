import { AiImage } from "./_ui";

// Growth-ring radii for the log cross-section (inner pith → outer bark).
// Slightly uneven spacing so it reads as a real cut, not a bullseye.
const RINGS = [
  { r: 15, w: 2.4, c: "var(--heartwood)" },
  { r: 31, w: 1.3, c: "var(--ring-dim)" },
  { r: 50, w: 1.8, c: "var(--heartwood)" },
  { r: 66, w: 1.2, c: "var(--ring-dim)" },
  { r: 88, w: 1.6, c: "var(--heartwood)" },
  { r: 108, w: 1.2, c: "var(--ring-dim)" },
  { r: 124, w: 2.0, c: "var(--heartwood)" },
  { r: 148, w: 1.2, c: "var(--ring-dim)" },
  { r: 170, w: 1.5, c: "var(--heartwood)" },
  { r: 196, w: 1.2, c: "var(--ring-dim)" },
  { r: 220, w: 1.8, c: "var(--heartwood)" },
  { r: 248, w: 1.2, c: "var(--ring-dim)" },
  { r: 276, w: 2.6, c: "var(--bark-edge)" },
];

function LogSection({ className = "" }: { className?: string }) {
  return (
    <div className={`cc-rings ${className}`} aria-hidden="true">
      <svg viewBox="0 0 600 600" role="presentation" focusable="false">
        <g transform="translate(300 300)">
          {RINGS.map((ring, i) => (
            <circle
              key={i}
              cx={i % 2 ? 4 : -3}
              cy={i % 3 ? -2 : 5}
              r={ring.r}
              fill="none"
              stroke={ring.c}
              strokeWidth={ring.w}
            />
          ))}
          {/* radial cracks / rays from the pith */}
          <path d="M0 0 L 8 -276" stroke="var(--ring-dim)" strokeWidth="1" fill="none" opacity="0.5" />
          <path d="M0 0 L -180 210" stroke="var(--ring-dim)" strokeWidth="1" fill="none" opacity="0.5" />
          <path d="M0 0 L 250 120" stroke="var(--ring-dim)" strokeWidth="1" fill="none" opacity="0.5" />
          {/* the pith — the fresh heart of the cut */}
          <circle cx={-3} cy={5} r={6} fill="var(--orange)" />
        </g>
      </svg>
    </div>
  );
}

const SERVICES = [
  {
    n: "01",
    title: "Ořez stromů",
    body:
      "Zdravotní, bezpečnostní i redukční řezy podle platných arboristických standardů AOPK. Uděláme pro vaše dřeviny to nejlepší — bez zbytečných zásahů.",
  },
  {
    n: "02",
    title: "Rizikové kácení",
    body:
      "Stromy u domů, drátů a silnic skácíme po částech, jištěné lanem. Máme techniku i proškolený personál pro práci ve stísněných místech.",
  },
  {
    n: "03",
    title: "Frézování pařezů",
    body:
      "Odstranění pařezů samojízdnou frézou — i tam, kam se těžká technika nedostane. Po nás zůstane rovný terén připravený k výsadbě.",
  },
  {
    n: "04",
    title: "Likvidace dřevní hmoty",
    body:
      "Odvoz a zpracování dřeva z těžko dostupných míst. Zajistíme i sečení travních ploch v parcích, koridorech a ochranných pásmech vedení.",
  },
];

const FACTS = [
  { k: "od 2003", v: "přes 20 letokruhů praxe v Brně a okolí" },
  { k: "AOPK", v: "řezy podle platných arboristických standardů" },
  { k: "NN · VN · VVN", v: "práce v ochranných pásmech elektrického vedení" },
  { k: "3 sektory", v: "soukromý, veřejný i průmyslový" },
];

export default function Page() {
  return (
    <main className="cc">
      {/* ============ HERO ============ */}
      <header className="cc-top">
        <a className="cc-mark" href="#top" aria-label="Zbyněk Dvořáček – arboristika, úvod">
          <span className="cc-mark__name">DVOŘÁČEK</span>
          <span className="cc-mark__sub">arboristika · Brno</span>
        </a>
        <nav className="cc-nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#onas">O nás</a>
          <a className="cc-nav__call" href="tel:+420775225113">+420 775 225 113</a>
        </nav>
      </header>

      <section className="cc-hero" id="top">
        <LogSection className="cc-rings--hero" />
        <div className="cc-hero__inner">
          <p className="cc-eyebrow cc-load" style={{ animationDelay: "0.35s" }}>
            Péče o dřeviny · spol. s r.o. · od roku 2003
          </p>
          <h1 className="cc-hero__title">
            <span className="cc-load" style={{ animationDelay: "0.45s" }}>Stromy u cest,</span>{" "}
            <span className="cc-load" style={{ animationDelay: "0.55s" }}>vedení a domů</span>{" "}
            <span className="cc-load cc-hero__accent" style={{ animationDelay: "0.65s" }}>
              držíme v bezpečné kondici.
            </span>
          </h1>
          <p className="cc-hero__lede cc-load" style={{ animationDelay: "0.8s" }}>
            Odborné ořezy, rizikové kácení a frézování pařezů v Brně. Zajistíme, aby dřeviny
            neohrožovaly lidi, dopravu ani elektrické vedení.
          </p>
          <div className="cc-hero__cta cc-load" style={{ animationDelay: "0.95s" }}>
            <a className="cc-btn" href="tel:+420775225113">Zavolat 775 225 113</a>
            <span className="cc-hero__note">Nezávazná prohlídka stromu na místě</span>
          </div>
        </div>
      </section>

      {/* ============ SLUŽBY (craft-catalog) ============ */}
      <section className="cc-block cc-block--catalog" id="sluzby" aria-labelledby="sluzby-h">
        <div className="cc-block__head">
          <p className="cc-kicker">Katalog prací</p>
          <h2 className="cc-h2" id="sluzby-h">Co pro vaše dřeviny uděláme</h2>
          <p className="cc-block__intro">
            Každou zakázku bereme jako jeden strom po druhém — od návrhu řezu po úklid po sobě.
            Rychlý, odborný a osobní přístup ke každé práci.
          </p>
        </div>

        <ol className="cc-catalog">
          {SERVICES.map((s) => (
            <li className="cc-card cc-reveal" key={s.n}>
              <span className="cc-card__num" aria-hidden="true">{s.n}</span>
              <div className="cc-card__body">
                <h3 className="cc-card__title">{s.title}</h3>
                <p className="cc-card__text">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ============ O NÁS / DŮVĚRA ============ */}
      <section className="cc-block cc-block--trust" id="onas" aria-labelledby="onas-h">
        <LogSection className="cc-rings--trust" />
        <div className="cc-trust">
          <div className="cc-trust__lead">
            <p className="cc-kicker cc-kicker--light">O firmě</p>
            <h2 className="cc-h2 cc-h2--light" id="onas-h">
              Řemeslo, které se počítá na letokruhy
            </h2>
            <p className="cc-trust__text">
              Firma Zbyněk Dvořáček spol. s r.o. působí na trhu od roku 2003. Specializujeme se na
              arboristiku — odborné ořezy, rizikové kácení, frézování pařezů, výsadbu a péči o krajinu.
            </p>
            <p className="cc-trust__text">
              Máme dlouhodobé zkušenosti v soukromém, veřejném i průmyslovém sektoru a v ochranných
              pásmech vedení NN, VN a VVN. V oboru se stále vzděláváme — a to je na výsledku vidět.
            </p>
          </div>

          <div className="cc-trust__side">
            <ul className="cc-facts">
              {FACTS.map((f) => (
                <li className="cc-facts__item cc-reveal" key={f.k}>
                  <span className="cc-facts__k">{f.k}</span>
                  <span className="cc-facts__v">{f.v}</span>
                </li>
              ))}
            </ul>

            <address className="cc-contact">
              <span className="cc-contact__label">Kde nás najdete</span>
              <a href="tel:+420775225113">+420 775 225 113</a>
              <a href="mailto:zbynek.dvoracek@seznam.cz">zbynek.dvoracek@seznam.cz</a>
              <span>Ivanovické náměstí 11, Brno 620 00</span>
            </address>
          </div>
        </div>
      </section>
    </main>
  );
}

import { AiImage } from "./_ui";

const FLOWER_COLORS = ["#c1301b", "#d6a12e", "#2e56a0", "#43663f", "#d6a12e", "#c1301b"];
const FLOWER_X = [100, 320, 540, 760, 980, 1160];

function Flower({ cx, color, delay }: { cx: number; color: string; delay: number }) {
  const angles = [0, 60, 120, 180, 240, 300];
  return (
    <g className="ps-flower" style={{ animationDelay: `${delay}s` }}>
      <g stroke={color} fill="none" strokeWidth={2.4} strokeLinejoin="round">
        {angles.map((a) => (
          <ellipse key={a} cx={cx} cy={25} rx={7} ry={13} transform={`rotate(${a} ${cx} 45)`} />
        ))}
        <circle cx={cx} cy={45} r={6} fill={color} stroke="none" />
      </g>
    </g>
  );
}

function PaprikaString() {
  return (
    <div className="divider" aria-hidden="true">
      <svg className="ps" viewBox="0 0 1200 90" preserveAspectRatio="xMidYMid meet" role="presentation">
        <path
          className="ps-cord"
          d="M0 45 H1200"
          stroke="#641320"
          strokeWidth={2.6}
          fill="none"
          strokeLinecap="round"
        />
        {FLOWER_X.map((cx, i) => (
          <Flower key={cx} cx={cx} color={FLOWER_COLORS[i]} delay={0.42 + i * 0.08} />
        ))}
      </svg>
    </div>
  );
}

function MarkerFlower({ color }: { color: string }) {
  const angles = [0, 60, 120, 180, 240, 300];
  return (
    <svg className="marker" viewBox="0 0 32 32" width="30" height="30" aria-hidden="true">
      <g stroke={color} fill="none" strokeWidth={2}>
        {angles.map((a) => (
          <ellipse key={a} cx={16} cy={9} rx={3.4} ry={6} transform={`rotate(${a} 16 16)`} />
        ))}
        <circle cx={16} cy={16} r={3} fill={color} stroke="none" />
      </g>
    </svg>
  );
}

const CATEGORIES = [
  {
    color: "#c1301b",
    name: "Paprika a koření",
    text: "Szegedská mletá paprika — sladká i pálivá, čerstvě semletá. Základ pravého guláše i lečo.",
    price: "od 89 Kč",
  },
  {
    color: "#641320",
    name: "Uzeniny na váhu",
    text: "Csabai a gyulai klobása, uherský salám, domácí škvarky. Nakrájíme přesně tolik, kolik chcete.",
    price: "od 149 Kč",
  },
  {
    color: "#d6a12e",
    name: "Tokajské víno",
    text: "Sladké dezertní víno z tokajských svahů — Aszú i pozdní sběr. Dárek, který potěší.",
    price: "od 349 Kč",
  },
  {
    color: "#43663f",
    name: "Ovocná pálinka",
    text: "Meruňková, švestková, hruškovitá. Poctivá pálenka bez příkras, tak jak se pálí doma.",
    price: "od 399 Kč",
  },
  {
    color: "#2e56a0",
    name: "Lečo a konzervy",
    text: "Plněné papriky, hotové lečo, kysané zelí v kýblu i v malém balení na jednu porci.",
    price: "od 59 Kč",
  },
  {
    color: "#c1301b",
    name: "Z pekárny",
    text: "Horký langoš, škvarkové pečivo se sýrem, makový i tvarohový závin. Pečeme každý den.",
    price: "od 39 Kč",
  },
];

export default function Page() {
  return (
    <>
      <div className="ribbon" role="status">
        <span className="ribbon-dot" aria-hidden="true" />
        Doprava zdarma od 1&nbsp;500&nbsp;Kč — platí pro koncové zákazníky
      </div>

      <header className="site-head">
        <a className="wordmark" href="#hero" aria-label="Hungaro Delikates, úvod">
          <span className="wm-top">Hungaro</span>
          <span className="wm-bottom">
            Delikate<span className="wm-s">s</span>
          </span>
        </a>
        <nav className="site-nav" aria-label="Hlavní">
          <a href="#nabidka">Nabídka</a>
          <a href="#prodejna">Prodejna</a>
        </nav>
      </header>

      <main>
        <section className="band band--hero" id="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Otevřeno · centrum Pardubic</p>
              <h1>
                Maďarská spíž teď voní
                <span className="h1-accent"> i v Pardubicích</span>
              </h1>
              <p className="lede">
                Čerstvě mletá szegedská paprika, uzená csabai klobása, sladké tokajské víno a horký
                langoš. Přivezli jsme kus Maďarska k vám do města — a rozvážíme po celém Česku.
              </p>
              <div className="cta-row">
                <a className="btn" href="#nabidka">
                  Prohlédnout nabídku
                </a>
                <a className="btn btn--ghost" href="#prodejna">
                  Kde nás najdete
                </a>
              </div>
            </div>
            <div className="hero-media-wrap">
              <AiImage className="hero-media" src="/hero.webp" alt="Pult maďarských delikates — paprika, uzeniny a pečivo" />
            </div>
          </div>
        </section>

        <PaprikaString />

        <section className="band band--offer" id="nabidka">
          <div className="wrap">
            <p className="eyebrow">Co u nás nakoupíte</p>
            <h2>Poctivé chutě z maďarské kuchyně, poskládané na jednom pultu</h2>
            <p className="section-lede">
              Vybíráme od malých maďarských výrobců — bez zbytečných náhražek. Nakoupíte osobně v
              prodejně, nebo si necháte vše přivézt domů.
            </p>

            <div className="media-band">
              <AiImage className="section-media" src="/section-1.webp" alt="Regály s maďarskými delikatesami v nové prodejně" />
            </div>

            <ul className="cat-grid">
              {CATEGORIES.map((c) => (
                <li className="cat-card" key={c.name}>
                  <div className="cat-head">
                    <MarkerFlower color={c.color} />
                    <h3>{c.name}</h3>
                  </div>
                  <p>{c.text}</p>
                  <p className="price">{c.price}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <PaprikaString />

        <section className="band band--store" id="prodejna">
          <div className="wrap store-grid">
            <div className="store-media-wrap">
              <AiImage className="section-media" src="/section-2.webp" alt="Interiér nové prodejny Hungaro Delikates v Pardubicích" />
            </div>
            <div className="store-copy">
              <p className="eyebrow eyebrow--light">Nová prodejna v Pardubicích</p>
              <h2>Zastavte se na paprikovou vůni do centra</h2>
              <p className="section-lede">
                Otevřeli jsme kamennou prodejnu v centru Pardubic. Přijďte ochutnat, poradíme s
                výběrem klobásy i vína — a co neuneseme, dovezeme.
              </p>

              <dl className="store-facts">
                <div className="fact">
                  <dt>Kde nás najdete</dt>
                  <dd>Ukázková 123, Pardubice</dd>
                </div>
                <div className="fact">
                  <dt>Rozvoz</dt>
                  <dd>Po celém Česku, zdarma od 1&nbsp;500&nbsp;Kč</dd>
                </div>
                <div className="fact">
                  <dt>Hodnocení zákazníků</dt>
                  <dd>
                    <span className="stars" aria-hidden="true">★★★★★</span> 4,7 z 5
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

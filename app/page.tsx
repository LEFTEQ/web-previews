import { AiImage } from "./_ui";
import { DovetailSeam, PolishedReveal } from "./motion";

// --- Dovetail seam path (also generated in motion.tsx for the animated hero seam) ---
function dovetailPath(width = 1200, mid = 20, up = 6, down = 34, period = 150): string {
  let d = `M0 ${mid}`;
  for (let x = 0; x + period <= width; x += period) {
    d += ` L${x + 15} ${mid} L${x + 30} ${up} L${x + 60} ${up} L${x + 75} ${mid}`;
    d += ` L${x + 90} ${down} L${x + 120} ${down} L${x + 135} ${mid} L${x + 150} ${mid}`;
  }
  d += ` L${width} ${mid}`;
  return d;
}

function StaticSeam() {
  return (
    <svg className="seam" viewBox="0 0 1200 40" preserveAspectRatio="none" aria-hidden="true">
      <path d={dovetailPath()} fill="none" stroke="#a8823f" strokeWidth={1.4} strokeLinejoin="round" />
    </svg>
  );
}

function Tail({ className }: { className?: string }) {
  // Single dovetail-tail glyph used as bullet / section index marker
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 3.5 L13 3.5 L10.2 12.5 L5.8 12.5 Z" fill="#a8823f" />
    </svg>
  );
}

const sortiment = [
  {
    n: "01",
    t: "Kuchyně na míru",
    d: "Jádro domova. Dýhu, lak i masiv ladíme se spotřebiči, kamennou deskou a světlem v místnosti — ne s katalogovou nabídkou.",
  },
  {
    n: "02",
    t: "Šatny a vestavěné skříně",
    d: "Využijeme každý centimetr, i pod šikminou a kolem komína. Vnitřní členění navrhneme na vaše věci, ne na standardní rozměr.",
  },
  {
    n: "03",
    t: "Obývací sestavy",
    d: "Knihovny, komody a stěny, které drží jednu linku celého bytu. Spáry i letokruhy pokračují z dílu na díl.",
  },
  {
    n: "04",
    t: "Interiérové dveře",
    d: "Zárubně i křídla ve stejném dřevu a laku jako zbytek interiéru. Přechod mezi místnostmi zůstane tichý.",
  },
  {
    n: "05",
    t: "Koupelnový nábytek",
    d: "Skříňky do vlhka, které snesou páru a přitom vypadají jako kus z obýváku. Odolné povrchy, poctivé kování.",
  },
  {
    n: "06",
    t: "Pracovny a dětské pokoje",
    d: "Ergonomie, která roste s vámi i s dětmi. Úložné prostory, kabeláž i výška stolu řešené předem u ponku.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <div className="caliper" aria-hidden="true">
        <span className="caliper-line" />
        <span className="caliper-tick" style={{ top: "14%" }} />
        <span className="caliper-tick" style={{ top: "38%" }} />
        <span className="caliper-tick" style={{ top: "62%" }} />
        <span className="caliper-tick" style={{ top: "86%" }} />
        <span className="caliper-text">NA MÍRU</span>
      </div>

      {/* HERO */}
      <header className="hero">
        <div className="container">
          <div className="brandbar">
            <span className="wordmark">
              HANÁK<Tail className="wordmark-tail" />
            </span>
            <span className="brandbar-meta">Nábytek na míru · Brno · od 1926</span>
          </div>

          <p className="eyebrow hero-fade" style={{ animationDelay: "0.05s" }}>
            1926 — 2026 · Sto let u ponku
          </p>
          <h1 className="h1 hero-fade" style={{ animationDelay: "0.15s" }}>
            Domov, který
            <br />
            přetrvá generace.
          </h1>
          <p className="lede hero-fade" style={{ animationDelay: "0.28s" }}>
            Kuchyně, šatny a celé interiéry navrhujeme a truhlářsky vyrábíme na
            míru vašemu prostoru — v Brně, s úctou ke dřevu a s přesností na
            milimetr. Od prvního náčrtu po zaklapnutí posledního šuplíku vede
            práci jedna dílna.
          </p>
          <div className="hero-marks hero-fade" style={{ animationDelay: "0.4s" }}>
            <span><Tail className="mark-tail" /> Vlastní výroba</span>
            <span><Tail className="mark-tail" /> Rodinná firma</span>
            <span><Tail className="mark-tail" /> Návrh i montáž</span>
          </div>
        </div>
        <DovetailSeam />
      </header>

      {/* SEKCE 1 — Sortiment */}
      <section className="section section--oak" aria-labelledby="sortiment-h">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Co u nás vzniká</p>
            <h2 className="h2" id="sortiment-h">
              Nábytek na míru — od návrhu po montáž
            </h2>
            <p className="section-intro">
              Nevybíráte z regálu. Sedneme si nad půdorys, změříme prostor a
              nábytek vyrobíme přesně pro něj. Tady je šest věcí, se kterými za
              námi lidé chodí nejčastěji.
            </p>
          </div>

          <ol className="catalog">
            {sortiment.map((s) => (
              <li className="catalog-row" key={s.n}>
                <span className="catalog-index">
                  <Tail className="index-tail" />
                  <span className="index-num">{s.n}</span>
                </span>
                <div className="catalog-body">
                  <h3 className="catalog-title">{s.t}</h3>
                  <p className="catalog-desc">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <StaticSeam />
      </section>

      {/* SEKCE 2 — Realizace + Proč HANÁK */}
      <section className="section" aria-labelledby="realizace-h">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Realizace</p>
            <h2 className="h2" id="realizace-h">
              Ať světlo přejede po hotovém povrchu
            </h2>
            <p className="section-intro">
              Každý interiér vzniká jednou a natrvalo. Zaostřete a nechte lampu
              přejet po laku — grain se vynoří z tmy přesně tak, jako v dílně po
              posledním broušení.
            </p>
          </div>

          <div className="gallery">
            <figure className="gallery-item">
              <PolishedReveal>
                <AiImage
                  className="realizace-img"
                  src="Luxury custom cabinetry interior in deep dark walnut tones, moody atelier lighting, lacquered wood surface catching a soft light band, elegant living room, photographic, warm brass fittings"
                  alt="Interiér laděný do hlubokých tmavých tónů s dýhou ořechu"
                />
              </PolishedReveal>
              <figcaption className="gallery-cap">
                <Tail className="cap-tail" /> Interiér laděný do hlubokých tmavých tónů
              </figcaption>
            </figure>

            <figure className="gallery-item">
              <PolishedReveal>
                <AiImage
                  className="realizace-img"
                  src="Elegant white bespoke kitchen with natural wood and stone accents, handleless cabinets, warm evening light, premium appliances, photographic interior"
                  alt="Elegance bílé kuchyně s nádechem přírodních prvků"
                />
              </PolishedReveal>
              <figcaption className="gallery-cap">
                <Tail className="cap-tail" /> Elegance bílé kuchyně s přírodními prvky
              </figcaption>
            </figure>

            <figure className="gallery-item">
              <PolishedReveal>
                <AiImage
                  className="realizace-img"
                  src="Stylish interior with soul of wood, warm oak veneer wall units and library, brass details, gallery lighting, dark atelier mood, photographic"
                  alt="Stylový interiér s duší dřeva"
                />
              </PolishedReveal>
              <figcaption className="gallery-cap">
                <Tail className="cap-tail" /> Stylový interiér s duší dřeva
              </figcaption>
            </figure>
          </div>

          <div className="trust">
            <div className="trust-panel">
              <p className="eyebrow eyebrow--dark">Proč HANÁK</p>
              <h3 className="trust-title">Rodinná firma, ne katalog</h3>
              <p className="trust-lede">
                Sto let vyrábíme nábytek pod jednou střechou — a pořád jsme
                rodinná firma. Návrh, výroba i montáž zůstávají u nás, takže za
                výsledek ručí jméno na dveřích dílny.
              </p>
              <ul className="trust-list">
                <li><Tail className="trust-tail" /> Řemeslo od roku 1926, dnes ve čtvrté generaci</li>
                <li><Tail className="trust-tail" /> Od návrhu po montáž vede zakázku jedna dílna</li>
                <li><Tail className="trust-tail" /> Vlastní výroba a nejmodernější technologie</li>
                <li><Tail className="trust-tail" /> Zdravotně nezávadné materiály a poctivé povrchy</li>
              </ul>
            </div>

            <div className="awards">
              <div className="award">
                <span className="award-mark">A++</span>
                <p className="award-text">
                  Rating <strong>EXTRA VÝBORNÝ</strong> (Imper Zdravá firma) —
                  mezi 3 % finančně nejstabilnějších firem v ČR.
                </p>
              </div>
              <div className="award">
                <span className="award-mark">200</span>
                <p className="award-text">
                  Opakovaně mezi <strong>200 největšími rodinnými firmami</strong>
                  {" "}v České republice podle magazínu Forbes.
                </p>
              </div>
              <p className="award-place">
                <Tail className="cap-tail" /> Showroom &amp; výroba · Ukázková 123, Brno
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

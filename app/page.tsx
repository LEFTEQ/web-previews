import { AiImage } from "./_ui";

const services = [
  {
    name: "Zateplení fasády",
    desc: "Kontaktní zateplení, které dům obalí zvenku a zastaví únik tepla stěnami. Na termokameře zmizí ta studená modrá pole.",
    band: "cold",
  },
  {
    name: "Zateplení střechy",
    desc: "Nejteplejší místo domu. Zaizolujeme šikminy i celou skladbu, aby teplo nemizelo nahoru do komína.",
    band: "hot",
  },
  {
    name: "Zateplení stropu",
    desc: "Foukaná izolace stropu a půdy. Bez bourání, často hotovo během pár hodin a večer už je klid.",
    band: "warm",
  },
  {
    name: "Výměna oken",
    desc: "Stará okna jsou díra, kterou uniká teplo i peníze. Vyměníme je za těsná a napojíme na zateplení fasády.",
    band: "mid",
  },
];

const promises = [
  "Konzultace a zaměření nemovitosti ZDARMA",
  "Technologie a materiály nejvyšší kvality",
  "Typ izolace volíme na míru vašemu domu",
];

const reviews = [
  {
    text: "S Lunastavem jsme zateplovali strop rodinného domu. Firma dodržela termín a komunikace byla vždy jasná a přátelská. Práce super, mohu jen doporučit.",
    name: "Vojtěch Záruba",
    place: "Hradec Králové",
  },
  {
    text: "Lunastav odvedl kvalitní práci, všechno proběhlo podle dohody. Dům se lépe drží v teple a úspora je znát.",
    name: "Jan Dvořák",
    place: "Hradec Králové",
  },
  {
    text: "Od prvního kontaktu po dokončení vše bez problémů. Materiály působí kvalitně a výsledek je doma opravdu znát. Doporučuji všem, kdo chtějí spolehlivé zateplení.",
    name: "Ondřej Veselý",
    place: "Jaroměř",
  },
  {
    text: "Milý a profesionální přístup je přesně to, co dnes hledáte a tady to dostanete. Zateplení proběhlo v pořádku, vřele doporučuji a posílám pozdravy z Dobrušky.",
    name: "Klára Holubová",
    place: "Dobruška",
  },
];

function ThermalStrip() {
  return <div className="strip" aria-hidden="true" />;
}

function Moon({ phase }: { phase: number }) {
  return <span className="moon" data-phase={phase} aria-hidden="true" />;
}

export default function Page() {
  return (
    <main className="page">
      <div className="ambient" aria-hidden="true">
        <div className="ambient-cold" />
        <div className="ambient-warm" />
      </div>

      <header className="topbar">
        <a className="wordmark" href="#uvod" aria-label="LUNASTAV — úvod">
          <span className="wordmark-moon" aria-hidden="true" />
          LUNA<span className="wordmark-b">STAV</span>
        </a>
        <span className="topbar-loc">Hradec Králové · zateplení</span>
      </header>

      {/* HERO */}
      <section className="band hero" id="uvod">
        <div className="hero-copy">
          <p className="eyebrow">Zateplení domů · úspora až 43 % za vytápění</p>
          <h1 className="h-hero">
            Nechte dům,
            <br />
            ať vám šetří
            <br />
            <span className="h-accent">na dovolenou.</span>
          </h1>
          <p className="lead">
            Není to raketová věda — stačí dům zateplit. V zimě ztlumíte topení,
            v létě klimatizaci, a počasí budete sledovat s klidem jako z
            vesmírného modulu. Za ušetřené peníze klidně letenky.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="tel:+420731513994">
              Zavolat 731 513 994
            </a>
            <a className="btn btn-ghost" href="#sluzby">
              Co zateplíme
            </a>
          </div>
          <dl className="stats">
            <div>
              <dt>9 let</dt>
              <dd>zkušeností</dd>
            </div>
            <div>
              <dt>1100+</dt>
              <dd>realizací</dd>
            </div>
            <div>
              <dt>5/5</dt>
              <dd>z 15+ hodnocení</dd>
            </div>
          </dl>
        </div>

        <figure className="thermo" aria-label="Schéma domu ve falešných barvách termokamery: teplo uniká střechou a nezateplenými stěnami.">
          <svg viewBox="0 0 240 260" role="img" className="thermo-svg">
            <defs>
              <linearGradient id="heat" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#d24d78" />
                <stop offset="0.38" stopColor="#f4a63c" />
                <stop offset="0.72" stopColor="#7fb9c9" />
                <stop offset="1" stopColor="#3fa9c9" />
              </linearGradient>
              <linearGradient id="trace" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#3fa9c9" />
                <stop offset="0.5" stopColor="#f4a63c" />
                <stop offset="1" stopColor="#d24d78" />
              </linearGradient>
              <clipPath id="house">
                <path d="M120 26 L214 104 V232 H26 V104 Z" />
              </clipPath>
            </defs>

            {/* thermal fill inside the house outline */}
            <g clipPath="url(#house)">
              <rect x="0" y="0" width="240" height="260" fill="url(#heat)" />
              {/* thermal camera scanlines */}
              <g className="scan">
                {Array.from({ length: 22 }).map((_, i) => (
                  <rect
                    key={i}
                    x="0"
                    y={i * 12}
                    width="240"
                    height="6"
                    fill="#0e1830"
                    opacity="0.14"
                  />
                ))}
              </g>
            </g>

            {/* window + door read cool (well sealed) */}
            <rect x="58" y="150" width="42" height="42" rx="3" fill="#0e1830" opacity="0.55" />
            <rect x="142" y="150" width="46" height="82" rx="3" fill="#0e1830" opacity="0.55" />

            {/* traced outline — the signature thermal stroke */}
            <path
              className="trace-path"
              d="M120 26 L214 104 V232 H26 V104 Z"
              fill="none"
              stroke="url(#trace)"
              strokeWidth="4"
              strokeLinejoin="round"
            />
          </svg>
          <figcaption className="thermo-cap">
            <span className="dot dot-hot" /> teplo uniká střechou &nbsp;
            <span className="dot dot-cold" /> zateplené &amp; těsné
          </figcaption>
        </figure>
      </section>

      <ThermalStrip />

      {/* SLUŽBY */}
      <section className="band services" id="sluzby">
        <div className="section-head">
          <span className="section-num">
            <Moon phase={1} /> 01
          </span>
          <h2 className="h-section">Co na domě zateplíme</h2>
          <p className="section-sub">
            Termokamera ukáže, kudy peníze utíkají. My ta místa jedno po druhém
            zavřeme — typ izolace vždycky volíme na míru vašemu domu.
          </p>
        </div>

        <ul className="cards">
          {services.map((s, i) => (
            <li key={s.name} className={`card band-${s.band}`}>
              <span className="card-idx">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="card-title">{s.name}</h3>
              <p className="card-desc">{s.desc}</p>
            </li>
          ))}
        </ul>

        <div className="dotace">
          <div>
            <p className="dotace-kicker">Dotace &amp; NZÚ 2026</p>
            <p className="dotace-text">
              Dotaci nebo bezúročný úvěr na zateplení vyřídíme za vás — často
              ještě před samotnou realizací. Vy se o papíry starat nemusíte.
            </p>
          </div>
          <ul className="promises">
            {promises.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </section>

      <ThermalStrip />

      {/* POSÁDKA / REFERENCE */}
      <section className="band trust" id="reference">
        <div className="section-head">
          <span className="section-num">
            <Moon phase={2} /> 02
          </span>
          <h2 className="h-section">Signály od klientů</h2>
          <p className="section-sub">
            Za poslední dva roky přes 1100 realizací a desítky hodnocení. Tady je
            pár z Hradce a okolí — přečtěte si je jako telemetrii z hotových
            domů.
          </p>
        </div>

        <ul className="reviews">
          {reviews.map((r) => (
            <li key={r.name} className="review">
              <span className="review-strip" aria-hidden="true" />
              <p className="review-text">„{r.text}“</p>
              <p className="review-by">
                <span className="review-name">{r.name}</span>
                <span className="review-place">{r.place}</span>
              </p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

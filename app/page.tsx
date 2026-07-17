import { OpeningHours } from "./motion";

const SPINE_COLORS = ["#8f4630", "#d6321c", "#1f6b6b", "#efe9de", "#7c7873"];

const APEX_X = 200;
const APEX_Y = 26;
const BASE_Y = 272;

const spines = Array.from({ length: 11 }, (_, i) => {
  const y = 58 + i * 20;
  const t = (y - APEX_Y) / (BASE_Y - APEX_Y);
  const hw = t * 138;
  return {
    y,
    x: APEX_X - hw,
    w: hw * 2,
    fill: SPINE_COLORS[i % SPINE_COLORS.length],
    op: 0.55 + t * 0.45,
  };
});

// Four route lines converging at the apex — auto / bus / tram / trolej from Úzká.
const routes = [
  { x: 10, y: 236, stroke: "#7c7873", label: "AUTO", lx: 10, ly: 224, anchor: "start" as const },
  { x: 66, y: 316, stroke: "#1f6b6b", label: "BUS", lx: 66, ly: 330, anchor: "middle" as const },
  { x: 334, y: 316, stroke: "#d6321c", label: "TRAM", lx: 334, ly: 330, anchor: "middle" as const },
  { x: 390, y: 236, stroke: "#8f4630", label: "TROLEJ", lx: 390, ly: 224, anchor: "end" as const },
];

function PyramidMark() {
  return (
    <svg
      className="mark"
      viewBox="0 0 400 340"
      role="img"
      aria-label="Podsvícená pyramida z knižních hřbetů, do jejíhož vrcholu se sbíhají čtyři dopravní trasy od zastávky Úzká."
    >
      <g className="mark__stack">
        {spines.map((s, i) => (
          <rect
            key={i}
            x={s.x}
            y={s.y}
            width={s.w}
            height={13}
            rx={1.5}
            fill={s.fill}
            opacity={s.op}
          />
        ))}
      </g>
      {routes.map((r, i) => (
        <line
          key={i}
          className="route"
          x1={r.x}
          y1={r.y}
          x2={APEX_X}
          y2={APEX_Y}
          stroke={r.stroke}
          strokeWidth={2}
          pathLength={1}
          vectorEffect="non-scaling-stroke"
        />
      ))}
      {routes.map((r, i) => (
        <text
          key={"l" + i}
          className="mark__label"
          x={r.lx}
          y={r.ly}
          textAnchor={r.anchor}
        >
          {r.label}
        </text>
      ))}
      <circle className="mark__apex" cx={APEX_X} cy={APEX_Y} r={4.5} fill="#d6321c" />
    </svg>
  );
}

function Bullet() {
  return (
    <svg className="bullet" viewBox="0 0 24 22" aria-hidden="true">
      <rect x="9" y="3" width="6" height="3" fill="#d6321c" />
      <rect x="6" y="8" width="12" height="3" fill="#8f4630" />
      <rect x="3" y="13" width="18" height="3" fill="#1f6b6b" />
      <rect x="1" y="18" width="22" height="3" fill="#201d1a" />
    </svg>
  );
}

const offer = [
  {
    k: "Novinky na pyramidách",
    t: "Nejnovější tituly stojí hned u vchodu, nasvícené na skleněných pyramidách. Vezmete je do ruky dřív, než se stačíte rozkoukat.",
  },
  {
    k: "Společenské hry",
    t: "Herní novinky tu knihkupci sledují stejně bedlivě jako ty knižní — od rodinných klasik po čerstvá vydání.",
  },
  {
    k: "Papírnictví a dárky",
    t: "Zápisníky, pohlednice a dárkové drobnosti. Malý neknižní sortiment, u kterého se dobře vybírá.",
  },
];

const directions = [
  {
    mode: "Autem",
    line: "#7c7873",
    t: "Z ulice Trnitá dojedete rovnou k parkovišti Galerie Vaňkovka.",
  },
  {
    mode: "Autobusem",
    line: "#1f6b6b",
    t: "Zastávka Úzká — linky 40, 47, 48, 49, 60, 61 a 77.",
  },
  {
    mode: "Tramvají",
    line: "#d6321c",
    t: "Zastávka Úzká — tramvaj číslo 12.",
  },
  {
    mode: "Trolejbusem",
    line: "#8f4630",
    t: "Zastávka Úzká — linky 67 a 76.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="masthead">
        <div className="masthead__inner">
          <a className="wordmark" href="#hero" aria-label="Knihy Dobrovský, Brno Vaňkovka">
            <Bullet />
            <span className="wordmark__text">
              <span className="wordmark__thin">Knihy</span>
              <span className="wordmark__bold">DOBROVSKÝ</span>
            </span>
          </a>
          <span className="masthead__place">Brno · Galerie Vaňkovka</span>
        </div>
      </header>

      <section className="hero" id="hero">
        <div className="hero__inner">
          <div className="hero__copy">
            <p className="eyebrow eyebrow--light">Knihkupectví · v provozu od jara 2015</p>
            <h1 className="hero__title">
              Všechny cesty<br />
              vedou do <span className="hero__accent">Vaňkovky</span>.
            </h1>
            <p className="hero__lead">
              Knihkupectví přesně tam, kde se protínají trasy z centra Brna
              i do centra. Auto, autobus, tramvaj i trolejbus se sbíhají u
              zastávky Úzká — a vy u podsvícených pyramid s novinkami.
            </p>
            <div className="hero__meta">
              <span>Po–So 09:00–21:00</span>
              <span aria-hidden="true">·</span>
              <span>Ne 10:00–20:00</span>
            </div>
          </div>
          <div className="hero__mark">
            <PyramidMark />
          </div>
        </div>
      </section>

      <section className="band">
        <div className="band__inner">
          <div className="band__head">
            <Bullet />
            <p className="eyebrow">Co si tu vyberete</p>
            <h2 className="band__title">Knihy — a spousta věcí okolo</h2>
          </div>
          <ul className="offer">
            {offer.map((o) => (
              <li className="offer__item" key={o.k}>
                <h3 className="offer__k">{o.k}</h3>
                <p className="offer__t">{o.t}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band band--alt">
        <div className="band__inner">
          <div className="band__head">
            <Bullet />
            <p className="eyebrow">O prodejně</p>
            <h2 className="band__title">Prodejna Galerie Vaňkovka</h2>
          </div>

          <p className="about">
            Prodejnu najdete v Galerii Vaňkovka od jara 2015, v nových
            prostorech bývalé slévárny. Jestli někdo udává trend, jak má
            moderní knihkupectví vypadat, je to právě tady. Knihy Dobrovský
            zůstávají rodinnou firmou, která pamatuje na své kořeny — a s vámi
            přečte tisíce knih každý měsíc.
          </p>

          <div className="visit">
            <div className="visit__col">
              <h3 className="visit__h">Kudy k nám</h3>
              <ul className="routes">
                {directions.map((d) => (
                  <li className="routes__item" key={d.mode}>
                    <span
                      className="routes__line"
                      style={{ background: d.line }}
                      aria-hidden="true"
                    />
                    <div>
                      <span className="routes__mode">{d.mode}</span>
                      <p className="routes__t">{d.t}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="visit__col visit__col--info">
              <h3 className="visit__h">Otevírací doba</h3>
              <OpeningHours />
              <div className="where">
                <h3 className="visit__h">Kde nás najdete</h3>
                <p className="where__addr">
                  Ukázková 123<br />
                  602 00 Brno
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

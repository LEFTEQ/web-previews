import type { CSSProperties } from "react";

type Spoke = { x1: number; y1: number; x2: number; y2: number; ochre: boolean };

const C = 160;

const spokes: Spoke[] = Array.from({ length: 24 }, (_, i) => {
  const a = (Math.PI * 2 * i) / 24;
  return {
    x1: C + 66 * Math.cos(a),
    y1: C + 66 * Math.sin(a),
    x2: C + 150 * Math.cos(a),
    y2: C + 150 * Math.sin(a),
    ochre: i % 2 === 0,
  };
});

const outerDots = Array.from({ length: 24 }, (_, i) => {
  const a = (Math.PI * 2 * i) / 24 + Math.PI / 24;
  return { cx: C + 150 * Math.cos(a), cy: C + 150 * Math.sin(a) };
});

const petals = Array.from({ length: 12 }, (_, i) => {
  const a = (Math.PI * 2 * i) / 12;
  return { cx: C + 90 * Math.cos(a), cy: C + 90 * Math.sin(a) };
});

const rosette = Array.from({ length: 8 }, (_, i) => {
  const a = (Math.PI * 2 * i) / 8;
  return { cx: C + 20 * Math.cos(a), cy: C + 20 * Math.sin(a) };
});

function Medallion() {
  return (
    <svg
      className="medallion"
      viewBox="0 0 320 320"
      role="img"
      aria-label="Paška čipka — kresba paglské krajky jako značka kanceláře"
    >
      <g className="med-rings" fill="none">
        <circle className="ring ring1" cx={C} cy={C} r={150} />
        <circle className="ring ring2" cx={C} cy={C} r={108} />
        <circle className="ring ring3" cx={C} cy={C} r={66} />
      </g>
      <g className="med-spokes" strokeLinecap="round">
        {spokes.map((s, i) => (
          <line
            key={i}
            x1={s.x1}
            y1={s.y1}
            x2={s.x2}
            y2={s.y2}
            className={s.ochre ? "spoke spoke-ochre" : "spoke"}
          />
        ))}
      </g>
      <g className="med-dots">
        {outerDots.map((d, i) => (
          <circle key={i} cx={d.cx} cy={d.cy} r={3.5} className="dot" />
        ))}
        {petals.map((d, i) => (
          <circle key={i} cx={d.cx} cy={d.cy} r={7} className="petal" fill="none" />
        ))}
        {rosette.map((d, i) => (
          <circle key={i} cx={d.cx} cy={d.cy} r={4} className="dot dot-ochre" />
        ))}
        <circle cx={C} cy={C} r={6} className="dot dot-ochre" />
      </g>
    </svg>
  );
}

function HalfLace() {
  return (
    <svg className="divider-mark" viewBox="0 0 240 60" aria-hidden="true">
      <path className="dl dl-a" d="M6 58 H80" />
      <path className="dl dl-b" d="M80 58 A40 40 0 0 1 160 58" fill="none" />
      <path className="dl dl-c" d="M96 58 A24 24 0 0 1 144 58" fill="none" />
      <path className="dl dl-a" d="M160 58 H234" />
      <circle className="dl-dot" cx={120} cy={58} r={4} />
    </svg>
  );
}

const flagship = [
  { i: "01", country: "Chorvatsko", place: "Pag — Novalja", camp: "Kemp Straško" },
  { i: "02", country: "Chorvatsko", place: "Pakoštane", camp: "Kemp Kozarica" },
  { i: "03", country: "Itálie", place: "Benátky", camp: "Marghera" },
];

type Dest = {
  cat: "Chorvatsko" | "Itálie" | "Wellness";
  place: string;
  camp: string;
  note: string;
};

const destinations: Dest[] = [
  {
    cat: "Chorvatsko",
    place: "Pag — Novalja",
    camp: "Kemp Straško",
    note: "Borovicový kemp přímo nad oblázkovou pláží Straško. Naše vlajková destinace už řadu sezón.",
  },
  {
    cat: "Chorvatsko",
    place: "Pakoštane",
    camp: "Kemp Kozarica",
    note: "Klidná zátoka u Vranského jezera a Kornatů. Stín piniemi, mělčina pro děti.",
  },
  {
    cat: "Chorvatsko",
    place: "Biograd na moru",
    camp: "Kemp Soline",
    note: "Pár kroků k moři, ke staré Riviéře i k trajektu na Pašman. Osvědčená rodinná klasika.",
  },
  {
    cat: "Itálie",
    place: "Benátky",
    camp: "Marghera",
    note: "Základna na skok od kanálů, Murana i pláží na Lidu. Ideál na prodloužený víkend.",
  },
  {
    cat: "Itálie",
    place: "Lago di Garda",
    camp: "jezero pod Dolomity",
    note: "Největší italské jezero, olivové háje a horské městečko každých pár kilometrů.",
  },
  {
    cat: "Wellness",
    place: "Slovensko",
    camp: "Velký Meder",
    note: "Termály na doladění mimosezóny. Blízko, teplá voda po celý rok.",
  },
  {
    cat: "Wellness",
    place: "Polsko",
    camp: "Grand Laola SPA",
    note: "Bazény a sauny u baltského pobřeží, když se vám nechce až k Jadranu.",
  },
];

const practical = [
  {
    h: "Než si objednáte",
    p: "Přečtěte si vše o destinaci i okolí a zvažte, zda pojedete vlastním autem, nebo dopravou. Rádi poradíme osobně.",
  },
  {
    h: "First minute a věrnostní slevy",
    p: "Kdo si rezervuje včas a kdo se k nám vrací, platí méně. Stálým klientům držíme jejich místo v kempu.",
  },
  {
    h: "Možnosti plateb",
    p: "Záloha při objednávce, doplatek před odjezdem. Převodem i v hotovosti na pobočce v Ústí.",
  },
  {
    h: "Cestovní pojištění",
    p: "Léčebné výlohy i storno zájezdu sjednáme rovnou k pobytu, ať máte na cestu klid.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-inner">
          <div className="hero-text">
            <p className="eyebrow">
              <span className="eyebrow-mark" aria-hidden="true" />
              Cestovní kancelář · Ústí nad Labem · Jadran &amp; Itálie
            </p>
            <h1 id="hero-title" className="hero-title">
              <span className="line line-1">Jadran začíná</span>{" "}
              <span className="line line-2">na Mírovém</span>{" "}
              <span className="line line-3">náměstí.</span>
            </h1>
            <p className="hero-lede">
              Kemp Straško na Pagu, Kozarica v Pakoštane, Benátky i Lago di
              Garda — zájezdy k moři domlouváme osobně v Ústí nad Labem, z první
              ruky, bez prostředníků a bez zbytečných poplatků.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#nabidka">
                Vybrat zájezd
              </a>
              <a className="btn btn-ghost" href="tel:+420475208585">
                Zavolat 475 20 85 85
              </a>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Vlajkové destinace">
            <div className="panel-medallion">
              <Medallion />
            </div>
            <p className="panel-label">Kam jezdíme nejraději</p>
            <ul className="flagship">
              {flagship.map((f, i) => (
                <li key={f.i} className="flag-item" style={{ "--d": `${0.6 + i * 0.14}s` } as CSSProperties}>
                  <span className="flag-index">{f.i}</span>
                  <span className="flag-body">
                    <span className="flag-country">{f.country}</span>
                    <span className="flag-place">{f.place}</span>
                    <span className="flag-camp">{f.camp}</span>
                  </span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <div className="divider" role="presentation">
        <HalfLace />
      </div>

      <section className="section" id="nabidka" aria-labelledby="nabidka-title">
        <header className="section-head">
          <p className="section-eyebrow">Nabídka 2026</p>
          <h2 id="nabidka-title" className="section-title">
            Kam s námi letos k vodě
          </h2>
          <p className="section-lede">
            Vybíráme málo míst, ale ta známe do detailu — kempy, pláže i cestu
            tam. Klikněte na objednávku, my se vám ozveme a rezervaci s vámi
            doladíme.
          </p>
        </header>

        <ul className="dest-grid">
          {destinations.map((d, i) => (
            <li
              key={i}
              className={`card cat-${d.cat === "Chorvatsko" ? "hr" : d.cat === "Itálie" ? "it" : "we"}`}
            >
              <span className="notch" aria-hidden="true" />
              <p className="card-cat">{d.cat}</p>
              <h3 className="card-place">{d.place}</h3>
              <p className="card-camp">{d.camp}</p>
              <p className="card-note">{d.note}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="divider" role="presentation">
        <HalfLace />
      </div>

      <section className="section section-trust" aria-labelledby="trust-title">
        <div className="trust-inner">
          <div className="trust-lead">
            <p className="section-eyebrow section-eyebrow-light">O nás</p>
            <h2 id="trust-title" className="section-title section-title-light">
              Malá kancelář, do které se chodí osobně
            </h2>
            <p className="section-lede section-lede-light">
              Zájezdy do Chorvatska a Itálie prodáváme z Mírového náměstí
              v centru Ústí nad Labem. Přijďte se poradit, nebo objednejte přes
              internet — ozveme se vám a objednávku společně potvrdíme.
            </p>

            <dl className="contact">
              <div className="contact-row">
                <dt>Kde nás najdete</dt>
                <dd>Mírové náměstí 208/35, 400 01 Ústí nad Labem</dd>
              </div>
              <div className="contact-row">
                <dt>Telefon</dt>
                <dd>
                  <a href="tel:+420602227808">602 227 808</a> ·{" "}
                  <a href="tel:+420475208585">475 20 85 85</a>
                </dd>
              </div>
              <div className="contact-row">
                <dt>E-mail</dt>
                <dd>
                  <a href="mailto:info@iveria.cz">info@iveria.cz</a>
                </dd>
              </div>
            </dl>
          </div>

          <ul className="info-list">
            {practical.map((it, i) => (
              <li key={i} className="info-item">
                <span className="info-index" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="info-h">{it.h}</h3>
                  <p className="info-p">{it.p}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

import type { ReactNode } from "react";

function HorseMark({ label }: { label?: string }): ReactNode {
  return (
    <svg
      className="horse"
      viewBox="0 0 100 112"
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
    >
      <path
        className="horse__body"
        d="M42 104 L40 76 C40 69 38 65 34 61 C30 63 24 63 20 59 C16 55 18 48 22 46 C18 44 14 40 16 33 C22 33 26 35 30 40 C30 33 32 27 38 23 C36 17 38 11 45 9 C47 15 47 20 49 24 C53 20 59 20 63 24 C73 30 79 42 79 59 C79 76 75 91 71 104 Z"
      />
      <path className="horse__mane" d="M56 30 C64 38 69 49 69 62" />
      <circle className="horse__eye" cx="43" cy="38" r="2.6" />
    </svg>
  );
}

const stats = [
  { n: "833", l: "vozů skladem, ihned k odběru" },
  { n: "6 000", l: "prodaných vozů ročně" },
  { n: "25 let", l: "na východočeském trhu" },
  { n: "100", l: "servisovaných vozů denně" },
];

const lanes = [
  {
    tag: "Dráha 01",
    name: "Ojeté vozy",
    count: "833 skladem",
    desc: "Prověřené vozy s doloženou historií a garantovaným stavem. Prohlédnete, projedete, odjedete.",
  },
  {
    tag: "Dráha 02",
    name: "Předváděcí",
    count: "nízké nájezdy",
    desc: "Skoro nové vozy za znatelně nižší cenu než z výroby. Plná záruka, výbava naložená.",
  },
  {
    tag: "Dráha 03",
    name: "Referenční",
    count: "se zárukou",
    desc: "Vozy z programů Škoda Plus, Das WeltAuto a Audi Approved — překontrolované do posledního šroubu.",
  },
  {
    tag: "Dráha 04",
    name: "Elektro",
    count: "91 skladem",
    desc: "Ojeté i předváděcí elektromobily s prověřenou baterií a jasně změřenou zbytkovou kapacitou.",
  },
];

const services = [
  "Výkup vašeho vozu na počkání",
  "Financování a úvěr na míru",
  "Operativní leasing bez akontace",
  "Autorizovaný servis a pneuservis",
];

const steps = [
  {
    n: "01",
    t: "Vyberete online",
    d: "Z 1 192 vozů si předfiltrujete značku, cenu i termín dodání dřív, než vstanete od stolu.",
  },
  {
    n: "02",
    t: "Projedete si ho",
    d: "Na pobočce v Pardubicích nebo v Hradci Králové si vůz osaháte a vyzkoušíte na silnici.",
  },
  {
    n: "03",
    t: "Domluvíme peníze",
    d: "Výkup starého vozu, úvěr i leasing vyřídíme na jednom místě — bez skrytých poplatků.",
  },
  {
    n: "04",
    t: "Odjedete s klíčky",
    d: "Přepis, pojištění i příprava vozu na nás. Vy si jen sednete za volant.",
  },
];

export default function Page(): ReactNode {
  return (
    <main className="page">
      <header className="hero">
        <div className="hero__flag" aria-hidden="true" />
        <div className="hero__inner">
          <div className="hero__copy">
            <p className="eyebrow">
              Autobazar · Pardubice &amp; Hradec Králové · od roku 1997
            </p>
            <h1 className="hero__title">
              <span className="line line--1">Auta, na která</span>
              <span className="line line--2">se dá vsadit</span>
            </h1>
            <p className="hero__lede">
              Stovky prověřených ojetých, předváděcích i referenčních vozů se
              zárukou. Vyberete, projedete, odjedete — a klidně u toho prodáte
              ten svůj. Velká Pardubická se jede jednou za rok, výběr auta
              stihnete dnes.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#nabidka">
                Prohlédnout vozy skladem
              </a>
              <a className="btn btn--ghost" href="#duvera">
                Jak to u nás chodí
              </a>
            </div>
          </div>
          <div className="hero__mark">
            <div className="stamp">
              <HorseMark label="Znak Autocentra BARTH — pardubický kůň" />
              <span className="stamp__ring" aria-hidden="true" />
            </div>
            <p className="stamp__cap">Pardubický půlkůň · run mark</p>
          </div>
        </div>
        <dl className="hero__stats">
          {stats.map((s) => (
            <div className="stat" key={s.l}>
              <dt className="stat__n">{s.n}</dt>
              <dd className="stat__l">{s.l}</dd>
            </div>
          ))}
        </dl>
      </header>

      <div className="lane" aria-hidden="true">
        <span className="lane__text">Startovní rovinka · Pardubice — Dubina · Hradecká · Brněnská</span>
      </div>

      <section className="section section--offer" id="nabidka" aria-labelledby="nabidka-h">
        <div className="section__head">
          <p className="eyebrow eyebrow--dark">Nabídka vozů</p>
          <h2 className="section__title" id="nabidka-h">
            Čtyři dráhy, jeden cíl:<br />
            vůz, který vám sedne
          </h2>
          <p className="section__intro">
            Volkswagen, Škoda, Audi, SEAT, CUPRA, Kia, BYD, Peugeot i Opel pod
            jednou střechou. Každý ojetý vůz projde vstupní kontrolou, než ho
            postavíme do řady.
          </p>
        </div>

        <div className="boards">
          {lanes.map((c) => (
            <article className="board" key={c.name}>
              <p className="board__tag">{c.tag}</p>
              <h3 className="board__name">{c.name}</h3>
              <p className="board__count">{c.count}</p>
              <p className="board__desc">{c.desc}</p>
            </article>
          ))}
        </div>

        <ul className="services" aria-label="Doplňkové služby">
          {services.map((s) => (
            <li className="services__item" key={s}>
              {s}
            </li>
          ))}
        </ul>
      </section>

      <div className="lane lane--reverse" aria-hidden="true">
        <span className="lane__text">Cílová rovinka · výkup · financování · záruka · servis</span>
      </div>

      <section className="section section--trust" id="duvera" aria-labelledby="duvera-h">
        <div className="trust__grid">
          <div className="trust__lead">
            <span className="seal" aria-hidden="true">
              <HorseMark />
            </span>
            <p className="eyebrow">Proč k nám</p>
            <h2 className="section__title section__title--light" id="duvera-h">
              Východní Čechy nám věří<br />už čtvrt století
            </h2>
            <p className="trust__text">
              Autocentrum BARTH patří mezi největší prodejce a servisy ve
              východních Čechách. Ročně projde našima rukama přes 6 000 vozů —
              a každý zákazník od nás odjíždí s papíry, které sedí. Vozy se
              zárukou z programů Škoda Plus, Das WeltAuto a Audi Approved.
            </p>
            <p className="trust__note">
              Pobočky: Pardubice — Dubina &amp; Hradecká · Hradec Králové —
              Brněnská &amp; Bratří Štefanů
            </p>
          </div>

          <ol className="steps" aria-label="Jak u nás koupíte auto">
            {steps.map((s) => (
              <li className="step" key={s.n}>
                <span className="step__n">{s.n}</span>
                <div className="step__body">
                  <h3 className="step__t">{s.t}</h3>
                  <p className="step__d">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}

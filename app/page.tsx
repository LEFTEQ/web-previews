import { HeroMark } from "./motion";

const ACTIVITIES = [
  "BADMINTON",
  "CARDIO",
  "POSILOVNA",
  "BODY & MIND",
  "MULTIFUNKČNÍ SÁL",
];

const STEPS = [
  {
    n: "01",
    t: "Vstupní konzultace",
    d: "Sedneme si, změříme výchozí stav a řekneme si, kam chcete dojít. Bez tlaku a bez cvičebního žargonu — i když jste roky necvičili.",
  },
  {
    n: "02",
    t: "Plán na míru",
    d: "Sestavíme individuální program podle vašeho cíle, času a kondice. Hubnutí, síla, záda po sezení u počítače — každý plán je jiný.",
  },
  {
    n: "03",
    t: "Cvičíme spolu",
    d: "Trenér je s vámi u každého tréninku, hlídá techniku a posouvá zátěž. Výsledky sledujeme a plán průběžně ladíme.",
  },
];

const HOURS = [
  { d: "Pondělí – čtvrtek", h: "6:30 – 21:00" },
  { d: "Pátek", h: "6:30 – 20:30" },
  { d: "Sobota", h: "7:30 – 19:00" },
  { d: "Neděle", h: "7:30 – 20:30" },
];

function Chevron({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth={4.4}
      strokeLinecap="square"
      aria-hidden="true"
    >
      <path d="M6 3 L18 12 L6 21" />
    </svg>
  );
}

export default function Page() {
  return (
    <main className="page">
      <div className="topbar">
        <span className="topbar-mark">
          VEKTOR<span className="topbar-chev"><Chevron /></span>
        </span>
        <span className="topbar-loc">sportcentrum · Pardubice</span>
      </div>

      <header className="hero">
        <p className="hero-eyebrow">Osobní trenér · Pardubice · od roku 2008</p>

        <HeroMark />

        <h1 className="hero-head">
          Dáme vašemu pohybu
          <br />
          správný směr.
        </h1>

        <p className="hero-sub">
          Individuální trénink pod vedením trenéra — ať začínáte od nuly, nebo
          se chcete posunout dál. Sestavíme plán, cvičíme spolu a sledujeme, jak
          se výsledky posouvají.
        </p>

        <div className="hero-cta">
          <a className="btn btn-primary" href="#kontakt">
            Domluvit vstupní konzultaci
            <Chevron className="btn-arrow" />
          </a>
          <a className="btn btn-ghost" href="#trenink">
            Jak to funguje
          </a>
        </div>
      </header>

      <div className="divider" aria-hidden="true">
        <span className="divider-track">
          <Chevron /><Chevron /><Chevron /><Chevron /><Chevron />
          <Chevron /><Chevron /><Chevron /><Chevron /><Chevron />
        </span>
      </div>

      <section className="section section-trenink" id="trenink">
        <div className="section-head">
          <span className="kicker">
            <Chevron className="kicker-chev" /> S osobním trenérem
          </span>
          <h2 className="section-title">Jak to u nás funguje</h2>
          <p className="section-lede">
            Tři kroky od prvního „nevím, jak na to“ k pravidelnému tréninku,
            který vás baví a drží.
          </p>
        </div>

        <ol className="steps">
          {STEPS.map((s) => (
            <li className="step" key={s.n}>
              <span className="step-num">{s.n}</span>
              <h3 className="step-title">{s.t}</h3>
              <p className="step-desc">{s.d}</p>
            </li>
          ))}
        </ol>

        <div className="activities">
          <p className="activities-label">Trénovat můžete i mezi lekcemi:</p>
          <ul className="activities-list">
            {ACTIVITIES.map((a) => (
              <li className="activity" key={a}>
                <Chevron className="activity-chev" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-about" id="kontakt">
        <div className="about-grid">
          <div className="about-copy">
            <span className="kicker">
              <Chevron className="kicker-chev" /> Proč VEKTOR
            </span>
            <h2 className="section-title">
              1500 m² pod jednou střechou — a trenér, který vás zná jménem.
            </h2>
            <p className="about-para">
              Sportcentrum na Rokycanově vedeme od roku 2008. Byli jsme první
              v Pardubicích s TRX i skupinovými lekcemi Zadek/Břicho a od té doby
              jsme přidali posilovnu, cardio zónu a tři badmintonové kurty.
            </p>
            <p className="about-para">
              Parkoviště přímo u budovy máte zdarma. A jen u nás si po tréninku
              dáte čerstvý fresh, domácí polévku s kváskovým chlebem nebo kávu
              s raw zákuskem z baru <strong>VEKTOR&nbsp;Fresh</strong>.
            </p>

            <ul className="facts">
              <li className="fact">
                <span className="fact-num">2008</span>
                <span className="fact-label">rok, kdy jsme začali</span>
              </li>
              <li className="fact">
                <span className="fact-num">1500 m²</span>
                <span className="fact-label">prostor pro pohyb</span>
              </li>
              <li className="fact">
                <span className="fact-num">0 Kč</span>
                <span className="fact-label">parkování pro klienty</span>
              </li>
            </ul>

            <blockquote className="quote">
              „Přišla jsem po letech u kanceláře a bála se, že nebudu stačit.
              Trenér mi sestavil plán od úplných základů — po půl roce zvládám
              věci, co jsem si netroufala ani zkusit.“
              <cite>— Petra, klientka VEKTORU</cite>
            </blockquote>
          </div>

          <aside className="about-info">
            <h3 className="info-title">Otevírací doba</h3>
            <dl className="hours">
              {HOURS.map((row) => (
                <div className="hours-row" key={row.d}>
                  <dt>{row.d}</dt>
                  <dd>{row.h}</dd>
                </div>
              ))}
            </dl>

            <h3 className="info-title">Kde nás najdete</h3>
            <address className="contact">
              Ukázková 123, Pardubice
              <br />
              <a href="tel:+420777111222">+420 777 111 222</a>
              <br />
              <a href="mailto:info@example.cz">info@example.cz</a>
            </address>

            <a className="btn btn-primary btn-block" href="tel:+420777111222">
              Zavolat a domluvit termín
              <Chevron className="btn-arrow" />
            </a>
          </aside>
        </div>
      </section>
    </main>
  );
}

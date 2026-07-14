import type { ReactNode } from "react";

type Board = {
  code: string;
  task: string;
  window: string;
  status: string;
  live?: boolean;
};

const board: Board[] = [
  { code: "ODPAD", task: "Svoz komunálního a tříděného odpadu", window: "Po–Pá · od 6:00", status: "v provozu", live: true },
  { code: "DVŮR", task: "Sběrný dvůr Karvinská 247/63", window: "Út–Ne · 8:00–16:00", status: "otevřeno", live: true },
  { code: "VODA", task: "Kanalizace a splašková síť", window: "dispečink", status: "nonstop", live: true },
  { code: "ULICE", task: "Čištění vozovek a zimní údržba", window: "denně", status: "v provozu", live: true }
];

type Service = {
  tag: string;
  title: string;
  desc: string;
  tel?: string;
  telLabel?: string;
};

const services: Service[] = [
  {
    tag: "ODPAD",
    title: "Odpadové hospodářství",
    desc: "Svážíme komunální i tříděný odpad, provozujeme sběrné dvory a zajišťujeme jeho další likvidaci.",
    tel: "+420737238114",
    telLabel: "+420 737 238 114"
  },
  {
    tag: "VODA",
    title: "Vodovody a kanalizace",
    desc: "Provozujeme vodovodní a kanalizační síť ve vlastnictví města a řešíme poruchy na splaškové kanalizaci.",
    tel: "+420596802616",
    telLabel: "+420 596 802 616"
  },
  {
    tag: "ÚKLID",
    title: "Čištění města",
    desc: "Zametáme vozovky a chodníky, čistíme parkoviště a v zimě udržujeme komunikace sjízdné a schůdné."
  },
  {
    tag: "SVĚTLO",
    title: "Veřejné osvětlení a signalizace",
    desc: "Udržujeme a opravujeme lampy veřejného osvětlení i světelnou signalizaci na křižovatkách.",
    tel: "+420596802620",
    telLabel: "+420 596 802 620"
  },
  {
    tag: "SILNICE",
    title: "Místní komunikace",
    desc: "Opravujeme asfaltové a betonové povrchy, doplňujeme svislé i vodorovné dopravní značení."
  },
  {
    tag: "ZELEŇ",
    title: "Veřejná zeleň",
    desc: "Sekáme, prořezáváme a udržujeme městskou zeleň pro Havířov i pro veřejnost na objednávku.",
    tel: "+420596802636",
    telLabel: "+420 596 802 636"
  }
];

const dispatch: { label: string; tel: string; telLabel: string }[] = [
  { label: "Spojovatelka", tel: "+420596802601", telLabel: "+420 596 802 601" },
  { label: "Odpadové hospodářství", tel: "+420737238114", telLabel: "+420 737 238 114" },
  { label: "Splašková kanalizace", tel: "+420596802616", telLabel: "+420 596 802 616" },
  { label: "Veřejná zeleň", tel: "+420596802636", telLabel: "+420 596 802 636" },
  { label: "Sběrný dvůr Karvinská", tel: "+420596802611", telLabel: "+420 596 802 611" }
];

function Dot(): ReactNode {
  return <span className="dot" aria-hidden="true" />;
}

export default function Page() {
  return (
    <main className="page">
      <section className="hero">
        <img
          className="hero-img"
          src="/hero.webp"
          alt="Vozy Technických služeb Havířov v ulici při ranním svozu odpadu"
        />
        <div className="hero-veil" aria-hidden="true" />

        <header className="topbar">
          <a className="brand" href="#top" aria-label="Technické služby Havířov">
            <span className="brand-mark">TSH</span>
            <span className="brand-name">
              Technické služby
              <b>Havířov</b>
            </span>
          </a>
          <nav className="top-nav" aria-label="Hlavní">
            <a href="#sluzby">Služby</a>
            <a href="#provoz">Provoz</a>
            <a className="top-call" href="tel:+420596802601">
              <span className="top-call-lbl">Spojovatelka</span>
              <span className="top-call-num">596 802 601</span>
            </a>
          </nav>
        </header>

        <div className="hero-inner" id="top">
          <p className="eyebrow reveal r0">
            Technické služby Havířov a.s. — provoz města, Ostravsko
          </p>
          <h1 className="reveal r1">
            Když všechno funguje,
            <br />
            není nás vidět.
          </h1>
          <p className="lead reveal r2">
            Svážíme odpad, provozujeme kanalizaci a udržujeme ulice Havířova čisté a
            průjezdné. Každý den od šesti ráno — ať mrzne, nebo praží.
          </p>
          <div className="hero-cta reveal r3">
            <a className="btn btn--primary" href="#provoz">
              Sběrné dvory a provozní doba
            </a>
            <a className="btn btn--ghost" href="tel:+420596802601">
              Zavolat spojovatelce
            </a>
          </div>
        </div>
      </section>

      <section className="board-wrap" aria-label="Co právě běží ve městě">
        <div className="board-head">
          <span className="board-title">Provozní tabule</span>
          <span className="board-note">stav služeb — provoz 2025</span>
        </div>
        <ul className="board">
          {board.map((row, i) => (
            <li className="board-row reveal" style={{ animationDelay: `${0.15 * i}s` }} key={row.code}>
              <span className="board-code">{row.code}</span>
              <span className="board-task">{row.task}</span>
              <span className="board-window">{row.window}</span>
              <span className={"board-status" + (row.live ? " is-live" : "")}>
                <Dot />
                {row.status}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="services" id="sluzby">
        <div className="section-head">
          <p className="eyebrow eyebrow--dark">Co ve městě denně řešíme</p>
          <h2>Šest provozů, jedno město</h2>
          <p className="section-lead">
            Od popelnice před domem po lampu na křižovatce — spravujeme veřejnou
            infrastrukturu, kterou si Havířov objednal. Vyberte úsek a máte na něj přímé
            číslo.
          </p>
        </div>

        <figure className="feature">
          <img
            src="/section-1.webp"
            alt="Práce na kanalizační síti a manipulace s odpadem v Havířově"
            loading="lazy"
          />
          <figcaption>
            <span className="feature-tag">ODPAD + VODA</span>
            Dvě páteřní služby — svoz odpadu a provoz kanalizace — držíme v chodu bez
            výpadků po celý rok.
          </figcaption>
        </figure>

        <ul className="grid">
          {services.map((s) => (
            <li className="card" key={s.title}>
              <span className="card-tag">{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              {s.tel ? (
                <a className="card-tel" href={`tel:${s.tel}`}>
                  {s.telLabel}
                </a>
              ) : (
                <span className="card-tel card-tel--muted">v rámci spojovatelky</span>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="contact" id="provoz">
        <div className="contact-grid">
          <div className="contact-media">
            <img
              src="/section-2.webp"
              alt="Sběrný dvůr a zázemí Technických služeb Havířov"
              loading="lazy"
            />
          </div>

          <div className="contact-body">
            <p className="eyebrow eyebrow--light">Kde nás najdete</p>
            <h2>Přijďte, nebo zavolejte přímo</h2>

            <div className="places">
              <div className="place">
                <span className="place-kind">Sídlo společnosti</span>
                <p className="place-addr">
                  Karvinská 1461/66
                  <br />
                  736 01 Havířov-Město
                </p>
                <p className="place-hours">Po–Pá 6:00–14:00</p>
                <div className="place-links">
                  <a href="tel:+420596802601">+420 596 802 601</a>
                  <a href="mailto:tsh@tsh.cz">tsh@tsh.cz</a>
                </div>
              </div>

              <div className="place">
                <span className="place-kind">Sběrný dvůr</span>
                <p className="place-addr">
                  Karvinská 247/63
                  <br />
                  736 01 Havířov-Město
                </p>
                <p className="place-hours">Út–Ne 8:00–16:00</p>
                <p className="place-gps">49.7900203N, 18.4216597E</p>
              </div>
            </div>

            <div className="dispatch">
              <span className="dispatch-title">Přímá čísla na provozy</span>
              <ul>
                {dispatch.map((d) => (
                  <li key={d.label}>
                    <span className="dispatch-lbl">{d.label}</span>
                    <a href={`tel:${d.tel}`}>{d.telLabel}</a>
                  </li>
                ))}
              </ul>
            </div>

            <p className="reg">
              IČ 253 75 601 · DIČ CZ25375601 · datová schránka dyjtrwn
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

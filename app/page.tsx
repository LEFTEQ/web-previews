import { AiImage } from "./_ui";

// Footfall through the day — the "Exponované časy" data, elevated into the page's core graphic.
const busy: { t: number; h: number }[] = [
  { t: 7, h: 22 },
  { t: 8, h: 38 },
  { t: 9, h: 52 },
  { t: 10, h: 64 },
  { t: 11, h: 78 },
  { t: 12, h: 84 },
  { t: 13, h: 72 },
  { t: 14, h: 54 },
  { t: 15, h: 48 },
  { t: 16, h: 58 },
  { t: 17, h: 82 },
  { t: 18, h: 70 },
  { t: 19, h: 44 },
  { t: 20, h: 24 },
];
const axisLabels = new Set([7, 10, 13, 16, 19]);

const hours: { d: string; h: string }[] = [
  { d: "Pondělí", h: "07:30–20:00" },
  { d: "Úterý", h: "07:30–20:00" },
  { d: "Středa", h: "07:30–20:00" },
  { d: "Čtvrtek", h: "07:30–20:00" },
  { d: "Pátek", h: "07:30–20:00" },
  { d: "Sobota", h: "08:00–20:00" },
  { d: "Neděle", h: "08:00–20:00" },
];

const equip: string[] = [
  "Samoobslužná pokladna",
  "Scan&Go — plaťte přímo v aplikaci",
  "Bezbariérový přístup",
  "Balicí pult",
  "Wi-Fi zdarma",
  "Hrací koutek pro děti",
  "Expresní vyzvednutí do 60 minut",
  "Vyzvednutí objednávky v prodejně",
];

const assortment: { k: string; v: string }[] = [
  { k: "Dekorativní kosmetika", v: "NYX Professional Makeup, miss sporty" },
  { k: "Péče o nehty", v: "Sally Hansen, Essie" },
  { k: "Zdraví a výživa", v: "rozšířený sortiment Alpro" },
  { k: "Péče o pleť", v: "Ziaja, Dermacol, Aknelot, Dr. Pawpaw, Geek & Gorgeous" },
  { k: "Textil", v: "Bellinda, Legstra, Stella Jones" },
];

const payment: string[] = [
  "Hotovost",
  "Platba kartou",
  "Platba s active beauty body",
  "Vybrané dárkové poukázky",
];

const nearby: { a: string; c: string; km: string; close: string }[] = [
  { a: "Polská 1201/1", c: "Olomouc", km: "1,03 km", close: "do 21:00" },
  { a: "Pavlovická 272/18", c: "Olomouc", km: "2,21 km", close: "do 20:00" },
  { a: "Kafkova 465/39", c: "Olomouc", km: "2,87 km", close: "do 20:00" },
  { a: "Olomoucká 90", c: "Velký Týnec", km: "5,72 km", close: "do 21:00" },
  { a: "Konečná 4563/8", c: "Prostějov", km: "15,5 km", close: "do 20:00" },
];

export default function Page() {
  return (
    <main>
      {/* ---------- HERO: the busy-hours thesis ---------- */}
      <header className="hero">
        <div className="wrap">
          <div className="topbar">
            <div className="brand">
              <span className="brand-mark" aria-hidden="true">
                <i /><i /><i />
              </span>
              <span className="brand-name">
                dm<span>drogerie · Olomouc</span>
              </span>
            </div>
            <p className="status">
              <span className="dot" aria-hidden="true" />
              Otevřeno · zavíráme ve 20:00
            </p>
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Prodejna dm · Galerie Moritz</p>
              <h1 className="h1">
                Nakupte,<br />když je nejmíň<br />fronty.
              </h1>
              <p className="lead">
                Takhle plno bývá u nás v olomoucké dm během dne. Modré sloupce
                jsou klid, korálové špička. Nejtišeji je hned po otevření a kolem
                půl třetí.
              </p>
              <div className="cta-row">
                <a className="btn btn-primary" href="tel:+420777111222">
                  Zavolat 777 111 222
                </a>
                <a className="btn btn-ghost" href="#doba">
                  Otevírací doba
                </a>
              </div>
            </div>

            <div className="hero-media">
              <AiImage
                src="/hero.webp"
                alt="Interiér prodejny dm v Galerii Moritz v Olomouci"
                className="hero-img"
              />
            </div>
          </div>

          {/* Signature: the footfall bars */}
          <section className="busy" aria-labelledby="busy-title">
            <div className="busy-head">
              <h2 id="busy-title">Exponované časy</h2>
              <p>Pondělí · návštěvnost během dne</p>
            </div>
            <div
              className="busy-chart"
              role="img"
              aria-label="Graf návštěvnosti: nejvíce lidí kolem poledne a v podvečer, nejméně po otevření a odpoledne."
            >
              {busy.map((b, i) => (
                <div className="bar-col" key={b.t}>
                  <span
                    className={"bar" + (b.h >= 78 ? " is-busy" : "")}
                    style={{ height: b.h + "%", animationDelay: i * 45 + "ms" }}
                  />
                </div>
              ))}
            </div>
            <div className="busy-axis" aria-hidden="true">
              {busy.map((b) => (
                <span key={b.t} className="tick">
                  {axisLabels.has(b.t) ? b.t : ""}
                </span>
              ))}
            </div>
            <p className="busy-legend">
              <span className="key key-calm" /> klid&nbsp;&nbsp;
              <span className="key key-busy" /> špička
            </p>
          </section>
        </div>
      </header>

      {/* ---------- SECTION 1: services ---------- */}
      <section className="section" aria-labelledby="s1">
        <div className="wrap">
          <div className="sec-head">
            <span className="rule" aria-hidden="true"><i /><i /><i /></span>
            <h2 id="s1" className="h2">Co u nás vyřídíte</h2>
            <p className="sec-note">
              Vybavení, rozšířený sortiment a platby na prodejně v Galerii Moritz.
            </p>
          </div>

          <div className="cols">
            <div className="col col-wide">
              <h3 className="col-label">Vybavení a služby</h3>
              <ul className="tick-list">
                {equip.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </div>

            <div className="col col-wide">
              <h3 className="col-label">Rozšířený sortiment</h3>
              <dl className="shelf">
                {assortment.map((a) => (
                  <div className="shelf-row" key={a.k}>
                    <dt>{a.k}</dt>
                    <dd>{a.v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="col">
              <h3 className="col-label">Platba</h3>
              <ul className="tick-list">
                {payment.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <p className="delivery">
                Doprava zdarma od 1&nbsp;290&nbsp;Kč. Expresní vyzvednutí
                objednávky do&nbsp;60&nbsp;minut.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SECTION 2: opening hours + trust ---------- */}
      <section className="section section-alt" id="doba" aria-labelledby="s2">
        <div className="wrap">
          <div className="sec-head">
            <span className="rule" aria-hidden="true"><i /><i /><i /></span>
            <h2 id="s2" className="h2">Kdy máme otevřeno</h2>
            <p className="sec-note">
              Galerie Moritz, Ukázková 123, 779&nbsp;00 Olomouc.
            </p>
          </div>

          <div className="hours-grid">
            <table className="hours">
              <caption className="visually-hidden">Otevírací doba podle dnů</caption>
              <tbody>
                {hours.map((row) => (
                  <tr key={row.d}>
                    <th scope="row">{row.d}</th>
                    <td>{row.h}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="hours-media">
              <AiImage
                src="/section-2.webp"
                alt="Vchod do prodejny dm v olomoucké Galerii Moritz"
                className="hours-img"
              />
            </div>
          </div>

          <h3 className="col-label near-title">Další dm v okolí</h3>
          <ul className="near-list">
            {nearby.map((n) => (
              <li className="near-item" key={n.a}>
                <span className="near-a">{n.a}</span>
                <span className="near-c">{n.c}</span>
                <span className="near-km">{n.km}</span>
                <span className="near-close">dnes {n.close}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

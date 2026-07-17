const peakData = [
  { short: "Po", full: "Pondělí", values: [35, 60, 72, 90] },
  { short: "Út", full: "Úterý", values: [30, 54, 66, 80] },
  { short: "St", full: "Středa", values: [40, 64, 76, 94] },
  { short: "Čt", full: "Čtvrtek", values: [30, 50, 70, 84] },
  { short: "Pá", full: "Pátek", values: [46, 70, 86, 100] },
  { short: "So", full: "Sobota", values: [72, 100, 84, 54] },
  { short: "Ne", full: "Neděle", values: [26, 46, 56, 40] },
];

const hourMarks = ["8", "11", "14", "17"];

const week = [
  "Pondělí",
  "Úterý",
  "Středa",
  "Čtvrtek",
  "Pátek",
  "Sobota",
  "Neděle",
];

const services = [
  {
    kicker: "Zdraví a výživa",
    title: "Péče o zdraví a zdravá výživa",
    body: "Doplňky, dětská výživa i rozšířený sortiment rostlinných nápojů Alpro na jednom místě.",
  },
  {
    kicker: "Pleť",
    title: "Rozšířená péče o pleť",
    body: "Ziaja, Dermacol, Aknelot, Dr. Pawpaw i Geek & Gorgeous — poradíme s výběrem podle typu pleti.",
  },
  {
    kicker: "Kosmetika",
    title: "Dekorativní kosmetika a nehty",
    body: "Gabriella Salvete, Miss Sporty, Rimmel London, Max Factor a péče o nehty Sally Hansen i Essie.",
  },
  {
    kicker: "Rychle",
    title: "Expresní vyzvednutí a Scan & Go",
    body: "Objednávku z e-shopu vyzvednete do 60 minut. Se Scan & Go projdete pokladnou bez čekání.",
  },
];

const equipment = [
  "Zákaznické WC",
  "Bezbariérový přístup",
  "Přebalovací pult",
  "Hrací koutek",
  "Balicí pult",
  "Wi-Fi zdarma",
];

const payments = [
  "Hotovost",
  "Platba kartou",
  "active beauty body",
  "Dárkové poukázky",
];

function PeakChart({ mini = false }: { mini?: boolean }) {
  return (
    <div
      className={mini ? "peak peak--mini" : "peak"}
      role="img"
      aria-label="Graf vytíženosti pobočky přes týden: nejrušněji bývá v pátek a v sobotu odpoledne, nejklidněji v neděli a ráno."
    >
      <div className="peak-row">
        {peakData.map((d, di) => {
          const max = Math.max(...d.values);
          return (
            <div className="peak-day" key={d.short}>
              <div className="peak-cols">
                {d.values.map((v, vi) => (
                  <span
                    key={vi}
                    className="peak-col"
                    data-hot={v === max ? "1" : undefined}
                    style={{
                      height: v + "%",
                      // @ts-expect-error custom prop for stagger
                      "--i": di * 4 + vi,
                    }}
                  />
                ))}
              </div>
              <span className="peak-label">{d.short}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="divider" aria-hidden="true">
      {Array.from({ length: 16 }).map((_, i) => (
        <span
          key={i}
          className="divider-pill"
          style={{ height: 30 + ((i * 37) % 70) + "%" }}
        />
      ))}
    </div>
  );
}

function Wordmark() {
  return (
    <span className="mark">
      <span className="mark-badge">dm</span>
      <span className="mark-cross" aria-hidden="true" />
      <span className="mark-word">lékárna</span>
    </span>
  );
}

export default function Page() {
  return (
    <main className="page">
      {/* HERO */}
      <section className="band band--navy" aria-labelledby="hero-title">
        <div className="wrap">
          <header className="topbar">
            <Wordmark />
            <span className="topbar-loc">Hradec Králové</span>
          </header>

          <p className="eyebrow eyebrow--light">Otevřeno každý den · 8–20</p>
          <h1 id="hero-title" className="h1">
            Přijďte, když je&nbsp;klid
          </h1>
          <p className="lede">
            Podívejte se, kdy bývá ve vaší dm lékárně v Hradci Králové nejvíc
            lidí — a vyberte si čas bez fronty. U výdeje léků i u pokladny.
          </p>

          <div className="panel">
            <div className="panel-head">
              <h2 className="panel-title">Exponované časy</h2>
              <ul className="legend">
                <li>
                  <span className="dot dot--calm" /> klid
                </li>
                <li>
                  <span className="dot dot--mid" /> střední
                </li>
                <li>
                  <span className="dot dot--hot" /> nejvíc lidí
                </li>
              </ul>
            </div>
            <PeakChart />
            <div className="hourbar" aria-hidden="true">
              {hourMarks.map((h) => (
                <span key={h}>{h}</span>
              ))}
            </div>
            <p className="panel-hint">
              Data z běžného týdne. Nejklidněji je hned po otevření a v neděli
              dopoledne.
            </p>
          </div>

          <div className="cta-row">
            <a className="btn btn--coral" href="#kde">
              Navigovat na pobočku
            </a>
            <a className="btn btn--ghost" href="tel:+420777111222">
              Zavolat 777 111 222
            </a>
          </div>
        </div>
      </section>

      <Divider />

      {/* SLUŽBY / NABÍDKA */}
      <section className="band band--white" aria-labelledby="sluzby-title">
        <div className="wrap">
          <p className="eyebrow">Co tady vyřídíte</p>
          <h2 id="sluzby-title" className="h2">
            Víc než drogerie — malá lékárna pro každý den
          </h2>

          <div className="cards">
            {services.map((s, i) => (
              <article className="card" key={s.title}>
                <span className="card-num">{String(i + 1).padStart(2, "0")}</span>
                <p className="card-kicker">{s.kicker}</p>
                <h3 className="card-title">{s.title}</h3>
                <p className="card-body">{s.body}</p>
              </article>
            ))}
          </div>

          <div className="chips-block">
            <div className="chips-group">
              <p className="chips-label">Na prodejně najdete</p>
              <ul className="chips">
                {equipment.map((e) => (
                  <li key={e} className="chip">
                    {e}
                  </li>
                ))}
              </ul>
            </div>
            <div className="chips-group">
              <p className="chips-label">Zaplatíte</p>
              <ul className="chips">
                {payments.map((p) => (
                  <li key={p} className="chip chip--pay">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* KDE NÁS NAJDETE / DŮVĚRA */}
      <section className="band band--cloud" id="kde" aria-labelledby="kde-title">
        <div className="wrap">
          <p className="eyebrow">Kde nás najdete</p>
          <h2 id="kde-title" className="h2">
            Vaše dm v centru Hradce&nbsp;Králové
          </h2>

          <div className="store">
            <div className="store-card">
              <div className="store-top">
                <Wordmark />
                <span className="open-badge">
                  <span className="open-dot" />
                  Dnes 8–20
                </span>
              </div>
              <address className="store-addr">
                Ukázková 123
                <br />
                500 02 Hradec Králové
              </address>
              <PeakChart mini />
              <p className="store-motif-cap">Vytíženost během týdne</p>
              <div className="cta-row cta-row--tight">
                <a className="btn btn--coral" href="#kde">
                  Navigovat
                </a>
                <a className="btn btn--navy" href="tel:+420777111222">
                  Zavolat
                </a>
              </div>
            </div>

            <div className="hours">
              <h3 className="hours-title">Otevírací doba</h3>
              <ul className="hours-list">
                {week.map((d) => (
                  <li key={d} className="hours-row">
                    <span className="hours-day">{d}</span>
                    <span className="hours-time">08:00–20:00</span>
                  </li>
                ))}
              </ul>
              <p className="freshness">Otevírací doba ověřena 3. 6. 2024.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

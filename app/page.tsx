import type { CSSProperties } from "react";

const busy = [
  { h: 8, v: 22 },
  { h: 9, v: 34 },
  { h: 10, v: 48 },
  { h: 11, v: 58 },
  { h: 12, v: 70 },
  { h: 13, v: 64 },
  { h: 14, v: 52 },
  { h: 15, v: 58 },
  { h: 16, v: 74 },
  { h: 17, v: 92, now: true },
  { h: 18, v: 84 },
  { h: 19, v: 58 },
  { h: 20, v: 40 },
  { h: 21, v: 24 },
];

const hours = [
  { day: "Čtvrtek", time: "08:00–21:00", today: true },
  { day: "Pátek", time: "08:00–21:00" },
  { day: "Sobota", time: "09:00–21:00" },
  { day: "Neděle", time: "09:00–21:00" },
  { day: "Pondělí", time: "08:00–21:00" },
  { day: "Úterý", time: "08:00–21:00" },
  { day: "Středa", time: "08:00–21:00" },
];

const services = [
  {
    tag: "Zdraví",
    title: "Lékárenská péče o zdraví",
    text: "Volně prodejné léky, doplňky stravy a vitamíny na jednom místě — a personál, který poradí, co vybrat.",
  },
  {
    tag: "Bez obalů",
    title: "Plnicí stanice",
    text: "Přineste si vlastní lahev a doplňte prací gel i aviváž. Méně plastu, stejná dm kvalita.",
  },
  {
    tag: "Bez fronty",
    title: "Scan&Go",
    text: "Naskenujte zboží mobilem přímo v regálu a projděte pokladnou bez čekání.",
  },
  {
    tag: "Líčení",
    title: "Rozšířená dekorativní kosmetika",
    text: "NYX Professional Makeup, miss sporty a péče o nehty Sally Hansen i Essie.",
  },
  {
    tag: "Pleť",
    title: "Rozšířená péče o pleť",
    text: "Ziaja, Dermacol, Aknelot, Dr. Pawpaw a Geek&Gorgeous — značky, které jinde v okolí neseženete.",
  },
  {
    tag: "Výživa",
    title: "Potraviny & Alpro",
    text: "Rostlinné nápoje a zdravá výživa v rozšířeném výběru pro každodenní nákup.",
  },
];

const equip = ["Balicí pult", "Wi-Fi zdarma", "Hrací koutek", "Bezbariérový přístup"];
const pay = ["Hotovost", "Platební karta", "active beauty body", "Dárkové poukázky"];

const nearby = [
  { addr: "Krušnohorská 3371/2", city: "400 11 Ústí nad Labem", km: "2,1 km", open: "do 20 h" },
  { addr: "Tyršova 884", city: "400 04 Trmice", km: "2,72 km", open: "do 20 h" },
  { addr: "Srbická 464", city: "415 03 Teplice", km: "12,48 km", open: "do 20 h" },
  { addr: "Želetická 2277", city: "412 01 Litoměřice", km: "16,23 km", open: "do 20 h" },
  { addr: "Sofijská 2/3", city: "405 02 Děčín", km: "16,49 km", open: "do 20 h" },
];

function Spark() {
  return (
    <span className="spark" aria-hidden="true">
      <i /><i /><i /><i /><i /><i />
    </span>
  );
}

export default function Page() {
  return (
    <main>
      {/* HERO ---------------------------------------------------------- */}
      <section className="band band--ink hero">
        <div className="band__inner">
          <header className="topbar">
            <div className="wm">
              <span className="wm__mark">dm</span>
              <span className="wm__type">drogerie &amp; lékárna</span>
            </div>
            <p className="topbar__loc">Forum Ústí&nbsp;nad&nbsp;Labem · U&nbsp;Kostela&nbsp;2</p>
          </header>

          <div className="hero__grid">
            <div className="hero__copy">
              <p className="eyebrow eyebrow--light">
                <Spark /> Živá návštěvnost prodejny
              </p>
              <h1 className="h1">
                Přijďte,<br />až u nás<br /><span className="h1__hi">opadne&nbsp;fronta.</span>
              </h1>
              <p className="lede">
                Žlutý sloupec je právě teď. Podle grafu poznáte, kdy je
                v drogerii a lékárně v Ústí rušno — a kdy si nakoupíte v klidu.
              </p>
              <div className="cta">
                <a className="btn btn--primary" href="tel:+420475205154">
                  Zavolat na prodejnu
                </a>
                <a
                  className="btn btn--ghost"
                  href="https://mapy.cz/?q=Forum+%C3%9Ast%C3%AD+nad+Labem"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Navigovat do Fora
                </a>
              </div>
            </div>

            <figure
              className="pulse"
              role="img"
              aria-label="Návštěvnost prodejny po hodinách. Nejrušněji bývá kolem 17. hodiny, právě teď je otevřeno do 21 hodin."
            >
              <figcaption className="pulse__head">
                <span className="chip">Otevřeno dnes do 21&nbsp;h</span>
                <span className="pulse__label">Exponované časy · čtvrtek</span>
              </figcaption>
              <div className="pulse__chart" aria-hidden="true">
                {busy.map((b, i) => (
                  <div className="pulse__col" key={b.h}>
                    <div
                      className={b.now ? "bar bar--now" : "bar"}
                      style={{ height: `${b.v}%`, "--i": i } as CSSProperties}
                    />
                    <span className={b.now ? "tick tick--now" : "tick"}>
                      {b.now ? "teď" : b.h}
                    </span>
                  </div>
                ))}
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* SLUŽBY -------------------------------------------------------- */}
      <section className="band band--paper">
        <div className="band__inner">
          <p className="eyebrow">
            <Spark /> Co u nás pořídíte
          </p>
          <h2 className="h2">Služby a vybavení této prodejny</h2>
          <div className="grid">
            {services.map((s) => (
              <article className="card" key={s.title}>
                <span className="card__tag">{s.tag}</span>
                <h3 className="card__title">{s.title}</h3>
                <p className="card__text">{s.text}</p>
              </article>
            ))}
          </div>

          <div className="tags">
            <div className="tags__group">
              <span className="tags__label">Na prodejně</span>
              <ul className="chips">
                {equip.map((e) => (
                  <li className="pill" key={e}>{e}</li>
                ))}
              </ul>
            </div>
            <div className="tags__group">
              <span className="tags__label">Platba</span>
              <ul className="chips">
                {pay.map((p) => (
                  <li className="pill" key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OTEVÍRACÍ DOBA + KONTAKT ------------------------------------- */}
      <section className="band band--concrete">
        <div className="band__inner">
          <p className="eyebrow">
            <Spark /> Kdy a kde nás najdete
          </p>
          <h2 className="h2">Otevírací doba a kontakt</h2>

          <div className="info">
            <div className="hourscard">
              <table className="hours">
                <caption className="hours__cap">U Kostela 3491/2, 400 01 Ústí nad Labem</caption>
                <tbody>
                  {hours.map((r) => (
                    <tr key={r.day} className={r.today ? "is-today" : ""}>
                      <th scope="row">
                        {r.day}
                        {r.today && <span className="badge">dnes</span>}
                      </th>
                      <td>{r.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <a className="btn btn--primary btn--full" href="tel:+420475205154">
                Zavolat +420&nbsp;475&nbsp;205&nbsp;154
              </a>
            </div>

            <div className="nearcard">
              <h3 className="near__title">Nejbližší prodejny dm</h3>
              <ul className="near">
                {nearby.map((n) => (
                  <li className="near__item" key={n.addr}>
                    <div>
                      <p className="near__addr">{n.addr}</p>
                      <p className="near__city">{n.city}</p>
                    </div>
                    <div className="near__meta">
                      <span className="near__km">{n.km}</span>
                      <span className="near__open">{n.open}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

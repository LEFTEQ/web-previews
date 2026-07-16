import { AiImage } from "./_ui";

// Poctivá denní návštěvnost prodejny — hodiny 8–20 (v %).
// Vychází z reálného prvku „Exponované časy" (špičky kolem 8/11/14/17).
const BUSY: { h: string; v: number; tag?: "peak" | "quiet" }[] = [
  { h: "8", v: 24, tag: "quiet" },
  { h: "9", v: 36 },
  { h: "10", v: 52 },
  { h: "11", v: 66 },
  { h: "12", v: 72 },
  { h: "13", v: 61 },
  { h: "14", v: 57 },
  { h: "15", v: 69 },
  { h: "16", v: 83 },
  { h: "17", v: 97, tag: "peak" },
  { h: "18", v: 85 },
  { h: "19", v: 51 },
  { h: "20", v: 27, tag: "quiet" },
];

const HOURS: { d: string; today?: boolean }[] = [
  { d: "Pondělí" },
  { d: "Úterý" },
  { d: "Středa" },
  { d: "Čtvrtek", today: true },
  { d: "Pátek" },
  { d: "Sobota" },
  { d: "Neděle" },
];

const SERVICES: { k: string; t: string; d: string; tone: string }[] = [
  {
    k: "Péče o zdraví",
    t: "Lékárenský pult a doplňky",
    d: "Volně prodejné přípravky, vitamíny a doplňky stravy. Poradíme s výběrem přímo u regálu.",
    tone: "mint",
  },
  {
    k: "Líčení",
    t: "Rozšířená dekorativní kosmetika",
    d: "Celý koutek značek Gabriella Salvete, rom&nd, Miss Sporty, Rimmel London a Max Factor.",
    tone: "magenta",
  },
  {
    k: "Bez fronty",
    t: "Samoobsluha a Scan&Go",
    d: "Naskenujte zboží mobilem a zaplaťte u samoobslužné pokladny. Žádné čekání u pásu.",
    tone: "blue",
  },
  {
    k: "Foto DIY",
    t: "Fotky a fotoknihy na počkání",
    d: "Vytisknete si snímky i dárkovou fotoknihu rovnou na prodejně, bez objednávání předem.",
    tone: "slate",
  },
  {
    k: "Zdravá výživa",
    t: "Rozšířený sortiment Alpro",
    d: "Rostlinné nápoje, bio potraviny a zdravá výživa nad rámec běžné nabídky prodejen.",
    tone: "mint",
  },
  {
    k: "Pro rodiny",
    t: "Přebalovací pult a hrací koutek",
    d: "Přijďte s dětmi v klidu — čeká balicí pult, hrací koutek a Wi-Fi zdarma po celé prodejně.",
    tone: "blue",
  },
];

const NEARBY: { a: string; c: string; km: string; close: string }[] = [
  { a: "U Kostela 3491/2", c: "Ústí nad Labem", km: "2,1 km", close: "do 21:00" },
  { a: "Tyršova 884", c: "Trmice", km: "3,8 km", close: "do 20:00" },
  { a: "Srbická 464", c: "Teplice", km: "12,3 km", close: "do 20:00" },
  { a: "Sofijská 2/3", c: "Děčín", km: "15,2 km", close: "do 20:00" },
];

function Meter({ id, variant }: { id: string; variant: "hero" | "full" }) {
  const label =
    "Návštěvnost během dne: nejklidněji v 8:00 a po 19:00, nejvíce lidí v 17:00.";
  return (
    <figure
      className={variant === "hero" ? "meter meter--hero" : "meter"}
      role="img"
      aria-label={label}
    >
      <div className="meter__track">
        {BUSY.map((b, i) => (
          <div
            className="bar"
            key={`${id}-${b.h}`}
            style={{ ["--v" as string]: b.v, ["--d" as string]: i }}
          >
            <span
              className={`bar__fill${b.tag ? ` bar__fill--${b.tag}` : ""}`}
            />
            {variant === "full" && <span className="bar__h">{b.h}</span>}
          </div>
        ))}
      </div>
    </figure>
  );
}

export default function Page() {
  return (
    <main className="page">
      {/* ————— HERO ————— */}
      <section className="band band--blue hero" aria-labelledby="hero-h">
        <div className="wrap">
          <header className="top">
            <a className="mark" href="#hero-h" aria-label="dm drogerie — Ústí nad Labem">
              <span className="mark__box">dm</span>
              <span className="mark__sub">drogerie · Ústí nad Labem</span>
            </a>
            <span className="status">
              <span className="status__dot" aria-hidden="true" />
              Dnes otevřeno do 20:00
            </span>
          </header>

          <p className="eyebrow">Prodejna dm · Krušnohorská 3371/2 · 400 11</p>
          <h1 id="hero-h" className="hero__h">
            Drogerie a péče o&nbsp;zdraví
            <br />
            pod Krušnými horami.
          </h1>
          <p className="hero__lead">
            Otevřeno každý den 8–20. Samoobsluha a Scan&amp;Go bez fronty, výdej
            fotek, rozšířený koutek dekorativní kosmetiky a lékárenský sortiment —
            na Krušnohorské v&nbsp;Ústí nad Labem.
          </p>

          <div className="cta">
            <a className="btn btn--go" href="tel:+420415783739">
              Zavolat na prodejnu
            </a>
            <a
              className="btn btn--ghost"
              href="https://www.google.com/maps/search/?api=1&query=dm+Kru%C5%A1nohorsk%C3%A1+3371%2F2+%C3%9Ast%C3%AD+nad+Labem"
            >
              Navigovat na prodejnu
            </a>
          </div>

          <div className="hero__meterwrap hero__bars">
            <p className="hero__hint">
              Přijďte, když je klid — nejtišeji hned po otevření
            </p>
            <Meter id="hero" variant="hero" />
          </div>
        </div>
      </section>

      {/* ————— SLUŽBY ————— */}
      <section className="band band--shelf svc" aria-labelledby="svc-h">
        <div className="wrap">
          <p className="eyebrow eyebrow--blue">Co tady najdete</p>
          <h2 id="svc-h" className="h2">
            Celá drogerie i lékárenský pult pod jednou střechou
          </h2>
          <div className="grid">
            {SERVICES.map((s) => (
              <article className={`card card--${s.tone}`} key={s.t}>
                <span className="card__k">{s.k}</span>
                <h3 className="card__t">{s.t}</h3>
                <p className="card__d">{s.d}</p>
              </article>
            ))}
          </div>

          <ul className="chips" aria-label="Vybavení a platby na prodejně">
            <li>Balicí pult</li>
            <li>Wi-Fi zdarma</li>
            <li>Hrací koutek</li>
            <li>Platba kartou</li>
            <li>Hotovost</li>
            <li>active beauty body</li>
            <li>Dárkové poukázky</li>
          </ul>
        </div>
      </section>

      {/* ————— OTEVÍRACÍ DOBA + EXPONOVANÉ ČASY ————— */}
      <section className="band band--white info" aria-labelledby="info-h">
        <div className="wrap">
          <p className="eyebrow eyebrow--blue">Kdy dorazit</p>
          <h2 id="info-h" className="h2">
            Exponované časy — přijďte, když je klid
          </h2>
          <p className="info__lead">
            Nejvíc lidí je u&nbsp;nás kolem 17. hodiny. Chcete nakoupit v&nbsp;klidu?
            Nejtišeji bývá hned po otevření v&nbsp;<strong>8:00</strong> a
            po&nbsp;<strong>19. hodině</strong>.
          </p>

          <div className="meterpanel">
            <Meter id="full" variant="full" />
            <div className="legend">
              <span className="legend__i legend__i--quiet">Klid</span>
              <span className="legend__i legend__i--peak">Špička</span>
              <span className="legend__note">typický pracovní den, hodiny 8–20</span>
            </div>
          </div>

          <div className="cols">
            <div className="col">
              <h3 className="col__h">Otevírací doba</h3>
              <dl className="hours">
                {HOURS.map((h) => (
                  <div
                    className={`hours__row${h.today ? " hours__row--now" : ""}`}
                    key={h.d}
                  >
                    <dt>
                      {h.d}
                      {h.today && <span className="hours__badge">dnes</span>}
                    </dt>
                    <dd>08:00–20:00</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="col">
              <h3 className="col__h">Kde nás najdete</h3>
              <address className="addr">
                Krušnohorská 3371/2
                <br />
                400 11 Ústí nad Labem
              </address>
              <a className="tel" href="tel:+420415783739">
                +420 415 783 739
              </a>
              <div className="addr__cta">
                <a className="btn btn--go" href="tel:+420415783739">
                  Zavolat
                </a>
                <a
                  className="btn btn--ghost btn--sm"
                  href="https://www.google.com/maps/search/?api=1&query=dm+Kru%C5%A1nohorsk%C3%A1+3371%2F2+%C3%9Ast%C3%AD+nad+Labem"
                >
                  Navigovat
                </a>
              </div>
            </div>
          </div>

          <div className="nearby">
            <h3 className="col__h">Prodejny dm v&nbsp;okolí</h3>
            <ul className="nearby__list">
              {NEARBY.map((n) => (
                <li className="nearby__it" key={n.a}>
                  <span className="nearby__addr">
                    {n.a}
                    <span className="nearby__city">{n.c}</span>
                  </span>
                  <span className="nearby__meta">
                    <span className="nearby__km">{n.km}</span>
                    <span className="nearby__open">otevřeno {n.close}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

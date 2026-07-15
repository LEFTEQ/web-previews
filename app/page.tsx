import { LiveClock } from "./motion";

const steps = [
  {
    n: "01",
    title: "Obhlídka a návrh",
    desc: "Přijedeme k vám, zaměříme slepá místa a vstupy a navrhneme pokrytí kamerami přesně na váš objekt.",
  },
  {
    n: "02",
    title: "Výběr kamer",
    desc: "IP kamery s nočním viděním a IR přísvitem. Rozlišení volíme podle toho, co potřebujete rozeznat — obličej, SPZ, nebo jen pohyb.",
  },
  {
    n: "03",
    title: "Montáž a kabeláž",
    desc: "Čistá instalace s napájením po síťovém kabelu (PoE). Žádné viditelné dráty, žádné provizorní řešení.",
  },
  {
    n: "04",
    title: "Záznam a úložiště",
    desc: "Rekordér NVR se záznamem týdny zpět. Když se něco stane, máte se kam vrátit a co ukázat.",
  },
  {
    n: "05",
    title: "Vzdálený dohled",
    desc: "Živý obraz i archiv rovnou ve vašem mobilu. Podíváte se domů nebo do firmy odkudkoli.",
  },
  {
    n: "06",
    title: "Servis a revize",
    desc: "Pravidelná údržba, čištění optiky a rozšíření systému, až firma nebo rodina poroste.",
  },
];

const facts = [
  { k: "Adresa", v: "Jateční 1723/12, 301 00 Plzeň" },
  { k: "Telefon", v: "603 554 006 · 603 212 051" },
  { k: "E-mail", v: "info@kometa-plzen.cz" },
  { k: "Za firmu jedná", v: "Petr Novák, jednatel" },
];

const promises = [
  "Pevná cena dohodnutá předem",
  "Záruka a servis pod jednou střechou",
  "Zaškolení obsluhy u vás",
  "Značení kamer a soulad s GDPR",
];

export default function Page() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero__grid" aria-hidden="true" />
        <div className="hero__fov" aria-hidden="true" />
        <div className="hero__inner">
          <div className="hud" role="status" aria-label="Stav kamery">
            <span className="hud__rec">
              <span className="hud__dot" aria-hidden="true" />REC
            </span>
            <span className="hud__live">LIVE</span>
            <LiveClock />
            <span className="hud__ch">CH01 · PLZEŇ</span>
          </div>

          <p className="eyebrow">Kamerové systémy · Plzeň a okolí</p>
          <h1 className="wordmark">
            KOMETA
            <span className="wordmark__tail" aria-hidden="true" />
          </h1>
          <p className="hero__tag">
            Navrhneme, nainstalujeme a pohlídáme kamerový systém pro váš dům,
            byt i firmu. Ostrý obraz ve dne v noci a přístup z mobilu odkudkoli.
          </p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="tel:+420603554006">
              Zavolat 603 554 006
            </a>
            <a className="btn btn--ghost" href="mailto:info@kometa-plzen.cz">
              Napsat poptávku
            </a>
          </div>
        </div>
      </section>

      <section className="band band--angled band--steps" aria-labelledby="steps-h">
        <div className="band__inner">
          <header className="section-head">
            <p className="eyebrow eyebrow--cyan">01–06 · Jak vzniká váš systém</p>
            <h2 id="steps-h" className="section-title">
              Od první obhlídky po živý obraz v mobilu
            </h2>
          </header>
          <ol className="steps">
            {steps.map((s) => (
              <li key={s.n} className="step frame">
                <span className="step__n">{s.n}</span>
                <h3 className="step__title">{s.title}</h3>
                <p className="step__desc">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band band--angled band--trust" aria-labelledby="trust-h">
        <div className="band__inner trust">
          <div className="trust__lead">
            <p className="eyebrow eyebrow--cyan">O nás · Jateční, Plzeň</p>
            <h2 id="trust-h" className="section-title">
              Plzeňská parta, která to zapojí a nezmizí
            </h2>
            <p className="trust__text">
              Kamerové systémy montujeme z Jatečního v Plzni pro domácnosti
              i firmy po celém kraji. Přijedeme se podívat, poradíme, co dává
              smysl, a zůstáváme na telefonu i po předání. Žádné anonymní
              call centrum — voláte přímo lidem, kteří vám kamery instalovali.
            </p>
            <ul className="trust__promises">
              {promises.map((p) => (
                <li key={p} className="trust__promise">{p}</li>
              ))}
            </ul>
          </div>
          <div className="trust__card frame">
            <p className="trust__card-label">Kontakt</p>
            <dl className="facts">
              {facts.map((f) => (
                <div key={f.k} className="fact">
                  <dt className="fact__k">{f.k}</dt>
                  <dd className="fact__v">{f.v}</dd>
                </div>
              ))}
            </dl>
            <a className="btn btn--primary btn--full" href="tel:+420603554006">
              Zavolat a domluvit obhlídku
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

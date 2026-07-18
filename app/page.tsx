import { LanguageCycler } from "./motion";

const plates = [
  { code: "A", title: "Motocykly", sub: "A2 · A" },
  { code: "AM", title: "Skútry a mopedy", sub: "AM · A1" },
  { code: "B", title: "Automobily", sub: "B · B+E · L17" },
  { code: "C", title: "Nákladní vozy", sub: "C · C+E" },
  { code: "D", title: "Autobusy", sub: "D" },
  { code: "T", title: "Traktory", sub: "T" },
];

const courses = [
  { town: "Plzeň", dates: "3. 8. a 14. 9. 2026", time: "16:00" },
  { town: "Stříbro", dates: "25. 6., 5. 8. a 16. 9. 2026", time: "15:30" },
  { town: "Nýřany", dates: "3. 8. a 14. 9. 2026", time: "16:00" },
];

const services = [
  {
    tag: "ŘP",
    title: "Řidičské průkazy",
    body: "Výcvik pro všechny skupiny oprávnění — od skútru přes osobní auto až po nákladní vozy a autobusy. Klasická autoškola i systém L17 pro sedmnáctileté.",
  },
  {
    tag: "96",
    title: "Školení řidičů",
    body: "Akreditované středisko pro profesní i referentská školení, kurzy ekonomické jízdy, přípravu mentorů L17 a rekvalifikace. Vše s moderním zázemím.",
  },
  {
    tag: "KJ",
    title: "Kondiční jízdy",
    body: "Nejste si za volantem jistí? Vrátili jste se po pauze? Kondiční jízdy přizpůsobíme vaší pokročilosti — od parkování po dálnici a město.",
  },
];

const reasons = [
  {
    label: "35 let na trhu",
    title: "Nejdéle fungující autoškola v Plzni",
    body: "Přes tři desetiletí za volantem a moderní vozový park. Zkušenost, na kterou se spolehnete od první jízdy.",
  },
  {
    label: "3 města",
    title: "Plzeň · Stříbro · Nýřany",
    body: "Výcvik všech řidičských skupin provádíme na třech místech regionu — vyberete si, kde vám to sedne.",
  },
  {
    label: "Akreditace",
    title: "Profesní školení řidičů",
    body: "Jsme akreditované středisko pro profesní školení řidičů. Bez papírování navíc, s moderním zázemím.",
  },
  {
    label: "4 jazyky",
    title: "Česky, anglicky, německy i ukrajinsky",
    body: "Učíme ve čtyřech jazycích. Vyberte si ten svůj — teorii i jízdy vedeme tak, abyste rozuměli.",
  },
];

export default function Page() {
  return (
    <main>
      <header className="hero">
        <div className="wrap">
          <div className="topline">
            <span className="wordmark">
              <span className="wm-top">AUTOŠKOLA</span>
              <span className="wm-main">BAUMRUK</span>
            </span>
            <span className="langline">
              Učíme vás <LanguageCycler />
            </span>
          </div>

          <h1 className="hero-title">
            Vydejte se na<br />cestu s námi
          </h1>
          <p className="hero-sub">
            Autoškola v Plzni, Stříbře a Nýřanech. Přes 35 let za volantem —
            od prvního startu po samostatnou jízdu.
          </p>
          <div className="hero-actions">
            <a className="btn btn-red" href="#kurzy">
              Přihlásit se na kurz
            </a>
            <a className="btn btn-ghost" href="#sluzby">
              Naše služby
            </a>
          </div>
        </div>

        <div className="wrap split" id="kurzy">
          <div className="col-plates">
            <p className="col-eyebrow">Skupiny oprávnění</p>
            <ul className="plates">
              {plates.map((p, i) => (
                <li className="plate-row" key={p.code} style={{ ["--i" as string]: i }}>
                  <span className="plate">
                    <span className="plate-eu">
                      <span className="plate-stars" aria-hidden="true" />
                      CZ
                    </span>
                    <span className="plate-code">{p.code}</span>
                  </span>
                  <span className="plate-cap">
                    <b>{p.title}</b>
                    <span>{p.sub}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="spine" aria-hidden="true" />

          <div className="col-dates">
            <p className="col-eyebrow">Nejbližší volné kurzy · skupina B</p>
            <ol className="dates">
              {courses.map((c) => (
                <li className="date-item" key={c.town}>
                  <span className="date-town">{c.town}</span>
                  <span className="date-when">{c.dates}</span>
                  <span className="date-time">začínáme v {c.time}</span>
                </li>
              ))}
            </ol>
            <p className="dates-note">
              Místo si držíme do naplnění skupiny. Ozvěte se a rezervujeme vám ho.
            </p>
          </div>
        </div>
      </header>

      <section className="band band-light" id="sluzby">
        <div className="wrap">
          <div className="band-head">
            <p className="col-eyebrow">Co u nás zvládnete</p>
            <h2 className="band-title">Profesionální a kvalitní výuka</h2>
          </div>
          <div className="cards">
            {services.map((s) => (
              <article className="card" key={s.title}>
                <span className="card-tag">{s.tag}</span>
                <h3 className="card-title">{s.title}</h3>
                <p className="card-body">{s.body}</p>
                <a className="card-link" href="#kurzy">
                  Zobrazit nabídku
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-dark" id="proc">
        <div className="wrap">
          <div className="band-head">
            <p className="col-eyebrow eyebrow-amber">Proč zvolit právě nás</p>
            <h2 className="band-title band-title-light">
              Co vám můžeme nabídnout
            </h2>
          </div>

          <div className="reasons">
            {reasons.map((r) => (
              <article className="reason" key={r.title}>
                <span className="reason-label">{r.label}</span>
                <h3 className="reason-title">{r.title}</h3>
                <p className="reason-body">{r.body}</p>
              </article>
            ))}
          </div>

          <figure className="quote">
            <div className="quote-score">
              <span className="quote-num">98 %</span>
              <span className="quote-num-cap">
                studentů nás doporučuje
                <br />
                na základě 61 recenzí na Facebooku
              </span>
            </div>
            <blockquote className="quote-text">
              „Nemohla jsem si vybrat lepší autoškolu. Výborné zaškolení,
              vždycky bylo všechno v pořádku. Mohu jen doporučit!“
            </blockquote>
            <figcaption className="quote-who">Klárka Klimentová</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}

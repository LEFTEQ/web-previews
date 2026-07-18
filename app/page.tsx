import { RotatingWord } from "./motion";

const events = [
  {
    day: "13",
    month: "08",
    time: "20:00",
    series: "SLAM ARÉNA 2026",
    title: "Pokáč",
    place: "U Dráhy, Šternberk",
    accent: "var(--amber)",
    tag: "Nejbližší akce",
  },
  {
    day: "15",
    month: "08",
    time: "20:00",
    series: "SLAM ARÉNA",
    title: "Janek Ledecký akusticky",
    place: "U Dráhy, Šternberk",
    accent: "var(--magenta)",
    tag: null,
  },
  {
    day: "20",
    month: "08",
    time: "20:00",
    series: "SLAM ARÉNA 2026",
    title: "O5 a Radeček — akustické trio",
    place: "U Dráhy, Šternberk",
    accent: "var(--cyan)",
    tag: null,
  },
  {
    day: "23",
    month: "08",
    time: "14:00",
    series: "ŠLÁGR FEST 2026",
    title: "Šlágr Fest na hradě",
    place: "Státní hrad Šternberk, Horní náměstí",
    accent: "var(--amber)",
    tag: "Celodenní",
  },
];

const fests = [
  {
    name: "Šternberský kopec",
    accent: "var(--amber)",
    text: "Oblíbený hudební festival, který díky rozmanitému výběru špičkových interpretů láká příznivce všech žánrů.",
  },
  {
    name: "Kulturní léto pod hvězdami",
    accent: "var(--cyan)",
    text: "Open air plný hudebních i divadelních produkcí a populárních interpretů — každý rok, s cílem udržet kulturní tradici.",
  },
  {
    name: "Čechy pod Kosířem",
    accent: "var(--magenta)",
    text: "Divadelní představení a velkolepé koncerty pod širým nebem na krásné zámecké zahradě v Čechách pod Kosířem.",
  },
];

const quotes = [
  {
    text: "Díky ARKS Plus je vždy den pro naše zaměstnance připraven a zorganizován na jedničku. Děkujeme a těšíme se na další akci.",
    name: "Ing. Tereza Vyhnálková",
    role: "specialistka marketingu, GRANITOL a.s.",
  },
  {
    text: "Práce a služby byly zajištěny řádně a odborně, v dohodnutých termínech. Agentura má profesionální přístup a zkušenosti s pořádáním obdobných akcí.",
    name: "Ing. Svatopluk Novák",
    role: "ředitel oblasti Střed, STRABAG a.s.",
  },
  {
    text: "ARKS Plus pro nás na vysoké úrovni zajišťuje organizační i technické zabezpečení konferencí. Spolupráce si vážíme, oceňujeme její stabilitu.",
    name: "Libor Žádník",
    role: "místopředseda, Sdružení pro rozvoj dopravní infrastruktury na Moravě z.s.",
  },
];

export default function Page() {
  return (
    <main>
      <header className="hero">
        <div className="hero__bg" aria-hidden="true" />
        <div className="wrap hero__inner">
          <div className="hero__top">
            <span className="wordmark">
              ARKS<span className="wordmark__plus">+</span>
            </span>
            <span className="hero__since">reklamní &amp; umělecká agentura · od&nbsp;1990</span>
          </div>

          <p className="hero__q">Za jakým zážitkem se s námi vydáte tentokrát?</p>

          <h1 className="hero__mast">
            <span className="hero__mast-line">Přijďte na</span>
            <RotatingWord />
          </h1>

          <p className="hero__lead">
            Koncerty pod hvězdami, festivaly na hradě i divadlo na zámecké zahradě.
            Bavíte se s námi na Šternbersku i po celé Moravě už <strong>34 let</strong>.
          </p>

          <div className="hero__actions">
            <a className="btn btn--amber" href="#program">Koupit vstupenky online</a>
            <a className="btn btn--ghost" href="#program">Prohlédnout program</a>
          </div>
        </div>
      </header>

      <div className="tearline tearline--paper" aria-hidden="true" />

      <section id="program" className="section section--paper">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Program 2026 · připravujeme</span>
            <h2 className="sec-title">Nejbližší akce, na které koupíte lístek</h2>
            <p className="sec-lead">
              Aktuální nabídka připravovaných kulturních akcí. Vstupenky koupíte online,
              stub si necháte na památku.
            </p>
          </div>

          <ul className="tickets">
            {events.map((e) => (
              <li
                key={e.title}
                className="ticket"
                style={{ ["--accent" as string]: e.accent }}
              >
                <div className="ticket__stub">
                  <span className="ticket__date">
                    <b>{e.day}</b>
                    <i>{e.month}</i>
                  </span>
                </div>
                <div className="ticket__body">
                  <span className="ticket__series">{e.series}</span>
                  <h3 className="ticket__title">{e.title}</h3>
                  <p className="ticket__meta">
                    <span className="ticket__time">{e.time}</span>
                    <span className="ticket__place">{e.place}</span>
                  </p>
                  <div className="ticket__foot">
                    {e.tag ? <span className="ticket__tag">{e.tag}</span> : <span />}
                    <a className="ticket__buy" href="#program">
                      Koupit lístek
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="tearline tearline--dark" aria-hidden="true" />

      <section id="o-nas" className="section section--dark">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow eyebrow--light">O agentuře</span>
            <h2 className="sec-title sec-title--light">
              34 let děláme kulturu na Šternbersku i po Moravě
            </h2>
            <p className="sec-lead sec-lead--light">
              Pořádáme kulturní a společenské akce — vždy s profesionálním přístupem a nadšením
              pro to, co děláme. Kromě vlastních festivalů zpracujeme i marketingovou a reklamní
              strategii včetně propagačních materiálů na míru. Odborné konzultace máte zdarma.
            </p>
          </div>

          <ul className="fests">
            {fests.map((f) => (
              <li
                key={f.name}
                className="fest"
                style={{ ["--accent" as string]: f.accent }}
              >
                <h3 className="fest__name">{f.name}</h3>
                <p className="fest__text">{f.text}</p>
                <span className="fest__link">Zobrazit více</span>
              </li>
            ))}
          </ul>

          <div className="quotes-head">
            <span className="eyebrow eyebrow--light">Řekli o spolupráci</span>
          </div>

          <ul className="quotes">
            {quotes.map((q) => (
              <li key={q.name} className="quote">
                <p className="quote__text">{q.text}</p>
                <p className="quote__by">
                  <span className="quote__name">{q.name}</span>
                  <span className="quote__role">{q.role}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

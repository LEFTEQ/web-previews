const VERTICALS = [7, 23, 39, 55, 71, 87];
const HORIZONTALS = [34, 66];

const SERVICES = [
  {
    code: "grey",
    board: "standardní deska",
    title: "Příčky a předstěny",
    desc: "Dělící stěny mezi pokoji i předstěny na schování instalací. Jednoduše i dvojitě opláštěné, s minerální izolací proti hluku.",
  },
  {
    code: "grey",
    board: "standardní deska",
    title: "Podhledy s LED",
    desc: "Rovné i kazetové stropy. Podhled srovná strop na milimetr a schová rozvody i zabudované LED osvětlení.",
  },
  {
    code: "green",
    board: "impregnovaná do vlhka",
    title: "Koupelny a vlhké provozy",
    desc: "Zelená impregnovaná deska, která snese vlhkost. Předstěny pod obklad, instalační šachty a nika pro pračku.",
  },
  {
    code: "red",
    board: "protipožární deska",
    title: "Protipožární konstrukce",
    desc: "Požárně odolné příčky a obklady ocelových nosníků. Certifikované skladby od EI 30 po EI 90.",
  },
  {
    code: "grey",
    board: "standardní deska",
    title: "Půdní vestavby a šikminy",
    desc: "Zateplení a opláštění podkroví. Šikminy a atypické tvary vedeme přesně podle krovu, bez spár na hranách.",
  },
  {
    code: "grey",
    board: "standardní deska",
    title: "Niky, oblouky a police",
    desc: "Světelné niky, zaoblené stěny a police ze sádrokartonu. Desku ohneme tam, kde to interiér potřebuje.",
  },
];

const STEPS = [
  {
    no: "01",
    title: "Zaměření",
    desc: "Přijedeme, změříme prostor a poradíme řešení. Nezávazně a zdarma.",
  },
  {
    no: "02",
    title: "Nabídka",
    desc: "Do několika dní dostanete cenu za práci i materiál — položku po položce.",
  },
  {
    no: "03",
    title: "Konstrukce",
    desc: "Postavíme rošt z CW a CD profilů, ukotvíme ho a vložíme izolaci.",
  },
  {
    no: "04",
    title: "Opláštění a tmelení",
    desc: "Přišroubujeme desky, přetmelíme spáry a přebrousíme povrch do hladka.",
  },
  {
    no: "05",
    title: "Předání",
    desc: "Uklidíme po sobě, odvezeme suť a předáme stěnu připravenou k malování.",
  },
];

export default function Page() {
  return (
    <main>
      <section className="hero">
        <div className="hero__grid" aria-hidden="true">
          {VERTICALS.map((x, i) => (
            <span
              key={`v${x}`}
              className="vline"
              style={{ left: `${x}%`, animationDelay: `${0.1 + i * 0.09}s` }}
            />
          ))}
          {HORIZONTALS.map((y, i) => (
            <span
              key={`h${y}`}
              className="hline"
              style={{ top: `${y}%`, animationDelay: `${0.6 + i * 0.14}s` }}
            />
          ))}
        </div>

        <div className="hero__inner wrap">
          <header className="nav">
            <div className="mark">
              <span className="mark__nt">NT</span>
              <span className="mark__name">interiors</span>
              <span className="mark__tag mono">sádrokartonář · Brno</span>
            </div>
            <span className="nav__note mono">Zaměření zdarma</span>
          </header>

          <div className="hero__body">
            <p className="hero__eyebrow mono">Sádrokartonářské práce — Brno a okolí</p>
            <h1 className="hero__title">
              <span>Rovné stěny.</span>
              <span>Ostré hrany.</span>
              <span className="accent">Žádné praskliny.</span>
            </h1>
            <p className="hero__lead">
              Stavíme příčky, předstěny a podhledy ze sádrokartonu. Přijedeme
              zaměřit, postavíme konstrukci a předáme stěnu vyhlazenou k
              malování — čistě a v termínu.
            </p>
            <ul className="chips" aria-label="Jak pracujeme">
              <li className="chip mono">deska 12,5 mm</li>
              <li className="chip mono">profil á 600 mm</li>
              <li className="chip mono">spáry vytmelené</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="band services">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow mono">Sádrokarton na míru</p>
            <h2>Co pro vás postavíme</h2>
            <p className="head__lead">
              Každá konstrukce potřebuje jinou desku. U řemesla ji poznáte podle
              barvy — a my ji vybíráme podle toho, co má stěna vydržet.
            </p>
          </div>

          <ul className="legend" aria-label="Typy sádrokartonových desek">
            <li className="legend__item">
              <span className="dot dot--grey" />
              <span className="mono">šedá — standardní</span>
            </li>
            <li className="legend__item">
              <span className="dot dot--green" />
              <span className="mono">zelená — do vlhka</span>
            </li>
            <li className="legend__item">
              <span className="dot dot--red" />
              <span className="mono">červená — protipožární</span>
            </li>
          </ul>

          <ul className="cards">
            {SERVICES.map((s) => (
              <li key={s.title} className={`card card--${s.code}`}>
                <span className="card__tag mono">
                  <span className={`dot dot--${s.code}`} />
                  {s.board}
                </span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band process">
        <div className="process__grid" aria-hidden="true" />
        <div className="wrap">
          <div className="head head--dark">
            <p className="eyebrow mono">Postup krok za krokem</p>
            <h2>Jak stavba probíhá</h2>
            <p className="head__lead">
              Od první návštěvy po hladkou stěnu vede pět kroků. U každého víte,
              co se děje a kdy jsme hotoví.
            </p>
          </div>

          <ol className="steps">
            {STEPS.map((step) => (
              <li key={step.no} className="step">
                <span className="step__no mono">{step.no}</span>
                <div className="step__text">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          <ul className="guarantees">
            <li className="guarantee">
              <span className="guarantee__label mono">Kde stavíme</span>
              <p>Brno a okolí do 30 km. Za prací dojedeme i na menší zakázku.</p>
            </li>
            <li className="guarantee">
              <span className="guarantee__label mono">Cena a termín</span>
              <p>Cenu i termín znáte předem. Držíme se jich, ne odhadů.</p>
            </li>
            <li className="guarantee">
              <span className="guarantee__label mono">Po nás čisto</span>
              <p>Zakryjeme, po práci uklidíme a suť odvezeme. Bydlíte dál.</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

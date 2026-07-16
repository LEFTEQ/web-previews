import { SwapWord } from "./motion";

type Pair = { en: string; cz: string };

function Chip({ en, cz, tone = "willow" }: Pair & { tone?: string }) {
  return (
    <span className={`chip chip-${tone}`}>
      <span className="chip-en">{en}</span>
      <span className="chip-dot" aria-hidden="true">
        ·
      </span>
      <span className="chip-cz">{cz}</span>
    </span>
  );
}

const nabidka = [
  {
    chip: { en: "song", cz: "písnička" },
    title: "Angličtina hravou formou",
    body:
      "Každý den. Písničky, básničky a hry — děti nasávají cizí jazyk přirozeně, tak jak se učily svoji mateřštinu. Žádné biflování, jen radost z nového slova.",
  },
  {
    chip: { en: "care", cz: "péče" },
    title: "Třída pro děti s PAS",
    body:
      "Součástí školky je speciální třída pro děti s poruchou autistického spektra. Menší kolektiv, klidné tempo a individuální přístup pedagogů.",
  },
  {
    chip: { en: "apple", cz: "jablko" },
    title: "Zdravé stravování",
    body:
      "Pestrý jídelníček s důrazem na čerstvé suroviny a pitný režim po celý den. Zdravá školka to má rovnou v názvu — a bereme to vážně.",
  },
  {
    chip: { en: "pond", cz: "rybník" },
    title: "U rybníka v Nedvězí",
    body:
      "Adresa Rybniční mluví za vše. Klidný okraj Olomouce, zeleň a voda na dosah — spousta prostoru na pobyt venku a poznávání přírody.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="hero">
        <nav className="topbar" aria-label="Hlavní">
          <a className="brand" href="#uvod">
            <span className="brand-mark" aria-hidden="true" />
            <span className="brand-text">
              <strong>Zdravá anglická školka</strong>
              <span>Nedvězí · Olomouc</span>
            </span>
          </a>
          <ul className="nav">
            <li>
              <a href="#nabidka">Co nabízíme</a>
            </li>
            <li>
              <a href="#o-nas">O nás</a>
            </li>
            <li>
              <a className="nav-call" href="tel:+420737075490">
                Zavolat
              </a>
            </li>
          </ul>
        </nav>

        <div className="hero-inner" id="uvod">
          <span className="eyebrow">
            <Chip en="hello" cz="ahoj" tone="water" />
            <span className="eyebrow-note">Předškolní angličtina od roku 2012</span>
          </span>

          <h1 className="hero-title">
            Anglicky se u nás
            <br />
            děti učí{" "}
            <SwapWord cz="hravě" en="playfully" />
          </h1>

          <p className="hero-lead">
            Malá školka u rybníka na Rybniční, kde je druhý jazyk
            přirozenou součástí dne — ve hře, u písničky i při obědě.
            Přijďte se podívat, jak to u nás vypadá.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#nabidka">
              Prohlédnout školku
            </a>
            <a className="btn btn-ghost" href="tel:+420737075490">
              +420 737 075 490
            </a>
          </div>

          <ul className="chip-row" aria-label="Slovíčka, která se u nás děti učí">
            <li>
              <Chip en="green" cz="zelená" />
            </li>
            <li>
              <Chip en="water" cz="voda" tone="water" />
            </li>
            <li>
              <Chip en="apple" cz="jablko" tone="apricot" />
            </li>
            <li>
              <Chip en="play" cz="hrát si" />
            </li>
          </ul>
        </div>
      </header>

      <section className="section section-nabidka" id="nabidka">
        <div className="section-head">
          <Chip en="our day" cz="náš den" tone="apricot" />
          <h2>Co u nás děti zažijí</h2>
          <p>
            Čtyři věci, na kterých školku stavíme. Žádné velké sliby —
            konkrétní každodennost.
          </p>
        </div>

        <ul className="cards">
          {nabidka.map((item) => (
            <li className="card" key={item.title}>
              <Chip en={item.chip.en} cz={item.chip.cz} />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section section-onas" id="o-nas">
        <div className="onas-grid">
          <div className="onas-lead">
            <Chip en="about us" cz="o nás" tone="water" />
            <h2>Rodiče nám věří už přes deset let</h2>
            <p>
              Od roku 2012 tu poskytujeme ucelené jazykové vzdělávání dětem
              předškolního věku. Jsme malá školka, kde se všichni známe
              jménem a kde má každé dítě — i to se speciálními potřebami —
              své pevné místo.
            </p>
            <p className="onas-note">
              Pro zápis do školky můžete využít online přihlášku,
              nebo nám prostě zavolejte. Rádi vás provedeme osobně.
            </p>
            <a className="btn btn-primary" href="tel:+420737075490">
              Domluvit prohlídku
            </a>
          </div>

          <dl className="facts">
            <div className="fact">
              <dt>Otevřeno</dt>
              <dd>6:30 – 17:00</dd>
              <span className="fact-sub">v pracovní dny</span>
            </div>
            <div className="fact">
              <dt>Kde nás najdete</dt>
              <dd>Rybniční 158/3</dd>
              <span className="fact-sub">Nedvězí, 779 00 Olomouc</span>
            </div>
            <div className="fact">
              <dt>Napište nám</dt>
              <dd>
                <a href="mailto:zdrava.anglicka@gmail.com">
                  zdrava.anglicka@gmail.com
                </a>
              </dd>
              <span className="fact-sub">odpovídáme týž den</span>
            </div>
            <div className="fact">
              <dt>Zápis</dt>
              <dd>2026 / 2027</dd>
              <span className="fact-sub">přihlášky online i osobně</span>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}

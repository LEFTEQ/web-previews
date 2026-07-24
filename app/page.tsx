import { AiImage } from "./_ui";
import { TrailRail, PaintBlaze } from "./motion";

const pillars = [
  {
    tone: "red",
    color: "#cf3a2e",
    kind: "Červená značka",
    count: "11 497",
    title: "Tipy na výlet",
    text: "Hotové výlety na jeden den. Kam s kočárkem, kam za deštěm, kam pěšky rovnou od vlaku.",
  },
  {
    tone: "blue",
    color: "#2a5ea6",
    kind: "Modrá značka",
    count: "7 339",
    title: "Trasy",
    text: "Body z A do B. Pěší a cyklo stopy s převýšením, délkou v kilometrech i odhadem času.",
  },
  {
    tone: "green",
    color: "#1f6d42",
    kind: "Zelená značka",
    count: "79 926",
    title: "Turistické cíle",
    text: "Hrady, rozhledny, jeskyně i muzea. Otevírací doba a vstupné pohromadě na jednom místě.",
  },
  {
    tone: "yellow",
    color: "#f2b418",
    kind: "Žlutá značka",
    count: "5 643",
    title: "Cestopisy",
    text: "Delší čtení z cest — od Sloupsko-šošůvských jeskyní až po výhledy z kopce Dundret v Laponsku.",
  },
];

const feed = [
  {
    tone: "green",
    color: "#1f6d42",
    place: "Litovel",
    kind: "Fotogalerie",
    text: "Loutky a loutková divadla. Zajížďka do Litovelského Pomoraví, když je zrovna jaro.",
  },
  {
    tone: "red",
    color: "#cf3a2e",
    place: "Šumperk",
    kind: "Tip na výlet",
    text: "Živá brána Jeseníků hostí celé léto výstavu Czech Press Photo — Fotografie roku.",
  },
  {
    tone: "yellow",
    color: "#f2b418",
    place: "Španělské Pyreneje",
    kind: "Cestopis",
    text: "Po několika letech zpátky za pyrenejskou květenou a ledovcovými jezery natěžko.",
  },
  {
    tone: "green",
    color: "#1f6d42",
    place: "Chlum u Hradce Králové",
    kind: "Turistický cíl",
    text: "Největší bitva na českém území ožívá. Nové Muzeum války 1866 zve i do rozšířené reality.",
  },
];

export default function Page() {
  return (
    <div className="page">
      <TrailRail />

      {/* HERO */}
      <header className="band hero">
        <div className="wrap">
          <div className="hero__brand">
            <span className="blaze red" aria-hidden="true" />
            Turistika<small>.cz</small>
          </div>

          <div className="hero__grid">
            <div>
              <span className="eyebrow">
                <span className="blaze green" aria-hidden="true" /> Turistická komunita · Hradec Králové
              </span>
              <h1>Každá cesta začíná u&nbsp;značky.</h1>
              <p className="hero__lead">
                Sbíráme výlety, trasy a tipy od lidí, kteří tam opravdu byli. Přes 117&nbsp;tisíc míst
                po Česku i za hranicemi — seřazených podle barvy značky, po které se k nim dojde.
              </p>
              <div className="hero__cta">
                <a className="btn btn--primary" href="#pilire">Vybrat výlet</a>
                <a className="btn btn--ghost" href="#komunita">Přidat svůj tip</a>
              </div>

              <ul className="hero__legend">
                <li><span className="blaze red" aria-hidden="true" /> Výlety</li>
                <li><span className="blaze blue" aria-hidden="true" /> Trasy</li>
                <li><span className="blaze green" aria-hidden="true" /> Cíle</li>
                <li><span className="blaze yellow" aria-hidden="true" /> Cestopisy</li>
              </ul>

              <div className="hero__scroll">
                <span className="blaze red" aria-hidden="true" /> Sledujte značku dolů
              </div>
            </div>

            <div className="hero__media">
              <AiImage
                src="/hero.webp"
                alt="Turistická značka na kmeni stromu u lesní cesty"
                className="hero__img"
              />
            </div>
          </div>
        </div>
      </header>

      {/* ROZCESTNÍK DIVIDER */}
      <div className="band band--post">
        <div className="wrap">
          <div className="post">
            <div className="post__mast" aria-hidden="true" />
            <div className="post__signs">
              <p className="post__label">Rozcestník — kam ukazují čísla</p>
              <ul style={{ margin: 0, padding: 0 }}>
                <li className="smerovka"><span>Příspěvky celkem</span><b>117 971</b></li>
                <li className="smerovka"><span>Turisté a cestovatelé</span><b>61 740</b></li>
                <li className="smerovka"><span>Vyplacené odměny</span><b>1 531 660 Kč</b></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* PILÍŘE */}
      <section className="band band--pillars" id="pilire">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">
              <span className="blaze yellow" aria-hidden="true" /> Čtyři barvy, čtyři světy
            </span>
            <h2>Vyberte barvu a vyrazte</h2>
            <p>
              Stejně jako v terénu: každá barva značky vede jinam. Zvolte, na co máte náladu — a jděte
              po ní. Obsah píšou sami turisté, ne cestovní kancelář za stolem.
            </p>
          </div>

          <div className="pillars">
            {pillars.map((p) => (
              <article className={`pillar ${p.tone}`} key={p.title}>
                <div className="pillar__top">
                  <PaintBlaze color={p.color} />
                  <span className="pillar__kind">{p.kind}</span>
                </div>
                <div className="pillar__count">{p.count}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>

          <div className="pillars-media">
            <AiImage
              src="/section-1.webp"
              alt="Dvojice turistů čte směrovku na rozcestí značených tras"
              className="band-img"
            />
          </div>
        </div>
      </section>

      {/* ROZCESTNÍK DIVIDER 2 */}
      <div className="band band--post">
        <div className="wrap">
          <div className="post">
            <div className="post__mast" aria-hidden="true" />
            <div className="post__signs">
              <p className="post__label">Rozcestník — komunita v číslech</p>
              <ul style={{ margin: 0, padding: 0 }}>
                <li className="smerovka"><span>Tipy na výlet</span><b>11 497</b></li>
                <li className="smerovka"><span>Fotogalerie</span><b>4 317</b></li>
                <li className="smerovka"><span>Tipy a novinky</span><b>5 623</b></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* DŮVĚRA / KOMUNITA */}
      <section className="band band--trust" id="komunita">
        <div className="wrap">
          <div className="trust__grid">
            <div>
              <span className="eyebrow">
                <span className="blaze green" aria-hidden="true" /> Píšou to turisti, ne cestovka
              </span>
              <h2 style={{ fontSize: "clamp(2rem,4.5vw,3.2rem)", marginTop: "1rem" }}>
                60 tisíc lidí, kteří tam&nbsp;byli
              </h2>
              <p style={{ color: "var(--ink-soft)", marginTop: "1rem", maxWidth: "48ch" }}>
                Turistika.cz vznikla, aby výlet naplánoval člověk podle zkušeností jiných lidí — ne
                podle reklamy. Za dobré články navíc platíme: sepsaná trasa nebo cíl vám vydělá, a další
                turista díky vám snáz najde cestu.
              </p>

              <div className="stats">
                <div className="stat"><b>61 740</b><span>registrovaných turistů a&nbsp;cestovatelů</span></div>
                <div className="stat"><b>117 971</b><span>výletů, tras, cílů a&nbsp;cestopisů</span></div>
                <div className="stat"><b>1 531 660 Kč</b><span>vyplaceno autorům za jejich&nbsp;příspěvky</span></div>
              </div>
            </div>

            <div>
              <AiImage
                src="/section-2.webp"
                alt="Turistka zapisuje poznámky z výletu s mapou KČT v ruce"
                className="trust__img"
              />
            </div>
          </div>

          <div className="feed">
            <h3>Poslední z terénu</h3>
            <ul>
              {feed.map((f) => (
                <li key={f.place}>
                  <span className={`blaze ${f.tone}`} aria-hidden="true" />
                  <div>
                    <span className="feed__place">{f.place}</span>{" · "}
                    <span className="feed__kind">{f.kind}</span>
                    <p>{f.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

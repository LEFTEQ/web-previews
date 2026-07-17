import { Porthole } from "./motion";

const appliances = [
  {
    name: "Pračky a sušičky",
    note: "Neodčerpává, netočí, hází chybu nebo hlučí? Ložiska, čerpadla, elektronika i topení.",
  },
  {
    name: "Myčky nádobí",
    note: "Nedomývá, nedopouští vodu, teče nebo neschne. Diagnostika i výměna dílů na místě.",
  },
  {
    name: "Chladničky a mrazničky",
    note: "Nechladí, namrzá, hučí kompresor. Chladicí okruh, termostaty i těsnění.",
  },
  {
    name: "Sporáky, trouby a desky",
    note: "Nehřeje, nejde zapálit, praská indukce. Plyn, elektro i sklokeramika.",
  },
  {
    name: "Vysavače a roboti",
    note: "Slabý tah, zaseknutý kartáč, nenabíjí se. Motory, baterie a navigace.",
  },
  {
    name: "Poradenství a díly",
    note: "Nevíte, jestli se oprava vyplatí? Poradíme a seženeme originální náhradní díly.",
  },
];

const commitments = [
  "Záruční i pozáruční opravy",
  "Originální náhradní díly",
  "Sledování zakázky on-line",
];

const brands = [
  "Bosch / Siemens",
  "Candy / Hoover",
  "Concept",
  "ECG",
  "Haier",
  "Chiq",
  "Orava",
  "Eta",
  "Teka / Küppersbusch",
  "Lord",
  "Nivona",
];

export default function Page() {
  return (
    <main id="top" className="page">
      <header className="masthead">
        <a className="wordmark" href="#top" aria-label="BMK servis — úvod">
          <span className="wm-drum" aria-hidden="true" />
          <span className="wm-text">
            <b>BMK</b>
            <i>servis</i>
          </span>
        </a>
        <a className="masthead-call" href="#objednat">
          <span className="dot" aria-hidden="true" />
          Objednat opravu
        </a>
      </header>

      <section className="band hero">
        <div className="hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow">
              Servis domácích spotřebičů · Praha · od roku 1994
            </p>
            <h1 className="hero-title">
              Poctivá oprava,
              <br />
              <span className="accent">většinou hotová</span> hned
              <br />
              při první návštěvě.
            </h1>
            <p className="hero-lead">
              Pračky, myčky, sušičky, chladničky, sporáky i vysavače. Přijedeme,
              najdeme závadu a většinu velkých spotřebičů spravíme rovnou u vás
              doma — bez zbytečného vození do dílny.
            </p>
            <div className="actions">
              <a className="btn btn-primary" href="#objednat">
                Objednat opravu
              </a>
              <a className="btn btn-ghost" href="#objednat">
                Zavolat technikovi
              </a>
            </div>
            <ul className="spec-strip" aria-label="Základní údaje">
              <li>
                <span className="ind" aria-hidden="true" />
                Praha a okolí
              </li>
              <li>
                <span className="ind" aria-hidden="true" />
                Po–Pá 8–17
              </li>
              <li>
                <span className="ind" aria-hidden="true" />
                Zpětný odběr elektra
              </li>
            </ul>
          </div>

          <div className="hero-visual reveal">
            <Porthole />
            <p className="visual-cap">Buben se točí — servis běží.</p>
          </div>
        </div>
      </section>

      <div className="perf" aria-hidden="true" />

      <section className="band" aria-labelledby="svc-h">
        <div className="section-head reveal">
          <p className="eyebrow">01 — Co opravujeme</p>
          <h2 id="svc-h" className="section-title">
            Velké i malé spotřebiče, jedna dílna.
          </h2>
        </div>

        <div className="svc-grid">
          {appliances.map((a) => (
            <article className="svc-card reveal" key={a.name}>
              <span className="port-tick" aria-hidden="true" />
              <h3 className="svc-name">{a.name}</h3>
              <p className="svc-note">{a.note}</p>
            </article>
          ))}
        </div>

        <ul className="commit reveal">
          {commitments.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </section>

      <div className="perf" aria-hidden="true" />

      <section className="band" aria-labelledby="about-h">
        <div className="about-grid">
          <div className="about-copy reveal">
            <p className="eyebrow">02 — O firmě</p>
            <h2 id="about-h" className="section-title">
              Od roku 1994 opravujeme,
              <br />
              ne vyhazujeme.
            </h2>
            <p className="about-text">
              BMK servis vznikl v roce 1994 a od té doby prošly našima rukama
              tisíce spotřebičů. Věříme, že poctivá oprava dává smysl nejen pro
              vaši peněženku, ale i pro planetu — proto se snažíme spravit i to,
              co by jinde rovnou odepsali.
            </p>
            <p className="about-text">
              Naši 30letou cestu zmapovala i reportáž magazínu SELL: provede vás
              naším zázemím a ukáže, proč většinu oprav velkých spotřebičů
              zvládneme ihned při první návštěvě u vás doma.
            </p>

            <dl className="stats">
              <div>
                <dt>1994</dt>
                <dd>rok založení</dd>
              </div>
              <div>
                <dt>30 let</dt>
                <dd>u spotřebičů denně</dd>
              </div>
              <div>
                <dt>1. návštěva</dt>
                <dd>většinou stačí</dd>
              </div>
            </dl>

            <p className="eco-seal">
              <span className="eco-mark" aria-hidden="true" />
              Zpětný odběr elektrozařízení — starý spotřebič od vás odvezeme.
            </p>
          </div>

          <aside className="brands reveal" aria-labelledby="brands-h">
            <p id="brands-h" className="brands-title">
              Servisované značky
            </p>
            <ul className="brand-list">
              {brands.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
}

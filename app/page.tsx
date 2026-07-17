import { AiImage } from "./_ui";

const services = [
  {
    w: "l",
    title: "Rozvody bytů a domů",
    body: "Nové instalace i rekonstrukce. Zásuvkové a světelné okruhy, jističe a proudové chrániče podle normy — přehledně a bezpečně.",
  },
  {
    w: "n",
    title: "Rozvaděče na míru",
    body: "Montáž a zapojení domovních rozvaděčů, jištění podle skutečné zátěže a čitelné popisky, ať víte, co který jistič dělá.",
  },
  {
    w: "pe",
    title: "LED osvětlení kuchyní",
    body: "Podlinkové světlo, spínání i stmívání. Světlo přesně tam, kde vaříte a krájíte — bez stínů do pracovní desky.",
  },
  {
    w: "l",
    title: "Podlahové vytápění",
    body: "Elektrické topné rohože pod dlažbu, zapojení termostatů a teplá podlaha v koupelně i v kuchyni.",
  },
  {
    w: "n",
    title: "Datové rozvody",
    body: "Internet a síť po celém bytě. Zásuvky RJ45 k televizi, pracovně i chytré domácnosti — konec táhnutí kabelů přes obývák.",
  },
  {
    w: "pe",
    title: "Revize a předání",
    body: "Revizní zpráva ke kolaudaci i pojišťovně. Změříme, protokol předáme a instalaci vysvětlíme.",
  },
];

const trust = [
  {
    k: "Hradec Králové a okolí",
    v: "Jsme místní. Do Vamberku, Janských Lázní i po celém Hradci dorazíme bez zbytečného čekání.",
  },
  {
    k: "Revize v ceně",
    v: "Ke každé instalaci dostanete revizní zprávu pro kolaudaci i pojišťovnu. Papíry v pořádku.",
  },
  {
    k: "Termín, který platí",
    v: "Domluvený den je domluvený den. Po práci po sobě uklidíme, nenecháme vám nepořádek.",
  },
  {
    k: "Denně 8–17 h",
    v: "Zavoláte, přijedeme na prohlídku a cenu řekneme předem. Žádná překvapení na faktuře.",
  },
];

const jobs = [
  "Kuchyň ve Vamberku",
  "Apartmán v Janských Lázních",
  "Sklady v Hradci Králové",
  "Kuchyň v Hradci Králové",
];

export default function Page() {
  return (
    <main>
      <header className="hero">
        <div className="grid">
          <div className="hero-copy">
            <p className="eyebrow">
              TBpro s.r.o. <span className="dot" /> elektroinstalace{" "}
              <span className="dot" /> Hradec Králové
            </p>
            <h1>
              Rozvody, rozvaděče a světlo{" "}
              <span className="accent">zapojené podle normy.</span>
            </h1>
            <p className="lead">
              Kompletní elektroinstalace bytů a rodinných domů v Hradci Králové
              a okolí. Nový rozvaděč, čisté rozvody, LED světlo v kuchyni,
              revize — a termín, který drží.
            </p>
            <div className="hero-actions">
              <a className="btn" href="tel:+420728724801">
                Zavolat 728 724 801
              </a>
              <span className="hours">Volejte denně 8–17 h</span>
            </div>
            <ul className="legend" aria-label="Barevné značení vodičů">
              <li>
                <span className="chip" data-w="l" /> fáze <em>hnědá</em>
              </li>
              <li>
                <span className="chip" data-w="n" /> nulák <em>modrá</em>
              </li>
              <li>
                <span className="chip" data-w="pe" /> zem <em>žlutozelená</em>
              </li>
            </ul>
          </div>

          <div className="hero-schema" aria-hidden="true">
            <svg viewBox="0 0 360 480" className="schema" role="presentation">
              <path className="trace rail" pathLength={1} d="M90 24 V456" />
              <path className="trace w-l" pathLength={1} d="M90 96 H300" />
              <path
                className="trace w-n"
                pathLength={1}
                d="M90 168 H240 V216 H320"
              />
              <path className="trace w-pe" pathLength={1} d="M90 264 H300" />
              <path
                className="trace w-l"
                pathLength={1}
                d="M90 336 H220 V384 H300"
              />
              <path className="trace w-n" pathLength={1} d="M90 420 H280" />

              <rect className="node n-rail" x="84" y="18" style={{ animationDelay: ".10s" }} />
              <rect className="node n-rail" x="84" y="90" style={{ animationDelay: ".30s" }} />
              <rect className="node n-l" x="294" y="90" style={{ animationDelay: ".45s" }} />
              <rect className="node n-rail" x="84" y="162" style={{ animationDelay: ".50s" }} />
              <rect className="node n-n" x="314" y="210" style={{ animationDelay: ".65s" }} />
              <rect className="node n-rail" x="84" y="258" style={{ animationDelay: ".70s" }} />
              <rect className="node n-pe" x="294" y="258" style={{ animationDelay: ".80s" }} />
              <rect className="node n-rail" x="84" y="330" style={{ animationDelay: ".85s" }} />
              <rect className="node n-l" x="294" y="378" style={{ animationDelay: ".95s" }} />
              <rect className="node n-rail" x="84" y="414" style={{ animationDelay: "1.00s" }} />
              <rect className="node n-n" x="274" y="414" style={{ animationDelay: "1.10s" }} />
            </svg>
            <p className="schema-cap">Schéma domovního rozvaděče — TBpro</p>
          </div>
        </div>
      </header>

      <section className="section services">
        <div className="grid">
          <div className="section-head">
            <p className="eyebrow">
              <span className="marker" data-w="l" /> Služby
            </p>
            <h2>Elektroinstalace od rozvaděče po poslední zásuvku</h2>
          </div>
          <ul className="svc-grid">
            {services.map((s) => (
              <li className="svc-card" key={s.title} data-w={s.w}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section trust">
        <div className="grid">
          <div className="section-head">
            <p className="eyebrow">
              <span className="marker" data-w="pe" /> Proč nás
            </p>
            <h2>Elektrikář z Hradce, kterého si pustíte domů</h2>
          </div>

          <div className="trust-body">
            <ul className="trust-grid">
              {trust.map((t) => (
                <li key={t.k}>
                  <h3>{t.k}</h3>
                  <p>{t.v}</p>
                </li>
              ))}
            </ul>

            <aside className="jobs">
              <p className="jobs-label">Naše poslední práce</p>
              <ul>
                {jobs.map((j) => (
                  <li key={j}>
                    <span className="jnode" aria-hidden="true" />
                    {j}
                  </li>
                ))}
              </ul>
              <a className="btn btn-ghost" href="tel:+420728724801">
                Domluvit prohlídku
              </a>
            </aside>
          </div>
        </div>
      </section>

      <a className="call-fab" href="tel:+420728724801" aria-label="Zavolat TBpro na 728 724 801">
        <span className="call-fab-icon" aria-hidden="true" />
        Zavolat
      </a>
    </main>
  );
}

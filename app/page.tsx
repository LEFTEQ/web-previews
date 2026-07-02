const sortiment = [
  {
    kod: "TOP",
    nazev: "Topení a vytápění",
    popis:
      "Kotle, radiátory, podlahové topení, armatury a regulace. Kompletní topenářský sortiment skladem — od rozdělovače po termostatickou hlavici.",
    polozky: ["Kotle a kotelny", "Otopná tělesa", "Podlahové topení", "Regulace a armatury"],
  },
  {
    kod: "TČ",
    nazev: "Tepelná čerpadla",
    popis:
      "Vzduch–voda i země–voda od prověřených výrobců. Pomůžeme s návrhem výkonu, akumulací i zapojením do stávající soustavy.",
    polozky: ["Vzduch–voda", "Země–voda", "Akumulační nádrže", "Návrh a dimenzování"],
  },
  {
    kod: "INS",
    nazev: "Instalace a rozvody",
    popis:
      "Trubky, tvarovky, lisovací systémy, izolace a upevňovací technika. Voda, plyn i topení — vše v jednom výdeji, hned na auto.",
    polozky: ["Měď a plast", "Lisovací systémy", "Izolace", "Upevňovací technika"],
  },
  {
    kod: "SAN",
    nazev: "Sanita a koupelny",
    popis:
      "Sanitární keramika, baterie, sprchové systémy a předstěnové instalace. Pro koncové řešení odkážeme na koupelnová studia ELEMENTS.",
    polozky: ["Keramika a baterie", "Sprchové systémy", "Předstěny", "Studia ELEMENTS"],
  },
];

const duvody = [
  {
    cislo: "30+",
    jednotka: "let",
    text: "na českém trhu. GIENGER je součástí evropské GC skupiny — velkoobchodu TZB, o který se opírají tisíce montážních firem.",
  },
  {
    cislo: "7–15",
    jednotka: "hod",
    text: "otevřený výdejní sklad v Českých Budějovicích. Objednáte přes e-shop, ráno naložíte a jedete rovnou na stavbu.",
  },
  {
    cislo: "24",
    jednotka: "hodin",
    text: "běžná lhůta závozu ze skladové sítě. Vlastní vozový park doveze materiál přímo na stavbu, ne jen na rampu.",
  },
];

export default function Page() {
  return (
    <main className="gt">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-topbar">
          <div className="wordmark" aria-label="GIENGER Tábor">
            <span className="wordmark-main">GIENGER</span>
            <span className="wordmark-sub">Tábor · pobočka České Budějovice</span>
          </div>
          <a className="hero-tel" href="tel:800100680">
            <span className="hero-tel-label">Zelená linka</span>
            <span className="hero-tel-num">800 100 680</span>
          </a>
        </div>

        {/* Signature: „stoupačka" — svislé potrubí s odbočkami k sekcím hero textu */}
        <div className="hero-body">
          <div className="pipe" aria-hidden="true">
            <span className="pipe-line" />
            <span className="pipe-joint pipe-joint-1" />
            <span className="pipe-joint pipe-joint-2" />
            <span className="pipe-joint pipe-joint-3" />
            <span className="pipe-valve">
              <svg viewBox="0 0 40 40" width="40" height="40" role="presentation" focusable="false">
                <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="3" />
                <line x1="20" y1="6" x2="20" y2="34" stroke="currentColor" strokeWidth="3" />
                <line x1="6" y1="20" x2="34" y2="20" stroke="currentColor" strokeWidth="3" />
              </svg>
            </span>
          </div>

          <div className="hero-copy">
            <p className="hero-eyebrow hero-reveal hero-reveal-1">
              Velkoobchod TZB pro montážní firmy
            </p>
            <h1 className="hero-title">
              <span className="hero-reveal hero-reveal-2">Topení.</span>{" "}
              <span className="hero-reveal hero-reveal-3">Voda.</span>{" "}
              <span className="hero-reveal hero-reveal-4 hero-title-accent">Skladem.</span>
            </h1>
            <p className="hero-lead hero-reveal hero-reveal-5">
              Jste topenář nebo instalatér z jižních Čech? V našem výdejním skladu
              v&nbsp;Českých Budějovicích naložíte kotel, trubky i&nbsp;armatury ještě dnes
              — a&nbsp;co skladem není, přiveze zítra naše auto rovnou na vaši stavbu.
            </p>
            <div className="hero-actions hero-reveal hero-reveal-6">
              <a className="btn btn-primary" href="#sortiment">
                Projít sortiment
              </a>
              <a className="btn btn-ghost" href="#duvera">
                Proč nakupovat u nás
              </a>
            </div>
          </div>
        </div>

        <div className="hero-strip" aria-hidden="true">
          <span>DN 15</span>
          <span>·</span>
          <span>DN 20</span>
          <span>·</span>
          <span>DN 25</span>
          <span>·</span>
          <span>DN 32</span>
          <span>·</span>
          <span>DN 40</span>
          <span>·</span>
          <span>DN 50</span>
          <span>·</span>
          <span>DN 65</span>
          <span>·</span>
          <span>DN 80</span>
          <span>·</span>
          <span>DN 100</span>
        </div>
      </header>

      {/* ===== SORTIMENT ===== */}
      <section className="sortiment" id="sortiment" aria-labelledby="sortiment-h">
        <div className="section-head">
          <p className="section-eyebrow">Co u nás naložíte</p>
          <h2 id="sortiment-h">
            Čtyři regály, které řemeslník potřebuje každý den
          </h2>
          <p className="section-lead">
            Prodáváme výhradně odborným montážním firmám — díky tomu držíme skladem
            profesionální sortiment, ne hobby zboží. Registrovaní zákazníci objednávají
            přes e-shop GIENGER s dodacími listy a fakturami na jednom místě.
          </p>
        </div>

        <div className="sortiment-grid">
          {sortiment.map((s) => (
            <article className="kartа sort-card" key={s.kod}>
              <div className="sort-card-head">
                <span className="sort-kod" aria-hidden="true">
                  {s.kod}
                </span>
                <h3>{s.nazev}</h3>
              </div>
              <p className="sort-popis">{s.popis}</p>
              <ul className="sort-list">
                {s.polozky.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="sortiment-note">
          Nejste montážní firma? Poradíme vám, na kterého z našich smluvních
          topenářů a instalatérů v okolí Českých Budějovic se obrátit — správná
          montáž je půlka životnosti každého kotle.
        </p>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="duvera" id="duvera" aria-labelledby="duvera-h">
        <div className="section-head section-head-inverse">
          <p className="section-eyebrow">Proč GIENGER Tábor</p>
          <h2 id="duvera-h">Materiál na stavbě, ne na cestě</h2>
          <p className="section-lead">
            Řemeslník nemůže čekat. Proto stavíme celou logistiku kolem jediného
            pravidla: co si objednáte, musí být druhý den na stavbě.
          </p>
        </div>

        <div className="duvera-grid">
          {duvody.map((d) => (
            <div className="duvera-item" key={d.cislo}>
              <p className="duvera-cislo">
                {d.cislo}
                <span className="duvera-jednotka"> {d.jednotka}</span>
              </p>
              <p className="duvera-text">{d.text}</p>
            </div>
          ))}
        </div>

        <blockquote className="duvera-quote">
          <p>
            „Ráno zavolám, co mi chybí na kotelně, a odpoledne to mám na stavbě
            v Hluboké. Kvůli tomuhle jezdím do Budějovic ke Giengerovi, ne do
            hobbymarketu.“
          </p>
          <cite>— topenářská firma, smluvní partner GC skupiny</cite>
        </blockquote>

        <div className="duvera-bonus">
          <div>
            <h3>Bonusový program GC skupiny</h3>
            <p>
              Za odebrané zboží sbíráte body a měníte je za nářadí a odměny.
              Věrnost se u nás počítá — doslova.
            </p>
          </div>
          <div>
            <h3>E-shop pro montážní firmy</h3>
            <p>
              Skladové zásoby, ceny, dodací listy i faktury online. Objednáte
              večer z auta, ráno nakládáte.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

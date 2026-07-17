import { Tally, BalanceRule } from "./motion";

const services = [
  {
    n: "01",
    title: "Střední a velké korporace",
    desc: "Účetní závěrka připravená na audit, konsolidace, DPH i reporting pro mateřskou společnost — bez překvapení na konci roku.",
    value: 12,
  },
  {
    n: "02",
    title: "Malé korporace a OSVČ",
    desc: "Kompletní účetnictví, daňová evidence, mzdy a přiznání. Vy podnikáte, čísla i lhůty pohlídáme za vás.",
    value: 8,
  },
  {
    n: "03",
    title: "SVJ a pronajímatelé",
    desc: "Vyúčtování, rozúčtování nákladů a přiznání k dani z příjmu z nájmu — přehledně a v termínu.",
    value: 6,
  },
  {
    n: "04",
    title: "Lékaři a zdravotnická zařízení",
    desc: "Daňová optimalizace pro praxe a ambulance, odpisy přístrojů i leasingy přístrojové techniky.",
    value: 9,
  },
];

const balance = [
  { label: "Na trhu od", value: 1992, group: false, suffix: "" },
  { label: "Let nepřetržité praxe", value: 32, group: true, suffix: "" },
  { label: "Aktivních klientů", value: 640, group: true, suffix: "" },
  { label: "Daňových přiznání ročně", value: 5300, group: true, suffix: "" },
  { label: "Poradců a účetních v týmu", value: 11, group: true, suffix: "" },
];

export default function Page() {
  return (
    <main className="page">
      {/* ——— HERO ——— */}
      <section className="band band--hero" aria-labelledby="hero-title">
        <div className="wrap hero-grid">
          <div className="hero-lede">
            <p className="brandmark">
              <span className="brandmark-name">SMETANOVÁ &amp; PARTNERS</span>
              <span className="brandmark-sub">s.r.o. · daňové poradenství · Olomouc</span>
              <span className="rule2" aria-hidden="true" />
            </p>

            <p className="eyebrow eyebrow--paper">Otevřená kniha od roku 1992</p>
            <h1 id="hero-title" className="hero-title">
              <span className="hero-line l1">Účetnictví</span>{" "}
              <span className="hero-line l2">a daně,</span>{" "}
              <span className="hero-line l3">uzavřené</span>{" "}
              <span className="hero-line l4">na haléř přesně.</span>
            </h1>
            <p className="hero-sub">
              Už tři desítky let vedeme firmám i lékařům z Olomouce a okolí
              čisté, uzavřené knihy. Technologie zrychlí administrativu — každou
              položku ale pořád kontroluje zkušený daňový poradce.
            </p>
          </div>

          <aside className="hero-fig" aria-label="Roky praxe kanceláře">
            <p className="hero-fig-label">Praxe kanceláře</p>
            <p className="hero-fig-num">
              <Tally value={32} />
              <span className="hero-fig-unit">let</span>
            </p>
            <BalanceRule className="hero-fig-rule" />
            <p className="hero-fig-note">daňového poradenství pod jednou střechou</p>
          </aside>
        </div>
      </section>

      {/* ——— SLUŽBY / LEDGER ——— */}
      <section className="band band--ledger" aria-labelledby="svc-title">
        <div className="wrap">
          <header className="band-head">
            <p className="eyebrow">Naše agendy</p>
            <h2 id="svc-title">Pro koho vedeme knihy</h2>
            <p className="band-head-note">
              Každý typ klienta má vlastní řádek v naší knize. Vpravo počet
              agend, které za vás průběžně sledujeme.
            </p>
          </header>

          <ol className="ledger">
            {services.map((s) => (
              <li className="ledger-row" key={s.n}>
                <span className="ledger-n">{s.n}</span>
                <div className="ledger-body">
                  <h3 className="ledger-title">{s.title}</h3>
                  <p className="ledger-desc">{s.desc}</p>
                </div>
                <div className="ledger-fig">
                  <span className="ledger-fig-num">
                    <Tally value={s.value} />
                  </span>
                  <span className="ledger-fig-unit">agend</span>
                </div>
              </li>
            ))}
          </ol>

          <div className="ledger-total">
            <span className="ledger-total-label">V průběžné péči kanceláře</span>
            <div className="ledger-fig">
              <span className="ledger-fig-num ledger-fig-num--total">
                <Tally value={35} />
              </span>
              <span className="ledger-fig-unit">agend</span>
            </div>
          </div>
          <BalanceRule className="ledger-rule" label="Knihy uzavřeny" />
        </div>
      </section>

      {/* ——— DŮVĚRA / ROZVAHA ——— */}
      <section className="band band--trust" aria-labelledby="trust-title">
        <div className="wrap trust-grid">
          <div className="trust-lede">
            <p className="eyebrow">O kanceláři</p>
            <h2 id="trust-title" className="trust-title">
              Moderní technologie,{" "}
              <span className="trust-title-accent">lidská expertíza.</span>
            </h2>
            <p className="trust-text">
              Kancelář vznikla v roce 1992 a od té doby se z ní stal tým
              zkušených daňových poradců a účetních. Doklady předáváte pohodlně
              online, umělá inteligence za nás vytřídí rutinu — a nám tak zbývá
              víc času přemýšlet nad vaší konkrétní situací.
            </p>
            <p className="trust-quote">
              „S námi je vaše ekonomika v bezpečných rukou.“
            </p>
          </div>

          <div className="rozvaha" aria-label="Kancelář v číslech">
            <p className="rozvaha-head">Kancelář v číslech</p>
            <dl className="rozvaha-list">
              {balance.map((b) => (
                <div className="rozvaha-row" key={b.label}>
                  <dt>{b.label}</dt>
                  <dd>
                    <Tally value={b.value} group={b.group} />
                  </dd>
                </div>
              ))}
            </dl>
            <BalanceRule className="rozvaha-rule" label="Zůstatek sedí" />
          </div>
        </div>
      </section>
    </main>
  );
}

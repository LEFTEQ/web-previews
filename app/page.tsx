// LAMIA – správa nemovitostí s.r.o. | Ostrava
// Server component. Facade Grid signature. No footer/CTA (studio appends).

const COLS = 10;
const ROWS = 6;

// Dusk facade: 1 = lit window, 0 = dark. Denser toward the bottom floors.
const PATTERN = [
  "1001000100",
  "0100101001",
  "1010010010",
  "0101101011",
  "1101011101",
  "1011101111",
];

type Cell = { key: string; lit: boolean; delay: number };

function buildFacade(): Cell[] {
  const cells: Cell[] = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const lit = PATTERN[r][c] === "1";
      // bottom rows illuminate first
      const delay = (ROWS - 1 - r) * 0.14 + (c % 4) * 0.06 + 0.15;
      cells.push({ key: `${r}-${c}`, lit, delay });
    }
  }
  return cells;
}

const services = [
  {
    tag: "Ekonomika",
    title: "Vyúčtování, kterému rozumíte",
    body: "Roční vyúčtování služeb, evidence plateb a nájmů, upomínky a přehledy, do kterých můžete kdykoli nahlédnout. Žádné čekání na to, jak dům hospodaří.",
  },
  {
    tag: "Technika",
    title: "Dům v provozu, i o půlnoci",
    body: "Povinné revize, odečty měřidel, plán oprav a havarijní služba non-stop — od výtahu přes rozvody až po odvětrávací šachty. Poruchu řešíme dřív, než se rozroste.",
  },
  {
    tag: "Administrativa",
    title: "Schůze i papíry za vás",
    body: "Příprava a vedení shromáždění SVJ a členských schůzí družstva, zápisy, komunikace s úřady a vymáhání dluhů. Vy hlasujete, my hlídáme lhůty.",
  },
  {
    tag: "Provoz",
    title: "Aby dům běžel sám",
    body: "Úklid společných prostor, drobné opravy, výběr a kontrola dodavatelů — a jeden konkrétní správce, který to celé drží pohromadě a zvedá telefon.",
  },
];

const stats = [
  { num: "370", label: "domů ve správě" },
  { num: "7000", label: "bytů pod dohledem" },
  { num: "33", label: "let v Ostravě" },
  { num: "4", label: "města a obce" },
];

const portfolio = [
  { name: "SVJ", full: "společenství vlastníků", pct: 56, color: "var(--steel)" },
  { name: "BD", full: "bytová družstva", pct: 38, color: "var(--amber)" },
  { name: "Magistrát", full: "městské byty", pct: 3, color: "var(--gold)" },
  { name: "Ostatní", full: "fyzické a právnické osoby", pct: 3, color: "var(--concrete)" },
];

export default function Page() {
  const facade = buildFacade();

  return (
    <main>
      {/* ——— HERO: the facade lights up at dusk ——— */}
      <section className="band band--hero">
        <div
          className="facade"
          aria-hidden="true"
          style={{ ["--cols" as string]: COLS, ["--rows" as string]: ROWS }}
        >
          {facade.map((cell) => (
            <span
              key={cell.key}
              className={cell.lit ? "win win--lit" : "win"}
              style={cell.lit ? { animationDelay: `${cell.delay}s` } : undefined}
            />
          ))}
        </div>

        <div className="hero-scrim" aria-hidden="true" />

        <div className="wrap hero-inner">
          <header className="brand">
            <span className="brand-mark" aria-hidden="true">
              <i /><i /><i /><i className="brand-mark-lit" />
            </span>
            <span className="brand-name">
              LAMIA
              <small>správa nemovitostí</small>
            </span>
          </header>

          <p className="eyebrow">Správa nemovitostí v Ostravě od roku 1992</p>

          <h1 className="hero-title">
            Staráme se o<br />
            <span className="hero-num">7000</span> domovů.
          </h1>

          <p className="lede">
            Společenství vlastníků, bytová družstva i jednotlivé domy — od
            Zábřehu po Čeladnou. Přes 370 domů, 7000 bytů a jeden tým, který
            večer zajistí, aby se v Ostravě svítilo.
          </p>

          <p className="hero-foot">Ostrava-Zábřeh · provozovna Poruba</p>
        </div>
      </section>

      {/* ——— SERVICES: four domains of house management ——— */}
      <section className="band band--light" aria-labelledby="svc-h">
        <div className="wrap">
          <p className="eyebrow eyebrow--dark">Čtyři domény jedné správy</p>
          <h2 id="svc-h" className="sec-title">Co pro váš dům zařídíme</h2>
          <p className="sec-lede">
            Kompletní správa pod jednou střechou — peníze, technika, papíry i
            každodenní provoz. Vy víte, koho volat; my víme, co dělat.
          </p>

          <ul className="svc-grid">
            {services.map((s) => (
              <li key={s.tag} className="svc reveal">
                <span className="svc-tag">{s.tag}</span>
                <h3 className="svc-title">{s.title}</h3>
                <p className="svc-body">{s.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— TRUST: 33 years, stats as lit windows, portfolio as window band ——— */}
      <section className="band band--dark" aria-labelledby="about-h">
        <div className="wrap">
          <p className="eyebrow">O nás</p>
          <h2 id="about-h" className="sec-title sec-title--light">
            Třicet tři let v jednom městě, dům po domu.
          </h2>
          <p className="sec-lede sec-lede--light">
            Založeni 1992. Sídlíme v Ostravě-Zábřehu, provozovnu máme v Porubě.
            Většinu domů spravujeme přímo ve městě, staráme se ale i o byty v
            Petřvaldu, Frýdku-Místku a na Čeladné. Klienti u nás zůstávají,
            protože správce znají jménem.
          </p>

          <ul className="stat-grid" aria-label="Klíčová čísla">
            {stats.map((s) => (
              <li key={s.label} className="stat reveal">
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </li>
            ))}
          </ul>

          <div className="brk reveal">
            <h3 className="brk-title">Koho spravujeme</h3>
            <div className="brk-band" role="presentation" aria-hidden="true">
              {portfolio.map((p) => (
                <span
                  key={p.name}
                  className="brk-seg"
                  style={{ flexGrow: p.pct, backgroundColor: p.color }}
                >
                  {p.pct >= 10 ? <b>{p.pct}\u00A0%</b> : null}
                </span>
              ))}
            </div>
            <ul className="brk-legend">
              {portfolio.map((p) => (
                <li key={p.name} className="brk-item">
                  <span className="brk-swatch" style={{ backgroundColor: p.color }} aria-hidden="true" />
                  <span className="brk-name">{p.name}</span>
                  <span className="brk-full">{p.full}</span>
                  <span className="brk-pct">{p.pct}\u00A0%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

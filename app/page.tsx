import { HeroMatchChip } from "./motion";

const services = [
  {
    title: "Celolak vozu",
    code: "MET. SAPPHIRE · PPG C-2340 · 2K",
    color: "#234a8c",
    dark: true,
    desc: "Kompletní přelak karoserie v komorě. Od odmaštění a broušení přes plnič až po dvě vrstvy barvy a lesklý clearcoat.",
  },
  {
    title: "Lokální oprava laku",
    code: "CALIPER RED · PPG C-1148 · 2K",
    color: "#cf3a2c",
    dark: true,
    desc: "Škrábanec, odlétlý kámen nebo přisazený díl. Odstín naskenujeme a slijeme tak, že přechod na plechu nepoznáte.",
  },
  {
    title: "Motocykly a rámy",
    code: "MASKING OCHRE · PPG C-0870 · BC",
    color: "#d6a94a",
    dark: false,
    desc: "Nádrže, blatníky, rámy i plastové kryty. Barvu i metalízu položíme na díl sundaný z motorky.",
  },
  {
    title: "Plastové a konstrukční díly",
    code: "GRAPHITE PRIMER · PPG C-4110 · EP",
    color: "#1b1e24",
    dark: true,
    desc: "Nárazníky, spoilery a interiérové výplně. Speciální primer na plast drží lak i po letech na silnici.",
  },
  {
    title: "Karosářské rovnání",
    code: "SANDING GREY · PPG C-6021 · FILL",
    color: "#8b9199",
    dark: true,
    desc: "Rovnání plechu po nehodě, výměna dílů, tmelení a příprava pod lak. Vrátíme vozu geometrii i tvar.",
  },
  {
    title: "Klempířské práce",
    code: "STEEL BLUE · PPG C-2210 · 2K",
    color: "#2f5fa8",
    dark: true,
    desc: "Svařování a klempířina karoserie. Prorezlé nebo pomačkané části nahradíme a připravíme k lakování.",
  },
];

const proof = [
  {
    token: "12+",
    label: "let za stříkací pistolí",
    code: "PROVOZ OD 2008 · LIBEREC",
  },
  {
    token: "PPG",
    label: "certifikovaný lakovací systém",
    code: "MIX · 2K CLEARCOAT",
  },
  {
    token: "0 Kč",
    label: "za papírování s pojišťovnou",
    code: "TOTÁL · POJISTKA · SERVIS",
  },
];

export default function Page() {
  return (
    <main className="site">
      <header className="masthead">
        <div className="wrap masthead-in">
          <a className="wordmark" href="#top">
            <span className="wordmark-chip" aria-hidden="true" />
            <span className="wordmark-text">
              <span className="wordmark-name">Autolakovna&nbsp;Říha</span>
              <span className="wordmark-sub mono">LAK &amp; KAROSERIE · LIBEREC</span>
            </span>
          </a>
          <p className="masthead-cert mono">PPG&nbsp;CERTIFIED · 2K&nbsp;SYSTEM</p>
        </div>
      </header>

      <section className="band hero" id="top">
        <div className="wrap hero-in">
          <div className="hero-copy">
            <p className="eyebrow mono">Vzorník lakýrny · odstín na míru</p>
            <h1 className="hero-title">
              Každý lak <span className="hero-title-accent">začíná</span> shodou
              odstínu.
            </h1>
            <p className="lede">
              Autolakovna Martina Říhy v Liberci. Přes dvanáct let mícháme,
              tónujeme a stříkáme laky PPG — od lokální opravy laku po celolak.
              Odstín vašeho vozu trefíme tak, že přechod nepoznáte.
            </p>
            <ul className="hero-meta mono">
              <li>12+ LET V PROVOZU</li>
              <li>PPG 2K SYSTÉM</li>
              <li>POJIŠŤOVNY BEZ STAROSTÍ</li>
            </ul>
          </div>
          <div className="hero-chip">
            <HeroMatchChip />
            <p className="hero-chip-note mono">
              Živá zkouška shody odstínu — jeden nástřik, tři vzorky.
            </p>
          </div>
        </div>
      </section>

      <section className="band deck" aria-labelledby="deck-h">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow mono">Vzorník služeb</p>
            <h2 id="deck-h" className="section-title">
              Vyberte si z vějíře. Každá práce má svůj odstín i recepturu.
            </h2>
          </div>
          <div className="chip-grid">
            {services.map((s) => (
              <article className="chip" key={s.title}>
                <div
                  className={"chip-swatch" + (s.dark ? " is-dark" : "")}
                  style={{ background: s.color }}
                >
                  <span className="chip-swatch-code mono">{s.code}</span>
                </div>
                <div className="chip-body">
                  <h3 className="chip-name">{s.title}</h3>
                  <p className="chip-desc">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band proof" aria-labelledby="proof-h">
        <div className="wrap proof-in">
          <div className="proof-copy">
            <p className="eyebrow mono">Proč Říha</p>
            <h2 id="proof-h" className="section-title">
              Certifikovaná lakovna, ne garáž za barákem.
            </h2>
            <p className="proof-text">
              Martin Říha stříká laky v Liberci od roku 2008. Pracujeme výhradně
              na systémech PPG, mícháme odstíny podle kódu z výrobního štítku i
              podle přiloženého vzorku a s pojišťovnami řešíme totálky i drobné
              škody za vás.
            </p>
          </div>
          <div className="proof-grid">
            {proof.map((p) => (
              <article className="metric" key={p.token}>
                <span className="metric-token">{p.token}</span>
                <span className="metric-label">{p.label}</span>
                <span className="metric-code mono">{p.code}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

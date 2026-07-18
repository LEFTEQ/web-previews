const services = [
  {
    n: "01",
    title: "Daňové poradenství",
    body: "DPH, daň z příjmů, silniční i majetkové daně. Hlídáme termíny za vás a hledáme, kde se dá legálně ušetřit — dřív, než přijde upozornění z finančního úřadu.",
  },
  {
    n: "02",
    title: "Vedení účetnictví",
    body: "Podvojné účetnictví i daňová evidence kompletně v cloudu. Do svých čísel vidíte průběžně, ne až po roce u závěrky.",
  },
  {
    n: "03",
    title: "Mzdová agenda",
    body: "Výplaty, odvody, nemocenské i exekuce. Vaši lidé dostanou pásku včas a bez chyb, vy máte odvody odeslané na čas.",
  },
  {
    n: "04",
    title: "Audit",
    body: "Ověření účetní závěrky a konsolidací. Podklady, kterým uvěří banka, investor i vaši společníci.",
  },
  {
    n: "05",
    title: "Personální poradenství",
    body: "Pracovní smlouvy, nábor a pracovněprávní minimum. Aby personalistika nebrzdila růst, ale držela ho v pořádku.",
  },
  {
    n: "06",
    title: "Ekonomické poradenství",
    body: "Cash-flow, rozpočty a reporting pro majitele. Rozhodujte se podle čísel, ne odhadem od stolu.",
  },
];

const roster = [
  {
    role: "Daňoví poradci",
    note: "Certifikovaní členové Komory daňových poradců ČR",
  },
  {
    role: "Účetní tým",
    note: "Podvojné účetnictví i daňová evidence, kompletně v cloudu",
  },
  {
    role: "Mzdová účtárna",
    note: "Mzdy a odvody pro desítky firem každý měsíc, bez skluzu",
  },
  {
    role: "Auditoři",
    note: "Ověření účetních závěrek a konsolidovaných výkazů",
  },
  {
    role: "Ekonomové",
    note: "Reporting, plánování a cash-flow pro majitele firem",
  },
  {
    role: "Tady může být tvoje místo",
    note: "Hledáme kolegy, kteří chtějí růst v proudu spolu s námi",
    open: true,
  },
];

const pillars = [
  { k: "Férovost", v: "Řekneme rovnou, co dává smysl — i když to znamená menší fakturu." },
  { k: "Partnerství", v: "Nejsme dodavatel na dálku. Známe vaše čísla i vaše plány." },
  { k: "Profesionalita", v: "Sazby a lhůty držíme aktuální k roku 2025. Nic nezůstává na rok 2019." },
];

function ProudLines({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 620"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <g className="proud-group">
        <path pathLength={1} className="pl pl1" d="M-40 150 C 180 90, 340 210, 560 150 S 940 70, 1240 168" />
        <path pathLength={1} className="pl pl2" d="M-40 250 C 210 200, 360 320, 620 250 S 980 190, 1240 278" />
        <path pathLength={1} className="pl pl3" d="M-40 350 C 160 300, 420 420, 640 340 S 1010 300, 1240 372" />
        <path pathLength={1} className="pl pl4" d="M-40 450 C 240 400, 380 520, 660 440 S 1000 410, 1240 470" />
        <path pathLength={1} className="pl pl5" d="M-40 540 C 200 500, 460 600, 700 520 S 1030 500, 1240 556" />
      </g>
    </svg>
  );
}

function Divider() {
  return (
    <svg className="divider" viewBox="0 0 320 24" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path d="M0 12 C 40 2, 70 22, 110 12 S 190 2, 230 12 S 300 22, 320 10" />
    </svg>
  );
}

export default function Page() {
  return (
    <main className="page">
      <header className="hero">
        <ProudLines className="proud" />
        <div className="hero-bar">
          <span className="wordmark" aria-label="FPP Consulting">
            <span className="wordmark-mark">FPP</span>
            <span className="wordmark-sub">Consulting</span>
          </span>
          <span className="hero-locale">Daňový poradce · Olomouc</span>
        </div>

        <div className="hero-inner">
          <p className="eyebrow">Aktuální k roku 2025 · již 19. rok v oboru</p>
          <h1 className="hero-title">
            Podnikání je
            <br />
            neustálý <span className="flow">pohyb</span>
          </h1>
          <p className="lede">
            V daních a účetnictví vás má provázet partner, který sám nestojí na
            místě. Hledáme rychlejší a efektivnější cesty — vy se věnujete tomu,
            co vás žene dopředu.
          </p>

          <dl className="hero-stats">
            <div className="stat">
              <dt>V oboru</dt>
              <dd>19 let</dd>
            </div>
            <div className="stat">
              <dt>Sazby &amp; lhůty</dt>
              <dd>k 2025</dd>
            </div>
            <div className="stat">
              <dt>Sídlo</dt>
              <dd>Olomouc</dd>
            </div>
          </dl>
        </div>
      </header>

      <section className="services" aria-labelledby="services-title">
        <div className="section-head">
          <p className="section-label">Katalog služeb</p>
          <Divider />
          <h2 id="services-title" className="section-title">
            Jak provedeme vaši firmu proudem daní
          </h2>
          <p className="section-intro">
            Šest oblastí, jeden tým. Berete si celý balík, nebo jen to, co zrovna
            potřebujete — účetnictví, mzdy i poradenství táhnou za jeden provaz.
          </p>
        </div>

        <ol className="card-grid">
          {services.map((s) => (
            <li key={s.n} className="card">
              <span className="card-num">{s.n}</span>
              <h3 className="card-title">{s.title}</h3>
              <p className="card-body">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="team" aria-labelledby="team-title">
        <ProudLines className="proud proud-team" />
        <div className="team-inner">
          <div className="section-head">
            <p className="section-label section-label-light">Lidé v FPP</p>
            <Divider />
            <h2 id="team-title" className="section-title section-title-light">
              Lidé, kteří vás udrží v proudu
            </h2>
            <p className="section-intro section-intro-light">
              Tým FPP Consulting tvoří specialisté s roky praxe v daních,
              účetnictví a mzdách. Sázíme na digitální nástroje, které klientům
              spoří čas i náklady — a na to, že se každý den učíme něco nového.
            </p>
          </div>

          <ul className="roster">
            {roster.map((r, i) => (
              <li key={r.role} className={"roster-row" + (r.open ? " roster-open" : "")}>
                <span className="roster-idx">{r.open ? "→" : String(i + 1).padStart(2, "0")}</span>
                <span className="roster-role">{r.role}</span>
                <span className="roster-note">{r.note}</span>
              </li>
            ))}
          </ul>

          <div className="pillars">
            {pillars.map((p) => (
              <div key={p.k} className="pillar">
                <h3 className="pillar-k">{p.k}</h3>
                <p className="pillar-v">{p.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

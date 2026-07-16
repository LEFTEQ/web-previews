function EnamelArc({ className, draw = false }: { className?: string; draw?: boolean }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="enamel" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#bfe3d5" />
          <stop offset="0.55" stopColor="#12564d" />
          <stop offset="1" stopColor="#7f8a93" />
        </linearGradient>
      </defs>
      <path
        className={draw ? "arc-draw" : undefined}
        d="M4,30 C300,124 900,124 1196,30"
        fill="none"
        stroke="url(#enamel)"
        strokeWidth="10"
        strokeLinecap="round"
        pathLength={1}
      />
    </svg>
  );
}

const hours = [
  { day: "Pondělí", times: "7.30–12.30 · 13.00–16.00" },
  { day: "Úterý", times: "7.30–12.30 · 13.00–16.00" },
  { day: "Středa", times: "7.30–12.30 · 13.00–15.00" },
  { day: "Čtvrtek", times: "7.30–12.30 · 13.00–15.00" },
  { day: "Pátek", times: "7.30–12.30" },
];

const services = [
  "Vstupní vyšetření",
  "Preventivní péče",
  "Záchovná stomatologie",
  "Endodoncie",
  "Protetika",
  "Extrakce",
  "Dětská stomatologie",
];

const prices = [
  { name: "Vstupní vyšetření", price: "Hradí pojišťovna", covered: true },
  { name: "Preventivní prohlídka", price: "Hradí pojišťovna", covered: true },
  { name: "RTG – panorama i intraorální", price: "Hradí pojišťovna", covered: true },
  { name: "Konzultace léčebného plánu", price: "od 1 500 Kč", covered: false },
  { name: "Fotokompozitní výplň", price: "od 2 500 Kč", covered: false },
  { name: "Endodontické ošetření", price: "od 5 000 Kč", covered: false },
  { name: "Provizorní korunka", price: "od 2 000 Kč", covered: false },
  { name: "Keramická korunka", price: "od 9 000 Kč", covered: false },
];

const why = [
  {
    label: "Celá rodina",
    title: "Kompletní péče na jednom místě",
    body: "Od první prohlídky u dětí až po protetiku pro seniory — citlivě a bez zbytečného odkládání.",
  },
  {
    label: "Přístroje",
    title: "Moderní a šetrné postupy",
    body: "Pracujeme s nejnovějšími přístroji a metodami tak, aby bylo ošetření co nejefektivnější a co nejméně nepříjemné.",
  },
  {
    label: "Váš čas",
    title: "Termín na konkrétní hodinu",
    body: "Návštěvy plánujeme individuálně a na přesný čas — v čekárně se nezdržíte déle, než je nutné.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#top">
          <span className="wordmark-a">stoma</span>
          <span className="wordmark-dot" aria-hidden="true" />
          <span className="wordmark-b">holice</span>
        </a>
        <a className="topbar-phone" href="tel:+420606506107">
          606 506 107
        </a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-grid">
          <div className="hero-display">
            <p className="eyebrow">Zubní ordinace · Olomouc-Holice</p>
            <h1 className="hero-title" id="hero-title">
              Zdravý úsměv
              <span className="hero-title-arc">
                začíná u nás
                <EnamelArc className="hero-arc" draw />
              </span>
            </h1>
            <p className="hero-lead">
              Rodinná zubní ordinace MDDr. Böhma a MDDr. Kotlantové. Spojujeme
              moderní stomatologii s klidným, ohleduplným přístupem — ať k nám
              chodíte bez obav.
            </p>
            <div className="hero-actions">
              <a className="btn-coral hero-cta" href="tel:+420606506107">
                Objednat se
              </a>
              <a className="btn-ghost" href="mailto:recepce@stomaholice.cz">
                Napsat recepci
              </a>
            </div>
          </div>

          <aside className="hero-side" aria-label="Ordinační doba a adresa">
            <div className="arch-panel">
              <p className="panel-label">Ordinační doba</p>
              <ul className="hours">
                {hours.map((h) => (
                  <li className="hours-row" key={h.day}>
                    <span className="hours-day">{h.day}</span>
                    <span className="hours-time">{h.times}</span>
                  </li>
                ))}
              </ul>
              <p className="panel-addr">
                Sladkovského 341/59
                <br />
                779 00 Olomouc
              </p>
            </div>
          </aside>
        </div>
      </section>

      <EnamelArc className="divider" />

      <section className="section" aria-labelledby="sluzby-title">
        <div className="section-head">
          <p className="eyebrow">Co u nás zvládneme</p>
          <h2 className="section-title" id="sluzby-title">
            Služby a orientační ceník
          </h2>
          <p className="section-lead">
            Většinu preventivní a záchovné péče hradí veřejné zdravotní
            pojištění. U složitějších výkonů máte cenu předem — sestavíme ji do
            individuálního léčebného plánu po vstupním vyšetření.
          </p>
        </div>

        <ul className="tags">
          {services.map((s) => (
            <li className="tag" key={s}>
              {s}
            </li>
          ))}
        </ul>

        <div className="arch-panel price-panel">
          <ul className="price-list">
            {prices.map((p) => (
              <li className="price-row" key={p.name}>
                <span className="price-name">{p.name}</span>
                <span className="price-dots" aria-hidden="true" />
                <span className={p.covered ? "price-val covered" : "price-val"}>
                  {p.price}
                </span>
              </li>
            ))}
          </ul>
          <p className="price-note">
            Platba kartou i hotově. Spolupracujeme s běžnými zdravotními
            pojišťovnami.
          </p>
        </div>
      </section>

      <EnamelArc className="divider" />

      <section className="section" aria-labelledby="proc-title">
        <div className="section-head">
          <p className="eyebrow">Proč k nám</p>
          <h2 className="section-title" id="proc-title">
            Péče, ke které se rádi vracíte
          </h2>
        </div>

        <div className="why-grid">
          {why.map((c) => (
            <article className="arch-panel why-card" key={c.title}>
              <p className="panel-label">{c.label}</p>
              <h3 className="why-title">{c.title}</h3>
              <p className="why-body">{c.body}</p>
            </article>
          ))}
        </div>

        <div className="about">
          <div className="about-text">
            <p className="eyebrow eyebrow-light">O nás</p>
            <p className="about-lead">
              Věříme, že návštěva zubaře dnes nemusí být stres. Chceme, aby od
              nás pacient odcházel se zdravým chrupem — a bez nutnosti častých
              opakovaných zákroků.
            </p>
            <p className="about-body">
              Oba jsme vystudovali Lékařskou fakultu Univerzity Palackého v
              Olomouci, praxi jsme sbírali v Hradci Králové a v Pardubicích
              napříč obory stomatologie. Ve vzdělávání pokračujeme dál —
              kvalitní péče stojí na znalostech, které se stále rozvíjejí.
            </p>
          </div>
          <ul className="team">
            <li className="team-member">
              <span className="team-name">MDDr. Filip Böhm</span>
              <span className="team-role">Zubní lékař</span>
              <a className="team-phone" href="tel:+420606506107">
                606 506 107
              </a>
            </li>
            <li className="team-member">
              <span className="team-name">MDDr. Lucie Kotlantová</span>
              <span className="team-role">Zubní lékařka</span>
              <a className="team-phone" href="tel:+420606506968">
                606 506 968
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

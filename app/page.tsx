import type { CSSProperties } from "react";

const sluzby = [
  {
    name: "Záda a šíje",
    desc: "Cílené uvolnění nejvíc namáhaných míst po dni u počítače.",
    cas: "30 min",
    cena: "450 Kč",
  },
  {
    name: "Klasická celotělová",
    desc: "Poctivé prohnětení celého těla klasickou technikou.",
    cas: "60 min",
    cena: "850 Kč",
  },
  {
    name: "Sportovní a rekondiční",
    desc: "Pro svaly po zátěži i prevenci — pevnější, svižnější tempo.",
    cas: "60 min",
    cena: "890 Kč",
  },
  {
    name: "Relaxační s lávovými kameny",
    desc: "Prohřátí horkými kameny, pomalé tempo, hluboké zklidnění.",
    cas: "75 min",
    cena: "1 050 Kč",
  },
  {
    name: "Reflexní masáž chodidel",
    desc: "Práce s reflexními body, úleva, kterou cítíte v celém těle.",
    cas: "45 min",
    cena: "590 Kč",
  },
  {
    name: "Těhotenská masáž",
    desc: "Šetrné uvolnění zad a nohou v bezpečných polohách.",
    cas: "60 min",
    cena: "790 Kč",
  },
];

const pilire = [
  {
    nadpis: "Nasloucháme",
    text: "Než sáhneme na záda, ptáme se, kde to bolí a jak žijete. Masáž pak sedne na míru, ne podle šablony.",
  },
  {
    nadpis: "Náhradní plnění",
    text: "Zaměstnáváte lidi se zdravotním znevýhodněním? Naše služby si můžete započítat do náhradního plnění.",
  },
  {
    nadpis: "Dárkové poukazy",
    text: "Darujte klid, který přetrvá. Poukaz vystavíme na konkrétní masáž i na volnou částku.",
  },
  {
    nadpis: "Příspěvky pojišťoven",
    text: "Poradíme, jaké benefity vaší zdravotní pojišťovny na masáže a cvičení letos využijete.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="brand" href="#uvod">
          maonel<span className="brand-dot">.</span>
        </a>
        <span className="topbar-meta">Masáže · Plzeň · denně 8–20</span>
      </header>

      <section className="hero" id="uvod">
        <div className="hero-inner">
          <p className="eyebrow hero-eyebrow">Masérské studio · plzeňské nábřeží u Radbuzy</p>
          <h1 className="hero-title">
            Nadechnout.
            <br />
            Povolit.
            <br />
            <span className="hero-title-accent">Odejít lehčí.</span>
          </h1>

          <svg
            className="hero-line"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              pathLength={1}
              d="M0,86 C160,44 320,106 500,74 C680,42 840,102 1010,64 C1110,44 1162,72 1200,58"
            />
          </svg>

          <p className="hero-sub">
            Klasická, sportovní i relaxační masáž od lidí, kteří vám naslouchají.
            Malé studio kousek od řeky, kde se po zádech postaráme i o hlavu.
          </p>

          <div className="hero-actions">
            <a className="btn" href="#sluzby">
              Vybrat masáž
              <svg className="btn-arrow" viewBox="0 0 40 16" aria-hidden="true">
                <path d="M0,8 H32 M26,3 L34,8 L26,13" />
              </svg>
            </a>
            <span className="hero-note">Objednávejte denně 8:00–20:00, telefonicky i osobně na recepci.</span>
          </div>
        </div>
      </section>

      <section className="section services" id="sluzby">
        <div className="wrap">
          <header className="section-head">
            <p className="eyebrow">Nabídka &amp; ceník</p>
            <h2 className="section-title">Co pro vaše záda uděláme</h2>
            <Rule tone="dark" />
          </header>

          <ul className="svc-list">
            {sluzby.map((s) => (
              <li className="svc" key={s.name}>
                <div className="svc-main">
                  <h3 className="svc-name">{s.name}</h3>
                  <p className="svc-desc">{s.desc}</p>
                </div>
                <div className="svc-meta">
                  <span className="svc-time">{s.cas}</span>
                  <span className="svc-price">{s.cena}</span>
                </div>
              </li>
            ))}
          </ul>
          <p className="svc-foot">Ceny jsou orientační. Za delší i párové masáže se domluvíme na recepci.</p>
        </div>
      </section>

      <section className="section about" id="o-nas">
        <div className="wrap about-grid">
          <div className="about-copy">
            <p className="eyebrow eyebrow-light">O nás</p>
            <h2 className="section-title">Malé studio, kde vás znají jménem</h2>
            <Rule tone="light" />
            <p className="about-lead">
              Vznikli jsme kvůli jediné věci — aby vám po odchodu bylo líp na těle
              i na duši. V týmu potkáte lidi pozitivní, veselé a ochotné vám
              naslouchat. Fyzioterapie, masáže i cvičení pod jednou střechou na
              plzeňském nábřeží.
            </p>

            <ul className="pillars">
              {pilire.map((p) => (
                <li className="pillar" key={p.nadpis}>
                  <h3 className="pillar-title">{p.nadpis}</h3>
                  <p className="pillar-text">{p.text}</p>
                </li>
              ))}
            </ul>

            <figure className="quote">
              <blockquote>
                „Po roce u počítače mi domasírovali záda tak, že jsem poprvé za
                dlouho spala v klidu. A hlavně — nikam nespěchali.“
              </blockquote>
              <figcaption>— Jana K., stálá klientka z Plzně</figcaption>
            </figure>
          </div>

          <aside className="about-side">
            <div className="plan-card">
              <p className="plan-label">Naše studio, jednou linkou</p>
              <svg className="plan" viewBox="0 0 420 250" aria-hidden="true">
                <path d="M14,34 L14,222 L406,222 L406,34 Z" />
                <path d="M210,222 L210,120 L406,120" />
                <path d="M14,120 L120,120" />
                <path d="M44,72 q0,-16 16,-16 l58,0 q16,0 16,16 l0,58 q0,16 -16,16 l-58,0 q-16,0 -16,-16 Z" />
                <path d="M252,150 q0,-16 16,-16 l70,0 q16,0 16,16 l0,42 q0,16 -16,16 l-70,0 q-16,0 -16,-16 Z" />
                <path d="M150,34 L150,58" />
              </svg>
              <div className="plan-legend">
                <span>Masérna I</span>
                <span>Masérna II</span>
                <span>Recepce</span>
              </div>
            </div>

            <dl className="info">
              <div className="info-row">
                <dt>Kde nás najdete</dt>
                <dd>Ukázková 123, Plzeň</dd>
              </div>
              <div className="info-row">
                <dt>Otevřeno</dt>
                <dd>denně 8:00–20:00</dd>
              </div>
              <div className="info-row">
                <dt>Objednání</dt>
                <dd>telefonicky, e‑mailem nebo osobně na recepci</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>
    </main>
  );
}

function Rule({ tone }: { tone: "dark" | "light" }) {
  const style = { "--rule": tone === "light" ? "var(--honey)" : "var(--euca)" } as CSSProperties;
  return (
    <svg className="rule" viewBox="0 0 260 24" aria-hidden="true" style={style}>
      <path d="M0,15 C44,4 88,21 132,11 C176,2 216,19 260,8" />
    </svg>
  );
}

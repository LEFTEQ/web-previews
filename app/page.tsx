import type { ReactNode } from "react";

// --- Signature geometry: the parabolic signal-fan ---------------------------
// Nested arcs radiating from one corner — the geometry of waves striking a dish.

function HeroFan() {
  // corner at top-right (480,0); arcs radiate toward the grid
  const radii = [140, 230, 320, 410];
  return (
    <svg
      className="fan"
      viewBox="0 0 480 480"
      preserveAspectRatio="xMaxYMin slice"
      aria-hidden="true"
    >
      {radii.map((r, i) => (
        <path
          key={r}
          pathLength={100}
          className={i === radii.length - 1 ? "fan-arc fan-arc--live" : "fan-arc"}
          d={`M ${480 - r},0 A ${r},${r} 0 0,1 480,${r}`}
        />
      ))}
    </svg>
  );
}

function ArcGlyph() {
  // small section-marker: three nested arcs, corner at top-right
  const radii = [9, 17, 25];
  return (
    <svg className="glyph" viewBox="0 0 30 30" aria-hidden="true">
      {radii.map((r) => (
        <path
          key={r}
          className="glyph-arc"
          d={`M ${30 - r},1 A ${r},${r} 0 0,1 29,${r}`}
        />
      ))}
    </svg>
  );
}

function SignalBars({ level = 5 }: { level?: number }) {
  // tiny 'signal strength' meter beside service / contact items
  return (
    <span className="bars" aria-hidden="true" data-level={level}>
      {[1, 2, 3, 4, 5].map((n) => (
        <i key={n} className={n <= level ? "on" : ""} />
      ))}
    </span>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="sec-eyebrow">
      <ArcGlyph />
      <span>{children}</span>
    </p>
  );
}

const services = [
  {
    kicker: "Paraboly · LNB · přijímače",
    title: "Satelitní a anténní technika",
    body:
      "Najdeme družici, zaměříme parabolu a doladíme příjem. Instalujeme a seřizujeme konvertory (LNB), multipřepínače i satelitní receivery, aby signál zacvakl na zelenou.",
    level: 5,
  },
  {
    kicker: "LED · OLED · domácí audio",
    title: "Televizory a AV technika",
    body:
      "Diagnostika a oprava televizorů, receiverů a zesilovačů. Měníme podsvícení, napájecí i základní desky a konektory — s měřením, ne od oka.",
    level: 4,
  },
  {
    kicker: "Záruka i po záruce",
    title: "Autorizovaný servis",
    body:
      "Opravy podle servisních postupů výrobců a s originálními náhradními díly. Vedeme protokol o zásahu, ať víte přesně, co se s přístrojem dělo.",
    level: 5,
  },
  {
    kicker: "DVB-T2 · multiplexy · satelit",
    title: "Ladění a příjem",
    body:
      "Nastavíme ladění, dekódování a pořadí programů. Vyřešíme výpadky multiplexů i slabý příjem, aby běželo všechno, co vám patří.",
    level: 4,
  },
];

const trust = [
  {
    title: "Autorizace výrobců",
    body:
      "Značkové opravy podle originální dokumentace a s díly od výrobce — bez improvizace.",
    level: 5,
  },
  {
    title: "Domácí adresa: Ústí nad Labem",
    body:
      "Servis pro Ústecko a okolí. Přinesete přístroj, nebo dohodneme výjezd k parabole na střechu.",
    level: 5,
  },
  {
    title: "Měřením podložená diagnostika",
    body:
      "Sat-finder, měřák úrovně signálu a protokol o zásahu. Poznáte přesně, za co platíte.",
    level: 4,
  },
];

export default function Page() {
  return (
    <main id="top">
      <header className="topbar">
        <a className="brand" href="#top">
          <span className="brand-mark">RAMI</span>
          <span className="brand-sub">electronic</span>
          <ArcGlyph />
        </a>
        <nav className="topnav" aria-label="Sekce">
          <a href="#servis">Servis</a>
          <a href="#o-servisu">O servisu</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <HeroFan />
        <div className="wrap hero-inner">
          <p className="hero-eyebrow">Autorizovaný elektroservis · Ústí nad Labem</p>
          <h1 id="hero-title" className="h1">
            Ladíme signál, dokud{" "}
            <span className="hl">nezacvakne na zelenou</span>.
          </h1>
          <p className="lead">
            Satelitní a spotřební elektronika, opravená a rozjetá. Paraboly,
            přijímače, televizory i audio — zaměříme, změříme, opravíme.
          </p>

          <div className="meter" role="img" aria-label="Síla signálu: uzamčeno, 92 procent">
            <div className="meter-head">
              <span className="meter-label">Síla signálu</span>
              <span className="meter-val">92&nbsp;%</span>
            </div>
            <div className="meter-track">
              <div className="meter-fill" />
            </div>
            <span className="lock">● Signál uzamčen</span>
          </div>

          <div className="actions">
            <a className="btn" href="#kontakt">Objednat opravu</a>
            <a className="btn-ghost" href="#servis">Co opravíme</a>
          </div>
        </div>
      </section>

      <section id="servis" className="section" aria-labelledby="servis-title">
        <div className="wrap">
          <Eyebrow>Servis</Eyebrow>
          <h2 id="servis-title" className="sec-title">Co u nás opravíme</h2>
          <p className="sec-lead">
            Od paraboly na střeše po základní desku televizoru. Každý zásah
            měříme a dokumentujeme — přístroj vám vrátíme s jasným výsledkem.
          </p>

          <div className="grid">
            {services.map((s) => (
              <article className="card" key={s.title}>
                <div className="card-top">
                  <SignalBars level={s.level} />
                  <span className="card-kicker">{s.kicker}</span>
                </div>
                <h3 className="card-title">{s.title}</h3>
                <p className="card-body">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="o-servisu" className="section section--alt" aria-labelledby="trust-title">
        <div className="wrap trust-grid">
          <div className="trust-lead">
            <Eyebrow>O servisu</Eyebrow>
            <h2 id="trust-title" className="sec-title">
              Servis, který ví, kam parabolu otočit
            </h2>
            <p className="sec-lead">
              Rami Electronic je autorizovaný elektroservis z Ústí nad Labem.
              Roky opravujeme satelitní i spotřební techniku a k příjmu
              přistupujeme jako inženýři: nejdřív změřit, pak opravit. Žádné
              tipování — jen zpět chytající přístroj.
            </p>

            <ul className="trust-list">
              {trust.map((t) => (
                <li className="trust-item" key={t.title}>
                  <SignalBars level={t.level} />
                  <div>
                    <h3 className="trust-item-title">{t.title}</h3>
                    <p className="trust-item-body">{t.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <aside id="kontakt" className="contact" aria-label="Kontakt">
            <p className="contact-eyebrow">Kontakt</p>
            <p className="contact-note">
              Domluvíme příjem přístroje i výjezd k parabole.
            </p>
            <dl className="contact-list">
              <div className="contact-row">
                <dt>Telefon</dt>
                <dd><SignalBars level={5} /> —</dd>
              </div>
              <div className="contact-row">
                <dt>E-mail</dt>
                <dd><SignalBars level={5} /> —</dd>
              </div>
              <div className="contact-row">
                <dt>Adresa</dt>
                <dd><SignalBars level={4} /> —</dd>
              </div>
            </dl>
            <p className="contact-loc">Ústí nad Labem</p>
          </aside>
        </div>
      </section>
    </main>
  );
}

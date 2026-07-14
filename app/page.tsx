import type { CSSProperties } from "react";

const services = [
  {
    axis: "A",
    tag: "POZEMNÍ STAVBY",
    title: "Bytové a občanské budovy",
    body: "Bytové domy, administrativní a občanské stavby vedeme od výkopu po kolaudaci. Betonové konstrukce, zdění, kompletní hrubá stavba i dokončení.",
  },
  {
    axis: "B",
    tag: "REKONSTRUKCE",
    title: "Rekonstrukce a revitalizace",
    body: "Citlivé rekonstrukce činžovních domů i památkově chráněných objektů v centru Prahy — se statikou, kterou dům potřebuje, ne kterou je snazší udělat.",
  },
  {
    axis: "C",
    tag: "DEVELOPMENT",
    title: "Developerská výstavba",
    body: "Připravíme a zrealizujeme projekt na klíč: od pozemku a povolení přes výstavbu až po předání bytů novým majitelům.",
  },
  {
    axis: "D",
    tag: "INŽENÝRING",
    title: "Inženýrská činnost",
    body: "Projektová příprava, stavební dozor a řízení zakázek. Jeden odpovědný tým místo řetězu subdodavatelů, které nikdo nezná.",
  },
];

const data = [
  { k: "1991", v: "rok založení" },
  { k: "30+", v: "let v Praze" },
  { k: "1 tým", v: "od výkopu po předání" },
];

const refs = [
  { c: "Bytový dům", loc: "Praha 8 — Karlín" },
  { c: "Rekonstrukce činžovního domu", loc: "Praha 2 — Vinohrady" },
  { c: "Administrativní budova", loc: "Praha 5 — Smíchov" },
  { c: "Revitalizace vnitrobloku", loc: "Praha 3 — Žižkov" },
];

function delay(ms: number): CSSProperties {
  return { animationDelay: `${ms}ms` };
}

export default function Page() {
  return (
    <main className="page">
      <header className="nav reveal" style={delay(60)}>
        <a className="wordmark" href="#top" aria-label="ABP Holding — domů">
          <span className="wordmark-main">ABP</span>
          <span className="wordmark-sub">HOLDING · PRAHA</span>
        </a>
        <nav className="nav-links" aria-label="Hlavní">
          <a href="#sluzby">Co stavíme</a>
          <a href="#o-firme">O firmě</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <img
          className="hero-img"
          src="/hero.webp"
          alt="Rozestavěná budova s betonovou konstrukcí a lešením na stavbě v Praze"
        />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-scrim" aria-hidden="true" />

        <div className="sheet-stamp reveal" style={delay(120)} aria-hidden="true">
          <span>LIST S.00</span>
          <span>REV. 2025</span>
          <span>PRAHA · CZ</span>
        </div>

        <div className="hero-inner">
          <p className="eyebrow reveal" style={delay(160)}>
            <span className="tick" />STAVEBNÍ SPOLEČNOST · PRAHA · EST. 1991
          </p>
          <h1 className="hero-title">
            <span className="line reveal" style={delay(240)}>Pozemní stavby</span>
            <span className="line reveal" style={delay(340)}>a rekonstrukce v Praze —</span>
            <span className="line reveal hl" style={delay(440)}>spolehlivě od roku 1991.</span>
          </h1>
          <div className="dimline reveal" style={delay(560)} aria-hidden="true" />
          <p className="hero-sub reveal" style={delay(640)}>
            Postavíme dům od základů po předání klíčů. Beton, ocel a tři desetiletí praxe —
            pod jedním jménem, s vlastním realizačním týmem.
          </p>

          <dl className="datum reveal" style={delay(760)}>
            {data.map((d) => (
              <div className="datum-item" key={d.k}>
                <dt>{d.k}</dt>
                <dd>{d.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="block services" id="sluzby">
        <div className="ruler" aria-hidden="true">
          <span className="ruler-label">S.01 — CO STAVÍME</span>
        </div>
        <div className="block-head">
          <h2>Čtyři osy naší práce</h2>
          <p>
            Značíme je jako osy ve výkresu — A až D. Každá stojí samostatně,
            dohromady drží celou stavbu.
          </p>
        </div>

        <div className="band">
          <img
            src="/section-1.webp"
            alt="Detail betonové konstrukce a výztuže na stavbě v Praze"
            className="band-img"
          />
          <span className="band-note" aria-hidden="true">Ø ŽELEZOBETON · MONOLIT</span>
        </div>

        <ul className="cards">
          {services.map((s) => (
            <li className="card" key={s.axis}>
              <span className="axis" aria-hidden="true">{s.axis}</span>
              <span className="card-tag">{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="block trust" id="o-firme">
        <div className="ruler ruler-dark" aria-hidden="true">
          <span className="ruler-label">S.02 — O FIRMĚ</span>
        </div>

        <div className="trust-grid">
          <div className="trust-media">
            <img
              src="/section-2.webp"
              alt="Dokončená obytná budova postavená společností ABP Holding v Praze"
            />
          </div>

          <div className="trust-body">
            <h2>Třicet let stavíme pod jedním jménem.</h2>
            <p>
              ABP Holding vznikl v Praze v roce 1991. Od jednotlivých rekonstrukcí jsme se
              propracovali k celým bytovým domům a developerským projektům — a pořád platí
              to samé: stavbu vede náš vlastní tým, za termín i rozpočet ručíme my.
            </p>

            <div className="stat-strip">
              {data.map((d) => (
                <div className="stat" key={d.k}>
                  <span className="stat-k">{d.k}</span>
                  <span className="stat-v">{d.v}</span>
                </div>
              ))}
              <div className="stat">
                <span className="stat-k">Praha</span>
                <span className="stat-v">a Středočeský kraj</span>
              </div>
            </div>

            <h3 className="refs-title">Ukázky realizací</h3>
            <ul className="refs">
              {refs.map((r, i) => (
                <li key={r.c}>
                  <span className="refs-no" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <span className="refs-c">{r.c}</span>
                  <span className="refs-loc">{r.loc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

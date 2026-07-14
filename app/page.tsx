import React from "react";

const destinations = [
  {
    name: "Chorvatsko",
    region: "Istrie · Dalmácie · ostrovy",
    coord: "43°30′N 16°26′E",
    dir: "JV",
    deg: "165°",
    price: "od 2 142 Kč",
    note: "Hotely i apartmány pár kroků od moře, od Poreče až po Dubrovník.",
  },
  {
    name: "Slovinsko",
    region: "Portorož · Bled · Kranjska Gora",
    coord: "45°31′N 13°35′E",
    dir: "J",
    deg: "192°",
    price: "od 4 630 Kč",
    note: "Termály celoročně, jezera a Alpy na dosah — kousek za hranicí.",
  },
  {
    name: "Itálie",
    region: "Jesolo · Toskánsko · Lido",
    coord: "45°30′N 12°38′E",
    dir: "JZ",
    deg: "214°",
    price: "od 3 360 Kč",
    note: "Jadranské pláže i bike hotely, od rodinných resortů po vily.",
  },
  {
    name: "Maďarsko",
    region: "Bük · Hévíz · Balaton",
    coord: "47°23′N 16°45′E",
    dir: "JV",
    deg: "148°",
    price: "od 5 912 Kč",
    note: "Léčivé termály a wellness — ideální i mimo hlavní sezónu.",
  },
  {
    name: "Plavby po Jadranu",
    region: "Trogir · Split · Dubrovník",
    coord: "42°38′N 18°06′E",
    dir: "J",
    deg: "172°",
    price: "od 23 490 Kč",
    note: "Adriatic Cruises — nová destinace každé ráno, kajuta pořád stejná.",
  },
];

const steps = [
  {
    n: "01",
    title: "Řekněte nám, kam vás to táhne",
    body: "Moře, termály, nebo paluba lodi? Stačí pár vět o tom, jak si dovolenou představujete.",
  },
  {
    n: "02",
    title: "Do 24 hodin dostanete nabídku na míru",
    body: "Sestaví ji zkušený konzultant, ne robot. Osobní přístup a komplexní servis od začátku.",
  },
  {
    n: "03",
    title: "Sbalíte se a vyplouváte",
    body: "Termíny, doprava i pojištění vyřešíme za vás. Vy jen dorazíte a užíváte si.",
  },
];

// 72 dílků po 5° pro kompasovou růžici
const ticks = Array.from({ length: 72 }, (_, i) => i);

export default function Page() {
  return (
    <main className="page">
      <header className="nav">
        <a className="wordmark" href="#top" aria-label="Kompas Praha — domů">
          <svg className="wordmark-mark" viewBox="0 0 32 32" aria-hidden="true">
            <circle cx="16" cy="16" r="14" className="wm-ring" />
            <path d="M16 3 L19 16 L16 29 L13 16 Z" className="wm-needle-n" />
            <path d="M3 16 L16 13 L29 16 L16 19 Z" className="wm-needle-e" />
          </svg>
          <span className="wordmark-text">
            Kompas<span className="wordmark-sub">Praha</span>
          </span>
        </a>
        <nav className="nav-links" aria-label="Hlavní navigace">
          <a href="#destinace">Destinace</a>
          <a href="#plavby">Plavby</a>
          <a href="#concierge">Concierge</a>
        </nav>
        <a className="nav-phone" href="tel:+420234090170">+420 234 090 170</a>
      </header>

      <section className="hero" id="top">
        <img
          className="hero-img"
          src="/hero.webp"
          alt="Pobřeží Jadranu s tyrkysovým mořem a plachetnicí u dalmatského pobřeží"
          width={1600}
          height={1000}
        />
        <div className="hero-scrim" aria-hidden="true" />

        <div className="hero-inner">
          <p className="eyebrow anim" style={{ animationDelay: "0.05s" }}>
            <span className="eyebrow-dot" /> Cestovní kancelář · Praha
          </p>
          <h1 className="hero-title">
            <span className="anim" style={{ animationDelay: "0.12s" }}>Dovolená</span>
            <span className="hero-title-2 anim" style={{ animationDelay: "0.22s" }}>
              bez otazníků
            </span>
          </h1>
          <p className="hero-sub anim" style={{ animationDelay: "0.32s" }}>
            Chorvatsko, Slovinsko, Itálie, Maďarsko a plavby po Jadranu.
            Vytyčíme vám kurz — o zbytek se postaráme my.
          </p>
          <div className="hero-cta anim" style={{ animationDelay: "0.42s" }}>
            <a className="btn btn-primary" href="#concierge">
              Chci nabídku na míru
            </a>
            <a className="btn btn-ghost" href="#destinace">
              Prohlédnout destinace
            </a>
          </div>
        </div>

        <div className="hero-compass anim-slow" aria-hidden="true">
          <svg viewBox="0 0 200 200" className="compass">
            <circle cx="100" cy="100" r="94" className="c-ring-outer" />
            <circle cx="100" cy="100" r="72" className="c-ring-inner" />
            <g className="c-ticks">
              {ticks.map((i) => (
                <line
                  key={i}
                  x1="100"
                  y1="10"
                  x2="100"
                  y2={i % 9 === 0 ? 24 : 16}
                  className={i % 9 === 0 ? "c-tick c-tick-major" : "c-tick"}
                  transform={`rotate(${i * 5} 100 100)`}
                />
              ))}
            </g>
            <g className="c-cardinals">
              <text x="100" y="46" className="c-card c-card-n">N</text>
              <text x="156" y="105" className="c-card">V</text>
              <text x="100" y="164" className="c-card">J</text>
              <text x="44" y="105" className="c-card">Z</text>
            </g>
            <g className="c-needle">
              <path d="M100 34 L110 100 L100 118 L90 100 Z" className="c-needle-n" />
              <path d="M100 166 L110 100 L100 82 L90 100 Z" className="c-needle-s" />
              <circle cx="100" cy="100" r="6" className="c-hub" />
            </g>
          </svg>
          <span className="hero-bearing">Kurz&nbsp;J&nbsp;·&nbsp;172°</span>
        </div>
      </section>

      <section className="dest" id="destinace">
        <div className="section-head">
          <span className="section-index">01 — Naše vody</span>
          <h2>Kam vás zavedeme</h2>
          <p className="section-lead">
            Držíme se toho, co roky známe do detailu: Jadran a jeho okolí.
            Každou destinaci vám umíme naplánovat od hotelu po přejezd.
          </p>
        </div>

        <div className="dest-grid">
          {destinations.map((d) => (
            <article className="dest-card reveal" key={d.name} id={d.name === "Plavby po Jadranu" ? "plavby" : undefined}>
              <div className="dest-top">
                <span className="dest-bearing">
                  <span className="dest-dir">{d.dir}</span> {d.deg}
                </span>
                <span className="dest-coord">{d.coord}</span>
              </div>
              <h3>{d.name}</h3>
              <p className="dest-region">{d.region}</p>
              <p className="dest-note">{d.note}</p>
              <span className="dest-price">{d.price}</span>
            </article>
          ))}

          <article className="dest-feature reveal">
            <img
              src="/section-1.webp"
              alt="Loď plující po Jadranu mezi dalmatskými ostrovy za slunečného dne"
              width={900}
              height={1100}
            />
            <div className="dest-feature-body">
              <span className="dest-feature-tag">Chorvatsko z paluby</span>
              <p>Nová destinace každé ráno, kajuta pořád stejná.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="concierge" id="concierge">
        <div className="concierge-media">
          <img
            src="/section-2.webp"
            alt="Konzultant cestovní kanceláře Kompas připravuje individuální nabídku dovolené"
            width={1000}
            height={1200}
          />
        </div>

        <div className="concierge-body">
          <span className="section-index section-index-light">02 — Kompas Concierge</span>
          <h2 className="concierge-title">
            Můžete vše.<br />Nemusíte nic.
          </h2>
          <p className="concierge-lead">
            Nechcete trávit večery porovnáváním hotelů? Předejte kormidlo nám.
            Zkušený tým konzultantů vám do 24 hodin připraví nabídku na míru —
            s osobním přístupem a kompletním servisem.
          </p>

          <ol className="steps">
            {steps.map((s) => (
              <li className="step reveal" key={s.n}>
                <span className="step-n">{s.n}</span>
                <div className="step-text">
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="concierge-contact">
            <a className="btn btn-primary" href="tel:+420234090170">
              Zavolat 234 090 170
            </a>
            <a className="btn btn-line" href="mailto:kompas@kompas.cz">
              kompas@kompas.cz
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

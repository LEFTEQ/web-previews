import type { ReactElement } from "react";

const floors = [
  {
    tag: "03",
    level: "3. patro",
    name: "Infuzní a fyzikální léčba",
    items: ["Infuzní léčba (kapačky)", "Elektroléčba", "Magnet · laser · teplo"],
    telLabel: "485 341 940",
    telHref: "tel:+420485341940",
  },
  {
    tag: "02",
    level: "2. patro",
    name: "Pohyb a fyzioterapie",
    items: ["Léčebná tělesná výchova", "Tělocvična", "Fyzioterapie"],
    telLabel: "485 341 934",
    telHref: "tel:+420485341934",
  },
  {
    tag: "01",
    level: "1. patro",
    name: "Ambulance, voda a masáže",
    items: ["Ambulance rehabilitace", "Vodoléčba", "Masáže", "Kineziotaping"],
    telLabel: "485 341 930",
    telHref: "tel:+420485341930",
  },
  {
    tag: "00",
    level: "Přízemí",
    name: "Vstup a objednání",
    items: ["Recepce", "Objednání pacientů", "Dárkové poukazy"],
    telLabel: "485 341 931",
    telHref: "tel:+420485341931",
  },
];

const methods = [
  {
    n: "01",
    title: "Vyšetření rehabilitačním lékařem",
    text: "Přesný předpis procedur na míru. Navíc zákroky myoskeletární medicíny, akupunktury a reflexní léčby — zaměřené hlavně na poruchy pohybového aparátu a složitější poúrazové stavy.",
  },
  {
    n: "02",
    title: "Fyzioterapie",
    text: "Pohyb jako lék. Kinezioterapie a reflexní léčba pracují především s pohybovým systémem a dají se uplatnit prakticky ve všech oborech medicíny.",
  },
  {
    n: "03",
    title: "Fyzikální léčba",
    text: "Cílené podněty tam, kde je tělo potřebuje — teplo, elektrické proudy různých tvarů a síly, magnet a laser.",
  },
  {
    n: "04",
    title: "Infuzní léčba",
    text: "Léčba pomocí kapaček, která ve vhodných případech částečně nahradí pobyt v nemocnici — a vy zůstanete doma.",
  },
];

export default function Page(): ReactElement {
  return (
    <div className="page">
      <header className="top">
        <a className="brand" href="#uvod" aria-label="Centrum léčebné rehabilitace Liberec — domů">
          <span className="brand-mark">CLR</span>
          <span className="brand-sub">
            Centrum léčebné
            <br />
            rehabilitace · Liberec
          </span>
        </a>
        <div className="top-right">
          <span className="top-open">
            <span className="dot" aria-hidden="true" /> Otevřeno denně od 7:00
          </span>
          <a className="top-tel" href="tel:+420485341930">
            Objednat se · 485 341 930
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="uvod">
          <div className="hero-text">
            <p className="eyebrow rise" style={{ animationDelay: "0.05s" }}>
              Papírové náměstí · Liberec 1 · od 7:00
            </p>
            <h1 className="hero-title">
              <span className="rise" style={{ animationDelay: "0.12s" }}>
                Zpátky do pohybu,
              </span>
              <span className="rise accent-word" style={{ animationDelay: "0.2s" }}>
                vlastním tempem.
              </span>
            </h1>
            <p className="hero-lead rise" style={{ animationDelay: "0.3s" }}>
              Léčebná rehabilitace pod jednou střechou. Od vyšetření lékařem přes
              fyzioterapii a vodoléčbu až po infuzní léčbu — se zkušeným personálem,
              který vás doprovodí zpátky do vaší obvyklé kondice.
            </p>
            <div className="hero-actions rise" style={{ animationDelay: "0.4s" }}>
              <a className="btn btn-primary" href="tel:+420485341930">
                Objednat se telefonicky
              </a>
              <a className="btn btn-ghost" href="#patra">
                Kde co najdete
              </a>
            </div>
            <ul className="hero-facts rise" style={{ animationDelay: "0.5s" }}>
              <li>
                <span className="fact-num">4</span>
                <span className="fact-label">podlaží péče</span>
              </li>
              <li>
                <span className="fact-num">8</span>
                <span className="fact-label">druhů procedur</span>
              </li>
              <li>
                <span className="fact-num">7:00</span>
                <span className="fact-label">otevřeno denně</span>
              </li>
            </ul>
          </div>
          <figure className="hero-media rise" style={{ animationDelay: "0.24s" }}>
            <img
              src="/hero.webp"
              alt="Terapeut vede pacienta cvičením v rehabilitačním sále Centra léčebné rehabilitace Liberec"
              className="hero-img"
              loading="eager"
            />
            <figcaption className="hero-cap">
              Rehabilitační sál CLR, Na Poříčí 550/7
            </figcaption>
          </figure>
        </section>

        <section className="floors" id="patra">
          <div className="section-head">
            <p className="eyebrow">Kde co najdete</p>
            <h2 className="section-title">
              Celý dům, jedno místo. Přijďte přízemím, odejděte v lepší kondici.
            </h2>
            <p className="section-intro">
              Naše oddělení jsou rozmístěná po patrech budovy na Papírovém náměstí.
              Než vyrazíte, můžete si zavolat rovnou na to správné oddělení —
              čísla najdete u každého patra.
            </p>
          </div>

          <div className="floors-grid">
            <ol className="directory" aria-label="Přehled oddělení podle pater">
              {floors.map((f) => (
                <li className="floor" key={f.tag}>
                  <div className="floor-spine" aria-hidden="true">
                    <span className="floor-node" />
                  </div>
                  <span className="floor-tag">{f.tag}</span>
                  <div className="floor-body">
                    <p className="floor-level">{f.level}</p>
                    <p className="floor-name">{f.name}</p>
                    <ul className="floor-items">
                      {f.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  </div>
                  <a className="floor-tel" href={f.telHref}>
                    <span className="floor-tel-label">Zavolat</span>
                    <span className="floor-tel-num">{f.telLabel}</span>
                  </a>
                </li>
              ))}
            </ol>

            <figure className="floors-media">
              <img
                src="/section-1.webp"
                alt="Vodoléčba v Centru léčebné rehabilitace Liberec — vířivá lázeň pro horní a dolní končetiny"
                className="floors-img"
                loading="lazy"
              />
              <figcaption>
                Vodoléčba v 1. patře — vířivky pro horní i dolní končetiny a klasické masáže.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="about" id="pece">
          <div className="about-inner">
            <div className="about-copy">
              <p className="eyebrow eyebrow-light">Jak léčba probíhá</p>
              <h2 className="section-title section-title-light">
                Léčebná rehabilitace je běh na etapy — jdeme je s vámi jednu po druhé.
              </h2>
              <p className="about-lead">
                Rehabilitace zlepšuje zdravotní stav a funkční zdatnost a vytváří
                podmínky, aby vydržely. Je časově omezená a stojí na jednom
                předpokladu — na vaší spolupráci. My přidáme zkušenost a vybavení.
              </p>

              <ol className="methods">
                {methods.map((m) => (
                  <li className="method" key={m.n}>
                    <span className="method-num">{m.n}</span>
                    <div>
                      <h3 className="method-title">{m.title}</h3>
                      <p className="method-text">{m.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <aside className="about-side">
              <figure className="about-media">
                <img
                  src="/section-2.webp"
                  alt="Fyzioterapeutka Centra léčebné rehabilitace Liberec při práci s pacientem"
                  className="about-img"
                  loading="lazy"
                />
              </figure>

              <div className="trust-card">
                <h3 className="trust-title">Co to stojí</h3>
                <p className="trust-text">
                  Většinu výkonů hradí veřejné zdravotní pojištění, pokud je
                  předepíše lékař podle metodiky pojišťoven. Navíc nabízíme
                  <strong> nadstandardní programy bez nutnosti předpisu</strong> —
                  pro chvíle, kdy chcete udělat něco pro své tělo i bez lékařské
                  indikace.
                </p>
                <p className="trust-note">
                  Sháníte dárek? Máme <strong>dárkové poukazy</strong> na
                  rehabilitační ošetření.
                </p>
              </div>

              <div className="team-card">
                <h3 className="trust-title">Kdo vás povede</h3>
                <p className="team-names">
                  MUDr. Vojtěch Kotek st. · MUDr. Pavel Prášil
                </p>
                <address className="team-addr">
                  Na Poříčí 550/7, 460 01 Liberec 1
                  <br />
                  (Papírové náměstí)
                  <br />
                  <a href="mailto:rehabilitaceliberec@seznam.cz">
                    rehabilitaceliberec@seznam.cz
                  </a>
                </address>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}

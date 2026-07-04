import type { CSSProperties } from "react";

export default function Page() {
  const sortiment = [
    {
      kod: "01",
      nazev: "Interiérové obkladové panely",
      popis:
        "Lamelové i hladké panely LINERIO, Vilo Motivo a MPC MODULO — dřevo, kámen i beton na stěně bez zednické práce. Nejširší výběr sklademr, ihned k odběru.",
      detail: "Harmony Wood · Chocolate · Grey Marble",
    },
    {
      kod: "02",
      nazev: "Fasádní obklady",
      popis:
        "vinyStone, vinyTherm a NOVIK Hand Laid Brick — fasáda, která vypadá jako cihla nebo kamennch, ale váží zlomek. Vzorky ex fsólií DECOR pošleme poštou zdarma.",
      detail: "Sahara · Basalt · Bordeaux · Toscana",
    },
    {
      kod: "03",
      nazev: "Podlahy a dlažba",
      popis:
        "Vinylové podlahy Vilo SPC STONE, zatravňovací dlažba geoSYSTEM a neviditelné obrubníky geoBORDER. Venku i uvnitř, na roky dopředu.",
      detail: "Concrete Dust · Ash Grey",
    },
    {
      kod: "04",
      nazev: "ROAD SYSTEM — silnční panely",
      popis:
        "Lehké zpevňovací panely, které unesou dva pracovníci a přesto pod váhou strojů. Rychlé zpevnění skoro jakéhokoli povrchu.",
      detail: "Novinka na českém trhu",
    },
  ];

  return (
    <main className="ps-page">
      <header className="ps-nav">
        <a href="#top" className="ps-wordmark" aria-label="PROSTAVBU, obklady a fasády Brno">
          <span className="ps-wordmark-pro">PRO</span>
          <span className="ps-wordmark-stavbu">STAVBU</span>
        </a>
        <a className="ps-nav-call" href="tel:+420543242111">
          <span className="ps-nav-call-label">Infolinka 7–16 h</span>
          <span className="ps-nav-call-num">543 242 111</span>
        </a>
      </header>

      <section className="ps-hero" id="top">
        <div className="ps-hero-media">
          <img
            src="/hero.webp"
            alt="Detail obkladového lamelového panelu s texturou dřeva"
            className="ps-hero-img"
          />
          <div className="ps-hero-swatch" aria-hidden="true">
            <span style={{ "--c": "#8a5a3b" } as CSSProperties} />
            <span style={{ "--c": "#3d4a44" } as CSSProperties} />
            <span style={{ "--c": "#b9b0a2" } as CSSProperties} />
            <span style={{ "--c": "#c98a4b" } as CSSProperties} />
          </div>
        </div>
        <div className="ps-hero-copy">
          <p className="ps-eyebrow">Obklady · fasády · podlahy — Brno, Vídenská</p>
          <h1 className="ps-hero-title">
            Stěna, která vypadá
            <br />
            jako <span className="ps-hero-accent">dřevo, cihla i kmen</span>
            <br />
            — bez zedníka.
          </h1>
          <p className="ps-hero-lede">
            Nejsirší výběr interiérových a fasádních obkladů
            skladem v Brně. Panely nacvakněte sami, nebo si nechte poradit
            na prodejně na Vídenské. Rozvážíme po celé ČR i SR.
          </p>
          <div className="ps-hero-actions">
            <a className="ps-btn ps-btn-primary" href="tel:+420543242111">
              Zavolat na prodejnu
            </a>
            <a className="ps-btn ps-btn-ghost" href="#sortiment">
              Projít sortiment
            </a>
          </div>
          <p className="ps-hero-note">
            Nejste si jistí dekorem? U většiny zboží pošleme
            <strong> vzorek poštou zdarma.</strong>
          </p>
        </div>
      </section>

      <section className="ps-section" id="sortiment">
        <div className="ps-section-head">
          <p className="ps-eyebrow">Co u nás najdete</p>
          <h2 className="ps-section-title">Čtyři řady, jedna prodejna</h2>
          <p className="ps-section-sub">
            Každou řadu drzíme skladem, abyċte nemuseli čekat.
            Ceny akcí a výprodejů platí pro objednávky přes e-shop.
          </p>
        </div>

        <ul className="ps-cards">
          {sortiment.map((s) => (
            <li className="ps-card" key={s.kod}>
              <span className="ps-card-kod">{s.kod}</span>
              <div className="ps-card-body">
                <h3 className="ps-card-title">{s.nazev}</h3>
                <p className="ps-card-text">{s.popis}</p>
                <p className="ps-card-detail">{s.detail}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="ps-akce">
          <img
            src="/section-1.webp"
            alt="Ukázka fasádního obkladu s vzhledem cihly"
            className="ps-akce-img"
          />
          <div className="ps-akce-copy">
            <p className="ps-eyebrow">Akce týdne</p>
            <h3 className="ps-akce-title">Panely LINERIO Chocolate</h3>
            <p className="ps-akce-price">
              <span className="ps-akce-sleva">−25 %</span>
              na L-LINE i M-LINE
            </p>
            <p className="ps-akce-text">
              Teplý čokoládový dřevoděkor v šířkách L i M,
              lamely 0,115 × 2,65 m. Akní cena platí při objednávce
              přes e-shop — zbytek dorovnáme na prodejně.
            </p>
          </div>
        </div>
      </section>

      <section className="ps-section ps-duvera" id="o-nas">
        <div className="ps-duvera-grid">
          <div className="ps-duvera-copy">
            <p className="ps-eyebrow">Proč k nám do Brna</p>
            <h2 className="ps-section-title">
              Poradci, ne prodavači skladu
            </h2>
            <p className="ps-duvera-lede">
              Materiál můžete objednat kdykoli online, ale nejčastěji
              začneme telefonem nebo u pultu. Poradime s barvou i dekorem,
              pošleme vzorek a řeknem, co se k vaší stěně hodí.
            </p>

            <dl className="ps-fakta">
              <div className="ps-fakt">
                <dt>Prodejna a osobní odběry</dt>
                <dd>Brno, Vídenská 93–95</dd>
              </div>
              <div className="ps-fakt">
                <dt>Otevřeno</dt>
                <dd>Pracovní dny 7:00–16:00</dd>
              </div>
              <div className="ps-fakt">
                <dt>Rozvoz</dt>
                <dd>Celá ČR i SR</dd>
              </div>
              <div className="ps-fakt">
                <dt>Platba na prodejně</dt>
                <dd>Hotově i kartou</dd>
              </div>
            </dl>
          </div>

          <figure className="ps-duvera-media">
            <img
              src="/section-2.webp"
              alt="Interiér s obkladovými panely a vinylovou podlahou"
              className="ps-duvera-img"
            />
            <figcaption className="ps-duvera-cap">
              Vzorník exteriérových fólií DECOR — všechny dekory na jednom místě.
            </figcaption>
          </figure>
        </div>

        <p className="ps-duvera-cta">
          Máte dotaz nebo si nevíte rady s výběrem?{" "}
          <a href="tel:+420543242111">Zavolejte 543 242 111</a> nebo napište na{" "}
          <a href="mailto:info@prostavbu.cz">info@prostavbu.cz</a>.
        </p>
      </section>
    </main>
  );
}

export default function Page() {
  const sluzby = [
    {
      kod: "ADR",
      nazev: "Přeprava chemických produktů",
      text: "Cisternová přeprava chemických látek v režimu ADR. Řidiči s platným ADR osvědčením, pravidelně školení v manipulaci s nebezpečnými látkami.",
    },
    {
      kod: "PETRO",
      nazev: "Ropné produkty a bitumen",
      text: "Denně vozíme značné objemy ropných produktů pro petrochemické společnosti — včetně horkého asfaltu, který vyžaduje přesné načasování a teplotní režim.",
    },
    {
      kod: "SPED",
      nazev: "Spedice a subdodávky",
      text: "Když nestačí vlastní flotila, zapojíme prověřené subdodavatele, se kterými spolupracujeme dlouhodobě a kterým věříme stejně jako vlastním vozům.",
    },
    {
      kod: "TRACK",
      nazev: "100% přehled o zakázce",
      text: "Interní elektronický systém eviduje kompletní komunikaci a dokumenty ke každé přepravě. Kdykoli víte, kde vaše cisterna právě je.",
    },
  ];

  const zasady = [
    {
      cislo: "20+",
      jednotka: "let v oboru",
      text: "Cisternovou dopravu děláme přes dvacet let. Víme, jak na to — a víme i to, co neslibovat.",
    },
    {
      cislo: "EURO 6",
      jednotka: "celá flotila",
      text: "Jezdíme s nejmodernější technikou splňující nejpřísnější emisní normy. Trasy plánujeme s ohledem na životní prostředí.",
    },
    {
      cislo: "0",
      jednotka: "planých slibů",
      text: "Práci organizujeme dopředu. Co slíbíme, splníme. Co splnit nemůžeme, neslibujeme.",
    },
  ];

  return (
    <main className="tk">
      {/* ===== HERO ===== */}
      <header className="tk-hero">
        <div className="tk-topbar">
          <span className="tk-wordmark" aria-label="TANKER s.r.o.">
            TANKER<span className="tk-wordmark-dot">●</span>
          </span>
          <span className="tk-topbar-loc">České Budějovice — Zavadilka 2</span>
        </div>

        <div className="tk-hero-body">
          <p className="tk-hero-eyebrow">Cisternová autodoprava · ADR · petrochemie</p>
          <h1 className="tk-hero-title">
            <span className="tk-line tk-line-1">Vezeme to,</span>
            <span className="tk-line tk-line-2">co jiní vézt</span>
            <span className="tk-line tk-line-3">
              nesmí<span className="tk-title-dot">.</span>
            </span>
          </h1>
          <p className="tk-hero-sub">
            Přes 20 let přepravujeme chemické a ropné produkty v cisternách pro
            petrochemické a obchodní společnosti po celé Evropě. Z Českých
            Budějovic, spolehlivě a bez výmluv.
          </p>
          <div className="tk-hero-actions">
            <a href="tel:+420228989185" className="tk-btn tk-btn-solid">
              Zavolat dispečink
            </a>
            <a href="mailto:info@tankercb.cz" className="tk-btn tk-btn-ghost">
              Poptat přepravu e‑mailem
            </a>
          </div>
        </div>

        {/* Signature: silniční pruh s ADR tabulkou — jazyk cisternové dopravy */}
        <div className="tk-road" aria-hidden="true">
          <div className="tk-road-stripes">
            <span /><span /><span /><span /><span /><span /><span /><span />
          </div>
          <div className="tk-adr">
            <span className="tk-adr-top">33</span>
            <span className="tk-adr-bottom">1203</span>
          </div>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="tk-section" aria-labelledby="sluzby-h">
        <div className="tk-section-head">
          <span className="tk-section-tag">Co vozíme</span>
          <h2 id="sluzby-h" className="tk-h2">
            Od chemie po horký asfalt
          </h2>
          <p className="tk-section-lead">
            Specializujeme se na cisternovou přepravu — obor, kde se nedá nic
            odbýt. Každá zakázka má svůj režim, dokumentaci a odpovědného
            dispečera.
          </p>
        </div>

        <div className="tk-cards">
          {sluzby.map((s) => (
            <article className="tk-card" key={s.kod}>
              <span className="tk-card-plate">{s.kod}</span>
              <h3 className="tk-card-title">{s.nazev}</h3>
              <p className="tk-card-text">{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== DŮVĚRA / REFERENCE ===== */}
      <section className="tk-section tk-section-dark" aria-labelledby="duvera-h">
        <div className="tk-section-head">
          <span className="tk-section-tag tk-section-tag-light">Proč s námi</span>
          <h2 id="duvera-h" className="tk-h2 tk-h2-light">
            Zvažujeme každý krok
          </h2>
        </div>

        <div className="tk-facts">
          {zasady.map((z) => (
            <div className="tk-fact" key={z.jednotka}>
              <span className="tk-fact-num">{z.cislo}</span>
              <span className="tk-fact-unit">{z.jednotka}</span>
              <p className="tk-fact-text">{z.text}</p>
            </div>
          ))}
        </div>

        <figure className="tk-quote">
          <blockquote>
            <p>
              „Naše společnost denně přepravuje značné objemy ropných produktů v
              cisternách, což vyžaduje vysokou míru odpovědnosti, aby se produkt
              dostal ke koncovému zákazníkovi bez potíží. Proto si vážíme
              profesionálního přístupu společnosti TANKER s.r.o.“
            </p>
          </blockquote>
          <figcaption>
            <strong>Ondřej Stuchlík</strong>
            <span>
              Bitumen Transport Manager, TotalEnergies Marketing ČESKÁ REPUBLIKA
              s.r.o.
            </span>
          </figcaption>
        </figure>

        <p className="tk-owner">
          „Naším cílem je být tak profesionálním a vyhledávaným dopravcem, jak
          jen to v tomto oboru jde.“ — <strong>Pavel Pinter</strong>, jednatel
        </p>
      </section>
    </main>
  );
}

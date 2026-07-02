export default function Page() {
  const sluzby = [
    {
      kod: "HALY",
      nazev: "Průmyslové haly",
      popis:
        "Výstavba průmyslových a skladových hal na klíč — od zemních prací přes montáž ocelové či prefabrikované konstrukce až po opláštění a předání stavby.",
    },
    {
      kod: "PLÁŠŤ",
      nazev: "Opláštění a střešní izolace",
      popis:
        "Opláštění budov sendvičovými panely, střešní hydroizolace a zateplení. Plášť, který drží těsně i po letech provozu.",
    },
    {
      kod: "SVĚTLO",
      nazev: "Světlíky a prosklené stěny",
      popis:
        "Pásové i bodové světlíky, prosklené fasádní stěny. Denní světlo do výrobních hal bez tepelných ztrát.",
    },
    {
      kod: "INTERIÉR",
      nazev: "Sádrokarton a podhledy",
      popis:
        "Certifikované sádrokartonové konstrukce RIGIPS, minerální závěsné podhledy a kompletní řemeslné práce v interiérech.",
    },
    {
      kod: "SÍTĚ",
      nazev: "Inženýrské sítě a zemní práce",
      popis:
        "Přípojky, kanalizace, terénní úpravy a zpevněné venkovní plochy. Připravíme pozemek i celý areál.",
    },
    {
      kod: "STAVBY",
      nazev: "Bytové a občanské stavby",
      popis:
        "Novostavby i rekonstrukce bytových domů, škol a veřejných budov — jako generální dodavatel s vlastními řemesly.",
    },
  ];

  const realizace = [
    {
      rok: "Ústí nad Labem",
      nazev: "Zámeček Větruše",
      role: "Generální dodavatel rekonstrukce",
      popis:
        "Kompletní rekonstrukce výletního zámečku nad městem — dominanty, kterou zná každý Ústečan. Od statiky přes fasádu po interiéry.",
    },
    {
      rok: "Ústí nad Labem",
      nazev: "Univerzita J. E. Purkyně",
      role: "Rekonstrukce interiérů i exteriérů",
      popis:
        "Kompletní rekonstrukce budov ústecké univerzity za provozu — podhledy, příčky, opláštění, prosklené stěny.",
    },
  ];

  return (
    <main className="ns">
      {/* ================= HERO ================= */}
      <header className="ns-hero">
        <div className="ns-hero-top">
          <div className="ns-wordmark" aria-label="North stav a.s.">
            <span className="ns-wordmark-north">NORTH</span>
            <span className="ns-wordmark-stav">STAV</span>
            <span className="ns-wordmark-as">a.s.</span>
          </div>
          <p className="ns-hero-loc">Ústí nad Labem</p>
        </div>

        <div className="ns-hero-body">
          <p className="ns-hero-eyebrow">Stavební firma · generální dodavatel</p>
          <h1 className="ns-hero-title">
            <span className="ns-line ns-line-1">Stavíme haly,</span>
            <span className="ns-line ns-line-2">pláště budov</span>
            <span className="ns-line ns-line-3">
              a&nbsp;<em>světlo</em> do nich.
            </span>
          </h1>
          <p className="ns-hero-sub">
            Průmyslové haly, opláštění, střešní izolace, světlíky a prosklené
            stěny. Vlastní řemesla, jedna odpovědnost — od výkopu po předání
            klíčů.
          </p>
          <div className="ns-hero-actions">
            <a className="ns-btn" href="#realizace">
              Prohlédnout realizace
            </a>
            <a className="ns-btn ns-btn-ghost" href="#sluzby">
              Co stavíme
            </a>
          </div>
        </div>

        {/* Signature: trapézový plech / opláštění — profilová linka řemesla */}
        <div className="ns-trapez" aria-hidden="true">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="ns-trapez-svg"
          >
            <path
              className="ns-trapez-line ns-trapez-a"
              d="M0,90 L60,90 90,40 210,40 240,90 360,90 390,40 510,40 540,90 660,90 690,40 810,40 840,90 960,90 990,40 1110,40 1140,90 1200,90"
            />
            <path
              className="ns-trapez-line ns-trapez-b"
              d="M0,110 L60,110 90,60 210,60 240,110 360,110 390,60 510,60 540,110 660,110 690,60 810,60 840,110 960,110 990,60 1110,60 1140,110 1200,110"
            />
          </svg>
        </div>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="ns-sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="ns-section-head">
          <h2 id="sluzby-h" className="ns-h2">
            Od výkopu po předání klíčů
          </h2>
          <p className="ns-section-sub">
            Šest oborů, které zvládáme vlastními lidmi. Nemusíte koordinovat
            deset firem — na stavbě odpovídáme my.
          </p>
        </div>

        <ul className="ns-grid">
          {sluzby.map((s) => (
            <li key={s.kod} className="ns-card">
              <span className="ns-card-kod">{s.kod}</span>
              <h3 className="ns-card-nazev">{s.nazev}</h3>
              <p className="ns-card-popis">{s.popis}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ================= REALIZACE / DŮVĚRA ================= */}
      <section
        className="ns-realizace"
        id="realizace"
        aria-labelledby="realizace-h"
      >
        <div className="ns-section-head">
          <h2 id="realizace-h" className="ns-h2 ns-h2-light">
            Stavby, které v Ústí znáte
          </h2>
          <p className="ns-section-sub ns-section-sub-light">
            Nestavíme anonymně. Naše práce stojí na kopci nad městem i uprostřed
            univerzitního kampusu.
          </p>
        </div>

        <div className="ns-ref-list">
          {realizace.map((r) => (
            <article key={r.nazev} className="ns-ref">
              <p className="ns-ref-rok">{r.rok}</p>
              <div className="ns-ref-body">
                <h3 className="ns-ref-nazev">{r.nazev}</h3>
                <p className="ns-ref-role">{r.role}</p>
                <p className="ns-ref-popis">{r.popis}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="ns-duvera">
          <div className="ns-duvera-item">
            <p className="ns-duvera-big">Vlastní řemesla</p>
            <p className="ns-duvera-text">
              Sádrokartonáři certifikovaní pro systémy RIGIPS, izolatéři,
              montážníci ocelových konstrukcí. Kvalitu nehlídáme přes
              subdodavatele.
            </p>
          </div>
          <div className="ns-duvera-item">
            <p className="ns-duvera-big">Jedna odpovědnost</p>
            <p className="ns-duvera-text">
              Jako generální dodavatel ručíme za termín, rozpočet i kvalitu celé
              stavby. Vy řešíte jednu smlouvu a jednoho partnera.
            </p>
          </div>
          <div className="ns-duvera-item">
            <p className="ns-duvera-big">Doma na severu</p>
            <p className="ns-duvera-text">
              Sídlíme v Ústí nad Labem a stavíme po celém Ústeckém kraji. Na
              stavbu dojedeme, ne doletíme.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

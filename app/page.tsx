export default function Page() {
  const potrubi = [
    {
      tag: "SPIRO",
      nazev: "Spiro potrubí",
      popis:
        "Spirálně vinuté potrubí z pozinkovaného plechu. Vyrábíme přímo v Chrlicích na vlastní vinuté lince — průměry od 80 do 1250 mm, délky přesně podle vašeho projektu.",
      spec: "Ø 80–1250 mm · pozink · nerez na poptávku",
    },
    {
      tag: "KRUH",
      nazev: "Kruhové potrubí a tvarovky",
      popis:
        "Kolena, odbočky, redukce, přechody. Kompletní sortiment kruhových komponentů skladem nebo na zakázku — přesné návaznosti na spiro rozvody.",
      spec: "kolena · odbočky · redukce · klapky",
    },
    {
      tag: "HRAN",
      nazev: "Hranaté potrubí",
      popis:
        "Čtyřhranné potrubí na míru z pozinkovaného plechu, ohýbané na moderních tvářecích strojích. Vhodné tam, kde kruhový rozvod nemá místo — podhledy, šachty, strojovny.",
      spec: "rozměry dle projektu · přírubové spoje",
    },
    {
      tag: "SVAR",
      nazev: "Svařované potrubí a kovovýroba",
      popis:
        "Svařujeme ocel i nerez metodami MIG/MAG, TIG a autogenem. Dělíme materiál na CNC pálicím stroji a lisujeme výlisky na výstředníkových lisech — od kusu po velkou sérii.",
      spec: "MIG/MAG · TIG · CNC pálení · lisování",
    },
  ];

  const kroky = [
    {
      cislo: "1",
      nazev: "Návrh a konzultace",
      popis:
        "Zpracujeme prvotní návrh vzduchotechniky a podklady. Projdeme je s vámi a do výroby jdeme až po vašem odsouhlasení — žádné překvapení na stavbě.",
    },
    {
      cislo: "2",
      nazev: "Výroba v Chrlicích",
      popis:
        "Vyrábíme na vlastních tvářecích strojích z kvalitních ocelí. Každý kus měříme, aby na montáži seděl na milimetr.",
    },
    {
      cislo: "3",
      nazev: "Dodávka a montáž",
      popis:
        "Potrubí dovezeme a náš tým je odborně namontuje. Předáváme funkční rozvod, ne hromadu dílů.",
    },
  ];

  return (
    <main className="gm">
      {/* ===== HERO ===== */}
      <header className="gm-hero">
        <div className="gm-hero-inner">
          <div className="gm-topbar">
            <span className="gm-wordmark" aria-label="GIOMETAL">
              GIO<b>METAL</b>
            </span>
            <span className="gm-topbar-meta">
              Brno&#8209;Chrlice · výroba vzduchotechniky od&nbsp;2003
            </span>
          </div>

          <h1 className="gm-h1">
            <span className="gm-h1-line gm-h1-line-1">Dáváme</span>
            <span className="gm-h1-line gm-h1-line-2">
              vzduchu
              <svg
                className="gm-spiro"
                viewBox="0 0 120 120"
                aria-hidden="true"
                focusable="false"
              >
                {/* spirálně vinuté potrubí v řezu — falc po falci */}
                <circle cx="60" cy="60" r="54" className="gm-spiro-ring" />
                <circle cx="60" cy="60" r="44" className="gm-spiro-ring" />
                <circle cx="60" cy="60" r="34" className="gm-spiro-ring" />
                <circle cx="60" cy="60" r="24" className="gm-spiro-ring" />
                <circle cx="60" cy="60" r="14" className="gm-spiro-ring" />
                <circle cx="60" cy="60" r="5" className="gm-spiro-core" />
              </svg>
            </span>
            <span className="gm-h1-line gm-h1-line-3">směr.</span>
          </h1>

          <div className="gm-hero-foot">
            <p className="gm-lead">
              Spiro, kruhové, hranaté i svařované potrubí vyrábíme ve vlastní
              hale v&nbsp;Brně&#8209;Chrlicích. Od návrhu přes výrobu po montáž —
              pro průmysl i&nbsp;soukromé zákazníky, v&nbsp;Česku i&nbsp;po EU.
            </p>
            <div className="gm-hero-cta">
              <a className="gm-btn gm-btn-solid" href="tel:+420545219000">
                Zavolat do výroby
              </a>
              <a
                className="gm-btn gm-btn-ghost"
                href="mailto:poptavky@giometal.cz"
              >
                Poslat poptávku e&#8209;mailem
              </a>
            </div>
          </div>
        </div>

        {/* falcovaný pás — vodicí linka celého webu */}
        <div className="gm-seam" aria-hidden="true" />
      </header>

      {/* ===== SEKCE 1: VÝROBNÍ PROGRAM ===== */}
      <section className="gm-section gm-vyroba" aria-labelledby="vyroba-h">
        <div className="gm-section-head">
          <p className="gm-eyebrow">Výrobní program</p>
          <h2 id="vyroba-h" className="gm-h2">
            Čtyři profily potrubí.
            <br />
            Jedna dílna, kde vznikají.
          </h2>
        </div>

        <ul className="gm-grid" role="list">
          {potrubi.map((p) => (
            <li key={p.tag} className="gm-card">
              <span className="gm-card-tag">{p.tag}</span>
              <h3 className="gm-h3">{p.nazev}</h3>
              <p className="gm-card-text">{p.popis}</p>
              <p className="gm-card-spec">{p.spec}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== SEKCE 2: JAK PRACUJEME + DŮVĚRA ===== */}
      <section className="gm-section gm-proces" aria-labelledby="proces-h">
        <div className="gm-section-head gm-section-head-light">
          <p className="gm-eyebrow">Od výkresu k proudícímu vzduchu</p>
          <h2 id="proces-h" className="gm-h2">
            Do výroby jdeme, až když návrh odsouhlasíte vy.
          </h2>
        </div>

        <ol className="gm-kroky" role="list">
          {kroky.map((k) => (
            <li key={k.cislo} className="gm-krok">
              <span className="gm-krok-cislo" aria-hidden="true">
                {k.cislo}
              </span>
              <div>
                <h3 className="gm-h3">{k.nazev}</h3>
                <p className="gm-krok-text">{k.popis}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="gm-duvera">
          <div className="gm-fakt">
            <span className="gm-fakt-hodnota">2003</span>
            <span className="gm-fakt-popis">
              Ryze česká firma. Vyrábíme přes dvacet let na stejné adrese:
              Tovární 892/5a, Brno&#8209;Chrlice.
            </span>
          </div>
          <div className="gm-fakt">
            <span className="gm-fakt-hodnota">EU</span>
            <span className="gm-fakt-popis">
              Dodáváme na tuzemský trh i do zemí Evropské unie — svařování
              oceli a nerezu doložíme certifikáty.
            </span>
          </div>
          <div className="gm-fakt">
            <span className="gm-fakt-hodnota">1 ks +</span>
            <span className="gm-fakt-popis">
              Kovovýroba od kusové zakázky po velkou sérii. Části strojů, lehké
              ocelové konstrukce, nerezové a lisované výrobky.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

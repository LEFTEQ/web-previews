export default function Page() {
  const sluzby = [
    {
      kod: "NÁTĚR",
      nazev: "Natěračské práce",
      popis:
        "Okna, dveře, zárubně, radiátory, ploty i konstrukce. Starý nátěr obrousíme, napenetrujeme a naneseme nové vrstvy — základ a dva kryty. Lak drží roky, ne do první zimy.",
      polozky: ["Okna a dveře", "Radiátory a zárubně", "Ploty, brány, zábradlí"],
    },
    {
      kod: "MALBA",
      nazev: "Malířské práce",
      popis:
        "Byty, domy, kanceláře i schodiště. Zakryjeme podlahy a nábytek, opravíme praskliny, vymalujeme a uklidíme po sobě. Večer můžete normálně bydlet.",
      polozky: ["Byty a rodinné domy", "Kanceláře a provozovny", "Společné prostory domů"],
    },
    {
      kod: "LAK",
      nazev: "Lakování ploch",
      popis:
        "Hladký lesklý nebo matný povrch tam, kde běžný nátěr nestačí. Kuchyňská dvířka, nábytek, kovové prvky. Stříkáme i taháme štětcem — podle povrchu a přání.",
      polozky: ["Nábytek a dvířka", "Kovové konstrukce", "Renovace starých povrchů"],
    },
  ];

  const kroky = [
    {
      cislo: "1",
      nazev: "Zaměření zdarma",
      popis: "Přijedeme, změříme, poradíme s odstínem i materiálem. Bez závazku.",
    },
    {
      cislo: "2",
      nazev: "Rozpočet předem",
      popis: "Dostanete cenu písemně, položku po položce. Ta platí — žádné dopočty na konci.",
    },
    {
      cislo: "3",
      nazev: "Práce a úklid",
      popis: "Zakryjeme, natřeme, uklidíme. Předáváme hotové dílo, ne staveniště.",
    },
  ];

  return (
    <main className="on-main">
      {/* ===== HERO ===== */}
      <section className="on-hero" aria-label="Lakýrnictví Onderka, Brno">
        <header className="on-topbar">
          <div className="on-wordmark">
            <span className="on-wordmark-swatch" aria-hidden="true"></span>
            <span className="on-wordmark-text">
              ONDERKA<span className="on-wordmark-thin"> · lakýrnictví</span>
            </span>
          </div>
          <p className="on-topbar-note">Brno a okolí · od roku 1992</p>
        </header>

        <div className="on-hero-body">
          <p className="on-hero-eyebrow">Malířské, natěračské a lakýrnické práce</p>
          <h1 className="on-hero-title">
            <span className="on-hero-line on-hero-line-1">Tři vrstvy.</span>
            <span className="on-hero-line on-hero-line-2">Žádné zkratky.</span>
            <span className="on-hero-line on-hero-line-3">Nátěr, co vydrží.</span>
          </h1>
          <p className="on-hero-lead">
            Základ, mezivrstva, krycí lak — takhle se to dělá pořádně už dvaatřicet
            let. Okna, dveře, radiátory, ploty i celé byty po celém Brně.
            Zaměření a rozpočet vždy zdarma.
          </p>
          <div className="on-hero-actions">
            <a className="on-btn on-btn-primary" href="tel:+420000000000">
              Zavolat lakýrníkovi
            </a>
            <a className="on-btn on-btn-ghost" href="#sluzby">
              Co všechno natíráme
            </a>
          </div>
        </div>

        {/* Signature: tah štětcem — tři vrstvy laku stékající přes hero */}
        <div className="on-strokes" aria-hidden="true">
          <div className="on-stroke on-stroke-base">
            <span className="on-stroke-label">1 — základ</span>
          </div>
          <div className="on-stroke on-stroke-mid">
            <span className="on-stroke-label">2 — mezivrstva</span>
          </div>
          <div className="on-stroke on-stroke-top">
            <span className="on-stroke-label">3 — krycí lak</span>
            <span className="on-drip on-drip-a"></span>
            <span className="on-drip on-drip-b"></span>
            <span className="on-drip on-drip-c"></span>
          </div>
        </div>
      </section>

      {/* ===== SLUŽBY ===== */}
      <section className="on-sluzby" id="sluzby" aria-label="Naše služby">
        <div className="on-section-head">
          <p className="on-eyebrow">Vzorník prací</p>
          <h2 className="on-h2">Co pro vás natřeme a vymalujeme</h2>
          <p className="on-section-lead">
            Tři řemesla pod jednou střechou. Vyberte si, nebo nám zavolejte —
            poradíme, co váš povrch skutečně potřebuje.
          </p>
        </div>

        <div className="on-karty">
          {sluzby.map((s) => (
            <article className="on-karta" key={s.kod}>
              <div className="on-karta-swatch" aria-hidden="true">
                <span className="on-karta-kod">{s.kod}</span>
              </div>
              <div className="on-karta-telo">
                <h3 className="on-karta-nazev">{s.nazev}</h3>
                <p className="on-karta-popis">{s.popis}</p>
                <ul className="on-karta-seznam">
                  {s.polozky.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ===== DŮVĚRA / JAK PRACUJEME ===== */}
      <section className="on-duvera" aria-label="Proč Onderka">
        <div className="on-duvera-grid">
          <div className="on-duvera-uvod">
            <p className="on-eyebrow on-eyebrow-light">Řemeslo z Brna</p>
            <h2 className="on-h2 on-h2-light">
              Od roku 1992 natíráme tak, aby se zákazníci vraceli
            </h2>
            <p className="on-duvera-text">
              Eduard Onderka založil firmu v Brně před více než třiceti lety.
              Dodnes platí to samé: poctivá příprava povrchu, kvalitní materiály
              a cena dohodnutá předem. Pracujeme po celém Brně a okolí, dál po
              domluvě. Sídlíme na Čichnově v Komíně.
            </p>
            <dl className="on-cisla">
              <div className="on-cislo">
                <dt>Na trhu od</dt>
                <dd>1992</dd>
              </div>
              <div className="on-cislo">
                <dt>Rozpočet a zaměření</dt>
                <dd>zdarma</dd>
              </div>
              <div className="on-cislo">
                <dt>Působíme</dt>
                <dd>Brno + okolí</dd>
              </div>
            </dl>
          </div>

          <ol className="on-kroky">
            {kroky.map((k) => (
              <li className="on-krok" key={k.cislo}>
                <span className="on-krok-cislo" aria-hidden="true">
                  {k.cislo}
                </span>
                <div>
                  <h3 className="on-krok-nazev">{k.nazev}</h3>
                  <p className="on-krok-popis">{k.popis}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}

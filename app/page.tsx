export default function Page() {
  const sluzby = [
    {
      nazev: "Malování bytů a domů",
      popis:
        "Vymalujeme pokoj, byt i celý dům. Nábytek zakryjeme, podlahy ochráníme fólií a po práci po sobě uklidíme. Odcházíme, až když je hotovo a vy jste spokojení.",
      detail: "Bílá i barevné odstíny, otěruvzdorné barvy do kuchyní a dětských pokojů.",
    },
    {
      nazev: "Průmyslové a firemní prostory",
      popis:
        "Haly, sklady, kanceláře i schodiště bytových domů. Pracujeme po etapách nebo o víkendu, aby váš provoz nemusel zastavit.",
      detail: "Výškové práce z lešení i plošiny, značení, omyvatelné nátěry stěn.",
    },
    {
      nazev: "Natěračské práce",
      popis:
        "Okna, dveře, zábradlí, radiátory, ploty i střechy. Starý nátěr obrousíme, napenetrujeme a naneseme nový — vydrží roky, ne sezónu.",
      detail: "Syntetické i vodou ředitelné nátěry, ochrana proti korozi.",
    },
    {
      nazev: "Míchání barev na míru",
      popis:
        "Hledáte ten pravý odstín a pořád ho nenacházíte? Namícháme vám ho přesně podle vzorníku RAL nebo Eurotrend — na počkání.",
      detail: "Přes 200 odstínů RAL, vzorek vám ukážeme přímo na zdi.",
    },
  ];

  const duvody = [
    {
      cislo: "25+",
      text: "let malujeme v Pardubicích a okolí — od bytů na Dubině po výrobní haly v Černé za Bory.",
    },
    {
      cislo: "0 Kč",
      text: "za nezávaznou prohlídku a cenovou nabídku. Přijedeme, změříme, spočítáme — a vy se rozhodnete.",
    },
    {
      cislo: "So + Ne",
      text: "pracujeme i o víkendech. Firmy nemusí zavírat provoz, vy nemusíte brát dovolenou.",
    },
  ];

  const reference = [
    {
      citace:
        "Vymalovali nám třípokojový byt za dva dny včetně úklidu. Přišli přesně, jak slíbili, a odstín do ložnice namíchali podle polštáře, který se ženě líbil.",
      autor: "rodina Vachkova, Pardubice-Polabiny",
    },
    {
      citace:
        "Nátěr zábradlí a výmalbu schodiště v našem domě zvládli o víkendu, v pondělí ráno nikdo nepoznal, že se u nás pracovalo. Jen schodiště vonělo novotou.",
      autor: "SVJ Havlíčkova, Pardubice",
    },
    {
      citace:
        "Potřebovali jsme vymalovat sklad bez zastavení expedice. Domluvili jsme etapy po sektorech a všechno klaplo na den přesně.",
      autor: "velkoobchod, Pardubice-Fáblovka",
    },
  ];

  return (
    <main className="em-page">
      {/* ===== HERO ===== */}
      <header className="em-hero">
        <div className="em-hero-topbar">
          <span className="em-wordmark" aria-label="EKO-MAL, malířství Pardubice">
            <span className="em-wordmark-eko">EKO</span>
            <span className="em-wordmark-dash" aria-hidden="true"></span>
            <span className="em-wordmark-mal">MAL</span>
          </span>
          <span className="em-hero-loc">malířství &amp; natěračství · Pardubice</span>
        </div>

        <div className="em-hero-body">
          <h1 className="em-hero-title">
            <span className="em-hero-line em-hero-line-1">Nová barva</span>
            <span className="em-hero-line em-hero-line-2">mění celý</span>
            <span className="em-hero-line em-hero-line-3">
              pokoj<span className="em-hero-dot" aria-hidden="true">.</span>
            </span>
          </h1>

          <p className="em-hero-sub">
            Malujeme byty, domy, kanceláře i haly. Přijedeme, zakryjeme, vymalujeme
            a uklidíme — v Pardubicích i kdekoli v Česku, klidně o víkendu.
          </p>

          <div className="em-hero-cta">
            <a href="#sluzby" className="em-btn em-btn-primary">
              Co všechno natřeme
            </a>
            <a href="#duvera" className="em-btn em-btn-ghost">
              Proč zrovna my
            </a>
          </div>
        </div>

        {/* Signature: čerstvý tah válečkem přes celé hero */}
        <div className="em-roller" aria-hidden="true">
          <div className="em-roller-stripe">
            <span className="em-roller-edge em-roller-edge-top"></span>
            <span className="em-roller-edge em-roller-edge-bottom"></span>
          </div>
          <div className="em-roller-tool">
            <span className="em-roller-head"></span>
            <span className="em-roller-arm"></span>
            <span className="em-roller-grip"></span>
          </div>
          <span className="em-drip em-drip-1"></span>
          <span className="em-drip em-drip-2"></span>
          <span className="em-drip em-drip-3"></span>
        </div>

        <div className="em-hero-ral" aria-hidden="true">
          <span className="em-ral-chip" style={{ background: "#2E7D5B" }}>
            <i>RAL 6024</i>
          </span>
          <span className="em-ral-chip" style={{ background: "#F2B33D" }}>
            <i>RAL 1017</i>
          </span>
          <span className="em-ral-chip" style={{ background: "#25436B" }}>
            <i>RAL 5000</i>
          </span>
          <span className="em-ral-chip" style={{ background: "#C4482F" }}>
            <i>RAL 2013</i>
          </span>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="em-section em-sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="em-section-head">
          <span className="em-eyebrow">
            <span className="em-eyebrow-swatch" aria-hidden="true"></span>
            Naše práce
          </span>
          <h2 id="sluzby-h" className="em-h2">
            Od jednoho okna po celou továrnu
          </h2>
          <p className="em-section-perex">
            Stavíte, rekonstruujete, nebo jen chcete čerstvě vymalováno? Každou
            zakázku si nejdřív projdeme s vámi na místě — a nabídku dostanete zdarma.
          </p>
        </div>

        <div className="em-sluzby-grid">
          {sluzby.map((s, i) => (
            <article className="em-karta" key={s.nazev}>
              <span className={`em-karta-vzorek em-karta-vzorek-${i + 1}`} aria-hidden="true"></span>
              <h3 className="em-karta-nazev">{s.nazev}</h3>
              <p className="em-karta-popis">{s.popis}</p>
              <p className="em-karta-detail">{s.detail}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== DŮVĚRA / REFERENCE ===== */}
      <section className="em-section em-duvera" id="duvera" aria-labelledby="duvera-h">
        <div className="em-section-head">
          <span className="em-eyebrow em-eyebrow-light">
            <span className="em-eyebrow-swatch em-eyebrow-swatch-light" aria-hidden="true"></span>
            Proč EKO-MAL
          </span>
          <h2 id="duvera-h" className="em-h2 em-h2-light">
            Malujeme tak, abyste nás doporučili sousedům
          </h2>
        </div>

        <div className="em-duvody">
          {duvody.map((d) => (
            <div className="em-duvod" key={d.cislo}>
              <span className="em-duvod-cislo">{d.cislo}</span>
              <p className="em-duvod-text">{d.text}</p>
            </div>
          ))}
        </div>

        <div className="em-reference" role="list">
          {reference.map((r) => (
            <figure className="em-ref" key={r.autor} role="listitem">
              <blockquote className="em-ref-citace">„{r.citace}“</blockquote>
              <figcaption className="em-ref-autor">{r.autor}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}

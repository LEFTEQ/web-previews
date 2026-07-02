export const metadata = {
  title: "Cargotoma s.r.o. — Autodoprava Ústí nad Labem",
  description:
    "Vnitrostátní a mezinárodní autodoprava z Ústí nad Labem. Přepravy do 24 tun, expresní dokládky, spolehlivé termíny. Cargotoma s.r.o. — zavolejte, naložíme.",
};

const sluzby = [
  {
    kod: "FTL",
    nazev: "Celovozové přepravy",
    popis:
      "Plachtový návěs jen pro váš náklad, do 24 tun a 34 palet. Nakládka v den domluvy, přímá jízda bez překládek — zboží jede z rampy na rampu.",
    parametr: "do 24 t / 34 EUR palet",
  },
  {
    kod: "LTL",
    nazev: "Dokládky a částečné náklady",
    popis:
      "Pár palet, které nezaplní celý kamion? Přibalíme je k jízdě, která už stejně jede vaším směrem. Platíte jen za místo, které zaberete.",
    parametr: "od 1 palety",
  },
  {
    kod: "EXP",
    nazev: "Expresní přepravy",
    popis:
      "Když výroba stojí a díl musí být do rána na lince. Dodávka nebo sólo vůz vyjíždí do dvou hodin od objednávky, řidič hlásí polohu průběžně.",
    parametr: "výjezd do 2 hodin",
  },
  {
    kod: "D+CZ",
    nazev: "Německo a příhraničí",
    popis:
      "Z Ústí je to na hranici 25 minut. Drážďany, Lipsko, Berlín jezdíme denně — sasko-české trasy známe líp než většina dopravců z vnitrozemí.",
    parametr: "denní linky do Saska",
  },
];

const duvody = [
  {
    cislo: "18",
    jednotka: "let na silnici",
    text: "Jezdíme od roku 2007. Stejní dispečeři, stálí řidiči — zvednete telefon a mluvíte s někým, kdo vaši trasu zná.",
  },
  {
    cislo: "E442",
    jednotka: "náš domovský tah",
    text: "Základna u dálnice D8, exit Ústí nad Labem. Na nakládku v kraji jsme do hodiny, v Drážďanech za devadesát minut.",
  },
  {
    cislo: "98 %",
    jednotka: "nakládek včas",
    text: "Termín, který potvrdíme, platí. Když se cokoli na trase změní, voláme my vám — ne naopak.",
  },
];

const reference = [
  {
    citat:
      "Vozí nám palety do Drážďan třikrát týdně. Za dva roky jediné zpoždění — a to nám dispečink hlásil dřív, než jsme se stačili zeptat.",
    kdo: "vedoucí expedice, strojírenská výroba, Ústí nad Labem",
  },
  {
    citat:
      "V pátek odpoledne nám stála linka kvůli chybějícímu dílu. Cargotoma poslala dodávku do hodiny a v sobotu ráno jsme jeli dál.",
    kdo: "nákupčí, automotive dodavatel, Teplice",
  },
];

export default function Page() {
  return (
    <main className="ct">
      {/* ===== HERO ===== */}
      <header className="ct-hero">
        <div className="ct-hero-top">
          <div className="ct-wordmark" aria-label="Cargotoma">
            <span className="ct-wordmark-cargo">CARGO</span>
            <span className="ct-wordmark-toma">TOMA</span>
          </div>
          <p className="ct-hero-locality">Autodoprava · Ústí nad Labem</p>
        </div>

        <div className="ct-hero-body">
          <h1 className="ct-hero-title">
            <span className="ct-hero-line ct-hero-line-1">Naložíme.</span>
            <span className="ct-hero-line ct-hero-line-2">Vyjedeme.</span>
            <span className="ct-hero-line ct-hero-line-3">
              Dovezeme<span className="ct-dot">.</span>
            </span>
          </h1>

          <p className="ct-hero-sub">
            Vnitrostátní a mezinárodní přepravy do 24 tun. Základna u dálnice
            D8 — na hranici s Německem to máme 25 minut, k vám na nakládku
            do hodiny.
          </p>

          <div className="ct-hero-actions">
            <a className="ct-btn ct-btn-primary" href="tel:+420475600321">
              Zavolat dispečink
            </a>
            <a className="ct-btn ct-btn-ghost" href="mailto:doprava@cargotoma.cz">
              Poptat přepravu e‑mailem
            </a>
          </div>
        </div>

        {/* signature: dálniční vodicí pruh */}
        <div className="ct-road" aria-hidden="true">
          <div className="ct-road-line" />
          <div className="ct-road-dashes">
            <span /><span /><span /><span /><span /><span /><span /><span />
            <span /><span /><span /><span /><span /><span /><span /><span />
          </div>
          <div className="ct-road-line" />
          <div className="ct-road-sign">
            <span className="ct-road-sign-num">D8</span>
            <span className="ct-road-sign-dir">Ústí n. L. → Dresden</span>
          </div>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="ct-section ct-sluzby" aria-labelledby="sluzby-h">
        <div className="ct-section-head">
          <p className="ct-eyebrow">Co vozíme</p>
          <h2 id="sluzby-h" className="ct-section-title">
            Čtyři způsoby, jak dostat váš náklad na místo
          </h2>
        </div>

        <ul className="ct-sluzby-grid">
          {sluzby.map((s) => (
            <li key={s.kod} className="ct-card">
              <div className="ct-card-head">
                <span className="ct-card-kod">{s.kod}</span>
                <span className="ct-card-parametr">{s.parametr}</span>
              </div>
              <h3 className="ct-card-title">{s.nazev}</h3>
              <p className="ct-card-text">{s.popis}</p>
            </li>
          ))}
        </ul>

        <p className="ct-sluzby-note">
          Nevíte, co z toho potřebujete? Popište nám náklad a trasu — dispečink
          navrhne nejlevnější variantu do hodiny.
        </p>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="ct-section ct-duvera" aria-labelledby="duvera-h">
        <div className="ct-section-head">
          <p className="ct-eyebrow ct-eyebrow-light">Proč Cargotoma</p>
          <h2 id="duvera-h" className="ct-section-title ct-section-title-light">
            Dopravce od D8, na kterého je spolehnutí
          </h2>
        </div>

        <div className="ct-duvody">
          {duvody.map((d) => (
            <div key={d.cislo} className="ct-duvod">
              <p className="ct-duvod-cislo">
                {d.cislo}
                <span className="ct-duvod-jednotka">{d.jednotka}</span>
              </p>
              <p className="ct-duvod-text">{d.text}</p>
            </div>
          ))}
        </div>

        <div className="ct-reference">
          {reference.map((r) => (
            <figure key={r.kdo} className="ct-ref">
              <blockquote className="ct-ref-citat">„{r.citat}“</blockquote>
              <figcaption className="ct-ref-kdo">— {r.kdo}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}

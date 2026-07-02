const sluzby = [
  {
    nazev: "Demolice objektů",
    popis:
      "Rodinné domy, hospodářské budovy, průmyslové haly. Postupné rozebrání nebo strojová demolice podle statiky a okolní zástavby.",
    stroj: "pásové rypadlo s hydraulickými nůžkami",
  },
  {
    nazev: "Vnitřní bourací práce",
    popis:
      "Vybourání příček, podlah, jader a stropů při rekonstrukcích bytů a domů. Pracujeme čistě — okolní konstrukce chráníme a prach odsáváme.",
    stroj: "bourací kladiva, minibagr do dveří",
  },
  {
    nazev: "Odvoz a recyklace suti",
    popis:
      "Kontejnery přistavíme do 24 hodin. Beton a cihlu drtíme na recyklát, který můžete rovnou použít do podkladních vrstev.",
    stroj: "kontejnery 3–15 m³, mobilní drtič",
  },
  {
    nazev: "Terénní a výkopové práce",
    popis:
      "Po demolici pozemek srovnáme, vykopeme základy nebo připravíme pláň pro novou stavbu. Odjíždíme, až když je parcela připravená stavět.",
    stroj: "rypadlo-nakladač, vibrační válec",
  },
];

const kroky = [
  {
    faze: "Obhlídka",
    text: "Přijedeme na místo v Hradci Králové a okolí zdarma. Posoudíme konstrukci, přístup techniky a sousední budovy.",
  },
  {
    faze: "Nabídka a povolení",
    text: "Do tří dnů dostanete pevnou cenu včetně odvozu suti. Ohlášení odstranění stavby na úřadě vyřídíme za vás.",
  },
  {
    faze: "Demolice",
    text: "Běžný rodinný dům zmizí za 3–5 dní. Pracujeme pojištění na 5 milionů Kč, sousedy předem informujeme.",
  },
  {
    faze: "Čistá parcela",
    text: "Předáme zhutněnou, srovnanou plochu s vážními lístky ze skládky. Můžete rovnou začít stavět.",
  },
];

export default function Page() {
  return (
    <main className="rv">
      {/* ===== HERO ===== */}
      <header className="rv-hero">
        <div className="rv-hero-top">
          <span className="rv-wordmark">
            REVYO<span className="rv-wordmark-dot" aria-hidden="true">■</span>
          </span>
          <span className="rv-hero-loc">Hradec Králové — demoliční práce</span>
        </div>

        <h1 className="rv-hero-title" aria-label="Zbouráme to. Odvezeme to. Předáme čistou parcelu.">
          <span className="rv-line rv-line-1">
            <span className="rv-word rv-word-strike">ZBOURÁME</span>
          </span>
          <span className="rv-line rv-line-2">
            <span className="rv-word rv-word-crack">TO.</span>
            <span className="rv-word-sub">Odvezeme suť.</span>
          </span>
          <span className="rv-line rv-line-3">
            <span className="rv-word-clean">Předáme čistou parcelu.</span>
          </span>
        </h1>

        <div className="rv-hero-rubble" aria-hidden="true">
          <span className="rv-brick b1" />
          <span className="rv-brick b2" />
          <span className="rv-brick b3" />
          <span className="rv-brick b4" />
          <span className="rv-brick b5" />
          <span className="rv-brick b6" />
          <span className="rv-brick b7" />
        </div>

        <div className="rv-hero-foot">
          <p className="rv-hero-claim">
            Demolice budov, vnitřní bourání a odvoz suti v Hradci Králové a do 50 km.
            Pojištění na 5&nbsp;mil.&nbsp;Kč, povolení vyřídíme za vás.
          </p>
          <a className="rv-hero-cta" href="tel:+420603263330">
            Zavolat: 603 263 330
          </a>
        </div>

        <div className="rv-hazard" aria-hidden="true" />
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="rv-section rv-sluzby" aria-labelledby="sluzby-h">
        <div className="rv-section-head">
          <span className="rv-eyebrow">Co bouráme</span>
          <h2 id="sluzby-h" className="rv-h2">
            Od jedné příčky po celou halu
          </h2>
        </div>

        <ul className="rv-grid">
          {sluzby.map((s) => (
            <li key={s.nazev} className="rv-card">
              <h3 className="rv-card-title">{s.nazev}</h3>
              <p className="rv-card-text">{s.popis}</p>
              <p className="rv-card-stroj">
                <span className="rv-stroj-label">Technika</span>
                {s.stroj}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== PRŮBĚH / DŮVĚRA ===== */}
      <section className="rv-section rv-postup" aria-labelledby="postup-h">
        <div className="rv-section-head">
          <span className="rv-eyebrow rv-eyebrow-light">Jak to probíhá</span>
          <h2 id="postup-h" className="rv-h2 rv-h2-light">
            Od obhlídky k prázdnému pozemku ve čtyřech krocích
          </h2>
        </div>

        <ol className="rv-kroky">
          {kroky.map((k, i) => (
            <li key={k.faze} className="rv-krok">
              <span className="rv-krok-num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="rv-krok-title">{k.faze}</h3>
                <p className="rv-krok-text">{k.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="rv-fakta">
          <div className="rv-fakt">
            <span className="rv-fakt-cislo">10+ let</span>
            <span className="rv-fakt-popis">bourání a stavebních prací v Královéhradeckém kraji</span>
          </div>
          <div className="rv-fakt">
            <span className="rv-fakt-cislo">5 mil. Kč</span>
            <span className="rv-fakt-popis">pojištění odpovědnosti za škody na každé zakázce</span>
          </div>
          <div className="rv-fakt">
            <span className="rv-fakt-cislo">100 %</span>
            <span className="rv-fakt-popis">suti končí na skládce nebo v recyklátu — doložíme vážními lístky</span>
          </div>
        </div>

        <p className="rv-adresa">
          Revyo s.r.o. · Gagarinova 351, 500 03 Hradec Králové · revyo@seznam.cz
        </p>
      </section>
    </main>
  );
}

const sortiment = [
  {
    kod: "BETON",
    nazev: "Betony a malty Baumit",
    popis:
      "Konstrukční betony B 20 a B 30, zdicí i zakládací malty. Skladem na paletách, ceny držíme dlouhodobě nízko.",
    cena: "od 99 Kč / 25 kg",
  },
  {
    kod: "ZDIVO",
    nazev: "Zdicí materiál",
    popis:
      "Cihelné bloky, pórobeton, ztracené bednění, překlady. Kamionové odběry vozíme přímo z výrobních míst — bez mezisklad, bez přirážky.",
    cena: "cena dle poptávky",
  },
  {
    kod: "IZOLACE",
    nazev: "Hydroizolace a asfaltové pásy",
    popis:
      "Modifikované pásy charBIT ELAST G S40, penetrace, tekuté lepenky. Poradíme se skladbou pro základy i plochou střechu.",
    cena: "1 425 Kč / role 7,5 m²",
  },
  {
    kod: "DRENÁŽ",
    nazev: "Drenáž a kanalizace",
    popis:
      "Ohebné drenážní potrubí DN100, geotextilie, šachty a KG systém. Vše, co potřebujete kolem základové desky.",
    cena: "1 770 Kč / role 50 m",
  },
  {
    kod: "SYPKÉ",
    nazev: "Sypké materiály a pytlované směsi",
    popis:
      "Písky, štěrky, betonové a omítkové směsi v pytlích. Složíme hydraulickou rukou přesně tam, kam ukážete.",
    cena: "dovoz po Brně a okolí",
  },
  {
    kod: "SUCHÁ",
    nazev: "Suchá výstavba a fasády",
    popis:
      "Sádrokarton, profily, zateplovací systémy, omítky. Ucelené systémy od dodavatelů, se kterými stavíme roky.",
    cena: "cena dle poptávky",
  },
];

const kroky = [
  {
    krok: "Zavoláte nebo napíšete",
    detail:
      "Řeknete, co stavíte — základy, hrubou stavbu, střechu. Nemusíte znát přesné názvy materiálů, to je naše práce.",
  },
  {
    krok: "Naceníme do druhého dne",
    detail:
      "Pošleme konkrétní nabídku s cenami vč. DPH a termínem dodání. Žádné skryté položky za dopravu nebo palety.",
  },
  {
    krok: "Přivezeme a složíme",
    detail:
      "Vlastní auto s hydraulickou rukou. Palety složíme na dvůr, k plotu nebo rovnou k míchačce. Vratky palet po domluvě.",
  },
];

export default function Page() {
  return (
    <main className="sd">
      {/* ===== HERO ===== */}
      <header className="sd-hero">
        <div className="sd-hero-top">
          <span className="sd-wordmark">
            DOSTÁL<span className="sd-wordmark-sub">stavebniny · Střelice u Brna</span>
          </span>
          <a className="sd-hero-tel" href="tel:+420602880668">
            602 880 668
          </a>
        </div>

        <div className="sd-hero-body">
          <p className="sd-hero-eyebrow">Rodinná firma Dostálovi — beton, zdivo, izolace</p>
          <h1 className="sd-hero-title">
            <span className="sd-line sd-line-1">Materiál</span>
            <span className="sd-line sd-line-2">na paletě,</span>
            <span className="sd-line sd-line-3">
              složený <em>u vás.</em>
            </span>
          </h1>
          <p className="sd-hero-lead">
            Stavebniny pro Brno a okolí. Naceníme po telefonu, přivezeme vlastním
            autem a hydraulickou rukou složíme přesně tam, kde materiál potřebujete.
          </p>
          <div className="sd-hero-actions">
            <a className="sd-btn sd-btn-solid" href="tel:+420602880668">
              Zavolat Honzovi
            </a>
            <a className="sd-btn sd-btn-line" href="mailto:obchod@stavebninydostal.cz">
              Poslat poptávku
            </a>
          </div>
        </div>

        {/* signature: paletová mřížka — půdorys skladu */}
        <div className="sd-pallet" aria-hidden="true">
          <div className="sd-pallet-cell sd-pc-fill">B 20</div>
          <div className="sd-pallet-cell">B 30</div>
          <div className="sd-pallet-cell sd-pc-fill">DN100</div>
          <div className="sd-pallet-cell">S40</div>
          <div className="sd-pallet-cell">25 kg</div>
          <div className="sd-pallet-cell sd-pc-fill">50 m</div>
        </div>

        <div className="sd-hero-strip" role="note">
          <strong>Stěhujeme se:</strong> prodejna Nádražní je od 25. 8. 2025 zavřená.
          Nový sklad Za Humny, Střelice právě dokončujeme — dovoz a nacenění po
          telefonu jedou dál beze změny.
        </div>
      </header>

      {/* ===== SORTIMENT ===== */}
      <section className="sd-section" aria-labelledby="sortiment-h">
        <div className="sd-section-head">
          <h2 id="sortiment-h">Co máme na skladě</h2>
          <p>
            Šest regálů, které pokryjí stavbu od základové spáry po střechu. Ceny
            uvádíme vč. DPH — to, co vidíte, zaplatíte.
          </p>
        </div>

        <ul className="sd-grid">
          {sortiment.map((s) => (
            <li className="sd-card" key={s.kod}>
              <span className="sd-card-kod">{s.kod}</span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <span className="sd-card-cena">{s.cena}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== JAK NAKUPUJETE ===== */}
      <section className="sd-section sd-section-dark" aria-labelledby="jak-h">
        <div className="sd-section-head">
          <h2 id="jak-h">Jak se u nás nakupuje</h2>
          <p>
            Většinu obchodů domluvíme po telefonu a e-mailem — zákazníci jsou na to
            u nás zvyklí roky. Tři kroky, žádné formuláře navíc.
          </p>
        </div>

        <ol className="sd-steps">
          {kroky.map((k, i) => (
            <li className="sd-step" key={k.krok}>
              <span className="sd-step-num">{i + 1}</span>
              <h3>{k.krok}</h3>
              <p>{k.detail}</p>
            </li>
          ))}
        </ol>

        <div className="sd-trust">
          <div className="sd-trust-item">
            <span className="sd-trust-big">Dostálovi</span>
            <span className="sd-trust-small">
              Honza, Martin a Lenka — na telefonu je vždy někdo z rodiny, ne call
              centrum.
            </span>
          </div>
          <div className="sd-trust-item">
            <span className="sd-trust-big">po–pá 7–17</span>
            <span className="sd-trust-small">
              Sklad Za Humny, Střelice 664 47. Kamionové odběry z výrobních míst
              beze změny.
            </span>
          </div>
          <div className="sd-trust-item">
            <span className="sd-trust-big">Baumit &amp; spol.</span>
            <span className="sd-trust-small">
              Odebíráme přímo od výrobců — Baumit, charBIT a další ověření
              dodavatelé.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

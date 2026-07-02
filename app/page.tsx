// SONADOS Trans, s.r.o. — zemní práce, Brno
// Koncept: „Vrstvy zeminy" — celý web je řez terénem. Hero jako geologický profil,
// signature prvek: zubatá linie lžíce bagru (SVG) dělí sekce jako čerstvý výkop.
// Paleta: jíl, ornice, beton, výstražná žlutá strojů.

const sluzby = [
  {
    hloubka: "0,3 m",
    nazev: "Skrývka ornice a terénní úpravy",
    popis:
      "Sejmeme ornici, srovnáme pozemek do roviny nebo do spádu podle projektu. Zeminu uložíme na deponii, nebo odvezeme.",
  },
  {
    hloubka: "1,2 m",
    nazev: "Výkopy pro sítě a přípojky",
    popis:
      "Rýhy pro vodu, kanalizaci, plyn i elektro — v nezámrzné hloubce, se zásypem a hutněním po vrstvách. Včetně podsypů z písku.",
  },
  {
    hloubka: "3,5 m",
    nazev: "Základy a jímky",
    popis:
      "Výkopy základových pasů a desek, jámy pro jímky, septiky a bazény. Přesně na centimetry, připravené pro betonáž.",
  },
  {
    hloubka: "—",
    nazev: "Demolice a odvoz suti",
    popis:
      "Zbouráme starou stodolu, kůlnu nebo garáž. Suť naložíme, odvezeme na skládku a doložíme vážní lístky.",
  },
];

const duvody = [
  {
    cislo: "14",
    jednotka: "let",
    text: "kopeme v Brně a okolí — od Bystrce po Tuřany. Terén tady známe, včetně brněnského jílu.",
  },
  {
    cislo: "48",
    jednotka: "hodin",
    text: "do té doby vám po zavolání přijedeme pozemek zdarma projít a říct rovnou cenu.",
  },
  {
    cislo: "1",
    jednotka: "parta",
    text: "od začátku do konce. Strojník, který u vás kope, je ten samý, se kterým jste mluvili.",
  },
];

const reference = [
  {
    misto: "Brno-Líšeň",
    prace: "Základová deska + přípojky pro novostavbu RD",
    citace:
      "„Přijeli, kdy slíbili, výkop seděl na centimetr. Betonáři neměli jedinou připomínku.“",
    jmeno: "pan Horák, stavebník",
  },
  {
    misto: "Šlapanice",
    prace: "Demolice stodoly a srovnání pozemku",
    citace:
      "„Za tři dny bylo po stodole i po suti. Dostali jsme vážní lístky ze skládky, vše doložené.“",
    jmeno: "rodina Veselých",
  },
  {
    misto: "Brno-Ivanovice",
    prace: "Kanalizační přípojka pod komunikací",
    citace:
      "„Zvládli i podvrt pod silnicí, o povolení záboru se postarali sami. Ušetřilo nám to týdny.“",
    jmeno: "paní Skácelová",
  },
];

function ZubataLinie({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      className={flip ? "zub zub--flip" : "zub"}
      viewBox="0 0 1440 48"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0 48 V20 L60 20 90 44 150 44 180 12 240 12 270 40 330 40 360 18 430 18 460 44 540 44 570 8 640 8 670 36 750 36 780 16 850 16 880 44 960 44 990 12 1070 12 1100 38 1180 38 1210 20 1290 20 1320 44 1390 44 1410 24 1440 24 V48 Z" />
    </svg>
  );
}

export default function Page() {
  return (
    <main className="sn">
      {/* ============ HERO — geologický řez ============ */}
      <header className="hero">
        <div className="hero__top">
          <div className="wordmark" aria-label="SONADOS Trans">
            <span className="wordmark__main">SONADOS</span>
            <span className="wordmark__sub">TRANS · ZEMNÍ PRÁCE · BRNO</span>
          </div>
          <a className="hero__tel" href="tel:+420777000000">
            Zavolat strojníkovi
          </a>
        </div>

        <div className="hero__body">
          <p className="hero__eyebrow">Bagr, nákladní auto a parta, co ví, kde kopat</p>
          <h1 className="hero__title">
            <span className="hero__line hero__line--1">Kopeme,</span>
            <span className="hero__line hero__line--2">bouráme,</span>
            <span className="hero__line hero__line--3">
              srovnáme<span className="hero__dot">.</span>
            </span>
          </h1>
          <p className="hero__lead">
            Zemní práce pro stavebníky v Brně a do 30 km okolo. Výkopy základů,
            přípojky, demolice — s vlastní technikou a rovnou cenou předem.
          </p>
          <div className="hero__cta">
            <a className="btn btn--yellow" href="tel:+420777000000">
              Zavolat: domluvit obhlídku
            </a>
            <a className="btn btn--ghost" href="#sluzby">
              Co všechno kopeme
            </a>
          </div>
        </div>

        {/* signature: profil výkopu s kótami hloubek */}
        <div className="hero__profil" aria-hidden="true">
          <div className="vrstva vrstva--ornice">
            <span className="vrstva__kota">0,0 m — ornice</span>
          </div>
          <div className="vrstva vrstva--jil">
            <span className="vrstva__kota">1,2 m — brněnský jíl</span>
          </div>
          <div className="vrstva vrstva--sterk">
            <span className="vrstva__kota">3,5 m — štěrkové podloží</span>
          </div>
        </div>
        <ZubataLinie />
      </header>

      {/* ============ SLUŽBY — podle hloubky ============ */}
      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="sekce__hlava">
          <p className="sekce__eyebrow">Ceník práce vám řekneme na místě — bez skrytých položek</p>
          <h2 id="sluzby-h" className="sekce__title">
            Co pro vás vykopeme
          </h2>
        </div>

        <ul className="sluzby__list">
          {sluzby.map((s) => (
            <li key={s.nazev} className="sluzba">
              <div className="sluzba__hloubka">
                <span className="sluzba__cislo">{s.hloubka}</span>
                <span className="sluzba__label">hloubka</span>
              </div>
              <div className="sluzba__text">
                <h3 className="sluzba__nazev">{s.nazev}</h3>
                <p className="sluzba__popis">{s.popis}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="sluzby__pozn">
          Malý pásový bagr projede brankou od 90 cm — dostaneme se i na zahradu
          za dům. Odvoz řešíme vlastními kontejnery.
        </p>
      </section>

      <div className="predel">
        <ZubataLinie flip />
      </div>

      {/* ============ DŮVĚRA — čísla + reference ============ */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="sekce__hlava sekce__hlava--svetla">
          <p className="sekce__eyebrow sekce__eyebrow--svetly">Brno a okolí · Líšeň, Šlapanice, Ivanovice, Bystrc…</p>
          <h2 id="duvera-h" className="sekce__title sekce__title--svetly">
            Proč u nás lidi kopou znovu
          </h2>
        </div>

        <div className="duvody">
          {duvody.map((d) => (
            <div key={d.cislo + d.jednotka} className="duvod">
              <p className="duvod__cislo">
                {d.cislo}
                <span className="duvod__jednotka"> {d.jednotka}</span>
              </p>
              <p className="duvod__text">{d.text}</p>
            </div>
          ))}
        </div>

        <ul className="reference">
          {reference.map((r) => (
            <li key={r.misto} className="ref">
              <p className="ref__misto">{r.misto}</p>
              <p className="ref__prace">{r.prace}</p>
              <blockquote className="ref__citace">{r.citace}</blockquote>
              <p className="ref__jmeno">{r.jmeno}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

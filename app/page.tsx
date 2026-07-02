// BARKOTEX PRAHA — návrh náhledového webu
// Koncept: „Vzorník" — celá vizuální řeč vychází z parketového vzorníku:
// stromečkový vzor (herringbone) jako signature grafika, palety odvozené
// z tónů dřeva (dub přírodní, dub kouřový, ořech), typografie jako na
// štítcích vzorků v prodejně.

const sluzby = [
  {
    znacka: "Podlahy",
    titul: "Dřevěné a vinylové podlahy",
    text: "Dub, jasan, ořech i vinyl s dekorem dřeva. Vzorky vám půjčíme domů, ať si tón podlahy posoudíte ve vlastním světle. Montáž provedou naši parketáři — včetně vyrovnání podkladu a lištování.",
    detail: "Stromeček · rybina · prkno · čtverce",
  },
  {
    znacka: "Tapety",
    titul: "Vinylové a textilní tapety",
    text: "Nejrychlejší proměna interiéru. Vedeme kolekce BN International a textilní tapety pro reprezentativní prostory. Poradíme se vzorem, spočítáme spotřebu, nalepíme.",
    detail: "BN International · Roysons · Calacutta",
  },
  {
    znacka: "Kuchyně",
    titul: "Italské kuchyně Cesar",
    text: "Luxusní materiály a design, který si upravíte podle sebe — vznikne originál. Navrhneme sestavu včetně spotřebičů a sladíme ji s podlahou z jedné ruky.",
    detail: "Návrh · dodávka · montáž vč. spotřebičů",
  },
  {
    znacka: "Servis",
    titul: "Poradenství a kalkulace zdarma",
    text: "Přijďte s půdorysem nebo jen s fotkou z mobilu. Doporučíme materiál podle provozu místnosti, zapůjčíme vzorky a do týdne pošleme nezávaznou kalkulaci.",
    detail: "Většina materiálů skladem k vidění na prodejnách",
  },
]

const reference = [
  {
    nazev: "Tančící dům, Praha",
    text: "Koberce vyrobené na zakázku u Newhey Carpets pro všechny apartmány.",
    plocha: "1 200 m²",
  },
  {
    nazev: "Hotel Grid, Brno",
    text: "Kompletní dodávka koberců a vinylových tapet do pokojů, restaurace i společných prostor.",
    plocha: "3 000 m²",
  },
  {
    nazev: "Krejčovství Blažek, Praha",
    text: "Vlněné koberce Wilton Carpets a textilní tapety Calacutta v centru Prahy.",
    plocha: "350 m²",
  },
  {
    nazev: "Hotel 987, Praha",
    text: "Laminátové podlahy Pergo ve všech hotelových pokojích.",
    plocha: "všechny pokoje",
  },
  {
    nazev: "Mediahouse",
    text: "Podlahové čtverce Flotex v kancelářích — odolné a tiché pod nohama.",
    plocha: "4 000 m²",
  },
  {
    nazev: "Hotel Passage, Brno",
    text: "Designové kobercové čtverce Shaw, kolekce Off The Grid, na hotelových chodbách.",
    plocha: "1 500 m²",
  },
]

export default function Page() {
  return (
    <main className="bx">
      {/* ===== HERO ===== */}
      <header className="bx-hero">
        <div className="bx-hero-top">
          <span className="bx-wordmark" aria-label="Barkotex Praha">
            BARKO<span className="bx-wordmark-tex">TEX</span>
            <span className="bx-wordmark-sub">Praha · od roku 1993</span>
          </span>
          <span className="bx-hero-kontakt">
            <a href="tel:+420727836074" className="bx-tel">+420 727 836 074</a>
          </span>
        </div>

        <div className="bx-hero-grid">
          <div className="bx-hero-text">
            <p className="bx-eyebrow">Parkety · podlahy · tapety · kuchyně</p>
            <h1 className="bx-h1">
              <span className="bx-h1-line">Podlaha se</span>
              <span className="bx-h1-line">nevybírá z fotky.</span>
              <span className="bx-h1-line bx-h1-accent">Vybírá se dotykem.</span>
            </h1>
            <p className="bx-lead">
              Ve dvou pražských prodejnách máme většinu materiálů skladem —
              dub, jasan i ořech si vezmete do ruky, vzorek půjčíme domů.
              Rodinná firma, třicet let parket, vlastní montážní party.
            </p>
            <div className="bx-hero-akce">
              <a href="#sluzby" className="bx-btn bx-btn-plna">Prohlédnout nabídku</a>
              <a href="#reference" className="bx-btn bx-btn-linka">Naše realizace</a>
            </div>
            <ul className="bx-prodejny" aria-label="Prodejny">
              <li><strong>Praha 5</strong> — Šafránkova 1238/1, Stodůlky</li>
              <li><strong>Praha 9</strong> — Poděbradská 777/9a, Vysočany</li>
            </ul>
          </div>

          {/* Signature: stromečkový vzor (herringbone) v tónech vzorníku dřeva */}
          <div className="bx-herringbone" aria-hidden="true">
            <svg viewBox="0 0 400 560" preserveAspectRatio="xMidYMid slice" focusable="false">
              <defs>
                <pattern id="bx-hb" width="160" height="160" patternUnits="userSpaceOnUse" patternTransform="rotate(0)">
                  {/* levá diagonála */}
                  <g>
                    <rect x="-6" y="14" width="120" height="34" rx="2" fill="var(--dub)" transform="rotate(45 40 40)" />
                    <rect x="74" y="94" width="120" height="34" rx="2" fill="var(--dub-kour)" transform="rotate(45 120 120)" />
                    <rect x="34" y="54" width="120" height="34" rx="2" fill="var(--orech)" transform="rotate(-45 80 80)" />
                    <rect x="-46" y="134" width="120" height="34" rx="2" fill="var(--jasan)" transform="rotate(-45 0 160)" />
                    <rect x="114" y="-26" width="120" height="34" rx="2" fill="var(--jasan)" transform="rotate(-45 160 0)" />
                    <rect x="-86" y="94" width="120" height="34" rx="2" fill="var(--dub-kour)" transform="rotate(45 -40 120)" />
                    <rect x="74" y="-66" width="120" height="34" rx="2" fill="var(--orech)" transform="rotate(45 120 -40)" />
                  </g>
                </pattern>
              </defs>
              <rect width="400" height="560" fill="url(#bx-hb)" />
              <rect width="400" height="560" fill="url(#bx-hb)" opacity="0" />
            </svg>
            <span className="bx-herringbone-stitek">
              <em>Vzor č. 01</em>
              Stromeček — dub / kouřový dub / ořech
            </span>
          </div>
        </div>
      </header>

      {/* ===== SLUŽBY — vzorník ===== */}
      <section className="bx-sekce" id="sluzby" aria-labelledby="sluzby-h">
        <div className="bx-sekce-hlava">
          <p className="bx-eyebrow">Co u nás vyberete</p>
          <h2 className="bx-h2" id="sluzby-h">Čtyři vzorky z naší nabídky</h2>
          <p className="bx-sekce-uvod">
            Všechno pod jednou střechou: podlaha, stěny i kuchyně od jednoho
            dodavatele znamenají jeden termín, jednu záruku a sladěné materiály.
          </p>
        </div>

        <div className="bx-vzornik">
          {sluzby.map((s) => (
            <article className="bx-vzorek" key={s.znacka}>
              <div className="bx-vzorek-hrana" aria-hidden="true" />
              <p className="bx-vzorek-znacka">{s.znacka}</p>
              <h3 className="bx-h3">{s.titul}</h3>
              <p className="bx-vzorek-text">{s.text}</p>
              <p className="bx-vzorek-detail">{s.detail}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== REFERENCE — položené metry ===== */}
      <section className="bx-sekce bx-sekce-tmava" id="reference" aria-labelledby="reference-h">
        <div className="bx-sekce-hlava">
          <p className="bx-eyebrow bx-eyebrow-svetly">Kde naše podlahy leží</p>
          <h2 className="bx-h2" id="reference-h">Přes 13 000 m² v hotelech, kancelářích i domech</h2>
          <p className="bx-sekce-uvod">
            Pracujeme pro největší české developery a architekty. Tady je pár
            adres, kam se po naší práci chodí — doslova.
          </p>
        </div>

        <ul className="bx-reference">
          {reference.map((r) => (
            <li className="bx-ref" key={r.nazev}>
              <div className="bx-ref-radek">
                <h3 className="bx-ref-nazev">{r.nazev}</h3>
                <span className="bx-ref-plocha">{r.plocha}</span>
              </div>
              <p className="bx-ref-text">{r.text}</p>
            </li>
          ))}
        </ul>

        <p className="bx-ref-pozn">
          Rodinná firma, 30 let na trhu. Vzorky, poradenství i kalkulace zdarma —
          zastavte se v Praze 5 nebo v Praze 9.
        </p>
      </section>
    </main>
  )
}

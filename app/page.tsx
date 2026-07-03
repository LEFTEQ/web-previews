const produkty = [
  {
    nazev: "Vymývaná dlažba",
    popis:
      "Terasy, chodníky a nášlapy do zahrady. Praný povrch z říčního kameniva neklouže ani za deště a nevyšlape se.",
    frakce: "4–8 mm kamenivo",
  },
  {
    nazev: "Bazénové lemy",
    popis:
      "Rovné kusy, rohy i rádiusy pro lemování bazénu. Hrana zaoblená tak, aby se po ní dalo chodit bosky.",
    frakce: "oblá hrana R30",
  },
  {
    nazev: "Schodišťové prvky",
    popis:
      "Obložíte staré schodiště nebo postavíte nové. Stupnice a podstupnice na míru vaší stavbě.",
    frakce: "stupnice až 120 cm",
  },
  {
    nazev: "Plotové tvárnice a stříšky",
    popis:
      "Zdící tvárnice a krycí stříšky v několika povrchech. Plot, který drží a nemusí se natírat.",
    frakce: "skladebně 40 cm",
  },
  {
    nazev: "Květináče a lavičky",
    popis:
      "Betonový zahradní nábytek — truhlíky, kašny, stoly. Kvetoucí lavičku složíme z lavice a truhlíku.",
    frakce: "mrazuvzdorné",
  },
  {
    nazev: "Atypy na zakázku",
    popis:
      "Svahovky, palisády, žlaby, vodoměrné šachty i prvky podle vašeho výkresu. Stačí zavolat.",
    frakce: "vlastní forma",
  },
];

const kroky = [
  {
    t: "Vybere se povrch a formát",
    p: "Ve vzorkovně nebo po telefonu. Poradíme, který formát sedne na terasu a který na chodník — na výběru prvku záleží.",
  },
  {
    t: "Lijeme a vymýváme",
    p: "Každý kus odléváme ve vlastní formě. Povrch vymýváme, dokud kamenivo nevystoupí — proto dlažba neklouže.",
  },
  {
    t: "Zraje 28 dní",
    p: "Beton nabírá pevnost čtyři týdny. Nespěcháme na něj, proto vydrží mráz i posypovou sůl.",
  },
  {
    t: "Paleta až na stavbu",
    p: "Vozíme auty s hydraulickým čelem a paleťákem — složíme vám ji před dům, ne na kraj ulice. Nebo si ji vyzvednete u nás.",
  },
];

export default function Page() {
  return (
    <main className="eb">
      {/* ===== HERO ===== */}
      <header className="hero" aria-label="EXTERIER BETON — betonové výrobky">
        <div className="hero-top">
          <span className="wordmark">
            EXTERIER<b>BETON</b>
          </span>
          <a className="hero-tel" href="tel:+420602516225">
            +420 602 516 225
          </a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Výroba betonové dlažby a zahradních prvků · Olomoucko</p>
          <h1 className="hero-title">
            <span className="line l1">Beton,</span>
            <span className="line l2">který se vymývá,</span>
            <span className="line l3">ne&nbsp;vyšlape.</span>
          </h1>
          <p className="hero-sub">
            Dlažbu, bazénové lemy, schody i plotové tvárnice lijeme do vlastních forem
            a povrch vymýváme na kámen. Vyberete si ve vzorkovně, paletu vám složíme
            hydraulickým čelem přímo na stavbě.
          </p>
          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+420602516225">
              Zavolat výrobě
            </a>
            <span className="hero-hours">Po–Pá 7:00–14:45 · mluvíte přímo s betonárkou</span>
          </div>
        </div>

        {/* signature: vymývaný pás — kamenivo vystupující z betonu */}
        <div className="agg-band" aria-hidden="true">
          <div className="agg-label">povrch: vymývaný ← → hladký</div>
          <svg className="agg-svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <rect x="0" y="0" width="1200" height="120" fill="var(--beton-2)" />
            <g className="agg-stones">
              <circle cx="30" cy="38" r="16" fill="var(--kam-1)" />
              <circle cx="78" cy="82" r="13" fill="var(--kam-2)" />
              <circle cx="120" cy="30" r="11" fill="var(--kam-3)" />
              <circle cx="165" cy="70" r="15" fill="var(--kam-1)" />
              <circle cx="210" cy="28" r="10" fill="var(--kam-2)" />
              <circle cx="250" cy="84" r="13" fill="var(--kam-3)" />
              <circle cx="300" cy="44" r="12" fill="var(--kam-1)" />
              <circle cx="348" cy="88" r="10" fill="var(--kam-2)" />
              <circle cx="392" cy="32" r="12" fill="var(--kam-3)" />
              <circle cx="440" cy="72" r="11" fill="var(--kam-1)" />
              <circle cx="490" cy="36" r="9" fill="var(--kam-2)" />
              <circle cx="535" cy="82" r="10" fill="var(--kam-3)" />
              <circle cx="585" cy="46" r="9" fill="var(--kam-1)" />
              <circle cx="632" cy="86" r="8" fill="var(--kam-2)" />
              <circle cx="678" cy="34" r="8" fill="var(--kam-3)" />
              <circle cx="725" cy="74" r="7" fill="var(--kam-1)" />
              <circle cx="772" cy="42" r="7" fill="var(--kam-2)" />
              <circle cx="818" cy="84" r="6" fill="var(--kam-3)" />
              <circle cx="864" cy="38" r="5" fill="var(--kam-1)" />
              <circle cx="910" cy="76" r="5" fill="var(--kam-2)" />
              <circle cx="955" cy="44" r="4" fill="var(--kam-3)" />
              <circle cx="1000" cy="82" r="3.5" fill="var(--kam-1)" />
              <circle cx="1045" cy="40" r="3" fill="var(--kam-2)" />
              <circle cx="1090" cy="78" r="2.5" fill="var(--kam-3)" />
              <circle cx="1135" cy="46" r="2" fill="var(--kam-1)" />
            </g>
            <rect x="0" y="0" width="1200" height="120" fill="url(#fade)" />
            <defs>
              <linearGradient id="fade" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0.55" stopColor="var(--beton-2)" stopOpacity="0" />
                <stop offset="1" stopColor="var(--beton-2)" stopOpacity="0.92" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </header>

      {/* ===== SEKCE 1: SORTIMENT ===== */}
      <section className="sortiment" aria-labelledby="sortiment-h">
        <div className="sec-head">
          <p className="sec-eyebrow">Co u nás odlijeme</p>
          <h2 id="sortiment-h">
            Všechno pro exteriér.
            <br />
            Všechno z betonu.
          </h2>
          <p className="sec-lead">
            Standardně ve vymývaném povrchu, většinu prvků umíme i v hladkém
            přírodním betonu. Ceník a katalog 2026 vám pošleme e-mailem.
          </p>
        </div>

        <ul className="grid">
          {produkty.map((p) => (
            <li key={p.nazev} className="karta">
              <h3>{p.nazev}</h3>
              <p>{p.popis}</p>
              <span className="karta-tag">{p.frakce}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== SEKCE 2: JAK TO U NÁS CHODÍ / DŮVĚRA ===== */}
      <section className="proces" aria-labelledby="proces-h">
        <div className="sec-head sec-head--light">
          <p className="sec-eyebrow">Od formy po vaši terasu</p>
          <h2 id="proces-h">Vyrábíme sami, proto ručíme za každou paletu</h2>
        </div>

        <ol className="kroky">
          {kroky.map((k, i) => (
            <li key={k.t} className="krok">
              <span className="krok-cislo" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{k.t}</h3>
                <p>{k.p}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="duvera">
          <blockquote className="citace">
            <p>
              „Terasu z vymývané dlažby máme osmou zimu. Žádný kus nepraskl,
              v zimě se nemusíme bát náledí — kamenivo drží podrážku.“
            </p>
            <cite>— rodinný dům, Olomouc-Slavonín</cite>
          </blockquote>
          <dl className="fakta">
            <div>
              <dt>Vzorkovna</dt>
              <dd>Prohlédnete a osaháte si povrchy naživo, ne z fotky.</dd>
            </div>
            <div>
              <dt>Doprava na stavbu</dt>
              <dd>Auta s hydraulickým čelem, paletu složíme kde potřebujete.</dd>
            </div>
            <div>
              <dt>Technické poradenství</dt>
              <dd>Spočítáme spotřebu, poradíme pokládku i spárování.</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}

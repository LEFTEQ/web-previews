// Rockfoil Centrum Olomouc — statický náhled
// Kamenné dýhy a folie z pravého kamene: břidlice, křemeny, onyxy, mramory.
// Signature: „stratigrafie" — vodorovné vrstvy kamene jako grafický i strukturní princip celé stránky.

const sortiment = [
  {
    code: "BŘ",
    name: "Břidlicové dýhy",
    desc: "Klasika Rockfoilu. Pravá štípaná břidlice v tloušťce 1–2 mm na textilním nosiči. Ohnete ji kolem sloupu, nalepíte na dvířka kuchyně i na fasádu.",
    tone: "#3f4650",
  },
  {
    code: "KŘ",
    name: "Křemeny a slídy",
    desc: "Kámen, který se leskne. Stříbrné, měděné a zlaté slídové vrstvy pro recepce, koupelny a stěny, které mají být vidět.",
    tone: "#8a7d6b",
  },
  {
    code: "RT",
    name: "R-Thinstone",
    desc: "Ultratenké pravé onyxy, mramory, travertiny a žuly. Velké formáty, minimální váha — tam, kam by masivní kámen nikdy nešel.",
    tone: "#b9a888",
  },
  {
    code: "PR",
    name: "Průsvitné + LED",
    desc: "Velkoformátové kameny s podsvícením. Onyx nebo břidlice před LED panelem promění bar, recepci či koupelnu ve světelný objekt.",
    tone: "#c2833f",
  },
  {
    code: "TR",
    name: "Coverial travertin",
    desc: "Velkoformátový obklad v designu travertinu. Nové vzory a barvy skladem — vzhled římského kamene za rozumnou cenu.",
    tone: "#a89272",
  },
  {
    code: "SL",
    name: "Lepidla a know-how",
    desc: "K dýze dostanete i systém: správné lepidlo, impregnaci a postup. Poradíme, jak na to — od podkladu po spáru.",
    tone: "#5a6069",
  },
];

const duvody = [
  {
    num: "10 000+ m²",
    label: "skladem v Olomouci",
    text: "Tisíce kusů kamenných dýh v různých formátech. Největší výběr druhů i kusů v ČR a SR — a všechno na jednom místě, prodejna i sklad.",
  },
  {
    num: "80+ druhů",
    label: "hornin a dezénů",
    text: "Vlastní import, vlastní skladový stav. Nečekáte na dodávku z ciziny — vybíráte z toho, co tu fyzicky leží.",
  },
  {
    num: "kus po kusu",
    label: "vybíráte sami",
    text: "Kámen je přírodní, žádné dva kusy nejsou stejné. Proto si u nás každý zákazník vybírá konkrétní desky přímo ze skladu — to, co odveze, viděl na vlastní oči.",
  },
];

export default function Page() {
  return (
    <main className="rf">
      {/* ————— HERO ————— */}
      <header className="rf-hero">
        <div className="rf-hero-top">
          <span className="rf-wordmark">
            ROCK<em>FOIL</em>
            <span className="rf-wordmark-sub">Centrum Olomouc</span>
          </span>
          <a className="rf-hero-tel" href="tel:+420732221068">
            +420 732 221 068
          </a>
        </div>

        <div className="rf-hero-body">
          <p className="rf-eyebrow">Kamenné dýhy a folie z pravého kamene · Hálkova 37, Olomouc</p>
          <h1 className="rf-h1">
            <span className="rf-h1-line rf-h1-a">Kámen</span>
            <span className="rf-h1-line rf-h1-b">tenký jako</span>
            <span className="rf-h1-line rf-h1-c">dýha.</span>
          </h1>
          <p className="rf-hero-lead">
            Pravá břidlice, křemen, onyx nebo mramor v tloušťce pár milimetrů. Ohnete ho, nalepíte,
            podsvítíte. Přijeďte si vybrat konkrétní kusy — přes 10 000 m² skladem.
          </p>
          <div className="rf-hero-actions">
            <a className="rf-btn rf-btn-solid" href="tel:+420732221068">
              Zavolat a domluvit prohlídku
            </a>
            <span className="rf-hours">Po–Pá 9–12 a 13–16 · prodejna i sklad na jednom místě</span>
          </div>
        </div>

        {/* Signature: stratigrafie — vrstvy hornin, z nichž dýhy štípeme */}
        <div className="rf-strata" aria-hidden="true">
          <div className="rf-stratum rf-s1"><span>břidlice</span></div>
          <div className="rf-stratum rf-s2"><span>křemen</span></div>
          <div className="rf-stratum rf-s3"><span>onyx</span></div>
          <div className="rf-stratum rf-s4"><span>mramor</span></div>
          <div className="rf-stratum rf-s5"><span>travertin</span></div>
        </div>
      </header>

      {/* ————— SORTIMENT ————— */}
      <section className="rf-section rf-sortiment" aria-labelledby="sortiment-h">
        <div className="rf-section-head">
          <p className="rf-eyebrow">Co u nás vybíráte</p>
          <h2 id="sortiment-h" className="rf-h2">
            Šest vrstev sortimentu — všechny skladem
          </h2>
        </div>
        <ul className="rf-grid">
          {sortiment.map((s) => (
            <li key={s.code} className="rf-card">
              <span className="rf-card-chip" style={{ background: s.tone }} aria-hidden="true">
                {s.code}
              </span>
              <h3 className="rf-h3">{s.name}</h3>
              <p className="rf-card-text">{s.desc}</p>
            </li>
          ))}
        </ul>
        <p className="rf-note">
          Velkoobchod i maloobchod. Objemové a diskontní slevy — ceny podle typu dýhy vám spočítáme na
          místě nebo po telefonu.
        </p>
      </section>

      {/* ————— DŮVĚRA / SKLAD ————— */}
      <section className="rf-section rf-sklad" aria-labelledby="sklad-h">
        <div className="rf-section-head">
          <p className="rf-eyebrow rf-eyebrow-light">Proč jet do Olomouce</p>
          <h2 id="sklad-h" className="rf-h2 rf-h2-light">
            Nevybíráte z katalogu.
            <br />
            Vybíráte ze skladu.
          </h2>
        </div>
        <div className="rf-facts">
          {duvody.map((d) => (
            <article key={d.label} className="rf-fact">
              <p className="rf-fact-num">{d.num}</p>
              <p className="rf-fact-label">{d.label}</p>
              <p className="rf-fact-text">{d.text}</p>
            </article>
          ))}
        </div>
        <div className="rf-visit">
          <div>
            <h3 className="rf-h3 rf-h3-light">Rockfoil Centrum, Hálkova 1287/37, Olomouc</h3>
            <p className="rf-visit-text">
              Parkujete přímo před prodejnou. Pro individuální V.I.P. servis doporučujeme rezervaci
              termínu po telefonu — projdeme sklad s vámi a poradíme s výběrem i lepením.
            </p>
          </div>
          <a className="rf-btn rf-btn-light" href="tel:+420732221068">
            Rezervovat termín prohlídky
          </a>
        </div>
      </section>
    </main>
  );
}

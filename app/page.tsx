// Vladimír Háza — Peletkamna, Ústí nad Labem
// Design koncept: „Plamen v peci" — tmavá litina, žhavý oranžový gradient hoření,
// signature prvek: vertikální „sloupec pelet" a typografický plamen v hero.

const znacky = [
  "Edilkamin",
  "Klover",
  "La Nordica",
  "Extraflame",
  "Moretti",
  "Viadrus",
  "Benekov",
  "Galmet",
  "Calux",
  "Atmos",
];

const nabidka = [
  {
    label: "Kamna na pelety",
    heat: "6–12 kW",
    text: "Teplovzdušná, s rozvodem teplého vzduchu do vedlejších místností, nebo teplovodní s výměníkem na ústřední topení. Naprogramujete je jednou — pak topí samy.",
    detail: "Automatické čištění hořáku · samočisticí sklo · litinové topeniště z jednoho kusu",
  },
  {
    label: "Kotle na pelety",
    heat: "do 60 % úspora",
    text: "Automatické kotle pro dům, dílnu i penzion. Plně programovatelné, s nízkými emisemi a jen občasnou obsluhou — pelety dosypete, zbytek řídí kotel.",
    detail: "Vytápění domů, skladů, hotelů · napojení na stávající radiátory",
  },
  {
    label: "Krbové vložky",
    heat: "živý oheň",
    text: "Teplovodní i teplovzdušné vložky na pelety. Praskající oheň za sklem, ale s komfortem automatiky — jeden z nejlevnějších způsobů vytápění bytu i kanceláře.",
    detail: "Vhodné i pro objekty bez teplovodních rozvodů",
  },
  {
    label: "Kombinovaná kamna",
    heat: "dřevo + pelety",
    text: "Nechcete se vázat jen na pelety? Kombinovaná kamna topí dřevem i peletami — a náklady na teplo srazí zhruba o polovinu.",
    detail: "Také kamna s troubou a sporáky na pelety",
  },
];

const servisKroky = [
  {
    krok: "Poradíme",
    text: "Přijedete do showroomu v Ústí nad Labem, nebo my k vám. Spočítáme výkon podle vašeho domu a doporučíme konkrétní model — ne katalog, ale jedno řešení, které dává smysl.",
  },
  {
    krok: "Namontujeme",
    text: "Montujeme peletové kotle, kamna, ústřední topení i solární systémy. Vlastní montáž znamená, že za instalaci ručí ten, kdo vám kamna prodal.",
  },
  {
    krok: "Servisujeme",
    text: "Záruční i pozáruční servis kotlů Atmos, Klover, Moretti, Edilkamin, La Nordica a Galmet. Když kamna v lednu vynechají, víte, komu zavolat.",
  },
];

export default function Page() {
  return (
    <main className="pk">
      {/* ============ HERO ============ */}
      <header className="hero">
        <div className="hero-top">
          <span className="wordmark">
            HÁZA<span className="wordmark-dot" aria-hidden="true" />
            <span className="wordmark-sub">peletkamna</span>
          </span>
          <span className="hero-loc">Ústí nad Labem</span>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-eyebrow">Kamnářství · prodej · montáž · servis</p>
            <h1 className="hero-title">
              <span className="ht-line ht-1">Teplo,</span>
              <span className="ht-line ht-2">které si</span>
              <span className="ht-line ht-3">
                topí <em>samo.</em>
              </span>
            </h1>
            <p className="hero-lead">
              Kamna a kotle na dřevní pelety naprogramujete jednou — a pak už
              jen doplňujete zásobník. Vybereme, namontujeme a
              servisujeme. Všechno jedna firma, všechno v Ústí nad Labem.
            </p>
            <div className="hero-facts" role="list">
              <span role="listitem">Pelety Ø 6 mm skladem</span>
              <span role="listitem">10 evropských značek</span>
              <span role="listitem">Vlastní montážní tým</span>
            </div>
          </div>

          {/* Signature: sloupec pelet — zásobník, ze kterého dole hoří plamen */}
          <div className="hero-visual" aria-hidden="true">
            <div className="pellet-column">
              <span className="pellet p1" />
              <span className="pellet p2" />
              <span className="pellet p3" />
              <span className="pellet p4" />
              <span className="pellet p5" />
              <span className="pellet p6" />
              <span className="pellet p7" />
              <span className="pellet p8 glow" />
              <span className="pellet p9 ember" />
              <div className="flame">
                <span className="flame-core" />
              </div>
            </div>
            <p className="pellet-caption">
              dřevní peleta Ø 6 mm — palivo,<br />které dávkuje kamna, ne vy
            </p>
          </div>
        </div>

        <div className="hero-strip" aria-label="Značky, které prodáváme a servisujeme">
          {znacky.map((z) => (
            <span className="strip-item" key={z}>
              {z}
            </span>
          ))}
        </div>
      </header>

      {/* ============ SEKCE 1 — NABÍDKA ============ */}
      <section className="sec sec-nabidka" aria-labelledby="nabidka-h">
        <div className="sec-head">
          <h2 id="nabidka-h">Čím u vás zatopíme</h2>
          <p className="sec-lead">
            Od kamen do obýváku po kotel pro celý penzion. Všechno na dřevní
            pelety — čistý provoz, minimum popela, údržba jednou za pár dní.
          </p>
        </div>

        <div className="nabidka-grid">
          {nabidka.map((n) => (
            <article className="karta" key={n.label}>
              <div className="karta-head">
                <h3>{n.label}</h3>
                <span className="karta-heat">{n.heat}</span>
              </div>
              <p className="karta-text">{n.text}</p>
              <p className="karta-detail">{n.detail}</p>
            </article>
          ))}
        </div>

        <p className="nabidka-note">
          K tomu dřevní pelety 6 mm, příslušenství a na přání ovládání kamen na
          dálku přes GSM — kamna zapnete cestou z hor a přijedete do tepla.
        </p>
      </section>

      {/* ============ SEKCE 2 — DŮVĚRA / JAK PRACUJEME ============ */}
      <section className="sec sec-servis" aria-labelledby="servis-h">
        <div className="sec-head sec-head-light">
          <h2 id="servis-h">Jedna firma od výběru po servis</h2>
          <p className="sec-lead">
            Vladimír Háza topí peletami v Ústí nad Labem a okolí přes deset
            let. Kamna vám nikdo nepošle v krabici — přijedeme, namontujeme a
            zůstáváme na telefonu.
          </p>
        </div>

        <ol className="servis-kroky">
          {servisKroky.map((s, i) => (
            <li className="krok" key={s.krok}>
              <span className="krok-cislo" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{s.krok}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="servis-pas">
          <div className="pas-item">
            <strong>Showroom Ústí nad Labem</strong>
            <span>Kamna si osaháte a uvidíte hořet, než se rozhodnete.</span>
          </div>
          <div className="pas-item">
            <strong>Servis 6 značek kotlů</strong>
            <span>Atmos, Klover, Moretti, Edilkamin, La Nordica, Galmet.</span>
          </div>
          <div className="pas-item">
            <strong>Dotace na výměnu kotle</strong>
            <span>Poradíme s žádostí a připravíme podklady k vaší montáži.</span>
          </div>
        </div>
      </section>
    </main>
  );
}

const produkty = [
  {
    kod: "Z-90",
    nazev: "Venkovní žaluzie",
    popis:
      "Lamely Z90 a nová T80 zastaví slunce před oknem, ne až za ním. V létě uvnitř o několik stupňů chladněji — bez klimatizace.",
    detail: "Dodání od 14 dnů",
  },
  {
    kod: "R-42",
    nazev: "Venkovní rolety",
    popis:
      "Hliníkový pancíř s izolační výplní. Stín, soukromí, klid od hluku ulice a v zimě méně úniku tepla oknem.",
    detail: "Vlastní výroba, ISO a TÜV",
  },
  {
    kod: "S-05",
    nazev: "Screenové rolety",
    popis:
      "Technická tkanina propustí výhled ven, ale zastaví žár i pohledy dovnitř. Ideální na velká prosklení.",
    detail: "Tkaniny v desítkách odstínů",
  },
  {
    kod: "I-03",
    nazev: "Interiérové stínění",
    popis:
      "Textilní roletky Jazz 45, žaluzie do oken i střešních výklopů. Měříme na milimetry, montujeme bez vrtání tam, kde to jde.",
    detail: "Dodání od 3 dnů",
  },
  {
    kod: "P-360",
    nazev: "Pergoly a markýzy",
    popis:
      "Pergola Verdi Glass se zasklenou střechou nebo výsuvné markýzy PIANO a FORTE. Terasa použitelná od jara do podzimu.",
    detail: "Motorové ovládání, LED podsvícení",
  },
  {
    kod: "H-24",
    nazev: "Sítě proti hmyzu",
    popis:
      "Pevné rámy, rolovací i plisé sítě na okna, dveře a francouzská okna. Otevřené okno bez komárů.",
    detail: "Na míru ke každému oknu",
  },
];

const duvody = [
  {
    titulek: "Vyrábíme sami, 25 let",
    text: "Žádný překupník. Každá žaluzie vzniká v naší výrobě podle norem ISO a TÜV — víme přesně, co vám věšíme na dům.",
  },
  {
    titulek: "Termíny, které platí",
    text: "Venkovní žaluzie od 14 dnů, interiérové stínění od 3 dnů. Skladové zásoby za miliony korun znamenají, že nečekáte na díly z dovozu.",
  },
  {
    titulek: "Zaměříme, namontujeme, seřídíme",
    text: "Technik přijede k vám, zaměří na milimetry a poradí typ lamely i barvu. Montáž děláme vlastními lidmi, ne najatou partou.",
  },
  {
    titulek: "Prodloužená záruka a servis",
    text: "Stínění je mechanika venku v počasí. Proto dáváme prodlouženou záruku a servis řešíme rychle — motor, lanko i lamelu vyměníme.",
  },
];

const realizace = [
  { misto: "Rodinný dům, Brno-Bystrc", co: "Venkovní žaluzie Z90, 14 oken" },
  { misto: "Administrativní budova, Praha", co: "Venkovní žaluzie, jižní fasáda" },
  { misto: "Rodinný dům, Zlín", co: "Pergola + screenové rolety" },
  { misto: "Stadion Kladno", co: "Sekční garážová vrata" },
];

export default function Page() {
  return (
    <main className="kb">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-top">
          <span className="wordmark" aria-label="KASKO-BLINDS">
            KASKO<i className="wordmark-slat" aria-hidden="true" />BLINDS
          </span>
          <span className="hero-loc">Brno · výrobce stínicí techniky</span>
        </div>

        <div className="hero-stage">
          <h1 className="hero-title" aria-label="Stín na míru. Vyrobený v Brně.">
            <span className="slat slat-1"><span>STÍN</span></span>
            <span className="slat slat-2"><span>NA&nbsp;MÍRU.</span></span>
            <span className="slat slat-3"><span>VYROBENÝ</span></span>
            <span className="slat slat-4"><span>V&nbsp;BRNĚ.</span></span>
          </h1>

          <div className="hero-louvre" aria-hidden="true">
            <i /><i /><i /><i /><i /><i /><i /><i />
          </div>
        </div>

        <p className="hero-sub">
          Venkovní žaluzie, rolety a pergoly z vlastní výroby. Zaměříme u vás doma,
          vyrobíme na milimetr a namontujeme — venkovní žaluzie do 14 dnů,
          interiérové stínění do 3 dnů.
        </p>

        <ul className="hero-facts">
          <li><strong>25 let</strong> vlastní výroby</li>
          <li><strong>ISO&nbsp;+&nbsp;TÜV</strong> certifikace</li>
          <li><strong>od 3 dnů</strong> dodání</li>
        </ul>
      </header>

      {/* ===== SEKCE 1: SORTIMENT ===== */}
      <section className="sortiment" aria-labelledby="sortiment-h">
        <div className="sec-head">
          <p className="sec-eyebrow">Sortiment</p>
          <h2 id="sortiment-h">Co vám vyrobíme a namontujeme</h2>
          <p className="sec-lead">
            Každé okno je jiné. Proto všechno vyrábíme na míru — kód u názvu je
            typ profilu, podle kterého u nás zakázka putuje výrobou.
          </p>
        </div>

        <ul className="prod-grid">
          {produkty.map((p) => (
            <li key={p.kod} className="prod-card">
              <span className="prod-kod">{p.kod}</span>
              <h3>{p.nazev}</h3>
              <p>{p.popis}</p>
              <span className="prod-detail">{p.detail}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== SEKCE 2: DŮVĚRA ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="sec-head sec-head-invert">
          <p className="sec-eyebrow">Proč KASKO-BLINDS</p>
          <h2 id="duvera-h">Výrobce, ne přeprodejce</h2>
          <p className="sec-lead">
            Stovky tisíc výrobků ročně, kvalifikovaný tým a sklad, díky kterému
            držíme termíny. Tady je, co z toho máte vy.
          </p>
        </div>

        <ol className="duvody">
          {duvody.map((d, i) => (
            <li key={d.titulek} className="duvod">
              <span className="duvod-tick" aria-hidden="true" />
              <div>
                <h3>{d.titulek}</h3>
                <p>{d.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="realizace">
          <h3 className="realizace-h">Z posledních montáží</h3>
          <ul className="realizace-list">
            {realizace.map((r) => (
              <li key={r.misto}>
                <span className="real-misto">{r.misto}</span>
                <span className="real-co">{r.co}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

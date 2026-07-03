// Radek Tisoň — tesařství a střechy, Plzeň
// Design koncept: „Krov" — přiznaná tesařská konstrukce jako signature prvek.
// Hero je typografický štít (gable) s SVG kresbou krovu; sekce nesou názvy z řemesla.

const sluzby = [
  {
    znak: "⌂",
    nazev: "Střecha na klíč",
    popis:
      "Od krovu po hřebenáč. Vyměříme, spočítáme řezivo, postavíme krov a položíme krytinu — pálenou, betonovou i lehkou. Vy řešíte jen barvu tašek.",
    detail: "Bramac · Tondach · KM Beta",
  },
  {
    znak: "▤",
    nazev: "Rekonstrukce a opravy",
    popis:
      "Zatéká? Přijedeme, vylezeme nahoru a řekneme na rovinu, jestli stačí vyměnit pár tašek, nebo je čas na víc. Opravujeme sedlové i ploché střechy všech typů.",
    detail: "Havárie řešíme přednostně",
  },
  {
    znak: "≡",
    nazev: "Zateplení střechy",
    popis:
      "Správná skladba ušetří tisíce za topení: parozábrana, izolace, difuzní fólie, větrání. Poradíme, co dává u vaší střechy smysl — a co jsou vyhozené peníze.",
    detail: "Rockwool · Juta · Fatra",
  },
  {
    znak: "◫",
    nazev: "Klempířina a okna",
    popis:
      "Okapy, svody, oplechování komínů a úžlabí, montáž střešních oken Velux. Detaily, na kterých střecha stojí — nebo teče.",
    detail: "Lindab · Borga · Velux",
  },
];

const skladba = [
  { vrstva: "Krytina", pozn: "pálená, betonová, plech, šindel" },
  { vrstva: "Latě a kontralatě", pozn: "větraná mezera drží krov suchý" },
  { vrstva: "Difuzní fólie", pozn: "pustí páru ven, vodu ne" },
  { vrstva: "Izolace", pozn: "mezi krokvemi i pod nimi" },
  { vrstva: "Parozábrana", pozn: "přelepené spoje, žádné zkratky" },
  { vrstva: "Krov", pozn: "tesařská práce, na které vše stojí" },
];

const duvody = [
  {
    cislo: "25+",
    text: "let stavíme a opravujeme střechy v Plzni a okolí. Řemeslo se nedá okecat — buď drží, nebo teče.",
  },
  {
    cislo: "12",
    text: "osvědčených výrobců materiálů. Nemontujeme, co je zrovna v akci, ale co na vaší střeše vydrží.",
  },
  {
    cislo: "1",
    text: "člověk, se kterým mluvíte od zaměření po předání. Radek Tisoň — žádný dispečink, žádné call centrum.",
  },
];

export default function Page() {
  return (
    <main className="rt">
      {/* ===================== HERO — ŠTÍT ===================== */}
      <header className="hero">
        <div className="hero-top">
          <span className="wordmark">
            TISOŇ<span className="wordmark-dot">▲</span>
            <span className="wordmark-sub">tesařství &amp; střechy</span>
          </span>
          <a className="hero-tel" href="tel:+420602000000">
            602 000 000
          </a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Radek Tisoň · Plzeň</p>
          <h1 className="hero-title">
            <span className="line l1">Střecha se staví</span>
            <span className="line l2">
              od <em>krovu</em>,
            </span>
            <span className="line l3">ne od tašek.</span>
          </h1>
          <p className="hero-lead">
            Tesařská firma z Plzně. Krovy, střechy na klíč, rekonstrukce a
            zateplení — sedlové i ploché, všech typů. Jedno číslo, jeden
            řemeslník, který za práci ručí jménem.
          </p>
          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+420602000000">
              Zavolat Radkovi
            </a>
            <a className="btn btn-line" href="mailto:info@tison-strechy.cz">
              Napsat poptávku
            </a>
          </div>
        </div>

        {/* SIGNATURE: kresba krovu — vaznicová soustava jako z tesařského výkresu */}
        <div className="krov" aria-hidden="true">
          <svg
            viewBox="0 0 1200 340"
            preserveAspectRatio="xMidYMax meet"
            className="krov-svg"
          >
            {/* pozednice */}
            <line className="k k-base" x1="60" y1="320" x2="1140" y2="320" />
            {/* krokve */}
            <line className="k k-1" x1="60" y1="320" x2="600" y2="30" />
            <line className="k k-1" x1="1140" y1="320" x2="600" y2="30" />
            {/* hambalek */}
            <line className="k k-2" x1="330" y1="175" x2="870" y2="175" />
            {/* sloupky */}
            <line className="k k-3" x1="440" y1="320" x2="440" y2="116" />
            <line className="k k-3" x1="760" y1="320" x2="760" y2="116" />
            {/* vzpěry */}
            <line className="k k-4" x1="440" y1="175" x2="600" y2="30" />
            <line className="k k-4" x1="760" y1="175" x2="600" y2="30" />
            {/* tesařské spoje — kolíky */}
            <circle className="kk" cx="600" cy="30" r="6" />
            <circle className="kk" cx="330" cy="175" r="5" />
            <circle className="kk" cx="870" cy="175" r="5" />
            <circle className="kk" cx="440" cy="320" r="5" />
            <circle className="kk" cx="760" cy="320" r="5" />
            {/* kóta jako z výkresu */}
            <text className="kota" x="600" y="310" textAnchor="middle">
              vaznicová soustava · sklon 42°
            </text>
          </svg>
        </div>
      </header>

      {/* ===================== SLUŽBY ===================== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="sekce-hlava">
          <p className="eyebrow">Co pro vás uděláme</p>
          <h2 id="sluzby-h">
            Všechno, co má vaše střecha <em>nad hlavou</em> i pod krytinou
          </h2>
        </div>

        <ul className="sluzby-grid">
          {sluzby.map((s) => (
            <li key={s.nazev} className="sluzba">
              <span className="sluzba-znak" aria-hidden="true">
                {s.znak}
              </span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <span className="sluzba-detail">{s.detail}</span>
            </li>
          ))}
        </ul>

        {/* skladba střechy — vrstvy jako řez */}
        <div className="skladba">
          <p className="skladba-titul">
            Řez střechou — takhle vypadá poctivá skladba:
          </p>
          <ol className="skladba-vrstvy">
            {skladba.map((v, i) => (
              <li key={v.vrstva} style={{ ['--i' as string]: i }}>
                <strong>{v.vrstva}</strong>
                <span>{v.pozn}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===================== DŮVĚRA ===================== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="sekce-hlava sekce-hlava--svetla">
          <p className="eyebrow eyebrow--svetly">Proč Tisoň</p>
          <h2 id="duvera-h">
            Střecha, kterou stavěl tesař, <em>ne subdodavatel</em>
          </h2>
        </div>

        <div className="duvody">
          {duvody.map((d) => (
            <div key={d.cislo} className="duvod">
              <span className="duvod-cislo">{d.cislo}</span>
              <p>{d.text}</p>
            </div>
          ))}
        </div>

        <figure className="citace">
          <blockquote>
            „Pan Tisoň nám v Liticích předělal celý krov po napadení
            dřevomorkou a položil novou pálenou krytinu. Termín seděl na den,
            dvůr po sobě uklidili. Střecha pátou zimu bez jediné kapky.“
          </blockquote>
          <figcaption>— rodina Vaňkových, Plzeň-Litice</figcaption>
        </figure>

        <p className="duvera-pozn">
          Pracujeme s materiály Bramac, Tondach, KM Beta, Velux, Lindab,
          Rockwool a dalších prověřených výrobců. Na požádání ukážeme hotové
          střechy po Plzni — nejlepší reference je ta, na kterou si můžete
          sáhnout.
        </p>
      </section>
    </main>
  );
}

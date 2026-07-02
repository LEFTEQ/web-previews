const serie = [
  {
    kategorie: "Mramor",
    nazev: "Tele di Marmo Reloaded",
    popis: "Klasická žilkovaná elegance v leštěném i matném provedení. Formáty až 120\u00d7278 cm — koupelna bez jediné spáry přes celou stěnu.",
    format: "do 120\u00d7278",
  },
  {
    kategorie: "Beton",
    nazev: "Unik / Plain",
    popis: "Tichý industriální povrch pro obývací pokoje a kanceláře. Nešpiní se jako stěrka a nikdy nepopraská.",
    format: "do 100\u00d7300",
  },
  {
    kategorie: "Kámen",
    nazev: "Stoneplay / Stonequartz",
    popis: "Struktura přírodního kvarcitu v keramice — mrazuvzdorná, protiskluzová, bez impregnace. Interiér plynule přechází na terasu.",
    format: "interiér + 2 cm",
  },
  {
    kategorie: "Dřevo",
    nazev: "Essence / Eik",
    popis: "Kresba dubových prken, kterou nepoznáte od parket — jen ji můžete položit do koupelny i na podlahové topení.",
    format: "parketa 20\u00d7120",
  },
  {
    kategorie: "Exteriér 2 cm",
    nazev: "Pietre Pure / Gravel",
    popis: "Dvoucentimetrová venkovní dlažba na terče, do štěrku i lepení. Terasa, která přežije olomouckou zimu bez jediné vady.",
    format: "60\u00d760 / 60\u00d7120",
  },
]

const duvody = [
  {
    cislo: "25+",
    titulek: "italských a španělských výrobců",
    text: "Flaviker, Provenza, Ergon, Emil Group, Baldocer — ale i malé manufaktury, které velkoobchody nevozí. Naší výhodou je jinakost: sérii, kterou vybereme u nás, nepotká zákazník u souseda.",
  },
  {
    cislo: "100\u00d7300",
    titulek: "centimetrů — největší formáty na Moravě",
    text: "Specializujeme se na opravdu velkoformátové obklady. Jedna deska pokryje celou stěnu koupelny nebo kuchyňskou linku — beze spár, bez rušivých přechodů.",
  },
  {
    cislo: "přímo",
    titulek: "od výrobců, bez mezičlánků",
    text: "Jako jedni z mála máme přímé kontakty na italské keramičky. Hlídáme kalibr, odstín i tonalitu každé dodávky — reklamace řešíme my, ne vy.",
  },
]

const reference = [
  { nazev: "Rezidence Hejčín", detail: "Olomouc — velkoformátová dlažba ve společných prostorách i bytech" },
  { nazev: "Simplon Power", detail: "komerční interiéry — betonové série Unik v administrativě" },
]

export default function Page() {
  return (
    <main className="t4y">
      {/* ================= HERO ================= */}
      <header className="hero" aria-label="Tiles4you — velkoformátové obklady a dlažby, Olomouc">
        <div className="hero-grid" aria-hidden="true">
          {/* spárová mřížka — signature prvek: nepravidelný formátový rastr jako kladečský plán */}
          <span className="tile tile-a" />
          <span className="tile tile-b" />
          <span className="tile tile-c" />
          <span className="tile tile-d" />
          <span className="tile tile-e" />
        </div>

        <div className="hero-inner">
          <div className="hero-top">
            <span className="wordmark">
              tiles<em>4</em>you
            </span>
            <span className="hero-meta">vzorkovna · tř. 1. máje 838/28, Olomouc</span>
          </div>

          <h1 className="hero-title">
            <span className="line line-1">Jedna deska.</span>
            <span className="line line-2">Celá stěna.</span>
            <span className="line line-3">
              <span className="format-chip">100\u00a0\u00d7\u00a0300\u00a0cm</span> beze spár.
            </span>
          </h1>

          <p className="hero-lead">
            Velkoformátové obklady a dlažby přímo od italských a španělských výrobců.
            Mramor, beton, kámen i dřevo — vše si osaháte ve vzorkovně v centru Olomouce.
          </p>

          <div className="hero-actions">
            <a className="btn btn-solid" href="tel:+420725860883">
              Zavolat vzorkovnu — 725\u00a0860\u00a0883
            </a>
            <a className="btn btn-line" href="#materialy">
              Prohlédnout materiály
            </a>
          </div>

          <dl className="hero-facts">
            <div>
              <dt>Otevřeno</dt>
              <dd>po–pá 9–12, 13–17</dd>
            </div>
            <div>
              <dt>Víkend</dt>
              <dd>po telefonu</dd>
            </div>
            <div>
              <dt>Původ</dt>
              <dd>Itálie · Španělsko</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* ================= MATERIÁLY ================= */}
      <section className="sec sec-materialy" id="materialy" aria-labelledby="materialy-h">
        <div className="sec-inner">
          <p className="eyebrow">Pět materiálů, jedna keramika</p>
          <h2 id="materialy-h">
            Vzhled mramoru či dubu.
            <br />
            Vlastnosti slinuté dlažby.
          </h2>
          <p className="sec-lead">
            Každou sérii vybíráme osobně na veletrzích v Boloni. Uvedené formáty máme
            ve vzorkovně fyzicky — přijďte si na materiál sáhnout.
          </p>

          <ul className="mat-list">
            {serie.map((s) => (
              <li className="mat-row" key={s.nazev}>
                <span className="mat-kat">{s.kategorie}</span>
                <div className="mat-body">
                  <h3>{s.nazev}</h3>
                  <p>{s.popis}</p>
                </div>
                <span className="mat-format">{s.format}</span>
              </li>
            ))}
          </ul>

          <p className="mat-note">
            Akční série <strong>Parkett</strong>, <strong>City venkovní 2\u00a0cm</strong> a{" "}
            <strong>Always</strong> držíme skladem za zvýhodněné ceny — ptejte se ve vzorkovně.
          </p>
        </div>
      </section>

      {/* ================= DŮVĚRA ================= */}
      <section className="sec sec-duvera" aria-labelledby="duvera-h">
        <div className="sec-inner">
          <p className="eyebrow eyebrow-light">Proč Tiles4you</p>
          <h2 id="duvera-h">Nevozíme, co vozí všichni</h2>

          <div className="duvody">
            {duvody.map((d) => (
              <article className="duvod" key={d.titulek}>
                <p className="duvod-cislo">{d.cislo}</p>
                <h3>{d.titulek}</h3>
                <p>{d.text}</p>
              </article>
            ))}
          </div>

          <div className="ref-blok">
            <h3 className="ref-titulek">Dláždili jsme mimo jiné</h3>
            <ul className="ref-list">
              {reference.map((r) => (
                <li key={r.nazev}>
                  <strong>{r.nazev}</strong>
                  <span>{r.detail}</span>
                </li>
              ))}
            </ul>
            <p className="ref-osoba">
              Výběr série, kalkulaci i kladečský plán s vámi projde vedoucí obchodu{" "}
              <strong>Jiřina Ptáčková</strong> — <a href="tel:+420725860585">725\u00a0860\u00a0585</a>,{" "}
              <a href="mailto:ptackova@tiles4you.cz">ptackova@tiles4you.cz</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

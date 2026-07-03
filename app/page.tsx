export const metadata = {
  title: "RENWEX Plzeň — Ruční mytí a péče o auta na Studentské",
  description:
    "Myčka aut RENWEX v Plzni-Bolevci. Ruční mytí, čištění interiéru, voskování a renovace laku. Studentská 69, Plzeň. Bez fronty — objednejte se na přesný čas.",
  openGraph: {
    title: "RENWEX — myčka aut Plzeň",
    description:
      "Ruční mytí a péče o auto v Plzni-Bolevci. Objednejte se na přesný čas, hotovo do hodiny.",
    locale: "cs_CZ",
    type: "website",
  },
};

const programy = [
  {
    id: "P1",
    nazev: "Rychlé mytí",
    cas: "20 min",
    cena: "od 290 Kč",
    popis:
      "Ruční předmytí, aktivní pěna, šamponování dvěma kbelíky a osušení mikrovláknem. Auto odjíždí suché, bez šmouh a bez škrábanců od kartáčů — žádné tu nemáme.",
    body: ["aktivní pěna", "ruční šampon", "osušení mikrovláknem", "vyleštění skel zvenku"],
  },
  {
    id: "P2",
    nazev: "Mytí + interiér",
    cas: "60 min",
    cena: "od 690 Kč",
    popis:
      "Kompletní exteriér a k tomu vysátí, vytření plastů, ošetření palubní desky a vyčištění skel zevnitř. Nejčastější volba rodinných aut — víme, co dokáže dětská sedačka.",
    body: ["vše z P1", "vysátí vč. kufru", "plasty a palubka", "skla zevnitř"],
  },
  {
    id: "P3",
    nazev: "Vosk a ochrana",
    cas: "90 min",
    cena: "od 1 290 Kč",
    popis:
      "Dekontaminace laku clay hmotou, tvrdý karnaubský vosk nebo sealant. Voda pak z kapoty sjíždí sama a lak drží lesk 3–4 měsíce. Ideální před zimou a po ní.",
    body: ["clay dekontaminace", "karnaubský vosk", "ochrana 3–4 měsíce", "ošetření pneu a plastů"],
  },
  {
    id: "P4",
    nazev: "Renovace laku",
    cas: "na objednání",
    cena: "cena po prohlídce",
    popis:
      "Strojní leštění ve dvou až třech krocích. Odstraníme hologramy z automyček, jemné škrábance a zmatnělý lak. Před zahájením vám ukážeme zkušební plochu na kapotě.",
    body: ["strojní leštění", "odstranění hologramů", "zkušební plocha zdarma", "možnost keramiky"],
  },
];

const duvody = [
  {
    titulek: "Ruce místo kartáčů",
    text:
      "Portálová myčka nechá na tmavém laku pavučinu škrábanců za jedinou návštěvu. My myjeme rukama, dvěma kbelíky a čistým mikrovláknem na každé auto.",
  },
  {
    titulek: "Objednání na přesný čas",
    text:
      "Zavoláte, domluvíme termín, přijedete — a začínáme. Žádná fronta před boxem. Kávu si dáte u nás, nebo auto necháte a vyzvednete cestou z práce.",
  },
  {
    titulek: "V Bolevci od roku 2000",
    text:
      "Studentská 69 — kousek od Gery, u zastávky Bolevec. Čtvrt století myjeme auta sousedům z Lochotína, Bolevce i Košutky. Většina zákazníků se vrací každý měsíc.",
  },
];

const reference = [
  {
    jmeno: "Petr H., Lochotín",
    auto: "Škoda Kodiaq, černá metalíza",
    text:
      "Černé auto jsem do kartáčové myčky nikdy nedal a ručně mýt v paneláku nejde. Sem jezdím jednou za měsíc, lak vypadá pořád jako z autosalonu.",
  },
  {
    jmeno: "Lenka S., Košutka",
    auto: "VW Golf, rodinné auto",
    text:
      "Po dovolené vypadal interiér jako po bitvě — písek, zmrzlina, drobky. Za hodinu jsem si odvážela auto, které vonělo a vypadalo líp než při koupi.",
  },
  {
    jmeno: "Martin K., Bolevec",
    auto: "BMW 3, před prodejem",
    text:
      "Renovace laku a vosk před prodejem. Kupec ani nesmlouval. Ty tři tisíce za péči se mi vrátily možná dvacetkrát.",
  },
];

export default function Page() {
  return (
    <main className="rw">
      {/* ===== HERO ===== */}
      <header className="rw-hero">
        <div className="rw-hero-top">
          <div className="rw-wordmark" aria-label="RENWEX, myčka aut Plzeň">
            <span className="rw-wordmark-name">
              REN<span className="rw-wordmark-x">WE</span>X
            </span>
            <span className="rw-wordmark-sub">ruční myčka aut · Plzeň-Bolevec</span>
          </div>
          <a className="rw-hero-tel" href="tel:+420377520100">
            Zavolat a objednat se
          </a>
        </div>

        <div className="rw-hero-body">
          <p className="rw-hero-eyebrow">Studentská 69 · po–so 8–18</p>
          <h1 className="rw-hero-title">
            <span className="rw-line rw-line-1">Kartáče</span>
            <span className="rw-line rw-line-2 rw-strike">škrábou.</span>
            <span className="rw-line rw-line-3">
              Ruce <em>myjou.</em>
            </span>
          </h1>
          <p className="rw-hero-lead">
            Ruční mytí, čištění interiéru a péče o lak v Plzni-Bolevci. Objednáte se
            na přesný čas, auto předáte a do hodiny odjíždíte v čistém — bez fronty,
            bez kartáčů, bez šmouh.
          </p>
          <div className="rw-hero-ctas">
            <a className="rw-btn rw-btn-primary" href="tel:+420377520100">
              Zavolat 377 520 100
            </a>
            <a className="rw-btn rw-btn-ghost" href="#programy">
              Prohlédnout programy
            </a>
          </div>
        </div>

        {/* signature: water sheet — vrstva vody stékající po laku */}
        <div className="rw-water" aria-hidden="true">
          <svg
            className="rw-water-svg"
            viewBox="0 0 1440 240"
            preserveAspectRatio="none"
            focusable="false"
          >
            <path
              className="rw-wave rw-wave-back"
              d="M0,120 C240,60 480,180 720,120 C960,60 1200,180 1440,120 L1440,240 L0,240 Z"
            />
            <path
              className="rw-wave rw-wave-mid"
              d="M0,150 C260,100 520,200 780,150 C1040,100 1280,200 1440,150 L1440,240 L0,240 Z"
            />
            <path
              className="rw-wave rw-wave-front"
              d="M0,185 C300,150 600,220 900,185 C1150,155 1320,215 1440,190 L1440,240 L0,240 Z"
            />
          </svg>
          <div className="rw-drops">
            <span className="rw-drop" />
            <span className="rw-drop" />
            <span className="rw-drop" />
            <span className="rw-drop" />
            <span className="rw-drop" />
            <span className="rw-drop" />
            <span className="rw-drop" />
          </div>
        </div>
      </header>

      {/* ===== PROGRAMY ===== */}
      <section className="rw-programy" id="programy" aria-labelledby="programy-h">
        <div className="rw-section-head">
          <p className="rw-eyebrow">Vyberete jako na panelu myčky</p>
          <h2 id="programy-h" className="rw-h2">
            Čtyři programy. Od rychlého opláchnutí po nový lesk.
          </h2>
          <p className="rw-section-lead">
            Ceny platí pro osobní auto běžné velikosti. SUV, dodávku nebo hodně
            zanedbaný interiér naceníme na místě — vždy před začátkem práce, ne po ní.
          </p>
        </div>

        <div className="rw-program-grid">
          {programy.map((p) => (
            <article className="rw-program" key={p.id}>
              <div className="rw-program-head">
                <span className="rw-program-id">{p.id}</span>
                <div className="rw-program-meta">
                  <span className="rw-program-cas">{p.cas}</span>
                  <span className="rw-program-cena">{p.cena}</span>
                </div>
              </div>
              <h3 className="rw-program-nazev">{p.nazev}</h3>
              <p className="rw-program-popis">{p.popis}</p>
              <ul className="rw-program-body">
                {p.body.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="rw-duvera" aria-labelledby="duvera-h">
        <div className="rw-section-head">
          <p className="rw-eyebrow">Proč k nám lidi jezdí přes půl Plzně</p>
          <h2 id="duvera-h" className="rw-h2">
            25 let stejná adresa, stejné ruce, stejná poctivost.
          </h2>
        </div>

        <div className="rw-duvody">
          {duvody.map((d) => (
            <div className="rw-duvod" key={d.titulek}>
              <h3 className="rw-duvod-titulek">{d.titulek}</h3>
              <p className="rw-duvod-text">{d.text}</p>
            </div>
          ))}
        </div>

        <div className="rw-reference" role="list" aria-label="Reference zákazníků">
          {reference.map((r) => (
            <figure className="rw-ref" role="listitem" key={r.jmeno}>
              <blockquote className="rw-ref-text">„{r.text}“</blockquote>
              <figcaption className="rw-ref-kdo">
                <strong>{r.jmeno}</strong>
                <span>{r.auto}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="rw-adresa">
          <p className="rw-adresa-kde">
            <strong>RENWEX, s.r.o.</strong> · Studentská 2089/69, Bolevec, 323 00 Plzeň
            · IČO 25249908 · na trhu od 18. 10. 2000
          </p>
        </div>
      </section>
    </main>
  );
}

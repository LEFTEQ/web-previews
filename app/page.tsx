// Rudova pekárna — Ostrava-Hrabůvka
// Kvasový chléb Tartine, žitný kvas, parní pec. Hero jako "nákres bochníku":
// typografická scéna s velkým řezem písma a signature prvkem — skórování kůrky
// (ty šikmé řezy, které pekař dělá žiletkou před sázením do pece).

const chleby = [
  {
    nazev: "Tartine",
    rez: "jeden dlouhý řez",
    popis:
      "Naše vlajková loď. Kvasový chléb z vlastního žitného kvasu, dlouho vedené těsto, pečený v parní peci. Kůrka praská, střída voní kvasem — ne droždím.",
    detail: "žitný kvas · parní pec · bez droždí",
  },
  {
    nazev: "Chléb se švestkami a ořechy",
    rez: "čtyři krátké řezy",
    popis:
      "Podle recenzí náš nejoblíbenější sváteční bochník. Sušené švestky a vlašské ořechy zapečené v kvasovém těstě — k máslu nebo jen tak.",
    detail: "švestky · vlašské ořechy · kvas",
  },
  {
    nazev: "Sladké pečivo",
    rez: "pletený vzor",
    popis:
      "Co ten den vyjde z pece: kvasové koláče, buchty a sladké kynuté. Sortiment se mění podle sezóny — sledujte nás na Facebooku, co je zrovna čerstvé.",
    detail: "kynuté · sezónní · každý den jinak",
  },
];

const zasady = [
  {
    cislo: "kvas",
    titulek: "Vlastní žitný kvas",
    text: "Žádné droždí, žádné zlepšováky. Náš kvas krmíme denně a je základem každého bochníku. Proto chléb vydrží čerstvý celé dny a je lépe stravitelný.",
  },
  {
    cislo: "ruce",
    titulek: "Každý bochník ručně",
    text: "Těsto tvarujeme, skórujeme a sázíme do pece ručně. Dva bochníky nejsou nikdy úplně stejné — a přesně tak to má být.",
  },
  {
    cislo: "pára",
    titulek: "Parní pec",
    text: "Pára v prvních minutách pečení dělá tu kůrku, která při krájení praská. Uvnitř zůstává střída měkká a vláčná.",
  },
  {
    cislo: "rozvoz",
    titulek: "Rozvoz až ke dveřím",
    text: "Čerstvě upečený chléb rozvážíme po Ostravě a Frýdku-Místku. Objednáte, upečeme, dovezeme — ještě teplý.",
  },
];

const recenze = [
  {
    jmeno: "David Bajnar",
    text: "Jsem „odkojený“ na starobělském chlebu a od doby, co pekárnu zavřeli, jsem neměl dobrý chleba. Na doporučení jsem vyzkoušel ten z Rudovy pekárny — a je vynikající.",
  },
  {
    jmeno: "Martina Horklová",
    text: "Dokonalý chleba, určitě doporučuji!",
  },
  {
    jmeno: "Květa Němcová",
    text: "Chleba se švestkami a ořechy… ten je top.",
  },
];

export default function Page() {
  return (
    <main className="rp">
      {/* ===== HERO ===== */}
      <header className="rp-hero">
        <div className="rp-hero-top">
          <div className="rp-wordmark" aria-label="Rudova pekárna">
            <span className="rp-wordmark-rudova">Rudova</span>
            <span className="rp-wordmark-pekarna">pekárna</span>
          </div>
          <p className="rp-hero-loc">Ostrava-Hrabůvka · Závodní 75/8</p>
        </div>

        <div className="rp-hero-main">
          <p className="rp-hero-eyebrow">Kvasová pekárna · parní pec · rozvoz Ostrava a Frýdek-Místek</p>
          <h1 className="rp-hero-title">
            <span className="rp-hero-line rp-hero-line-1">Chleba,</span>
            <span className="rp-hero-line rp-hero-line-2">
              jak ho znal
              <svg
                className="rp-score rp-score-inline"
                viewBox="0 0 120 40"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M8 34 Q 60 -14 112 30" />
              </svg>
            </span>
            <span className="rp-hero-line rp-hero-line-3">náš děda.</span>
          </h1>
          <p className="rp-hero-sub">
            Kvasový chléb Tartine z vlastního žitného kvasu. Každý bochník tvarujeme
            ručně a pečeme v parní peci — kůrka praská, střída voní. Bez droždí,
            bez zkratek.
          </p>
          <div className="rp-hero-actions">
            <a className="rp-btn rp-btn-primary" href="tel:+420776050502">
              Objednat chléb — 776 050 502
            </a>
            <a className="rp-btn rp-btn-ghost" href="#sortiment">
              Co dnes pečeme
            </a>
          </div>
        </div>

        {/* Signature: skórovaný bochník — půdorys s řezy, jak ho vidí pekař před sázením */}
        <div className="rp-hero-loaf" aria-hidden="true">
          <svg viewBox="0 0 420 420" focusable="false">
            <ellipse className="rp-loaf-body" cx="210" cy="210" rx="190" ry="186" />
            <ellipse className="rp-loaf-ring" cx="210" cy="210" rx="158" ry="154" />
            <g className="rp-loaf-cuts">
              <path d="M120 150 Q 210 100 300 150" />
              <path d="M105 210 Q 210 155 315 210" />
              <path d="M120 270 Q 210 215 300 270" />
              <path d="M150 325 Q 210 280 270 325" />
            </g>
            <g className="rp-loaf-flour">
              <circle cx="92" cy="110" r="3" />
              <circle cx="330" cy="96" r="2.4" />
              <circle cx="356" cy="250" r="3" />
              <circle cx="76" cy="290" r="2.2" />
              <circle cx="250" cy="58" r="2" />
            </g>
          </svg>
          <p className="rp-loaf-caption">Skórování — řezy, kterými bochník podepisujeme před sázením do pece</p>
        </div>
      </header>

      {/* ===== SORTIMENT ===== */}
      <section className="rp-section rp-sortiment" id="sortiment" aria-labelledby="sortiment-h">
        <div className="rp-section-head">
          <h2 id="sortiment-h" className="rp-section-title">Co jde z pece</h2>
          <p className="rp-section-lead">
            Pečeme málo druhů a pořádně. Každý bochník má svůj řez — podle něj
            v obchodě poznáte, který je který.
          </p>
        </div>

        <div className="rp-grid rp-grid-chleby">
          {chleby.map((ch) => (
            <article className="rp-card" key={ch.nazev}>
              <p className="rp-card-rez">{ch.rez}</p>
              <h3 className="rp-card-title">{ch.nazev}</h3>
              <p className="rp-card-text">{ch.popis}</p>
              <p className="rp-card-detail">{ch.detail}</p>
            </article>
          ))}
        </div>

        <div className="rp-zasady" role="list">
          {zasady.map((z) => (
            <div className="rp-zasada" role="listitem" key={z.cislo}>
              <p className="rp-zasada-tag">{z.cislo}</p>
              <h3 className="rp-zasada-title">{z.titulek}</h3>
              <p className="rp-zasada-text">{z.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== DŮVĚRA / RECENZE ===== */}
      <section className="rp-section rp-duvera" aria-labelledby="duvera-h">
        <div className="rp-section-head">
          <h2 id="duvera-h" className="rp-section-title rp-section-title-light">
            Kdo u nás kupuje, vrací se
          </h2>
          <p className="rp-section-lead rp-section-lead-light">
            Ostrava si dobrý chleba pamatuje. Tohle o nás píšou zákazníci na Facebooku.
          </p>
        </div>

        <div className="rp-grid rp-grid-recenze">
          {recenze.map((r) => (
            <figure className="rp-recenze" key={r.jmeno}>
              <blockquote className="rp-recenze-text">„{r.text}“</blockquote>
              <figcaption className="rp-recenze-jmeno">{r.jmeno}</figcaption>
            </figure>
          ))}
        </div>

        <div className="rp-fakta">
          <div className="rp-fakt">
            <p className="rp-fakt-label">Pekárna a prodej</p>
            <p className="rp-fakt-value">Závodní 75/8, Ostrava-Hrabůvka</p>
          </div>
          <div className="rp-fakt">
            <p className="rp-fakt-label">Rozvoz čerstvého chleba</p>
            <p className="rp-fakt-value">Ostrava a Frýdek-Místek</p>
          </div>
          <div className="rp-fakt">
            <p className="rp-fakt-label">Objednávky</p>
            <p className="rp-fakt-value">
              <a className="rp-fakt-link" href="tel:+420776050502">776 050 502</a>
              {" · "}
              <a className="rp-fakt-link" href="mailto:rudovapekarna@seznam.cz">rudovapekarna@seznam.cz</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

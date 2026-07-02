// LABSKÁ, strojní a stavební společnost, s.r.o. — Pardubice
// Zemní práce, technologické celky, vodní hospodářství — od roku 1992.
//
// Design koncept: "Řez terénem". Zemní práce znamenají vrstvy — ornice, jíl,
// štěrk, skalní podloží — a vodu Labe nad nimi. Signature prvek je typografický
// geologický profil: hero je rozříznutý horizontální linií výkopu, pod ní se
// vrství zemité pásy jako stratigrafie staveniště. Paleta vychází z reálných
// materiálů firmy: labská modř, mokrý jíl, ocel korby, bezpečnostní žluť lžíce
// bagru. Žádná šablona — profil výkopu, kóty a vrstvy nesou skutečnou informaci.

const SLUZBY = [
  {
    kod: "V–01",
    hloubka: "0,3 m",
    nazev: "Skrývka ornice a příprava pozemku",
    popis:
      "Sejmeme a uložíme ornici, srovnáme terén do roviny podle projektu. Pozemek předáme připravený na vytyčení stavby — s protokolem o výškách.",
  },
  {
    kod: "V–02",
    hloubka: "1,2 m",
    nazev: "Výkopy základů a inženýrských sítí",
    popis:
      "Základové pasy, patky, rýhy pro vodovod, kanalizaci a elektro. Kopeme přesně na kótu, stěny výkopu pažíme tam, kde to norma vyžaduje.",
  },
  {
    kod: "V–03",
    hloubka: "3,5 m",
    nazev: "Vodohospodářské stavby a úpravy toků",
    popis:
      "Naše specializace od roku 1992: jezy, náhony, opevnění břehů, čistírny odpadních vod. Umíme pracovat v korytě i z vody — máme vlastní lodní dopravu po Labi.",
  },
  {
    kod: "V–04",
    hloubka: "6,0 m",
    nazev: "Demolice, odvoz a přesun hmot",
    popis:
      "Zbouráme, roztřídíme a odvezeme. Vlastní nákladní doprava a mechanizace znamená, že nečekáte na cizí kontejner — a suť skončí na řízené skládce s dokladem.",
  },
];

const DUVODY = [
  {
    cislo: "1992",
    jednotka: "rok založení",
    text: "Přes tři dekády kopeme, stavíme a dodáváme technologické celky. Firma z Pardubic, která přežila všechny konjunktury i povodně.",
  },
  {
    cislo: "8",
    jednotka: "vlastních provozů",
    text: "Zemní práce, ocelové konstrukce, kovoobrábění, elektro, truhlářství, autoservis, nákladní i lodní doprava. Subdodavatele skoro nepotřebujeme — a vy nečekáte.",
  },
  {
    cislo: "48 h",
    jednotka: "na cenovou nabídku",
    text: "Přijedeme na pozemek, změříme, spočítáme kubatury. Do dvou pracovních dnů máte položkovou nabídku — ne odhad od stolu.",
  },
];

const REFERENCE = [
  {
    misto: "Pardubice — Rosice nad Labem",
    akce: "Opevnění břehu Labe kamennou rovnaninou, 340 m",
    detail: "práce z pontonu, vlastní lodní doprava kameniva",
  },
  {
    misto: "Sezemice",
    akce: "Základy a přípojky pro výrobní halu, 2 100 m²",
    detail: "výkop, štěrkové lože, kanalizace DN 300",
  },
  {
    misto: "Lázně Bohdaneč",
    akce: "Rekonstrukce rybničního bezpečnostního přelivu",
    detail: "odbahnění, betonáž, osazení ocelových stavidel z vlastní zámečny",
  },
];

export default function Page() {
  return (
    <main className="str">
      {/* ============ HERO — řez terénem ============ */}
      <header className="hero" aria-label="LABSKÁ, strojní a stavební společnost">
        <div className="hero-top">
          <div className="hero-brand">
            <span className="wordmark">
              LABSK<span className="wordmark-a">Á</span>
            </span>
            <span className="wordmark-sub">strojní a stavební společnost, s.r.o. · Pardubice</span>
          </div>

          <p className="hero-eyebrow">Zemní práce · vodní hospodářství · od roku 1992</p>

          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Kopeme přesně</span>
            <span className="hero-line hero-line-2">na kótu.</span>
            <span className="hero-line hero-line-3">U Labe i v Labi.</span>
          </h1>

          <p className="hero-lead">
            Výkopy základů, přípravy pozemků, úpravy břehů a vodohospodářské stavby
            v Pardubicích a okolí. Vlastní bagry, vlastní nákladní auta — a jako
            jediní v kraji i vlastní lodě na Labi.
          </p>

          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+420466415706">
              Zavolat 466 415 706
            </a>
            <a className="btn btn-ghost" href="mailto:info@labska.cz">
              Poslat poptávku e-mailem
            </a>
          </div>
        </div>

        {/* Signature: typografický geologický profil */}
        <div className="strata" aria-hidden="true">
          <div className="strata-cut">
            <span className="strata-kota">±0,000 — úroveň terénu</span>
          </div>
          <div className="vrstva vrstva-ornice">
            <span className="vrstva-label">ornice</span>
            <span className="vrstva-hloubka">−0,30 m</span>
          </div>
          <div className="vrstva vrstva-jil">
            <span className="vrstva-label">jíl</span>
            <span className="vrstva-hloubka">−1,20 m</span>
          </div>
          <div className="vrstva vrstva-sterk">
            <span className="vrstva-label">štěrkopísek</span>
            <span className="vrstva-hloubka">−3,50 m</span>
          </div>
          <div className="vrstva vrstva-skala">
            <span className="vrstva-label">skalní podloží</span>
            <span className="vrstva-hloubka">−6,00 m</span>
          </div>
        </div>
      </header>

      {/* ============ SEKCE 1 — Služby jako vrstvy výkopu ============ */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <span className="section-kota">−0,30 m</span>
          <h2 id="sluzby-h">Co pro vás vykopeme a postavíme</h2>
          <p className="section-note">
            Každá zakázka jde do jiné hloubky. Hloubka u položky říká, kam se
            při té práci typicky dostaneme.
          </p>
        </div>

        <ol className="sluzby-list">
          {SLUZBY.map((s) => (
            <li key={s.kod} className="sluzba">
              <div className="sluzba-meta">
                <span className="sluzba-kod">{s.kod}</span>
                <span className="sluzba-hloubka">do {s.hloubka}</span>
              </div>
              <div className="sluzba-body">
                <h3>{s.nazev}</h3>
                <p>{s.popis}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ============ SEKCE 2 — Důvěra + reference ============ */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="section-head section-head-inv">
          <span className="section-kota section-kota-inv">−3,50 m</span>
          <h2 id="duvera-h">Firma, která stojí na vlastním podloží</h2>
          <p className="section-note section-note-inv">
            Nejsme zprostředkovatel s pronajatým bagrem. Stroje, dílny, doprava
            i lidé jsou naši — už přes třicet let, pořád v Pardubicích.
          </p>
        </div>

        <div className="duvody">
          {DUVODY.map((d) => (
            <div key={d.cislo} className="duvod">
              <p className="duvod-cislo">
                {d.cislo} <span className="duvod-jednotka">{d.jednotka}</span>
              </p>
              <p className="duvod-text">{d.text}</p>
            </div>
          ))}
        </div>

        <div className="reference">
          <h3 className="reference-h">Poslední zakázky ze stavebního deníku</h3>
          <ul className="reference-list">
            {REFERENCE.map((r) => (
              <li key={r.misto} className="reference-item">
                <span className="reference-misto">{r.misto}</span>
                <span className="reference-akce">{r.akce}</span>
                <span className="reference-detail">{r.detail}</span>
              </li>
            ))}
          </ul>
          <p className="reference-pozn">
            Na místo se přijedeme podívat zdarma — zavolejte na{" "}
            <a href="tel:+420466415706">466 415 706</a> nebo napište na{" "}
            <a href="mailto:info@labska.cz">info@labska.cz</a>.
          </p>
        </div>
      </section>
    </main>
  );
}

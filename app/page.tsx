// STUDIO ZAHRADY s.r.o. — zahradní architektura, Hradec Králové
// Statický náhled: hero + 2 obsahové sekce (bez patičky — doplní studio)

const faze = [
  {
    krok: "Návrh",
    nazev: "Studie zahrady",
    text: "Přijedeme k vám, projdeme pozemek a posloucháme. Do tří týdnů dostanete půdorysný plán s osazovacím záměrem — víte přesně, co kde poroste a proč.",
    detail: "půdorys · vizualizace · rozpočet",
  },
  {
    krok: "Stavba",
    nazev: "Realizace na klíč",
    text: "Terénní úpravy, cesty, opěrné zídky, závlaha i osvětlení. Stavíme vlastní partou, ne subdodávkami — za výsledek ručí jedno jméno.",
    detail: "modelace terénu · závlaha · dlažby a zídky",
  },
  {
    krok: "Výsadba",
    nazev: "Rostliny a trávník",
    text: "Trvalky, keře a stromy z ověřených školek. Trávník zakládáme hydroosevem — vlastní technologií, díky které vzejde rovnoměrně i na svahu.",
    detail: "trvalkové záhony · stromy · hydroosev",
  },
  {
    krok: "Péče",
    nazev: "Zahrada, co roste s vámi",
    text: "Zahrada je hotová až po třech letech. Nabízíme roční péči: řez, hnojení, dosadby. Vracíme se, dokud zahrada nestojí na vlastních kořenech.",
    detail: "roční plán péče · řez · dosadby",
  },
];

const duvody = [
  {
    titul: "Hydroosev umíme jako málokdo",
    text: "Trávník na svahu, kde běžný výsev sjede s prvním deštěm? Hydroosevem jsme založili přes 40 hektarů trávníků — od rodinných zahrad po protihlukové valy u dálnice D11.",
  },
  {
    titul: "Známe zdejší půdu",
    text: "Polabské nížiny mají těžké jíly i vysychavé písky, často pár set metrů od sebe. Dvacet let projektujeme v Hradci a okolí — víme, co tu přežije suché léto bez zalévání.",
  },
  {
    titul: "Jeden tým od plánu po poslední keř",
    text: "Architektka, která zahradu nakreslí, stojí i u výsadby. Nic se neztratí v předávce mezi projektantem a stavební firmou — protože žádná předávka není.",
  },
];

const reference = [
  {
    misto: "Rodinná zahrada, Třebeš",
    citat: "Za dva roky z hliněné pláně kolem novostavby zahrada, kde v červnu kvete třicet druhů trvalek. Sousedi se chodí ptát, kdo nám ji dělal.",
    jmeno: "manželé Vackovi",
  },
  {
    misto: "Svažitý pozemek, Kukleny",
    citat: "Tři firmy nám řekly, že na svahu trávník neudrží. Studio Zahrady ho vysely hydroosevem a drží čtvrtou sezónu.",
    jmeno: "p. Horáček",
  },
  {
    misto: "Předzahrádka bytového domu, Malšovice",
    citat: "Malý prostor, malý rozpočet — a stejně k nám přijeli, nakreslili plán a poradili, co zvládneme vysadit sami. To se dnes nevidí.",
    jmeno: "SVJ Na Břehách",
  },
];

export default function Page() {
  return (
    <main className="sz">
      {/* ===== HERO ===== */}
      <header className="sz-hero">
        <nav className="sz-nav" aria-label="Hlavní navigace">
          <a className="sz-wordmark" href="#" aria-label="Studio Zahrady — úvod">
            <span className="sz-wordmark-line">STUDIO</span>
            <span className="sz-wordmark-line sz-wordmark-em">ZAHRADY</span>
          </a>
          <div className="sz-nav-links">
            <a href="#postup">Jak pracujeme</a>
            <a href="#duvera">Reference</a>
            <a className="sz-nav-cta" href="tel:+420495000000">
              Zavolat studiu
            </a>
          </div>
        </nav>

        <div className="sz-hero-grid">
          <div className="sz-hero-text">
            <p className="sz-eyebrow">Zahradní architektura · Hradec Králové</p>
            <h1 className="sz-h1">
              <span className="sz-h1-row">Zahradu</span>
              <span className="sz-h1-row">kreslíme{" "}<em>tužkou,</em></span>
              <span className="sz-h1-row">stavíme <em>rýčem.</em></span>
            </h1>
            <p className="sz-lead">
              Od první čáry v půdorysu po poslední vysazený strom. Navrhujeme a
              stavíme zahrady v Hradci Králové a okolí — a vracíme se, dokud
              nezakoření.
            </p>
            <div className="sz-hero-actions">
              <a className="sz-btn" href="tel:+420495000000">
                Domluvit návštěvu pozemku
              </a>
              <a className="sz-btn sz-btn-ghost" href="#postup">
                Jak zahrada vzniká
              </a>
            </div>
          </div>

          {/* Signature: osazovací plán — půdorysné značky rostlin, jak je kreslí zahradní architekt */}
          <div className="sz-plan" aria-hidden="true">
            <svg viewBox="0 0 400 460" className="sz-plan-svg" role="img">
              {/* mřížka plánu */}
              <g className="sz-plan-grid" stroke="currentColor" strokeWidth="0.5">
                <line x1="0" y1="115" x2="400" y2="115" />
                <line x1="0" y1="230" x2="400" y2="230" />
                <line x1="0" y1="345" x2="400" y2="345" />
                <line x1="100" y1="0" x2="100" y2="460" />
                <line x1="200" y1="0" x2="200" y2="460" />
                <line x1="300" y1="0" x2="300" y2="460" />
              </g>
              {/* cestička */}
              <path
                className="sz-plan-path"
                d="M 40 460 C 60 380, 160 360, 190 300 C 220 240, 150 190, 200 120 C 240 65, 330 70, 370 20"
                fill="none"
                strokeWidth="26"
                strokeLinecap="round"
              />
              {/* strom listnatý — kruh s vlnitým okrajem */}
              <g className="sz-plant sz-plant-1">
                <circle cx="95" cy="110" r="58" fill="none" strokeWidth="2" strokeDasharray="6 5" />
                <circle cx="95" cy="110" r="4" />
                <line x1="95" y1="110" x2="135" y2="70" strokeWidth="1.5" />
              </g>
              {/* jehličnan — hvězdicová značka */}
              <g className="sz-plant sz-plant-2" strokeWidth="2">
                <circle cx="310" cy="180" r="42" fill="none" />
                <line x1="310" y1="138" x2="310" y2="222" />
                <line x1="268" y1="180" x2="352" y2="180" />
                <line x1="280" y1="150" x2="340" y2="210" />
                <line x1="340" y1="150" x2="280" y2="210" />
              </g>
              {/* trvalkový záhon — shluk malých kružnic */}
              <g className="sz-plant sz-plant-3" fill="none" strokeWidth="1.5">
                <circle cx="85" cy="320" r="16" />
                <circle cx="115" cy="300" r="12" />
                <circle cx="120" cy="335" r="14" />
                <circle cx="60" cy="345" r="11" />
                <circle cx="95" cy="360" r="10" />
              </g>
              {/* keř — dvojitá kružnice */}
              <g className="sz-plant sz-plant-4" fill="none" strokeWidth="2">
                <circle cx="300" cy="390" r="34" />
                <circle cx="300" cy="390" r="22" strokeDasharray="3 4" />
              </g>
              {/* kóta */}
              <g className="sz-plan-kota" strokeWidth="1">
                <line x1="30" y1="30" x2="30" y2="200" />
                <line x1="24" y1="30" x2="36" y2="30" />
                <line x1="24" y1="200" x2="36" y2="200" />
              </g>
              <text className="sz-plan-text" x="14" y="120" transform="rotate(-90 14 120)">
                12,4 m
              </text>
              <text className="sz-plan-text" x="250" y="445">
                M 1:100 · osazovací plán
              </text>
            </svg>
          </div>
        </div>
      </header>

      {/* ===== SEKCE 1: POSTUP ===== */}
      <section className="sz-section" id="postup" aria-labelledby="postup-h">
        <div className="sz-section-head">
          <p className="sz-eyebrow">Jak zahrada vzniká</p>
          <h2 className="sz-h2" id="postup-h">
            Čtyři roční fáze — jako vegetační rok
          </h2>
          <p className="sz-section-lead">
            Zahradu nepředáváme klíčem od branky. Vedeme ji od skici po třetí
            sezónu, kdy poprvé vypadá tak, jak jsme ji nakreslili.
          </p>
        </div>

        <ol className="sz-faze">
          {faze.map((f, i) => (
            <li className="sz-faze-item" key={f.krok}>
              <div className="sz-faze-marker">
                <span className="sz-faze-cislo">{i + 1}</span>
                <span className="sz-faze-krok">{f.krok}</span>
              </div>
              <h3 className="sz-h3">{f.nazev}</h3>
              <p className="sz-body">{f.text}</p>
              <p className="sz-faze-detail">{f.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ===== SEKCE 2: DŮVĚRA + REFERENCE ===== */}
      <section className="sz-section sz-section-dark" id="duvera" aria-labelledby="duvera-h">
        <div className="sz-section-head">
          <p className="sz-eyebrow sz-eyebrow-light">Proč Studio Zahrady</p>
          <h2 className="sz-h2" id="duvera-h">
            Dvacet let zahrad mezi Labem a Orlicí
          </h2>
        </div>

        <div className="sz-duvody">
          {duvody.map((d) => (
            <article className="sz-duvod" key={d.titul}>
              <h3 className="sz-h3">{d.titul}</h3>
              <p className="sz-body">{d.text}</p>
            </article>
          ))}
        </div>

        <div className="sz-reference">
          <h3 className="sz-ref-nadpis">Co říkají majitelé zahrad</h3>
          <div className="sz-ref-grid">
            {reference.map((r) => (
              <figure className="sz-ref" key={r.misto}>
                <figcaption className="sz-ref-misto">{r.misto}</figcaption>
                <blockquote className="sz-ref-citat">„{r.citat}“</blockquote>
                <p className="sz-ref-jmeno">— {r.jmeno}</p>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

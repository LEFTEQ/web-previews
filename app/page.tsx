import { AiImage } from "./_ui";

const sluzby = [
  {
    n: "01",
    t: "Výměny autoskel",
    d: "Čelní i boční skla osobních i nákladních vozů, autobusů a strojů — lepením do karoserie i do gumového těsnění.",
  },
  {
    n: "02",
    t: "Opravy kamínků",
    d: "Drobné praskliny a odštěpy vytvrdíme pryskyřicí — homologovaně, na počkání a za zlomek ceny výměny.",
  },
  {
    n: "03",
    t: "Autofólie a tónování",
    d: "Atestované fólie 3M a LLumar: méně tepla, víc soukromí, UV ochrana. Vždy s typovým listem do techničáku.",
  },
  {
    n: "04",
    t: "Fólie na budovy",
    d: "Okna kanceláří i domácností — tónovací, neprůhledné, reflexní i bezpečnostní fólie na míru.",
  },
  {
    n: "05",
    t: "Tažná zařízení",
    d: "Montáž v certifikované dílně včetně elektroinstalace a zápisu potřebných dokladů.",
  },
  {
    n: "06",
    t: "Drobný autoservis",
    d: "Servisní práce s hydraulickým vybavením — ať vyřešíte víc věcí na jednom místě.",
  },
];

const vyridime = [
  "Nahlášení pojistné události",
  "Komunikaci s pojišťovnou",
  "Plnou moc a potřebné doklady",
  "Fakturaci přímo na pojišťovnu",
];

const reference = [
  {
    q: "Naprostá spokojenost, domluva rychlá, slušná, vstřícná, sklo vyměněno.",
    a: "ML",
    n: "Michal Lucbauer",
  },
  {
    q: "Perfektní přístup jak po technické stránce, tak i po stránce lidské.",
    a: "TR",
    n: "Tomáš Racháč",
  },
  {
    q: "Příjemný a profesionální přístup, dobře odvedená práce za rozumnou cenu.",
    a: "MN",
    n: "Martin Nerad",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="AutoSklo Partner, Česká Lípa">
          <span className="brand-dots" aria-hidden="true" />
          <span className="brand-word">
            <b>AUTOSKLO</b>
            <i>PARTNER</i>
          </span>
        </a>
        <nav className="topnav" aria-label="Hlavní navigace">
          <a href="#sluzby">Služby</a>
          <a href="#duvera">Pojištění</a>
          <a href="#reference">Reference</a>
          <a className="topnav-cta" href="tel:+420777111222">+420&nbsp;777&nbsp;111&nbsp;222</a>
        </nav>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-h">
        <span className="frit-edge frit-edge--solid" aria-hidden="true" />
        <span className="hero-clear" aria-hidden="true" />
        <div className="band-inner hero-inner">
          <p className="eyebrow eyebrow--sky reveal r0">Autosklo Partner · Česká Lípa</p>
          <h1 id="hero-h" className="hero-h reveal r1">
            Prasklé čelní sklo?
            <br />
            <span className="hl">Vyřešíme to za vás.</span>
          </h1>
          <p className="hero-lead reveal r2">
            Výměny a opravy autoskel, tónování a fólie na budovy. Přes 30 let
            v oboru, značkové díly a rychlé jednání — obvykle vyřídíme kompletně
            z pojištění, takže u nás nezaplatíte ani korunu.
          </p>
          <div className="hero-cta reveal r3">
            <a className="btn btn--amber" href="#duvera">Nezávazná poptávka</a>
            <a className="btn btn--ghost" href="tel:+420777111222">
              Zavolat 777&nbsp;111&nbsp;222
            </a>
          </div>
          <ul className="hero-stats reveal r4" aria-label="Proč my">
            <li><b>30+</b><span>let praxe v oboru</span></li>
            <li><b>4,9★</b><span>hodnocení na Googlu</span></li>
            <li><b>0 Kč</b><span>při plnění z pojištění</span></li>
          </ul>
        </div>
      </section>

      <section className="band band--services" id="sluzby" aria-labelledby="sluzby-h">
        <span className="frit-edge" aria-hidden="true" />
        <div className="band-inner">
          <p className="eyebrow">Poskytované služby</p>
          <h2 id="sluzby-h" className="band-h">
            Kompletní řešení autoskel pod jednou střechou
          </h2>
          <p className="band-lead">
            Od výměny čelního skla přes opravy kamínků až po tónování a fólie na
            budovy — postaráme se o všechno na jednom místě v Chelčického ulici
            v České Lípě.
          </p>
          <ul className="svc-grid">
            {sluzby.map((s) => (
              <li className="svc" key={s.n}>
                <span className="svc-n">{s.n}</span>
                <h3 className="svc-t">{s.t}</h3>
                <p className="svc-d">{s.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band band--trust" id="duvera" aria-labelledby="duvera-h">
        <span className="frit-edge" aria-hidden="true" />
        <div className="band-inner">
          <p className="eyebrow">Pojistná událost</p>
          <h2 id="duvera-h" className="band-h">
            Výměna skla z pojištění — bez papírování
          </h2>

          <div className="trust-panel">
            <span className="panel-frit" aria-hidden="true" />
            <div className="panel-body">
              <p className="panel-kick">U nás neplatíte — za vás platí pojišťovna</p>
              <p className="panel-text">
                Spolupracujeme se všemi pojišťovnami a nabízíme výměnu čelního
                skla z pojištění. Počkáme si na úhradu přímo od pojišťovny a
                veškerou administrativu vyřídíme za vás.
              </p>
              <ul className="panel-list">
                {vyridime.map((v) => (
                  <li key={v}>{v}</li>
                ))}
              </ul>
            </div>
            <div className="panel-badge" aria-hidden="true">
              <AiImage
                className="panel-img"
                alt=""
                src="Extreme macro of a car windshield ceramic frit halftone dot band, solid black dots dissolving into clear glass, deep laminate green tint, studio lighting, minimal"
              />
            </div>
          </div>

          <div className="proof" id="reference">
            <p className="eyebrow">Reference</p>
            <h3 className="proof-h">Co o nás říkají zákazníci</h3>
            <ul className="quotes">
              {reference.map((r) => (
                <li className="quote" key={r.a}>
                  <span className="stars" aria-label="Hodnocení 5 z 5">★★★★★</span>
                  <p className="quote-q">„{r.q}“</p>
                  <p className="quote-a">
                    <span className="avatar" aria-hidden="true">{r.a}</span>
                    {r.n} · Google recenze
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

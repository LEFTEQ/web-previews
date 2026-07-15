import { AiImage } from "./_ui";

const sluzby = [
  {
    kod: "CW · UW 50–100",
    nazev: "Příčky a předstěny",
    text: "Nenosné sádrokartonové stěny, které rozdělí prostor za pár dní. Jednoduše i dvojitě opláštěné, s minerální izolací proti hluku.",
  },
  {
    kod: "CD · UD",
    nazev: "Podhledy",
    text: "Kazetové i celoplošné sádrokartonové podhledy. Schováme rozvody, srovnáme strop a zlepšíme akustiku místnosti.",
  },
  {
    kod: "OSB · FERMACELL",
    nazev: "Suché podlahy",
    text: "Podlahy na podsypu i na konstrukci. Rovná a únosná plocha bez mokrého procesu a čekání, než vše vyzraje.",
  },
  {
    kod: "SDK · SÁDROVLÁKNO",
    nazev: "Půdní vestavby",
    text: "Z nevyužité půdy obytný pokoj. Zateplení, opláštění šikmin i úložné prostory schované pod střechou.",
  },
  {
    kod: "KOMPOZIT · DŘEVO",
    nazev: "Terasy",
    text: "Terasy z kompozitních i přírodních materiálů. Rošt, prkna a lemování — předáme hotové k posezení.",
  },
  {
    kod: "AKUSTIK",
    nazev: "Protihlukové systémy",
    text: "Kompletní protihlukový systém stěn a stropů. Klid tam, kde byl dřív slyšet každý krok od sousedů.",
  },
];

export default function Page() {
  return (
    <main>
      <header className="site-head">
        <div className="head-inner">
          <a className="brand" href="#top" aria-label="MC SYSTEM – construction, úvod">
            <span className="brand-mc">MC</span>
            <span className="brand-sys">SYSTEM</span>
            <span className="brand-sub">construction</span>
          </a>
          <input type="checkbox" id="nav-toggle" className="nav-toggle" aria-label="Otevřít a zavřít menu" />
          <label htmlFor="nav-toggle" className="nav-burger">
            <span></span>
            <em>Menu</em>
          </label>
          <nav className="nav" aria-label="Hlavní navigace">
            <a href="#nabidka">Co nabízíme</a>
            <a href="#onas">Kdo jsme</a>
            <a href="#kontakt">Kontakt</a>
            <a className="nav-cta" href="mailto:info@mcsystem.cz">Poptat práci</a>
          </nav>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true">
          <span className="grid-note">625 mm — rozteč profilů</span>
        </div>
        <div className="hero-inner">
          <p className="eyebrow reveal">Sádrokartonář · Plzeň · od roku 2002</p>
          <h1 className="hero-h1">
            <span className="line reveal">Postavíme vám stěnu.</span>
            <span className="line reveal line-2">
              <span className="snap">Nasucho</span>, rovnou a rychle.
            </span>
          </h1>
          <p className="lede reveal">
            Sádrokartonové příčky, kazetové podhledy a suché podlahy. Kompletní
            interiér na klíč — od jednoho profilu po hotový obytný pokoj.
          </p>
          <div className="hero-tags reveal" role="list" aria-label="Materiály">
            <span role="listitem">Sádrokarton</span>
            <span role="listitem">Sádrovlákno</span>
            <span role="listitem">Cementotříska</span>
            <span role="listitem">Dřevoštěpka</span>
          </div>
        </div>
      </section>

      <section className="frame" id="nabidka" aria-labelledby="nabidka-nadpis">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow eyebrow-blue">Co nabízíme</p>
            <h2 id="nabidka-nadpis">
              Šest řemesel suché výstavby, jeden dodavatel
            </h2>
            <p className="sec-lede">
              Každou zakázku vedeme od zaměření po úklid. U názvu najdete profil
              nebo materiál, ze kterého konstrukci obvykle skládáme.
            </p>
          </div>
          <ul className="svc-grid">
            {sluzby.map((s) => (
              <li className="svc" key={s.nazev}>
                <p className="svc-kod">{s.kod}</p>
                <h3>{s.nazev}</h3>
                <p className="svc-text">{s.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="about" id="onas" aria-labelledby="onas-nadpis">
        <div className="wrap about-wrap">
          <div className="about-text">
            <p className="eyebrow eyebrow-blue">Kdo jsme</p>
            <h2 id="onas-nadpis">
              Od roku 2002 montujeme suchou výstavbu v Plzni a okolí
            </h2>
            <p>
              Začínali jsme u sádrokartonových konstrukcí a postupně přidali
              příbuzná odvětví. Dnes dodáme a smontujeme ucelené systémy suchých
              staveb i kompletní interiérové práce.
            </p>
            <p>
              Spolupracujeme s prověřenými nábytkáři, instalatéry, elektrikáři a
              pokrývači — díky tomu zajistíme řemesla pro celý dům nebo byt, ne
              jen jednu stěnu.
            </p>
            <dl className="stats">
              <div>
                <dt>Zakládáme</dt>
                <dd>2002</dd>
              </div>
              <div>
                <dt>Řemesel v dodávce</dt>
                <dd>6</dd>
              </div>
              <div>
                <dt>Působíme</dt>
                <dd>Plzeň a okolí</dd>
              </div>
            </dl>
          </div>
          <aside className="contact-card" id="kontakt" aria-label="Kontaktní údaje">
            <p className="card-eyebrow">Napište nám</p>
            <a className="card-mail" href="mailto:info@mcsystem.cz">
              info@mcsystem.cz
            </a>
            <dl className="card-rows">
              <div>
                <dt>Adresa</dt>
                <dd>Americká 1248/74<br />301 00 Plzeň</dd>
              </div>
              <div>
                <dt>IČO</dt>
                <dd>05614163</dd>
              </div>
              <div>
                <dt>DIČ</dt>
                <dd>CZ05614163</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>
    </main>
  );
}

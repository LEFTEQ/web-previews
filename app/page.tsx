const sluzby = [
  {
    krok: "Návrh",
    nazev: "3D návrh zdarma",
    text: "Přijedeme, zaměříme koupelnu a v počítači vám ukážeme, jak bude vypadat hotová — obklad po obkladu. Návrh je zdarma ke každé realizaci.",
    detail: "zaměření + vizualizace",
  },
  {
    krok: "Výběr",
    nazev: "Materiál vyberete v prodejně",
    text: "Obklady, dlažby, vany, baterie i sanitu si osaháte naživo v naší kamenné prodejně na ulici 28. října. Na stejném místě jsme od roku 1999.",
    detail: "RAVAK · JIKA · GEBERIT · CERSANIT",
  },
  {
    krok: "Bourání",
    nazev: "Kompletní rekonstrukce",
    text: "Od vybourání starého jádra přes rozvody vody a elektřiny až po poslední spáru. Jedna parta, jeden odpovědný člověk, žádné přehazování mezi firmami.",
    detail: "bytová jádra i zděné koupelny",
  },
  {
    krok: "Předání",
    nazev: "Hotovo v termínu a v ceně",
    text: "Cenu a termín dostanete písemně předem — a platí. Koupelnu předáváme uklizenou, se zapojenou sanitou a zárukou na práci i materiál.",
    detail: "garance termínu i ceny",
  },
];

const garance = [
  { hodnota: "100 %", popis: "dodržení termínu — den předání znáte předem" },
  { hodnota: "100 %", popis: "dodržení ceny — bez příplatků po cestě" },
  { hodnota: "100 %", popis: "kvalita — na práci dáváme záruku" },
];

const partneri = ["RAVAK", "JIKA", "GEBERIT", "NOVASERVIS", "VAGNERPLAST", "CERSANIT", "EDEN"];

export default function Page() {
  return (
    <main className="hk">
      {/* ===== HERO ===== */}
      <header className="hk-hero">
        <div className="hk-hero-top">
          <span className="hk-wordmark">
            HÁJEK<span className="hk-wordmark-sub">koupelny · Ostrava</span>
          </span>
          <a className="hk-tel" href="tel:+420777586182">
            +420 777 586 182
          </a>
        </div>

        <div className="hk-hero-body">
          <p className="hk-eyebrow">Rekonstrukce koupelen v Ostravě · od roku 1999</p>
          <h1 className="hk-title">
            <span className="hk-title-line">Stará koupelna</span>
            <span className="hk-title-line hk-title-accent">k&nbsp;nepoznání.</span>
          </h1>
          <p className="hk-lead">
            Od 3D návrhu přes výběr obkladů v&nbsp;naší kamenné prodejně na&nbsp;28.&nbsp;října až po
            poslední spáru. Jedna parta, pevná cena, pevný termín.
          </p>
          <div className="hk-hero-cta">
            <a className="hk-btn" href="tel:+420777586182">
              Zavolat a domluvit prohlídku
            </a>
            <p className="hk-cta-note">Přijedeme zdarma, posoudíme a spočítáme cenu.</p>
          </div>
        </div>

        {/* signature: kachličková stěna se spárami */}
        <div className="hk-tiles" aria-hidden="true">
          <div className="hk-tile-row">
            <span className="hk-tile t1"></span>
            <span className="hk-tile t2"></span>
            <span className="hk-tile t3"></span>
            <span className="hk-tile t2"></span>
            <span className="hk-tile t1"></span>
            <span className="hk-tile t4"></span>
            <span className="hk-tile t2"></span>
            <span className="hk-tile t3"></span>
          </div>
          <div className="hk-tile-row hk-tile-row-offset">
            <span className="hk-tile t2"></span>
            <span className="hk-tile t4"></span>
            <span className="hk-tile t1"></span>
            <span className="hk-tile t3"></span>
            <span className="hk-tile t2"></span>
            <span className="hk-tile t1"></span>
            <span className="hk-tile t4"></span>
            <span className="hk-tile t2"></span>
          </div>
          <div className="hk-tile-row">
            <span className="hk-tile t3"></span>
            <span className="hk-tile t1"></span>
            <span className="hk-tile t2"></span>
            <span className="hk-tile t4"></span>
            <span className="hk-tile t1"></span>
            <span className="hk-tile t3"></span>
            <span className="hk-tile t2"></span>
            <span className="hk-tile t1"></span>
          </div>
        </div>
      </header>

      {/* ===== SEKCE 1: JAK PRACUJEME ===== */}
      <section className="hk-section hk-postup" aria-labelledby="postup-h">
        <div className="hk-section-head">
          <p className="hk-eyebrow hk-eyebrow-dark">Od návrhu po poslední spáru</p>
          <h2 id="postup-h" className="hk-h2">
            Čtyři kroky k&nbsp;nové koupelně
          </h2>
        </div>

        <ol className="hk-kroky">
          {sluzby.map((s) => (
            <li key={s.krok} className="hk-krok">
              <span className="hk-krok-label">{s.krok}</span>
              <h3 className="hk-krok-nazev">{s.nazev}</h3>
              <p className="hk-krok-text">{s.text}</p>
              <p className="hk-krok-detail">{s.detail}</p>
            </li>
          ))}
        </ol>

        <p className="hk-postup-pozn">
          Rekonstruujeme panelová jádra i&nbsp;zděné koupelny — v&nbsp;Ostravě a&nbsp;okolí. Běžná
          koupelna trvá 10–14 pracovních dní.
        </p>
      </section>

      {/* ===== SEKCE 2: DŮVĚRA / GARANCE ===== */}
      <section className="hk-section hk-duvera" aria-labelledby="duvera-h">
        <div className="hk-duvera-grid">
          <div className="hk-duvera-text">
            <p className="hk-eyebrow">Na stejném místě od roku 1999</p>
            <h2 id="duvera-h" className="hk-h2 hk-h2-light">
              Nejsme firma z&nbsp;inzerátu. Máme prodejnu, kam se můžete kdykoliv vrátit.
            </h2>
            <p className="hk-duvera-lead">
              Naše koupelnové studio najdete přes 25&nbsp;let na&nbsp;ulici 28.&nbsp;října
              v&nbsp;Ostravě-Mariánských Horách. Přijďte si materiál vybrat naživo — a&nbsp;když
              bude po&nbsp;letech potřeba cokoliv doladit, víte, kde nás najdete.
            </p>
            <address className="hk-adresa">
              28. října 283/223, Ostrava — Mariánské Hory
              <br />
              <a href="mailto:info@hajek-koupelny.cz">info@hajek-koupelny.cz</a> ·{" "}
              <a href="tel:+420777586182">777 586 182</a>
            </address>
          </div>

          <ul className="hk-garance">
            {garance.map((g) => (
              <li key={g.popis} className="hk-garance-item">
                <span className="hk-garance-cislo">{g.hodnota}</span>
                <span className="hk-garance-popis">{g.popis}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hk-partneri">
          <p className="hk-partneri-label">Značky, které u nás vyberete</p>
          <ul className="hk-partneri-list">
            {partneri.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

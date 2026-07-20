import { Odometer } from "./motion";

const CARS = [
  { brand: "Mercedes-Benz", model: "E 220 d Avantgarde", rok: "2019", km: "128 400", palivo: "Nafta", cena: "489 000" },
  { brand: "Audi", model: "A4 Avant 2.0 TFSI", rok: "2020", km: "74 800", palivo: "Benzín", cena: "545 000" },
  { brand: "Škoda", model: "Octavia Combi 2.0 TDI", rok: "2018", km: "96 200", palivo: "Nafta", cena: "329 000" },
  { brand: "BMW", model: "320d Touring", rok: "2019", km: "112 500", palivo: "Nafta", cena: "459 000" },
  { brand: "Volkswagen", model: "Passat Variant 2.0 TDI", rok: "2018", km: "141 000", palivo: "Nafta", cena: "359 000" },
  { brand: "Porsche", model: "Macan S", rok: "2019", km: "68 300", palivo: "Benzín", cena: "1 090 000" },
];

const BRANDS = [
  { name: "Mercedes-Benz", n: 15 },
  { name: "Škoda", n: 5 },
  { name: "Volkswagen", n: 5 },
  { name: "Audi", n: 3 },
  { name: "BMW", n: 3 },
  { name: "Ford", n: 2 },
  { name: "Hyundai", n: 1 },
  { name: "Mazda", n: 1 },
  { name: "Peugeot", n: 1 },
  { name: "Porsche", n: 1 },
  { name: "Suzuki", n: 1 },
];

const GUARANTEES = [
  { k: "Doklady", v: "české, kompletní", note: "velký i malý techničák, původní kupní smlouva, servisní knížka" },
  { k: "TK / Emise", v: "platné", note: "vůz projede technickou a měření emisí, než ho předáme" },
  { k: "Historie", v: "dohledatelná", note: "nájezd sedí se servisní knížkou, žádné přetáčení tachometru" },
  { k: "DPH", v: "odpočet možný", note: "u vozů ze Švýcarska vyřídíme odpočet i leasing za vás" },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <div className="wm">
          <span className="wm-plate" aria-hidden="true">AV</span>
          <span className="wm-name">
            Auto Vašíček
            <small>autobazar · Pardubice</small>
          </span>
        </div>
        <span className="topbar-tag mono">CH&nbsp;→&nbsp;CZ · dovoz ze Švýcarska</span>
      </header>

      {/* HERO */}
      <section className="section hero" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow mono">Autobazar · Pardubice &amp; Hradec Králové</p>
            <h1 id="hero-title" className="hero-title">
              <span className="hl-line">Ojeté vozy</span>{" "}
              <span className="hl-line">ze Švýcarska,</span>{" "}
              <span className="hl-line">které mají <mark>všechny papíry</mark>.</span>
            </h1>
            <p className="hero-lead">
              Auta dovážíme převážně ze Švýcarska a předáváme je s platnými
              českými doklady, servisní knížkou a čerstvou technickou. Jste sice
              první majitel v ČR, ale historii vozu si přečtete černé na bílém.
            </p>
          </div>

          {/* Signature: the company type-plate holding the odometer */}
          <div className="plate plate--hero">
            <div className="stamp" aria-hidden="true">
              <span>IMPORT</span>
              <span>CH → CZ</span>
              <span>proclено</span>
            </div>
            <p className="plate-kicker mono">Typový štítek provozovny</p>
            <p className="plate-title">Katalog 2026</p>
            <dl className="reg">
              <div><dt>Původ</dt><dd className="mono">Švýcarsko</dd></div>
              <div><dt>Doklady</dt><dd className="mono">CZ, kompletní</dd></div>
              <div><dt>TK / Emise</dt><dd className="mono">platné</dd></div>
            </dl>
            <div className="odo-row">
              <div className="odo-cell">
                <Odometer value={38} className="odo mono" trigger="mount" />
                <span className="odo-label">vozů skladem</span>
              </div>
              <div className="odo-cell">
                <Odometer value={11} className="odo mono" trigger="mount" delayBase={0.2} />
                <span className="odo-label">značek</span>
              </div>
              <div className="odo-cell">
                <Odometer value={100} className="odo mono" trigger="mount" delayBase={0.4} suffix=" %" />
                <span className="odo-label">s doklady</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KATALOG */}
      <section className="section catalog" aria-labelledby="cat-title">
        <div className="container">
          <div className="sechead">
            <p className="eyebrow mono">Katalog vozů — čerstvý dovoz</p>
            <h2 id="cat-title" className="sec-title">
              Každé auto jako přečtený tachometr
            </h2>
            <p className="sec-lead">
              Nájezd sedí se servisní knížkou, palivo i rok najdete hned. Vozy
              odtahujeme a přivážíme sami — po celé ČR i Evropě.
            </p>
          </div>

          <ul className="cars">
            {CARS.map((c) => (
              <li key={c.model} className="plate plate--car">
                <div className="stamp stamp--sm" aria-hidden="true">
                  <span>CH → CZ</span>
                </div>
                <p className="car-brand mono">{c.brand}</p>
                <h3 className="car-model">{c.model}</h3>
                <dl className="specs">
                  <div><dt>Rok</dt><dd className="mono">{c.rok}</dd></div>
                  <div><dt>Nájezd</dt><dd className="mono">{c.km} km</dd></div>
                  <div><dt>Palivo</dt><dd className="mono">{c.palivo}</dd></div>
                </dl>
                <div className="price">
                  <span>Cena</span>
                  <b className="mono">{c.cena} Kč</b>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* O NÁS / DŮVĚRA */}
      <section className="section about" aria-labelledby="about-title">
        <div className="container about-grid">
          <div className="about-copy">
            <p className="eyebrow mono">Kdo jsme &amp; proč u nás</p>
            <h2 id="about-title" className="sec-title">
              Autobazar, který vám k vozu dá i celou složku
            </h2>
            <p className="sec-lead">
              Vozíme osobní i užitková auta ze Švýcarska a dalších zemí do
              Pardubic a Hradce Králové. Doklady, odpočet DPH i leasingovou
              smlouvu vyřídíme za vás. A když je potřeba, odtáhneme vůz odkudkoli
              po Evropě.
            </p>

            <ul className="guarantees">
              {GUARANTEES.map((g) => (
                <li key={g.k} className="plate plate--guard">
                  <div className="guard-head">
                    <span className="guard-k mono">{g.k}</span>
                    <span className="guard-v mono">{g.v}</span>
                  </div>
                  <p className="guard-note">{g.note}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand-count specimen grid — odometer roll on view */}
          <div className="plate plate--brands">
            <p className="plate-kicker mono">Sklad podle značky</p>
            <ul className="brandlist">
              {BRANDS.map((b, i) => (
                <li key={b.name} className="brandrow">
                  <span className="brand-name">{b.name}</span>
                  <span className="brand-lead" aria-hidden="true" />
                  <Odometer
                    value={b.n}
                    className="brand-n mono"
                    trigger="view"
                    delayBase={i * 0.06}
                  />
                </li>
              ))}
            </ul>
            <p className="brands-foot mono">Doubravická 636, Pardubice</p>
          </div>
        </div>
      </section>
    </main>
  );
}

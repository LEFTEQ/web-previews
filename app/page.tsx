import { AiImage } from "./_ui";

const categories = [
  { code: "AUT", name: "Automatizace, detekce a pohony" },
  { code: "FVE", name: "Fotovoltaické systémy" },
  { code: "HRM", name: "Hromosvodný materiál" },
  { code: "KAB", name: "Kabely, vodiče a příslušenství" },
  { code: "KOM", name: "Komunikace" },
  { code: "NAR", name: "Nářadí a měřicí přístroje" },
  { code: "OST", name: "Ostatní instalační materiál" },
  { code: "OSV", name: "Osvětlení" },
  { code: "ROZ", name: "Rozvaděče" },
  { code: "RPP", name: "Rozvaděčové přístroje" },
  { code: "SPZ", name: "Spínače, vypínače a zásuvky" },
  { code: "SVZ", name: "Světelné zdroje" },
  { code: "TCH", name: "Topné a chladicí systémy" },
  { code: "ULM", name: "Úložný materiál" },
  { code: "VEN", name: "Ventilátory" },
  { code: "ZAB", name: "Zabezpečení a čidla" },
];

const heroSpec = [
  { k: "SKLADEM", v: "50 000 položek" },
  { k: "NA OBJEDNÁNÍ", v: "200 000 položek" },
  { k: "DOPRAVA", v: "zdarma nad 3 000 Kč" },
  { k: "B2B", v: "on-line kancelář" },
];

const brands = [
  "SIEMENS", "WEIDMÜLLER", "OEZ", "EATON",
  "TREVOS", "TRILUX", "B.E.G.", "SCHMACHTL",
];

export default function Page() {
  return (
    <main className="schematic">
      <div className="bus" aria-hidden="true" />

      <header className="nav">
        <span className="node node--src" aria-hidden="true" />
        <a className="logo" href="#top" aria-label="ELEKTRO S.M.S. — úvod">
          <span className="logo__mark" aria-hidden="true">
            <i /><i /><i />
          </span>
          <span className="logo__word">ELEKTRO</span>
          <span className="logo__code">S.M.S.</span>
        </a>
        <nav className="nav__links" aria-label="Hlavní">
          <a href="#sortiment">Sortiment</a>
          <a href="#proc">Proč u nás</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <section className="hero section" id="top">
        <div className="head">
          <span className="node" aria-hidden="true" />
          <p className="eyebrow">N0 / Elektrotechnický velkoobchod — Pardubice</p>
        </div>
        <div className="hero__grid">
          <div className="hero__text">
            <h1 className="h1">
              Elektroinstalaci<br />máme celou<br />skladem.
            </h1>
            <p className="lede">
              Od kabelů a rozvaděčů po fotovoltaiku, osvětlení a hromosvody.
              50 000 položek připravených k odběru v Pardubicích, dalších
              200 000 na objednání. Pro elektrikáře, montážní firmy i projektanty.
            </p>
            <a className="btn" href="#sortiment">Prohlédnout sortiment</a>
            <dl className="spec">
              {heroSpec.map((s) => (
                <div className="spec__row" key={s.k}>
                  <dt>{s.k}</dt>
                  <dd>{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="hero__media">
            <AiImage
              src="/hero.webp"
              alt="Regály elektroinstalačního materiálu ve skladu Elektro S.M.S. v Pardubicích"
              className="hero__img"
            />
          </div>
        </div>
      </section>

      <section className="offer section" id="sortiment">
        <div className="head">
          <span className="node" aria-hidden="true" />
          <p className="eyebrow">N1 / Sortiment</p>
          <h2 className="h2">Šestnáct polí, jedno skladové číslo</h2>
          <p className="head__note">
            Celý katalog čtete jako svorkovnici — každé pole má svůj kód.
            Klikněte do pole a máte před sebou skladové zásoby i aktuální ceny.
          </p>
        </div>

        <div className="field">
          {categories.map((c) => (
            <a className="cell" href="#kontakt" key={c.code}>
              <span className="cell__code">{c.code}</span>
              <span className="cell__name">{c.name}</span>
              <span className="cell__go" aria-hidden="true">→</span>
            </a>
          ))}
        </div>

        <AiImage
          src="/section-1.webp"
          alt="Detail zapojených svorkovnic a jističů v rozvaděči"
          className="offer__band"
        />
      </section>

      <section className="trust section" id="proc">
        <div className="head">
          <span className="node" aria-hidden="true" />
          <p className="eyebrow">N2 / Proč Elektro S.M.S.</p>
          <h2 className="h2">Materiál, kterému dáte napětí ještě týž den</h2>
        </div>

        <div className="trust__grid">
          <div className="trust__text">
            <p>
              Pardubická pobočka je součástí sítě velkoobchodů, která drží
              50 000 položek fyzicky skladem. Objednáte do uzávěrky a zboží
              vyrazí k vám ještě týž den — dopravu nad 3 000 Kč neúčtujeme.
            </p>
            <p>
              Skladové zásoby i ceny aktualizujeme denně, takže v e-shopu
              vidíte, co je opravdu na regálu. Přes B2B on-line kancelář si
              stáhnete faktury, ceníky pro vaši firmu i historii objednávek.
            </p>
            <p className="trust__brands-label">Autorizovaně vedeme značky:</p>
            <ul className="trust__brands">
              {brands.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>

          <dl className="trust__stats">
            <div>
              <dt>Skladem v Pardubicích</dt>
              <dd><b>50 000</b> položek</dd>
            </div>
            <div>
              <dt>K objednání či poptání</dt>
              <dd><b>200 000</b> položek</dd>
            </div>
            <div>
              <dt>Doprava zdarma</dt>
              <dd>nad <b>3 000</b> Kč</dd>
            </div>
            <div>
              <dt>Ceny a sklad</dt>
              <dd>aktualizace <b>denně</b></dd>
            </div>
          </dl>
        </div>

        <div className="trust__media" id="kontakt">
          <AiImage
            src="/section-2.webp"
            alt="Výdejní pult pobočky Elektro S.M.S. s pracovníkem obchodu"
            className="trust__img"
          />
          <div className="trust__contact">
            <p className="eyebrow">Kontakt / velkoobchod</p>
            <p className="trust__addr">
              Elektro S.M.S., spol. s r.o.<br />
              Pardubice
            </p>
            <p className="trust__mail">
              <a href="mailto:ecommerce@elektrosms.cz">ecommerce@elektrosms.cz</a>
            </p>
            <p className="trust__hours">Po–Pá, výdej i rozvoz týž den</p>
          </div>
        </div>
      </section>
    </main>
  );
}

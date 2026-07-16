import { AiImage } from "./_ui";

const chips = [
  {
    key: "cement",
    name: "Cement",
    grade: "CEM II/B-M 32,5 R",
    sku: "CEM-325R",
    rows: [
      ["Balení", "pytel 25 kg"],
      ["Paleta", "1400 kg · 56 ks"],
      ["Třída", "32,5 R"],
    ],
  },
  {
    key: "cihla",
    name: "Cihla",
    grade: "broušená P15 · 44 cm",
    sku: "CIH-P15",
    rows: [
      ["Paleta", "60 ks"],
      ["Pevnost", "P15"],
      ["Zdivo", "nosné · λ 0,08"],
    ],
  },
  {
    key: "sterk",
    name: "Štěrk",
    grade: "praný · frakce 8–16 mm",
    sku: "STK-816",
    rows: [
      ["Big bag", "1000 kg"],
      ["Volně", "na sklápěč"],
      ["Frakce", "8–16 mm"],
    ],
  },
  {
    key: "malta",
    name: "Malta",
    grade: "zdicí M10 · zimní",
    sku: "MAL-M10",
    rows: [
      ["Balení", "pytel 25 kg"],
      ["Paleta", "1200 kg · 48 ks"],
      ["Pevnost", "M10"],
    ],
  },
  {
    key: "izolace",
    name: "Izolace",
    grade: "fasádní EPS 70F · 100 mm",
    sku: "IZO-70F",
    rows: [
      ["Deska", "1000 × 500 mm"],
      ["λ", "0,039 W/mK"],
      ["Balík", "2,5 m²"],
    ],
  },
  {
    key: "drevo",
    name: "Dřevo",
    grade: "KVH hranol C24 · 100×100",
    sku: "DRE-C24",
    rows: [
      ["Profil", "100 × 100 mm"],
      ["Délka", "do 6 m"],
      ["Třída", "C24 · sušené"],
    ],
  },
];

export default function Page() {
  return (
    <main className="kz">
      <section className="kz-hero" aria-labelledby="kz-hero-title">
        <div className="kz-wrap kz-hero__grid">
          <div className="kz-hero__lede">
            <p className="kz-eyebrow">
              <span className="kz-wordmark" aria-label="KZ Mat">
                <b>KZ</b>MAT
              </span>
              <span className="kz-eyebrow__loc">Stavebniny · Hradec Králové</span>
            </p>
            <h1 id="kz-hero-title" className="kz-hero__title">
              Materiál <span className="kz-under">známe</span>
              <br />
              po číslech.
            </h1>
            <p className="kz-hero__sub">
              Cement, cihla, štěrk, malta, izolace i řezivo — naskladněné na dvoře
              v Hradci Králové. Poradíme podle třídy a frakce, naložíme a přivezeme
              až na stavbu s hydraulickou rukou.
            </p>
            <div className="kz-hero__cta">
              <a className="kz-btn" href="#sortiment" data-label="OBJEDNAT ROZVOZ">
                <span>Objednat rozvoz</span>
              </a>
              <a className="kz-btn kz-btn--ghost" href="#dvur">
                Jak nakupujete
              </a>
            </div>
          </div>

          <div className="kz-ticket" aria-hidden="true">
            <div className="kz-ticket__head">
              <span>DODACÍ LIST</span>
              <span>č. 2024-0417</span>
            </div>
            <div className="kz-ticket__body">
              <div className="kz-ticket__row">
                <span>Váha vjezd</span>
                <b>2 480 kg</b>
              </div>
              <div className="kz-ticket__row">
                <span>Váha výjezd</span>
                <b>18 940 kg</b>
              </div>
              <div className="kz-ticket__row kz-ticket__row--sum">
                <span>Náklad</span>
                <b>16 460 kg</b>
              </div>
            </div>
            <div className="kz-ticket__foot">
              <span>PALET 12</span>
              <span>HK · dvůr 3</span>
            </div>
          </div>
        </div>
      </section>

      <section className="kz-band kz-catalog" id="sortiment" aria-labelledby="kz-cat-title">
        <div className="kz-wrap">
          <header className="kz-head">
            <p className="kz-tag">Vzorník ze dvora</p>
            <h2 id="kz-cat-title" className="kz-h2">Co máme skladem</h2>
            <p className="kz-head__note">
              Šest základních řad, každá se svým katalogovým číslem a specifikací.
              Vyberte podle třídy — ceník i množstevní slevy pošleme obratem.
            </p>
          </header>

          <ul className="kz-specimens">
            {chips.map((c, i) => (
              <li
                key={c.key}
                className={`kz-chip kz-chip--${c.key}`}
                style={{ ["--i" as string]: i }}
              >
                <div className="kz-chip__texture" aria-hidden="true" />
                <div className="kz-chip__title">
                  <span className="kz-chip__name">{c.name}</span>
                  <span className="kz-chip__grade">{c.grade}</span>
                </div>
                <div className="kz-chip__docket">
                  <div className="kz-chip__sku">{c.sku}</div>
                  <dl className="kz-chip__spec">
                    {c.rows.map(([k, v]) => (
                      <div key={k} className="kz-chip__specrow">
                        <dt>{k}</dt>
                        <dd>{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="kz-band kz-yard" id="dvur" aria-labelledby="kz-yard-title">
        <div className="kz-wrap kz-yard__grid">
          <div className="kz-yard__lede">
            <p className="kz-tag kz-tag--light">Dvůr v Hradci</p>
            <h2 id="kz-yard-title" className="kz-h2 kz-h2--light">
              Naložíme, zavážeme, přivezeme
            </h2>
            <p className="kz-yard__note">
              Stavebniny nad Labem, kousek od Gočárových cihlových staveb. Zboží
              vydáváme přes vlastní váhu, takže na dodacím listu sedí každý kilogram.
              Menší nákup naložíme na počkání, celou paletu přivezeme až na stavbu.
            </p>
          </div>

          <ul className="kz-facts">
            <li className="kz-fact">
              <span className="kz-fact__num">30 km</span>
              <span className="kz-fact__lab">Rozvoz po Královéhradecku, sklápěč i hydraulická ruka</span>
            </li>
            <li className="kz-fact">
              <span className="kz-fact__num">do 24 h</span>
              <span className="kz-fact__lab">Běžné zboží ze skladu naložíme následující pracovní den</span>
            </li>
            <li className="kz-fact">
              <span className="kz-fact__num">6 řad</span>
              <span className="kz-fact__lab">Cement, zdivo, kamenivo, malty, izolace a řezivo pod jednou střechou</span>
            </li>
            <li className="kz-fact">
              <span className="kz-fact__num">Po–So</span>
              <span className="kz-fact__lab">Otevřeno i v sobotu dopoledne, výdej z rampy bez čekání</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

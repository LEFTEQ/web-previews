import React from "react";

const products = [
  {
    tag: "GEALAN · plast",
    name: "Plastová okna",
    desc: "Vícekomorové profily GEALAN s tepelnou izolací na úrovni těch nejpřísnějších norem. Vyrábíme přesně na míru — tvar i design přizpůsobíme historickému domu i moderní novostavbě.",
  },
  {
    tag: "Heroal · hliník",
    name: "Hliníková okna",
    desc: "Hliník uspokojí i požadavek na originalitu — zvládneme kruhové, segmentové i oválné oblouky. Sedí na rodinný dům, zimní zahradu i velkou administrativní budovu.",
  },
  {
    tag: "plast i hliník",
    name: "Vchodové a balkonové dveře",
    desc: "Spolehlivost, design a komfort v jednom. Odolné proti povětrnosti, s bezpečnostním kováním a kvalitními zámky — posuvné i otevírací, v jakémkoli rozměru.",
  },
  {
    tag: "stavba na míru",
    name: "Zimní zahrady",
    desc: "Místo, kde se interiér potká s přírodou. Stavíme na míru vašemu domu, s větráním i stíněním — v téměř neomezených rozměrech a tvarech.",
  },
  {
    tag: "interiér",
    name: "Prosklené stěny",
    desc: "Fakticky i opticky oddělí prostor a dodají interiéru originalitu. Světlo projde, hluk a chlad zůstanou za sklem.",
  },
];

const specs = [
  ["Profilové systémy", "GEALAN (plast) · Heroal (hliník)"],
  ["Barvy", "bílá, odstíny RAL, imitace dřeva"],
  ["Povrchová úprava", "Acrylcolor, opláštění AluClipem"],
  ["Provedení", "jednostranné i oboustranné"],
  ["Zasklení", "izolační dvojsklo i trojsklo"],
  ["Servis", "záruční i pozáruční"],
];

const reasons = [
  "Vyrábíme na zakázku — přesně podle vašeho zadání, ne jen z katalogu hotových rozměrů.",
  "Design ladíme se stavbou, ať je to secesní činžák, nebo nízkoenergetická novostavba.",
  "Objednávku servisu i nahlášení reklamace vyřídíte přímo u nás, ne přes cizí linku.",
  "Najdete nás na Starém náměstí 25 v Sokolově — okna si můžete přijít osahat naživo.",
];

export default function Page() {
  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <a className="wordmark" href="#top" aria-label="NELAN — okna a dveře, Sokolov">
            <span className="wm-name">NELAN</span>
            <span className="wm-sub">OKNA · DVEŘE · SOKOLOV</span>
          </a>
          <nav className="nav-links" aria-label="Hlavní navigace">
            <a href="#produkty">Produkty</a>
            <a href="#o-firme">O firmě</a>
            <a href="#poptavka">Poptávka</a>
          </nav>
          <a className="btn btn-solid nav-cta" href="#poptavka">Nezávazná poptávka</a>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-h">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow r r1">Okna na míru · Sokolov · Krušnohoří</p>
              <h1 id="hero-h" className="hero-title">
                <span className="r r2">Šest komor</span>{" "}
                <span className="r r3">mezi vámi</span>{" "}
                <span className="r r4">a <span className="hl">zimou.</span></span>
              </h1>
              <p className="lead r r5">
                Plastová okna z vícekomorových profilů GEALAN — vyrobená na míru
                v Sokolově, s tepelnou izolací, která drží i ty nejtvrdší
                krušnohorské zimy. Záruční i pozáruční servis bereme jako
                samozřejmost.
              </p>
              <div className="hero-cta r r6">
                <a className="btn btn-solid" href="#poptavka">Chci nezávaznou nabídku</a>
                <a className="btn btn-ghost" href="#produkty">Prohlédnout okna a dveře</a>
              </div>
              <ul className="chips r r6" aria-label="Klíčové parametry">
                <li>GEALAN · 6 komor</li>
                <li>Uw&nbsp;až&nbsp;0,7&nbsp;W/m²K</li>
                <li>výroba na zakázku</li>
                <li>RAL · imitace dřeva</li>
              </ul>
            </div>

            <div className="hero-media r r4">
              <figure className="hero-window">
                <img
                  src="/hero.webp"
                  width={1000}
                  height={750}
                  alt="Prosklená fasáda s okny NELAN — pohled na světlem prostoupený interiér"
                  loading="eager"
                />
              </figure>
              <aside className="profile-card" aria-label="Řez profilem GEALAN">
                <p className="pc-title">PROFIL GEALAN — ŘEZ</p>
                <div className="chambers" aria-hidden="true">
                  <i style={{ animationDelay: "0.05s" }} />
                  <i style={{ animationDelay: "0.12s" }} />
                  <i style={{ animationDelay: "0.19s" }} />
                  <i style={{ animationDelay: "0.26s" }} />
                  <i style={{ animationDelay: "0.33s" }} />
                  <i style={{ animationDelay: "0.40s" }} />
                </div>
                <div className="pc-legend">
                  <span>6&nbsp;komor</span>
                  <span>trojsklo</span>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="section" id="produkty" aria-labelledby="prod-h">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">Sortiment</p>
              <h2 id="prod-h" className="sec-title">Od plastového okna po zimní zahradu.</h2>
            </div>

            <figure className="band">
              <img
                src="/section-1.webp"
                width={1200}
                height={800}
                alt="Ukázka realizace oken a dveří NELAN"
                loading="lazy"
              />
            </figure>

            <ol className="catalog">
              {products.map((p) => (
                <li className="cat-row" key={p.name}>
                  <span className="cat-tag">{p.tag}</span>
                  <h3 className="cat-name">{p.name}</h3>
                  <p className="cat-desc">{p.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section section--dark" id="o-firme" aria-labelledby="about-h">
          <div className="wrap about-grid">
            <div className="about-copy">
              <p className="eyebrow eyebrow--edge">O firmě</p>
              <h2 id="about-h" className="sec-title">Okno není jen sklo v rámu.</h2>
              <p className="about-lead">
                Každé okno počítáme, řežeme a svařujeme podle jednoho konkrétního
                domu. Vybíráte barvu, profil i povrch — od bílé přes odstíny RAL
                a imitace dřeva až po Acrylcolor nebo opláštění AluClipem.
              </p>
              <ul className="reasons">
                {reasons.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>

            <div className="about-side">
              <figure className="band band--in">
                <img
                  src="/section-2.webp"
                  width={1000}
                  height={750}
                  alt="Detail okenního profilu a kování NELAN"
                  loading="lazy"
                />
              </figure>
              <div className="spec" role="table" aria-label="Možnosti a parametry oken">
                <p className="spec-cap">MOŽNOSTI A PARAMETRY</p>
                {specs.map(([k, v]) => (
                  <div className="spec-row" role="row" key={k}>
                    <span className="spec-k" role="cell">{k}</span>
                    <span className="spec-v" role="cell">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

import { AiImage } from "./_ui";

const temper = [
  { name: "slámová", temp: "220 °C", color: "#c69a3e" },
  { name: "bronzová", temp: "255 °C", color: "#9a6b34" },
  { name: "nachová", temp: "285 °C", color: "#6a5fa8" },
  { name: "modrá", temp: "310 °C", color: "#4f86b3" },
];

const steps = [
  {
    n: "01",
    title: "Výkresová dokumentace",
    body: "Návrh a výkresy v CADu. Než se ustřihne první plech, díl existuje přesně na milimetr — a vy víte, co dostanete.",
  },
  {
    n: "02",
    title: "Řezání laserem a ohýbání",
    body: "Přesné laserové řezání a ohýbání u prověřených partnerů. Rozměry sedí na desetiny, hrany jsou čisté.",
  },
  {
    n: "03",
    title: "Svařování",
    body: "Srdce dílny. Certifikovaní svářeči, metody MIG, MAG i TIG, ocel i nerez. Kvalita svarů dle DIN EN ISO 3834-2.",
  },
  {
    n: "04",
    title: "Mechanické zpracování",
    body: "Vrtání, řezání, frézování a soustružení — doladění dílu do finální podoby, aby vše lícovalo.",
  },
  {
    n: "05",
    title: "Povrchová úprava",
    body: "Moření nerezu, tryskání skleněnými kuličkami, zinkování, lak i prášková barva — podle prostředí, kam díl přijde.",
  },
  {
    n: "06",
    title: "Montáž",
    body: "Přivezeme a osadíme na místě. Rychle, bezpečně a s dotažením detailů, na kterých to celé stojí.",
  },
];

const gallery = [
  {
    prompt:
      "A hot-dip galvanized steel driveway gate, industrial welded frame with vertical bars, photographed straight on against a dark graphite studio background, spotlit",
    alt: "Vjezdová brána z žárově zinkované oceli",
    cap: "Vjezdová brána · žárově zinkovaná ocel",
  },
  {
    prompt:
      "An interior welded steel staircase with stringer and treads, brushed metal, photographed straight on against a dark graphite studio background, spotlit",
    alt: "Vnitřní ocelové schodiště",
    cap: "Vnitřní schodiště · ocel a nerez",
  },
  {
    prompt:
      "A load-bearing welded steel construction frame, raw grey primed steel beams and gussets, photographed against a dark graphite studio background, spotlit",
    alt: "Nosná ocelová konstrukce",
    cap: "Nosná konstrukce · svařenec",
  },
];

export default function Page() {
  return (
    <main>
      <header className="site">
        <div className="wrap site__inner">
          <a className="brand" href="#" aria-label="SLG, kovovýroba a zámečnictví">
            <span className="brand__mark">SLG</span>
            <span className="brand__sub">s.r.o.</span>
          </a>
          <nav className="nav" aria-label="Hlavní">
            <a href="#sluzby">Služby</a>
            <a href="#o-nas">O nás</a>
            <a href="#galerie">Galerie</a>
          </nav>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="wrap">
          <p className="eyebrow">
            Kovovýroba a zámečnictví · České Budějovice · od roku 1994
          </p>
          <h1 id="hero-title" className="hero__title">
            <span className="hero__line l1">Ocel a nerez</span>
            <span className="hero__line l2">na zakázku</span>
          </h1>
          <p className="lead">
            Brány, schodiště a ocelové konstrukce svařujeme na míru — od výkresu
            v CADu až po montáž u vás. Certifikovaní svářeči, třicet let
            u svařovacího hořáku.
          </p>

          <div className="hero__seamblock">
            <div className="seam" aria-hidden="true" />
            <div className="temper">
              <p className="temper__cap">
                Náběhové barvy oceli — podle nich svářeč čte teplotu kovu:
              </p>
              <ul className="temper__list">
                {temper.map((t) => (
                  <li key={t.name} className="temper__item">
                    <span
                      className="temper__chip"
                      style={{ background: t.color }}
                    />
                    <span className="temper__name">{t.name}</span>
                    <span className="temper__temp">{t.temp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ul className="badges">
            <li><strong>30 let</strong> v oboru</li>
            <li><strong>DIN EN ISO 3834-2</strong> certifikované svařování</li>
            <li><strong>MIG · MAG · TIG</strong> ocel i nerez</li>
          </ul>
        </div>
      </section>

      <div className="wrap"><div className="seam" aria-hidden="true" /></div>

      <section id="sluzby" className="section" aria-labelledby="sluzby-title">
        <div className="wrap">
          <p className="eyebrow">Cesta dílu dílnou · 01 → 06</p>
          <h2 id="sluzby-title" className="section__title">Co pro vás uděláme</h2>
          <p className="section__note">
            Čísla nejsou jen pořadí — je to skutečná cesta každého dílu naší
            dílnou, od prvního výkresu po osazení na stavbě.
          </p>

          <ol className="steps">
            {steps.map((s) => (
              <li key={s.n} className="step">
                <span className="step__n">{s.n}</span>
                <h3 className="step__title">{s.title}</h3>
                <p className="step__body">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="wrap"><div className="seam" aria-hidden="true" /></div>

      <section id="o-nas" className="section" aria-labelledby="about-title">
        <div className="wrap about">
          <div className="about__text">
            <p className="eyebrow">O firmě · U Smaltovny, České Budějovice</p>
            <h2 id="about-title" className="section__title">
              Malá dílna, na kterou se dá spolehnout
            </h2>
            <p className="about__p">
              SLG vede David Lexa a parta zkušených svářečů a zámečníků.
              Děláme kovovýrobu a zámečnictví v Českých Budějovicích už tři
              desítky let — dřív u Voříškova Dvoru, dnes v ulici U Smaltovny.
            </p>
            <p className="about__p">
              Svařujeme ocel i nerez, pracujeme také s hliníkem, mědí a mosazí.
              Každou zakázku vedeme od návrhu přes výrobu až po montáž, takže
              máte celou stavbu v jedněch rukou. Poptávky na rok 2025 už
              přijímáme.
            </p>

            <dl className="facts">
              <div className="fact">
                <dt>V oboru</dt>
                <dd>30 let</dd>
              </div>
              <div className="fact">
                <dt>Svařování</dt>
                <dd>DIN EN ISO 3834-2</dd>
              </div>
              <div className="fact">
                <dt>Materiály</dt>
                <dd>ocel · nerez · hliník · měď · mosaz</dd>
              </div>
              <div className="fact">
                <dt>Váš člověk</dt>
                <dd>David Lexa · Po–Pá 7:00–16:00</dd>
              </div>
            </dl>
          </div>

          <div id="galerie" className="gallery" aria-label="Ukázky práce">
            {gallery.map((g) => (
              <figure key={g.cap} className="plate">
                <div className="plate__frame">
                  <AiImage
                    src={g.prompt}
                    alt={g.alt}
                    className="plate__img"
                  />
                </div>
                <figcaption className="plate__cap">{g.cap}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

import { AiImage } from "./_ui";
import { LayingHeadline } from "./motion";

const PRODUCTS = [
  { name: "Dlažby", note: "Zámkové i velkoformátové — řady LITE, VERTO, MODERN." },
  { name: "Obrubníky", note: "Silniční, chodníkové i zahradní, přesné hrany." },
  { name: "Žlaby", note: "Odvodňovací a štěrbinové pro příjezd i dvůr." },
  { name: "Palisády a zahradní stěny", note: "Svahování, opěrné zdi, terénní zlomy." },
  { name: "Schody", note: "Blokové stupně i montovaná schodiště." },
  { name: "Bazénové lemy", note: "Oblouk nebo hrana — systémové zakončení." },
  { name: "Zdicí prvky", note: "Plotový systém ALFA BLOCK a doplňky." },
  { name: "Mobiliář", note: "Lavičky, květináče a prvky do veřejného prostoru." },
];

const SYSTEMS = ["LITE", "VERTO", "BARK", "MODERN", "DUO STONE", "H·E·X", "RUSTIKAL"];

const FACTS = [
  { k: "Skladem v Olomouci", v: "Betonové prvky vyrábíme a expedujeme z Olomouce — rozvoz po celé Hané." },
  { k: "Podklady pro projektanty", v: "Podklady dwg, 3D modely a pracovní postupy pro architekty a projektanty." },
  { k: "2D návrh exteriéru zdarma", v: "Pošlete rozměry, vrátíme vizualizaci dlážděné plochy i orientační cenu." },
  { k: "Katalog 2026", v: "Ucelený přehled prvků pro zahradu, příjezd i veřejný prostor." },
];

export default function Page() {
  return (
    <main>
      <header className="topbar">
        <a className="wordmark" href="#hero" aria-label="PRESBETON Nova, úvod">
          <span className="wm-mark" aria-hidden="true" />
          <span className="wm-text">
            PRESBETON<em>Nova</em>
          </span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#katalog">Katalog</a>
          <a href="#systemy">Systémová řešení</a>
          <a href="#firma">Olomouc</a>
        </nav>
      </header>

      <section id="hero" className="hero">
        <div className="hero-content">
          <p className="eyebrow">Stavebniny · dlažba · obklady — Olomouc</p>
          <LayingHeadline />
          <p className="lead">
            Betonová dlažba, obrubníky, žlaby i palisády z olomoucké výroby.
            Systémová řešení pro zahradu, příjezd i veřejný prostor — navržená
            tak, aby do sebe zapadla a vydržela.
          </p>
          <div className="cta-row">
            <a className="btn btn--primary" href="#katalog">
              Prohlédnout katalog
            </a>
            <a className="btn btn--ghost" href="tel:—">
              Zavolat
            </a>
          </div>
        </div>
        <div className="hero-media">
          <AiImage
            src="/hero.webp"
            alt="Zámková betonová dlažba PRESBETON položená v běhounové vazbě"
            className="hero-img"
          />
        </div>
      </section>

      <div className="seam" aria-hidden="true" />

      <section id="katalog" className="block block--light">
        <div className="block-head">
          <p className="eyebrow eyebrow--dark">Co u nás najdete</p>
          <h2 className="section-title">Katalog položený na modul</h2>
          <p className="section-intro">
            Každá řada je stavebnice: prvky se skládají do vazby, hrany drží
            spáru. Vyberte kategorii — na spočítání plochy i ceny je 2D návrh
            zdarma.
          </p>
        </div>

        <div className="pavers">
          {PRODUCTS.map((p) => (
            <article className="tile" key={p.name}>
              <h3 className="tile-name">{p.name}</h3>
              <p className="tile-note">{p.note}</p>
            </article>
          ))}
        </div>

        <div id="systemy" className="systems">
          <span className="systems-label">Systémová řešení</span>
          <ul className="chips">
            {SYSTEMS.map((s) => (
              <li className="chip" key={s}>
                {s}
              </li>
            ))}
          </ul>
        </div>

        <figure className="strip">
          <AiImage
            src="/section-1.webp"
            alt="Realizace betonové dlažby a obrubníků na příjezdové ploše"
            className="strip-img"
          />
        </figure>
      </section>

      <div className="seam" aria-hidden="true" />

      <section id="firma" className="block block--dark">
        <div className="about">
          <div className="about-text">
            <p className="eyebrow">Proč PRESBETON Nova</p>
            <h2 className="section-title section-title--light">
              Beton z Olomouce, od projektu po poslední spáru
            </h2>
            <p className="section-intro section-intro--light">
              Neprodáváme jen paletu dlažby. Poradíme s vazbou, spádem i
              zakončením — od soukromé zahrady přes příjezd až po městský
              mobiliář a veřejný prostor. Naše prvky najdete i tam, kde na ně
              denně šlape celé sídliště.
            </p>

            <dl className="facts">
              {FACTS.map((f) => (
                <div className="fact" key={f.k}>
                  <dt>{f.k}</dt>
                  <dd>{f.v}</dd>
                </div>
              ))}
            </dl>

            <div className="contact">
              <p className="contact-line">
                <span className="contact-k">Vzorkovna</span>
                Ukázková 123, Olomouc
              </p>
              <p className="contact-line">
                <span className="contact-k">Telefon</span>
                <a href="tel:—">—</a>
              </p>
              <p className="contact-line">
                <span className="contact-k">E-mail</span>
                <a href="mailto:—">—</a>
              </p>
            </div>
          </div>

          <figure className="about-media">
            <AiImage
              src="/section-2.webp"
              alt="Betonový mobiliář a palisády PRESBETON ve veřejném prostoru"
              className="about-img"
            />
          </figure>
        </div>
      </section>
    </main>
  );
}

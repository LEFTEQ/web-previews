import { AiImage } from "./_ui";

const heroPlates = [
  { code: "01", label: "Výstavy a veletrhy", spec: "expozice 12–420 m²" },
  { code: "02", label: "StarIgloo", spec: "polykarbonát 8 mm" },
  { code: "03", label: "Grafický design", spec: "tiskoviny + digitál" },
  { code: "04", label: "Fotografie", spec: "interiér / produkt" },
  { code: "05", label: "Video a slideshow", spec: "prezentace na stánek" },
  { code: "06", label: "Webdesign a bannery", spec: "formáty pro sítě" },
];

const sluzby = [
  {
    src: "/section-1.webp",
    alt: "Výstavní expozice postavená z hliníkové konstrukce s prosvětlenou grafikou",
    nazev: "Výstavní stánky na klíč",
    popis: "Návrh, výroba, doprava i montáž — vy přijedete na hotovou expozici.",
    spec: [
      ["SLUŽBA", "Expozice"],
      ["ROK", "od 2000"],
      ["MĚŘÍTKO", "12–420 m²"],
      ["MÍSTO", "ČR i zahraničí"],
    ],
  },
  {
    src: "/section-2.webp",
    alt: "Kopule StarIgloo z polykarbonátu a leteckého hliníku v zahradě",
    nazev: "StarIgloo",
    popis: "Kopule z polykarbonátu a leteckého hliníku — glamping, zahrada, restaurace.",
    spec: [
      ["SLUŽBA", "Dodávka"],
      ["ROK", "vlastní značka"],
      ["MĚŘÍTBO", "ø 3–8 m"],
      ["MÍSTO", "včetně pódia"],
    ],
  },
];

const maleTalire = [
  {
    nazev: "Grafický design",
    popis: "Logo, značka, vizitky, letáky, brožury, kalendáře i polepy techniky.",
    spec: [
      ["VÝSTUP", "tisk + PDF"],
      ["FORMÁT", "A6 – B0"],
    ],
  },
  {
    nazev: "Fotografické služby",
    popis: "Produkt na bílé, interiéry hotelů, exteriéry staveb — i přímo na veletrhu.",
    spec: [
      ["VÝSTUP", "RAW + retuš"],
      ["FORMÁT", "web i velkoplošně"],
    ],
  },
  {
    nazev: "Video a slideshow",
    popis: "Smyčka na obrazovku stánku, produktové video, prezentace pro obchodníky.",
    spec: [
      ["VÝSTUP", "MP4 / 16:9"],
      ["FORMÁT", "30–120 s"],
    ],
  },
  {
    nazev: "Webdesign a média",
    popis: "Jednoduchý web ke značce, bannery a sady formátů pro sociální sítě.",
    spec: [
      ["VÝSTUP", "web + bannery"],
      ["FORMÁT", "responzivní"],
    ],
  },
];

export default function Page() {
  return (
    <main className="bv-page">
      <header className="bv-topbar">
        <a className="bv-wordmark" href="#uvod" aria-label="Board Vision — úvod">
          <span className="bv-wordmark__board">BOARD</span>
          <span className="bv-wordmark__rule" aria-hidden="true" />
          <span className="bv-wordmark__vision">VISION</span>
        </a>
        <p className="bv-topbar__meta">
          <span>Ústí nad Labem</span>
          <span className="bv-topbar__dot" aria-hidden="true">/</span>
          <span>výstavnictví od roku 2000</span>
        </p>
      </header>

      <section className="bv-hero" id="uvod">
        <div className="bv-hero__text">
          <p className="bv-eyebrow">
            <span className="bv-eyebrow__tick" aria-hidden="true" />
            Stavíme expozice, které se dají složit i za jednu noc
          </p>
          <h1 className="bv-hero__title">
            Váš stánek<br />
            <em>postavíme</em> dřív,<br />
            než dorazíte.
          </h1>
          <p className="bv-hero__lead">
            Board Vision navrhuje, vyrábí a montuje veletržní expozice — od první skici
            přes grafiku a nábytek až po úklid po demontáži. Ve stejné dílně vzniká
            i StarIgloo a tiskoviny, které si na stánek přivezete.
          </p>
          <div className="bv-hero__actions">
            <a className="bv-btn bv-btn--primary" href="tel:+420777111222">Zavolat 777 111 222</a>
            <a className="bv-btn bv-btn--ghost" href="mailto:info@example.cz">Napsat na info@example.cz</a>
          </div>
        </div>

        <div className="bv-hero__build">
          <figure className="bv-hero__figure bv-plate bv-plate--hero">
            <span className="bv-bracket bv-bracket--tl" aria-hidden="true" />
            <span className="bv-bracket bv-bracket--tr" aria-hidden="true" />
            <span className="bv-bracket bv-bracket--bl" aria-hidden="true" />
            <span className="bv-bracket bv-bracket--br" aria-hidden="true" />
            <AiImage
              className="bv-hero__img"
              src="/hero.webp"
              alt="Veletržní expozice Board Vision s prosvětlenou fasádou a hliníkovou konstrukcí"
            />
            <figcaption className="bv-specstrip">
              <span><b>SLUŽBA</b> Expozice na klíč</span>
              <span><b>ROK</b>2024</span>
              <span><b>MĚŘÍTKO</b> 96 m²</span>
              <span><b>MÍSTO</b> Výstaviště Praha</span>
            </figcaption>
          </figure>

          <ul className="bv-hero__plates">
            {heroPlates.map((p, i) => (
              <li
                key={p.code}
                className="bv-miniplate"
                style={{ ["--i" as string]: String(i) }}
              >
                <span className="bv-miniplate__code">{p.code}</span>
                <span className="bv-miniplate__label">{p.label}</span>
                <span className="bv-miniplate__spec">{p.spec}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bv-section" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="bv-section__head">
          <p className="bv-sectionmark">A — Co stavíme</p>
          <h2 className="bv-h2" id="sluzby-nadpis">
            Dva velké panely a čtyři menší. Dohromady celý stánek.
          </h2>
          <p className="bv-section__note">
            Vše řešíme pod jednou střechou v Ústí nad Labem: konstrukci, potisk,
            fotku produktu i video na obrazovku. Jeden dodavatel, jeden termín.
          </p>
        </div>

        <div className="bv-grid-big">
          {sluzby.map((s) => (
            <article className="bv-plate bv-plate--big" key={s.nazev}>
              <span className="bv-bracket bv-bracket--tl" aria-hidden="true" />
              <span className="bv-bracket bv-bracket--br" aria-hidden="true" />
              <AiImage className="bv-plate__img" src={s.src} alt={s.alt} />
              <div className="bv-plate__body">
                <h3 className="bv-plate__title">{s.nazev}</h3>
                <p className="bv-plate__desc">{s.popis}</p>
              </div>
              <dl className="bv-specstrip bv-specstrip--dl">
                {s.spec.map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        <ul className="bv-grid-small">
          {maleTalire.map((m) => (
            <li className="bv-plate bv-plate--small" key={m.nazev}>
              <span className="bv-bracket bv-bracket--tl" aria-hidden="true" />
              <span className="bv-bracket bv-bracket--br" aria-hidden="true" />
              <h3 className="bv-plate__title bv-plate__title--sm">{m.nazev}</h3>
              <p className="bv-plate__desc">{m.popis}</p>
              <dl className="bv-specstrip bv-specstrip--dl">
                {m.spec.map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ul>
      </section>

      <section className="bv-section bv-section--dark" id="o-nas" aria-labelledby="o-nas-nadpis">
        <div className="bv-section__head">
          <p className="bv-sectionmark bv-sectionmark--light">B — Proč nám lidé věří</p>
          <h2 className="bv-h2 bv-h2--light" id="o-nas-nadpis">
            Dvacet tři let stavíme věci, které musí stát přesně v osm ráno.
          </h2>
        </div>

        <div className="bv-trust">
          <dl className="bv-numbers">
            <div>
              <dt>Realizovaných stánků</dt>
              <dd>300</dd>
            </div>
            <div>
              <dt>Spokojených klientů</dt>
              <dd>100</dd>
            </div>
            <div>
              <dt>Let na veletrzích</dt>
              <dd>23</dd>
            </div>
          </dl>

          <div className="bv-trust__text">
            <p>
              Od roku 2000 jsme postavili expozice na výstavištích v Praze, Brně,
              Norimberku i v Dubaji. Klient dostane jeden rozpočet, jeden harmonogram
              a jedno telefonní číslo — na to volá i o půlnoci před zahájením.
            </p>
            <p>
              Ve stejné dílně vznikla i naše značka StarIgloo: kopule z kvalitního
              polykarbonátu a leteckého hliníku pro hotely, restaurace a zahrady.
              Dodáváme ji včetně pódia a instalace.
            </p>
            <blockquote className="bv-quote">
              <p>
                „Pokud jste si stavěli vzdušné zámky, není vaše práce ztracená,
                když si pod ně postavíte základy.“
              </p>
              <cite>Henry David Thoreau</cite>
            </blockquote>
          </div>
        </div>

        <ul className="bv-process">
          <li>
            <span className="bv-process__no">01</span>
            <h3>Zaměření a návrh</h3>
            <p>Půdorys od pořadatele, vizualizace do tří pracovních dnů.</p>
          </li>
          <li>
            <span className="bv-process__no">02</span>
            <h3>Výroba a tisk</h3>
            <p>Konstrukce, grafika i nábytek se chystají u nás v Ústí.</p>
          </li>
          <li>
            <span className="bv-process__no">03</span>
            <h3>Montáž na místě</h3>
            <p>Naše parta staví v montážních dnech, vy přijdete na hotové.</p>
          </li>
          <li>
            <span className="bv-process__no">04</span>
            <h3>Demontáž a uskladnění</h3>
            <p>Stánek uklidíme a uložíme do dalšího ročníku.</p>
          </li>
        </ul>
      </section>
    </main>
  );
}

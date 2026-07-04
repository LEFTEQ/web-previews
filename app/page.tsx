import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      season: "Celoroční",
      title: "Zahradní servis",
      desc: "Kompletní údržba zahrad a parků — od prvního výsevu po pravidelné sečení, prořez a hnojení. Přijedeme, dohodneme rytmus a vy se o nic nestaráte.",
    },
    {
      season: "Jaro",
      title: "Zavlažování",
      desc: "Navrhneme a nainstalujeme automatický závlahový systém přesně na míru vašemu pozemku. Trávník i záhony dostanou vodu i ve vašich horkých srpnech.",
    },
    {
      season: "Jaro",
      title: "Travní koberce",
      desc: "Nový trávník za jediný den. Pokládáme travní koberce, které jsou zelené hned — bez měsíců čekání na výsev.",
    },
    {
      season: "Zima",
      title: "Poradenství",
      desc: "Zahradničíme přes 32 let. Řekneme vám, co na vaší půdě poroste, co ne, a jak zahradu naplánovat, aby vás bavila a ne otravovala.",
    },
    {
      season: "Zima",
      title: "Návrh ve 3D",
      desc: "Vaši budoucí zahradu si projdete dřív, než zaryjeme rýč do země. Ukážeme vám ji ve 3D — s reálnými rostlinami, cestami i osvětlením.",
    },
    {
      season: "Léto",
      title: "Zahradní architektura",
      desc: "Drobné zahradní stavby — pergoly, zídky, opěrné stěny, cestičky. Navrhneme a postavíme tak, aby zapadly do celku.",
    },
    {
      season: "Celoroční",
      title: "Skleníky",
      desc: "Postavíme skleník včetně automatického větrání a zavlažování. Vypěstujete si rajčata i v karlovarském podnebí.",
    },
    {
      season: "Celoroční",
      title: "Zahradnický e-shop",
      desc: "Nabízíme sortiment, který jsme sami vyzkoušeli na desítkách zahrad. Žádné náhodné zboží — jen to, co u nás obstálo.",
    },
  ];

  const proof = [
    { n: "600+", label: "nových zahrad" },
    { n: "40", label: "parků" },
    { n: "250+", label: "závlahových systémů" },
    { n: "1 900+", label: "dokončených zakázek" },
  ];

  return (
    <main className="gk">
      <header className="gk-nav">
        <a className="gk-mark" href="#" aria-label="Zahrady Karlovy Vary — domů">
          <span className="gk-mark-line">Zahrady</span>
          <span className="gk-mark-line gk-mark-line--place">Karlovy&nbsp;Vary</span>
        </a>
        <nav className="gk-nav-links" aria-label="Hlavní">
          <a href="#sluzby">Co děláme</a>
          <a href="#duvera">O nás</a>
          <a className="gk-nav-cta" href="tel:+420607650187">607 650 187</a>
        </nav>
      </header>

      <section className="gk-hero" id="hero">
        <div className="gk-hero-media">
          <img
            src="/hero.webp"
            alt="Vzrostlá udržovaná zahrada s posekaným trávníkem a záhony v Karlových Varech"
            className="gk-hero-img"
          />
          <span className="gk-hero-grain" aria-hidden="true" />
        </div>

        <div className="gk-hero-body">
          <p className="gk-eyebrow">
            <span className="gk-eyebrow-year">Od 1992</span>
            <span className="gk-eyebrow-place">Na Jezu 124 · Karlovy Vary</span>
          </p>
          <h1 className="gk-hero-title">
            Zahradu, která
            <br />
            <em>vydrží</em> třicátou
            <br />
            karlovarskou zimu.
          </h1>
          <p className="gk-hero-lead">
            Zakládáme, zavlažujeme a udržujeme zahrady a parky v Karlových Varech
            a okolí. Přes tři desetiletí víme, co tady poroste — a co ne.
          </p>
          <div className="gk-hero-actions">
            <a className="gk-btn" href="tel:+420607650187">
              Zavolat zahradníkovi
            </a>
            <a className="gk-btn gk-btn--ghost" href="#sluzby">
              Prohlédnout služby
            </a>
          </div>
        </div>
      </section>

      <section className="gk-services" id="sluzby">
        <div className="gk-section-head">
          <p className="gk-kicker">Co pro vaši zahradu uděláme</p>
          <h2 className="gk-h2">
            Osm věcí, celý rok.
            <br />
            Řadíme je podle sezóny, ne podle ceníku.
          </h2>
        </div>

        <ul className="gk-list">
          {services.map((s, i) => (
            <li className="gk-row" key={s.title}>
              <span className="gk-row-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="gk-row-season" data-season={s.season}>
                {s.season}
              </span>
              <div className="gk-row-text">
                <h3 className="gk-row-title">{s.title}</h3>
                <p className="gk-row-desc">{s.desc}</p>
              </div>
            </li>
          ))}
        </ul>

        <figure className="gk-figure">
          <img
            src="/section-1.webp"
            alt="Detail práce na zahradě — pokládka travního koberce a úprava záhonů"
            className="gk-figure-img"
          />
          <figcaption className="gk-figure-cap">
            Nový trávník z travních kobercŮ — zelený hned, ne za tři měsíce.
          </figcaption>
        </figure>
      </section>

      <section className="gk-trust" id="duvera">
        <div className="gk-trust-inner">
          <div className="gk-trust-text">
            <p className="gk-kicker gk-kicker--light">O nás</p>
            <h2 className="gk-h2 gk-h2--light">
              32 sezón v jedné
              <br />
              karlovarské půdě.
            </h2>
            <p className="gk-trust-lead">
              Nejsme řetězec, který zítra zmizí. Zahrady Karlovy Vary jsou místní
              firma se sídlem Na Jezu 124 a provozem v Kolové. Známe zdejší
              svahovité pozemky, jílovitou půdu i to, jak brzy tu přituhne — a
              podle toho volíme rostliny i řešení, aby vám vydržely.
            </p>
            <dl className="gk-contact">
              <div>
                <dt>Zavolejte</dt>
                <dd>
                  <a href="tel:+420607650187">607 650 187</a>
                </dd>
              </div>
              <div>
                <dt>Napište</dt>
                <dd>
                  <a href="mailto:info@zahradykv.cz">info@zahradykv.cz</a>
                </dd>
              </div>
              <div>
                <dt>Najdete nás</dt>
                <dd>Na Jezu 124, 360 01 Karlovy Vary</dd>
              </div>
            </dl>
          </div>

          <div className="gk-trust-media">
            <img
              src="/section-2.webp"
              alt="Zahradníci Zahrady Karlovy Vary při údržbě zeleně"
              className="gk-trust-img"
            />
          </div>
        </div>

        <ul className="gk-proof">
          {proof.map((p, i) => (
            <li className="gk-proof-item" key={p.label} style={{ "--d": `${i * 90}ms` } as CSSProperties}>
              <span className="gk-proof-n">{p.n}</span>
              <span className="gk-proof-label">{p.label}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

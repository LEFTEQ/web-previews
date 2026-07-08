import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BK – Investis · Zemní a výkopové práce Plzeň",
  description:
    "Zemní a výkopové práce v Plzni a okolí od roku 1994. Realizace kanalizačních a vodovodních řadů moderní technikou. Rychle a kvalitně.",
  openGraph: {
    title: "BK – Investis · Zemní a výkopové práce Plzeň",
    description:
      "Od roku 1994 kopeme v Plzni a okolí. Kanalizační a vodovodní řady, výkopy, terénní úpravy. Rychle a kvalitně.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const hloubky = [
  {
    kota: "0,0 m",
    label: "Terén",
    text: "Sejmutí ornice, vytyčení sítí, příprava staveniště. Než rypadlo poprvé zabere, víme, kudy vede každý kabel.",
  },
  {
    kota: "−1,2 m",
    label: "Vodovodní řad",
    text: "Rýhy pro vodovodní potrubí, pískové lože, obsyp. Napojení na stávající řad bez výluky delší, než musí být.",
  },
  {
    kota: "−2,5 m",
    label: "Kanalizace",
    text: "Naše hlavní specializace. Gravitační i tlaková kanalizace ve správném spádu, s pažením a hutněným zásypem.",
  },
  {
    kota: "−4,0 m",
    label: "Základová spára",
    text: "Hluboké výkopy pro základy, jímky a šachty. Odvoz výkopku, dovoz štěrku, urovnání spáry na milimetry.",
  },
];

const technika = [
  {
    nazev: "Pásová a kolová rypadla",
    popis:
      "Od malých strojů do úzkých ulic po velká rypadla na páteřní řady. Přesná práce i tam, kde se sotva otočíte.",
  },
  {
    nazev: "Kanalizační a vodovodní řady",
    popis:
      "Kompletní realizace od výkopu přes uložení potrubí po zpětný zásyp a obnovu povrchu. Naše hlavní řemeslo od roku 1994.",
  },
  {
    nazev: "Pronájem techniky",
    popis:
      "Stroje se strojníkem k dispozici i pro vaši stavbu. Domluvíme rozsah, termín i způsob nasazení podle terénu.",
  },
  {
    nazev: "Terénní úpravy a přípojky",
    popis:
      "Srovnání pozemku, výkopy pro přípojky, jímky a základy rodinných domů. Odvoz zeminy i dovoz materiálu.",
  },
];

export default function Page() {
  return (
    <main className="bk">
      <header className="bk-topbar">
        <a href="#uvod" className="bk-wordmark" aria-label="BK Investis, úvod">
          <span className="bk-wordmark-bk">BK</span>
          <span className="bk-wordmark-rule" aria-hidden="true" />
          <span className="bk-wordmark-name">Investis</span>
        </a>
        <nav className="bk-nav" aria-label="Hlavní">
          <a href="#cinnost">Co kopeme</a>
          <a href="#duvera">Od roku 1994</a>
          <a className="bk-nav-cta" href="tel:+420603244468">603 244 468</a>
        </nav>
      </header>

      <section className="bk-hero" id="uvod">
        <img
          className="bk-hero-img"
          src="/hero.webp"
          alt="Nákladní automobily a technika firmy BK – Investis na staveništi v Plzni"
          width={1600}
          height={900}
        />
        <div className="bk-hero-shade" aria-hidden="true" />
        <div className="bk-hero-inner">
          <p className="bk-eyebrow">Zemní a výkopové práce · Plzeň a okolí</p>
          <h1 className="bk-hero-title">
            Kde jiní vidí<br />
            <span className="bk-accent">jen hlínu,</span><br />
            my vedeme řad.
          </h1>
          <p className="bk-hero-lead">
            Od roku 1994 kopeme kanalizační a vodovodní řady, přípojky a
            základy po celé Plzni. Přijedeme, vytyčíme, vykopeme a povrch
            uvedeme do pořádku. Motto máme krátké: <strong>rychle a kvalitně.</strong>
          </p>
          <div className="bk-hero-actions">
            <a className="bk-btn" href="tel:+420603244468">Zavolat 603 244 468</a>
            <a className="bk-btn bk-btn-ghost" href="#cinnost">Co pro vás vykopeme</a>
          </div>
        </div>
        <div className="bk-hero-strip" aria-hidden="true">
          <span>Plzeň</span>
          <span>·</span>
          <span>kanalizace</span>
          <span>·</span>
          <span>vodovody</span>
          <span>·</span>
          <span>výkopy</span>
          <span>·</span>
          <span>od 1994</span>
          <span>·</span>
          <span>Plzeň</span>
          <span>·</span>
          <span>kanalizace</span>
          <span>·</span>
          <span>vodovody</span>
          <span>·</span>
          <span>výkopy</span>
          <span>·</span>
          <span>od 1994</span>
        </div>
      </section>

      <section className="bk-section bk-depth" id="cinnost">
        <div className="bk-section-head">
          <p className="bk-eyebrow bk-eyebrow-dark">Řez výkopem</p>
          <h2 className="bk-h2">Vše, co se odehrává pod povrchem</h2>
          <p className="bk-section-lead">
            Zakázku čteme odshora dolů — od terénu k základové spáře. Na každé
            úrovni jiná práce, jiná technika, jiná zodpovědnost.
          </p>
        </div>

        <ol className="bk-strata">
          {hloubky.map((h) => (
            <li className="bk-stratum" key={h.kota}>
              <div className="bk-stratum-kota">
                <span className="bk-stratum-num">{h.kota}</span>
                <span className="bk-stratum-label">{h.label}</span>
              </div>
              <p className="bk-stratum-text">{h.text}</p>
            </li>
          ))}
        </ol>

        <div className="bk-services">
          <img
            className="bk-services-img"
            src="/section-1.webp"
            alt="Rypadlo firmy BK – Investis při výkopových pracích"
            width={800}
            height={600}
          />
          <div className="bk-services-list">
            {technika.map((t) => (
              <article className="bk-service" key={t.nazev}>
                <h3 className="bk-service-name">{t.nazev}</h3>
                <p className="bk-service-desc">{t.popis}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bk-section bk-trust" id="duvera">
        <div className="bk-trust-grid">
          <div className="bk-trust-copy">
            <p className="bk-eyebrow">O firmě</p>
            <h2 className="bk-h2 bk-h2-light">
              Třicet let kopeme Plzeň — a pořád zvedáme telefon.
            </h2>
            <p className="bk-trust-text">
              BK – Investis, spol. s r.o. je plzeňská stavební firma. Od roku
              1994 se věnujeme zemním a výkopovým pracím se specializací na
              kanalizační a vodovodní řady. Pracujeme moderní technikou, ale
              domluva u nás pořád začíná osobním hovorem — řekněte, kde a co,
              a přijedeme se podívat.
            </p>
            <dl className="bk-facts">
              <div>
                <dt>Působíme od</dt>
                <dd>1994</dd>
              </div>
              <div>
                <dt>Kde kopeme</dt>
                <dd>Plzeň a okolí</dd>
              </div>
              <div>
                <dt>Specializace</dt>
                <dd>kanalizace a vodovody</dd>
              </div>
            </dl>
            <div className="bk-contact-card">
              <p className="bk-contact-label">Zavolejte, domluvíme prohlídku</p>
              <a className="bk-contact-phone" href="tel:+420603244468">
                603 244 468
              </a>
              <a className="bk-contact-mail" href="mailto:info@bkinvestis.cz">
                info@bkinvestis.cz
              </a>
            </div>
          </div>
          <figure className="bk-trust-figure">
            <img
              className="bk-trust-img"
              src="/section-2.webp"
              alt="Technika BK – Investis připravená na zemní práce v Plzni"
              width={800}
              height={1000}
            />
            <figcaption className="bk-trust-caption">
              „Rychle a kvalitně.“ — motto, které platí od první zakázky.
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}

import type { CSSProperties } from "react";

export const metadata = {
  title: "Černá a fialová — grafické studio v Brně",
  description:
    "Grafické studio na Příkopě v Brně. Vizuální identity, logotypy, sazba a tisk. Kontrast černé a fialové děláme od roku 1999.",
  openGraph: {
    title: "Černá a fialová — grafické studio v Brně",
    description:
      "Vizuální identity, logotypy, sazba a tisk. Grafické studio z Brna, Příkop 18/20.",
    type: "website",
    locale: "cs_CZ",
    images: ["/hero.webp"],
  },
};

const sluzby = [
  {
    znak: "K",
    nazev: "Vizuální identita",
    popis:
      "Značka, která drží pohromadě na vizitce i na billboardu. Logotyp, barvy, písmo a pravidla, podle kterých vám ji každý tiskař reprodukuje stejně.",
    detail: "Logo · manuál · aplikace",
  },
  {
    znak: "C",
    nazev: "Sazba a tiskoviny",
    popis:
      "Katalogy, výroční zprávy, knihy a plakáty vysázené na milimetry. Připravíme data do tiskárny a dohlédneme na nátisk i barevnost.",
    detail: "Sazba · prepress · korektura",
  },
  {
    znak: "M",
    nazev: "Obaly a etikety",
    popis:
      "Krabička, která prodává z regálu, i etiketa, co přežije lednici. Řešíme materiál, výseky, laky i soutisk s výrobcem.",
    detail: "Packaging · výseky · laky",
  },
  {
    znak: "Y",
    nazev: "Web a digitál",
    popis:
      "Přeneseme značku z papíru na obrazovku, aby fungovala i na mobilu. Návrh stránek, bannery, šablony pro sociální sítě.",
    detail: "Web · social · šablony",
  },
];

const reference = [
  { klient: "Pivovar Na Příkopě", prace: "Etikety a řada obalů", rok: "2024" },
  { klient: "Moravská galerie", prace: "Katalog výstavy, 220 stran", rok: "2023" },
  { klient: "Rekola Brno", prace: "Vizuální identita", rok: "2023" },
  { klient: "Divadlo Husa na provázku", prace: "Sezonní plakáty", rok: "2022" },
];

export default function Page() {
  return (
    <main className="cf">
      <header className="cf-top">
        <a className="cf-mark" href="#" aria-label="Černá a fialová, grafické studio">
          <span className="cf-mark-black">Černá</span>
          <span className="cf-mark-amp">&amp;</span>
          <span className="cf-mark-violet">fialová</span>
        </a>
        <nav className="cf-nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#reference">Reference</a>
          <span className="cf-nav-mesto">Brno · Příkop 18/20</span>
        </nav>
      </header>

      <section className="cf-hero" aria-labelledby="cf-hero-nadpis">
        <div className="cf-hero-text">
          <p className="cf-eyebrow">Grafické studio · Brno · od 1999</p>
          <h1 id="cf-hero-nadpis">
            <span className="cf-line cf-line-black">Černá</span>
            <span className="cf-line cf-line-a">a</span>
            <span className="cf-line cf-line-violet">fialová</span>
          </h1>
          <p className="cf-hero-lead">
            Dvě barvy, jedna zásada: buď kontrast, nebo nic. Děláme značky,
            sazbu a obaly, které nezmizí v regálu ani ve schránce.
          </p>
          <div className="cf-hero-cta">
            <a className="cf-btn" href="#sluzby">Co pro vás uděláme</a>
            <a className="cf-tel" href="tel:+420545243691">+420 545 243 691</a>
          </div>
        </div>
        <figure className="cf-hero-media">
          <img
            src="/hero.webp"
            alt="Ukázka práce studia Černá a fialová — tiskoviny v černé a fialové barvě"
            className="cf-hero-img"
            width={1200}
            height={1400}
          />
          <figcaption className="cf-hero-cap">
            Z dílny na Příkopě — nátisk před schválením
          </figcaption>
        </figure>
      </section>

      <section className="cf-sluzby" id="sluzby" aria-labelledby="cf-sluzby-nadpis">
        <div className="cf-sec-head">
          <span className="cf-sec-idx">01</span>
          <h2 id="cf-sluzby-nadpis">Čtyři věci, které umíme naostro</h2>
          <p className="cf-sec-note">
            Iniciály níže skládají naši značku — každá služba je jedno písmeno
            slova, ze kterého vznikla firma.
          </p>
        </div>

        <ol className="cf-cards">
          {sluzby.map((s, i) => (
            <li
              className="cf-card"
              key={s.nazev}
              style={{ "--i": i } as CSSProperties}
            >
              <span className="cf-card-znak" aria-hidden="true">
                {s.znak}
              </span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <span className="cf-card-detail">{s.detail}</span>
            </li>
          ))}
        </ol>

        <figure className="cf-band">
          <img
            src="/section-1.webp"
            alt="Rozpracovaná sazba katalogu na stole grafického studia"
            className="cf-band-img"
            width={1600}
            height={900}
          />
        </figure>
      </section>

      <section className="cf-oduvera" id="reference" aria-labelledby="cf-oduvera-nadpis">
        <div className="cf-oduvera-grid">
          <div className="cf-oduvera-text">
            <span className="cf-sec-idx cf-sec-idx--light">02</span>
            <h2 id="cf-oduvera-nadpis">
              Dvacet pět let na jedné adrese v centru Brna
            </h2>
            <p>
              Sedíme na Příkopě 18/20 od roku 1999. Za tu dobu jsme vysázeli
              stovky katalogů, nakreslili loga, která pořád platí, a naučili se,
              že dobrý tisk začíná dřív, než se otevře InDesign.
            </p>
            <p>
              Pracujeme malý tým, takže s vámi jedná ten, kdo návrh kreslí — ne
              obchodník. Data předáváme připravená do tiskárny a na nátisk
              chodíme osobně.
            </p>

            <ul className="cf-ref-list">
              {reference.map((r) => (
                <li key={r.klient} className="cf-ref-row">
                  <span className="cf-ref-klient">{r.klient}</span>
                  <span className="cf-ref-prace">{r.prace}</span>
                  <span className="cf-ref-rok">{r.rok}</span>
                </li>
              ))}
            </ul>
          </div>

          <figure className="cf-oduvera-media">
            <img
              src="/section-2.webp"
              alt="Hotové tiskoviny a vzorník barev studia Černá a fialová"
              className="cf-oduvera-img"
              width={1000}
              height={1200}
            />
            <figcaption>Příkop 18/20 · 602 00 Brno</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}

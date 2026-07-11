import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ramat Servis — kovářství a strojní opravy | České Budějovice",
  description:
    "Kovářská dílna a servis těžké techniky v Českých Budějovicích. Svařujeme hliník, nerez i litinu, rovnáme rámy, obrábíme díly a stavíme vozidla na zakázku.",
  openGraph: {
    title: "Ramat Servis — kovářství a strojní opravy",
    description:
      "Kovářská dílna a servis těžké techniky v Českých Budějovicích. Svařování hliníku, nerezu a litiny, rovnání rámů, obrábění, stavby vozidel na zakázku.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Rozžhavená ocel v kovářské dílně Ramat Servis" }],
  },
};

const prace = [
  {
    cislo: "01",
    nazev: "Svářečské práce",
    materialy: "hliník · nerez · litina",
    popis:
      "Speciální svary, které jinde odmítnou. Hliník i litinu spojíme tam, kde běžná dílna dojede na hranu materiálu.",
  },
  {
    cislo: "02",
    nazev: "Rovnání rámů",
    materialy: "úpravy rozvorů · geometrie",
    popis:
      "Ohnutý rám narovnáme zpět do tolerance a upravíme rozvory přesně podle toho, k čemu má stroj sloužit.",
  },
  {
    cislo: "03",
    nazev: "Obrábění a renovace dílů",
    materialy: "soustružení · frézování · návary",
    popis:
      "Opotřebený díl navaříme, obrobíme na rozměr a vrátíme do provozu — často levněji než nový kus na sklad.",
  },
  {
    cislo: "04",
    nazev: "Pálicí centrum",
    materialy: "CNC výpalky z plechu",
    popis:
      "Vypálíme díly a přířezy přesně podle výkresu, od jednoho kusu po malé série.",
  },
  {
    cislo: "05",
    nazev: "Přestavby techniky",
    materialy: "traktory · kategorie SS",
    popis:
      "Přestavíme stroj na traktor nebo do kategorie SS s papíry, které projdou na technické.",
  },
  {
    cislo: "06",
    nazev: "Servis těžké mechanizace",
    materialy: "stavební · zemní · lomová",
    popis:
      "Celkové opravy nákladních vozidel, zemědělské a lomové techniky. Stavby vozidel na zakázku od základu.",
  },
];

export default function Page() {
  return (
    <main className="rs">
      <header className="rs-top">
        <a className="rs-mark" href="#" aria-label="Ramat Servis, úvod">
          <span className="rs-mark-r">Ramat</span>
          <span className="rs-mark-s">Servis</span>
          <span className="rs-mark-tag">kovářská dílna · České Budějovice</span>
        </a>
        <a className="rs-tel" href="tel:+420730107088">
          <span className="rs-tel-label">Zavolat do dílny</span>
          <span className="rs-tel-num">+420 730 107 088</span>
        </a>
      </header>

      <section className="rs-hero" aria-labelledby="rs-hero-h">
        <img
          className="rs-hero-img"
          src="/hero.webp"
          alt="Rozžhavená ocel a kovářské kladivo v dílně Ramat Servis"
          width={1600}
          height={1000}
        />
        <div className="rs-hero-scrim" aria-hidden="true" />
        <div className="rs-hero-inner">
          <p className="rs-eyebrow">Kovářství &amp; strojní opravy · od roku 1998</p>
          <h1 id="rs-hero-h">
            Kde jiní řeknou
            <span className="rs-hot"> „to nejde“</span>,
            <br />
            my rozžhavíme ocel.
          </h1>
          <p className="rs-lede">
            Svaříme hliník, nerez i litinu, narovnáme ohnutý rám a obrobíme díl,
            který se nedá koupit. Malá dílna v Českých Budějovicích, kde na každou
            zakázku sáhne kovář, ne skladník.
          </p>
          <div className="rs-hero-cta">
            <a className="rs-btn" href="tel:+420730107088">Zavolat do dílny</a>
            <a className="rs-btn rs-btn-ghost" href="mailto:info@ramatservis.cz">
              Poslat poptávku
            </a>
          </div>
        </div>
        <ul className="rs-forge" aria-label="Čím se dílna zabývá">
          <li>svařování hliníku</li>
          <li>rovnání rámů</li>
          <li>obrábění dílů</li>
          <li>přestavby na traktor</li>
        </ul>
      </section>

      <section className="rs-work" aria-labelledby="rs-work-h">
        <div className="rs-sec-head">
          <p className="rs-eyebrow rs-eyebrow-dark">Co u nás projde dílnou</p>
          <h2 id="rs-work-h">Šest věcí, které umíme líp než katalog</h2>
          <p className="rs-sec-lede">
            Neděláme sériovou montáž. Bereme kusy, které jsou složité, ohnuté
            nebo prostě staré — a vracíme je do provozu.
          </p>
        </div>

        <ol className="rs-grid">
          {prace.map((p) => (
            <li className="rs-card" key={p.cislo}>
              <span className="rs-card-num" aria-hidden="true">
                {p.cislo}
              </span>
              <h3>{p.nazev}</h3>
              <p className="rs-card-mat">{p.materialy}</p>
              <p className="rs-card-text">{p.popis}</p>
            </li>
          ))}
        </ol>

        <figure className="rs-work-fig">
          <img
            src="/section-1.webp"
            alt="Detail svařování a strojního obrábění v dílně Ramat Servis"
            width={1400}
            height={900}
          />
          <figcaption>
            Pálicí centrum a svářečské pracoviště — díly na míru od jednoho kusu.
          </figcaption>
        </figure>
      </section>

      <section className="rs-trust" aria-labelledby="rs-trust-h">
        <div className="rs-trust-media">
          <img
            src="/section-2.webp"
            alt="Kovář Ramat Servis při práci na těžké mechanizaci"
            width={1400}
            height={1000}
          />
        </div>
        <div className="rs-trust-body">
          <p className="rs-eyebrow rs-eyebrow-dark">Proč k nám vozí stroje</p>
          <h2 id="rs-trust-h">Řemeslo, které nese razítko konkrétního člověka</h2>
          <p className="rs-trust-lede">
            Ramat Servis je dílna z Českých Budějovic, kde se kovářina potkává se
            servisem těžké techniky. Sedláci, stavaři i dopravci k nám vozí to,
            co jinde odkládají — protože víme, jak se materiál chová pod žárem
            i pod zátěží.
          </p>
          <dl className="rs-facts">
            <div>
              <dt>Materiály na svary</dt>
              <dd>hliník · nerez · litina · konstrukční ocel</dd>
            </div>
            <div>
              <dt>Pro koho pracujeme</dt>
              <dd>zemědělská, stavební, zemní a lomová technika</dd>
            </div>
            <div>
              <dt>Zakázková výroba</dt>
              <dd>stavby nákladních vozidel a přestavby na míru</dd>
            </div>
            <div>
              <dt>Kde nás najdete</dt>
              <dd>České Budějovice — po domluvě přijedeme</dd>
            </div>
          </dl>
          <a className="rs-btn rs-btn-dark" href="tel:+420730107088">
            Domluvit termín v dílně
          </a>
        </div>
      </section>
    </main>
  );
}

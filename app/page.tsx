import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nátěry KBN — nátěry a mytí fasád bez lešení, Ostrava",
  description:
    "Čistíme a natíráme fasády, střechy a dlažbu bez lešení — žebříky, horolezecká technika, airless. Ostrava a okolí. Záruka Caparol až 12 let, 16 recenzí na Googlu.",
  openGraph: {
    title: "Nátěry KBN — fasády bez lešení, Ostrava",
    description:
      "Nátěry a mytí fasád, střech a dlažby bez lešení. Ostrava. Záruka až 12 let.",
    locale: "cs_CZ",
    type: "website",
  },
};

const sluzby = [
  {
    kod: "01",
    nazev: "Nátěr fasády",
    popis:
      "Dům po letech vypadá jako nový. Pracujeme bez lešení — žebříky, horolezecká technika, plošina. Používáme Caparol se zárukou až 12 let.",
    detail: "Rodinné domy · panelové domy · SVJ a družstva",
  },
  {
    kod: "02",
    nazev: "Mytí fasády",
    popis:
      "Fasádu je ideální umýt jednou za 5–7 let. Zbavíme ji řas, plísní a špíny dřív, než se pustí do omítky.",
    detail: "Rodinné domy · veřejné budovy · paneláky",
  },
  {
    kod: "03",
    nazev: "Nátěr a mytí střechy",
    popis:
      "Vyčistíme, ošetříme impregnací a natřeme. Prodloužíme životnost krytiny a ušetříme vám drahou rekonstrukci.",
    detail: "Šindel · plech · beton · eternit",
  },
  {
    kod: "04",
    nazev: "Čištění dlažby",
    popis:
      "Zámková dlažba bude zase jako nová — a to bez nepořádku kolem. Čistíme od 80 m².",
    detail: "Terasy · vjezdy · chodníky · nádvoří",
  },
];

const reference = [
  { misto: "BD Karolína", mesto: "Ostrava", rok: "2025", plocha: "7 500 m²", co: "Nátěr fasády" },
  { misto: "Hala Slavie", mesto: "Havířov", rok: "2024", plocha: "1 200 m²", co: "Mytí střechy (ČEZ)" },
  { misto: "Vila Věra", mesto: "Přerov", rok: "2025", plocha: "—", co: "Caparol Carbosol" },
  { misto: "Pokorný Industries", mesto: "Brno", rok: "2025", plocha: "—", co: "Carbosol · záruka 10 let" },
  { misto: "Fasáda", mesto: "Vyškov", rok: "2025", plocha: "5 300 m²", co: "Nátěr fasády" },
  { misto: "OZO", mesto: "Ostrava", rok: "2025", plocha: "—", co: "Kompletní servis" },
];

export default function Page() {
  return (
    <main className="kbn">
      <header className="kbn-topbar">
        <a className="kbn-wordmark" href="#" aria-label="Nátěry KBN, úvod">
          <span className="kbn-mark">KBN</span>
          <span className="kbn-mark-sub">nátěry&nbsp;fasád</span>
        </a>
        <span className="kbn-loc">Ostrava &amp; okolí</span>
      </header>

      <section className="kbn-hero" aria-labelledby="hero-nadpis">
        <div className="kbn-hero-grid" aria-hidden="true">
          <div className="kbn-swipe" />
        </div>

        <div className="kbn-hero-inner">
          <p className="kbn-eyebrow">Bez lešení · žebříky · horolezecká technika · airless</p>
          <h1 id="hero-nadpis" className="kbn-h1">
            Vaše fasáda<br />
            <span className="kbn-h1-dirty">za&nbsp;čárou</span>{" "}
            <span className="kbn-h1-clean">jako nová.</span>
          </h1>
          <p className="kbn-lede">
            Umyjeme a natřeme fasády, střechy i dlažbu. Bez lešení, s úklidem
            po sobě a se zárukou Caparol&nbsp;až&nbsp;12&nbsp;let. Ostravsko od 80&nbsp;m².
          </p>
          <div className="kbn-hero-actions">
            <a className="kbn-btn kbn-btn-primary" href="mailto:poptavky@naterykbn.cz">
              Poslat nezávaznou poptávku
            </a>
            <a className="kbn-btn kbn-btn-ghost" href="#reference">
              Prohlédnout reference
            </a>
          </div>

          <dl className="kbn-stats">
            <div>
              <dt>Záruka na nátěr</dt>
              <dd>až 12 let</dd>
            </div>
            <div>
              <dt>Google recenze</dt>
              <dd>16 hodnocení</dd>
            </div>
            <div>
              <dt>Největší zakázka 2025</dt>
              <dd>7 500 m²</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="kbn-services" aria-labelledby="sluzby-nadpis">
        <div className="kbn-sec-head">
          <h2 id="sluzby-nadpis">Co pro vás uděláme</h2>
          <p>
            Čtyři věci, které umíme pořádně — a všechny ze země nebo z lana,
            takže vám kolem domu nestojí týdny lešení.
          </p>
        </div>

        <ol className="kbn-service-list">
          {sluzby.map((s) => (
            <li key={s.kod} className="kbn-service">
              <span className="kbn-service-kod" aria-hidden="true">
                {s.kod}
              </span>
              <div className="kbn-service-body">
                <h3>{s.nazev}</h3>
                <p>{s.popis}</p>
                <p className="kbn-service-detail">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="kbn-trust" id="reference" aria-labelledby="reference-nadpis">
        <div className="kbn-sec-head kbn-sec-head--light">
          <h2 id="reference-nadpis">Za nás mluví naše práce</h2>
          <p>
            Vybrané zakázky z posledních sezón. Pracujeme pro rodinné domy,
            bytová družstva i průmysl po celé Moravě.
          </p>
        </div>

        <div className="kbn-ref-table">
          <div className="kbn-ref-head" aria-hidden="true">
            <span>Zakázka</span>
            <span>Lokalita</span>
            <span>Rok</span>
            <span>Plocha</span>
          </div>
          <ul>
            {reference.map((r, i) => (
              <li key={i} className="kbn-ref-row">
                <span className="kbn-ref-what">
                  <strong>{r.misto}</strong>
                  <em>{r.co}</em>
                </span>
                <span data-label="Lokalita">{r.mesto}</span>
                <span data-label="Rok">{r.rok}</span>
                <span data-label="Plocha">{r.plocha}</span>
              </li>
            ))}
          </ul>
        </div>

        <figure className="kbn-quote">
          <blockquote>
            „Dům je po 28 letech jako nový. Vyčistili a nabarvili fasádu za
            4,5 dne — perfektní přístup, zahrada i okolí zůstaly čisté.
            Není naprosto co vytknout.“
          </blockquote>
          <figcaption>
            <span className="kbn-quote-name">Tomáš Kaňák</span>
            <span className="kbn-quote-meta">recenze na Googlu · 5 / 5</span>
          </figcaption>
        </figure>
      </section>
    </main>
  );
}

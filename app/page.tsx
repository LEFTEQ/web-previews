import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Billy Barlow — grafické studio Brno | logo, značka, obaly, web",
  description:
    "Grafické studio Billy Barlow z Brna staví značky od prvního skicáku po hotový obal, web i fotografii. Od roku 1999, stovky projektů, jasná strategie za každým návrhem.",
  openGraph: {
    title: "Billy Barlow — grafické studio Brno",
    description:
      "Značky, obaly, weby a fotografie od roku 1999. Brněnské studio, které jde u každého projektu až na dřeň.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Ruční skica z ateliéru Billy Barlow" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Billy Barlow — grafické studio Brno",
    description: "Značky, obaly, weby a fotografie od roku 1999.",
    images: ["/hero.webp"],
  },
};

const sluzby = [
  {
    kod: "A",
    nazev: "Značka a logo",
    popis:
      "Osobnost, archetyp, symbolika i příběh. Postavíme vizuální identitu, která drží od vizitky přes výlohu až po web — a kterou si lidé zapamatují.",
    stopa: "logo · logomanuál · vizuální styl",
  },
  {
    kod: "B",
    nazev: "Obalový design",
    popis:
      "Obal je první, co zákazník v regálu uvidí, a poslední, co ho přesvědčí. Navrhneme etiketu i krabičku včetně legislativy a povinného značení.",
    stopa: "obaly · etikety · značení",
  },
  {
    kod: "C",
    nazev: "Web a UX",
    popis:
      "Elektronická identita firmy, kterou baví používat. Technologie tu slouží kreativitě — rychlý, srozumitelný web, ne přehlídka efektů.",
    stopa: "webdesign · UX · vývoj",
  },
  {
    kod: "D",
    nazev: "3D a produktový design",
    popis:
      "Kromě grafiky navrhneme i věc samotnou — předměty denní potřeby, prototypy, vizualizace, po kterých už zbývá jen výroba.",
    stopa: "3D · produkt · prototyp",
  },
  {
    kod: "E",
    nazev: "Fotostudio",
    popis:
      "Produktové i firemní fotografie připravené pro tisk i web. Nasvítíme věc tak, aby na papíře i na displeji vypadala líp než ve výloze.",
    stopa: "produkt · reklama · web",
  },
];

export default function Page() {
  return (
    <main className="bb">
      <header className="bb-top">
        <a className="bb-mark" href="#top" aria-label="Billy Barlow, grafické studio Brno">
          <span className="bb-mark-line">Billy</span>
          <span className="bb-mark-line bb-mark-line--2">Barlow</span>
        </a>
        <nav className="bb-nav" aria-label="Hlavní navigace">
          <a href="#sluzby">Co děláme</a>
          <a href="#studio">Studio</a>
          <a href="#reference">Čísla</a>
        </nav>
      </header>

      <section className="bb-hero" id="top">
        <div className="bb-hero-media">
          <img
            src="/hero.webp"
            alt="Ruční skica a rozpracovaný návrh z ateliéru Billy Barlow"
            width={1280}
            height={1600}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <div className="bb-hero-text">
          <p className="bb-eyebrow">Grafické studio · Brno · od 1999</p>
          <h1 className="bb-title">
            Než vznikne <em>značka</em>, vznikne <span className="bb-under">skica.</span>
          </h1>
          <p className="bb-lead">
            Jsme Billy Barlow. U každého projektu jdeme až na dřeň — díváme se na věc z víc úhlů a za
            hotové bereme až řešení, které ji vystihuje celou. Od tužky přes obal po web.
          </p>
          <div className="bb-hero-cta">
            <a className="bb-btn" href="#sluzby">Prohlédnout, co děláme</a>
            <a className="bb-btn bb-btn--ghost" href="#studio">O studiu</a>
          </div>
        </div>
      </section>

      <section className="bb-services" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="bb-sec-head">
          <p className="bb-eyebrow">Nabídka</p>
          <h2 id="sluzby-nadpis">Pět řemesel, jeden příběh značky</h2>
          <p className="bb-sec-lede">
            Značku stavíme od prvních návrhů po aplikaci do tiskovin i webu. Vyberte, kde váš projekt
            teď stojí — dovedeme ho dál.
          </p>
        </div>
        <ol className="bb-list">
          {sluzby.map((s) => (
            <li className="bb-card" key={s.kod}>
              <span className="bb-card-kod" aria-hidden="true">{s.kod}</span>
              <div className="bb-card-body">
                <h3>{s.nazev}</h3>
                <p>{s.popis}</p>
                <p className="bb-card-stopa">{s.stopa}</p>
              </div>
            </li>
          ))}
        </ol>
        <figure className="bb-figure">
          <img
            src="/section-1.webp"
            alt="Rozpracovaný grafický návrh a materiály na pracovním stole studia"
            width={1280}
            height={800}
            loading="lazy"
            decoding="async"
          />
          <figcaption>Z ateliéru — návrh se ladí tak dlouho, dokud nesedí.</figcaption>
        </figure>
      </section>

      <section className="bb-studio" id="studio" aria-labelledby="studio-nadpis">
        <figure className="bb-studio-media">
          <img
            src="/section-2.webp"
            alt="Práce v grafickém studiu Billy Barlow v Brně"
            width={1280}
            height={960}
            loading="lazy"
            decoding="async"
          />
        </figure>
        <div className="bb-studio-text">
          <p className="bb-eyebrow">Studio</p>
          <h2 id="studio-nadpis">Tradiční reklamu děláme novými způsoby</h2>
          <p>
            V našem pojetí design reflektuje obchodní cíle klienta a opírá se o promyšlenou strategii.
            Sledujeme, co se v oboru děje, a nové tvůrčí i marketingové nástroje testujeme v praxi —
            ne v prezentacích.
          </p>
          <p>
            Na základě desítek zrealizovaných projektů a vhledu do širokého spektra oborů radíme i
            konzultujeme. Kvalitní výsledek je základ důvěry a dlouhé spolupráce.
          </p>
          <div className="bb-stats" id="reference" aria-label="Čísla studia">
            <div className="bb-stat">
              <span className="bb-stat-num">25 let</span>
              <span className="bb-stat-lab">na trhu — od roku 1999</span>
            </div>
            <div className="bb-stat">
              <span className="bb-stat-num">stovky</span>
              <span className="bb-stat-lab">dokončených projektů</span>
            </div>
            <div className="bb-stat">
              <span className="bb-stat-num">5</span>
              <span className="bb-stat-lab">řemesel pod jednou střechou</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

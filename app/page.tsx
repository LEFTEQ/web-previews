import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ivan Štefko — fotoateliér Plzeň | portéty, móda, booky",
  description:
    "Fotoateliér Ivana Štefka v Plzni: módní a reklamní fotografie, fototesty a booky pro modelky, vizážistka u světla, retuš a postprodukce.",
  openGraph: {
    title: "Ivan Štefko — fotoateliér Plzeň",
    description:
      "Módní, reklamní a portrétní fotografie. Fototesty a booky pro začínající i profesionální modelky.",
    images: ["/hero.webp"],
    locale: "cs_CZ",
    type: "website",
  },
};

const sluzby = [
  {
    frame: "23A",
    title: "Módní a reklamní fotografie",
    text: "Kampaně, lookbooky a vizuály pro značky, redakce i grafické studia. Světlo stavím na koncept zakázky, ne na šablonu.",
  },
  {
    frame: "24",
    title: "Fototesty a booky",
    text: "První snaešky pro začínající tváře i aktualizace portfolia profesionálních modelek — výběr záběrů společně nad kontaktem.",
  },
  {
    frame: "24A",
    title: "Vizážistka u světla",
    text: "Zkušená vizážistka je s námi po celý čas focení — make-up i účes drží přes každý záběr.",
  },
  {
    frame: "25",
    title: "Retuš a postprodukce",
    text: "Digitální úprava, čistá retuš pleťi a barevné ladnění. Hotové soubory připravené pro tisk i web.",
  },
  {
    frame: "25A",
    title: "Portréty pro ženy",
    text: "Fotografie pro ženy, které si chtějí zachovat svou krásu natožval. Klidně, beze spěchu, ve vašem tempu.",
  },
  {
    frame: "26",
    title: "Modelky a hostesky",
    text: "Zprostředkuji komerční i osobité tváře k zakázkám a hostesky na promo akce, eventy a výstavy.",
  },
];

export default function Page() {
  return (
    <main className="sheet">
      <header className="masthead">
        <a className="wordmark" href="#" aria-label="Ivan Štefko, fotoateliér Plzeň">
          <span className="wordmark__bracket" aria-hidden="true">[</span>
          <span className="wordmark__name">Ivan Štefko</span>
          <span className="wordmark__bracket" aria-hidden="true">]</span>
          <span className="wordmark__sub">fotoateliér · Plzeň</span>
        </a>
        <nav className="masthead__nav" aria-label="Sekce">
          <a href="#sluzby">Co fotím</a>
          <a href="#atelier">O ateliéru</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <figure className="frame frame--hero">
          <img
            src="/hero.webp"
            alt="Záběr z módního focení v ateliéru Ivana Štefka"
            className="frame__img"
          />
          <figcaption className="frame__mark" aria-hidden="true">
            <span className="frame__num">22A</span>
            <span className="frame__pick">▸ výběr</span>
          </figcaption>
        </figure>

        <div className="hero__copy">
          <p className="eyebrow">Kontakt · filům 36 — Plzeň, od roku 2003</p>
          <h1 id="hero-title">
            Portéty, které vyberete<br />
            společně se mnou nad kontaktem.
          </h1>
          <p className="hero__lead">
            Jsem Ivan Štefko. Fotím módu, reklamu a portréty — booky pro
            začínající modelky i kampaně pro značky. Každé focení začíná tím,
            co má snímek říct, ne tím, jaké světlo zrovna mám.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="#sluzby">Domluvit focení</a>
            <a className="btn btn--ghost" href="#atelier">Jak pracuji</a>
          </div>
        </div>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-title">
        <div className="section-head">
          <p className="eyebrow">Záběry na kontaktu</p>
          <h2 id="sluzby-title">Co před objektivem udělám</h2>
        </div>
        <ul className="contact-grid">
          {sluzby.map((s) => (
            <li className="cell" key={s.frame}>
              <span className="cell__num" aria-hidden="true">{s.frame}</span>
              <h3 className="cell__title">{s.title}</h3>
              <p className="cell__text">{s.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="atelier" id="atelier" aria-labelledby="atelier-title">
        <figure className="frame frame--side">
          <img
            src="/section-1.webp"
            alt="Ivan Štefko při práci s modelkou v ateliéru"
            className="frame__img"
          />
          <figcaption className="frame__mark" aria-hidden="true">
            <span className="frame__num">31</span>
          </figcaption>
        </figure>

        <div className="atelier__copy">
          <p className="eyebrow">O ateliéru</p>
          <h2 id="atelier-title">Přes dvacet let za hledáčkem v Plzni</h2>
          <p>
            Pracuji s modelkami i s lidmi, kteří před kamerou stojí poprvé.
            Mám zkušenosti z modelingové, reklamní i portrétní fotografie a
            spolupracuji s produkcemi, redakcemi i grafiky, pro jejichž zakázky
            jsou důležité komerční i osobité tváře.
          </p>
          <ul className="facts">
            <li>
              <span className="facts__k">Kde</span>
              <span className="facts__v">Ateliér v Plzni, focení po dohodě i v terénu</span>
            </li>
            <li>
              <span className="facts__k">Pro koho</span>
              <span className="facts__v">Modelky, značky, agentury, redakce a soukromé portréty</span>
            </li>
            <li>
              <span className="facts__k">Zásada</span>
              <span className="facts__v">Modely na sebe neážu exkluzivně — držím se Etického kodexu AMA ČR</span>
            </li>
          </ul>
        </div>

        <figure className="frame frame--wide">
          <img
            src="/section-2.webp"
            alt="Hotový portét z ateliéru po retuši a postprodukci"
            className="frame__img"
          />
          <figcaption className="frame__mark" aria-hidden="true">
            <span className="frame__num">32A</span>
            <span className="frame__pick">▸ finlní</span>
          </figcaption>
        </figure>
      </section>
    </main>
  );
}

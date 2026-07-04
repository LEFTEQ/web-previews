import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Martin Veselý — fotoateliér Hradec Králové",
  description:
    "Svatby, reportáže a volná tvorba. Fotografuji přirozeně, ve světle, jaké je. Ateliér i venku, Hradec Králové a okolí.",
  openGraph: {
    title: "Martin Veselý — fotoateliér Hradec Králové",
    description:
      "Svatby, reportáže a volná tvorba. Přirozené fotografie ve světle, jaké je.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const zaber = [
  {
    cislo: "01",
    nazev: "Svatby",
    popis:
      "Celý den bez rušení. Od ranních příprav po poslední tanec — dokumentárně, s citem pro okamžiky mezi řádky. Dostanete kompletní galerii i výběr do alba.",
    detail: "Celodenní reportáž · kompletní galerie · tištěné album",
  },
  {
    cislo: "02",
    nazev: "Reportáž",
    popis:
      "Firemní akce, křtiny, oslavy, sport. Přijdu, splynu s děním a odejdu s fotkami, které vyprávějí, co se opravdu stalo. Bez pózování, bez cvakání do prázdna.",
    detail: "Události · firemní akce · dokument",
  },
  {
    cislo: "03",
    nazev: "Volná tvorba",
    popis:
      "Portréty a osobní projekty, kde je čas na experiment. Světlo, ticho, jeden člověk a fotoaparát. Sem chodím pro to, proč tuhle práci dělám.",
    detail: "Portrét · osobní projekty · ateliér",
  },
];

export default function Page() {
  return (
    <main className="vf">
      <header className="vf-top">
        <a className="vf-mark" href="#" aria-label="Martin Veselý, fotoateliér">
          <span className="vf-mark__f">f</span>
          <span className="vf-mark__name">
            Martin&nbsp;Veselý
            <span className="vf-mark__sub">fotoateliér · Hradec Králové</span>
          </span>
        </a>
        <nav className="vf-nav" aria-label="Hlavní">
          <a href="#zabery">Co fotím</a>
          <a href="#o-mne">O mně</a>
          <a className="vf-nav__cta" href="tel:+420605123456">
            Zavolat
          </a>
        </nav>
      </header>

      <section className="vf-hero" aria-labelledby="hero-nadpis">
        <div className="vf-hero__frame">
          <img
            src="/hero.webp"
            alt="Svatební pár ve večerním světle, fotografováno Martinem Veselým"
            className="vf-hero__img"
          />
          <span className="vf-hero__tick vf-hero__tick--tl" aria-hidden="true" />
          <span className="vf-hero__tick vf-hero__tick--tr" aria-hidden="true" />
          <span className="vf-hero__tick vf-hero__tick--bl" aria-hidden="true" />
          <span className="vf-hero__tick vf-hero__tick--br" aria-hidden="true" />
          <span className="vf-hero__meta" aria-hidden="true">
            f/1.8 · 1/200s · ISO 400
          </span>
        </div>

        <div className="vf-hero__text">
          <p className="vf-eyebrow">Přirozené fotografie · Hradec Králové</p>
          <h1 id="hero-nadpis" className="vf-hero__h1">
            Světlo,
            <br />
            jaké&nbsp;<em>je</em>.
          </h1>
          <p className="vf-hero__lead">
            Nefotím naaranžované úsměvy. Fotím ten den, jak se stal — příprava,
            nervozita, první slza, poslední tanec. Svatby, reportáže a portréty
            v Hradci Králové a kdekoliv, kam se za vámi vydám.
          </p>
          <div className="vf-hero__actions">
            <a className="vf-btn" href="#zabery">
              Prohlédnout práci
            </a>
            <a className="vf-btn vf-btn--ghost" href="mailto:foto@veselyfoto.cz">
              Napsat o termínu
            </a>
          </div>
        </div>
      </section>

      <section className="vf-sekce" id="zabery" aria-labelledby="zabery-nadpis">
        <div className="vf-sekce__head">
          <p className="vf-eyebrow">Tři světy, které fotím</p>
          <h2 id="zabery-nadpis" className="vf-sekce__h2">
            Vyberte, co potřebujete zachytit
          </h2>
        </div>

        <div className="vf-split">
          <ol className="vf-list">
            {zaber.map((z) => (
              <li className="vf-item" key={z.cislo}>
                <span className="vf-item__num" aria-hidden="true">
                  {z.cislo}
                </span>
                <div className="vf-item__body">
                  <h3 className="vf-item__title">{z.nazev}</h3>
                  <p className="vf-item__text">{z.popis}</p>
                  <p className="vf-item__detail">{z.detail}</p>
                </div>
              </li>
            ))}
          </ol>

          <figure className="vf-figure">
            <img
              src="/section-1.webp"
              alt="Ukázka z reportážní fotografie — okamžik zachycený bez pózování"
              className="vf-figure__img"
            />
            <figcaption className="vf-figure__cap">
              Ze svatebního dne — okamžik mezi obřadem a přípitkem.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="vf-sekce vf-sekce--alt" id="o-mne" aria-labelledby="o-mne-nadpis">
        <figure className="vf-figure vf-figure--wide">
          <img
            src="/section-2.webp"
            alt="Martin Veselý při práci — portrét z volné tvorby"
            className="vf-figure__img"
          />
        </figure>

        <div className="vf-about">
          <p className="vf-eyebrow">O mně</p>
          <h2 id="o-mne-nadpis" className="vf-sekce__h2">
            Fotím v Hradci už dvanáct let
          </h2>
          <p className="vf-about__text">
            Jmenuji se Martin a fotoaparát nosím pořád u sebe. Za tu dobu jsem
            prošel přes dvě stě svateb, desítky firemních akcí i tichých portrétů.
            Nejradši mám chvíli, kdy si na mě lidé přestanou dávat pozor — tam
            vznikají fotky, ke kterým se budete vracet.
          </p>

          <dl className="vf-stats">
            <div className="vf-stat">
              <dt>Odfocené svatby</dt>
              <dd>200+</dd>
            </div>
            <div className="vf-stat">
              <dt>Roky za objektivem</dt>
              <dd>12</dd>
            </div>
            <div className="vf-stat">
              <dt>Kde mě najdete</dt>
              <dd>Hradec Králové</dd>
            </div>
          </dl>

          <blockquote className="vf-quote">
            „Martin fotil naši svatbu a vůbec jsme ho neregistrovali — dokud
            nepřišly fotky. Bylo tam všechno, na co jsme si sami nevzpomněli.“
            <cite>— Klára a Tomáš, Hradec Králové</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}

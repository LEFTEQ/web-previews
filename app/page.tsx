import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      kod: "KL",
      nazev: "Klempířina a rovnání karoserie",
      popis:
        "Vytáhneme promáčkliny, srovnáme prahy, blatníky i dveře po parkovacích šrámech. Pracujeme na plechu ručně i tažným systémem — bez zbytečné výměny celého dílu, když stačí kus vyklepat.",
    },
    {
      kod: "BR",
      nazev: "Brzdy, podvozek a kapaliny",
      popis:
        "Výměna kotoučů a destiček, kontrola tlumičů a ramen, kompletní výměna všech provozních kapalin. Auto brzdí rovně a drží stopu — přesně tak, jak má.",
    },
    {
      kod: "PN",
      nazev: "Pneuservis a přezutí",
      popis:
        "Přezutí, vyvážení a uskladnění kompletních sad. Objednejte se předem na sezónu a nestojíte frontu v půlce října ani v březnu.",
    },
    {
      kod: "TK",
      nazev: "Příprava na STK a emise",
      popis:
        "Auto projedeme před technickou, srovnáme, co by neprošlo, a prohlídku i s měřením emisí vám zajistíme. Vy jen přijedete a odjedete s razítkem.",
    },
    {
      kod: "PŘ",
      nazev: "Automatické převodovky",
      popis:
        "Nově výměna oleje a proplach automatických převodovek i dekarbonizace motoru. Řazení zase zjemní a motor dýchá, jak má.",
    },
    {
      kod: "EL",
      nazev: "Elektro: startéry, alternátory, baterie",
      popis:
        "Repasujeme startéry a alternátory, měníme autobaterie. Když ráno auto jen cvakne, víme kde hledat.",
    },
  ];

  return (
    <main className="gpd">
      <header className="gpd-top">
        <a className="gpd-mark" href="#" aria-label="GPD České Budějovice, autoklempířství, úvod">
          <span className="gpd-mark__g">GPD</span>
          <span className="gpd-mark__sub">autoklempířství · Litvínovice</span>
        </a>
        <nav className="gpd-nav" aria-label="Hlavní">
          <a href="#sluzby">Co opravíme</a>
          <a href="#duvera">O dílně</a>
          <a className="gpd-callchip" href="tel:+420387000000">Zavolat do dílny</a>
        </nav>
      </header>

      <section className="gpd-hero" aria-labelledby="hero-nadpis">
        <div className="gpd-hero__panel">
          <p className="gpd-eyebrow">Stecherův Mlýn · Litvínovice 32 · České Budějovice</p>
          <h1 id="hero-nadpis" className="gpd-hero__title">
            Plech se dá
            <span className="gpd-hero__accent"> vyklepat,</span>
            <br />
            ne rovnou vyhodit.
          </h1>
          <p className="gpd-hero__lead">
            Autoklempířství a servis GPD v Českých Budějovicích. Promáčklý blatník, škrábanec z parkoviště,
            brzdy nebo přezutí — díváme se, co jde zachránit, a teprve pak měníme. Nejsme největší, ale jsme tu pro vás.
          </p>
          <div className="gpd-hero__cta">
            <a className="gpd-btn gpd-btn--solid" href="tel:+420387000000">
              Zavolat a domluvit termín
            </a>
            <a className="gpd-btn gpd-btn--ghost" href="mailto:servis@gpd-cb.cz">
              Napsat e-mail
            </a>
          </div>
          <dl className="gpd-hero__meta">
            <div>
              <dt>Otevřeno</dt>
              <dd>Po–Pá 7:30–17:00</dd>
            </div>
            <div>
              <dt>Kde nás najdete</dt>
              <dd>Litvínovice 32, Č. Budějovice</dd>
            </div>
            <div>
              <dt>Pro firmy</dt>
              <dd>Servis fleetových vozů</dd>
            </div>
          </dl>
        </div>
        <figure className="gpd-hero__media">
          <img
            src="/hero.webp"
            alt="Klempíř v dílně GPD rovná plech karoserie osobního vozu"
            className="gpd-hero__img"
          />
          <figcaption className="gpd-hero__cap">Ruční rovnání plechu v naší dílně</figcaption>
        </figure>
      </section>

      <section className="gpd-services" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="gpd-services__head">
          <p className="gpd-eyebrow gpd-eyebrow--dark">Co u nás v dílně opravíme</p>
          <h2 id="sluzby-nadpis">Osobní i užitkové vozy — od plechu po převodovku</h2>
          <p className="gpd-services__intro">
            Šest věcí, kvůli kterým k nám lidé z Budějovic a okolí jezdí nejčastěji.
            Když je potřeba něco navíc, řekneme dopředu, kolik a proč.
          </p>
        </div>

        <ol className="gpd-grid">
          {sluzby.map((s) => (
            <li className="gpd-card" key={s.kod}>
              <span className="gpd-card__code" aria-hidden="true">
                {s.kod}
              </span>
              <h3 className="gpd-card__title">{s.nazev}</h3>
              <p className="gpd-card__text">{s.popis}</p>
            </li>
          ))}
        </ol>

        <figure className="gpd-band">
          <img
            src="/section-1.webp"
            alt="Detail práce na karoserii vozu v servisu GPD České Budějovice"
            className="gpd-band__img"
          />
        </figure>
      </section>

      <section className="gpd-about" id="duvera" aria-labelledby="about-nadpis">
        <figure className="gpd-about__media">
          <img
            src="/section-2.webp"
            alt="Dílna autoklempířství GPD ve Stecherově Mlýně v Litvínovicích"
            className="gpd-about__img"
          />
        </figure>
        <div className="gpd-about__body">
          <p className="gpd-eyebrow gpd-eyebrow--dark">O dílně</p>
          <h2 id="about-nadpis">
            „Nejsme největší,<br />
            ale jsme tu pro vás.“
          </h2>
          <p className="gpd-about__text">
            Sídlíme ve Stecherově Mlýně v Litvínovicích, kousek za Budějovicemi. Děláme servis tak,
            jak bychom ho chtěli sami — bez zbytečných výměn, s cenou, kterou vám řekneme dopředu,
            a s tím, že auto vrátíme, kdy jsme slíbili.
          </p>

          <ul className="gpd-checks">
            <li>Cenu za práci znáte předem, ne až u pokladny</li>
            <li>Zachráníme plech, kde to jde — místo výměny celého dílu</li>
            <li>STK i emise vyřídíme za vás, přijedete jen jednou</li>
            <li>Servisujeme i fleetové vozy pro firmy</li>
          </ul>

          <div className="gpd-contactcard">
            <p className="gpd-contactcard__label">Nejrychlejší je zavolat</p>
            <a className="gpd-contactcard__phone" href="tel:+420387000000">
              387 00 00 00
            </a>
            <p className="gpd-contactcard__addr">
              Litvínovice 32 (Stecherův Mlýn), České Budějovice · Po–Pá 7:30–17:00
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

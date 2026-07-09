import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Astoria — květinářství v Hradci Králové",
  description:
    "Astoria je květinářství na Riegrově náměstí v Hradci Králové. Vážeme svatební i smuteční kytice, děláme sezónní vazby z čerstvých květin a rozvezeme je po městě ještě týž den.",
  metadataBase: new URL("https://astoria-kvetiny.cz"),
  openGraph: {
    title: "Astoria — květinářství v Hradci Králové",
    description:
      "Čerstvé řezané květiny, svatební a smuteční vazba, sezónní kytice na počkání. Riegrovo náměstí, Hradec Králové.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Vazba čerstvých květin v květinářství Astoria" }],
  },
  icons: {
    icon: [
      {
        url:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%237d1f3a'/%3E%3Ctext x='16' y='23' font-family='Georgia,serif' font-size='20' font-style='italic' fill='%23f7ede2' text-anchor='middle'%3EA%3C/text%3E%3C/svg%3E",
        type: "image/svg+xml",
      },
    ],
  },
};

const vazby = [
  {
    kdy: "Na počkání",
    nazev: "Kytice ze dne",
    text:
      "Řekněte, pro koho a za kolik — zbytek necháte na nás. Vážeme z toho, co ráno přišlo čerstvé: pivoňky, ranunkulky, eukalyptus. Hotovo většinou do deseti minut.",
  },
  {
    kdy: "S předstihem",
    nazev: "Svatební vazba",
    text:
      "Svatební kytice, korsáže, výzdoba obřadu i stolů. Sejdeme se nad vzorky a barvami, sladíme to s šaty i místem. Do Hradce a okolí přivezeme a nazdobíme na místě.",
  },
  {
    kdy: "Se soucitem",
    nazev: "Smuteční vazba",
    text:
      "Věnce, kytice a smuteční vazby ke kremaci i na hrob. Ozvěte se telefonem, domluvíme stužku s textem a stihneme i termín do druhého dne.",
  },
  {
    kdy: "Pro potěšení",
    nazev: "Rostliny do bytu",
    text:
      "Pokojovky, orchideje a keramika, kterou u nás rovnou přesadíme. Poradíme, co přežije stinnou kancelář i prosluněný parapet.",
  },
];

export default function Page() {
  return (
    <main className="as-main">
      <section className="as-hero" aria-labelledby="as-hero-title">
        <div className="as-hero__media">
          <img
            src="/hero.webp"
            alt="Vazačka skládá kytici z čerstvých sezónních květin v květinářství Astoria"
            className="as-hero__img"
            width={1200}
            height={1500}
          />
        </div>

        <div className="as-hero__panel">
          <p className="as-eyebrow">Riegrovo náměstí · Hradec Králové · od 1995</p>

          <h1 id="as-hero-title" className="as-hero__title">
            <span className="as-hero__word">Astoria</span>
            <span className="as-hero__sub">květinářství, které váže na počkání</span>
          </h1>

          <p className="as-hero__lede">
            Ráno přijedou květiny, do večera odejdou jako kytice. Řekněte nám
            náladu — svatba, omluva, narozeniny, poslední rozloučení — a my ji
            svážeme z toho nejčerstvějšího, co ten den máme na stole.
          </p>

          <div className="as-hero__cta">
            <a className="as-btn as-btn--primary" href="tel:+420734154522">
              Zavolat 734 154 522
            </a>
            <a
              className="as-btn as-btn--ghost"
              href="mailto:kvetiny@astoria-hk.cz?subject=Objedn%C3%A1vka%20kytice"
            >
              Napsat o kytici
            </a>
          </div>

          <dl className="as-hero__facts">
            <div>
              <dt>Otevřeno</dt>
              <dd>Po–Pá 8–18 · So 8–12</dd>
            </div>
            <div>
              <dt>Rozvoz</dt>
              <dd>po Hradci týž den</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="as-section as-vazby" aria-labelledby="as-vazby-title">
        <div className="as-section__head">
          <p className="as-eyebrow as-eyebrow--dark">Co pro vás uvážeme</p>
          <h2 id="as-vazby-title" className="as-h2">
            Každá kytice začíná otázkou „pro koho".
          </h2>
          <p className="as-section__intro">
            Nemáme dvě stejné. Vyberte, co potřebujete — o zbytek se postaráme
            u pultu na Riegrově náměstí.
          </p>
        </div>

        <ol className="as-cards">
          {vazby.map((v) => (
            <li className="as-card" key={v.nazev}>
              <span className="as-card__kdy">{v.kdy}</span>
              <h3 className="as-card__title">{v.nazev}</h3>
              <p className="as-card__text">{v.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="as-section as-onas" aria-labelledby="as-onas-title">
        <div className="as-onas__grid">
          <div className="as-onas__imgwrap">
            <img
              src="/section-1.webp"
              alt="Pult květinářství Astoria plný sezónních řezaných květin"
              className="as-onas__img"
              width={800}
              height={1000}
            />
            <img
              src="/section-2.webp"
              alt="Hotová svatební kytice převázaná stužkou"
              className="as-onas__img as-onas__img--2"
              width={800}
              height={1000}
            />
          </div>

          <div className="as-onas__text">
            <p className="as-eyebrow as-eyebrow--dark">O nás</p>
            <h2 id="as-onas-title" className="as-h2">
              Třicet let vážeme na jednom rohu.
            </h2>
            <p>
              Astorii najdete od roku 1995 na Riegrově náměstí na Pražském
              Předměstí. Petr a Nikola vedou krám, kde se květiny neschovávají
              do lednice na výstavu — objednáváme jich tolik, kolik za den
              projde rukama.
            </p>
            <p>
              Známe hradecké svatby, promoce na univerzitě i to, jak rychle
              umí přijít smutek. Proto zvedáme telefon a vážeme i mimo obvyklou
              dobu, když je potřeba.
            </p>

            <ul className="as-quality">
              <li>
                <strong>Čerstvost první</strong>
                Skladem jen to, co stihneme prodat čerstvé — bez ležáků.
              </li>
              <li>
                <strong>Vazba od ruky</strong>
                Žádné předhotovené balíčky. Skládáme před vámi u pultu.
              </li>
              <li>
                <strong>Doma i na hřbitově</strong>
                Rozvezeme po Hradci a domluvíme se i na termín ke dni pohřbu.
              </li>
            </ul>

            <p className="as-onas__adresa">
              Riegrovo náměstí 862/1, 500&nbsp;02 Hradec Králové ·{" "}
              <a href="tel:+420734154522">734&nbsp;154&nbsp;522</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Náš Grunt Ústí nad Labem — farmářský obchod s poctivými potravinami",
  description:
    "Farmářský obchod Náš Grunt v Ústí nad Labem. Kváskový chléb pečený na místě, mléko od farmáře, uzeniny s rodinnou tradicí a lokální produkty od malých českých výrobců.",
  openGraph: {
    title: "Náš Grunt Ústí nad Labem — farmářský obchod",
    description:
      "Poctivé pečivo z pekárny Náš Chléb, lokální produkty a čerstvá káva. Přijďte na snídani a odneste si domů kus poctivé chuti.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const sortiment = [
  {
    kod: "01",
    nazev: "Kváskový chléb",
    popis:
      "Pečeme přímo na prodejně z pekárny Náš Chléb. Křupavá kůrka, dlouhé zrání těsta, žádná náhrada za kvásek.",
    puvod: "pekárna Náš Chléb",
  },
  {
    kod: "02",
    nazev: "Mléko od farmáře",
    popis:
      "Čerstvé mléko a mléčné výrobky od hospodáře, který zná každou svou kravku jménem. Stáčíme do vratných lahví.",
    puvod: "rodinná farma, Ústecko",
  },
  {
    kod: "03",
    nazev: "Uzeniny a maso",
    popis:
      "Klobásy, šunka a paštiky podle receptur, které se dědí. Řeznictví s tradicí, žádné zbytečné éčka navíc.",
    puvod: "rodinná udírna",
  },
  {
    kod: "04",
    nazev: "Zavařeniny a med",
    popis:
      "Džemy vařené v malých várkách podle starých receptů a med od včelařů z okolí. Sladké, ale poctivé.",
    puvod: "malovýrobci z kraje",
  },
];

const pobocky = [
  { mesto: "Ústí nad Labem", adresa: "Mírové náměstí 38", stav: "otevřeno denně" },
  { mesto: "Lovosice", adresa: "Osvoboditelů 12", stav: "otevřeno denně" },
  { mesto: "Jílové u Děčína", adresa: "Mírové náměstí 291", stav: "otevřeno denně" },
];

export default function Page() {
  return (
    <main className="ng-main">
      <header className="ng-nav" aria-label="Hlavní navigace">
        <a className="ng-wordmark" href="#uvod" aria-label="Náš Grunt, úvod">
          <span className="ng-wordmark-nas">Náš</span>
          <span className="ng-wordmark-grunt">Grunt</span>
        </a>
        <nav className="ng-nav-links">
          <a href="#sortiment">Co u nás najdete</a>
          <a href="#pobocky">Pobočky</a>
          <a href="#pribeh">O nás</a>
        </nav>
      </header>

      <section className="ng-hero" id="uvod">
        <div className="ng-hero-media">
          <img
            src="/hero.webp"
            alt="Bochníky čerstvě upečeného kváskového chleba na dřevěném pultu farmářského obchodu"
            className="ng-hero-img"
          />
          <div className="ng-hero-scrim" aria-hidden="true" />
        </div>
        <div className="ng-hero-text">
          <p className="ng-eyebrow">Farmářský obchod · Ústí nad Labem</p>
          <h1 className="ng-hero-title">
            Ještě teplý chléb,
            <br />
            mléko od <em>farmáře</em>,
            <br />
            chuť, kterou znáte.
          </h1>
          <p className="ng-hero-lede">
            Vybíráme potraviny od malých českých hospodářů a pekařů. Pečivo
            pečeme přímo na prodejně — přijďte na ranní krajíc a kávu, odneste
            si domů kus poctivé chuti.
          </p>
          <div className="ng-hero-actions">
            <a className="ng-btn ng-btn-primary" href="#pobocky">
              Najít pobočku
            </a>
            <a className="ng-btn ng-btn-ghost" href="#sortiment">
              Co u nás koupíte
            </a>
          </div>
        </div>
      </section>

      <section className="ng-section ng-sortiment" id="sortiment">
        <div className="ng-section-head">
          <p className="ng-eyebrow ng-eyebrow-dark">Regál po regálu</p>
          <h2 className="ng-h2">Co u nás najdete</h2>
          <p className="ng-section-lede">
            Žádná uniformita průmyslové výroby. Každá položka má svého výrobce,
            adresu a příběh — a my za ni ručíme.
          </p>
        </div>

        <ol className="ng-list">
          {sortiment.map((item) => (
            <li className="ng-card" key={item.kod}>
              <span className="ng-card-kod" aria-hidden="true">
                {item.kod}
              </span>
              <div className="ng-card-body">
                <h3 className="ng-card-title">{item.nazev}</h3>
                <p className="ng-card-text">{item.popis}</p>
                <p className="ng-card-puvod">
                  <span aria-hidden="true">→ </span>
                  {item.puvod}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="ng-sortiment-fig">
          <img
            src="/section-1.webp"
            alt="Pult farmářského obchodu Náš Grunt s pečivem a lokálními produkty"
            className="ng-fig-img"
          />
          <figcaption className="ng-fig-cap">
            Pečeme přímo na místě — vůni ucítíte hned ve dveřích.
          </figcaption>
        </figure>
      </section>

      <section className="ng-section ng-pribeh" id="pribeh">
        <div className="ng-pribeh-grid">
          <figure className="ng-pribeh-fig">
            <img
              src="/section-2.webp"
              alt="Útulný interiér prodejny Náš Grunt s posezením u kávy"
              className="ng-fig-img"
            />
          </figure>
          <div className="ng-pribeh-text">
            <p className="ng-eyebrow ng-eyebrow-dark">O nás</p>
            <h2 className="ng-h2">
              Stojíme na pevných
              <br />
              základech tradice.
            </h2>
            <p className="ng-body">
              Náš Grunt patří od roku 2024 do rodiny pekárny Náš Chléb.
              Podporujeme malé české farmáře a výrobce, kteří sdílejí naše
              nadšení pro autentické suroviny — a věříme, že dobré jídlo dělá
              život lepší.
            </p>
            <p className="ng-body">
              U nás si nakoupíte s úsměvem a osobním přístupem. Sednete si na
              snídani, dáte si dobrou kávu a odejdete s pocitem, že jste
              podpořili někoho, kdo dělá věci srdcem.
            </p>

            <blockquote className="ng-quote">
              <p>
                „Mají vlastní výrobnu, takže si dám čerstvě upečený croissant
                a ten jejich slaný závin — prostě dokonalost v každém soustě.“
              </p>
              <cite>— zákaznice, recenze prodejny</cite>
            </blockquote>
          </div>
        </div>

        <div className="ng-pobocky" id="pobocky">
          <h3 className="ng-h3">Kde nás najdete</h3>
          <ul className="ng-pobocky-list">
            {pobocky.map((p) => (
              <li className="ng-pobocka" key={p.mesto}>
                <span className="ng-pobocka-mesto">{p.mesto}</span>
                <span className="ng-pobocka-adresa">{p.adresa}</span>
                <span className="ng-pobocka-stav">{p.stav}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

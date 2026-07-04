import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Náš Grunt České Budějovice — poctivé potraviny od českých farmářů",
  description:
    "Farmářský obchod Náš Grunt v Českých Budějovicích. Kváskový chléb z pekárny Náš Chléb, mléko od farmáře, uzeniny s rodinnou tradicí a lokální produkty s příběhem. Pečeme přímo na místě.",
  openGraph: {
    title: "Náš Grunt České Budějovice — poctivé potraviny od českých farmářů",
    description:
      "Kváskový chléb, mléko od farmáře, uzeniny a lokální produkty s příběhem. Farmářský obchod v Českých Budějovicích, kde pečeme přímo na místě.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Regál plný čerstvého pečiva na Gruntu" }],
  },
};

const regal = [
  {
    key: "01",
    nazev: "Kváskový chléb",
    puvod: "Pekárna Náš Chléb",
    popis:
      "Poctivý kváskový chléb s křupavou kůrkou. Zaděláváme podle tradiční receptury, každý den zavezeme čerstvý.",
  },
  {
    key: "02",
    nazev: "Mléko a mléčné",
    puvod: "Farmy z Pošumaví",
    popis:
      "Mléko od farmáře, který zná každou svou kravku jménem. Sýry, tvaroh a máslo bez zbytečné chemie.",
  },
  {
    key: "03",
    nazev: "Uzeniny a maso",
    puvod: "Rodinné řeznictví",
    popis:
      "Domácí uzeniny a maso s rodinnou tradicí. Chuť, kterou v regálu supermarketu nenajdete.",
  },
  {
    key: "04",
    nazev: "Sladké z komory",
    puvod: "Malovýrobci",
    popis:
      "Džemy vařené s láskou podle starých receptur, med od včelaře i koláče od sousedů z okolí.",
  },
  {
    key: "05",
    nazev: "Snídaně a káva",
    puvod: "Přímo u nás",
    popis:
      "Sedněte si k dobré kávě a čerstvému croissantu. Útulné posezení uprostřed nákupu.",
  },
  {
    key: "06",
    nazev: "Pečeme na místě",
    puvod: "Vlastní výrobna",
    popis:
      "Vůně čerstvého pečiva přímo z pece. Záviny nasladko i naslano, dopékáme celý den.",
  },
];

export default function Page() {
  return (
    <main className="grunt">
      <header className="grunt-nav">
        <a className="grunt-mark" href="#uvod" aria-label="Náš Grunt, farmářský obchod">
          <span className="grunt-mark__nas">Náš</span>
          <span className="grunt-mark__grunt">Grunt</span>
          <span className="grunt-mark__loc">České Budějovice</span>
        </a>
        <nav className="grunt-links" aria-label="Hlavní">
          <a href="#regal">Co u nás najdete</a>
          <a href="#pribeh">O gruntu</a>
          <a className="grunt-links__call" href="tel:+420389000000">Zavolat na prodejnu</a>
        </nav>
      </header>

      <section className="grunt-hero" id="uvod">
        <div className="grunt-hero__media">
          <img
            src="/hero.webp"
            alt="Regál farmářského obchodu Náš Grunt plný čerstvého kváskového pečiva"
            className="grunt-hero__img"
            width={1600}
            height={1100}
          />
        </div>
        <div className="grunt-hero__panel">
          <p className="grunt-hero__eyebrow">Farmářský obchod · Mírové náměstí</p>
          <h1 className="grunt-hero__title">
            Chleba,
            <br />
            co si <em>pamatuje</em>
            <br />
            svého pekaře
          </h1>
          <p className="grunt-hero__lead">
            Na Gruntu v Českých Budějovicích prodáváme jen jídlo, u kterého víme,
            kdo ho vypěstoval nebo upekl. Kváskový chléb, mléko od farmáře, uzeniny
            s rodinnou tradicí — a pečeme přímo na místě.
          </p>
          <div className="grunt-hero__actions">
            <a className="grunt-btn grunt-btn--solid" href="#regal">
              Prohlédnout regály
            </a>
            <a className="grunt-btn grunt-btn--ghost" href="tel:+420389000000">
              Zavolat na prodejnu
            </a>
          </div>
          <dl className="grunt-hero__facts">
            <div>
              <dt>Otevřeno</dt>
              <dd>Po–Pá 7–18 · So 7–12</dd>
            </div>
            <div>
              <dt>Pečeme</dt>
              <dd>Denně od půl šesté ráno</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="grunt-regal" id="regal">
        <div className="grunt-section-head">
          <p className="grunt-kicker">Šest polic, ke kterým se vracíte</p>
          <h2>Co u nás najdete</h2>
          <p className="grunt-section-head__note">
            Sortiment vybíráme kus po kuse. Přednost mají malí čeští výrobci,
            kteří dělají věci srdcem — ne cena za tunu.
          </p>
        </div>

        <ol className="grunt-shelf">
          {regal.map((item) => (
            <li className="grunt-shelf__item" key={item.key}>
              <span className="grunt-shelf__num" aria-hidden="true">
                {item.key}
              </span>
              <div className="grunt-shelf__body">
                <p className="grunt-shelf__origin">{item.puvod}</p>
                <h3>{item.nazev}</h3>
                <p>{item.popis}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="grunt-feature">
          <img
            src="/section-1.webp"
            alt="Bochníky čerstvého kváskového chleba z pekárny Náš Chléb"
            width={1400}
            height={900}
          />
          <figcaption>
            <span className="grunt-kicker">Pečivo z pekárny Náš Chléb</span>
            <p>
              Každé ráno zavezeme do prodejny čerstvé pečivo — kváskové chleby
              s křupavou kůrkou, voňavé housky i sladké koláče. Vše podle tradičních
              receptur, s chutí, kterou si zamilujete.
            </p>
          </figcaption>
        </figure>
      </section>

      <section className="grunt-pribeh" id="pribeh">
        <div className="grunt-pribeh__grid">
          <div className="grunt-pribeh__text">
            <p className="grunt-kicker grunt-kicker--light">O gruntu</p>
            <h2>
              Stojíme na pevných
              <br />
              základech tradice
            </h2>
            <p>
              Náš Grunt je od roku 2024 součástí značky Náš Chléb. Vsadili jsme
              na poctivou řemeslnou práci a lásku k jídlu — pro každého, kdo hledá
              kvalitu a chuť, která se neztrácí v uniformitě průmyslové výroby.
            </p>
            <p>
              Podporujeme malé české farmáře a výrobce. Věříme, že budoucnost patří
              lokálnímu hospodaření, které respektuje přírodu i práci lidských rukou.
              Každý nákup u nás nese příjemný pocit, že podporujete někoho konkrétního.
            </p>
            <a className="grunt-btn grunt-btn--solid" href="mailto:spoluprace@nasgrunt.cz">
              Napsat nám e-mail
            </a>
          </div>
          <figure className="grunt-pribeh__media">
            <img
              src="/section-2.webp"
              alt="Útulný interiér farmářského obchodu Náš Grunt s posezením"
              width={1200}
              height={1400}
            />
          </figure>
        </div>

        <blockquote className="grunt-quote">
          <p>
            „Pěkná prodejna se skvělým sortimentem. Nejvíc oceňuji vlastní výrobnu —
            čerstvé croissanty a jejich závin na slano, prostě dokonalost v každém
            soustě.“
          </p>
          <cite>Zákaznice, recenze na Gruntu</cite>
        </blockquote>
      </section>
    </main>
  );
}

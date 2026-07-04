import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ELROY — inteligentní elektroinstalace | České Budějovice",
  description:
    "Elroy s.r.o. navrhuje a montuje inteligentní domácnosti v Českých Budějovicích a okolí. Od roku 1995. Ovládejte topení, světla i kamery z telefonu.",
  openGraph: {
    title: "ELROY — inteligentní elektroinstalace, České Budějovice",
    description:
      "Návrh a montáž chytré domácnosti. Topení, osvětlení a bezpečnost pod jedním scénářem. Od roku 1995.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Chytrá domácnost od Elroy" }],
  },
};

const scenare = [
  {
    stav: "PŘÍCHOD",
    nazev: "Vracíte se domů",
    popis:
      "Jedním tlačítkem se rozsvítí chodba, zvedne se teplota v obýváku a otevře garáž. Žádné hledání vypínačů ve tmě.",
    okruhy: "Osvětlení · Topení · Vrata",
  },
  {
    stav: "NOC",
    nazev: "Jdete spát",
    popis:
      "Scénář Dobrou noc zhasne celý dům, sníží topení a zapne hlídání dveří a oken. Ráno se radiátory samy nahřejí.",
    okruhy: "Osvětlení · Topení · Zabezpečení",
  },
  {
    stav: "ODCHOD",
    nazev: "Odjíždíte na dovolenou",
    popis:
      "V telefonu vidíte, že je vše vypnuté. Kamery hlídají, světla simulují přítomnost, útlum topení šetří energii.",
    okruhy: "Kamery · Simulace · Úspora",
  },
];

const reference = [
  { misto: "Rodinný dům, Rudolfov", rozsah: "Kompletní elektroinstalace + chytré řízení topení a světel" },
  { misto: "Byt, sídliště Máj", rozsah: "Rekonstrukce rozvodů, ovládání osvětlení z telefonu" },
  { misto: "Provozovna, centrum ČB", rozsah: "Silnoproud, datové rozvody a kamerový systém" },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Elroy — domů">
          <span className="wordmark__on" aria-hidden="true" />
          EL<span className="wordmark__roy">ROY</span>
        </a>
        <a className="topbar__call" href="tel:+420724062038">
          <span className="topbar__label">Rychlý kontakt</span>
          <span className="topbar__num">+420 724 062 038</span>
        </a>
      </header>

      <section className="hero">
        <div className="hero__panel">
          <p className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            Inteligentní elektroinstalace · České Budějovice
          </p>
          <h1 className="hero__title">
            Celý dům<br />
            na jedné<br />
            <span className="hero__accent">scéně.</span>
          </h1>
          <p className="hero__lead">
            Navrhneme a zapojíme chytrou domácnost, kde topení, světla i kamery
            poslouchají jeden dotyk v telefonu. Bez čtení návodů, bez zbytečné
            spotřeby.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="tel:+420724062038">Zavolat elektrikáři</a>
            <a className="btn btn--ghost" href="mailto:info@elroy.cz">Napsat poptávku</a>
          </div>
          <p className="hero__since">Elektromontáže od roku 1995</p>
        </div>
        <figure className="hero__media">
          <img
            src="/hero.webp"
            alt="Ovládání chytré domácnosti Elroy z chytrého telefonu"
            className="hero__img"
          />
          <figcaption className="hero__switch" aria-hidden="true">
            <span className="hero__switchLabel">CELÝ DŮM</span>
            <span className="hero__switchToggle" />
          </figcaption>
        </figure>
      </section>

      <section className="scenes" aria-labelledby="scenes-h">
        <div className="section-head">
          <p className="eyebrow">Co pro vás nastavíme</p>
          <h2 id="scenes-h" className="section-title">
            Tři scénáře, které dům zvládne sám
          </h2>
          <p className="section-lead">
            Inteligentní elektroinstalace není hračka navíc — je to řada okruhů,
            které spolupracují. U vás doma je propojíme do situací, jaké denně
            řešíte.
          </p>
        </div>

        <ol className="scenes__grid">
          {scenare.map((s, i) => (
            <li className="scene" key={s.nazev}>
              <div className="scene__top">
                <span className="scene__num">{String(i + 1).padStart(2, "0")}</span>
                <span className="scene__state">{s.stav}</span>
              </div>
              <h3 className="scene__name">{s.nazev}</h3>
              <p className="scene__desc">{s.popis}</p>
              <p className="scene__circuits">{s.okruhy}</p>
            </li>
          ))}
        </ol>

        <figure className="scenes__media">
          <img
            src="/section-1.webp"
            alt="Instalace chytrých rozvodů v rodinném domě od firmy Elroy"
          />
        </figure>
      </section>

      <section className="about" aria-labelledby="about-h">
        <div className="about__media">
          <img
            src="/section-2.webp"
            alt="Elektromontážní tým Elroy při práci na rozvaděči"
          />
        </div>
        <div className="about__body">
          <p className="eyebrow">O firmě Elroy</p>
          <h2 id="about-h" className="section-title">
            Elektrikáři z Budějovic, kterým dům svěříte celý
          </h2>
          <p className="about__text">
            Elroy s.r.o. děláme elektromontáže od roku 1995. Montujeme jen
            značkový materiál, máme vlastní vybavení a za odvedenou prací si
            stojíme — od zásuvky po kompletní chytré řízení domu.
          </p>

          <ul className="refs">
            {reference.map((r) => (
              <li className="refs__item" key={r.misto}>
                <span className="refs__place">{r.misto}</span>
                <span className="refs__scope">{r.rozsah}</span>
              </li>
            ))}
          </ul>

          <div className="contact-card">
            <p className="contact-card__title">Domluvíme se přímo</p>
            <a className="contact-card__row" href="tel:+420724062038">
              <span>Mobil</span>
              <strong>+420 724 062 038</strong>
            </a>
            <a className="contact-card__row" href="tel:+420386359705">
              <span>Pevná</span>
              <strong>+420 386 359 705</strong>
            </a>
            <a className="contact-card__row" href="mailto:info@elroy.cz">
              <span>E-mail</span>
              <strong>info@elroy.cz</strong>
            </a>
            <p className="contact-card__addr">
              K Dolíčku 2285, 370 06 České Budějovice 5
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

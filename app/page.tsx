import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROSS s.r.o. — stavebniny a stavební činnost Brno",
  description:
    "Brněnská stavební firma ROSS s.r.o. od roku 1990: prodej stavebnin, výstavba a rekonstrukce, zateplení fasád, izolace a sádrokartony. Materiál i stavba na klíč.",
  openGraph: {
    title: "ROSS s.r.o. — stavebniny a stavební činnost Brno",
    description:
      "Prodej stavebnin a kompletní stavební činnost v Brně od roku 1990. Materiál skladem i stavba na klíč.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const cinnosti = [
  {
    kod: "MAT",
    nazev: "Prodej stavebnin",
    popis:
      "Materiál skladem i na objednávku — cihly, malty, izolace, sádrokartony. Poradíme s množstvím a dovezeme na stavbu.",
  },
  {
    kod: "IZO",
    nazev: "Izolace a sádrokartony",
    popis:
      "Naše specializace. Hydroizolace, tepelné izolace a suchá výstavba přesně na míru objektu.",
  },
  {
    kod: "FAS",
    nazev: "Rekonstrukce a zateplení fasád",
    popis:
      "Zateplíme rodinný dům i bytový panelák. Nižší účty za teplo a fasáda, která vydrží roky.",
  },
  {
    kod: "STV",
    nazev: "Výstavba a rekonstrukce",
    popis:
      "Průmyslové objekty, občanská vybavenost, komunikace a zpevněné plochy, sportovní areály, čerpací stanice.",
  },
  {
    kod: "KLC",
    nazev: "Stavba na klíč",
    popis:
      "Dodáme materiál i práci pod jednou smlouvou. Vy řešíte jednoho partnera, ne deset dodavatelů.",
  },
  {
    kod: "ING",
    nazev: "Inženýrská a developerská činnost",
    popis:
      "Připravíme projekt od pozemku po kolaudaci — povolení, koordinace, developerské projekty.",
  },
];

export default function Page() {
  return (
    <main className="ross">
      <header className="ross-topbar">
        <a className="ross-mark" href="#" aria-label="ROSS s.r.o., domů">
          <span className="ross-mark__word">ROSS</span>
          <span className="ross-mark__sro">s.r.o.</span>
        </a>
        <span className="ross-topbar__tag">Stavebniny &amp; stavební činnost · Brno</span>
      </header>

      <section className="ross-hero" aria-labelledby="hero-title">
        <div className="ross-hero__media">
          <img
            src="/hero.webp"
            alt="Skladová plocha stavebnin ROSS s.r.o. s paletami materiálu"
            className="ross-hero__img"
            width={1600}
            height={1000}
          />
          <div className="ross-hero__grid" aria-hidden="true" />
        </div>

        <div className="ross-hero__panel">
          <p className="ross-hero__eyebrow">
            <span className="ross-since">EST. 1990</span>
            <span>Brno</span>
          </p>
          <h1 id="hero-title" className="ross-hero__title">
            Od palety cihel<br />po předání klíčů.
          </h1>
          <p className="ross-hero__lead">
            ROSS s.r.o. staví v Brně a okolí od roku 1990. Prodáváme stavebniny
            a stavíme z nich — izolace, sádrokartony, fasády i kompletní objekty
            na klíč.
          </p>
          <div className="ross-hero__cta">
            <a className="ross-btn ross-btn--solid" href="#nabidka">
              Prohlédnout činnosti
            </a>
            <a className="ross-btn ross-btn--ghost" href="mailto:maly@ross-brno.cz">
              Napsat poptávku
            </a>
          </div>
        </div>
      </section>

      <section className="ross-work" id="nabidka" aria-labelledby="nabidka-title">
        <div className="ross-section-head">
          <p className="ross-kicker">Co pro vás uděláme</p>
          <h2 id="nabidka-title" className="ross-h2">
            Materiál a řemeslo pod jednou střechou
          </h2>
          <p className="ross-section-lead">
            Kód u každé činnosti je náš interní zkratkovník — tak si zakázky
            značíme na dodacích listech. Vy si podle něj snadno řeknete, co
            přesně potřebujete.
          </p>
        </div>

        <ul className="ross-catalog">
          {cinnosti.map((c) => (
            <li className="ross-card" key={c.kod}>
              <span className="ross-card__code">{c.kod}</span>
              <h3 className="ross-card__name">{c.nazev}</h3>
              <p className="ross-card__desc">{c.popis}</p>
            </li>
          ))}
        </ul>

        <figure className="ross-figure">
          <img
            src="/section-1.webp"
            alt="Rozpracovaná stavba s lešením a zateplovanou fasádou"
            className="ross-figure__img"
            width={1600}
            height={900}
          />
          <figcaption className="ross-figure__cap">
            Zateplení fasády v Brně — od dodávky materiálu po hotovou omítku.
          </figcaption>
        </figure>
      </section>

      <section className="ross-about" id="o-firme" aria-labelledby="about-title">
        <div className="ross-about__inner">
          <div className="ross-about__text">
            <p className="ross-kicker ross-kicker--light">O firmě</p>
            <h2 id="about-title" className="ross-h2 ross-h2--light">
              Tři dekády na brněnských stavbách
            </h2>
            <p className="ross-about__p">
              Začínali jsme v roce 1990 jako parta lidí, co uměla postavit dům i
              přivézt na něj materiál. Od té doby jsme postavili a
              zrekonstruovali průmyslové haly, občanské objekty, komunikace,
              sportovní areály i čerpací stanice — a stavebniny prodáváme dál.
            </p>
            <p className="ross-about__p">
              Naší specializací zůstávají izolace a sádrokartony. Když je
              potřeba, dodáme stavbu na klíč: materiál, práci i papíry přes
              inženýrskou a developerskou činnost.
            </p>

            <dl className="ross-facts">
              <div className="ross-fact">
                <dt>Na trhu od</dt>
                <dd>1990</dd>
              </div>
              <div className="ross-fact">
                <dt>Působíme v</dt>
                <dd>Brně a okolí</dd>
              </div>
              <div className="ross-fact">
                <dt>Specializace</dt>
                <dd>Izolace &amp; SDK</dd>
              </div>
            </dl>

            <div className="ross-contact">
              <span className="ross-contact__label">Poptávky a dotazy</span>
              <a className="ross-contact__link" href="mailto:maly@ross-brno.cz">
                maly@ross-brno.cz
              </a>
            </div>
          </div>

          <figure className="ross-about__media">
            <img
              src="/section-2.webp"
              alt="Detail dokončeného stavebního objektu firmy ROSS s.r.o."
              className="ross-about__img"
              width={1200}
              height={1400}
            />
          </figure>
        </div>
      </section>
    </main>
  );
}

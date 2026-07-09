import type { CSSProperties } from "react";

export default function Page() {
  const fleet = [
    {
      trida: "A",
      nazev: "Do města",
      auta: "Škoda Fabia · VW Polo",
      popis: "Malé, úsporné, snadno zaparkujete i v centru. Ideální na běžné pojíždění po Praze.",
      cena: "od 690 Kč / den",
    },
    {
      trida: "B",
      nazev: "Pro rodinu",
      auta: "Škoda Octavia · VW Passat",
      popis: "Velký kufr, pohodlí na dálnici, prostor pro sedačky. Na výlet i delší cestu za město.",
      cena: "od 1 190 Kč / den",
    },
    {
      trida: "C",
      nazev: "Na dodávku",
      auta: "VW Transporter · Ford Transit",
      popis: "Stěhování, převoz nábytku, zásoby na chalupu. Naložíte, co potřebujete, a vrátíte hned druhý den.",
      cena: "od 1 490 Kč / den",
    },
    {
      trida: "D",
      nazev: "Reprezentace",
      auta: "Mercedes E · BMW řada 5",
      popis: "Když má auto dělat dojem — na svatbu, na schůzku, na letiště. Vždy čisté a připravené.",
      cena: "od 2 490 Kč / den",
    },
  ];

  const jak = [
    {
      krok: "01",
      nadpis: "Zavoláte nebo napíšete",
      text: "Řeknete termín a kam jedete. Doporučíme vůz, který sedne na váš účel i rozpočet.",
    },
    {
      krok: "02",
      nadpis: "Vyzvednete si klíče",
      text: "Přijedete na Smíchov, nebo vám vůz přistavíme. Papírování zvládneme do deseti minut.",
    },
    {
      krok: "03",
      nadpis: "Jedete a vrátíte",
      text: "Plná nádrž, přehledná smlouva, žádné skryté položky. Vrátíte s plnou nádrží — a je hotovo.",
    },
  ];

  return (
    <main className="rt">
      <header className="rt-topbar">
        <a className="rt-wordmark" href="#" aria-label="RentalTaxi Praha, úvod">
          <span className="rt-wordmark__flag" aria-hidden="true" />
          <span className="rt-wordmark__text">
            rental<strong>taxi</strong>
            <span className="rt-wordmark__dot">.cz</span>
          </span>
        </a>
        <nav className="rt-topnav" aria-label="Hlavní">
          <a href="#vozy">Vozy</a>
          <a href="#jak">Jak to funguje</a>
        </nav>
        <a className="rt-topcall" href="tel:+420212345678">
          <span aria-hidden="true">☎</span> 212 345 678
        </a>
      </header>

      <section className="rt-hero" aria-labelledby="rt-hero-title">
        <div className="rt-hero__media">
          <img
            src="/hero.webp"
            alt="Vůz z autopůjčovny RentalTaxi připravený k vyzvednutí v Praze"
            className="rt-hero__img"
          />
          <div className="rt-hero__grain" aria-hidden="true" />
        </div>

        <div className="rt-hero__panel">
          <p className="rt-hero__eyebrow">Autopůjčovna · Praha–Smíchov · od roku 2009</p>
          <h1 id="rt-hero-title" className="rt-hero__title">
            Klíče v ruce.
            <br />
            <span className="rt-hero__accent">Dneska.</span>
          </h1>
          <p className="rt-hero__lead">
            Potřebujete auto na víkend, na stěhování nebo než se vrátíte z
            servisu? Zavoláte, přijedete na Smíchov a odjíždíte. Plná nádrž,
            jasná cena, žádné hvězdičky ve smlouvě.
          </p>
          <div className="rt-hero__actions">
            <a className="rt-btn rt-btn--primary" href="tel:+420212345678">
              Zavolat: 212 345 678
            </a>
            <a className="rt-btn rt-btn--ghost" href="mailto:pujcovna@rentaltaxi.cz">
              Napsat e-mail
            </a>
          </div>
          <dl className="rt-hero__meta">
            <div>
              <dt>Přistavení vozu</dt>
              <dd>po Praze zdarma</dd>
            </div>
            <div>
              <dt>Otevřeno</dt>
              <dd>Po–Ne, 7:00–21:00</dd>
            </div>
          </dl>
        </div>

        <div className="rt-hero__ticket" aria-hidden="true">
          <span className="rt-hero__ticket-lbl">Rezervace</span>
          <span className="rt-hero__ticket-no">CZ&nbsp;/&nbsp;PRG</span>
        </div>
      </section>

      <section className="rt-fleet" id="vozy" aria-labelledby="rt-fleet-title">
        <div className="rt-fleet__head">
          <p className="rt-section-eyebrow">Vozový park</p>
          <h2 id="rt-fleet-title" className="rt-fleet__title">
            Vyberte podle toho, co s autem potřebujete
          </h2>
          <p className="rt-fleet__intro">
            Neřešíme značky ani koňské síly. Řešíme, jestli jedete do centra,
            stěhujete se, nebo chcete udělat dojem. Podle toho vám auto
            doporučíme.
          </p>
        </div>

        <ul className="rt-fleet__grid">
          {fleet.map((f) => (
            <li className="rt-card" key={f.trida}>
              <span className="rt-card__tag" aria-hidden="true">
                Třída {f.trida}
              </span>
              <h3 className="rt-card__name">{f.nazev}</h3>
              <p className="rt-card__cars">{f.auta}</p>
              <p className="rt-card__desc">{f.popis}</p>
              <p className="rt-card__price">{f.cena}</p>
            </li>
          ))}
        </ul>

        <figure className="rt-fleet__figure">
          <img
            src="/section-1.webp"
            alt="Zaparkovaná auta z vozového parku RentalTaxi"
            className="rt-fleet__img"
          />
          <figcaption>
            Každý vůz před předáním umyjeme, natankujeme a zkontrolujeme. Co si
            půjčíte, to dostanete čisté a připravené.
          </figcaption>
        </figure>
      </section>

      <section className="rt-trust" id="jak" aria-labelledby="rt-trust-title">
        <div className="rt-trust__inner">
          <div className="rt-trust__copy">
            <p className="rt-section-eyebrow rt-section-eyebrow--light">
              Jak to u nás chodí
            </p>
            <h2 id="rt-trust-title" className="rt-trust__title">
              Tři kroky a jedete
            </h2>
            <ol className="rt-steps">
              {jak.map((s) => (
                <li className="rt-step" key={s.krok}>
                  <span className="rt-step__no" aria-hidden="true">
                    {s.krok}
                  </span>
                  <div>
                    <h3 className="rt-step__title">{s.nadpis}</h3>
                    <p className="rt-step__text">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <blockquote className="rt-quote">
              <p>
                „Auto stálo připravené na Smíchově přesně na čas, smlouva na
                jednu stránku, cena seděla na korunu. Půjčoval jsem si už
                potřetí.“
              </p>
              <cite>Martin H., Praha 5 — pravidelný zákazník</cite>
            </blockquote>
          </div>

          <figure className="rt-trust__figure">
            <img
              src="/section-2.webp"
              alt="Předání klíčů od zapůjčeného vozu zákazníkovi"
              className="rt-trust__img"
            />
            <figcaption
              className="rt-trust__badge"
              style={{ "--i": 0 } as CSSProperties}
            >
              <strong>15 let</strong>
              <span>půjčujeme auta v Praze</span>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}

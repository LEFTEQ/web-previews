import type { ReactNode } from "react";

export default function Page() {
  return (
    <main className="page">
      <header className="masthead">
        <a className="wordmark" href="#top" aria-label="Bokrošová, správa nemovitostí Plzeň">
          <span className="wordmark__name">Bokrošová</span>
          <span className="wordmark__sub">správa domů &amp; tepla · Plzeň</span>
        </a>
        <nav className="masthead__nav" aria-label="Hlavní">
          <a href="#sluzby">Co spravujeme</a>
          <a href="#onas">Proč my</a>
          <a className="masthead__call" href="tel:+420724272460">Zavolat 724 272 460</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero__frame">
          <img
            className="hero__img"
            src="/hero.webp"
            alt="Bytový dům pod správou Bokrošová v Plzni"
            width={1600}
            height={1000}
          />
          <div className="hero__meter" aria-hidden="true">
            <span className="hero__meter-dial" />
            <span className="hero__meter-label">kotelna · odečet · vyúčtování</span>
          </div>
        </div>

        <div className="hero__copy">
          <p className="eyebrow">Rodinná správa nemovitostí od roku 2002</p>
          <h1 className="hero__title">
            Váš dům běží.<br />
            <span className="hero__title-accent">O zbytek</span> se postaráme my.
          </h1>
          <p className="hero__lead">
            Kotelna, výměníková stanice, odečty měřidel, vyúčtování služeb i schůze
            vlastníků. Vlastníme licenci na výrobu tepla a vedeme kompletní správu
            plzeňských SVJ a bytových domů — od patního vodoměru po zprávu o hospodaření.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="tel:+420724272460">Zavolat: 724 272 460</a>
            <a className="btn btn--ghost" href="mailto:bokrosova@volny.cz">Napsat e-mail</a>
          </div>
          <p className="hero__note">
            Nové SVJ? Pomůžeme vám i s prvními kroky — po domluvě přijedeme za vámi.
          </p>
        </div>
      </section>

      <section className="section" id="sluzby" aria-labelledby="sluzby-h">
        <div className="section__head">
          <p className="eyebrow eyebrow--dark">Tři okruhy, jedna smlouva</p>
          <h2 id="sluzby-h" className="section__title">Co pro váš dům reálně děláme</h2>
          <p className="section__intro">
            Rozsah si ušijete na míru — vezmete si jen to, co potřebujete. Tady jsou tři
            oblasti, ve kterých za vás převezmeme starosti i odpovědnost.
          </p>
        </div>

        <ol className="cards">
          <li className="card">
            <span className="card__no">01</span>
            <h3 className="card__title">Provoz tepelných zařízení</h3>
            <p className="card__body">
              Personál i technika pro kotelny a výměníkové stanice. Jako držitelé licence
              teplo vyrábíme i distribuujeme. Zákonné revize, havarijní služba, opravy
              i rekonstrukce jsou na nás.
            </p>
            <ul className="card__list">
              <li>Licence na výrobu a distribuci tepla</li>
              <li>Revize, havarijka, opravy 24/7</li>
            </ul>
          </li>

          <li className="card">
            <span className="card__no">02</span>
            <h3 className="card__title">Odečty a vyúčtování</h3>
            <p className="card__body">
              Cejchování a odečty patních i poměrových měřidel. Vyúčtování vždy podle
              platné legislativy a vašich požadavků. Zastoupíme vás i při jednání
              s BOZP, ERÚ nebo ČOI.
            </p>
            <ul className="card__list">
              <li>Patní i poměrová měřidla</li>
              <li>Zastupování před úřady</li>
            </ul>
          </li>

          <li className="card">
            <span className="card__no">03</span>
            <h3 className="card__title">Kompletní správa domu</h3>
            <p className="card__body">
              Evidence vlastníků, předpisy záloh i vyúčtování služeb ve specializovaném
              software. Hlídáme úhrady, řešíme nedoplatky, vedeme účetnictví a jako
              profesionální předseda svoláme i schůzi.
            </p>
            <ul className="card__list">
              <li>Účetnictví a zprávy o hospodaření</li>
              <li>Profesionální předseda SVJ</li>
            </ul>
          </li>
        </ol>
      </section>

      <section className="section section--trust" id="onas" aria-labelledby="onas-h">
        <div className="trust__grid">
          <div className="trust__media">
            <img
              className="trust__img"
              src="/section-1.webp"
              alt="Tým Bokrošová při jednání se společenstvím vlastníků"
              width={1200}
              height={1400}
            />
            <img
              className="trust__img trust__img--second"
              src="/section-2.webp"
              alt="Údržba technického zařízení domu v Plzni"
              width={1200}
              height={900}
            />
          </div>

          <div className="trust__copy">
            <p className="eyebrow eyebrow--dark">Proč právě my</p>
            <h2 id="onas-h" className="section__title">
              Rodinná firma, která u vašeho domu zůstane
            </h2>
            <p className="trust__lead">
              V energetice a správě nemovitostí žijeme celý život — firma vznikla v roce
              2002. Nasloucháme předsedům i jednotlivým vlastníkům a na dotazy
              odpovídáme osobně. Žádné call centrum, člověk, kterého znáte.
            </p>

            <dl className="facts">
              <div className="fact">
                <dt className="fact__k">Od roku</dt>
                <dd className="fact__v">2002</dd>
              </div>
              <div className="fact">
                <dt className="fact__k">Působíme v</dt>
                <dd className="fact__v">Plzni</dd>
              </div>
              <div className="fact">
                <dt className="fact__k">Přístup</dt>
                <dd className="fact__v">osobní</dd>
              </div>
            </dl>

            <div className="contact">
              <p className="contact__row">
                <span className="contact__k">Adresa</span>
                <span className="contact__v">U Borského parku 1213, 301 00 Plzeň</span>
              </p>
              <p className="contact__row">
                <span className="contact__k">Telefon</span>
                <a className="contact__v contact__link" href="tel:+420724272460">+420 724 272 460</a>
              </p>
              <p className="contact__row">
                <span className="contact__k">E-mail</span>
                <a className="contact__v contact__link" href="mailto:bokrosova@volny.cz">bokrosova@volny.cz</a>
              </p>
              <p className="contact__row">
                <span className="contact__k">Datová schránka</span>
                <span className="contact__v">epsscwg</span>
              </p>
            </div>

            <p className="contact__note">
              Kancelář U Borského parku 3 byla během covidu zrušena — zůstala tu
              schránka na poštu. Zavolejte nebo napište a po domluvě přijedeme za vámi.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

type _Unused = ReactNode;

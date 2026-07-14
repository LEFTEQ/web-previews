const offers = [
  {
    type: "Pozemek",
    title: "Stavební pozemek v Českém ráji",
    price: "1 800 000 Kč",
  },
  {
    type: "Byt",
    title: "3+kk ve Smržovce, Sportovní",
    price: "3 480 000 Kč",
  },
  {
    type: "Dům",
    title: "Rodinný dům v Kunraticích u Cvikova",
    price: "4 875 000 Kč",
  },
];

const team = [
  { name: "Ing. Pavel Hála", phone: "+420 777 102 152", href: "tel:+420777102152" },
  { name: "Ing. Marek Sechovský", phone: "+420 605 408 080", href: "tel:+420605408080" },
  { name: "Marcela Hlaváčová", phone: "+420 776 885 285", href: "tel:+420776885285" },
  { name: "Miroslava Hyková", phone: "+420 775 162 218", href: "tel:+420775162218" },
];

export default function Page() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Patria Reality – úvod">
            <span className="wordmark-main">PATRIA</span>
            <span className="wordmark-sub">reality · Liberec</span>
          </a>

          <nav className="main-nav" aria-label="Hlavní navigace">
            <a href="#nabidka">Nemovitosti</a>
            <a href="#prodej">Prodat či pronajmout</a>
          </nav>

          <a className="header-call" href="tel:+420485101401">
            <span>Zavolat do kanceláře</span>
            <strong>485 101 401</strong>
          </a>
        </header>

        <div className="hero-visual" id="top">
          <img
            src="/hero.webp"
            alt="Bydlení v Liberci a krajina pod Ještědem"
            className="hero-image"
          />
          <div className="parcel-lines" aria-hidden="true">
            <span className="parcel parcel-a" />
            <span className="parcel parcel-b" />
            <span className="parcel parcel-c" />
            <span className="map-point">LBC</span>
          </div>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Reality od Ještědu po Český ráj</p>
          <h1 id="hero-title">
            Známe cenu
            <span>zdejšího bydlení.</span>
          </h1>
          <p className="hero-lead">
            Hledáte byt, dům nebo pozemek? Provedeme vás nabídkou v Liberci
            a okolí bez zbytečného kroužení.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#nabidka">
              Prohlédnout nabídku
              <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-secondary" href="tel:+420485101401">
              Zavolat 485 101 401
            </a>
          </div>
          <address className="hero-address">
            <span>Kancelář v centru</span>
            Železná 255, Liberec
          </address>
        </div>
      </section>

      <section className="offers-section" id="nabidka" aria-labelledby="offers-title">
        <div className="section-heading">
          <p className="eyebrow">Aktuálně v nabídce</p>
          <h2 id="offers-title">Místa, která stojí za návštěvu</h2>
          <p>
            Vybrané nemovitosti z Liberce, Jizerských hor a Českého ráje.
            U každé vám řekneme podstatné ještě před prohlídkou.
          </p>
        </div>

        <div className="offer-layout">
          <figure className="offer-image-wrap">
            <img
              src="/section-1.webp"
              alt="Nemovitost z aktuální nabídky Patria Reality"
              className="section-image"
            />
            <figcaption>
              <span>Nově</span>
              Výběr nemovitostí v našem regionu
            </figcaption>
          </figure>

          <div className="offer-list">
            {offers.map((offer) => (
              <article className="offer-row" key={offer.title}>
                <span className="offer-type">{offer.type}</span>
                <h3>{offer.title}</h3>
                <strong>{offer.price}</strong>
                <span className="offer-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
            <a className="text-link" href="mailto:info@patriareality.cz?subject=Mám zájem o nabídku nemovitostí">
              Poslat mi vhodné nabídky <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="trust-section" id="prodej" aria-labelledby="trust-title">
        <div className="trust-image-wrap">
          <img
            src="/section-2.webp"
            alt="Osobní jednání s makléřem Patria Reality v Liberci"
            className="section-image"
          />
          <div className="image-note">
            <strong>Železná 255</strong>
            <span>Jsme vám nablízku v centru Liberce.</span>
          </div>
        </div>

        <div className="trust-content">
          <p className="eyebrow">Když prodáváte</p>
          <h2 id="trust-title">Váš byt není položka v katalogu.</h2>
          <p className="trust-intro">
            Nejdřív se přijedeme podívat. Zohledníme stav, ulici i reálnou
            poptávku v okolí a navrhneme cenu, kterou umíme obhájit.
          </p>

          <div className="service-strip" aria-label="Služby při prodeji nemovitosti">
            <span>Odhad ceny</span>
            <span>Prezentace</span>
            <span>Prohlídky</span>
            <span>Smlouvy a financování</span>
          </div>

          <div className="team-block">
            <h3>Čtyři lidé, se kterými mluvíte přímo</h3>
            <div className="team-grid">
              {team.map((person) => (
                <article className="person" key={person.name}>
                  <span className="person-mark" aria-hidden="true">
                    {person.name.split(" ").slice(-1)[0].charAt(0)}
                  </span>
                  <div>
                    <h4>{person.name}</h4>
                    <a href={person.href}>{person.phone}</a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <a className="button button-primary" href="mailto:info@patriareality.cz?subject=Chci prodat nebo pronajmout nemovitost">
            Domluvit odhad nemovitosti
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}

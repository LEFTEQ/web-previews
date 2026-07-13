const tripTypes = [
  {
    code: "PRG → EVROPA",
    title: "Eurovíkendy",
    text: "Řím, Paříž, Athény nebo Edinburgh. Krátký únik s odletem z Prahy a hotelem v jednom balíčku.",
    meta: "2–4 noci · letecky",
  },
  {
    code: "AUTO → JIH",
    title: "Moře vlastní cestou",
    text: "Chorvatsko bez pevného odletu. Vyberete si termín, apartmán i tempo cesty podle sebe.",
    meta: "Istrie a Dalmácie",
  },
  {
    code: "PRG → DÁL",
    title: "Exotika",
    text: "Maledivy, Thajsko nebo Mexiko s ověřeným ubytováním a podporou před cestou i během ní.",
    meta: "7–14 nocí · letecky",
  },
];

export default function Page() {
  return (
    <main className="ft-page">
      <section className="ft-hero" aria-labelledby="hero-title">
        <img
          className="ft-hero__image"
          src="/hero.webp"
          alt="Barevná mozaika a architektura Parku Güell v Barceloně"
          width="1920"
          height="1280"
          fetchPriority="high"
        />
        <div className="ft-hero__shade" aria-hidden="true" />

        <header className="ft-nav">
          <a className="ft-wordmark" href="#top" aria-label="Flexi Tours, úvodní stránka">
            <span>flexi</span>
            <strong>tours</strong>
            <i aria-hidden="true">↗</i>
          </a>
          <div className="ft-nav__actions">
            <span className="ft-nav__place">Cestovní kancelář · Praha</span>
            <a className="ft-phone" href="tel:+420277277988">277 277 988</a>
          </div>
        </header>

        <div className="ft-hero__content" id="top">
          <p className="ft-kicker">Z Prahy tam, kde starosti ztrácejí signál</p>
          <h1 id="hero-title">
            Dovolená se má
            <span>přizpůsobit vám.</span>
          </h1>
          <p className="ft-hero__intro">
            Vyberte si hotový zájezd, nebo nám řekněte svou představu. Najdeme cestu, která sedí vašemu času, rozpočtu i tempu.
          </p>

          <form className="ft-search" action="#nabidka">
            <label className="ft-field ft-field--destination">
              <span>Kam chcete cestovat?</span>
              <input name="destination" type="text" placeholder="Třeba Řím, Korfu nebo Maledivy" />
            </label>
            <label className="ft-field">
              <span>Kdy chcete vyrazit?</span>
              <input name="date" type="text" placeholder="Vyberte termín" />
            </label>
            <label className="ft-field">
              <span>Kdo cestuje?</span>
              <select name="travellers" defaultValue="2-0">
                <option value="2-0">2 dospělí</option>
                <option value="2-1">2 dospělí, 1 dítě</option>
                <option value="1-0">1 dospělý</option>
                <option value="family">Rodina nebo skupina</option>
              </select>
            </label>
            <button type="submit">Najít dovolenou <span aria-hidden="true">→</span></button>
          </form>
        </div>

        <div className="ft-route" aria-hidden="true">
          <span className="ft-route__origin">PRG</span>
          <span className="ft-route__line"><i /></span>
          <span className="ft-route__destination">KAMKOLI</span>
        </div>
      </section>

      <section className="ft-offer" id="nabidka" aria-labelledby="offer-title">
        <div className="ft-section-head">
          <div>
            <p className="ft-eyebrow">Tři způsoby, jak odjet</p>
            <h2 id="offer-title">Vyberte si podle toho, jak chcete cestovat.</h2>
          </div>
          <p>
            Žádné nekonečné katalogy. Začněte typem cesty a konkrétní nabídku doladíme podle vašich požadavků.
          </p>
        </div>

        <div className="ft-offer__layout">
          <figure className="ft-offer__visual">
            <img
              src="/section-1.webp"
              alt="Pobřežní destinace pro letní dovolenou u moře"
              width="1200"
              height="900"
              loading="lazy"
            />
            <figcaption>
              <span>Tip z Prahy</span>
              <strong>Prodloužený víkend bez složitého plánování</strong>
            </figcaption>
          </figure>

          <div className="ft-trip-list">
            {tripTypes.map((trip) => (
              <article className="ft-trip" key={trip.title}>
                <div className="ft-trip__top">
                  <span>{trip.code}</span>
                  <span aria-hidden="true">↗</span>
                </div>
                <h3>{trip.title}</h3>
                <p>{trip.text}</p>
                <small>{trip.meta}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ft-trust" aria-labelledby="trust-title">
        <div className="ft-trust__copy">
          <p className="ft-eyebrow">Pražská kancelář, lidská domluva</p>
          <h2 id="trust-title">Neprodáváme jen termín. Hlídáme, aby cesta dávala smysl.</h2>
          <p className="ft-trust__lead">
            Když si nejste jistí odletem, hotelem nebo stravou, proberete to s člověkem, který nabídku zná. Před rezervací víte, co je v ceně a odkud skutečně odlétáte.
          </p>

          <dl className="ft-facts">
            <div>
              <dt>Odlety</dt>
              <dd>Praha, Vídeň i Bratislava — vždy uvedené přímo u nabídky.</dd>
            </div>
            <div>
              <dt>Výběr</dt>
              <dd>Letecké pobyty, eurovíkendy, exotika i ubytování s vlastní dopravou.</dd>
            </div>
            <div>
              <dt>Pomoc</dt>
              <dd>Konkrétní doporučení po telefonu na čísle 277 277 988.</dd>
            </div>
          </dl>

          <div className="ft-contact-line">
            <span>Máte vlastní představu?</span>
            <a href="mailto:info@flexitours.cz">Napsat na info@flexitours.cz <span aria-hidden="true">→</span></a>
          </div>
        </div>

        <figure className="ft-trust__visual">
          <img
            src="/section-2.webp"
            alt="Cestovatelé objevují vybranou dovolenkovou destinaci"
            width="1200"
            height="1500"
            loading="lazy"
          />
          <figcaption>
            <span aria-hidden="true">✦</span>
            <p><strong>Flexibilně už od prvního kroku.</strong> Termín, doprava i délka pobytu podle vás.</p>
          </figcaption>
        </figure>
      </section>
    </main>
  );
}

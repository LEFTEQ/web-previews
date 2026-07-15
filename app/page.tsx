export default function Page() {
  return (
    <main className="page">
      <header className="nav">
        <a className="wordmark" href="#" aria-label="Komíny Dobrý tah, úvod">
          <span className="wordmark__eyebrow">Komíny</span>
          <span className="wordmark__name">Dobrý&nbsp;tah</span>
        </a>
        <a className="nav__cta" href="tel:+420602460336">602&nbsp;460&nbsp;336</a>
      </header>

      <section className="hero">
        <img
          className="hero__img"
          src="/hero.webp"
          alt="Kominík na střeše pražského domu při čištění komína"
          width={1600}
          height={1000}
          loading="eager"
        />
        <div className="hero__scrim" />

        <div className="hero__inner">
          <p className="eyebrow eyebrow--light">Kominictví v Praze · od 2016</p>
          <h1 className="hero__title">Aby komín<br />táhl, jak&nbsp;má.</h1>
          <p className="hero__lead">
            Revize, čištění a montáž spalinových cest v Praze a okolí. Přijedeme,
            zkontrolujeme a vystavíme revizní zprávu, kterou uzná pojišťovna i&nbsp;hasiči.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="tel:+420602460336">Zavolat 602 460 336</a>
            <a className="btn btn--ghost" href="mailto:info@kominydobrytah.cz">Napsat e-mail</a>
          </div>
        </div>

        <div className="stamp" aria-hidden="true">
          <span className="stamp__ring">
            <span className="stamp__top">Revizní zpráva</span>
            <span className="stamp__big">SPLNĚNO</span>
            <span className="stamp__bot">Spalinová cesta v pořádku</span>
          </span>
        </div>
      </section>

      <section className="services" aria-labelledby="services-title">
        <div className="services__head">
          <p className="eyebrow">Naše služby</p>
          <h2 id="services-title" className="section-title">Co pro váš komín uděláme</h2>
          <p className="section-lead">
            Od nové stavby po každoroční kontrolu — celou spalinovou cestu vyřešíme
            na jednu partu, s revizní zprávou na konci.
          </p>
        </div>

        <div className="services__grid">
          <figure className="services__media">
            <img
              src="/section-1.webp"
              alt="Detail montáže nerezové komínové vložky"
              width={1200}
              height={1500}
              loading="lazy"
            />
            <figcaption>Nerezové vložkování s atestem — montujeme podle platných norem.</figcaption>
          </figure>

          <ol className="cards">
            <li className="card">
              <span className="card__no">01</span>
              <h3 className="card__title">Montáž komínů</h3>
              <p className="card__text">
                Postavíme nový komín podle platných norem a předáme vám revizní zprávu
                spalinové cesty. Materiál i papírování bereme na sebe.
              </p>
            </li>
            <li className="card">
              <span className="card__no">02</span>
              <h3 className="card__title">Rekonstrukce a vložkování</h3>
              <p className="card__text">
                Starý komín zprovozníme — vyvložkujeme nerezem, sanujeme a opravíme
                zdivo. Používáme jen materiály s atestem.
              </p>
            </li>
            <li className="card">
              <span className="card__no">03</span>
              <h3 className="card__title">Krbová kamna</h3>
              <p className="card__text">
                Usadíme kamna, napojíme je na komín, utěsníme a bezpečně zprovozníme.
                Pak už jen přiložíte a topíte.
              </p>
            </li>
            <li className="card">
              <span className="card__no">04</span>
              <h3 className="card__title">Kontroly a revize</h3>
              <p className="card__text">
                Pravidelná kontrola spalinové cesty jednou ročně. Najdeme závadu dřív,
                než způsobí požár, a rovnou ji opravíme.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="trust" aria-labelledby="trust-title">
        <div className="trust__inner">
          <div className="trust__text">
            <p className="eyebrow eyebrow--light">O nás</p>
            <h2 id="trust-title" className="section-title section-title--light">
              Osm let na pražských střechách
            </h2>
            <p className="trust__body">
              Jsme malá parta kominíků z Vršovic. Sídlíme v Kodaňské a jezdíme po celé
              Praze i do okolních obcí — k rodinným domům, chatám i do bytových domů,
              které potřebují revizi celého domu najednou.
            </p>
            <p className="trust__body">
              Přijedeme v domluvený čas, uklidíme po sobě a revizní zprávu vám pošleme
              e-mailem, ať ji máte hned po ruce pro pojišťovnu.
            </p>
            <blockquote className="quote">
              „Přijeli druhý den, komíny vyčistili a revizní zprávu poslali e-mailem
              ještě týž večer.“
              <cite>— správce bytového domu, Praha 10</cite>
            </blockquote>
          </div>

          <figure className="trust__media">
            <img
              src="/section-2.webp"
              alt="Kominíci Dobrý tah při kontrole komína na střeše"
              width={1200}
              height={1400}
              loading="lazy"
            />
          </figure>
        </div>

        <ul className="stats">
          <li className="stat">
            <span className="stat__num">8</span>
            <span className="stat__label">let s vlastní partou v Praze</span>
          </li>
          <li className="stat">
            <span className="stat__num">400+</span>
            <span className="stat__label">komínů zkontrolujeme každý rok</span>
          </li>
          <li className="stat">
            <span className="stat__num">27</span>
            <span className="stat__label">let řemesla za zády mistra</span>
          </li>
        </ul>
      </section>
    </main>
  );
}

import React from "react";

export default function Page() {
  return (
    <main className="site">
      {/* HERO */}
      <header className="hero">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Kamiony Lašek na logistickém areálu u dálnice D3 v Českých Budějovicích"
            className="hero__img"
          />
          <div className="hero__scrim" aria-hidden="true" />
        </div>

        <nav className="topbar" aria-label="Hlavní navigace">
          <a className="wordmark" href="#" aria-label="Lašek — úvod">
            <span className="wordmark__name">LAŠEK</span>
            <span className="wordmark__sub">spol. s r.o.</span>
          </a>
          <div className="topbar__links">
            <a href="#sluzby">Služby</a>
            <a href="#firma">O firmě</a>
            <a className="topbar__call" href="tel:+420387000000">Zavolat</a>
          </div>
        </nav>

        <div className="hero__inner">
          <p className="hero__eyebrow">České Budějovice · exit D3 · od roku 1990</p>
          <h1 className="hero__title">
            Váš termín<br />
            je náš cíl.
          </h1>
          <p className="hero__lead">
            Rodinná autodoprava a logistika, která vznikla od nuly poctivou
            prací. Nákladní přeprava, tři vlastní areály a sklady o rozloze
            45&nbsp;000&nbsp;m² kousek od dálnice.
          </p>
          <div className="hero__cta">
            <a className="btn btn--solid" href="tel:+420387000000">Zavolat dispečink</a>
            <a className="btn btn--ghost" href="#sluzby">Prohlédnout služby</a>
          </div>

          <dl className="hero__stats" aria-label="Firma v číslech">
            <div>
              <dt>Vlastní areály</dt>
              <dd>3</dd>
            </div>
            <div>
              <dt>Plocha areálů</dt>
              <dd>85 000 m²</dd>
            </div>
            <div>
              <dt>Zkušenost</dt>
              <dd>od 1990</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* SLUŽBY */}
      <section id="sluzby" className="services" aria-labelledby="services-title">
        <div className="section-head">
          <p className="section-head__kicker">Co pro vás vozíme a řešíme</p>
          <h2 id="services-title" className="section-head__title">
            Komplexní logistické centrum pod jednou střechou
          </h2>
        </div>

        <div className="services__grid">
          <article className="card card--wide">
            <img
              src="/section-1.webp"
              alt="Skladová hala a manipulační technika v areálu Lašek"
              className="card__img"
            />
            <div className="card__body">
              <span className="card__tag">Areály u D3</span>
              <h3 className="card__title">Skladování a logistika</h3>
              <p className="card__text">
                Tři vlastní areály v Českých Budějovicích poblíž exitu na D3,
                sklady o rozloze 45&nbsp;000&nbsp;m² plnící přísné standardy
                vašich zákazníků. Rezervace časových oken pro nakládku i
                vykládku v areálu Hůry.
              </p>
            </div>
          </article>

          <article className="card">
            <div className="card__num">01</div>
            <h3 className="card__title">Nákladní doprava</h3>
            <p className="card__text">
              „Váš termín je náš cíl.“ Přesně to vystihuje náš přístup k
              nákladní i nadměrné přepravě po celé ČR i Evropě.
            </p>
          </article>

          <article className="card">
            <div className="card__num">02</div>
            <h3 className="card__title">Sklápěcí přeprava</h3>
            <p className="card__text">
              Naše historicky první oddělení. Od roku 1990 spolehlivě vozíme
              sypké směsi pro výstavbu jihočeských silnic.
            </p>
          </article>

          <article className="card">
            <div className="card__num">03</div>
            <h3 className="card__title">Mytí průmyslových obalů</h3>
            <p className="card__text">
              Splňujeme nejpřísnější požadavky na kvalitu mytí obalů pro
              automobilový průmysl.
            </p>
          </article>

          <article className="card">
            <div className="card__num">04</div>
            <h3 className="card__title">Čerpací stanice</h3>
            <p className="card__text">
              PHM výhradně od renomovaných dodavatelů OMV a Unipetrol.
              Natural&nbsp;95, Diesel, HVO100 i AdBlue.
            </p>
          </article>
        </div>

        <div className="fuel" aria-label="Aktuální ceny pohonných hmot">
          <p className="fuel__lead">Ceny u naší čerpací stanice</p>
          <ul className="fuel__list">
            <li><span>Natural 95</span><strong>38,50 Kč/l</strong></li>
            <li><span>Diesel</span><strong>34,50 Kč/l</strong></li>
            <li><span>HVO100 Diesel</span><strong>45,00 Kč/l</strong></li>
            <li><span>AdBlue</span><strong>15,00 Kč/l</strong></li>
          </ul>
        </div>
      </section>

      {/* O FIRMĚ */}
      <section id="firma" className="about" aria-labelledby="about-title">
        <div className="about__media">
          <img
            src="/section-2.webp"
            alt="Vozový park firmy Lašek připravený k výjezdu"
            className="about__img"
          />
        </div>
        <div className="about__body">
          <p className="section-head__kicker">Kdo jsme a co ctíme</p>
          <h2 id="about-title" className="about__title">
            Rodinná firma, která vznikla „od nuly“
          </h2>
          <p className="about__text">
            Jsme hrdí, že naše společnost vznikla poctivou prací — bez
            privatizace nebo restituce — a zařadila se mezi přední
            poskytovatele komplexních přepravních a logistických služeb v
            České republice. Jsme flexibilní, agilní a neustále se vzděláváme.
          </p>
          <p className="about__text">
            Ctíme tradici a hodnoty. Někteří z kolegů jsou s námi už více než
            20 let. „Pokud k nám přijdeš pracovat, máš šanci se hodně naučit,
            protože logistika je součástí praktického života.“
          </p>

          <ul className="badges" aria-label="Proč nám zákazníci věří">
            <li>Certifikace ISO</li>
            <li>Vlastní vozový park</li>
            <li>Dispečink na telefonu</li>
            <li>Jižní Čechy · celá ČR</li>
          </ul>

          <div className="about__contact">
            <a className="btn btn--solid" href="tel:+420387000000">Zavolat dispečink</a>
            <a className="btn btn--ghost" href="mailto:doprava@lasek.cz">Napsat e-mail</a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function Page() {
  return (
    <main>
      <a className="skip-link" href="#obsah">
        Přeskočit na obsah
      </a>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__image" aria-hidden="true">
          <img
            src="/hero.webp"
            alt=""
            width="1600"
            height="1100"
            fetchPriority="high"
          />
        </div>

        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="CZ AD dopravní – úvod">
            <span className="wordmark__route">CZ</span>
            <strong>AD</strong>
            <span className="wordmark__name">dopravní</span>
          </a>

          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#nabidka">Kam jedeme</a>
            <a href="#o-nas">Proč s námi</a>
            <a className="site-nav__phone" href="tel:+420604731639">
              Zavolat
            </a>
          </nav>
        </header>

        <div className="hero__content" id="top">
          <p className="eyebrow">Cestovní a dopravní kancelář · Pardubice</p>
          <h1 id="hero-title">
            Z Pardubic
            <span>rovnou za zážitky.</span>
          </h1>
          <p className="hero__lead">
            Víkend u moře, školní výlet nebo autobus pro celý tým. Vyberete cíl,
            my připravíme cestu i zkušeného řidiče.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="tel:+420604731639">
              Zavolat +420 604 731 639
            </a>
            <a className="button button--text" href="#nabidka">
              Prohlédnout možnosti
            </a>
          </div>
        </div>

        <div className="route-board" aria-label="Ukázková trasa z Pardubic k moři">
          <div className="route-board__label">Přímá víkendová linka</div>
          <div className="route-board__track">
            <span className="route-board__stop route-board__stop--start">
              <i aria-hidden="true" />
              Pardubice
            </span>
            <span className="route-board__line" aria-hidden="true" />
            <span className="route-board__stop">
              <i aria-hidden="true" />
              Caorle
            </span>
            <span className="route-board__line" aria-hidden="true" />
            <span className="route-board__stop route-board__stop--end">
              <i aria-hidden="true" />
              Bibione
            </span>
          </div>
          <p>Od května do září · autobusový zájezd · bez přestupování</p>
        </div>
      </section>

      <div id="obsah">
        <section className="offer" id="nabidka" aria-labelledby="offer-title">
          <div className="section-heading">
            <p className="eyebrow">Kam vás vezmeme</p>
            <h2 id="offer-title">Cesta podle vašich plánů</h2>
            <p>
              Od hotového víkendového zájezdu po autobus na míru pro školu,
              sportovní oddíl, firmu nebo cestovní kancelář.
            </p>
          </div>

          <div className="offer__layout">
            <figure className="offer__visual">
              <img
                src="/section-1.webp"
                alt="Autobus CZ AD připravený na cestu se skupinou cestujících"
                width="1100"
                height="850"
                loading="lazy"
              />
              <figcaption>Odjezd z Pardubic, cíl vybíráte vy.</figcaption>
            </figure>

            <div className="service-list">
              <article className="service-card">
                <p className="service-card__type">Hotový program</p>
                <h3>Víkend u Jadranu</h3>
                <p>
                  Přímé autobusové zájezdy do Bibione a Caorle. Moře, místní trhy
                  i volný čas bez řešení parkování a dálničních poplatků.
                </p>
                <span className="service-card__detail">Květen–září</span>
              </article>

              <article className="service-card">
                <p className="service-card__type">Vlastní trasa</p>
                <h3>Autobus pro vaši skupinu</h3>
                <p>
                  Bezpečná a pohodlná přeprava škol, klubů, firem i cestovních
                  kanceláří. Kapacitu a trasu sladíme s vaším programem.
                </p>
                <span className="service-card__detail">Až 78 cestujících</span>
              </article>

              <article className="service-card">
                <p className="service-card__type">Za hranice i po Česku</p>
                <h3>Zájezd na přání</h3>
                <p>
                  Řekněte nám termín, počet cestujících a místo. Připravíme
                  dopravu pro jednodenní výlet i vícedenní cestu do zahraničí.
                </p>
                <span className="service-card__detail">Nabídka na míru</span>
              </article>
            </div>
          </div>
        </section>

        <section className="trust" id="o-nas" aria-labelledby="trust-title">
          <div className="trust__visual">
            <img
              src="/section-2.webp"
              alt="Profesionální řidič v interiéru komfortního zájezdového autobusu"
              width="1200"
              height="1000"
              loading="lazy"
            />
            <div className="trust__caption">
              <span>Více než 20 let na cestách</span>
              <small>Z Pardubic po Česku i Evropě</small>
            </div>
          </div>

          <div className="trust__content">
            <p className="eyebrow">Klid začíná před odjezdem</p>
            <h2 id="trust-title">Autobus přijede připravený. Řidič zná svou práci.</h2>
            <p className="trust__intro">
              U skupinové cesty rozhodují maličkosti: čistý vůz, přesný příjezd,
              vstřícné jednání a člověk za volantem, na kterého je spoleh. Právě
              na tom si v CZ AD dopravní zakládáme.
            </p>

            <dl className="proof-list">
              <div>
                <dt>Bezpečí</dt>
                <dd>Profesionální řidiči s dlouholetou praxí a pečlivě nachystané vozy.</dd>
              </div>
              <div>
                <dt>Pohodlí</dt>
                <dd>Plně vybavené autobusy pro malé skupiny i výpravy do 78 osob.</dd>
              </div>
              <div>
                <dt>Domluva</dt>
                <dd>Konkrétní nabídku řešíte přímo s pardubickou dopravní kanceláří.</dd>
              </div>
            </dl>

            <aside className="contact-note" aria-label="Kontakt na dopravní kancelář">
              <span>Potřebujete ověřit termín nebo kapacitu?</span>
              <a href="tel:+420604731639">+420 604 731 639</a>
              <a href="mailto:info@czaddopravni.cz">info@czaddopravni.cz</a>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}

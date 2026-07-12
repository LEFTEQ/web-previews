export default function Page() {
  const products = [
    {
      label: "Pro rodinný dům",
      title: "Plechové krytiny",
      text: "Lehká krytina pro novostavbu i rekonstrukci. Vybereme profil, povrch a odstín podle sklonu střechy i charakteru domu.",
      detail: "Roof · Grande · Trend Wave · Rombo · Rapid",
    },
    {
      label: "Pro hotovou střechu",
      title: "Okapy a příslušenství",
      text: "Hřebenáče, lemování, střešní okna AURA a hluboké žlaby NIAGARA tvoří jeden sladěný systém bez improvizovaných detailů.",
      detail: "NIAGARA · AURA · systémové prvky",
    },
    {
      label: "Pro haly a opláštění",
      title: "Trapézové profily",
      text: "Pevné a lehké profily pro střechy, fasády i konstrukční části zemědělských, průmyslových a menších užitkových staveb.",
      detail: "Střechy · fasády · konstrukce",
    },
  ];

  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero__image"
          src="/hero.webp"
          alt="Detail odolné plechové střechy SATJAM v severočeské krajině"
        />
        <div className="hero__shade" aria-hidden="true" />
        <div className="roof-seams" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <header className="topbar">
          <a className="wordmark" href="#zacatek" aria-label="SATJAM — začátek stránky">
            <span>SAT</span><i aria-hidden="true" /><span>JAM</span>
          </a>
          <nav className="nav" aria-label="Hlavní navigace">
            <a href="#nabidka">Krytina a systémy</a>
            <a href="#jistota">Proč SATJAM</a>
            <a className="nav__phone" href="tel:+420596223511">+420 596 223 511</a>
          </nav>
        </header>

        <div className="hero__content" id="zacatek">
          <p className="eyebrow">Plechové střechy · Ústí nad Labem a severní Čechy</p>
          <h1 id="hero-title">
            Střecha,
            <span>která unese sever.</span>
          </h1>
          <div className="hero__bottom">
            <p>
              Lehká ocelová a hliníková krytina, přesné klempířské prvky a kompletní
              odvodnění. Pomůžeme vám sestavit střechu pro konkrétní dům — ne jen vybrat plech.
            </p>
            <a className="button button--light" href="tel:+420596223511">
              Zavolat pro výběr střechy
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <p className="hero__material" aria-hidden="true">OCEL / HLINÍK / SEVER</p>
      </section>

      <section className="offer" id="nabidka" aria-labelledby="offer-title">
        <div className="section-intro">
          <p className="eyebrow eyebrow--dark">Jedna střecha, jeden sladěný systém</p>
          <h2 id="offer-title">Od krytiny až po poslední žlab.</h2>
          <p className="section-intro__copy">
            U rekonstrukce hlídáme nízkou hmotnost. U novostavby vzhled, sklon a návaznost
            detailů. V obou případech dostanete řešení, které k sobě technicky patří.
          </p>
        </div>

        <div className="offer__grid">
          <figure className="profile-figure">
            <img
              src="/section-1.webp"
              alt="Plechová střešní krytina SATJAM s výrazným profilováním a přesnými spoji"
            />
            <figcaption>
              <span>Povrch střechy</span>
              <strong>Profil drží vodu venku. Povrch drží barvu.</strong>
            </figcaption>
          </figure>

          <div className="product-list">
            {products.map((product) => (
              <article className="product" key={product.title}>
                <p className="product__label">{product.label}</p>
                <h3>{product.title}</h3>
                <p>{product.text}</p>
                <small>{product.detail}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" id="jistota" aria-labelledby="trust-title">
        <div className="trust__visual">
          <img
            src="/section-2.webp"
            alt="Dokončená moderní plechová střecha s čistým napojením hřebene a okapů"
          />
          <div className="trust__stamp" aria-label="Ocenění Česká kvalita a Zlatá taška">
            <span>Ověřeno oborem</span>
            <strong>Česká<br />kvalita</strong>
            <small>Zlatá taška</small>
          </div>
        </div>

        <div className="trust__content">
          <p className="eyebrow eyebrow--dark">Jistota nad hlavou</p>
          <h2 id="trust-title">Detail se pozná až v dešti.</h2>
          <p className="trust__lead">
            Střecha není jen plocha krytiny. Rozhodují prostupy, odvětrání, bezpečnostní
            prvky i správně dimenzovaný okap. Proto SATJAM dodává ucelené řešení a odbornou
            podporu pro výběr i montáž.
          </p>

          <dl className="proof-list">
            <div>
              <dt>Pro váš dům</dt>
              <dd>Doporučení krytiny podle sklonu, konstrukce a místních podmínek v Ústeckém kraji.</dd>
            </div>
            <div>
              <dt>Pro dlouhou službu</dt>
              <dd>Systémové lemování, odvětrání a kotvení omezují chyby, které se projeví až po letech.</dd>
            </div>
            <div>
              <dt>Pro klidný výběr</dt>
              <dd>Konkrétní skladba, dostupné odstíny a příslušenství vysvětlené bez stavebního žargonu.</dd>
            </div>
          </dl>

          <div className="contact-line">
            <div>
              <span>Odborná linka</span>
              <a href="tel:+420596223511">+420 596 223 511</a>
            </div>
            <div>
              <span>E-mail</span>
              <a href="mailto:satjam@satjam.cz">satjam@satjam.cz</a>
            </div>
            <p>Centrála: Michalská 1032/21, Ostrava</p>
          </div>
        </div>
      </section>
    </main>
  );
}

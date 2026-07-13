export default function Page() {
  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero__image"
          src="/hero.webp"
          alt="Zakázková výroba svařované ocelové konstrukce v ostravské dílně VNP - MONT"
        />
        <div className="hero__shade" aria-hidden="true" />

        <header className="topbar">
          <a className="wordmark" href="#zacatek" aria-label="VNP - MONT, úvodní stránka">
            <span className="wordmark__vnp">VNP</span>
            <span className="wordmark__cut" aria-hidden="true" />
            <span className="wordmark__mont">MONT</span>
          </a>

          <nav className="nav" aria-label="Hlavní navigace">
            <a href="#vyroba">Co vyrábíme</a>
            <a href="#jistota">Proč VNP - MONT</a>
          </nav>

          <a className="topbar__call" href="tel:+420603721738">
            <span>Zavolat do dílny</span>
            <strong>603 721 738</strong>
          </a>
        </header>

        <div className="hero__content" id="zacatek">
          <p className="eyebrow">Zámečnická výroba · Ostrava–Mariánské Hory</p>
          <div className="hero__plate">
            <span className="weld-seam" aria-hidden="true" />
            <h1 id="hero-title">
              Ocel, která
              <span>sedí na míru.</span>
            </h1>
            <p>
              Vyrábíme atypické svařované konstrukce a zámečnické prvky podle vašeho výkresu,
              zadání nebo konkrétní situace v provozu.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="tel:+420603721738">
                Zavolat: 603 721 738
              </a>
              <a className="text-link" href="mailto:info@vnp-mont.cz">
                Poslat zadání e-mailem
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="hero__status" aria-label="Provozní informace">
          <span className="status-dot" aria-hidden="true" />
          <span>Zakázková výroba v provozu</span>
          <strong>Po–Pá 7:00–15:00</strong>
        </div>
      </section>

      <section className="production" id="vyroba" aria-labelledby="production-title">
        <div className="section-heading">
          <p className="section-label">Výroba podle skutečného zadání</p>
          <h2 id="production-title">Od jednoho atypu po konstrukci pro celý provoz.</h2>
          <p>
            Nevybíráte z katalogu. Rozměry, materiál i způsob provedení přizpůsobíme tomu,
            kde a jak bude výrobek sloužit.
          </p>
        </div>

        <div className="production__layout">
          <figure className="steel-photo steel-photo--wide">
            <img
              src="/section-1.webp"
              alt="Svařování atypické ocelové konstrukce ve výrobě VNP - MONT"
            />
            <figcaption>
              <span>Výroba v Ostravě</span>
              <span>Suderova 2079/22</span>
            </figcaption>
          </figure>

          <div className="service-list" aria-label="Nabídka zámečnické výroby">
            <article className="service-item">
              <h3>Svařované konstrukce</h3>
              <p>
                Nosné rámy, podpěry, plošiny a další průmyslové celky vyrobené podle výkresové
                dokumentace a požadavků vašeho provozu.
              </p>
              <span>Průmyslová výroba</span>
            </article>

            <article className="service-item">
              <h3>Atypické zámečnické prvky</h3>
              <p>
                Kryty, držáky, rámy, schodiště, zábradlí i jednotlivé díly tam, kde běžné řešení
                rozměrem nebo funkcí nestačí.
              </p>
              <span>Výroba na míru</span>
            </article>

            <article className="service-item">
              <h3>Kusová i opakovaná výroba</h3>
              <p>
                Vyrobíme jeden originál i opakovanou sérii. Předem si vyjasníme materiál,
                návaznosti a termín, aby hotový díl zapadl bez improvizace.
              </p>
              <span>Podle vašeho zadání</span>
            </article>
          </div>
        </div>
      </section>

      <section className="trust" id="jistota" aria-labelledby="trust-title">
        <div className="trust__visual">
          <figure className="steel-photo steel-photo--portrait">
            <img
              src="/section-2.webp"
              alt="Detail přesného zpracování ocelového výrobku v dílně VNP - MONT"
            />
          </figure>
          <div className="since-mark" aria-label="Firma působí od roku 1997">
            <span>Vyrábíme v Ostravě od</span>
            <strong>1997</strong>
          </div>
        </div>

        <div className="trust__content">
          <p className="section-label">Jistota za každým svarem</p>
          <h2 id="trust-title">Domluvíte se přímo s lidmi, kteří výrobu vedou.</h2>
          <p className="trust__lead">
            VNP - MONT je ostravská zámečnická firma zaměřená na poctivou zakázkovou výrobu.
            Zadání řešíme věcně: co má výrobek vydržet, kam musí pasovat a kdy ho potřebujete.
          </p>

          <dl className="fact-grid">
            <div>
              <dt>Odpovědná osoba</dt>
              <dd>Marek Výtisk st., jednatel</dd>
            </div>
            <div>
              <dt>Dílna a sídlo</dt>
              <dd>Suderova 2079/22, Ostrava–Mariánské Hory</dd>
            </div>
            <div>
              <dt>Ověřitelná firma</dt>
              <dd>IČ 25363620 · Krajský soud v Ostravě, C 15373</dd>
            </div>
            <div>
              <dt>Aktuální kontakt</dt>
              <dd>
                <a href="mailto:info@vnp-mont.cz">info@vnp-mont.cz</a>
              </dd>
            </div>
          </dl>

          <blockquote>
            <p>„Každý výrobek je originál. Rozhoduje, že přesně splní svůj účel.“</p>
            <cite>VNP - MONT, zakázková výroba z oceli</cite>
          </blockquote>
        </div>
      </section>

      <a className="mobile-call" href="tel:+420603721738" aria-label="Zavolat do VNP - MONT na číslo 603 721 738">
        <span aria-hidden="true">☎</span>
        Zavolat do dílny
      </a>
    </main>
  );
}

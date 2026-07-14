export default function Page() {
  const products = [
    {
      label: "Skladové čočky",
      title: "Rychle dostupné čočky pro každodenní zakázky",
      text: "Nová kategorie skladových čoček s nejvyšší propustností světla. Přehledné parametry vám usnadní výběr správné varianty pro zákazníka.",
      meta: "Aktuální nabídka 2026",
      href: "/objednavka",
      action: "Objednat online",
    },
    {
      label: "Online katalog",
      title: "Všechny parametry na jednom místě",
      text: "Porovnejte materiály, indexy, úpravy i dostupné průměry bez hledání ve starých tabulkách. Nový katalog je platný od 1. 6. 2026.",
      meta: "Platnost od 1. 6. 2026",
      href: "/katalog",
      action: "Otevřít katalog",
    },
  ];

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Optika Čivice, úvod">
            <span className="wordmark-mark" aria-hidden="true" />
            <span>
              <strong>Čivice</strong>
              <small>čočky pro optiky</small>
            </span>
          </a>

          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#nabidka">Nabídka</a>
            <a href="#zazemi">O nás</a>
            <a className="nav-contact" href="tel:+420466798303">Zavolat</a>
          </nav>
        </header>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Optická laboratoř · Pardubice–Čivice</p>
            <h1 id="hero-title">
              Čočky, které
              <span>propustí víc.</span>
            </h1>
            <p className="hero-intro">
              Dodáváme brýlové čočky a odbornou podporu optikám po celé České republice. Vyberte parametry v aktuálním katalogu a objednávku vyřešte rovnou online.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="/objednavka">Objednat čočky online</a>
              <a className="text-link" href="/katalog">Katalog platný od 1. 6. 2026 <span aria-hidden="true">↗</span></a>
            </div>
            <p className="professional-note">
              <span aria-hidden="true">i</span>
              Odborný obsah je určen pracovníkům ve zdravotnictví a registrovaným obchodním partnerům.
            </p>
          </div>

          <div className="hero-visual" aria-label="Detail brýlové čočky s antireflexními odlesky">
            <img src="/hero.webp" alt="Detail čiré brýlové čočky s barevnými antireflexními odlesky" />
            <div className="lens-label" aria-hidden="true">
              <span>vyšší</span>
              <strong>propustnost</strong>
              <span>světla</span>
            </div>
          </div>
        </div>
      </section>

      <section className="offer" id="nabidka" aria-labelledby="offer-title">
        <div className="section-heading">
          <p className="eyebrow">Pro každodenní práci v optice</p>
          <h2 id="offer-title">Od parametrů k hotové objednávce bez zbytečných kroků.</h2>
        </div>

        <div className="offer-layout">
          <figure className="offer-image">
            <img src="/section-1.webp" alt="Brýlové čočky připravené ke kontrole v optické laboratoři" />
            <figcaption>Kontrola čoček v provozu Pardubice–Čivice</figcaption>
          </figure>

          <div className="product-list">
            {products.map((product) => (
              <article className="product" key={product.title}>
                <div className="product-topline">
                  <p>{product.label}</p>
                  <span>{product.meta}</span>
                </div>
                <h3>{product.title}</h3>
                <p className="product-copy">{product.text}</p>
                <a href={product.href}>{product.action} <span aria-hidden="true">→</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" id="zazemi" aria-labelledby="trust-title">
        <div className="trust-copy">
          <p className="eyebrow">Partner optických provozoven</p>
          <h2 id="trust-title">Když potřebujete odpověď, mluvíte přímo s lidmi od čoček.</h2>
          <p className="trust-lead">
            V Čivicích spojujeme znalost optických materiálů s rychlým vyřízením zakázky. Pomůžeme vám ověřit dostupnost, zvolit vhodnou variantu i dořešit nestandardní požadavek.
          </p>

          <dl className="contact-grid">
            <div>
              <dt>Objednávky</dt>
              <dd><a href="mailto:objednavka@optikacivice.cz">objednavka@optikacivice.cz</a></dd>
            </div>
            <div>
              <dt>Telefon</dt>
              <dd><a href="tel:+420466798303">+420 466 798 303</a></dd>
            </div>
            <div>
              <dt>Provozovna</dt>
              <dd>Ke Mlýnu 7<br />530 06 Pardubice</dd>
            </div>
            <div>
              <dt>Další linky</dt>
              <dd><a href="tel:+420602435052">+420 602 435 052</a><br /><a href="tel:+420602454721">+420 602 454 721</a></dd>
            </div>
          </dl>
        </div>

        <figure className="trust-image">
          <img src="/section-2.webp" alt="Pracovník optické laboratoře kontroluje brýlovou čočku" />
          <figcaption>
            <strong>Optika Čivice s.r.o.</strong>
            <span>Odborné zázemí v Pardubicích</span>
          </figcaption>
        </figure>
      </section>
    </main>
  );
}

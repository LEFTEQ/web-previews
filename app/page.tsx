export default function Page() {
  const services = [
    {
      name: "Díly pro vozy ŠKODA",
      text: "Běžné servisní díly i konkrétní součástky podle modelu a motorizace.",
      code: "ŠKODA",
    },
    {
      name: "Spotřební materiál",
      text: "Filtry, brzdy, provozní kapaliny, stěrače a další díly pro pravidelnou údržbu.",
      code: "ÚDRŽBA",
    },
    {
      name: "Maloobchod i velkoobchod",
      text: "Osobní odběr pro řidiče i spolehlivé zásobování servisů v Plzni a okolí.",
      code: "PRODEJ",
    },
  ];

  return (
    <main className="prima-site">
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Prima JR – úvod">
            <span>PRIMA</span>
            <b>JR</b>
          </a>
          <nav aria-label="Hlavní navigace">
            <a href="#sortiment">Sortiment</a>
            <a href="#prodejna">Prodejna</a>
          </nav>
          <a className="header-call" href="tel:+420602727469">
            Zavolat
          </a>
        </header>

        <div className="hero-stage" id="top">
          <img
            className="hero-image"
            src="/hero.webp"
            alt="Automobilové díly a servisní vybavení Prima JR v Plzni"
          />
          <div className="hero-shade" aria-hidden="true" />

          <div className="hero-copy">
            <p className="eyebrow">Autodíly · Plzeň</p>
            <h1 id="hero-title">
              Správný díl.
              <span>Napoprvé.</span>
            </h1>
            <p className="hero-intro">
              Kompletní sortiment pro vozy ŠKODA. Řekněte nám model,
              motorizaci nebo VIN — pomůžeme vám vybrat bez zbytečného
              zkoušení.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="tel:+420602727469">
                <span>Zavolat 602 727 469</span>
                <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#sortiment">
                Co u nás seženete
              </a>
            </div>
          </div>

          <div className="part-tag" aria-label="Zaměření firmy">
            <span className="part-tag-line" aria-hidden="true" />
            <div>
              <small>Specializace</small>
              <strong>ŠKODA</strong>
            </div>
          </div>

          <div className="opening-card">
            <span className="status-dot" aria-hidden="true" />
            <div>
              <small>Prodejna Plzeň</small>
              <strong>Po–Pá&nbsp; 8:00–16:00</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="assortment" id="sortiment" aria-labelledby="sortiment-title">
        <div className="section-heading">
          <p className="eyebrow">Co vyřešíte u nás</p>
          <h2 id="sortiment-title">Od filtru po konkrétní součástku.</h2>
          <p>
            Přijďte s technickým průkazem, VIN nebo starým dílem. Společně
            dohledáme variantu, která do vašeho vozu skutečně patří.
          </p>
        </div>

        <div className="assortment-layout">
          <div className="parts-visual">
            <img
              src="/section-1.webp"
              alt="Výběr náhradních dílů pro vozy ŠKODA"
            />
            <span className="image-label">Dohledání podle vozu</span>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-item" key={service.name}>
                <span className="service-code">{service.code}</span>
                <div>
                  <h3>{service.name}</h3>
                  <p>{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shop" id="prodejna" aria-labelledby="prodejna-title">
        <div className="shop-image-wrap">
          <img
            src="/section-2.webp"
            alt="Prodejna autodílů Prima JR v Plzni"
          />
          <div className="plzen-stamp" aria-hidden="true">
            <span>PLZEŇ</span>
            <small>osobní odběr</small>
          </div>
        </div>

        <div className="shop-copy">
          <p className="eyebrow">Místní prodejna, přímá domluva</p>
          <h2 id="prodejna-title">Neobjednávejte naslepo.</h2>
          <p className="shop-lead">
            Na telefonu se dovoláte lidem, kteří díly každý den hledají,
            porovnávají a vydávají. Popište, co řešíte — řekneme vám, co si
            připravit a zda má smysl přijet.
          </p>

          <dl className="facts">
            <div>
              <dt>Otevírací doba</dt>
              <dd>Po–Pá, 8:00–16:00</dd>
            </div>
            <div>
              <dt>Lokalita</dt>
              <dd>Plzeň</dd>
            </div>
            <div>
              <dt>Pro koho</dt>
              <dd>Řidiči i autoservisy</dd>
            </div>
          </dl>

          <a className="phone-panel" href="tel:+420602727469">
            <span>
              <small>Ověřit dostupnost dílu</small>
              <strong>602 727 469</strong>
            </span>
            <b aria-hidden="true">Zavolat ↗</b>
          </a>
        </div>
      </section>
    </main>
  );
}

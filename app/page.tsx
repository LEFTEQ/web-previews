const services = [
  {
    title: "Prodej nemovitosti",
    text: "Stanovíme reálnou cenu, připravíme prezentaci a povedeme jednání až k bezpečnému předání klíčů.",
    tag: "Byty · domy · pozemky",
  },
  {
    title: "Pronájem bez starostí",
    text: "Najdeme vhodného nájemce, prověříme podklady a připravíme smlouvy i předávací protokol.",
    tag: "Olomouc a okolí",
  },
  {
    title: "Koupě a financování",
    text: "Prověříme technický i právní stav a pomůžeme sladit koupi s hypotékou nebo prodejem původního bydlení.",
    tag: "Od prohlídky po podpis",
  },
  {
    title: "Rekonstrukce a výstavba",
    text: "Poradíme, co má před prodejem smysl upravit, a propojíme vás s ověřenými řemeslníky.",
    tag: "Prakticky, bez zbytečných investic",
  },
];

const steps = [
  {
    title: "Nejdřív si nemovitost projdeme",
    text: "Na místě zjistíme její stav, silné stránky i to, komu může nejlépe vyhovovat.",
  },
  {
    title: "Připravíme jasný plán",
    text: "Dostanete doporučenou cenu, způsob prezentace a konkrétní postup bez neurčitých slibů.",
  },
  {
    title: "Pohlídáme celý obchod",
    text: "Koordinujeme prohlídky, smlouvy, financování, katastr i předání. Víte, co se právě děje.",
  },
];

export default function HomePage() {
  return (
    <>
      <title>Reliability | Reality v Olomouci</title>
      <meta
        name="description"
        content="Prodej, koupě a pronájem nemovitostí v Olomouci a okolí. Reliability vás provede oceněním, prezentací, smlouvami i předáním."
      />
      <meta property="og:title" content="Reliability | Reality v Olomouci" />
      <meta
        property="og:description"
        content="Místní realitní kancelář pro bezpečný prodej, koupi a pronájem nemovitostí v Olomouci a okolí."
      />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="cs_CZ" />

      <main className="site-shell">
        <section className="hero" aria-labelledby="hero-title">
          <header className="site-header">
            <a className="wordmark" href="#uvod" aria-label="Reliability, úvodní stránka">
              <span className="wordmark-mark" aria-hidden="true">R</span>
              <span>
                Reliability
                <small>reality · Olomouc</small>
              </span>
            </a>

            <nav className="main-nav" aria-label="Hlavní navigace">
              <a href="#sluzby">Služby</a>
              <a href="#postup">Jak pracujeme</a>
              <a className="nav-phone" href="tel:+420777260050">Zavolat makléři</a>
            </nav>
          </header>

          <div className="hero-grid" id="uvod">
            <div className="hero-copy">
              <p className="eyebrow">Realitní kancelář · Bořivojova, Olomouc</p>
              <h1 id="hero-title">
                Známe cenu
                <span>dobrého místa.</span>
              </h1>
              <p className="hero-lead">
                Prodáváte byt, dům nebo pozemek? Provedeme vás celým obchodem — od ceny a prezentace až po smlouvy, katastr a předání klíčů.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="tel:+420777260050">
                  Zavolat +420 777 260 050
                </a>
                <a className="text-link" href="mailto:info@rkreliability.cz">
                  Napsat o nemovitosti
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
              <p className="microcopy">První konzultace je nezávazná. Olomouc a okolní obce.</p>
            </div>

            <div className="property-frame">
              <img
                src="/hero.webp"
                alt="Rezidenční nemovitost v Olomouci zastupovaná kanceláří Reliability"
              />
              <div className="plot-line" aria-hidden="true">
                <span className="plot-point point-a" />
                <span className="plot-point point-b" />
                <span className="plot-point point-c" />
                <span className="plot-point point-d" />
              </div>
              <div className="map-stamp">
                <span>779 00</span>
                <strong>Olomouc</strong>
              </div>
              <div className="image-note">
                <span>Na místě záleží</span>
                <strong>Stejně jako na každém detailu smlouvy.</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section" id="sluzby" aria-labelledby="services-title">
          <div className="section-heading">
            <p className="eyebrow">Co pro vás zařídíme</p>
            <h2 id="services-title">Jeden makléř. Celý obchod pod kontrolou.</h2>
            <p>
              Nemusíte obíhat fotografa, banku, právníka ani katastr sami. Jednotlivé kroky spojíme do srozumitelného postupu.
            </p>
          </div>

          <div className="services-layout">
            <div className="services-image">
              <img
                src="/section-1.webp"
                alt="Detail interiéru nemovitosti připravené k prodeji v Olomouci"
                loading="lazy"
              />
              <p><span aria-hidden="true">⌖</span> Nemovitosti posuzujeme osobně, ne jen podle tabulek.</p>
            </div>

            <div className="service-list">
              {services.map((service) => (
                <article className="service-item" key={service.title}>
                  <p className="service-tag">{service.tag}</p>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="trust-section" id="postup" aria-labelledby="trust-title">
          <div className="trust-visual">
            <img
              src="/section-2.webp"
              alt="Makléřská péče při prohlídce nemovitosti v Olomouci"
              loading="lazy"
            />
            <blockquote>
              „Spolehlivost pro nás znamená, že víte, co bude následovat — a kdo to zařídí.“
            </blockquote>
          </div>

          <div className="trust-content">
            <p className="eyebrow">Jak spolupráce probíhá</p>
            <h2 id="trust-title">Klidný obchod začíná dobrým plánem.</h2>
            <div className="steps">
              {steps.map((step, index) => (
                <article className="step" key={step.title}>
                  <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <address className="office-card">
              <p>Reliability s.r.o.</p>
              <strong>Bořivojova 235/1, 779 00 Olomouc</strong>
              <a href="tel:+420777260050">+420 777 260 050</a>
              <a href="mailto:info@rkreliability.cz">info@rkreliability.cz</a>
            </address>
          </div>
        </section>
      </main>
    </>
  );
}

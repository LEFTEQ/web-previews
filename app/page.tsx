export default function Page() {
  const services = [
    {
      title: "Návrh bez hádání",
      text: "Zohledníme tepelnou ztrátu domu, radiátory nebo podlahové topení i váš běžný provoz. Výkon nevolíme jen podle metrů čtverečních."
    },
    {
      title: "Montáž v souvislostech",
      text: "Vyřešíme umístění venkovní jednotky, napojení topné soustavy i ohřev vody tak, aby technologie nepřekážela domu ani sousedům."
    },
    {
      title: "Servis z Olomouce",
      text: "Když systém potřebuje kontrolu, jednáte s místní firmou. Telefon zvedáme v Olomouci, ne v anonymním call centru."
    }
  ];

  return (
    <main className="ap-site">
      <title>Alfapumpy | Tepelná čerpadla Olomouc</title>
      <meta
        name="description"
        content="Návrh, montáž a servis tepelných čerpadel pro rodinné domy v Olomouci a okolí."
      />
      <meta property="og:title" content="Alfapumpy — teplo přesunuté domů" />
      <meta
        property="og:description"
        content="Tepelná čerpadla navržená podle domu, topné soustavy a skutečného provozu."
      />
      <meta property="og:image" content="/hero.webp" />
      <meta property="og:locale" content="cs_CZ" />

      <a className="ap-skip" href="#obsah">
        Přeskočit na obsah
      </a>

      <section className="ap-hero" aria-labelledby="hero-title">
        <header className="ap-header">
          <a className="ap-brand" href="#top" aria-label="Alfapumpy, úvodní stránka">
            <span className="ap-brand-name"><i>alfa</i>pumpy</span>
            <span className="ap-brand-note">tepelná technika · Olomouc</span>
          </a>

          <nav className="ap-nav" aria-label="Hlavní navigace">
            <a href="#reseni">Jak pracujeme</a>
            <a href="#jistota">Proč místní firma</a>
          </nav>

          <a className="ap-phone" href="tel:+420585417604">
            <span>Zavolat</span>
            +420 585 417 604
          </a>
        </header>

        <div className="ap-hero-grid" id="top">
          <div className="ap-hero-copy">
            <p className="ap-eyebrow">Tepelná čerpadla pro Olomouc a okolí</p>
            <h1 id="hero-title">
              Teplo se<br />
              <em>nevyrábí.</em><br />
              Přesouvá se.
            </h1>
            <p className="ap-lead">
              Navrhneme tepelné čerpadlo podle vašeho domu, ne podle univerzálního balíčku. Od prvního výpočtu po servis zůstáváte v kontaktu s lidmi z Olomouce.
            </p>
            <div className="ap-actions">
              <a className="ap-button" href="#reseni">Zjistit vhodné řešení</a>
              <a className="ap-text-link" href="mailto:info@alfapumpy.cz">Napsat na info@alfapumpy.cz</a>
            </div>
          </div>

          <div className="ap-hero-visual">
            <div className="ap-image-frame">
              <img
                src="/hero.webp"
                alt="Moderní venkovní jednotka tepelného čerpadla u rodinného domu"
                width="1100"
                height="1280"
                fetchPriority="high"
                sizes="(max-width: 760px) 100vw, 48vw"
              />
              <span className="ap-image-label">Vzduch–voda / rodinné domy</span>
            </div>

            <ol className="ap-energy-route" aria-label="Cesta energie tepelným čerpadlem">
              <li><span>okolní vzduch</span></li>
              <li><span>chladivový okruh</span></li>
              <li><span>topná voda</span></li>
              <li><span>teplo doma</span></li>
            </ol>
          </div>
        </div>
      </section>

      <section className="ap-services" id="reseni" aria-labelledby="services-title">
        <div className="ap-section-heading" id="obsah">
          <p className="ap-eyebrow">Od domu k přesnému výkonu</p>
          <h2 id="services-title">Jeden dům.<br />Jedno správné zapojení.</h2>
          <p>
            Novostavba, výměna kotle i starší dům s radiátory potřebují jiný přístup. Nejdřív poznáme soustavu, potom doporučíme technologii.
          </p>
        </div>

        <div className="ap-services-layout">
          <figure className="ap-service-image">
            <img
              src="/section-1.webp"
              alt="Technologie tepelného čerpadla připravená pro přesné zapojení"
              width="1200"
              height="900"
              loading="lazy"
              sizes="(max-width: 760px) 100vw, 48vw"
            />
            <figcaption>
              <span>Nejdřív měříme</span>
              Výkon, hlučnost i spotřebu řešíme před montáží.
            </figcaption>
          </figure>

          <div className="ap-service-list">
            {services.map((service) => (
              <article key={service.title}>
                <span className="ap-service-node" aria-hidden="true" />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ap-trust" id="jistota" aria-labelledby="trust-title">
        <div className="ap-trust-image">
          <img
            src="/section-2.webp"
            alt="Detail pečlivě provedené montáže tepelného čerpadla"
            width="1200"
            height="1100"
            loading="lazy"
            sizes="(max-width: 760px) 100vw, 42vw"
          />
          <p>Jana Koziny 558/26<br />779 00 Olomouc</p>
        </div>

        <div className="ap-trust-copy">
          <p className="ap-eyebrow">Místní technika, lidská domluva</p>
          <h2 id="trust-title">Když se ochladí, víte, komu zavolat.</h2>
          <p className="ap-trust-intro">
            Tepelné čerpadlo není anonymní spotřebič. Je součástí domu na mnoho topných sezon — proto musí být srozumitelný návrh, čistá montáž i dostupný servis.
          </p>

          <div className="ap-proof-grid">
            <div>
              <strong>Konkrétní návrh</strong>
              <span>Vysvětlíme výkon, zapojení i očekávaný provoz bez prodejních zkratek.</span>
            </div>
            <div>
              <strong>Přímý kontakt</strong>
              <span><a href="tel:+420585417604">+420 585 417 604</a><br /><a href="mailto:info@alfapumpy.cz">info@alfapumpy.cz</a></span>
            </div>
            <div>
              <strong>Aktuální informace</strong>
              <span>Nabídka a konzultace pro topnou sezonu 2026.</span>
            </div>
          </div>

          <p className="ap-company-line">Alfapumpy s.r.o. · IČ 08521913 · Olomouc</p>
        </div>
      </section>
    </main>
  );
}

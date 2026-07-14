const services = [
  {
    title: "Technické překlady",
    text: "Manuály, technické specifikace, normy, katalogy i podklady pro výběrová řízení. Terminologii držíme jednotnou v celém dokumentu.",
    detail: "Dokumentace · stavebnictví · průmysl",
  },
  {
    title: "Právní překlady",
    text: "Smlouvy, notářské zápisy, zákony, vyhlášky, úřední listiny a firemní korespondence v přesném právním kontextu.",
    detail: "Smlouvy · předpisy · listiny",
  },
  {
    title: "Soudní překlady",
    text: "Překlady s ověřením a razítkem pro úřady, soudy, školy i zahraniční instituce. Předem potvrdíme cenu i termín.",
    detail: "Ověření · razítko · úřední použití",
  },
];

const facts = [
  { value: "15+ let", label: "praxe našich překladatelů" },
  { value: "od 280 Kč", label: "za normostranu bez DPH" },
  { value: "zdarma", label: "kalkulace před objednáním" },
];

export default function Page() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#nahore" aria-label="Překlady s.r.o. — úvod">
            <span>PŘE</span>
            <span className="wordmark-mark" aria-hidden="true">↔</span>
            <span>KLADY</span>
          </a>

          <nav aria-label="Hlavní navigace">
            <a href="#sluzby">Co překládáme</a>
            <a href="#duvera">Proč nám věřit</a>
          </nav>
        </header>

        <div className="hero-layout" id="nahore">
          <div className="hero-copy">
            <p className="eyebrow">Překladatelská agentura · Praha</p>
            <h1 id="hero-title">
              Překlady, ve kterých se <em>neztratíte.</em>
            </h1>
            <p className="hero-lead">
              Technické, právní a soudní překlady od specialistů, kteří rozumějí nejen jazyku, ale i vašemu oboru. Online pro klienty z celé ČR.
            </p>

            <div className="hero-actions">
              <a className="primary-action" href="#sluzby">Zjistit, co překládáme</a>
              <a className="text-action" href="#duvera">Přečíst reference <span aria-hidden="true">↓</span></a>
            </div>

            <p className="freshness">
              <span aria-hidden="true" /> Obsah ověřen 14. července 2026
            </p>
          </div>

          <div className="hero-visual">
            <img
              src="/hero.webp"
              alt="Pracovní stůl překladatele s rozepsaným odborným dokumentem"
            />
            <div className="translation-strip" aria-label="Naše hlavní jazykové specializace">
              <span>polština</span>
              <span>němčina</span>
              <span>angličtina</span>
              <span>ruština</span>
            </div>
            <div className="editor-note" aria-hidden="true">
              <span>význam</span>
              <i />
              <span>zůstává</span>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Texty, kde záleží na každém slově</p>
          <h2 id="services-title">Překladatel vybraný podle vašeho oboru.</h2>
          <p>
            Zakázku nepřiřazujeme jen podle jazyka. Vybíráme člověka, který zná terminologii, souvislosti i způsob, jakým vaši čtenáři skutečně mluví.
          </p>
        </div>

        <div className="services-layout">
          <figure className="section-image section-image-services">
            <img
              src="/section-1.webp"
              alt="Detail odborného překladu s vyznačenou terminologií a poznámkami"
            />
            <figcaption>
              CAT nástroje pomáhají držet terminologii jednotnou a snižují náklady u opakovaných textů.
            </figcaption>
          </figure>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-item" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span>{service.detail}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" id="duvera" aria-labelledby="trust-title">
        <div className="trust-intro">
          <p className="eyebrow">Doloženo skutečnými zakázkami</p>
          <h2 id="trust-title">Překlad má znít, jako by nikdy přeložený nebyl.</h2>
        </div>

        <div className="trust-grid">
          <div className="proof-column">
            <div className="facts" aria-label="Hlavní údaje o službě">
              {facts.map((fact) => (
                <div className="fact" key={fact.label}>
                  <strong>{fact.value}</strong>
                  <span>{fact.label}</span>
                </div>
              ))}
            </div>

            <blockquote>
              <p>
                „Získali jsme profesionální překlady manuálů, odborných textů i polský dabing. S kvalitou a rychlostí dodání jsme maximálně spokojeni.“
              </p>
              <cite>HELUZ cihlářský průmysl</cite>
            </blockquote>

            <p className="proof-note">
              Překládali jsme také prezentace pro Grundig a 140 normostran stavebního zákona s technickou dokumentací pro Marks &amp; Spencer Czech Republic.
            </p>
          </div>

          <figure className="section-image section-image-trust">
            <img
              src="/section-2.webp"
              alt="Překladatel při kontrole vytištěného dokumentu před odevzdáním"
            />
            <figcaption>
              Každou zakázku naceníme předem. U krátkých termínů rovnou potvrdíme, zda je expresní dodání reálné.
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}

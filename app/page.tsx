export default function Page() {
  const services = [
    {
      title: "Návrh provozu",
      text: "Projdeme kapacitu, způsob výdeje i hygienické požadavky. Připravíme dispozici a projektovou dokumentaci bez zbytečných strojů navíc.",
      tag: "Od první konzultace",
    },
    {
      title: "Dodávka a montáž",
      text: "Zajistíme varnou techniku, mytí, chlazení, nerezový nábytek i drobný inventář. Zařízení přivezeme, odborně zapojíme a předáme obsluze.",
      tag: "Jeden odpovědný dodavatel",
    },
    {
      title: "Servis techniky",
      text: "Řešíme záruční i pozáruční servis. Když je kuchyně v provozu, potřebujete konkrétní postup a rychlou domluvu — ne přepojování mezi dodavateli.",
      tag: "Technická podpora",
    },
    {
      title: "Kusový prodej",
      text: "Potřebujete samostatnou myčku, grilovací desku, gastronádoby nebo hygienický program? Vybereme vybavení podle skutečné zátěže vašeho provozu.",
      tag: "Pro malé i velké nákupy",
    },
  ];

  const steps = [
    ["01", "Provoz", "Zjistíme kapacitu a pracovní rytmus"],
    ["02", "Projekt", "Navrhneme technologii a návaznosti"],
    ["03", "Realizace", "Dodáme, zapojíme a zaškolíme"],
    ["04", "Servis", "Zůstáváme na telefonu i po předání"],
  ];

  return (
    <main className="gama-site">
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="GAMA Fobos – úvod">
            <span className="wordmark-primary">GAMA</span>
            <span className="wordmark-divider" aria-hidden="true" />
            <span className="wordmark-secondary">FOBOS</span>
          </a>

          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Co dodáváme</a>
            <a href="#zkusenosti">Zkušenosti</a>
          </nav>

          <a className="header-phone" href="tel:+420495220324">
            <span>Hradec Králové</span>
            +420 495 220 324
          </a>
        </header>

        <div className="hero-layout" id="top">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" aria-hidden="true" />
              Profesionální gastroprovozy po celé ČR
            </p>

            <h1 id="hero-title">
              Kuchyně, které
              <span>vydrží špičku.</span>
            </h1>

            <p className="hero-lead">
              Navrhneme, vybavíme a udržíme v chodu kuchyň pro školu,
              restauraci, hotel, kavárnu i catering. Od prvního výkresu po
              pozáruční servis.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="tel:+420495220324">
                Probrat váš provoz
                <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#sluzby">
                Projít služby
                <span aria-hidden="true">↓</span>
              </a>
            </div>

            <p className="freshness">Katalog služeb aktualizován · 2026</p>
          </div>

          <figure className="hero-visual">
            <img
              src="/hero.webp"
              alt="Profesionální gastronomická kuchyně vybavená nerezovou technologií"
            />
            <figcaption>
              <span>Gastro technologie</span>
              <strong>Od návrhu po první výdej</strong>
            </figcaption>
          </figure>
        </div>

        <div className="pass-rail" aria-label="Průběh realizace gastroprovozu">
          <div className="rail-label">
            <span>Zakázka</span>
            <strong>pod kontrolou</strong>
          </div>
          <ol className="ticket-list">
            {steps.map(([number, title, text]) => (
              <li className="ticket" key={number}>
                <span className="ticket-number">{number}</span>
                <span className="ticket-copy">
                  <strong>{title}</strong>
                  <small>{text}</small>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Vybavení bez slepých míst</p>
            <h2 id="services-title">Jedna kuchyně. Jeden odpovědný tým.</h2>
          </div>
          <p>
            Neskládáte si projekt z pěti různých firem. GAMA Fobos propojí
            technologii, montáž i následný servis tak, aby na sebe všechno
            navazovalo.
          </p>
        </div>

        <div className="services-layout">
          <figure className="section-image service-image">
            <img
              src="/section-1.webp"
              alt="Detail profesionálního gastronomického zařízení z nerezu"
              loading="lazy"
            />
            <figcaption>
              <span>Materiál provozu</span>
              Nerez, výkon a snadná údržba
            </figcaption>
          </figure>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <p>{service.tag}</p>
                <h3>{service.title}</h3>
                <div className="service-detail">
                  <span aria-hidden="true">+</span>
                  <p>{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="experience" id="zkusenosti" aria-labelledby="experience-title">
        <div className="experience-layout">
          <div className="experience-copy">
            <p className="section-kicker">Z Hradce Králové do celé republiky</p>
            <h2 id="experience-title">Od školní výdejny po polní kuchyni.</h2>
            <p className="experience-intro">
              Více než 15 let řešíme provozy s úplně jiným rytmem, kapacitou i
              nároky. Proto nezačínáme katalogem. Nejdřív potřebujeme vědět, co
              se u vás vaří, kolik porcí vydáváte a kdo bude technologii každý
              den obsluhovat.
            </p>

            <dl className="proof-list">
              <div>
                <dt>15+ let</dt>
                <dd>zkušeností s profesionální gastronomií</dd>
              </div>
              <div>
                <dt>Celá ČR</dt>
                <dd>dodávky a realizace z Hradce Králové</dd>
              </div>
              <div>
                <dt>Po předání</dt>
                <dd>záruční i pozáruční technická podpora</dd>
              </div>
            </dl>

            <a className="contact-line" href="mailto:info@gamafobos.cz">
              <span>Napište, co potřebujete vybavit</span>
              <strong>info@gamafobos.cz</strong>
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="experience-visuals">
            <figure className="section-image experience-image">
              <img
                src="/section-2.webp"
                alt="Realizace moderního profesionálního gastroprovozu"
                loading="lazy"
              />
              <figcaption>
                <span>Realizace</span>
                Technologický celek připravený pro každodenní provoz
              </figcaption>
            </figure>

            <div className="reference-strip" aria-label="Vybrané typy realizací">
              <article>
                <span>Školní stravování</span>
                <strong>ZŠ Štěrboholy</strong>
                <p>Kuchyň s výdejem pro pravidelný školní provoz.</p>
              </article>
              <article>
                <span>Restaurace a bar</span>
                <strong>Zámecká konírna</strong>
                <p>Zázemí kuchyně a baru navržené jako jeden celek.</p>
              </article>
              <article>
                <span>Speciální provozy</span>
                <strong>Kontejnerové kuchyně</strong>
                <p>Odolné technologické řešení také pro armádní využití.</p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

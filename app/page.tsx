export default function Page() {
  const services = [
    {
      title: "Interiérové bazény",
      text: "Celoroční provoz, tiché technologie a prostředí, ve kterém se dobře dýchá i odpočívá.",
      tag: "365 dní v roce",
    },
    {
      title: "Exteriérové bazény",
      text: "Promyšlené napojení na dům a zahradu, úsporný provoz a zastřešení podle způsobu užívání.",
      tag: "Dům + zahrada",
    },
    {
      title: "Wellness na míru",
      text: "Whirlpooly, sauny, parní lázně i kompletní zóny pro rodinné domy, hotely a sportovní centra.",
      tag: "Privátní i komerční",
    },
  ];

  const steps = [
    ["01", "Návštěva showroomu", "Projdeme si materiály, technologie i reálné možnosti vašeho prostoru."],
    ["02", "Návrh a projekt", "Sladíme podobu bazénu, provozní náklady, normy i technické zázemí."],
    ["03", "Odborná realizace", "Koordinujeme dodávku a montáž tak, aby jednotlivé profese navazovaly."],
    ["04", "Dostupný servis", "Zůstáváme nablízku i po napuštění. Zakázky realizujeme pouze na Moravě."],
  ];

  return (
    <main>
      <a className="skip-link" href="#obsah">Přejít na obsah</a>

      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="BWS Přerov – úvod">
            <span className="wordmark-main">BWS</span>
            <span className="wordmark-detail">PŘEROV<br />BAZÉNY · WELLNESS</span>
          </a>
          <nav className="nav" aria-label="Hlavní navigace">
            <a href="#nabidka">Co stavíme</a>
            <a href="#duvera">Jak pracujeme</a>
            <a className="nav-phone" href="tel:+420608427000">+420 608 427 000</a>
          </nav>
        </header>

        <div className="hero-copy" id="top">
          <p className="eyebrow">Bazény a wellness · Olomouc a Morava</p>
          <h1 id="hero-title">
            Voda drží<br />
            <span>přesnou linii.</span>
          </h1>
          <p className="hero-intro">
            Navrhujeme, stavíme a servisujeme bazény, ve kterých technika ustoupí klidu.
            Od první skici po čistou hladinu.
          </p>
          <a className="primary-link" href="tel:+420608427000">
            <span>Probrat vlastní bazén</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="hero-visual" aria-label="Interiérový bazén v realizaci BWS Přerov">
          <img
            src="/hero.webp"
            alt="Moderní interiérový bazén s klidnou hladinou a čistým architektonickým řešením"
            width="1600"
            height="1067"
            fetchPriority="high"
          />
          <div className="datum-line" aria-hidden="true">
            <span>± 0,000</span>
            <i />
            <small>PROJEKTOVANÁ HLADINA</small>
          </div>
          <div className="hero-caption">
            <span>INTERIÉR</span>
            <span>CELOROČNÍ PROVOZ</span>
          </div>
        </div>

        <div className="hero-proof" aria-label="Zkušenosti firmy">
          <strong>Od roku 1992</strong>
          <span>projekce · realizace · servis</span>
        </div>
      </section>

      <section className="services" id="nabidka" aria-labelledby="services-title">
        <div className="section-heading" id="obsah">
          <p className="eyebrow">Jedno technické řešení. Jeden odpovědný partner.</p>
          <h2 id="services-title">Od skimmeru po páru v sauně.</h2>
          <p>
            Bazén není samostatný výrobek. Musí souhlasit s domem, vzduchotechnikou,
            energií i tím, kolik času chcete věnovat údržbě. Proto řešíme celek.
          </p>
        </div>

        <div className="services-layout">
          <div className="services-image">
            <img
              src="/section-1.webp"
              alt="Detail přelivové hrany a precizního provedení bazénu"
              width="1200"
              height="900"
              loading="lazy"
            />
            <div className="material-note">
              <span>PŘELIVNÁ HRANA</span>
              <b>Čistý detail<br />bez improvizace.</b>
            </div>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <p>{service.tag}</p>
                <h3>{service.title}</h3>
                <span>{service.text}</span>
              </article>
            ))}
            <p className="service-range">
              Také zastřešení bazénů, privátní a komerční whirlpooly, sauny, parní lázně
              a rekonstrukce stávajících provozů.
            </p>
          </div>
        </div>
      </section>

      <section className="process" id="duvera" aria-labelledby="process-title">
        <div className="process-intro">
          <p className="eyebrow">Cesta k hotové hladině</p>
          <h2 id="process-title">Dobře postavený bazén začíná dřív než výkop.</h2>
          <p>
            Vlastní projekce hlídá detaily, hygienické požadavky i budoucí spotřebu.
            Vy se rozhodujete srozumitelně — a předem víte, co bude následovat.
          </p>
        </div>

        <div className="process-grid">
          <ol className="steps">
            {steps.map(([number, title, text]) => (
              <li key={number}>
                <span className="step-number">{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>

          <figure className="trust-figure">
            <img
              src="/section-2.webp"
              alt="Realizované wellness centrum s bazénovou technologií BWS Přerov"
              width="1200"
              height="900"
              loading="lazy"
            />
            <figcaption>
              <span>REALIZACE NA MORAVĚ</span>
              <strong>Servis máme skutečně na dosah.</strong>
              <p>
                Zázemí v Přerově, zkušenost z rodinných bazénů i rozsáhlých wellness center
                včetně olomouckého Centra sportu a zdraví OMEGA.
              </p>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}

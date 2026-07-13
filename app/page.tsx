export default function Page() {
  const services = [
    {
      title: "Rodinné domy",
      text: "Novostavby a rezidenční vily od přípravy staveniště po čisté předání.",
      tag: "Bydlení",
    },
    {
      title: "Bytové a apartmánové domy",
      text: "Kompletní realizace pro soukromé investory i developerské projekty.",
      tag: "Výstavba",
    },
    {
      title: "Školy a veřejné stavby",
      text: "Odolné, bezpečné a dobře udržovatelné objekty pro každodenní provoz.",
      tag: "Občanské stavby",
    },
    {
      title: "Firemní sídla a haly",
      text: "Provozní budovy, průmyslové haly a zázemí navržené podle fungování firmy.",
      tag: "Pro firmy",
    },
  ];

  const projects = [
    { place: "Pec pod Sněžkou", name: "Zahrádky 1000", type: "Apartmánový dům" },
    { place: "Trnová", name: "BD Trnová", type: "Bytový dům" },
    { place: "Litomyšl", name: "Na Prokopu", type: "Rodinný dům" },
  ];

  return (
    <main className="jkj-page">
      <section className="hero" aria-labelledby="hero-title">
        <header className="topbar">
          <a className="wordmark" href="#nahoru" aria-label="JKJ stavební – úvod">
            <span className="wordmark-sign" aria-hidden="true">JKJ</span>
            <span className="wordmark-name">stavební</span>
          </a>

          <nav className="topnav" aria-label="Hlavní navigace">
            <a href="#sluzby">Co stavíme</a>
            <a href="#realizace">Realizace</a>
          </nav>

          <a className="topbar-action" href="#sluzby">Vybrat stavbu</a>
        </header>

        <div className="hero-layout" id="nahoru">
          <div className="hero-copy">
            <p className="eyebrow">Stavební firma · Pardubice</p>
            <h1 id="hero-title">
              Stavíme pevně.
              <span>Předáváme čistě.</span>
            </h1>
            <p className="hero-lead">
              Rodinné a bytové domy, školy, firemní sídla i horské objekty.
              Jedna odpovědná firma drží rozpočet, řemesla i termín pohromadě.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#sluzby">Najít typ vaší stavby</a>
              <a className="text-link" href="#realizace">Prohlédnout realizace</a>
            </div>
            <p className="hero-locality">Pardubice · východní Čechy · projekty po celé ČR</p>
          </div>

          <figure className="hero-visual">
            <img
              src="/hero.webp"
              alt="Rozestavěný objekt firmy JKJ se zděnou konstrukcí a stavební technikou"
            />
            <div className="level level-top" aria-hidden="true"><span>+8,400</span></div>
            <div className="level level-middle" aria-hidden="true"><span>+3,200</span></div>
            <div className="level level-zero" aria-hidden="true"><span>±0,000</span></div>
            <figcaption>Od základové desky po poslední detail</figcaption>
          </figure>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Co pro vás postavíme</p>
          <h2 id="services-title">Jedna firma.<br />Celá stavba.</h2>
          <p>
            Koordinujeme profese tak, abyste nemuseli řešit každého dodavatele zvlášť.
            Vždy víte, co se právě staví a co následuje.
          </p>
        </div>

        <div className="services-layout">
          <figure className="section-image service-image">
            <img
              src="/section-1.webp"
              alt="Stavební práce na moderním objektu v průběhu hrubé výstavby"
              loading="lazy"
            />
            <figcaption>
              <span>Hrubá stavba</span>
              Přesnost se pozná ještě před omítkou.
            </figcaption>
          </figure>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <p className="service-tag">{service.tag}</p>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="proof" id="realizace" aria-labelledby="proof-title">
        <div className="proof-layout">
          <div className="proof-content">
            <p className="eyebrow">Stavba bez dohadů</p>
            <h2 id="proof-title">Na výsledku je vidět každý krok před ním.</h2>
            <p className="proof-intro">
              Dobrá stavba není jen hotová fasáda. Je to čitelný rozpočet, návaznost řemesel
              a předání, při kterém nic nezůstává „na potom“.
            </p>

            <ul className="trust-list">
              <li>
                <strong>Rozpočet po položkách</strong>
                <span>Víte, za co platíte a kde může změna ovlivnit cenu.</span>
              </li>
              <li>
                <strong>Jeden odpovědný kontakt</strong>
                <span>Průběh stavby řešíte s člověkem, který zná celý projekt.</span>
              </li>
              <li>
                <strong>Předání s dokumentací</strong>
                <span>Hotové dílo přebíráte přehledně a s doloženými podklady.</span>
              </li>
            </ul>
          </div>

          <figure className="section-image proof-image">
            <img
              src="/section-2.webp"
              alt="Dokončená moderní stavba jako ukázka realizace firmy JKJ"
              loading="lazy"
            />
            <figcaption>Hotová stavba má působit samozřejmě. Práce za ní ne.</figcaption>
          </figure>
        </div>

        <div className="project-strip" aria-label="Vybrané realizace">
          <p className="project-strip-label">Vybrané stavby</p>
          {projects.map((project) => (
            <article className="project" key={project.name}>
              <p>{project.type}</p>
              <h3>{project.name}</h3>
              <span>{project.place}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

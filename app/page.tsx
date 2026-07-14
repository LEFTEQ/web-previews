export default function Page() {
  const services = [
    {
      label: "MATERIÁL",
      title: "Plot si stavíte sami",
      text: "Připravíme kompletní sestavu pletiva, panelů, sloupků, branek i spojovacího materiálu. V Rajhradě si vše prohlédnete a odvezete najednou.",
      action: "Poptat materiál",
    },
    {
      label: "NA KLÍČ",
      title: "Chcete hotové oplocení",
      text: "Technik zaměří pozemek, doporučí vhodný systém a připraví nabídku včetně montáže. Realizujeme zahrady, sportoviště i průmyslové areály.",
      action: "Poptat realizaci",
    },
    {
      label: "VELKOOBCHOD",
      title: "Oplocení odebíráte pravidelně",
      text: "Stavebním firmám a prodejcům dodáváme přímo z výroby. Držíme široký sklad a zvládáme opakované i objemné zakázky.",
      action: "Domluvit odběr",
    },
  ];

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero__image"
          src="/hero.webp"
          alt="Moderní kovové oplocení z výroby Plotového centra Kopeček"
          width="1800"
          height="1200"
          fetchPriority="high"
        />
        <div className="hero__shade" aria-hidden="true" />

        <header className="site-head">
          <a className="wordmark" href="#top" aria-label="Plotové centrum Kopeček – úvod">
            <span className="wordmark__mark" aria-hidden="true"><i /><i /><i /></span>
            <span>
              <strong>PLOTOVÉ CENTRUM</strong>
              <small>KOPEČEK · RAJHRAD</small>
            </span>
          </a>
          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#vyber">Co potřebujete</a>
            <a href="#zkusenost">Proč Kopeček</a>
          </nav>
          <a className="head-action" href="#vyber">Poptat plot</a>
        </header>

        <div className="hero__content" id="top">
          <p className="eyebrow">VÝROBA · PRODEJ · MONTÁŽ</p>
          <h1 id="hero-title">Hranice,<br /><em>která drží.</em></h1>
          <p className="hero__intro">
            Plot není čára v projektu. Je to každodenní jistota kolem domu, firmy i hřiště. V Rajhradě ho pro vás vyrobíme, připravíme nebo postavíme na klíč.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#vyber">Vybrat způsob oplocení</a>
            <a className="button button--ghost" href="https://maps.google.com/?q=Stará+pošta+67,+Rajhrad">Najít prodejnu</a>
          </div>
        </div>

        <aside className="hero__rail" aria-label="Informace o provozovně">
          <span>OD ROKU 1994</span>
          <span>STará pošta 67</span>
          <span>RAJHRAD</span>
        </aside>

        <div className="hero__proof">
          <span className="hero__proof-line" aria-hidden="true" />
          <p><strong>279 000 m</strong><span>oplocení skladem</span></p>
          <p><strong>4 220</strong><span>nalakovaných sloupků za směnu</span></p>
        </div>
      </section>

      <section className="services" id="vyber" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow eyebrow--dark">JEDEN VÝROBCE, TŘI CESTY</p>
          <h2 id="services-title">Kolik práce chcete nechat na nás?</h2>
          <p>Začněte podle toho, co právě řešíte. U každé varianty pohlídáme, aby k oplocení nic nechybělo.</p>
        </div>

        <div className="services__layout">
          <div className="services__image-wrap">
            <img
              src="/section-1.webp"
              alt="Detail svařovaného plotového panelu a sloupků připravených k montáži"
              width="1200"
              height="1450"
              loading="lazy"
            />
            <div className="material-tag">
              <span>VYROBENO</span>
              <strong>V RAJHRADĚ</strong>
            </div>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <article className="service" key={service.label}>
                <div className="service__topline">
                  <span>{service.label}</span>
                  <span aria-hidden="true">↗</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#zkusenost">{service.action}<span aria-hidden="true"> →</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" id="zkusenost" aria-labelledby="trust-title">
        <div className="trust__visual">
          <img
            src="/section-2.webp"
            alt="Hotové oplocení rodinného domu s kovovou bránou"
            width="1500"
            height="1100"
            loading="lazy"
          />
          <blockquote>
            <p>„Komunikace s technikem i montéry byla bezproblémová a termíny platily podle domluvy.“</p>
            <cite>Lucie Pilařová · zákaznice</cite>
          </blockquote>
        </div>

        <div className="trust__content">
          <p className="eyebrow eyebrow--light">ZKUŠENOST MĚŘENÁ V KILOMETRECH</p>
          <h2 id="trust-title">Ploty stavíme tak, aby se k nim nemuselo vracet.</h2>
          <p className="trust__lead">
            Od prvního zaměření po usazení brány jednáte s lidmi, kteří oplocení vyrábějí a montují každý den. Žádné přehazování odpovědnosti mezi dodavateli.
          </p>

          <dl className="facts">
            <div>
              <dt>1994</dt>
              <dd>rok, kdy jsme v Rajhradě postavili první plot</dd>
            </div>
            <div>
              <dt>2 650 bm</dt>
              <dd>pletiva vyrobíme během jedné směny</dd>
            </div>
            <div>
              <dt>27 825 m²</dt>
              <dd>skladů, výrobních hal a prodejen</dd>
            </div>
          </dl>

          <div className="trust__note">
            <span className="trust__stamp" aria-hidden="true">K</span>
            <p><strong>Prohlédněte si materiál naživo.</strong><br />Vzorkovna a prodejna: Stará pošta 67, 664 61 Rajhrad.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

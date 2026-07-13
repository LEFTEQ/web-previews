export default function Page() {
  const services = [
    {
      medium: "PLYN",
      title: "Rozvody plynu",
      text: "Nové rozvody, úpravy přípojek i bezpečné napojení spotřebičů pro byty, domy a provozy.",
    },
    {
      medium: "TEPLO",
      title: "Kotelny a vytápění",
      text: "Stavby a rekonstrukce kotelen, výměníkových stanic i rozvodů ústředního vytápění.",
    },
    {
      medium: "VODA",
      title: "Voda a zdravotechnika",
      text: "Vodoinstalační práce, rozvody vody a zdravotní instalace při rekonstrukcích i nové výstavbě.",
    },
    {
      medium: "KONTROLA",
      title: "Servis a revize",
      text: "Kontrola instalací, servisní zásahy a revizní činnost, na které můžete navázat další práce.",
    },
  ];

  return (
    <main className="proinstal">
      <title>Proinstal | Plyn, voda a topení v Českých Budějovicích</title>
      <meta
        name="description"
        content="Proinstal z Českých Budějovic zajišťuje rozvody plynu a vody, ústřední vytápění, kotelny, servis a revize."
      />
      <meta property="og:title" content="Proinstal | Plyn, voda a topení" />
      <meta
        property="og:description"
        content="Instalace, kotelny, servis a revize v Českých Budějovicích."
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/hero.webp" />
      <meta property="og:locale" content="cs_CZ" />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__photo" aria-hidden="true">
          <img
            src="/hero.webp"
            alt=""
            width="1600"
            height="1100"
            fetchPriority="high"
          />
        </div>

        <header className="site-header">
          <a className="wordmark" href="#zacatek" aria-label="Proinstal – začátek stránky">
            <span>pro</span><strong>instal</strong>
          </a>
          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Služby</a>
            <a href="#firma">O firmě</a>
          </nav>
          <a className="phone-link phone-link--header" href="tel:+420387220241">
            387 220 241
          </a>
        </header>

        <div className="hero__content" id="zacatek">
          <p className="eyebrow">Plynařství · České Budějovice</p>
          <h1 id="hero-title">
            Každý spoj
            <span>musí držet.</span>
          </h1>
          <p className="hero__lead">
            Rozvody plynu, vody a tepla děláme tak, aby spolehlivě sloužily za zdí, pod podlahou i v kotelně.
          </p>
          <div className="hero__actions">
            <a className="button" href="tel:+420387220241">Zavolat instalatéra</a>
            <a className="text-link" href="#sluzby">Prohlédnout služby <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="pipe-route" aria-hidden="true">
          <span className="pipe-route__cap" />
          <span className="pipe-route__joint pipe-route__joint--one" />
          <span className="pipe-route__joint pipe-route__joint--two" />
        </div>

        <div className="hero__stamp">
          <span>Výjezd z Nemanické</span>
          <strong>České Budějovice</strong>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Co pro vás zapojíme</p>
          <h2 id="services-title">Od přívodu až po radiátor.</h2>
          <p>
            Jedna firma pro instalace, technické zázemí i následnou kontrolu. Domluvíte se přímo s řemeslníky z Budějovic.
          </p>
        </div>

        <div className="services__layout">
          <figure className="service-photo">
            <img
              src="/section-1.webp"
              alt="Detail odborně provedeného potrubního rozvodu"
              width="1000"
              height="1200"
              loading="lazy"
            />
            <figcaption>Čisté vedení. Přístupné spoje. Jasně označené médium.</figcaption>
          </figure>

          <div className="service-list">
            {services.map((service) => (
              <article className="service" key={service.medium}>
                <span className="service__medium">{service.medium}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" id="firma" aria-labelledby="trust-title">
        <div className="trust__image">
          <img
            src="/section-2.webp"
            alt="Technik společnosti Proinstal při práci na plynové instalaci"
            width="1400"
            height="1050"
            loading="lazy"
          />
          <div className="trust__image-label">Řemeslo z Českých Budějovic</div>
        </div>

        <div className="trust__content">
          <p className="eyebrow">Kdo přijede</p>
          <h2 id="trust-title">Proinstal.<br />Bez prostředníků.</h2>
          <p className="trust__intro">
            Jsme místní instalační firma se zázemím na Nemanické. Řešíme běžné opravy i celé rozvody pro rekonstrukce, kotelny a výměníkové stanice.
          </p>

          <dl className="company-facts">
            <div>
              <dt>Sídlo</dt>
              <dd>Nemanická 440/14<br />370 10 České Budějovice 3</dd>
            </div>
            <div>
              <dt>Firma</dt>
              <dd>Proinstal, s.r.o.<br />IČ 49023471 · plátce DPH</dd>
            </div>
            <div>
              <dt>Domluva</dt>
              <dd><a href="tel:+420387220241">387 220 241</a><br />Zavolejte a popište, co potřebujete.</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}

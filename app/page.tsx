export default function Page() {
  const services = [
    {
      id: "01",
      title: "Občanské a veřejné stavby",
      body: "Školy, fakulty, úřady a kulturní objekty. Stavíme pro města, kraje i stát — často ze zdrojů evropských a státních dotačních fondů, s dokumentací, kterou uhájíme před každou kontrolou."
    },
    {
      id: "02",
      title: "Bytové a průmyslové objekty",
      body: "Bytové domy, výrobní haly a provozní zázemí. Od základové desky po kolaudaci — v termínu, v dohodnuté kvalitě a za cenu, na které jsme se domluvili předem."
    },
    {
      id: "03",
      title: "Památkově chráněné objekty",
      body: "Historické fasády, klenby a krovy vracíme do života s respektem k původnímu řemeslu. Pracujeme podle podmínek památkářů a s materiály, které do objektu patří."
    },
    {
      id: "04",
      title: "Od projektu po klíč",
      body: "Projektová příprava, inženýrská činnost i vlastní realizace pod jednou střechou. Jeden partner od prvního výkresu po předání hotového díla."
    }
  ];

  const facts = [
    { k: "1990", v: "rok založení firmy v Hradci Králové" },
    { k: "3 kraje", v: "východní, střední a severní Čechy" },
    { k: "ISO · NBÚ", v: "certifikát ČSN EN ISO a osvědčení NBÚ" }
  ];

  return (
    <main className="pr-page">
      <header className="pr-top">
        <a className="pr-mark" href="#" aria-label="PRIMA spol. s r.o. — domů">
          <span className="pr-mark-name">PRIMA</span>
          <span className="pr-mark-sub">spol. s r.o. · stavby</span>
        </a>
        <nav className="pr-nav" aria-label="Hlavní navigace">
          <a href="#sluzby">Co stavíme</a>
          <a href="#firma">O firmě</a>
          <a className="pr-nav-cta" href="#kontakt">Poptat stavbu</a>
        </nav>
      </header>

      <section className="pr-hero" id="hero">
        <div className="pr-hero-media">
          <img src="/hero.webp" alt="Rozestavěná budova Farmaceutické fakulty v Hradci Králové realizovaná firmou PRIMA" />
          <div className="pr-hero-scrim" aria-hidden="true" />
        </div>
        <div className="pr-hero-inner">
          <p className="pr-eyebrow">Stavební společnost · Hradec Králové · od roku 1990</p>
          <h1 className="pr-hero-title">
            Postavíme to,<br />co má stát <span className="pr-accent">desítky let.</span>
          </h1>
          <p className="pr-hero-lead">
            Občanské, bytové, průmyslové i památkově chráněné stavby ve východních,
            středních a severních Čechách. V termínu, v dohodnuté kvalitě a za cenu,
            na které jsme se domluvili předem.
          </p>
          <div className="pr-hero-actions">
            <a className="pr-btn" href="#kontakt">Poptat stavbu</a>
            <a className="pr-btn pr-btn-ghost" href="#firma">Reference a profil</a>
          </div>
        </div>
        <figcaption className="pr-hero-caption">
          <span className="pr-caption-tag">Referenční stavba</span>
          <span>Farmaceutická fakulta, Hradec Králové — náklady 37 656 608 Kč, realizace 10/2013–01/2015</span>
        </figcaption>
      </section>

      <section className="pr-services" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="pr-section-head">
          <p className="pr-eyebrow">Co pro vás postavíme</p>
          <h2 id="sluzby-nadpis" className="pr-h2">Čtyři obory, jeden partner od výkresu po klíč</h2>
        </div>
        <ol className="pr-service-list">
          {services.map((s) => (
            <li className="pr-service" key={s.id}>
              <span className="pr-service-num" aria-hidden="true">{s.id}</span>
              <div className="pr-service-text">
                <h3 className="pr-h3">{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <figure className="pr-service-figure">
          <img src="/section-1.webp" alt="Detail stavby realizované firmou PRIMA spol. s r.o." />
        </figure>
      </section>

      <section className="pr-about" id="firma" aria-labelledby="firma-nadpis">
        <figure className="pr-about-figure">
          <img src="/section-2.webp" alt="Dokončený objekt postavený stavební firmou PRIMA v regionu východních Čech" />
        </figure>
        <div className="pr-about-text">
          <p className="pr-eyebrow">O firmě</p>
          <h2 id="firma-nadpis" className="pr-h2">Stabilní stavař středních Čech — s historií, kterou dohledáte</h2>
          <p className="pr-about-lead">
            PRIMA spol. s r.o. vznikla v Hradci Králové roku 1990. Za tři desetiletí
            jsme se stali stabilní stavební společností střední velikosti s jasnou
            historií realizovaných zakázek — pro soukromé i veřejné investory.
          </p>
          <p className="pr-about-body">
            Orientace na zákazníka a kvalita odvedené práce v krátkých termínech nám
            získaly důvěru investorů i projektantů. Umíme zakázky financované
            z evropských a státních dotačních fondů, kde na dokumentaci a termínech
            záleží úplně nejvíc.
          </p>
          <dl className="pr-facts">
            {facts.map((f) => (
              <div className="pr-fact" key={f.k}>
                <dt>{f.k}</dt>
                <dd>{f.v}</dd>
              </div>
            ))}
          </dl>
          <ul className="pr-certs" aria-label="Certifikáty a osvědčení">
            <li>Certifikát ČSN EN ISO</li>
            <li>Osvědčení NBÚ</li>
            <li>Zelená úsporám — seznam odborných firem</li>
          </ul>
          <address className="pr-contact" id="kontakt">
            <span className="pr-contact-line">Bratří Štefanů 973, Hradec Králové 500 03</span>
            <a href="mailto:prima@primahk.cz">prima@primahk.cz</a>
            <span className="pr-contact-line pr-muted">IČ 00486361</span>
          </address>
        </div>
      </section>
    </main>
  );
}

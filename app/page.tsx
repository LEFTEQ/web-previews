export default function Page() {
  const services = [
    {
      title: "Šikmé střechy",
      text: "Kompletní skladba střechy pro rodinné, bytové i komerční domy — krov, krytina, oplechování i střešní okna.",
      detail: "Pálená a betonová taška · plech · šindel · vláknocement",
    },
    {
      title: "Ploché střechy",
      text: "Kotvené a přitížené střechy, terasy, balkóny i vegetační souvrství s důrazem na spolehlivou hydroizolaci.",
      detail: "mPVC fólie · asfaltové pásy · dlažba na terčích · zeleň",
    },
    {
      title: "Provětrávané fasády",
      text: "Odolný obvodový plášť, který chrání stavbu, odvádí vlhkost a dává domu přesný, současný výraz.",
      detail: "Plech · dřevo · desky · vláknocement",
    },
    {
      title: "Dřevostavby",
      text: "Nosné konstrukce, pergoly a terasy z kvalitního konstrukčního dřeva, připravené pro dlouhou životnost.",
      detail: "KVH · BSH · hoblované prvky · zakázkové konstrukce",
    },
  ];

  return (
    <main className="alfa">
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero__image"
          src="/hero.webp"
          alt="Pokrývač při práci na střeše v Hradci Králové"
          width="1920"
          height="1280"
          fetchPriority="high"
        />
        <div className="hero__shade" aria-hidden="true" />

        <header className="site-head">
          <a className="wordmark" href="#uvod" aria-label="Alfa CZ — úvodní stránka">
            <span className="wordmark__roof" aria-hidden="true" />
            <span>ALFA</span>
            <small>CZ · STŘECHY</small>
          </a>

          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Co děláme</a>
            <a href="#pristup">Jak pracujeme</a>
          </nav>

          <a className="head-phone" href="tel:+420605241416">
            <span>Volejte</span>
            +420 605 241 416
          </a>
        </header>

        <div className="hero__content" id="uvod">
          <p className="eyebrow">Pokrývačství · Hradec Králové</p>
          <h1 id="hero-title">
            Střecha drží,
            <span>když drží každý detail.</span>
          </h1>
          <p className="hero__lead">
            Stavíme a opravujeme šikmé i ploché střechy. Tesařinu,
            krytinu, klempířské prvky a okna řeší jeden zkušený tým.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="tel:+420605241416">
              Zavolat kvůli střeše
              <span aria-hidden="true">↗</span>
            </a>
            <a className="button button--quiet" href="mailto:alfacz@alfa-strechy.cz">
              Napsat e-mail
            </a>
          </div>
        </div>

        <div className="roof-cut" aria-hidden="true">
          <span className="roof-cut__line" />
          <span className="roof-cut__joint roof-cut__joint--one" />
          <span className="roof-cut__joint roof-cut__joint--two" />
          <span className="roof-cut__joint roof-cut__joint--three" />
        </div>

        <p className="hero__location">Resslova 929 · Hradec Králové</p>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-intro">
          <p className="section-label">Střecha jako celek</p>
          <h2 id="services-title">Od krovu až po poslední lem.</h2>
          <p>
            Nemusíte koordinovat několik řemesel. Navrhneme návaznosti,
            vybereme vhodnou skladbu a provedeme vše, co má stavbu chránit
            před vodou, větrem i časem.
          </p>
        </div>

        <div className="services__visual">
          <img
            src="/section-1.webp"
            alt="Detail přesně položené střešní krytiny a klempířských prvků"
            width="1200"
            height="900"
            loading="lazy"
          />
          <div className="material-note">
            <span>Materiály podle stavby</span>
            <strong>Taška / plech / fólie / dřevo</strong>
          </div>
        </div>

        <div className="service-list">
          {services.map((service) => (
            <article className="service" key={service.title}>
              <span className="service__mark" aria-hidden="true" />
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <small>{service.detail}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="approach" id="pristup" aria-labelledby="approach-title">
        <div className="approach__image-wrap">
          <img
            src="/section-2.webp"
            alt="Hotová střecha rodinného domu realizovaná pokrývači Alfa CZ"
            width="1400"
            height="1050"
            loading="lazy"
          />
          <p>Rodinné domy · bytové domy · komerční objekty</p>
        </div>

        <div className="approach__content">
          <p className="section-label">Práce, která obstojí v dešti</p>
          <h2 id="approach-title">Nezakrýváme chyby krytinou.</h2>
          <p className="approach__lead">
            Dobrá střecha začíná pod povrchem. Kontrolujeme podklad,
            napojení, spád i odvodnění dřív, než položíme finální vrstvu.
            Dostanete řešení, které odpovídá konkrétní stavbě — ne univerzální balíček.
          </p>

          <dl className="proof-list">
            <div>
              <dt>Jeden tým</dt>
              <dd>Tesařské, pokrývačské a klempířské práce na sebe skutečně navazují.</dd>
            </div>
            <div>
              <dt>Správná skladba</dt>
              <dd>Materiál volíme podle sklonu, konstrukce a způsobu užívání budovy.</dd>
            </div>
            <div>
              <dt>Místní domluva</dt>
              <dd>Jsme v Hradci Králové a zakázku řešíte přímo s lidmi, kteří ji provedou.</dd>
            </div>
          </dl>

          <div className="direct-contact" aria-label="Přímý kontakt">
            <p>Potřebujete posoudit novou střechu nebo opravu?</p>
            <a href="tel:+420605241416">+420 605 241 416</a>
            <a href="mailto:alfacz@alfa-strechy.cz">alfacz@alfa-strechy.cz</a>
          </div>
        </div>
      </section>
    </main>
  );
}

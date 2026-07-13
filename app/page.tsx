export default function Page() {
  const services = [
    {
      title: "Přezutí osobních vozů",
      text: "Výměna kompletních kol i přezutí pneumatik včetně vyvážení. Domluvíme konkrétní čas, ať u nás zbytečně nečekáte.",
      tag: "Osobní vozy",
    },
    {
      title: "Dodávky a nákladní vozy",
      text: "Technika a zkušenosti pro užitkové i nákladní pneumatiky. Praktické řešení pro řidiče i místní firemní flotily.",
      tag: "Užitkové a nákladní",
    },
    {
      title: "Uskladnění pneumatik",
      text: "Vaše druhá sada zůstane bezpečně u nás ve Chvojenci. Zákazníkům pneuservisu ji uskladníme zdarma.",
      tag: "Zdarma pro zákazníky",
    },
  ];

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Žídek pneuservis – úvod">
            <span className="wordmark-mark" aria-hidden="true">Ž</span>
            <span>
              <strong>Žídek</strong>
              <small>pneuservis · Chvojenec</small>
            </span>
          </a>

          <div className="header-contact">
            <span className="header-note">Pardubice · Holice · Hradec Králové</span>
            <a href="tel:+420777155551">+420 777 155 551</a>
          </div>
        </header>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow"><span aria-hidden="true" /> Pneuservis ve Chvojenci</p>
            <h1 id="hero-title">
              Přezuto.
              <span>Bez zbytečného čekání.</span>
            </h1>
            <p className="hero-lead">
              Rychlé přezutí a vyvážení pneumatik pro osobní, užitkové i nákladní vozy. Snadno dostupní z Pardubic, Holic i Hradce Králové.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="tel:+420777155551">
                Zavolat do pneuservisu <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#sluzby">Co pro vás uděláme <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-facts" aria-label="Praktické informace">
              <div>
                <span>Provozovna</span>
                <strong>Chvojenec 249</strong>
              </div>
              <div>
                <span>Platba</span>
                <strong>Kartou i hotově</strong>
              </div>
              <div>
                <span>Zkušenosti</span>
                <strong>Od roku 1992</strong>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="tire-frame">
              <img
                src="/hero.webp"
                alt="Mechanik pneuservisu Žídek při práci na kole automobilu"
                width="1200"
                height="1500"
                fetchPriority="high"
              />
              <div className="tread" aria-hidden="true">
                <i /><i /><i /><i /><i /><i />
              </div>
            </div>
            <div className="availability">
              <span className="availability-dot" aria-hidden="true" />
              <span><small>Objednání termínu</small>Telefonicky bez formulářů</span>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow"><span aria-hidden="true" /> Pod jednou střechou</p>
          <h2 id="services-title">Kola připravíme na další sezonu.</h2>
          <p>Od běžného přezutí až po pneumatiky pro pracovní vůz. Řekněte nám, čím jezdíte, a rovnou vám potvrdíme možnosti i termín.</p>
        </div>

        <div className="services-layout">
          <div className="service-image image-panel">
            <img
              src="/section-1.webp"
              alt="Detail profesionálního vybavení pneuservisu ve Chvojenci"
              width="1400"
              height="1050"
              loading="lazy"
            />
            <span className="image-label">Dílna · Chvojenec</span>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-item" key={service.title}>
                <span className="service-tag">{service.tag}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" aria-labelledby="trust-title">
        <div className="trust-image image-panel">
          <img
            src="/section-2.webp"
            alt="Zázemí rodinné firmy AUTOTRANSPORT Žídek v Chvojenci"
            width="1400"
            height="1050"
            loading="lazy"
          />
          <span className="image-label image-label-light">Rodinná firma · od 1992</span>
        </div>

        <div className="trust-copy">
          <p className="eyebrow eyebrow-light"><span aria-hidden="true" /> Místní servis, skuteční lidé</p>
          <h2 id="trust-title">Víme, že auto potřebujete zpátky na silnici.</h2>
          <p className="trust-lead">
            Martin Žídek začal v roce 1992 s jediným nákladním vozem. Dnes se ve Chvojenci staráme o pneumatiky osobních aut, dodávek i nákladních vozů — pořád prakticky, osobně a bez anonymní zákaznické linky.
          </p>

          <div className="trust-points">
            <div>
              <strong>Termín po telefonu</strong>
              <span>Hned víte, kdy přijet a co bude potřeba.</span>
            </div>
            <div>
              <strong>Pneumatiky bez starostí</strong>
              <span>Přezujeme, vyvážíme a druhou sadu uskladníme.</span>
            </div>
            <div>
              <strong>Dobře dostupná dílna</strong>
              <span>Chvojenec 249, přímo na trase mezi Holicemi a Hradcem.</span>
            </div>
          </div>

          <div className="direct-contact">
            <div>
              <span>Objednávky pneuservisu</span>
              <a href="tel:+420777155551">+420 777 155 551</a>
            </div>
            <a className="contact-mail" href="mailto:autotransport.zidek@seznam.cz">autotransport.zidek@seznam.cz</a>
          </div>
        </div>
      </section>
    </main>
  );
}

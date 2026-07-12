export default function Page() {
  const services = [
    {
      title: "Kompletní účetnictví",
      description:
        "Vedeme účetní knihy, hlídáme úhrady, připravíme DPH, uzávěrku i daňová přiznání. Vy máte průběžný přehled, ne překvapení na konci roku.",
      detail: "POHODA · Tax · WinFas · Swan · Stereo",
    },
    {
      title: "Daňová evidence",
      description:
        "Pro živnostníky a menší podnikatele evidujeme příjmy, výdaje, majetek i závazky tak, aby všechno sedělo a bylo včas.",
      detail: "OSVČ · spolky · neziskové organizace",
    },
    {
      title: "Mzdy a personalistika",
      description:
        "Zpracujeme mzdy, přihlášky, odhlášky i podklady pro úřady. Termíny a změny v legislativě hlídáme za vás.",
      detail: "PAMICA · pravidelné měsíční zpracování",
    },
    {
      title: "Účetní poradenství",
      description:
        "Srozumitelně vysvětlíme, co čísla znamenají pro vaše rozhodování. Doporučení dostanete dřív, než se z drobnosti stane problém.",
      detail: "Telefonicky · e-mailem · osobně",
    },
  ];

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <header className="topbar">
          <a className="wordmark" href="#zacatek" aria-label="KABO CZ – úvod">
            <span className="wordmark-main">KABO</span>
            <span className="wordmark-mark">CZ</span>
            <span className="wordmark-sub">účetní kancelář</span>
          </a>

          <nav className="nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Služby</a>
            <a href="#duvera">Proč KABO</a>
            <a className="nav-phone" href="tel:+420606235449">
              606 235 449
            </a>
          </nav>
        </header>

        <div className="hero-grid" id="zacatek">
          <div className="hero-copy">
            <p className="eyebrow">Účetní kancelář · Hradec Králové</p>
            <h1 id="hero-title">
              Účetnictví,
              <span>které sedí</span>
              do haléře.
            </h1>
            <p className="hero-lead">
              Účetnictví, daně, mzdy a personalistika pro živnostníky,
              firmy, spolky i neziskové organizace. Vy se věnujete své práci,
              my hlídáme čísla a termíny.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="tel:+420606235449">
                Zavolat účetní
              </a>
              <a className="button button-secondary" href="mailto:info@kabocz.cz">
                Napsat na info@kabocz.cz
              </a>
            </div>
            <p className="availability">
              Působíme v Královéhradeckém a Pardubickém kraji i v Praze.
            </p>
          </div>

          <div className="hero-visual">
            <img
              src="/hero.webp"
              alt="Účetní KABO CZ při kontrole firemních dokladů a výkazů"
            />
            <div className="ledger-card" aria-label="Základní údaje o KABO CZ">
              <div className="ledger-heading">
                <span>Kontrolní součet</span>
                <strong>SEDÍ</strong>
              </div>
              <dl>
                <div>
                  <dt>Zkušenost týmu</dt>
                  <dd>10+ let</dd>
                </div>
                <div>
                  <dt>Pojištění odpovědnosti</dt>
                  <dd>1 000 000 Kč</dd>
                </div>
              </dl>
              <span className="ledger-stamp">ZKONTROLOVÁNO</span>
            </div>
            <div className="accounting-axis" aria-hidden="true">
              <span>MÁ DÁTI</span>
              <i />
              <span>DAL</span>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-intro">
          <div>
            <p className="eyebrow">Co převezmeme za vás</p>
            <h2 id="services-title">Od dokladu po uzávěrku.</h2>
          </div>
          <p>
            Rozsah spolupráce nastavíme podle vašeho provozu. Můžete nám
            svěřit celou agendu, nebo jen oblast, na kterou interně nestačíte.
          </p>
        </div>

        <div className="services-layout">
          <figure className="service-image">
            <img
              src="/section-1.webp"
              alt="Pečlivé třídění faktur a účetních podkladů v kanceláři KABO CZ"
            />
            <figcaption>
              Doklady zpracujeme v systému, který už ve firmě používáte.
            </figcaption>
          </figure>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-item" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span>{service.detail}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" id="duvera" aria-labelledby="trust-title">
        <div className="trust-grid">
          <div className="trust-copy">
            <p className="eyebrow">Čísla jsou citlivá věc</p>
            <h2 id="trust-title">Proto za nimi vždy najdete člověka.</h2>
            <p className="trust-lead">
              Nečekáme, až se ozvete s problémem. Upozorníme na termín,
              nesrovnalost i příležitost a vysvětlíme další krok běžnou češtinou.
              Profesní odpovědnost máme pojištěnou do jednoho milionu korun.
            </p>

            <blockquote>
              <p>
                „Oceňuju hlavně vřelý a osobní přístup ke každému klientovi
                a přizpůsobení nabídky na míru.“
              </p>
              <cite>
                Andrej Schnieder
                <span>Coffee factory s.r.o.</span>
              </cite>
            </blockquote>

            <div className="client-line" aria-label="Výběr klientů KABO CZ">
              <span>Spoléhají na nás také</span>
              <p>
                Zemědělské družstvo Libčany · Pasivní domy Hradec Králové ·
                Šafář &amp; Partners · IVT Pardubice
              </p>
            </div>
          </div>

          <figure className="trust-image">
            <img
              src="/section-2.webp"
              alt="Osobní konzultace klienta s účetní KABO CZ v Hradci Králové"
            />
            <figcaption>
              <strong>Osobně, telefonicky i e-mailem.</strong>
              <span>Podle toho, co vyhovuje vašemu podnikání.</span>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}

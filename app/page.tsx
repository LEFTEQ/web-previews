import React from "react";

export default function Page() {
  const services = [
    {
      no: "01",
      title: "Měření zraku",
      lead: "Přesná refrakce, ne odhad.",
      body: "Vyšetření na moderní vyšetřovací jednotce. Změříme dioptrie, astigmatismus i pupilární vzdálenost a vysvětlíme vám každé číslo na receptu. Objednat se stihnete i přes poledne."
    },
    {
      no: "02",
      title: "Dioptrické a sluneční brýle",
      lead: "Obruba, která sedí k obličeji i k životu.",
      body: "Dámské, pánské i dětské kolekce — od zavedených značek po originální kousky, které jinde v Budějcích nenajdete. Sluneční skla s ochranou UV400 celoročně."
    },
    {
      no: "03",
      title: "Kontaktní čočky",
      lead: "Poradíme a naučíme vás s nimi.",
      body: "Vybereme typ čoček podle vašich očí a zvyků. U pultu si s vámi projdeme nasazování i péči, dokud si nebudete jistí — a čočky pak dodáme opakovaně na doma."
    },
    {
      no: "04",
      title: "Screening zraku",
      lead: "Prevence, která se za vámi vypraví.",
      body: "Orientační screening děláme i na veřejných akcích a ve firmách. Přijedeme za vaším týmem a otestujeme zrak přímo na pracovišti."
    }
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Gemini oční optika, České Budějovice">
          <span className="wordmark__gem">◇◇</span>
          <span className="wordmark__name">Gemini</span>
          <span className="wordmark__sub">oční optika · České Budějovice</span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#o-nas">O nás</a>
          <a className="topnav__cta" href="#objednat">Objednat měření</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Optika v centru Českých Budějovic</p>
            <h1 id="hero-title">
              Vidět <em>ostře</em>
              <br />začíná u <span className="hl">přesného měření.</span>
            </h1>
            <p className="hero__lead">
              Naměříme vám dioptrie do desetiny, vybereme obrubu k obličeji
              a brýle vybrousíme na míru. Bez tlaku, bez zbytečných řečí —
              jen dobře vidět.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#objednat">Objednat měření zraku</a>
              <a className="btn btn--ghost" href="#sluzby">Co u nás najdete</a>
            </div>
            <dl className="hero__facts">
              <div><dt>Refrakce</dt><dd>na míru, ne z tabulek</dd></div>
              <div><dt>Broušení</dt><dd>skla přímo v optice</dd></div>
              <div><dt>Poradna</dt><dd>čočky i obruby s vámi</dd></div>
            </dl>
          </div>
          <figure className="hero__media">
            <img src="/hero.webp" alt="Detail brýlových obrub a měřicího přístroje v oční optice Gemini" />
            <figcaption>Vyšetřovací jednotka · pobočka České Budějovice</figcaption>
          </figure>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-head">
          <p className="eyebrow eyebrow--dark">Co pro váš zrak uděláme</p>
          <h2 id="services-title">Čtyři kroky k lepšímu vidění</h2>
          <p className="section-head__note">
            Od změření až po hotové brýle vás provede jeden člověk, který vaše oči zná.
          </p>
        </div>

        <div className="services__layout">
          <ol className="services__list">
            {services.map((s) => (
              <li className="svc" key={s.no}>
                <span className="svc__no" aria-hidden="true">{s.no}</span>
                <div className="svc__text">
                  <h3>{s.title}</h3>
                  <p className="svc__lead">{s.lead}</p>
                  <p className="svc__body">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <figure className="services__media">
            <img src="/section-1.webp" alt="Výběr dioptrických a slunečních brýlí na pobočce Gemini" />
            <figcaption>Kolekce, které v Budějcích jinde nenajdete</figcaption>
          </figure>
        </div>
      </section>

      <section className="about" id="o-nas" aria-labelledby="about-title">
        <div className="about__grid">
          <figure className="about__media">
            <img src="/section-2.webp" alt="Optik při konzultaci se zákazníkem v oční optice Gemini" />
          </figure>
          <div className="about__copy">
            <p className="eyebrow eyebrow--dark">Proč právě k nám</p>
            <h2 id="about-title">Nejsme prodejna brýlí. Jsme moderní optika.</h2>
            <p className="about__lead">
              Personál je proškolený na očních klinikách Gemini. To znamená,
              že za pultem stojí někdo, kdo zraku rozumí — a poradí i tehdy,
              když si nejste jistí, co vlastně potřebujete.
            </p>
            <ul className="pillars">
              <li>
                <h3>Kvalita, kterou uvidíte</h3>
                <p>Obruby i skla vybíráme od předních výrobců. Levné zkratky u očí neděláme.</p>
              </li>
              <li>
                <h3>Odbornost z klinik Gemini</h3>
                <p>Zkušený tým a špičkové vybavení — najdeme řešení i pro složitější dioptrie.</p>
              </li>
              <li>
                <h3>Individuální přístup</h3>
                <p>Každý zákazník je jiný. Navrhneme to, co sedí právě vám, ne to nejdražší.</p>
              </li>
            </ul>
            <div className="about__contact" id="objednat">
              <p className="about__contact-line">
                <strong>Objednejte se na měření zraku</strong> — stavte se v centru
                Českých Budějovic nebo napište.
              </p>
              <p className="about__reach">
                <a href="tel:+420736646105">+420 736 646 105</a>
                <span aria-hidden="true">·</span>
                <a href="mailto:info@geminioptika.cz">info@geminioptika.cz</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

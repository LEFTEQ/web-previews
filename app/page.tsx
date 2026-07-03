import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      code: "01",
      title: "Servis a diagnostika",
      time: "Do 3 dnů",
      desc: "Kompletní prohlídka, seřízení řazení a brzd, výplet, výměna řetězu a kazety. Poctivá práce od lidí, kteří sami jezdí.",
      cta: "Poptat servis",
    },
    {
      code: "02",
      title: "Retül Fit — nastavení posedu",
      time: "90 minut",
      desc: "Změříme vaše tělo v pohybu a doladíme sedlo, kokpit i vazby tak, aby vás nic nebolelo a šlapalo se vám líp.",
      cta: "Objednat Retül Fit",
    },
    {
      code: "03",
      title: "Testování kol",
      time: "Půldenní zápůjčka",
      desc: "Než koupíte, projeďte se. Silničky, gravely i elektrokola Specialized si vezmete na okruh kolem Boleveckých rybníků.",
      cta: "Rezervovat testovací kolo",
    },
  ];

  return (
    <main className="cv">
      <header className="cv-topbar">
        <a className="cv-wordmark" href="#" aria-label="Cyklo Vondráček Plzeň — úvod">
          <span className="cv-wordmark-cyklo">CYKLO</span>
          <span className="cv-wordmark-vondracek">Vondráček</span>
          <span className="cv-wordmark-loc">Plzeň · Truhlářská</span>
        </a>
        <nav className="cv-nav" aria-label="Hlavní">
          <a href="#servis">Servis</a>
          <a href="#dilna">Dílna</a>
          <a className="cv-nav-cta" href="#servis">Objednat na servis</a>
        </nav>
      </header>

      <section className="cv-hero" aria-labelledby="cv-hero-title">
        <div className="cv-hero-media">
          <img
            src="/hero.webp"
            alt="Detail kola na servisním stojanu v dílně Cyklo Vondráček v Plzni"
            className="cv-hero-img"
          />
        </div>
        <div className="cv-hero-body">
          <p className="cv-eyebrow">Cykloservis · parkovací dům Rychtářka</p>
          <h1 id="cv-hero-title" className="cv-hero-title">
            Kolo, které<br />
            <span className="cv-hero-accent">jede jako nové</span>
          </h1>
          <p className="cv-hero-lead">
            Přivezte kolo do dílny na Truhlářské. Rozebereme, promažeme, seřídíme —
            a vy odjedete potichu a s jistotou v brzdách. Autorizovaný servis Specialized,
            ale spravíme vám cokoliv, co má dvě kola.
          </p>
          <div className="cv-hero-actions">
            <a className="cv-btn cv-btn-primary" href="#servis">Objednat na servis</a>
            <a className="cv-btn cv-btn-ghost" href="#dilna">Zjistit dostupnost v Plzni</a>
          </div>
          <dl className="cv-hero-stamps">
            <div>
              <dt>Adresa</dt>
              <dd>Truhlářská 2755/5, Plzeň</dd>
            </div>
            <div>
              <dt>Telefon</dt>
              <dd>775 634 775</dd>
            </div>
            <div>
              <dt>Značka</dt>
              <dd>Autorizovaný Specialized</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="cv-services" id="servis" aria-labelledby="cv-services-title">
        <div className="cv-section-head">
          <p className="cv-eyebrow">Co pro vaše kolo uděláme</p>
          <h2 id="cv-services-title" className="cv-section-title">
            Tři věci, kvůli kterým sem jezdí i z okolí Plzně
          </h2>
        </div>
        <ol className="cv-service-list">
          {services.map((s) => (
            <li className="cv-service" key={s.code}>
              <span className="cv-service-code" aria-hidden="true">{s.code}</span>
              <div className="cv-service-main">
                <div className="cv-service-titlerow">
                  <h3 className="cv-service-title">{s.title}</h3>
                  <span className="cv-service-time">{s.time}</span>
                </div>
                <p className="cv-service-desc">{s.desc}</p>
                <a className="cv-service-link" href="#servis">
                  {s.cta}
                  <span aria-hidden="true" className="cv-arrow">→</span>
                </a>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="cv-trust" id="dilna" aria-labelledby="cv-trust-title">
        <div className="cv-trust-media">
          <img
            src="/section-1.webp"
            alt="Mechanik při práci na kole v plzeňské dílně Cyklo Vondráček"
            className="cv-trust-img"
          />
          <img
            src="/section-2.webp"
            alt="Vystavená kola a příslušenství v prodejně Cyklo Vondráček Plzeň"
            className="cv-trust-img cv-trust-img-2"
          />
        </div>
        <div className="cv-trust-body">
          <p className="cv-eyebrow">Parťáci pro vaši cyklistiku</p>
          <h2 id="cv-trust-title" className="cv-section-title">
            Nejsme e-shop se stojanem v rohu. Jsme dílna, u které se dá stát a povídat.
          </h2>
          <p className="cv-trust-lead">
            V Plzni nás najdete přímo v parkovacím domě Rychtářka — přijedete autem s kolem v kufru
            a nemusíte řešit, kam zaparkovat. Kolo si od vás převezmeme, vyzkoušíme ho, a než ho
            pustíme zpátky na silnici, projedeme si s vámi, co jsme dělali a proč.
          </p>
          <ul className="cv-trust-points">
            <li>
              <strong>Jezdíme sami.</strong> Poradíme jako kamarád, ne jako prodavač s tabulkou.
            </li>
            <li>
              <strong>Součást sítě Vondráček.</strong> Pět showroomů v západních Čechách za vámi stojí
              zárukou i skladem dílů.
            </li>
            <li>
              <strong>Řekneme cenu předem.</strong> Než začneme, víte, na čem jste — bez překvapení na účtence.
            </li>
          </ul>
          <div className="cv-trust-contact">
            <a className="cv-btn cv-btn-primary" href="tel:+420775634775">Zavolat do dílny</a>
            <p className="cv-trust-hours">plzen@cyklo-vondracek.cz</p>
          </div>
        </div>
      </section>
    </main>
  );
}

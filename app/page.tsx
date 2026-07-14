export default function Page() {
  return (
    <>
      <header className="vh-nav">
        <div className="vh-nav-inner">
          <span className="vh-wordmark">
            Vla<span className="vh-wordmark-accent">ď</span>ka Hrubá
            <span className="vh-wordmark-sub">hair style</span>
          </span>
          <span className="vh-nav-loc">Pekařská 52 · Brno-střed</span>
        </div>
      </header>

      <main>
        <section className="vh-hero" aria-label="Úvod">
          <div className="vh-hero-media">
            <img
              src="/hero.webp"
              alt="Kadeřnice upravuje dlouhé vlasy klientky v salonu Vlaďka Hrubá hair style"
              className="vh-hero-img"
            />
            <div className="vh-hero-scrim" aria-hidden="true" />
          </div>

          <div className="vh-hero-content">
            <p className="vh-eyebrow">Kadeřnický salon · Pekařská 52, Brno</p>
            <h1 className="vh-hero-title">
              Vaše vlasy<br />jsou vaše já.
            </h1>
            <p className="vh-hero-lede">
              Dovolte si být vidět. Stříháme, tvarujeme a prodlužujeme vlasy
              už přes 30 let — s jehlou, hřebenem a fénem, kterým rozumíme
              stejně dobře jako vašemu příběhu.
            </p>
            <a className="vh-cta" href="tel:+420543215139">
              <span>Rezervovat termín</span>
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <p className="vh-hero-meta">543 215 139 · vladimira.hruba@email.cz</p>
          </div>
        </section>

        <section className="vh-services" aria-labelledby="vh-services-title">
          <div className="vh-section-head">
            <p className="vh-eyebrow">Nabídka salonu</p>
            <h2 id="vh-services-title" className="vh-section-title">
              Od střihu po vlasovou<br />wellness diagnostiku
            </h2>
            <p className="vh-section-lede">
              Specializujeme se na dámské a pánské účesy, prodlužování a
              zahušťování vlasů technikou Great Lengths a péči šitou na míru
              vaší vlasové pokožce. Vybírejte si podle toho, co dnes vaše
              vlasy skutečně potřebují.
            </p>
          </div>

          <ol className="vh-service-list">
            <li className="vh-service">
              <span className="vh-service-num">01</span>
              <div className="vh-service-body">
                <h3>Dámské účesy</h3>
                <p>
                  Od klasického elegantního účesu po odvážný moderní střih.
                  Individuální přístup a péče, díky které se z každé
                  návštěvy stane rituál, na který se budete těšit.
                </p>
              </div>
              <a className="vh-service-link" href="tel:+420543215139">
                Zjistit více · ceník
              </a>
            </li>

            <li className="vh-service">
              <span className="vh-service-num">02</span>
              <div className="vh-service-body">
                <h3>Pánské účesy</h3>
                <p>
                  Přesný střih, čistá linie, žádné kompromisy. Sledujeme
                  aktuální trendy a s nadšením tvoříme účesy, které podtrhnou
                  vaši osobnost.
                </p>
              </div>
              <a className="vh-service-link" href="tel:+420543215139">
                Zjistit více · ceník
              </a>
            </li>

            <li className="vh-service">
              <span className="vh-service-num">03</span>
              <div className="vh-service-body">
                <h3>Prodlužování vlasů</h3>
                <p>
                  Přes 30 let praxe s technikou Great Lengths. Moderní metody
                  zajistí přirozený vzhled, který dokonale splyne s vašimi
                  vlastními vlasy — bez zátěže a poškození.
                </p>
              </div>
              <a className="vh-service-link" href="tel:+420543215139">
                Zjistit více · ceník
              </a>
            </li>

            <li className="vh-service">
              <span className="vh-service-num">04</span>
              <div className="vh-service-body">
                <h3>Vlasové wellness</h3>
                <p>
                  Diagnostickou kamerou zanalyzujeme stav vlasů i pokožky
                  hlavy a vybereme péči přímo na míru — od kryoterapie po
                  organickou kosmetiku Oway.
                </p>
              </div>
              <a className="vh-service-link" href="tel:+420543215139">
                Zjistit více · ceník
              </a>
            </li>
          </ol>
        </section>

        <section className="vh-trust" aria-labelledby="vh-trust-title">
          <div className="vh-trust-media">
            <img
              src="/section-1.webp"
              alt="Interiér salonu Vlaďka Hrubá hair style na Pekařské ulici v Brně"
              className="vh-trust-img"
            />
          </div>

          <div className="vh-trust-content">
            <p className="vh-eyebrow">Salon na Pekařské</p>
            <h2 id="vh-trust-title" className="vh-section-title">
              Interiér navržený<br />architektem, péče<br />ověřená lety praxe
            </h2>
            <p className="vh-section-lede">
              Náš salon vznikl ve spolupráci s architektem Ing. arch. Filipem
              Wicherkem — útulná atmosféra spojená s nadčasovým, moderním
              prostředím. Pracujeme výhradně s produkty značek L&apos;Oréal,
              Kérastase, Oway a Great Lengths.
            </p>

            <div className="vh-trust-grid">
              <div className="vh-trust-card">
                <h3>Náš tým</h3>
                <p>
                  Sehraný tým kadeřnic, které se neustále vzdělávají a žijí
                  pro tuhle práci. Naším cílem je nejen krásný účes, ale i
                  úsměv na tváři.
                </p>
              </div>
              <div className="vh-trust-card">
                <h3>Rezervace a storno</h3>
                <p>
                  Rezervaci prosíme rušte či přesouvejte nejpozději 48 hodin
                  předem — pomůže nám to nabídnout termín jiné klientce.
                </p>
              </div>
            </div>

            <div className="vh-trust-photo">
              <img
                src="/section-2.webp"
                alt="Detail hotového účesu z salonu Vlaďka Hrubá hair style"
                className="vh-trust-img"
              />
            </div>

            <address className="vh-address">
              Pekařská 52, 602 00 Brno-střed<br />
              <a href="tel:+420543215139">543 215 139</a> ·{" "}
              <a href="mailto:vladimira.hruba@email.cz">
                vladimira.hruba@email.cz
              </a>
            </address>
          </div>
        </section>
      </main>
    </>
  );
}

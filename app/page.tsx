import type { CSSProperties } from "react";

export default function Page() {
  const trades = [
    {
      no: "01",
      title: "Krovy a konstrukce",
      lead: "Klasické vázané krovy i moderní vazníky",
      body: "Zaměříme, navrhneme a osadíme celý krov — od pozednic po hřebenovou vaznici. Spoje tesaříme na míru, dřevo napouštíme proti dřevokaznému hmyzu a houbám. Na místě jen montáž, hrubá práce je hotová v dílně.",
    },
    {
      no: "02",
      title: "Dřevostavby na klíč",
      lead: "Rodinné domy i přístavby z rostlého dřeva",
      body: "Dodáváme celou stavbu včetně souvisejících řemesel — základovou desku, hrubou stavbu, střechu i vnitřní úpravy. Jedna smlouva, jeden odpovědný tým, jeden termín, který držíme.",
    },
    {
      no: "03",
      title: "Provětrávané fasády",
      lead: "Dřevěné i deskové obklady s odvětranou mezerou",
      body: "Roštový systém, který nechá stěnu dýchat a odvede vlhkost. Dům je v létě chladnější, v zimě sušší a obklad vydrží roky bez oprav. Vybereme profil i odstín, který sedí k domu.",
    },
    {
      no: "04",
      title: "Opravy historických budov",
      lead: "Sanace krovů, výměny poškozených prvků",
      body: "Umíme protézovat trámy, doplňovat tesařské spoje původní technikou a spolupracovat s památkáři. Zachráníme, co se zachránit dá, a nahradíme jen to, co už nedrží.",
    },
  ];

  return (
    <main className="lp-main">
      <header className="lp-nav" aria-label="Hlavní navigace">
        <a className="lp-brand" href="#uvod" aria-label="Lob Plus — tesařství Plzeň">
          <span className="lp-brand-mark" aria-hidden="true">
            <span className="lp-brand-notch" />
          </span>
          <span className="lp-brand-text">
            <span className="lp-brand-name">Lob&nbsp;Plus</span>
            <span className="lp-brand-sub">tesařství · Plzeň</span>
          </span>
        </a>
        <nav className="lp-links">
          <a href="#remeslo">Řemeslo</a>
          <a href="#duvera">O nás</a>
          <a className="lp-nav-call" href="tel:+420602487066">602 487 066</a>
        </nav>
      </header>

      <section className="lp-hero" id="uvod">
        <div className="lp-hero-media">
          <img
            src="/hero.webp"
            alt="Vázaný dřevěný krov postavený tesaři Lob Plus"
            className="lp-hero-img"
            width={1600}
            height={1000}
          />
          <span className="lp-hero-scrim" aria-hidden="true" />
        </div>

        <div className="lp-hero-inner">
          <p className="lp-eyebrow">Tesařská dílna · Plzeň-Bolevec · od roku 1993</p>
          <h1 className="lp-hero-title">
            Dřevo, které<br />
            <span className="lp-hero-accent">unese celý dům.</span>
          </h1>
          <p className="lp-hero-lead">
            Stavíme krovy, dřevostavby a provětrávané fasády — a opravujeme krovy,
            které tu stojí déle než my. Kompletní dodávka na klíč, jeden tým
            od zaměření po poslední hřebík.
          </p>
          <div className="lp-hero-cta">
            <a className="lp-btn lp-btn-primary" href="tel:+420602487066">
              Zavolat: 602 487 066
            </a>
            <a className="lp-btn lp-btn-ghost" href="#remeslo">
              Co pro vás postavíme
            </a>
          </div>

          <dl className="lp-hero-facts">
            <div>
              <dt>Zaměření firmy</dt>
              <dd>Krovy · dřevostavby · fasády</dd>
            </div>
            <div>
              <dt>Kde stavíme</dt>
              <dd>Plzeň a okolí Plzeňského kraje</dd>
            </div>
            <div>
              <dt>Jak pracujeme</dt>
              <dd>Kompletní dodávka na klíč</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="lp-trades" id="remeslo">
        <div className="lp-section-head">
          <p className="lp-eyebrow">Čtyři věci, které umíme z dřeva</p>
          <h2 className="lp-h2">Od hřebene střechy po odvětranou fasádu</h2>
          <p className="lp-section-lead">
            Materiály volíme podle stavby, ne podle skladu. Dřevo vyžaduje
            individuální technologii zpracování — proto máme vyškolené tesaře,
            kteří vědí, kdy se trám ohýbá a kdy praská.
          </p>
        </div>

        <ol className="lp-grid">
          {trades.map((t) => (
            <li className="lp-card" key={t.no}>
              <span className="lp-card-no" aria-hidden="true">
                {t.no}
              </span>
              <h3 className="lp-card-title">{t.title}</h3>
              <p className="lp-card-lead">{t.lead}</p>
              <p className="lp-card-body">{t.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="lp-trust" id="duvera">
        <div className="lp-trust-media">
          <img
            src="/section-2.webp"
            alt="Realizace tesařských prací společnosti Lob Plus"
            className="lp-trust-img"
            width={1200}
            height={900}
          />
        </div>

        <div className="lp-trust-copy">
          <p className="lp-eyebrow">Proč nám lidé svěří střechu nad hlavou</p>
          <h2 className="lp-h2">Jedna smlouva, jeden termín, jedna parta</h2>
          <p className="lp-trust-text">
            Lob Plus vede stavbu formou kompletní dodávky na klíč — s příslušnými
            stavebními profesemi, které k tesařině patří. Nemusíte shánět
            pokrývače, klempíře ani zedníka zvlášť. Domluvíte se s námi a my
            postavíme dům tak, aby vydržel dalším generacím.
          </p>

          <ul className="lp-checks">
            <li>
              <span className="lp-check-key">Materiál</span>
              <span className="lp-check-val">
                Dřevo vysoké kvality, ošetřené proti hnilobě i hmyzu.
              </span>
            </li>
            <li>
              <span className="lp-check-key">Lidé</span>
              <span className="lp-check-val">
                Vyškolení tesaři, ne sezónní brigáda — spoje děláme poctivě.
              </span>
            </li>
            <li>
              <span className="lp-check-key">Zkušenost</span>
              <span className="lp-check-val">
                Občanská i bytová výstavba, rekonstrukce a sanace historických krovů.
              </span>
            </li>
          </ul>

          <address className="lp-address">
            <strong>Lob Plus, spol. s r.o.</strong>
            <span>28. října 51/8, 301 00 Plzeň-Bolevec</span>
            <a href="tel:+420602487066">+420 602 487 066</a>
          </address>
        </div>
      </section>
    </main>
  );
}

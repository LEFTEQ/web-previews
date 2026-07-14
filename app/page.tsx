export default function Page() {
  return (
    <main className="awd">
      {/* HERO */}
      <section className="awd-hero">
        <div className="awd-hero-media">
          <img
            src="/hero.webp"
            alt="Rozestavěný rodinný dům AW DOMY s hrubou stavbou z cihelných bloků na pozemku u Hradce Králové"
            className="awd-hero-img"
          />
          <div className="awd-hero-scrim" aria-hidden="true" />
        </div>

        <div className="awd-hero-content">
          <div className="awd-wordmark">
            <span className="awd-wordmark-aw">AW</span>
            <span className="awd-wordmark-domy">DOMY</span>
            <span className="awd-wordmark-sub">stavební firma · Hradec Králové</span>
          </div>

          <h1 className="awd-hero-title">
            Stavíme domy,
            <br />
            <span>ne sliby na papíře.</span>
          </h1>

          <p className="awd-hero-lede">
            Rodinné domy na klíč z pálených cihelných bloků, s vlastní projekcí
            a stavebním dozorem od základové desky po předání klíčů.
            Patnáct let stavíme v Královéhradeckém kraji domy, ve kterých
            lidé opravdu bydlí.
          </p>

          <dl className="awd-hero-stats">
            <div className="awd-stat">
              <dt>Postavených domů</dt>
              <dd>400<span>+</span></dd>
            </div>
            <div className="awd-stat">
              <dt>Let na trhu</dt>
              <dd>15<span>+</span></dd>
            </div>
            <div className="awd-stat">
              <dt>Domů v katalogu</dt>
              <dd>300<span>+</span></dd>
            </div>
          </dl>
        </div>
      </section>

      {/* SLUŽBY */}
      <section className="awd-services" aria-labelledby="awd-services-title">
        <div className="awd-services-head">
          <span className="awd-eyebrow">Od základů po klíče — v tomto pořadí</span>
          <h2 id="awd-services-title">Co za vás zařídíme</h2>
          <p>
            Stavba domu má svůj pevný postup. Nepřeskakujeme kroky a nepouštíme
            se do hrubé stavby bez hotového povolení. Takhle to u nás jde od
            první schůzky až po kolaudaci.
          </p>
        </div>

        <div className="awd-services-body">
          <div className="awd-services-media">
            <img
              src="/section-1.webp"
              alt="Stavební dělník AW DOMY zdí obvodovou stěnu rodinného domu z cihelných bloků"
              className="awd-services-img"
            />
          </div>

          <ol className="awd-steps">
            <li className="awd-step">
              <span className="awd-step-num">01</span>
              <div>
                <h3>Projekt na míru pozemku</h3>
                <p>
                  Vlastní projekční kancelář vám navrhne dům z katalogu nebo
                  upraví dispozici podle světových stran, sklonu terénu
                  a vašeho rozpočtu — bez papírování s externisty.
                </p>
              </div>
            </li>
            <li className="awd-step">
              <span className="awd-step-num">02</span>
              <div>
                <h3>Stavební povolení za vás</h3>
                <p>
                  Vyřídíme jednání se stavebním úřadem, sítěmi i sousedy.
                  Víte přesně, v jaké fázi řízení jste, a nemusíte obíhat
                  úřady sami.
                </p>
              </div>
            </li>
            <li className="awd-step">
              <span className="awd-step-num">03</span>
              <div>
                <h3>Hrubá stavba z cihelných bloků</h3>
                <p>
                  Zdíme z pálených broušených tvárnic s kvalitní izolační
                  vlastností — bez kompromisů na skladbě zdiva, kterou pak
                  nikdo neuvidí.
                </p>
              </div>
            </li>
            <li className="awd-step">
              <span className="awd-step-num">04</span>
              <div>
                <h3>Dokončení a financování</h3>
                <p>
                  Pomůžeme nastavit výhodné financování výstavby a dům
                  předáme kompletně dokončený — připravený k nastěhování,
                  ne k dodělávání.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* REFERENCE / O NÁS */}
      <section className="awd-trust" aria-labelledby="awd-trust-title">
        <div className="awd-trust-media">
          <img
            src="/section-2.webp"
            alt="Dokončený rodinný dům AW DOMY s fasádou a upraveným okolím v Královéhradeckém kraji"
            className="awd-trust-img"
          />
        </div>

        <div className="awd-trust-content">
          <span className="awd-eyebrow">Proč lidé stavějí s AW DOMY</span>
          <h2 id="awd-trust-title">Ručíme za to, co postavíme</h2>

          <p className="awd-trust-lede">
            Přes 40 rodin ročně si u nás objedná dům a zůstane s námi i po
            předání klíčů — na záruční servis i drobné úpravy. To je pro
            stavební firmu z Hradce Králové ta nejlepší vizitka.
          </p>

          <div className="awd-trust-grid">
            <div className="awd-trust-card">
              <h3>Kvalitní zdící materiály</h3>
              <p>
                Stavíme z ověřených pálených bloků, ne z toho, co je zrovna
                nejlevnější na skladě. Skladbu zdiva vám ukážeme na
                konkrétní realizaci, ne jen v katalogu.
              </p>
            </div>
            <div className="awd-trust-card">
              <h3>Dlouhodobá záruka</h3>
              <p>
                Za kvalitu stavby ručíme i roky po kolaudaci. Když se něco
                objeví, řešíme to jako firma se sídlem v Hradci Králové,
                ne anonymní dodavatel odjinud.
              </p>
            </div>
            <div className="awd-trust-card">
              <h3>Dotace a úsporné bydlení</h3>
              <p>
                Poradíme s dotačními programy na úsporné bydlení a pomůžeme
                nastavit financování tak, aby stavba dávala smysl i za
                deset let.
              </p>
            </div>
            <div className="awd-trust-card">
              <h3>Rekonstrukce i dílčí práce</h3>
              <p>
                Kromě domů na klíč děláme i dílčí řemeslné práce
                a rekonstrukce — nemusíte hledat další firmu na to, co
                zbyde.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

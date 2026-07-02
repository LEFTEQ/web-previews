export default function Page() {
  return (
    <main className="hs-page">
      {/* ===================== HERO ===================== */}
      <header className="hs-hero">
        <div className="hs-hero-media" aria-hidden="true">
          <img src="/hero.webp" alt="" className="hs-hero-img" />
          <div className="hs-hero-scrim" />
        </div>

        <div className="hs-topbar">
          <div className="hs-wordmark">
            <span className="hs-wordmark-main">HAMPL</span>
            <span className="hs-wordmark-sub">a spol. servis · Ostrava-Svinov</span>
          </div>
          <a className="hs-topbar-phone" href="tel:+420602582144">
            <span className="hs-phone-label">Volejte</span>
            <span className="hs-phone-number">602 582 144</span>
          </a>
        </div>

        <div className="hs-hero-body">
          <p className="hs-diag-line" aria-hidden="true">
            <span className="hs-diag-chip">DIAG</span>
            <span className="hs-diag-text">Čtení paměti závad… OK · 0 chyb po opravě</span>
          </p>
          <h1 className="hs-hero-title">
            Auto­elektrika,<br />
            která se pozná<br />
            <em>na diagnostice.</em>
          </h1>
          <p className="hs-hero-lead">
            Kontrolka na palubovce, motor bez výkonu, nefunkční tažné zařízení?
            V Ostravě-Svinově najdeme příčinu diagnostikou, ne výměnou dílů naslepo.
          </p>
          <div className="hs-hero-facts">
            <div className="hs-fact">
              <span className="hs-fact-value">Po–Pá</span>
              <span className="hs-fact-label">7:30–16:00</span>
            </div>
            <div className="hs-fact">
              <span className="hs-fact-value">Zdarma</span>
              <span className="hs-fact-label">vstupní prohlídka vozu</span>
            </div>
            <div className="hs-fact">
              <span className="hs-fact-value">Svinov</span>
              <span className="hs-fact-label">Polanecká 847/49A</span>
            </div>
          </div>
        </div>
      </header>

      {/* ===================== SLUŽBY ===================== */}
      <section className="hs-services" aria-labelledby="sluzby-nadpis">
        <div className="hs-section-head">
          <p className="hs-eyebrow">
            <span className="hs-eyebrow-pin" aria-hidden="true" />
            Co u nás opravíte
          </p>
          <h2 id="sluzby-nadpis" className="hs-section-title">
            Od kontrolky motoru po tažné zařízení
          </h2>
          <p className="hs-section-lead">
            Každou zakázku začínáme diagnostikou. Řeknete nám, co auto dělá —
            my vám před opravou řekneme proč a kolik to bude stát.
          </p>
        </div>

        <div className="hs-services-grid">
          <article className="hs-card">
            <p className="hs-card-code" aria-hidden="true">P0100</p>
            <h3 className="hs-card-title">Autoelektrika a diagnostika</h3>
            <p className="hs-card-text">
              Svítí vám kontrolka, vypadává elektronika nebo auto nestartuje?
              Připojíme diagnostiku, přečteme závady a opravíme kabeláž,
              snímače i řídicí jednotky. U moderních vozů bez toho oprava nejde.
            </p>
          </article>

          <article className="hs-card">
            <p className="hs-card-code" aria-hidden="true">CO/NOx −70 %</p>
            <h3 className="hs-card-title">Dekarbonizace motoru</h3>
            <p className="hs-card-text">
              Odstraníme karbon z celého motoru — diesel, benzín, CNG i LPG.
              Snížíte spotřebu o 10–15 %, kouřivost a emise CO/NOx až o 70 %
              a motoru se vrátí výkon a klidný chod. Pomáhá i před STK.
            </p>
          </article>

          <article className="hs-card">
            <p className="hs-card-code" aria-hidden="true">13-pin</p>
            <h3 className="hs-card-title">Tažná zařízení na klíč</h3>
            <p className="hs-card-text">
              Dodáme a namontujeme tažné zařízení včetně elektroinstalace
              a zápisu do technického průkazu. U vozů s parkovacími senzory
              zajistíme správné zakódování, aby vůz přívěs „viděl“.
            </p>
          </article>

          <article className="hs-card">
            <p className="hs-card-code" aria-hidden="true">8 senzorů</p>
            <h3 className="hs-card-title">Autoservis, pneu a geometrie</h3>
            <p className="hs-card-text">
              Kompletní péče o osobní i dodávkové vozy: běžný servis, výměna
              a vyvážení pneumatik a měření geometrie kol digitálním přístrojem
              nové generace s osmi snímači.
            </p>
          </article>
        </div>

        <figure className="hs-services-figure">
          <img
            src="/section-1.webp"
            alt="Technik připojuje diagnostický přístroj k vozu v dílně Hampl a spol. servis"
            className="hs-figure-img"
          />
          <figcaption className="hs-figure-caption">
            Softwarová diagnostika je u nás první krok každé opravy — ne poslední záchrana.
          </figcaption>
        </figure>
      </section>

      {/* ===================== DŮVĚRA ===================== */}
      <section className="hs-trust" aria-labelledby="duvera-nadpis">
        <div className="hs-trust-inner">
          <div className="hs-trust-media">
            <img
              src="/section-2.webp"
              alt="Dílna Hampl a spol. servis v Ostravě-Svinově se zvedákem a vozem na stání"
              className="hs-figure-img"
            />
          </div>

          <div className="hs-trust-content">
            <p className="hs-eyebrow hs-eyebrow-light">
              <span className="hs-eyebrow-pin" aria-hidden="true" />
              Proč k nám jezdí i firemní flotily
            </p>
            <h2 id="duvera-nadpis" className="hs-section-title hs-section-title-light">
              Dílna, kde vám před opravou řeknou cenu
            </h2>
            <p className="hs-trust-text">
              Autoservisem a pneuservisem se zabýváme řadu let a s každou novou
              generací vozů investujeme do diagnostiky a servisních technologií,
              abychom uměli opravit i to, co jinde odmítají. Prioritou zůstává
              individuální přístup, férová cena a co nejkratší doba opravy.
            </p>

            <blockquote className="hs-quote">
              <p>
                „Zajišťují pro nás pneuservis i opravy vozidel. Termíny plánují
                operativně a opravy jsou vždy stoprocentní — kvalitou práce
                i výslednou cenou. Vřele doporučuji.“
              </p>
              <footer className="hs-quote-source">
                Petr Paulus, ředitel společnosti <strong>BOOKTRANS</strong>
              </footer>
            </blockquote>

            <dl className="hs-hours">
              <div className="hs-hours-row">
                <dt>Pondělí–Pátek</dt>
                <dd>7:30 – 16:00</dd>
              </div>
              <div className="hs-hours-row">
                <dt>Sobota a neděle</dt>
                <dd>Zavřeno</dd>
              </div>
              <div className="hs-hours-row">
                <dt>Kde nás najdete</dt>
                <dd>Polanecká 847/49A, Ostrava-Svinov</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}

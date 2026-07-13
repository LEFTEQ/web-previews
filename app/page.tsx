export default function Page() {
  return (
    <>
      <title>Simona Beerová — portrétní fotografka v Ostravě</title>
      <meta
        name="description"
        content="Portrétní, partnerské a ženské focení se Simonou Beerovou v soukromém ateliéru v Ostravě-Vítkovicích. Více než 15 let zkušeností a autorský platinový tisk."
      />
      <link
        rel="icon"
        href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%234c63d9'/%3E%3Cpath d='M18 17h18c9 0 14 4 14 11 0 4-2 7-6 9 5 2 7 5 7 10 0 8-6 12-16 12H18V17Zm10 9v8h7c4 0 6-1 6-4s-2-4-6-4h-7Zm0 16v8h8c4 0 6-1 6-4s-2-4-6-4h-8Z' fill='white'/%3E%3C/svg%3E"
      />

      <main className="beerova-page" id="top">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Simona Beerová, úvodní stránka">
            <span className="wordmark-name">Simona Beerová</span>
            <span className="wordmark-role">fotografka · Ostrava</span>
          </a>

          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#nabidka">Focení</a>
            <a href="#atelier">Ateliér</a>
          </nav>

          <a className="header-call" href="tel:+420776602709">
            <span>Domluvit termín</span>
            <strong>776 602 709</strong>
          </a>
        </header>

        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Portrétní fotografka · Ostrava-Vítkovice</p>
            <h1 id="hero-title">
              <span>Světlo,</span>
              <span>ve kterém</span>
              <em>se poznáte.</em>
            </h1>
            <p className="hero-lead">
              Žádné zkušenosti před objektivem nepotřebujete. Simona vás focením provede tak,
              aby vznikly sebevědomé portréty, partnerské fotografie nebo citlivé akty, které
              budou pořád vaše.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="tel:+420776602709">
                Zavolat a domluvit focení
              </a>
              <a className="text-link" href="#nabidka">
                Vybrat druh focení <span aria-hidden="true">↓</span>
              </a>
            </div>

            <dl className="hero-facts" aria-label="Základní informace">
              <div>
                <dt>Zkušenost</dt>
                <dd>více než 15 let</dd>
              </div>
              <div>
                <dt>Ateliér</dt>
                <dd>Ruská 38a, Vítkovice</dd>
              </div>
            </dl>
          </div>

          <figure className="hero-frame">
            <div className="exposure-note" aria-hidden="true">
              <span>PORTRÉT</span>
              <span>OSTRAVA</span>
              <span>SB / 01</span>
            </div>
            <img
              src="/hero.webp"
              alt="Autorský portrét z ateliéru fotografky Simony Beerové"
              width={1200}
              height={1500}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <figcaption>
              <span>Světlo připravené pro vás</span>
              <span>Ateliér Simony Beerové</span>
            </figcaption>
          </figure>
        </section>

        <section className="services" id="nabidka" aria-labelledby="services-title">
          <div className="section-heading">
            <p className="eyebrow">Co si můžete nechat zachytit</p>
            <h2 id="services-title">Ne pózu. Váš výraz.</h2>
            <p>
              Vyberte si téma, které je vám blízké. Styling, světlo i tempo focení se přizpůsobí
              tomu, jak se chcete na fotografiích cítit.
            </p>
          </div>

          <div className="services-layout">
            <figure className="services-image">
              <img
                src="/section-1.webp"
                alt="Ženský portrét vytvořený v ostravském fotoateliéru"
                width={1100}
                height={1350}
                loading="lazy"
                decoding="async"
              />
              <figcaption>Soukromé focení v klidném ateliéru</figcaption>
            </figure>

            <div className="service-list">
              <article>
                <p className="service-label">Portrét</p>
                <h3>Ateliérový portrét</h3>
                <p>
                  Přirozené i výrazně stylizované fotografie pro vás, rodinu nebo profesní
                  prezentaci. Simona poradí s oblečením, postojem i výrazem.
                </p>
              </article>

              <article>
                <p className="service-label">Blízkost</p>
                <h3>Ženské akty a fotografie ve dvou</h3>
                <p>
                  Citlivé focení s respektem k vašim hranicím. Vzniknou intimní fotografie pro
                  vás nebo partnera, bez spěchu a bez tlaku na výkon.
                </p>
              </article>

              <article>
                <p className="service-label">Hmatatelná vzpomínka</p>
                <h3>Platinový tisk a dárkový poukaz</h3>
                <p>
                  Vybraný snímek může získat podobu autorského platinového tisku. Poukaz nechá
                  obdarované osobě volbu termínu i tématu focení.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="atelier" id="atelier" aria-labelledby="atelier-title">
          <figure className="atelier-image">
            <img
              src="/section-2.webp"
              alt="Atmosféra portrétního focení v ateliéru Simony Beerové v Ostravě"
              width={1200}
              height={1450}
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span>Ruská 38a</span>
              <span>Ostrava-Vítkovice</span>
            </figcaption>
          </figure>

          <div className="atelier-copy">
            <p className="eyebrow">Místo, kde můžete zpomalit</p>
            <h2 id="atelier-title">Ateliér, kde nemusíte umět pózovat.</h2>
            <p className="atelier-intro">
              V soukromém ateliéru najdete rekvizity, zázemí na převlečení a hlavně čas zvyknout
              si na fotoaparát. Simona vás povede srozumitelně a průběžně ukáže, co na fotografii
              funguje.
            </p>

            <dl className="atelier-details">
              <div>
                <dt>Kde</dt>
                <dd>Ruská 38a, nedaleko Mírového náměstí, směrem k Dolním Vítkovicím.</dd>
              </div>
              <div>
                <dt>Příjezd</dt>
                <dd>Parkovat lze naproti domu v parkovacích pruzích za 10 Kč na hodinu.</dd>
              </div>
              <div>
                <dt>Domluva</dt>
                <dd>
                  Termín a představu proberete přímo se Simonou na telefonu{' '}
                  <a href="tel:+420776602709">776 602 709</a>.
                </dd>
              </div>
            </dl>

            <blockquote>
              „Nejraději fotím lidi a okamžiky, ke kterým se chtějí znovu vracet.“
              <cite>— Simona Beerová</cite>
            </blockquote>
          </div>
        </section>
      </main>
    </>
  );
}

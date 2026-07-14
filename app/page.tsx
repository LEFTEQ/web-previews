export default function Page() {
  const benefits = [
    {
      title: "20 minut týdně",
      text: "Krátká lekce se vejde i mezi práci a rodinu. Ve studiu strávíte přibližně půl hodiny včetně převlečení.",
      signal: "čas",
    },
    {
      title: "Trenér jen pro vás",
      text: "Každý pohyb i intenzitu impulzů nastavíme podle vaší kondice, zkušeností a aktuálních omezení.",
      signal: "vedení",
    },
    {
      title: "Bez davů a čekání",
      text: "Cvičíte v privátním studiu na Loosově. Oblečení, obuv, ručník i sprchu máte připravené.",
      signal: "soukromí",
    },
  ];

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#zacatek" aria-label="Healthy Twenty Brno – začátek stránky">
            <span className="wordmark-pulse" aria-hidden="true" />
            <span>healthy</span>
            <strong>twenty</strong>
            <small>BRNO</small>
          </a>

          <nav className="hero-nav" aria-label="Hlavní navigace">
            <a href="#ems">Jak funguje EMS</a>
            <a href="#zkusenosti">Zkušenosti</a>
          </nav>

          <a className="header-call" href="tel:+420775610798">
            Zavolat
          </a>
        </header>

        <div className="hero-grid" id="zacatek">
          <div className="hero-copy">
            <p className="eyebrow">
              <span>Nové privátní EMS studio</span>
              Loosova 1 · Brno
            </p>

            <h1 id="hero-title">
              Celé tělo.
              <span>Jeden řízený impulz.</span>
            </h1>

            <p className="hero-lead">
              Osobní EMS trénink, který aktivuje až 95 % svalů současně. Za 20 minut, jednou týdně a vždy s trenérem po boku.
            </p>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href="mailto:brno@healthytwenty.cz?subject=Chci%20rezervovat%20prvn%C3%AD%20EMS%20tr%C3%A9nink"
              >
                Rezervovat první trénink
                <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="tel:+420775610798">
                +420 775 610 798
              </a>
            </div>

            <div className="hero-proof" aria-label="Hodnocení a dostupnost">
              <div>
                <strong>4,9</strong>
                <span>z 521 recenzí</span>
              </div>
              <div>
                <strong>20 min</strong>
                <span>řízeného tréninku</span>
              </div>
              <div>
                <strong>1 : 1</strong>
                <span>osobní vedení</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <img
              src="/hero.webp"
              alt="Klientka při osobním EMS tréninku ve studiu Healthy Twenty Brno"
              width="1200"
              height="1500"
            />
            <div className="twenty-mark" aria-hidden="true">
              <span>20</span>
              <small>MINUT</small>
            </div>
            <div className="signal-strip" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            <p className="visual-note">Impulz kopíruje přirozený signál, kterým mozek aktivuje sval.</p>
          </div>
        </div>
      </section>

      <section className="ems-section" id="ems" aria-labelledby="ems-title">
        <div className="section-heading">
          <p className="section-kicker">Co je EMS</p>
          <h2 id="ems-title">Nezvedáte víc. Zapojíte víc.</h2>
          <p>
            Speciální oblek vede jemné elektrické impulzy do hlavních svalových skupin. Trenér intenzitu nastavuje postupně a vy při tom provádíte jednoduché, kontrolované pohyby.
          </p>
        </div>

        <div className="ems-layout">
          <figure className="ems-image">
            <img
              src="/section-1.webp"
              alt="Detail EMS obleku a elektrod používaných při tréninku"
              width="1200"
              height="900"
            />
            <figcaption>
              <span className="caption-pulse" aria-hidden="true" />
              Oblek aktivuje svalové skupiny současně, bez činek a skoků.
            </figcaption>
          </figure>

          <div className="benefit-list">
            {benefits.map((benefit) => (
              <article className="benefit" key={benefit.title}>
                <span className="benefit-signal">{benefit.signal}</span>
                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </div>
              </article>
            ))}

            <aside className="suit-note">
              <strong>Na první návštěvu nic nesháníte.</strong>
              <p>Tréninkové oblečení, obuv i ručník na vás čekají ve studiu.</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="trust-section" id="zkusenosti" aria-labelledby="trust-title">
        <div className="trust-intro">
          <p className="section-kicker">Healthy Twenty v praxi</p>
          <h2 id="trust-title">Klidné studio. Výsledky, které lidé cítí v běžném dni.</h2>
          <p>
            Brněnské studio navazuje na zkušenosti sítě 17 studií. Lekci vždy přizpůsobujeme člověku před námi — začátečníkovi, vytíženému rodiči i tomu, kdo se chce vrátit k pravidelnému pohybu.
          </p>

          <dl className="trust-numbers">
            <div>
              <dt>17</dt>
              <dd>provozovaných studií</dd>
            </div>
            <div>
              <dt>5 000+</dt>
              <dd>spokojených klientů</dd>
            </div>
            <div>
              <dt>4,9 / 5</dt>
              <dd>průměrné hodnocení</dd>
            </div>
          </dl>
        </div>

        <div className="review-stage">
          <img
            src="/section-2.webp"
            alt="Osobní trenérka vede klientku během EMS lekce v privátním studiu"
            width="1200"
            height="1400"
          />

          <blockquote className="featured-review">
            <div className="stars" aria-label="Hodnocení pět z pěti">★★★★★</div>
            <p>„Vše probíhá v klidu a soukromí. Po pár lekcích už jsem cítila, že mám pevnější tělo a víc energie.“</p>
            <cite>Petra K. · ověřená zkušenost</cite>
          </blockquote>

          <div className="location-card">
            <span>Nově v Brně</span>
            <strong>Loosova 1</strong>
            <p>Privátní studio, vlastní trenér a termín rezervovaný jen pro vás.</p>
            <a href="https://www.google.com/maps/search/?api=1&query=Loosova+1%2C+Brno">
              Ukázat cestu
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

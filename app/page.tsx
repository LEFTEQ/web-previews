export default function Page() {
  const offer = [
    {
      label: "PRODEJ",
      title: "Nářadí pro dílnu i stavbu",
      text: "Elektrické, pneumatické i ruční nářadí, diamantová a kotvicí technika, stavební chemie, oleje, maziva a ochranné pomůcky.",
    },
    {
      label: "SERVIS",
      title: "Oprava místo zbytečné výměny",
      text: "Zajistíme záruční i pozáruční servis. Nářadí přinesete do prodejny, kde s vámi rovnou probereme další postup.",
    },
    {
      label: "PŮJČOVNA",
      title: "Výkon na dobu, kdy ho potřebujete",
      text: "Pro jednorázovou práci si vybavení půjčíte bez nákupu. Pomůžeme vybrat správný stroj i příslušenství.",
    },
  ];

  return (
    <>
      <title>VEMA nářadí Plzeň | Prodej, servis a půjčovna</title>
      <meta
        name="description"
        content="VEMA nářadí v Plzni: prodej elektrického a ručního nářadí, záruční i pozáruční servis a vybavená půjčovna. Kaznějovská 49."
      />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="VEMA nářadí Plzeň" />
      <meta
        property="og:description"
        content="Nářadí si prohlédnete, vezmete do ruky a vyberete s člověkem, který mu rozumí. Prodej, servis a půjčovna v Plzni."
      />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="cs_CZ" />
      <meta property="og:image" content="/hero.webp" />

      <main className="vema-site">
        <section className="hero" aria-labelledby="hero-title">
          <header className="site-header">
            <a className="wordmark" href="#zacatek" aria-label="VEMA nářadí – úvod">
              <span className="wordmark-main">VEMA</span>
              <span className="wordmark-sub">NÁŘADÍ · PLZEŇ</span>
            </a>

            <nav className="site-nav" aria-label="Hlavní navigace">
              <a href="#nabidka">Nabídka</a>
              <a href="#prodejna">Prodejna</a>
            </nav>
          </header>

          <div className="hero-grid" id="zacatek">
            <div className="hero-copy">
              <p className="eyebrow">ŽELEZÁŘSTVÍ · KAZNĚJOVSKÁ 49</p>
              <h1 id="hero-title">
                Vezměte si nářadí
                <span>do ruky.</span>
                Pak rozhodujte.
              </h1>
              <p className="hero-lead">
                V plzeňské prodejně vyberete správný stroj, příslušenství i materiál pro konkrétní práci. Když nákup nedává smysl, nářadí vám půjčíme.
              </p>
              <div className="hero-actions" aria-label="Rychlé odkazy">
                <a className="button button-primary" href="#nabidka">
                  Projít nabídku
                </a>
                <a className="button button-secondary" href="#prodejna">
                  Najít prodejnu
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="photo-frame">
                <img
                  src="/hero.webp"
                  alt="Interiér plzeňské prodejny VEMA s vystaveným nářadím"
                  width="1200"
                  height="900"
                  fetchPriority="high"
                  sizes="(max-width: 760px) 100vw, 56vw"
                />
                <div className="photo-note">
                  <span>OTEVŘENO</span>
                  <strong>PO–PÁ</strong>
                  <b>8.00–16.30</b>
                </div>
              </div>
              <div className="carpenter-square" aria-hidden="true">
                <span className="mark mark-10">10</span>
                <span className="mark mark-20">20</span>
                <span className="mark mark-30">30</span>
                <span className="mark mark-40">40</span>
              </div>
            </div>
          </div>

          <div className="hero-facts" aria-label="Základní informace">
            <p><span>MÍSTO</span>Kaznějovská 49, Plzeň</p>
            <p><span>OD ROKU</span>2015</p>
            <p><span>NA JEDNOM MÍSTĚ</span>Prodej · servis · půjčovna</p>
          </div>
        </section>

        <section className="offer-section" id="nabidka" aria-labelledby="offer-title">
          <div className="section-heading">
            <p className="eyebrow">CO U NÁS VYŘÍDÍTE</p>
            <h2 id="offer-title">Od vrtáku po diamantový kotouč.</h2>
            <p>
              Přijďte s úkolem, ne s katalogovým číslem. Pomůžeme vám poskládat stroj, spotřební materiál i ochranné vybavení tak, aby spolu opravdu fungovaly.
            </p>
          </div>

          <div className="offer-layout">
            <div className="offer-photo">
              <img
                src="/section-1.webp"
                alt="Detail profesionálního nářadí a příslušenství v nabídce VEMA"
                width="1000"
                height="1200"
                loading="lazy"
                sizes="(max-width: 760px) 100vw, 38vw"
              />
              <p className="image-caption">Vybavení pro řemeslníky, údržbu i domácí dílnu.</p>
            </div>

            <div className="offer-list">
              {offer.map((item) => (
                <article className="offer-item" key={item.label}>
                  <p className="service-label">{item.label}</p>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}

              <div className="category-strip" aria-label="Vybrané kategorie sortimentu">
                <span>Elektrické nářadí</span>
                <span>Kotvicí technika</span>
                <span>Stavební chemie</span>
                <span>Autodíly a Car systém</span>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-section" id="prodejna" aria-labelledby="trust-title">
          <div className="trust-image">
            <img
              src="/section-2.webp"
              alt="Osobní výběr nářadí v kamenné prodejně VEMA v Plzni"
              width="1200"
              height="900"
              loading="lazy"
              sizes="(max-width: 760px) 100vw, 50vw"
            />
            <p className="place-tag">PLZEŇ · BOLEVEC</p>
          </div>

          <div className="trust-copy">
            <p className="eyebrow">KAMENNÁ PRODEJNA OD ROKU 2015</p>
            <h2 id="trust-title">Když si nejste jistí, neodcházíte s krabicí naslepo.</h2>
            <p className="trust-intro">
              Nářadí vybíráme podle práce, kterou má zvládnout — ne podle největšího čísla na obalu. V prodejně se můžete zeptat, porovnat varianty a rovnou doplnit vhodné příslušenství.
            </p>

            <dl className="trust-details">
              <div>
                <dt>Na místě</dt>
                <dd>Kaznějovská 49, Plzeň</dd>
              </div>
              <div>
                <dt>Pracovní dny</dt>
                <dd>8.00–16.30</dd>
              </div>
              <div>
                <dt>Po dohodě</dt>
                <dd>Zavezení nářadí na smluvené místo</dd>
              </div>
              <div>
                <dt>Zázemí</dt>
                <dd>Sortiment Bosch Professional a servisní podpora</dd>
              </div>
            </dl>
          </div>
        </section>
      </main>
    </>
  );
}

import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      idx: "01",
      title: "Opravy důlků po krupobití",
      body: "Kroupy zbijou kapotu za pár minut. Metodou PDR vytlačíme každý důlek zevnitř – bez tmelu, bez broušení, bez nového laku. Vaše původní tovární barva zůstane netknutá.",
      tag: "PDR",
    },
    {
      idx: "02",
      title: "Promáčkliny a drobné deformace",
      body: "Odřený sloupek na parkovišti, ťukanec od dveří sousedního auta. Menší promáčkliny narovnáme na počkání, aniž bychom sáhli do laku.",
      tag: "bez lakování",
    },
    {
      idx: "03",
      title: "Renovace světlometů",
      body: "Zmatnělé, zežloutlé světlomety brousíme a znovu zapečeťujeme. Lepší svícení, čistý pohled zepředu a auto vypadá o pár let mladší.",
      tag: "leštění",
    },
    {
      idx: "04",
      title: "Vyřízení pojistné události",
      body: "Jsme smluvní partneři pojišťoven. Vy jen nahlásíte škodu – zbytek papírování i domluvu se servisem vezmeme za vás. Po celém území ČR.",
      tag: "pojišťovny",
    },
  ];

  return (
    <main className="dd">
      <header className="dd-nav" aria-label="Hlavní">
        <a className="dd-wordmark" href="#" aria-label="Doktor Důlek – úvod">
          <span className="dd-wordmark__mark" aria-hidden="true">◠</span>
          <span className="dd-wordmark__text">
            Doktor<span className="dd-wordmark__thin">Důlek</span>
          </span>
        </a>
        <span className="dd-nav__place">Hradec&nbsp;Králové · od&nbsp;1999</span>
      </header>

      <section className="dd-hero" aria-labelledby="hero-title">
        <div className="dd-hero__grid" aria-hidden="true">
          <div className="dd-hero__dent dd-hero__dent--a" />
          <div className="dd-hero__dent dd-hero__dent--b" />
          <div className="dd-hero__dent dd-hero__dent--c" />
        </div>

        <p className="dd-hero__eyebrow">Autoklempířství · metoda PDR</p>

        <h1 id="hero-title" className="dd-hero__title">
          <span className="dd-line dd-line--1">Kroupy nechaly</span>
          <span className="dd-line dd-line--2">stopu.</span>
          <span className="dd-line dd-line--3">
            My ji <em>srovnáme</em>
          </span>
          <span className="dd-line dd-line--4">do roviny.</span>
        </h1>

        <p className="dd-hero__lead">
          Opravy důlků a promáčklin bez tmelu a bez lakování. Tlačíme plech
          zevnitř, dokud se povrch nevrátí přesně tam, kde ho vyrobili. Vaše
          tovární barva zůstává originál.
        </p>

        <div className="dd-hero__actions">
          <a className="dd-btn dd-btn--solid" href="tel:800800905">
            Zavolat na servis HK
          </a>
          <a className="dd-btn dd-btn--ghost" href="mailto:info@doktor-dulek.cz">
            Poslat fotku poškození
          </a>
        </div>

        <dl className="dd-hero__meta">
          <div>
            <dt>Oprava trvá</dt>
            <dd>1–2 pracovní dny</dd>
          </div>
          <div>
            <dt>Zásah do laku</dt>
            <dd>žádný</dd>
          </div>
          <div>
            <dt>Volná linka HK</dt>
            <dd>800 800 905</dd>
          </div>
        </dl>
      </section>

      <section className="dd-services" aria-labelledby="services-title">
        <div className="dd-section-head">
          <p className="dd-kicker">Co u nás vyřešíte</p>
          <h2 id="services-title">Od jednoho ťukance po celé auto po krupobití</h2>
        </div>

        <div className="dd-services__layout">
          <ul className="dd-cards">
            {services.map((s) => (
              <li className="dd-card" key={s.idx}>
                <div className="dd-card__top">
                  <span className="dd-card__idx">{s.idx}</span>
                  <span className="dd-card__tag">{s.tag}</span>
                </div>
                <h3 className="dd-card__title">{s.title}</h3>
                <p className="dd-card__body">{s.body}</p>
              </li>
            ))}
          </ul>

          <figure className="dd-figure">
            <img
              src="/section-1.webp"
              alt="Detail opravy karoserie metodou PDR – narovnaný plech bez nutnosti lakování"
              className="dd-figure__img"
              loading="lazy"
            />
            <figcaption className="dd-figure__cap">
              PDR nářadí pracuje zevnitř dveří a kapoty – žádné broušení, žádný
              nový lak.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="dd-trust" aria-labelledby="trust-title">
        <div className="dd-trust__media">
          <img
            src="/section-2.webp"
            alt="Vozidlo připravené k renovaci laku a světlometů v servisu Doktor Důlek v Hradci Králové"
            className="dd-trust__img"
            loading="lazy"
          />
        </div>

        <div className="dd-trust__text">
          <p className="dd-kicker dd-kicker--light">Proč právě my</p>
          <h2 id="trust-title">
            25 let rukou v plechu a síť, která opraví auto kdekoli v Česku
          </h2>
          <p className="dd-trust__lead">
            Doktor Důlek dělá karoserie od roku 1999. Naše domovská dílna je v
            Hradci Králové na Pospíšilově, ale opravu vám zařídíme v servisu
            kdekoli po ČR díky partnerské síti.
          </p>

          <ul className="dd-facts" style={{ "--n": 3 } as CSSProperties}>
            <li>
              <span className="dd-facts__num">908</span>
              <span className="dd-facts__label">partnerských servisů po celé ČR</span>
            </li>
            <li>
              <span className="dd-facts__num">1999</span>
              <span className="dd-facts__label">opravujeme karoserie bez přestávky</span>
            </li>
            <li>
              <span className="dd-facts__num">0 Kč</span>
              <span className="dd-facts__label">za nezávaznou prohlídku a odhad</span>
            </li>
          </ul>

          <blockquote className="dd-quote">
            <p>
              „S pojišťovnou si nelámejte hlavu. Vy nahlásíte škodu, my se
              postaráme o zbytek – od domluvy servisu po předání hotového auta.“
            </p>
            <footer>
              <span className="dd-quote__name">Raimund Riebel</span>
              <span className="dd-quote__role">jednatel, Doktor Důlek s.r.o.</span>
            </footer>
          </blockquote>
        </div>
      </section>
    </main>
  );
}

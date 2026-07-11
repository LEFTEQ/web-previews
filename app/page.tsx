import React from "react";

const services = [
  {
    no: "01",
    name: "Vizuální identita",
    desc: "Logo, barevnost, typografie a pravidla, podle kterých vaše značka drží pohromadě na vizitce i na fasádě. Dostanete manuál, který zvládne použít i váš grafik.",
    tags: ["Logo & wordmark", "Brand manuál", "Barvy & písma"]
  },
  {
    no: "02",
    name: "Tiskoviny & obaly",
    desc: "Katalogy, výroční zprávy, obaly a etikety připravené do tisku. Hlídáme spadávky, přetisk i Pantony a mluvíme s tiskárnou za vás.",
    tags: ["Katalog", "Obal & etiketa", "Příprava pro tisk"]
  },
  {
    no: "03",
    name: "Web & digitál",
    desc: "Rychlé, responzivní weby a bannery, které navazují na tištěnou identitu. Žádný oříznutý text na mobilu, žádné pomalé načítání.",
    tags: ["Web design", "Bannery", "Sociální sítě"]
  }
];

const proces = [
  { k: "Brief", v: "Sejdeme se, projdeme cíl, publikum a rozpočet. Vy mluvíte, my si kreslíme." },
  { k: "Skica", v: "Ruční skici a první směry. Vybíráme cestu dřív, než sáhneme na počítač." },
  { k: "Sazba", v: "Ladíme mřížku, písma a barvy do finální podoby napříč formáty." },
  { k: "Tisk / export", v: "Data do tiskárny nebo na web, dohled nad výstupem, hotovo." }
];

export default function Page() {
  return (
    <main className="kp">
      <header className="kp-nav" aria-label="Hlavní">
        <a className="kp-mark" href="#" aria-label="Kartpen, grafické studio Praha">
          <span className="kp-mark__k">Kart</span><span className="kp-mark__p">pen</span>
          <span className="kp-mark__reg">grafické studio · Praha</span>
        </a>
        <nav className="kp-nav__links">
          <a href="#sluzby">Služby</a>
          <a href="#studio">Studio</a>
          <a href="#proces">Jak pracujeme</a>
        </nav>
      </header>

      <section className="kp-hero">
        <div className="kp-hero__grid">
          <div className="kp-hero__text">
            <p className="kp-eyebrow"><span>C</span>M<span>Y</span>K · <span>od skici k tisku</span></p>
            <h1 className="kp-h1">
              Návrhy, které<br />
              <em>drží řádek</em> <span className="kp-h1__reg">®</span><br />
              i po přetisku.
            </h1>
            <p className="kp-lead">
              Jsme pražské grafické studio. Kreslíme značky, sázíme katalogy a stavíme weby, které vypadají
              stejně dobře na papíře i na mobilu. Od první tužkové skici až po hlídání barev v tiskárně.
            </p>
            <div className="kp-hero__meta">
              <span>Praha 7 · Holešovice</span>
              <span aria-hidden="true">/</span>
              <span>Značky · Tiskoviny · Web</span>
            </div>
          </div>
          <figure className="kp-hero__fig">
            <img src="/hero.webp" alt="Ilustrovaná ukázka práce studia Kartpen — barvy, typografie a tiskové motivy" />
            <figcaption className="kp-swatches" aria-hidden="true">
              <span style={{background:"#FF5A4D"}} />
              <span style={{background:"#1B1A17"}} />
              <span style={{background:"#F4C13A"}} />
              <span style={{background:"#2E5BFF"}} />
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="kp-section" id="sluzby" aria-labelledby="sluzby-h">
        <div className="kp-section__head">
          <p className="kp-eyebrow">Co pro vás uděláme</p>
          <h2 id="sluzby-h" className="kp-h2">Tři formáty, jedna ruka rukopisu</h2>
        </div>
        <div className="kp-cards">
          {services.map((s) => (
            <article className="kp-card" key={s.no}>
              <span className="kp-card__no" aria-hidden="true">{s.no}</span>
              <h3 className="kp-card__title">{s.name}</h3>
              <p className="kp-card__desc">{s.desc}</p>
              <ul className="kp-card__tags">
                {s.tags.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <figure className="kp-band">
          <img src="/section-1.webp" alt="Ukázka tiskovin a vizuální identity od studia Kartpen" />
        </figure>
      </section>

      <section className="kp-section kp-section--dark" id="studio" aria-labelledby="studio-h">
        <div className="kp-studio">
          <div className="kp-studio__text">
            <p className="kp-eyebrow kp-eyebrow--light">O studiu</p>
            <h2 id="studio-h" className="kp-h2">Malé studio, které zvedá telefon</h2>
            <p className="kp-lead kp-lead--light">
              Kartpen vede dvojice grafiků a vy jednáte přímo s nimi — žádný účet přes tři manažery.
              Navrhujeme od roku 2009 a za tu dobu jsme prošli od výloh přes výroční zprávy až po weby.
            </p>
            <div id="proces" className="kp-proc">
              {proces.map((p, i) => (
                <div className="kp-proc__row" key={p.k}>
                  <span className="kp-proc__step" aria-hidden="true">{i + 1}</span>
                  <div>
                    <h3 className="kp-proc__k">{p.k}</h3>
                    <p className="kp-proc__v">{p.v}</p>
                  </div>
                </div>
              ))}
            </div>
            <blockquote className="kp-quote">
              <p>„Katalog jsme dostali den před veletrhem a barvy seděly na první pokus. Konečně tiskárna, která nevrací data.“</p>
              <cite>— Petra H., výrobce nábytku, klient od 2019</cite>
            </blockquote>
          </div>
          <figure className="kp-studio__fig">
            <img src="/section-2.webp" alt="Práce v grafickém studiu Kartpen — skici, barvy a typografie" />
          </figure>
        </div>
      </section>
    </main>
  );
}

export default function Page() {
  const services = [
    {
      name: "Klasické řasy 1:1",
      detail: "Jedna lehká řasa na jednu přírodní. Čistý, jemný výsledek pro první aplikaci i každodenní nošení.",
      note: "Přirozené zvýraznění",
    },
    {
      name: "Objemové řasy 2D–4D",
      detail: "Ručně tvořené vějířky přidají hustotu bez těžkého dojmu. Intenzitu přizpůsobíme tvaru oka i vašemu stylu.",
      note: "Měkký objem",
    },
    {
      name: "Doplnění a obnova",
      detail: "Doplníme odrostlé řasy, srovnáme linii a zachováme původní mapování. Termín doporučíme podle přirozeného cyklu vašich řas.",
      note: "Upravený vzhled déle",
    },
  ];

  return (
    <main>
      <meta
        name="description"
        content="Esthetic Beauty v Moravské Ostravě – prodlužování řas 1:1, objemové řasy a pravidelné doplnění. Objednání na telefonu +420 734 123 339."
      />

      <section className="hero" aria-labelledby="hero-title">
        <div className="heroImage" aria-hidden="true">
          <img
            src="/hero.webp"
            alt=""
            width="1600"
            height="1100"
            fetchPriority="high"
          />
        </div>

        <div className="heroShade" aria-hidden="true" />

        <header className="topbar">
          <a className="wordmark" href="#top" aria-label="Esthetic Beauty – úvod">
            <span>esthetic</span>
            <strong>BEAUTY</strong>
          </a>

          <nav aria-label="Hlavní navigace">
            <a href="#sluzby">Služby</a>
            <a href="#salon">Salon</a>
          </nav>

          <a className="topPhone" href="tel:+420734123339">
            <span aria-hidden="true">↗</span> Zavolat
          </a>
        </header>

        <div className="heroContent" id="top">
          <p className="eyebrow">Prodlužování řas · Moravská Ostrava</p>
          <h1 id="hero-title">
            Pohled, který
            <span>nepotřebuje filtr.</span>
          </h1>
          <p className="heroLead">
            Délku, zatočení i hustotu vybíráme podle vašich očí — ne podle jednoho univerzálního vzoru.
          </p>
          <div className="heroActions">
            <a className="primaryButton" href="tel:+420734123339">
              Zavolat a objednat se
            </a>
            <p>
              <strong>Na hradbách 18</strong>
              <span>702 00 Moravská Ostrava</span>
            </p>
          </div>
        </div>

        <div className="lashMap" aria-label="Ukázka individuálního mapování délek řas od 8 do 11 milimetrů">
          <span className="mapLabel">Vaše lash mapa</span>
          <div className="mapArc" aria-hidden="true">
            <i style={{ "--lift": "0px" } as React.CSSProperties}>8</i>
            <i style={{ "--lift": "14px" } as React.CSSProperties}>9</i>
            <i style={{ "--lift": "26px" } as React.CSSProperties}>10</i>
            <i style={{ "--lift": "31px" } as React.CSSProperties}>11</i>
            <i style={{ "--lift": "18px" } as React.CSSProperties}>10</i>
          </div>
          <small>délka v mm · volíme při konzultaci</small>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="sectionIntro">
          <p className="eyebrow dark">Aplikace podle vašich očí</p>
          <h2 id="services-title">Od lehkého zvýraznění po měkký objem.</h2>
          <p>
            Před aplikací si společně vyjasníme výsledek. Aktuální cenu i případné zvýhodnění potvrdíme rovnou při objednání — bez překvapení po návštěvě.
          </p>
        </div>

        <div className="serviceVisual">
          <img
            src="/section-1.webp"
            alt="Detail precizně prodloužených řas v salonu Esthetic Beauty"
            width="1000"
            height="1200"
            loading="lazy"
          />
          <span>Detail aplikace</span>
        </div>

        <div className="serviceList">
          {services.map((service) => (
            <article className="serviceItem" key={service.name}>
              <p>{service.note}</p>
              <h3>{service.name}</h3>
              <div className="serviceDetail">
                <span aria-hidden="true">⌁</span>
                <p>{service.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="salon" id="salon" aria-labelledby="salon-title">
        <div className="salonImage">
          <img
            src="/section-2.webp"
            alt="Kosmetické ošetření a klidné prostředí salonu Esthetic Beauty v Ostravě"
            width="1200"
            height="1000"
            loading="lazy"
          />
        </div>

        <div className="salonContent">
          <p className="eyebrow dark">Dominika Hunková · Esthetic Beauty</p>
          <h2 id="salon-title">V klidu. Precizně. Přímo v centru Ostravy.</h2>
          <p className="salonLead">
            Přijdete s představou nebo jen s otázkou, co vám bude slušet. Společně zvolíme tvar, který respektuje vaše přírodní řasy a působí dobře i zblízka.
          </p>

          <dl className="facts">
            <div>
              <dt>Kde mě najdete</dt>
              <dd>Na hradbách 18<br />702 00 Moravská Ostrava</dd>
            </div>
            <div>
              <dt>Objednání</dt>
              <dd><a href="tel:+420734123339">+420 734 123 339</a></dd>
            </div>
            <div>
              <dt>Provozovatelka</dt>
              <dd>Dominika Hunková<br />IČO 06915493</dd>
            </div>
            <div>
              <dt>Aktuálnost</dt>
              <dd>Informace aktualizovány<br />v červenci 2026</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}

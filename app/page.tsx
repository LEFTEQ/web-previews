export default function Page() {
  const departments = [
    {
      no: "01",
      name: "Těsnění do oken a dveří",
      lead: "Vodo · Topo · Hobby",
      body: "Naše řemeslo od začátku. Metry těsnění na míru, ucpávkové šňůry, bezazbestové desky i zakázková výroba těsnicích materiálů.",
      items: ["Zahradní hadice a příslušenství", "Sprchové hlavice a hadice", "Bezazbestové desky na míru", "Zakázková výroba těsnění"],
      img: "/section-1.webp",
      alt: "Prodejna Texim s regály těsnicích a zahradních materiálů v Hradci Králové"
    },
    {
      no: "02",
      name: "Zahradní nábytek",
      lead: "Teak · Eukalyptus · Akácie · Ratan",
      body: "Poctivé dřevo, které přečká sezónu i tu další. Sestavy na terasu i na velkou zahradu, s poradenstvím o ošetření a údržbě.",
      items: ["Teakový nábytek", "Nábytek z eukalyptu", "Nábytek z akácie", "Nábytek z umělého ratanu"],
      img: "/section-2.webp",
      alt: "Zahradní nábytek z masivního dřeva v nabídce prodejny Texim"
    }
  ];

  return (
    <main className="tx">
      <header className="tx-nav">
        <a className="tx-mark" href="#top" aria-label="Texim — domů">
          <span className="tx-mark-word">Texim</span>
          <span className="tx-mark-tag">Hradec&nbsp;Králové · od&nbsp;1991</span>
        </a>
        <nav className="tx-nav-links" aria-label="Hlavní">
          <a href="#tesneni">Těsnění</a>
          <a href="#nabytek">Nábytek</a>
          <a href="#gril">Půjčovna grilů</a>
          <a className="tx-nav-cta" href="tel:+420495545541">Zavolat</a>
        </nav>
      </header>

      <section className="tx-hero" id="top">
        <div className="tx-hero-media">
          <img src="/hero.webp" alt="Prodejna Texim v Kladské ulici v Hradci Králové — těsnění, zahradní nábytek a půjčovna grilů" width={1600} height={1100} />
        </div>
        <div className="tx-hero-copy">
          <p className="tx-eyebrow">Kladská 331/24 · Hradec Králové</p>
          <h1 className="tx-h1">
            Utěsníme okno,<br />
            <em>vybavíme zahradu</em>,<br />
            půjčíme gril.
          </h1>
          <p className="tx-lead">
            Kamenná prodejna, kde vám těsnění nastříháme na míru, poradíme s dřevěným nábytkem
            na terasu a před oslavou zapůjčíme pořádný gril. Tři řemesla pod jednou střechou
            v centru Hradce.
          </p>
          <div className="tx-hero-actions">
            <a className="tx-btn" href="tel:+420495545541">Zavolat na prodejnu</a>
            <a className="tx-btn tx-btn-ghost" href="#gril">Rezervovat gril</a>
          </div>
        </div>
        <ul className="tx-ticker" aria-label="Co u nás pořídíte">
          <li>Těsnění na metry</li>
          <li>Teak &amp; akácie</li>
          <li>Ucpávkové šňůry</li>
          <li>8 typů grilů</li>
          <li>Zakázková výroba</li>
        </ul>
      </section>

      <section className="tx-depts" id="tesneni" aria-labelledby="depts-title">
        <div className="tx-section-head">
          <p className="tx-eyebrow">Co u nás najdete</p>
          <h2 className="tx-h2" id="depts-title">Dvě řemesla, jedny dveře</h2>
        </div>
        <div className="tx-dept-grid">
          {departments.map((d) => (
            <article className="tx-dept" key={d.no} id={d.no === "02" ? "nabytek" : undefined}>
              <div className="tx-dept-img">
                <img src={d.img} alt={d.alt} width={900} height={640} loading="lazy" />
                <span className="tx-dept-no">{d.no}</span>
              </div>
              <div className="tx-dept-text">
                <p className="tx-dept-lead">{d.lead}</p>
                <h3 className="tx-dept-name">{d.name}</h3>
                <p>{d.body}</p>
                <ul className="tx-dept-list">
                  {d.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="tx-grill" id="gril" aria-labelledby="grill-title">
        <div className="tx-grill-inner">
          <div className="tx-grill-copy">
            <p className="tx-eyebrow tx-eyebrow-light">Půjčovna grilů</p>
            <h2 className="tx-h2 tx-h2-light" id="grill-title">
              Osm grilů,<br />které rozjedou oslavu
            </h2>
            <p className="tx-grill-lead">
              Grily na kýtu, sele i kuřata. Když je potřeba, zapůjčíme k tomu
              i zahradní nábytek. Stačí zarezervovat pár dní předem a domluvit se
              na termínu — ceny máme přátelské.
            </p>
            <ul className="tx-grill-facts">
              <li><span>8</span> typů grilů na výběr</li>
              <li><span>+</span> zahradní nábytek k zapůjčení</li>
              <li><span>i</span> rezervace nutná předem</li>
            </ul>
            <a className="tx-btn tx-btn-warm" href="tel:+420603820265">Rezervovat na mobilu</a>
          </div>
          <aside className="tx-card">
            <h3>Přijďte na prodejnu</h3>
            <dl className="tx-contact">
              <div><dt>Adresa</dt><dd>Kladská 331/24<br />500 03 Hradec Králové</dd></div>
              <div><dt>Telefon</dt><dd><a href="tel:+420495545541">495 545 541</a></dd></div>
              <div><dt>Mobil</dt><dd><a href="tel:+420603820265">603 820 265</a></dd></div>
              <div><dt>E-mail</dt><dd><a href="mailto:texim@texim.cz">texim@texim.cz</a></dd></div>
            </dl>
            <p className="tx-card-note">Rodinná firma zapsaná u Krajského soudu v Hradci Králové. Poradíme osobně, ne přes formulář.</p>
          </aside>
        </div>
      </section>
    </main>
  );
}

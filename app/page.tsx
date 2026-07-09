export default function Page() {
  const pult = [
    {
      cislo: "01",
      nazev: "Dorty na míru",
      popis:
        "Od korpusu po poslední ozdobu. Řekněte nám, co se slaví — narozeniny, svatba, nebo jen chuť na neděli — a my korpus, krém i dekor postavíme podle vás.",
      detail: "Objednávka 3 dny předem",
    },
    {
      cislo: "02",
      nazev: "Zákusky a řezy",
      popis:
        "Věnečky, laskonky, špičky, ořechové řezy. Klasika, kterou pekli už naši cukráři před třiceti lety — a pořád ji děláme ručně, po kusech.",
      detail: "Denně čerstvé z pece",
    },
    {
      cislo: "03",
      nazev: "Chléb a pečivo",
      popis:
        "Kvasový chléb, rohlíky, houstičky, koláče. Vůně, co vás vytáhne z postele. Pečeme brzy ráno, ať máte teplé už k snídani.",
      detail: "Z pece od 5 hodin",
    },
    {
      cislo: "04",
      nazev: "Káva k tomu",
      popis:
        "Espresso, které voní už na dálku a ladí se sladkým. Do ruky cestou do práce, nebo na chvíli klidu u okna prodejny.",
      detail: "S sebou i na místě",
    },
  ];

  return (
    <main className="cs">
      <header className="cs-top">
        <a className="cs-wordmark" href="#" aria-label="Pekařství a cukrářství Sázava, domů">
          <span className="cs-wordmark__main">Sázava</span>
          <span className="cs-wordmark__sub">pekařství &amp; cukrářství · Hradec Králové</span>
        </a>
        <nav className="cs-nav" aria-label="Hlavní">
          <a href="#pult">Z pultu</a>
          <a href="#pribeh">Od roku 1990</a>
          <a className="cs-nav__call" href="tel:+420495000000">Zavolat</a>
        </nav>
      </header>

      <section className="cs-hero" aria-labelledby="hero-nadpis">
        <div className="cs-hero__text">
          <p className="cs-eyebrow">Vitrína na dnešek</p>
          <h1 id="hero-nadpis">
            Ráno u nás<br />
            <em>voní</em> po másle
          </h1>
          <p className="cs-hero__lead">
            Chléb z kvasu, dorty na míru a káva k tomu. Přes tři desetiletí
            pečeme v Hradci Králové po ránu, ať si první kus dáte ještě teplý.
          </p>
          <div className="cs-hero__cta">
            <a className="cs-btn" href="#pult">Podívat se do vitríny</a>
            <a className="cs-btn cs-btn--ghost" href="tel:+420495000000">
              Objednat dort — 495 00 00 00
            </a>
          </div>
        </div>
        <figure className="cs-hero__img">
          <img
            src="/hero.webp"
            alt="Čerstvě upečené sladké pečivo a zákusky z cukrárny Sázava"
            loading="eager"
          />
          <figcaption>Vitrína, jak vypadá dnes ráno</figcaption>
        </figure>
      </section>

      <section className="cs-pult" id="pult" aria-labelledby="pult-nadpis">
        <div className="cs-section-head">
          <p className="cs-eyebrow">Co dneska za sklem najdete</p>
          <h2 id="pult-nadpis">Čtyři pulty, jedna pec</h2>
        </div>
        <ol className="cs-cards">
          {pult.map((p) => (
            <li className="cs-card" key={p.cislo}>
              <span className="cs-card__num" aria-hidden="true">
                {p.cislo}
              </span>
              <h3>{p.nazev}</h3>
              <p>{p.popis}</p>
              <span className="cs-card__tag">{p.detail}</span>
            </li>
          ))}
        </ol>
        <figure className="cs-pult__img">
          <img
            src="/section-1.webp"
            alt="Ručně zdobený dort z cukrárny Sázava připravený na oslavu"
            loading="lazy"
          />
          <figcaption>Dort na míru — od korpusu po poslední detail</figcaption>
        </figure>
      </section>

      <section className="cs-pribeh" id="pribeh" aria-labelledby="pribeh-nadpis">
        <figure className="cs-pribeh__img">
          <img
            src="/section-2.webp"
            alt="Pekaři a cukráři Sázava při každodenní ranní práci"
            loading="lazy"
          />
        </figure>
        <div className="cs-pribeh__text">
          <p className="cs-eyebrow">Od roku 1990 · Hradec Králové</p>
          <h2 id="pribeh-nadpis">Poznáte nás po ránu, ne po marketingu</h2>
          <p>
            Přes třicet let stojíme každý den u pece dřív, než se rozední.
            Korpusy vážíme ručně, krém šleháme na místě, chléb necháme vykynout,
            jak dlouho potřebuje — ne, jak nám to spěchá.
          </p>
          <dl className="cs-facts">
            <div>
              <dt>Otevřeno</dt>
              <dd>Po–Pá 6–18 · So 6–12</dd>
            </div>
            <div>
              <dt>Kde nás najdete</dt>
              <dd>Prodejny po celém Hradci Králové</dd>
            </div>
            <div>
              <dt>Dort na oslavu</dt>
              <dd>
                <a href="tel:+420495000000">Zavolat 495 00 00 00</a>
              </dd>
            </div>
            <div>
              <dt>Napsat nám</dt>
              <dd>
                <a href="mailto:dorty@sazava-hk.cz">dorty@sazava-hk.cz</a>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}

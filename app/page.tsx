export default function Page() {
  const sluzby = [
    {
      cislo: "01",
      nazev: "Luxusní povrchy stěn",
      popis:
        "Ruční aplikace benátských a marockých štuků, mikrocementy a dekorativní stěrky. Povrch, který vypadá jako kámen, hedvábí nebo beton — podle toho, jak dopadne světlo.",
      detail: "Marmorino · Tadelakt · Mikrocement · Metalické efekty",
    },
    {
      cislo: "02",
      nazev: "Barvy pro profesionály",
      popis:
        "Prodejní centrum přímo na Nedvědově. Poradíme s odstínem, spočítáme spotřebu a namícháme přesně to, co má váš projekt unést — bez kompromisů v kvalitě.",
      detail: "Fasádní i interiérové systémy · Míchání na míru · Poradenství",
    },
    {
      cislo: "03",
      nazev: "Střechy, izolace, sanace",
      popis:
        "Nová střecha, zateplení podkroví nebo záchrana vlhkého zdiva. Řešíme příčinu, ne jen následek — aby to vydrželo déle než jednu sezónu.",
      detail: "Zateplení · Hydroizolace · Sanace vlhkého zdiva",
    },
    {
      cislo: "04",
      nazev: "Dřevostavby z CLT panelů",
      popis:
        "Masivní panely z křížem lepeného dřeva. Stěna nese, izoluje i dýchá zároveň. Rychlá montáž, přesný spoj, zdravé bydlení z jednoho materiálu.",
      detail: "Masivní CLT · Přesná montáž · Nízkoenergetický standard",
    },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="TATAI — specializované stavební činnosti">
          <span className="wordmark__name">TATAI</span>
          <span className="wordmark__sub">specializované stavební činnosti</span>
        </a>
        <div className="topbar__meta">
          <span className="topbar__place">Olomouc · Nedvědova 389/2</span>
          <a className="topbar__phone" href="tel:+420601505323">
            +420&nbsp;601&nbsp;505&nbsp;323
          </a>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Ručně nanášená luxusní stěrka na stěně — detail povrchu se strukturou a hrou světla"
            className="hero__img"
          />
          <div className="hero__grain" aria-hidden="true" />
        </div>

        <div className="hero__panel">
          <p className="hero__eyebrow">Prodejní centrum &amp; realizace · Olomouc</p>
          <h1 id="hero-title" className="hero__title">
            Povrch, který <em>obstojí</em> na dotek i za deset let.
          </h1>
          <p className="hero__lead">
            Štukové stěny, fasádní barvy, střechy i dřevostavby z CLT. U nás
            rozhoduje kvalita a životnost — ne cena za metr v hromadné výstavbě.
          </p>
          <div className="hero__cta">
            <a className="btn btn--solid" href="tel:+420601505323">
              Zavolat řemeslníkovi
            </a>
            <a className="btn btn--ghost" href="#sluzby">
              Co umíme
            </a>
          </div>
          <dl className="hero__facts">
            <div>
              <dt>Prodejna</dt>
              <dd>po–čt 8–18, pá 8–15</dd>
            </div>
            <div>
              <dt>Parkování</dt>
              <dd>přímo před vchodem</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-title">
        <div className="sec-head">
          <p className="sec-head__eyebrow">Čtyři řemesla pod jednou střechou</p>
          <h2 id="sluzby-title" className="sec-head__title">Co pro vás uděláme</h2>
        </div>

        <ol className="cards">
          {sluzby.map((s) => (
            <li className="card" key={s.cislo}>
              <span className="card__num" aria-hidden="true">{s.cislo}</span>
              <h3 className="card__title">{s.nazev}</h3>
              <p className="card__text">{s.popis}</p>
              <p className="card__detail">{s.detail}</p>
            </li>
          ))}
        </ol>

        <figure className="sluzby__showcase">
          <img
            src="/section-1.webp"
            alt="Realizace luxusního dekorativního povrchu stěny v interiéru"
            className="showcase__img"
          />
          <figcaption className="showcase__cap">
            Marmorino nanesené ve třech vrstvách — každá stěna je originál.
          </figcaption>
        </figure>
      </section>

      <section className="onas" aria-labelledby="onas-title">
        <figure className="onas__media">
          <img
            src="/section-2.webp"
            alt="Montáž masivního CLT panelu při stavbě dřevostavby"
            className="onas__img"
          />
        </figure>
        <div className="onas__body">
          <p className="sec-head__eyebrow">Robert Tatai · zakladatel</p>
          <h2 id="onas-title" className="onas__title">
            Nedělám objektovou výstavbu. Dělám věci, které mají vydržet.
          </h2>
          <p className="onas__text">
            Cílem naší firmy je montáž a prodej výrobků a služeb výborné kvality
            s dlouhotrvající životností i zárukou — za rozumné ceny. Proto u nás
            nenajdete hromadnou výstavbu, kde vyhrává cena nad kvalitou.
          </p>
          <p className="onas__sign">S přáním pěkného a úspěšného dne — Robert Tatai</p>

          <dl className="kontakt">
            <div className="kontakt__row">
              <dt>Prodejna</dt>
              <dd>Nedvědova 389/2, 779 00 Olomouc</dd>
            </div>
            <div className="kontakt__row">
              <dt>E-mail</dt>
              <dd><a href="mailto:info@tatai.cz">info@tatai.cz</a></dd>
            </div>
            <div className="kontakt__row">
              <dt>Telefon</dt>
              <dd><a href="tel:+420601505323">+420 601 505 323</a></dd>
            </div>
            <div className="kontakt__row">
              <dt>Otevřeno</dt>
              <dd>po–čt 8:00–18:00 · pá 8:00–15:00 · víkend zavřeno</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}

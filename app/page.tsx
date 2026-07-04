export default function Page() {
  const sortiment = [
    {
      cislo: "01",
      nazev: "Kytice na míru",
      popis:
        "Řekněte nám příležitost a rozpočet — zbytek je na Pepovi. Vážeme z toho, co ráno dorazilo čerstvé, ne z toho, co má zbýt.",
      detail: "Od 350 Kč",
    },
    {
      cislo: "02",
      nazev: "Svatby a oslavy",
      popis:
        "Výzdoba tabule, brány, kostela i auta. Přijedeme na místo, změříme, naaranžujeme. Vy se staráte o hosty, my o květiny.",
      detail: "Cenová nabídka zdarma",
    },
    {
      cislo: "03",
      nazev: "Truhlíky a balkony",
      popis:
        "Muškáty, surfinie, letničky i trvalky. Poradíme, co vydrží na jižní i severní straně, a rovnou osázíme, když chcete.",
      detail: "Sezonně od dubna",
    },
    {
      cislo: "04",
      nazev: "Pokojovky a substráty",
      popis:
        "Monstery, fíkusy, sukulenty. Hlína, keramika, hnojivo. To, co potřebujete, aby vám doma všechno rostlo dál.",
      detail: "Denně na prodejně",
    },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Kytky od Pepy — úvod">
          <span className="wordmark-kytky">Kytky</span>
          <span className="wordmark-od">od</span>
          <span className="wordmark-pepy">Pepy</span>
        </a>
        <a className="topbar-call" href="tel:+420776112340">
          776&nbsp;112&nbsp;340
        </a>
      </header>

      <section className="hero">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Ranní kytice vázaná v dílně Kytky od Pepy — pivoňky, chrpy a zeleň"
            className="hero-img"
          />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Zahradnictví · České Budějovice</p>
          <h1 className="hero-title">
            Vážeme z toho,<br />
            co ráno dorazilo
            <span className="hero-fresh">čerstvé.</span>
          </h1>
          <p className="hero-lede">
            Malé rodinné květinářství u Sokolského ostrova. Pepa váže kytice od
            ruky, sází truhlíky a pozná na první pohled, jestli vám ten fíkus
            chce víc světla.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420776112340">
              Zavolat Pepovi
            </a>
            <a
              className="btn btn-ghost"
              href="https://objednavky.kytkyodpepy.com"
            >
              Objednat na pobočce
            </a>
          </div>
          <dl className="hero-facts">
            <div>
              <dt>Otevřeno</dt>
              <dd>Po–Pá 8–18 · So 8–12</dd>
            </div>
            <div>
              <dt>Kde nás najdete</dt>
              <dd>Riegrova 12, České Budějovice</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="sortiment" aria-labelledby="sortiment-nadpis">
        <div className="section-head">
          <p className="eyebrow">Co u nás pořídíte</p>
          <h2 id="sortiment-nadpis" className="section-title">
            Čtyři věci, co umíme líp než řetězce
          </h2>
        </div>
        <ol className="cards">
          {sortiment.map((item) => (
            <li className="card" key={item.cislo}>
              <span className="card-num" aria-hidden="true">
                {item.cislo}
              </span>
              <div className="card-body">
                <h3 className="card-title">{item.nazev}</h3>
                <p className="card-text">{item.popis}</p>
                <p className="card-detail">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="about" aria-labelledby="about-nadpis">
        <div className="about-media">
          <img
            src="/section-1.webp"
            alt="Pepa u pracovního stolu obklopený květinami a nářadím"
            className="about-img"
          />
          <img
            src="/section-2.webp"
            alt="Detail vázané kytice s čerstvými řezanými květinami"
            className="about-img about-img-second"
          />
        </div>
        <div className="about-copy">
          <p className="eyebrow">Kdo je Pepa</p>
          <h2 id="about-nadpis" className="section-title">
            Devět let na jednom rohu, pořád stejné ruce
          </h2>
          <p className="about-text">
            Josef Vondra otevřel prodejnu v roce 2016 a od té doby jezdí každou
            středu a pátek na holandskou burzu pro čerstvé řezané květiny. Co se
            neprodá do tří dnů, jde do vázy na pult zadarmo — nevázeme nic, co
            bychom nedali vlastní mámě.
          </p>
          <ul className="about-list">
            <li>
              <span className="about-list-mark">✳</span>
              Kytice vážeme od ruky, ne z předpřipravených balíčků
            </li>
            <li>
              <span className="about-list-mark">✳</span>
              Dovoz po Budějovicích do 3 km zdarma
            </li>
            <li>
              <span className="about-list-mark">✳</span>
              Poradíme, čím zalévat a přesazovat — i po prodeji
            </li>
          </ul>
          <blockquote className="about-quote">
            „Přišla jsem pro poslední chvíli před svatbou a Pepa mi z ničeho
            uvázal kytici, které si všimli všichni.“
            <cite>— Markéta H., Rudolfov</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}

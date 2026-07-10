export default function Page() {
  const listings = [
    {
      tag: "K pronájmu",
      price: "11 000 Kč",
      per: "/ měsíc",
      title: "Byt 1+kk",
      place: "Liberec, Ostravská",
      agent: "Barbora Majtner Lišková",
    },
    {
      tag: "K pronájmu",
      price: "20 000 Kč",
      per: "/ měsíc",
      title: "Byt 4+1",
      place: "Liberec, Dobiášova",
      agent: "Bc. Nela Soldát",
    },
    {
      tag: "Na prodej",
      price: "5 800 000 Kč",
      per: "",
      title: "Rodinný dům",
      place: "Železný Brod",
      agent: "Zdeněk Milfajt",
    },
  ];

  const steps = [
    {
      n: "01",
      title: "Sejdeme se u vás doma",
      body: "Přijedeme na místo, projdeme nemovitost a poslechneme si, kam spěcháte a kam ne. Bez závazku, bez tlaku.",
    },
    {
      n: "02",
      title: "Určíme reálnou cenu",
      body: "Podíváme se, za kolik se v okolí opravdu prodává — ne za kolik si to lidé přejí. Cenu podložíme daty z Liberecka.",
    },
    {
      n: "03",
      title: "Připravíme nemovitost",
      body: "Profesionální fotky, home staging, půdorys i právní kontrola papírů. Kupující si zamiluje první dojem.",
    },
    {
      n: "04",
      title: "Vyjednáme a předáme klíče",
      body: "Vedeme prohlídky, hlídáme rezervaci, úschovu i katastr. Vy podepíšete a předáte klíče — zbytek je na nás.",
    },
  ];

  return (
    <main className="mf">
      <header className="mf-top">
        <a className="mf-logo" href="#" aria-label="Milfajt Reality, úvodní stránka">
          <span className="mf-logo-mark">M</span>
          <span className="mf-logo-word">
            Milfajt<span className="mf-logo-sub">Reality — Liberec</span>
          </span>
        </a>
        <nav className="mf-nav" aria-label="Hlavní navigace">
          <a href="#nabidka">Nabídka</a>
          <a href="#postup">Jak prodáváme</a>
          <a href="#tym">Náš tým</a>
          <a className="mf-nav-cta" href="tel:+420606786700">Zavolat</a>
        </nav>
      </header>

      <section className="mf-hero" aria-labelledby="mf-hero-title">
        <img
          className="mf-hero-img"
          src="/hero.webp"
          alt="Výhled na střechy libereckých domů pod Ještědem"
          loading="eager"
          width={1600}
          height={1000}
        />
        <div className="mf-hero-panel">
          <p className="mf-eyebrow">Realitní kancelář · Žižkovo náměstí, Liberec</p>
          <h1 id="mf-hero-title" className="mf-hero-title">
            Reality lidsky<br />a pro lidi.
          </h1>
          <p className="mf-hero-lead">
            Prodej, pronájem a správa nemovitostí na Liberecku. Postaráme se o vše,
            co je třeba — od první fotky až po předání klíčů.
          </p>
          <div className="mf-hero-actions">
            <a className="mf-btn" href="#postup">Chci prodat nemovitost</a>
            <a className="mf-btn mf-btn-ghost" href="#nabidka">Prohlédnout nabídku</a>
          </div>
          <dl className="mf-hero-facts">
            <div>
              <dt>Působíme na</dt>
              <dd>Liberecku a Jablonecku</dd>
            </div>
            <div>
              <dt>Voláte přímo</dt>
              <dd>
                <a href="tel:+420606786700">606 786 700</a>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="nabidka" className="mf-listings" aria-labelledby="mf-listings-title">
        <div className="mf-section-head">
          <p className="mf-eyebrow">Aktuální nabídka</p>
          <h2 id="mf-listings-title">Nemovitosti, které právě hledají majitele</h2>
          <p className="mf-section-sub">
            Vybrané byty a domy z Liberce a okolí. Za každou nabídkou stojí konkrétní
            makléř — ne anonymní inzerát.
          </p>
        </div>

        <ul className="mf-cards">
          {listings.map((l) => (
            <li key={l.title + l.place} className="mf-card">
              <div className="mf-card-media">
                <img
                  src="/section-1.webp"
                  alt={`${l.title} — ${l.place}`}
                  loading="lazy"
                  width={800}
                  height={560}
                />
                <span className={`mf-badge ${l.tag === "Na prodej" ? "is-sale" : "is-rent"}`}>
                  {l.tag}
                </span>
              </div>
              <div className="mf-card-body">
                <p className="mf-card-price">
                  {l.price}
                  {l.per && <span>{l.per}</span>}
                </p>
                <h3 className="mf-card-title">{l.title}</h3>
                <p className="mf-card-place">{l.place}</p>
                <p className="mf-card-agent">Vaše makléřka / makléř: {l.agent}</p>
              </div>
            </li>
          ))}
        </ul>

        <a className="mf-inline-link" href="#nabidka">
          Zobrazit další nemovitosti
          <span aria-hidden="true">→</span>
        </a>
      </section>

      <section id="postup" className="mf-trust" aria-labelledby="mf-trust-title">
        <div className="mf-trust-grid">
          <div className="mf-trust-copy">
            <p className="mf-eyebrow">Jak prodáváme</p>
            <h2 id="mf-trust-title">
              Co uděláme pro prodej vaší nemovitosti za maximální cenu
            </h2>
            <p className="mf-section-sub">
              Prodej domu nebo bytu je jeden z největších obchodů vašeho života.
              Provedeme vás jím krok za krokem — srozumitelně a bez papírování navíc.
            </p>
            <img
              className="mf-trust-img"
              src="/section-2.webp"
              alt="Zdeněk Milfajt při prohlídce nemovitosti s klienty"
              loading="lazy"
              width={900}
              height={640}
            />
          </div>

          <ol className="mf-steps" id="tym">
            {steps.map((s) => (
              <li key={s.n} className="mf-step">
                <span className="mf-step-n" aria-hidden="true">{s.n}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </li>
            ))}
            <li className="mf-step mf-step-note">
              <p>
                Chcete vědět, čemu se při prodeji vyhnout? Poradíme vám
                <strong> 7 nejčastějších chyb při prodeji nemovitosti</strong> —
                stačí zavolat na <a href="tel:+420606786700">606 786 700</a>.
              </p>
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}

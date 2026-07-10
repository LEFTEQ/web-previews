export default function Page() {
  const services = [
    {
      num: '01 — Pronájem',
      title: 'Rámové fasádní lešení MJ UNI 70',
      body: 'Přes 15 000 m² schváleného materiálu skladem. Pronajmeme vám přesně tolik, kolik stavba potřebuje — od rodinného domku po celý panelák.',
      price: 'od 1 Kč / m² / den',
    },
    {
      num: '02 — Návrh',
      title: 'Návrh konstrukce lešení',
      body: 'Podle rozměrů a typu objektu vám navrhneme rozvržení lešení i kotvení. Bez skrytých položek, ať předem víte, s čím počítat.',
      price: 'ZDARMA',
    },
    {
      num: '03 — Montáž',
      title: 'Montáž a demontáž na klíč',
      body: 'Vyškolení lešenáři postaví i rozeberou konstrukci za vás. Dovezeme vlastními nákladními auty přímo na místo stavby.',
      price: 'od 60 Kč / m²',
    },
    {
      num: '04 — Ochrana',
      title: 'Ochranné sítě na přání',
      body: 'K lešení dodáme ochranné a záchytné sítě. Ochrání okolí před padajícím materiálem i vaši fasádu při zateplování.',
      price: 'na vyžádání',
    },
  ];

  const badges = [
    { k: 'ČSN', v: 'Materiál schválený podle českých norem — s platným českým certifikátem.' },
    { k: '15k', v: 'Přes 15 000 m² lešení skladem v areálu stavebnin Balus v Olomouci-Holici.' },
    { k: '1 Kč', v: 'Záruka nejnižší ceny — najdete levnější nabídku? Přineste ji, srazíme cenu.' },
    { k: 'Auta', v: 'Vlastní nákladní vozy i proškolení lešenáři pro dopravu a montáž.' },
  ];

  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <a className="brand" href="#" aria-label="Balus — půjčovna lešení Olomouc">
            <b>BALUS</b>
            <span>Půjčovna&nbsp;lešení · Olomouc</span>
          </a>
          <nav aria-label="Hlavní navigace">
            <ul className="nav-links">
              <li><a href="#sluzby">Služby</a></li>
              <li><a href="#sluzby">Ceník</a></li>
              <li><a href="#onas">Osvědčení</a></li>
              <li><a href="#kontakt">Kontakt</a></li>
            </ul>
          </nav>
          <a className="nav-tel" href="tel:+420602540373">602 540 373</a>
          <a className="nav-toggle" href="#kontakt">Zavolat</a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-media">
          <img src="/hero.webp" alt="Fasádní lešení Balus postavené kolem budovy v Olomouci" />
        </div>
        <div className="wrap hero-inner">
          <span className="hero-eyebrow rise d1">Lešenářství · Olomouc-Holice</span>
          <h1 className="rise d2">Fasáda čeká.<br /><em>Lešení dorazí</em> ještě tento týden.</h1>
          <p className="hero-sub rise d3">
            Půjčíme, navrhneme, postavíme i rozebereme. Přes 15 000&nbsp;m² certifikovaného
            rámového lešení MJ&nbsp;UNI&nbsp;70 — na rodinný dům i celý panelák.
          </p>
          <div className="hero-actions rise d4">
            <a className="btn btn-primary" href="tel:+420602540373">Zavolat p. Kubalovi →</a>
            <a className="btn btn-ghost" href="#sluzby">Prohlédnout ceník</a>
          </div>
        </div>
        <div className="hero-specs">
          <div className="wrap">
            <div className="spec"><div className="spec-n">15 000 m²</div><div className="spec-l">Materiálu skladem</div></div>
            <div className="spec"><div className="spec-n">od 1 Kč</div><div className="spec-l">Za m² a den</div></div>
            <div className="spec"><div className="spec-n">MJ UNI 70</div><div className="spec-l">Rámový systém</div></div>
            <div className="spec"><div className="spec-n">ČSN ✓</div><div className="spec-l">Český certifikát</div></div>
          </div>
        </div>
      </section>

      <section className="sec-services" id="sluzby">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="sec-tag">Kompletní služby pronájmu</div>
              <h2>Od návrhu ke stojícímu lešení</h2>
            </div>
            <p>Vyřídíme celou stavbu na jednom místě — od bezplatného návrhu po demontáž a odvoz. Čtyři kroky, jedno telefonní číslo.</p>
          </div>

          <div className="grid">
            {services.map((s) => (
              <article className="svc" key={s.num}>
                <div className="svc-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <span className="price">{s.price}</span>
              </article>
            ))}
            <div className="svc-photo">
              <img src="/section-1.webp" alt="Detail rámového fasádního lešení MJ UNI 70 na stavbě" />
            </div>
          </div>
        </div>
      </section>

      <section className="sec-trust" id="onas">
        <div className="wrap">
          <div className="trust-grid">
            <img src="/section-2.webp" alt="Vyškolení lešenáři Balus při montáži lešení v Olomouci" />
            <div className="trust-copy">
              <div className="sec-tag">Proč Balus</div>
              <h2>Spolehlivé lešení <em>z Olomouce</em> — a nejnižší cena písemně.</h2>
              <p>
                Sídlíme v areálu stavebnin Balus v Olomouci-Holici. Postavíme lešení na jakýkoli
                objekt, dovezeme vlastními auty a pošleme proškolené lešenáře. Vše podle českých
                norem a s platným certifikátem.
              </p>
              <div className="badges">
                {badges.map((b) => (
                  <div className="badge" key={b.k}>
                    <b>{b.k}</b><span>{b.v}</span>
                  </div>
                ))}
              </div>

              <div className="contact-card" id="kontakt">
                <div className="who">Kontakt · p. Kubala</div>
                <a className="tel" href="tel:+420602540373">602 540 373</a>
                <div className="meta">
                  Sladkovského 53a, 783 71 Olomouc-Holice<br />
                  <a href="mailto:balusleseni@seznam.cz">balusleseni@seznam.cz</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

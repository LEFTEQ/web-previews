export default function Page() {
  const kroky = [
    {
      c: "01",
      t: "Výjezd k vám a výpočet tepelných ztrát",
      d: "Přijedeme do Olomouce i okolí, změříme dům a spočítáme, jak velké čerpadlo skutečně potřebujete. Žádný odhad od stolu — návrh sedí na vaši stavbu."
    },
    {
      c: "02",
      t: "Cenový návrh a vyřízení dotace",
      d: "Dostanete jasnou nabídku na jednu stránku. Pomůžeme s Novou zelenou úsporám i papíry — dotaci pořešíme za vás."
    },
    {
      c: "03",
      t: "Montáž a napojení na topení",
      d: "Venkovní jednotku i vnitřní zásobník zapojíme, vyladíme ekvitermní křivku a předáme dům, který topí sám."
    },
    {
      c: "04",
      t: "Servis a záruka po celou dobu",
      d: "Pravidelný servis, kontrola chladiva a příprava na zimu. Voláte jednomu člověku, ne callcentru."
    }
  ];

  const parametry = [
    { h: "−25 °C", p: "Čerpadlo topí i v olomouckých mrazech, kdy jiné systémy odcházejí na doplňkovou spirálu." },
    { h: "SCOP 4,8", p: "Z jedné kilowatthodiny elektřiny uděláme skoro pět kilowatthodin tepla. To se pozná na účtu." },
    { h: "12 let", p: "Instalujeme čerpadla vzduch–voda i vzduch–vzduch od roku 2012. Naše realizace stojí od Pivína po Prahu." }
  ];

  return (
    <main className="kl">
      <header className="kl-nav" aria-label="Hlavní navigace">
        <a className="kl-mark" href="#" aria-label="Klimaland — domů">
          <span className="kl-mark-k">klima</span><span className="kl-mark-l">land</span>
          <span className="kl-mark-dot" aria-hidden="true"></span>
        </a>
        <nav className="kl-links">
          <a href="#jak">Jak to probíhá</a>
          <a href="#duvera">Naše realizace</a>
          <a className="kl-nav-cta" href="tel:+420731317144">731&nbsp;317&nbsp;144</a>
        </nav>
      </header>

      <section className="kl-hero" aria-labelledby="hero-nadpis">
        <div className="kl-hero-media">
          <img src="/hero.webp" alt="Venkovní jednotka tepelného čerpadla u rodinného domu na Olomoucku" className="kl-hero-img" />
          <div className="kl-hero-badge" aria-hidden="true">
            <span className="kl-hero-badge-num">−25°</span>
            <span className="kl-hero-badge-lbl">topí i v tomhle</span>
          </div>
        </div>
        <div className="kl-hero-text">
          <p className="kl-eyebrow">Tepelná čerpadla · Olomouc a okolí</p>
          <h1 id="hero-nadpis">
            Teplo z venkovního<br />
            vzduchu.<span className="kl-hero-accent"> I když venku mrzne.</span>
          </h1>
          <p className="kl-hero-lead">
            Navrhneme, namontujeme a odservisujeme tepelné čerpadlo, které utáhne
            celou zimu — od výpočtu tepelných ztrát až po vyřízenou dotaci. Vy jen
            topíte levněji.
          </p>
          <div className="kl-hero-actions">
            <a className="kl-btn" href="tel:+420731317144">Zavolat na 731 317 144</a>
            <a className="kl-btn-ghost" href="#jak">Jak montáž probíhá</a>
          </div>
        </div>
      </section>

      <section className="kl-jak" id="jak" aria-labelledby="jak-nadpis">
        <div className="kl-sec-head">
          <p className="kl-eyebrow">Od telefonu k teplu ve čtyřech krocích</p>
          <h2 id="jak-nadpis">Jak u nás probíhá cesta k čerpadlu</h2>
        </div>
        <ol className="kl-kroky">
          {kroky.map((k) => (
            <li className="kl-krok" key={k.c}>
              <span className="kl-krok-num" aria-hidden="true">{k.c}</span>
              <div>
                <h3>{k.t}</h3>
                <p>{k.d}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="kl-jak-media">
          <img src="/section-1.webp" alt="Montáž vnitřní jednotky a zásobníku tepelného čerpadla technikem Klimaland" />
        </div>
      </section>

      <section className="kl-duvera" id="duvera" aria-labelledby="duvera-nadpis">
        <div className="kl-duvera-media">
          <img src="/section-2.webp" alt="Realizovaná instalace tepelného čerpadla u rodinného domu" />
        </div>
        <div className="kl-duvera-text">
          <p className="kl-eyebrow">Proč lidé na Olomoucku volají nám</p>
          <h2 id="duvera-nadpis">Čísla, která si od nás odnesete domů</h2>
          <dl className="kl-parametry">
            {parametry.map((p) => (
              <div className="kl-param" key={p.h}>
                <dt>{p.h}</dt>
                <dd>{p.p}</dd>
              </div>
            ))}
          </dl>
          <p className="kl-duvera-note">
            Realizace: Tepelné čerpadlo Pivín · Klimatizace RD Smržice · RD Dolany ·
            čerpadlo Olomouc · čerpadlo Praha. Sídlíme na Pavelkově 18C v Olomouci,
            druhá pobočka je v Praze.
          </p>
          <a className="kl-btn" href="mailto:info@klimaland.cz">Chci cenový návrh e-mailem</a>
        </div>
      </section>
    </main>
  );
}

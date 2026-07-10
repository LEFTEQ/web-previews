export default function Page() {
  const rady = [
    {
      cislo: "01",
      znacka: "CLÍRQ & KAREN",
      popis: "Řada školních a kancelářských sešitů — linkované, čtverečkované i čisté. Šitá vazba, gramáž papíru, kterou pero neprosákne.",
      detaily: ["Sešity A4 / A5", "Bloky a poznámkové kostky", "Linkatura A / Čj / Čtverečky"],
    },
    {
      cislo: "02",
      znacka: "PUFFY & SNUFFI",
      popis: "Dětská řada — barevné desky, samolepky, kroužkové bloky. Vyrobené tak, aby vydržely tašku, lavici i cestu domů v dešti.",
      detaily: ["Kroužkové bloky", "Desky a obaly", "Samolepkové archy"],
    },
    {
      cislo: "03",
      znacka: "VÝROBA NA MÍRU",
      popis: "Vy nakreslíte, my vyrobíme. Vlastní potisk, formát a vazba pro školy, firmy i eshopy — od návrhu po paletu na vaší rampě.",
      detaily: ["Vlastní potisk desek", "Nestandardní formáty", "Firemní edice"],
    },
  ];

  const duvody = [
    { rok: "1994", text: "Rodinná firma z Ostravy-Heřmanic. Papír nám prošel rukama třicet let." },
    { rok: "300", text: "položek máme skladem, připravených hned k odběru. Nečekáte na dovoz." },
    { rok: "0 Kč", text: "za dopravu. Dovezeme zboží až k vám — do skladu, do školy, na rampu." },
  ];

  return (
    <main className="qt">
      <header className="qt-nav">
        <a className="qt-logo" href="#" aria-label="Qualitop, papírnictví Ostrava">
          <span className="qt-logo-mark">Q</span>
          <span className="qt-logo-word">Qualitop</span>
          <span className="qt-logo-sub">papír · Ostrava · 1994</span>
        </a>
        <nav className="qt-nav-links" aria-label="Hlavní navigace">
          <a href="#rady">Řady produktů</a>
          <a href="#o-nas">O nás</a>
          <a className="qt-nav-cta" href="tel:+420596236427">596 236 427</a>
        </nav>
      </header>

      <section className="qt-hero">
        <div className="qt-hero-copy">
          <p className="qt-eyebrow">Velkoobchod papírenským zbožím · od roku 1994</p>
          <h1 className="qt-hero-title">
            Sešit, který<br />
            <span className="qt-hero-accent">pero neprosákne.</span>
          </h1>
          <p className="qt-hero-lead">
            Vyrábíme a dodáváme sešity, bloky a papírenské zboží pro školy,
            firmy i eshopy po celé Moravě. 300 položek skladem, doprava zdarma
            až k vám.
          </p>
          <div className="qt-hero-actions">
            <a className="qt-btn qt-btn-primary" href="#rady">Prohlédnout řady</a>
            <a className="qt-btn qt-btn-ghost" href="mailto:info@qualitop.cz">Poptat výrobu na míru</a>
          </div>
        </div>
        <figure className="qt-hero-media">
          <img
            src="/hero.webp"
            alt="Řada sešitů a papírenského zboží Qualitop CLÍRQ vyskládaná v regálu"
            className="qt-hero-img"
          />
          <figcaption className="qt-hero-tag">Řada CLÍRQ · šitá vazba · gramáž 80 g/m²</figcaption>
        </figure>
      </section>

      <section className="qt-strip" aria-label="Klíčové vlastnosti">
        <span>Vše skladem</span>
        <span aria-hidden="true">·</span>
        <span>Doprava zdarma</span>
        <span aria-hidden="true">·</span>
        <span>Výroba na míru</span>
        <span aria-hidden="true">·</span>
        <span>Dodání až ke klientovi</span>
        <span aria-hidden="true">·</span>
        <span>Rodinná firma</span>
      </section>

      <section id="rady" className="qt-section">
        <div className="qt-section-head">
          <p className="qt-eyebrow">Katalog</p>
          <h2 className="qt-section-title">Tři řady, které vedeme</h2>
          <p className="qt-section-lead">
            Každá řada má svůj domov — od první třídy po firemní recepci.
            Katalogy vám pošleme e-mailem, nebo si domluvte vzorky.
          </p>
        </div>

        <ol className="qt-rady">
          {rady.map((r) => (
            <li key={r.cislo} className="qt-rada">
              <span className="qt-rada-num">{r.cislo}</span>
              <div className="qt-rada-body">
                <h3 className="qt-rada-znacka">{r.znacka}</h3>
                <p className="qt-rada-popis">{r.popis}</p>
                <ul className="qt-rada-detaily">
                  {r.detaily.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <figure className="qt-section-figure">
          <img
            src="/section-1.webp"
            alt="Detail papírenských produktů Qualitop připravených k odběru"
            className="qt-figure-img"
          />
        </figure>
      </section>

      <section id="o-nas" className="qt-about">
        <figure className="qt-about-figure">
          <img
            src="/section-2.webp"
            alt="Sklad a výroba papírenského zboží Qualitop v Ostravě-Heřmanicích"
            className="qt-figure-img"
          />
        </figure>
        <div className="qt-about-copy">
          <p className="qt-eyebrow">O nás · Ostrava-Heřmanice</p>
          <h2 className="qt-section-title">Papír děláme poctivě od roku 1994</h2>
          <p className="qt-section-lead">
            Jsme rodinná firma z Orlovské ulice. Zákazník u nás mluví s člověkem,
            který zboží zná — ne s formulářem. Řekneme rovnou, co máme skladem
            a kdy to dorazí.
          </p>

          <dl className="qt-fakta">
            {duvody.map((d) => (
              <div key={d.rok} className="qt-fakt">
                <dt className="qt-fakt-rok">{d.rok}</dt>
                <dd className="qt-fakt-text">{d.text}</dd>
              </div>
            ))}
          </dl>

          <div className="qt-kontakt-karta">
            <p className="qt-kontakt-line">
              <strong>Odbyt Ostrava</strong> — Romana Kejval Grušková
            </p>
            <p className="qt-kontakt-line">
              <a href="tel:+420596236427">596 236 427</a> ·{" "}
              <a href="mailto:info@qualitop.cz">info@qualitop.cz</a>
            </p>
            <p className="qt-kontakt-line qt-kontakt-adresa">
              Orlovská 345/156, 713 00 Ostrava-Heřmanice
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

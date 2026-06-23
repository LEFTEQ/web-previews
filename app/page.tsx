export default function Page() {
  const galleryNotes = [
    "Kuchyně, kde vodorovná léta navazují přes celou linku.",
    "Vestavěné skříně, knihovny a zádveří využité do posledního centimetru.",
    "Řešení pro panelákové byty, malé provozovny i obytné interiéry."
  ];

  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <header className="topbar">
          <a className="wordmark" href="#top" aria-label="Malének návrh domů">
            <span className="wordmark-mark">M</span>
            <span className="wordmark-text">Malének</span>
          </a>
          <a className="topbar-link" href="tel:+420605251377">+420 605 251 377</a>
        </header>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Truhlářství v Olomouci od roku 1990</p>
            <h1 id="hero-title">Nábytek na míru, který začíná přesným zaměřením prostoru.</h1>
            <p className="lead">
              Potřebujete kuchyň, knihovnu, vestavěnou skříň nebo vybavení provozovny? Navrhneme a vyrobíme řešení, které sedí vašemu bytu, materiálu i každodennímu používání.
            </p>
            <div className="hero-actions" aria-label="Hlavní kontakty">
              <a className="button primary" href="tel:+420605251377">Zavolat do dílny</a>
              <a className="button secondary" href="#kontakt">Zobrazit adresu</a>
            </div>
          </div>

          <div className="joinery-panel" aria-label="Charakteristický motiv navazujících dřevěných let">
            <div className="grain-stack">
              <span></span><span></span><span></span><span></span><span></span><span></span>
            </div>
            <div className="measure-card">
              <span className="measure-label">zaměřeno</span>
              <strong>na milimetr</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section" aria-labelledby="content-title">
        <div className="section-kicker">Co pro vás vyrobíme</div>
        <div className="content-grid">
          <div>
            <h2 id="content-title">Když se prostor neptá na katalogové rozměry.</h2>
            <p>
              V Olomouci vyrábíme nábytek z lamina, dřevotřísky a dalších materiálů tak, aby fungoval přesně tam, kde má stát. Řešíme kuchyně s vestavěnými spotřebiči, obývací stěny, ložnice, knihovny i nábytek pro obchod nebo provozovnu.
            </p>
          </div>

          <div className="work-notes" aria-label="Ukázky práce">
            {galleryNotes.map((note, index) => (
              <article className="note" key={note}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer" id="kontakt">
        <div>
          <h2>Kontakty</h2>
          <p>Provozovna: Dolní Novosadská 85/5, Olomouc - Nové sady</p>
          <p>Korespondenční adresa: Partyzánská 17, Olomouc - Holice</p>
          <p>Telefon: <a href="tel:+420605251377">+420 605 251 377</a></p>
          <p>IČ: 100 38 477</p>
        </div>
        <p className="proposal-note">Nezávazný návrh od studia lovinka. Nejde o oficiální web firmy.</p>
      </footer>
    </main>
  );
}

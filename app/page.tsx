export default function Page() {
  const nav = ["O nas", "Realizace", "Vyroba nabytku", "Kontakt"];

  return (
    <main className="site-shell">
      <header className="topbar" aria-label="Hlavicka webu">
        <a className="wordmark" href="#top" aria-label="Nabytek Harasta - navrh uvodni strany">
          <span className="wordmark-mark">H</span>
          <span className="wordmark-text">Harasta</span>
        </a>
        <nav className="nav" aria-label="Hlavni navigace">
          {nav.map((item) => (
            <a key={item} href={item === "Kontakt" ? "#kontakt" : "#vyroba"}>
              {item}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="measure-rail" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Interiery na klic z Brna od roku 2002</p>
          <h1 id="hero-title">Nabytek, ktery sedne na milimetr.</h1>
          <p className="hero-text">
            Pro atypicke kuchyne, vestavene skrine, knihovny i kompletni vybaveni firem hledam reseni,
            ktere vyuzije prostor naplno a bude se dobre pouzivat kazdy den.
          </p>
          <div className="hero-actions" aria-label="Hlavni akce">
            <a className="button primary" href="tel:+420605712422">Zavolat kvuli zamereni</a>
            <a className="button secondary" href="mailto:info@harasta-nabytek.cz">Poslat poptavku</a>
          </div>
        </div>

        <div className="cabinet-composition" aria-label="Stylizovana sestava skrini a kuchynskych modulu">
          <div className="cabinet tall"><span>vestavba</span></div>
          <div className="cabinet wide"><span>kuchyne</span></div>
          <div className="cabinet small blue"><span>nika</span></div>
          <div className="cabinet small red"><span>detail</span></div>
          <div className="cabinet long"><span>pracovni deska</span></div>
        </div>
      </section>

      <section className="content-section" id="vyroba" aria-labelledby="section-title">
        <div className="section-heading">
          <p className="eyebrow">Vyroba nabytku na zakazku</p>
          <h2 id="section-title">Od navrhu po montaz bez hledani kompromisu.</h2>
        </div>

        <div className="service-grid">
          <article>
            <h3>Kuchyne i atypicke prostory</h3>
            <p>
              Linky navrzene podle dispozice, vareni a uloznych naroku. Vcetne reseni rohu,
              vysokych skrini, ostruku a materialu od lamina po dyhu, MDF a vysoky lesk.
            </p>
          </article>
          <article>
            <h3>Skrine, knihovny, pokoje</h3>
            <p>
              Vestavene skrine, obyvaci steny, detsky a studentsky nabytek i knihovny, ktere
              presne navazuji na steny, podlahy a kazdodenni provoz domacnosti.
            </p>
          </article>
          <article>
            <h3>Firmy, recepce, ordinace</h3>
            <p>
              Vybaveni kancelari, recepci, ordinaci a laboratori s durazem na odolnost,
              jednoduche cisteni a prakticke ulozeni dokumentu, techniky i pracovnich pomucek.
            </p>
          </article>
        </div>
      </section>

      <footer className="footer" id="kontakt">
        <div>
          <strong>Nabytek Harasta</strong>
          <p>Michal Harasta, Krizikova 68i, 612 00 Brno</p>
          <p>Firma se nachazi v arealu Kralovopolske strojirny.</p>
        </div>
        <address>
          <a href="tel:+420605712422">+420 605 712 422</a>
          <a href="mailto:info@harasta-nabytek.cz">info@harasta-nabytek.cz</a>
        </address>
        <p className="studio-note">Nezavazny navrh od studia lovinka. Nejde o oficialni web firmy.</p>
      </footer>
    </main>
  );
}

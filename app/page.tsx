export default function Page() {
  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <header className="topbar" aria-label="Hlavní navigace">
          <a className="wordmark" href="#hero-title" aria-label="Delus interier">
            <span className="wordmark-mark">D</span>
            <span className="wordmark-text">delus</span>
            <span className="wordmark-note">interier na míru</span>
          </a>
          <nav className="nav-links" aria-label="Sekce webu">
            <a href="#reseni">Řešení</a>
            <a href="tel:+420774704216">+420 774 704 216</a>
            <a href="mailto:poptavky@delus.cz">Poptávka</a>
          </nav>
        </header>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Zakázkové kuchyně a interiérový nábytek</p>
            <h1 id="hero-title">Kuchyně, kde má každá věc svoje přesné místo.</h1>
            <p className="lead">
              Navrhneme a vyrobíme vybavení domova tak, aby šetřilo čas, dobře se používalo a vydrželo každodenní provoz. Od první dispozice až po poslední spáru řešíme ergonomii, materiál i technologii.
            </p>
            <div className="hero-actions" aria-label="Kontaktní odkazy">
              <a className="button primary" href="mailto:poptavky@delus.cz">Poslat zadání</a>
              <a className="button secondary" href="tel:+420774704217">Zavolat technikovi</a>
            </div>
          </div>

          <div className="precision-board" aria-label="Vizuální motiv přesného rozměření kuchyně">
            <div className="measure-axis horizontal" aria-hidden="true" />
            <div className="measure-axis vertical" aria-hidden="true" />
            <div className="cabinet cabinet-tall">
              <span>vestavba</span>
            </div>
            <div className="cabinet cabinet-worktop">
              <span>pracovní plocha</span>
            </div>
            <div className="cabinet cabinet-drawer">
              <span>výsuvy</span>
            </div>
            <div className="cabinet cabinet-stone">
              <span>kámen</span>
            </div>
            <p className="board-caption">Signature prvek: modrá měřicí osa jako připomínka přesnosti před výrobou.</p>
          </div>
        </div>
      </section>

      <section className="content-section" id="reseni" aria-labelledby="section-title">
        <div className="section-heading">
          <p className="eyebrow">Co si odnáší zákazník</p>
          <h2 id="section-title">Promyšlený interiér bez zbytečného obcházení kompromisů.</h2>
        </div>

        <div className="service-layout">
          <article className="service-card featured">
            <span className="card-index">01</span>
            <h3>Kuchyně na míru</h3>
            <p>
              Pracovní plochu, úložné zóny, spotřebiče i jídelní část skládáme podle toho, jak doma skutečně vaříte. Dostanete návrh, který zkrátí pohyb po kuchyni a udrží věci přehledně po ruce.
            </p>
          </article>
          <article className="service-card">
            <span className="card-index">02</span>
            <h3>Nábytek pro celý byt</h3>
            <p>
              Obývací pokoje, šatny, pracovny, ložnice, dětské pokoje, koupelnový nábytek, integrované dveře i solitéry sjednotíme materiálem a detailem.
            </p>
          </article>
          <article className="service-card">
            <span className="card-index">03</span>
            <h3>Materiály a technologie</h3>
            <p>
              Vyberete si dýhu, lak, lamino, sklo, fólii, kámen nebo keramiku. Ve výrobě navazujeme řezáním, CNC obráběním, frézováním, olepováním a zpracováním HPL kompaktních desek.
            </p>
          </article>
        </div>
      </section>

      <footer className="footer">
        <div>
          <strong>Kontakt pro poptávku</strong>
          <p>
            <a href="tel:+420774704216">+420 774 704 216</a> · <a href="tel:+420774704217">+420 774 704 217</a> · <a href="mailto:poptavky@delus.cz">poptavky@delus.cz</a>
          </p>
        </div>
        <p className="disclaimer">Nezávazný návrh od studia lovinka. Nejde o oficiální web firmy.</p>
      </footer>
    </main>
  );
}

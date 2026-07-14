export default function Page() {
  return (
    <main className="site-shell">
      <a className="skip-link" href="#obsah">Přejít k obsahu</a>

      <header className="site-header" aria-label="Hlavní navigace">
        <a className="wordmark" href="#top" aria-label="Knihy Dobrovský Plzeň – začátek stránky">
          <span className="wordmark__name">Knihy Dobrovský</span>
          <span className="wordmark__place">Plzeň · Sedláčkova</span>
        </a>

        <nav className="site-nav" aria-label="Navigace na stránce">
          <a href="#nabidka">Co tu najdete</a>
          <a href="#cesta">Kudy k nám</a>
        </nav>
      </header>

      <div id="top" className="hero">
        <div className="hero__copy" id="obsah">
          <p className="eyebrow">Knihkupectví v centru Plzně</p>
          <h1>
            Knihy, které jinde
            <span>hledáte mezi řádky.</span>
          </h1>
          <p className="hero__lead">
            Romány na víkend, skripta Západočeské univerzity i odborná literatura,
            kterou nebývá snadné sehnat. Na Sedláčkově vám pomůžeme najít správný titul.
          </p>

          <div className="hero__actions">
            <a className="button button--primary" href="#cesta">Naplánovat cestu</a>
            <a className="button button--quiet" href="tel:+420542220320">Zavolat knihkupci</a>
          </div>

          <dl className="quick-facts" aria-label="Základní informace o prodejně">
            <div>
              <dt>Otevřeno</dt>
              <dd>Po–Pá 9:00–18:00</dd>
            </div>
            <div>
              <dt>Adresa</dt>
              <dd>Sedláčkova 31, Plzeň</dd>
            </div>
          </dl>
        </div>

        <figure className="hero__visual">
          <img
            src="/hero.webp"
            alt="Interiér knihkupectví Knihy Dobrovský v plzeňské Sedláčkově ulici s policemi plnými knih"
            width="1200"
            height="1500"
          />
          <div className="book-index" aria-hidden="true">
            <span>Romány</span>
            <span>Skripta</span>
            <span>Plzeň</span>
          </div>
          <figcaption>
            <span>Osobní odběr e-shopu</span>
            <strong>Bezbariérová prodejna</strong>
          </figcaption>
        </figure>
      </div>

      <section className="offer" id="nabidka" aria-labelledby="offer-title">
        <div className="section-heading">
          <p className="eyebrow">Výběr pro město plné čtenářů a studentů</p>
          <h2 id="offer-title">Od anatomie po západočeské příběhy.</h2>
          <p>
            Sedláčkova není jen další zastávka pro bestseller. Zdejší výběr počítá
            s tím, co opravdu hledají studenti, odborníci i plzeňští čtenáři.
          </p>
        </div>

        <div className="offer__layout">
          <figure className="section-visual section-visual--offer">
            <img
              src="/section-1.webp"
              alt="Detail knih a odborných titulů vystavených v plzeňské prodejně"
              width="1600"
              height="1050"
              loading="lazy"
            />
            <figcaption>Výběr, ve kterém má každá police svůj důvod.</figcaption>
          </figure>

          <div className="shelves" aria-label="Nabídka knihkupectví">
            <article>
              <span className="shelf-label">Pro studium</span>
              <h3>Skripta ZČU a učebnice</h3>
              <p>Učebnicové centrum s tituly, které se mimo Plzeň shánějí jen obtížně.</p>
            </article>
            <article>
              <span className="shelf-label">Pro praxi</span>
              <h3>Odborná literatura</h3>
              <p>Lékařské, jazykové a další specializované knihy pro studium i každodenní práci.</p>
            </article>
            <article>
              <span className="shelf-label">Pro radost</span>
              <h3>Novinky a regionální knihy</h3>
              <p>Současná beletrie, dětské tituly i příběhy spojené s Plzní a západními Čechami.</p>
            </article>
            <article>
              <span className="shelf-label">Pro vyzvednutí</span>
              <h3>Objednávky z e-shopu</h3>
              <p>Knihy objednané online si pohodlně převezmete přímo na prodejně.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="visit" id="cesta" aria-labelledby="visit-title">
        <div className="visit__intro">
          <p className="eyebrow">Sedláčkova 31 · centrum Plzně</p>
          <h2 id="visit-title">Z tramvaje rovnou mezi regály.</h2>
          <p>
            Prodejnu najdete při cestě centrem, několik minut od Sadů Pětatřicátníků.
            Vchod je bezbariérový a osobní odběr funguje po celou otevírací dobu.
          </p>
        </div>

        <div className="visit__grid">
          <figure className="section-visual section-visual--visit">
            <img
              src="/section-2.webp"
              alt="Okolí knihkupectví Knihy Dobrovský v centru Plzně"
              width="1500"
              height="1100"
              loading="lazy"
            />
            <figcaption>Sedláčkova 31, 301 00 Plzeň</figcaption>
          </figure>

          <div className="route-card">
            <div className="route-row">
              <span className="route-mode">Tramvají</span>
              <p>Sady Pětatřicátníků: linky 1, 2 a 4. Hlavní pošta: linky 1 a 2.</p>
            </div>
            <div className="route-row">
              <span className="route-mode">Autobusem</span>
              <p>Sady Pětatřicátníků: linky 20, 27, 28, 34, 41 a 56.</p>
            </div>
            <div className="route-row">
              <span className="route-mode">Autem</span>
              <p>Zaparkovat můžete na Rychtářce nebo v Sadech Pětatřicátníků.</p>
            </div>

            <dl className="contact-list">
              <div>
                <dt>Prodejna a výdej</dt>
                <dd>Po–Pá 9:00–18:00<br />So–Ne zavřeno</dd>
              </div>
              <div>
                <dt>Rychlá rada</dt>
                <dd>
                  <a href="tel:+420542220320">542 220 320</a><br />
                  <a href="mailto:poradime@knihydobrovsky.cz">poradime@knihydobrovsky.cz</a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}

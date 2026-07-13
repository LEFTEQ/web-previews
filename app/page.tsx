export default function HomePage() {
  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero__image"
          src="/hero.webp"
          alt="Hokejisté HC Olomouc na ledě před domácími fanoušky"
          width="1920"
          height="1280"
          fetchPriority="high"
        />
        <div className="hero__shade" aria-hidden="true" />

        <header className="topbar">
          <a className="wordmark" href="#nahore" aria-label="HC Olomouc – úvod">
            <span className="wordmark__hc">HC</span>
            <span className="wordmark__name">Mora Olomouc</span>
          </a>

          <nav className="nav" aria-label="Hlavní navigace">
            <a href="#zapasy">Zápasy</a>
            <a href="#z-klubu">Z klubu</a>
            <a className="nav__ticket" href="#vstupenky">Vstupenky</a>
          </nav>
        </header>

        <div className="hero__content" id="nahore">
          <p className="hero__eyebrow">První domácí zápas · 11. srpna · 18:00</p>
          <h1 id="hero-title">
            Plecharéna
            <span>znovu burácí.</span>
          </h1>
          <p className="hero__lead">
            Mora otevírá přípravu doma proti Vítkovicím. Buďte u prvního vhazování nové sezóny.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#vstupenky">Koupit vstupenky</a>
            <a className="text-link" href="#zapasy">Zobrazit zápas <span aria-hidden="true">↘</span></a>
          </div>
        </div>

        <div className="hero__match" aria-label="Nadcházející utkání">
          <span className="hero__match-label">Přípravné utkání</span>
          <div className="hero__match-teams">
            <strong>OLO</strong>
            <span aria-hidden="true">×</span>
            <strong>VÍT</strong>
          </div>
          <span className="hero__match-place">Zimní stadion Olomouc</span>
        </div>

        <p className="hero__rail" aria-hidden="true">HANÁ · HOKEJ · MORA</p>
      </section>

      <section className="games section" id="zapasy" aria-labelledby="games-title">
        <div className="section__intro">
          <p className="section__kicker">Na ledě</p>
          <h2 id="games-title">Další večer patří Hané.</h2>
          <p>
            Příprava na extraligovou sezonu 2026/2027 začíná doma. Žádné hledání v tabulkách — nejbližší zápas i vstupenky máte rovnou po ruce.
          </p>
        </div>

        <div className="games__layout">
          <div className="games__visual">
            <img
              src="/section-1.webp"
              alt="Detail hokejisty HC Olomouc během utkání"
              width="1200"
              height="900"
              loading="lazy"
            />
            <span className="games__visual-note">Domácí led / Plecharéna</span>
          </div>

          <article className="ticket" id="vstupenky">
            <div className="ticket__topline">
              <span>Út 11. 8. 2026</span>
              <span>18:00</span>
            </div>
            <p className="ticket__competition">Přípravné utkání A-týmu</p>
            <div className="ticket__team">
              <span className="team-mark">OLO</span>
              <div>
                <strong>HC Olomouc</strong>
                <small>domácí</small>
              </div>
            </div>
            <div className="ticket__versus" aria-label="proti">proti</div>
            <div className="ticket__team">
              <span className="team-mark team-mark--away">VÍT</span>
              <div>
                <strong>HC Vítkovice Ridera</strong>
                <small>hosté</small>
              </div>
            </div>
            <div className="ticket__bottom">
              <p><strong>Zimní stadion Olomouc</strong><br />Hynaisova, Olomouc</p>
              <a className="button button--dark" href="#vstupenky">Vybrat místa</a>
            </div>
          </article>
        </div>

        <div className="results" aria-label="Poslední výsledky HC Olomouc">
          <article>
            <p>12. 3. · předkolo play-off</p>
            <div><strong>OLO</strong><span>1:2p</span><strong>TŘI</strong></div>
          </article>
          <article>
            <p>6. 3. · 52. kolo</p>
            <div><strong>KOM</strong><span>5:4</span><strong>OLO</strong></div>
          </article>
          <article className="results__win">
            <p>4. 3. · 51. kolo</p>
            <div><strong>OLO</strong><span>3:2</span><strong>ČEB</strong></div>
          </article>
        </div>
      </section>

      <section className="club section" id="z-klubu" aria-labelledby="club-title">
        <div className="club__image-wrap">
          <img
            src="/section-2.webp"
            alt="Hráči HC Olomouc společně před zaplněnou tribunou"
            width="1200"
            height="1000"
            loading="lazy"
          />
          <blockquote>
            <p>„Chceme fanouškům ukázat, co v tomhle týmu je.“</p>
            <cite>Michal Hrádek · staronová posila Mory</cite>
          </blockquote>
        </div>

        <div className="club__content">
          <p className="section__kicker">Z kabiny a z Hané</p>
          <h2 id="club-title">Klub, který je v Olomouci doma.</h2>
          <p className="club__lead">
            Mora není jen devadesát metrů ledu. Je to mládež od přípravky po juniory, plná plecharéna i pomoc městu, když je potřeba.
          </p>

          <div className="stories">
            <article>
              <time dateTime="2026-06-25">25. 6. 2026</time>
              <div>
                <p className="story-type">Rozhovor</p>
                <h3>Michal Hrádek se vrací: „Věřím, že můžeme dojít daleko.“</h3>
                <a href="#z-klubu">Přečíst rozhovor <span aria-hidden="true">→</span></a>
              </div>
            </article>
            <article>
              <time dateTime="2026-06-20">20. 6. 2026</time>
              <div>
                <p className="story-type">A-tým</p>
                <h3>Daniel Herčík chce bavit Hanou mladým a bruslivým hokejem.</h3>
                <a href="#z-klubu">Poznat novou posilu <span aria-hidden="true">→</span></a>
              </div>
            </article>
            <article>
              <time dateTime="2026-06-18">18. 6. 2026</time>
              <div>
                <p className="story-type">Olomouc</p>
                <h3>Kohouti znovu darovali krev ve Fakultní nemocnici Olomouc.</h3>
                <a href="#z-klubu">Jak klub pomáhá <span aria-hidden="true">→</span></a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function Page() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#uvod" aria-label="Jóga v denním životě Praha – úvod">
          <span className="wordmark-symbol" aria-hidden="true">J</span>
          <span>Jóga v denním životě<small>Praha</small></span>
        </a>

        <nav className="site-nav" aria-label="Hlavní navigace">
          <a href="#kurzy">Kurzy</a>
          <a href="#o-nas">O nás</a>
          <a className="nav-call" href="tel:+420728346069">Zavolat</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="uvod" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Jógacentrum Blanická · Praha 2</p>
            <h1 id="hero-title">
              <span>Dech vede.</span>
              <span>Tělo následuje.</span>
            </h1>
            <p className="hero-intro">
              Tradiční systém jógy pro zdravá záda, klidnější mysl a pohyb, který respektuje vaše tempo. Začít můžete i bez předchozí zkušenosti.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#kurzy">Vybrat podzimní kurz</a>
              <a className="button button-secondary" href="mailto:praha@joga.cz">Napsat do recepce</a>
            </div>
            <p className="trial-note"><span aria-hidden="true">●</span> První zkušební lekce je pro nové cvičící zdarma.</p>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrap">
              <img
                src="/hero.webp"
                alt="Cvičení jógy v klidném pražském jógacentru"
                width="1200"
                height="1500"
                fetchPriority="high"
              />
            </div>
            <div className="breath-orbit" aria-hidden="true">
              <span className="breath-core">nádech<br />výdech</span>
            </div>
            <aside className="summer-card" aria-label="Aktuální letní kurzy">
              <p>Léto 2026 · Blanická</p>
              <strong>Každé úterý</strong>
              <span>10.00–11.30 a 17.30–19.00</span>
              <span>14. 7.–11. 8. · bez přihlášení</span>
            </aside>
          </div>
        </section>

        <section className="courses-section" id="kurzy" aria-labelledby="courses-title">
          <div className="section-heading">
            <p className="eyebrow">Kurzy v Praze</p>
            <h2 id="courses-title">Najděte si praxi, která odpovídá právě vám.</h2>
            <p>Od prvního protažení po navazující díly systému. Cvičitel vám pomůže zvolit úroveň, ve které se budete cítit jistě.</p>
          </div>

          <div className="courses-layout">
            <figure className="section-image course-image">
              <img
                src="/section-1.webp"
                alt="Lektorka vede soustředěnou lekci jógy v Praze"
                width="1200"
                height="900"
                loading="lazy"
                decoding="async"
              />
              <figcaption>Pravidelná praxe, srozumitelné vedení a prostor bez soutěžení.</figcaption>
            </figure>

            <div className="course-list">
              <article className="course-item">
                <div className="course-marker" aria-hidden="true">ZA</div>
                <div>
                  <h3>Začínám s jógou</h3>
                  <p>Relaxace, dech a základní ásany v bezpečném tempu. Předchozí zkušenost nepotřebujete.</p>
                </div>
                <span className="course-fit">Pro nové cvičící</span>
              </article>

              <article className="course-item">
                <div className="course-marker" aria-hidden="true">ZÁ</div>
                <div>
                  <h3>Jóga pro zdravá záda</h3>
                  <p>Protažení, posílení a vyrovnání svalových dysbalancí s ohledem na věk i možnosti těla.</p>
                </div>
                <span className="course-fit">Jemná a cílená</span>
              </article>

              <article className="course-item">
                <div className="course-marker" aria-hidden="true">PO</div>
                <div>
                  <h3>Pokračuji v systému</h3>
                  <p>Navazující díly pro ty, kdo už znají základní sestavy a chtějí svou praxi rozvíjet.</p>
                </div>
                <span className="course-fit">Mírně pokročilí</span>
              </article>

              <div className="summer-entry">
                <div>
                  <p className="eyebrow">Letní vstup bez rezervace</p>
                  <strong>300 Kč</strong>
                  <span>250 Kč pro slevové skupiny</span>
                </div>
                <p>Permanentka na čtyři lekce stojí 1 000 Kč, pro slevové skupiny 850 Kč. Je přenosná na více osob.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-section" id="o-nas" aria-labelledby="trust-title">
          <div className="trust-copy">
            <p className="eyebrow">Jóga v denním životě</p>
            <h2 id="trust-title">Nejde o výkon. Jde o praxi, která se vejde do života.</h2>
            <p className="trust-lead">
              Lekce propojují tělesná cvičení, vědomý dech, relaxaci a meditaci. Jednotlivé díly na sebe navazují, takže víte, proč daný pohyb děláte a kam můžete pokračovat.
            </p>

            <dl className="trust-facts">
              <div>
                <dt>Vedení</dt>
                <dd>Zkušení cvičitelé s dlouholetou praxí, včetně kurzů pro začátečníky a zdravá záda.</dd>
              </div>
              <div>
                <dt>Tempo</dt>
                <dd>Postupný osmidílný systém, který respektuje věk, kondici i aktuální možnosti.</dd>
              </div>
              <div>
                <dt>Blízko</dt>
                <dd>Jógacentrum Blanická 17 na Praze 2 a další kurzy napříč Prahou i online.</dd>
              </div>
            </dl>

            <address className="contact-strip">
              <span>Recepce Blanická</span>
              <a href="tel:+420728346069">728 346 069</a>
              <a href="mailto:praha@joga.cz">praha@joga.cz</a>
            </address>
          </div>

          <figure className="section-image trust-image">
            <img
              src="/section-2.webp"
              alt="Klidná společná praxe jógy v centru na Blanické"
              width="1200"
              height="1500"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <strong>Blanická 17</strong>
              <span>Praha 2 · pár minut od náměstí Míru</span>
            </figcaption>
          </figure>
        </section>
      </main>
    </>
  );
}

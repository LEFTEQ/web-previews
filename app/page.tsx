export default function Page() {
  return (
    <main className="as">
      {/* ===== HERO ===== */}
      <header className="as-hero">
        <div className="as-hero__media" aria-hidden="true">
          <img src="/hero.webp" alt="" />
          <div className="as-hero__shade" />
        </div>

        <div className="as-hero__inner">
          <div className="as-topbar">
            <a className="as-wordmark" href="#" aria-label="Autoškola Suchánek — úvod">
              <span className="as-wordmark__badge" aria-hidden="true">
                <svg viewBox="0 0 48 48" width="40" height="40" role="img" aria-hidden="true">
                  <rect x="2" y="2" width="44" height="44" rx="6" fill="#0B57D0" />
                  <rect x="5" y="5" width="38" height="38" rx="4" fill="none" stroke="#fff" strokeWidth="2" />
                  <text x="24" y="33" textAnchor="middle" fontFamily="Archivo Black, Arial Black, sans-serif" fontSize="24" fill="#fff">S</text>
                </svg>
              </span>
              <span className="as-wordmark__text">
                AUTOŠKOLA<strong>SUCHÁNEK</strong>
                <em>Ostrava · od roku 1991</em>
              </span>
            </a>
            <a className="as-topbar__phone" href="tel:+420603123456">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z"/></svg>
              603 123 456
            </a>
          </div>

          <div className="as-hero__content">
            <p className="as-hero__eyebrow">Hasičská 1003/49, Ostrava-Hrabůvka</p>
            <h1 className="as-hero__title">
              První jízdu si pamatujete <span className="as-hero__mark">celý život.</span>
            </h1>
            <p className="as-hero__lead">
              U nás ji zvládnete v klidu — učíme řídit v ostravském provozu už přes třicet let.
              Skupiny B, A2, A, C i CE, s instruktory, kteří vás nepustí ke zkoušce nepřipravené.
            </p>
            <div className="as-hero__actions">
              <a className="as-btn as-btn--primary" href="tel:+420603123456">Zavolat a přihlásit se</a>
              <a className="as-btn as-btn--ghost" href="mailto:info@autoskolasuchanek.cz">Napsat e-mail</a>
            </div>

            {/* Signature: řadicí schéma H jako navigace kurzů */}
            <nav className="as-gearbox" aria-label="Skupiny řidičských oprávnění">
              <p className="as-gearbox__label">Zařaďte si svoji skupinu</p>
              <div className="as-gearbox__gate" role="list">
                <a role="listitem" className="as-gear as-gear--1" href="#kurzy"><b>B</b><i>osobní</i></a>
                <a role="listitem" className="as-gear as-gear--2" href="#kurzy"><b>A2</b><i>motorka</i></a>
                <a role="listitem" className="as-gear as-gear--3" href="#kurzy"><b>A</b><i>motorka</i></a>
                <a role="listitem" className="as-gear as-gear--4" href="#kurzy"><b>C</b><i>nákladní</i></a>
                <a role="listitem" className="as-gear as-gear--5" href="#kurzy"><b>CE</b><i>souprava</i></a>
                <a role="listitem" className="as-gear as-gear--r" href="#skoleni"><b>Š</b><i>školení</i></a>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* ===== KURZY ===== */}
      <section className="as-section" id="kurzy">
        <div className="as-section__head">
          <p className="as-eyebrow">Výuka a výcvik</p>
          <h2>Od první hodiny v učebně po zkoušku na magistrátu</h2>
          <p className="as-section__intro">
            Učebnu máme v hlavní budově Vítkovické střední průmyslové školy v Hrabůvce, boční vchod.
            Jezdí se po Ostravě — po trasách, kde se zkouší doopravdy.
          </p>
        </div>

        <div className="as-courses">
          <article className="as-course as-course--featured">
            <div className="as-course__tag">B</div>
            <h3>Řidičák na osobní auto</h3>
            <p>
              Nejžádanější kurz. Teorie v učebně v Hrabůvce, 28 jízd po ostravských křižovatkách,
              kruhových objezdech a Místecké. Termín jízd si domlouváte přímo s instruktorem —
              přizpůsobíme se škole i směnám.
            </p>
            <p className="as-course__meta">Od 17 let (s podpisem rodiče od 15,5 při zahájení) · zkouška v Ostravě</p>
          </article>

          <article className="as-course">
            <div className="as-course__tag">A2 / A</div>
            <h3>Motorka</h3>
            <p>
              Cvičná plocha nejdřív, provoz až když sedí rozjezdy a osmičky. Výcvik na strojích
              odpovídajících zkušebním limitům — na zkoušku jedete na tom, na čem jste se učili.
            </p>
            <p className="as-course__meta">A2 od 18 let · A od 24 let (nebo rozšíření z A2)</p>
          </article>

          <article className="as-course">
            <div className="as-course__tag">C / CE</div>
            <h3>Nákladní auto a souprava</h3>
            <p>
              Rozšíření z B na nákladní vozidlo nad 3,5 t a dále na soupravu s přívěsem.
              Couvání s návěsem vás naučíme dřív, než ho po vás bude chtít komisař.
            </p>
            <p className="as-course__meta">C od 21 let · CE jako rozšíření skupiny C</p>
          </article>

          <article className="as-course">
            <div className="as-course__tag">KJ</div>
            <h3>Kondiční jízdy</h3>
            <p>
              Řidičák máte, ale léta jste neseděli za volantem? Jezdíme vaším tempem — parkování,
              dálnice, noční jízda. Bez zkoušky, bez stresu, klidně jen pár hodin.
            </p>
            <p className="as-course__meta">Pro držitele ŘP skupiny B · termíny dle dohody</p>
          </article>
        </div>
      </section>

      {/* ===== ŠKOLENÍ + DŮVĚRA ===== */}
      <section className="as-section as-section--dark" id="skoleni">
        <div className="as-trust">
          <div className="as-trust__media">
            <img
              src="/section-2.webp"
              alt="Výcvikové vozidlo Autoškoly Suchánek v ostravském provozu"
            />
            <p className="as-trust__caption">Cvičné vozy udržujeme v kondici — jezdíte tím, čím se zkouší.</p>
          </div>

          <div className="as-trust__body">
            <p className="as-eyebrow as-eyebrow--light">Akreditované školicí středisko</p>
            <h2>Školení pro firmy a profesionální řidiče</h2>
            <p>
              Nejsme jen autoškola pro začátečníky. Jako akreditované středisko školíme řidiče
              nákladních vozidel nad 3,5 t s profesním průkazem — pravidelná roční školení
              i vstupní kurzy. Firmám zajistíme školení řidičů referentských vozidel do 3,5 t,
              klidně přímo u vás v provozu.
            </p>

            <dl className="as-facts">
              <div className="as-fact">
                <dt>1991</dt>
                <dd>Učíme řídit od roku 1991 — autoškolu založil Václav Suchánek, dnes ji vede syn Lukáš.</dd>
              </div>
              <div className="as-fact">
                <dt>Tisíce</dt>
                <dd>absolventů, kteří u nás dokončili výuku a výcvik a dnes jezdí po celém kraji.</dd>
              </div>
              <div className="as-fact">
                <dt>Hrabůvka</dt>
                <dd>Najdete nás v hlavní budově Vítkovické SPŠ, Hasičská 1003/49 — boční vchod, přes cestu od původní provozovny.</dd>
              </div>
            </dl>

            <blockquote className="as-quote">
              <p>
                „Instruktor se mnou trénoval přesně ty křižovatky, kterých jsem se bála.
                Zkoušku jsem dala napoprvé.“
              </p>
              <footer>— Kateřina, absolventka skupiny B, Ostrava-Jih</footer>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}

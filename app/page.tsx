export default function Page() {
  return (
    <main className="jb">
      <a className="skip-link" href="#obsah">Přeskočit na obsah</a>

      <header className="jb-hero">
        <div className="jb-hero__frame">
          <p className="jb-hero__eyebrow">Liberec &amp; Praha · praxe od 2005</p>
          <div className="jb-wordmark" aria-hidden="true">
            <span className="jb-wordmark__m">JB</span>
            <span className="jb-wordmark__line" />
          </div>
          <h1 className="jb-hero__title">
            Mgr. Jindra <em>Bachmanová</em>
          </h1>
          <p className="jb-hero__role">
            Psychoterapie &amp; hypnoterapie &middot; systemické koučování &middot; psychologická příprava sportovců
          </p>
          <p className="jb-hero__lede">
            Už 20 let pomáhám lidem projít náročným obdobím — beze studu, beze spěchu
            a s jasným plánem, kam dál. Terapie zaměřená na řešení nemusí trvat měsíce.
          </p>
          <div className="jb-hero__cta">
            <a className="jb-btn jb-btn--primary" href="tel:+420774283313">
              Zavolat +420 774 283 313
            </a>
            <span className="jb-hero__note">Po–Pá &middot; první konzultace osobně nebo online</span>
          </div>
        </div>
        <div className="jb-hero__art">
          <img
            src="/hero.webp"
            alt="Mgr. Jindra Bachmanová, psychoterapeutka, v konzultační místnosti v Liberci"
            className="jb-hero__img"
          />
          <span className="jb-hero__caption">Konzultace &middot; Frýdlantská 1351/15, Liberec</span>
        </div>
      </header>

      <section id="obsah" className="jb-services" aria-labelledby="jb-services-h">
        <div className="jb-section__head">
          <span className="jb-index">Ordinace 01 / 03</span>
          <h2 id="jb-services-h">Čím se v terapii zabýváme</h2>
          <p className="jb-section__intro">
            Tři okruhy péče, tři různé cesty — vždy podle toho, co právě řešíte.
            Nikam vás netlačím do škatulky, společně najdeme, co sedí vám.
          </p>
        </div>

        <div className="jb-services__grid">
          <article className="jb-card">
            <span className="jb-card__num">01</span>
            <h3>Psychoterapie a hypnoterapie</h3>
            <p>
              Odborná pomoc při partnerských a rodinných krizích, depresi, úzkostech,
              stresu i závislostech. Pracuji na řešení — ne na donekonečna otevírané
              minulosti. Ordinuji v Liberci i v Praze.
            </p>
            <a className="jb-card__link" href="tel:+420774283313">Chci se objednat →</a>
          </article>

          <article className="jb-card">
            <span className="jb-card__num">02</span>
            <h3>Systemické koučování</h3>
            <p>
              Náročná, koncentrovaná spolupráce pro lidi ve vysoké pracovní zátěži —
              vedoucí pracovníky, majitele firem i vrcholové sportovce. Řešíme situaci
              v celém jejím kontextu, ne jen jeden problém.
            </p>
            <a className="jb-card__link" href="tel:+420774283313">Chci se objednat →</a>
          </article>

          <article className="jb-card">
            <span className="jb-card__num">03</span>
            <h3>Mentální příprava sportovců</h3>
            <p>
              Psychologická příprava zlepšuje výkon na hřišti i mimo něj. Sportovci se
              učí rozumět sami sobě, zvládat tlak a lépe komunikovat s okolím.
            </p>
            <a className="jb-card__link" href="tel:+420774283313">Chci se objednat →</a>
          </article>
        </div>

        <img
          src="/section-1.webp"
          alt="Detail konzultační místnosti — křesla k terapii a klidné prostředí ordinace"
          className="jb-services__img"
        />
      </section>

      <section className="jb-about" aria-labelledby="jb-about-h">
        <div className="jb-about__media">
          <img
            src="/section-2.webp"
            alt="Mgr. Jindra Bachmanová při rozhovoru s klientem během terapeutického sezení"
            className="jb-about__img"
          />
        </div>
        <div className="jb-about__text">
          <span className="jb-index">Ordinace 02 / 03</span>
          <h2 id="jb-about-h">O mně a jak spolu pracujeme</h2>
          <p>
            Jmenuji se Jindra Bachmanová a psychoterapii se věnuji přes dvacet let.
            Zaměřuji se na terapii orientovanou na řešení — hledáme, co funguje,
            a stavíme na tom, místo abychom se vraceli k tomu, co nefunguje.
          </p>
          <p>
            Ke klientům přistupuji věcně a bez patosu. Nesoudím, neškatulkuji,
            nedávám univerzální recepty. První setkání je vždy o tom, abychom si
            ujasnili, jestli si spolu rozumíme a co konkrétně chcete změnit.
          </p>

          <dl className="jb-facts">
            <div className="jb-facts__item">
              <dt>Praxe</dt>
              <dd>20 let v oboru psychoterapie a koučování</dd>
            </div>
            <div className="jb-facts__item">
              <dt>Pracoviště</dt>
              <dd>Frýdlantská 1351/15, Liberec I-Staré Město</dd>
            </div>
            <div className="jb-facts__item">
              <dt>Druhé pracoviště</dt>
              <dd>Jeseniova 1151/55, Praha 3-Žižkov</dd>
            </div>
            <div className="jb-facts__item">
              <dt>Objednání</dt>
              <dd>Telefonicky, osobně i online konzultace</dd>
            </div>
          </dl>

          <a className="jb-btn jb-btn--ghost" href="tel:+420774283313">
            Domluvit první setkání
          </a>
        </div>
      </section>
    </main>
  );
}

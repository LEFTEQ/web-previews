export default function Page() {
  return (
    <main id="top">
      <header className="nav">
        <div className="nav__in">
          <a className="wm" href="#top" aria-label="Baštova zmrzlinárna – domů">
            <span className="wm__mark" aria-hidden="true" />
            <span className="wm__txt">
              <span className="wm__a">Baštova</span>
              <span className="wm__b">zmrzlinárna · Nusle</span>
            </span>
          </a>
          <nav className="nav__act" aria-label="Rychlé akce">
            <a className="btn btn--ghost" href="tel:+420739041133">Zavolat</a>
            <a className="btn btn--berry" href="#nabidka">Objednat online</a>
          </nav>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-h">
        <div className="hero__in">
          <div className="hero__copy">
            <p className="eyebrow reveal">Cukrárna &amp; zmrzlinárna · Praha 4 – Nusle · od roku 2016</p>
            <h1 className="hero__h reveal d1" id="hero-h">
              Domácí <em>nanuky</em>, na které jinde v&nbsp;Praze nenarazíte.
            </h1>
            <p className="hero__lead reveal d2">
              Zmrzlina, dorty a sladké i slané dobroty z lokálních surovin. Vychutnejte
              si je u nás na prosklené terase — nebo si je objednejte rovnou na svoji
              oslavu.
            </p>
            <div className="hero__cta reveal d3">
              <a className="btn btn--berry btn--lg" href="#nabidka">Objednat online</a>
              <a className="btn btn--ghost btn--lg" href="tel:+420739041133">
                Zavolat 739 041 133
              </a>
            </div>
            <ul className="hero__facts reveal d4">
              <li>Bezlepkové · bezlaktózové · vegan</li>
              <li>Suroviny z farmy Krhanice</li>
            </ul>
          </div>

          <figure className="hero__fig reveal-pop d2">
            <div className="pop">
              <div className="pop__img">
                <img
                  src="/hero.webp"
                  alt="Domácí ovocné nanuky a zmrzlinové dezerty z Baštovy zmrzlinárny"
                />
              </div>
            </div>
            <figcaption>Naše specialita — poctivý domácí nanuk.</figcaption>
          </figure>
        </div>
      </section>

      <section className="menu" id="nabidka" aria-labelledby="menu-h">
        <div className="wrap">
          <p className="eyebrow eyebrow--dark">Co u nás ochutnáte</p>
          <h2 className="h2" id="menu-h">Sladké i slané, poctivě a doma</h2>
          <p className="sec-lead">
            Kromě široké nabídky zákusků u nás dostanete sladké i slané pečivo,
            sendviče a každé ráno kontinentální snídani — ke kvalitní kávě, čaji nebo
            skleničce vína.
          </p>

          <div className="cards">
            <article className="card">
              <span className="tag tag--berry">Specialita</span>
              <h3>Domácí nanuky</h3>
              <p>
                Ovocné i smetanové nanuky, které vyrábíme u nás. Přesně takové jinde
                v Praze neseženete.
              </p>
              <a className="link" href="#nabidka">Prohlédnout aktuální nabídku</a>
            </article>
            <article className="card">
              <span className="tag tag--pist">Z chladicího pultu</span>
              <h3>Zmrzlinové dezerty</h3>
              <p>
                Poháry a zmrzlina, ke které se podle hostů „Angelato ani nehrabe“.
                Ideální na terasu za sluníčka.
              </p>
              <a className="link" href="#nabidka">Prohlédnout aktuální nabídku</a>
            </article>
            <article className="card">
              <span className="tag tag--stick">Na objednávku</span>
              <h3>Dorty &amp; zákusky</h3>
              <p>
                Originální zákusky i dorty na oslavu, catering nebo jen tak pro
                radost. Vyberete, my upečeme.
              </p>
              <a className="link" href="#nabidka">Prohlédnout aktuální nabídku</a>
            </article>
          </div>

          <div className="feats">
            <h3 className="feats__h">Proč k nám chodí celé Nusle</h3>
            <ul>
              <li>Nanuky, na které jinde v Praze nenarazíte</li>
              <li>Lokální suroviny, spolupráce s farmou Krhanice</li>
              <li>Bezlepkové, bezlaktózové i vegan dobroty</li>
              <li>Vybrané dezerty si objednáte online na svoji akci</li>
            </ul>
          </div>

          <figure className="wide">
            <img
              src="/section-1.webp"
              alt="Výběr dezertů a nanuků připravených v Baštově zmrzlinárně"
            />
          </figure>
        </div>
      </section>

      <section className="about" aria-labelledby="about-h">
        <div className="wrap about__grid">
          <div className="about__copy">
            <p className="eyebrow eyebrow--dark">Kdo jsme</p>
            <h2 className="h2" id="about-h">
              Od 7. července 2016 na nám. Bratří Synků
            </h2>
            <p>
              Baštova zmrzlinárna se od svého otevření stala synonymem pro originální
              zákusky, výbornou zmrzlinu a hlavně domácí nanuky. Dezerty si vychutnáte
              přímo u nás nebo na prosklené terase — a nově vám vybrané dobroty
              dovezeme i na vaši akci.
            </p>
            <dl className="info">
              <div>
                <dt>Otevřeno</dt>
                <dd>Po–Pá 7:30–19:00<br />So–Ne 10:00–19:00</dd>
              </div>
              <div>
                <dt>Kde nás najdete</dt>
                <dd>nám. Bratří Synků 612/11<br />140 00 Praha 4 – Nusle</dd>
              </div>
              <div>
                <dt>Telefon</dt>
                <dd>
                  <a href="tel:+420739041133">739 041 133</a>
                </dd>
              </div>
            </dl>
          </div>
          <figure className="about__fig">
            <img
              src="/section-2.webp"
              alt="Posezení v Baštově zmrzlinárně s prosklenou terasou"
            />
          </figure>
        </div>

        <div className="wrap">
          <h3 className="rev__h">Jak se u nás líbilo hostům</h3>
          <div className="revs">
            <blockquote className="rev">
              <p>
                Vynikající zmrzlina. Kam se hrabe Angelato. Dorty zkusím brzy taky,
                vypadají skvěle… díky a přijdu zas!
              </p>
              <cite>Daniel Váša</cite>
            </blockquote>
            <blockquote className="rev">
              <p>
                Moc prima místo na vše hezké a příjemné — schůzka s kamarádkou i rande.
                Plusové body personálu a dobrotám, které potěší oči i chuťové pohárky.
              </p>
              <cite>Lada Slancová</cite>
            </blockquote>
            <blockquote className="rev">
              <p>
                Nejlahodnější zmrzlina široko daleko, můžu jedině doporučit — navíc
                s příjemným a ochotným servisem.
              </p>
              <cite>Kateřina Kubanová</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}

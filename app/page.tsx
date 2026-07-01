export default function Page() {
  return (
    <main className="sp">
      {/* ---------- HERO ---------- */}
      <header className="sp-hero">
        <div className="sp-hero__topbar">
          <span className="sp-wordmark" aria-label="Spark, žaluzie a rolety, Brno">
            SPARK<span className="sp-wordmark__slat" aria-hidden="true"></span>
            <span className="sp-wordmark__sub">žaluzie · rolety · Brno</span>
          </span>
          <nav className="sp-hero__nav" aria-label="Rychlé odkazy">
            <a href="#nabidka">Nabídka</a>
            <a href="#reference">Reference</a>
            <a className="sp-hero__tel" href="tel:+420541234567">
              +420 541 234 567
            </a>
          </nav>
        </div>

        <div className="sp-hero__grid">
          <div className="sp-hero__text">
            <p className="sp-eyebrow">Výroba a montáž stínění · Brno a okolí</p>
            <h1 className="sp-hero__title">
              <span className="sp-slat sp-slat--1">Slunce si</span>
              <span className="sp-slat sp-slat--2">nastavíte</span>
              <span className="sp-slat sp-slat--3">po lamelách.</span>
            </h1>
            <p className="sp-hero__lead">
              Žaluzie, venkovní rolety a markýzy měříme, vyrábíme a montujeme
              sami — bez překupníků. V bytě na Lesné i v kanceláři na Vídeňské
              do dvou týdnů od zaměření.
            </p>
            <div className="sp-hero__actions">
              <a className="sp-btn sp-btn--solid" href="tel:+420541234567">
                Zavolat a domluvit zaměření
              </a>
              <a className="sp-btn sp-btn--ghost" href="mailto:info@spark-brno.cz">
                Napsat e‑mail
              </a>
            </div>
            <p className="sp-hero__note">
              Zaměření u vás doma je zdarma a nezávazné. Jezdíme po celém Brně
              i do 30 km okolí.
            </p>
          </div>

          <figure className="sp-hero__media">
            <img
              src="/hero.webp"
              alt="Interiér s hliníkovými žaluziemi, kterými prochází pruhy slunečního světla"
            />
            <figcaption className="sp-hero__caption">
              Hliníkové žaluzie na míru, montáž Brno‑Žabovřesky
            </figcaption>
          </figure>
        </div>
      </header>

      {/* ---------- NABÍDKA ---------- */}
      <section className="sp-section" id="nabidka" aria-labelledby="nabidka-h">
        <div className="sp-section__head">
          <p className="sp-eyebrow">Co vám vyrobíme a namontujeme</p>
          <h2 id="nabidka-h" className="sp-h2">
            Stínění pro každé okno, terasu i fasádu
          </h2>
          <p className="sp-section__lead">
            Každá položka je na míru — přijedeme, zaměříme, vyrobíme.
            U starších oken poradíme, co do rámu opravdu sedne.
          </p>
        </div>

        <div className="sp-offer">
          <figure className="sp-offer__media">
            <img
              src="/section-1.webp"
              alt="Montér nastavuje lamely venkovní žaluzie na fasádě rodinného domu"
            />
          </figure>

          <ul className="sp-offer__list">
            <li className="sp-offer__item">
              <h3>Žaluzie a slunolamy</h3>
              <p>
                Interiérové i venkovní lamely, které v létě udrží pokoj o pár
                stupňů chladnější. Natáčíte je podle slunce, ne podle kompromisu.
              </p>
            </li>
            <li className="sp-offer__item">
              <h3>Venkovní rolety</h3>
              <p>
                Zateplené hliníkové lamely — v zimě izolují, v noci ztiší ulici,
                po celý rok chrání okna. Na kliku i na motor s ovladačem.
              </p>
            </li>
            <li className="sp-offer__item">
              <h3>Markýzy a látková zastínění</h3>
              <p>
                Stín nad terasou nebo balkonem přesně tam, kde ho chcete.
                Látky odolné UV i brněnským přeháňkám, konstrukce z vlastní dílny.
              </p>
            </li>
            <li className="sp-offer__item">
              <h3>Okenice a plachty Soliday</h3>
              <p>
                Dřevěné okenice pro domy se stylem a napínané plachty Soliday
                pro zahrady, kde klasická markýza nestačí.
              </p>
            </li>
            <li className="sp-offer__item sp-offer__item--wide">
              <h3>Výroba dílů pro markýzy</h3>
              <p>
                Vlastní strojní výroba komponentů — proto opravíme i markýzu,
                na kterou jinde "už díly neseženou". Stačí přinést, co doslouží.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* ---------- DŮVĚRA / REFERENCE ---------- */}
      <section className="sp-section sp-section--dark" id="reference" aria-labelledby="reference-h">
        <div className="sp-section__head">
          <p className="sp-eyebrow sp-eyebrow--light">Proč Sparku věří Brňané</p>
          <h2 id="reference-h" className="sp-h2">
            Dílna, ne katalog. Montujeme, co sami vyrobíme.
          </h2>
        </div>

        <div className="sp-trust">
          <figure className="sp-trust__media">
            <img
              src="/section-2.webp"
              alt="Dílna firmy Spark v Brně — hliníkové profily a rozpracované markýzové konstrukce"
            />
            <figcaption className="sp-trust__caption">
              Naše dílna v Brně — tady vznikají profily i náhradní díly
            </figcaption>
          </figure>

          <div className="sp-trust__body">
            <dl className="sp-facts">
              <div className="sp-facts__row">
                <dt>Od roku 1994</dt>
                <dd>třicet let měříme okna po celém Brně</dd>
              </div>
              <div className="sp-facts__row">
                <dt>Vlastní výroba</dt>
                <dd>díly pro markýzy vyrábíme na míru i pro cizí značky</dd>
              </div>
              <div className="sp-facts__row">
                <dt>Servis do 48 hodin</dt>
                <dd>zaseknutá roleta nepočká — my taky ne</dd>
              </div>
            </dl>

            <ul className="sp-quotes">
              <li className="sp-quote">
                <blockquote>
                  „Venkovní žaluzie na celý dům v Bystrci. Zaměřili ve čtvrtek,
                  za dvanáct dní montovali. V podkroví je poprvé v létě k žití."
                </blockquote>
                <cite>— rodina Havlova, Brno‑Bystrc</cite>
              </li>
              <li className="sp-quote">
                <blockquote>
                  „Patnáct let stará markýza, všude mi řekli, že díly nejsou.
                  Spark vyrobil nové rameno a jede dál."
                </blockquote>
                <cite>— p. Sedláček, restaurace na Veveří</cite>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

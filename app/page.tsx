import React from "react";

export default function Page() {
  return (
    <main className="atelier">
      {/* ——— HERO: řez rámem ——— */}
      <header className="hero">
        <nav className="nav" aria-label="Hlavní navigace">
          <a className="wordmark" href="#uvod" aria-label="DAPA — paspartérský ateliér Dany Jodasové">
            <span className="wordmark__da">DA</span>
            <span className="wordmark__pa">PA</span>
            <span className="wordmark__note">paspartérský ateliér · Praha</span>
          </a>
          <ul className="nav__links">
            <li><a href="#r
amovani">Co adjustuji</a></li>
            <li><a href="#atelier">O ateliéru</a></li>
            <li><a className="nav__cta" href="#atelier">Domluvit schůzku</a></li>
          </ul>
        </nav>

        <div className="hero__grid">
          <div className="hero__text">
            <p className="eyebrow">Rámy &amp; pasparty · založeno 1991</p>
            <h1 className="hero__title">
              Mezi obrazem<br />
              a stěnou je<br />
              <span className="hero__accent">pár milimetrů,</span><br />
              na kterých záleží.
            </h1>
            <p className="hero__lede">
              Paspartu a rám nepokládám na obraz — stavím je kolem něj. Vyučená
              paspartérka a knihařka Dana Jodasová vám v pražském ateliéru ukáže
              varianty na vzorcích a poradí, který okraj a který rám vaší grafice sedne.
            </p>
            <div className="hero__actions">
              <a className="btn btn--solid" href="#atelier">Přinést obraz do ateliéru</a>
              <a className="btn btn--ghost" href="#ramovani">Prohlédnout možnosti</a>
            </div>
          </div>

          <figure className="hero__figure">
            <img
              src="/hero.webp"
              alt="Zarámovaný obraz s paspartou v ateliéru — detail zkoseného okraje pasparty a dřevěné lišty"
              className="hero__img"
              width={1200}
              height={1500}
            />
            <figcaption className="hero__cap">
              <span className="hero__cap-num">45°</span>
              <span>zkosený okraj pasparty — řez, který dělá hloubku</span>
            </figcaption>
          </figure>
        </div>
      </header>

      {/* ——— SEKCE 1: Co adjustuji ——— */}
      <section id="ramovani" className="work" aria-labelledby="work-h">
        <div className="section-head">
          <p className="eyebrow">Nabídka</p>
          <h2 id="work-h" className="section-title">Tři vrstvy, ze kterých se rám skládá</h2>
          <p className="section-sub">
            Každou zakázku skládám odspodu nahoru — od pasparty přes lištu až po
            hotový celek. Vybíráte na vzorcích, ne z katalogu.
          </p>
        </div>

        <ol className="layers">
          <li className="layer">
            <span className="layer__num">01</span>
            <h3 className="layer__title">Pasparty</h3>
            <p className="layer__body">
              Kartonový okraj, který obrazu dá vzduch a odsadí ho od skla. Vybíráme
              barvu, šířku i zkosení řezu — nebo jednodušší olep, když má rozpočet
              limit. Moje řemeslo od roku 1991.
            </p>
            <span className="layer__tag">papír · řez 45° · olep</span>
          </li>
          <li className="layer">
            <span className="layer__num">02</span>
            <h3 className="layer__title">Dřevěné rámy</h3>
            <p className="layer__body">
              Teplá lišta k olejům, akvarelům i rodinným fotkám. Od jemných profilů
              po výraznější rámy, které samy o sobě něco říkají. Vždy sladěné
              s paspartou i s tím, kam obraz pověsíte.
            </p>
            <span className="layer__tag">masiv · dýha · profil na míru</span>
          </li>
          <li className="layer">
            <span className="layer__num">03</span>
            <h3 className="layer__title">Kovové rámy</h3>
            <p className="layer__body">
              Tenká, přesná linka ke grafikám, plakátům a fotografii. Střídmý rám,
              který ustoupí obsahu a působí čistě i v současném interiéru.
            </p>
            <span className="layer__tag">hliník · matný · úzký profil</span>
          </li>
        </ol>

        <figure className="work__strip">
          <img
            src="/section-1.webp"
            alt="Vzorky lišt a paspart rozložené v ateliéru pro výběr adjustace"
            className="work__img"
            width={1400}
            height={800}
          />
          <figcaption className="work__cap">
            Vzorky si u mě rozložíme vedle vašeho obrazu — nad kombinací se
            rozhodujeme společně.
          </figcaption>
        </figure>
      </section>

      {/* ——— SEKCE 2: O ateliéru / důvěra ——— */}
      <section id="atelier" className="about" aria-labelledby="about-h">
        <div className="about__grid">
          <figure className="about__figure">
            <img
              src="/section-2.webp"
              alt="Dana Jodasová při práci v paspartérském ateliéru"
              className="about__img"
              width={1000}
              height={1200}
            />
          </figure>

          <div className="about__text">
            <p className="eyebrow">O ateliéru</p>
            <h2 id="about-h" className="section-title">
              Vyučená paspartérka, ne řetězec s pásovou linkou
            </h2>
            <p className="about__body">
              Jmenuji se <strong>Dana Jodasová</strong>. Narodila jsem se v Praze,
              vyučila se v oboru paspartérství a knihařství a maturovala na Střední
              polygrafické škole. V roce 1991 jsem založila ateliér DAPA.
            </p>
            <p className="about__body">
              Pracuji individuálně a tvořivě — ke každému zákazníkovi i ke každé
              zakázce. U výběru vám ukážu několik variant na vzorcích a poradím, jak
              adjustovat obrazy, grafiky, oleje, mapy, plakáty, fotografie, dětské
              kresby i gobelíny. Vaše představa je pro mě první — nabídnu
              esteticky působivé a výhodné řešení, aby se vám doma i v pracovně líbilo
              a rádi jste se ke mně vraceli.
            </p>

            <dl className="facts">
              <div className="fact">
                <dt>Od roku</dt>
                <dd>1991</dd>
              </div>
              <div className="fact">
                <dt>Řemeslo</dt>
                <dd>paspartérství &amp; knihařství</dd>
              </div>
              <div className="fact">
                <dt>Ateliér</dt>
                <dd>Praha</dd>
              </div>
            </dl>

            <blockquote className="pull">
              „Klientovi ukážu několik variant na vzorku — ať vidí, jak by obraz mohl
              vypadat, ještě než se pustím do řezu.“
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}

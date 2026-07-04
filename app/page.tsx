import React from "react";

export default function Page() {
  return (
    <main className="eg">
      {/* ===== HERO ===== */}
      <header className="eg-top">
        <a className="eg-mark" href="#" aria-label="Eurogastro Morava, domů">
          <span className="eg-mark__euro">euro</span>
          <span className="eg-mark__gastro">gastro</span>
          <span className="eg-mark__morava">Morava</span>
        </a>
        <nav className="eg-nav" aria-label="Hlavní">
          <a href="#stravovani">Co vaříme</a>
          <a href="#duvera">Kdo jsme</a>
          <a className="eg-nav__cta" href="tel:+420775677767">775 67 77 67</a>
        </nav>
      </header>

      <section className="eg-hero">
        <div className="eg-hero__media">
          <img
            src="/hero.webp"
            alt="Rozdávané teplé obědy v závodní jídelně Eurogastro Morava"
            className="eg-hero__img"
          />
        </div>

        <div className="eg-hero__panel">
          <p className="eg-eyebrow">Závodní stravování &middot; Olomouc a Morava</p>
          <h1 className="eg-hero__title">
            Denně teplý oběd,
            <br />
            na který se lidé <em>těší</em>.
          </h1>
          <p className="eg-hero__lead">
            Vaříme pro firmy, úřady i školy na Moravě. Čerstvé suroviny,
            výběr z několika jídel a objednávání přes iCanteen — bez front,
            bez papírů, bez stresu u výdejny.
          </p>

          <div className="eg-hero__actions">
            <a className="eg-btn" href="#stravovani">Nezávazně poptat stravování</a>
            <a className="eg-btn eg-btn--ghost" href="#jidelnicek">Ukázkový jídelníček</a>
          </div>

          {/* Dnešní jídelníček jako nejcharakterističtější artefakt oboru */}
          <div className="eg-menu" id="jidelnicek">
            <div className="eg-menu__head">
              <span>Dnes na výdejně</span>
              <span className="eg-menu__date">úterý</span>
            </div>
            <ol className="eg-menu__list">
              <li>
                <span className="eg-menu__no">1</span>
                <span className="eg-menu__name">Svíčková na smetaně, houskový knedlík</span>
                <span className="eg-menu__tag">klasika</span>
              </li>
              <li>
                <span className="eg-menu__no">2</span>
                <span className="eg-menu__name">Kuřecí kari s jasmínovou rýží</span>
                <span className="eg-menu__tag">lehké</span>
              </li>
              <li>
                <span className="eg-menu__no">3</span>
                <span className="eg-menu__name">Pečený květák s bramborem a bylinkami</span>
                <span className="eg-menu__tag">bez masa</span>
              </li>
              <li>
                <span className="eg-menu__no">P</span>
                <span className="eg-menu__name">Hovězí vývar s nudlemi &middot; salátový bar</span>
                <span className="eg-menu__tag">k obědu</span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* ===== SEKCE 1: CO VAŘÍME / SLUŽBY ===== */}
      <section className="eg-services" id="stravovani">
        <div className="eg-services__intro">
          <p className="eg-eyebrow eg-eyebrow--dark">Co pro vás zajistíme</p>
          <h2 className="eg-h2">Od jídelny přes catering až po automaty</h2>
          <p className="eg-services__lead">
            Provozujeme kompletní firemní stravování na klíč — postaráme se
            o provoz kuchyně i výdejny, dovezeme obědy tam, kde se nevaří,
            a připravíme raut, na který se nezapomíná.
          </p>
        </div>

        <div className="eg-grid">
          <article className="eg-card">
            <span className="eg-card__no">01</span>
            <h3>Závodní stravování</h3>
            <p>
              Provozujeme vaši jídelnu nebo výdejnu — každý den výběr z několika
              jídel, polévka a salátový bar. Strávníci si vybírají dopředu
              přes iCanteen a u výdeje jen přiloží kartu.
            </p>
          </article>

          <article className="eg-card">
            <span className="eg-card__no">02</span>
            <h3>Provoz kantýn</h3>
            <p>
              Kantýnu vybavíme, zásobíme a obsloužíme — od ranní kávy a svačin
              po teplý oběd. Sortiment ladíme podle toho, co si u vás lidé
              opravdu berou.
            </p>
          </article>

          <article className="eg-card eg-card--wide">
            <span className="eg-card__no">03</span>
            <h3>Catering a rauty</h3>
            <p>
              Firemní snídaně, konference, kolaudace i slavnostní raut. Máme
              zkušenost i s velkými akcemi — obsluhovali jsme třeba raut
              k inauguraci rektora Univerzity obrany.
            </p>
          </article>

          <article className="eg-card">
            <span className="eg-card__no">04</span>
            <h3>Nápojové automaty</h3>
            <p>
              Kávovary a automaty na pracoviště, kde se nevaří. Doplňování
              a servis řešíme my — vy jen zapnete kávu.
            </p>
          </article>

          <article className="eg-card">
            <span className="eg-card__no">05</span>
            <h3>Poradenství</h3>
            <p>
              Poradíme, jak stravování ve firmě nastavit — od skladby jídel
              a alergenů po příspěvky a nárok na daňové zvýhodnění.
            </p>
          </article>
        </div>
      </section>

      {/* ===== SEKCE 2: DŮVĚRA / O NÁS ===== */}
      <section className="eg-trust" id="duvera">
        <div className="eg-trust__media">
          <img
            src="/section-1.webp"
            alt="Kuchař Eurogastro Morava připravuje čerstvé jídlo v provozní kuchyni"
            className="eg-trust__img"
          />
        </div>

        <div className="eg-trust__body">
          <p className="eg-eyebrow eg-eyebrow--dark">Kdo pro vás vaří</p>
          <h2 className="eg-h2">Moravská kuchyně, kterou vedou lidé, ne řetězec</h2>
          <p className="eg-trust__lead">
            Jsme Eurogastro Morava z Olomouce. Vaříme z čerstvých surovin,
            držíme systém kritických bodů (HACCP) a chodíme na provozy osobně.
            Jídlo má být zdravé, chutné a hezké na talíři — na tom stavíme.
          </p>

          <ul className="eg-stats">
            <li>
              <strong>HACCP</strong>
              <span>Zavedený systém hygieny a kontroly kvality</span>
            </li>
            <li>
              <strong>iCanteen</strong>
              <span>Objednávání i výdej online, bez papírování</span>
            </li>
            <li>
              <strong>Morava</strong>
              <span>Provozy v Olomouci, Hranicích i Brně</span>
            </li>
          </ul>

          <figure className="eg-quote">
            <blockquote>
              „Nasloucháme tomu, co strávníci opravdu chtějí, a podle toho
              skládáme jídelníček. Kvalitní oběd je věc, kterou lidé ve firmě
              ocení každý den.“
            </blockquote>
            <figcaption>
              <span className="eg-quote__name">Mgr. Petra Librová</span>
              <span className="eg-quote__role">jednatelka společnosti</span>
            </figcaption>
          </figure>

          <div className="eg-trust__cards">
            <div className="eg-refimg">
              <img
                src="/section-2.webp"
                alt="Výdej obědů strávníkům v závodní jídelně na Moravě"
              />
            </div>
            <div className="eg-contact">
              <p className="eg-contact__label">Chcete cenovou nabídku na míru?</p>
              <p className="eg-contact__name">Bc. Zdeněk Horák — obchodní ředitel</p>
              <a className="eg-contact__tel" href="tel:+420775677767">
                +420 775 67 77 67
              </a>
              <p className="eg-contact__note">
                Ozveme se do druhého dne a domluvíme ochutnávku.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

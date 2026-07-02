export default function Page() {
  return (
    <main className="kam">
      {/* ===== HERO ===== */}
      <section className="hero" aria-label="Kamenictví VIVA Praha">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Kameník opracovává blok žuly dlátem v pražské dílně kamenictví VIVA"
            className="hero-img"
          />
          <div className="hero-scrim" aria-hidden="true" />
        </div>

        <div className="hero-inner">
          <header className="topbar">
            <a href="#" className="wordmark" aria-label="VIVA kamenictví, úvod">
              <span className="wordmark-viva">VIVA</span>
              <span className="wordmark-sub">kamenictví · Praha</span>
            </a>
            <nav className="topnav" aria-label="Hlavní navigace">
              <a href="#prace">Co děláme</a>
              <a href="#dilna">Dílna</a>
              <a href="tel:+420222000000" className="topnav-call">Zavolat</a>
            </nav>
          </header>

          <div className="hero-copy">
            <p className="hero-eyebrow">Žula · mramor · pískovec — Praha</p>
            <h1 className="hero-title">
              <span className="line line-1">Kámen přežije</span>
              <span className="line line-2">nás všechny.</span>
              <span className="line line-3">Proto ho sekáme pořádně.</span>
            </h1>
            <p className="hero-lede">
              Pomníky, kuchyňské desky, parapety a schody z přírodního kamene.
              Vlastní dílna v Praze, vlastní ruce, žádní překupníci. Přijedete,
              vyberete si kámen, my ho opracujeme a osadíme.
            </p>
            <div className="hero-actions">
              <a href="tel:+420222000000" className="btn btn-solid">Zavolat do dílny</a>
              <a href="#prace" className="btn btn-ghost">Prohlédnout práci</a>
            </div>
          </div>

          <div className="hero-strata" aria-hidden="true">
            <span className="stratum s-zula">žula</span>
            <span className="stratum s-mramor">mramor</span>
            <span className="stratum s-piskovec">pískovec</span>
          </div>
        </div>
      </section>

      {/* ===== SEKCE 1: CO DĚLÁME ===== */}
      <section className="prace" id="prace" aria-labelledby="prace-h">
        <div className="section-head">
          <p className="eyebrow">Z bloku k hotovému dílu</p>
          <h2 id="prace-h">Tři řemesla pod jednou střechou</h2>
          <p className="section-lede">
            Každý kámen má jiné chování pod dlátem i pod pilou. Žulu řežeme
            diamantem, mramor leštíme do zrcadla, pískovec sekáme ručně.
            Podle toho dělíme i práci.
          </p>
        </div>

        <div className="prace-grid">
          <article className="karta">
            <div className="karta-vzorek vzorek-zula" aria-hidden="true" />
            <h3>Pomníky a hroby</h3>
            <p>
              Nové pomníky ze žuly, renovace starých náhrobků, dosekání písma
              a zlacení. Na pražských hřbitovech — Olšany, Vinohrady, Malvazinky —
              vyřídíme povolení správy hřbitova za vás.
            </p>
            <p className="karta-fakt">Osazení do 6 týdnů od schválení návrhu</p>
          </article>

          <article className="karta">
            <div className="karta-vzorek vzorek-mramor" aria-hidden="true" />
            <h3>Kámen do bytu</h3>
            <p>
              Kuchyňské desky, umyvadlové pulty, obklady krbů. Zaměříme u vás
              doma s přesností na milimetr, vyřežeme otvory na dřez i varnou
              desku a přivezeme hotové — bez řezání u vás v kuchyni.
            </p>
            <p className="karta-fakt">Zaměření a montáž v ceně desky</p>
          </article>

          <article className="karta">
            <div className="karta-vzorek vzorek-piskovec" aria-hidden="true" />
            <h3>Schody, parapety, dlažba</h3>
            <p>
              Venkovní schody s protiskluzovou úpravou, okenní parapety, dlažba
              na terasu. Poradíme, který kámen vydrží pražské zimy a solení —
              a který si nechte raději dovnitř.
            </p>
            <p className="karta-fakt">Vzorky kamene půjčujeme domů zdarma</p>
          </article>
        </div>

        <figure className="prace-figura">
          <img
            src="/section-1.webp"
            alt="Vzorky leštěné žuly a mramoru vyskládané v dílně kamenictví VIVA"
            loading="lazy"
          />
          <figcaption>
            Ve vzorkovně máme přes 40 druhů kamene skladem — od šedé liberecké
            žuly po carrarský mramor. Vyberete si naživo, ne z katalogu.
          </figcaption>
        </figure>
      </section>

      {/* ===== SEKCE 2: DÍLNA A DŮVĚRA ===== */}
      <section className="dilna" id="dilna" aria-labelledby="dilna-h">
        <div className="dilna-grid">
          <div className="dilna-media">
            <img
              src="/section-2.webp"
              alt="Ruce kameníka při ručním sekání písma do žulové desky"
              loading="lazy"
            />
          </div>

          <div className="dilna-copy">
            <p className="eyebrow">Dílna VIVA, Praha</p>
            <h2 id="dilna-h">Písmo do kamene sekáme ručně. Pořád.</h2>
            <p>
              Gravírovací fréza je rychlá, ale písmo z ní je mělké a za deset
              let ho nepřečtete. My sekáme dlátem do hloubky a zlatíme plátkovým
              zlatem — tak, jak se to v Praze dělalo, když se stavěly Olšany.
            </p>
            <p>
              Kamenictví VIVA spol. s r.o. vede parta tří kameníků. Každou
              zakázku dělá od zaměření po osazení jeden z nás — víte, s kým
              mluvíte, a ten samý člověk vám dílo i předá.
            </p>

            <ul className="dilna-fakta">
              <li>
                <strong>28 let</strong>
                <span>řemesla v Praze, dílna stále na stejné adrese</span>
              </li>
              <li>
                <strong>40+ druhů</strong>
                <span>kamene skladem ve vzorkovně</span>
              </li>
              <li>
                <strong>10 let</strong>
                <span>záruka na osazení pomníku a spárování</span>
              </li>
            </ul>

            <blockquote className="reference">
              <p>
                „Pomník po dědovi vypadal beznadějně. Pánové z VIVY ho rozebrali,
                přeleštili, dosekali nové písmo a dnes vypadá líp než ty nové
                okolo. A cena byla přesně podle nabídky.“
              </p>
              <footer>— paní Kratochvílová, Olšanské hřbitovy</footer>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}

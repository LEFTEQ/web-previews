export default function Page() {
  return (
    <main className="strecha">
      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="hero-media" aria-hidden="true">
          <img src="/hero.webp" alt="" />
          <div className="hero-shade" />
        </div>

        <nav className="topbar" aria-label="Hlavní">
          <a href="#" className="wordmark" aria-label="Pospíšil střechy, úvod">
            <svg className="wm-roof" viewBox="0 0 40 22" aria-hidden="true">
              <path d="M2 20 L20 3 L38 20" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="square" />
              <path d="M9 20 L20 9.5 L31 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
            </svg>
            <span className="wm-text">
              POSPÍŠIL<em>střechy</em>
            </span>
          </a>
          <a className="topbar-tel" href="tel:+420777657440">
            777 657 440
          </a>
        </nav>

        <div className="hero-inner">
          <p className="hero-eyebrow">Pokrývačství · Liberec a Liberecko</p>
          <h1 className="hero-title">
            <span className="line line-1">Střecha, která vydrží</span>
            <span className="line line-2">liberecké zimy.</span>
          </h1>
          <p className="hero-lede">
            Radek Pospíšil pokládá, opravuje a udržuje střechy v Liberci přes dvacet let.
            Skládané krytiny, plech i plochá střecha — od zaměření po poslední hřebenáč,
            vlastníma rukama, bez subdodávek.
          </p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="tel:+420777657440">Zavolat: 777 657 440</a>
            <a className="btn btn-ghost" href="mailto:radekpospisil2@seznam.cz">Napsat e-mail</a>
          </div>
          <p className="hero-note">Prohlídku a nacenění střechy v Liberci děláme zdarma. Ozveme se do 24 hodin.</p>
        </div>

        {/* keramický okap — podpis hero sekce */}
        <div className="hero-tiles" aria-hidden="true">
          <span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span />
        </div>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="eyebrow">Co pro vaši střechu uděláme</p>
          <h2 id="sluzby-h">Od jedné rozbité tašky po celý nový krov</h2>
        </div>

        <div className="sluzby-grid">
          <article className="karta">
            <div className="karta-znak" aria-hidden="true">
              <svg viewBox="0 0 48 48"><path d="M6 40 L24 8 L42 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/><path d="M13 40 L24 20 L35 40" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
            </div>
            <h3>Nové střechy na klíč</h3>
            <p>
              Pálená a betonová taška, vláknocement i plechová krytina. Zaměříme, spočítáme
              materiál, položíme latě, fólie i krytinu. U novostaveb i při kompletní výměně
              staré střechy.
            </p>
            <p className="karta-detail">Tondach · Bramac · KM Beta · Lindab</p>
          </article>

          <article className="karta">
            <div className="karta-znak" aria-hidden="true">
              <svg viewBox="0 0 48 48"><path d="M8 30 L24 14 L40 30" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/><path d="M20 34 l4 4 8-10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3>Opravy a havárie</h3>
            <p>
              Zatéká vám do podkroví, vítr odnesl tašky nebo sníh utrhl okap? Přijedeme,
              najdeme příčinu a opravíme ji — ne jen místo, kudy kape. Na Liberecku obvykle
              do pár dnů, u havárie dřív.
            </p>
            <p className="karta-detail">Výměna tašek · zatékání · komínové lemování</p>
          </article>

          <article className="karta">
            <div className="karta-znak" aria-hidden="true">
              <svg viewBox="0 0 48 48"><path d="M10 38 V22 L24 10 L38 22 V38" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/><path d="M30 14 v-4 h4 v8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/></svg>
            </div>
            <h3>Klempířina a doplňky</h3>
            <p>
              Okapy, svody, oplechování komínů a úžlabí, sněhové zábrany a střešní okna.
              V podhůří Jizerek drží sníh na střeše dlouho — zábrany a pořádné okapy
              nejsou luxus, ale nutnost.
            </p>
            <p className="karta-detail">Okapy · sněhové zábrany · střešní okna Velux</p>
          </article>

          <article className="karta">
            <div className="karta-znak" aria-hidden="true">
              <svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="13" fill="none" stroke="currentColor" strokeWidth="3"/><path d="M24 16 v8 l6 4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3>Roční kontrola střechy</h3>
            <p>
              Po zimě projdeme krytinu, hřeben, lemování i okapy, vyčistíme žlaby a drobnosti
              rovnou opravíme. Dostanete zprávu s fotkami — víte, v jakém stavu vaše střecha je.
            </p>
            <p className="karta-detail">Ideálně na jaře · rodinné domy i bytovky</p>
          </article>
        </div>
      </section>

      {/* ================= DŮVĚRA / O NÁS ================= */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="duvera-grid">
          <figure className="duvera-media">
            <img
              src="/section-1.webp"
              alt="Detail pokládky pálené střešní krytiny na rodinném domě v Liberci"
            />
            <figcaption>Pokládka pálené tašky, rodinný dům Liberec–Karlinky</figcaption>
          </figure>

          <div className="duvera-text">
            <p className="eyebrow eyebrow-light">Kdo vám na střechu poleze</p>
            <h2 id="duvera-h">Řemeslo z Karlinek, ne firma z katalogu</h2>
            <p>
              Jsem Radek Pospíšil, pokrývač z Liberce–Karlinek. Střechy dělám od devadesátých
              let a znám zdejší počasí líp než předpověď: mokrý sníh z Ještědu, náledí,
              jarní tání. Podle toho střechy stavím — s pořádnou fólií, větráním
              a sněhovými zábranami tam, kde mají smysl.
            </p>
            <p>
              Každou zakázku si beru na starost osobně. Cenu řeknu předem a písemně,
              termín držím a po sobě uklidím. Když něco nejde udělat pořádně,
              řeknu vám to rovnou — i kdyby to znamenalo menší zakázku.
            </p>

            <ul className="duvera-fakta">
              <li>
                <strong>25+ let</strong>
                <span>na střechách Liberecka</span>
              </li>
              <li>
                <strong>Cena předem</strong>
                <span>písemná nabídka, žádné vícepráce navíc</span>
              </li>
              <li>
                <strong>Karlinky, Liberec</strong>
                <span>na místě jsme do půl hodiny</span>
              </li>
            </ul>

            <blockquote className="reference">
              <p>
                „Po únorové vichřici nám chybělo dvacet tašek a do ložnice teklo. Pan Pospíšil
                přijel druhý den ráno, střechu provizorně zakryl a do týdne bylo hotovo.
                Doporučili jsme ho celé ulici.“
              </p>
              <cite>— manželé Hlavatých, Liberec–Ruprechtice</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}

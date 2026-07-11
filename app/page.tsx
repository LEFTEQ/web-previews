import React from "react";

export default function Page() {
  return (
    <main className="iz">
      {/* HERO */}
      <header className="iz-topbar">
        <div className="iz-wrap iz-topbar-inner">
          <a className="iz-mark" href="#" aria-label="INIZIO Internet Media, České Budějovice">
            <span className="iz-mark-brand">INIZIO</span>
            <span className="iz-mark-sub">Internet&nbsp;Media · ČB</span>
          </a>
          <nav className="iz-nav" aria-label="Hlavní navigace">
            <a href="#workshop">Workshop</a>
            <a href="#reference">Reference</a>
            <a className="iz-nav-cta" href="#workshop">Rezervovat místo</a>
          </nav>
        </div>
      </header>

      <section className="iz-hero" aria-labelledby="hero-title">
        <div className="iz-wrap iz-hero-grid">
          <div className="iz-hero-copy">
            <p className="iz-flag">
              <span className="iz-flag-dot" aria-hidden="true" />
              Živě v Českých Budějovicích · nový termín 2026
            </p>

            <h1 id="hero-title" className="iz-h1">
              Marketing a prodej,<br />
              které <span className="iz-h1-mark">skutečně</span> zvednou tržby.
            </h1>

            <p className="iz-lede">
              Žádná motivační show. Na Růstovém tréninku v naší budějovické
              kanceláři si rozebereme konkrétní taktiku — jak přivádět
              zákazníky, jak prodávat a jak řídit růst čísly, ne pocitem.
            </p>

            <div className="iz-hero-actions">
              <a className="iz-btn iz-btn-primary" href="#workshop">
                Chci rezervovat místo
              </a>
              <a className="iz-btn iz-btn-ghost" href="#reference">
                Přečíst reference
              </a>
            </div>

            <dl className="iz-stat-row">
              <div className="iz-stat">
                <dt className="iz-stat-num">132&nbsp;000+</dt>
                <dd className="iz-stat-lbl">podnikatelů prošlo našimi kurzy</dd>
              </div>
              <div className="iz-stat">
                <dt className="iz-stat-num">100+</dt>
                <dd className="iz-stat-lbl">spokojených klientů s recenzí</dd>
              </div>
              <div className="iz-stat">
                <dt className="iz-stat-num">250&nbsp;mil.</dt>
                <dd className="iz-stat-lbl">Kč — meta škálování, kterou učíme</dd>
              </div>
            </dl>
          </div>

          <figure className="iz-hero-figure">
            <img
              src="/hero.webp"
              alt="Růstový trénink INIZIO Internet Media naživo v kanceláři v Českých Budějovicích"
              className="iz-hero-img"
              width={1200}
              height={1400}
            />
            <figcaption className="iz-hero-cap">
              <span className="iz-hero-cap-k">Formát</span>
              U nás v kanceláři · malá skupina · konkrétní frameworky
            </figcaption>
          </figure>
        </div>
      </section>

      {/* SEKCE 1 — PROGRAM / NABÍDKA */}
      <section id="workshop" className="iz-programs" aria-labelledby="prog-title">
        <div className="iz-wrap">
          <div className="iz-sec-head">
            <p className="iz-eyebrow">Co u nás projdete</p>
            <h2 id="prog-title" className="iz-h2">
              Čtyři kroky od prvních zákazníků<br className="iz-br" /> k firmě, která roste bez vás.
            </h2>
          </div>

          <div className="iz-prog-lead">
            <img
              src="/section-1.webp"
              alt="Ukázka pokročilých tréninkových materiálů a strategie růstu od INIZIO"
              className="iz-prog-img"
              width={900}
              height={700}
            />
            <div className="iz-prog-lead-copy">
              <p className="iz-eyebrow iz-eyebrow-y">Pokročilé materiály zdarma</p>
              <h3 className="iz-h3">„První miliarda je nejtěžší“</h3>
              <p className="iz-body">
                Jak získat tolik zákazníků a objednávek, že se o peníze
                přestanete bát. Jan Nedvěd v knize odkrývá strategii, se
                kterou v tréninku pracujeme dál — krok za krokem, na vašich
                číslech.
              </p>
              <a className="iz-inline-link" href="#workshop">
                Chci knihu i trénink
                <span aria-hidden="true"> →</span>
              </a>
            </div>
          </div>

          <ol className="iz-cards">
            <li className="iz-card">
              <span className="iz-card-idx">01</span>
              <p className="iz-card-tag">Živě v ČB</p>
              <h3 className="iz-card-title">Růstový trénink</h3>
              <p className="iz-card-desc">
                Živý workshop v naší kanceláři. Nastartujeme a zrychlíme růst
                vašeho podnikání — první den rozebereme taktiku, nábor talentů
                a rozhodovací frameworky.
              </p>
              <a className="iz-card-cta" href="#workshop">Rezervovat termín</a>
            </li>
            <li className="iz-card">
              <span className="iz-card-idx">02</span>
              <p className="iz-card-tag">Videokurz</p>
              <h3 className="iz-card-title">Škálování firmy na 250 mil. Kč</h3>
              <p className="iz-card-desc">
                Ověřený systém s jasnou strategií, který růst řídí daty.
                Naučíte se, jak firmu dostat až na 250 milionů obratu.
              </p>
              <a className="iz-card-cta" href="#workshop">Chci videokurz</a>
            </li>
            <li className="iz-card iz-card--soon">
              <span className="iz-card-idx">03</span>
              <p className="iz-card-tag">Již brzy</p>
              <h3 className="iz-card-title">Facebook Ads pro podnikatele</h3>
              <p className="iz-card-desc">
                Jak přivádět stabilní a ziskové zákazníky přes Facebook Ads —
                bez pálení rozpočtu na náhodné kampaně.
              </p>
              <span className="iz-card-soon">Připravujeme</span>
            </li>
            <li className="iz-card">
              <span className="iz-card-idx">04</span>
              <p className="iz-card-tag">Program</p>
              <h3 className="iz-card-title">Nejlepší Konverzkář</h3>
              <p className="iz-card-desc">
                Nejnáročnější program — mentoring v marketingu, prodeji a řízení
                času. Klienti ho popisují jako rozhodnutí, které se vrátilo
                ještě během kurzu.
              </p>
              <a className="iz-card-cta" href="#reference">Co říkají absolventi</a>
            </li>
          </ol>
        </div>
      </section>

      {/* SEKCE 2 — REFERENCE / DŮVĚRA */}
      <section id="reference" className="iz-trust" aria-labelledby="trust-title">
        <div className="iz-wrap iz-trust-grid">
          <div className="iz-trust-head">
            <p className="iz-eyebrow">Reference · ověřené recenze</p>
            <h2 id="trust-title" className="iz-h2 iz-h2-light">
              Přes 100 podnikatelů,<br className="iz-br" /> kterým se investice vrátila.
            </h2>
            <p className="iz-body iz-body-light">
              Hodnocení z Google Maps, e-mailů i osobních zpráv. Vybrali jsme
              čtyři, které mluví za konkrétní výsledek — ne za pocit.
            </p>
            <img
              src="/section-2.webp"
              alt="Účastníci Růstového tréninku INIZIO při práci na vlastní strategii"
              className="iz-trust-img"
              width={900}
              height={600}
            />
          </div>

          <div className="iz-quotes">
            <blockquote className="iz-quote">
              <p className="iz-quote-text">
                Hodnota, kterou jsem se v tréninku naučil, je mnohonásobně
                větší než cena. Přihlášení beru jako nejlepší rozhodnutí
                minulého roku, ne-li celého života.
              </p>
              <footer className="iz-quote-src">
                <span className="iz-quote-name">Tomáš Vítek</span>
                <span className="iz-quote-meta">Google Maps · 4. 4. 2024</span>
              </footer>
            </blockquote>

            <blockquote className="iz-quote">
              <p className="iz-quote-text">
                Za dva měsíce se nám povedl obrat, který jsme neměli
                v minulých letech za celý rok.
              </p>
              <footer className="iz-quote-src">
                <span className="iz-quote-name">Jan Kováč</span>
                <span className="iz-quote-meta">Fotograf · Google</span>
              </footer>
            </blockquote>

            <blockquote className="iz-quote">
              <p className="iz-quote-text">
                Celá moja investícia sa mi vrátila už v prvom mesiaci
                programu. Naučil som sa prekonať svoje najväčšie limity
                a strachy, ktoré ma dlho brzdili.
              </p>
              <footer className="iz-quote-src">
                <span className="iz-quote-name">Nicolas Rist</span>
                <span className="iz-quote-meta">Nejlepší konverzkář · 2026</span>
              </footer>
            </blockquote>

            <blockquote className="iz-quote">
              <p className="iz-quote-text">
                Byl to nejdražší kurz v životě a moje očekávání byla extrémně
                vysoká. Nejen že se naplnila — byla překonána. Investice se
                mi vrátila ještě během výcviku.
              </p>
              <footer className="iz-quote-src">
                <span className="iz-quote-name">Jan Kováč</span>
                <span className="iz-quote-meta">Google · 23. 9. 2025</span>
              </footer>
            </blockquote>
          </div>
        </div>

        <div className="iz-wrap">
          <div className="iz-faq">
            <h3 className="iz-faq-title">Než se rozhodnete</h3>
            <details className="iz-faq-item">
              <summary>Co je vlastně workshop?</summary>
              <p>
                Není to konference ani motivační řeči. Je to workshop u nás
                v kanceláři — jdeme rovnou na konkrétní taktiku: jak
                zrychlujeme růst, jak nabíráme talenty a jaké frameworky
                používáme pro rozhodování s vysokou návratností.
              </p>
            </details>
            <details className="iz-faq-item">
              <summary>Pro koho je workshop vhodný?</summary>
              <p>
                Pro podnikatele, jejichž firma dnes stojí hlavně na nich —
                a bez jejich každodenní přítomnosti by přestala fungovat.
              </p>
            </details>
            <details className="iz-faq-item">
              <summary>Jak se zaregistruji?</summary>
              <p>
                Kliknete na tlačítko Rezervovat místo a zarezervujete si
                termín. Registrace zabere pár vteřin. Ozveme se vám na
                podpora@inizio.cz nebo na +420 778 749 053.
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}

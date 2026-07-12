import React from "react";

export default function Page() {
  return (
    <main className="page">
      {/* HERO — otevřeno tím nejcharakterističtějším: reálný stav bytu při rekonstrukci, holé zdivo, prach, měřicí značky */}
      <header className="hero">
        <nav className="nav" aria-label="Hlavní">
          <a className="wordmark" href="#top" aria-label="Dům řemeslníků, domů">
            <span className="wordmark-line">DŮM</span>
            <span className="wordmark-line wordmark-accent">ŘEMESLNÍKŮ</span>
          </a>
          <span className="nav-meta">Rekonstrukce bytů — Praha 5</span>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Byt po bytu, od holé cihly k předání klíčů</p>
            <h1 className="hero-title">
              Rozbijeme starou koupelnu.
              <br />
              <span className="hero-title-em">Vracíme byt, ve kterém se dá bydlet.</span>
            </h1>
            <p className="hero-lede">
              Děláme kompletní rekonstrukce pražských bytů — jádra, elektriku, vodu, podlahy,
              obklady i finální malbu. Jeden tým, jedna zodpovědnost, jeden termín předání.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="tel:+420777464474">Zavolat 777 464 474</a>
              <a className="btn btn-ghost" href="mailto:info@dum-remeslniku.cz">Napsat na e-mail</a>
            </div>
          </div>

          <figure className="hero-figure">
            <img
              className="hero-img"
              src="/hero.webp"
              alt="Byt v Praze během rekonstrukce — rozvody, holé zdivo a připravené podklady pro obklady"
              width={1200}
              height={1500}
              loading="eager"
            />
            <figcaption className="hero-caption">Fáze 04 — rozvody a příčky, těsně před obklady</figcaption>
          </figure>
        </div>

        {/* Postup rekonstrukce JAKO reálná sekvence — proto čísla 01–05 nesou skutečné pořadí prací */}
        <ol className="phases" aria-label="Jak jde rekonstrukce po sobě">
          <li className="phase"><span className="phase-num">01</span><span className="phase-name">Bourání jádra</span></li>
          <li className="phase"><span className="phase-num">02</span><span className="phase-name">Rozvody vody a elektriky</span></li>
          <li className="phase"><span className="phase-num">03</span><span className="phase-name">Příčky a omítky</span></li>
          <li className="phase"><span className="phase-num">04</span><span className="phase-name">Obklady a podlahy</span></li>
          <li className="phase"><span className="phase-num">05</span><span className="phase-name">Malba a předání</span></li>
        </ol>
      </header>

      {/* SEKCE 1 — co reálně děláme, řemeslo po řemesle */}
      <section className="work" aria-labelledby="work-title">
        <div className="section-head">
          <p className="eyebrow">Řemesla pod jednou střechou</p>
          <h2 id="work-title" className="section-title">
            Všechno, co byt potřebuje, od jedné party
          </h2>
          <p className="section-lede">
            Nemusíte shánět zvlášť instalatéra, elektrikáře a obkladače, kteří si vzájemně
            hlídají termíny. Vedeme celou rekonstrukci od demolice po úklid — vy řešíte jen výběr
            dlažby a barvy stěn.
          </p>
        </div>

        <div className="trades">
          <article className="trade">
            <h3 className="trade-title">Zednické práce &amp; sádrokarton</h3>
            <p className="trade-text">
              Nové příčky, štukové omítky, podhledy i akustické izolace. Rovné stěny, na kterých
              obklad i malba drží tak, jak mají.
            </p>
            <ul className="trade-list">
              <li>Zdění nosných i nenosných příček</li>
              <li>Omítky, štukování, opravy zdiva</li>
              <li>Podhledy a sádrokartonové stropy</li>
            </ul>
          </article>

          <article className="trade">
            <h3 className="trade-title">Voda, kanalizace &amp; topení</h3>
            <p className="trade-text">
              Výměna stoupaček, nové rozvody vody a topení, kompletní bytová jádra. Osadíme WC,
              sprchu, vanu i baterie a otestujeme na tlak.
            </p>
            <ul className="trade-list">
              <li>Výměna stoupacího potrubí</li>
              <li>Rozvody vody a topení</li>
              <li>Sanitární technika a baterie</li>
            </ul>
          </article>

          <article className="trade">
            <h3 className="trade-title">Elektroinstalace &amp; revize</h3>
            <p className="trade-text">
              Nové rozvody, rozvaděče a jištění podle norem. Zásuvky a světla tam, kde je
              opravdu potřebujete — a revizní zpráva k tomu.
            </p>
            <ul className="trade-list">
              <li>Rozvody, rozvaděče a jištění</li>
              <li>Zásuvky, vypínače, osvětlení</li>
              <li>Revize pro bezpečný provoz</li>
            </ul>
          </article>

          <article className="trade">
            <h3 className="trade-title">Obklady, dlažby &amp; podlahy</h3>
            <p className="trade-text">
              Keramika, kámen i velkoformát v koupelně a kuchyni, plovoučky, vinyl i dřevo v
              pokojích. Přesné spáry a čisté přechody mezi místnostmi.
            </p>
            <ul className="trade-list">
              <li>Obklady koupelen a kuchyní</li>
              <li>Keramická i kamenná dlažba</li>
              <li>Vinyl, laminát a dřevěné podlahy</li>
            </ul>
          </article>
        </div>
      </section>

      {/* SEKCE 2 — důvěra / o nás, s reálnou fotkou hotové práce */}
      <section className="trust" aria-labelledby="trust-title">
        <div className="trust-grid">
          <figure className="trust-figure">
            <img
              className="trust-img"
              src="/section-1.webp"
              alt="Dokončená koupelna po rekonstrukci — nové obklady a osazená sanita"
              width={1000}
              height={1200}
              loading="lazy"
            />
          </figure>

          <div className="trust-copy">
            <p className="eyebrow">Proč to svěřit nám</p>
            <h2 id="trust-title" className="section-title">
              Sídlíme v Praze 5 a rekonstrukci držíme na jednom klíči
            </h2>
            <p className="section-lede">
              Kancelář máme v ulici U Trojice na Smíchově, po Praze jsme za vámi rychle. Domluvíme
              obhlídku bytu, spočítáme cenu položkově a napíšeme termín, který platí.
            </p>

            <dl className="facts">
              <div className="fact">
                <dt className="fact-label">Zelená úsporám</dt>
                <dd className="fact-value">Pomůžeme s dotací na zateplení a úsporné úpravy</dd>
              </div>
              <div className="fact">
                <dt className="fact-label">Azbest a nebezpečný odpad</dt>
                <dd className="fact-value">Máme oprávnění k bezpečné sanaci a odvozu</dd>
              </div>
              <div className="fact">
                <dt className="fact-label">Bytové domy</dt>
                <dd className="fact-value">Spolupráce se správci na údržbě a modernizaci</dd>
              </div>
            </dl>

            <blockquote className="quote">
              „Sundali jsme starou koupelnu do holého betonu a za tři týdny předali hotovou —
              obklady, sprchový kout i nová elektrika. Termín seděl na den.“
              <cite className="quote-cite">— rekonstrukce bytu 2+kk, Praha-Smíchov</cite>
            </blockquote>

            <figure className="trust-figure-wide">
              <img
                className="trust-img-wide"
                src="/section-2.webp"
                alt="Nová podlaha a čerstvě vymalovaný pokoj po dokončené rekonstrukci bytu"
                width={1200}
                height={800}
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}

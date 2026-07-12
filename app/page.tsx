import React from "react";

export default function Page() {
  return (
    <main className="vt">
      {/* HERO */}
      <header className="vt-hero">
        <div className="vt-hero__bg" aria-hidden="true">
          <img src="/hero.webp" alt="" className="vt-hero__img" />
        </div>

        <div className="vt-topbar">
          <a className="vt-wordmark" href="#" aria-label="VENTILA vzduchotechnika, domovská stránka">
            <span className="vt-wordmark__mark" aria-hidden="true">
              <span className="vt-ring" />
              <span className="vt-ring" />
              <span className="vt-ring" />
            </span>
            <span className="vt-wordmark__text">
              <span className="vt-wordmark__name">VENTILA</span>
              <span className="vt-wordmark__sub">vzduchotechnika · Praha</span>
            </span>
          </a>
          <div className="vt-topbar__contact">
            <a href="tel:+420216216030">+420 216 216 030</a>
            <span className="vt-topbar__hours">Po–Pá 8:00–16:30</span>
          </div>
        </div>

        <div className="vt-hero__inner">
          <p className="vt-eyebrow">Výroba · montáž · servis vzduchotechniky v Praze</p>
          <h1 className="vt-hero__title">
            Aby dům<br />
            <span className="vt-hero__title-em">dýchal</span> čistě.
          </h1>
          <p className="vt-hero__lead">
            Navrhneme, vyrobíme a namontujeme rozvody, rekuperaci i klimatizaci —
            od talířového ventilu po celý dům. Vlastní výroba, dvě prodejny
            na Palmovce a Žižkově.
          </p>
          <div className="vt-hero__actions">
            <a className="vt-btn vt-btn--primary" href="tel:+420216216030">Zavolat a poradit se</a>
            <a className="vt-btn vt-btn--ghost" href="#montaz">Chci montáž doma</a>
          </div>

          <dl className="vt-flow">
            <div className="vt-flow__item">
              <dt>82 %</dt>
              <dd>účinnost rekuperace Ventila FRESH — teplo zůstává uvnitř</dd>
            </div>
            <div className="vt-flow__item">
              <dt>4,9<span aria-hidden="true"> ★</span></dt>
              <dd>hodnocení Ověřeného obchodu od zákazníků</dd>
            </div>
            <div className="vt-flow__item">
              <dt>2</dt>
              <dd>kamenné prodejny v Praze — Palmovka a Žižkov</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* SEKCE 1 — SLUŽBY / MONTÁŽE */}
      <section className="vt-section vt-services" id="montaz" aria-labelledby="services-h">
        <div className="vt-section__head">
          <p className="vt-kicker">Co u vás uděláme</p>
          <h2 id="services-h">Od návrhu po poslední šroub — a jádrové vrtání k tomu.</h2>
          <p className="vt-section__lead">
            Nepůjčujeme na montáž externisty. Přijedeme, změříme, prorazíme zeď
            i pod stropem a odjedeme s uklizeným bytem.
          </p>
        </div>

        <div className="vt-services__grid">
          <ol className="vt-duct">
            <li className="vt-duct__item">
              <span className="vt-duct__no">Ø 125</span>
              <div className="vt-duct__body">
                <h3>Montáž rekuperace</h3>
                <p>Řízené větrání s rekuperací tepla pro celý byt i decentrální jednotky do jedné místnosti. Čerstvý vzduch bez otevírání oken.</p>
              </div>
            </li>
            <li className="vt-duct__item">
              <span className="vt-duct__no">Ø 160</span>
              <div className="vt-duct__body">
                <h3>Montáž vzduchotechniky</h3>
                <p>Rozvody potrubí, talířové ventily, zpětné klapky a protidešťové mřížky — z valné části z naší vlastní výroby.</p>
              </div>
            </li>
            <li className="vt-duct__item">
              <span className="vt-duct__no">Silent</span>
              <div className="vt-duct__body">
                <h3>Montáž klimatizace</h3>
                <p>Klasické split systémy i klimatizace bez venkovní jednotky. Chladíme byty, kanceláře i serverovny.</p>
              </div>
            </li>
            <li className="vt-duct__item">
              <span className="vt-duct__no">Ø 200</span>
              <div className="vt-duct__body">
                <h3>Montáž digestoře &amp; jádrové vrtání</h3>
                <p>Odtah z kuchyně a čisté průchody zdí. Jádrovým vrtákem prorazíme i nosnou stěnu bez prachu po celém bytě.</p>
              </div>
            </li>
          </ol>

          <figure className="vt-services__figure">
            <img src="/section-1.webp" alt="Montáž rozvodů vzduchotechniky — potrubí a talířové ventily připravené k instalaci" />
            <figcaption>Rozvody chystané k montáži — každý kus změřený na místo.</figcaption>
          </figure>
        </div>
      </section>

      {/* SEKCE 2 — DŮVĚRA / O NÁS */}
      <section className="vt-section vt-trust" aria-labelledby="trust-h">
        <div className="vt-trust__grid">
          <figure className="vt-trust__figure">
            <img src="/section-2.webp" alt="Výrobky Ventila z vlastní výroby — komponenty vzduchotechniky" />
          </figure>

          <div className="vt-trust__content">
            <p className="vt-kicker">Proč Ventila</p>
            <h2 id="trust-h">Vyrábíme to, co montujeme.</h2>
            <p className="vt-trust__lead">
              Zpětné klapky KZK2, talířové ventily, mřížky UVLA i rekuperace
              Ventila FRESH vznikají v naší výrobě. Víme tedy přesně, co vám
              dáváme do zdi — a umíme to servisovat i za pár let.
            </p>

            <ul className="vt-trust__list">
              <li>
                <strong>Vlastní výroba</strong>
                <span>Komponenty i celé rekuperační jednotky z české produkce.</span>
              </li>
              <li>
                <strong>Skladem, ne „na dodání za měsíc“</strong>
                <span>Většina dílů leží na prodejně — přijedete a odvezete.</span>
              </li>
              <li>
                <strong>Prodej i na splátky</strong>
                <span>Klimatizaci nebo rekuperaci rozložíte do splátek.</span>
              </li>
              <li>
                <strong>Dvě prodejny v Praze</strong>
                <span>Praha 8 Palmovka a Praha 3 Žižkov, Po–Pá 8:00–16:30.</span>
              </li>
            </ul>

            <blockquote className="vt-quote">
              <p>„Ověřený obchod, hodnocení 4,9 z 5.“</p>
              <cite>průměr recenzí zákazníků e-shopu Ventila</cite>
            </blockquote>

            <a className="vt-btn vt-btn--primary" href="mailto:ventila@ventila.cz">Napsat na ventila@ventila.cz</a>
          </div>
        </div>
      </section>
    </main>
  );
}

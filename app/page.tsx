import React from "react";

export default function Page() {
  return (
    <main className="page">
      {/* HERO — postaveno na uzávěrce: den v měsíci jako rytmus účtárny */}
      <header className="hero">
        <div className="hero__bar">
          <a className="wordmark" href="#" aria-label="Monix — účetnictví">
            <span className="wordmark__mono">M<span className="wordmark__slash">/</span>x</span>
            <span className="wordmark__full">Monix</span>
            <span className="wordmark__sub">účetnictví&nbsp;s.r.o.</span>
          </a>
          <nav className="hero__nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Služby</a>
            <a href="#duvera">O nás</a>
            <a href="#kontakt" className="hero__navcta">Zavolat</a>
          </nav>
        </div>

        <div className="hero__grid">
          <div className="hero__text">
            <p className="eyebrow"><span className="eyebrow__num">Plzeň</span> · daně, účetnictví, mzdy</p>
            <h1 className="hero__title">
              Termíny hlídáme<br />
              <em>my.</em> Vy podnikáte<br />
              bez starostí.
            </h1>
            <p className="hero__lede">
              Vedeme účetnictví přesně a včas — s klidem člověka, který má
              každý řádek pod kontrolou. Doklady vozíme po Plzni a okolí do
              30&nbsp;km, zbytek zvládneme online přes celou ČR.
            </p>
            <div className="hero__actions">
              <a href="#kontakt" className="btn btn--primary">Domluvit schůzku</a>
              <a href="tel:+420776226147" className="btn btn--ghost">776&nbsp;226&nbsp;147</a>
            </div>
            <p className="hero__stamp">Členové Komory daňových poradců ČR</p>
          </div>

          <div className="hero__panel" aria-hidden="false">
            <figure className="hero__figure">
              <img
                src="/hero.webp"
                alt="Pracovní stůl účetní kanceláře Monix v Plzni — doklady, kalkulačka a šanony"
                className="hero__img"
              />
            </figure>
            <div className="ledger" aria-label="Kalendář uzávěrek">
              <p className="ledger__head">Co hlídáme za vás</p>
              <ul className="ledger__list">
                <li><span className="ledger__day">25.</span> Přiznání a platba DPH</li>
                <li><span className="ledger__day">20.</span> Odvody sociálního a zdravotního</li>
                <li><span className="ledger__day">01.</span> Uzávěrka měsíce, přehled pro vás</li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* SLUŽBY */}
      <section id="sluzby" className="services" aria-labelledby="services-h">
        <div className="section__head">
          <p className="eyebrow"><span className="eyebrow__num">01</span> Co pro vás uděláme</p>
          <h2 id="services-h" className="section__title">
            Od jednoho papíru<br /> až po firmu na klíč
          </h2>
          <p className="section__lede">
            Přijít můžete s čímkoliv vás napadne. Vezmeme si na starost
            jen jeden úkon, nebo celé účetnictví — jak potřebujete.
          </p>
        </div>

        <ol className="cards">
          <li className="card">
            <span className="card__tag">Poradenství</span>
            <h3 className="card__title">Poradíme, kudy do toho</h3>
            <p className="card__body">
              Založení firmy, výběr právní formy, daňová optimalizace.
              Zajistíme i notáře. Přijďte s dotazem, odejdete s plánem.
            </p>
          </li>
          <li className="card">
            <span className="card__tag">Kontinuální správa</span>
            <h3 className="card__title">Vedeme účetnictví průběžně</h3>
            <p className="card__body">
              Kompletní účetnictví, daňová evidence, DPH, mzdy a personální
              agenda. Vy dostanete včas srozumitelné přehledy.
            </p>
          </li>
          <li className="card">
            <span className="card__tag">Jednorázové úkony</span>
            <h3 className="card__title">Jen to, co zrovna potřebujete</h3>
            <p className="card__body">
              Nemusíte navazovat dlouhodobou spolupráci. Zpracujeme daňové
              přiznání, vyřešíme dílčí krok — nebo vás zaškolíme.
            </p>
          </li>
          <li className="card">
            <span className="card__tag">Podnikání na klíč</span>
            <h3 className="card__title">Vezmeme to celé naráz</h3>
            <p className="card__body">
              Od nápadu po realizaci: založení firmy, nastavení procesů
              a poté opakující se úkony. Od začátku do konce s vámi.
            </p>
          </li>
        </ol>

        <div className="branches">
          <p className="branches__lead">Rozumíme oborům, ve kterých se pohybujete:</p>
          <ul className="branches__list">
            <li>zdravotnictví</li>
            <li>zemědělství</li>
            <li>průmysl</li>
            <li>přepravní služby</li>
            <li>restaurace a kavárny</li>
            <li>maloobchod</li>
            <li>e-shopy</li>
            <li>neziskové organizace</li>
            <li>SVJ a pronájmy</li>
          </ul>
          <p className="branches__note">
            Pracujeme pro právnické i fyzické osoby. Nenašli jste svou
            službu? Napište nebo zavolejte — poradíme si.
          </p>
        </div>
      </section>

      {/* DŮVĚRA / O NÁS */}
      <section id="duvera" className="trust" aria-labelledby="trust-h">
        <div className="trust__media">
          <img
            src="/section-1.webp"
            alt="Monika Brejchová, daňová a účetní poradkyně, zakladatelka Monix"
            className="trust__img"
          />
        </div>
        <div className="trust__text">
          <p className="eyebrow"><span className="eyebrow__num">02</span> Kdo se o vás postará</p>
          <h2 id="trust-h" className="section__title">
            Bc.&nbsp;Monika Brejchová,<br /> DiS.
          </h2>
          <p className="trust__role">
            Daňová a účetní poradkyně, zakladatelka Monix&nbsp;–&nbsp;účetnictví&nbsp;s.r.o.
          </p>
          <p className="trust__body">
            Klademe důraz na preciznost. Naši klienti mají vždy veškeré
            potřebné informace — včas a srozumitelně. Daně a účetnictví
            zvládneme za vás, abyste se mohli soustředit na to, co umíte
            nejlíp: rozvíjet svoje podnikání.
          </p>

          <dl className="facts">
            <div className="facts__row">
              <dt>Schůzka</dt>
              <dd>Osobně v Plzni kousek od centra, nebo online — telefonicky
              i přes videohovor. Osobní setkání není podmínkou.</dd>
            </div>
            <div className="facts__row">
              <dt>Doklady</dt>
              <dd>Svoz a předávání fyzických dokladů po Plzni a okolí do
              30&nbsp;km. Vše ostatní klidně online přes celou ČR.</dd>
            </div>
            <div className="facts__row">
              <dt>Osvědčení</dt>
              <dd>Jsme součástí Komory daňových poradců ČR.</dd>
            </div>
          </dl>

          <div id="kontakt" className="contact">
            <figure className="contact__img">
              <img
                src="/section-2.webp"
                alt="Kancelář Monix v Plzni na adrese Zahradní 2475/57"
                className="trust__img"
              />
            </figure>
            <div className="contact__info">
              <p className="contact__lead">Ozvěte se — nabídku zpracujeme obratem.</p>
              <a href="tel:+420776226147" className="contact__line">+420&nbsp;776&nbsp;226&nbsp;147</a>
              <a href="mailto:monix@monix-ucto.cz" className="contact__line">monix@monix-ucto.cz</a>
              <address className="contact__addr">
                Zahradní 2475/57, 326&nbsp;00 Plzeň
              </address>
              <a href="#kontakt" className="btn btn--primary">Poslat poptávku</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

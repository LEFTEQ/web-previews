import React from 'react';

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a href="#uvod" className="wordmark" aria-label="KUBESO — žaluzie a rolety Brno">
          <span className="wordmark-k">KUBE</span><span className="wordmark-so">SO</span>
          <span className="wordmark-tag">žaluzie &amp; rolety · Brno</span>
        </a>
        <nav className="nav" aria-label="Hlavní navigace">
          <a href="#nabidka">Nabídka</a>
          <a href="#duvera">O nás</a>
          <a href="tel:+420544234141" className="nav-call">544&nbsp;234&nbsp;141</a>
        </nav>
      </header>

      <section className="hero" id="uvod">
        <div className="hero-slats" aria-hidden="true">
          <span></span><span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span><span></span><span></span>
        </div>
        <div className="hero-inner">
          <p className="eyebrow">Zaměření &middot; výroba &middot; montáž po Brně a okolí</p>
          <h1 className="hero-title">
            Světlo si<br />
            <span className="hero-accent">nastavíte</span> lamelu<br />
            po lamele.
          </h1>
          <p className="hero-lede">
            Interiérové žaluzie, venkovní rolety a látkové rolety na míru
            oken u vás doma. Přijedeme, zaměříme, vyrobíme a namontujeme —
            vy jen otočíte klikou a doladíte, kolik světla pustíte dovnitř.
          </p>
          <div className="hero-cta">
            <a href="tel:+420544234141" className="btn btn-primary">Zavolat a domluvit zaměření</a>
            <a href="#nabidka" className="btn btn-ghost">Co vyrábíme</a>
          </div>
          <dl className="hero-facts">
            <div>
              <dt>Zaměření u vás</dt>
              <dd>zdarma po Brně</dd>
            </div>
            <div>
              <dt>Trnkova 148</dt>
              <dd>prodejna &amp; showroom</dd>
            </div>
            <div>
              <dt>PO–PÁ 7–15</dt>
              <dd>nebo dle domluvy</dd>
            </div>
          </dl>
        </div>
        <div className="hero-media">
          <img src="/hero.webp" alt="Interiérové žaluzie s nastavenými lamelami filtrujícími denní světlo v okně" className="hero-img" />
        </div>
      </section>

      <section className="section nabidka" id="nabidka">
        <div className="section-head">
          <p className="eyebrow eyebrow-dark">Na míru každému oknu</p>
          <h2 className="section-title">Čím okno zastíníme</h2>
          <p className="section-lede">
            Od horkého jižního podkroví po francouzské okno v obýváku —
            ke každému typu okna sedí něco jiného. Poradíme, co má smysl,
            a nenutíme vám nejdražší variantu.
          </p>
        </div>

        <ol className="cards">
          <li className="card">
            <span className="card-num">01</span>
            <h3>Interiérové žaluzie</h3>
            <p>
              Hliníkové i dřevěné lamely, které naklopíte přesně tak, aby světlo
              dopadalo, kam chcete. Do plastových i dřevěných oken, bez vrtání do křídla.
            </p>
            <p className="card-meta">Šířka lamely 16 / 25 / 50&nbsp;mm · přes 40 odstínů</p>
          </li>
          <li className="card">
            <span className="card-num">02</span>
            <h3>Venkovní rolety</h3>
            <p>
              Zastíní dřív, než se místnost stačí ohřát. V létě drží horko venku,
              v zimě šetří teplo uvnitř a přidají soukromí i útlum hluku z ulice.
            </p>
            <p className="card-meta">Ruční klika i motor s dálkovým ovládáním</p>
          </li>
          <li className="card">
            <span className="card-num">03</span>
            <h3>Látkové a den&amp;noc rolety</h3>
            <p>
              Rolety, plisé a systém den &amp; noc do kuchyně, ložnice i dětského pokoje.
              Od jemného průsvitu po plné zatemnění, ať vás ráno nebudí slunce.
            </p>
            <p className="card-meta">Průsvitné · zatemňovací · voděodolné do koupelny</p>
          </li>
          <li className="card">
            <span className="card-num">04</span>
            <h3>Sítě proti hmyzu &amp; servis</h3>
            <p>
              K zastínění rovnou i sítě do oken a dveří. A když po letech něco
              zaskřípe, přijedeme seřídit nebo vyměnit — i mimo záruku.
            </p>
            <p className="card-meta">Rámečky, rolovací i dveřní sítě · pozáruční servis</p>
          </li>
        </ol>
      </section>

      <section className="section duvera" id="duvera">
        <div className="duvera-grid">
          <div className="duvera-media">
            <img src="/section-1.webp" alt="Detail montáže žaluzií na okno technikem KUBESO" className="duvera-img" />
            <img src="/section-2.webp" alt="Hotová okenní rolota v interiéru brněnského bytu" className="duvera-img duvera-img-2" />
          </div>
          <div className="duvera-text">
            <p className="eyebrow eyebrow-dark">Rodinná dílna z Brna</p>
            <h2 className="section-title">Přijedeme, zaměříme, uděláme to pořádně</h2>
            <p>
              KUBESO sídlí na Trnkově v Brně — tady máte prodejnu i showroom,
              kde si osaháte lamely, látky a barvy naživo. Nejsme e-shop bez tváře:
              každou zakázku vedeme od zaměření až po poslední seřízení klik.
            </p>
            <p>
              Jednáte přímo s lidmi, kteří k vám pak přijedou montovat. Řekneme
              vám dopředu cenu i termín a po montáži po sobě uklidíme.
            </p>

            <ul className="promise">
              <li><strong>Zaměření zdarma</strong> — přijedeme změřit okna po Brně a okolí.</li>
              <li><strong>Výroba na míru</strong> — rozměry přesně podle vašich oken, ne z katalogu.</li>
              <li><strong>Montáž bez nepořádku</strong> — čistá práce, funkční ovládání, hotovo za den.</li>
            </ul>

            <figure className="quote">
              <blockquote>
                „Na prvním místě jste pro nás vždy vy — spokojený zákazník.
                Na každou realizaci osobně dohlížím a pomáhám vybrat řešení,
                které vám bude sloužit roky.“
              </blockquote>
              <figcaption>Jan Bednář, majitel KUBESO</figcaption>
            </figure>

            <div className="duvera-contact">
              <a href="tel:+420544234141" className="btn btn-primary">Zavolat 544&nbsp;234&nbsp;141</a>
              <a href="mailto:kubeso@kubeso.cz" className="btn btn-ghost">Napsat na kubeso@kubeso.cz</a>
            </div>
            <p className="duvera-addr">Trnkova 148, 628 00 Brno · PO–PÁ 7:00–15:00 · odpovíme do 24 hodin</p>
          </div>
        </div>
      </section>
    </main>
  );
}

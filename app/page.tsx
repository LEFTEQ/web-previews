import React from "react";

export default function Page() {
  const services = [
    {
      code: "01",
      name: "Svoz komunálního odpadu",
      desc: "Pravidelný svoz popelnic a kontejnerů z pražských domácností, bytových domů i firem. Nádoby 120–1100 litrů, svozové dny podle vaší adresy.",
      tag: "Popelnice · kontejnery",
    },
    {
      code: "02",
      name: "Tříděný a velkoobjemový odpad",
      desc: "Papír, plast, sklo, bioodpad i objemný odpad ze sklepů a půd. Přistavíme kontejner na termín, který vám vyhovuje, a odvezeme ho včas.",
      tag: "Separace · přistavení",
    },
    {
      code: "03",
      name: "Čištění a údržba kanalizace",
      desc: "Tlakové čištění stok, kanalizačních přípojek a lapolů, monitoring kamerou a odčerpání jímek. Vozidla vyjíždějí z Prahy, ne z druhého konce republiky.",
      tag: "Tlakové čištění · monitoring",
    },
    {
      code: "04",
      name: "Sběrné dvory a provozovny",
      desc: "Odevzdejte nebezpečný odpad, elektro nebo pneumatiky osobně. Otevřeno šest dní v týdnu, s obsluhou, která poradí, kam co patří.",
      tag: "Odevzdání osobně",
    },
  ];

  return (
    <main className="pg">
      <header className="nav" aria-label="Hlavní navigace">
        <a className="mark" href="#top" aria-label="AVE Pražské komunální služby, domů">
          <span className="mark-badge">AVE</span>
          <span className="mark-sub">Pražské komunální služby</span>
        </a>
        <nav className="nav-links">
          <a href="#sluzby">Služby</a>
          <a href="#duvera">O nás</a>
          <a className="nav-tel" href="tel:800118800">800&nbsp;118&nbsp;800</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <img className="hero-img" src="/hero.webp" alt="Svozové vozidlo AVE v pražských ulicích za svítání" width={1600} height={1000} />
        <div className="hero-scrim" aria-hidden="true" />
        <div className="hero-inner">
          <p className="hero-eyebrow">Praha · svoz odpadu &amp; kanalizace</p>
          <h1 className="hero-title">
            Ráno je<br />
            <span className="hero-accent">čisto.</span>
          </h1>
          <p className="hero-lede">
            Než se město probudí, popelnice jsou prázdné a stoky
            průchozí. Staráme se o pražský odpad a kanalizaci —
            spolehlivě, každý svozový den.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#sluzby">Prohlédnout služby</a>
            <a className="btn btn-ghost" href="tel:800118800">
              <span className="btn-tel-label">Infolinka zdarma</span>
              <span className="btn-tel-num">800 118 800</span>
            </a>
          </div>
        </div>
        <ul className="hero-ticks" aria-label="Rytmus svozu">
          <li><b>Po–So</b><span>svozové dny</span></li>
          <li><b>05:00</b><span>první výjezd</span></li>
          <li><b>6 dvorů</b><span>otevřeno v Praze</span></li>
        </ul>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="sec-head">
          <p className="eyebrow">Co odvezeme a vyčistíme</p>
          <h2 id="sluzby-h" className="sec-title">Čtyři věci, které vyřešíme za vás</h2>
        </div>
        <ol className="svc-list">
          {services.map((s) => (
            <li className="svc" key={s.code}>
              <span className="svc-code" aria-hidden="true">{s.code}</span>
              <div className="svc-body">
                <h3 className="svc-name">{s.name}</h3>
                <p className="svc-desc">{s.desc}</p>
                <p className="svc-tag">{s.tag}</p>
              </div>
            </li>
          ))}
        </ol>
        <figure className="svc-figure">
          <img src="/section-1.webp" alt="Kontejnery na tříděný odpad připravené ke svozu" width={1400} height={900} />
          <figcaption>Přistavíme nádobu, kterou opravdu potřebujete — ne o číslo větší.</figcaption>
        </figure>
      </section>

      <section className="duvera" id="duvera" aria-labelledby="duvera-h">
        <figure className="duvera-figure">
          <img src="/section-2.webp" alt="Posádka AVE při čištění kanalizační stoky v Praze" width={1400} height={950} />
        </figure>
        <div className="duvera-body">
          <p className="eyebrow">Proč zrovna my</p>
          <h2 id="duvera-h" className="sec-title">Pražská firma, která zná každou stoku ve svém rajónu</h2>
          <p className="duvera-lede">
            Nejsme dispečink kdesi v kraji. Naše vozy stojí v Praze,
            posádky znají jednosměrky, úzké dvory i to, kde se v pět
            ráno nedá couvat. Když zavoláte, ví se, kam jet.
          </p>
          <dl className="facts">
            <div className="fact">
              <dt>Kde jezdíme</dt>
              <dd>Praha a přilehlé obce — svoz, kontejnery, kanalizace.</dd>
            </div>
            <div className="fact">
              <dt>Kdy nás zastihnete</dt>
              <dd>Infolinka 800 118 800, sběrné dvory otevřené Po–So.</dd>
            </div>
            <div className="fact">
              <dt>Na čem nám záleží</dt>
              <dd>Méně odpadu na skládce, víc do recyklace a energie.</dd>
            </div>
          </dl>
          <blockquote className="quote">
            „Čistá budoucnost není heslo na autě. Je to prázdná
            popelnice v pátek ráno a stoka, která nezapáchá.“
          </blockquote>
        </div>
      </section>
    </main>
  );
}

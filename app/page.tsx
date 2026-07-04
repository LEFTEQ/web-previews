import type { CSSProperties } from "react";

export default function Page() {
  const corridors = [
    { code: "OL", city: "Olomouc", detail: "Na Statkách 585 · VGP Park, Hala I · Slavonín", tel: "+420 602 708 700", mail: "olomouc@rtr.cz", home: true },
    { code: "PH", city: "Praha", detail: "Vlastibořská 2836/3 · P3 Park, Hala IV · Horní Počernice", tel: "+420 724 327 153", mail: "praha@rtr.cz" },
    { code: "UL", city: "Ústí nad Labem", detail: "U Cukrovaru 6 · Areál RTR · Krásné Březno", tel: "+420 606 778 939", mail: "usti@rtr.cz" },
  ];

  const services = [
    {
      idx: "01",
      title: "Silniční transport",
      lead: "Vozíme po celé ČR i Evropě",
      body: "Vlastní flotila nákladních vozidel a řidiči, kteří trasu znají. Přepravíme každé požadované množství — v čase, který slíbíme, a v kvalitě, kterou si zboží zaslouží.",
    },
    {
      idx: "02",
      title: "Fulfillment e-shopů",
      lead: "Naskladnit, vychystat, expedovat",
      body: "Kompletní outsourcing skladu: příjem od dodavatelů, evidence přes čárové a QR kódy, pick & pack a odeslání objednávek vašim zákazníkům. Vy máte volné ruce na prodej.",
    },
    {
      idx: "03",
      title: "Skladování a balení",
      lead: "20 000 m² pod jednou střechou",
      body: "Uskladnění, třídění a kompletace zásilek 7 dní v týdnu, po celý rok, v desítkách variant balení. Skladová centra v Olomouci, Praze a Ústí nad Labem.",
    },
    {
      idx: "04",
      title: "Celní služby",
      lead: "Odbavení i poradenství",
      body: "Komplexní celní agenda včetně poradenství. Profesionální tým vyřídí i nadstandardní požadavky, aby zboží nestálo na hranici déle, než musí.",
    },
  ];

  const stats = [
    { num: "1991", label: "vozíme od tohoto roku" },
    { num: "100+", label: "lidí v týmu RTR" },
    { num: "20 000", label: "m² skladové plochy" },
    { num: "3", label: "logistická centra v ČR" },
  ];

  return (
    <main className="pg">
      <header className="nav">
        <a className="mark" href="#top" aria-label="RTR Transport a logistika, úvod">
          <span className="mark__r">R</span>
          <span className="mark__t">T</span>
          <span className="mark__r2">R</span>
          <span className="mark__tag">Transport · Logistika</span>
        </a>
        <div className="nav__line" aria-hidden="true" />
        <a className="nav__call" href="tel:+420724327153">
          <span className="nav__callhours">Po–Pá 8:00–16:00</span>
          <span className="nav__callnum">+420 724 327 153</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero__grid" aria-hidden="true">
          <span className="hero__milemark hero__milemark--a">OLOMOUC</span>
          <span className="hero__milemark hero__milemark--b">483 km — PRAHA · ÚSTÍ n. L.</span>
        </div>

        <p className="hero__eyebrow">Autodoprava &amp; logistika · Olomouc, VGP Park Slavonín</p>

        <h1 className="hero__title">
          <span className="hero__word hero__word--out">Naložit</span>
          <span className="hero__word hero__word--road">na cestu</span>
          <span className="hero__word hero__word--in">a doručit.</span>
        </h1>

        <p className="hero__lead">
          Vlastní kamiony, tři skladová centra a lidé, kteří logistiku dělají
          od roku 1991. Vezmeme vaše zboží z rampy v Olomouci a předáme ho tam,
          kde ho čekají — kdekoliv v Česku i v Evropě.
        </p>

        <div className="hero__actions">
          <a className="btn btn--solid" href="#poptavka">Spočítat přepravu</a>
          <a className="btn btn--ghost" href="#sluzby">Prohlédnout služby</a>
        </div>

        <dl className="hero__odo" aria-label="RTR v číslech">
          {stats.map((s, i) => (
            <div className="odo" key={s.label} style={{ ["--d" as keyof CSSProperties]: `${0.5 + i * 0.09}s` } as CSSProperties}>
              <dt className="odo__num">{s.num}</dt>
              <dd className="odo__label">{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="svc" id="sluzby" aria-labelledby="svc-h">
        <div className="svc__head">
          <p className="kicker">Co pro vás vozíme a skladujeme</p>
          <h2 className="h2" id="svc-h">Čtyři služby, jeden dodací list</h2>
          <p className="svc__intro">
            Od jednoho paletového místa po celý e-shopový sklad. Sestavíme řešení
            na míru — nebo převezmeme celou logistiku, ať se můžete věnovat prodeji.
          </p>
        </div>

        <div className="svc__media">
          <img src="/section-1.webp" alt="Nákladní vozidla RTR připravená k výjezdu ze skladového areálu" className="svc__img" loading="lazy" />
        </div>

        <ol className="cards">
          {services.map((s) => (
            <li className="card" key={s.idx}>
              <span className="card__idx" aria-hidden="true">{s.idx}</span>
              <div className="card__body">
                <h3 className="card__title">{s.title}</h3>
                <p className="card__lead">{s.lead}</p>
                <p className="card__text">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="trust" id="o-nas" aria-labelledby="trust-h">
        <div className="trust__media">
          <img src="/section-2.webp" alt="Skladová hala RTR s regály a připravenými zásilkami" className="trust__img" loading="lazy" />
        </div>

        <div className="trust__text">
          <p className="kicker kicker--light">Proč jezdit s RTR</p>
          <h2 className="h2 h2--light" id="trust-h">33 let na silnici — a pořád na čas</h2>
          <p className="trust__lead">
            Vozíme od roku 1991. Za tu dobu jsme se naučili jedno: zásilka není
            číslo v tabulce, ale objednávka, na kterou někdo čeká. Držíme
            certifikace vnitrostátní i mezinárodní silniční dopravy a certifikaci
            logistiky a skladování — ale hlavní zárukou je 100 lidí, kteří to
            berou osobně.
          </p>

          <ul className="certs">
            <li className="cert">Certifikace vnitrostátní a mezinárodní silniční dopravy</li>
            <li className="cert">Certifikace logistiky a skladování</li>
          </ul>

          <div className="corridors" id="poptavka">
            <p className="corridors__h">Naše centra</p>
            <ul className="corridors__list">
              {corridors.map((c) => (
                <li className={"cor" + (c.home ? " cor--home" : "")} key={c.code}>
                  <span className="cor__code" aria-hidden="true">{c.code}</span>
                  <div className="cor__info">
                    <p className="cor__city">
                      {c.city}
                      {c.home && <span className="cor__badge">domovské</span>}
                    </p>
                    <p className="cor__detail">{c.detail}</p>
                    <p className="cor__contact">
                      <a href={"tel:" + c.tel.replace(/\s/g, "")}>{c.tel}</a>
                      <span aria-hidden="true"> · </span>
                      <a href={"mailto:" + c.mail}>{c.mail}</a>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

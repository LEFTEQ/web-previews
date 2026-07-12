export default function Page() {
  const services = [
    {
      no: "01",
      title: "Mezinárodní kamionová doprava",
      text: "Pravidelné linky z Olomouce do celé Evropy. Vlastní tahače, řidiči s profesní licencí a plánování tras, které drží termín i při uzavírkách.",
      items: ["Celoevropské destinace", "Sledování zásilky", "Řidiči na volání 24/7"],
    },
    {
      no: "02",
      title: "Chlazená přeprava",
      text: "Návěsy s řízenou teplotou pro potraviny a citlivý náklad. Teplotu hlídáme po celou cestu a doložíme záznam z čidel.",
      items: ["Režim od −25 do +25 °C", "Záznam teploty k faktuře", "Hygienicky čisté návěsy"],
    },
    {
      no: "03",
      title: "Skladování a překládka",
      text: "Kryté skladové plochy na provozovně v Holici. Zboží u nás přeložíme, uskladníme přes noc nebo připravíme na navazující rozvoz.",
      items: ["Zastřešené rampy", "Krátkodobé i sezónní sklady", "Nakládka v den domluvy"],
    },
  ];

  return (
    <main>
      {/* ---------- HERO ---------- */}
      <header className="trx-hero">
        <div className="trx-hero-media" aria-hidden="true">
          <img src="/hero.webp" alt="" />
        </div>

        <div className="trx-wrap">
          <nav className="trx-nav" aria-label="Hlavní navigace">
            <div className="trx-logo">
              TRI<b>M</b>EX<span>OLOMOUC · CZ</span>
            </div>
            <ul className="trx-navlinks">
              <li><a href="#sluzby">Doprava</a></li>
              <li><a href="#sluzby">Skladování</a></li>
              <li><a href="#o-nas">O firmě</a></li>
              <li><a href="#kontakt">Kontakt</a></li>
            </ul>
          </nav>

          <div className="trx-hero-inner">
            <p className="trx-eyebrow trx-anim trx-d1">Autodoprava z Olomouce · od roku 1996</p>
            <h1 className="trx-h1 trx-anim trx-d2">
              Náklad, který <em>dojede</em> včas napříč Evropou
            </h1>
            <p className="trx-lead trx-anim trx-d3">
              Vozíme zboží z Holice do celé Evropy — od chlazených potravin po
              paletovaný náklad. Vlastní tahače, vlastní řidiči a jeden dispečer,
              který zvedne telefon.
            </p>
            <div className="trx-hero-actions trx-anim trx-d4">
              <a className="trx-btn trx-btn-primary" href="tel:+420585570800">Zavolat dispečink</a>
              <a className="trx-btn trx-btn-ghost" href="#sluzby">Co vozíme</a>
            </div>
          </div>
        </div>

        {/* nákladový list — spec strip */}
        <div className="trx-wrap">
          <dl className="trx-specs">
            <div className="trx-spec">
              <dt>Základna</dt>
              <dd>Holice<small>Šlechtitelů 695/6, Olomouc</small></dd>
            </div>
            <div className="trx-spec">
              <dt>Dosah</dt>
              <dd>Evropa<small>MKD po celé EU</small></dd>
            </div>
            <div className="trx-spec">
              <dt>Vozový park</dt>
              <dd>Vlastní<small>tahače + chlazené návěsy</small></dd>
            </div>
            <div className="trx-spec">
              <dt>Dispečink</dt>
              <dd>585 570 800<small>domluvíme se česky</small></dd>
            </div>
          </dl>
        </div>
      </header>

      {/* ---------- SLUŽBY ---------- */}
      <section className="trx-services" id="sluzby">
        <div className="trx-wrap">
          <div className="trx-sec-head">
            <span className="trx-kicker">Co naložíme</span>
            <h2 className="trx-h2">Tři věci, které umíme naplno</h2>
            <p className="trx-sec-intro">
              Nejsme zprostředkovatel. Náklad jede na našich autech, s našimi
              řidiči — od svozu v Olomouci po vykládku u příjemce.
            </p>
          </div>

          <div className="trx-cards">
            {services.map((s) => (
              <article className="trx-card" key={s.no}>
                <span className="trx-card-no">{s.no}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <ul>
                  {s.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        {/* ---------- DŮVĚRA / O NÁS ---------- */}
        <div className="trx-trust" id="o-nas">
          <div className="trx-wrap">
            <div className="trx-trust-grid">
              <div className="trx-trust-media">
                <img src="/section-1.webp" alt="Kamiony vozového parku Trimex Olomouc připravené na provozovně v Holici" />
              </div>
              <div className="trx-trust-body">
                <span className="trx-kicker">O firmě</span>
                <h2 className="trx-h2">Rodinná spedice, která zůstala v Olomouci</h2>
                <p>
                  Jezdíme z konečné autobusu č. 22 v Holici. Za ta léta jsme
                  navozili tisíce kilometrů po Evropě a naučili se jednu věc:
                  zákazník chce vědět, kde jeho zboží je a kdy dorazí. To u nás
                  vyřídí jeden telefonát.
                </p>

                <div className="trx-facts">
                  <div className="trx-fact">
                    <div className="n">1996</div>
                    <div className="l">vozíme náklad z Olomouce</div>
                  </div>
                  <div className="trx-fact">
                    <div className="n">EU</div>
                    <div className="l">celoevropská působnost</div>
                  </div>
                  <div className="trx-fact">
                    <div className="n">±0,5 °C</div>
                    <div className="l">přesnost chlazení</div>
                  </div>
                  <div className="trx-fact">
                    <div className="n">24/7</div>
                    <div className="l">dispečink na příjmu</div>
                  </div>
                </div>

                <div className="trx-contact" id="kontakt">
                  <div className="row"><span className="tag">Adresa</span><span>Šlechtitelů 695/6, Holice, 783 71 Olomouc</span></div>
                  <div className="row"><span className="tag">Telefon</span><a href="tel:+420585570800">+420 585 570 800</a></div>
                  <div className="row"><span className="tag">E-mail</span><a href="mailto:trimex@trimex.cz">trimex@trimex.cz</a></div>
                  <div className="row"><span className="tag">IČ</span><span>25882996 · DIČ CZ25882996</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

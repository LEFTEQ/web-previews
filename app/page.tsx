import React from "react";

export default function Page() {
  return (
    <main className="cima">
      {/* HERO — technický list vozu, otevírá tím nejcharakterističtějším: silná technika */}
      <header className="hero">
        <div className="hero__frame">
          <div className="hero__bar">
            <span className="wordmark" aria-label="ČÍMA odpady s.r.o.">
              <span className="wordmark__cima">ČÍMA</span>
              <span className="wordmark__odpady">odpady</span>
            </span>
            <span className="hero__loc">Liberec · Růžodol</span>
          </div>

          <div className="hero__grid">
            <div className="hero__copy">
              <p className="eyebrow"><span className="eyebrow__dot" aria-hidden="true" />30 let na trhu · odpadové hospodářství</p>
              <h1 className="hero__title">
                Septik plný<br /> až po okraj?<br />
                <span className="hero__title--accent">Přijedeme dřív,<br /> než začne téct.</span>
              </h1>
              <p className="hero__lead">
                Odvoz fekálií, přistavení kontejnerů, tlakové čištění kanalizací i doprava
                štěrku a písku. Moderní flotila, která něco vydrží — Liberec, Jablonec,
                Chrastava, Hrádek, Turnov a celý Liberecký kraj.
              </p>
              <div className="hero__actions">
                <a className="btn btn--primary" href="tel:+420603503967">Zavolat 603 503 967</a>
                <a className="btn btn--ghost" href="mailto:info@cimaliberec.cz">Napsat poptávku</a>
              </div>
            </div>

            <figure className="hero__media">
              <img src="/hero.webp" alt="Fekální a kontejnerové vozidlo ČÍMA odpady při práci v terénu" loading="eager" />
              <figcaption className="hero__plate">
                <span className="hero__plate-label">Vůz ve službě</span>
                <span className="hero__plate-model">TATRA Phoenix Combo 12×2 · fekální</span>
              </figcaption>
            </figure>
          </div>

          {/* Odjezdový pás — technický, ne dekorativní: říká, co flotila umí */}
          <ul className="ticker" aria-label="Kapacity flotily">
            <li><span className="ticker__val">24/7</span><span className="ticker__lab">výjezd i o víkendu</span></li>
            <li><span className="ticker__val">6×6</span><span className="ticker__lab">terénní náhon</span></li>
            <li><span className="ticker__val">18 t</span><span className="ticker__lab">nosnost kontejnerů</span></li>
            <li><span className="ticker__val">EKO</span><span className="ticker__lab">likvidace dle zákona</span></li>
          </ul>
        </div>
      </header>

      {/* SLUŽBY — očíslované jako pracovní výkazy, protože jde o reálný sled zakázky */}
      <section className="services" aria-labelledby="services-h">
        <div className="section-head">
          <p className="eyebrow"><span className="eyebrow__dot" aria-hidden="true" />Katalog služeb</p>
          <h2 id="services-h" className="section-title">Co pro vás naložíme, odvezeme a vyčistíme</h2>
        </div>

        <div className="services__layout">
          <ol className="cards">
            <li className="card">
              <span className="card__no">01</span>
              <h3 className="card__title">Odvoz fekálií</h3>
              <p className="card__body">Vyvezení a likvidace odpadů ze septiků, žump i domovních čistíren. Možnost pravidelného vývozu bez starostí — stačí se přihlásit a máte klid.</p>
              <span className="card__tag">septik · žumpa · ČOV</span>
            </li>
            <li className="card">
              <span className="card__no">02</span>
              <h3 className="card__title">Kontejnery bez čekání</h3>
              <p className="card__body">Přistavíme, odvezeme a zlikvidujeme. Domovní odpad, stavební suť i čistá suť vhodná k recyklaci — cihly, beton, dlažba, asfalt, kámen.</p>
              <span className="card__tag">přistavení · odvoz</span>
            </li>
            <li className="card">
              <span className="card__no">03</span>
              <h3 className="card__title">Tlakové čištění kanalizací</h3>
              <p className="card__body">Kanalizace to nemá lehké — potrubí, žumpy, septiky, domovní ČOV. Recyklační vůz vyčistí i špatně dostupná místa.</p>
              <span className="card__tag">potrubí · kanalizace</span>
            </li>
            <li className="card">
              <span className="card__no">04</span>
              <h3 className="card__title">Štěrk, písek, kačírek, substrát</h3>
              <p className="card__body">Prodej a doprava sypkých i zahradních materiálů v Liberci a okolí. A sníh? Ten vám taky klidně odvezeme.</p>
              <span className="card__tag">stavba · zahrada</span>
            </li>
            <li className="card">
              <span className="card__no">05</span>
              <h3 className="card__title">Zemní a výkopové práce</h3>
              <p className="card__body">Příprava staveniště, vyhloubení základů, srovnání terénu kolem domu i odvoz a likvidace zeminy.</p>
              <span className="card__tag">výkop · terén</span>
            </li>
          </ol>

          <figure className="services__media">
            <img src="/section-1.webp" alt="Kontejnerové vozidlo ČÍMA odpady připravené k přistavení kontejneru" loading="lazy" />
            <figcaption>Přistavíme. Odvezeme. Bez zbytečných zádrhelů.</figcaption>
          </figure>
        </div>
      </section>

      {/* DŮVĚRA / TECHNIKA — flotila jako doklad výkonu */}
      <section className="trust" aria-labelledby="trust-h">
        <div className="trust__grid">
          <figure className="trust__media">
            <img src="/section-2.webp" alt="Těžká technika ČÍMA odpady na místě zakázky" loading="lazy" />
          </figure>

          <div className="trust__copy">
            <p className="eyebrow"><span className="eyebrow__dot" aria-hidden="true" />Naše flotila</p>
            <h2 id="trust-h" className="section-title">Síla uvnitř a technika bez řečí</h2>
            <p className="trust__lead">
              Máme silné stroje a ještě silnější odhodlání. Ať už jde o „pořádnou nálož“
              nebo deset tun materiálu na stavbu — dostanete to až na místo určení.
            </p>

            <ul className="fleet">
              <li className="fleet__row"><span className="fleet__model">TATRA 158 Phoenix</span><span className="fleet__spec">6×6 · kontejnerové</span></li>
              <li className="fleet__row"><span className="fleet__model">MAN TGM 18.340</span><span className="fleet__spec">4×4 · kontejnerové</span></li>
              <li className="fleet__row"><span className="fleet__model">MERCEDES Arocs</span><span className="fleet__spec">6×4 · kontejnerové</span></li>
              <li className="fleet__row"><span className="fleet__model">Kroll-Hellmers / MAN</span><span className="fleet__spec">6×4 · recyklační na čištění</span></li>
              <li className="fleet__row"><span className="fleet__model">DAF LF 19 FA</span><span className="fleet__spec">r.&nbsp;2019 · kontejnerové</span></li>
            </ul>

            <blockquote className="trust__quote">
              „Kdo nevyváží, ten se nediví.“ Zavolejte nebo napište — přijedeme dřív,
              než začne téct přes okraj.
            </blockquote>

            <dl className="trust__facts">
              <div><dt>Působíme</dt><dd>Liberec · Jablonec n. N. · Chrastava · Hrádek n. N. · Turnov</dd></div>
              <div><dt>Sídlo</dt><dd>Londýnská 10/99, 460 01 Liberec XI-Růžodol</dd></div>
              <div><dt>Objednávka</dt><dd>Rychle a přehledně v katalogu služeb, 24 hodin denně</dd></div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}

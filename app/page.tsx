import React from "react";

export default function Page() {
  return (
    <main className="kk">
      {/* HERO — postavené na půdorysu kuchyně, čte se jako plán na míru */}
      <header className="kk-hero">
        <nav className="kk-nav" aria-label="Hlavní navigace">
          <a className="kk-mark" href="#uvod" aria-label="Kuchyně KYPR, úvod">
            <span className="kk-mark-k">KYPR</span>
            <span className="kk-mark-sub">kuchyně &amp; interiéry · Plzeň</span>
          </a>
          <ul className="kk-nav-list">
            <li><a href="#nabidka">Nábytek na míru</a></li>
            <li><a href="#showroom">Showroom</a></li>
            <li><a className="kk-nav-cta" href="#showroom">Přijít do showroomu</a></li>
          </ul>
        </nav>

        <div className="kk-hero-grid" id="uvod">
          <div className="kk-hero-copy">
            <p className="kk-eyebrow">Truhlářský ateliér · Slovanská tř. 118</p>
            <h1 className="kk-h1">
              Kuchyně na míru<br/>
              <span className="kk-h1-line">od <em>K</em> až po <em>R</em>.</span>
            </h1>
            <p className="kk-lede">
              Navrhneme, vyrobíme a smontujeme celý interiér do vašeho
              plzeňského bytu i domu — kuchyň, ložnici, šatnu i dětský
              pokoj. Materiál, spoj i kování řešíme podle vašeho prostoru,
              ne podle katalogu.
            </p>
            <div className="kk-hero-actions">
              <a className="kk-btn" href="#showroom">Domluvit zaměření</a>
              <a className="kk-btn-ghost" href="#nabidka">Co vyrábíme</a>
            </div>
          </div>

          <figure className="kk-hero-fig">
            <img
              className="kk-hero-img"
              src="/hero.webp"
              width={1200}
              height={1500}
              alt="Kuchyně na míru z dílny Kuchyně KYPR — přední pohled na sestavu skříněk a pracovní desku"
            />
            <figcaption className="kk-hero-cap">
              <span>Realizace · Plzeň-Bory</span>
            </figcaption>
          </figure>
        </div>
      </header>

      {/* SEKCE 1 — nabídka jako seznam místností, které umíme vybavit */}
      <section className="kk-section" id="nabidka" aria-labelledby="nabidka-nadpis">
        <div className="kk-section-head">
          <p className="kk-eyebrow">Co vyrobíme</p>
          <h2 className="kk-h2" id="nabidka-nadpis">Vybavíme celý byt,<br/>ne jen kuchyň</h2>
        </div>

        <div className="kk-offer">
          <ul className="kk-rooms">
            <li><span className="kk-room-no">01</span><span className="kk-room-name">Kuchyně</span><span className="kk-room-note">jádro našeho řemesla</span></li>
            <li><span className="kk-room-no">02</span><span className="kk-room-name">Obývací pokoje</span><span className="kk-room-note">stěny, komody, TV sestavy</span></li>
            <li><span className="kk-room-no">03</span><span className="kk-room-name">Ložnice</span><span className="kk-room-note">postele, čela, noční stolky</span></li>
            <li><span className="kk-room-no">04</span><span className="kk-room-name">Šatní skříně</span><span className="kk-room-note">vestavěné do centimetru</span></li>
            <li><span className="kk-room-no">05</span><span className="kk-room-name">Jídelny</span><span className="kk-room-note">stoly, lavice, vitríny</span></li>
            <li><span className="kk-room-no">06</span><span className="kk-room-name">Dětské pokoje</span><span className="kk-room-note">rostou s dítětem</span></li>
            <li><span className="kk-room-no">07</span><span className="kk-room-name">Komerční prostory</span><span className="kk-room-note">recepce, kanceláře, provozovny</span></li>
          </ul>

          <figure className="kk-offer-fig">
            <img
              className="kk-offer-img"
              src="/section-1.webp"
              width={1000}
              height={1250}
              alt="Detail interiéru na míru — obývací sestava a úložné skříně navržené firmou Kuchyně KYPR"
            />
            <figcaption>Jeden ateliér, jeden rukopis — všechny místnosti ladí dohromady.</figcaption>
          </figure>
        </div>
      </section>

      {/* SEKCE 2 — důvěra: showroom, otevírací doba, jak to probíhá */}
      <section className="kk-section kk-section--trust" id="showroom" aria-labelledby="showroom-nadpis">
        <div className="kk-trust-grid">
          <figure className="kk-trust-fig">
            <img
              className="kk-trust-img"
              src="/section-2.webp"
              width={1000}
              height={1250}
              alt="Showroom Kuchyně KYPR ve Slovanské třídě v Plzni s vystavenými kuchyněmi"
            />
          </figure>

          <div className="kk-trust-copy">
            <p className="kk-eyebrow">Přijďte si to osahat</p>
            <h2 className="kk-h2" id="showroom-nadpis">Showroom<br/>ve Slovanské</h2>
            <p className="kk-lede">
              Vzorky dvířek, kování i pracovních desek nejlíp posoudíte
              naživo. Zastavte se — poradíme s dispozicí i rozpočtem
              a domluvíme bezplatné zaměření u vás doma.
            </p>

            <dl className="kk-contact">
              <div>
                <dt>Adresa</dt>
                <dd>Slovanská tř. 118<br/>326 00 Plzeň</dd>
              </div>
              <div>
                <dt>Otevřeno</dt>
                <dd>Po–Pá 10:00–17:00<br/>So kdykoliv po domluvě</dd>
              </div>
              <div>
                <dt>Telefon</dt>
                <dd><a href="tel:+420377455683">+420 377 455 683</a></dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd><a href="mailto:plzen@kuchynekypr.cz">plzen@kuchynekypr.cz</a></dd>
              </div>
            </dl>
          </div>
        </div>

        <ol className="kk-steps" aria-label="Jak spolupráce probíhá">
          <li><span className="kk-step-no">1</span><h3>Zaměření zdarma</h3><p>Přijedeme k vám, změříme prostor a probereme, jak ho chcete používat.</p></li>
          <li><span className="kk-step-no">2</span><h3>Návrh &amp; cena</h3><p>Ukážeme vizualizaci, vybereme materiály a dáme závaznou cenu bez překvapení.</p></li>
          <li><span className="kk-step-no">3</span><h3>Výroba v dílně</h3><p>Korpusy i dvířka vyrobíme na míru vašeho prostoru — do centimetru.</p></li>
          <li><span className="kk-step-no">4</span><h3>Montáž na místě</h3><p>Smontujeme, seřídíme a uklidíme. Vy jen otevřete první dvířka.</p></li>
        </ol>
      </section>
    </main>
  );
}

import React from "react";

export default function Page() {
  return (
    <main className="page">
      {/* HERO */}
      <header className="hero">
        <nav className="nav" aria-label="Hlavní navigace">
          <a className="wordmark" href="#top" aria-label="AM-MZ Investstavby, domů">
            <span className="wordmark__am">AM</span>
            <span className="wordmark__dot" aria-hidden="true">·</span>
            <span className="wordmark__mz">MZ</span>
            <span className="wordmark__sub">koupelny&nbsp;/&nbsp;Brno</span>
          </a>
          <div className="nav__links">
            <a href="#rekonstrukce">Rekonstrukce</a>
            <a href="#duvera">O nás</a>
            <a className="nav__phone" href="tel:+420773292803">+420&nbsp;773&nbsp;292&nbsp;803</a>
          </div>
        </nav>

        <div className="hero__grid" id="top">
          <div className="hero__text">
            <p className="eyebrow">Rekonstrukce koupelen na klíč · Brno a okolí</p>
            <h1 className="hero__title">
              Z&nbsp;jádra od&nbsp;<span className="hl">panelu</span><br />
              po&nbsp;<span className="hl">poslední spáru</span>.
            </h1>
            <p className="hero__lead">
              Vybouráme staré bytové jádro, předěláme rozvody vody i odpady, obložíme
              a předáme hotovou koupelnu, do které stačí pověsit ručník. Jeden tým,
              jeden termín, jedna faktura.
            </p>
            <div className="hero__cta">
              <a className="btn btn--solid" href="tel:+420773292803">Zavolat řemeslníkovi</a>
              <a className="btn btn--ghost" href="#rekonstrukce">Jak to probíhá</a>
            </div>
            <dl className="hero__facts">
              <div><dt>15+ let</dt><dd>u obkladaček a vany</dd></div>
              <div><dt>3–4 týdny</dt><dd>bytové jádro na klíč</dd></div>
              <div><dt>Zvonařka</dt><dd>zázemí v centru Brna</dd></div>
            </dl>
          </div>

          <figure className="hero__figure">
            <img
              src="/hero.webp"
              alt="Nově zrekonstruovaná koupelna s velkoformátovým obkladem, zděnou sprchou a moderní baterií"
              className="hero__img"
              width={720}
              height={900}
            />
            <figcaption className="hero__tag">
              <span className="hero__tag-num">01</span>
              Realizace bytového jádra, Brno-Žabovřesky
            </figcaption>
          </figure>
        </div>
      </header>

      {/* SEKCE 1 — CO DĚLÁME, jako fáze stavby */}
      <section className="work" id="rekonstrukce" aria-labelledby="work-title">
        <div className="work__head">
          <h2 id="work-title">Koupelna vzniká v&nbsp;pěti krocích</h2>
          <p>
            U rekonstrukce nejde o&nbsp;dlaždice, ale o&nbsp;pořadí. Tady je přesně to,
            co se u&nbsp;vás doma stane — a&nbsp;kdo za to ručí.
          </p>
        </div>

        <ol className="phases">
          <li className="phase">
            <span className="phase__num">01</span>
            <h3>Zaměření a&nbsp;rozpočet</h3>
            <p>
              Přijedeme k&nbsp;vám, změříme jádro i&nbsp;stoupačky a&nbsp;do tří dnů
              pošleme položkový rozpočet. Žádné „vyjde to během stavby“.
            </p>
          </li>
          <li className="phase">
            <span className="phase__num">02</span>
            <h3>Bourání jádra</h3>
            <p>
              Vybouráme umakartové nebo zděné jádro, odvezeme suť a&nbsp;chráníme byt
              i&nbsp;výtah před prachem. Sousedům dopředu oznámíme hlučné dny.
            </p>
          </li>
          <li className="phase">
            <span className="phase__num">03</span>
            <h3>Voda, odpad, elektrika</h3>
            <p>
              Nové rozvody vody a&nbsp;kanalizace, zásuvky u&nbsp;zrcadla, příprava pod
              podlahové topení. Vodaře i&nbsp;elektrikáře řešíme my, ne vy.
            </p>
          </li>
          <li className="phase">
            <span className="phase__num">04</span>
            <h3>Izolace a&nbsp;obklady</h3>
            <p>
              Hydroizolace ve&nbsp;sprchovém koutě, velkoformátový obklad, spárování
              na&nbsp;odstín. Rovina se&nbsp;kontroluje latí, ne&nbsp;od&nbsp;oka.
            </p>
          </li>
          <li className="phase">
            <span className="phase__num">05</span>
            <h3>Sanita a&nbsp;předání</h3>
            <p>
              Osadíme vanu, WC, umyvadlo a&nbsp;baterie, uklidíme a&nbsp;předáme čistou
              koupelnu s&nbsp;podklady k&nbsp;záruce. Do vany se&nbsp;stačí ponořit.
            </p>
          </li>
        </ol>

        <div className="work__note">
          <img
            src="/section-1.webp"
            alt="Detail kladení velkoformátového obkladu a spárování v rozestavěné koupelně"
            className="work__img"
            width={640}
            height={480}
          />
          <div className="work__note-text">
            <p className="eyebrow">Vše pod jednou střechou</p>
            <p>
              Kromě samotné koupelny zvládneme i&nbsp;navazující práce v&nbsp;bytě —
              sádrokartony, malby, pokládku podlah i&nbsp;drobné zednické úpravy.
              Nemusíte shánět pět firem, které si&nbsp;přehazují odpovědnost.
            </p>
            <a className="link-arrow" href="tel:+420773292803">
              Domluvit zaměření v&nbsp;Brně
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* SEKCE 2 — DŮVĚRA / O NÁS */}
      <section className="trust" id="duvera" aria-labelledby="trust-title">
        <div className="trust__grid">
          <figure className="trust__figure">
            <img
              src="/section-2.webp"
              alt="Dokončená světlá koupelna po rekonstrukci se sprchovým koutem a obkladem od podlahy ke stropu"
              className="trust__img"
              width={640}
              height={720}
            />
          </figure>

          <div className="trust__text">
            <h2 id="trust-title">Firma ze&nbsp;Zvonařky, ne&nbsp;call centrum</h2>
            <p className="trust__lead">
              AM-MZ Investstavby stavíme v&nbsp;Brně a&nbsp;okolí přes patnáct let.
              Domlouváte se&nbsp;přímo s&nbsp;lidmi, kteří pak stojí u&nbsp;vaší vany —
              ne&nbsp;s&nbsp;obchodníkem, který zmizí po&nbsp;podpisu smlouvy.
            </p>

            <ul className="promises">
              <li>
                <strong>Termín, který platí.</strong>
                Datum předání máte ve&nbsp;smlouvě. Když se&nbsp;objeví ztrouchnivělá
                stoupačka, řekneme to hned — ne&nbsp;týden před koncem.
              </li>
              <li>
                <strong>Pevná cena z&nbsp;rozpočtu.</strong>
                Fakturujeme podle položek, které jste odsouhlasili. Vícepráce jen
                s&nbsp;vaším písemným svolením.
              </li>
              <li>
                <strong>Zkušenost i&nbsp;v&nbsp;krizi.</strong>
                Po&nbsp;tornádu na&nbsp;jižní Moravě jsme v&nbsp;Hruškách zhotovili fasádu
                domu. Když je&nbsp;práce těžká, jsme u&nbsp;toho.
              </li>
            </ul>

            <div className="trust__contact">
              <a className="btn btn--solid" href="tel:+420773292803">
                +420&nbsp;773&nbsp;292&nbsp;803
              </a>
              <div className="trust__where">
                <span>Zvonařka 408/16, 617&nbsp;00 Brno</span>
                <a href="mailto:az.stav@post.cz">az.stav@post.cz</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

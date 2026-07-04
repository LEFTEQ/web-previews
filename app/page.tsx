import React from "react";

export const metadata = {
  title: "Parkhotel Plzeň — hotel u Borského parku",
  description:
    "Čtyřhvězdičkový hotel a kongresové centrum v Plzni u Borského parku. Pokoje, konference až pro 2000 lidí, restaurace a padel na dosah.",
};

export default function Page() {
  return (
    <main className="ph">
      {/* HERO */}
      <header className="ph-hero">
        <div className="ph-hero__frame">
          <img
            className="ph-hero__img"
            src="/hero.webp"
            alt="Parkhotel Plzeň s výhledem do zeleně Borského parku"
          />
          <div className="ph-hero__grad" aria-hidden="true" />
        </div>

        <nav className="ph-nav" aria-label="Hlavní">
          <a className="ph-mark" href="#" aria-label="Parkhotel Plzeň, domů">
            <span className="ph-mark__p">Park</span>
            <span className="ph-mark__h">hotel</span>
            <span className="ph-mark__loc">Plzeň · U Borského parku</span>
          </a>
          <ul className="ph-nav__links">
            <li><a href="#pobyt">Pobyt</a></li>
            <li><a href="#kongres">Kongresy</a></li>
            <li><a href="#o-nas">O hotelu</a></li>
          </ul>
        </nav>

        <div className="ph-hero__body">
          <p className="ph-kicker">Čtyři hvězdy · na okraji parku · pět minut tramvají do centra</p>
          <h1 className="ph-title">
            Spíte v&nbsp;lese,<br />
            snídáte ve&nbsp;městě.
          </h1>
          <p className="ph-lede">
            Parkhotel stojí přímo u&nbsp;Borského parku — ráno se probudíte do&nbsp;zeleně,
            v&nbsp;poledne jednáte v&nbsp;kongresovém sále a&nbsp;večer si zahrajete padel.
            Jeden dům pro dovolenou, obchodní cestu i&nbsp;kongres pro dva tisíce lidí.
          </p>

          {/* Rezervační pruh — hlavní cíl hero sekce */}
          <form className="ph-book" action="#" aria-label="Ověření dostupnosti">
            <div className="ph-book__field">
              <label htmlFor="prijezd">Příjezd</label>
              <input id="prijezd" name="prijezd" type="date" defaultValue="2025-07-04" />
            </div>
            <div className="ph-book__field">
              <label htmlFor="odjezd">Odjezd</label>
              <input id="odjezd" name="odjezd" type="date" defaultValue="2025-07-05" />
            </div>
            <div className="ph-book__field">
              <label htmlFor="hoste">Hosté</label>
              <select id="hoste" name="hoste" defaultValue="2">
                <option value="1">1 host</option>
                <option value="2">2 hosté</option>
                <option value="3">3 hosté</option>
                <option value="4">4 hosté</option>
              </select>
            </div>
            <button className="ph-book__btn" type="submit">Zjistit volné pokoje</button>
            <p className="ph-book__note">Záruka nejnižší ceny · rezervujete přímo u&nbsp;hotelu</p>
          </form>
        </div>
      </header>

      {/* SEKCE 1 — POBYT / NABÍDKA */}
      <section id="pobyt" className="ph-sec ph-sec--offer" aria-labelledby="pobyt-h">
        <div className="ph-sec__head">
          <p className="ph-eyebrow">Čtyři domy pod jednou střechou</p>
          <h2 id="pobyt-h" className="ph-h2">Co u&nbsp;nás najdete</h2>
        </div>

        <div className="ph-offer">
          <img
            className="ph-offer__img"
            src="/section-1.webp"
            alt="Interiér Parkhotelu Plzeň — pokoj a společné prostory"
          />
          <ul className="ph-list">
            <li className="ph-item">
              <span className="ph-item__tag">Bydlení</span>
              <h3>Pokoje s&nbsp;výhledem do&nbsp;parku</h3>
              <p>
                Klidné čtyřhvězdičkové pokoje na&nbsp;okraji města. Wi-Fi zdarma,
                ráno pořádná snídaně a&nbsp;pár kroků do&nbsp;lesa místo do&nbsp;rušné ulice.
              </p>
            </li>
            <li className="ph-item">
              <span className="ph-item__tag">Chuť</span>
              <h3>Restaurace a&nbsp;Lobby Bar</h3>
              <p>
                Kuchyně, na&nbsp;kterou se hosté vracejí, a&nbsp;Lobby Bar
                s&nbsp;nejlepší kávou v&nbsp;domě — na&nbsp;schůzku i&nbsp;na&nbsp;poslední skleničku.
              </p>
            </li>
            <li className="ph-item">
              <span className="ph-item__tag">Pohyb</span>
              <h3>Padel, tenis a&nbsp;relax</h3>
              <p>
                Zahrajte si padel nebo tenis kousek od&nbsp;recepce, pak vyrazte
                na&nbsp;procházku Borským parkem. Volný čas tu neztrácíte.
              </p>
            </li>
            <li className="ph-item">
              <span className="ph-item__tag">Klid v&nbsp;příjezdu</span>
              <h3>Zaparkujete i&nbsp;autobus</h3>
              <p>
                Vlastní parkoviště, nabíječka pro&nbsp;elektromobil i&nbsp;místo
                pro&nbsp;autobus. Pěšky v&nbsp;centru za&nbsp;15&nbsp;minut, tramvají za&nbsp;5.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* SEKCE 2 — KONGRESY / DŮVĚRA */}
      <section id="kongres" className="ph-sec ph-sec--trust" aria-labelledby="kongres-h">
        <div className="ph-trust">
          <div className="ph-trust__text">
            <p className="ph-eyebrow ph-eyebrow--light">Kongresové centrum</p>
            <h2 id="kongres-h" className="ph-h2 ph-h2--light">
              Jediné místo v&nbsp;západních Čechách,<br />kam jezdí celý svět
            </h2>
            <p className="ph-trust__lede">
              Od&nbsp;workshopu pro&nbsp;deset lidí po&nbsp;konferenci pro&nbsp;dva tisíce.
              Profesionální zázemí, catering z&nbsp;vlastní kuchyně a&nbsp;ubytování
              i&nbsp;parkování v&nbsp;jednom domě — účastníci nikam nepřejíždějí.
            </p>

            <dl className="ph-stats">
              <div className="ph-stat">
                <dt>Kapacita největšího sálu</dt>
                <dd>2000 <span>osob</span></dd>
              </div>
              <div className="ph-stat">
                <dt>Do&nbsp;centra Plzně tramvají</dt>
                <dd>5 <span>minut</span></dd>
              </div>
              <div className="ph-stat">
                <dt>Standard hotelu</dt>
                <dd>4 <span>hvězdy</span></dd>
              </div>
            </dl>
          </div>

          <img
            className="ph-trust__img"
            src="/section-2.webp"
            alt="Kongresový sál Parkhotelu Plzeň připravený na konferenci"
          />
        </div>

        <div className="ph-contact" id="o-nas">
          <p className="ph-contact__addr">U&nbsp;Borského parku 31, 301&nbsp;00 Plzeň</p>
          <p className="ph-contact__row">
            <a href="tel:+420378772909">+420 378 772 909</a>
            <span aria-hidden="true">·</span>
            <a href="mailto:rezervace@parkhotel-czech.eu">rezervace@parkhotel-czech.eu</a>
          </p>
        </div>
      </section>
    </main>
  );
}

import React from 'react'

export default function Page() {
  return (
    <main className="atr">
      {/* ——— HERO: dvůr a klíč ——— */}
      <header className="hero">
        <div className="hero__frame">
          <img
            className="hero__img"
            src="/hero.webp"
            alt="Uzamykatelný vnitřní dvůr penzionu Hotel Atrium v centru Pardubic"
          />
          <div className="hero__scrim" aria-hidden="true" />
        </div>

        <nav className="topbar" aria-label="Hlavní">
          <a className="mark" href="#" aria-label="Hotel Atrium Pardubice — domů">
            <span className="mark__a">Atrium</span>
            <span className="mark__loc">Pardubice · Smilova 343</span>
          </a>
          <ul className="topbar__links">
            <li><a href="#pokoje">Pokoje &amp; snídaně</a></li>
            <li><a href="#duvera">O penzionu</a></li>
            <li><a className="topbar__tel" href="tel:+420601595885">601&nbsp;595&nbsp;885</a></li>
          </ul>
        </nav>

        <div className="hero__body">
          <p className="kicker">Penzion s restaurací · klidná část centra Pardubic</p>
          <h1 className="hero__title">
            Klíč od pokoje<br />
            a klíč od dvora.
          </h1>
          <p className="hero__lead">
            Dvanáct pokojů a čtyři apartmány v uhlazeném domě ve Smilově ulici. Zaparkujete
            za zamčenou branou, snídani máte v ceně a recepce svítí od šesti ráno.
          </p>
          <div className="hero__cta">
            <a className="btn btn--solid" href="#pokoje">Rezervovat pokoj</a>
            <a className="btn btn--ghost" href="tel:+420601595885">Zavolat na recepci</a>
          </div>

          <dl className="keyring" aria-label="Co je v ceně">
            <div className="keyring__item">
              <dt>Snídaně</dt><dd>v ceně pokoje</dd>
            </div>
            <div className="keyring__item">
              <dt>Parkování ve dvoře</dt><dd>zdarma, za zámkem</dd>
            </div>
            <div className="keyring__item">
              <dt>Wi‑Fi</dt><dd>zdarma na celém domě</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* ——— SEKCE 1: Pokoje &amp; snídaně ——— */}
      <section id="pokoje" className="rooms" aria-labelledby="rooms-h">
        <div className="section-head">
          <p className="eyebrow">Ubytování</p>
          <h2 id="rooms-h" className="section-title">Šestnáct dveří,<br />za každými klid</h2>
          <p className="section-note">
            Moderně vybavené pokoje — LCD televize se satelitem, vlastní sprcha a WC.
            Vyberte si podle toho, jestli přijíždíte na noc nebo na týden.
          </p>
        </div>

        <div className="rooms__grid">
          <figure className="roomcard roomcard--wide">
            <img
              src="/section-1.webp"
              alt="Moderně zařízený pokoj v penzionu Atrium s LCD televizí a vlastní koupelnou"
            />
            <figcaption className="roomcard__cap">
              <span className="roomcard__tag">Pokoje · 12×</span>
              <p>Postel ustlaná, TV se satelitem, sprcha a WC na pokoji. Ráno se přesnídáte, aniž byste vyšli z domu.</p>
            </figcaption>
          </figure>

          <ol className="stay">
            <li className="stay__item">
              <span className="stay__no">01</span>
              <div>
                <h3>Pokoj na noc</h3>
                <p>Dvanáct pokojů pro klidný spánek uprostřed města. Snídaně a Wi‑Fi v ceně.</p>
              </div>
            </li>
            <li className="stay__item">
              <span className="stay__no">02</span>
              <div>
                <h3>Apartmán na týden</h3>
                <p>Čtyři apartmány s prostorem navíc — vhodné pro delší pracovní pobyt i rodinu.</p>
              </div>
            </li>
            <li className="stay__item">
              <span className="stay__no">03</span>
              <div>
                <h3>Auto za branou</h3>
                <p>Zaparkujete ve dvoře, který se na noc zamyká. Bez placení, bez hledání místa.</p>
              </div>
            </li>
          </ol>
        </div>

        <p className="reception">
          <span className="reception__dot" aria-hidden="true" />
          Recepce otevřena denně <strong>6:00–20:00</strong>. Přijíždíte později? Zavolejte předem na <a href="tel:+420601595885">601&nbsp;595&nbsp;885</a>.
        </p>
      </section>

      {/* ——— SEKCE 2: Důvěra / restaurace &amp; adresa ——— */}
      <section id="duvera" className="trust" aria-labelledby="trust-h">
        <div className="trust__media">
          <img
            src="/section-2.webp"
            alt="Restaurace penzionu Hotel Atrium v Pardubicích, prostřené stoly"
          />
        </div>

        <div className="trust__text">
          <p className="eyebrow">O penzionu &amp; restaurace</p>
          <h2 id="trust-h" className="section-title">
            Přátelské, vytříbené,<br />uhlazené — a v centru
          </h2>
          <p className="section-note">
            Rodinný penzion s restaurací ve Smilově ulici funguje od roku 2005. Sázíme na
            klid, čisté pokoje a to, že se u nás cítíte jako doma — jen s ustlaným.
          </p>

          <ul className="facts">
            <li><span>16</span> pokojů a apartmánů pod jednou střechou</li>
            <li><span>2005</span> se v Atriu poprvé ubytoval host</li>
            <li><span>0 Kč</span> za parkování, Wi‑Fi i snídani</li>
          </ul>

          <address className="contactcard">
            <p className="contactcard__name">Hotel Atrium Pardubice</p>
            <p>Smilova ul. 343, 530 02 Pardubice</p>
            <p>
              <a href="tel:+420601595885">+420 601 595 885</a>{' · '}
              <a href="mailto:info@hotelatrium.cz">info@hotelatrium.cz</a>
            </p>
          </address>
        </div>
      </section>
    </main>
  )
}

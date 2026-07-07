export default function Page() {
  const sluzby = [
    {
      cmyk: "C",
      nazev: "Velkoformát a tiskoviny",
      popis:
        "Vizitky, letáky, brožury i plakáty A0. Tiskneme digitálně, takže i jeden kus dává smysl. Návrh vám připravíme na míru — od data po hotový výtisk.",
    },
    {
      cmyk: "M",
      nazev: "Vazba diplomek a dokumentů",
      popis:
        "Bakalářky, diplomky, cestopisy i fotoknihy. Měkké i tvrdé desky, ražba na hřbet. Objednat vazbu jde online — vy jen donesete nebo pošlete PDF.",
    },
    {
      cmyk: "Y",
      nazev: "Rámování a paspartování",
      popis:
        "Fotografii, obraz nebo diplom zarámujeme a doplníme paspartou. Pro rychlá řešení máme euroklipy a klaprámy.",
    },
    {
      cmyk: "K",
      nazev: "Fotokalendáře a fotodárky",
      popis:
        "Z vašich snímků uděláme nástěnný nebo stolní kalendář. K tomu diáře, hrnky, textil, víno s fotkou i rodinné hry.",
    },
  ];

  return (
    <main className="mino">
      <header className="mino-nav" aria-label="Hlavní navigace">
        <a className="mino-mark" href="#" aria-label="MINO — Centrum digitálních služeb">
          <span className="mino-mark__reg">✗</span>
          <span className="mino-mark__name">MINO</span>
          <span className="mino-mark__sub">tiskárna · Ústí n. L.</span>
        </a>
        <nav className="mino-links">
          <a href="#sluzby">Služby</a>
          <a href="#duvera">Provozovna</a>
          <a className="mino-call" href="tel:+420603948517">603 948 517</a>
        </nav>
      </header>

      <section className="mino-hero">
        <div className="mino-hero__grid">
          <div className="mino-hero__text">
            <p className="mino-eyebrow">Centrum digitálních služeb · Kekulova 62</p>
            <h1 className="mino-h1">
              Vytiskneme<br />
              <span className="mino-h1__ink">jeden kus</span><br />
              i tisíc.
            </h1>
            <p className="mino-lede">
              Digitální tiskárna v centru Ústí nad Labem. Vizitky, diplomky do
              tvrdých desek, velkoformát, fotokalendáře — přijdete s daty,
              odcházíte s hotovou věcí v ruce.
            </p>
            <div className="mino-hero__cta">
              <a className="mino-btn" href="#sluzby">Co pro vás vytiskneme</a>
              <a className="mino-btn mino-btn--ghost" href="tel:+420603948517">
                Zavolat do tiskárny
              </a>
            </div>
            <dl className="mino-reg" aria-label="Soutiskové značky">
              <div><dt>C</dt><dd>azurová</dd></div>
              <div><dt>M</dt><dd>purpurová</dd></div>
              <div><dt>Y</dt><dd>žlutá</dd></div>
              <div><dt>K</dt><dd>černá</dd></div>
            </dl>
          </div>
          <figure className="mino-hero__img">
            <img
              src="/hero.webp"
              alt="Digitální tisk vyjíždějící z produkčního stroje v tiskárně MINO"
              loading="eager"
            />
            <figcaption>Produkční digitální tisk · Kekulova 1107/62</figcaption>
          </figure>
        </div>
      </section>

      <section className="mino-sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="mino-sec__head">
          <h2 id="sluzby-h" className="mino-h2">Čtyři barvy, čtyři služby</h2>
          <p className="mino-sec__note">
            Každý tisk vzniká ze čtyř barev soutisku — CMYK. Podle stejného
            klíče jsme rozdělili to, s čím k nám lidé chodí nejčastěji.
          </p>
        </div>
        <ul className="mino-cards">
          {sluzby.map((s) => (
            <li className={`mino-card mino-card--${s.cmyk.toLowerCase()}`} key={s.cmyk}>
              <span className="mino-card__chan" aria-hidden="true">{s.cmyk}</span>
              <h3 className="mino-card__h">{s.nazev}</h3>
              <p className="mino-card__p">{s.popis}</p>
            </li>
          ))}
        </ul>
        <figure className="mino-band">
          <img
            src="/section-1.webp"
            alt="Vzorník barev a čerstvé výtisky připravené k převzetí"
            loading="lazy"
          />
          <figcaption className="mino-band__cap">
            <strong>Nátisk zdarma.</strong> Než pustíme celý náklad, uvidíte
            zkušební výtisk a odsouhlasíte barvy.
          </figcaption>
        </figure>
      </section>

      <section className="mino-duvera" id="duvera" aria-labelledby="duvera-h">
        <div className="mino-duvera__grid">
          <figure className="mino-duvera__img">
            <img
              src="/section-2.webp"
              alt="Provozovna tiskárny MINO na Kekulově ulici v Ústí nad Labem"
              loading="lazy"
            />
          </figure>
          <div className="mino-duvera__text">
            <h2 id="duvera-h" className="mino-h2">Najdete nás v centru</h2>
            <p className="mino-sec__note">
              Za tiskárnou stojí Ing. Tomáš Mikulenka. Přijďte s daty na flashce
              nebo je pošlete e-mailem — poradíme s formátem, papírem i vazbou a
              řekneme rovnou, kdy si můžete přijít pro hotovou zakázku.
            </p>
            <dl className="mino-info">
              <div>
                <dt>Provozovna</dt>
                <dd>Centrum digitálních služeb MINO<br />Kekulova 1107/62<br />400 01 Ústí nad Labem</dd>
              </div>
              <div>
                <dt>Telefon</dt>
                <dd>
                  <a href="tel:+420603948517">603 948 517</a><br />
                  <a href="tel:+420474720154">474 720 154</a>
                </dd>
              </div>
              <div>
                <dt>Fakturace</dt>
                <dd>Ing. Tomáš Mikulenka<br />IČ 66075653 · DIČ CZ7809135345</dd>
              </div>
            </dl>
            <a className="mino-btn" href="tel:+420603948517">Domluvit zakázku telefonicky</a>
          </div>
        </div>
      </section>
    </main>
  );
}

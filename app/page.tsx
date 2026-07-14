export default function Page() {
  return (
    <>
      <header className="hero">
        <div className="hero-inner">
          <div className="wordmark" aria-label="Zednické práce Říha, Ostrava">
            <span className="wordmark-line1">ZEDNICKÉ</span>
            <span className="wordmark-line2">PRÁCE<span className="wordmark-dot">.</span></span>
            <span className="wordmark-sub">Pavel Říha — Ostrava</span>
          </div>

          <div className="hero-media">
            <img
              src="/hero.webp"
              alt="Rekonstrukce bytu v Ostravě — sádrokartonová konstrukce a řemeslné zpracování"
              className="hero-img"
            />
            <div className="hero-tag">
              <span className="hero-tag-num">01</span>
              <span>Bourání / hrubá stavba</span>
            </div>
          </div>

          <div className="hero-copy">
            <p className="eyebrow">Rekonstrukce bytů &amp; stavební práce — Ostrava a okolí</p>
            <h1>
              Byt po babičce,<br />
              <span className="accent-text">nebo hotový domov.</span>
            </h1>
            <p className="hero-lead">
              Sundáme starou omítku, srovnáme příčky, natáhneme sádrokarton a
              položíme podlahu tak, aby všechno sedělo na milimetr. Bez
              odhadů po telefonu — přijedeme, změříme, řekneme cenu.
            </p>
            <div className="hero-meta">
              <div className="meta-item">
                <span className="meta-label">Sídlo</span>
                <span className="meta-value">Cholevova 1448/9, Ostrava</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Na telefonu</span>
                <span className="meta-value">Po–Pá 7:00–17:00</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Volejte</span>
                <a className="meta-value meta-link" href="tel:+420777033703">+420 777 033 703</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="section services" aria-labelledby="sluzby-title">
        <div className="section-head">
          <p className="eyebrow eyebrow-dark">Co u vás uděláme</p>
          <h2 id="sluzby-title">Řemesla, která do rekonstrukce patří</h2>
          <p className="section-lead">
            Žádné „umíme všechno“. Tohle jsou práce, které opravdu děláme
            každý týden — a víme, v jakém pořadí na sebe navazují.
          </p>
        </div>

        <div className="services-grid">
          <ol className="services-list">
            <li className="service-row">
              <span className="service-num">01</span>
              <div className="service-body">
                <h3>Rekonstrukce bytu na klíč</h3>
                <p>
                  Od bourání jádra po předání s klíči. Domluvíme harmonogram,
                  objednáme materiál, koordinujeme řemesla — vy jen
                  rozhodujete o vzhledu.
                </p>
              </div>
            </li>
            <li className="service-row">
              <span className="service-num">02</span>
              <div className="service-body">
                <h3>Sádrokartonové konstrukce</h3>
                <p>
                  Podhledy, příčky, předstěny na instalace, šikminy v podkroví.
                  Rovné hrany a přiznané spáry bez vlnění — základ, na kterém
                  stojí každý dobrý malířský nátěr.
                </p>
              </div>
            </li>
            <li className="service-row">
              <span className="service-num">03</span>
              <div className="service-body">
                <h3>Obkladačské práce</h3>
                <p>
                  Koupelny, kuchyňské linky, balkony. Spádování, hydroizolace
                  pod dlažbou a přesné řezy kolem rohů a odpadů — tam, kde
                  amatérská práce nejvíc protéká.
                </p>
              </div>
            </li>
            <li className="service-row">
              <span className="service-num">04</span>
              <div className="service-body">
                <h3>Podlahy</h3>
                <p>
                  Vyrovnání podkladu, plovoucí podlahy i lepené vinyly.
                  Necháme materiál aklimatizovat v bytě, aby nepracoval po
                  položení.
                </p>
              </div>
            </li>
            <li className="service-row">
              <span className="service-num">05</span>
              <div className="service-body">
                <h3>Malování</h3>
                <p>
                  Penetrace, dvě vrstvy, ostré hrany u stropu a lišt.
                  Poslední krok, který rozhodne, jak byt bude vypadat příští
                  desetiletí.
                </p>
              </div>
            </li>
          </ol>

          <figure className="services-figure">
            <img
              src="/section-1.webp"
              alt="Detail obkladačských a sádrokartonových prací při rekonstrukci bytu"
            />
            <figcaption>Koupelna, Ostrava-Poruba — obklad a předstěna instalace</figcaption>
          </figure>
        </div>
      </section>

      <section className="section trust" aria-labelledby="trust-title">
        <div className="trust-grid">
          <figure className="trust-figure">
            <img
              src="/section-2.webp"
              alt="Hotová rekonstrukce bytu — podlaha a vymalovaný interiér"
            />
          </figure>

          <div className="trust-copy">
            <p className="eyebrow eyebrow-dark">Proč zrovna my</p>
            <h2 id="trust-title">Patnáct let stejné party na place</h2>
            <p className="section-lead">
              Pavel Říha a jeho tým dělají stavební a rekonstrukční práce v
              Ostravě dlouhodobě — bez střídání subdodavatelů uprostřed
              zakázky.
            </p>

            <ul className="trust-points">
              <li>
                <span className="trust-mark" aria-hidden="true">✓</span>
                <div>
                  <strong>Jeden tým od bourání po malování</strong>
                  <span>Nepředáváte zakázku mezi třemi firmami — odpovědnost máme my.</span>
                </div>
              </li>
              <li>
                <span className="trust-mark" aria-hidden="true">✓</span>
                <div>
                  <strong>Přesná cena předem</strong>
                  <span>Po prohlídce bytu dostanete rozpis prací a materiálu, ne odhad od oka.</span>
                </div>
              </li>
              <li>
                <span className="trust-mark" aria-hidden="true">✓</span>
                <div>
                  <strong>Úklid staveniště po sobě</strong>
                  <span>Byt předáváme zametený a bez sutě ve výtahu.</span>
                </div>
              </li>
            </ul>

            <div className="trust-contact">
              <div>
                <span className="meta-label">Adresa provozovny</span>
                <span className="meta-value">Cholevova 1448/9, Ostrava 700 30</span>
              </div>
              <div>
                <span className="meta-label">E-mail</span>
                <a className="meta-value meta-link" href="mailto:stavby3@email.cz">stavby3@email.cz</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

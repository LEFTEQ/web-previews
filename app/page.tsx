export default function Page() {
  return (
    <main id="top" className="page">
      <header className="site">
        <a className="brand" href="#top" aria-label="RIA Reality, a.s. — úvod">
          <span className="plate plate--brand">RIA</span>
          <span className="brand-word">
            Reality<em>a.s.</em>
          </span>
        </a>
        <nav className="site-nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#o-nas">O nás</a>
          <a className="nav-loc" href="#o-nas">Liberecký kraj</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-text">
          <p className="eyebrow rise d1">Liberecký kraj · správa nemovitostí od roku 1990</p>
          <h1 id="hero-title" className="rise d2">
            Žijte.<br />
            <span className="h1-em">My se staráme o dům.</span>
          </h1>
          <p className="lede rise d3">
            Rodinná správcovská a realitní kancelář z Liberecka. Vedeme účetnictví, hlídáme
            revize, řešíme havárie i vzdálenou správu — a vy máte od domu klid. Nemovitost
            navíc prodáme nebo pronajmeme za férovou cenu. Už 34 let.
          </p>
          <div className="hero-cta rise d4">
            <a className="btn" href="#sluzby">Chci nabídku</a>
            <a className="btn-ghost" href="#sluzby">Naše služby</a>
          </div>
          <ul className="hero-facts rise d5">
            <li className="plate plate--fact">
              <span className="fact-num">34</span>
              <span className="fact-lbl">let na trhu</span>
            </li>
            <li className="plate plate--fact">
              <span className="fact-num">72</span>
              <span className="fact-lbl">spravovaných domů</span>
            </li>
            <li className="plate plate--fact">
              <span className="fact-num">1&nbsp;500</span>
              <span className="fact-lbl">bytových jednotek</span>
            </li>
          </ul>
        </div>
        <figure className="hero-media rise d3">
          <img
            src="/hero.webp"
            alt="Bytový dům ve správě RIA Reality na Liberecku"
            width={900}
            height={1100}
            loading="eager"
          />
          <figcaption className="plate plate--caption">Správa domů na Liberecku</figcaption>
        </figure>
      </section>

      <section className="services" id="sluzby" aria-labelledby="sluzby-title">
        <div className="wrap">
          <header className="sec-head reveal">
            <p className="eyebrow eyebrow--yellow">Rejstřík služeb · 01–03</p>
            <h2 id="sluzby-title">Co pro vás děláme</h2>
            <p className="sec-sub">
              Tři obory pod jednou střechou. Ať potřebujete správce domu, prodej bytu nebo
              férový odhad ceny — vyřídíte to na jedné adrese.
            </p>
          </header>

          <ol className="register">
            <li className="reg-item reveal">
              <span className="plate plate--num">01</span>
              <div className="reg-body">
                <h3>Správa nemovitostí</h3>
                <p>
                  Ekonomická, administrativní i technická správa domů a bytů. Vedeme
                  účetnictví, hlídáme revize a lhůty, řešíme havárie i běžnou údržbu. Domy na
                  dálku zvládneme přes vzdálenou správu.
                </p>
                <ul className="reg-tags">
                  <li>Ekonomická správa</li>
                  <li>Vedení účetnictví</li>
                  <li>Technická správa</li>
                  <li>Vzdálená správa</li>
                  <li>Havárie a revize</li>
                </ul>
              </div>
            </li>

            <li className="reg-item reveal">
              <span className="plate plate--num">02</span>
              <div className="reg-body">
                <h3>Prodej a pronájem</h3>
                <p>
                  Kompletní realitní servis při prodeji, koupi i pronájmu — od nafocení a
                  inzerce přes prohlídky a smlouvy až po předání klíčů. Pracujeme rychle,
                  s důrazem na kvalitu, a jsme vždy o krok napřed.
                </p>
                <ul className="reg-tags">
                  <li>Byty a domy</li>
                  <li>Komerční prostory</li>
                  <li>Kompletní smluvní servis</li>
                </ul>
              </div>
            </li>

            <li className="reg-item reveal">
              <span className="plate plate--num">03</span>
              <div className="reg-body">
                <h3>Oceňování nemovitostí</h3>
                <p>
                  Odhad tržní ceny, který odráží skutečnou hodnotu na trhu — ne cenu od stolu.
                  Využijete ho při rozhodování o prodeji či koupi i při vyřizování úvěru
                  v bance.
                </p>
                <ul className="reg-tags">
                  <li>Odhad obvyklé ceny</li>
                  <li>Podklad pro hypotéku</li>
                  <li>Člen ČKOM</li>
                </ul>
              </div>
            </li>
          </ol>

          <figure className="services-media reveal">
            <img
              src="/section-1.webp"
              alt="Práce správce nemovitostí — evidence a technická správa domu"
              width={1200}
              height={620}
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      <section className="about" id="o-nas" aria-labelledby="onas-title">
        <div className="wrap about-grid">
          <div className="about-text reveal">
            <p className="eyebrow">O nás · od roku 1990</p>
            <h2 id="onas-title">Spravujeme domy jako vlastní</h2>
            <p>
              RIA vznikla v roce 1990 jako ryze česká rodinná firma a v roce 1999 se
              transformovala na akciovou společnost. Stáli jsme u zrodu Asociace realitních
              kanceláří České republiky.
            </p>
            <p>
              Na Liberecku i v Praze se staráme o komerční i bytové domy. Klademe důraz na
              komunikaci, spolehlivost a klid, který od správce právem čekáte — proto k nám
              klienti zůstávají roky.
            </p>
            <ul className="why">
              <li><span>·</span> Rodinná firma se stabilním týmem</li>
              <li><span>·</span> U zrodu ARK ČR</li>
              <li><span>·</span> Liberec · Jablonec nad Nisou · Praha</li>
            </ul>
          </div>

          <figure className="about-media reveal">
            <img
              src="/section-2.webp"
              alt="Tým RIA Reality při správě nemovitostí v Libereckém kraji"
              width={900}
              height={760}
              loading="lazy"
            />
          </figure>
        </div>

        <div className="wrap">
          <ul className="proof reveal" aria-label="Čísla, kterými se můžeme pochlubit">
            <li className="plate plate--proof">
              <span className="proof-num">72</span>
              <span className="proof-lbl">spravovaných domů</span>
            </li>
            <li className="plate plate--proof">
              <span className="proof-num">1&nbsp;500</span>
              <span className="proof-lbl">bytových jednotek</span>
            </li>
            <li className="plate plate--proof">
              <span className="proof-num">4&nbsp;500</span>
              <span className="proof-lbl">prodaných nemovitostí</span>
            </li>
            <li className="plate plate--proof">
              <span className="proof-num">9&nbsp;000</span>
              <span className="proof-lbl">pronajatých nemovitostí</span>
            </li>
            <li className="plate plate--proof">
              <span className="proof-num">34</span>
              <span className="proof-lbl">let zkušeností</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

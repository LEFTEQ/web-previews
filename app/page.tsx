export default function Page() {
  const vykup = [
    {
      no: "01",
      title: "Výkup mincí a celých sbírek",
      desc: "Přineste jednu minci i pozůstalost po sběrateli. Oceníme na místě, poctivě podle katalogu a aktuálního trhu.",
      meta: "Ocenění zdarma",
    },
    {
      no: "02",
      title: "Výkup zlata a stříbra",
      desc: "Slitky, investiční mince i staré šperky. Vážíme na cejchované váze před vámi, cena podle denního fixingu.",
      meta: "Denní kurz",
    },
    {
      no: "03",
      title: "Investiční zlato a stříbro",
      desc: "Dukáty, Wiener Philharmoniker, slitky i svatováclavské ražby ČNB. Uložte hodnotu do kovu, který přežil každou měnu.",
      meta: "Skladem v Olomouci",
    },
    {
      no: "04",
      title: "Certifikace NGC",
      desc: "Zprostředkujeme profesionální grading a zapouzdření vzácných mincí u americké společnosti NGC — kvůli pravosti i hodnotě.",
      meta: "Grading + slab",
    },
    {
      no: "05",
      title: "Zastupování na aukcích",
      desc: "Po domluvě dražíme za vás na tuzemských i zahraničních aukcích, nebo prodej zprostředkujeme s předem danou provizí.",
      meta: "ČR i zahraničí",
    },
  ];

  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <a className="wordmark" href="#" aria-label="Numismatika Olomouc, hlavní strana">
            <span className="coin" aria-hidden="true" />
            <span>Est.</span>
            Numismatika <b>Olomouc</b>
          </a>
          <nav className="topnav" aria-label="Hlavní">
            <a href="#vykup">Výkup</a>
            <a href="#vykup">Investiční kovy</a>
            <a href="#onas">Certifikace NGC</a>
            <a href="#onas">Prodejna Panská 4</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrap">
            <div className="hero-grid">
              <div className="reveal d1">
                <p className="hero-eyebrow">Klenotnictví &amp; numismatika · Panská 4, Olomouc</p>
                <h1>
                  Každá mince <em>má svůj</em> příběh a svou cenu.
                </h1>
                <p className="hero-lede">
                  Vykupujeme, oceňujeme a prodáváme mince, medaile, zlato a stříbro.
                  Od svatováclavského dukátu po ražby Františka Josefa I. — přineste je
                  na Panskou, podíváme se na ně společně.
                </p>
                <div className="hero-cta">
                  <a className="btn btn-primary" href="#vykup">Nechat ocenit sbírku</a>
                  <a className="btn btn-ghost" href="#onas">Najít prodejnu</a>
                </div>

                <dl className="assay">
                  <div>
                    <dt>Ryzost</dt>
                    <dd>Au 999,9<small>Investiční zlato i stříbro</small></dd>
                  </div>
                  <div>
                    <dt>Vážíme před vámi</dt>
                    <dd>0,01 g<small>Cejchovaná váha</small></dd>
                  </div>
                  <div>
                    <dt>Katalog i trh</dt>
                    <dd>1526→<small>Ražby od grošů po dnešek</small></dd>
                  </div>
                </dl>
              </div>

              <figure className="hero-figure reveal d2">
                <img
                  src="/hero.webp"
                  alt="Sbírka historických zlatých a stříbrných mincí a medailí na tmavém podkladu"
                />
                <figcaption className="hero-tag">
                  <b>Dukát 1915</b> · František Josef I. · Au 986/1000 · 3,49 g
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section" id="vykup">
          <div className="wrap">
            <div className="section-head">
              <h2>
                Co pro vás <em>uděláme</em>
              </h2>
              <p className="section-kicker">Pět služeb · jedna prodejna</p>
            </div>

            <div className="ledger">
              {vykup.map((r, i) => (
                <div className={`row reveal d${(i % 4) + 1}`} key={r.no}>
                  <div className="row-no">{r.no}</div>
                  <div className="row-title">{r.title}</div>
                  <div className="row-desc">{r.desc}</div>
                  <div className="row-meta">{r.meta}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="onas">
          <div className="wrap">
            <div className="section-head">
              <h2>
                Sedmdesát let <em>zkušeností</em> na jedné adrese
              </h2>
              <p className="section-kicker">O nás · Olomouc</p>
            </div>

            <div className="about-grid">
              <figure className="about-figure reveal d1">
                <img
                  src="/section-1.webp"
                  alt="Detail zlaté a stříbrné mince v ruce numismatika při oceňování"
                />
                <figcaption>Ocenění probíhá na místě — pod lupou i na váze.</figcaption>
              </figure>

              <div className="about-body reveal d2">
                <p>
                  Ke každé minci přistupujeme jako ke svědkovi doby — poznáme, kde
                  byla ražena, čím prošla a co doopravdy znamená pro sbírku i pro vaši peněženku.
                </p>
                <p>
                  Numismatika Olomouc nabízí kompletní služby: prodej mincí, zlatých
                  ražeb, medailí a sběratelských potřeb, výkup zlata, stříbra a celých
                  sbírek i poradenství pro začínající i pokročilé sběratele. Rádi vám
                  poradíme, ať máte v ruce oběžnou dvoukorunu, nebo habsburskou ražbu.
                </p>
                <p>
                  Vzácnější kusy necháme oficiálně ohodnotit a zapouzdřit u NGC a po
                  dohodě vás zastoupíme na tuzemských i zahraničních aukcích.
                </p>

                <dl className="pillars">
                  <div>
                    <dt>Ocenění</dt>
                    <dd>Zdarma a bez závazku</dd>
                  </div>
                  <div>
                    <dt>Výplata</dt>
                    <dd>Hotově ihned</dd>
                  </div>
                  <div>
                    <dt>Certifikace</dt>
                    <dd>Grading NGC na klíč</dd>
                  </div>
                  <div>
                    <dt>Zaměření</dt>
                    <dd>Ražby ČSR, ČR i Rakousko-Uhersko</dd>
                  </div>
                </dl>

                <div className="prov">
                  <span>Prodejna: <b>Panská 175/4, Olomouc</b></span>
                  <span>Otevřeno <b>Po–Pá</b></span>
                  <span>Osobní návštěva vítána</span>
                </div>
              </div>
            </div>

            <figure className="about-figure reveal d3" style={{ marginTop: "48px" }}>
              <img
                src="/section-2.webp"
                alt="Vitrína prodejny Numismatika Olomouc s vystavenými mincemi a medailemi"
              />
              <figcaption>Prodejna na Panské — kde si mince můžete prohlédnout naživo.</figcaption>
            </figure>
          </div>
        </section>
      </main>
    </>
  );
}

import type { CSSProperties } from "react";

export default function Page() {
  const obory = [
    {
      key: "kytara",
      cislo: "I",
      nazev: "Kytara — klasická, elektrická, basová",
      popis:
        "Naše srdcová záležitost. Od prvních akordů na klasiku až po sólové party na elektriku a groove na basu. Každý rok pořádáme vlastní kytarovou soutěž Strunárium.",
      detail: "Individuální výuka · vlastní zkušebna · zapůjčení nástroje",
    },
    {
      key: "klavir",
      cislo: "II",
      nazev: "Klavír a keyboard",
      popis:
        "Základ hudebního myšlení. Učíme číst noty, hrát podle sluchu i doprovázet zpěv — tak, aby dítě u nástroje vydrželo a bavilo ho to.",
      detail: "Individuální výuka · klasika i moderna",
    },
    {
      key: "zpev",
      cislo: "III",
      nazev: "Zpěv a hlasová výchova",
      popis:
        "Práce s dechem, intonací a odvahou postavit se před lidi. Sólově i ve sboru, s klidem a bez zbytečného tlaku.",
      detail: "Individuální výuka · pěvecké večírky",
    },
    {
      key: "fletna",
      cislo: "IV",
      nazev: "Flétna a akordeon",
      popis:
        "Dechové nástroje a akordeon pro ty, kdo chtějí hrát ve školních souborech a na místních akcích v jižních Čechách.",
      detail: "Individuální výuka · souborová hra",
    },
  ];

  const terminy = [
    { od: "30. 6.", doo: "10. 7." },
    { od: "20. 7.", doo: "31. 7." },
    { od: "27. 8.", doo: "31. 8." },
  ];

  return (
    <main className="pg">
      <a className="skip" href="#obsah">
        Přeskočit na obsah
      </a>

      <header className="top">
        <div className="wrap top-in">
          <a className="mark" href="#" aria-label="První soukromá ZUŠ, České Budějovice">
            <span className="mark-strings" aria-hidden="true">
              <i /> <i /> <i /> <i /> <i /> <i />
            </span>
            <span className="mark-txt">
              <span className="mark-1">První&nbsp;soukromá</span>
              <span className="mark-2">ZUŠ</span>
              <span className="mark-3">České&nbsp;Budějovice</span>
            </span>
          </a>
          <nav className="nav" aria-label="Hlavní">
            <a href="#obory">Obory</a>
            <a href="#zapisy">Zápisy</a>
            <a href="#onas">O škole</a>
            <a className="nav-cta" href="#zapisy">
              Zapsat dítě
            </a>
          </nav>
        </div>
      </header>

      <section className="hero" id="obsah">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Žáci naší školy při hře na kytaru"
            className="hero-img"
            width={1600}
            height={1000}
          />
          <div className="hero-veil" aria-hidden="true" />
        </div>

        <div className="wrap hero-in">
          <p className="eyebrow">Soukromá základní umělecká škola · od prvních akordů</p>
          <h1 className="hero-h">
            <span className="hh-1">Šest strun,</span>
            <span className="hh-2">jeden ročník,</span>
            <span className="hh-3">celý život s&nbsp;hudbou.</span>
          </h1>
          <p className="hero-lead">
            Učíme děti i dospělé v&nbsp;Českých Budějovicích hrát na kytaru,
            klavír, dechové nástroje a zpívat — s&nbsp;důrazem na radost, ne na
            drezuru. Kdo od nás odejde, hraje si doma, v&nbsp;kapele i&nbsp;pro
            radost.
          </p>
          <div className="hero-cta">
            <a className="btn btn-solid" href="#zapisy">
              Zapsat dítě na rok 2025/2026
            </a>
            <a className="btn btn-ghost" href="#obory">
              Prohlédnout obory
            </a>
          </div>

          <dl className="hero-facts">
            <div>
              <dt>Kde</dt>
              <dd>Klavíkova 9, České Budějovice</dd>
            </div>
            <div>
              <dt>Vlastní soutěž</dt>
              <dd>Strunárium — kytary z&nbsp;celých jižních Čech</dd>
            </div>
            <div>
              <dt>Výuka</dt>
              <dd>Individuální, s&nbsp;možností zapůjčit nástroj</dd>
            </div>
          </dl>
        </div>

        <div className="tuner" aria-hidden="true">
          <span>E</span>
          <span>A</span>
          <span>D</span>
          <span>G</span>
          <span>H</span>
          <span>E</span>
        </div>
      </section>

      <section className="obory" id="obory">
        <div className="wrap">
          <header className="sec-head">
            <p className="sec-eyebrow">Co u nás můžete studovat</p>
            <h2 className="sec-h">Čtyři cesty, jak se u&nbsp;nás dostat k&nbsp;nástroji</h2>
            <p className="sec-lead">
              Vybíráte pro dítě první nástroj, nebo se chcete po letech vrátit
              k&nbsp;hraní? U&nbsp;každého oboru učí konkrétní člověk, ne rozvrh.
            </p>
          </header>

          <div className="media-row">
            <img
              src="/section-1.webp"
              alt="Z výuky v naší hudební škole"
              className="media-img"
              width={1200}
              height={800}
            />
            <div className="media-note">
              <p className="quote">
                „Cílem naší školy je vychovávat hlavně amatérské hudebníky —
                lidi, kteří si zahrají v&nbsp;místních souborech nebo budou chodit
                na koncerty.“
              </p>
              <p className="quote-src">Z&nbsp;našeho pedagogického krédo</p>
            </div>
          </div>

          <ol className="grid">
            {obory.map((o) => (
              <li className="card" key={o.key}>
                <span className="card-num" aria-hidden="true">
                  {o.cislo}
                </span>
                <h3 className="card-h">{o.nazev}</h3>
                <p className="card-p">{o.popis}</p>
                <p className="card-detail">{o.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="onas" id="onas">
        <div className="wrap onas-in">
          <div className="onas-txt">
            <p className="sec-eyebrow light">Zápisy &amp; kancelář</p>
            <h2 className="sec-h light">Přijďte se domluvit. I&nbsp;přes prázdniny.</h2>
            <p className="sec-lead light">
              U&nbsp;nás tradičně fungujeme celé léto. Kdo v&nbsp;červnu nestihl
              nahlásit pokračování studia a zaplatit zálohu na další rok, může se
              stavit v&nbsp;kanceláři na&nbsp;Klavíkově&nbsp;9. Rádi přivítáme
              i&nbsp;nové zájemce — vše potřebné vám na místě vysvětlíme.
            </p>

            <div className="hours" role="table" aria-label="Prázdninová otevírací doba kanceláře">
              <p className="hours-cap">Prázdninová otevírací doba, vždy 9:00–13:00</p>
              <ul className="hours-list">
                {terminy.map((t) => (
                  <li key={t.od}>
                    <span className="hours-range">
                      {t.od}&nbsp;–&nbsp;{t.doo}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pill" id="zapisy">
              <span className="pill-dot" aria-hidden="true" />
              <span>
                <strong>Strunárium 2026:</strong> letos se zúčastnilo 17 žáků
                z&nbsp;celých jižních Čech i&nbsp;Vysočiny. Naši tři zástupci si
                odnesli zlaté, stříbrné i&nbsp;bronzové pásmo.
              </span>
            </div>
          </div>

          <figure className="onas-fig">
            <img
              src="/section-2.webp"
              alt="Momentka z koncertu žáků naší školy"
              className="onas-img"
              width={1000}
              height={1200}
            />
            <figcaption>
              ZUŠ má být pro děti nejen místem k&nbsp;učení, ale hlavně
              k&nbsp;zábavě a radosti.
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}

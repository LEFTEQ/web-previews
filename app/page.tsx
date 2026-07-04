export default function Page() {
  const trades = [
    {
      code: "PLYN",
      title: "Plynoinstalace",
      desc: "Rozvody plynu s oprávněním ITI Praha, připojení kotlů a spotřebičů, revize a zkoušky těsnosti. Práce podepsané svářeči s platnými průkazy.",
    },
    {
      code: "TOP",
      title: "Topení",
      desc: "Kompletní otopné soustavy od kotelny po poslední radiátor. Vícevrstvé trubky, lisované spoje, moderní systémy rozvodů.",
    },
    {
      code: "VODA",
      title: "Zdravotní instalace",
      desc: "Rozvody vody a odpadů, koupelny a technické zázemí. Návaznost na topení a plyn řešíme pod jednou střechou.",
    },
  ];

  const scope = [
    "Vložkování komínů a odkouření kotlů",
    "Měření a regulace (MaR)",
    "Stavební a zemní práce",
    "Tepelné izolace a nátěry",
    "Projekty ke stavebnímu řízení",
  ];

  return (
    <main className="pi-main">
      <header className="pi-topbar">
        <a className="pi-wordmark" href="#" aria-label="Plynoinstalace, České Budějovice">
          <span className="pi-wordmark-flame" aria-hidden="true" />
          <span className="pi-wordmark-text">
            Plyno<span className="pi-wordmark-thin">instalace</span>
          </span>
        </a>
        <a className="pi-topcall" href="tel:+420721978077">+420 721 978 077</a>
      </header>

      <section className="pi-hero">
        <div className="pi-hero-media">
          <img
            src="/hero.webp"
            alt="Montér Plynoinstalace při práci na rozvodech plynu a topení"
            className="pi-hero-img"
          />
        </div>
        <div className="pi-hero-body">
          <p className="pi-eyebrow">
            <span className="pi-eyebrow-mark">°C</span>
            České Budějovice · od roku 1993
          </p>
          <h1 className="pi-hero-title">
            Plyn, voda a topení,
            <br />
            <em>položené pořádně.</em>
          </h1>
          <p className="pi-hero-lead">
            Od kotelny po poslední radiátor děláme celou soustavu vlastními
            lidmi. Dva montéři, jeden vůz, jedna parta — a spoj, který drží.
          </p>
          <div className="pi-hero-actions">
            <a className="pi-btn pi-btn-primary" href="tel:+420721978077">
              Zavolat 721 978 077
            </a>
            <a className="pi-btn pi-btn-ghost" href="mailto:info@plynoinstalace.cz">
              Napsat poptávku
            </a>
          </div>

          <dl className="pi-gauges">
            <div className="pi-gauge">
              <dt>Ve vlastní režii</dt>
              <dd>~20 montérů</dd>
            </div>
            <div className="pi-gauge">
              <dt>Na trhu</dt>
              <dd>30+ let</dd>
            </div>
            <div className="pi-gauge">
              <dt>Oprávnění</dt>
              <dd>ITI Praha</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="pi-trades" aria-labelledby="trades-h">
        <div className="pi-section-head">
          <p className="pi-eyebrow">Tři obory pod jednou střechou</p>
          <h2 id="trades-h" className="pi-section-title">
            Co u nás zapojíme
          </h2>
        </div>

        <ul className="pi-trade-list">
          {trades.map((t) => (
            <li key={t.code} className="pi-trade">
              <span className="pi-trade-code" aria-hidden="true">
                {t.code}
              </span>
              <div className="pi-trade-copy">
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="pi-scope">
          <img
            src="/section-1.webp"
            alt="Dílna a strojní vybavení firmy Plynoinstalace"
            className="pi-scope-img"
          />
          <div className="pi-scope-copy">
            <p className="pi-eyebrow">Navazující práce zajistíme</p>
            <h3 className="pi-scope-title">
              Nemusíte shánět pět firem.
            </h3>
            <p className="pi-scope-lead">
              Zednění, komín, izolace i projekt pro stavební úřad řešíme přes
              prověřené spolupracující firmy. Vy máte jednoho partnera a jeden
              termín.
            </p>
            <ul className="pi-scope-tags">
              {scope.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="pi-trust" aria-labelledby="trust-h">
        <div className="pi-trust-inner">
          <div className="pi-trust-copy">
            <p className="pi-eyebrow">O firmě</p>
            <h2 id="trust-h" className="pi-trust-title">
              Rodinná provozovna
              <br />v Nemanicích.
            </h2>
            <p className="pi-trust-lead">
              Sídlíme ve vlastním areálu se sklady, dílnami a strojním
              vybavením. Zakázky děláme svými pracovníky — ne subdodavateli,
              které nikdy neuvidíte. Montéři jezdí ve dvoučlenných partách,
              každá s vlastním vozem a nářadím.
            </p>

            <ul className="pi-certs">
              <li>
                <span className="pi-cert-mark">✓</span>
                Svářečské průkazy pro plyn i topení
              </li>
              <li>
                <span className="pi-cert-mark">✓</span>
                Oprávnění ITI Praha pro montáž plynovodů
              </li>
              <li>
                <span className="pi-cert-mark">✓</span>
                Lisované spoje a vícevrstvé trubky
              </li>
              <li>
                <span className="pi-cert-mark">✓</span>
                Proškolení přímo od výrobců zařízení
              </li>
            </ul>

            <address className="pi-address">
              Nemanická 2722, 370 10 České Budějovice
              <br />
              <a href="tel:+420721978077">+420 721 978 077</a> ·{" "}
              <a href="mailto:info@plynoinstalace.cz">info@plynoinstalace.cz</a>
            </address>
          </div>

          <figure className="pi-trust-media">
            <img
              src="/section-2.webp"
              alt="Montážní parta Plynoinstalace u zakázky v Českých Budějovicích"
            />
            <figcaption>Naše parta v terénu — Českobudějovicko a okolí.</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}

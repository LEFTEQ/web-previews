export default function Page() {
  const sluzby = [
    {
      cislo: "01",
      nazev: "Bourací práce",
      popis:
        "Vnitřní příčky, betonové stropy, kompletní vybourání bytových jader. Pracujeme s bouracími kladivy i ručně tam, kde se to nesmí otřást.",
    },
    {
      cislo: "02",
      nazev: "Demolice objektů",
      popis:
        "Celé rodinné domy, hospodářské a průmyslové stavby. Postaráme se o odpojení sítí, ohlášení a bezpečné rozebrání až po základovou desku.",
    },
    {
      cislo: "03",
      nazev: "Odvoz a recyklace suti",
      popis:
        "Přistavíme kontejner, naložíme, odvezeme. Beton a cihlu drtíme na recyklát — po nás zůstává čistá, srovnaná plocha.",
    },
    {
      cislo: "04",
      nazev: "Vyklízení před demolicí",
      popis:
        "Vyklidíme půdy, sklepy i celé objekty. Roztřídíme, co je k odvozu a co k likvidaci, a připravíme stavbu k bourání.",
    },
  ];

  const kroky = [
    {
      faze: "Prohlídka",
      text: "Přijedeme na místo v Hradci a okolí, změříme rozsah a řekneme rovnou, co půjde a co ne.",
    },
    {
      faze: "Cena a termín",
      text: "Dostanete pevnou cenu za práci i za odvoz suti. Žádné dodatečné položky po skončení.",
    },
    {
      faze: "Bourání",
      text: "Ohradíme prostor, chráníme sousední konstrukce a bouráme s ohledem na okolí i termín.",
    },
    {
      faze: "Předání plochy",
      text: "Odvezeme suť, zameteme a předáme čistou plochu připravenou pro novou stavbu.",
    },
  ];

  return (
    <main className="ms">
      <header className="ms-nav">
        <a className="ms-brand" href="#" aria-label="M-STAV HK, demoliční práce Hradec Králové">
          <span className="ms-brand-mark">M</span>
          <span className="ms-brand-text">
            STAV<span className="ms-brand-hk">HK</span>
          </span>
        </a>
        <nav className="ms-nav-links" aria-label="Hlavní navigace">
          <a href="#sluzby">Co bouráme</a>
          <a href="#postup">Jak to probíhá</a>
          <a className="ms-nav-call" href="tel:+420603449230">
            603 449 230
          </a>
        </nav>
      </header>

      <section className="ms-hero">
        <img
          className="ms-hero-img"
          src="/hero.webp"
          alt="Bourání zdiva na demoliční zakázce firmy M-STAV HK v Hradci Králové"
        />
        <div className="ms-hero-scrim" aria-hidden="true" />
        <div className="ms-hero-inner">
          <p className="ms-eyebrow">Demoliční práce · Hradec Králové</p>
          <h1 className="ms-hero-title">
            Zbouráme to,
            <br />
            <span className="ms-hero-accent">co má jít pryč.</span>
          </h1>
          <p className="ms-hero-lead">
            Bytová jádra, příčky i celé domy. Přijedeme, srovnáme se zemí,
            odvezeme suť — a předáme vám čistou plochu k nové stavbě.
          </p>
          <div className="ms-hero-cta">
            <a className="ms-btn ms-btn-primary" href="tel:+420603449230">
              Zavolat 603 449 230
            </a>
            <a className="ms-btn ms-btn-ghost" href="#sluzby">
              Co bouráme
            </a>
          </div>
        </div>
      </section>

      <section className="ms-section" id="sluzby" aria-labelledby="sluzby-h">
        <div className="ms-section-head">
          <p className="ms-eyebrow ms-eyebrow-dark">Naše řemeslo</p>
          <h2 className="ms-h2" id="sluzby-h">
            Od jedné příčky
            <br />
            po celý dům
          </h2>
          <p className="ms-section-sub">
            Děláme jen bourání a to, co s ním souvisí. Proto to umíme rychle,
            bezpečně a bez nepořádku po sobě.
          </p>
        </div>

        <ul className="ms-services">
          {sluzby.map((s) => (
            <li className="ms-service" key={s.cislo}>
              <span className="ms-service-num">{s.cislo}</span>
              <div className="ms-service-body">
                <h3 className="ms-service-name">{s.nazev}</h3>
                <p className="ms-service-text">{s.popis}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="ms-trust" id="postup" aria-labelledby="postup-h">
        <div className="ms-trust-media">
          <img
            className="ms-trust-img"
            src="/section-1.webp"
            alt="Rozestavěná stavba po demoličních a bouracích pracích v Hradci Králové"
          />
        </div>
        <div className="ms-trust-text">
          <p className="ms-eyebrow ms-eyebrow-dark">O nás</p>
          <h2 className="ms-h2" id="postup-h">
            Bouráme v Hradci
            <br />
            už řadu let
          </h2>
          <p className="ms-trust-lead">
            M-STAV HK je hradecká parta, která dělá demolice od začátku do konce.
            Nepřehazujeme práci na subdodavatele — přijedeme, zbouráme, odvezeme.
            Domluvit termín u nás znamená domluvit ho s tím, kdo ho odbourá.
          </p>

          <ol className="ms-steps">
            {kroky.map((k, i) => (
              <li className="ms-step" key={k.faze}>
                <span className="ms-step-line" aria-hidden="true" />
                <span className="ms-step-num">{i + 1}</span>
                <div>
                  <h3 className="ms-step-name">{k.faze}</h3>
                  <p className="ms-step-text">{k.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="ms-trust-cta">
            <a className="ms-btn ms-btn-dark" href="tel:+420603449230">
              Zavolat na 603 449 230
            </a>
            <a className="ms-btn ms-btn-line" href="mailto:info@mstavhk.cz">
              Napsat e-mail
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

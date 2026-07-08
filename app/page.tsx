import type { CSSProperties } from "react";

export default function Page() {
  const cinnosti = [
    {
      cislo: "01",
      nazev: "Fotovoltaika na klíč",
      popis:
        "Návrh, projekt i montáž fotovoltaické elektrárny pro rodinné domy i firmy. Panely, měnič, kabeláž — všechno od jednoho dodavatele z Českých Budějovic.",
    },
    {
      cislo: "02",
      nazev: "Tepelná čerpadla PANASONIC",
      popis:
        "Dodáváme a montujeme tepelná čerpadla PANASONIC vyrobená v Plzni. Jsme autorizované servisní středisko PANASONIC pro celý Jihočeský kraj.",
    },
    {
      cislo: "03",
      nazev: "Bateriové úložiště",
      popis:
        "Uložte si přebytky ze slunce na večer. Napojíme baterii na vaši elektrárnu i domácí spotřebu tak, aby energie neodtékala zpět do sítě zbytečně.",
    },
  ];

  const kroky = [
    {
      k: "Poradíme na střeše",
      d: "Přijedeme, změříme sklon a orientaci střechy a spočítáme, kolik kilowatt dává smysl právě u vás.",
    },
    {
      k: "Vyřídíme dotaci",
      d: "Nová zelená úsporám Light 2025 je letos otevřená všem žadatelům bez podmínky nízkopříjmové domácnosti — pomůžeme se žádostí.",
    },
    {
      k: "Namontujeme a zapojíme",
      d: "Naše parta montérů zapojí panely, měnič i baterii a předá vám funkční elektrárnu s revizí.",
    },
  ];

  const partneri = [
    "E.ON Česká republika",
    "Panasonic",
    "O2 Czech Republic",
    "TEDOM",
    "Česká pojišťovna",
  ];

  const certifikaty = ["ISO 9001", "ISO 14001", "ISO 45001", "ČAP", "AGA"];

  return (
    <main className="pv">
      <header className="pv-nav">
        <a className="pv-wordmark" href="#" aria-label="SETERM CB">
          <span className="pv-wordmark__sun" aria-hidden="true" />
          <span className="pv-wordmark__text">
            SETERM<span className="pv-wordmark__cb">CB</span>
          </span>
        </a>
        <nav className="pv-menu" aria-label="Hlavní navigace">
          <a href="#reseni">Řešení</a>
          <a href="#postup">Postup</a>
          <a href="#duvera">O nás</a>
        </nav>
      </header>

      <section className="pv-hero">
        <div className="pv-hero__media">
          <img
            src="/hero.webp"
            alt="Fotovoltaické panely na střeše rodinného domu v jižních Čechách"
            className="pv-hero__img"
            width={1600}
            height={1000}
          />
          <div className="pv-hero__scrim" aria-hidden="true" />
        </div>

        <div className="pv-hero__body">
          <p className="pv-eyebrow">Fotovoltaika · České Budějovice</p>
          <h1 className="pv-hero__title">
            Ze střechy<br />
            <span className="pv-hero__accent">vlastní proud</span>
          </h1>
          <p className="pv-hero__lead">
            Navrhneme a namontujeme vám fotovoltaiku i tepelné čerpadlo na
            míru — od první návštěvy střechy po revizi. Jihočeská firma, která
            u vás zůstane i po zapojení.
          </p>
          <div className="pv-hero__cta">
            <a className="pv-btn pv-btn--solid" href="tel:+420387001630">
              Zavolat 387 001 630
            </a>
            <a className="pv-btn pv-btn--ghost" href="#reseni">
              Co umíme
            </a>
          </div>

          <dl className="pv-meter" aria-label="Kolik slunce dopadá na jihočeskou střechu">
            <div className="pv-meter__row">
              <dt>Roční osvit v jižních Čechách</dt>
              <dd>
                <span className="pv-meter__bar" style={{ "--fill": "92%" } as CSSProperties} />
                <b>≈ 1&nbsp;100&nbsp;kWh/m²</b>
              </dd>
            </div>
            <div className="pv-meter__row">
              <dt>Dotace Nová zelená úsporám Light 2025</dt>
              <dd>
                <span className="pv-meter__bar pv-meter__bar--alt" style={{ "--fill": "78%" } as CSSProperties} />
                <b>otevřená všem</b>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="pv-section" id="reseni">
        <div className="pv-section__head">
          <p className="pv-eyebrow">Naše řešení</p>
          <h2 className="pv-h2">Slunce, teplo a baterie pod jednou střechou</h2>
          <p className="pv-section__intro">
            Nepřehazujeme vás mezi třemi firmami. Elektrárnu, čerpadlo i
            úložiště řešíme my — proto do sebe všechno sedne a máte jeden servisní kontakt.
          </p>
        </div>

        <ul className="pv-cards">
          {cinnosti.map((c) => (
            <li className="pv-card" key={c.cislo}>
              <span className="pv-card__num" aria-hidden="true">
                {c.cislo}
              </span>
              <h3 className="pv-card__title">{c.nazev}</h3>
              <p className="pv-card__text">{c.popis}</p>
            </li>
          ))}
        </ul>

        <div className="pv-note">
          <p>
            Informace o tepelných čerpadlech: <strong>František Dudák</strong>,
            {" "}
            <a href="tel:+420725928688">725&nbsp;928&nbsp;688</a>.
          </p>
        </div>
      </section>

      <section className="pv-duvera" id="duvera">
        <div className="pv-duvera__media">
          <img
            src="/section-2.webp"
            alt="Montér SETERM CB při instalaci technologie"
            className="pv-duvera__img"
            width={1200}
            height={900}
          />
        </div>

        <div className="pv-duvera__body">
          <p className="pv-eyebrow">O nás</p>
          <h2 className="pv-h2">
            Jihočeská firma, kterou dohledáte na katastru
          </h2>
          <p className="pv-duvera__lead">
            SETERM CB a.s. staví distribuční a stavební soustavy po celé
            republice už desítky let. Fotovoltaiku i tepelná čerpadla montujeme
            u zákazníků na Budějovicku a v celém Jihočeském kraji — s revizemi,
            certifikáty a lidmi, které znáte jménem.
          </p>

          <ol className="pv-steps" id="postup">
            {kroky.map((s, i) => (
              <li className="pv-step" key={s.k}>
                <span className="pv-step__dot" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3 className="pv-step__title">{s.k}</h3>
                  <p className="pv-step__text">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="pv-badges">
            <p className="pv-badges__label">Držíme certifikáty</p>
            <ul className="pv-badges__list">
              {certifikaty.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>

          <div className="pv-partners">
            <p className="pv-badges__label">Stavěli jsme pro</p>
            <p className="pv-partners__list">{partneri.join(" · ")}</p>
          </div>

          <address className="pv-contact">
            Nemanická 2722, 370 10 České Budějovice ·{" "}
            <a href="mailto:vedeni@seterm.cz">vedeni@seterm.cz</a>
          </address>
        </div>
      </section>
    </main>
  );
}

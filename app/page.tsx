import type { CSSProperties } from "react";

export default function Page() {
  const trades = [
    {
      no: "01",
      name: "Malířství a lakýrnictví",
      desc:
        "Vymalujeme byt po rekonstrukci i celý panelák. Nátěry dveří, zárubní a radiátorů, které vydrží. Přijedeme, zakryjeme nábytek, po sobě uklidíme.",
    },
    {
      no: "02",
      name: "Zednické práce",
      desc:
        "Bourání příček, nové omítky, sádrokartony, štukování. Připravíme jádro bytu na čistou finální úpravu — rovně a bez prasklin.",
    },
    {
      no: "03",
      name: "Voda a topení",
      desc:
        "Rozvody vody, výměna radiátorů, přepojení koupelny a kuchyně. Jeden tým, žádné čekání na dalšího řemeslníka.",
    },
    {
      no: "04",
      name: "Elektroinstalace",
      desc:
        "Montáž, opravy a revize elektrických zařízení. Nové zásuvky, rozvaděč i světla — vše s platnou revizní zprávou.",
    },
  ];

  return (
    <main className="rm">
      <header className="rm-nav">
        <a className="rm-mark" href="#" aria-label="REKONSTRUKCE MALBY, domů">
          <span className="rm-mark__rekon">REKONSTRUKCE</span>
          <span className="rm-mark__malby">MALBY</span>
          <span className="rm-mark__sub">s.r.o. &middot; Ostrava</span>
        </a>
        <a className="rm-nav__call" href="tel:+420777156405">
          Zavolat 777&nbsp;156&nbsp;405
        </a>
      </header>

      <section className="rm-hero">
        <div className="rm-hero__img">
          <img
            src="/hero.webp"
            alt="Malíř dokončuje čerstvě vymalovaný pokoj v rekonstruovaném ostravském bytě"
          />
        </div>
        <div className="rm-hero__panel">
          <p className="rm-eyebrow">Rekonstrukce bytů &middot; Moravská Ostrava</p>
          <h1 className="rm-hero__title">
            Ze starého bytu
            <span className="rm-hero__coat"> dva nátěry </span>
            k novému.
          </h1>
          <p className="rm-hero__lead">
            Rodinná firma Pavelkových. Vezmeme byt v paneláku i staré cihlové
            činžovní — od bourání příček po poslední tah štětcem. Jeden tým na
            zdi, vodu, topení i elektriku.
          </p>
          <div className="rm-hero__actions">
            <a className="rm-btn rm-btn--solid" href="tel:+420777156405">
              Zavolat a domluvit prohlídku
            </a>
            <a
              className="rm-btn rm-btn--ghost"
              href="mailto:pavelka@stavebni-prace.eu"
            >
              Napsat poptávku
            </a>
          </div>
          <ul className="rm-hero__facts">
            <li>
              <span>Od 2011</span>
              řemeslo v Ostravě
            </li>
            <li>
              <span>4 řemesla</span>
              pod jednou střechou
            </li>
            <li>
              <span>Byt pod klíč</span>
              i jednotlivé práce
            </li>
          </ul>
        </div>
      </section>

      <section className="rm-trades" aria-labelledby="trades-h">
        <div className="rm-section-head">
          <p className="rm-eyebrow">Co u nás objednáte</p>
          <h2 id="trades-h">Čtyři řemesla, jeden telefon</h2>
          <p className="rm-section-head__note">
            Nemusíte shánět čtyři party a hlídat, aby na sebe navazovaly.
            Přebereme byt v celku a předáme ho hotový.
          </p>
        </div>

        <ol className="rm-swatches">
          {trades.map((t) => (
            <li className="rm-swatch" key={t.no}>
              <span className="rm-swatch__chip" aria-hidden="true">
                <span className="rm-swatch__no">{t.no}</span>
              </span>
              <div className="rm-swatch__body">
                <h3>{t.name}</h3>
                <p>{t.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="rm-trust" aria-labelledby="trust-h">
        <div className="rm-trust__media">
          <img
            src="/section-1.webp"
            alt="Rozdělaná rekonstrukce koupelny — nové rozvody vody a připravená stěna"
          />
          <img
            src="/section-2.webp"
            alt="Detail hladce vymalované stěny a čistě natřené zárubně po dokončení"
          />
        </div>

        <div className="rm-trust__text">
          <p className="rm-eyebrow">Kdo k vám přijede</p>
          <h2 id="trust-h">Lucie a Michal Pavelkovi</h2>
          <p>
            Firmu vedeme od roku 2011 z Janovského ulice v Moravské Ostravě.
            Dva jednatelé, žádný call-centrum mezičlánek — domluvíte se rovnou
            s tím, kdo práci odvede a ručí za ni.
          </p>
          <p>
            Pracujeme po Ostravě a okolí. Přijedeme se podívat, řekneme rovnou,
            co má smysl a co ne, a dáme cenu předem &mdash; ne až podle toho, co
            se &bdquo;objeví&ldquo;.
          </p>

          <dl className="rm-card">
            <div>
              <dt>Sídlo</dt>
              <dd>Janovského 2423/4, 702&nbsp;00 Moravská Ostrava</dd>
            </div>
            <div>
              <dt>Telefon</dt>
              <dd>
                <a href="tel:+420777156405">777&nbsp;156&nbsp;405</a>
              </dd>
            </div>
            <div>
              <dt>E-mail</dt>
              <dd>
                <a href="mailto:pavelka@stavebni-prace.eu">
                  pavelka@stavebni-prace.eu
                </a>
              </dd>
            </div>
            <div>
              <dt>IČO</dt>
              <dd>28649028</dd>
            </div>
          </dl>

          <p className="rm-trust__note">
            REKONSTRUKCE MALBY s.r.o. &middot; zapsáno u Krajského soudu
            v Ostravě, sp. zn. C 36830.
          </p>
        </div>
      </section>
    </main>
  );
}

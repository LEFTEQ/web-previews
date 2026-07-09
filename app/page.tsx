import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autolakovna Buchar — lakování a opravy karoserií, Hrádek nad Nisou",
  description:
    "Autolakovna Buchar v Hrádku nad Nisou. Přesné namíchání odstínu na váš VIN, oprava laku, boční a lokální opravy i renovace celého vozu. Lidická 823.",
};

const sluzby = [
  {
    kod: "L1",
    nazev: "Namíchání odstínu na míru",
    popis:
      "Z výrobního štítku a VIN kódu namícháme přesný tovární odstín — metalízu, perleť i tříplášťové laky. Kontrolní nástřik na plíšek, než se dotkneme vozu.",
    detail: "Spektrofotometr + firemní receptura",
  },
  {
    kod: "L2",
    nazev: "Lokální oprava a bezbarvý přechod",
    popis:
      "Škrábanec od klíče, oděrka z parkoviště, kámen na kapotě. Opravíme jen zasažené místo a lak zatáhneme do přechodu, aby nebyl vidět rozdíl.",
    detail: "Bez přelakování celého dílu",
  },
  {
    kod: "L3",
    nazev: "Karoserie po nehodě",
    popis:
      "Rovnání plechu, výměna dílů, tmelení a finální lak. Řešíme i komunikaci s pojišťovnou, ať se o papírování nestaráte.",
    detail: "Vč. pojistných událostí",
  },
  {
    kod: "L4",
    nazev: "Renovace laku celého vozu",
    popis:
      "Starší vůz, matný nebo odloupaný lak. Odstraníme staré vrstvy, srovnáme podklad a nastříkáme celé auto v uzavřené lakovací kabině.",
    detail: "Kabina s řízeným sušením",
  },
];

const kroky = [
  {
    c: "01",
    t: "Přijedete a ukážete",
    d: "Podíváme se na poškození společně s vámi. Řekneme rovnou, co jde opravit lokálně a co je na celý díl.",
  },
  {
    c: "02",
    t: "Změříme odstín",
    d: "Z VINu a měřením na laku najdeme přesnou recepturu. Uvidíte kontrolní vzorek dřív, než začneme.",
  },
  {
    c: "03",
    t: "Nacenění napevno",
    d: "Dostanete cenu, která platí. Žádné dodatečné položky, které se objeví až na faktuře.",
  },
  {
    c: "04",
    t: "Nástřik a předání",
    d: "Lakujeme v kabině s řízeným prachem a teplotou. Vůz předáváme umytý a odvoskovaný.",
  },
];

export default function Page() {
  return (
    <main className="pg">
      <header className="nav">
        <a className="wordmark" href="#" aria-label="Autolakovna Buchar — úvod">
          <span className="wordmark__row">
            <span className="wordmark__strip" aria-hidden="true" />
            <span className="wordmark__name">BUCHAR</span>
          </span>
          <span className="wordmark__sub">Autolakovna · Hrádek nad Nisou</span>
        </a>
        <nav className="nav__links" aria-label="Hlavní">
          <a href="#sluzby">Co lakujeme</a>
          <a href="#postup">Jak to chodí</a>
          <a className="nav__cta" href="tel:+420482771000">Zavolat</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Karoserie vozu s čerstvě naneseným lakem v lakovací kabině Autolakovny Buchar"
            className="hero__img"
            width={1600}
            height={1100}
          />
          <span className="hero__grade" aria-hidden="true" />
        </div>

        <div className="hero__panel">
          <p className="hero__eyebrow">
            <span className="swatch" aria-hidden="true" />
            Přesný odstín na první nástřik
          </p>
          <h1 className="hero__title">
            Váš lak<br />
            <span className="hero__title--accent">míchaný na míru</span>,<br />
            ne odhadem.
          </h1>
          <p className="hero__lead">
            Namícháme přesně tu barvu, kterou má vaše auto z výroby — podle VIN
            a měření přímo na laku. Škrábance, plechy po nehodě i renovaci
            celého vozu vyřešíme v Hrádku nad Nisou.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="tel:+420482771000">
              Zavolat a domluvit termín
            </a>
            <a className="btn btn--ghost" href="#sluzby">
              Co umíme opravit
            </a>
          </div>

          <dl className="hero__chips">
            <div className="chip">
              <dt>Kód odstínu</dt>
              <dd>čteme z VINu</dd>
            </div>
            <div className="chip">
              <dt>Lakovací kabina</dt>
              <dd>řízený prach a teplota</dd>
            </div>
            <div className="chip">
              <dt>Kde nás najdete</dt>
              <dd>Lidická 823</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="section-head">
          <p className="section-eyebrow">Co lakujeme</p>
          <h2 id="sluzby-nadpis" className="section-title">
            Od jednoho škrábance po celé auto
          </h2>
          <p className="section-note">
            Nemíchá se u nás jen barva. Řekneme vám rovnou, jestli stačí opravit
            místo, nebo se vyplatí celý díl — podle toho, co je pro vás levnější
            a lepší.
          </p>
        </div>

        <ul className="cards">
          {sluzby.map((s) => (
            <li className="card" key={s.kod}>
              <span className="card__code" aria-hidden="true">
                {s.kod}
              </span>
              <h3 className="card__title">{s.nazev}</h3>
              <p className="card__text">{s.popis}</p>
              <p className="card__detail">{s.detail}</p>
            </li>
          ))}
        </ul>

        <div className="sluzby__strip">
          <img
            src="/section-1.webp"
            alt="Detail nanášení laku stříkací pistolí na karoserii vozu"
            className="sluzby__img"
            width={1400}
            height={900}
            loading="lazy"
          />
          <div className="sluzby__quote">
            <p className="sluzby__quoteText">
              „Přechod do bezbarvého laku nesmí být vidět. Když si zákazník
              po umytí musí vzpomenout, kde vlastně měl škrábanec, je to
              hotové dobře.“
            </p>
            <p className="sluzby__quoteBy">— dílna Buchar, lakýrnická práce</p>
          </div>
        </div>
      </section>

      <section className="postup" id="postup" aria-labelledby="postup-nadpis">
        <div className="postup__inner">
          <div className="postup__intro">
            <p className="section-eyebrow section-eyebrow--light">Jak to chodí</p>
            <h2 id="postup-nadpis" className="section-title section-title--light">
              Čtyři kroky bez překvapení na faktuře
            </h2>
            <p className="postup__lead">
              Jsme malá dílna, kde vůz převezme ten, kdo ho i lakuje. Cena, kterou
              odsouhlasíte, platí — a domluvit se dá i osobně na Lidické.
            </p>
            <div className="postup__contact">
              <a className="btn btn--solid" href="tel:+420482771000">
                Zavolat do dílny
              </a>
              <address className="postup__addr">
                Autolakovna Buchar
                <br />
                Lidická 823, 463 34 Hrádek nad Nisou
              </address>
            </div>
          </div>

          <ol className="steps">
            {kroky.map((k) => (
              <li className="step" key={k.c}>
                <span className="step__num" aria-hidden="true">
                  {k.c}
                </span>
                <div className="step__body">
                  <h3 className="step__title">{k.t}</h3>
                  <p className="step__text">{k.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <img
          src="/section-2.webp"
          alt="Hotový vůz s lesklým lakem po opravě v Autolakovně Buchar"
          className="postup__img"
          width={1400}
          height={900}
          loading="lazy"
        />
      </section>
    </main>
  );
}

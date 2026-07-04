import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      code: "D",
      title: "Stěhování domácností",
      body: "Byt i rodinný dům přestěhujeme rychle a bez chaosu. Zabalíme, odneseme, složíme — a vy hned večer spíte na svém.",
    },
    {
      code: "F",
      title: "Stěhování firem",
      body: "Kanceláře, sklady, provozy. Domluvíme se na termínu mimo provoz, aby vám stěhování nezastavilo práci.",
    },
    {
      code: "S",
      title: "Stěhování strojů a trezorů",
      body: "Piána, trezory, těžké stroje. Máme techniku i lidi na to, co se běžně přenést nedá.",
    },
    {
      code: "O",
      title: "Obalový materiál na míru",
      body: "Krabice, fólie, deky a proložky přesně podle toho, co se veze. Nic se cestou neodře ani nerozbije.",
    },
    {
      code: "M",
      title: "Montáž a demontáž",
      body: "Na místě A rozebereme, na místě B smontujeme. V novém bydlení najdete funkční byt, ne hromadu krabic.",
    },
    {
      code: "V",
      title: "Vyklízení a uskladnění",
      body: "Vyklidíme prostor do čista a co potřebujete uschovat, uložíme u nás za férovou cenu.",
    },
  ];

  const clients = [
    "OD Futurum",
    "Home Art",
    "Potten & Pannen",
    "MZe ČR",
    "ČSSZ ČR",
  ];

  return (
    <main className="mmt">
      <header className="mmt-nav" aria-label="Hlavní">
        <a className="mmt-mark" href="#top">
          <span className="mmt-mark__tusk" aria-hidden="true">
            <svg viewBox="0 0 40 24" width="40" height="24" role="img" aria-label="">
              <path d="M4 4 C4 16 14 22 22 20 C14 18 10 12 12 4 Z" fill="currentColor" />
              <path d="M36 4 C36 16 26 22 18 20 C26 18 30 12 28 4 Z" fill="currentColor" opacity="0.55" />
            </svg>
          </span>
          <span className="mmt-mark__word">
            Stěhování <b>Mamut</b>
          </span>
        </a>
        <span className="mmt-nav__place">Ústí nad Labem</span>
      </header>

      <section className="mmt-hero" id="top">
        <div className="mmt-hero__grid">
          <div className="mmt-hero__text">
            <p className="mmt-eyebrow">Kurýrní a stěhovací služby · Ústí nad Labem</p>
            <h1 className="mmt-hero__title">
              Uneseme<br />
              <span className="mmt-hero__accent">i&nbsp;mamutí</span><br />
              náklad.
            </h1>
            <p className="mmt-hero__lead">
              Piáno ze čtvrtého patra, trezor přes tři schodiště, celá kancelář
              přes víkend. Přijedeme, zabalíme, odvezeme a složíme — cena, na které
              se domluvíme, platí. Žádné příplatky po cestě.
            </p>
            <div className="mmt-hero__cta">
              <a className="mmt-btn mmt-btn--solid" href="tel:+420475000000">
                Zavolat a domluvit termín
              </a>
              <a className="mmt-btn mmt-btn--ghost" href="#sluzby">
                Spočítat orientační cenu
              </a>
            </div>
          </div>

          <figure className="mmt-hero__figure">
            <img
              src="/hero.webp"
              alt="Stěhováci firmy Mamut nakládají nábytek do dodávky v Ústí nad Labem"
              className="mmt-hero__img"
            />
            <figcaption className="mmt-hero__load">
              <span className="mmt-load__n">0 kg</span>
              <span className="mmt-load__l">strop nemáme</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="mmt-services" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="mmt-sec__head">
          <p className="mmt-eyebrow">Co naložíme</p>
          <h2 id="sluzby-nadpis" className="mmt-sec__title">
            Šest služeb, jeden tým
          </h2>
          <p className="mmt-sec__lead">
            Od bytu po celý provoz. Vyberte si, co potřebujete přestěhovat —
            zbytek zařídíme za vás.
          </p>
        </div>

        <ul className="mmt-cards">
          {services.map((s) => (
            <li className="mmt-card" key={s.code}>
              <span className="mmt-card__code" aria-hidden="true">
                {s.code}
              </span>
              <h3 className="mmt-card__title">{s.title}</h3>
              <p className="mmt-card__body">{s.body}</p>
            </li>
          ))}
        </ul>

        <figure className="mmt-band">
          <img
            src="/section-1.webp"
            alt="Naložená dodávka s obalovým materiálem připravená k odjezdu"
            className="mmt-band__img"
          />
          <figcaption className="mmt-band__cap">
            Balíme na míru — každá krabice ví, co veze.
          </figcaption>
        </figure>
      </section>

      <section className="mmt-trust" aria-labelledby="trust-nadpis">
        <div className="mmt-trust__grid">
          <figure className="mmt-trust__figure">
            <img
              src="/section-2.webp"
              alt="Proškolený stěhovací tým Mamut při práci"
              className="mmt-trust__img"
            />
          </figure>
          <div className="mmt-trust__text">
            <p className="mmt-eyebrow">Proč Mamut</p>
            <h2 id="trust-nadpis" className="mmt-sec__title">
              Cena drží slovo
            </h2>
            <p className="mmt-trust__lead">
              Domluvená cena je pro nás závazná — po podpisu nepřičítáme skryté
              poplatky ani „za schody navíc". Naši lidé jsou proškolení a za roky
              praxe si poradí s každou zárubní i úzkým schodištěm.
            </p>

            <dl className="mmt-facts">
              <div className="mmt-fact">
                <dt>Cena</dt>
                <dd>závazná, bez skrytých příplatků</dd>
              </div>
              <div className="mmt-fact">
                <dt>Tým</dt>
                <dd>proškolení stěhováci, ne brigádníci</dd>
              </div>
              <div className="mmt-fact">
                <dt>Kde jezdíme</dt>
                <dd>Ústí nad Labem a okolí</dd>
              </div>
            </dl>

            <p className="mmt-ref__label">Stěhovali jsme mimo jiné pro:</p>
            <ul className="mmt-ref">
              {clients.map((c) => (
                <li key={c} className="mmt-ref__item">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autoservis ZEKACB — autoklempířství, České Budějovice",
  description:
    "Nezávislý autoservis a autoklempířství v Českých Budějovicích. Rovnáme a lakujeme karoserie, servisujeme, přezouváme, plníme klimatizace. Férově a v co nejkratším termínu.",
  openGraph: {
    title: "Autoservis ZEKACB — autoklempířství, České Budějovice",
    description:
      "Rovnáme plech, kde jiní hned mění díl. Autoklempířství, servis, pneuservis a diagnostika v Českých Budějovicích.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Dílna autoservisu ZEKACB" }],
  },
};

const sluzby = [
  {
    kod: "KL",
    nazev: "Autoklempířství",
    popis:
      "Vyrovnáme promáčklou karoserii, opravíme následky nehody i drobný ťukanec z parkoviště. Kde to jde, plech zachráníme — nový díl navrhneme jen tam, kde má smysl.",
    detail: "rovnání plechu · svařování · příprava pod lak",
  },
  {
    kod: "SE",
    nazev: "Autoservis",
    popis:
      "Kompletní mechanika: výměna oleje a rozvodů, brzdy, tlumiče, výfuk. Řekneme dopředu, co je nutné teď a co počká — bez zbytečných položek na faktuře.",
    detail: "opravy · pravidelný servis · příprava na STK",
  },
  {
    kod: "PN",
    nazev: "Pneuservis",
    popis:
      "Přezutí, vyvážení, uskladnění pneu i opravy defektů. Objednejte se před sezónou a jste hotoví, než vypijete kávu ve vedlejší dílně.",
    detail: "přezutí · vyvážení · uskladnění",
  },
  {
    kod: "DG",
    nazev: "Diagnostika",
    popis:
      "Rozsvítila se kontrolka? Načteme chybové kódy z řídicích jednotek a řekneme, o co skutečně jde — dřív, než začneme cokoli měnit.",
    detail: "čtení chyb · elektro · měření emisí",
  },
  {
    kod: "KM",
    nazev: "Servis klimatizací",
    popis:
      "Klimatizace přestala chladit nebo je cítit z ventilace? Zkontrolujeme těsnost, doplníme chladivo a vydezinfikujeme výparník.",
    detail: "plnění chladiva · kontrola těsnosti · dezinfekce",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Autoservis ZEKACB, úvod">
          <span className="wordmark__mark" aria-hidden="true">
            <span className="wordmark__z">Z</span>
          </span>
          <span className="wordmark__text">
            ZEKACB
            <span className="wordmark__sub">autoklempířství · autoservis</span>
          </span>
        </a>
        <a className="topbar__call" href="tel:+420723000000">
          Zavolat do dílny
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Ruce klempíře vyrovnávají promáčklý plech karoserie v dílně autoservisu ZEKACB"
            className="hero__img"
          />
        </div>
        <div className="hero__panel">
          <p className="hero__eyebrow">České Budějovice · nezávislý servis od roku 2014</p>
          <h1 id="hero-title" className="hero__title">
            Rovnáme plech<span className="hero__title-mark">,</span>
            <br />
            kde jiní hned
            <br />
            <em>mění celý díl.</em>
          </h1>
          <p className="hero__lead">
            Promáčklý blatník, kroupy, ťukanec z parkoviště nebo následky nehody —
            karoserii nejdřív posoudíme a zachráníme, co jde. Férově, s termínem,
            který dodržíme.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="tel:+420723000000">
              Zavolat a domluvit termín
            </a>
            <a className="btn btn--ghost" href="mailto:servis@zekacb.cz">
              Napsat e-mail
            </a>
          </div>
          <p className="hero__note">Odpovíme obvykle týž den · Rudolfovská tř., České Budějovice</p>
        </div>
      </section>

      <section className="work" aria-labelledby="work-title">
        <div className="section-head">
          <p className="section-head__eyebrow">Co u nás vyřešíte</p>
          <h2 id="work-title" className="section-head__title">
            Pět věcí, se kterými k nám auto přiveze
          </h2>
        </div>
        <ol className="cards">
          {sluzby.map((s) => (
            <li className="card" key={s.kod}>
              <span className="card__code" aria-hidden="true">
                {s.kod}
              </span>
              <h3 className="card__title">{s.nazev}</h3>
              <p className="card__desc">{s.popis}</p>
              <p className="card__detail">{s.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="about" aria-labelledby="about-title">
        <div className="about__media">
          <img
            src="/section-1.webp"
            alt="Připravená karoserie před lakováním v dílně ZEKACB"
            className="about__img about__img--a"
          />
          <img
            src="/section-2.webp"
            alt="Mechanik autoservisu ZEKACB při práci na voze"
            className="about__img about__img--b"
          />
        </div>
        <div className="about__text">
          <p className="section-head__eyebrow">Kdo za tím stojí</p>
          <h2 id="about-title" className="about__title">
            Začínali jsme jako pobočka. Dnes ručíme sami za sebe.
          </h2>
          <p className="about__para">
            Autoservis ZEKACB vznikl v roce 2014 jako pobočka týnského autoservisu
            ZEKA. Po pár letech jsme se osamostatnili a dnes fungujeme jako nezávislý
            servis pod svým jménem — což znamená, že za každou opravou stojíme my sami.
          </p>
          <p className="about__para">
            Zakládáme si na férovém jednání a na kvalitě odvedené práce v co nejkratším
            termínu. Řekneme dopředu, co oprava obnáší, a nepřidáváme na fakturu, co
            jste si neobjednali.
          </p>
          <dl className="facts">
            <div className="fact">
              <dt className="fact__label">Od roku</dt>
              <dd className="fact__value">2014</dd>
            </div>
            <div className="fact">
              <dt className="fact__label">Kde nás najdete</dt>
              <dd className="fact__value">České Budějovice</dd>
            </div>
            <div className="fact">
              <dt className="fact__label">Přístup</dt>
              <dd className="fact__value">Férově, s termínem</dd>
            </div>
          </dl>
          <div className="about__contact">
            <a className="btn btn--primary" href="tel:+420723000000">
              Zavolat do dílny
            </a>
            <a className="btn btn--ghost" href="mailto:servis@zekacb.cz">
              servis@zekacb.cz
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

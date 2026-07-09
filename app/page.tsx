import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Burosh autoservice — pneuservis Olomouc",
  description:
    "Pneuservis v Olomouci. Přezutí, vyvážení, opravy defektů a uskladnění pneumatik. Objednejte se na konkrétní čas — nečekáte v sezoně ve frontě.",
  openGraph: {
    title: "Burosh autoservice — pneuservis Olomouc",
    description:
      "Přezutí, vyvážení, opravy defektů a hotel na pneumatiky v Olomouci. Objednejte se na čas.",
    type: "website",
    locale: "cs_CZ",
    images: ["/hero.webp"],
  },
};

const kroky = [
  {
    n: "01",
    doba: "cca 30 min",
    nadpis: "Přezutí a vyvážení",
    text: "Zuli, přezuli, vyvážili. Kola z auta i kompletní sady z hotelu — všechna čtyři dotažená momentem podle výrobce, ne \u201Eod oka\u201C.",
  },
  {
    n: "02",
    doba: "na počkání",
    nadpis: "Oprava defektu",
    text: "Píchlá pneumatika? Najdeme místo ve vaně, zalepíme knotem nebo záplatou zevnitř. Když už to nejde bezpečně, řekneme to rovnou.",
  },
  {
    n: "03",
    doba: "celý rok",
    nadpis: "Hotel na pneumatiky",
    text: "Uskladníme vaši druhou sadu ve suchu na paletě, označenou vaší SPZ. Na jaře i na podzim vám je nachystáme k přezutí.",
  },
  {
    n: "04",
    doba: "cca 10 min",
    nadpis: "Kontrola a dohuštění",
    text: "Před dovolenou nebo po zimě zkontrolujeme tlak, hloubku dezénu a stav ventilků. Ať nevyrážíte na plešatých gumách.",
  },
];

const duvody = [
  {
    k: "Bez čekání ve frontě",
    v: "V sezoně se objednáte na konkrétní čas přes telefon. Nepřijdete na půl dne — přijdete na svůj slot.",
  },
  {
    k: "Osobní vozy i dodávky",
    v: "Zvládneme běžné patnáctky i devatenáctipalcová nízkoprofilová kola. Řekneme dopředu, co to obnáší.",
  },
  {
    k: "Ceník bez překvapení",
    v: "Cenu za přezutí, vyvážení i uskladnění řekneme předem po telefonu. Doúčtujeme jen to, na čem se domluvíme.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Burosh autoservice, úvod">
          <span className="wordmark__mark" aria-hidden="true">
            <span className="tread" />
          </span>
          <span className="wordmark__text">
            <span className="wordmark__name">BUROSH</span>
            <span className="wordmark__sub">autoservice · pneuservis</span>
          </span>
        </a>
        <a className="topbar__call" href="tel:+420585000000">
          <span className="topbar__callLabel">Objednat přezutí</span>
          <span className="topbar__callNum">585 00 00 00</span>
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Pneumatika na vyvažovačce v dílně pneuservisu Burosh v Olomouci"
            className="hero__img"
            width={1600}
            height={1100}
          />
        </div>
        <div className="hero__panel">
          <p className="hero__eyebrow">Pneuservis · Olomouc</p>
          <h1 id="hero-title" className="hero__title">
            Přezujeme,
            <br />
            <span className="hero__accent">vyvažujeme</span>,
            <br />
            hlídáme vám gumy.
          </h1>
          <p className="hero__lead">
            Zimní na letní i zpátky, opravy defektů a uskladnění druhé sady.
            Objednejte se na čas — v sezoně tím ušetříte půl dne v čekárně.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="tel:+420585000000">
              Zavolat a objednat čas
            </a>
            <a className="btn btn--ghost" href="mailto:pneu@burosh.cz">
              Napsat e-mail
            </a>
          </div>
          <dl className="hero__facts">
            <div className="hero__fact">
              <dt>Přezutí kompletu</dt>
              <dd>cca 30 minut</dd>
            </div>
            <div className="hero__fact">
              <dt>Uskladnění sady</dt>
              <dd>celý rok, pod SPZ</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="work" aria-labelledby="work-title">
        <div className="work__head">
          <p className="section-eyebrow">Co u nás pořídíte</p>
          <h2 id="work-title" className="section-title">
            Čtyři věci kolem kol, se kterými za námi jezdíte
          </h2>
        </div>
        <div className="work__grid">
          <ul className="steps">
            {kroky.map((s) => (
              <li className="step" key={s.n}>
                <span className="step__n" aria-hidden="true">
                  {s.n}
                </span>
                <div className="step__body">
                  <div className="step__topline">
                    <h3 className="step__title">{s.nadpis}</h3>
                    <span className="step__time">{s.doba}</span>
                  </div>
                  <p className="step__text">{s.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <figure className="work__figure">
            <img
              src="/section-1.webp"
              alt="Mechanik přezouvá pneumatiku na zouvačce v pneuservisu"
              className="work__img"
              width={900}
              height={1100}
            />
            <figcaption className="work__cap">
              Momentový klíč, ne kříž od oka — každé kolo dotažené na hodnotu
              podle výrobce.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="trust" aria-labelledby="trust-title">
        <div className="trust__grid">
          <figure className="trust__figure">
            <img
              src="/section-2.webp"
              alt="Regály s uskladněnými pneumatikami označenými pro jednotlivé zákazníky"
              className="trust__img"
              width={900}
              height={1000}
            />
          </figure>
          <div className="trust__content">
            <p className="section-eyebrow section-eyebrow--dark">
              Proč k nám do Olomouce
            </p>
            <h2 id="trust-title" className="section-title section-title--dark">
              Malá dílna, kde vás znají podle značky
            </h2>
            <p className="trust__intro">
              Burosh autoservice není řetězec. Jsme pneuservis, kde si
              zapamatujeme, že máte na zimu druhou sadu na plechu a že vám
              zbývá jedna sezona dezénu. Řekneme vám to dřív, než vás to
              překvapí na dálnici.
            </p>
            <dl className="reasons">
              {duvody.map((d) => (
                <div className="reason" key={d.k}>
                  <dt className="reason__k">{d.k}</dt>
                  <dd className="reason__v">{d.v}</dd>
                </div>
              ))}
            </dl>
            <div className="trust__where">
              <p className="trust__whereText">
                Najdete nás v Olomouci. Před sezonou volejte s předstihem —
                termíny na přezutí mizí rychle.
              </p>
              <a className="btn btn--solid" href="tel:+420585000000">
                Zavolat do dílny
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

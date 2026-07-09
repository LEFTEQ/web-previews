import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Svět Tonerů — tonery, tiskárny a servis kopírek v Brně",
  description:
    "Prodejna na Palackého třídě 122 v Brně. Tonery skladem, servis tiskáren a kopírek Konica Minolta, pronájem strojů a copy centrum. Přijďte, poradíme.",
  openGraph: {
    title: "Svět Tonerů — tonery a servis kopírek Brno",
    description:
      "Tonery skladem, rychlý servis kopírek a copy centrum přímo na Palackého třídě 122 v Brně.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Prodejna Svět Tonerů v Brně" }],
  },
};

const sluzby = [
  {
    kod: "01",
    nazev: "Tonery skladem",
    popis:
      "Originální i alternativní tonery a inkousty pro tiskárny a kopírky všech značek. Skladem k okamžitému odběru — přijdete, řeknete model, odejdete s náplní.",
    detail: "K odběru dnes",
  },
  {
    kod: "02",
    nazev: "Servis Konica Minolta",
    popis:
      "Stroj špiní, dělá pruhy, hlásí plnou odpadní nádobku nebo výměnu válcové jednotky? Odborná diagnostika a oprava kopírek a multifunkcí.",
    detail: "20+ let zkušeností",
  },
  {
    kod: "03",
    nazev: "Pronájem kopírek",
    popis:
      "Platíte jen za to, co natisknete. Tonery a servis v ceně smlouvy, záruka na stroje až 5 let. Výhodné pro kanceláře i menší firmy v Brně a okolí.",
    detail: "Servis zdarma v ceně",
  },
  {
    kod: "04",
    nazev: "Copy centrum",
    popis:
      "Zkopírujeme jeden dokument i rozsáhlý soubor. Tisk, kopírování, fotopapíry, etikety a spotřební materiál — vše na jednom místě na prodejně.",
    detail: "Na počkání",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Svět Tonerů, úvod">
          <span className="wordmark__svet">Svět</span>
          <span className="wordmark__toneru">Tonerů</span>
          <span className="wordmark__dot" aria-hidden="true" />
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#prodejna">Prodejna</a>
          <a className="topnav__phone" href="tel:+420541247000">541&nbsp;247&nbsp;000</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__inner">
          <div className="hero__text">
            <p className="eyebrow">
              <span className="eyebrow__mark" aria-hidden="true">C</span>
              Palackého tř. 122 · Brno-Semilasso
            </p>
            <h1 id="hero-title">
              Toner došel<br />
              <span className="hero__accent">v půlce tisku?</span>
            </h1>
            <p className="hero__lead">
              Máme ho skladem. Přinesete model tiskárny, odejdete s náplní — a
              když kopírka zlobí, spravíme ji. Kamenná prodejna a servis
              kancelářské techniky v Brně už přes dvacet let.
            </p>
            <div className="hero__cta">
              <a className="btn btn--primary" href="#sluzby">Co u nás pořídíte</a>
              <a className="btn btn--ghost" href="tel:+420541247000">Zavolat 541&nbsp;247&nbsp;000</a>
            </div>
            <dl className="hero__meta">
              <div>
                <dt>Otevřeno</dt>
                <dd>Po–Pá 8–17</dd>
              </div>
              <div>
                <dt>Servis</dt>
                <dd>Konica Minolta</dd>
              </div>
              <div>
                <dt>Tonery</dt>
                <dd>Všechny značky</dd>
              </div>
            </dl>
          </div>
          <figure className="hero__figure">
            <img
              src="/hero.webp"
              alt="Regály s tonery a kancelářskou technikou na prodejně Svět Tonerů v Brně"
              width={720}
              height={860}
              loading="eager"
            />
            <figcaption>
              <span className="chip">Skladem</span>
              Náplně pro tiskárny i kopírky, originální i alternativní.
            </figcaption>
          </figure>
        </div>
        <div className="hero__ticker" aria-hidden="true">
          <span>Tonery</span><i>·</i>
          <span>Inkousty</span><i>·</i>
          <span>Cartridge</span><i>·</i>
          <span>Kopírky</span><i>·</i>
          <span>Servis</span><i>·</i>
          <span>Copy centrum</span><i>·</i>
          <span>Pronájem</span><i>·</i>
          <span>Fotopapíry</span><i>·</i>
          <span>Etikety</span><i>·</i>
        </div>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-title">
        <div className="section-head">
          <p className="eyebrow eyebrow--dark">Čtyři věci, kvůli kterým sem lidé chodí</p>
          <h2 id="sluzby-title">Vše pro tisk na jednom místě</h2>
        </div>
        <ul className="cards">
          {sluzby.map((s) => (
            <li className="card" key={s.kod}>
              <span className="card__kod" aria-hidden="true">{s.kod}</span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <span className="card__detail">{s.detail}</span>
            </li>
          ))}
        </ul>
        <figure className="band">
          <img
            src="/section-1.webp"
            alt="Detail kopírky Konica Minolta při servisu"
            width={1200}
            height={520}
            loading="lazy"
          />
          <figcaption>
            <strong>Dárek k toneru na prodejně.</strong> Ke každému toneru
            koupenému u nás si vyberete Milku, Colu, nebo pivo — na co máte
            zrovna chuť. Platí jen při nákupu přímo na Palackého třídě.
          </figcaption>
        </figure>
      </section>

      <section className="prodejna" id="prodejna" aria-labelledby="prodejna-title">
        <div className="prodejna__grid">
          <div className="prodejna__text">
            <p className="eyebrow eyebrow--dark">O prodejně</p>
            <h2 id="prodejna-title">
              Dvacet let u Semilassa — a pořád vás poznáme podle tiskárny
            </h2>
            <p>
              Svět Tonerů je kamenný obchod a servis na Palackého třídě 122
              v Brně. Neprodáváme jen krabice s náplní — poradíme, který toner
              do vaší tiskárny patří, doplníme prázdnou cartridge a když stroj
              zlobí, dovezeme ho zpátky do provozu.
            </p>
            <ul className="facts">
              <li>
                <span className="facts__num">20+</span>
                <span className="facts__lbl">let se servisem kancelářské techniky</span>
              </li>
              <li>
                <span className="facts__num">1&nbsp;den</span>
                <span className="facts__lbl">běžná dostupnost tonerů skladem</span>
              </li>
              <li>
                <span className="facts__num">5 let</span>
                <span className="facts__lbl">záruka na stroje z pronájmu</span>
              </li>
            </ul>
            <address className="contact">
              <div>
                <span className="contact__lbl">Adresa</span>
                <a href="https://mapy.cz/?q=Palackého%20122%20Brno" target="_blank" rel="noreferrer">
                  Palackého tř. 122, 612 00 Brno
                </a>
              </div>
              <div>
                <span className="contact__lbl">Telefon</span>
                <a href="tel:+420541247000">541 247 000</a>
                <a href="tel:+420549248219">549 248 219</a>
              </div>
              <div>
                <span className="contact__lbl">E-mail</span>
                <a href="mailto:info@svettoneru.cz">info@svettoneru.cz</a>
              </div>
            </address>
          </div>
          <figure className="prodejna__figure">
            <img
              src="/section-2.webp"
              alt="Interiér prodejny Svět Tonerů s pultem a sortimentem tonerů"
              width={720}
              height={820}
              loading="lazy"
            />
          </figure>
        </div>
      </section>
    </main>
  );
}

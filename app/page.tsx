import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PK Interklima — vzduchotechnika a technika prostředí staveb, Pardubice",
  description:
    "Projektujeme a stavíme vzduchotechniku a vytápění pro budovy po celé ČR. Autorizace ČKAIT, průkazy energetické náročnosti, Nová zelená úsporám. Pardubice, od roku 1997.",
  openGraph: {
    title: "PK Interklima — vzduchotechnika, Pardubice",
    description:
      "Projekt, výpočet, realizace a vyvážení vzduchotechniky a vytápění. Autorizace ČKAIT. Pardubice, od roku 1997.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Vzduchotechnické rozvody" }],
  },
  icons: { icon: "/favicon.ico" },
};

const obory = [
  {
    kod: "VZT",
    nazev: "Projekční činnost",
    text: "Projektujeme vytápění a vzduchotechniku pod autorizací ČKAIT — obor Technika prostředí staveb. Od studie po prováděcí dokumentaci, s výkresy rozvodů, které stavbě sedí.",
    od: "od 1997",
  },
  {
    kod: "PENB",
    nazev: "Průkazy energetické náročnosti budov",
    text: "Vypracujeme PENB pro rodinné domy, bytovky i komerční objekty po celé ČR. Ke kolaudaci, prodeji i pronájmu — s jasným vysvětlením, co které písmeno na štítku znamená.",
    od: "od 2008",
  },
  {
    kod: "NZÚ",
    nazev: "Nová zelená úsporám",
    text: "Provedeme vás dotací od začátku do konce. Sledujeme změny podmínek, spočítáme, na co dosáhnete, a připravíme podklady, aby žádost prošla napoprvé.",
    od: "průběžně",
  },
  {
    kod: "REAL",
    nazev: "Realizace a hydraulické vyvážení",
    text: "Nainstalujeme, co jsme spočítali. Součástí je hydraulické vyvážení otopné soustavy podle vlastního výpočtu — aby topilo všude stejně a účet nerostl zbytečně.",
    od: "od 2013",
  },
];

export default function Page() {
  return (
    <main>
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="PK Interklima, domů">
          <span className="wm-pk">PK</span>
          <span className="wm-rest">Interklima</span>
        </a>
        <a className="topcall" href="tel:+420603945856">
          <span className="topcall-label">Zavolejte projektantovi</span>
          <span className="topcall-num">+420&nbsp;603&nbsp;945&nbsp;856</span>
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-nadpis">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Vzduchotechnické potrubí a rozvody uvnitř budovy"
            className="hero-img"
          />
          <div className="hero-veil" aria-hidden="true" />
        </div>

        <div className="hero-inner">
          <p className="eyebrow">Technika prostředí staveb · Pardubice · od 1997</p>
          <h1 id="hero-nadpis">
            Vzduch, který
            <br />
            <span className="flow">proudí přesně tam,</span>
            <br />
            kam má.
          </h1>
          <p className="lede">
            Navrhujeme a stavíme vzduchotechniku a vytápění pod autorizací
            ČKAIT. Nejdřív to spočítáme, pak to nainstalujeme a vyvážíme —
            takže topí i větrá tak, jak je na papíře.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="tel:+420603945856">
              Zavolat projektantovi
            </a>
            <a className="btn btn-ghost" href="#obor">
              Co pro vás uděláme
            </a>
          </div>

          <dl className="gauge" aria-label="Rozsah práce">
            <div>
              <dt>Autorizace</dt>
              <dd>ČKAIT</dd>
            </div>
            <div>
              <dt>Působíme</dt>
              <dd>po celé ČR</dd>
            </div>
            <div>
              <dt>V oboru</dt>
              <dd>od roku 1997</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="obor" id="obor" aria-labelledby="obor-nadpis">
        <div className="section-head">
          <p className="eyebrow eyebrow-dark">Od výpočtu po hotovou soustavu</p>
          <h2 id="obor-nadpis">
            Čtyři větve jedné firmy — a všechny mluví stejnou řečí
          </h2>
          <p className="section-sub">
            Projekt, energetický průkaz, dotace i samotná montáž pod jednou
            střechou. Nemusíte je slaďovat vy — sladíme je my.
          </p>
        </div>

        <ul className="ducts">
          {obory.map((o) => (
            <li className="duct" key={o.kod}>
              <span className="duct-kod" aria-hidden="true">
                {o.kod}
              </span>
              <div className="duct-body">
                <h3>{o.nazev}</h3>
                <p>{o.text}</p>
                <span className="duct-od">{o.od}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="onas" aria-labelledby="onas-nadpis">
        <div className="onas-media">
          <img
            src="/section-2.webp"
            alt="Detail rozvodů a technického zázemí vzduchotechniky"
            className="onas-img"
          />
        </div>
        <div className="onas-text">
          <p className="eyebrow eyebrow-dark">Kdo za tím stojí</p>
          <h2 id="onas-nadpis">Pardubická firma, která počítá dřív, než vrtá</h2>
          <p>
            PK Interklima s.r.o. vznikla v roce 1997 jako projekční a
            inženýrská kancelář pro technická zařízení budov. Postupně jsme
            přibrali energetické průkazy, dotační poradenství a v roce 2013 i
            vlastní realizace. Díky tomu za návrhem stojí lidé, kteří ho pak
            sami postaví.
          </p>

          <dl className="kontakt">
            <div>
              <dt>Provozovna</dt>
              <dd>Za Pasáží 1609, 530&nbsp;02 Pardubice</dd>
            </div>
            <div>
              <dt>Sídlo</dt>
              <dd>Dražkovice 108, 533&nbsp;33 Pardubice</dd>
            </div>
            <div>
              <dt>Telefon</dt>
              <dd>
                <a href="tel:+420603945856">+420&nbsp;603&nbsp;945&nbsp;856</a>
              </dd>
            </div>
            <div>
              <dt>E-mail</dt>
              <dd>
                <a href="mailto:projekce@pkinterklima.cz">
                  projekce@pkinterklima.cz
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}

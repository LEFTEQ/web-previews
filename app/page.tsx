import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SLADOVNA Apartments — samoobslužné apartmány v centru Olomouce",
  description:
    "Dvacet moderních apartmánů na Wolkerově ulici v Olomouci. Check-in přes aplikaci, kód do dveří po zaplacení, žádná recepce. Rezervujte přímo a ušetřete 10 %.",
};

const dispozice = [
  {
    kod: "1+kk",
    nazev: "Apartmá 1+kk",
    pro: "pro dva",
    popis:
      "Studio s manželskou postelí a kvalitní matrací. Vybrané pokoje nabízí i oddělené postele. Plně vybavená kuchyňská linka, smart TV, vlastní koupelna s WC.",
    detaily: ["Manželská nebo oddělené postele", "Kuchyňská linka", "Smart TV + wifi", "Vlastní koupelna"],
  },
  {
    kod: "2+kk",
    nazev: "Apartmá 2+kk",
    pro: "pro rodinu",
    popis:
      "Oddělená ložnice a obývací část s rozkládací sedačkou pro další dvě osoby. Ideál pro rodiny nebo delší pobyt. Kuchyň i soukromá koupelna s WC samozřejmostí.",
    detaily: ["Oddělená ložnice", "Rozkládací sedačka (+2)", "Plná kuchyň", "Až 4 osoby"],
  },
];

const kroky = [
  {
    c: "01",
    nazev: "Rezervujete přímo",
    text: "Objednáte na oficiálních stránkách se slevou 10 %. Potvrzení dorazí s odkazem do aplikace My Alfred.",
  },
  {
    c: "02",
    nazev: "Online check-in a platba",
    text: "Celou rezervaci spravujete v aplikaci. Vyplníte check-in, zaplatíte — a máte hotovo, žádné čekání na recepci.",
  },
  {
    c: "03",
    nazev: "Kód do dveří",
    text: "Po úhradě a dokončení check-inu se vám v aplikaci zobrazí přístupový kód k apartmánu. Přijedete, kdy potřebujete.",
  },
];

const okoli = [
  { minuty: "2 min", misto: "Tramvaj Wolkerova / Výstaviště Flora" },
  { minuty: "2 min", misto: "Přilehlý park a Botanická zahrada Flora" },
  { minuty: "0 min", misto: "Bistro Cajk přímo v přízemí budovy" },
  { minuty: "8 min", misto: "Horní náměstí a sloup Nejsvětější Trojice" },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="SLADOVNA Apartments, úvod">
          <span className="wordmark-main">SLADOVNA</span>
          <span className="wordmark-sub">Apartments · Olomouc</span>
        </a>
        <div className="topbar-contact">
          <a href="tel:+420725131133">+420 725 131 133</a>
          <a href="mailto:info@aptsladovna.cz">info@aptsladovna.cz</a>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Interiér moderního apartmánu SLADOVNA v Olomouci s postelí a kuchyňskou linkou"
            className="hero-img"
          />
        </div>
        <div className="hero-body">
          <p className="eyebrow">Wolkerova 1210/27 · centrum Olomouce</p>
          <h1 id="hero-title">
            Klíč je <span className="accent">kód</span> ve vašem telefonu.
          </h1>
          <p className="lead">
            Dvacet samoobslužných apartmánů bez recepce a bez čekání. Check-in
            vyřídíte v aplikaci, po zaplacení se odemknou dveře. Na jednu noc i
            na několik měsíců.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#rezervace">Rezervovat přímo — sleva 10 %</a>
            <a className="btn btn-ghost" href="#pokoje">Prohlédnout apartmány</a>
          </div>
          <dl className="hero-stats">
            <div>
              <dt>20</dt>
              <dd>apartmánů</dd>
            </div>
            <div>
              <dt>0</dt>
              <dd>recepcí</dd>
            </div>
            <div>
              <dt>2 min</dt>
              <dd>k tramvaji</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section pokoje" id="pokoje" aria-labelledby="pokoje-title">
        <div className="section-head">
          <p className="eyebrow">Naše apartmány</p>
          <h2 id="pokoje-title">Vyberte si podle dispozice</h2>
        </div>
        <div className="pokoje-grid">
          <div className="pokoje-visual">
            <img
              src="/section-1.webp"
              alt="Vybavený apartmán SLADOVNA — obývací část s kuchyní"
            />
          </div>
          <div className="pokoje-cards">
            {dispozice.map((d) => (
              <article className="pokoj" key={d.kod}>
                <div className="pokoj-head">
                  <span className="pokoj-kod">{d.kod}</span>
                  <div>
                    <h3>{d.nazev}</h3>
                    <p className="pokoj-pro">{d.pro}</p>
                  </div>
                </div>
                <p className="pokoj-popis">{d.popis}</p>
                <ul className="pokoj-detaily">
                  {d.detaily.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                <a className="link-arrow" href="#rezervace">
                  Zkontrolovat dostupnost
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section duvera" id="rezervace" aria-labelledby="duvera-title">
        <div className="duvera-grid">
          <div className="duvera-text">
            <p className="eyebrow">Jak to funguje</p>
            <h2 id="duvera-title">Ubytování, které si řídíte sami</h2>
            <p className="duvera-lead">
              SLADOVNA je moderní koncept samoobslužného ubytování v centru
              Olomouce. Žádné klíče na recepci, žádné otevírací hodiny — jen tři
              kroky v telefonu.
            </p>
            <ol className="kroky">
              {kroky.map((k) => (
                <li className="krok" key={k.c}>
                  <span className="krok-c">{k.c}</span>
                  <div>
                    <h3>{k.nazev}</h3>
                    <p>{k.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="info-pills">
              <span>Parkování zdarma v garáži</span>
              <span>Zcela nekuřácká budova</span>
              <span>Storno zdarma do 2 dnů předem</span>
            </div>
          </div>
          <aside className="duvera-aside">
            <img
              src="/section-2.webp"
              alt="Budova SLADOVNA Apartments a její okolí v centru Olomouce"
              className="duvera-img"
            />
            <div className="okoli-card">
              <h3>Co máte za rohem</h3>
              <ul className="okoli">
                {okoli.map((o) => (
                  <li key={o.misto}>
                    <span className="okoli-min">{o.minuty}</span>
                    <span className="okoli-misto">{o.misto}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

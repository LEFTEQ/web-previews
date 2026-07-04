import type { CSSProperties } from "react";

export const metadata = {
  title: "UNTAX — daňové spory a zastoupení v daňovém řízení | Hradec Králové",
  description:
    "Daňové poradenství UNTAX s.r.o. z Hradce Králové. Zastupujeme daňové subjekty ve sporech se správcem daně — chladná argumentace, důkazní řízení, kontroly a doměrky.",
  openGraph: {
    title: "UNTAX — vedeme za vás daňové spory",
    description:
      "Ve sporu vyhrává lepší argumentace. Zastoupení v daňovém řízení, kontroly, doměrky a odvolání. Hradec Králové a Praha.",
    type: "website",
    locale: "cs_CZ",
  },
};

const sluzby = [
  {
    marker: "§ 92",
    zakon: "důkazní břemeno",
    nadpis: "Vedeme za vás důkazní řízení",
    text: "Důkazní břemeno nese daňový subjekt — musíte prokázat vy. Sestavíme důkazy tak, aby obstály, a podáme je ve správný čas a ve správné formě. Nenecháme skutkový stav, který svědčí ve váš prospěch, padnout na chybně vedeném dokazování.",
  },
  {
    marker: "§ 85",
    zakon: "daňová kontrola",
    nadpis: "Provedeme vás daňovou kontrolou",
    text: "Od zahájení kontroly po projednání zprávy jednáme se správcem daně místo vás. Hlídáme lhůty, rozsah kontroly i to, co je a co není správce oprávněn požadovat. Vy se věnujete svému podnikání.",
  },
  {
    marker: "§ 109",
    zakon: "odvolání a soud",
    nadpis: "Napadneme doměrek, který nesedí",
    text: "Vysoký doměrek není konec. Sepíšeme odvolání, případně žalobu ke správnímu soudu, a argumentaci postavíme na logice a právu — ne na pocitu křivdy. Ten žádné řízení nevyhraje.",
  },
];

export default function Page() {
  return (
    <main className="untax">
      <header className="nav">
        <a className="wordmark" href="#" aria-label="UNTAX — daňové poradenství, úvod">
          <span className="wordmark__un">UN</span>
          <span className="wordmark__tax">TAX</span>
          <span className="wordmark__paragraph" aria-hidden="true">§</span>
        </a>
        <nav className="nav__links" aria-label="Hlavní navigace">
          <a href="#sluzby">Co pro vás uděláme</a>
          <a href="#duvera">O kanceláři</a>
          <a className="nav__cta" href="tel:+420495518226">Zavolat do Hradce</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-nadpis">
        <div className="hero__grid">
          <div className="hero__text">
            <p className="eyebrow">Daňové spory &middot; Hradec Králové &amp; Praha</p>
            <h1 id="hero-nadpis">
              Ve sporu vyhrává<br />
              <span className="hero__accent">lepší argumentace.</span>
            </h1>
            <p className="hero__lead">
              Spravedlivý hněv a pocit nespravedlnosti žádné daňové řízení
              nevyhrají. Je nutné chladně argumentovat v mezích dané logiky
              a práva. Přesně to za vás v UNTAX děláme.
            </p>
            <div className="hero__actions">
              <a className="btn btn--solid" href="tel:+420495518226">
                Zavolat +420 495 518 226
              </a>
              <a className="btn btn--ghost" href="#sluzby">
                Kdy vás máme zastoupit
              </a>
            </div>
          </div>
          <figure className="hero__figure">
            <img
              src="/hero.webp"
              alt="Detail spisu a poznámek při přípravě daňového řízení v kanceláři UNTAX"
              className="hero__img"
              width={880}
              height={1040}
            />
          </figure>
        </div>
      </section>

      <section className="warning" aria-labelledby="warning-nadpis">
        <p className="eyebrow eyebrow--light">Dvě věci, které daňové řízení dělají nebezpečným</p>
        <h2 id="warning-nadpis" className="warning__nadpis">
          &bdquo;Vše, co řeknete a napíšete, bude použito proti vám.&ldquo;
        </h2>
        <ol className="warning__list">
          <li>
            <span className="warning__num">01</span>
            <p>
              <strong>Důkazní břemeno nesete vy.</strong> Nikoli správce daně.
              Všechno musíte prokázat sami — a to obvykle bez znalosti složitých
              pravidel a lhůt.
            </p>
          </li>
          <li>
            <span className="warning__num">02</span>
            <p>
              <strong>Rozhoduje jen to, co předložíte.</strong> Výsledek řízení
              stojí a padá na tom, co daňový subjekt sám do spisu vloží a
              prohlásí. Jedno neopatrné tvrzení zvrátí i případ, který jinak
              stojí za vámi.
            </p>
          </li>
        </ol>
      </section>

      <section id="sluzby" className="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="section-head">
          <p className="eyebrow">Co pro vás uděláme</p>
          <h2 id="sluzby-nadpis">
            Nechte se zastoupit specialistou — dřív, než něco řeknete
          </h2>
        </div>
        <div className="sluzby__grid">
          {sluzby.map((s) => (
            <article className="sluzba" key={s.marker}>
              <div className="sluzba__marker">
                <span className="sluzba__par">{s.marker}</span>
                <span className="sluzba__zakon">{s.zakon}</span>
              </div>
              <h3>{s.nadpis}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="duvera" className="duvera" aria-labelledby="duvera-nadpis">
        <div className="duvera__grid">
          <figure className="duvera__figure">
            <img
              src="/section-2.webp"
              alt="Pracovní stůl daňového poradce UNTAX s dokumenty a šálkem kávy"
              className="duvera__img"
              width={900}
              height={620}
            />
          </figure>
          <div className="duvera__text">
            <p className="eyebrow">O kanceláři UNTAX</p>
            <h2 id="duvera-nadpis">
              Daňové řízení bereme jako spor, který se dá vyhrát
            </h2>
            <p>
              Nespecializujeme se na hezky vyplněná přiznání. Specializujeme se
              na okamžik, kdy přijde výzva, kontrola nebo doměrek — a je potřeba
              se bránit. Argumentaci stavíme na přísné logice a právu, protože
              jen ta v daňovém sporu obstojí.
            </p>
            <dl className="duvera__facts">
              <div>
                <dt>Hradec Králové</dt>
                <dd><a href="tel:+420495518226">+420 495 518 226</a></dd>
              </div>
              <div>
                <dt>Praha</dt>
                <dd><a href="tel:+420296365565">+420 296 365 565</a></dd>
              </div>
              <div>
                <dt>Kdy volat</dt>
                <dd>Ideálně dřív, než odpovíte správci daně</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}

import type { CSSProperties } from "react";

const nabidka = [
  {
    cislo: "01",
    nazev: "Svatby pod klenbou",
    text: "Obřad na dvoře, hostina ve staré jídelně s trámovým stropem. Zvládneme menší i větší den — od domluvy termínu po poslední přípitek. Nejlíp nám zavolejte, sejdeme se a projdeme všechno na místě.",
    detail: "do 80 hostů · vlastní kuchyně · parkování",
  },
  {
    cislo: "02",
    nazev: "Firemní večírky a oslavy",
    text: "Vánoční večírek, kulaté narozeniny, výroční setkání. Domluvíme menu podle vás, otevřeme sál jen pro vaši společnost a postaráme se o obsluhu celý večer.",
    detail: "soukromý sál · rauty i servírované menu",
  },
  {
    cislo: "03",
    nazev: "Ubytování v penzionu",
    text: "Klidné pokoje ve zdech, kterým je přes sto let. Ideální pro hosty vaší akce, kteří chtějí zůstat přes noc a ráno posnídat u nás, ne spěchat domů.",
    detail: "pokoje pro hosty akcí · snídaně v ceně",
  },
];

const duvera = [
  { k: "Karty i stravenky", v: "Platíte, jak vám vyhovuje." },
  { k: "Nekuřácké prostory", v: "Čistý vzduch uvnitř, kouření na dvoře." },
  { k: "Psi vítáni", v: "Na vodítku a ve venkovních prostorech." },
  { k: "Vlastní kuchyně", v: "Vaříme na místě, menu ladíme s vámi." },
];

export default function Page() {
  return (
    <main className="vt">
      <header className="vt-nav">
        <a className="vt-brand" href="#uvod" aria-label="Restaurace Větrník, úvod">
          <span className="vt-brand-mark" aria-hidden="true">✦</span>
          <span className="vt-brand-text">
            <span className="vt-brand-line1">Restaurace</span>
            <span className="vt-brand-line2">Větrník</span>
          </span>
        </a>
        <nav className="vt-nav-links" aria-label="Hlavní navigace">
          <a href="#nabidka">Akce &amp; svatby</a>
          <a href="#historie">Historie</a>
          <a className="vt-nav-call" href="tel:+420212345678">Zavolat</a>
        </nav>
      </header>

      <section className="vt-hero" id="uvod">
        <div className="vt-hero-media">
          <img
            src="/hero.webp"
            alt="Historická budova a interiér Restaurace Větrník v Praze"
            className="vt-hero-img"
          />
          <div className="vt-hero-veil" aria-hidden="true" />
        </div>
        <div className="vt-hero-inner">
          <p className="vt-eyebrook">Praha · penzion s restaurací · ve zdech od roku 1912</p>
          <h1 className="vt-hero-title">
            Místo, kde na vás
            <span className="vt-hero-em">dýchne historie.</span>
          </h1>
          <p className="vt-hero-lead">
            Otevíráme dům jen pro vaši událost — svatbu, večírek, oslavu. Žádný
            spěch mezi cizími stoly, celý Větrník patří na ten den vám.
          </p>
          <div className="vt-hero-actions">
            <a className="vt-btn vt-btn-primary" href="tel:+420212345678">
              Zavolat a domluvit termín
            </a>
            <a className="vt-btn vt-btn-ghost" href="mailto:rezervace@vetrnik-praha.cz">
              Napsat e-mail
            </a>
          </div>
        </div>
      </section>

      <section className="vt-section vt-offer" id="nabidka">
        <div className="vt-section-head">
          <span className="vt-eyebrook">Pro co si nás vybíráte</span>
          <h2 className="vt-h2">Tři důvody, proč rezervovat celý dům</h2>
        </div>
        <ol className="vt-cards">
          {nabidka.map((it) => (
            <li className="vt-card" key={it.cislo}>
              <span className="vt-card-no" aria-hidden="true">{it.cislo}</span>
              <h3 className="vt-card-title">{it.nazev}</h3>
              <p className="vt-card-text">{it.text}</p>
              <p className="vt-card-detail">{it.detail}</p>
            </li>
          ))}
        </ol>
        <figure className="vt-offer-fig">
          <img
            src="/section-1.webp"
            alt="Prostřený sál Restaurace Větrník připravený na svatební hostinu"
            className="vt-offer-img"
          />
        </figure>
      </section>

      <section className="vt-section vt-trust" id="historie">
        <div className="vt-trust-grid">
          <figure className="vt-trust-fig">
            <img
              src="/section-2.webp"
              alt="Detail historického interiéru penzionu Větrník"
              className="vt-trust-img"
            />
          </figure>
          <div className="vt-trust-body">
            <span className="vt-eyebrook">O nás</span>
            <h2 className="vt-h2">Jsme tu stále — jen jinak, a jen pro vás</h2>
            <p className="vt-trust-lead">
              Denní provoz jsme zavřeli, ale dům nezhasl. Dnes ho otevíráme
              jednomu stolu naráz: soukromým akcím, kde záleží na tom, aby se
              hosté cítili doma. Vaříme ve vlastní kuchyni, obsluhu vedeme sami
              a na každou akci máme čas si s vámi sednout dopředu.
            </p>
            <dl className="vt-trust-list">
              {duvera.map((d) => (
                <div className="vt-trust-item" key={d.k}>
                  <dt>{d.k}</dt>
                  <dd>{d.v}</dd>
                </div>
              ))}
            </dl>
            <a className="vt-btn vt-btn-primary vt-trust-cta" href="tel:+420212345678">
              Domluvit prohlídku
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

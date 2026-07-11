export default function Page() {
  const sluzby = [
    {
      cislo: "01",
      nazev: "Bytové domy",
      popis: "Okna, prosklené chodby a vstupní portály panelových i cihlových domů. Vysoké patra řešíme teleskopickou tyčí i lezeckou technikou.",
      detail: "od 2. NP · SVJ a bytová družstva"
    },
    {
      cislo: "02",
      nazev: "Firmy a provozovny",
      popis: "Prosklené fasády, výlohy a interiérové příčky kanceláří. Přijedeme mimo provozní dobu, ať vám neblokujeme provoz.",
      detail: "pravidelně i jednorázově"
    },
    {
      cislo: "03",
      nazev: "Domácnosti",
      popis: "Okna, rámy, parapety i žaluzie v bytě nebo rodinném domě. Po nás zůstane sklo bez šmouh a suchý parapet.",
      detail: "rodinné domy i byty"
    }
  ];

  const kroky = [
    { k: "Odsávaná voda", v: "Osmoticky čištěná voda a měkký kartáč na teleskopické tyči — dosáhneme do pater bez lešení a bez chemie." },
    { k: "Stěrka a mikrovlákno", v: "Klasika na spodní okna a výlohy. Stěrka sundá vodu, mikrovlákno doleští rohy a rámy." },
    { k: "Rámy a parapety", v: "Nemyjeme jen sklo. Otřeme rámy, parapety i vnitřní kliky, ať okno vypadá jako nové." }
  ];

  return (
    <main className="gl">
      <header className="gl-nav">
        <a className="gl-logo" href="#top" aria-label="Glanc úklidy, mytí oken Ostrava">
          <span className="gl-logo-mark" aria-hidden="true">
            <span className="gl-squeegee" />
          </span>
          <span className="gl-logo-word">Glanc<span className="gl-logo-sub">úklidy · Ostrava</span></span>
        </a>
        <a className="gl-nav-cta" href="tel:+420604347030">Zavolat 604 347 030</a>
      </header>

      <section className="gl-hero" id="top">
        <div className="gl-hero-media">
          <img
            src="/hero.webp"
            alt="Umyté prosklené okno s výhledem — čisté sklo bez šmouh po práci Glanc úklidy"
            className="gl-hero-img"
          />
          <div className="gl-hero-wipe" aria-hidden="true" />
        </div>
        <div className="gl-hero-inner">
          <p className="gl-eyebrow">Mytí oken · Ostrava a okolí</p>
          <h1 className="gl-hero-h">
            Sklo, přes&nbsp;které <span className="gl-hl">je vidět</span>, ne šmouhy.
          </h1>
          <p className="gl-hero-lead">
            Myjeme okna bytových domů, firem i domácností po celé Ostravě. Osmotická voda, stěrka
            a čistý parapet — přijedeme, uklidíme po sobě a odjedeme, ať se máte na co dívat.
          </p>
          <div className="gl-hero-actions">
            <a className="gl-btn" href="tel:+420604347030">Zavolat a domluvit termín</a>
            <a className="gl-btn gl-btn-ghost" href="mailto:info@glanc-uklidy.cz">Napsat poptávku</a>
          </div>
          <dl className="gl-hero-facts">
            <div><dt>Kde myjeme</dt><dd>Ostrava a okolí</dd></div>
            <div><dt>Do výšky</dt><dd>bez lešení, teleskopem</dd></div>
            <div><dt>Bez chemie</dt><dd>osmotická voda</dd></div>
          </dl>
        </div>
      </section>

      <section className="gl-services" aria-labelledby="sluzby-h">
        <div className="gl-sec-head">
          <p className="gl-eyebrow">Co u nás objednáte</p>
          <h2 id="sluzby-h" className="gl-sec-h">Tři místa, kde vám umyjeme okna</h2>
        </div>
        <ol className="gl-cards">
          {sluzby.map((s) => (
            <li className="gl-card" key={s.cislo}>
              <span className="gl-card-num" aria-hidden="true">{s.cislo}</span>
              <h3 className="gl-card-h">{s.nazev}</h3>
              <p className="gl-card-p">{s.popis}</p>
              <p className="gl-card-tag">{s.detail}</p>
            </li>
          ))}
        </ol>
        <figure className="gl-band">
          <img
            src="/section-1.webp"
            alt="Pracovník Glanc úklidy myje prosklenou fasádu firemní budovy v Ostravě"
            className="gl-band-img"
          />
          <figcaption className="gl-band-cap">
            Prosklené fasády a výlohy myjeme mimo vaši otevírací dobu — ráno máte čisto a zákazník to vidí.
          </figcaption>
        </figure>
      </section>

      <section className="gl-trust" aria-labelledby="jak-h">
        <div className="gl-trust-grid">
          <div className="gl-trust-text">
            <p className="gl-eyebrow">Jak to děláme</p>
            <h2 id="jak-h" className="gl-sec-h">Poctivá práce, po které nezůstane loužička</h2>
            <p className="gl-trust-lead">
              Glanc jsme založili s jednoduchým pravidlem: okno je hotové, až když je čisté sklo,
              suchý rám i utřený parapet. Pracujeme po Ostravě, domluvíte se přímo s tím, kdo přijede.
            </p>
            <ul className="gl-steps">
              {kroky.map((krok) => (
                <li key={krok.k} className="gl-step">
                  <h3 className="gl-step-h">{krok.k}</h3>
                  <p className="gl-step-p">{krok.v}</p>
                </li>
              ))}
            </ul>
            <p className="gl-trust-quote">
              „Objednávám je na celý panelák dvakrát do roka. Přijedou na čas, chodby jsou
              prosvětlené a nezůstane po nich nepořádek.“
              <span className="gl-trust-quote-who">— předseda SVJ, Ostrava-Poruba</span>
            </p>
          </div>
          <figure className="gl-trust-media">
            <img
              src="/section-2.webp"
              alt="Detail stěrky na skle při mytí okna domácnosti"
              className="gl-trust-img"
            />
          </figure>
        </div>
      </section>
    </main>
  );
}

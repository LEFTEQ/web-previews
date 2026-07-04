import React from "react";

export default function Page() {
  const services = [
    {
      code: "01",
      title: "Ostraha objektů",
      desc: "Strážní na recepci i v terénu. Kontrolní obchůzky, přístupová kontrola, evidence pohybu — od kancelářské budovy po energetickou infrastrukturu.",
    },
    {
      code: "02",
      title: "Dohledové centrum PCO",
      desc: "Pult centralizované ochrany napojený na vaše objekty. Signál dorazí k nám, zásahová skupina vyjíždí. Sledujeme desítky stanovišť najednou.",
    },
    {
      code: "03",
      title: "Ostraha osob a majetku",
      desc: "Osobní ochrana, doprovod, dohled nad majetkem. Diskrétně a bez dramatu — nejlepší zásah je ten, který nebyl potřeba.",
    },
    {
      code: "04",
      title: "Převoz hotovosti a cenin",
      desc: "Zabezpečená přeprava financí a cenných zásilek. Vyškolená posádka, sledovaná trasa, jasný protokol od převzetí po předání.",
    },
    {
      code: "05",
      title: "Bezpečnostní technologie",
      desc: "Kamery, čidla, přístupové systémy. Navrhneme, nainstalujeme a napojíme na naše dohledové centrum, aby technika a lidé pracovali společně.",
    },
    {
      code: "06",
      title: "Facility a úklid",
      desc: "Provoz nemovitosti od A do Z. Recepce, správa, profesionální úklid — abyste měli jeden kontakt na všechno kolem budovy.",
    },
  ];

  const references = [
    {
      quote:
        "Ostrahu na vybraných objektech nám zajišťují od roku 2022. Zásadní je pro nás řešení neočekávaných situací a ochota je řešit — komunikace se strážnými i manažery je vždy na velmi dobré úrovni.",
      author: "Michal Šams",
      org: "Pražská plynárenská, a.s.",
    },
    {
      quote:
        "Spolupráci jsme navázali hladce, pružně a rychle. Vždy jsme se mohli spolehnout, vše bylo řešeno velmi proklientsky. Nebylo nic, s čím by si Westpoint neporadil.",
      author: "Ludmila Cvrčková",
      org: "MINT Investments",
    },
  ];

  return (
    <main className="wp">
      <header className="wp-topbar">
        <a className="wp-mark" href="#" aria-label="Westpoint, bezpečnostní agentura">
          <span className="wp-mark__west">WEST</span>
          <span className="wp-mark__point">POINT</span>
        </a>
        <div className="wp-topbar__meta">
          <span className="wp-badge" aria-hidden="true">
            <span className="wp-dot" />
            NONSTOP
          </span>
          <a className="wp-tel" href="tel:+420267310560">
            +420&nbsp;267&nbsp;310&nbsp;560
          </a>
        </div>
      </header>

      <section className="wp-hero" aria-labelledby="wp-hero-title">
        <img
          className="wp-hero__img"
          src="/hero.webp"
          alt="Strážný Westpoint na obchůzce v pražském objektu za noční ostrahy"
        />
        <div className="wp-hero__grade" aria-hidden="true" />

        <div className="wp-hero__inner">
          <p className="wp-eyebrow">Bezpečnostní agentura · Praha · od roku 1998</p>
          <h1 id="wp-hero-title" className="wp-hero__title">
            Někdo musí být <em>vzhůru</em>,<br />
            když všichni spí.
          </h1>
          <p className="wp-hero__lead">
            Chráníme kancelářské budovy, energetickou infrastrukturu i lidi — fyzicky
            v terénu i z dohledového centra, které nezhasne. Váš klid je náš celodenní
            provoz.
          </p>
          <div className="wp-hero__actions">
            <a className="wp-btn wp-btn--primary" href="#poptavka">
              Nezávazně poptat ostrahu
            </a>
            <a className="wp-btn wp-btn--ghost" href="#sluzby">
              Co zajišťujeme
            </a>
          </div>
        </div>

        <dl className="wp-hero__watch" aria-label="Náš provoz v číslech">
          <div className="wp-watch">
            <dt>Provoz</dt>
            <dd>24 / 7</dd>
          </div>
          <div className="wp-watch">
            <dt>Na trhu</dt>
            <dd>od&nbsp;1998</dd>
          </div>
          <div className="wp-watch">
            <dt>Klientů</dt>
            <dd>600+</dd>
          </div>
          <div className="wp-watch">
            <dt>Jakost</dt>
            <dd>ISO&nbsp;9001</dd>
          </div>
        </dl>
      </section>

      <section className="wp-services" id="sluzby" aria-labelledby="wp-services-title">
        <div className="wp-section-head">
          <p className="wp-eyebrow wp-eyebrow--dark">Rozvrh služby</p>
          <h2 id="wp-services-title">
            Šest stanovišť, jedna centrála
          </h2>
          <p className="wp-section-head__lead">
            Každá naše služba je post, který někdo drží. Vyberte, co potřebujete
            hlídat — my sestavíme tým, techniku i noční směny.
          </p>
        </div>

        <ol className="wp-post-list">
          {services.map((s) => (
            <li className="wp-post" key={s.code}>
              <span className="wp-post__code" aria-hidden="true">
                {s.code}
              </span>
              <div className="wp-post__body">
                <h3 className="wp-post__title">{s.title}</h3>
                <p className="wp-post__desc">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="wp-trust" id="reference" aria-labelledby="wp-trust-title">
        <div className="wp-trust__grid">
          <div className="wp-trust__media">
            <img
              src="/section-1.webp"
              alt="Dohledové centrum Westpoint s operátorem u monitorovací stěny"
              className="wp-trust__img"
            />
          </div>
          <div className="wp-trust__text">
            <p className="wp-eyebrow wp-eyebrow--dark">Vaše bezpečí, naše starost</p>
            <h2 id="wp-trust-title">
              Přes 25 let stojíme<br />ve službě
            </h2>
            <p>
              Westpoint chrání majetek klientů i je samotné od roku 1998.
              V ostraze majetku patříme v Česku ke špičce — jako jedna z mála
              agentur dokážeme centralizovaně zajistit desítky strategických
              stanovišť současně, včetně kritické energetické infrastruktury.
            </p>
            <p>
              Zakládáme si na důvěře, kvalitě a lidském přístupu. Ke klientům,
              k partnerům i mezi sebou navzájem. Dobré reference nejsou
              samozřejmost — jsou to naše nejlepší doporučení.
            </p>
            <ul className="wp-facts">
              <li>Certifikát ČSN EN ISO 9001</li>
              <li>Objekt od A do Z</li>
              <li>Solidní jednání</li>
              <li>Flexibilita směn</li>
            </ul>
          </div>
        </div>

        <div className="wp-quotes">
          {references.map((r) => (
            <figure className="wp-quote" key={r.author}>
              <blockquote>{r.quote}</blockquote>
              <figcaption>
                <span className="wp-quote__author">{r.author}</span>
                <span className="wp-quote__org">{r.org}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="wp-trust__strip">
          <img
            src="/section-2.webp"
            alt="Zásahová skupina Westpoint připravená k výjezdu"
            className="wp-trust__strip-img"
          />
          <div className="wp-trust__strip-text">
            <h3>Signál dorazí — my vyjíždíme</h3>
            <p>
              Pult centralizované ochrany přijme poplach a zásahová skupina je
              na cestě. Bez čekání, bez výmluv, ve dne i v noci.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

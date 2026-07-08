import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      no: "01",
      title: "Občanské a rodinné právo",
      desc: "Rozvody, péče o děti, vypořádání majetku i sousedské spory. Provedu Vás řízením tak, abyste věděli, co Vás čeká v každém kroku.",
    },
    {
      no: "02",
      title: "Obchodní a smluvní právo",
      desc: "Zakládání a změny společností, smlouvy, pohledávky a jejich vymáhání. Pro fyzické i právnické osoby v Pardubickém kraji.",
    },
    {
      no: "03",
      title: "Insolvence a oddlužení",
      desc: "Jako insolvenční správkyně zapsaná od roku 2012 vedu oddlužení i řízení proti dlužníkům s praktickou znalostí obou stran.",
    },
    {
      no: "04",
      title: "Mediace a dohody",
      desc: "Zapsaná mediátorka od roku 2014. Když je dohoda lepší než soud, pomohu ji najít — rychleji, levněji a bez zbytečné bolesti.",
    },
  ];

  const facts = [
    { k: "1994", v: "kancelář otevřena v Pardubicích" },
    { k: "2012", v: "insolvenční správkyně" },
    { k: "2014", v: "zapsaná mediátorka" },
  ];

  return (
    <main className="pg">
      <header className="top">
        <a className="wordmark" href="#uvod" aria-label="Línková Šárka, advokátní kancelář, úvod">
          <span className="wm-name">Línková</span>
          <span className="wm-sub">JUDr. Šárka &middot; advokátka</span>
        </a>
        <nav className="nav" aria-label="Hlavní navigace">
          <a href="#sluzby">Právní služby</a>
          <a href="#o-mne">O kanceláři</a>
          <a className="nav-call" href="tel:+420466000000">Zavolat</a>
        </nav>
      </header>

      <section className="hero" id="uvod">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Advokátní kancelář JUDr. Šárky Línkové v Pardubicích"
            className="hero-img"
            width={1600}
            height={1200}
          />
          <div className="hero-scrim" aria-hidden="true" />
        </div>

        <div className="hero-body">
          <p className="eyebrow">Advokátní kancelář &middot; Pardubice &middot; od roku 1994</p>
          <h1 className="hero-title">
            Vaše práva<br />
            <em>před soudem</em> i&nbsp;<em>u&nbsp;stolu</em>.
          </h1>
          <p className="hero-lede">
            Vedu spory, kde je potřeba tvrdost, a hledám dohody tam, kde se ještě
            dohodnout dá. Individuální přístup, diskrétnost a jasná řeč bez
            paragrafové mlhy — to je práce v mé kanceláři už třicet let.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="tel:+420466000000">Zavolat kanceláři</a>
            <a className="btn btn-ghost" href="#sluzby">Právní služby</a>
          </div>
          <dl className="hero-facts">
            {facts.map((f) => (
              <div key={f.k} className="fact">
                <dt>{f.k}</dt>
                <dd>{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="services" id="sluzby">
        <div className="sec-head">
          <p className="eyebrow">Právní služby</p>
          <h2 className="sec-title">Celé spektrum práva, jeden odpovědný člověk.</h2>
          <p className="sec-lede">
            Nepředáváte se od koncipienta ke koncipientovi. Vaši věc vedu já —
            od prvního rozhovoru po poslední podpis.
          </p>
        </div>

        <ol className="srv-list">
          {services.map((s) => (
            <li key={s.no} className="srv">
              <span className="srv-no" aria-hidden="true">{s.no}</span>
              <div className="srv-text">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="srv-figure">
          <img
            src="/section-1.webp"
            alt="Detail práce v advokátní kanceláři"
            width={1400}
            height={900}
          />
          <figcaption>
            On-line poradenství i osobní konzultace v centru Pardubic.
          </figcaption>
        </figure>
      </section>

      <section className="about" id="o-mne">
        <div className="about-grid">
          <figure className="about-portrait">
            <img
              src="/section-2.webp"
              alt="JUDr. Šárka Línková, advokátka"
              width={1000}
              height={1200}
            />
          </figure>

          <div className="about-body">
            <p className="eyebrow">O kanceláři</p>
            <blockquote className="pull">
              „Klient má vždycky vědět, kde jeho věc stojí. Žádné překvapení
              v&nbsp;obálce.“
            </blockquote>
            <p className="about-p">
              JUDr. Šárka Línková je absolventkou Právnické fakulty Univerzity
              Karlovy. Kancelář v&nbsp;Pardubicích vede jako nezávislou od roku
              1994 a&nbsp;za tu dobu si vydobyla pověst, na kterou se dá spolehnout.
            </p>
            <p className="about-p">
              Spolupracuji s&nbsp;daňovými poradci, notáři, soudními znalci
              i&nbsp;realitními kancelářemi — když Vaše věc přesáhne čisté právo,
              máte pod jednou střechou celý tým.
            </p>

            <ul className="pledge">
              <li>Individuální přístup ke každé věci</li>
              <li>Diskrétnost jako samozřejmost</li>
              <li>Průběžná informovanost, žádné mlčení</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

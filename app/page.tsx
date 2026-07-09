import type { CSSProperties } from "react";

export default function Page() {
  const properties = [
    { name: "Centrum Poděbradova", kind: "Byty i obchod", note: "Reprezentativní adresa v srdci města" },
    { name: "Kancelářská budova Brandlova", kind: "Kanceláře", note: "Administrativní prostory vyššího standardu" },
    { name: "Bytový dům Pobialova 15", kind: "Bydlení", note: "Byty v atraktivní klidové lokalitě" },
    { name: "Poliklinika Kostelní", kind: "Ordinace", note: "Zdravotnické a komerční prostory" },
    { name: "Bytový dům 28. října", kind: "Bydlení", note: "Nájemní byty na hlavní třídě" },
    { name: "Francouzská kavárna", kind: "Gastro", note: "Provozovna v parteru domu" },
    { name: "Administrativní centrum Biskupská", kind: "Kanceláře", note: "Komerční a administrativní plochy" },
    { name: "Bytový dům Pobialova 21", kind: "Bydlení", note: "Byty středního a vyššího standardu" },
    { name: "Obchodní prostory Pobialova", kind: "Retail", note: "Prodejní jednotky v přízemí" },
  ];

  const services = [
    {
      id: "01",
      title: "Bydlení",
      body: "Byty středního i vyššího standardu k dlouhodobému pronájmu. Kterýkoli z nich upravíme podle vašich představ — od dispozice po povrchy.",
    },
    {
      id: "02",
      title: "Podnikání",
      body: "Kanceláře, ordinace a obchodní prostory v centru Ostravy. Adresa, kterou zákazníci najdou a zapamatují si ji.",
    },
    {
      id: "03",
      title: "Parkování",
      body: "Ke každé nemovitosti řešíme i bezproblémové zaparkování auta. Žádné kroužení kolem bloku.",
    },
    {
      id: "04",
      title: "Správa",
      body: "Komplexní správa a údržba nemovitostí. O dům se staráme tak, aby vám zbyla jen ta příjemná část.",
    },
  ];

  return (
    <main className="sn">
      <header className="sn-top">
        <a className="sn-mark" href="#uvod" aria-label="Slezské nemovitosti — úvod">
          <span className="sn-mark-sn">SN</span>
          <span className="sn-mark-full">
            Slezské<span className="sn-mark-line">nemovitosti</span>
          </span>
        </a>
        <nav className="sn-nav" aria-label="Hlavní">
          <a href="#nabidka">Nabídka</a>
          <a href="#portfolio">Domy</a>
          <a className="sn-nav-call" href="tel:+420596110110">Zavolat</a>
        </nav>
      </header>

      <section className="sn-hero" id="uvod">
        <div className="sn-hero-frame">
          <img
            src="/hero.webp"
            alt="Činžovní dům Slezských nemovitostí v centru Ostravy"
            className="sn-hero-img"
          />
          <div className="sn-hero-plate">
            <span className="sn-eyebrow">Ostrava — centrum, od roku 1994</span>
            <h1>
              Domy v centru,<br />
              <em>které vám sednou</em>
            </h1>
            <p>
              Vlastníme reality v srdci Ostravy a upravíme je přesně podle vás —
              ať už chcete slušně bydlet, podnikat, nebo jen v klidu zaparkovat.
            </p>
            <div className="sn-hero-actions">
              <a className="sn-btn" href="tel:+420596110110">Zavolat: 596&nbsp;110&nbsp;110</a>
              <a className="sn-btn sn-btn-ghost" href="mailto:info@slezskenemovitosti.cz">
                Napsat e-mail
              </a>
            </div>
          </div>
        </div>
        <p className="sn-hero-strip" aria-hidden="true">
          Poděbradova · Brandlova · Pobialova · Kostelní · 28.&nbsp;října · Biskupská
        </p>
      </section>

      <section className="sn-services" id="nabidka">
        <div className="sn-section-head">
          <span className="sn-eyebrow sn-eyebrow-dark">Co u nás najdete</span>
          <h2>Čtyři věci, se kterými za námi lidé chodí</h2>
        </div>
        <ol className="sn-service-list">
          {services.map((s) => (
            <li key={s.id} className="sn-service">
              <span className="sn-service-num">{s.id}</span>
              <div className="sn-service-text">
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <figure className="sn-services-fig">
          <img
            src="/section-1.webp"
            alt="Interiér pronajímaného bytu Slezských nemovitostí v Ostravě"
          />
          <figcaption>
            Každý byt i prostor upravíme na míru — od dispozice po povrchy.
          </figcaption>
        </figure>
      </section>

      <section className="sn-portfolio" id="portfolio">
        <div className="sn-section-head">
          <span className="sn-eyebrow">Naše adresy</span>
          <h2>Domy, které v Ostravě spravujeme</h2>
          <p className="sn-portfolio-lead">
            Reálné budovy v centru města — bydlení, kanceláře, ordinace i obchod.
            O každou se staráme sami, včetně údržby a parkování.
          </p>
        </div>
        <div className="sn-portfolio-grid">
          <img
            src="/section-2.webp"
            alt="Fasáda administrativní budovy Slezských nemovitostí v centru Ostravy"
            className="sn-portfolio-img"
          />
          <ul className="sn-directory">
            {properties.map((p, i) => (
              <li key={p.name} className="sn-directory-row">
                <span className="sn-directory-idx">{String(i + 1).padStart(2, "0")}</span>
                <span className="sn-directory-name">{p.name}</span>
                <span className="sn-directory-kind">{p.kind}</span>
                <span className="sn-directory-note">{p.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

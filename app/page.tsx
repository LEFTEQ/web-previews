import type { CSSProperties } from "react";

export default function Page() {
  const nabidka = [
    {
      cislo: "01",
      nazev: "Teplá jídla v miskách",
      popis:
        "Balená hotová jídla v plastových miskách, které rovnou vložíte do mikrovlnky. Uvařeno ráno, dovezeno v poledne — bez ztraceného tepla mezi kuchyní a vaším stolem.",
      detail: "Miska s víčkem · vhodné pro ohřev",
    },
    {
      cislo: "02",
      nazev: "Studená kuchyně",
      popis:
        "Chlebíčky, obložené housky, bagety, sendviče a hamburgery skládané ráno na objednávku. Klasika, kterou v Ústí znají z každé oslavy i porady.",
      detail: "Na tácu i jednotlivě",
    },
    {
      cislo: "03",
      nazev: "Catering a hostiny",
      popis:
        "Svatby, rauty, firemní akce. Domluvíme množství, čas i způsob výdeje. Dodáme i samostatné polévky a jídla ve větším balení pro restaurace a akce.",
      detail: "Podle vaší akce a počtu hostů",
    },
  ];

  const rozvoz = [
    { cas: "8:00", text: "Rozvoz startuje" },
    { cas: "14:00", text: "Poslední rozvoz dne" },
    { cas: "na čas", text: "Konkrétní hodinu domluvíme individuálně" },
  ];

  return (
    <main className="jv">
      <header className="jv-topbar">
        <a className="jv-wordmark" href="#" aria-label="JV-Integra, rozvoz jídel Ústí nad Labem">
          <span className="jv-mark-jv">JV</span>
          <span className="jv-mark-integra">Integra</span>
          <span className="jv-mark-mesto">rozvoz jídel · Ústí nad Labem</span>
        </a>
        <a className="jv-order-link" href="#objednat">
          Objednat oběd
        </a>
      </header>

      <section className="jv-hero" aria-labelledby="hero-title">
        <div className="jv-hero-img">
          <img
            src="/hero.webp"
            alt="Balené teplé obědy v miskách připravené k rozvozu po Ústí nad Labem"
            className="jv-hero-photo"
          />
        </div>

        <div className="jv-hero-body">
          <p className="jv-eyebrow">Denně od roku, kdy si na poctivé porce ještě dávalo záležet</p>
          <h1 id="hero-title" className="jv-hero-title">
            Dnes uvařeno.
            <br />
            <em>Dnes dovezeno.</em>
          </h1>
          <p className="jv-hero-lede">
            Teplá i studená kuchyně z Ústí nad Labem. Vaříme ráno, rozvážíme
            přes poledne — do firem, do jídelny i k vám domů. Žádné mražené
            polotovary, žádné čekání do večera.
          </p>
          <div className="jv-hero-actions">
            <a className="jv-btn jv-btn-primary" href="#objednat">
              Chci objednat jídlo
            </a>
            <a className="jv-btn jv-btn-ghost" href="#nabidka">
              Co dnes vaříme
            </a>
          </div>

          <dl className="jv-hero-facts">
            <div>
              <dt>Rozvoz</dt>
              <dd>8:00–14:00</dd>
            </div>
            <div>
              <dt>Kde</dt>
              <dd>Ústí n. L. a okolí</dd>
            </div>
            <div>
              <dt>Nově</dt>
              <dd>Jídelna Střekov</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="jv-menu" id="nabidka" aria-labelledby="menu-title">
        <div className="jv-section-head">
          <p className="jv-eyebrow jv-eyebrow-dark">Jídelní lístek</p>
          <h2 id="menu-title" className="jv-section-title">
            Tři věci, které umíme<br />pořádně
          </h2>
          <p className="jv-section-lede">
            Skládáme podle přání zákazníka — od jedné misky domů až po raut
            pro sto lidí. Vyberte, co potřebujete, ostatní doladíme telefonem.
          </p>
        </div>

        <ol className="jv-menu-list">
          {nabidka.map((p) => (
            <li className="jv-menu-item" key={p.cislo}>
              <span className="jv-menu-num" aria-hidden="true">
                {p.cislo}
              </span>
              <div className="jv-menu-text">
                <h3>{p.nazev}</h3>
                <p>{p.popis}</p>
                <span className="jv-menu-detail">{p.detail}</span>
              </div>
            </li>
          ))}
        </ol>

        <figure className="jv-menu-figure">
          <img
            src="/section-1.webp"
            alt="Talíř tradičního českého jídla s přílohou od JV-Integra"
            className="jv-menu-photo"
          />
          <figcaption>Talíř dne — poctivá porce, tradiční příprava.</figcaption>
        </figure>
      </section>

      <section className="jv-trust" id="o-nas" aria-labelledby="trust-title">
        <figure className="jv-trust-figure">
          <img
            src="/section-2.webp"
            alt="Chlebíčky a výrobky studené kuchyně připravené na objednávku"
            className="jv-trust-photo"
          />
        </figure>

        <div className="jv-trust-body">
          <p className="jv-eyebrow jv-eyebrow-dark">O nás</p>
          <h2 id="trust-title" className="jv-section-title">
            Kvalitně, podle<br />tradičních způsobů
          </h2>
          <p className="jv-trust-lede">
            Jsme rodinná kuchyně v Ústí nad Labem. Vaříme teplá jídla, skládáme
            studenou kuchyni a zajišťujeme catering pro firmy, školy i domácnosti.
            Nově obsluhujeme také jídelnu na Střekově a zajišťujeme školní
            stravování.
          </p>

          <div className="jv-timeline" role="list" aria-label="Časy rozvozu">
            {rozvoz.map((r) => (
              <div className="jv-timeline-row" role="listitem" key={r.text}>
                <span className="jv-timeline-cas">{r.cas}</span>
                <span className="jv-timeline-line" aria-hidden="true" />
                <span className="jv-timeline-text">{r.text}</span>
              </div>
            ))}
          </div>

          <p className="jv-trust-note" id="objednat">
            Vzhledem k počtu zákazníků nestíháme každého obvolávat — cenové
            změny a novinky proto najdete vždy v sekci <strong>Aktuálně</strong>.
            Potřebujete konkrétní čas dovozu? Domluvíme se, a pokud to jen trochu
            půjde, vyhovíme.
          </p>

          <ul className="jv-trust-tags">
            <li>Jídelní lístky ke stažení</li>
            <li>Značené alergeny</li>
            <li>Balení vhodné do mikrovlnky</li>
            <li>Školní stravování</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

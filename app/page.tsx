import { Reconciliation } from "./motion";

const SERVICES = [
  {
    n: "01",
    name: "Účetní poradenství",
    give: "Kalkulace, reporty a konzultace, kdykoli se potřebujete rozhodnout podle čísel — ne od boku.",
  },
  {
    n: "02",
    name: "Daňová evidence",
    give: "Vedení evidence včetně daňového přiznání a přehledů pro OSSZ i zdravotní pojišťovnu.",
  },
  {
    n: "03",
    name: "Podvojné účetnictví",
    give: "Kompletní účetnictví včetně účetní závěrky a mezd — připravené na kontrolu i na banku.",
  },
  {
    n: "04",
    name: "Mzdové účetnictví",
    give: "Celá mzdová agenda i personalistika za vás — výplaty, odvody a papíry hlídáme my.",
  },
];

const PARTNERS = [
  { name: "Právní služby", who: "Mgr. Adam Hefner", where: "Plzeň" },
  { name: "Daňový poradce", who: "Ing. Pavla Nozarová", where: "Dobřany" },
  { name: "Auditor", who: "Ing. Dušan Bílek", where: "Domažlice" },
];

const CONTACT = [
  { label: "Telefon", value: "+420 777 111 222", href: "tel:+420777111222" },
  { label: "E-mail", value: "info@example.cz", href: "mailto:info@example.cz" },
  { label: "Kancelář", value: "Ukázková 123, Plzeň", href: null },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="brand" href="#hero" aria-label="Guru Accounting, účetní kancelář Plzeň">
          <span className="brand__seal" aria-hidden="true">G</span>
          <span className="brand__name">
            Guru <b>Accounting</b>
            <span className="brand__ro">s.r.o. · Plzeň</span>
          </span>
        </a>
        <a className="topbar__call" href="tel:+420777111222">
          <span className="topbar__call-label">Zavolat</span>
          <span className="topbar__call-num">+420 777 111 222</span>
        </a>
      </header>

      <section className="section hero" id="hero">
        <div className="wrap hero__grid">
          <div className="hero__lede">
            <p className="eyebrow">Účetní kancelář · Plzeň · od roku 2017</p>
            <h1 className="hero__title">
              Tak trochu <span className="hero__accent">jiná</span>
              <br />
              účetní firma.
            </h1>
            <p className="hero__text">
              Vedeme účetnictví, daně i mzdy pro OSVČ i firmy z Plzně a okolí.
              Přehledně, přesně a s otevřenou komunikací — vaše čísla u nás
              vždycky sedí na haléř.
            </p>
            <div className="hero__cta">
              <a className="btn btn--primary" href="mailto:info@example.cz?subject=Sch%C5%AFzka%20-%20%C3%BA%C4%8Detnictv%C3%AD">
                Domluvit schůzku
              </a>
              <a className="btn btn--ghost" href="tel:+420777111222">
                Zavolat účetní
              </a>
            </div>
          </div>

          <Reconciliation />
        </div>
      </section>

      <section className="section services">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow eyebrow--brass">Rozvaha služeb</p>
            <h2 className="sec-title">Co pro vás vedeme</h2>
            <p className="sec-note">
              Každá služba na jednom účetním řádku: co u nás řešíte a co za to
              dostanete zpátky.
            </p>
          </div>

          <div className="ledger" role="table" aria-label="Přehled služeb">
            <div className="ledger__head" role="row">
              <span className="ledger__idx" role="columnheader">Č.</span>
              <span role="columnheader">Má dáti — co u nás řešíte</span>
              <span className="ledger__dal" role="columnheader">Dal — co dostanete</span>
            </div>
            {SERVICES.map((s) => (
              <div className="ledger__row" role="row" key={s.n}>
                <span className="ledger__idx" role="cell">{s.n}</span>
                <span className="ledger__name" role="cell">{s.name}</span>
                <span className="ledger__dal" role="cell">{s.give}</span>
              </div>
            ))}
          </div>

          <div className="sec-head sec-head--tight">
            <p className="eyebrow eyebrow--brass">Podrozvaha</p>
            <h3 className="sec-title sec-title--sm">Co zajistíme přes ověřené partnery</h3>
          </div>

          <div className="ledger ledger--partners" role="table" aria-label="Partneři">
            {PARTNERS.map((p) => (
              <div className="ledger__row" role="row" key={p.who}>
                <span className="ledger__idx" role="cell" aria-hidden="true">§</span>
                <span className="ledger__name" role="cell">{p.name}</span>
                <span className="ledger__dal" role="cell">
                  {p.who} <span className="ledger__where">· {p.where}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section trust">
        <div className="wrap trust__grid">
          <div className="trust__col">
            <p className="eyebrow eyebrow--brass">Náš přístup</p>
            <h2 className="sec-title">Vaše účetnictví jako pečlivě vedený sešit</h2>
            <p className="trust__text">
              Pracujeme v programech <b>POHODA</b> a <b>Money&nbsp;S4</b>, daně a
              přiznání zpracováváme v <b>TaxEditu</b>. Díky tomu vedeme vaše
              účetnictví efektivně, přesně a bez zbytečných překvapení na konci roku.
            </p>
            <p className="trust__text">
              S vášnivým odhodláním a pečlivostí se staráme o vaše finanční
              záležitosti — s profesionálním přístupem a otevřenou komunikací.
              Zavoláte, my zvedáme.
            </p>
          </div>

          <div className="trust__col">
            <p className="eyebrow eyebrow--brass">Naši klienti</p>
            <h3 className="sec-title sec-title--sm">Od drobných OSVČ po střední firmy</h3>
            <p className="trust__text">
              Mezi naše klienty patří drobní OSVČ, plátci i neplátci DPH i
              právnické osoby — malé i středně velké. Odhad ceny vám řekneme hned,
              ale ke každému přistupujeme individuálně.
            </p>

            <div className="ledger ledger--contact" role="table" aria-label="Kontakt">
              {CONTACT.map((c) => (
                <div className="ledger__row ledger__row--contact" role="row" key={c.label}>
                  <span className="ledger__name" role="cell">{c.label}</span>
                  <span className="ledger__dal ledger__dal--val" role="cell">
                    {c.href ? (
                      <a className="contact-link" href={c.href}>{c.value}</a>
                    ) : (
                      c.value
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const SLUZBY = [
  {
    code: "OBJ",
    title: "Ostraha objektů a majetku",
    desc: "Nepřetržité hlídání areálů, skladů, výroben a staveb. Recepční i obchůzková služba, kontrola vjezdů a klíčový režim.",
  },
  {
    code: "OSB",
    title: "Ochrana osob a doprovod",
    desc: "Osobní ochranu děláme od roku 1999. Diskrétní doprovod jednotlivců i rodin a řízení bezpečnosti při cestách.",
  },
  {
    code: "AKC",
    title: "Bezpečnost akcí a klubů",
    desc: "Koncerty, festivaly, noční podniky. Vstupní kontrola, dohled v davu a klidné, rychlé řešení konfliktů.",
  },
  {
    code: "CIT",
    title: "Ozbrojený doprovod cenin",
    desc: "Přeprava hotovosti a cenných zásilek s ozbrojeným doprovodem a jasně daným bezpečnostním protokolem.",
  },
  {
    code: "POR",
    title: "Pořadatelská služba",
    desc: "Pořadatelé pro sportovní i kulturní akce — koordinace vstupů, dohled nad kapacitou a únikové trasy.",
  },
  {
    code: "HOT",
    title: "Ostraha hotelů a recepce",
    desc: "Denní i noční služba na recepci, dohled nad hosty i majetkem a řešení mimořádných situací se ctí.",
  },
];

const FAKTA = [
  "V bezpečnostních službách od roku 2009",
  "Základna Pardubice a Královéhradecký kraj",
  "Působnost po celé ČR i na Slovensku",
  "Řádně proškolená a prověřená ostraha",
  "Diskrétnost a etický přístup ke každé zakázce",
];

const SPOLUPRACE = [
  {
    name: "Gymnázium maltézských rytířů, Skuteč",
    note: "Střelecká příprava a sebeobrana pro obor bezpečnostně právní činnost.",
  },
  {
    name: "TRIVIS Třebechovice pod Orebem",
    note: "Odborný výcvik studentů a zajištění promo akcí.",
  },
  {
    name: "Regionální sport",
    note: "Dlouhodobě podporujeme pardubický a královéhradecký sport.",
  },
];

export default function Page() {
  return (
    <main className="bs-main">
      <header className="bs-hero">
        <span className="bs-hero-mark" aria-hidden="true" />
        <div className="bs-wrap bs-hero-inner">
          <p className="bs-eyebrow bs-eyebrow--light">
            <span className="bs-chev" aria-hidden="true" />
            Bezpečnostní agentura · Pardubice
          </p>

          <div className="bs-scanwrap">
            <span className="bs-scanbar" aria-hidden="true" />
            <h1 className="bs-wordmark">
              <span className="bs-wm-main">BERSERK</span>
              <span className="bs-wm-sub">Security</span>
            </h1>
          </div>

          <p className="bs-status">
            Ostraha objektů, osob a akcí
            <span className="bs-dot" aria-hidden="true">·</span>
            od roku 2009
            <span className="bs-dot" aria-hidden="true">·</span>
            <strong>NONSTOP 24/7</strong>
          </p>
        </div>
      </header>

      <div className="bs-tape" role="separator" aria-hidden="true" />

      <section className="bs-section bs-catalog" aria-labelledby="sluzby">
        <div className="bs-wrap">
          <div className="bs-head">
            <p className="bs-eyebrow">
              <span className="bs-chev" aria-hidden="true" />
              Katalog služeb
            </p>
            <h2 className="bs-h2" id="sluzby">
              Šest oborů, jedna disciplína
            </h2>
            <p className="bs-lead">
              Ať jde o tichý sklad nebo vyprodaný klub, pracujeme podle stejného
              pravidla: připravit se, být vidět tam, kde je potřeba, a nenechat
              situaci vyhrotit.
            </p>
          </div>

          <ul className="bs-grid">
            {SLUZBY.map((s) => (
              <li key={s.code} className="bs-card">
                <span className="bs-card-code" aria-hidden="true">
                  {s.code}
                </span>
                <h3 className="bs-card-title">{s.title}</h3>
                <p className="bs-card-desc">{s.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="bs-tape" role="separator" aria-hidden="true" />

      <section className="bs-section bs-about" aria-labelledby="onas">
        <div className="bs-wrap bs-about-grid">
          <div className="bs-about-main">
            <p className="bs-eyebrow bs-eyebrow--light">
              <span className="bs-chev" aria-hidden="true" />
              O agentuře
            </p>
            <h2 className="bs-h2" id="onas">
              Základna Pardubice, dosah celá republika
            </h2>
            <p className="bs-about-p">
              Berserk Security působí v bezpečnostních službách od roku 2009.
              Vyrostli jsme z osobní ochrany na Pardubicku a Královéhradecku a
              dnes hlídáme objekty i akce po celé České republice a na Slovensku.
              Vede nás mladý management, který drží slovo, reaguje rychle a
              každou zakázku bere jako otázku cti.
            </p>
            <p className="bs-about-p">
              Naše ostraha je řádně proškolená a jedná s právním i etickým
              přístupem. Garantujeme diskrétnost a klid — protože právě klid je
              to, co si u nás objednáváte.
            </p>

            <a className="bs-phone" href="tel:777111222">
              <span className="bs-phone-label">NONSTOP linka 24 h</span>
              <span className="bs-phone-num">777 111 222</span>
            </a>
          </div>

          <aside className="bs-about-side">
            <div className="bs-facts">
              <p className="bs-facts-title">Ve zkratce</p>
              <ul className="bs-facts-list">
                {FAKTA.map((f) => (
                  <li key={f} className="bs-fact">
                    <span className="bs-chev bs-chev--sm" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bs-refs">
              <p className="bs-facts-title">Spolupráce a sport</p>
              <ul className="bs-refs-list">
                {SPOLUPRACE.map((r) => (
                  <li key={r.name} className="bs-ref">
                    <span className="bs-ref-name">{r.name}</span>
                    <span className="bs-ref-note">{r.note}</span>
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

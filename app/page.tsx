import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main className="fs">
      {/* ============ HERO ============ */}
      <header className="fs-nav" aria-label="Hlavní">
        <div className="fs-wordmark" aria-label="FRYDL Servis">
          <span className="fs-wm-a">FRYDL</span>
          <span className="fs-wm-b">SERVIS</span>
        </div>
        <a className="fs-nav-phone" href="tel:+420770616161">
          <span className="fs-nav-dot" aria-hidden="true" /> 770 61 61 61
          <span className="fs-nav-hours">7–22 h</span>
        </a>
      </header>

      <section className="fs-hero" aria-labelledby="hero-title">
        {/* Signature grafika: schéma proudového obvodu — fáze/nula/ochranný vodič */}
        <div className="fs-circuit" aria-hidden="true">
          <div className="fs-rail fs-rail--l"><span className="fs-rail-tag">L1</span></div>
          <div className="fs-rail fs-rail--n"><span className="fs-rail-tag">N</span></div>
          <div className="fs-rail fs-rail--pe"><span className="fs-rail-tag">PE</span></div>
          <div className="fs-node fs-node--1" />
          <div className="fs-node fs-node--2" />
          <div className="fs-node fs-node--3" />
          <div className="fs-spark" />
        </div>

        <div className="fs-hero-inner">
          <p className="fs-eyebrow">
            <span className="fs-live" aria-hidden="true" />
            Elektrikář v pohotovosti · Praha a okolí
          </p>
          <h1 id="hero-title" className="fs-hero-title">
            Když to <span className="fs-hl">jiskří</span>,
            <br />
            zavoláte nás <span className="fs-hero-num">první</span>.
          </h1>
          <p className="fs-hero-sub">
            Revize, opravy a nové rozvody pro byty, domy i firmy. Přijedeme,
            najdeme závadu a necháme za sebou uklizeno — dennĕ od 7 do 22 hodin.
          </p>
          <div className="fs-hero-actions">
            <a className="fs-btn fs-btn--primary" href="tel:+420770616161">
              Zavolat elektrikáře
            </a>
            <a className="fs-btn fs-btn--ghost" href="#sluzby">
              Prohlédnout služby
            </a>
          </div>

          <dl className="fs-hero-facts">
            <div>
              <dt>Na příjmu</dt>
              <dd>7–22 h, včetně víkendů</dd>
            </div>
            <div>
              <dt>Kde jezdíme</dt>
              <dd>Praha 8 · Na Košince</dd>
            </div>
            <div>
              <dt>Po zásahu</dt>
              <dd>revizní zpráva na papíře</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ============ SLUŽBY ============ */}
      <section id="sluzby" className="fs-services" aria-labelledby="services-title">
        <div className="fs-sec-head">
          <p className="fs-sec-eyebrow">Co pro vás uděláme</p>
          <h2 id="services-title">Od jednoho vypínače po celý rozvod</h2>
          <p className="fs-sec-lead">
            Řešíme drobné opravy i kompletní elektroinstalace. Vždy s revizí,
            fotodokumentací a jasnou cenou předem — bez překvapení na faktuře.
          </p>
        </div>

        <ul className="fs-service-list">
          {services.map((s) => (
            <li key={s.code} className="fs-service">
              <span className="fs-service-code" aria-hidden="true">
                {s.code}
              </span>
              <div className="fs-service-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="fs-tags">
                  {s.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ============ DŮVĚRA / REFERENCE ============ */}
      <section className="fs-trust" aria-labelledby="trust-title">
        <div className="fs-sec-head">
          <p className="fs-sec-eyebrow">Proč zrovna my</p>
          <h2 id="trust-title">Práci předáváme po sobě uklizenou</h2>
          <p className="fs-sec-lead">
            Nejsme fakturační jméno na internetu. Za každou zakázkou stojí
            konkrétní technik, který vám zvedne telefon i příště.
          </p>
        </div>

        <div className="fs-promises">
          {promises.map((p) => (
            <div key={p.k} className="fs-promise">
              <span className="fs-promise-k">{p.k}</span>
              <span className="fs-promise-v">{p.v}</span>
            </div>
          ))}
        </div>

        <div className="fs-reviews">
          {reviews.map((r) => (
            <figure key={r.name} className="fs-review">
              <blockquote>{r.text}</blockquote>
              <figcaption>
                <span className="fs-review-name">{r.name}</span>
                <span className="fs-review-job">{r.job}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}

const services: { code: string; title: string; desc: string; items: string[] }[] = [
  {
    code: "L1",
    title: "Revize a hledání závad",
    desc: "Vypadává jistič nebo jiskří zásuvka? Změříme rozvod, najdeme příčinu a vystavíme platnou revizní zprávu.",
    items: ["Revize domů a bytů", "Měření izolačního stavu", "Revizní zpráva na papíře"],
  },
  {
    code: "L2",
    title: "Rozvody a rozvaděče",
    desc: "Nové kabely, přehledný rozvaděč a jističe dimenzované na to, co doma opravdu zapínáte.",
    items: ["Nové elektroinstalace", "Výměna rozvaděče", "Zásuvky a vypínače"],
  },
  {
    code: "L3",
    title: "Světla a spotřebiče",
    desc: "Od zapojení nové trouby po LED podhledy v kuchyni. Zapojíme to bezpečně a doděláme čistě.",
    items: ["LED osvětlení", "Zapojení spotřebičů", "Chytré vypínače"],
  },
  {
    code: "N",
    title: "Elektro pohotovost",
    desc: "Nesvítí a mrazák taje? Zvedáme telefon od 7 do 22 hodin a vyrážíme po Praze co nejdřív to jde.",
    items: ["Výpadek proudu", "Zkrat v obvodu", "Zajištění provozu"],
  },
];

const promises: { k: string; v: string }[] = [
  { k: "7–22 h", v: "bereme telefon" },
  { k: "do 24 h", v: "termín u nespěchajících" },
  { k: "100 %", v: "práce s revizní zprávou" },
  { k: "Praha 8", v: "základna Na Košince" },
];

const reviews: { text: string; name: string; job: string }[] = [
  {
    text: "Firmu doporučuji všem, kdo chtějí rychle, kvalitně a za rozumnou cenu odvedenou práci. Vše přesně podle domluvy.",
    name: "Petr S.",
    job: "rekonstrukce bytu, Praha 8",
  },
  {
    text: "Od nabídky několika řešení až po konzultaci přímo na místě. Postup i případné změny ceny nám hlásili průběžně. Ve finále nás cena příjemně překvapila.",
    name: "Jana B.",
    job: "kompletní rekonstrukce",
  },
  {
    text: "Přijeli, našli závadu, opravili a po sobě perfektně uklidili. Podlahové topení zůstalo bez poškození. Přesně tak si to představuju.",
    name: "Jiří H.",
    job: "rodinný dům",
  },
];

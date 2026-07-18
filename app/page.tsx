import { StatusDot } from "./motion";

const services = [
  {
    ref: "U1",
    title: "Poradenství",
    desc: "Poradíme, jakou techniku firma opravdu potřebuje — bez zbytečného přeprodávání. Navrhneme sestavy, síť i zálohování tak, aby seděly na váš provoz.",
    io: "IN požadavky · OUT návrh sestavy",
  },
  {
    ref: "U2",
    title: "Prodej",
    desc: "Dodáme prověřený hardware pro kanceláře i serverovnu. Značkové komponenty s vědomím, kam se montují — ne nejlevnější náhražka do prvního výpadku.",
    io: "PC · notebooky · komponenty",
  },
  {
    ref: "U3",
    title: "Servis",
    desc: "Diagnostika, výměna dílů i oprava na úrovni desky. Vyčistíme, oživíme a zrychlíme stroj, u kterého jiní řeknou „koupit nový“.",
    io: "diagnostika · pájení · zálohy",
  },
];

const params: [string, string][] = [
  ["Provozovna", "Ukázková 123, Brno"],
  ["Provoz", "Po–Pá 9:00–11:50 · 12:30–17:00"],
  ["Objednání", "Jen po telefonické domluvě"],
  ["Telefon", "+420 777 111 222"],
  ["E-mail", "info@example.cz"],
];

export default function Page() {
  return (
    <main className="pc">
      {/* ——— HERO ——— */}
      <header className="band hero">
        <div className="wrap hero-wrap">
          <div className="brandline">
            <svg className="feed" viewBox="0 0 200 24" preserveAspectRatio="none" aria-hidden="true">
              <path pathLength={1} d="M0 12 H176" />
              <circle className="pad" cx="188" cy="12" r="6" />
            </svg>
            <span className="wordmark">
              PRO<span className="wm-cut">COMS</span>
              <span className="wm-sub">servis</span>
            </span>
          </div>

          <p className="eyebrow">Servis výpočetní techniky · Brno · Rev. 2024</p>

          <h1 className="h1">
            Servis, co<br />
            čte <span className="copper">schémata</span>.
          </h1>

          <p className="lede">
            Poradenství, prodej a opravy výpočetní techniky pro brněnské firmy.
            Od diagnostiky až po pájení na desce — a domluvu vždy po telefonu,
            ať víte, s kým mluvíte.
          </p>

          <p className="status">
            <StatusDot />
            Otevřeno Po–Pá 9:00–17:00 · po telefonické domluvě
          </p>
        </div>
      </header>

      {/* ——— KATALOG SLUŽEB ——— */}
      <section className="band board" aria-labelledby="kat">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow eyebrow--copper">Katalog služeb — osazení desky</p>
            <h2 id="kat" className="h2">Tři součástky, jedna funkční sestava.</h2>
            <p className="node">
              <span className="node-tag">J1</span> napájení: váš telefonát →
            </p>
          </div>

          <div className="grid">
            {services.map((s) => (
              <article className="cell" key={s.ref}>
                <div className="cell-top">
                  <svg className="trace" viewBox="0 0 400 24" preserveAspectRatio="none" aria-hidden="true">
                    <path pathLength={1} d="M6 12 H372" />
                    <circle className="pad" cx="388" cy="12" r="6" />
                  </svg>
                  <span className="desig">{s.ref}</span>
                </div>
                <h3 className="cell-title">{s.title}</h3>
                <p className="cell-desc">{s.desc}</p>
                <p className="cell-io">{s.io}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ——— DŮVĚRA / O NÁS ——— */}
      <section className="band about" aria-labelledby="proc">
        <div className="wrap about-grid">
          <div className="about-copy">
            <p className="eyebrow eyebrow--copper">Proč PROCOMS — parametry provozu</p>
            <h2 id="proc" className="h2 h2--dark">
              Bezpečně opravíme i to, u čeho jiní krčí rameny.
            </h2>
            <ul className="why">
              <li>
                <span className="why-k">Board-level opravy</span>
                Neměníme celý díl, když stačí opravit konkrétní součástku na desce.
              </li>
              <li>
                <span className="why-k">Poctivá diagnostika</span>
                Než něco vyměníme, řekneme vám, co je skutečná příčina — a kolik to bude.
              </li>
              <li>
                <span className="why-k">Partner pro firmy v Brně</span>
                Rozumíme, že stojící počítač znamená stojící práci. Jednáme podle toho.
              </li>
            </ul>
          </div>

          <aside className="spec" aria-label="Kontaktní a provozní údaje">
            <p className="spec-cap">Datasheet — PCS-SERVIS s.r.o.</p>
            <dl className="spec-list">
              {params.map(([k, v]) => (
                <div className="spec-row" key={k}>
                  <dt>{k}</dt>
                  <dd>
                    {k === "Telefon" ? (
                      <a href="tel:+420777111222">{v}</a>
                    ) : k === "E-mail" ? (
                      <a href="mailto:info@example.cz">{v}</a>
                    ) : (
                      v
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>
    </main>
  );
}

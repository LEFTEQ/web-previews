import type { CSSProperties } from "react";

export default function Page() {
  const opravy = [
    {
      idx: "9H",
      nazev: "Nalepení tvrzeného skla",
      popis:
        "Bez bublin, bez prachu, na jeden pokus. Ke každému sklu koupenému u nás nalepíme zdarma — přijdete a odcházíte s hotovým displejem.",
      cas: "na počkání",
    },
    {
      idx: "01",
      nazev: "Výměna displeje iPhone",
      popis:
        "Prasklé sklo, mrtvé pixely nebo displej, který nereaguje na dotyk. Vyměníme, otestujeme dotyk i jas a vrátíme telefon jako nový.",
      cas: "cca 1–3 h",
    },
    {
      idx: "02",
      nazev: "Výměna baterie iPhone",
      popis:
        "Nafouklá nebo vybitá do oběda? Dáme originální baterii Apple i kvalitní Wolfix — poradíme, co se vyplatí právě u vašeho modelu.",
      cas: "cca 1 h",
    },
    {
      idx: "03",
      nazev: "MacBook & iPad servis",
      popis:
        "Vytopený MacBook, prasklý iPad, nefunkční klávesnice. Diagnostiku uděláme na místě a řekneme rovnou, jestli se oprava vyplatí.",
      cas: "dle rozsahu",
    },
  ];

  const reference = [
    {
      jmeno: "Anna Hovorková",
      datum: "3. 9. 2025",
      text:
        "Rozbité zadní sklo, objednání ze dne na den, oprava za tři hodiny i s výměnou baterie. Skvělá cena a milý přístup. Můžu jen doporučit.",
    },
    {
      jmeno: "Marian Miko",
      datum: "4. 7. 2025",
      text: "Ochota, flexibilita, profesionální přístup. Doporučuji.",
    },
    {
      jmeno: "Michal Cuper",
      datum: "10. 1. 2026",
      text:
        "Rád nakupuji u dlouhodobě spolehlivého prodejce. Bez chybičky.",
    },
  ];

  return (
    <main className="page">
      <a className="skip" href="#servis">
        Přeskočit na servis
      </a>

      {/* HERO */}
      <header className="hero" role="banner">
        <div className="hero__bar">
          <span className="wordmark" aria-label="Tvrzenýsklo.cz">
            tvrzený<span className="wordmark__pane">sklo</span>
            <span className="wordmark__tld">.cz</span>
          </span>
          <span className="hero__loc">Praha 5 · servis Apple</span>
        </div>

        <div className="hero__grid" aria-hidden="true">
          <span className="crack crack--a" />
          <span className="crack crack--b" />
          <span className="crack crack--c" />
          <span className="impact" />
        </div>

        <div className="hero__body">
          <p className="eyebrow">
            <span className="eyebrow__dot" />
            odolnost 9H · tloušťka 0,4 mm
          </p>
          <h1 className="hero__title">
            Praská sklo,
            <br />
            <span className="hero__title-strong">ne váš den.</span>
          </h1>
          <p className="hero__lede">
            Tvrzená skla, kryty a servis iPhonu, iPadu i MacBooku. Přijdete
            s prasklým displejem, odejdete s hotovým — většinu oprav zvládneme
            na počkání přímo na prodejně v Praze 5.
          </p>
          <div className="hero__cta">
            <a className="btn btn--solid" href="tel:+420776767072">
              Zavolat 776 76 70 72
            </a>
            <a className="btn btn--ghost" href="#servis">
              Co opravíme
            </a>
          </div>
        </div>
      </header>

      {/* SERVIS */}
      <section id="servis" className="servis" aria-labelledby="servis-nadpis">
        <div className="sec-head">
          <p className="eyebrow eyebrow--dark">Servis &amp; sklo</p>
          <h2 id="servis-nadpis" className="sec-title">
            Čtyři věci, se kterými k nám chodíte nejčastěji
          </h2>
        </div>

        <ul className="cards">
          {opravy.map((o) => (
            <li key={o.nazev} className="card">
              <span className="card__idx" aria-hidden="true">
                {o.idx}
              </span>
              <h3 className="card__title">{o.nazev}</h3>
              <p className="card__text">{o.popis}</p>
              <span className="card__meta">{o.cas}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* DŮVĚRA */}
      <section className="trust" aria-labelledby="trust-nadpis">
        <div className="trust__head">
          <p className="eyebrow">
            <span className="eyebrow__dot" />
            hodnocení obchodu
          </p>
          <h2 id="trust-nadpis" className="sec-title sec-title--light">
            <span
              className="score"
              style={{ "--fill": "92%" } as CSSProperties}
            >
              4,6
            </span>
            <span className="score__label">
              průměr ze 324 hodnocení — a nalepení skla zdarma ke každému nákupu
            </span>
          </h2>
        </div>

        <ul className="quotes">
          {reference.map((r) => (
            <li key={r.jmeno} className="quote">
              <p className="quote__text">{r.text}</p>
              <p className="quote__by">
                <span className="quote__name">{r.jmeno}</span>
                <span className="quote__date">{r.datum}</span>
              </p>
            </li>
          ))}
        </ul>

        <div className="trust__foot">
          Nejste z Prahy? Zařízení nám můžete poslat — ozveme se, jakmile dorazí.
          Zavolejte na <a href="tel:+420776767072">776 76 70 72</a> nebo napište
          na <a href="mailto:kalina@tvrzenysklo.cz">kalina@tvrzenysklo.cz</a>.
        </div>
      </section>
    </main>
  );
}

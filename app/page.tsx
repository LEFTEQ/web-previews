import type { CSSProperties } from "react";

export default function Page() {
  const pobocky = [
    {
      nazev: "Roudenská 31",
      tel: "773 982 271",
      telHref: "+420773982271",
      hodiny: "8:00–16:00",
      pauza: "pauza 12:00–12:30",
      hygienistky: ["Kateřina Clara Baxová, DiS.", "Eva Šindelářová, DiS.", "Barbora Liebig, DiS.", "Terezie Frčková, DiS."],
      poznamka: "V budově Zubního centra Roudenská.",
    },
    {
      nazev: "Lidická tř. 78",
      tel: "733 139 839",
      telHref: "+420733139839",
      hodiny: "7:30–15:00",
      pauza: "pauza 12:00–12:30",
      hygienistky: ["Tereza Valtová, DiS.", "Anna Záhorovská, DiS."],
      poznamka: "Nová pobočka v budově Zubní pohotovosti, 3 minuty chůze od Roudenské.",
    },
  ];

  const kroky = [
    {
      c: "01",
      nazev: "Vyšetření a zmapování",
      text: "Projdeme každý zub, změříme stav dásní a ukážeme vám na místě, kde se plak drží nejvíc.",
    },
    {
      c: "02",
      nazev: "Odstranění plaku a zubního kamene",
      text: "Ultrazvukem i ručně sundáme kámen nad i pod dásní. Bezbolestně, s ohledem na citlivé zuby.",
    },
    {
      c: "03",
      nazev: "Air-flow a doleštění",
      text: "Pískováním setřeme pigmentace od kávy, čaje a cigaret. Zuby dostanou svůj původní odstín.",
    },
    {
      c: "04",
      nazev: "Nácvik techniky a plán",
      text: "Vybereme kartáček, mezizubní kartáčky i pastu přesně pro vaše zuby a naučíme vás je používat.",
    },
  ];

  return (
    <main className="dh">
      <header className="dh-nav" aria-label="Hlavní navigace">
        <a className="dh-brand" href="#top" aria-label="Dentální hygiena České Budějovice, domů">
          <span className="dh-brand-mark" aria-hidden="true" />
          <span className="dh-brand-text">
            hygiena<em>dentální</em>
          </span>
        </a>
        <nav className="dh-nav-links">
          <a href="#pece">Péče</a>
          <a href="#pobocky">Pobočky</a>
        </nav>
        <a className="dh-nav-cta" href="tel:+420773982271">Objednat se</a>
      </header>

      <section className="dh-hero" id="top">
        <div className="dh-hero-grid" aria-hidden="true">
          {Array.from({ length: 28 }).map((_, i) => (
            <span key={i} className="dh-tooth" style={{ "--i": i } as CSSProperties} />
          ))}
        </div>

        <div className="dh-hero-inner">
          <p className="dh-eyebrow">Dentální hygiena · České Budějovice</p>
          <h1 className="dh-title">
            <span className="dh-line">Čisté zuby</span>
            <span className="dh-line dh-line--accent">bez rýpání</span>
            <span className="dh-line">a bez spěchu.</span>
          </h1>
          <p className="dh-lede">
            Dvě pobočky, šest hygienistek a jeden klid: dostatek času na každý zub. Odstraníme kámen,
            setřeme pigmentace od kávy a naučíme vás, jak si čistotu udržet doma.
          </p>
          <div className="dh-hero-actions">
            <a className="dh-btn dh-btn--primary" href="tel:+420773982271">Zavolat na Roudenskou</a>
            <a className="dh-btn dh-btn--ghost" href="#pece">Jak návštěva probíhá</a>
          </div>
        </div>
      </section>

      <section className="dh-section dh-pece" id="pece">
        <div className="dh-section-head">
          <p className="dh-eyebrow dh-eyebrow--dark">Návštěva krok za krokem</p>
          <h2 className="dh-h2">Než se otočíte, je hotovo. A víte, co dál.</h2>
          <p className="dh-section-lede">
            Jedno sezení trvá zhruba hodinu. Nic vás nepřekvapí — každou fázi vám cestou vysvětlíme.
          </p>
        </div>

        <div className="dh-pece-layout">
          <ol className="dh-steps">
            {kroky.map((k) => (
              <li key={k.c} className="dh-step">
                <span className="dh-step-num">{k.c}</span>
                <div>
                  <h3 className="dh-step-name">{k.nazev}</h3>
                  <p className="dh-step-text">{k.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <figure className="dh-figure">
            <img src="/section-1.webp" alt="Ošetřovna dentální hygieny v Českých Budějovicích" loading="lazy" />
            <figcaption>
              Bělení zubů domácí metodou i profesionální air-flow řešíme na obou pobočkách.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="dh-section dh-pobocky" id="pobocky">
        <div className="dh-section-head">
          <p className="dh-eyebrow dh-eyebrow--dark">Kde nás najdete</p>
          <h2 className="dh-h2">Dvě adresy v Českých Budějovicích. Vyberte si tu bližší.</h2>
          <p className="dh-section-lede">
            Objednávejte se telefonicky na recepci té pobočky, kam chcete přijít — termíny se vedou zvlášť.
          </p>
        </div>

        <div className="dh-cards">
          {pobocky.map((p) => (
            <article key={p.nazev} className="dh-card">
              <h3 className="dh-card-title">{p.nazev}</h3>
              <p className="dh-card-mesto">37001 České Budějovice</p>
              <p className="dh-card-note">{p.poznamka}</p>
              <dl className="dh-card-meta">
                <div>
                  <dt>Objednávky</dt>
                  <dd>
                    <a href={`tel:${p.telHref}`}>{p.tel}</a>
                  </dd>
                </div>
                <div>
                  <dt>Kdy voláte</dt>
                  <dd>
                    {p.hodiny} <span className="dh-card-pauza">({p.pauza})</span>
                  </dd>
                </div>
              </dl>
              <p className="dh-card-team-label">Hygienistky</p>
              <ul className="dh-card-team">
                {p.hygienistky.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <a className="dh-btn dh-btn--primary dh-card-cta" href={`tel:${p.telHref}`}>
                Zavolat na {p.nazev.split(" ")[0]}
              </a>
            </article>
          ))}
        </div>

        <div className="dh-dostupnost">
          <p className="dh-eyebrow dh-eyebrow--dark">Jak k nám</p>
          <ul>
            <li><strong>Autobusem</strong> — linky č. 5 a 10</li>
            <li><strong>Vlakem</strong> — zastávka u Jižní zastávky</li>
            <li><strong>Na kole</strong> — po stezce kolem řeky Malše, odbočka za hřištěm SK Slávie</li>
            <li><strong>Autem</strong> — parkování u obou poboček</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

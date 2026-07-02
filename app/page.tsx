// Aligero s.r.o. — železářství, Plzeň
// Náhledový web: hero + sortiment + důvěra/o nás. Bez patičky (doplní studio).

const sortiment = [
  {
    kod: "DIN 933",
    nazev: "Šrouby a vruty",
    popis:
      "Metrické šrouby se šestihrannou hlavou, imbusy, vratové, samořezné i vruty do dřeva. Pevnostní třídy 8.8 a 10.9, pozink i nerez A2.",
    rozsah: "M3 – M24",
  },
  {
    kod: "DIN 934",
    nazev: "Matice a podložky",
    popis:
      "Šestihranné, pojistné, křídlové i nýtovací matice. Podložky ploché, pérové, karosářské. Prodáváme po kusech — ne po baleních, která nepotřebujete.",
    rozsah: "M3 – M30",
  },
  {
    kod: "DIN 7504",
    nazev: "Kotvení a chemie",
    popis:
      "Hmoždinky, kotvy do betonu i dutých cihel, chemické kotvy, závitové tyče. Poradíme, co drží v porobetonu a co v panelu.",
    rozsah: "⌀ 5 – 20 mm",
  },
  {
    kod: "ČSN EN",
    nazev: "Nářadí a kování",
    popis:
      "Ruční nářadí, bity, vrtáky do kovu i zdiva, stavební a nábytkové kování, panty, zámky. Značky, které vydrží víc než jednu stavbu.",
    rozsah: "skladem",
  },
];

const duvody = [
  {
    cislo: "30 000+",
    text: "položek spojovacího materiálu fyzicky skladem v Plzni — většinu odnesete hned, bez čekání na závoz.",
  },
  {
    cislo: "1 ks",
    text: "minimální odběr. Potřebujete jeden šroub M8×60? Prodáme vám jeden šroub M8×60.",
  },
  {
    cislo: "5 min",
    text: "průměrná doba, za kterou u pultu najdeme přesně to, co potřebujete — i když přinesete jen ulomený originál.",
  },
];

const reference = [
  {
    text: "Přinesl jsem zrezlý šroub z třicet let starého traktoru. Prodavač se na něj podíval, řekl ‚vratový M10, jemný závit' a za minutu jsem odcházel se čtyřmi kusy.",
    autor: "Josef H., Chotíkov",
  },
  {
    text: "Odebíráme spojovací materiál pro celou dílnu. Faktura, dodací list, všechno srovnané po rozměrech. Žádné dohadování, prostě to funguje.",
    autor: "kovovýroba, Plzeň-Skvrňany",
  },
  {
    text: "V hobbymarketu mi nabídli balení po dvou stech. Tady mi odpočítali dvanáct nerezových vrutů a ještě poradili správný bit.",
    autor: "Marie K., Bory",
  },
];

export default function Page() {
  return (
    <main className="al">
      {/* ===== HERO ===== */}
      <header className="al-hero">
        <div className="al-hero-top">
          <span className="al-wordmark" aria-label="Aligero železářství">
            ALI<span className="al-wordmark-bolt" aria-hidden="true">⬡</span>GERO
          </span>
          <span className="al-hero-loc">železářství · Plzeň</span>
        </div>

        <div className="al-hero-main">
          <p className="al-hero-eyebrow">Spojovací materiál po kusech i po paletách</p>
          <h1 className="al-hero-title">
            <span className="al-line al-line-1">Od šroubu</span>
            <span className="al-line al-line-2">
              <span className="al-size-tag" aria-hidden="true">M3</span> po kotvu
            </span>
            <span className="al-line al-line-3">
              do betonu <span className="al-size-tag al-size-tag-end" aria-hidden="true">M30</span>
            </span>
          </h1>
          <p className="al-hero-sub">
            Kamenné železářství se skladem přes 30 000 položek. Přijďte s výkresem,
            s ulomeným originálem, nebo jen s tím, co si pamatujete — najdeme to.
          </p>
          <div className="al-hero-cta">
            <a className="al-btn al-btn-primary" href="tel:+420603111111">
              Zavolat do prodejny
            </a>
            <a className="al-btn al-btn-ghost" href="#sortiment">
              Co vedeme skladem
            </a>
          </div>
        </div>

        {/* Signature: závitová stupnice — metrická řada jako grafický motiv */}
        <div className="al-thread" aria-hidden="true">
          <div className="al-thread-rule" />
          <ul className="al-thread-scale">
            {["M3", "M4", "M5", "M6", "M8", "M10", "M12", "M16", "M20", "M24", "M30"].map(
              (m, i) => (
                <li key={m} className="al-thread-mark" style={{ ['--i' as never]: i }}>
                  <span className="al-thread-tick" />
                  <span className="al-thread-label">{m}</span>
                </li>
              )
            )}
          </ul>
        </div>
      </header>

      {/* ===== SORTIMENT ===== */}
      <section className="al-section al-sortiment" id="sortiment" aria-labelledby="sortiment-h">
        <div className="al-section-head">
          <h2 id="sortiment-h" className="al-h2">
            Co u nás najdete
          </h2>
          <p className="al-section-sub">
            Řadíme sklad podle norem DIN a ČSN — proto najdeme váš rozměr rychle.
            Vy ale normu znát nemusíte, od toho jsme u pultu my.
          </p>
        </div>

        <div className="al-grid">
          {sortiment.map((s) => (
            <article key={s.kod} className="al-card">
              <div className="al-card-head">
                <span className="al-din">{s.kod}</span>
                <span className="al-range">{s.rozsah}</span>
              </div>
              <h3 className="al-card-title">{s.nazev}</h3>
              <p className="al-card-text">{s.popis}</p>
            </article>
          ))}
        </div>

        <p className="al-note">
          Nenašli jste svůj rozměr v přehledu? Atypické a levotočivé závity objednáme
          do dvou pracovních dnů.
        </p>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="al-section al-duvera" aria-labelledby="duvera-h">
        <div className="al-section-head">
          <h2 id="duvera-h" className="al-h2">
            Železářství, kde vám rozumí
          </h2>
          <p className="al-section-sub">
            Aligero je plzeňská rodinná firma. Za pultem stojí lidé, kteří šrouby
            neprodávají — oni je znají.
          </p>
        </div>

        <div className="al-facts">
          {duvody.map((d) => (
            <div key={d.cislo} className="al-fact">
              <span className="al-fact-num">{d.cislo}</span>
              <p className="al-fact-text">{d.text}</p>
            </div>
          ))}
        </div>

        <div className="al-refs">
          <h3 className="al-refs-title">Říkají o nás</h3>
          <ul className="al-refs-list">
            {reference.map((r) => (
              <li key={r.autor} className="al-ref">
                <blockquote className="al-ref-quote">
                  <p>„{r.text}“</p>
                  <cite className="al-ref-autor">{r.autor}</cite>
                </blockquote>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

import React from "react";

export default function Page() {
  const specializace = [
    { cislo: "01", nazev: "Hubnutí a tvarování postavy", popis: "Vyvážený jídelníček bez hladovek — kila jdou dolů udržitelně." },
    { cislo: "02", nazev: "Sportovní výživa", popis: "Strava sladěná s tréninkem, výkonem a regenerací." },
    { cislo: "03", nazev: "Výživa při cukrovce", popis: "Plán s ohledem na glykemii i chuť k jídlu." },
    { cislo: "04", nazev: "Hypertenze a cholesterol", popis: "Jídlo, které pracuje pro vaše srdce i cévy." },
    { cislo: "05", nazev: "Intolerance laktózy", popis: "Pestrý talíř i bez mléčného cukru." },
    { cislo: "06", nazev: "Celiakie", popis: "Bezlepkově, chutně a bez ochuzení." },
    { cislo: "07", nazev: "Těhotné a kojící ženy", popis: "Výživa pro dva, sestavená citlivě a bezpečně." },
    { cislo: "08", nazev: "Děti a dospívající", popis: "Zdravé návyky, které vydrží do dospělosti." },
    { cislo: "09", nazev: "Poruchy příjmu potravy", popis: "Klidný, nehodnotící přístup zpět k jídlu." }
  ];

  const zasady = [
    "Věnují se vám vysokoškolsky vzdělaní odborníci z lékařských fakult.",
    "Žádná dieta — učíme vás zdravý přístup bez odpírání oblíbených jídel.",
    "Žádné drastické hladovky, detoxy ani koktejly na hubnutí.",
    "Základ je vyvážený talíř, ne doplňky stravy.",
    "Jídelníčky jsou pestré, plné chutných receptů z běžných surovin.",
    "Nepočítáme každou kalorii ani si celoživotně nevážíme potraviny.",
    "Vedeme vás k dlouhodobé změně životního stylu.",
    "Vše přizpůsobíme pohybu, zdraví i vašemu času."
  ];

  const reference = [
    { text: "Individuální přístup, jídelníček propracovaný na míru z dostupných surovin. Jídla jsou velice chutná — tak dobře jsem se dlouho nenajedla. Po měsíci a půl jsou vidět výsledky.", jmeno: "Markéta V." },
    { text: "Co se týče jídelníčku, je to opravdu zázrak. Po 3 letech jsem na váze viděla jinou hodnotu než tu přes 70 kg. Okolí si toho také všímá.", jmeno: "Zuzana K." },
    { text: "Výživový plán je bombastický, s žádným jídlem nemám problém — obsahuje všechny moje oblíbené potraviny. Za týden dole 1 kg a 3 cm v pase.", jmeno: "Petra H." }
  ];

  return (
    <main className="nd">
      <header className="nd-nav">
        <a href="#uvod" className="nd-logo" aria-label="NutriD poradna, domů">
          <span className="nd-logo-mark">N<span className="nd-logo-d">D</span></span>
          <span className="nd-logo-word">NutriD poradna</span>
        </a>
        <nav className="nd-navlinks" aria-label="Hlavní">
          <a href="#pomoc">S čím pomůžeme</a>
          <a href="#duvera">Proč my</a>
          <a href="tel:+420773943326" className="nd-navcall">+420 773 943 326</a>
        </nav>
      </header>

      <section className="nd-hero" id="uvod">
        <div className="nd-hero-text">
          <p className="nd-eyebrow">Výživové poradenství · Ostrava-Poruba</p>
          <h1 className="nd-h1">
            Talíř sestavený<br /><em>přesně na vaše tělo.</em>
          </h1>
          <p className="nd-lead">
            Žádné hladovky, detoxy ani počítání každého gramu rýže. Zkušená
            nutriční specialistka Mgr.&nbsp;Daniela Krčová vám sestaví pestrý
            jídelníček na míru — pro zdraví, kondici i vysněnou postavu.
          </p>
          <div className="nd-hero-cta">
            <a href="#pomoc" className="nd-btn">Objednat konzultaci</a>
            <a href="mailto:info@nutridporadna.cz" className="nd-btn-ghost">info@nutridporadna.cz</a>
          </div>
          <dl className="nd-facts">
            <div><dt>Vzdělání</dt><dd>1.&nbsp;lékařská fakulta UK</dd></div>
            <div><dt>Přístup</dt><dd>zcela individuální</dd></div>
            <div><dt>Kde</dt><dd>Francouzská 6167/5</dd></div>
          </dl>
        </div>
        <figure className="nd-hero-img">
          <img src="/hero.webp" alt="Pestrý talíř zeleniny a čerstvých surovin z výživové poradny NutriD" />
          <figcaption>„Za úspěchem stojí vyvážený jídelníček, pohyb a pozitivní vnímání sebe sama.“</figcaption>
        </figure>
      </section>

      <section className="nd-pomoc" id="pomoc">
        <div className="nd-sec-head">
          <h2 className="nd-h2">S čím vám pomůžeme</h2>
          <p className="nd-sec-sub">
            Každý člověk má jiné výživové nároky. Vyberte téma, které řešíte —
            plán vždy stavíme na míru vám, ne na obecné šabloně.
          </p>
        </div>
        <ol className="nd-cards">
          {specializace.map((s) => (
            <li key={s.cislo} className="nd-card">
              <span className="nd-card-num">{s.cislo}</span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
            </li>
          ))}
        </ol>
        <figure className="nd-strip">
          <img src="/section-1.webp" alt="Příprava zdravého jídla podle výživového plánu na míru" />
        </figure>
      </section>

      <section className="nd-duvera" id="duvera">
        <div className="nd-duvera-grid">
          <div className="nd-duvera-text">
            <h2 className="nd-h2">Proč NutriD poradna</h2>
            <p className="nd-sec-sub">
              Nejde o dietu, ale o dlouhodobou změnu. Naučíme vás dívat se na
              jídlo i na sebe jinak — bez neustálého odpírání.
            </p>
            <ul className="nd-zasady">
              {zasady.map((z, i) => (
                <li key={i}><span className="nd-check" aria-hidden="true">✓</span>{z}</li>
              ))}
            </ul>
          </div>
          <figure className="nd-duvera-img">
            <img src="/section-2.webp" alt="Nutriční specialistka Mgr. Daniela Krčová při konzultaci s klientkou" />
            <figcaption>Mgr.&nbsp;Daniela Krčová · nutriční specialistka</figcaption>
          </figure>
        </div>

        <div className="nd-ref">
          <h3 className="nd-ref-title">Co říkají klientky</h3>
          <div className="nd-ref-grid">
            {reference.map((r, i) => (
              <blockquote key={i} className="nd-quote">
                <p>„{r.text}“</p>
                <cite>— {r.jmeno}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

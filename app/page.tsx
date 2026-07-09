import type { CSSProperties } from "react";

export default function Page() {
  const sortiment = [
    {
      cislo: "01",
      nazev: "Hrubá stavba",
      popis: "Beton UH B20, cihly, malty, sádrokarton Rigips, OSB desky. Naložíme vám celou paletu i jeden pytel — a víme, kolik se toho vejde na dodávku.",
      polozky: ["UH Beton B20 25 kg", "OSB 3 nebroušená", "Sádrokarton Rigips RB", "Zdicí malty a lepidla"],
    },
    {
      cislo: "02",
      nazev: "Dřevo a řezivo",
      popis: "Hoblované i sušené řezivo, terasová prkna, palubky, latě, plotovky. Naskladněné, proměřené, s cenou za metr i za balení — ať se v tom vyznáte.",
      polozky: ["Prkno terasové borovice impreg.", "Palubka borovice Klasik A/B", "Lať hoblovaná 40×60", "Plotovka smrk"],
    },
    {
      cislo: "03",
      nazev: "Zahrada a technika",
      popis: "Nářadí, čerpadla, sekačky, grily i zastřešení bazénů. Co potřebujete k dokončení dvorku, altánu nebo terasy — máme pod jednou střechou.",
      polozky: ["Bruska úhlová UniversalGrind", "Čerpadlo zahradní Einhell", "Sekačka Riwall RPM 5135", "Zastřešení bazénu 3,66 m"],
    },
  ];

  const duvody = [
    {
      titulek: "Sklad na dosah",
      text: "Palety s betonem, řezivem i sádrokartonem máme fyzicky na place v Českých Budějovicích. Ne v katalogu — na dvoře, připravené k naložení.",
    },
    {
      titulek: "Cena za kus i za paletu",
      text: "U každé položky vidíte cenu za kus, za metr čtvereční i paletové zvýhodnění. Spočítáte si materiál na celou stavbu bez překvapení u pokladny.",
    },
    {
      titulek: "Poradíme, ne prodáme",
      text: "Kolik betonu na základovou desku? Jak zpevnit cestu? Zeptejte se u pultu — prodavači tady stavěli a řeknou vám, co reálně potřebujete.",
    },
  ];

  return (
    <main className="uh">
      <header className="uh-top">
        <a className="uh-mark" href="#" aria-label="UNI HOBBY stavebniny, domovská stránka">
          <span className="uh-mark-uni">UNI</span>
          <span className="uh-mark-hobby">HOBBY</span>
          <span className="uh-mark-tag">stavebniny · České Budějovice</span>
        </a>
        <a className="uh-callchip" href="tel:+420387000000">
          <span className="uh-callchip-lbl">Sklad na telefonu</span>
          <span className="uh-callchip-num">387 000 000</span>
        </a>
      </header>

      <section className="uh-hero">
        <div className="uh-hero-copy">
          <p className="uh-eyebrow">Stavebniny s vlastním skladem</p>
          <h1 className="uh-h1">
            Materiál,
            <br />
            co je
            <span className="uh-h1-accent"> na place</span>,
            <br />
            ne jen v letáku.
          </h1>
          <p className="uh-lede">
            Beton, řezivo, sádrokarton i zahradní technika naskladněné v Českých
            Budějovicích. Přijedete, naložíme, odvezete — a poradíme, kolik toho
            vlastně potřebujete.
          </p>
          <div className="uh-hero-cta">
            <a className="uh-btn uh-btn-primary" href="tel:+420387000000">Zavolat na sklad</a>
            <a className="uh-btn uh-btn-ghost" href="mailto:sklad@unihobby-cb.cz">Napsat poptávku</a>
          </div>
        </div>
        <figure className="uh-hero-fig">
          <img src="/hero.webp" alt="Naskladněné palety stavebního materiálu, řeziva a betonu ve stavebninách v Českých Budějovicích" />
          <figcaption className="uh-hero-cap">Dvůr stavebnin · palety připravené k naložení</figcaption>
        </figure>
      </section>

      <section className="uh-sec" aria-labelledby="sortiment-nadpis">
        <div className="uh-sec-head">
          <p className="uh-eyebrow">Co u nás naložíte</p>
          <h2 className="uh-h2" id="sortiment-nadpis">Tři regály, celá stavba</h2>
          <p className="uh-sec-intro">
            Od základů po hotovou terasu. Vybíráme skladem, s cenou za kus i za
            paletu, aby vám materiál došel přesně tam, kam má.
          </p>
        </div>

        <div className="uh-sec-media">
          <img src="/section-1.webp" alt="Terasová prkna, palubky a řezivo naskladněné v regálech stavebnin" />
        </div>

        <ol className="uh-cards">
          {sortiment.map((s) => (
            <li className="uh-card" key={s.cislo}>
              <span className="uh-card-num" aria-hidden="true">{s.cislo}</span>
              <h3 className="uh-card-h">{s.nazev}</h3>
              <p className="uh-card-p">{s.popis}</p>
              <ul className="uh-card-list">
                {s.polozky.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="uh-sec uh-sec-trust" aria-labelledby="duvera-nadpis">
        <div className="uh-trust-grid">
          <div className="uh-trust-media">
            <img src="/section-2.webp" alt="Prodejce stavebnin nakládá materiál zákazníkovi na dvoře v Českých Budějovicích" />
          </div>
          <div className="uh-trust-copy">
            <p className="uh-eyebrow">Proč jezdit k nám</p>
            <h2 className="uh-h2" id="duvera-nadpis">Stavebniny, kde si na materiál sáhnete</h2>
            <div className="uh-trust-list">
              {duvody.map((d, i) => (
                <div className="uh-trust-item" key={d.titulek}>
                  <span className="uh-trust-idx" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="uh-trust-h">{d.titulek}</h3>
                    <p className="uh-trust-p">{d.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="uh-hours" style={{"--d": "0ms"} as CSSProperties}>
              <div>
                <span className="uh-hours-lbl">Otevřeno</span>
                <span className="uh-hours-val">Po–Pá 7–17 · So 8–12</span>
              </div>
              <a className="uh-btn uh-btn-primary" href="tel:+420387000000">Zavolat na sklad</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

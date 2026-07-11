import type { CSSProperties } from "react";

export default function Page() {
  const kartotekaData: { c: string; nazev: string; puvod: string; poznamka: string }[] = [
    { c: "№ 001", nazev: "Bumbu The Original", puvod: "Barbados · 40 %", poznamka: "Kořeněný, těžké sklo, kovový kříž. Pije se pomalu, nikdy do panáku." },
    { c: "№ 014", nazev: "Don Papa Baroko", puvod: "Filipíny, Negros · 40 %", poznamka: "Limitovaná edice s hustým, medovým tělem. Na svátek i pro sebe." },
    { c: "№ 022", nazev: "Diplomático Reserva Exclusiva", puvod: "Venezuela · 12 let · 40 %", poznamka: "Sušené ovoce, karamel, kůže. Klasika, kterou nezkazíte." },
    { c: "№ 037", nazev: "Casa Charlize Primitivo", puvod: "Puglia, Itálie · 13,5 %", poznamka: "Plné jižní víno. Češi ho vzali útokem — my víme proč." }
  ];

  const stalice: { titulek: string; text: string }[] = [
    { titulek: "Vybíráme rukama, ne algoritmem", text: "Každou láhev na regálu jsme sami ochutnali. Když se vás zeptáme na chuť, kterou hledáte, poradíme podle ní — ne podle marže." },
    { titulek: "Přebalíme na dárek u pultu", text: "Dárková taška, bedna nebo degustační sada. Zabalíme na místě, popřejeme jménem toho, kdo dostane." },
    { titulek: "Praha, osobní odběr i rozvoz", text: "Vyzvednete si u nás v obchodě, nebo doručíme po Praze. Skladem přes deset kusů u toho, co lidé chtějí nejčastěji." }
  ];

  return (
    <main className="pa">
      <header className="pa-top">
        <a className="pa-mark" href="#" aria-label="Pan Alfréd — specializovaný obchod">
          <span className="pa-mark-pan">Pan</span>
          <span className="pa-mark-alfred">Alfréd</span>
        </a>
        <nav className="pa-nav" aria-label="Hlavní">
          <a href="#regal">Regál</a>
          <a href="#pult">U pultu</a>
          <a className="pa-tel" href="tel:+420777858853">777 858 853</a>
        </nav>
      </header>

      <section className="pa-hero" aria-labelledby="hero-nadpis">
        <div className="pa-hero-frame">
          <img className="pa-hero-img" src="/hero.webp" alt="Regály specializovaného obchodu Pan Alfréd s rumy, whisky a vínem" />
          <span className="pa-hero-band" aria-hidden="true">SPECIALIZOVANÝ OBCHOD · PRAHA · OD LÁHVE K LÁHVI</span>
        </div>

        <div className="pa-hero-text">
          <p className="pa-eyebrow">Rum · Whisky · Gin · Víno · Champagne</p>
          <h1 id="hero-nadpis">
            Láhev, kterou<br />
            <em>vám vyberou</em> ručně.
          </h1>
          <p className="pa-lead">
            U Pana Alfréda nekupujete etiketu. Kupujete chuť, o které víme, odkud pochází a k čemu se hodí. Karibský rum, italské Primitivo, kořeněné destiláty — a někoho za pultem, kdo je opravdu ochutnal.
          </p>
          <div className="pa-hero-cta">
            <a className="pa-btn" href="#regal">Prohlédnout regál</a>
            <a className="pa-btn-ghost" href="tel:+420777858853">Zavolat do obchodu</a>
          </div>
        </div>
      </section>

      <section className="pa-regal" id="regal" aria-labelledby="regal-nadpis">
        <div className="pa-sec-head">
          <p className="pa-eyebrow">Kartotéka regálu</p>
          <h2 id="regal-nadpis">Co teď stojí za ochutnání</h2>
          <p className="pa-sec-note">
            Ne žebříček podle prodejů. Čtyři láhve, které bychom vám sami vytáhli z police a řekli k nim příběh.
          </p>
        </div>

        <div className="pa-media">
          <img src="/section-1.webp" alt="Detail lahví rumu a whisky v obchodě Pan Alfréd" />
        </div>

        <ol className="pa-karty">
          {kartotekaData.map((k) => (
            <li className="pa-karta" key={k.c}>
              <span className="pa-karta-c">{k.c}</span>
              <div className="pa-karta-body">
                <h3>{k.nazev}</h3>
                <p className="pa-karta-puvod">{k.puvod}</p>
                <p className="pa-karta-pozn">{k.poznamka}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="pa-pult" id="pult" aria-labelledby="pult-nadpis">
        <div className="pa-pult-inner">
          <div className="pa-pult-media">
            <img src="/section-2.webp" alt="Pult obchodu Pan Alfréd s dárkovým balením" />
          </div>
          <div className="pa-pult-text">
            <p className="pa-eyebrow">U pultu v Praze</p>
            <h2 id="pult-nadpis">Obchod, ne e-shop bez tváře</h2>
            <div className="pa-stalice">
              {stalice.map((s, i) => (
                <div className="pa-stalice-row" key={s.titulek}>
                  <span className="pa-stalice-n" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{s.titulek}</h3>
                    <p>{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="pa-refs">
              „Bumbu Rum — pět hvězdiček z pěti.“ · „Casa Charlize Primitivo — objednáno jako dárek, sedlo.“ — ověření zákazníci z Heureky.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

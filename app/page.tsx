import type { CSSProperties } from "react";

export default function Page() {
  const prevence = [
    "Vakcinace",
    "Čipování a vydávání Europasů",
    "Odčervení a ošetření proti vnitřním parazitům",
    "Ochrana proti blechám a klíšťatům",
    "Krácení drápků",
    "Čištění uší a análních váčků",
    "Výživové poradenství",
  ];

  const obory = [
    {
      idx: "01",
      nazev: "Interní a kožní onemocnění",
      popis:
        "Gastroenterologie, kardiologie, nefrologie, endokrinologie i péče o kůži, oči a uši. Diagnostiku i léčbu vedeme na jednom místě.",
    },
    {
      idx: "02",
      nazev: "Chirurgie a endoskopie",
      popis:
        "Operace měkkých tkání v inhalační anestezii, kastrace psů, koček i hlodavců, odstranění nádorů a endoskopická vyšetření dýchacích i zažívacích cest.",
    },
    {
      idx: "03",
      nazev: "Stomatologie",
      popis:
        "Odstranění zubního kamene ultrazvukem, extrakce zubů a ošetření dásní. Zdravá tlama znamená spokojeného mazlíčka.",
    },
    {
      idx: "04",
      nazev: "Laboratoř přímo v ordinaci",
      popis:
        "Krevní obraz, biochemii, hormony štítné žlázy, zánětlivé markery i testy FeLV a FIV vyhodnotíme hned u nás — výsledky máte ještě během návštěvy.",
    },
  ];

  const tym = [
    { jmeno: "MVDr. Dagmar Dereza", role: "vedoucí lékařka" },
    { jmeno: "MVDr. Petra Slabá", role: "veterinární lékařka" },
    { jmeno: "MVDr. Kateřina Humpová", role: "veterinární lékařka" },
    { jmeno: "MVDr. Robert Novotný, PhD.", role: "veterinární lékař" },
  ];

  return (
    <main className="ed">
      <header className="ed-top">
        <a className="ed-mark" href="#" aria-label="Veterina Eden, domů">
          <span className="ed-mark-pulse" aria-hidden="true">
            <svg viewBox="0 0 120 40" role="img" aria-hidden="true">
              <polyline
                points="0,20 22,20 32,20 40,6 52,34 62,20 78,20 88,12 96,26 104,20 120,20"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="ed-mark-word">
            Veterina <em>Eden</em>
          </span>
        </a>
        <a className="ed-top-cta" href="tel:+420725334737">
          Objednat: 725 334 737
        </a>
      </header>

      <section className="ed-hero" aria-labelledby="hero-nadpis">
        <div className="ed-hero-copy">
          <p className="ed-eyebrow">Veterinární klinika · Brno-Královo Pole</p>
          <h1 id="hero-nadpis">
            Držíme prst<br />
            na <span className="ed-hl">tepu</span> vašeho
            <br />
            mazlíčka.
          </h1>
          <p className="ed-lede">
            Prevence, chirurgie i vlastní laboratoř pod jednou střechou.
            Pečujeme o zdraví vašich zvířat, jako by byla naše vlastní —
            a výsledky vyšetření znáte ještě během návštěvy.
          </p>
          <div className="ed-hero-actions">
            <a className="ed-btn" href="tel:+420725334737">
              Objednat se
            </a>
            <a className="ed-btn ed-btn-ghost" href="#sluzby">
              Naše služby
            </a>
          </div>

          <dl className="ed-hours" aria-label="Ordinační hodiny">
            <div>
              <dt>Po–Pá</dt>
              <dd>9:00–12:00 · 14:00–17:00</dd>
            </div>
            <div>
              <dt>So–Ne</dt>
              <dd className="ed-closed">zavřeno</dd>
            </div>
          </dl>
        </div>

        <figure className="ed-hero-media">
          <img
            src="/hero.webp"
            alt="Pes v ordinaci Veteriny Eden během vyšetření"
            width={900}
            height={1100}
          />
          <figcaption>Tererova 1 · konec ulice, po pravé straně</figcaption>
        </figure>
      </section>

      <section className="ed-sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="ed-sec-head">
          <p className="ed-eyebrow">Co u nás zvládneme</p>
          <h2 id="sluzby-nadpis">Od preventivní prohlídky po operační sál</h2>
        </div>

        <div className="ed-sluzby-grid">
          <figure className="ed-sluzby-media">
            <img
              src="/section-1.webp"
              alt="Veterinární lékař ošetřuje zvíře na klinice Eden"
              width={700}
              height={880}
              loading="lazy"
            />
          </figure>

          <div className="ed-sluzby-list">
            <div className="ed-prevence">
              <h3>Prevence, kterou zvládnete jednou návštěvou</h3>
              <ul>
                {prevence.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>

            <ol className="ed-obory">
              {obory.map((o) => (
                <li key={o.idx}>
                  <span className="ed-obor-idx" aria-hidden="true">
                    {o.idx}
                  </span>
                  <div>
                    <h4>{o.nazev}</h4>
                    <p>{o.popis}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="ed-tym" aria-labelledby="tym-nadpis">
        <div className="ed-tym-inner">
          <div className="ed-tym-copy">
            <p className="ed-eyebrow ed-eyebrow-light">Náš tým</p>
            <h2 id="tym-nadpis">
              Lidé, kterým svěříte svého mazlíčka bez váhání
            </h2>
            <p className="ed-lede">
              Přátelský a profesionální přístup nejen ke zvířatům, ale i k
              jejich majitelům. Spolupracujeme s Veterinární univerzitou
              VETUNI Brno a fungujeme jako výukové pracoviště pro budoucí
              veterináře — u nás vždy potkáte lékaře, který je v obraze.
            </p>

            <ul className="ed-tym-list">
              {tym.map((t) => (
                <li key={t.jmeno}>
                  <span className="ed-tym-jmeno">{t.jmeno}</span>
                  <span className="ed-tym-role">{t.role}</span>
                </li>
              ))}
            </ul>

            <div
              className="ed-kontakt"
              style={{ "--i": 0 } as CSSProperties}
            >
              <a href="tel:+420725334737">+420 725 334 737</a>
              <a href="mailto:info@veterinaeden.cz">info@veterinaeden.cz</a>
              <span>Tererova 1, 612 00 Brno – Královo Pole</span>
            </div>
          </div>

          <figure className="ed-tym-media">
            <img
              src="/section-2.webp"
              alt="Interiér a zázemí veterinární kliniky Eden"
              width={720}
              height={900}
              loading="lazy"
            />
            <figcaption>Podívejte se, jak to u nás vypadá.</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}

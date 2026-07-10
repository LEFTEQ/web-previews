import React from 'react';

const hodiny = [
  { den: 'Pondělí', dopo: '9:00 – 11:30', odpo: '15:00 – 20:00' },
  { den: 'Úterý', dopo: '9:00 – 11:30', odpo: '15:00 – 18:00' },
  { den: 'Středa', dopo: 'zavřeno', odpo: '15:00 – 20:00' },
  { den: 'Čtvrtek', dopo: '9:00 – 11:30', odpo: '15:00 – 18:00' },
  { den: 'Pátek', dopo: '9:00 – 11:30', odpo: '15:00 – 18:00' },
  { den: 'Sobota', dopo: 'jen po objednání', odpo: '', span: true },
];

const dnes = () => {
  const d = new Date().getDay(); // 0 = neděle
  return [null, 'Pondělí', 'Úterý', 'Středa', 'Čtvrtek', 'Pátek', 'Sobota'][d] ?? null;
};

const sluzby = [
  {
    kod: 'Čip',
    nazev: 'Čipování a europas',
    text: 'Mikročip, zápis do registru a vystavení pasu — vše na jednom místě, ať s pejskem můžete přes hranice bez starostí.',
  },
  {
    kod: 'Vak',
    nazev: 'Vakcinace a odčervení',
    text: 'Základní i cestovní očkování, vzteklina, kombinované vakcíny pro psy i kočky. Připomeneme vám termín přeočkování.',
  },
  {
    kod: 'Dg',
    nazev: 'Diagnostika a laboratoř',
    text: 'Vyšetření krve, moči a ultrazvuk přímo v ordinaci. Výsledky základních testů znáte často ještě během návštěvy.',
  },
  {
    kod: 'Chir',
    nazev: 'Chirurgie a hospitalizace',
    text: 'Kastrace, měkké tkáně i drobné zákroky s pooperačním dohledem. Vážnější případy zůstávají na hospitalizaci pod kontrolou.',
  },
  {
    kod: 'Kardio',
    nazev: 'Kardiologie',
    text: 'Specializovaná srdeční vyšetření na objednání. Nejbližší kardiologický den je ve čtvrtek — termíny se plní dopředu.',
  },
];

export default function Page() {
  const aktualniDen = dnes();

  return (
    <main className="vp">
      <header className="vp-nav" aria-label="Hlavní navigace">
        <a className="vp-mark" href="#uvod" aria-label="MVDr. Martin Petrlík — domů">
          <span className="vp-mark-pulse" aria-hidden="true">
            <svg viewBox="0 0 120 40" role="img" aria-hidden="true">
              <polyline points="0,20 22,20 34,4 48,36 60,20 82,20 94,12 108,20 120,20" />
            </svg>
          </span>
          <span className="vp-mark-name">
            <b>Petrlík</b>
            <em>veterinář · Brno</em>
          </span>
        </a>
        <nav className="vp-links">
          <a href="#sluzby">Péče</a>
          <a href="#duvera">Ordinace</a>
          <a className="vp-tel" href="tel:+420777000000">Zavolat</a>
        </nav>
      </header>

      <section className="vp-hero" id="uvod">
        <div className="vp-hero-media">
          <img
            src="/hero.webp"
            alt="MVDr. Martin Petrlík při ošetření zvířecího pacienta ve své ordinaci v Brně"
            width={1600}
            height={1200}
          />
          <span className="vp-hero-grad" aria-hidden="true" />
        </div>
        <div className="vp-hero-body">
          <p className="vp-eyebrow">Veterinární ordinace · Brno</p>
          <h1 className="vp-h1">
            Poslechneme si každé<br /> <span>zvířecí srdce</span> zvlášť.
          </h1>
          <p className="vp-lead">
            Malá ordinace, kde vašeho psa i kočku ošetří pořád ten samý veterinář — od
            čipování a očkování po ultrazvuk, chirurgii a srdeční vyšetření.
          </p>
          <div className="vp-cta-row">
            <a className="vp-btn" href="tel:+420777000000">Objednat k vyšetření</a>
            <a className="vp-btn-ghost" href="#sluzby">Co ošetřujeme</a>
          </div>

          <div className="vp-ekg" aria-label="Kardiologický den ve čtvrtek">
            <span className="vp-ekg-pulse" aria-hidden="true">
              <svg viewBox="0 0 220 40" preserveAspectRatio="none">
                <polyline points="0,20 60,20 74,6 90,34 104,20 130,20 142,10 156,20 220,20" />
              </svg>
            </span>
            <span className="vp-ekg-text">
              <b>Kardio den</b> ve čtvrtek — srdeční vyšetření na objednání
            </span>
          </div>
        </div>
      </section>

      <section className="vp-sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="vp-sec-head">
          <p className="vp-eyebrow">Péče</p>
          <h2 id="sluzby-nadpis" className="vp-h2">
            Od první návštěvy po operační sál
          </h2>
          <p className="vp-sec-sub">
            Většinu toho, co váš mazlíček za život potřebuje, zvládneme tady — bez
            posílání po specialistech přes celé Brno.
          </p>
        </div>

        <div className="vp-sluzby-grid">
          <div className="vp-sluzby-list">
            {sluzby.map((s) => (
              <article className="vp-service" key={s.nazev}>
                <span className="vp-service-kod" aria-hidden="true">
                  {s.kod}
                </span>
                <div>
                  <h3>{s.nazev}</h3>
                  <p>{s.text}</p>
                </div>
              </article>
            ))}
          </div>
          <figure className="vp-sluzby-fig">
            <img
              src="/section-1.webp"
              alt="Vyšetření zvířecího pacienta v ordinaci MVDr. Petrlíka"
              width={900}
              height={1100}
            />
            <figcaption>Jeden ošetřující veterinář, který vaše zvíře zná.</figcaption>
          </figure>
        </div>
      </section>

      <section className="vp-duvera" id="duvera" aria-labelledby="duvera-nadpis">
        <div className="vp-duvera-inner">
          <figure className="vp-duvera-fig">
            <img
              src="/section-2.webp"
              alt="Prostředí veterinární ordinace MVDr. Martina Petrlíka v Brně"
              width={1000}
              height={800}
            />
          </figure>
          <div className="vp-duvera-body">
            <p className="vp-eyebrow">Ordinace</p>
            <h2 id="duvera-nadpis" className="vp-h2">
              Kdy máme otevřeno
            </h2>
            <p className="vp-sec-sub">
              Přijďte v ordinačních hodinách, na chirurgii a kardiologii se objednejte
              předem. V akutním případě zavolejte — poradíme, jak dál.
            </p>

            <table className="vp-hours">
              <caption className="vp-vh">Ordinační hodiny</caption>
              <tbody>
                {hodiny.map((h) => {
                  const aktivni = h.den === aktualniDen;
                  return (
                    <tr key={h.den} className={aktivni ? 'vp-hours-now' : undefined}>
                      <th scope="row">
                        {h.den}
                        {aktivni && <span className="vp-dnes">dnes</span>}
                      </th>
                      {h.span ? (
                        <td colSpan={2} className="vp-hours-span">
                          {h.dopo}
                        </td>
                      ) : (
                        <>
                          <td className={h.dopo === 'zavřeno' ? 'vp-hours-off' : undefined}>
                            {h.dopo}
                          </td>
                          <td>{h.odpo}</td>
                        </>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="vp-facts">
              <div>
                <b>Brno</b>
                <span>Veterinární ordinace MVDr. Martin Petrlík</span>
              </div>
              <div>
                <b>Psi · kočky</b>
                <span>Malá zvířata i drobní savci</span>
              </div>
            </div>

            <a className="vp-btn" href="tel:+420777000000">Zavolat a objednat se</a>
          </div>
        </div>
      </section>
    </main>
  );
}

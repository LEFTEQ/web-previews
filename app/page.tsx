import React from "react";

export default function Page() {
  const disciplines = [
    {
      code: "MaR",
      name: "Měření a regulace",
      desc: "Řídicí systémy pro kotelny, vzduchotechniku i výrobní technologie. Naprogramujeme, oživíme a předáme funkční celek.",
    },
    {
      code: "EPS",
      name: "Elektrická požární signalizace",
      desc: "Ústředny, hlásiče a detekce, které v pravou chvíli spustí poplach a přivolají pomoc. Včetně pravidelných zkoušek.",
    },
    {
      code: "EZS",
      name: "Zabezpečovací systémy",
      desc: "Střežíme haly, kanceláře i sklady. Čidla, ústředna, přenos na pult ochrany — od návrhu po ostrý provoz.",
    },
    {
      code: "CCTV",
      name: "Kamerové systémy",
      desc: "Kamery s ostrým obrazem ve dne i v noci, záznam a vzdálený náhled do provozu odkudkoli.",
    },
    {
      code: "PPO",
      name: "Pasivní protipožární ochrana",
      desc: "Ucpávky prostupů a nátěry, které v případě požáru zpomalí šíření a udrží únikové cesty průchozí.",
    },
    {
      code: "PLYN",
      name: "Detekce úniku plynů",
      desc: "Snímače koncentrací, které varují dřív, než je pozdě. Vhodné do kotelen, garáží i technologických provozů.",
    },
  ];

  const flow = [
    { n: "01", t: "Projekt", d: "Zpracujeme projektovou dokumentaci na míru vašemu provozu." },
    { n: "02", t: "Rozváděč", d: "Vyrobíme rozváděč u nás v dílně a osadíme přesně podle projektu." },
    { n: "03", t: "Montáž", d: "Dodáme a namontujeme zařízení, natáhneme elektroinstalaci i hromosvody." },
    { n: "04", t: "Software", d: "Vytvoříme a nahrajeme software, odladíme a uvedeme do provozu." },
    { n: "05", t: "Servis", d: "Provádíme revize a jsme tu, když technologie potřebuje péči." },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="RETERM CZ — domů">
          <span className="wordmark__re">RE</span>
          <span className="wordmark__term">TERM</span>
          <span className="wordmark__cz">CZ</span>
        </a>
        <span className="topbar__loc">České Budějovice · slaboproudy od roku 2010</span>
        <a className="topbar__call" href="tel:+420602436273">+420 602 436 273</a>
      </header>

      <section className="hero">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Rozváděč a řídicí technika RETERM CZ — měření a regulace"
            className="hero__img"
          />
        </div>
        <div className="hero__panel">
          <p className="eyebrow">Systémy kontroly a řízení · Okružní 593, Č. Budějovice</p>
          <h1 className="hero__title">
            Napájíme, hlídáme a řídíme
            <span className="hero__accent"> vaše technologie.</span>
          </h1>
          <p className="hero__lead">
            Od rozváděče přes elektroinstalaci až po software, který to celé
            oživí. Slaboproud i silnoproud pod jednou střechou — projekt,
            výroba, montáž, servis.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="tel:+420602436273">Zavolat technikovi</a>
            <a className="btn btn--ghost" href="mailto:reterm@reterm-cz.eu">Napsat e-mail</a>
          </div>
          <dl className="hero__specs">
            <div>
              <dt>Obor</dt>
              <dd>MaR · EPS · EZS · CCTV</dd>
            </div>
            <div>
              <dt>Rozváděče</dt>
              <dd>vlastní výroba</dd>
            </div>
            <div>
              <dt>Revize</dt>
              <dd>elektro po celý rok</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="disciplines" aria-labelledby="disc-title">
        <div className="section-head">
          <p className="eyebrow">Co u nás pořídíte</p>
          <h2 id="disc-title" className="section-title">
            Šest slaboproudých disciplín, jedna parta lidí
          </h2>
          <p className="section-note">
            Zkratky, které visí na každém rozváděči i v projektu. U nás nejsou
            marketing — jsou to obory, ve kterých pracujeme každý den.
          </p>
        </div>

        <ul className="disc-grid">
          {disciplines.map((d) => (
            <li className="disc-card" key={d.code}>
              <span className="disc-card__code" aria-hidden="true">
                {d.code}
              </span>
              <h3 className="disc-card__name">{d.name}</h3>
              <p className="disc-card__desc">{d.desc}</p>
            </li>
          ))}
        </ul>

        <figure className="disc-figure">
          <img
            src="/section-1.webp"
            alt="Detail elektroinstalace a zapojení rozváděče RETERM CZ"
            className="disc-figure__img"
          />
          <figcaption className="disc-figure__cap">
            Rozváděč vyrábíme a osazujeme sami — od svorky po popisku.
          </figcaption>
        </figure>
      </section>

      <section className="trust" aria-labelledby="trust-title">
        <div className="trust__grid">
          <div className="trust__intro">
            <p className="eyebrow">Jak to u nás běží</p>
            <h2 id="trust-title" className="section-title">
              Celá zakázka od projektu až k servisu
            </h2>
            <p className="section-note">
              Nedodáváme jen krabici na zeď. Stavbu vezmeme od první čáry v
              dokumentaci až po den, kdy vám technologie sama hlásí, že je v
              pořádku.
            </p>

            <div className="platform">
              <p className="platform__label">Půjčujeme také</p>
              <p className="platform__name">Nůžková plošina UpRight X32</p>
              <ul className="platform__specs">
                <li>
                  <span>Pracovní výška</span>
                  <strong>11,8 m</strong>
                </li>
                <li>
                  <span>Nosnost koše</span>
                  <strong>340 kg</strong>
                </li>
                <li>
                  <span>Rozměr koše</span>
                  <strong>3,2 × 1,17 m</strong>
                </li>
                <li>
                  <span>Pohon</span>
                  <strong>4 baterie</strong>
                </li>
              </ul>
              <a className="btn btn--ghost" href="tel:+420602436273">
                Poptat pronájem plošiny
              </a>
            </div>
          </div>

          <ol className="flow">
            {flow.map((f) => (
              <li className="flow__step" key={f.n}>
                <span className="flow__num" aria-hidden="true">
                  {f.n}
                </span>
                <div className="flow__body">
                  <h3 className="flow__title">{f.t}</h3>
                  <p className="flow__desc">{f.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <figure className="trust__figure">
          <img
            src="/section-2.webp"
            alt="Technik RETERM CZ při montáži řídicí a měřicí techniky"
            className="trust__img"
          />
          <figcaption className="trust__cap">
            Okružní 593, 370 01 České Budějovice — sem za námi můžete zajít.
          </figcaption>
        </figure>
      </section>
    </main>
  );
}

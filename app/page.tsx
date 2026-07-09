import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      faze: "T-72 h",
      title: "Marketingová strategie",
      lead: "Cihlu po cihle, ne od oka.",
      body: "Postavíme plán, který drží pohromadě — od pozice značky přes rozpočet po kanály. Žádné střílení naslepo, každý krok má svůj důvod a měřitelný cíl.",
    },
    {
      faze: "T-24 h",
      title: "Přesné měření kampaní",
      lead: "Bez telemetrie žádný start.",
      body: "Nastavíme měření tak, abyste u každé koruny věděli, kam letí a co přivede. Konverze, atribuce, čistá data — základ, na kterém se dá rozhodovat.",
    },
    {
      faze: "START",
      title: "Růst konverzí",
      lead: "Tah, který zvedne čísla.",
      body: "Optimalizujeme kampaně na výsledek, ne na dojem. Testujeme, škrtáme, co nefunguje, a přiléváme tam, kde se to vrací zpět v tržbách.",
    },
    {
      faze: "ORBITA",
      title: "Analýzy a vyhodnocení",
      lead: "Kontrola letu, pravidelně.",
      body: "Každý měsíc si sedneme nad čísly — co fungovalo, co ne a kam dál. Reporty srozumitelné i pro toho, kdo raketové inženýrství nestudoval.",
    },
  ];

  const dashRows = [
    { label: "Přípravy ke startu", value: "194", unit: "projektů" },
    { label: "Odpaly do stratosféry", value: "59", unit: "kampaní" },
    { label: "Nastoupáno", value: "3 755", unit: "km" },
    { label: "Nehody", value: "3", unit: "za celou dobu" },
  ];

  return (
    <main className="viva">
      <header className="viva-nav" aria-label="Hlavní navigace">
        <a className="viva-mark" href="#hero" aria-label="ViVa marketing, domů">
          <span className="viva-mark__word">ViVa</span>
          <span className="viva-mark__sub">marketing · České Budějovice</span>
        </a>
        <nav className="viva-links">
          <a href="#sluzby">Co děláme</a>
          <a href="#letove-data">O nás</a>
          <a className="viva-nav-cta" href="tel:+420722657411">Zavolat</a>
        </nav>
      </header>

      <section className="viva-hero" id="hero">
        <div className="viva-hero__grid">
          <div className="viva-hero__copy">
            <p className="viva-eyebrow">
              <span className="viva-eyebrow__dot" aria-hidden="true" />
              Odpočet zahájen — reklamní agentura
            </p>
            <h1 className="viva-hero__title">
              Posílat lidi{" "}
              <span className="viva-hero__accent">nahoru</span>
              <br />
              není jen tak.
            </h1>
            <p className="viva-hero__lead">
              Marketing dělíme na sekundy jako start rakety. Podrobné plánování,
              precizní výpočty a jeden cíl: dostat vaši značku nad konkurenci —
              a udržet ji tam. Sebemenší chybička může mít následky, proto si
              pečlivě vybíráme, koho posíláme ke hvězdám.
            </p>
            <div className="viva-hero__actions">
              <a className="viva-btn" href="#sluzby">Zahájit odpočet</a>
              <a className="viva-btn viva-btn--ghost" href="mailto:info@vivamarketing.cz">
                info@vivamarketing.cz
              </a>
            </div>
          </div>

          <figure className="viva-hero__panel">
            <img
              src="/hero.webp"
              alt="Start rakety symbolizující rozjezd marketingové kampaně ViVa marketing"
              className="viva-hero__img"
              width={900}
              height={1100}
              loading="eager"
            />
            <figcaption className="viva-hero__readout" aria-label="Telemetrie startu">
              <span className="viva-readout__row">
                <span>APOGEUM</span><span>ROI +38 %</span>
              </span>
              <span className="viva-readout__row">
                <span>PALIVO</span><span>rozpočet pod kontrolou</span>
              </span>
              <span className="viva-readout__row viva-readout__row--live">
                <span>STAV</span><span>připraveno ke startu</span>
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="viva-sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="viva-section-head">
          <p className="viva-eyebrow viva-eyebrow--dark">Letový plán</p>
          <h2 id="sluzby-nadpis" className="viva-h2">
            Čtyři fáze cesty ke hvězdám
          </h2>
          <p className="viva-section-lead">
            WIN–WIN spolupráce znamená, že rosteme jen tehdy, když rostete vy.
            Provázíme vás online marketingem i podnikáním jako takovým — od
            prvních výpočtů až po orbitu.
          </p>
        </div>

        <div className="viva-sluzby__media">
          <img
            src="/section-1.webp"
            alt="Tým ViVa marketing při plánování reklamní kampaně"
            className="viva-media-img"
            width={1200}
            height={720}
            loading="lazy"
          />
        </div>

        <ol className="viva-timeline">
          {sluzby.map((s, i) => (
            <li className="viva-step" key={s.title} style={{ "--i": i } as CSSProperties}>
              <div className="viva-step__meta">
                <span className="viva-step__num">{String(i + 1).padStart(2, "0")}</span>
                <span className="viva-step__phase">{s.faze}</span>
              </div>
              <div className="viva-step__body">
                <h3 className="viva-step__title">{s.title}</h3>
                <p className="viva-step__lead">{s.lead}</p>
                <p className="viva-step__text">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="viva-about" id="letove-data" aria-labelledby="about-nadpis">
        <div className="viva-about__grid">
          <div className="viva-about__copy">
            <p className="viva-eyebrow">
              <span className="viva-eyebrow__dot" aria-hidden="true" />
              Palubní deník
            </p>
            <h2 id="about-nadpis" className="viva-h2 viva-h2--light">
              Mladá agentura,<br />která míří na hvězdy
            </h2>
            <p className="viva-about__text">
              „Je lepší mířit na hvězdy a netrefit se, než mířit na špičku hromady
              hnoje a trefit se.“ Držíme se toho. Jsme online marketingová
              agentura z Českých Budějovic s orientací na výsledek a dlouhodobé,
              přátelské vztahy s partnery.
            </p>
            <p className="viva-about__text">
              Žádný dotaz není hloupý — líná huba, holý neštěstí. Ozvěte se a
              spočítáme společně, jestli se váš start vyplatí.
            </p>

            <ul className="viva-contact">
              <li>
                <span className="viva-contact__k">Telefon</span>
                <a href="tel:+420722657411">+420 722 657 411</a>
              </li>
              <li>
                <span className="viva-contact__k">E-mail</span>
                <a href="mailto:info@vivamarketing.cz">info@vivamarketing.cz</a>
              </li>
              <li>
                <span className="viva-contact__k">Řídící středisko</span>
                <span>Riegrova 1756/51, České Budějovice</span>
              </li>
            </ul>
          </div>

          <div className="viva-about__panel">
            <img
              src="/section-2.webp"
              alt="Pohled na konkurenci ze stratosféry — vizuál ViVa marketing"
              className="viva-media-img viva-media-img--panel"
              width={900}
              height={560}
              loading="lazy"
            />
            <dl className="viva-dash" aria-label="Letová data agentury">
              {dashRows.map((r) => (
                <div className="viva-dash__row" key={r.label}>
                  <dt className="viva-dash__label">{r.label}</dt>
                  <dd className="viva-dash__val">
                    {r.value}
                    <span className="viva-dash__unit">{r.unit}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}

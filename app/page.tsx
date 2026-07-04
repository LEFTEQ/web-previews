import type { CSSProperties } from "react";

export default function Page() {
  const ordinacni = [
    { den: "Pondělí", cas: "7.30 – 15.00" },
    { den: "Úterý", cas: "7.30 – 16.00" },
    { den: "Středa", cas: "7.30 – 15.00" },
    { den: "Čtvrtek", cas: "7.30 – 16.00" },
    { den: "Pátek", cas: "7.30 – 13.00" },
  ];

  const provozni = [
    { den: "Pondělí", cas: "7.00 – 15.30" },
    { den: "Úterý", cas: "7.00 – 18.00" },
    { den: "Středa", cas: "7.00 – 15.30" },
    { den: "Čtvrtek", cas: "7.00 – 16.30" },
    { den: "Pátek", cas: "7.00 – 13.30" },
  ];

  return (
    <main className="od">
      <a className="od-skip" href="#obsah">
        Přeskočit na obsah
      </a>

      <header className="od-top">
        <div className="od-wordmark" aria-label="Ordinace Velký, zubní ordinace Olomouc">
          <span className="od-wordmark-mark" aria-hidden="true">
            V
          </span>
          <span className="od-wordmark-text">
            <strong>Ordinace&nbsp;Velký</strong>
            <em>zubní ordinace · Olomouc</em>
          </span>
        </div>
        <a className="od-top-call" href="tel:+420605088209">
          Zavolat 605&nbsp;088&nbsp;209
        </a>
      </header>

      <section className="od-hero" id="obsah">
        <div className="od-hero-media">
          <img
            src="/hero.webp"
            alt="Ošetřovna zubní ordinace MDDr. Jiřího Velkého v Olomouci"
            className="od-hero-img"
          />
        </div>

        <div className="od-hero-body">
          <p className="od-hero-eyebrow">Poliklinika AGEL · naproti hlavnímu nádraží</p>
          <h1 className="od-hero-title">
            Klidná péče
            <br />
            o&nbsp;jeden zub
            <br />
            v&nbsp;jeden čas.
          </h1>
          <p className="od-hero-lede">
            MDDr.&nbsp;Jiří Velký ošetřuje jednoho pacienta v&nbsp;jednu chvíli — bez spěchu,
            bez přeplněné čekárny. Ordinujeme na poliklinice AGEL v&nbsp;olomouckých Hodolanech.
          </p>

          <div className="od-notice" role="note">
            <span className="od-notice-tag">Registrace</span>
            <p>
              Z&nbsp;kapacitních důvodů momentálně <strong>nepřijímáme nové pacienty</strong>.
              Trápí vás akutní bolest? Zavolejte nám a domluvíme se.
            </p>
            <a className="od-notice-call" href="tel:+420605088209">
              Zavolat při akutní bolesti
            </a>
          </div>
        </div>
      </section>

      <section className="od-hours" aria-labelledby="hodiny-nadpis">
        <div className="od-hours-head">
          <h2 id="hodiny-nadpis">Kdy nás zastihnete</h2>
          <p>
            Ordinační doba je čas u&nbsp;křesla. Provozní doba je čas, kdy vám na telefonu
            i&nbsp;na recepci někdo odpoví.
          </p>
        </div>

        <div className="od-hours-grid">
          <div className="od-hours-card">
            <h3>Ordinační doba</h3>
            <p className="od-hours-sub">U&nbsp;pana doktora v&nbsp;křesle</p>
            <ul className="od-hours-list">
              {ordinacni.map((r) => (
                <li key={r.den}>
                  <span className="od-hours-day">{r.den}</span>
                  <span className="od-hours-dots" aria-hidden="true" />
                  <span className="od-hours-time">{r.cas}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="od-hours-card od-hours-card--alt">
            <h3>Provozní doba</h3>
            <p className="od-hours-sub">Telefon a&nbsp;recepce</p>
            <ul className="od-hours-list">
              {provozni.map((r) => (
                <li key={r.den}>
                  <span className="od-hours-day">{r.den}</span>
                  <span className="od-hours-dots" aria-hidden="true" />
                  <span className="od-hours-time">{r.cas}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <figure className="od-hours-figure">
          <img
            src="/section-1.webp"
            alt="Detail zubařského nástroje připraveného na ošetření"
            className="od-hours-figimg"
          />
        </figure>
      </section>

      <section className="od-about" aria-labelledby="o-nas-nadpis">
        <figure className="od-about-figure">
          <img
            src="/section-2.webp"
            alt="Vstup do polikliniky AGEL Olomouc, kde ordinace sídlí"
            className="od-about-img"
          />
        </figure>

        <div className="od-about-body">
          <p className="od-about-eyebrow">Kdo se o&nbsp;vás stará</p>
          <h2 id="o-nas-nadpis">MDDr.&nbsp;Jiří Velký</h2>
          <p className="od-about-lede">
            Malá zubní ordinace v&nbsp;Olomouci, kde znáte jméno svého zubaře a&nbsp;on zná to
            vaše. Bez běžícího pásu — čas máme na vyšetření i&nbsp;na vysvětlení.
          </p>

          <dl className="od-facts">
            <div className="od-fact">
              <dt>Kde nás najdete</dt>
              <dd>
                Jeremenkova 1056/40, 779&nbsp;00 Olomouc
                <br />
                budova Polikliniky AGEL, naproti hlavního nádraží
              </dd>
            </div>
            <div className="od-fact">
              <dt>Telefon</dt>
              <dd>
                <a href="tel:+420605088209">605&nbsp;088&nbsp;209</a>
              </dd>
            </div>
            <div className="od-fact">
              <dt>E-mail</dt>
              <dd>
                <a href="mailto:info@ordinacevelky.cz">info@ordinacevelky.cz</a>
              </dd>
            </div>
            <div className="od-fact">
              <dt>Ordinace Velký s.r.o.</dt>
              <dd>IČO 02031272 · IČZ 89506000</dd>
            </div>
          </dl>

          <p className="od-about-note">
            V&nbsp;péči jsme od roku 2013. Spisová značka C&nbsp;57055, Krajský soud
            v&nbsp;Ostravě.
          </p>
        </div>
      </section>
    </main>
  );
}

export const dynamic = "force-static";

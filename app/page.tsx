import type { CSSProperties } from "react";

type Zajezd = {
  cislo: string;
  region: string;
  nazev: string;
  termin: string;
  delka: string;
  strava: string;
  doprava: string;
  cena: string;
  za2: string;
};

const poznavacky: Zajezd[] = [
  {
    cislo: "01",
    region: "Salcbursko",
    nazev: "Grossglockner a Orlí hnízdo",
    termin: "26.—28. 9. 2026",
    delka: "3 dny / 2 noci",
    strava: "Polopenze",
    doprava: "Autobus",
    cena: "7 590",
    za2: "15 180",
  },
  {
    cislo: "02",
    region: "Dolní Rakousko",
    nazev: "Perly Podunají s plavbou lodí",
    termin: "4.—6. 9. 2026",
    delka: "3 dny / 2 noci",
    strava: "Polopenze",
    doprava: "Autobus",
    cena: "7 990",
    za2: "15 980",
  },
  {
    cislo: "03",
    region: "Tyrolsko",
    nazev: "Údolí Pitztal a Kaunertal",
    termin: "10.—13. 9. 2026",
    delka: "4 dny / 3 noci",
    strava: "Polopenze",
    doprava: "Autobus",
    cena: "11 390",
    za2: "22 780",
  },
  {
    cislo: "04",
    region: "Korutany",
    nazev: "Souhra alpských hor a jezer",
    termin: "13.—17. 9. 2026",
    delka: "5 dní / 4 noci",
    strava: "Polopenze",
    doprava: "Autobus",
    cena: "12 390",
    za2: "24 780",
  },
];

export default function Page() {
  return (
    <main className="dt">
      <header className="dt-top">
        <a className="dt-brand" href="#" aria-label="Datour, cestovní kancelář v Pardubicích">
          <span className="dt-brand-mark" aria-hidden="true">
            <span className="dt-brand-pin" />
          </span>
          <span className="dt-brand-word">
            DA<span className="dt-brand-accent">TOUR</span>
          </span>
        </a>
        <div className="dt-top-meta">
          <span className="dt-top-city">Odlety a odjezdy z Pardubic</span>
          <a className="dt-top-phone" href="tel:+420466413651">+420 466 413 651</a>
        </div>
      </header>

      <section className="dt-hero" aria-labelledby="dt-hero-title">
        <img
          className="dt-hero-img"
          src="/hero.webp"
          alt="Alpská krajina s jezerem a horskými štíty, cíl poznávacích zájezdů Datour"
          width={1600}
          height={1000}
          decoding="async"
        />
        <div className="dt-hero-scrim" aria-hidden="true" />

        <div className="dt-hero-inner">
          <p className="dt-eyebrow">Cestovní kancelář · Pardubice · od roku 1994</p>
          <h1 id="dt-hero-title" className="dt-hero-title">
            Nastupujete<br />
            <span className="dt-hero-title-em">u vás doma.</span>
          </h1>
          <p className="dt-hero-lead">
            Autobus vyjíždí přímo z Pardubic — bez přejezdů do Prahy, bez
            hledání parkování. Rakouské Alpy, maďarské lázně i řecké pobřeží
            s průvodcem, který jede s vámi.
          </p>

          <div className="dt-cedule" role="group" aria-label="Odjezdová tabule">
            <div className="dt-cedule-head">
              <span>Odjezd</span>
              <span>Pardubice, aut. nádraží</span>
            </div>
            <ul className="dt-cedule-list">
              <li>
                <span className="dt-cedule-dest">Salcbursko — Grossglockner</span>
                <span className="dt-cedule-date">26. 9.</span>
                <span className="dt-cedule-price">7 590 Kč</span>
              </li>
              <li>
                <span className="dt-cedule-dest">Dolní Rakousko — Podunají</span>
                <span className="dt-cedule-date">4. 9.</span>
                <span className="dt-cedule-price">7 990 Kč</span>
              </li>
              <li>
                <span className="dt-cedule-dest">Korutany — hory a jezera</span>
                <span className="dt-cedule-date">13. 9.</span>
                <span className="dt-cedule-price">12 390 Kč</span>
              </li>
            </ul>
            <div className="dt-cedule-foot">
              <a className="dt-btn dt-btn-primary" href="#nabidka">
                Prohlédnout odjezdy
              </a>
              <a className="dt-btn dt-btn-ghost" href="tel:+420466413651">
                Zavolat kanceláři
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="dt-section" id="nabidka" aria-labelledby="dt-nabidka-title">
        <div className="dt-section-head">
          <p className="dt-eyebrow dt-eyebrow-dark">Poznávačky Datour · podzim 2026</p>
          <h2 id="dt-nabidka-title" className="dt-h2">
            Autobusem do Alp<br />s odjezdem z Pardubic
          </h2>
          <p className="dt-section-lead">
            Každý zájezd má svého průvodce, polopenzi a jedno místo v autobuse
            jen pro vás. Ceny jsou za osobu — u tabulky vidíte i cenu za dvojici.
          </p>
        </div>

        <ol className="dt-cards">
          {poznavacky.map((z) => (
            <li key={z.cislo} className="dt-card">
              <div className="dt-card-num" aria-hidden="true">{z.cislo}</div>
              <p className="dt-card-region">{z.region}</p>
              <h3 className="dt-card-title">{z.nazev}</h3>
              <dl className="dt-card-facts">
                <div>
                  <dt>Termín</dt>
                  <dd>{z.termin}</dd>
                </div>
                <div>
                  <dt>Délka</dt>
                  <dd>{z.delka}</dd>
                </div>
                <div>
                  <dt>Strava</dt>
                  <dd>{z.strava}</dd>
                </div>
                <div>
                  <dt>Doprava</dt>
                  <dd>{z.doprava}</dd>
                </div>
              </dl>
              <div className="dt-card-foot">
                <div className="dt-card-price">
                  <span className="dt-card-price-from">od</span>
                  <span className="dt-card-price-val">{z.cena} Kč</span>
                  <span className="dt-card-price-two">za 2 osoby {z.za2} Kč</span>
                </div>
                <a className="dt-card-link" href="#" aria-label={`Detail zájezdu ${z.nazev}`}>
                  Detail →
                </a>
              </div>
            </li>
          ))}
        </ol>

        <aside className="dt-note">
          <img
            className="dt-note-img"
            src="/section-1.webp"
            alt="Skupina cestujících na výletě s průvodcem"
            width={880}
            height={620}
            loading="lazy"
            decoding="async"
          />
          <div className="dt-note-body">
            <p className="dt-eyebrow dt-eyebrow-dark">Nejen Alpy</p>
            <h3 className="dt-note-title">Lázně, moře i letecky</h3>
            <p>
              Kromě autobusových poznávaček vozíme klienty na lázeňské pobyty
              do západních Čech, na bulharské Černomoří s all inclusive a letecky
              z Prahy, Brna i Ostravy. Řecko a Maďarsko máme v nabídce každou sezónu.
            </p>
            <a className="dt-btn dt-btn-primary" href="tel:+420466413651">
              Poradíme s výběrem
            </a>
          </div>
        </aside>
      </section>

      <section className="dt-trust" aria-labelledby="dt-trust-title">
        <div className="dt-trust-media">
          <img
            className="dt-trust-img"
            src="/section-2.webp"
            alt="Kancelář Datour v Pardubicích, kde se domlouvají zájezdy osobně"
            width={900}
            height={1100}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="dt-trust-body">
          <p className="dt-eyebrow dt-eyebrow-dark">O nás</p>
          <h2 id="dt-trust-title" className="dt-h2">
            Kancelář, kam si<br />pro zájezd zajdete
          </h2>
          <p className="dt-trust-lead">
            Datour je pardubická cestovní kancelář — pojištěná proti úpadku,
            s vlastními průvodci a katalogem, který sestavujeme sami. Sednete si
            k nám, projdeme termíny a smlouvu podepíšete na místě.
          </p>

          <ul className="dt-facts">
            <li>
              <span className="dt-facts-k">Pojištění CK</span>
              <span className="dt-facts-v">Zákonná ochrana proti úpadku</span>
            </li>
            <li>
              <span className="dt-facts-k">Vlastní průvodci</span>
              <span className="dt-facts-v">Jedou s vámi celou cestu</span>
            </li>
            <li>
              <span className="dt-facts-k">Nástup</span>
              <span className="dt-facts-v">Pardubice — bez přejezdu do Prahy</span>
            </li>
          </ul>

          <div className="dt-contact">
            <div>
              <p className="dt-contact-k">Zavolejte</p>
              <a className="dt-contact-v" href="tel:+420466413651">+420 466 413 651</a>
            </div>
            <div>
              <p className="dt-contact-k">Napište</p>
              <a className="dt-contact-v" href="mailto:datour@datour.cz">datour@datour.cz</a>
            </div>
            <div>
              <p className="dt-contact-k">Otevřeno</p>
              <p className="dt-contact-v">Po—Pá 9:00—15:00</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import type { CSSProperties } from "react";

const services = [
  {
    code: "EZS",
    title: "Zabezpečovací signalizace",
    desc: "Alarmy pro byty, domy i provozovny — čidla pohybu, detekce otevření, napojení na pult ochrany.",
    status: "střeženo",
  },
  {
    code: "EPS",
    title: "Požární signalizace",
    desc: "Kouřové a teplotní hlásiče s automatickým poplachem. Návrh, montáž i pravidelné revize.",
    status: "hlídá 24/7",
  },
  {
    code: "CCTV",
    title: "Kamerové systémy",
    desc: "IP kamery s ostrým nočním obrazem, záznam a vzdálený náhled z mobilu odkudkoli.",
    status: "záznam běží",
  },
  {
    code: "ACS",
    title: "Kontrola vstupu",
    desc: "Kartové a čipové systémy — kdo, kam a kdy smí. Přehled o pohybu ve firmě i za dveřmi.",
    status: "přístup ok",
  },
  {
    code: "STA",
    title: "Antény a rozvody",
    desc: "TV, R i SAT antény, společné televizní antény a kabelové rozvody pro bytové domy.",
    status: "signál ok",
  },
  {
    code: "EL",
    title: "Elektroinstalace",
    desc: "Kompletní elektroinstalační práce, telefonní ústředny a rozvody — od projekce po revizi.",
    status: "pod proudem",
  },
];

export default function Page() {
  return (
    <>
      <header className="bs-top">
        <div className="bs-top-in">
          <a className="bs-mark" href="#uvod" aria-label="BS Signál Plzeň — úvod">
            BS<b>Signál</b>
            <span className="wave" aria-hidden="true" />
          </a>
          <a className="bs-call" href="tel:+420603419833">+420 603 419 833</a>
        </div>
      </header>

      <main id="uvod">
        <section className="bs-hero">
          <div className="bs-hero-media" aria-hidden="true">
            <img src="/hero.webp" alt="" />
          </div>
          <div className="bs-hero-in">
            <span className="bs-status">
              <span className="dot" aria-hidden="true" />
              SYSTÉM STŘEŽÍ · PLZEŇ A OKOLÍ
            </span>

            <h1 className="bs-h1">
              <span className="lo">Zabezpečovací systémy, které nikdy nespí</span>
              <span>Váš objekt</span>
              <span>je <em>pod dohledem</em></span>
            </h1>

            <p className="bs-lede">
              Od roku <b>1999</b> montujeme alarmy, kamery a požární signalizaci
              v Plzni a okolí. Kompletně — od projekce a dodávky přes montáž
              a revize až po servis, když je potřeba.
            </p>

            <div className="bs-hero-actions">
              <a className="bs-btn primary" href="tel:+420603419833">Zavolat technikovi</a>
              <a className="bs-btn ghost" href="#sluzby">Co zabezpečíme</a>
            </div>

            <div className="bs-monitor" role="list" aria-label="Přehled služby">
              <div className="bs-mon" role="listitem">
                <div className="k"><span className="led" aria-hidden="true" />OD ROKU</div>
                <div className="v">1999</div>
              </div>
              <div className="bs-mon" role="listitem">
                <div className="k"><span className="led" aria-hidden="true" />PŮSOBNOST</div>
                <div className="v">Plzeň <small>a okolí</small></div>
              </div>
              <div className="bs-mon" role="listitem">
                <div className="k"><span className="led" aria-hidden="true" />OBORY</div>
                <div className="v">6 <small>systémů</small></div>
              </div>
              <div className="bs-mon" role="listitem">
                <div className="k"><span className="led" aria-hidden="true" />SERVIS</div>
                <div className="v">A–Z</div>
              </div>
            </div>
          </div>
        </section>

        <section className="bs-sec" id="sluzby">
          <div className="bs">
            <p className="bs-eyebrow">Co zabezpečíme</p>
            <h2>Šest systémů, jeden dodavatel</h2>
            <p className="sub">
              Nemusíte volat pět firem. U nás dostanete zabezpečení, kamery,
              požární ochranu i elektroinstalaci pod jednou střechou — a jeden
              telefon, když bude něco potřeba.
            </p>

            <ul className="bs-chan">
              {services.map((s) => (
                <li key={s.code} tabIndex={0}>
                  <span className="code">{s.code}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                  <span className="st">
                    <span className="led" aria-hidden="true" />
                    {s.status}
                  </span>
                </li>
              ))}
            </ul>

            <p className="bs-note">
              CENY // Smluvní. Před realizací uděláme nezávaznou kalkulaci
              podle typu zakázky — víte předem, na čem jste.
            </p>
          </div>
        </section>

        <section className="bs-sec" id="o-nas">
          <div className="bs">
            <div className="bs-about">
              <figure className="bs-about-media">
                <img src="/section-1.webp" alt="Montáž zabezpečovacího systému technikem BS Signál Plzeň" />
                <figcaption>Montáž a zapojení přímo u zákazníka v Plzni</figcaption>
              </figure>

              <div>
                <p className="bs-eyebrow">Proč BS Signál</p>
                <h2>Ručíme za to od kabelu po poplach</h2>
                <div className="prose">
                  <p>
                    Jsme malá plzeňská firma, která na trhu elektroinstalace
                    a slaboproudu působí už od roku 1999. Známe místní domy,
                    provozovny i to, jak tady lidé bydlí a podnikají.
                  </p>
                  <p>
                    Naší předností je, že projekci, dodávku, montáž, revizi
                    i servis zvládneme sami — nepřehazujeme odpovědnost mezi
                    subdodavatele. Když zazvoní alarm nebo je potřeba servis,
                    voláte přímo tomu, kdo systém instaloval.
                  </p>
                </div>

                <ul className="bs-facts">
                  <li>
                    <div className="n">25+ let</div>
                    <div className="l">zkušeností v oboru od roku 1999</div>
                  </li>
                  <li>
                    <div className="n">Plzeň</div>
                    <div className="l">a okolí — jsme u vás rychle</div>
                  </li>
                  <li>
                    <div className="n">Vše v ruce</div>
                    <div className="l">od projekce po pravidelné revize</div>
                  </li>
                  <li>
                    <div className="n">Revize</div>
                    <div className="l">elektrických zařízení dle normy</div>
                  </li>
                </ul>

                <div className="bs-contact-card">
                  <div className="row">
                    <span>ADRESA</span>
                    <a href="https://mapy.cz/?q=Slovansk%C3%A1%20alej%201993/28%20Plze%C5%88" target="_blank" rel="noreferrer">
                      Slovanská alej 1993/28, Plzeň
                    </a>
                  </div>
                  <div className="row">
                    <span>TELEFON</span>
                    <a href="tel:+420603419833">+420 603 419 833</a>
                  </div>
                  <div className="row">
                    <span>E-MAIL</span>
                    <a href="mailto:bssignal@volny.cz">bssignal@volny.cz</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

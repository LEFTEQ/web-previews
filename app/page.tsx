import type { CSSProperties } from "react";

const tel = "+420605101010";
const telLabel = "605 10 10 10";
const email = "auto.kadlec@seznam.cz";

const dtcCodes = [
  { code: "P0300", label: "náhodné vynechávání zapalování" },
  { code: "C1234", label: "chyba čidla ABS, levé přední" },
  { code: "P0715", label: "vstupní čidlo otáček převodovky" },
  { code: "P0420", label: "účinnost katalyzátoru pod limitem" },
];

const systems = [
  {
    n: "01",
    title: "Motor a řídicí jednotka",
    body: "Vyčteme paměť závad z řídicí jednotky, změříme skutečné hodnoty senzorů a najdeme příčinu — ne jen kód. Vynechávání, kouření, rozsvícená kontrolka motoru.",
    tag: "OBD-II · CAN",
  },
  {
    n: "02",
    title: "ABS a airbagy",
    body: "Rozsvícená kontrolka ABS nebo airbagu není maličkost. Přečteme čidla kol, tlaky v okruhu a stav pyrotechniky, závadu vymažeme až po opravě.",
    tag: "bezpečnost",
  },
  {
    n: "03",
    title: "Automatická převodovka",
    body: "Cukání, tvrdé řazení, nouzový režim. Diagnostikujeme adaptace, teploty a tlaky — poznáme, jestli stačí olej a učení, nebo je problém hlouběji.",
    tag: "adaptace",
  },
  {
    n: "04",
    title: "Komfortní elektronika",
    body: "Centrál, okna, klimatizace, moduly komfortu. Školíme se na diagnostiku komfortní elektroniky každý rok, takže nezůstaneme stát u prvního záludného modulu.",
    tag: "moduly",
  },
];

const services = [
  "Diagnostika elektroniky",
  "Mechanické práce",
  "Plnění klimatizace R134a i R-1234yf",
  "Geometrie náprav",
  "Pneuservis",
  "Dekarbonizace motoru",
  "Servisní prohlídky",
  "Příprava na TK + ME",
];

export default function Page() {
  return (
    <main className="pg">
      <header className="nav">
        <a className="wordmark" href="#top" aria-label="Auto Kadlec, domů">
          <span className="wm-auto">Auto</span>
          <span className="wm-kadlec">KADLEC</span>
          <span className="wm-sub">diagnostika · Ostrava</span>
        </a>
        <a className="nav-call" href={`tel:${tel}`}>
          <span className="nav-call-dot" aria-hidden="true" />
          Zavolat {telLabel}
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Diagnostický přístroj připojený k řídicí jednotce vozu v dílně Auto Kadlec"
            className="hero-img"
          />
          <div className="hero-scan" aria-hidden="true" />
        </div>

        <div className="hero-body">
          <p className="eyebrow">Nezávislý autoservis · od roku 1999</p>
          <h1 className="hero-h1">
            Kontrolka svítí.
            <br />
            My víme <span className="h1-accent">proč.</span>
          </h1>
          <p className="hero-lead">
            Přivezte vůz s rozsvícenou kontrolkou, cukajícím motorem nebo hláškou
            na displeji. Připojíme diagnostiku, vyčteme paměť závad a řekneme vám
            rovnou, co se děje a kolik to bude stát — než začneme šroubovat.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href={`tel:${tel}`}>
              Objednat diagnostiku
            </a>
            <a className="btn btn-ghost" href={`mailto:${email}`}>
              Napsat e-mail
            </a>
          </div>

          <div className="readout" aria-label="Ukázka čtení paměti závad">
            <div className="readout-head">
              <span className="readout-blink" aria-hidden="true" />
              Čtení paměti závad
            </div>
            <ul className="readout-list">
              {dtcCodes.map((c) => (
                <li key={c.code} className="readout-row">
                  <span className="readout-code">{c.code}</span>
                  <span className="readout-label">{c.label}</span>
                </li>
              ))}
            </ul>
            <p className="readout-foot">
              Ilustrační výpis — u vašeho vozu ho projdeme společně a vysvětlíme.
            </p>
          </div>
        </div>
      </section>

      <section className="systems" id="co-resime" aria-labelledby="systems-h">
        <div className="sec-head">
          <p className="eyebrow">Co u nás vyčteme</p>
          <h2 id="systems-h" className="sec-h">
            Čtyři systémy, do kterých vidíme
          </h2>
          <p className="sec-intro">
            Diagnostika není hádání. Postupujeme systém po systému a od kódu se
            dostaneme k příčině — u motoru, brzd, převodovky i komfortní
            elektroniky.
          </p>
        </div>

        <div className="sys-grid">
          {systems.map((s) => (
            <article key={s.n} className="sys-card">
              <div className="sys-top">
                <span className="sys-n">{s.n}</span>
                <span className="sys-tag">{s.tag}</span>
              </div>
              <h3 className="sys-title">{s.title}</h3>
              <p className="sys-body">{s.body}</p>
            </article>
          ))}
        </div>

        <div className="sec-media">
          <img
            src="/section-1.webp"
            alt="Technik Auto Kadlec u vozu s notebookem a diagnostickým rozhraním"
            className="sec-img"
          />
        </div>
      </section>

      <section className="trust" id="o-nas" aria-labelledby="trust-h">
        <div className="trust-inner">
          <div className="trust-copy">
            <p className="eyebrow">Proč právě k nám do Hrabové</p>
            <h2 id="trust-h" className="sec-h">
              Servis, který drží náskok díky školení, ne díky heslům
            </h2>
            <p className="trust-lead">
              Auto Kadlec funguje v Ostravě-Hrabové nepřetržitě od roku 1999.
              Diagnostické systémy komfortní elektroniky i mechanické postupy
              každý rok znovu proškolujeme — proto se u nás nezaseknete u prvního
              modulu, který jiní „nepřečtou“.
            </p>

            <ul className="trust-facts">
              <li>
                <span className="tf-k">25+ let</span>
                <span className="tf-v">na jedné adrese v Hrabové</span>
              </li>
              <li>
                <span className="tf-k">ČSOB · UNIQA</span>
                <span className="tf-v">smluvní partner, řešíme pojistné události</span>
              </li>
              <li>
                <span className="tf-k">Po–Pá 7–15:30</span>
                <span className="tf-v">objednání předem, ať víme, co vás čeká</span>
              </li>
            </ul>

            <div className="svc-block">
              <p className="svc-title">Co všechno u nás zvládneme</p>
              <ul className="svc-list">
                {services.map((s) => (
                  <li key={s} className="svc-item">
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="contact-card">
              <div className="cc-row">
                <span className="cc-k">Kde nás najdete</span>
                <span className="cc-v">Místecká 126/256, 720 00 Ostrava-Hrabová</span>
              </div>
              <div className="cc-actions">
                <a className="btn btn-primary" href={`tel:${tel}`}>
                  Zavolat {telLabel}
                </a>
                <a className="btn btn-ghost" href={`mailto:${email}`}>
                  {email}
                </a>
              </div>
            </div>
          </div>

          <div className="trust-media">
            <img
              src="/section-2.webp"
              alt="Dílna autoservisu Auto Kadlec s vozem na zvedáku"
              className="trust-img"
            />
            <div className="trust-badge" style={{ "--i": 0 } as CSSProperties}>
              <span className="tb-num">1999</span>
              <span className="tb-lab">rok, kdy jsme začali</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import type { ReactNode } from "react";

type Service = {
  cat: "Servis" | "Detailing";
  title: string;
  body: string;
};

const services: Service[] = [
  {
    cat: "Servis",
    title: "Veškeré opravy",
    body: "Brzdy, oleje, podvozek, výfuk i klimatizace. Diagnostika i oprava na jednom místě v Liberci.",
  },
  {
    cat: "Servis",
    title: "Komplexní diagnostika",
    body: "Nejmodernější přístroje odhalí závadu dřív, než se ohlásí kontrolkou na palubovce.",
  },
  {
    cat: "Servis",
    title: "Čištění a servis DPF",
    body: "Účinné pročištění filtru pevných částic a dekarbonizace motoru — bez zbytečné výměny dílu.",
  },
  {
    cat: "Servis",
    title: "Náhradní vozidlo",
    body: "Po dobu servisu vám půjčíme vůz za zvýhodněnou cenu. Nezůstanete kvůli opravě bez auta.",
  },
  {
    cat: "Detailing",
    title: "Keramické povlaky",
    body: "Ochranný keramický povlak dá laku hloubku, mokrý lesk a roky odolnosti proti špíně a UV.",
  },
  {
    cat: "Detailing",
    title: "Ochranné a designové fólie",
    body: "Fólie chrání lak před odletujícími kamínky a škrábanci — nebo vozu dají zcela novou barvu.",
  },
  {
    cat: "Detailing",
    title: "Renovace světlometů",
    body: "Zmatnělým světlometům vrátíme průzračnost a vám s tím i lepší výhled do zatáčky za tmy.",
  },
  {
    cat: "Detailing",
    title: "Detailní čištění",
    body: "Ruční mytí a péče o interiér i exteriér — do posledního detailu, jako o galerijní exponát.",
  },
];

const trust: { k: string; v: string }[] = [
  { k: "Pod jednou střechou", v: "Od výměny oleje po keramiku — mechanika i detailing na jedné adrese." },
  { k: "Vůz přebíráte pod světlem", v: "Hotovou práci si prohlédnete pod detailingovým reflektorem, ne pod kobercem." },
  { k: "Cena předem", v: "Rozsah i cenu odsouhlasíte dřív, než sáhneme na klíč. Žádná překvapení na faktuře." },
];

const hours: { d: string; h: string }[] = [
  { d: "Pondělí", h: "08:00 – 16:00" },
  { d: "Úterý", h: "08:00 – 17:00" },
  { d: "Středa", h: "08:00 – 16:00" },
  { d: "Čtvrtek", h: "08:00 – 17:00" },
  { d: "Pátek", h: "08:00 – 16:00" },
];

export default function Page(): ReactNode {
  return (
    <>
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="P+M autoservis Liberec">
          <span className="wordmark-pm">
            P<span className="wordmark-plus">+</span>M
          </span>
          <span className="wordmark-sub">autoservis · Liberec</span>
        </a>
        <a className="topbar-call" href="tel:+420777111222">
          Zavolat
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-bay" aria-hidden="true" />
          <div className="hero-inner">
            <p className="eyebrow">
              <span className="eyebrow-tag">Servis</span>
              <span className="eyebrow-tag">Detailing</span>
              <span className="eyebrow-tag">Ochrana laku</span>
            </p>
            <h1 id="hero-title" className="hero-title">
              Kompletní péče
              <br /> o váš vůz
              <span className="beam" aria-hidden="true" />
            </h1>
            <p className="hero-lead">
              Jedno auto, jedno světlo, jeden panel laku. V liberecké dílně P+M přistupujeme
              ke každému vozu jako ke galerijnímu exponátu — od diagnostiky motoru po keramický
              lesk, který sjede po kapotě jako jeden ostrý odlesk.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="tel:+420777111222">
                Zavolat do dílny
              </a>
              <a className="btn btn-ghost" href="mailto:info@example.cz">
                Napsat e-mail
              </a>
            </div>
          </div>
        </section>

        <div className="sheen-rule" role="presentation" />

        <section className="section" aria-labelledby="svc-title">
          <div className="section-head">
            <p className="section-kicker">Co pro vůz uděláme</p>
            <h2 id="svc-title" className="section-title">
              Servis i detailing na jedné adrese
            </h2>
            <p className="section-note">
              Dvě dílny, jeden tým. Vlevo mechanika a diagnostika, vpravo detailing a ochrana
              laku. Najeďte na kartu — přejede přes ni keramický lesk.
            </p>
          </div>
          <ul className="svc-grid">
            {services.map((s) => (
              <li key={s.title} className="svc" data-cat={s.cat}>
                <span className="svc-cat">{s.cat}</span>
                <h3 className="svc-title">{s.title}</h3>
                <p className="svc-body">{s.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <div className="sheen-rule" role="presentation" />

        <section className="section section-trust" aria-labelledby="trust-title">
          <div className="trust-grid">
            <div className="trust-lead">
              <p className="section-kicker">Proč P+M</p>
              <h2 id="trust-title" className="section-title">
                Spolehlivá práce, kterou je vidět
              </h2>
              <p className="section-note">
                P+M autoservis klade důraz na spolehlivost a profesionální péči — abyste ze
                dvora odjížděli s vozem v perfektním stavu a s jistotou na silnici.
              </p>
              <dl className="trust-list">
                {trust.map((t) => (
                  <div key={t.k} className="trust-item">
                    <dt>{t.k}</dt>
                    <dd>{t.v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <aside className="trust-card" aria-label="Otevírací doba a kontakt">
              <h3 className="trust-card-title">Otevírací doba</h3>
              <ul className="hours">
                {hours.map((h) => (
                  <li key={h.d}>
                    <span className="hours-d">{h.d}</span>
                    <span className="hours-h">{h.h}</span>
                  </li>
                ))}
              </ul>
              <h3 className="trust-card-title">Kde nás najdete</h3>
              <address className="contact">
                <span className="contact-addr">Ukázková 123, Liberec</span>
                <a className="contact-link" href="tel:+420777111222">
                  +420 777 111 222
                </a>
                <a className="contact-link" href="mailto:info@example.cz">
                  info@example.cz
                </a>
              </address>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}

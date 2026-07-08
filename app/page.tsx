import type { CSSProperties } from "react";

const segments = [
  {
    no: "01",
    title: "Obchodní centra a retail",
    body: "Kamerový dohled, kontrola vstupů a ostraha přizpůsobená provozu obchodů, řetězců i nákupních center.",
  },
  {
    no: "02",
    title: "Výroba a průmyslové areály",
    body: "Ochrana perimetru, řízení bran a kontrola pohybu osob i vozidel ve výrobním prostředí.",
  },
  {
    no: "03",
    title: "Banky a finanční instituce",
    body: "Technologicky pokročilá bezpečnost a systémové řízení přístupů pro banky a pobočkové sítě.",
  },
  {
    no: "04",
    title: "Státní a veřejné instituce",
    body: "Řešení pro úřady, kulturní objekty i samosprávu s ohledem na různorodé provozy a citlivost prostředí.",
  },
  {
    no: "05",
    title: "Zdravotnická zařízení",
    body: "Ochrana osob, citlivých dat a provozní kontinuity v nemocnicích a klinikách.",
  },
  {
    no: "06",
    title: "Bydlení a rekreační objekty",
    body: "Kamery, EZS, chytrá domácnost a vzdálený dohled pro rodinné domy, byty a chaty.",
  },
];

const services = [
  {
    kicker: "Lidé v terénu",
    title: "Fyzická ostraha a bezpečnost",
    body: "Střežení objektů, recepční a vrátnické služby i bezpečnostní dohled akcí — vyškolení lidé, kteří vědí, co dělat.",
  },
  {
    kicker: "Provoz a údržba",
    title: "Facility a Property Management",
    body: "Kompletní správa budov a jejich technologií tak, aby provoz běžel bez výpadků a zbytečných nákladů.",
  },
  {
    kicker: "Technika",
    title: "Technologie a slaboproudé systémy",
    body: "Návrh a instalace kamer, EZS, EPS, přístupových a docházkových systémů i strukturované kabeláže.",
  },
  {
    kicker: "Nepřetržitý dohled",
    title: "Pult centralizované ochrany",
    body: "Náš dispečink hlídá vaše objekty 24 hodin denně a vyhodnocuje signály ještě dřív, než dorazí výjezd.",
  },
  {
    kicker: "Ochrana osob",
    title: "Bezpečnost osob a transport cenin",
    body: "VIP doprovody, event security a přeprava cenin ve spolupráci s Policií ČR a složkami IZS.",
  },
];

export default function Page() {
  return (
    <main className="abas">
      <header className="abas-nav">
        <a className="abas-mark" href="#top" aria-label="ABAS IPS Management, domů">
          <span className="abas-mark__key" aria-hidden="true" />
          <span className="abas-mark__type">
            ABAS<span className="abas-mark__ips">IPS</span>
          </span>
        </a>
        <nav className="abas-nav__links" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#reseni">Řešení</a>
          <a href="#dohled">Dohled 24/7</a>
        </nav>
        <a className="abas-nav__phone" href="tel:+420724621603">+420 724 621 603</a>
      </header>

      <section className="abas-hero" id="top">
        <img
          className="abas-hero__img"
          src="/hero.webp"
          alt="Bezpečnostní technik ABAS IPS Management u monitorovacího pultu"
        />
        <div className="abas-hero__scrim" aria-hidden="true" />
        <div className="abas-hero__inner">
          <p className="abas-hero__eyebrow">Bezpečnostní agentura · Praha · od roku 1992</p>
          <h1 className="abas-hero__title">
            Máme klíč<br />
            k Vašemu <span className="abas-hero__accent">bezpečí</span>.
          </h1>
          <p className="abas-hero__lead">
            Fyzická ostraha, bezpečnostní technologie a nepřetržitý dohled v jednom provázaném celku.
            Působíme v České, Slovenské, Maďarské i Polské republice.
          </p>
          <div className="abas-hero__actions">
            <a className="abas-btn abas-btn--solid" href="tel:+420724621603">Zavolat na dispečink</a>
            <a className="abas-btn abas-btn--ghost" href="#sluzby">Prohlédnout služby</a>
          </div>
        </div>
        <dl className="abas-hero__meta">
          <div>
            <dt>Nepřetržitě</dt>
            <dd>24 / 7 dispečink</dd>
          </div>
          <div>
            <dt>Působnost</dt>
            <dd>CZ · SK · HU · PL</dd>
          </div>
          <div>
            <dt>Zkušenost</dt>
            <dd>od roku 1992</dd>
          </div>
        </dl>
      </section>

      <section className="abas-services" id="sluzby">
        <div className="abas-section-head">
          <p className="abas-section-head__eyebrow">Co pro vás děláme</p>
          <h2>Pět složek, které spolu komunikují</h2>
          <p className="abas-section-head__lead">
            Ostraha, technika a dohled u nás nefungují odděleně. Navrhujeme je tak, aby si předávaly
            informace, snižovaly náklady a zvyšovaly úroveň ochrany.
          </p>
        </div>
        <ol className="abas-services__grid">
          {services.map((s, i) => (
            <li className="abas-service" key={s.title}>
              <span className="abas-service__no" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="abas-service__kicker">{s.kicker}</p>
              <h3>{s.title}</h3>
              <p className="abas-service__body">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="abas-trust" id="reseni">
        <div className="abas-trust__media">
          <img
            src="/section-1.webp"
            alt="Kamerový a monitorovací systém v ostraze objektů"
          />
        </div>
        <div className="abas-trust__text">
          <p className="abas-section-head__eyebrow">Řešení podle prostředí</p>
          <h2>Integrovaná bezpečnost pro každý typ objektu</h2>
          <p className="abas-trust__lead">
            Bezpečnost dnes není jen o ochraně majetku — jde o řízení rizik, provozní kontinuitu a
            chytrou infrastrukturu. Pro každý segment navrhujeme řešení na míru reálným hrozbám.
          </p>
          <ul className="abas-segments">
            {segments.map((seg) => (
              <li className="abas-segment" key={seg.no}>
                <span className="abas-segment__no" aria-hidden="true">{seg.no}</span>
                <div>
                  <h3>{seg.title}</h3>
                  <p>{seg.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="abas-desk" id="dohled">
        <img
          className="abas-desk__img"
          src="/section-2.webp"
          alt="Nepřetržitý dispečink pultu centralizované ochrany"
        />
        <div className="abas-desk__scrim" aria-hidden="true" />
        <div className="abas-desk__inner">
          <p className="abas-section-head__eyebrow abas-section-head__eyebrow--light">
            Pult centralizované ochrany
          </p>
          <h2>Váš objekt sledujeme, i když spíte</h2>
          <p>
            Náš dispečink v Praze přijímá a vyhodnocuje signály z vašich systémů nepřetržitě.
            Při poplachu koordinujeme výjezd a spolupracujeme s Policií ČR i složkami IZS — vy se
            o nic nestaráte.
          </p>
          <a className="abas-btn abas-btn--solid" href="mailto:obchod@abasco.cz">
            Napsat na obchod@abasco.cz
          </a>
          <p className="abas-desk__addr">Českobratrská 692/15, Praha · +420 724 621 603</p>
        </div>
      </section>
    </main>
  );
}

// keep the CSSProperties import meaningful for type-safety of inline styles (none used)
export const dynamic = "force-static";
void (0 as unknown as CSSProperties);

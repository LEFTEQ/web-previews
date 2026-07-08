import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      code: "VZT",
      name: "Vzduchotechnika",
      desc: "Návrh přívodu a odvodu vzduchu, dimenze potrubních rozvodů a strojoven — od rodinných domů po výrobní haly.",
    },
    {
      code: "CHL",
      name: "Chlazení",
      desc: "Chladicí systémy a odvod tepelné zátěže pro provozy, kde na teplotě opravdu záleží.",
    },
    {
      code: "ÚT",
      name: "Ústřední vytápění",
      desc: "Otopné soustavy navazující na vzduchotechniku i samostatně, s ohledem na energetickou náročnost.",
    },
    {
      code: "MaR",
      name: "Měření a regulace",
      desc: "Řízení celého systému TZB tak, aby budova dýchala sama a hlídala si spotřebu.",
    },
  ];

  const phases = [
    { n: "01", t: "Studie a posudky", d: "Prověříme záměr, spočítáme varianty a doporučíme řešení dřív, než se něco postaví." },
    { n: "02", t: "Územní řízení", d: "Dokumentace pro umístění stavby v souladu s požadavky úřadů." },
    { n: "03", t: "Stavební povolení", d: "Projekt v rozsahu, který úřad potřebuje k vydání povolení." },
    { n: "04", t: "Prováděcí dokumentace", d: "Detailní podklady pro zadání a realizaci stavby." },
    { n: "05", t: "Autorský a technický dozor", d: "Dohlédneme, že se na stavbě staví přesně to, co jsme navrhli." },
  ];

  return (
    <main className="fc">
      <header className="fc-nav" aria-label="Hlavní navigace">
        <a className="fc-brand" href="#uvod" aria-label="FourClima — úvod">
          <span className="fc-brand-mark" aria-hidden="true">◇</span>
          <span className="fc-brand-word">Four<span className="fc-brand-accent">Clima</span></span>
        </a>
        <nav className="fc-links">
          <a href="#sluzby">Služby</a>
          <a href="#proces">Postup</a>
          <a href="#o-nas">O nás</a>
        </nav>
        <a className="fc-cta-top" href="mailto:info@fourclima.cz">Vyžádat nabídku</a>
      </header>

      <section className="fc-hero" id="uvod">
        <div className="fc-hero-media">
          <img src="/hero.webp" alt="Strojovna vzduchotechniky s potrubními rozvody" />
          <div className="fc-hero-scrim" aria-hidden="true" />
        </div>
        <div className="fc-hero-inner">
          <p className="fc-eyebrow">Projekce TZB · Brno</p>
          <h1 className="fc-hero-title">
            Kreslíme, jak budova <span className="fc-hl">dýchá</span>.
          </h1>
          <p className="fc-hero-sub">
            Komplexní projektová dokumentace vzduchotechniky a technického
            zařízení budov — od první studie po dozor na stavbě.
          </p>
          <div className="fc-hero-actions">
            <a className="fc-btn" href="mailto:info@fourclima.cz">Vyžádat nabídku</a>
            <a className="fc-btn fc-btn-ghost" href="#sluzby">Co projektujeme</a>
          </div>
          <dl className="fc-hero-meta">
            <div><dt>Profese</dt><dd>VZT · CHL · ÚT · MaR</dd></div>
            <div><dt>Sektory</dt><dd>Bydlení · Průmysl · Zdravotnictví</dd></div>
            <div><dt>Sídlo</dt><dd>Brno</dd></div>
          </dl>
        </div>
      </section>

      <section className="fc-section fc-services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="fc-section-head">
          <p className="fc-eyebrow">Čtyři profese, jeden projekt</p>
          <h2 id="sluzby-h">Co pro vás nakreslíme</h2>
          <p className="fc-lead">
            Řešíme celý projekt v návaznostech, nebo jednotlivé profese
            samostatně. Od nízkoenergetických domů po náročnou techniku
            v průmyslu a nemocnicích.
          </p>
        </div>
        <div className="fc-grid">
          {services.map((s, i) => (
            <article className="fc-card" key={s.code} style={{ "--i": i } as CSSProperties}>
              <span className="fc-card-code" aria-hidden="true">{s.code}</span>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
        <div className="fc-tools">
          <img src="/section-1.webp" alt="Výkres potrubních rozvodů vzduchotechniky v CAD softwaru" />
          <div className="fc-tools-text">
            <h3>Čím to kreslíme</h3>
            <p>
              CAD s nástavbou pro vzduchotechniku a potrubní rozvody,
              výpočty v PROTECH a další podpůrný software. Přesná data
              pro rozpočet i realizaci — ne odhady.
            </p>
            <ul className="fc-taglist">
              <li>CAD + VZT nástavba</li>
              <li>PROTECH</li>
              <li>Tepelně-technické výpočty</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="fc-section fc-about" id="o-nas" aria-labelledby="onas-h">
        <div className="fc-about-media">
          <img src="/section-2.webp" alt="Detail vzduchotechnické jednotky na střeše budovy" />
        </div>
        <div className="fc-about-body">
          <p className="fc-eyebrow">Kdo jsme</p>
          <h2 id="onas-h">Projektanti, kteří stojí za výkresem i na stavbě</h2>
          <p className="fc-lead">
            FourClima s.r.o. zpracovává projektovou dokumentaci v oboru
            Technická zařízení budov — od studií a posudků přes územní
            řízení a stavební povolení až po prováděcí dokumentaci.
            Během stavby zajišťujeme autorský i technický dozor investora.
          </p>
          <p className="fc-why">
            Předkládáme řešení, které spojuje vysokou technickou úroveň
            a inovativní přístup — v rámci dohodnutých finančních limitů.
          </p>

          <ol className="fc-phases" aria-label="Fáze projektu">
            {phases.map((p) => (
              <li key={p.n}>
                <span className="fc-phase-n" aria-hidden="true">{p.n}</span>
                <div>
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="fc-contact-line">
            Máte záměr nebo rozestavěnou stavbu?{" "}
            <a href="mailto:info@fourclima.cz">info@fourclima.cz</a>
          </p>
        </div>
      </section>
    </main>
  );
}

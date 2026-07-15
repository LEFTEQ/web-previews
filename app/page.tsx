import type { CSSProperties } from "react";

const PHONE_DISPLAY = "495 213 684";
const PHONE_HREF = "tel:+420495213684";
const MOBILE_HREF = "tel:+420603249034";

const services = [
  {
    code: "LPG-01",
    title: "Přestavba na LPG",
    tag: "nejžádanější",
    text: "Namontujeme jen sekvenční systémy, které máme prověřené a umíme je i servisovat. Provoz vašeho auta klesne až o 50 %.",
    action: "Objednat přestavbu",
    href: PHONE_HREF,
  },
  {
    code: "LPG-02",
    title: "Revize a servis LPG",
    tag: "povinné před STK",
    text: "Zvýhodněná cena za revizi plynového systému. Je povinná před každou STK — připomeneme vám termín, ať vás nezaskočí.",
    action: "Objednat revizi",
    href: PHONE_HREF,
  },
  {
    code: "LPG-03",
    title: "Měření emisí",
    tag: "na počkání",
    text: "Emisní zkoušku uděláme pro vozidla na LPG i na benzin. Rychle, na počkání, bez objednání předem u drobných měření.",
    action: "Zeptat se na termín",
    href: PHONE_HREF,
  },
];

// Manometer / savings gauge — the trade's own instrument.
function Gauge() {
  const cx = 160;
  const cy = 160;
  const r = 140;
  const ticks = [];
  for (let i = 0; i <= 10; i++) {
    const angle = (180 - i * 18) * (Math.PI / 180);
    const long = i % 5 === 0;
    const inner = long ? 116 : 126;
    const x1 = cx + r * Math.cos(angle);
    const y1 = cy - r * Math.sin(angle);
    const x2 = cx + inner * Math.cos(angle);
    const y2 = cy - inner * Math.sin(angle);
    ticks.push(
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="currentColor"
        strokeWidth={long ? 2.4 : 1.2}
        strokeLinecap="round"
        opacity={long ? 0.9 : 0.45}
      />
    );
  }
  return (
    <svg
      className="ga-gauge"
      viewBox="0 0 320 200"
      role="img"
      aria-label="Ukazatel úspory: přestavba na LPG sníží náklady na palivo přibližně o polovinu."
    >
      <path
        d="M20 160 A140 140 0 0 1 160 20"
        fill="none"
        stroke="#C0862F"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M160 20 A140 140 0 0 1 300 160"
        fill="none"
        stroke="#6FA03C"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <g className="ga-gauge-ticks">{ticks}</g>
      <text className="ga-gauge-end" x="20" y="186" textAnchor="middle">benzin</text>
      <text className="ga-gauge-end" x="300" y="186" textAnchor="middle">úspora</text>
      <polygon className="ga-needle" points="155,160 165,160 160,46" fill="#E4E7E1" />
      <circle cx={cx} cy={cy} r="11" fill="#13231E" stroke="#E4E7E1" strokeWidth="2.5" />
      <text className="ga-gauge-read" x={cx} y="128" textAnchor="middle">≈ 50 %</text>
      <text className="ga-gauge-label" x={cx} y="150" textAnchor="middle">levnější provoz</text>
    </svg>
  );
}

export default function Page() {
  return (
    <main className="ga">
      <header className="ga-topbar">
        <a className="ga-wordmark" href="#uvod" aria-label="Gasauto — úvod">
          <span className="ga-mark" aria-hidden="true">
            <svg viewBox="0 0 40 40" width="26" height="26">
              <circle cx="20" cy="20" r="17" fill="none" stroke="#C0862F" strokeWidth="2.5" />
              <line x1="20" y1="20" x2="29" y2="12" stroke="#E4E7E1" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="20" cy="20" r="3" fill="#E4E7E1" />
            </svg>
          </span>
          <span className="ga-wordmark-text">
            <b>GASAUTO</b>
            <small>LPG servis · Hradec Králové</small>
          </span>
        </a>
        <a className="ga-topcall" href={PHONE_HREF}>
          <span className="ga-topcall-label">Zavolejte</span>
          <span className="ga-topcall-num">{PHONE_DISPLAY}</span>
        </a>
      </header>

      <section className="ga-hero" id="uvod">
        <img
          className="ga-hero-img"
          src="/hero.webp"
          alt="Dílna Gasauto v Hradci Králové — montáž plynového LPG systému do automobilu."
          width={1600}
          height={1000}
        />
        <div className="ga-hero-shade" aria-hidden="true" />
        <div className="ga-hero-inner">
          <div className="ga-hero-copy">
            <p className="ga-eyebrow">Přestavby LPG · od roku 1991</p>
            <h1 className="ga-hero-title">
              Provoz auta<br />až o polovinu levnější.
            </h1>
            <p className="ga-hero-lead">
              Přestavíme vaše auto na LPG, uděláme povinnou revizi i měření
              emisí. Děláme výhradně LPG&nbsp;— proto přesně víme, co montujeme.
            </p>
            <div className="ga-hero-cta">
              <a className="ga-btn ga-btn-primary" href={PHONE_HREF}>
                Zavolat {PHONE_DISPLAY}
              </a>
              <a className="ga-btn ga-btn-ghost" href="#sluzby">
                Prohlédnout služby
              </a>
            </div>
            <p className="ga-hero-meta">
              <span>Po–Pá&nbsp;7:00–16:00</span>
              <span aria-hidden="true">·</span>
              <span>Říční&nbsp;413, Hradec Králové</span>
              <span aria-hidden="true">·</span>
              <span>aktualizováno&nbsp;06/2025</span>
            </p>
          </div>
          <div className="ga-hero-gauge">
            <Gauge />
            <p className="ga-gauge-note">
              Reálná úspora podle nájezdu a ceny paliv. Spočítáme ji na vašem
              autě.
            </p>
          </div>
        </div>
      </section>

      <section className="ga-services" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="ga-section-head">
          <p className="ga-eyebrow ga-eyebrow-dark">Katalog služeb</p>
          <h2 id="sluzby-nadpis">Co u nás pro auto uděláme</h2>
        </div>
        <ul className="ga-cards">
          {services.map((s) => (
            <li className="ga-card" key={s.code}>
              <div className="ga-card-top">
                <span className="ga-card-code">{s.code}</span>
                <span className="ga-card-tag">{s.tag}</span>
              </div>
              <h3 className="ga-card-title">{s.title}</h3>
              <p className="ga-card-text">{s.text}</p>
              <a className="ga-card-link" href={s.href}>
                {s.action}
                <span aria-hidden="true"> →</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="ga-trust" aria-labelledby="trust-nadpis">
        <div className="ga-trust-grid">
          <figure className="ga-trust-media">
            <img
              src="/section-1.webp"
              alt="Technik Gasauto při seřizování plynového vstřikování na diagnostice."
              width={1200}
              height={900}
            />
          </figure>
          <div className="ga-trust-copy">
            <p className="ga-eyebrow ga-eyebrow-dark">Proč právě my</p>
            <h2 id="trust-nadpis">Výhradně LPG. Od roku 1991.</h2>
            <p>
              Přes tři desítky let děláme jednu jedinou věc — LPG. Poznali jsme
              komponenty od různých výrobců a namontujeme vám jen ty, které máme
              vyzkoušené a u nichž zajistíme spolehlivý provoz i servis.
            </p>
            <p>
              Máme diagnostické přístroje a vyškolený personál na moderní motory
              i jejich elektroniku. Cílem je, abyste odjeli s autem, které jezdí
              na plyn stejně bezpečně jako na benzin&nbsp;— jen levněji.
            </p>
            <dl className="ga-stats">
              <div>
                <dt>1991</dt>
                <dd>první přestavba v Říční</dd>
              </div>
              <div>
                <dt>100&nbsp;%</dt>
                <dd>zaměření jen na LPG</dd>
              </div>
              <div>
                <dt>tisíce</dt>
                <dd>spokojených řidičů</dd>
              </div>
            </dl>
            <a className="ga-btn ga-btn-dark" href={MOBILE_HREF}>
              Mobil: 603 249 034
            </a>
          </div>
        </div>

        <figure className="ga-quote">
          <img
            src="/section-2.webp"
            alt="Nádrž a rozvody plynového systému LPG namontované v autě."
            width={1600}
            height={900}
          />
          <figcaption className="ga-quote-inner">
            <blockquote>
              „Provoz na LPG je stejně kvalitní a bezpečný jako na benzin.
              Rozdíl poznáte hlavně u pumpy.“
            </blockquote>
            <p className="ga-quote-by">Gasauto s.r.o. · Říční 413, Hradec Králové</p>
          </figcaption>
        </figure>
      </section>

      <a className="ga-callbar" href={PHONE_HREF}>
        <span>Zavolat do servisu</span>
        <strong>{PHONE_DISPLAY}</strong>
      </a>
    </main>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JK Trade HK — plynařství Hradec Králové | kotle, revize, rozvody",
  description:
    "Plynařské práce v Hradci Králové a okolí: montáže a servis plynových kotlů, revize a tlakové zkoušky, rozvody plynu, připojení spotřebičů. JK Trade HK, s.r.o.",
  openGraph: {
    title: "JK Trade HK — plynařství Hradec Králové",
    description:
      "Montáže a servis plynových kotlů, revize, rozvody plynu. Hradec Králové a okolí.",
    locale: "cs_CZ",
    type: "website",
  },
};

const sluzby = [
  {
    kod: "G1",
    nazev: "Montáž a výměna plynového kotle",
    popis:
      "Vyměníme starý kotel za kondenzační, včetně odkouření, napojení a uvedení do provozu. Poradíme s výběrem podle velikosti bytu nebo domu — ne podle katalogu, ale podle toho, kolik reálně protopíte.",
    detail: "Nejčastěji do 2 dnů od demontáže po první zátop.",
  },
  {
    kod: "G2",
    nazev: "Revize a tlakové zkoušky",
    popis:
      "Pravidelné revize plynových zařízení pro byty, domy i SVJ. Zkontrolujeme těsnost rozvodů, spalinové cesty a spotřebiče, vystavíme revizní zprávu, kterou po vás chce pojišťovna i plynárna.",
    detail: "Revizní zprávu máte v ruce hned na místě.",
  },
  {
    kod: "G3",
    nazev: "Rozvody plynu a přípojky",
    popis:
      "Nové rozvody při rekonstrukci, přeložky, prodloužení k varné desce nebo krbovým kamnům. Svařujeme ocel i měď, pracujeme podle projektu a předáme vše připravené k revizi.",
    detail: "Včetně jednání s distributorem plynu.",
  },
  {
    kod: "G4",
    nazev: "Připojení spotřebičů a servis",
    popis:
      "Připojíme sporák, ohřívač vody nebo zářič, seřídíme hořáky a změříme spaliny. U kotlů provádíme roční servisní prohlídky, aby vám záruka platila a spotřeba nerostla.",
    detail: "Servisní prohlídka kotle od 60 minut.",
  },
];

const duvody = [
  {
    cislo: "18 let",
    text: "děláme plyn v Hradci Králové a okolí — od Třebše po Plotiště, z paneláků na Moravském Předměstí známe každou stoupačku.",
  },
  {
    cislo: "0,5 kPa",
    text: "přesnost, se kterou měříme tlak při zkoušce těsnosti. U plynu se nic neodhaduje — buď to těsní, nebo se nepouští.",
  },
  {
    cislo: "24 h",
    text: "do kdy přijedeme, když vám kotel v topné sezóně vypoví službu. V zimě nenecháme nikoho ve studeném bytě čekat týden.",
  },
];

const reference = [
  {
    text: "„Výměna kotle proběhla přesně, jak slíbili. Ve středu odvezli starý, ve čtvrtek večer jsme topili novým. Po řemeslnících zůstala chodba čistší než předtím.“",
    kdo: "rodina Vondroušova, Malšovice",
  },
  {
    text: "„Děláme s nimi revize pro celé SVJ, 24 bytů. Domluví se s každým nájemníkem sami, termíny drží a zprávy dodají v jednom balíku pro pojišťovnu.“",
    kdo: "výbor SVJ, Moravské Předměstí",
  },
];

export default function Page() {
  return (
    <main className="gas">
      {/* ===== HERO ===== */}
      <header className="hero" aria-label="JK Trade HK — plynařství Hradec Králové">
        <div className="hero-top">
          <div className="wordmark" aria-label="JK Trade HK">
            <span className="wordmark-jk">JK</span>
            <span className="wordmark-flame" aria-hidden="true">
              <svg viewBox="0 0 24 32" width="18" height="24" role="img" aria-hidden="true" focusable="false">
                <path d="M12 1c1 6-7 9-7 17a7 7 0 0 0 14 0c0-4-2.5-6-3.5-9-.9 2.2-2.5 3-2.5 3S14.5 6 12 1z" fill="currentColor" />
              </svg>
            </span>
            <span className="wordmark-trade">TRADE&nbsp;HK</span>
          </div>
          <p className="hero-locality">plynařství · Hradec Králové</p>
        </div>

        <div className="hero-main">
          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Plyn je řemeslo,</span>
            <span className="hero-line hero-line-2">kde se <em>nehádá</em> —</span>
            <span className="hero-line hero-line-3">měří se.</span>
          </h1>
          <p className="hero-sub">
            Montáže a servis plynových kotlů, revize a rozvody plynu pro byty,
            domy a SVJ v Hradci Králové a do 30 km okolo. Přijedeme, změříme,
            řekneme cenu — a tu pak dodržíme.
          </p>
          <div className="hero-actions">
            <a className="btn btn-flame" href="tel:+420495000000">
              Zavolat plynaři: 495 000 000
            </a>
            <a className="btn btn-ghost" href="mailto:info@jktradehk.cz">
              Napsat e-mail
            </a>
          </div>
        </div>

        {/* Signature: manometr — stupnice tlakové zkoušky */}
        <div className="gauge" aria-hidden="true">
          <div className="gauge-dial">
            <svg viewBox="0 0 200 200" role="img" aria-hidden="true" focusable="false">
              <circle cx="100" cy="100" r="96" className="gauge-ring" />
              <g className="gauge-ticks">
                {Array.from({ length: 25 }).map((_, i) => {
                  const a = (-210 + i * 10) * (Math.PI / 180);
                  const long = i % 4 === 0;
                  const r1 = long ? 74 : 82;
                  const x1 = 100 + r1 * Math.cos(a);
                  const y1 = 100 + r1 * Math.sin(a);
                  const x2 = 100 + 90 * Math.cos(a);
                  const y2 = 100 + 90 * Math.sin(a);
                  return (
                    <line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      className={long ? "tick tick-long" : "tick"}
                    />
                  );
                })}
              </g>
              <text x="100" y="138" className="gauge-unit" textAnchor="middle">kPa</text>
              <line x1="100" y1="100" x2="100" y2="22" className="gauge-needle" />
              <circle cx="100" cy="100" r="6" className="gauge-hub" />
            </svg>
          </div>
          <p className="gauge-caption">tlaková zkouška · těsní / netěsní</p>
        </div>

        <div className="hero-pipe" aria-hidden="true">
          <span className="pipe-joint" />
          <span className="pipe-run" />
          <span className="pipe-valve" />
          <span className="pipe-run pipe-run-short" />
          <span className="pipe-joint" />
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="eyebrow">Co pro vás uděláme</p>
          <h2 id="sluzby-h">Od kotle po poslední spoj</h2>
          <p className="section-lead">
            Každá zakázka končí zkouškou těsnosti a protokolem. Kódy G1–G4
            odpovídají tomu, jak práci sami evidujeme — víte přesně, co si objednáváte.
          </p>
        </div>

        <ul className="sluzby-grid">
          {sluzby.map((s) => (
            <li key={s.kod} className="sluzba">
              <div className="sluzba-kod" aria-hidden="true">{s.kod}</div>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <p className="sluzba-detail">{s.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="section-head section-head-light">
          <p className="eyebrow eyebrow-light">Proč JK Trade HK</p>
          <h2 id="duvera-h">Malá firma, která u plynu nešvindluje</h2>
          <p className="section-lead section-lead-light">
            Jsme parta plynařů z Hradce. Žádný dispečink v jiném kraji, žádní
            subdodavatelé — kdo vám zvedne telefon, ten k vám i přijede.
          </p>
        </div>

        <dl className="duvody">
          {duvody.map((d) => (
            <div key={d.cislo} className="duvod">
              <dt>{d.cislo}</dt>
              <dd>{d.text}</dd>
            </div>
          ))}
        </dl>

        <div className="reference">
          {reference.map((r) => (
            <figure key={r.kdo} className="ref">
              <blockquote>
                <p>{r.text}</p>
              </blockquote>
              <figcaption>{r.kdo}</figcaption>
            </figure>
          ))}
        </div>

        <p className="duvera-region">
          Jezdíme po Hradci Králové, do Nového Bydžova, Chlumce nad Cidlinou,
          Třebechovic pod Orebem i Smiřic. Když si nejste jistí, jestli k vám
          dojedeme, <a href="tel:+420495000000">zavolejte</a> — domluvíme se hned.
        </p>
      </section>
    </main>
  );
}

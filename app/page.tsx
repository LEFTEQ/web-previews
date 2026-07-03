// IMONT HK — plynařství, topení, voda · Hradec Králové
// Návrh: typografické hero postavené na motivu plynového potrubí a plamene.
// Signature prvek: svislá „trasa potrubí" (pipeline) procházející celou stránkou,
// s uzly (armaturami) u každé sekce — encoding: rozvod média od zdroje ke spotřebiči.

const SLUZBY = [
  {
    medium: "PLYN",
    znacka: "NTL",
    titul: "Rozvody plynu",
    popis:
      "Kompletní rozvody nízkotlakého plynu v rodinných domech, bytových domech i průmyslových objektech. Vedeme je v ocelovém potrubí nebo lisované mědi — podle projektu a normy, ne podle toho, co je zrovna po ruce.",
    body: ["Nové přípojky a vnitřní rozvody", "Ocelové potrubí i lisovaná měď", "Revize a tlakové zkoušky před uvedením do provozu"],
  },
  {
    medium: "TOPENÍ",
    znacka: "ÚT",
    titul: "Topenářské práce",
    popis:
      "Instalace topných systémů od rodinného domu po nákupní centrum. Navrhneme a zapojíme kotel, otopná tělesa i podlahové topení tak, aby soustava topila rovnoměrně a úsporně.",
    body: ["Plynové kotle a jejich výměny", "Radiátory a podlahové vytápění", "Topné soustavy pro průmyslové objekty a haly"],
  },
  {
    medium: "VODA",
    znacka: "ZTI",
    titul: "Instalatérské práce",
    popis:
      "Rozvody vodovodu a kanalizace v bytové výstavbě, rodinných domech a halách. Opravy a rekonstrukce stávajících rozvodů — včetně těch, na které si už nikdo jiný netroufl.",
    body: ["Nové rozvody vody a kanalizace", "Rekonstrukce bytových jader a stoupaček", "Opravy havárií a netěsností"],
  },
];

const DUVERA = [
  {
    cislo: "20+",
    titul: "let praxe v oboru",
    text: "Plyn, topení a vodu děláme dost dlouho na to, abychom věděli, kde bývá problém dřív, než se projeví.",
  },
  {
    cislo: "3v1",
    titul: "řemesla pod jednou firmou",
    text: "Plynař, topenář i instalatér z jedné party. U rekonstrukce nemusíte koordinovat tři dodavatele — stačí jedno číslo.",
  },
  {
    cislo: "HK",
    titul: "jsme z Hradce Králové",
    text: "Sídlíme na Okružní 1144. Jezdíme po Hradci a okolí — když se něco stane, nejsme na druhém konci republiky.",
  },
];

const REFERENCE = [
  { typ: "Bytový dům", misto: "Hradec Králové — Moravské Předměstí", prace: "Výměna stoupaček plynu a vody, nové rozvody v mědi" },
  { typ: "Rodinný dům", misto: "Třebeš", prace: "Plynová přípojka, kotel a podlahové topení na klíč" },
  { typ: "Průmyslová hala", misto: "Plotiště nad Labem", prace: "Rozvod NTL plynu v oceli, topná soustava haly" },
  { typ: "Nákupní centrum", misto: "Hradec Králové", prace: "Instalace topného systému a rozvodů ZTI" },
];

export default function Page() {
  return (
    <main className="im">
      {/* ============ HERO ============ */}
      <header className="im-hero" aria-label="IMONT HK — plyn, topení, voda v Hradci Králové">
        <div className="im-hero__top">
          <div className="im-wordmark" aria-label="IMONT HK">
            <span className="im-wordmark__flame" aria-hidden="true">
              <svg viewBox="0 0 24 32" width="22" height="30" role="presentation" focusable="false">
                <path
                  d="M12 1c1 6-7 9-7 17a7 7 0 0 0 14 0c0-4-2.5-6-3.5-9-1.6 2.4-3.5 3.4-3.5 6.5C10 12 12 8 12 1z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span className="im-wordmark__text">
              IMONT<em>HK</em>
            </span>
          </div>
          <a className="im-hero__tel" href="tel:+420730510539">
            730 510 539
          </a>
        </div>

        <div className="im-hero__body">
          <p className="im-hero__kicker">
            <span className="im-tag im-tag--plyn">plyn</span>
            <span className="im-tag im-tag--topeni">topení</span>
            <span className="im-tag im-tag--voda">voda</span>
            <span className="im-hero__kicker-city">· Hradec Králové</span>
          </p>
          <h1 className="im-hero__title">
            <span className="im-hero__line im-hero__line--1">Rozvody, které</span>
            <span className="im-hero__line im-hero__line--2">
              <strong>těsní.</strong>
            </span>
          </h1>
          <p className="im-hero__lead">
            Plynové rozvody v oceli a lisované mědi, topné soustavy a instalatérské práce — od
            rodinného domu po průmyslovou halu. Řemeslo, u kterého se nesmí nic ošidit.
          </p>
          <div className="im-hero__cta">
            <a className="im-btn" href="tel:+420730510539">
              Zavolat plynaři
            </a>
            <a className="im-btn im-btn--ghost" href="mailto:imont@imonthk.cz">
              Napsat e‑mail
            </a>
          </div>
        </div>

        {/* Signature: schéma potrubí — od hlavního uzávěru ke třem médiím */}
        <div className="im-hero__pipes" aria-hidden="true">
          <svg viewBox="0 0 480 560" preserveAspectRatio="xMidYMax meet" role="presentation" focusable="false">
            {/* hlavní stoupačka */}
            <path className="im-pipe im-pipe--main" d="M240 560 V 300" />
            {/* rozbočení do tří větví */}
            <path className="im-pipe im-pipe--plyn" d="M240 300 V 220 Q 240 200 220 200 H 100 Q 80 200 80 180 V 60" />
            <path className="im-pipe im-pipe--topeni" d="M240 300 V 120" />
            <path className="im-pipe im-pipe--voda" d="M240 300 V 220 Q 240 200 260 200 H 380 Q 400 200 400 180 V 60" />
            {/* armatury / uzávěry */}
            <g className="im-valve">
              <circle cx="240" cy="300" r="14" />
              <line x1="230" y1="290" x2="250" y2="310" />
            </g>
            <circle className="im-node im-node--plyn" cx="80" cy="60" r="8" />
            <circle className="im-node im-node--topeni" cx="240" cy="120" r="8" />
            <circle className="im-node im-node--voda" cx="400" cy="60" r="8" />
            {/* plamen nad plynovou větví */}
            <path
              className="im-flame"
              d="M80 44c.7 4.5-5 6.7-5 12.6a5 5 0 0 0 10 0c0-3-1.8-4.5-2.6-6.7-1.1 1.8-2.5 2.5-2.5 4.8-.7-2.6.8-5.6.1-10.7z"
              transform="translate(0,-22)"
            />
          </svg>
        </div>

        <p className="im-hero__note">
          <span className="im-hero__note-dot" aria-hidden="true" /> Okružní 1144, Hradec Králové 3 · imont@imonthk.cz
        </p>
      </header>

      {/* ============ SLUŽBY ============ */}
      <section className="im-sluzby" aria-labelledby="sluzby-h">
        <div className="im-section-head">
          <p className="im-eyebrow">Co pro vás uděláme</p>
          <h2 id="sluzby-h" className="im-h2">
            Tři média. Jedna parta.
          </h2>
          <p className="im-section-lead">
            Značení jako na staveništi: <abbr title="nízkotlaký plyn">NTL</abbr> pro plyn,{" "}
            <abbr title="ústřední topení">ÚT</abbr> pro topení, <abbr title="zdravotně technické instalace">ZTI</abbr> pro
            vodu a kanalizaci. Všechno umíme vlastními lidmi.
          </p>
        </div>

        <div className="im-sluzby__grid">
          {SLUZBY.map((s) => (
            <article key={s.znacka} className={`im-karta im-karta--${s.medium.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}>
              <div className="im-karta__head">
                <span className="im-karta__znacka">{s.znacka}</span>
                <span className="im-karta__medium">{s.medium}</span>
              </div>
              <h3 className="im-karta__titul">{s.titul}</h3>
              <p className="im-karta__popis">{s.popis}</p>
              <ul className="im-karta__body">
                {s.body.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ============ DŮVĚRA + REFERENCE ============ */}
      <section className="im-duvera" aria-labelledby="duvera-h">
        <div className="im-section-head">
          <p className="im-eyebrow im-eyebrow--light">Proč IMONT HK</p>
          <h2 id="duvera-h" className="im-h2 im-h2--light">
            U plynu se nedá „nějak to zkusit".
          </h2>
        </div>

        <div className="im-duvera__grid">
          {DUVERA.map((d) => (
            <div key={d.titul} className="im-fakt">
              <p className="im-fakt__cislo">{d.cislo}</p>
              <h3 className="im-fakt__titul">{d.titul}</h3>
              <p className="im-fakt__text">{d.text}</p>
            </div>
          ))}
        </div>

        <div className="im-reference">
          <h3 className="im-reference__h">Z posledních zakázek</h3>
          <ul className="im-reference__list">
            {REFERENCE.map((r) => (
              <li key={r.prace} className="im-reference__row">
                <span className="im-reference__typ">{r.typ}</span>
                <span className="im-reference__misto">{r.misto}</span>
                <span className="im-reference__prace">{r.prace}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

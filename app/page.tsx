import type { CSSProperties } from "react";

function Reticle({ className }: { className?: string }) {
  // Registration crosshair — the pattern their techs align a lane camera against.
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      role="img"
      aria-label="Zaměřovací kříž kalibrace"
    >
      <circle className="rtc" cx="24" cy="24" r="8.5" pathLength={1} />
      <path className="rtc" d="M24 1 V14" pathLength={1} />
      <path className="rtc" d="M24 34 V47" pathLength={1} />
      <path className="rtc" d="M1 24 H14" pathLength={1} />
      <path className="rtc" d="M34 24 H47" pathLength={1} />
      <path className="rtc rtc--tick" d="M8 8 h4 M8 8 v4" pathLength={1} />
      <path className="rtc rtc--tick" d="M40 8 h-4 M40 8 v4" pathLength={1} />
      <path className="rtc rtc--tick" d="M8 40 h4 M8 40 v-4" pathLength={1} />
      <path className="rtc rtc--tick" d="M40 40 h-4 M40 40 v-4" pathLength={1} />
      <circle className="rtc rtc--dot" cx="24" cy="24" r="1.4" />
    </svg>
  );
}

const services = [
  {
    no: "01",
    title: "Výměna čelního skla",
    desc: "Originál i prověřená náhrada. Vlepíme na polyuretan a dodržíme technologickou pauzu, kterou předepisuje výrobce.",
    spec: "OEM / AM · lepení PU",
  },
  {
    no: "02",
    title: "Oprava zacelením",
    desc: "Odštípnutý kamínek vyplníme pryskyřicí a vytvrdíme UV lampou dřív, než se z něj po zimě stane prasklina přes celé sklo.",
    spec: "Ø ≤ 30 mm · UV pryskyřice",
  },
  {
    no: "03",
    title: "Kalibrace kamer ADAS",
    desc: "Po každé výměně skla znovu zaměříme kameru jízdních asistentů — staticky na kalibračním terči a dynamicky za jízdy.",
    spec: "± 0,1° · statická + dynamická",
    flag: true,
  },
  {
    no: "04",
    title: "Tónování autoskel",
    desc: "Protisluneční fólie s atestem, řezané na míru vašeho vozu. Chladněji v létě, soukromí vzadu, méma na palubovce.",
    spec: "atest · UV blok 99 %",
  },
  {
    no: "05",
    title: "Mobilní zasklívání",
    desc: "Nemusíte nikam. Přijedeme s vybavenou dílnou za vámi po Praze — na parkoviště u domu i před firmu.",
    spec: "výjezd · celá Praha",
  },
  {
    no: "06",
    title: "Autofólie a ochrana",
    desc: "Bezpečnostní a ochranné fólie na skla i lak. Sklo drží pohromadě i po nárazu, lak odolá kamínkům z dálnice.",
    spec: "ochrana · bezpečnost",
  },
];

const trust = [
  {
    k: "Kalibrujeme, ne odhadujeme",
    v: "Nové sklo je jen půlka práce. Kameru za ním znovu zaměříme na terč i na silnici, aby držení pruhu a nouzové brzdění zase mířilo přesně tam, kam má.",
  },
  {
    k: "Pojistku vyřídíme za vás",
    v: "Z výměny skla nechceme papírování na vás. Škodní událost nahlásíme a vyřídíme přímo s pojišťovnou — vy jen podepíšete.",
  },
  {
    k: "Záruka na práci i těsnost",
    v: "Ručíme za lepený spoj i za to, že sklo nepustí vodu ani nezačne pískat na dálnici. Když něco není v pořádku, dořešíme to.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="mark" href="#top" aria-label="Euro Glass — domů">
          <Reticle className="mark__rtc" />
          <span className="mark__word">
            EURO<em>GLASS</em>
          </span>
          <span className="mark__sub">autosklo · Praha</span>
        </a>
        <p className="topbar__hours">Po–Pá 7–17 · nebo po domluvě</p>
      </header>

      <section className="hero" id="top">
        <div className="hero__board">
          <span className="hero__line hero__line--h" aria-hidden="true" />
          <span className="hero__line hero__line--v" aria-hidden="true" />
          <span className="hero__corner hero__corner--tl" aria-hidden="true" />
          <span className="hero__corner hero__corner--tr" aria-hidden="true" />
          <span className="hero__corner hero__corner--bl" aria-hidden="true" />
          <span className="hero__corner hero__corner--br" aria-hidden="true" />

          <div className="hero__frame">
            <p className="eyebrow">Autosklo · Praha 4 – Libuš · kalibrace ADAS</p>
            <h1 className="hero__title">
              Nové čelní sklo
              <br />a kamera zpátky
              <br />
              <span className="hero__hl">přesně na střed.</span>
            </h1>
            <p className="lede">
              V Praze vyměníme nebo zacelíme autosklo — a hned nato staticky
              i dynamicky zkalibrujeme kameru jízdních asistentů. Auto
              odjíždí se sklem i bezpečnostními systémy zaměřenými na milimetr.
            </p>
            <div className="hero__specs">
              <span className="chip">Ø oprava ≤ 30 mm</span>
              <span className="chip">kalibrace ± 0,1°</span>
              <span className="chip">mobilní výjezd · Praha</span>
            </div>
            <a className="btn" href="#sluzby">
              Prohlédnout služby
            </a>
          </div>
        </div>
      </section>

      <div className="rule" aria-hidden="true">
        <span className="rule__tag">zaměřeno · uzamčeno</span>
      </div>

      <section className="section" id="sluzby">
        <div className="section__head">
          <p className="eyebrow">Katalog · 06 služeb</p>
          <h2 className="section__title">Co u nás vyřešíte</h2>
          <p className="section__intro">
            Od kamínku v dráze stěračů po kompletní výměnu skla s kalibrací.
            Každou položku bereme jako měřený úkon — s jasným postupem
            a doloženým výsledkem.
          </p>
        </div>

        <ol className="cards">
          {services.map((s) => (
            <li
              key={s.no}
              className={"card" + (s.flag ? " card--flag" : "")}
            >
              <div className="card__top">
                <span className="card__no">{s.no}</span>
                <Reticle className="card__rtc" />
              </div>
              <h3 className="card__title">{s.title}</h3>
              <p className="card__desc">{s.desc}</p>
              <p className="card__spec">{s.spec}</p>
            </li>
          ))}
        </ol>
      </section>

      <div className="rule" aria-hidden="true">
        <span className="rule__tag">proč euro glass</span>
      </div>

      <section className="section trust">
        <div className="section__head">
          <p className="eyebrow">O nás · přesnost</p>
          <h2 className="section__title">
            Přesnost, kterou obyčejné autosklo neřeší
          </h2>
        </div>

        <div className="trust__grid">
          <ul className="trust__list">
            {trust.map((t, i) => (
              <li className="trust__item" key={t.k}>
                <span className="trust__no">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="trust__k">{t.k}</h3>
                  <p className="trust__v">{t.v}</p>
                </div>
              </li>
            ))}
          </ul>

          <aside className="panel" aria-label="Kde nás najdete">
            <Reticle className="panel__rtc" />
            <p className="panel__label">Provozovna</p>
            <p className="panel__row">Ukázková 123, Praha</p>
            <p className="panel__label">Otevřeno</p>
            <p className="panel__row">Po–Pá 7–17</p>
            <p className="panel__label">Telefon</p>
            <p className="panel__row panel__row--tel">777 111 222</p>
            <p className="panel__note">
              Objednané výměny bereme i mimo otevírací dobu po předchozí
              domluvě. Na kalibraci si vyhradíme celé stání s terčem.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}

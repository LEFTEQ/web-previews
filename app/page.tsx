import { AiImage } from "./_ui";

const services = [
  {
    idx: "01",
    code: "OLEJ",
    title: "Výměna oleje & filtru",
    body: "Motorový olej přesně podle specifikace výrobce, nový olejový filtr a kontrola všech provozních kapalin. Doplníme, co chybí.",
    reading: "5W-30",
  },
  {
    idx: "02",
    code: "PNEU",
    title: "Pneuservis",
    body: "Přezutí, vyvážení, oprava defektu i uskladnění sezonních pneumatik — pro osobní i užitkové vozy všech značek.",
    reading: "4× / 2,4 bar",
  },
  {
    idx: "03",
    code: "DIAGNOSTIKA",
    title: "Diagnostika motoru",
    body: "Načteme chybové kódy z řídicí jednotky a srozumitelně popíšeme závadu dřív, než se pustíme do opravy. Bez střílení naslepo.",
    reading: "OBD-II",
  },
  {
    idx: "04",
    code: "R134a·1234yf",
    title: "Klimatizace",
    body: "Kontrola těsnosti, doplnění chladiva R134a i nového 1234yf, dezinfekce výparníku a kompletní servis klimatizace.",
    reading: "těsnost OK",
  },
  {
    idx: "05",
    code: "BRZDY",
    title: "Brzdy & destičky",
    body: "Výměna brzdových destiček, kotoučů i kapaliny a kontrola celého brzdového systému. To, na čem nešetříme nikdy.",
    reading: "DOT 4",
  },
  {
    idx: "06",
    code: "STK",
    title: "STK & emise",
    body: "Připravíme vůz na technickou prohlídku a zajistíme měření emisí. Cílem je, ať projdete napoprvé.",
    reading: "emise OK",
  },
];

const reasons = [
  "Kompletní servisní práce pod jednou střechou",
  "Originální kvalita náhradních dílů",
  "Rozumíme osobním i užitkovým vozům",
  "Férové jednání a osobní přístup",
  "Na volný termín se u nás nečeká",
  "Kvalitní arabská káva na počkání",
  "Wi-Fi pro čas strávený čekáním",
  "Jasná cena předem, bez překvapení",
];

const reviews = [
  { text: "Přijel jsem, zaplatil a odjel. Férová cena.", who: "V. J.", src: "Recenze Google" },
  { text: "Dobře a rychle odvedená práce. Příjemná cena.", who: "D. M.", src: "Recenze Google" },
  { text: "Pán velmi ochotný. Vše rychle a kvalitně za super peníze.", who: "D. M.", src: "Recenze Google" },
];

function Divider({ label, value, reading }: { label: string; value: string; reading: number }) {
  return (
    <div className="divider" role="separator" aria-label={label}>
      <span className="divider__label">{label}</span>
      <span className="divider__gauge" aria-hidden="true">
        <span className="divider__needle" style={{ left: reading + "%" }} />
      </span>
      <span className="divider__value">{value}</span>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <header className="masthead">
        <a className="wordmark" href="#top" aria-label="Autoservis Brno">
          <span className="wordmark__tick" aria-hidden="true" />
          <span className="wordmark__name">Autoservis</span>
          <span className="wordmark__loc">Brno</span>
        </a>
        <p className="masthead__status">
          <span className="dot" aria-hidden="true" />https · zabezpečeno<span className="masthead__sep">/</span>aktualizováno 2025
        </p>
      </header>

      <main id="top">
        <section className="band hero" aria-labelledby="hero-title">
          <div className="ticketbar">
            <span>SERVISNÍ LIST</span>
            <span>Č. 2025-001</span>
            <span>AUTOSERVIS + PNEUSERVIS</span>
            <span>BRNO · OLOMOUCKÁ</span>
          </div>

          <div className="hero__grid">
            <div className="hero__text">
              <p className="eyebrow">DÍLNA · V PROVOZU</p>
              <h1 id="hero-title">
                Servis, který<br />
                <span className="hl">přečte závadu</span><br />
                dřív než účet.
              </h1>
              <p className="lede">
                Osobní i užitková auta všech značek. Oleje, brzdy, pneumatiky,
                diagnostika a klimatizace R134a i 1234yf — v Brně na Olomoucké,
                bez čekání na volný termín.
              </p>
              <div className="hero__actions">
                <a className="btn btn--primary" href="#sluzby">Objednat servis</a>
                <a className="btn btn--ghost" href="#sluzby">Prohlédnout práce</a>
              </div>

              <div className="calib" aria-label="Kalibrace dílny — v provozu">
                <div className="calib__head">
                  <span>KALIBRACE</span>
                  <span className="mono">0 → 100 %</span>
                </div>
                <div className="calib__track" aria-hidden="true">
                  <span className="calib__needle" style={{ ["--reading" as string]: "78%" }} />
                </div>
                <div className="calib__foot mono">
                  <span>diagnostika</span>
                  <span>pneuservis</span>
                  <span>klima</span>
                  <span>STK</span>
                </div>
              </div>
            </div>

            <figure className="hero__figure">
              <span className="hero__figlabel mono">DÍLNA · BRNO</span>
              <AiImage className="hero__img" src="/hero.webp" alt="Zvednutý osobní vůz na dvousloupovém zvedáku v brněnské dílně" />
            </figure>
          </div>
        </section>

        <Divider label="ROZSAH SERVISU" value="6 úkonů" reading={82} />

        <section className="band" id="sluzby" aria-labelledby="sluzby-title">
          <div className="sectionhead">
            <p className="eyebrow">POLOŽKY SERVISNÍHO LISTU</p>
            <h2 id="sluzby-title">Nejčastější servisní práce</h2>
            <p className="sectionhead__lede">
              Zákazníci u nás využívají celou nabídku. Tohle je šest položek,
              které vypisujeme na servisní list nejčastěji.
            </p>
          </div>

          <ol className="tickets">
            {services.map((s) => (
              <li key={s.idx}>
                <article className="ticket">
                  <div className="ticket__scale" aria-hidden="true" />
                  <header className="ticket__head">
                    <span className="ticket__code mono">{s.code}</span>
                    <span className="ticket__idx mono">{s.idx}</span>
                  </header>
                  <h3 className="ticket__title">{s.title}</h3>
                  <p className="ticket__body">{s.body}</p>
                  <footer className="ticket__foot">
                    <span className="ticket__tick" aria-hidden="true" />
                    <span className="ticket__reading mono">{s.reading}</span>
                  </footer>
                </article>
              </li>
            ))}
          </ol>

          <figure className="workshop">
            <AiImage className="workshop__img" src="/section-1.webp" alt="Detail servisních prací na motoru vozu v autoservisu" />
            <figcaption className="workshop__cap mono">KOMPLETNÍ NABÍDKA SERVISNÍCH PRACÍ · OSOBNÍ + UŽITKOVÉ</figcaption>
          </figure>
        </section>

        <Divider label="REFERENCE · GOOGLE" value="spokojenost" reading={94} />

        <section className="band trust" id="proc-my" aria-labelledby="trust-title">
          <div className="trust__grid">
            <div className="trust__intro">
              <p className="eyebrow">8 DŮVODŮ NA JEDEN LIST</p>
              <h2 id="trust-title">Proč si vybrat nás</h2>
              <p className="sectionhead__lede">
                Nadstandardní práce za standardní ceny. Bez čekání, s originálními
                díly a osobním přístupem — přesně tak, jak to má v Brně fungovat.
              </p>
              <figure className="trust__figure">
                <span className="hero__figlabel mono">PŘÍJEM VOZŮ</span>
                <AiImage className="trust__img" src="/section-2.webp" alt="Mechanik při přebírání vozu v recepci autoservisu" />
              </figure>
            </div>

            <ul className="reasons">
              {reasons.map((r, i) => (
                <li key={r} className="reason">
                  <span className="reason__no mono">{String(i + 1).padStart(2, "0")}</span>
                  <span className="reason__text">{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reviews">
            {reviews.map((rv, i) => (
              <blockquote key={i} className="review">
                <p className="review__text">„{rv.text}“</p>
                <footer className="review__foot">
                  <span className="review__who">{rv.who}</span>
                  <span className="review__src mono">{rv.src}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

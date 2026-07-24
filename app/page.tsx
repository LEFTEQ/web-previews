import { AiImage } from "./_ui";
import { ParcelFrame, CountUp } from "./motion";

const services = [
  {
    tag: "č. 456/1",
    name: "Správa nemovitostí",
    body: "Kompletní správa bytových domů, SVJ a nájemních jednotek — nájmy, revize, vyúčtování i drobná údržba. Naše hlavní řemeslo, každý den.",
  },
  {
    tag: "č. 456/2",
    name: "Prodej a pronájem",
    body: "Vedeme vás celým obchodem: nafocení, inzerce, prohlídky, smlouva u advokáta a předání klíčů. Jednoduché smlouvy s velkými písmeny.",
  },
  {
    tag: "č. 456/3",
    name: "Realitní poradna",
    body: "Bezplatné poradenství k odhadu, katastru, dani i pronájmu. Ptáte se vy, odpovídáme my — a odpověď rovnou zařadíme i pro ostatní.",
  },
  {
    tag: "č. 456/4",
    name: "Výkup a oddlužení",
    body: "Specialisté na výkup nemovitostí a oddlužení. Když se řešení hledá rychle, jsme koncesovaný a pojištěný partner po vašem boku.",
  },
  {
    tag: "č. 456/5",
    name: "Dražby nemovitostí",
    body: "Koncesovaný dražebník s portálem pro elektronické dražby. Chcete lepší cenu za nemovitost? Vydražíme ji transparentně a férově.",
  },
  {
    tag: "č. 456/6",
    name: "Odhad zdarma",
    body: "Bezplatný odhad tržní ceny — včetně leteckých snímků dronem. Než se rozhodnete, budete přesně vědět, na čem stojíte.",
  },
];

const testimonials = [
  {
    tag: "č. 24",
    name: "Jana Slámová",
    role: "prodej bytu, Plzeň",
    quote:
      "Chci velice poděkovat paní Vejvodové a jejímu týmu při prodeji svého bytu. Skvělá komunikace, profesní znalosti, lidský přístup. Nejenom, že mi byl prodán byt — celé to bylo naprosto úžasné.",
  },
  {
    tag: "č. 38",
    name: "Ing. Petr V.",
    role: "opakovaný klient",
    quote:
      "S JV Reality jsem spolupracoval už několikrát, prodal i koupil jsem přes ně nemovitost. Vyhovují mi jednoduché smlouvy s velkými písmeny, které snadno přečtu, a kompletní servis. Jinam už se neobracím.",
  },
  {
    tag: "č. 31",
    name: "Tereza a Martin A.",
    role: "první společný byt",
    quote:
      "Po projetí několika webů různých realitek jsme se rozhodli pro JV Reality — a při pořízení prvního bytu to byla trefa. Provedli nás vším, co jsme jako začátečníci netušili.",
  },
];

const projects = [
  { tag: "č. 51", name: "Projekt Ypsilonka", detail: "Výjimečný developerský projekt s 51 byty" },
  { tag: "č. 96", name: "Chrášťany u Rudné", detail: "Prodej 96 bytů v lokalitě Chrášťany" },
  { tag: "č. 12", name: "Kozolupy u Plzně", detail: "12 atypických bytových jednotek" },
  { tag: "č. 8", name: "Kašperské Hory", detail: "8 bytových jednotek v horské lokalitě" },
];

export default function Page() {
  return (
    <main className="sheet">
      <header className="topbar">
        <a className="wordmark" href="#hero" aria-label="JV Reality Group — správa nemovitostí Plzeň">
          <span className="wm-mark">JV</span>
          <span className="wm-text">
            Reality Group
            <span className="wm-sub">správa nemovitostí · Plzeň</span>
          </span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#nabidka">Nabídka</a>
          <a href="#reference">Reference</a>
          <a className="nav-cta" href="#schuzka">Domluvit schůzku</a>
        </nav>
      </header>

      <section className="sec hero" id="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Katastrální území Plzeň — list vlastnictví č. 456/22</p>
            <h1>
              Sny o bydlení <em>měříme, spravujeme a plníme</em> už čtvrt století.
            </h1>
            <p className="lead">
              Od roku 2002 pečujeme o plzeňské byty a domy jako o vlastní parcely — přesně,
              transparentně a s lidmi, kterým na vás záleží. Realitní kancelář, správce, advokát
              i koncesovaný dražebník pod jednou střechou.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#nabidka">Prohlédnout nabídku</a>
              <a className="btn btn-ghost" href="#schuzka">Nechat si poradit</a>
            </div>
          </div>

          <ParcelFrame tag="č. 456/22" className="hero-plot">
            <AiImage
              className="hero-img"
              src="/hero.webp"
              alt="Bytový dům ve správě JV Reality Group v Plzni"
            />
          </ParcelFrame>
        </div>

        <div className="stats" aria-label="Čísla, na kterých stojíme">
          <ParcelFrame tag="č. 24" className="stat">
            <span className="stat-num"><CountUp to={24} /></span>
            <span className="stat-label">let vás provázíme cestou k lepšímu bydlení</span>
          </ParcelFrame>
          <ParcelFrame tag="č. 2200" className="stat">
            <span className="stat-num"><CountUp to={2200} /></span>
            <span className="stat-label">nemovitostí jsme prodali nebo pronajali</span>
          </ParcelFrame>
          <ParcelFrame tag="č. 27" className="stat">
            <span className="stat-num"><CountUp to={27} /></span>
            <span className="stat-label">nemovitostí máme právě teď v nabídce</span>
          </ParcelFrame>
        </div>
      </section>

      <section className="sec sluzby" id="sluzby">
        <div className="sec-head">
          <p className="eyebrow">List 01 — Rozpis parcel</p>
          <h2>Šest služeb. Jeden zapsaný celek.</h2>
          <p className="sec-intro">
            Každou zakázku vedeme jako plochu v katastru — s jasnou hranicí, značkou a odpovědností.
            Vyberte si, s čím vám máme pomoct.
          </p>
        </div>

        <div className="grid grid-3">
          {services.map((s) => (
            <ParcelFrame key={s.tag} tag={s.tag} className="card">
              <h3>{s.name}</h3>
              <p>{s.body}</p>
            </ParcelFrame>
          ))}
        </div>

        <ParcelFrame tag="č. 27" className="feature" id="nabidka">
          <div className="feature-grid">
            <AiImage
              className="feature-img"
              src="/section-1.webp"
              alt="Nemovitost z aktuální nabídky JV Reality Group"
            />
            <div className="feature-copy">
              <p className="eyebrow">Aktuální nabídka</p>
              <h3>Podívejte se na zajímavé nemovitosti, které právě nabízíme.</h3>
              <p>
                Byty, domy i pozemky v Plzni a okolí — s odhadem zdarma, leteckými snímky dronem
                a poctivým popisem, do kterého vidíte. Chcete lepší cenu? Zkusíme dražbu.
              </p>
              <a className="btn btn-primary" href="#schuzka">Chci vidět nabídku</a>
            </div>
          </div>
        </ParcelFrame>
      </section>

      <section className="sec reference" id="reference">
        <div className="sec-head">
          <p className="eyebrow">List 02 — Ověřeno klienty</p>
          <h2>Co nás žene dopředu? Jste to vy.</h2>
          <p className="sec-intro">
            Už od roku 2002 jsme tu od toho, abychom vám pomohli. Jsme makléři, správci, advokáti
            i koncesovaný dražebník — ale především lidé, stejně jako vy.
          </p>
        </div>

        <div className="grid grid-3">
          {testimonials.map((t) => (
            <ParcelFrame key={t.name} tag={t.tag} className="quote">
              <p className="quote-text">{t.quote}</p>
              <p className="quote-by">
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </p>
            </ParcelFrame>
          ))}
        </div>

        <div className="ref-split">
          <ParcelFrame tag="č. 2002" className="about-plot">
            <div className="about-grid">
              <AiImage
                className="about-img"
                src="/section-2.webp"
                alt="Tým JV Reality Group v Plzni"
              />
              <div className="about-copy">
                <p className="eyebrow">Realizované projekty</p>
                <ul className="proj-list">
                  {projects.map((p) => (
                    <li key={p.name}>
                      <span className="proj-tag">{p.tag}</span>
                      <span className="proj-name">{p.name}</span>
                      <span className="proj-detail">{p.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ParcelFrame>

          <ParcelFrame tag="č. 456/22" className="visit" id="schuzka">
            <p className="eyebrow">Přijďte k nám na kávu</p>
            <h3>Rádi vás uvidíme.</h3>
            <p className="visit-addr">Ukázková 123, Plzeň</p>
            <dl className="visit-meta">
              <div>
                <dt>Telefon</dt>
                <dd><a href="tel:+420777111222">777 111 222</a></dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd><a href="mailto:info@example.cz">info@example.cz</a></dd>
              </div>
            </dl>
            <a className="btn btn-primary" href="#schuzka">Domluvit schůzku</a>
          </ParcelFrame>
        </div>
      </section>
    </main>
  );
}

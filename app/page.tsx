import { WordSwap } from "./motion";

const sortiment = [
  {
    tag: "Ø8",
    name: "Talířové hmoždinky",
    spec: "Ø 8 · Ø 10 mm · délky 95–260 mm",
    desc: "Kotvení fasádního polystyrenu i minerální vaty. Zápustná i natloukací montáž, ocelový i plastový trn.",
  },
  {
    tag: "ETA",
    name: "Fasádní šroubovací kotvy",
    spec: "ETICS · zápustná montáž · ETA",
    desc: "Pro zateplovací systémy s prokázanou únosností. Přesná hloubka kotvení bez tepelných mostů.",
  },
  {
    tag: "45kN",
    name: "Chemické kotvy",
    spec: "kartuše · patrony · sítka",
    desc: "Vytlačovací malty do betonu i děrovaných cihel. Vysoké zatížení tam, kde mechanická kotva nestačí.",
  },
  {
    tag: "M12",
    name: "Ocelové průvlakové kotvy",
    spec: "M6–M20 · pozink i nerez",
    desc: "Průvlakové, plášťové a natloukací kotvy do betonu. Dodáváme s doloženou třídou zatížení.",
  },
  {
    tag: "Ø6",
    name: "Natloukací hmoždinky",
    spec: "Ø 5 · Ø 6 · Ø 8 mm",
    desc: "Rychlá montáž lišt, latí a kabelových tras. Nylon s vysokým vytržením v plné i děrované cihle.",
  },
  {
    tag: "7,5",
    name: "Šrouby do betonu",
    spec: "Ø 7,5 mm · šestihran / zápust",
    desc: "Přímá montáž bez hmoždinky. Demontovatelné kotvení zárubní, konzol a ocelových profilů.",
  },
];

const duvery = [
  { num: "6 000+", label: "položek skladem", note: "Kotvy, hmoždinky, vruty i spojovací materiál dle DIN — od Ø 3 mm výš." },
  { num: "20 let", label: "v jižních Čechách", note: "Zásobujeme obkladače, sádrokartonáře, elektrikáře i fasádní party z Budějovic." },
  { num: "24 h", label: "expedice ze skladu", note: "Skladové položky balíme týž nebo následující den. Osobní odběr i rozvoz." },
];

export default function Page() {
  return (
    <main className="jh">
      <header className="top">
        <a className="wm" href="#" aria-label="JH Systems — úvod">
          <span className="wm-mark">JH</span>
          <span className="wm-name">SYSTEMS</span>
        </a>
        <a className="top-phone" href="tel:+420602125171">+420 602 125 171</a>
      </header>

      <section className="hero" aria-labelledby="hero-h">
        <div className="hero-main">
          <p className="eyebrow">KOTEVNÍ TECHNIKA · SPOJOVACÍ MATERIÁL · ČESKÉ BUDĚJOVICE</p>
          <h1 id="hero-h" className="hero-h">
            <span className="hero-fixed">Kotvíme pro</span>
            <WordSwap />
          </h1>
          <p className="hero-lead">
            Dodáváme kotevní a spojovací materiál pro zateplení a stavbu — od talířových
            hmoždinek do polystyrenu po chemické kotvy do betonu. Vybereme kotvu podle
            podkladu a zatížení, ne podle katalogového čísla.
          </p>
          <div className="chips">
            <span className="chip">Ø 6–24 mm</span>
            <span className="chip">třída zatížení C</span>
            <span className="chip">ETA · DIN</span>
            <span className="chip">pozink · nerez A2</span>
          </div>
        </div>

        <aside className="datasheet" aria-label="Přehled sortimentu">
          <p className="ds-title">SPECIFIKACE</p>
          <dl className="ds-list">
            <div><dt>Průměr</dt><dd>Ø 6–24 mm</dd></div>
            <div><dt>Zatížení</dt><dd>do 45 kN</dd></div>
            <div><dt>Norma</dt><dd>ETA / DIN</dd></div>
            <div><dt>Podklad</dt><dd>beton · cihla · polystyren</dd></div>
            <div><dt>Sklad</dt><dd>Č. Budějovice</dd></div>
          </dl>
        </aside>
      </section>

      <div className="thread-rule" role="presentation" />

      <section className="sec" aria-labelledby="sort-h">
        <div className="sec-head">
          <p className="sec-index">01 / SORTIMENT</p>
          <h2 id="sort-h" className="sec-h">Co u nás nakotvíte</h2>
          <p className="sec-sub">
            Řazeno podle podkladu, do kterého se kotví — od měkkého polystyrenu po beton.
          </p>
        </div>

        <ul className="tiles">
          {sortiment.map((t) => (
            <li key={t.name}>
              <article className="tile">
                <span className="tile-badge" aria-hidden="true"><span>{t.tag}</span></span>
                <h3 className="tile-name">{t.name}</h3>
                <p className="tile-spec">{t.spec}</p>
                <p className="tile-desc">{t.desc}</p>
                <span className="tile-underline" aria-hidden="true" />
              </article>
            </li>
          ))}
        </ul>
      </section>

      <div className="thread-rule" role="presentation" />

      <section className="sec" aria-labelledby="why-h">
        <div className="sec-head">
          <p className="sec-index">02 / PROČ MY</p>
          <h2 id="why-h" className="sec-h">Řemeslníci sem chodí pro jistotu</h2>
          <p className="sec-sub">
            Neprodáváme jen krabice se šrouby. Poradíme, co drží — a doložíme, proč.
          </p>
        </div>

        <ul className="stats">
          {duvery.map((d) => (
            <li key={d.label} className="stat">
              <span className="stat-badge" aria-hidden="true"><span>{d.num}</span></span>
              <p className="stat-label">{d.label}</p>
              <p className="stat-note">{d.note}</p>
            </li>
          ))}
        </ul>

        <div className="contact">
          <div className="contact-copy">
            <p className="contact-lead">Nevíte, jestli hmoždinka udrží konzoli markýzy?</p>
            <p className="contact-note">
              Zavolejte. Projdeme podklad, zatížení i rozteče a doporučíme kotvu s doloženou
              únosností. Sklad i výdej máme v Českých Budějovicích.
            </p>
          </div>
          <div className="contact-actions">
            <a className="btn" href="tel:+420602125171">Zavolat +420 602 125 171</a>
            <a className="btn-ghost" href="mailto:info@kotvy.cz">Napsat na info@kotvy.cz</a>
          </div>
        </div>
      </section>
    </main>
  );
}

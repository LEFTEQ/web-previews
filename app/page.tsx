import { AiImage } from "./_ui";
import { ScaffoldFrame } from "./motion";

const products = [
  {
    name: "Fasádní lešení",
    tag: "fasády",
    desc: "Klasika na omítky, zateplení i nátěry. Rychlost stavby, technická variabilita a vysoká bezpečnost při provozu.",
  },
  {
    name: "Pojízdné lešení",
    tag: "mobilní",
    desc: "Lehké a odolné, splňuje veškeré bezpečnostní normy. Po práci ho složíte do minima — vysoká skladnost.",
  },
  {
    name: "Modulové lešení",
    tag: "atypické tvary",
    desc: "Pro složitější fasády, jako volně stojící sestava i tam, kde se nedá kotvit k nosné konstrukci.",
  },
  {
    name: "Schodišťové věže",
    tag: "výstup a únik",
    desc: "Bezpečná výstupová cesta z lešení pro transport materiálu — a zároveň úniková cesta ze stavby.",
  },
  {
    name: "Shozy na suť",
    tag: "odvoz suti",
    desc: "Suť z horních pater a zvýšených prostorů putuje dolů řízeně — bez nepořádku a rizika pod stavbou.",
  },
  {
    name: "Stavební vrátky",
    tag: "vertikální doprava",
    desc: "Elektrické lanové vrátky s výkonným motorem vytáhnou materiál nahoru za vás. Konec nošení po žebříku.",
  },
];

const reasons = [
  "Prověřený systém značky Alfix",
  "Doprava tentýž den po Brně i okolí",
  "Konzultace a návrh sestavy zdarma",
  "Nezávazná cenová nabídka předem",
  "Osobní přístup a férové ceny",
  "Oficiální zákaznická půjčovna Alfix ČR",
];

export default function Page() {
  return (
    <main>
      <header className="top">
        <div className="wordmark">
          <span className="wordmark-name">
            LEŠEN<span className="wordmark-node">Á</span>ŘSTVÍ
          </span>
          <span className="wordmark-sub">s.r.o.</span>
        </div>
        <p className="top-meta">Půjčovna lešení Alfix · Brno</p>
      </header>

      {/* HERO — lift 1 */}
      <section className="band band--hero">
        <ScaffoldFrame />
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="eyebrow eyebrow--yellow">Lešení Alfix k zapůjčení · Brno</p>
            <h1 className="hero-title">
              <span className="hero-mark">Rychlost stavby</span>
              <br />je celá pointa.
            </h1>
            <p className="lead">
              Půjčíme vám fasádní, modulové i pojízdné lešení Alfix a dovezeme ho
              na stavbu — po Brně klidně ještě dnes, co zavoláte. Postavíte se
              nahoru dřív, než začne fasáda.
            </p>
            <div className="actions">
              <a className="btn btn--primary" href="#poptavka">
                Nezávazná poptávka
              </a>
              <a className="btn btn--ghost" href="tel:+420777111222">
                Volejte 777 111 222
              </a>
            </div>
            <ul className="spec-strip">
              <li>6 typů sestav</li>
              <li>doprava tentýž den</li>
              <li>systém Alfix</li>
            </ul>
          </div>
          <div className="hero-media">
            <AiImage
              src="/hero.webp"
              alt="Postavené fasádní lešení Alfix na budově"
              className="media media--hero"
            />
          </div>
        </div>
      </section>

      {/* NABÍDKA — lift 2 */}
      <section className="band band--light">
        <ScaffoldFrame />
        <div className="wrap">
          <div className="band-head">
            <p className="eyebrow eyebrow--steel">Co půjčujeme</p>
            <h2 className="band-title">Šest sestav, jeden systém Alfix</h2>
            <p className="band-intro">
              Od fasády po odvoz suti — vyberte si díl, který zrovna potřebujete.
              Poradíme, spočítáme metry a přivezeme.
            </p>
          </div>

          <AiImage
            src="/section-1.webp"
            alt="Detail spojů a dílů modulového lešení Alfix"
            className="media media--wide"
          />

          <ul className="grid">
            {products.map((p) => (
              <li key={p.name} className="card">
                <span className="card-tag">{p.tag}</span>
                <h3 className="card-name">{p.name}</h3>
                <p className="card-desc">{p.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROČ MY — lift 3 */}
      <section className="band band--hero" id="poptavka">
        <ScaffoldFrame />
        <div className="wrap about-grid">
          <div className="about-media">
            <AiImage
              src="/section-2.webp"
              alt="Nakládka lešení Alfix na dodávku před rozvozem"
              className="media media--tall"
            />
          </div>
          <div className="about-copy">
            <p className="eyebrow eyebrow--yellow">Proč Lešenářství</p>
            <h2 className="band-title band-title--light">
              Oficiální půjčovna Alfix v Brně
            </h2>
            <p className="lead">
              Jsme brněnská půjčovna lešení a oficiální zákaznická půjčovna
              značky Alfix pro Českou republiku. Půjčíme vám prověřený systém,
              poradíme se sestavou a dovezeme ho na stavbu — často ještě týž
              den, co zavoláte.
            </p>
            <ul className="reasons">
              {reasons.map((r) => (
                <li key={r} className="reason">
                  {r}
                </li>
              ))}
            </ul>
            <p className="locality">
              Působíme v&nbsp;Brně a&nbsp;okolí — novostavby, rekonstrukce
              i&nbsp;jednotlivé fasády.
            </p>
            <a className="btn btn--primary" href="tel:+420777111222">
              Zavolat a domluvit termín
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

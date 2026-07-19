import { AiImage } from "./_ui";

const services = [
  {
    surface: "Karoserie",
    name: "Car Wraps",
    desc: "Celopolep i změna barvy vozu — matné, lesklé i color-shift fólie, které mění odstín podle světla. Řežeme kolem každé hrany a lišty.",
  },
  {
    surface: "Lak / PPF",
    name: "Protection",
    desc: "Ochranná fólie Stoneprotect přes lak — neviditelná bariéra proti odletujícím kamínkům, hmyzu a drobným škrábancům.",
  },
  {
    surface: "Skla",
    name: "Tinting",
    desc: "Okenní a tónovací fólie. Míň slunce v kabině, víc soukromí a čistší linka bočního prosklení.",
  },
  {
    surface: "Reklama",
    name: "Print",
    desc: "Velkoplošný tisk a řezaná grafika — polep firemních vozů, výloh a ploch tak, aby čitelně nesl vaši značku.",
  },
  {
    surface: "Trup letadla",
    name: "Plane Wraps",
    desc: "Polep a ochrana letadla. Certifikovaná aplikace na tvarově náročné plochy, kde nesmí zůstat jediná bublina.",
  },
  {
    surface: "Lodní trup",
    name: "Boat Wraps",
    desc: "Polep a ochrana lodě. Fólie odolná vodě a slunci, zavařená přes každý přechod trupu.",
  },
];

const stats = [
  { n: "1500+", l: "spokojených klientů" },
  { n: "300+", l: "upravených aut" },
  { n: "1000+", l: "metrů položené fólie" },
];

const reviews = [
  {
    quote:
      "Vždy skvělá práce. O vůz se mi ve Futuro Design pokaždé postarají s úsměvem a bez problémů. Jsem ráda, že jsem narazila na profesionály ve svém oboru.",
    name: "RNDr. Silvie Marešová",
    tag: "stálá klientka",
  },
  {
    quote:
      "Už několikrát jsem si nechal vůz potáhnout fólií a vždy skvělý výsledek. Líbí se mi, že předem vím, že to bude na sto procent.",
    name: "Kryštof Diatka",
    tag: "opakovaná zakázka",
  },
  {
    quote:
      "Auto jsem dostala ofóliované jako překvapení. Po letech vypadá pořád skvěle a budí pozornost originálním designem navrženým přímo pro mě.",
    name: "Jana Filípková",
    tag: "originální design",
  },
];

export default function Page() {
  return (
    <main className="fw">
      <header className="hero">
        <div className="ribbon" aria-hidden="true">
          <span className="ribbon-sheen" />
        </div>

        <div className="hero-inner">
          <div className="brandline">
            <span className="wordmark">
              Futuro<span className="wm-deg">°</span>
            </span>
            <span className="wm-sub">Design — polepy aut · Praha</span>
          </div>

          <h1 className="hero-head">
            Barva, která se&nbsp;mění
            <br />
            s&nbsp;<em>úhlem</em> pohledu.
          </h1>

          <p className="hero-sub">
            Foliování a wrapping automobilů v Praze. Certifikovaní na wrap
            karoserie, ochranu laku Stoneprotect i okenní fólie — od jemné
            změny barvy po color-shift, který se přelije z fialové do tyrkysové,
            jak se kolem vozu projdete.
          </p>

          <ul className="hero-meta">
            <li>Wrap fóliování karoserie</li>
            <li>Stoneprotect PPF</li>
            <li>Okenní fólie</li>
          </ul>
        </div>
      </header>

      <section className="section" aria-labelledby="sluzby-h">
        <div className="rule" aria-hidden="true" />
        <div className="section-head">
          <p className="eyebrow">Služby — šest povrchů, jedna dílna</p>
          <h2 id="sluzby-h" className="section-title">
            Co u&nbsp;nás potáhneme fólií
          </h2>
        </div>

        <ul className="grid">
          {services.map((s) => (
            <li className="tile" key={s.name}>
              <span className="tile-surface">{s.surface}</span>
              <h3 className="tile-name">{s.name}</h3>
              <p className="tile-desc">{s.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section" aria-labelledby="duvera-h">
        <div className="rule" aria-hidden="true" />
        <div className="section-head">
          <p className="eyebrow">Reference — jak to hodnotí zákazníci</p>
          <h2 id="duvera-h" className="section-title">
            Každou křivku bereme jako originál
          </h2>
          <p className="section-lead">
            Automobil pro nás není jen předmět. Vnímáme každý detail, linku a
            přechod — a díky školením držíme certifikáty na wrap fóliování
            karoserie, instalaci Stoneprotect i okenních fólií.
          </p>
        </div>

        <dl className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.l}>
              <dt className="stat-n">{s.n}</dt>
              <dd className="stat-l">{s.l}</dd>
            </div>
          ))}
        </dl>

        <ul className="reviews">
          {reviews.map((r) => (
            <li className="review" key={r.name}>
              <p className="review-q">{r.quote}</p>
              <p className="review-by">
                <span className="review-name">{r.name}</span>
                <span className="review-tag">{r.tag}</span>
              </p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

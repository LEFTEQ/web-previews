import { AiImage } from "./_ui";
import { Counter } from "./motion";

const services = [
  {
    t: "Plynové kondenzační kotle",
    d: "Kompletní realizace na klíč včetně kouřovodu a revizní zprávy. Orientačně 80 000–110 000 Kč, s bojlerem 95 000–130 000 Kč.",
  },
  {
    t: "Tepelná čerpadla",
    d: "Individuální návrh podle vašeho domu a spotřeby. Bez záloh předem, realizace do 30 dní.",
  },
  {
    t: "Fotovoltaické elektrárny",
    d: "Zaměření a cenová nabídka zdarma. Montáž na klíč do 60 dní, opět bez záloh dopředu.",
  },
  {
    t: "Rekuperace",
    d: "Řízené větrání s rekuperací tepla — čerstvý vzduch v domě, aniž byste vytápěli ulici.",
  },
  {
    t: "Klimatizace",
    d: "Chlazení v létě i přitápění na jaře. Návrh, montáž a pravidelný servis jednotek.",
  },
  {
    t: "Kominické a topenářské práce",
    d: "Spalinové cesty, seřízení a roční kontroly, které prodlouží životnost kotle a udrží ho v kondici.",
  },
];

const steps = [
  {
    n: "01",
    t: "Nezávazná nabídka zdarma",
    d: "Přijedeme, zaměříme a spočítáme rozpočet na míru. Předem nic neplatíte.",
  },
  {
    n: "02",
    t: "Montáž na klíč",
    d: "Kotel, spalinová cesta, materiál i uvedení do provozu — vše zařídíme za vás.",
  },
  {
    n: "03",
    t: "Revize a servis",
    d: "Předáme revizní zprávu a hlídáme roční kontroly, aby topení spolehlivě vydrželo.",
  },
];

const stats = [
  { to: 7, suffix: "", label: "let zkušeností" },
  { to: 345, suffix: "", label: "hotových projektů" },
  { to: 5, suffix: "", label: "krajů působnosti" },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <div className="wrap topbar__inner">
          <a className="brand" href="#top" aria-label="SAMIGAS PLUS — úvod">
            <span className="brand__spark" aria-hidden="true" />
            <span className="brand__name">
              SAMIGAS<span className="brand__plus">PLUS</span>
            </span>
            <span className="brand__sub">topenářství · Olomouc</span>
          </a>
          <a className="btn btn--ghost topbar__tel" href="tel:+420214214878">
            Zavolat 214 214 878
          </a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero__glow" aria-hidden="true" />
        <div className="wrap hero__grid">
          <div className="hero__text">
            <p className="eyebrow">
              <span className="eyebrow__tick" aria-hidden="true" />
              Topenáři z Olomouce
            </p>
            <h1 className="hero__title">
              Studená trubka se u nás mění v{" "}
              <span className="flame">modrý plamen</span>.
            </h1>
            <span className="igniter igniter--hero" aria-hidden="true" />
            <p className="hero__lead">
              Plynové kondenzační kotle, tepelná čerpadla a fotovoltaika na klíč.
              Nabídka zdarma, bez záloh předem a hotovo do 30 dní.
            </p>
            <div className="hero__cta">
              <a className="btn btn--flame" href="#poptavka">
                Chci nabídku zdarma
              </a>
              <a className="btn btn--ghost" href="tel:+420214214878">
                Zavolat topenáře
              </a>
            </div>
          </div>
          <figure className="hero__object">
            <AiImage
              className="hero__img"
              src="/hero.webp"
              alt="Plynový kondenzační kotel nasvícený jako v dílně, obklopený modrou září plamene"
            />
          </figure>
        </div>
      </section>

      <section className="section services">
        <div className="wrap">
          <div className="section__head">
            <p className="eyebrow">
              <span className="eyebrow__tick" aria-hidden="true" />
              Co pro vás uděláme
            </p>
            <h2 className="section__title">Sedm řemesel, jedno teplo</h2>
            <span className="igniter" aria-hidden="true" />
          </div>

          <figure className="showcase">
            <AiImage
              className="showcase__img"
              src="/section-1.webp"
              alt="Detail montáže plynového kondenzačního kotle a spalinové cesty"
            />
            <figcaption className="showcase__cap">
              Montáž na klíč — kotel, kouřovod, materiál i revizní zpráva od jednoho
              týmu.
            </figcaption>
          </figure>

          <ul className="tiles">
            {services.map((s) => (
              <li className="tile" key={s.t}>
                <span className="tile__bar" aria-hidden="true" />
                <h3 className="tile__title">{s.t}</h3>
                <p className="tile__text">{s.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section trust" id="poptavka">
        <div className="wrap">
          <div className="section__head">
            <p className="eyebrow">
              <span className="eyebrow__tick" aria-hidden="true" />
              Proč SAMIGAS PLUS
            </p>
            <h2 className="section__title">Řemeslo, které drží teplotu</h2>
            <span className="igniter" aria-hidden="true" />
          </div>

          <div className="trust__grid">
            <div className="trust__body">
              < dl className="stats">
                {stats.map((s) => (
                  <div className="stat" key={s.label}>
                    <dt className="stat__num">
                      <Counter to={s.to} suffix={s.suffix} />
                    </dt>
                    <dd className="stat__label">{s.label}</dd>
                  </div>
                ))}
              </dl>

              <ol className="steps">
                {steps.map((st) => (
                  <li className="step" key={st.n}>
                    <span className="step__num">{st.n}</span>
                    <div>
                      <h3 className="step__title">{st.t}</h3>
                      <p className="step__text">{st.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <figure className="trust__object">
              <AiImage
                className="trust__img"
                src="/section-2.webp"
                alt="Tepelné čerpadlo a fotovoltaické panely instalované na klíč u rodinného domu"
              />
            </figure>
          </div>

          <div className="note">
            <h3 className="note__title">Kolik stojí kompletní montáž kotle?</h3>
            <p className="note__text">
              Cena za kondenzační kotel, práci, spalinovou cestu, montážní materiál
              i revizní zprávu se u varianty jen pro vytápění pohybuje mezi{" "}
              <strong>80 000 a 110 000 Kč</strong>, s bojlerem mezi{" "}
              <strong>95 000 a 130 000 Kč</strong>. Ceny jsou orientační — přesný
              rozpočet vám dáme po zaměření, zdarma a nezávazně.
            </p>
            <div className="note__foot">
              <div className="note__place">
                <span className="note__label">Kde nás najdete</span>
                <p>
                  Sídlo: Stupkova 952/18, Olomouc<br />
                  Kancelář: Hamerská 624/19, Olomouc
                </p>
              </div>
              <a className="btn btn--flame" href="tel:+420214214878">
                Zavolat 214 214 878
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

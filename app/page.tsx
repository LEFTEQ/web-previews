import type { CSSProperties } from "react";

export default function Page() {
  const cinnosti = [
    {
      km: "01",
      title: "Železniční stavby",
      desc: "Rekonstrukce a modernizace tratí, výhybek a železničního svršku. Kompletní realizace od zemního tělesa po pokládku koleje.",
    },
    {
      km: "02",
      title: "Mosty a protihlukové stěny",
      desc: "Železniční i silniční mosty, umělé stavby, opěrné zdi a protihluková opatření podél tratí i komunikací.",
    },
    {
      km: "03",
      title: "Trakce a elektro",
      desc: "Stavby trakčního vedení, napájecích stanic a elektrotechnických zařízení pro elektrifikaci železnic.",
    },
    {
      km: "04",
      title: "Kolejová mechanizace",
      desc: "Vlastní strojní park pro pokládku, úpravu a údržbu koleje — od podbíječek po pokladače panelů.",
    },
    {
      km: "05",
      title: "Sanace svahů a skal",
      desc: "Zajištění skalních masivů a nestabilních svahů podél tratí — kotvení, sítě, stříkané betony.",
    },
    {
      km: "06",
      title: "Vodohospodářské stavby",
      desc: "Odvodnění drážního tělesa, propustky, úpravy toků a ekologické stavby v okolí železnice.",
    },
  ];

  const projekty = [
    {
      misto: "Mladá Boleslav",
      title: "Modernizace nádraží",
      stav: "Hrubá stavba dokončena",
    },
    {
      misto: "Turnov — Železný Brod",
      title: "Zkapacitnění tratě",
      stav: "Před dokončením",
    },
  ];

  return (
    <main className="rl">
      <a className="rl-skip" href="#obsah">
        Přeskočit na obsah
      </a>

      <header className="rl-top">
        <div className="rl-wrap rl-top__row">
          <span className="rl-mark" aria-label="STRABAG Rail">
            STRABAG<span className="rl-mark__rail">RAIL</span>
          </span>
          <span className="rl-top__loc">Ústí nad Labem · Železniční stavitelství</span>
        </div>
      </header>

      <section className="rl-hero" id="obsah">
        <img
          className="rl-hero__img"
          src="/hero.webp"
          alt="Železniční trať ve výstavbě — kolej, štěrkové lože a stavební technika"
        />
        <div className="rl-hero__scrim" aria-hidden="true" />
        <div className="rl-wrap rl-hero__inner">
          <p className="rl-eyebrow">Kolej za kolejí, kilometr za kilometrem</p>
          <h1 className="rl-hero__title">
            Stavíme železnici,
            <br />
            po které jezdí
            <br />
            <span className="rl-hero__accent">celá země.</span>
          </h1>
          <p className="rl-hero__lead">
            Trať, most, trakce, sanace svahu. Z Ústí nad Labem realizujeme
            železniční stavby po celé republice — od zemního tělesa až po
            napětí v troleji.
          </p>
          <div className="rl-hero__cta">
            <a className="rl-btn" href="#cinnosti">
              Prohlédnout obory činnosti
            </a>
            <a className="rl-btn rl-btn--ghost" href="#projekty">
              Aktuální stavby
            </a>
          </div>
        </div>
        <div className="rl-hero__gauge" aria-hidden="true">
          <span>1435 mm</span>
          <span className="rl-hero__gaugeline" />
          <span>normální rozchod</span>
        </div>
      </section>

      <section className="rl-sec" id="cinnosti" aria-labelledby="cinnosti-h">
        <div className="rl-wrap">
          <div className="rl-sec__head">
            <p className="rl-eyebrow rl-eyebrow--dark">Obory činnosti</p>
            <h2 className="rl-sec__title" id="cinnosti-h">
              Vše, co drží trať pohromadě
            </h2>
            <p className="rl-sec__intro">
              Šest specializací pod jednou střechou. Nemusíte skládat stavbu
              z desítek dodavatelů — svršek, spodek, mosty i elektro zvládneme
              vlastními lidmi a technikou.
            </p>
          </div>

          <div className="rl-grid">
            {cinnosti.map((c) => (
              <article className="rl-card" key={c.km}>
                <span className="rl-card__km" aria-hidden="true">
                  {c.km}
                </span>
                <h3 className="rl-card__title">{c.title}</h3>
                <p className="rl-card__desc">{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rl-trust" id="projekty" aria-labelledby="projekty-h">
        <div className="rl-wrap rl-trust__grid">
          <div className="rl-trust__text">
            <p className="rl-eyebrow">Kdo za tím stojí</p>
            <h2 className="rl-sec__title rl-sec__title--light" id="projekty-h">
              Součást koncernu STRABAG, doma v severních Čechách
            </h2>
            <p className="rl-trust__lead">
              Jsme STRABAG Rail — železniční divize jednoho z největších
              stavebních koncernů v Evropě. Sídlíme v Ústí nad Labem a působíme
              po celé České republice i na Slovensku.
            </p>

            <dl className="rl-stats">
              <div className="rl-stat">
                <dt>Vlastní strojní park</dt>
                <dd>Podbíječky, pokladače, geodetická technika</dd>
              </div>
              <div className="rl-stat">
                <dt>Cargo doprava</dt>
                <dd>Vlastní železniční nákladní doprava na stavby</dd>
              </div>
              <div className="rl-stat">
                <dt>Certifikace</dt>
                <dd>Systémy kvality, bezpečnosti a životního prostředí</dd>
              </div>
            </dl>

            <div className="rl-proj">
              <p className="rl-proj__label">Právě stavíme</p>
              <ul className="rl-proj__list">
                {projekty.map((p) => (
                  <li className="rl-proj__item" key={p.title}>
                    <span className="rl-proj__misto">{p.misto}</span>
                    <span className="rl-proj__title">{p.title}</span>
                    <span className="rl-proj__stav">{p.stav}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rl-trust__media">
            <figure className="rl-fig">
              <img
                src="/section-1.webp"
                alt="Realizace železniční stavby — pokládka kolejového pole"
                loading="lazy"
              />
              <figcaption>Železniční svršek — pokládka a úprava koleje</figcaption>
            </figure>
            <figure className="rl-fig rl-fig--offset">
              <img
                src="/section-2.webp"
                alt="Mostní konstrukce a umělá stavba na železniční trati"
                loading="lazy"
              />
              <figcaption>Mosty, opěrné zdi a protihlukové stěny</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}

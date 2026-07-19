import { AiImage } from "./_ui";

const services = [
  {
    title: "Měření zraku",
    desc: "Odborné vyšetření optometristou. Vyberete si termín i nejbližší pobočku v Olomouci — a odejdete s jistotou, ne s odhadem.",
    meta: "cca 30 minut",
    accent: "teal",
  },
  {
    title: "Dioptrické brýle na míru",
    desc: "Kompletní brýle včetně skel a klidného poradenství s výběrem obruby. Přesně vycentrováno na vaše oči.",
    meta: "již od 799 Kč",
    accent: "amber",
  },
  {
    title: "Kontaktní čočky",
    desc: "Napoprvé vám s nasazením i sundáním pomůže náš specialista. Poradíme i s brzdami dětské krátkozrakosti (MiSight).",
    meta: "aplikace se specialistou",
    accent: "violet",
  },
  {
    title: "Sluneční a samozabarvovací skla",
    desc: "Sezónní kolekce a skla, která na slunci sama ztmavnou a v místnosti se zase projasní. Jedny brýle na celý den.",
    meta: "sleva 40 % na fotochromatiku",
    accent: "teal",
  },
];

const values = [
  { big: "75", label: "optik po celé zemi" },
  { big: "Přesní", label: "optometristé a experti" },
  { big: "od 799", label: "dostupné ceny, Kč" },
  { big: "Laskaví", label: "personál, co má čas" },
];

export default function Page() {
  return (
    <div className="wrap">
      <header className="nav">
        <a className="mark" href="#top" aria-label="Fokus optik, úvod">
          <span className="mark-lens" aria-hidden="true" />
          <span className="mark-name">
            Fokus<span className="mark-optik">optik</span>
          </span>
        </a>
        <nav className="nav-links" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#akce">Akce</a>
          <a href="#pobocky">Pobočky</a>
          <a href="#o-nas">O nás</a>
        </nav>
        <a className="btn btn-nav" href="#objednat">
          Objednat měření
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-heading">
          <p className="hero-kicker">Oční optika · Olomouc</p>

          <div className="chart" role="img" aria-label="Pro zdravý pohled na svět — brýle již od 799 Kč">
            <h1 id="hero-heading" className="chart-lines">
              <span className="row">
                <span className="acuity">20/200</span>
                <span className="opto o1">Pro</span>
              </span>
              <span className="row">
                <span className="acuity">20/100</span>
                <span className="opto o2">zdravý</span>
              </span>
              <span className="row">
                <span className="acuity">20/70</span>
                <span className="opto o3">pohled</span>
              </span>
              <span className="row">
                <span className="acuity">20/50</span>
                <span className="opto o4">na</span>
              </span>
              <span className="row">
                <span className="acuity">20/40</span>
                <span className="opto o5">svět</span>
              </span>
              <span className="row row-fine">
                <span className="acuity acuity-best">20/20</span>
                <span className="opto o6">brýle již od 799 Kč</span>
              </span>
            </h1>
          </div>

          <p className="chart-note">
            Čtěte odshora dolů. Jakmile se vám spodní řádek rozostří, je čas přijít na měření.
          </p>

          <div className="hero-actions" id="objednat">
            <a className="btn btn-lg" href="#sluzby">
              Objednat měření zraku
            </a>
            <a className="link-quiet" href="#pobocky">
              Najít nejbližší pobočku v Olomouci →
            </a>
          </div>
        </section>

        <section className="section" id="sluzby" aria-labelledby="sluzby-h">
          <p className="anchor">
            <span className="anchor-mark">20/40</span>
            Co pro vás uděláme
          </p>
          <h2 className="section-h" id="sluzby-h">
            Lepší vidění začíná měřením — ne odhadem
          </h2>

          <ul className="cards">
            {services.map((s) => (
              <li className="card" key={s.title}>
                <span className={"card-meta meta-" + s.accent}>{s.meta}</span>
                <h3 className="card-h">{s.title}</h3>
                <p className="card-desc">{s.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="section section-dark" id="o-nas" aria-labelledby="o-nas-h">
          <p className="anchor anchor-light">
            <span className="anchor-mark anchor-mark-light">20/20</span>
            Proč Fokus
          </p>
          <h2 className="section-h section-h-light" id="o-nas-h">
            Sedmdesát pět optik, jeden laskavý přístup
          </h2>
          <p className="lede">
            Jsme síť optik Fokus. V Olomouci vás přivítá personál, který si na vás udělá
            čas — od první rady s výběrem obruby po přesné vycentrování skel. Vidět dobře
            má být samozřejmost, ne luxus.
          </p>

          <dl className="values">
            {values.map((v) => (
              <div className="value" key={v.label}>
                <dt className="value-big">{v.big}</dt>
                <dd className="value-label">{v.label}</dd>
              </div>
            ))}
          </dl>

          <p className="contact-note" id="pobocky">
            Napište nám na{" "}
            <a className="link-inline" href="mailto:info@example.cz">
              info@example.cz
            </a>{" "}
            — rádi doporučíme termín i pobočku.
          </p>
        </section>
      </main>
    </div>
  );
}

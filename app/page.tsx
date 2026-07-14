import React from "react";

const chart = [
  { visus: "6/60", word: "VIDĚT", size: "clamp(3.4rem, 13vw, 8.8rem)" },
  { visus: "6/36", word: "SVĚT", size: "clamp(2.6rem, 9.6vw, 6.4rem)" },
  { visus: "6/24", word: "OSTŘEJI", size: "clamp(1.9rem, 6.6vw, 4.6rem)" },
  { visus: "6/12", word: "KAŽDÝ", size: "clamp(1.4rem, 4.8vw, 3.3rem)" },
  { visus: "6/6", word: "DEN", size: "clamp(1.05rem, 3.4vw, 2.3rem)" },
];

const steps = [
  {
    n: "01",
    title: "Vyšetření zraku",
    text: "Optometrista změří dioptrie na autorefraktometru i klasicky na optotypech. Vyšetření trvá zhruba 30 minut a odejdete s přesnou hodnotou pro každé oko.",
  },
  {
    n: "02",
    title: "Výběr obrub",
    text: "Vybíráme spolu z více než 400 obrub — od lehkých titanových po acetátové. Poradíme, co sedne tvaru obličeje i vašim dioptriím.",
  },
  {
    n: "03",
    title: "Broušení čoček",
    text: "Čočky brousíme přímo v Olomouci. Ztenčené, samozabarvovací nebo s filtrem modrého světla — podle toho, jak a kde brýle nosíte.",
  },
  {
    n: "04",
    title: "Nasazení a servis",
    text: "Hotové brýle nasadíme, srovnáme a doladíme na míru. Rovnání a drobné opravy pak děláme na počkání a zdarma.",
  },
];

const extras = [
  "Kontaktní čočky a jejich aplikace",
  "Dětské brýle a pružné obruby",
  "Brýle k počítači s filtrem modrého světla",
  "Sluneční brýle na dioptrie",
  "Měření nitroočního tlaku",
  "Opravy a výměna nožiček",
];

const stats = [
  { big: "2004", label: "rok, kdy jsme otevřeli v areálu na Zdravotníků" },
  { big: "20 000+", label: "vyšetřených očí" },
  { big: "3", label: "optometristé a spolupracující oční lékař" },
];

const reviews = [
  {
    text: "Konečně brýle, ve kterých vidím ostře i za volantem v noci. A paní optička mi poradila obruby, které bych si sám nevybral — a jsou perfektní.",
    author: "Jana K., Olomouc",
  },
  {
    text: "Syn si na brýle zvykal těžko. Tady měli trpělivost, vybrali pružnou dětskou obrubu a dvakrát je zdarma srovnali.",
    author: "Petr Doležel, Šternberk",
  },
];

export default function Page() {
  return (
    <main className="fv">
      <header className="fv-head">
        <div className="fv-wrap fv-head-in">
          <a className="fv-logo" href="#top" aria-label="fovea — oční optika Olomouc">
            <span className="fv-logo-word">
              f<span className="fv-logo-eye">o</span>vea
            </span>
            <span className="fv-logo-sub">oční optika · Olomouc</span>
          </a>
          <nav className="fv-nav" aria-label="Rychlé odkazy">
            <a className="fv-tel" href="tel:+420588441111">588 441 111</a>
            <a className="fv-btn fv-btn-sm" href="#objednat">Objednat vyšetření</a>
          </nav>
        </div>
      </header>

      <section className="fv-hero" id="top" aria-labelledby="fv-hero-h">
        <div className="fv-wrap fv-hero-grid">
          <div className="fv-hero-main">
            <p className="fv-eyebrow">Přečtěte spodní řádek</p>
            <h1 id="fv-hero-h" className="fv-chart" aria-label="Vidět svět ostřeji každý den">
              {chart.map((r, i) => (
                <span
                  key={r.visus}
                  className={"fv-row" + (i === chart.length - 1 ? " fv-row-goal" : "")}
                  style={{ fontSize: r.size, animationDelay: `${0.15 + i * 0.16}s` }}
                >
                  <span className="fv-visus" aria-hidden="true">{r.visus}</span>
                  <span className="fv-word">{r.word}</span>
                </span>
              ))}
            </h1>
            <p className="fv-lead">
              A pokud spodní řádek nepřečtete, jste u nás správně. Změříme vám
              zrak, vybereme obruby, které vám sluší, a brousíme čočky přesně na
              vaše oči. Objednáte se online, na přesný čas — bez čekání v čekárně.
            </p>
            <div className="fv-cta" id="objednat">
              <a className="fv-btn" href="#objednat">Objednat vyšetření zraku</a>
              <a className="fv-btn fv-btn-ghost" href="tel:+420588441111">Zavolat 588 441 111</a>
            </div>
          </div>
          <figure className="fv-hero-fig">
            <img
              src="/hero.webp"
              alt="Detail dioptrických brýlí s antireflexní vrstvou v ruce optometristy"
              className="fv-hero-img"
              width={720}
              height={900}
            />
            <figcaption className="fv-hero-cap">
              Antireflexní vrstva čočky se na světle leskne do zelena i fialova —
              proto tenhle nádech provází celý web.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="fv-sec fv-services" aria-labelledby="fv-serv-h">
        <div className="fv-wrap">
          <div className="fv-sec-head">
            <p className="fv-eyebrow">Jak to u nás chodí</p>
            <h2 id="fv-serv-h" className="fv-h2">Nové brýle ve čtyřech krocích</h2>
          </div>

          <figure className="fv-band">
            <img
              src="/section-1.webp"
              alt="Stěna vzorníku brýlových obrub v prodejně oční optiky"
              className="fv-band-img"
              width={1200}
              height={520}
            />
          </figure>

          <ol className="fv-steps">
            {steps.map((s) => (
              <li className="fv-step" key={s.n}>
                <span className="fv-step-n" aria-hidden="true">{s.n}</span>
                <div className="fv-step-body">
                  <h3 className="fv-step-t">{s.title}</h3>
                  <p className="fv-step-x">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="fv-extras">
            <p className="fv-extras-h">Zařídíme také</p>
            <ul className="fv-chips">
              {extras.map((e) => (
                <li className="fv-chip" key={e}>{e}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="fv-sec fv-trust" aria-labelledby="fv-trust-h">
        <div className="fv-wrap fv-trust-grid">
          <div className="fv-trust-main">
            <p className="fv-eyebrow">Proč k nám</p>
            <h2 id="fv-trust-h" className="fv-h2">Vidí u nás dobře už dvacet let</h2>

            <dl className="fv-stats">
              {stats.map((s) => (
                <div className="fv-stat" key={s.big}>
                  <dt className="fv-stat-big">{s.big}</dt>
                  <dd className="fv-stat-label">{s.label}</dd>
                </div>
              ))}
            </dl>

            <div className="fv-reviews">
              {reviews.map((r) => (
                <blockquote className="fv-review" key={r.author}>
                  <p>{r.text}</p>
                  <cite>{r.author}</cite>
                </blockquote>
              ))}
            </div>
          </div>

          <aside className="fv-card" aria-label="Kontakt a otevírací doba">
            <img
              src="/section-2.webp"
              alt="Optometrista při vyšetření zraku u přístroje v ordinaci"
              className="fv-card-img"
              width={640}
              height={420}
            />
            <div className="fv-card-body">
              <h3 className="fv-card-h">Kde nás najdete</h3>
              <p className="fv-card-addr">
                Zdravotníků 248/7<br />779 00 Olomouc
              </p>
              <dl className="fv-hours">
                <div><dt>Po–Pá</dt><dd>8:00–18:00</dd></div>
                <div><dt>Sobota</dt><dd>8:00–12:00</dd></div>
                <div><dt>Neděle</dt><dd>zavřeno</dd></div>
              </dl>
              <a className="fv-btn fv-btn-block" href="tel:+420588441111">Objednat: 588 441 111</a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

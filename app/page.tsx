import React from "react";

const catalog = [
  {
    name: "Pomníky a hrobky",
    desc: "Jedno­hroby i dvoj­hroby z leštěné žuly a mramoru — nový pomník na míru i renovace staršího.",
  },
  {
    name: "Nápisové desky a vzory",
    desc: "Nová deska i pouhé doplnění dalšího jména ke stávajícímu pomníku — barevně i písmem sladitelné.",
  },
  {
    name: "Ornamenty a písma",
    desc: "Ruční i CNC rytí, zlacení a stříbření, široký výběr fontů a motivů.",
  },
  {
    name: "Lampy a vázy",
    desc: "Žulové i nerezové doplňky, které lad-í s barvou a leštěním pomníku.",
  },
  {
    name: "Urny plastové a nerezové",
    desc: "Pro urnová místa i kolumbária, včetně osazení na místě.",
  },
  {
    name: "Zákrytové desky",
    desc: "Zakrytí a renovace stávajících hrobů, srovnání a nové osazení rámu.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Kamenictví HASKA, domů">
          <span className="brand-word">
            HASKA<span className="brand-dot">.</span>
          </span>
          <span className="brand-sub">Kamenictví · Pardubice</span>
        </a>
        <a className="topbar-call" href="tel:+420777885430">
          <span className="topbar-call-label">Zavolat</span>
          <span className="topbar-call-num">777 885 430</span>
        </a>
      </header>

      <section className="hero" id="top">
        <img
          className="hero-img"
          src="/hero.webp"
          alt="Leštěný žulový pomník se zlaceným nápisem z dílny Kamenictví HASKA"
        />
        <div className="hero-veil" aria-hidden="true" />
        <div className="hero-inner">
          <p className="eyebrow eyebrow-light a1">Přímý výrobce · od roku 2010</p>
          <h1 className="hero-title a2">
            Jméno, které zůstane<br />vytesané v kameni.
          </h1>
          <p className="hero-lead a3">
            Pomník, hrobka i nová nápisová deska — vyrábíme přímo v dílně
            u Pardubic. Zaměření, dopravu i montáž máte u každé zakázky zdarma.
          </p>
          <div className="hero-actions a4">
            <a className="btn btn-gold" href="tel:+420777885430">
              Zavolat 777 885 430
            </a>
            <a className="btn btn-ghost" href="mailto:kamenictvi-haska@centrum.cz">
              Napsat e-mail
            </a>
          </div>
          <p className="hero-hours a4">
            Po–Pá 8:00–14:00 · víkend a mimo dobu po telefonické dohodě
          </p>
        </div>
      </section>

      <section className="catalog" aria-labelledby="catalog-title">
        <div className="wrap">
          <header className="section-head">
            <p className="eyebrow">Co pro vás vyrobíme</p>
            <h2 className="section-title" id="catalog-title">
              Vše z jedné kamenické dílny
            </h2>
            <p className="section-lead">
              Od hrubého žulového bloku po leštěný povrch a zlacené písmo.
              Poradce si s vámi v klidu projde vzory písem, ornamentů i materiálů.
            </p>
          </header>

          <p className="promise">
            <span className="promise-mark" aria-hidden="true">—</span>
            Ke každé zakázce <strong>zaměření, doprava a montáž zdarma</strong>.
          </p>

          <div className="catalog-grid">
            <figure className="catalog-media">
              <img
                src="/section-1.webp"
                alt="Ukázky nápisových desek, písem a ornamentů v kamenické dílně"
              />
            </figure>
            <ul className="catalog-list">
              {catalog.map((item) => (
                <li className="catalog-item" key={item.name}>
                  <h3 className="catalog-name">{item.name}</h3>
                  <p className="catalog-desc">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="about" aria-labelledby="about-title">
        <div className="wrap about-grid">
          <figure className="about-media">
            <img
              src="/section-2.webp"
              alt="CNC leštící linka a opracování kamene v dílně Kamenictví HASKA"
            />
          </figure>
          <div className="about-text">
            <p className="eyebrow eyebrow-light">O dílně</p>
            <h2 className="section-title section-title-light" id="about-title">
              Přímý výrobce, ne překupník
            </h2>
            <p className="about-body">
              Kamenictví HASKA vyrábí v Mikulovicích u Pardubic od roku 2010.
              Kámen opracováváme sami — platníte za řemeslo, ne za mezičlánky.
            </p>
            <p className="about-body">
              V roce 2020 jsme dílnu zmodernizovali: nové brusné rameno a CNC
              leštící linka pro přesné opracování kamene. Projekt „Technologie
              pro opracování kamene“ podpořilo Ministerstvo průmyslu a obchodu
              ČR z programu OP PIK.
            </p>

            <dl className="contact">
              <div className="contact-row">
                <dt>Kde nás najdete</dt>
                <dd>Blato 97, 530 02 Mikulovice — Pardubice 2</dd>
              </div>
              <div className="contact-row">
                <dt>Telefon</dt>
                <dd>
                  <a href="tel:+420777885430">+420 777 885 430</a>
                  <span className="contact-sep">·</span>
                  <a href="tel:+420774400259">+420 774 400 259</a>
                </dd>
              </div>
              <div className="contact-row">
                <dt>E-mail</dt>
                <dd>
                  <a href="mailto:kamenictvi-haska@centrum.cz">
                    kamenictvi-haska@centrum.cz
                  </a>
                </dd>
              </div>
              <div className="contact-row">
                <dt>Otevřeno</dt>
                <dd>
                  Po–Pá 8:00–14:00 · víkend a mimo pracovní dobu po telefonické dohodě
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}

import React from "react";

const phases = [
  { n: "01", title: "Bourání a příprava", note: "Vyklidíme, zajistíme prašnost a odvoz suti." },
  { n: "02", title: "Rozvody", note: "Elektroinstalace a voda podle nové dispozice." },
  { n: "03", title: "Sádrokartony a jádra", note: "Příčky, podhledy, obklady a dlažby." },
  { n: "04", title: "Povrchy a interiér", note: "Omítky, malby, podlahy, montáže." },
  { n: "05", title: "Úklid a předání", note: "Uklizeno, vyzkoušeno, klíče vám do ruky." },
];

const services = [
  {
    id: "A",
    title: "Rekonstrukce bytů, domů a společných prostor",
    desc: "Kompletní přestavba dispozice i dílčí modernizace koupelny nebo kuchyně. Panelák, cihla i starý činžák v centru.",
  },
  {
    id: "B",
    title: "Nájemní bydlení na klíč",
    desc: "Připravíme byt k pronájmu od A do Z. Vy dostanete hotový prostor a klíče, nájemník se může stěhovat.",
  },
  {
    id: "C",
    title: "Elektroinstalace",
    desc: "Nové rozvody, rozvaděče, zásuvky i revize. Vše od našeho elektrikáře, v jednom harmonogramu.",
  },
  {
    id: "D",
    title: "Instalatérské a vodoinstalační práce",
    desc: "Rozvody vody a odpadů, přesun jádra, výměna stoupaček ve spolupráci s SVJ.",
  },
  {
    id: "E",
    title: "Sádrokartony a podhledy",
    desc: "Příčky, akustické stěny, podhledy s vedením světel a klimatizace.",
  },
  {
    id: "F",
    title: "Interiérové a exteriérové práce",
    desc: "Malby, obklady, podlahy, fasády a povrchy uvnitř i venku.",
  },
];

const trust = [
  {
    k: "Jedna parta, ne pět firem",
    v: "Elektrikář, instalatér i sádrokartonář jedou pod jedním stavbyvedoucím. Nekoordinujete termíny mezi cizími lidmi — to je naše práce.",
  },
  {
    k: "Pevný termín a cena předem",
    v: "Před podpisem víte, co se udělá, kdy se nastěhujete a kolik to stojí. Bez dodatečných překvapení v půlce stavby.",
  },
  {
    k: "Praha a okolí",
    v: "Jsme kousek. Přijedeme se do bytu podívat, změříme a řekneme rovnou, co dává smysl a co ne.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <section className="hero">
        <img
          className="hero-photo"
          src="/hero.webp"
          alt="Rozestavěný pražský byt během rekonstrukce s odkrytými rozvody a novými příčkami"
        />
        <div className="hero-scrim" aria-hidden="true" />

        <header className="nav">
          <a className="wordmark" href="#top" aria-label="Ama&Co. Construction, úvod">
            AMA<span className="amp">&amp;</span>CO.
          </a>
          <nav className="nav-links" aria-label="Hlavní">
            <a href="#remesla">Řemesla</a>
            <a href="#postup">Postup</a>
            <a href="#duvera">O nás</a>
          </nav>
          <a className="nav-phone" href="tel:+420773734464">
            <span className="nav-phone-label">Praha</span>773 734 464
          </a>
        </header>

        <div className="hero-inner" id="top">
          <p className="eyebrow reveal r1">Rekonstrukce na klíč · Praha a okolí</p>
          <h1 className="hero-title reveal r2">
            Vezmeme byt od bourání<br />
            až po předání klíčů.
          </h1>
          <p className="hero-sub reveal r3">
            Byty, rodinné domy i společné prostory. Celou stavbu — bourání,
            rozvody, sádrokartony i povrchy — vede jedna parta s pevným termínem
            a cenou domluvenou předem.
          </p>
          <div className="hero-actions reveal r4">
            <a className="btn btn-primary" href="tel:+420773734464">
              Zavolat: 773 734 464
            </a>
            <a className="btn btn-ghost" href="mailto:info@amaconstruction.cz">
              Napsat na e-mail
            </a>
          </div>
        </div>
      </section>

      <section className="band" id="postup" aria-labelledby="postup-h">
        <div className="band-head">
          <h2 className="band-title" id="postup-h">Rekonstrukce na klíč znamená pět fází, jeden tým.</h2>
          <p className="band-lead">
            Nepřebíráte štafetu mezi řemeslníky. Postupujeme po měřených krocích —
            a vy víte, v které fázi zrovna jsme.
          </p>
        </div>
        <ol className="phases">
          {phases.map((p) => (
            <li className="phase" key={p.n}>
              <span className="phase-n">{p.n}</span>
              <span className="phase-title">{p.title}</span>
              <span className="phase-note">{p.note}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="services" id="remesla" aria-labelledby="remesla-h">
        <div className="services-intro">
          <p className="section-eyebrow">Co umíme</p>
          <h2 className="section-title" id="remesla-h">Řemesla pod jednou střechou</h2>
          <p className="section-lead">
            Nemusíte shánět zvlášť elektrikáře, instalatéra a partu na sádrokarton.
            U nás pracují v jednom rozvrhu a odpovídá za ně jeden člověk.
          </p>
          <figure className="services-figure">
            <img
              src="/section-1.webp"
              alt="Detail dokončené rekonstrukce — nová koupelna a obklady od Ama&Co."
            />
          </figure>
        </div>

        <ul className="service-list">
          {services.map((s) => (
            <li className="service" key={s.id}>
              <span className="service-id">{s.id}</span>
              <div className="service-body">
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="trust" id="duvera" aria-labelledby="duvera-h">
        <figure className="trust-figure">
          <img
            src="/section-2.webp"
            alt="Parta Ama&Co. při práci na rekonstrukci bytu v Praze"
          />
        </figure>
        <div className="trust-content">
          <p className="section-eyebrow orange">O nás</p>
          <h2 className="section-title" id="duvera-h">Proč nás pražští majitelé pouští do bytu</h2>
          <dl className="trust-list">
            {trust.map((t) => (
              <div className="trust-item" key={t.k}>
                <dt>{t.k}</dt>
                <dd>{t.v}</dd>
              </div>
            ))}
          </dl>
          <div className="contact-card">
            <p className="contact-name">Ama&amp;Co. — Construction s.r.o.</p>
            <div className="contact-rows">
              <a href="tel:+420773734464">+420 773 734 464</a>
              <a href="mailto:info@amaconstruction.cz">info@amaconstruction.cz</a>
              <span>IČO 14224674 · Praha</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

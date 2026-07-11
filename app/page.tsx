import React from "react";

const svozy = [
  {
    tag: "BIO",
    fraction: "Bioodpad",
    color: "#8a5a2b",
    lede: "Slupky, listí, tráva. Od 1. srpna 2026 přebíráme svoz bioodpadu v části Prahy — týká se zhruba 30 % území metropole.",
    action: "Dejte bioodpadu druhou šanci",
  },
  {
    tag: "SMĚS",
    fraction: "Směsný odpad",
    color: "#111111",
    lede: "Pravidelný svoz z popelnic po celé Praze. Nová smlouva, přepis, změna četnosti i cena — vyřídíte přes Moje smlouva.",
    action: "Pravidelný svoz odpadu",
  },
  {
    tag: "OBJEM",
    fraction: "Velkoobjem",
    color: "#0B7A3B",
    lede: "Stará skříň, vana, hromada z vyklízení? Přistavíme velkoobjemový kontejner nebo najdete nejbližší sběrný dvůr.",
    action: "Jednorázová likvidace odpadu",
  },
  {
    tag: "E-ŠROT",
    fraction: "Elektroodpad",
    color: "#c23b22",
    lede: "Lednice, televize, drobné spotřebiče. Zpětný odběr i nebezpečný odpad odevzdáte zdarma ve sběrném dvoře.",
    action: "Elektroodpad a zpětný odběr",
  },
];

const novinky = [
  {
    date: "1. 7. 2026",
    title: "Sběrný dvůr Durychova byl uzavřen",
    text: "Provoz sběrného dvora v Durychově ulici skončil. Nejbližší otevřený dvůr najdete v přehledu sběrných míst.",
  },
  {
    date: "16. 6. 2026",
    title: "Upravená otevírací doba sběrných dvorů v červenci",
    text: "V neděli 5. a v pondělí 6. července budou kvůli státním svátkům všechny naše sběrné dvory zavřené.",
  },
  {
    date: "27. 5. 2026",
    title: "Zelená střecha kvete a chladí už čtvrtým rokem",
    text: "Přírodní klimatizace na 450 m² nad administrativní budovou Pod Šancemi nepotřebuje žádnou elektřinu.",
  },
];

export default function Page() {
  return (
    <main className="ps">
      <header className="ps-top">
        <a className="ps-mark" href="#uvod" aria-label="Pražské služby — úvod">
          <span className="ps-mark__p">PS</span>
          <span className="ps-mark__name">
            Pražské služby
            <em>svoz a čistota města</em>
          </span>
        </a>
        <a className="ps-call" href="tel:+420284091888">
          <span className="ps-call__dot" aria-hidden="true" />
          <span className="ps-call__num">284&nbsp;091&nbsp;888</span>
          <span className="ps-call__hrs">Po–Čt 8–18 · Pá 8–16:30</span>
        </a>
      </header>

      <section className="ps-hero" id="uvod">
        <img
          className="ps-hero__img"
          src="/hero.webp"
          alt="Popelářský vůz Pražských služeb při ranním svozu odpadu v pražské ulici"
        />
        <div className="ps-hero__scrim" aria-hidden="true" />
        <div className="ps-hero__inner">
          <p className="ps-eyebrow">Praha · svozový den začíná v 6:00</p>
          <h1 className="ps-hero__title">
            Ráno, než se<br />
            město probudí,<br />
            <span>je uklizeno.</span>
          </h1>
          <p className="ps-hero__lede">
            Každý všední den vyjedou naše vozy do ulic a odvezou to, co Praha
            vytřídila i vyhodila. Popelnice, sběrné dvory, spalovna ZEVO
            Malešice i úklid komunikací — jedna městská firma za vším, co
            zůstane u obrubníku.
          </p>
          <div className="ps-hero__cta">
            <a className="ps-btn" href="#odpady">
              Zařídit svoz popelnice
            </a>
            <a className="ps-btn ps-btn--ghost" href="#odpady">
              Najít sběrný dvůr
            </a>
          </div>
        </div>
        <ol className="ps-ticker" aria-label="Co se dnes odveze">
          <li><b>3 200 t</b><span>svezeno denně</span></li>
          <li><b>ZEVO</b><span>teplo pro 25 tisíc domácností</span></li>
          <li><b>450 m²</b><span>zelené střechy Pod Šancemi</span></li>
        </ol>
      </section>

      <section className="ps-section ps-odpady" id="odpady" aria-labelledby="odpady-h">
        <div className="ps-section__head">
          <p className="ps-eyebrow ps-eyebrow--dark">Do které popelnice to patří</p>
          <h2 id="odpady-h" className="ps-h2">
            Čtyři barvy, jeden svoz.
          </h2>
          <p className="ps-section__lede">
            Roztřiďte odpad podle víka nádoby — my se postaráme o zbytek. U
            každé frakce najdete, jak si sjednat nebo změnit svoz.
          </p>
        </div>

        <ul className="ps-bins">
          {svozy.map((s) => (
            <li className="ps-bin" key={s.tag} style={{ ["--bin" as any]: s.color }}>
              <span className="ps-bin__tag">{s.tag}</span>
              <h3 className="ps-bin__title">{s.fraction}</h3>
              <p className="ps-bin__lede">{s.lede}</p>
              <a className="ps-bin__link" href="#odpady">
                {s.action}
                <span aria-hidden="true">→</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="ps-zevo">
          <img
            className="ps-zevo__img"
            src="/section-1.webp"
            alt="Zařízení na energetické využití odpadu ZEVO Malešice"
          />
          <div className="ps-zevo__body">
            <p className="ps-eyebrow ps-eyebrow--dark">ZEVO Malešice</p>
            <h3 className="ps-zevo__title">Co se nedá vytřídit, hřeje.</h3>
            <p>
              Spalovna v Malešicích promění směsný odpad na teplo a elektřinu.
              Aktuální emise zveřejňujeme online, pro firmy nad 50 tun máme
              smluvní příjem a školy vodíme dovnitř na exkurze.
            </p>
            <div className="ps-zevo__links">
              <a href="#odpady">Aktuální emise ZEVO</a>
              <a href="#odpady">Objednat likvidaci online</a>
              <a href="#odpady">Exkurze do spalovny</a>
            </div>
          </div>
        </div>
      </section>

      <section className="ps-section ps-mesto" id="o-nas" aria-labelledby="mesto-h">
        <div className="ps-mesto__grid">
          <div className="ps-mesto__intro">
            <p className="ps-eyebrow ps-eyebrow--dark">Druhá největší městská firma</p>
            <h2 id="mesto-h" className="ps-h2">
              Praha se na nás<br />spolehne každý den.
            </h2>
            <p className="ps-section__lede">
              Odpady, zimní i letní údržba komunikací, čerpací stanice i
              dopravní značení. Držíme město v provozu — v teple i v mrazu,
              o víkendu i o svátcích.
            </p>
            <img
              className="ps-mesto__img"
              src="/section-2.webp"
              alt="Sypač Pražských služeb při zimní údržbě zasněžené pražské komunikace"
            />
          </div>

          <div className="ps-mesto__news">
            <p className="ps-eyebrow ps-eyebrow--dark">Poslední aktuality</p>
            <ol className="ps-news">
              {novinky.map((n) => (
                <li className="ps-news__item" key={n.title}>
                  <time className="ps-news__date">{n.date}</time>
                  <h3 className="ps-news__title">{n.title}</h3>
                  <p className="ps-news__text">{n.text}</p>
                </li>
              ))}
            </ol>
            <a className="ps-btn ps-btn--dark" href="#o-nas">
              Všechny novinky
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

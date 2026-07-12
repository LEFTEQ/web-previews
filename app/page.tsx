import React from "react";

const services = [
  {
    id: "01",
    title: "Kompletní rekonstrukce",
    text: "Byt, dům i kancelář od první bourané příčky po poslední lištu. Jeden tým, jedna smlouva, jeden termín — nemusíte shánět další řemeslníky.",
  },
  {
    id: "02",
    title: "Zednické a obkladačské práce",
    text: "Nová bytová jádra, příčky z Ytongu, Porothermu nebo sádrokartonu, omítky, štuk a obklady koupelen s milimetrovou spárou.",
  },
  {
    id: "03",
    title: "Truhlářství na míru",
    text: "Kuchyňské linky přesně do vašeho prostoru — od malé sestavy po plnohodnotnou kuchyň. Od návrhu po montáž vše u nás.",
  },
  {
    id: "04",
    title: "Sádrokarton a podhledy",
    text: "Příčky, podhledy i světelné rampy s LED pásky. Čistý design, precizní hrany, ukrytá elektrika.",
  },
  {
    id: "05",
    title: "Podlahy",
    text: "Betonový podklad, samonivelační stěrka a pokládka dřeva, laminátu, vinylu i koberců. Rovina, na kterou se dá spolehnout.",
  },
  {
    id: "06",
    title: "Fasáda a zateplení",
    text: "Zateplení a nátěry fasád — samostatně, nebo jako součást renovace celého domu.",
  },
  {
    id: "07",
    title: "Topení a voda",
    text: "Kompletní instalatérské a topenářské práce. Nové rozvody, radiátory, podlahové topení — s revizí.",
  },
  {
    id: "08",
    title: "Elektroinstalace",
    text: "Kompletní silnoproud i slaboproud, nový rozvaděč, zásuvky tam, kde je skutečně potřebujete.",
  },
];

const promises = [
  {
    k: "Rozpočet zdarma",
    v: "Zaměříme prostor a připravíme přesnou cenu podle vašich představ — bez závazku a bez skrytých položek.",
  },
  {
    k: "3D vizualizace zdarma",
    v: "Při realizaci u nás uvidíte hotový interiér dřív, než padne první rána kladivem. Návrh upravíme, dokud nesedí.",
  },
  {
    k: "Náhradní bydlení v Praze",
    v: "Jako jediní vám na dobu rekonstrukce zajistíme, kde bydlet — včetně kompletního stěhování.",
  },
  {
    k: "Termíny, které platí",
    v: "Domluvený termín je závazek, ne odhad. Desítky dokončených bytů od roku 2011 to potvrzují.",
  },
];

export default function Page() {
  return (
    <main className="pr">
      <header className="pr-top">
        <a href="#" className="pr-wordmark" aria-label="Pražské rekonstrukce, úvod">
          <span className="pr-wm-1">PRAŽSKÉ</span>
          <span className="pr-wm-2">rekonstrukce</span>
        </a>
        <nav className="pr-nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#duvera">Proč my</a>
          <a className="pr-tel" href="tel:+420737373273">737 373 273</a>
        </nav>
      </header>

      <section className="pr-hero">
        <div className="pr-hero-copy">
          <p className="pr-eyebrow">Rekonstrukce bytů &middot; Praha, od roku 2011</p>
          <h1 className="pr-h1">
            Ze starého bytu
            <span className="pr-h1-accent"> domov,</span>
            <br />ve kterém chcete zůstat.
          </h1>
          <p className="pr-lede">
            Bourání příček, nová koupelna, kuchyň na míru, elektrika i podlahy —
            jeden tým od zaměření po předání klíčů. V Praze a okolí.
          </p>
          <div className="pr-hero-cta">
            <a className="pr-btn" href="tel:+420737373273">Zavolat 737 373 273</a>
            <a className="pr-btn pr-btn-ghost" href="mailto:info@prazskerekonstrukce.cz">
              Napsat pro rozpočet
            </a>
          </div>
        </div>

        <figure className="pr-hero-fig">
          <img
            src="/hero.webp"
            alt="Dokončená rekonstrukce bytu v Praze — nová koupelna a obytný prostor"
            width={1200}
            height={1500}
            loading="eager"
            decoding="async"
          />
          <figcaption className="pr-tag">
            <span>Náhradní bydlení po dobu prací</span>
            <em>zajistíme</em>
          </figcaption>
        </figure>
      </section>

      <section id="sluzby" className="pr-sluzby" aria-labelledby="sluzby-h">
        <div className="pr-sec-head">
          <p className="pr-eyebrow">Osm profesí, jedna faktura</p>
          <h2 id="sluzby-h" className="pr-h2">Co všechno uděláme</h2>
          <p className="pr-sec-note">
            Nemusíte koordinovat zedníka, elektrikáře a truhláře zvlášť. Vše
            zvládneme sami — a když jednu část posuneme, posune se s ní i harmonogram zbytku.
          </p>
        </div>

        <ol className="pr-list">
          {services.map((s) => (
            <li key={s.id} className="pr-item">
              <span className="pr-item-no" aria-hidden="true">{s.id}</span>
              <div className="pr-item-body">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="pr-band">
          <img
            src="/section-1.webp"
            alt="Detail obkladačských prací v koupelně — přesná spára"
            width={1600}
            height={900}
            loading="lazy"
            decoding="async"
          />
        </figure>
      </section>

      <section id="duvera" className="pr-duvera" aria-labelledby="duvera-h">
        <div className="pr-duvera-grid">
          <div className="pr-duvera-copy">
            <p className="pr-eyebrow">Proč svěřit rekonstrukci nám</p>
            <h2 id="duvera-h" className="pr-h2">
              Velký krok. My z něj uděláme
              <span className="pr-h1-accent"> klidnou</span> zkušenost.
            </h2>
            <p className="pr-sec-note">
              Jsme parta řemeslníků z Prahy 4 &ndash; Lhotky. Staré prostory
              měníme na funkční a hezké domovy, jednáme férově a otevřeně a
              každý detail ladíme, dokud nesedí.
            </p>

            <dl className="pr-promises">
              {promises.map((p) => (
                <div key={p.k} className="pr-promise">
                  <dt>{p.k}</dt>
                  <dd>{p.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <figure className="pr-duvera-fig">
            <img
              src="/section-2.webp"
              alt="Realizace kompletní rekonstrukce bytu v Praze"
              width={1200}
              height={1400}
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <strong>Desítky dokončených bytů</strong>
              <span>Klienti nás doporučují dál.</span>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}

import type { ReactElement } from "react";

const SLUZBY = [
  {
    num: "01",
    name: "Soukromé stěhování",
    desc: "Byty i rodinné domy. Nábytek rozebereme, převezeme a na místě zase složíme — vy jen odemknete nové dveře.",
  },
  {
    num: "02",
    name: "Firemní stěhování",
    desc: "Kanceláře a provozy přestěhujeme s minimálním výpadkem, klidně přes víkend nebo přes noc.",
  },
  {
    num: "03",
    name: "Vyklízení",
    desc: "Vyklidíme byt, sklep i pozůstalost. Co je k ničemu, roztřídíme a odvezeme na sběrný dvůr.",
  },
  {
    num: "04",
    name: "Uskladnění",
    desc: "Nábytek a krabice bezpečně uložíme na dobu, než budete mít kam. Přesně tolik místa, kolik potřebujete.",
  },
  {
    num: "05",
    name: "Likvidace domácnosti",
    desc: "Kompletně vyklidíme celou domácnost a předáme prázdný, uklizený byt majiteli.",
  },
  {
    num: "06",
    name: "Stěhovací materiál",
    desc: "Krabice, bublinkovou fólii, pásky a přepravní deky přivezeme s sebou. Nemusíte nic shánět předem.",
  },
];

const REFERENCE = [
  {
    text: "Nejlepší stěhováci. Pokaždé spolehliví, rychlí a cenově úplně v pohodě. Je neuvěřitelné, kolik toho ti sympatičtí pánové unesou najednou.",
    name: "Sabrina S.",
    meta: "opakovaný zákazník",
  },
  {
    text: "Skvělá parta. Naše stěhování na 300 km i s demontáží a montáží nábytku zvládli hladce během jediného dne.",
    name: "Norbert D.",
    meta: "300 km · 1 den",
  },
  {
    text: "Opravdoví profíci. Měli jsme obrovské množství věcí — všechno pečlivě zabalili, převezli, vyložili a zase složili. Naprostá spokojenost.",
    name: "Maximilian K.",
    meta: "velký objem · balení",
  },
  {
    text: "Rychlí, milí a přesní. Po stěhování nebylo nic poškozené a cena byla od začátku férová a jasná.",
    name: "Michael M.",
    meta: "bez poškození",
  },
];

const TRASA = ["Františkovy Lázně", "Bayreuth", "Weiden", "celá Evropa"];

export default function Page(): ReactElement {
  return (
    <>
      <header className="site-head">
        <a className="wordmark" href="#top">
          <span className="wm-main">
            Express<em>Umzug</em>
          </span>
          <span className="wm-sub mono">s.r.o. · stěhování · Františkovy Lázně</span>
        </a>
        <a className="head-phone mono" href="tel:+4996120648179">
          +49 961 206 481 79
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-label="Úvod">
          <div className="hero-media">
            <img
              src="/hero.webp"
              alt="Stěhovací vůz Express Umzug připravený k naložení nábytku"
              width={1600}
              height={1000}
            />
            <span className="hero-scrim" aria-hidden="true" />
          </div>

          <div className="hero-inner">
            <p className="eyebrow mono">Stěhování · ČR &#8596; Německo &#8596; Evropa</p>
            <h1>
              Přestěhujeme vás<br />
              <span className="h1-red">přes hranici.</span><br />
              I 300 km za jeden den.
            </h1>
            <p className="hero-lead">
              Soukromé i firemní stěhování z Františkových Lázní po celém Německu a Evropě.
              Zabalíme, naložíme, převezeme a nábytek zase složíme. Vy se jen nastěhujete.
            </p>
            <div className="hero-cta">
              <a className="btn-primary" href="tel:+4996120648179">
                Chci nezávaznou nabídku
              </a>
              <a className="btn-ghost mono" href="tel:+4996120648179">
                Zavolat +49 961 206 481 79
              </a>
            </div>
          </div>

          <div className="route" aria-label="Kam stěhujeme">
            <span className="route-label mono">Trasa</span>
            <ol className="route-line">
              {TRASA.map((mesto, i) => (
                <li key={mesto} className="route-stop">
                  <span className="route-pin" aria-hidden="true" />
                  <span className="route-name mono">{mesto}</span>
                  {i < TRASA.length - 1 && (
                    <span className="route-dash" aria-hidden="true" />
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="services" aria-labelledby="services-title">
          <div className="sec-head">
            <p className="label mono">01 / Nabídka</p>
            <h2 id="services-title">Co všechno odstěhujeme</h2>
            <p className="sec-intro">
              Jeden tým na celé stěhování. Od zabalení poslední skleničky po sešroubování
              postele v novém bytě — postaráme se o všechno, co je mezi tím.
            </p>
          </div>

          <div className="services-grid">
            <figure className="sec-figure">
              <img
                src="/section-1.webp"
                alt="Stěhováci Express Umzug nakládají zabalený nábytek a krabice do vozu"
                width={1200}
                height={1400}
                loading="lazy"
              />
              <figcaption className="mono">Balení · nakládka · montáž</figcaption>
            </figure>

            <ol className="manifest">
              {SLUZBY.map((s) => (
                <li key={s.num} className="mrow">
                  <span className="mnum mono">{s.num}</span>
                  <div className="mtext">
                    <h3>{s.name}</h3>
                    <p>{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="reference" aria-labelledby="ref-title">
          <div className="ref-top">
            <div className="sec-head">
              <p className="label mono">02 / Reference</p>
              <h2 id="ref-title">Koho jsme už přestěhovali</h2>
              <p className="sec-intro">
                Spolehlivá firma pro profesionální stěhování — ať už přesouváte kancelář,
                nebo celou domácnost. Vše bereme do rukou s maximální péčí a jsme vám osobně
                k dispozici. Spolehněte se na naše zkušenosti a stěhujte se bez stresu.
              </p>
            </div>
            <figure className="ref-figure">
              <img
                src="/section-2.webp"
                alt="Tým Express Umzug u naloženého stěhovacího vozu"
                width={1200}
                height={900}
                loading="lazy"
              />
            </figure>
          </div>

          <ul className="tags">
            {REFERENCE.map((r) => (
              <li key={r.name} className="tag">
                <span className="tag-hole" aria-hidden="true" />
                <div className="tag-body">
                  <p className="stars" aria-label="Hodnocení 5 z 5">
                    <span aria-hidden="true">★★★★★</span>
                  </p>
                  <blockquote>{r.text}</blockquote>
                  <p className="tag-cite">
                    <span className="tag-name">{r.name}</span>
                    <span className="tag-meta mono">{r.meta}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

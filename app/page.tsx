import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      code: "01",
      name: "Byty a domy",
      desc: "Zabalíme, sneseme a naložíme celou domácnost. Nábytek rozebereme a zase složíme na novém místě.",
    },
    {
      code: "02",
      name: "Firmy a kanceláře",
      desc: "Přestěhujeme kancelář o víkendu, aby vám v pondělí běžel provoz jako by se nechumelilo.",
    },
    {
      code: "03",
      name: "Těžká břemena",
      desc: "Trezory, klavíry, stroje. Máme lidi i techniku na to, co běžný stěhovák nezvedne.",
    },
    {
      code: "04",
      name: "Vyklízení",
      desc: "Vyklidíme sklep, půdu i celý byt a odvezeme do sběrného dvora. Zůstane po nás jen prázdno.",
    },
    {
      code: "05",
      name: "Obalový materiál",
      desc: "Krabice, bublinková fólie, popruhy. Dovezeme, kolik potřebujete, a nespotřebované vrátíme.",
    },
    {
      code: "06",
      name: "Auto s řidičem",
      desc: "Potřebujete jen dodávku a pár rukou navíc? Pronajmeme auto i s posádkou na hodiny.",
    },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Stěhujeme – Hned, úvod">
          <span className="wordmark__stehujeme">Stěhujeme</span>
          <span className="wordmark__hned">
            <span className="wordmark__dash" aria-hidden="true" />
            Hned
          </span>
        </a>
        <a className="topbar__phone" href="tel:+420736104526">
          <span className="topbar__phoneLabel">Zavolejte</span>
          <span className="topbar__phoneNumber">736 104 526</span>
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__frame">
          <img
            className="hero__img"
            src="/hero.webp"
            alt="Stěhováci Stěhujeme – Hned nakládají nábytek do dodávky"
            width={1200}
            height={900}
          />
          <div className="hero__eta" aria-hidden="true">
            <span className="hero__etaWord">HNED</span>
          </div>
        </div>

        <div className="hero__text">
          <p className="hero__eyebrow">Ostrava · Havířov · Karviná · celá ČR</p>
          <h1 className="hero__title" id="hero-title">
            Zavoláte ráno,
            <br />
            stěhujeme
            <span className="hero__accent"> ještě dnes.</span>
          </h1>
          <p className="hero__lead">
            Stěhovací firma z Ostravy-Hrabůvky. Proškolená posádka,
            plné pojištění do 3 milionů a auta, jejichž polohu vám kdykoli
            řekneme naživo. Bez skrytých příplatků, i o víkendu za stejnou cenu.
          </p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="tel:+420736104526">
              Zavolat 736 104 526
            </a>
            <a className="btn btn--ghost" href="#sluzby">
              Co stěhujeme
            </a>
          </div>
        </div>

        <ul className="hero__proof" aria-label="Proč my">
          <li className="hero__proofItem">
            <span className="hero__proofNum">3 mil.</span>
            <span className="hero__proofLabel">Kč pojištění na každou zakázku</span>
          </li>
          <li className="hero__proofItem">
            <span className="hero__proofNum">Živě</span>
            <span className="hero__proofLabel">poloha auta v reálném čase</span>
          </li>
          <li className="hero__proofItem">
            <span className="hero__proofNum">0 Kč</span>
            <span className="hero__proofLabel">prohlídka i příplatek za víkend</span>
          </li>
        </ul>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="services__head">
          <p className="section__kicker">Nabídka</p>
          <h2 className="services__title" id="services-title">
            Šest věcí, které za vás uneseme
          </h2>
          <p className="services__intro">
            Ať stěhujete garsonku, nebo výrobní halu, řešíte to s jedním
            týmem od zabalení první krabice po sešroubování poslední skříně.
          </p>
        </div>

        <ol className="services__list">
          {services.map((s) => (
            <li className="card" key={s.code}>
              <span className="card__code" aria-hidden="true">
                {s.code}
              </span>
              <h3 className="card__name">{s.name}</h3>
              <p className="card__desc">{s.desc}</p>
            </li>
          ))}
        </ol>

        <div className="services__figure">
          <img
            className="services__img"
            src="/section-1.webp"
            alt="Zabalený nábytek a krabice připravené na naložení do stěhovacího auta"
            width={1200}
            height={800}
          />
        </div>
      </section>

      <section className="trust" id="o-nas" aria-labelledby="trust-title">
        <div className="trust__media">
          <img
            className="trust__img"
            src="/section-2.webp"
            alt="Posádka stěhovací firmy Stěhujeme – Hned u dodávky"
            width={1000}
            height={1200}
          />
        </div>

        <div className="trust__body">
          <p className="section__kicker">Proč nám lidé věří</p>
          <h2 className="trust__title" id="trust-title">
            Cenu i polohu auta znáte předem
          </h2>
          <p className="trust__lead">
            Před stěhováním přijedeme zdarma prohlédnout, co vás čeká, a řekneme
            pevnou cenu — ne odhad, který na místě naroste. Během stěhování máte
            nad auty online dohled, takže víte, kde vaše věci právě jsou.
          </p>

          <dl className="trust__facts">
            <div className="trust__fact">
              <dt>Kde nás najdete</dt>
              <dd>Horní 1478/86, 700 30 Ostrava-jih-Hrabůvka</dd>
            </div>
            <div className="trust__fact">
              <dt>Kam dojedeme</dt>
              <dd>
                Ostrava, Havířov, Frýdek-Místek, Karviná, Orlová, Bohumín,
                Opava, Třinec — a po celé ČR
              </dd>
            </div>
            <div className="trust__fact">
              <dt>Napište nám</dt>
              <dd>
                <a href="mailto:stehujemehned@gmail.com">
                  stehujemehned@gmail.com
                </a>
              </dd>
            </div>
          </dl>

          <blockquote className="trust__quote">
            <p>
              „Objednal jsem v úterý, ve čtvrtek jsme byli přestěhovaní.
              Klavír snesli ze třetího patra bez jediného škrábance.“
            </p>
            <cite>— zákazník, hodnocení na Google</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}

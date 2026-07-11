import React from "react";

export default function Page() {
  return (
    <main className="page">
      {/* HERO — postaveno na tlakové zkoušce: voda pod tlakem, spoj, který drží */}
      <header className="hero">
        <div className="hero__img">
          <img
            src="/hero.webp"
            alt="Nová koupelna v Liberci od Aquatrend — obklady, sanitární technika a rozvody vody"
            className="hero__photo"
          />
          <div className="hero__scrim" aria-hidden="true" />
        </div>

        <div className="hero__inner">
          <div className="brand">
            <span className="brand__mark" aria-hidden="true">
              <span className="brand__drop" />
            </span>
            <span className="brand__word">
              aqua<strong>trend</strong>
            </span>
            <span className="brand__loc">Liberec</span>
          </div>

          <p className="hero__eyebrow">Voda · Topení · Plyn · Koupelny</p>
          <h1 className="hero__title">
            Spoj, který drží.
            <span className="hero__title-line">Tlak, který sedí.</span>
          </h1>
          <p className="hero__lede">
            Jeden tým na vodu, topení, plyn i obklady. Rozpočet a termín
            dostanete předem — na papíře, ne od oka. Přes 500 rekonstrukcí
            koupelen v Liberci a okolí.
          </p>

          <div className="hero__cta">
            <a className="btn btn--primary" href="tel:+420603149993">
              Zavolat 603 149 993
            </a>
            <a className="btn btn--ghost" href="mailto:info@aquatrend.cz">
              Chci nezávaznou kalkulaci
            </a>
          </div>

          {/* Manometr místo „velkého čísla“ — čte se tlak, ne marketing */}
          <dl className="gauge">
            <div className="gauge__item">
              <dt>Praxe</dt>
              <dd>30 let v oboru</dd>
            </div>
            <div className="gauge__item">
              <dt>Koupelny</dt>
              <dd>500+ rekonstrukcí</dd>
            </div>
            <div className="gauge__item">
              <dt>Rozpočet</dt>
              <dd>Předem, položkově</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* SEKCE 1 — služby jako větev rozvodů: co teče kudy */}
      <section className="work" aria-labelledby="work-title">
        <div className="work__head">
          <p className="section-eyebrow">Co u vás řešíme</p>
          <h2 id="work-title" className="section-title">
            Od stoupačky po poslední spáru
          </h2>
          <p className="section-lede">
            Specializace jsou koupelny, bytová jádra a byty. Navazující práce
            řešíme tak, aby na sebe plynule navazovaly — bez čekání mezi
            řemesly.
          </p>
        </div>

        <div className="work__grid">
          <article className="svc">
            <span className="svc__tag">Voda</span>
            <h3>Vodoinstalace</h3>
            <p>
              Výměny umyvadel, WC, van a baterií, bojlery, stoupačky i odpadní
              potrubí. Nová voda bez zbytečného bourání.
            </p>
          </article>
          <article className="svc">
            <span className="svc__tag">Teplo</span>
            <h3>Topení</h3>
            <p>
              Instalace kotlů, opravy topení a topenářské práce. Vytápění, které
              po zimě neproteče.
            </p>
          </article>
          <article className="svc">
            <span className="svc__tag">Plyn</span>
            <h3>Montáže plynovodů</h3>
            <p>
              Certifikované montáže domovních plynovodů v bytech i rodinných
              domech. S revizí a papíry, jak mají být.
            </p>
          </article>
          <article className="svc svc--wide">
            <span className="svc__tag">Koupelny</span>
            <h3>Rekonstrukce koupelen a bytových jader</h3>
            <p>
              Kompletně na klíč — od demolice jádra po poslední silikon. U
              koupelen připravíme 3D návrh, ať vidíte konkrétní dlažbu, vanu i
              umyvadlo dřív, než se začne bourat.
            </p>
          </article>
          <article className="svc">
            <span className="svc__tag">Voda</span>
            <h3>Úprava a filtrace vody</h3>
            <p>
              Filtrace pitné vody, změkčovače proti vodnímu kameni a reverzní
              osmóza do kuchyně.
            </p>
          </article>
          <article className="svc">
            <span className="svc__tag">Technologie</span>
            <h3>REMS — inspekce a čištění potrubí</h3>
            <p>
              Kamerová inspekce odpadů a profesionální proplach systémem
              MULTI-PUSH. Poruchu najdeme bez bourání zdi.
            </p>
          </article>
        </div>
      </section>

      {/* SEKCE 2 — důvěra: reference + postup jako uzavřený okruh */}
      <section className="trust" aria-labelledby="trust-title">
        <div className="trust__media">
          <img
            src="/section-1.webp"
            alt="Realizace koupelny v Liberci — obklady a dokončená sanitární technika"
            className="trust__photo"
          />
        </div>

        <div className="trust__body">
          <p className="section-eyebrow">Reference z Liberce a okolí</p>
          <h2 id="trust-title" className="section-title">
            Rozpočet na několik stránek — ať víte, co bude kolik stát
          </h2>

          <figure className="quote">
            <blockquote>
              „Většinu práce řešili vlastními zaměstnanci a pro to, co nedělají,
              doporučili prověřenou firmu. Ocenil jsem detailní, několikastránkový
              rozpočet — v každém momentu jsem věděl, co bude kolik stát. Změny
              byly vždy odsouhlaseny předem. Rozhodně doporučuji.“
            </blockquote>
            <figcaption>
              <span className="quote__name">Jiří Holoubek</span>
              <span className="quote__meta">Rekonstrukce · recenze na Google</span>
            </figcaption>
          </figure>

          <div className="rating">
            <span className="rating__score">5,0</span>
            <span className="rating__stars" aria-hidden="true">★★★★★</span>
            <span className="rating__label">z 12 recenzí na Google</span>
          </div>

          <img
            src="/section-2.webp"
            alt="Detail práce instalatérů Aquatrend — rozvody a napojení v koupelně"
            className="trust__inline"
          />
        </div>

        <ol className="flow" aria-label="Jak probíhá realizace">
          <li className="flow__step">
            <span className="flow__num">01</span>
            <div>
              <h3>Ozvete se</h3>
              <p>
                Zavoláte na 603 149 993 nebo napíšete na info@aquatrend.cz.
                Popíšeme postup a materiály.
              </p>
            </div>
          </li>
          <li className="flow__step">
            <span className="flow__num">02</span>
            <div>
              <h3>Návrh a rozpočet</h3>
              <p>
                U koupelen připravíme 3D návrh a položkový rozpočet. Znáte cenu i
                termín předem.
              </p>
            </div>
          </li>
          <li className="flow__step">
            <span className="flow__num">03</span>
            <div>
              <h3>Realizace jedním týmem</h3>
              <p>
                Voda, topení, plyn i obklady na sebe navazují bez prostojů.
                Předáme hotové a uklizené.
              </p>
            </div>
          </li>
        </ol>
      </section>
    </main>
  );
}

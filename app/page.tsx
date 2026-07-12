import React from "react";

export default function Page() {
  const listings = [
    {
      id: "01",
      type: "Rodinný dům 5+kk",
      place: "Hostěnice, Moravský kras",
      note: "Zahrada, klid, výhled do lesa",
      price: "Rezervováno",
      img: "/section-1.webp",
      status: "rezervace"
    },
    {
      id: "02",
      type: "Družstevní byt 3+1 s lodžií",
      place: "Vojtova, Brno-střed",
      note: "4. patro, revitalizovaný dům",
      price: "6 800 000 Kč",
      img: "/section-2.webp",
      status: "prodej"
    },
    {
      id: "03",
      type: "Cihlový byt 2+1 v OV",
      place: "Spolková, Brno-sever",
      note: "Pár minut od centra",
      price: "Rezervováno",
      img: "/hero.webp",
      status: "rezervace"
    }
  ];

  const steps = [
    {
      n: "1",
      h: "Sejdeme se u vás doma",
      p: "Projdeme nemovitost, zjistíme, o co vám jde, a řekneme si realistickou cenu — ne tu, kterou chcete slyšet, ale tu, za kterou se v Brně prodává."
    },
    {
      n: "2",
      h: "Připravíme a nafotíme",
      p: "Home staging, fotky, půdorys, energetický štítek, právní kontrola listu vlastnictví. Inzerát vypustíme, až je všechno bez chyby."
    },
    {
      n: "3",
      h: "Prodáme a předáme klíče",
      p: "Vedeme prohlídky, jednáme za vás o ceně, hlídáme smlouvy i úschovu peněz. Vy podepíšete a předáte klíče — zbytek je na nás."
    }
  ];

  return (
    <main className="page">
      <header className="nav" aria-label="Hlavní navigace">
        <a className="wordmark" href="#top" aria-label="HANÁK realitní kancelář, domů">
          <span className="wordmark__name">HANÁK</span>
          <span className="wordmark__sub">reality Brno</span>
        </a>
        <nav className="nav__links">
          <a href="#nabidka">Nabídka</a>
          <a href="#jak">Jak prodáváme</a>
          <a href="#onas">O nás</a>
        </nav>
        <a className="nav__call" href="tel:+420774221717">
          <span className="nav__calllabel">Zavolat</span>
          <span className="nav__callnum">774&nbsp;221&nbsp;717</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero__frame">
          <img
            className="hero__img"
            src="/hero.webp"
            alt="Klíč od nového domova v otevřené dlani — realitní kancelář HANÁK, Brno"
            width={1600}
            height={1100}
          />
          <span className="hero__stamp" aria-hidden="true">PŘÍKOP 4 · BRNO</span>
        </div>

        <div className="hero__text">
          <p className="hero__eyebrow">Realitní kancelář · Brno-město</p>
          <h1 className="hero__title">
            Bezpečnou cestou<br />
            <em>domů.</em>
          </h1>
          <p className="hero__lead">
            O realitách v Brně víme opravdu hodně — a hlídáme každý krok
            od první prohlídky až po předání klíčů. Prodej i koupě bytu,
            domu nebo pozemku tak, aby vás nic nezaskočilo.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="tel:+420774221717">
              Zavolat 774&nbsp;221&nbsp;717
            </a>
            <a className="btn btn--ghost" href="mailto:info@hanak-reality.cz">
              Napsat e-mail
            </a>
          </div>
          <ul className="hero__facts">
            <li><strong>Byty</strong> · v OV i družstevní</li>
            <li><strong>Rodinné domy</strong> · Brno a okolí</li>
            <li><strong>Pozemky</strong> · stavební i zahrady</li>
          </ul>
        </div>
      </section>

      <section className="listings" id="nabidka" aria-labelledby="nabidka-h">
        <div className="section-head">
          <p className="section-head__eyebrow">Aktuální nabídka</p>
          <h2 id="nabidka-h" className="section-head__title">
            Co teď v Brně nabízíme
          </h2>
          <p className="section-head__note">
            Tři nemovitosti z právě otevřených složek. Celý seznam vám
            projdeme na schůzce — ať už kupujete, nebo prodáváte.
          </p>
        </div>

        <ul className="cards">
          {listings.map((l) => (
            <li key={l.id} className="card">
              <div className="card__media">
                <img
                  src={l.img}
                  alt={`${l.type} — ${l.place}`}
                  width={800}
                  height={560}
                  loading="lazy"
                />
                <span className={`card__tag card__tag--${l.status}`}>
                  {l.status === "rezervace" ? "Rezervováno" : "K prodeji"}
                </span>
              </div>
              <div className="card__body">
                <span className="card__num">{l.id}</span>
                <h3 className="card__type">{l.type}</h3>
                <p className="card__place">{l.place}</p>
                <p className="card__note">{l.note}</p>
                <p className="card__price">{l.price}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="listings__cta">
          <a className="btn btn--primary" href="tel:+420774221717">
            Chci si nemovitost prohlédnout
          </a>
          <a className="btn btn--ghost" href="mailto:info@hanak-reality.cz">
            Chci prodat svou nemovitost
          </a>
        </div>
      </section>

      <section className="trust" id="jak" aria-labelledby="jak-h">
        <div className="trust__intro" id="onas">
          <p className="section-head__eyebrow">Jak to u nás chodí</p>
          <h2 id="jak-h" className="trust__title">
            Tři kroky, u kterých stojíme vedle vás
          </h2>
          <p className="trust__lead">
            Sídlíme na Příkopu v centru Brna a děláme reality tak, jak
            bychom je chtěli mít sami — s právní kontrolou, ověřenou
            úschovou peněz a člověkem, kterému se dovoláte.
          </p>
        </div>

        <ol className="steps">
          {steps.map((s) => (
            <li key={s.n} className="step">
              <span className="step__n" aria-hidden="true">{s.n}</span>
              <div className="step__text">
                <h3 className="step__h">{s.h}</h3>
                <p className="step__p">{s.p}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="trust__card">
          <p className="trust__quote">
            „S penězi kupujícího zacházíme jako s vlastními — proto
            používáme advokátní nebo notářskou úschovu a smlouvu
            vám vysvětlíme řádek po řádku.“
          </p>
          <p className="trust__sign">HANÁK realitní kancelář s.r.o. · Příkop 843/4, 602&nbsp;00 Brno</p>
        </div>
      </section>
    </main>
  );
}

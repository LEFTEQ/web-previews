import React from "react";

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Autoškola 97, Plzeň">
          <span className="wordmark__name">Autoškola</span>
          <span className="wordmark__plate">97</span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#kurzy">Kurzy</a>
          <a href="#duvera">Proč my</a>
          <a className="nav__cta" href="#kurzy">Přihlásit se</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Autoškola v Plzni · od roku 1997</p>
            <h1 className="hero__title">
              Za volant<br />
              <span className="hero__title-accent">bez stresu.</span>
            </h1>
            <p className="hero__lede">
              Naučíme vás řídit tak, abyste si věřili i v křižovatce U Práce ve
              špičce. Trpěliví instruktoři, jasný plán jízd a vozidla, na kterých
              se zkoušky v Plzni skutečně jezdí.
            </p>
            <div className="hero__actions">
              <a className="btn btn--solid" href="#kurzy">Chci se přihlásit</a>
              <a className="btn btn--ghost" href="#duvera">Jak to u nás chodí</a>
            </div>
            <dl className="hero__facts">
              <div>
                <dt>Skupina B</dt>
                <dd>osobní auto</dd>
              </div>
              <div>
                <dt>Plzeň-střed</dt>
                <dd>učebna i výcvik</dd>
              </div>
              <div>
                <dt>28 let</dt>
                <dd>na plzeňských silnicích</dd>
              </div>
            </dl>
          </div>
          <figure className="hero__media">
            <img
              src="/hero.webp"
              alt="Výcvikové vozidlo autoškoly připravené k jízdě v Plzni"
              className="hero__img"
              width={880}
              height={1040}
            />
            <figcaption className="hero__tag">
              <span className="hero__tag-label">Cvičná jízda</span>
              <span className="hero__tag-route">Bory → Slovany → centrum</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="kurzy" id="kurzy">
        <div className="section-head">
          <p className="eyebrow eyebrow--dark">Co u nás projedete</p>
          <h2 className="section-title">Od přihlášky ke zkoušce ve třech krocích</h2>
          <p className="section-sub">
            Žádné překvapení navíc. Víte předem, kolik jízd vás čeká, kde se
            učí teorie a kdy jedete na zkoušku na plzeňský magistrát.
          </p>
        </div>

        <ol className="steps">
          <li className="step">
            <span className="step__num">01</span>
            <h3 className="step__title">Teorie v učebně</h3>
            <p className="step__text">
              Předpisy, křižovatky a zdravověda srozumitelně, s testy nanečisto.
              Termíny večer po práci i o víkendu.
            </p>
            <span className="step__meta">skupina B · učebna v centru</span>
          </li>
          <li className="step">
            <span className="step__num">02</span>
            <h3 className="step__title">Jízdy s instruktorem</h3>
            <p className="step__text">
              Začínáme na klidných Borech, pak parkování, kruháče na Rondelu a
              provoz v centru. Jezdíte na trasách, kde probíhá zkouška.
            </p>
            <span className="step__meta">28 povinných jízd · vůz s dvojím řízením</span>
          </li>
          <li className="step">
            <span className="step__num">03</span>
            <h3 className="step__title">Zkouška a řidičák</h3>
            <p className="step__text">
              Přihlášku na zkoušku vyřídíme za vás. Pokud první pokus nevyjde,
              doplníme jízdy a jdete znovu bez zbytečného čekání.
            </p>
            <span className="step__meta">test z předpisů · jízda městem</span>
          </li>
        </ol>

        <figure className="kurzy__media">
          <img
            src="/section-1.webp"
            alt="Instruktor vysvětluje žákovi ovládání vozidla během výcviku"
            className="kurzy__img"
            width={1200}
            height={720}
          />
        </figure>
      </section>

      <section className="duvera" id="duvera">
        <div className="duvera__grid">
          <figure className="duvera__media">
            <img
              src="/section-2.webp"
              alt="Žák za volantem cvičného vozu autoškoly v plzeňském provozu"
              className="duvera__img"
              width={900}
              height={1080}
            />
          </figure>
          <div className="duvera__copy">
            <p className="eyebrow eyebrow--dark">Proč lidé v Plzni jezdí právě k nám</p>
            <h2 className="section-title">
              Instruktor, kterého poznáte jménem
            </h2>
            <p className="section-sub">
              Nejsme velká anonymní síť. Od první jízdy jezdíte se stejným
              instruktorem, který ví, na čem konkrétně potřebujete zabrat.
            </p>

            <ul className="reasons">
              <li>
                <span className="reasons__key">Stálý instruktor</span>
                <span className="reasons__val">
                  Žádné střídání každou jízdu. Jeden člověk, který vás dovede až
                  ke zkoušce.
                </span>
              </li>
              <li>
                <span className="reasons__key">Reálné plzeňské trasy</span>
                <span className="reasons__val">
                  Cvičíme přesně tam, kde se jezdí zkoušky — Rondel, Klatovská,
                  centrum i výjezd na dálnici.
                </span>
              </li>
              <li>
                <span className="reasons__key">Jasná cena předem</span>
                <span className="reasons__val">
                  Celková částka za kurz řekneme na začátku. Doplňkové jízdy jen
                  když je opravdu chcete.
                </span>
              </li>
            </ul>

            <figure className="quote">
              <blockquote>
                „Bála jsem se kruhových objezdů. Po pár jízdách na Rondelu mi to
                přišlo úplně přirozené — zkoušku jsem dala napoprvé.“
              </blockquote>
              <figcaption>Kateřina H. · absolventka, Slovany</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}

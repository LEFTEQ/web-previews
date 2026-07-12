import React from "react";

export default function Page() {
  return (
    <main className="kba">
      {/* HERO — postaven na hero.webp, cedule s cílem: odjezd z Českých Budějovic */}
      <header className="kba-hero">
        <div className="kba-hero__media">
          <img
            src="/hero.webp"
            alt="Zájezdový autobus K.B.A. Tour připravený k odjezdu z Českých Budějovic"
            className="kba-hero__img"
          />
          <div className="kba-hero__scrim" aria-hidden="true" />
        </div>

        <nav className="kba-nav" aria-label="Hlavní">
          <a className="kba-mark" href="#" aria-label="K.B.A. Tour — domů">
            <span className="kba-mark__code">KBA</span>
            <span className="kba-mark__word">Tour</span>
          </a>
          <ul className="kba-nav__links">
            <li><a href="#nabidka">Zájezdy</a></li>
            <li><a href="#doprava">Autobusová doprava</a></li>
            <li><a href="#o-nas">O nás</a></li>
          </ul>
        </nav>

        <div className="kba-hero__inner">
          <p className="kba-hero__eyebrow">Cestovní kancelář &middot; České Budějovice</p>
          <h1 className="kba-hero__title">
            Nástupní<br />
            místo:<br />
            <span className="kba-hero__accent">Budějovice</span>
          </h1>
          <p className="kba-hero__lead">
            Vlastní autobusy, řidiči, které znáte jménem, a zájezdy, kde nemusíte
            hlídat přestupy. Odjíždíme od vás — z jižních Čech k moři i do hor.
          </p>
          <div className="kba-hero__cta">
            <a className="kba-btn kba-btn--solid" href="#nabidka">Prohlédnout termíny</a>
            <a className="kba-btn kba-btn--ghost" href="#doprava">Objednat autobus</a>
          </div>
        </div>

        {/* Jízdenkový pruh — tři pevné údaje jako na palubní lístku */}
        <div className="kba-ticket" aria-label="Základní informace o odjezdu">
          <div className="kba-ticket__cell">
            <span className="kba-ticket__k">Odjezd</span>
            <span className="kba-ticket__v">Mercury &middot; ČB</span>
          </div>
          <div className="kba-ticket__cell">
            <span className="kba-ticket__k">Vozy</span>
            <span className="kba-ticket__v">Klimatizované</span>
          </div>
          <div className="kba-ticket__cell">
            <span className="kba-ticket__k">Na trhu od</span>
            <span className="kba-ticket__v">roku 1993</span>
          </div>
        </div>
      </header>

      {/* SEKCE 1 — NABÍDKA jako odjezdová tabule */}
      <section id="nabidka" className="kba-board" aria-labelledby="board-h">
        <div className="kba-board__head">
          <p className="kba-eyebrow">Odjezdová tabule</p>
          <h2 id="board-h" className="kba-h2">Kam s námi letos vyrazíte</h2>
          <p className="kba-board__note">
            Cena je za osobu včetně dopravy naším autobusem z Českých Budějovic.
            Termíny průběžně doplňujeme, u zájezdů poradíme osobně na pobočce.
          </p>
        </div>

        <ol className="kba-departures">
          <li className="kba-dep">
            <span className="kba-dep__time">06:30</span>
            <span className="kba-dep__dest">
              <strong>Chorvatsko — Makarská riviéra</strong>
              <span className="kba-dep__via">přes Linz &middot; noční přejezd &middot; 10 dní</span>
            </span>
            <span className="kba-dep__tag">Pobyt u moře</span>
            <span className="kba-dep__price">od 8 990 Kč</span>
          </li>
          <li className="kba-dep">
            <span className="kba-dep__time">05:00</span>
            <span className="kba-dep__dest">
              <strong>Itálie — Toskánsko a Florencie</strong>
              <span className="kba-dep__via">poznávací &middot; 5 dní &middot; průvodce</span>
            </span>
            <span className="kba-dep__tag">Poznávací</span>
            <span className="kba-dep__price">od 6 490 Kč</span>
          </li>
          <li className="kba-dep">
            <span className="kba-dep__time">07:15</span>
            <span className="kba-dep__dest">
              <strong>Rakouské Alpy — Dachstein</strong>
              <span className="kba-dep__via">jednodenní &middot; lanovka v ceně</span>
            </span>
            <span className="kba-dep__tag">Jednodenní</span>
            <span className="kba-dep__price">od 1 290 Kč</span>
          </li>
          <li className="kba-dep">
            <span className="kba-dep__time">08:00</span>
            <span className="kba-dep__dest">
              <strong>Adventní Vídeň</strong>
              <span className="kba-dep__via">jednodenní &middot; prosinec &middot; trhy</span>
            </span>
            <span className="kba-dep__tag">Adventní</span>
            <span className="kba-dep__price">od 990 Kč</span>
          </li>
        </ol>

        <figure className="kba-figure">
          <img
            src="/section-1.webp"
            alt="Cestující nastupují do autobusu K.B.A. Tour před cestou k moři"
            className="kba-figure__img"
          />
          <figcaption className="kba-figure__cap">
            Odbavení probíhá přímo u autobusu — kufr naloží řidič, vy jen nastoupíte.
          </figcaption>
        </figure>
      </section>

      {/* SEKCE 2 — DOPRAVA + O NÁS / důvěra */}
      <section id="doprava" className="kba-trust" aria-labelledby="trust-h">
        <div className="kba-trust__media">
          <img
            src="/section-2.webp"
            alt="Interiér klimatizovaného zájezdového autobusu K.B.A. Tour"
            className="kba-trust__img"
          />
        </div>

        <div className="kba-trust__body" id="o-nas">
          <p className="kba-eyebrow">Autobusová doprava &amp; o nás</p>
          <h2 id="trust-h" className="kba-h2">
            Vlastní autobusy znamenají, že za cestu ručíme my
          </h2>
          <p className="kba-trust__lead">
            K.B.A. Tour vozí jižní Čechy na výlety od roku 1993. Nejsme přeprodejce —
            máme vlastní vozový park i řidiče, takže když objednáte autobus na svatbu,
            firemní akci nebo školní výlet, jednáte přímo s tím, kdo pojede.
          </p>

          <dl className="kba-facts">
            <div className="kba-fact">
              <dt>Objednávková doprava</dt>
              <dd>Autobusy 8–57 míst, klimatizace, WC, USB. Řešíme svatby, školy, firmy i kluby.</dd>
            </div>
            <div className="kba-fact">
              <dt>Zájezdy s odjezdem z ČB</dt>
              <dd>Nemusíte se trmácet do Prahy. Nasednete v Budějovicích, vystoupíte na místě.</dd>
            </div>
            <div className="kba-fact">
              <dt>Pojištění záruky</dt>
              <dd>Jako cestovní kancelář jsme pojištěni proti úpadku — vaše peníze jsou v bezpečí.</dd>
            </div>
          </dl>

          <blockquote className="kba-quote">
            <p>
              „Jeli jsme s dětmi k moři a poprvé jsem se nebála přestupů — řidič nás
              vysadil přímo u apartmánu. Příště zase s nimi.“
            </p>
            <cite>Petra H., cestující na Makarskou</cite>
          </blockquote>

          <div className="kba-contact">
            <a className="kba-btn kba-btn--solid" href="tel:+420387000000">Zavolat na pobočku</a>
            <p className="kba-contact__addr">
              Pobočka OC Mercury, České Budějovice &middot; Po–Pá 9–17
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

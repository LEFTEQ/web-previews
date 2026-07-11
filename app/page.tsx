import React from "react";

export default function Page() {
  return (
    <main className="st">
      {/* HERO */}
      <header className="st-hero">
        <div className="st-hero__bg" aria-hidden="true">
          <img src="/hero.webp" alt="" className="st-hero__img" />
        </div>

        <nav className="st-nav" aria-label="Hlavní navigace">
          <a className="st-mark" href="#nahoru" aria-label="Stavotes Brno, úvod">
            <span className="st-mark__grain">STAVO</span><span className="st-mark__cut">TES</span>
          </a>
          <div className="st-nav__links">
            <a href="#sklad">Sortiment</a>
            <a href="#dilna">O dílně</a>
            <a className="st-nav__call" href="tel:+420774440469">+420 774 440 469</a>
          </div>
        </nav>

        <div className="st-hero__inner" id="nahoru">
          <p className="st-eyebrop">Velkosklad deskových materiálů · Brno · od 1993</p>
          <h1 className="st-hero__title">
            <span className="st-hero__line st-l1">Deska přijde</span>
            <span className="st-hero__line st-l2">celá.</span>
            <span className="st-hero__line st-l3">Odejde</span>
            <span className="st-hero__line st-l4"><em>naformátovaná</em>.</span>
          </h1>
          <p className="st-hero__lede">
            LTD Kronospan i Egger, překližky, MDF, HDF a OSB máme běžně skladem na
            Palackého třídě. Nařežeme na milimetr, olepíme hranu ABS a přivezeme až
            do vaší dílny. Vy tak řešíte nábytek, ne shánění materiálu.
          </p>
          <div className="st-hero__cta">
            <a className="st-btn" href="tel:+420541212389">Zavolat na prodejnu</a>
            <a className="st-btn st-btn--ghost" href="#sklad">Co vezeme skladem</a>
          </div>

          <dl className="st-hero__facts">
            <div>
              <dt>Otevřeno</dt>
              <dd>Po–Pá 7:00–15:30</dd>
            </div>
            <div>
              <dt>Na trhu</dt>
              <dd>od roku 1993</dd>
            </div>
            <div>
              <dt>Kde</dt>
              <dd>Palackého tř. 178, Brno</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* SEKCE 1 — SORTIMENT jako řezový plán */}
      <section className="st-sec st-sklad" id="sklad">
        <div className="st-sec__head">
          <p className="st-kicker">Sortiment</p>
          <h2 className="st-h2">Celý ponk z jednoho místa</h2>
          <p className="st-sec__intro">
            Nemusíte objíždět tři dodavatele. Desky, hrany, kování i spojovací
            materiál naskladňujeme tak, aby truhlář v Brně a okolí dorazil ráno
            a odjel s hotovým nákladem.
          </p>
        </div>

        <div className="st-sklad__grid">
          <article className="st-card st-card--wide">
            <span className="st-card__no">01</span>
            <h3>Deskové materiály</h3>
            <p>
              Laminované DTD Kronospan a Egger, dřevotříska surová i dýhovaná,
              překližky včetně vodovzdorných, desky MDF a HDF, OSB a pracovní
              desky Postforming. K nim ladíce zástěny, akulit, hobru a sololak.
            </p>
            <ul className="st-tags">
              <li>LTD Kronospan</li><li>LTD Egger</li><li>Překližka</li>
              <li>MDF · HDF</li><li>OSB</li><li>Postforming</li>
            </ul>
          </article>

          <article className="st-card">
            <span className="st-card__no">02</span>
            <h3>Kování a spojování</h3>
            <p>
              Kování Blum a FGV, vruty, spojovací šrouby a krytky, brusivo,
              pilové kotouče i dřezy Franke. Drobnosti, na kterých zakázka stojí.
            </p>
          </article>

          <article className="st-card">
            <span className="st-card__no">03</span>
            <h3>Hrany ABS</h3>
            <p>
              Olepení hran ABS na míru desky. Barevně sedne k dekoru, hrana drží
              a nekouká z ní lepidlo.
            </p>
          </article>

          <article className="st-card st-card--img">
            <img src="/section-1.webp" alt="Skladem naskladněné deskové materiály pro výrobu nábytku ve velkoskladu Stavotes v Brně" />
          </article>
        </div>

        <div className="st-service">
          <p className="st-service__label">A ještě než deska opustí sklad:</p>
          <ul className="st-service__list">
            <li><strong>Formátování</strong> velkoplošných desek na přesný rozměr</li>
            <li><strong>Olepení hran</strong> ABS v barvě dekoru</li>
            <li><strong>Rozvoz</strong> až do vaší dílny</li>
            <li><strong>Broušení</strong> vašich nástrojů</li>
          </ul>
        </div>
      </section>

      {/* SEKCE 2 — DÍLNA / DŮVĚRA */}
      <section className="st-sec st-dilna" id="dilna">
        <div className="st-dilna__media">
          <img src="/section-2.webp" alt="Zakázková výroba nábytku na míru v truhlářské dílně Stavotes" />
        </div>
        <div className="st-dilna__body">
          <p className="st-kicker st-kicker--light">O nás · od 1993</p>
          <h2 className="st-h2 st-h2--light">Třicet let stejná adresa v Brně</h2>
          <p>
            Stavotes vznikl v roce 1993 a od té doby zásobuje truhláře a
            nábytkářské dílny na Palackého třídě. Za tu dobu víme, který dekor
            drží barvu, která překližka snese vlhko a co si truhlář nechce
            vézt přes půl kraje. Stálým odběratelům počítáme množstevní slevy.
          </p>
          <p>
            Chcete nábytek přímo na míru? Vyrobíme ho podle vašich představ —
            u individuální zakázky předem řekneme termín, cenu i podmínky
            dodání, žádná překvapení na faktuře.
          </p>

          <ul className="st-proof">
            <li>
              <span className="st-proof__k">Odborné poradenство</span>
              <span className="st-proof__v">Personál poradí s výběrem materiálu na prodejně</span>
            </li>
            <li>
              <span className="st-proof__k">Skladem</span>
              <span className="st-proof__v">Materiál běžně naskladněn, zakázku dodáme za daných podmínek</span>
            </li>
            <li>
              <span className="st-proof__k">Kde nás najdete</span>
              <span className="st-proof__v">Palackého třída 1771/178, 612 00 Brno</span>
            </li>
          </ul>

          <div className="st-dilna__cta">
            <a className="st-btn st-btn--onlight" href="tel:+420541212389">Zavolat: 541 212 389</a>
            <a className="st-btn st-btn--linklight" href="mailto:info@stavotes.cz">info@stavotes.cz</a>
          </div>
        </div>
      </section>
    </main>
  );
}

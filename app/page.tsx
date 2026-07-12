import React from "react";

export default function Page() {
  return (
    <main className="ps">
      {/* HERO — postaveno na řezu sádrokartonu: profil, deska, šroub */}
      <header className="ps-hero">
        <div className="ps-hero__grid">
          <div className="ps-hero__text">
            <p className="ps-eyebrow">Sádrokartonáři · Praha a okolí</p>
            <h1 className="ps-wordmark">
              <span className="ps-wordmark__portal">PORTAL</span>
              <span className="ps-wordmark__stav">STAV</span>
            </h1>
            <p className="ps-lede">
              Rovné stěny, čisté podhledy a příčky, které drží. Postavíme vám
              nový prostor ze sádrokartonu — od jednoduché předsazené stěny
              po kompletní rekonstrukci bytu na klíč.
            </p>
            <div className="ps-hero__cta">
              <a className="ps-btn ps-btn--solid" href="tel:+420773681440">
                Zavolat 773 681 440
              </a>
              <a className="ps-btn ps-btn--ghost" href="mailto:portal-stav@seznam.cz">
                Poslat půdorys na míru
              </a>
            </div>
            <dl className="ps-hero__facts">
              <div><dt>Zkušenost</dt><dd>12 let na pražských stavbách</dd></div>
              <div><dt>Záruka</dt><dd>až 5 let, smluvně</dd></div>
              <div><dt>Hodnocení</dt><dd>4,9 / 5 na NejŘemeslníci</dd></div>
            </dl>
          </div>

          <figure className="ps-hero__figure">
            <img
              src="/hero.webp"
              alt="Sádrokartonová konstrukce v rozestavěném pražském bytě — hotové příčky a zavěšený podhled"
              className="ps-hero__img"
            />
            <figcaption className="ps-hero__caption">
              Realizace na klíč, Praha 4
            </figcaption>
          </figure>
        </div>

        {/* Signature: měřicí lišta odvozená z rastru sádrokartonových profilů á 62,5 cm */}
        <div className="ps-ruler" aria-hidden="true">
          <span>0</span><span>62,5</span><span>125</span><span>187,5</span><span>250 cm</span>
        </div>
      </header>

      {/* SEKCE 1 — co postavíme, řazeno podle skladby stavby zdola nahoru */}
      <section className="ps-services" aria-labelledby="sluzby-nadpis">
        <div className="ps-section-head">
          <p className="ps-eyebrow">Co u vás postavíme</p>
          <h2 id="sluzby-nadpis">Sádrokarton od profilu po finální stěrku</h2>
          <p className="ps-section-lede">
            Pracujeme s deskami Rigips a Knauf, ocelovými CW/UW profily a
            protipožární i sádrovláknitou variantou tam, kde to dává smysl.
            Vyberte, co potřebujete — cenu spočítáme přesně po prohlídce zdarma.
          </p>
        </div>

        <ol className="ps-services__list">
          <li className="ps-service">
            <span className="ps-service__no">01</span>
            <h3>Příčky a předsazené stěny</h3>
            <p>
              Jednoduše i dvojitě opláštěné příčky s izolací proti hluku.
              Rozdělíme byt na místnosti bez mokrého procesu a nepořádku zdiva.
            </p>
          </li>
          <li className="ps-service">
            <span className="ps-service__no">02</span>
            <h3>Zavěšené podhledy</h3>
            <p>
              Rovný strop, ukryté rozvody a připravené výklenky pro LED pásky.
              Snížíme strop tam, kde vede vzduchotechnika nebo klimatizace.
            </p>
          </li>
          <li className="ps-service">
            <span className="ps-service__no">03</span>
            <h3>Koupelny a mokré provozy</h3>
            <p>
              Impregnovaná zelená deska, hydroizolace pod obklad, výklenky pro
              sanitu. Základ, na který přijde dlažba bez prasklin.
            </p>
          </li>
          <li className="ps-service">
            <span className="ps-service__no">04</span>
            <h3>Stěrky a finální povrch</h3>
            <p>
              Přetmelení spár, přebroušení a stěrka Q3 / Q4 — stěna připravená
              přímo pod malbu nebo tapetu, bez viditelných hlaviček šroubů.
            </p>
          </li>
        </ol>
      </section>

      {/* SEKCE 2 — důvěra a reference */}
      <section className="ps-trust" aria-labelledby="duvera-nadpis">
        <div className="ps-trust__media">
          <img
            src="/section-1.webp"
            alt="Dokončený zavěšený sádrokartonový podhled s LED osvětlením v bytě"
            className="ps-trust__img"
          />
          <img
            src="/section-2.webp"
            alt="Rekonstruovaná koupelna se sádrokartonovými výklenky a obklady"
            className="ps-trust__img ps-trust__img--small"
          />
        </div>

        <div className="ps-trust__body">
          <p className="ps-eyebrow">Proč lidé volají zrovna nás</p>
          <h2 id="duvera-nadpis">Řemeslo, které po nás nemusíte předělávat</h2>
          <p className="ps-section-lede">
            Jsme parta pražských sádrokartonářů z firmy PORTAL STAV. Přijedeme,
            zaměříme, řekneme rovnou termín i cenu a po sobě uklidíme. Žádné
            zálohy na materiál, který nevidíte.
          </p>

          <ul className="ps-trust__points">
            <li><strong>Termín ve smlouvě.</strong> Datum dokončení podepíšeme, ne slíbíme.</li>
            <li><strong>Záruka až 5 let.</strong> Na práci i skladbu konstrukce.</li>
            <li><strong>Uklidíme po sobě.</strong> Odvoz suti a úklid jsou součástí.</li>
          </ul>

          <div className="ps-refs">
            <figure className="ps-ref">
              <blockquote>
                „Byt 2+kk na Praze 4 předělali za dva a půl týdne. Nové příčky
                jsou rovné jako podle pravítka a sedělo to na korunu.“
              </blockquote>
              <figcaption>Realizace — byt 2+kk, Praha 4</figcaption>
            </figure>
            <ul className="ps-refs__list">
              <li><span>Koupelna</span> Praha 5</li>
              <li><span>Podhledy</span> Praha 4</li>
              <li><span>Novostavba RD</span> Písek</li>
            </ul>
            <p className="ps-refs__badge">Ověřeno · NejŘemeslníci.cz · 4,9 / 5</p>
          </div>
        </div>
      </section>
    </main>
  );
}

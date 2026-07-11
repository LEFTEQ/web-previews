import React from "react";

export default function Page() {
  return (
    <main className="vb">
      {/* HERO */}
      <header className="vb-hero">
        <nav className="vb-nav" aria-label="Hlavní">
          <a className="vb-mark" href="#" aria-label="Very Berry — papírnictví Pardubice">
            <span className="vb-mark__very">Very</span>
            <span className="vb-mark__berry">Berry
              <span className="vb-mark__dot" aria-hidden="true" />
            </span>
          </a>
          <ul className="vb-nav__links">
            <li><a href="#sortiment">Sortiment</a></li>
            <li><a href="#onas">Kamenný obchod</a></li>
            <li><a className="vb-nav__cta" href="#sortiment">Do obchodu</a></li>
          </ul>
        </nav>

        <div className="vb-hero__grid">
          <div className="vb-hero__copy">
            <p className="vb-eyebrow">Papírnictví · Pardubice, třída Míru</p>
            <h1 className="vb-hero__title">
              Dobrý papír<br />
              <span className="vb-hero__accent">svádí</span> k psaní.
            </h1>
            <p className="vb-hero__lede">
              Tečkované zápisníky, plnicí pera, kvalitní inkousty a razítka, která
              vydrží déle než dobré předsevzetí. Vybíráme kousky, ke kterým se budete
              vracet — od japonského papíru po tuhy 2B.
            </p>
            <div className="vb-hero__actions">
              <a className="vb-btn vb-btn--solid" href="#sortiment">Prohlédnout sortiment</a>
              <a className="vb-btn vb-btn--ghost" href="#onas">Najít nás v Pardubicích</a>
            </div>
            <dl className="vb-hero__facts">
              <div><dt>Značek</dt><dd>140+</dd></div>
              <div><dt>Zápisníků skladem</dt><dd>60&nbsp;druhů</dd></div>
              <div><dt>V centru města</dt><dd>od 2009</dd></div>
            </dl>
          </div>

          <figure className="vb-hero__figure">
            <img
              src="/hero.webp"
              alt="Otevřený tečkovaný zápisník s plnicím perem, pastelkami a razítky na pracovním stole"
              width={900}
              height={1100}
              loading="eager"
            />
            <figcaption className="vb-hero__tag">Rozepsáno &amp; nedopsáno</figcaption>
          </figure>
        </div>
      </header>

      {/* SORTIMENT */}
      <section id="sortiment" className="vb-sec vb-sortiment" aria-labelledby="sortiment-h">
        <div className="vb-sec__head">
          <p className="vb-eyebrow">Co u nás najdete</p>
          <h2 id="sortiment-h" className="vb-sec__title">Regály roztříděné podle chuti psát</h2>
          <p className="vb-sec__intro">
            Neprodáváme všechno — prodáváme to, co sami rádi držíme v ruce. Každý
            kus si u nás můžete osahat, vyzkoušet stopu pera i vůni papíru.
          </p>
        </div>

        <ul className="vb-cards">
          <li className="vb-card">
            <span className="vb-card__no">01</span>
            <h3>Zápisníky &amp; diáře</h3>
            <p>Tečkované, linkované i čisté. Leuchtturm1917, japonský Midori,
            šité vazby na ležato. Ke každému doporučíme papír podle vašeho pera.</p>
            <span className="vb-card__meta">od 189&nbsp;Kč</span>
          </li>
          <li className="vb-card">
            <span className="vb-card__no">02</span>
            <h3>Plnicí pera &amp; inkousty</h3>
            <p>Pera Lamy, Kaweco i Pilot, lahvičkové inkousty ve víc než třiceti
            odstínech. Hrot si u pultu vyzkoušíte na testovacím papíru.</p>
            <span className="vb-card__meta">stopa EF–B</span>
          </li>
          <li className="vb-card">
            <span className="vb-card__no">03</span>
            <h3>Razítka &amp; pečeti</h3>
            <p>Dřevěná razítka, motivy pro plánovače i pečetní vosk a mosazné
            typáře. Uděláme i razítko s vaším jménem nebo adresou na míru.</p>
            <span className="vb-card__meta">na míru do 5 dní</span>
          </li>
          <li className="vb-card">
            <span className="vb-card__no">04</span>
            <h3>Pastelky, tuše &amp; kreslení</h3>
            <p>Akvarelové pastelky, technická pera, tuhy 2B–6B a bloky na skicování.
            Poradíme s gramáží papíru, ať vám barva neprosakuje.</p>
            <span className="vb-card__meta">školní i profi</span>
          </li>
        </ul>
      </section>

      {/* O NÁS / DŮVĚRA */}
      <section id="onas" className="vb-sec vb-onas" aria-labelledby="onas-h">
        <div className="vb-onas__grid">
          <figure className="vb-onas__figure">
            <img
              src="/section-1.webp"
              alt="Interiér papírnictví Very Berry s regály plnými zápisníků a per"
              width={800}
              height={640}
              loading="lazy"
            />
          </figure>
          <div className="vb-onas__copy">
            <p className="vb-eyebrow">Kamenný obchod, ne jen e-shop</p>
            <h2 id="onas-h" className="vb-sec__title">Papír si zaslouží, abyste ho vzali do ruky</h2>
            <p>
              Very Berry vzniklo v Pardubicích z jednoduché posedlosti dobrým
              papírem. Za pultem stojíme my — poradíme, který zápisník snese
              plnicí pero, a který inkoust drží i po letech.
            </p>
            <ul className="vb-checks">
              <li>Testovací stůl — vyzkoušejte pero i papír, než koupíte</li>
              <li>Balení na dárek zdarma, včetně voskové pečeti</li>
              <li>Objednané zboží vyzvednete v obchodě do druhého dne</li>
            </ul>
          </div>
        </div>

        <div className="vb-onas__strip">
          <figure className="vb-onas__wide">
            <img
              src="/section-2.webp"
              alt="Detail plnicího pera a lahvičky inkoustu na tečkovaném papíru"
              width={1200}
              height={520}
              loading="lazy"
            />
          </figure>
          <blockquote className="vb-quote">
            <p>„Přišla jsem pro obyčejný sešit a odešla s perem, které mi
            vydrží roky. Poradili mi přesně to, co jsem potřebovala.“</p>
            <cite>— Markéta, stálá zákaznice z Pardubic</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}

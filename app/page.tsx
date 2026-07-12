import React from "react";

export default function Page() {
  return (
    <main className="vt">
      {/* HERO — postaveno na charakteristickém prvku oboru: proud vzduchu, potrubí, průřezy Ø */}
      <header className="vt-hero">
        <div className="vt-hero__bg" aria-hidden="true">
          <img src="/hero.webp" alt="" className="vt-hero__img" />
          <div className="vt-hero__scrim" />
        </div>

        <nav className="vt-nav" aria-label="Hlavní">
          <a className="vt-wordmark" href="#" aria-label="Ventila vzduchotechnika, domů">
            <span className="vt-wordmark__flow" aria-hidden="true">
              <span className="vt-flow-line" />
              <span className="vt-flow-line" />
              <span className="vt-flow-line" />
            </span>
            <span className="vt-wordmark__name">Ventila</span>
            <span className="vt-wordmark__sub">vzduchotechnika</span>
          </a>
          <div className="vt-nav__meta">
            <a className="vt-nav__tel" href="tel:+420216216030">+420&nbsp;216&nbsp;216&nbsp;030</a>
            <span className="vt-nav__hours">Po–Pá&nbsp;8:00–16:30</span>
          </div>
        </nav>

        <div className="vt-hero__inner">
          <p className="vt-eyebrown">
            <span className="vt-diam" aria-hidden="true">Ø</span> Vlastní výroba &amp; montáže · Praha
          </p>
          <h1 className="vt-hero__title">
            Vzduch, který<br />
            <em>ženeme správným směrem.</em>
          </h1>
          <p className="vt-hero__lead">
            Navrhneme, vyrobíme a namontujeme vzduchotechniku, rekuperaci, klimatizaci
            i digestoře. Od talířového ventilu z naší dílny po jádrové vrtání do panelu —
            řešíme celý rozvod od nasávání po výfuk.
          </p>
          <div className="vt-hero__cta">
            <a className="vt-btn vt-btn--primary" href="tel:+420216216030">Zavolat a poradit se</a>
            <a className="vt-btn vt-btn--ghost" href="#sluzby">Co montujeme</a>
          </div>
        </div>

        {/* Signature: „vzduchová linka“ s parametry potrubí — čte se jako štítek na spiro potrubí */}
        <ul className="vt-ductline" aria-label="Naše řemeslo v číslech">
          <li>
            <span className="vt-ductline__num">Ø80–250</span>
            <span className="vt-ductline__lbl">rozměry potrubí, které vyrábíme</span>
          </li>
          <li>
            <span className="vt-ductline__num">2×</span>
            <span className="vt-ductline__lbl">prodejny v Praze — Palmovka &amp; Žižkov</span>
          </li>
          <li>
            <span className="vt-ductline__num">4,9<span className="vt-star" aria-hidden="true">★</span></span>
            <span className="vt-ductline__lbl">hodnocení ověřeného obchodu</span>
          </li>
        </ul>
      </header>

      {/* SEKCE 1 — služby / co montujeme */}
      <section className="vt-sec vt-sec--services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="vt-sec__head">
          <p className="vt-eyebrow">Naše řemeslo</p>
          <h2 className="vt-sec__title" id="sluzby-h">Od nasávání po výfuk</h2>
          <p className="vt-sec__intro">
            Vzduch má v domě svoji cestu — a my ji stavíme celou. Sledujte ji po směru
            proudění: každý úsek je jedna služba, kterou u nás dostanete od jedněch lidí.
          </p>
        </div>

        <ol className="vt-flowsteps">
          <li className="vt-step">
            <span className="vt-step__tag">Úsek&nbsp;01 · nasávání</span>
            <h3 className="vt-step__h">Montáž vzduchotechniky</h3>
            <p className="vt-step__p">
              Rozvody, mřížky a talířové ventily z naší výroby. Utěsníme, vyvážíme průtoky
              a schováme potrubí tak, aby v bytě nebylo slyšet ani vidět.
            </p>
          </li>
          <li className="vt-step">
            <span className="vt-step__tag">Úsek&nbsp;02 · výměna vzduchu</span>
            <h3 className="vt-step__h">Montáž rekuperace</h3>
            <p className="vt-step__p">
              Centrální i lokální jednotky, třeba Blauberg Vento Expert do jedné místnosti.
              Čerstvý vzduch bez otevírání oken a bez ztráty tepla.
            </p>
          </li>
          <li className="vt-step">
            <span className="vt-step__tag">Úsek&nbsp;03 · chlazení</span>
            <h3 className="vt-step__h">Montáž klimatizace</h3>
            <p className="vt-step__p">
              Klasické splity i jednotky bez venkovní jednotky. Vybereme výkon na míru
              místnosti a vyřešíme odvod kondenzátu do posledního metru hadice.
            </p>
          </li>
          <li className="vt-step">
            <span className="vt-step__tag">Úsek&nbsp;04 · odtah</span>
            <h3 className="vt-step__h">Montáž digestoře</h3>
            <p className="vt-step__p">
              Odtah z kuchyně ven, ne do filtru dokola. Napojíme na fasádu i střechu,
              s protidešťovou mřížkou a zpětnou klapkou.
            </p>
          </li>
          <li className="vt-step vt-step--core">
            <span className="vt-step__tag">Prostup · zdivem i panelem</span>
            <h3 className="vt-step__h">Jádrové vrtání</h3>
            <p className="vt-step__p">
              Čisté prostupy s odsáváním prachu, bez nepořádku v bytě.
              <strong> Od 2&nbsp;500&nbsp;Kč.</strong>
            </p>
          </li>
        </ol>

        <figure className="vt-figure">
          <img src="/section-1.webp" alt="Instalovaná vzduchotechnika a potrubí od Ventily" className="vt-figure__img" />
          <figcaption className="vt-figure__cap">
            Talířové ventily, mřížky a spiro potrubí — díly z naší pražské výroby.
          </figcaption>
        </figure>
      </section>

      {/* SEKCE 2 — o nás / důvěra */}
      <section className="vt-sec vt-sec--trust" aria-labelledby="onas-h">
        <div className="vt-trust__grid">
          <div className="vt-trust__copy">
            <p className="vt-eyebrow">Proč Ventila</p>
            <h2 className="vt-sec__title" id="onas-h">Vyrábíme, prodáváme, montujeme</h2>
            <p className="vt-sec__intro">
              Nejsme jen e-shop s krabicemi. Velkou část dílů si vyrábíme sami, poradíme
              na prodejně a stejní lidé pak přijedou montovat. Když něco potřebuje
              doladit, víme přesně, co je uvnitř stěny.
            </p>

            <dl className="vt-facts">
              <div className="vt-fact">
                <dt>Vlastní výroba</dt>
                <dd>Talířové ventily KTVd, síťky proti hmyzu, mřížky — díly, které skladem sedí k sobě.</dd>
              </div>
              <div className="vt-fact">
                <dt>Dvě prodejny v Praze</dt>
                <dd>Palmovka (Praha&nbsp;8) a Žižkov (Praha&nbsp;3). Přijďte si osahat, co koupíte.</dd>
              </div>
              <div className="vt-fact">
                <dt>Ověřený obchod 4,9</dt>
                <dd>Hodnocení od zákazníků, kteří u nás nakoupili i nechali montovat.</dd>
              </div>
              <div className="vt-fact">
                <dt>Nákup na splátky</dt>
                <dd>Rekuperaci i klimatizaci rozložíte do splátek, ať to dýchá i rozpočtu.</dd>
              </div>
            </dl>

            <div className="vt-contactcard">
              <p className="vt-contactcard__k">Potřebujete poradit?</p>
              <a className="vt-contactcard__tel" href="tel:+420216216030">+420&nbsp;216&nbsp;216&nbsp;030</a>
              <a className="vt-contactcard__mail" href="mailto:ventila@ventila.cz">ventila@ventila.cz</a>
              <p className="vt-contactcard__hours">Prodejny Po–Pá 8:00–16:30 · Praha 8 Palmovka, Praha 3 Žižkov</p>
            </div>
          </div>

          <figure className="vt-trust__figure">
            <img src="/section-2.webp" alt="Montáž a servis vzduchotechniky Ventila v praxi" className="vt-trust__img" />
          </figure>
        </div>
      </section>
    </main>
  );
}

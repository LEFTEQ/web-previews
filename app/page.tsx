import React from "react";

export default function Page() {
  return (
    <main className="iv">
      {/* HERO — otevřeno hračkářskou skříní: plyšáci v policích, cenovky, ruční štítky */}
      <header className="iv-top">
        <a className="iv-mark" href="#" aria-label="Iv Creative — hračkářství Pardubice">
          <span className="iv-mark__iv">iv</span>
          <span className="iv-mark__word">creative</span>
          <span className="iv-mark__dot" aria-hidden="true" />
        </a>
        <nav className="iv-nav" aria-label="Hlavní">
          <a href="#regal">Do regálu</a>
          <a href="#kdo">Kdo jsme</a>
          <a className="iv-nav__phone" href="tel:+420466000000">Zavolat do prodejny</a>
        </nav>
      </header>

      <section className="iv-hero" aria-labelledby="hero-h">
        <div className="iv-hero__grid">
          <div className="iv-hero__copy">
            <p className="iv-eyebrow"><span className="iv-eyebrow__code">Pardubice · třída Míru</span> hračkářství od roku 2004</p>
            <h1 id="hero-h">
              Každý plyšák tu má<br />
              <span className="iv-hero__accent">svoje jméno</span> ještě
              <br />než ho pojmenuje dítě.
            </h1>
            <p className="iv-hero__lead">
              Přijďte si plyšáka pohladit dřív, než ho koupíte. V regálech Iv Creative
              najdete přes tisíc kousků — od andulky velké jak dlaň po medvěda vyššího
              než prvňák. Vše atestované, měkké a připravené jet domů ještě dnes.
            </p>
            <div className="iv-hero__cta">
              <a className="iv-btn iv-btn--solid" href="#regal">Prohlédnout regál</a>
              <a className="iv-btn iv-btn--ghost" href="tel:+420466000000">Zeptat se telefonicky</a>
            </div>
          </div>

          <figure className="iv-hero__shelf">
            <img
              src="/hero.webp"
              alt="Regál plný plyšových zvířátek v pardubické prodejně Iv Creative"
              className="iv-hero__img"
            />
            {/* ruční papírová cenovka — signature prvek */}
            <figcaption className="iv-tag">
              <span className="iv-tag__hole" aria-hidden="true" />
              <span className="iv-tag__name">Jednorožec s křídly, 85 cm</span>
              <span className="iv-tag__price">skladem · 1 249 Kč</span>
            </figcaption>
          </figure>
        </div>

        {/* běžící inventura místo číselné chvástavosti */}
        <ul className="iv-strip" aria-label="Co u nás najdete">
          <li>plyšová zvířátka</li>
          <li>maxi plyšáci nad 100 cm</li>
          <li>interaktivní hračky se zvukem</li>
          <li>dřevěné vláčky</li>
          <li>sady nářadí</li>
          <li>společenské hry</li>
          <li>dárková balení na počkání</li>
        </ul>
      </section>

      {/* SEKCE 1 — regál po policích: obsah JE sekvence, proto číslujeme police */}
      <section className="iv-shelves" id="regal" aria-labelledby="regal-h">
        <div className="iv-section-head">
          <p className="iv-eyebrow">Nabídka</p>
          <h2 id="regal-h">Projděte prodejnu polici po polici</h2>
          <p className="iv-section-head__lead">
            Tak, jak to máme srovnané doopravdy — odshora dolů, od nejmenších
            mazlíčků po kusy, které se sotva vejdou do auta.
          </p>
        </div>

        <ol className="iv-shelf-list">
          <li className="iv-shelf-row">
            <span className="iv-shelf-row__no">01</span>
            <div className="iv-shelf-row__body">
              <h3>Plyšová zvířátka</h3>
              <p>
                Liška, ježek, lemur, leňochod i surikata — přes sedmdesát druhů,
                každý atestovaný a měkký na první dotek. Řada „velké oči“ pro
                nejmenší, řada Star Sparkle pro sběratele.
              </p>
              <span className="iv-shelf-row__meta">od 169 Kč · velikosti 20–45 cm</span>
            </div>
          </li>
          <li className="iv-shelf-row iv-shelf-row--feature">
            <span className="iv-shelf-row__no">02</span>
            <div className="iv-shelf-row__body">
              <h3>Maxi plyšáci nad 100 cm</h3>
              <p>
                Medvěd 150 cm, který se dá obejmout celý, nebo jednorožec, na kterém
                se dá usnout. Před koupí si ho u nás v klidu vyzkoušíte — kolik ho
                unesete i kam ho doma posadíte.
              </p>
              <span className="iv-shelf-row__meta">od 1 249 Kč · doneseme k autu</span>
            </div>
            <img
              src="/section-1.webp"
              alt="Velký plyšový medvěd v prodejně Iv Creative v Pardubicích"
              className="iv-shelf-row__img"
            />
          </li>
          <li className="iv-shelf-row">
            <span className="iv-shelf-row__no">03</span>
            <div className="iv-shelf-row__body">
              <h3>Hračky se zvukem a interaktivní</h3>
              <p>
                Tancující koala, která svítí ve tmě, mluvící medvídek Dreamy,
                Tlapková patrola i Mimoni. Baterie hlídáme za vás — v obchodě si je
                můžete rovnou vyzkoušet.
              </p>
              <span className="iv-shelf-row__meta">od 499 Kč · vhodné 24 m+</span>
            </div>
          </li>
          <li className="iv-shelf-row">
            <span className="iv-shelf-row__no">04</span>
            <div className="iv-shelf-row__body">
              <h3>Dřevo, vláčky a nářadí</h3>
              <p>
                Elektrické vláčky, autíčka Bruder a dětská sada nářadí v kufříku,
                se kterou opraví celý dům. Věci, co vydrží od staršího sourozence
                až po mladšího.
              </p>
              <span className="iv-shelf-row__meta">od 349 Kč · na dárek zabalíme</span>
            </div>
          </li>
        </ol>
      </section>

      {/* SEKCE 2 — kdo jsme / důvěra, postaveno na citátu psycholožky z původního obsahu */}
      <section className="iv-about" id="kdo" aria-labelledby="kdo-h">
        <figure className="iv-about__media">
          <img
            src="/section-2.webp"
            alt="Dětské ruce objímající plyšovou hračku z Iv Creative"
            className="iv-about__img"
          />
        </figure>
        <div className="iv-about__copy">
          <p className="iv-eyebrow">Kdo jsme</p>
          <h2 id="kdo-h">Prodáváme první kamarády, ne jen zboží</h2>
          <blockquote className="iv-quote">
            „U malých dětí je plyšová hračka spojnicí mezi domovem a vnějším světem.
            Dítě jí přisuzuje magickou moc.“
            <cite>— Catherine Pierratová, dětská psycholožka</cite>
          </blockquote>
          <p>
            Proto k výběru přistupujeme jako ke známosti na celý život. Poradíme,
            který plyšák se hodí do postýlky ročního dítěte a který unese objetí
            desetiletého. Všechno u nás je atestované a zdravotně nezávadné —
            a když si nejste jistí, necháme vás osahat cokoliv z regálu.
          </p>

          <dl className="iv-facts">
            <div>
              <dt>Kde nás najdete</dt>
              <dd>Pardubice, kamenná prodejna na třídě Míru</dd>
            </div>
            <div>
              <dt>Co máme skladem</dt>
              <dd>přes 1 000 hraček, ne jen na obrázku — fyzicky v regálech</dd>
            </div>
            <div>
              <dt>Dárek na počkání</dt>
              <dd>zabalíme, dopíšeme přání a předáme připravené k rozbalení</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}

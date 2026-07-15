import React from "react";

const potize = [
  "Úzkost, strach a obavy, které nezmizí",
  "Poruchy příjmu potravy",
  "Nespavost a neklidný spánek",
  "Vztahy, které bolí — s rodiči, sourozenci i blízkými",
  "Pocit, že sám sobě nerozumím",
];

const cesta = [
  {
    n: "01",
    t: "První setkání",
    d: "Poznáváme se. Řeknu vám, jak terapie probíhá, kdy a jak často se scházíme. Společně zvážíme, jestli si vzájemně sedneme a jestli se naše očekávání potkávají.",
  },
  {
    n: "02",
    t: "Zakázka",
    d: "Po několika sezeních spolu pojmenujeme cíl — co byste chtěl nebo chtěla, aby se ve vašem životě proměnilo. Tomu říkáme kontrakt.",
  },
  {
    n: "03",
    t: "Pravidelná sezení",
    d: "Scházíme se podle vašich aktuálních potřeb. Mluvíme o tom, co vás tíží — o úzkosti a nepohodě, ale hlavně o vztazích, které vás formují.",
  },
  {
    n: "04",
    t: "Čas, který to potřebuje",
    d: "Psychoanalytická terapie je dlouhodobá. Někdo dochází pár měsíců, někdo i několik let. Tempo nikdy nespěchá — určujete ho vy.",
  },
  {
    n: "05",
    t: "Ukončení jako rituál",
    d: "Skončit můžete kdykoli. Posledních pár setkání si ale necháme na to, abychom celou cestu společně vyhodnotili a v klidu uzavřeli.",
  },
];

export default function Page() {
  return (
    <main className="pp">
      <section className="hero">
        <img
          className="hero__img"
          src="/hero.webp"
          alt="Tlumeně nasvícená pracovna psychoterapeutky za soumraku"
        />
        <div className="hero__veil" aria-hidden="true" />

        <nav className="nav" aria-label="Hlavní">
          <a className="brand" href="#uvod">
            <span className="brand__word">Psychoterapie</span>
            <span className="brand__dot" aria-hidden="true" />
            <span className="brand__place">Praha</span>
          </a>
          <a className="nav__call" href="tel:+420602420670">
            Zavolat
          </a>
        </nav>

        <div className="hero__inner" id="uvod">
          <p className="eyebrow eyebrow--light r r1">
            Psychoanalytická ambulance · Praha 9
          </p>
          <h1 className="hero__title r r2">
            Duševní bolest není vidět.
            <em> A přesto může být těžší než ta tělesná.</em>
          </h1>
          <p className="hero__lead r r3">
            Jsem Michaela Žáčková a doprovázím lidi, kterým úzkost, smutek nebo
            vztahy berou půdu pod nohama. Společně hledáme, odkud potíže
            přicházejí — a učíme se jim rozumět.
          </p>
          <div className="hero__actions r r4">
            <a className="btn btn--amber" href="tel:+420602420670">
              Zavolat 602 420 670
            </a>
            <a className="btn btn--ghost" href="sms:+420602420670">
              Radši napíšu SMS
            </a>
          </div>
        </div>
      </section>

      <section className="block block--care" aria-labelledby="care-h">
        <div className="wrap">
          <header className="lead">
            <p className="eyebrow">S čím za mnou chodíte</p>
            <h2 id="care-h" className="h2">Nemusíte na to být sami</h2>
            <p className="lead__p">
              Duševní nepohoda je zrádná — není ji vidět a okolí čeká, že se
              přece „seberete a nebudete blbnout“. Kdo ale úzkost nebo depresi
              zažil, ví, jak nesmyslná taková rada je. Věnuji se hlavně mladým
              dospělým a tématům, se kterými se dá zůstat sám jen těžko.
            </p>
          </header>

          <div className="care__grid">
            <ul className="care__list">
              {potize.map((p) => (
                <li key={p} className="care__item">
                  <span className="care__tick" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
            <figure className="care__figure">
              <img
                src="/section-1.webp"
                alt="Dvě křesla proti sobě v terapeutické pracovně"
                loading="lazy"
              />
              <figcaption>
                Bezpečné, klidné místo, kde se dá mluvit i o tom, co se jinde
                říká těžko.
              </figcaption>
            </figure>
          </div>

          <div className="thread-head">
            <p className="eyebrow">Jak terapie probíhá</p>
            <h3 className="h3">Cesta, kterou jdeme spolu</h3>
            <p className="thread-head__p">
              Mým směrem je psychoanalytická terapie — porozumět sám sobě, svým
              vztahům a smířit se se sebou. Tady je, jak taková spolupráce
              obvykle vypadá od prvního telefonu až po rozloučení.
            </p>
          </div>

          <ol className="thread">
            {cesta.map((s) => (
              <li key={s.n} className="thread__step">
                <span className="thread__num">{s.n}</span>
                <div className="thread__body">
                  <h4 className="thread__t">{s.t}</h4>
                  <p className="thread__d">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="block block--about" aria-labelledby="about-h">
        <div className="wrap">
          <header className="lead">
            <p className="eyebrow eyebrow--light">Kdo vás bude provázet</p>
            <h2 id="about-h" className="h2 h2--light">Mgr. Michaela Žáčková</h2>
          </header>

          <div className="about__grid">
            <figure className="about__figure">
              <img
                src="/section-2.webp"
                alt="Detail pracovního stolu s poznámkami a lampou"
                loading="lazy"
              />
            </figure>
            <div className="about__text">
              <p>
                Vystudovala jsem pedagogickou fakultu Univerzity Karlovy, obor
                psychopedie a logopedie. Léta jsem pracovala jako sociální
                pracovnice a později manažerka v sociálních službách a ve
                zdravotnictví.
              </p>
              <p>
                Po psychoanalytickém psychoterapeutickém výcviku v institutu
                IAPSA jsem rok působila jako koterapeutka v Psychiatrické
                nemocnici Bohnice a poté si otevřela vlastní malou ambulanci.
                Absolvovala jsem i mezinárodní výcvik v koučinku a dál se
                vzdělávám v terapeutických dovednostech.
              </p>
            </div>
          </div>

          <blockquote className="vow">
            <p>
              „Nebudu vám slibovat rychlá řešení. Psychoanalytická terapie umí
              bolet — ale přináší i úlevu a smíření se sebou samým.“
            </p>
          </blockquote>

          <div className="contact">
            <div className="contact__col">
              <p className="contact__label">Kde mě najdete</p>
              <p className="contact__val">
                Harrachovská 422
                <br />
                Praha 9
              </p>
            </div>
            <div className="contact__col">
              <p className="contact__label">Domluvit první sezení</p>
              <a className="contact__phone" href="tel:+420602420670">
                +420 602 420 670
              </a>
              <div className="contact__actions">
                <a className="btn btn--amber" href="tel:+420602420670">
                  Zavolat
                </a>
                <a className="btn btn--line" href="sms:+420602420670">
                  Napsat SMS
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

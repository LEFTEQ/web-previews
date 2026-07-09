import type { CSSProperties } from "react";

export const metadata = {
  title: "CS Praha — servis a opravy počítačů, Francouzská 106, Praha",
  description:
    "Diagnostika, výměna disků a pamětí, čištění a záchrana dat. Vyšovice na Vinohradech. Přineste počítač, do 24 hodin víte, co s ním je.",
  openGraph: {
    title: "CS Praha — servis a opravy počítačů",
    description:
      "Diagnostika do 24 hodin, transparentní cena předem, oprava na počkání i s vyzvednutím. Francouzská 106, Praha-Vinohrady.",
    images: ["/hero.webp"],
    locale: "cs_CZ",
    type: "website",
  },
};

type Step = {
  n: string;
  time: string;
  title: string;
  body: string;
};

const diagnostika: Step[] = [
  {
    n: "01",
    time: "0. den",
    title: "Přijmeme na pult",
    body: "Popíšete, co počítač dělá — nejede, hučí, mrzne, ztratil data. Sepíšeme přesně, v jakém stavu ho přebíráme, a dostanete papírovou stvrzenku s číslem zakázky.",
  },
  {
    n: "02",
    time: "do 24 h",
    title: "Rozebereme a změříme",
    body: "Otevřeme skříň, proměříme zdroj a napájení, otestujeme paměti i disk na chyby. Zjistíme, co je opravdu vadné — a co se jen tváří.",
  },
  {
    n: "03",
    time: "telefonát",
    title: "Zavoláme s cenou",
    body: "Než cokoli koupíme nebo vyměníme, řekneme vám nacenění dopředu. Bez vašeho odsouhlasení se neplatí ani nešroubuje.",
  },
  {
    n: "04",
    time: "vyzvednutí",
    title: "Opravíme a předáme",
    body: "Vyměníme díl, přeneseme data, počítač složíme a zkusíme pod zátěží. Předáváme funkční, vyčištěný a s vysvětlením, co bylo špatně.",
  },
];

type Service = {
  tag: string;
  title: string;
  body: string;
  price: string;
};

const sluzby: Service[] = [
  {
    tag: "nejčastější",
    title: "Výměna disku a zrychlení",
    body: "Starý plotnový disk za SSD, klonování systému, aby vše zůstalo, jak jste zvyklí. Notebook naskočí za pár vteřin místo minut.",
    price: "od 890 Kč + díl",
  },
  {
    tag: "na počkání",
    title: "Čištění a výměna pasty",
    body: "Vyfoukáme prach z chladiče, vyměníme teplovodivou pastu. Počítač přestane přehřívat a hučet naplno u prohlížeče.",
    price: "od 590 Kč",
  },
  {
    tag: "záchrana",
    title: "Obnova dat",
    body: "Fotky, dokumenty a účetnictví z disku, který přestal naskakovat. Nejdřív zjistíme, co jde zachránit — a kolik to bude stát.",
    price: "cena po diagnostice",
  },
  {
    tag: "upgrade",
    title: "Rozšíření paměti",
    body: "Doplníme RAM podle desky a rozpočtu, ověříme kompatibilitu předem. Konec zamrzání při deseti otevřených záložkách.",
    price: "od 490 Kč + paměť",
  },
  {
    tag: "software",
    title: "Reinstalace a viry",
    body: "Čistá instalace Windows, ovladače, odstranění vyskakovacích oken a nezvaného softwaru. Data předem zálohujeme.",
    price: "od 790 Kč",
  },
  {
    tag: "firmy",
    title: "Servis pro kanceláře",
    body: "Sítě, tiskárny, zálohování a výjezd k vám na Vinohradech i v okolí. Faktura, ne pokladní blok — a jeden člověk, který zvedá telefon.",
    price: "dle rozsahu",
  },
];

export default function Page() {
  return (
    <main className="cs-main">
      <header className="cs-nav" aria-label="Hlavní">
        <a className="cs-wordmark" href="#uvod" aria-label="CS Praha — domů">
          <span className="cs-wordmark__mark" aria-hidden="true">
            CS
          </span>
          <span className="cs-wordmark__rest">
            <b>Praha</b>
            <em>servis počítačů · Vinohrady</em>
          </span>
        </a>
        <a className="cs-nav__call" href="tel:+420777730566">
          <span className="cs-nav__dot" aria-hidden="true" />
          777&nbsp;730&nbsp;566
        </a>
      </header>

      <section className="cs-hero" id="uvod">
        <div className="cs-hero__grid">
          <div className="cs-hero__text">
            <p className="cs-eyebrow">Otevřený pult · Francouzská 106, Praha 10</p>
            <h1 className="cs-hero__title">
              Váš počítač
              <br />
              <span className="cs-hero__title-accent">rozebereme,</span>
              <br />
              než ho odepíšete.
            </h1>
            <p className="cs-hero__lede">
              Nejde nastartovat, hučí jako fén nebo spolkl vaše fotky? Přineste ho
              na Vinohrady. Do 24&nbsp;hodin víte, co s ním je a co bude oprava
              stát — a teprve pak se rozhodujete.
            </p>
            <div className="cs-hero__cta">
              <a className="cs-btn cs-btn--primary" href="tel:+420777730566">
                Zavolat servisu
              </a>
              <a
                className="cs-btn cs-btn--ghost"
                href="mailto:servis@cspraha.cz?subject=Oprava%20po%C4%8D%C3%ADta%C4%8De"
              >
                Napsat, co se děje
              </a>
            </div>
            <dl className="cs-hero__facts">
              <div>
                <dt>Diagnostika</dt>
                <dd>do 24 hodin</dd>
              </div>
              <div>
                <dt>Cena předem</dt>
                <dd>odsouhlasíte ji vy</dd>
              </div>
              <div>
                <dt>Kde nás najdete</dt>
                <dd>Francouzská 106</dd>
              </div>
            </dl>
          </div>
          <figure className="cs-hero__figure">
            <img
              className="cs-hero__img"
              src="/hero.webp"
              alt="Otevřená skříň počítače na servisním pultu při diagnostice v dílně CS Praha"
              width={900}
              height={1100}
              loading="eager"
            />
            <figcaption className="cs-hero__cap">
              <span className="cs-hero__cap-led" aria-hidden="true" />
              Zakázka na pultu — právě měříme napájení
            </figcaption>
          </figure>
        </div>
        <div className="cs-ticker" aria-hidden="true">
          <div className="cs-ticker__track">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i} className="cs-ticker__row">
                SSD &amp; disky <b>·</b> paměti RAM <b>·</b> čištění chladičů{" "}
                <b>·</b> obnova dat <b>·</b> reinstalace Windows <b>·</b> viry a
                reklama <b>·</b> notebooky <b>·</b> stolní PC <b>·</b> tiskárny{" "}
                <b>·</b>{" "}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-services" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="cs-section-head">
          <p className="cs-eyebrow cs-eyebrow--dark">Co nejčastěji řešíme</p>
          <h2 id="sluzby-nadpis" className="cs-section-title">
            Konkrétní opravy, konkrétní ceny.
          </h2>
          <p className="cs-section-sub">
            Neprodáváme balíčky ani „prémiové optimalizace“. Vyměníme, co je
            vadné, a řekneme cenu dřív, než sáhneme po šroubováku.
          </p>
        </div>
        <ul className="cs-service-grid">
          {sluzby.map((s) => (
            <li key={s.title} className="cs-card">
              <span className="cs-card__tag">{s.tag}</span>
              <h3 className="cs-card__title">{s.title}</h3>
              <p className="cs-card__body">{s.body}</p>
              <p className="cs-card__price">{s.price}</p>
            </li>
          ))}
        </ul>
        <figure className="cs-service-figure">
          <img
            src="/section-1.webp"
            alt="Technik CS Praha při výměně komponenty v otevřeném notebooku"
            width={1200}
            height={720}
            loading="lazy"
          />
          <figcaption>
            U pultu ve Francouzské — každou zakázku vede jeden technik od příjmu
            po předání.
          </figcaption>
        </figure>
      </section>

      <section className="cs-flow" id="jak-to-chodi" aria-labelledby="flow-nadpis">
        <div className="cs-flow__wrap">
          <div className="cs-section-head cs-section-head--light">
            <p className="cs-eyebrow">Jak zakázka projde dílnou</p>
            <h2 id="flow-nadpis" className="cs-section-title">
              Od pultu k opravě ve čtyřech krocích.
            </h2>
            <p className="cs-section-sub cs-section-sub--light">
              Žádné mlžení a žádné překvapení na účtence. Tady je přesně to, co se
              s vaším počítačem děje od chvíle, kdy ho položíte na pult.
            </p>
          </div>

          <ol className="cs-steps">
            {diagnostika.map((step, i) => (
              <li
                key={step.n}
                className="cs-step"
                style={{ "--i": i } as CSSProperties}
              >
                <div className="cs-step__num">{step.n}</div>
                <div className="cs-step__meta">{step.time}</div>
                <h3 className="cs-step__title">{step.title}</h3>
                <p className="cs-step__body">{step.body}</p>
              </li>
            ))}
          </ol>

          <div className="cs-trust">
            <figure className="cs-trust__figure">
              <img
                src="/section-2.webp"
                alt="Detail servisního pracoviště CS Praha s nářadím a rozpracovaným počítačem"
                width={1000}
                height={760}
                loading="lazy"
              />
            </figure>
            <div className="cs-trust__text">
              <h3 className="cs-trust__title">Lidé z Vinohrad k nám nosí počítače léta</h3>
              <p>
                CS Praha stojí na Francouzské&nbsp;106 a servis počítačů je to,
                co umíme dělat od základů — od stolních sestav po firemní
                notebooky. Zvedáme telefon, mluvíme lidsky a řekneme i to, kdy se
                oprava nevyplatí.
              </p>
              <ul className="cs-trust__list">
                <li>Cenu za opravu znáte předem a odsouhlasíte ji</li>
                <li>Data zálohujeme dřív, než se pustíme do systému</li>
                <li>Vystavíme stvrzenku i fakturu pro firmy</li>
              </ul>
              <div className="cs-trust__contact">
                <a className="cs-btn cs-btn--primary" href="tel:+420777730566">
                  777 730 566
                </a>
                <a
                  className="cs-inline-link"
                  href="https://mapy.cz/?q=Francouzsk%C3%A1%20106%20Praha"
                  target="_blank"
                  rel="noopener"
                >
                  Francouzská 106, 101 00 Praha
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

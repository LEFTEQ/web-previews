import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main className="page">
      <header className="top">
        <a className="wordmark" href="#" aria-label="Ing. Josef Nedělník, s.r.o. — úvod">
          <span className="wordmark__grout">n</span>
          <span className="wordmark__name">nedělník</span>
          <span className="wordmark__since">koupelny · Brno · od 1994</span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#jak">Jak to děláme</a>
          <a href="#reference">Reference</a>
          <a className="nav__cta" href="#poptavka">Nezávazná poptávka</a>
        </nav>
      </header>

      {/* HERO — postaveno na obkladovém řádu: spára jako hlavní motiv */}
      <section className="hero">
        <div className="hero__copy">
          <p className="eyebrow">Rekonstrukce koupelen na klíč · Brno a okolí</p>
          <h1 className="hero__title">
            Nová koupelna,
            <br />
            spára po spáře.
          </h1>
          <p className="hero__lead">
            Vytrháme staré bytové jádro, vyměníme rozvody a odejdeme až ve chvíli,
            kdy je pod poslední spárou čisto a všechno těsní. Rodinná firma
            z Brna — jeden mistr má na starosti vaši stavbu od prvního zaměření
            po předání klíčů.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="#poptavka">Chci nacenit koupelnu</a>
            <a className="btn btn--ghost" href="#jak">Jak probíhá rekonstrukce</a>
          </div>
          <dl className="hero__facts">
            <div>
              <dt>Od</dt>
              <dd>1994</dd>
            </div>
            <div>
              <dt>Termín</dt>
              <dd>3–4 týdny</dd>
            </div>
            <div>
              <dt>Záruka</dt>
              <dd>na dílo i těsnost</dd>
            </div>
          </dl>
        </div>
        <figure className="hero__figure">
          <img
            src="/hero.webp"
            alt="Hotová rekonstruovaná koupelna s velkoformátovým obkladem a přesně srovnanými spárami"
            className="hero__img"
          />
          <figcaption className="hero__tag">
            <span className="hero__tag-dot" aria-hidden="true" />
            Koupelna v panelovém bytě, Brno-Líšeň
          </figcaption>
        </figure>
      </section>

      {/* SEKCE 1 — služby jako sled prací, protože rekonstrukce JE sekvence */}
      <section id="jak" className="steps">
        <div className="steps__head">
          <p className="eyebrow eyebrow--dark">Průběh zakázky</p>
          <h2 className="section-title">Od bouracího kladiva po předání klíčů</h2>
          <p className="section-lead">
            U každé koupelny jdeme stejným řádem. Víte dopředu, co se kdy děje,
            kdo přijde a kdy je hotovo.
          </p>
        </div>

        <ol className="steps__list">
          {steps.map((s) => (
            <li key={s.no} className="step">
              <span className="step__no">{s.no}</span>
              <div className="step__body">
                <h3 className="step__title">{s.title}</h3>
                <p className="step__text">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="steps__figure">
          <img
            src="/section-1.webp"
            alt="Rozpracovaná koupelna během rekonstrukce — nové rozvody vody a připravená podlaha pod obklad"
            className="framed"
          />
          <figcaption>
            Nové rozvody a hydroizolaci fotíme dřív, než zmizí pod obkladem — máte
            doklad o tom, co je ve zdi.
          </figcaption>
        </figure>
      </section>

      {/* SEKCE 2 — důvěra / o nás */}
      <section id="reference" className="trust">
        <figure className="trust__figure">
          <img
            src="/section-2.webp"
            alt="Detail dokončené koupelny s obkladem a sanitou po rekonstrukci od firmy Nedělník"
            className="framed"
          />
        </figure>

        <div className="trust__copy">
          <p className="eyebrow eyebrow--dark">Rodinná firma z Brna</p>
          <h2 className="section-title">Řemeslo, které drží tři generace</h2>
          <p className="trust__text">
            Navazujeme na stavitelství, které na Prostějovsku fungovalo už od
            19. století. Dnes stavíme koupelny v Brně a okolí a k&nbsp;domu
            zákazníka přistupujeme s&nbsp;jednou otázkou: udělali bychom to takhle
            i&nbsp;u&nbsp;sebe doma?
          </p>

          <ul className="trust__points">
            <li>Jeden kontaktní člověk po celou stavbu — voláte pořád jednomu.</li>
            <li>Návrh i 3D vizualizace, ať víte, jak koupelna dopadne.</li>
            <li>Řemeslníci naši, ne přeprodaná parta odjinud.</li>
            <li>Po sobě uklidíme — byt předáváme připravený k užívání.</li>
          </ul>

          <figure className="quote">
            <blockquote>
              „Domluva jasná, termín dodržený. Ze starého jádra je koupelna,
              za kterou se nestydíme.“
            </blockquote>
            <figcaption>— klientka, rekonstrukce bytu, Brno-střed</figcaption>
          </figure>

          <div id="poptavka" className="contact-card">
            <div>
              <p className="contact-card__role">Poptávka a domluva</p>
              <p className="contact-card__name">Ing. Petr Nedělník</p>
            </div>
            <a className="btn btn--solid" href="tel:+420604178013">
              Zavolat +420&nbsp;604&nbsp;178&nbsp;013
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

type Step = { no: string; title: string; text: string };

const steps: Step[] = [
  {
    no: "01",
    title: "Zaměření u vás doma",
    text: "Přijedeme, změříme koupelnu i bytové jádro a probereme, co vám na té staré vadí. Bez toho nemá smysl cokoli slibovat.",
  },
  {
    no: "02",
    title: "Návrh a cenový rozpočet",
    text: "Připravíme návrh, 3D vizualizaci a položkový rozpočet. Vidíte předem, kolik stojí obklady, sanita i práce — bez pozdějších překvapení.",
  },
  {
    no: "03",
    title: "Bourání a rozvody",
    text: "Vytrháme staré jádro, natáhneme nové rozvody vody, odpadu a elektriky a uděláme hydroizolaci pod obklad.",
  },
  {
    no: "04",
    title: "Obklad a sanita",
    text: "Srovnáme obklad do jedné roviny, osadíme vaničku, umyvadlo i baterie a spáry dotáhneme tak, aby všechno těsnilo.",
  },
  {
    no: "05",
    title: "Úklid a předání",
    text: "Po sobě uklidíme a koupelnu předáváme hotovou — se zárukou na dílo i na těsnost.",
  },
];

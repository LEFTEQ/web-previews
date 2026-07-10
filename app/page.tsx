import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main className="page">
      {/* HERO — postaveno na nejcharakterističtějším: měření napětí, revizní zpráva, VVN */}
      <header className="hero">
        <div className="hero__grid">
          <div className="hero__copy">
            <div className="wordmark" aria-label="A plus Z Červinka Elektro">
              <span className="wordmark__plus">A+Z</span>
              <span className="wordmark__name">ČERVINKA</span>
              <span className="wordmark__sub">elektro · Brno-Slatina</span>
            </div>

            <p className="hero__kicker">Revize elektro na NN · VN · VVN</p>
            <h1 className="hero__title">
              Rozvodny, transformovny a spínací stanice<span className="hero__title-em"> pod napětím i beznapěťově.</span>
            </h1>
            <p className="hero__lead">
              Provádíme veškeré elektrorevize na nízkém, vysokém i velmi vysokém
              napětí — včetně ochrany před bleskem, přepětím a prostor s nebezpečím
              výbuchu. Měříme technikou Megger. V oboru máme čtyřicet let praxe.
            </p>

            <div className="hero__actions">
              <a className="btn btn--primary" href="tel:+420603423176">Zavolat: 603 423 176</a>
              <a className="btn btn--ghost" href="mailto:info@azcervinkaelektro.cz">Poslat poptávku e-mailem</a>
            </div>

            {/* Panel měřicího přístroje — signature prvek: displej revizního přístroje */}
            <dl className="meter" aria-label="Rozsah revizí">
              <div className="meter__cell">
                <dt>Nízké napětí</dt>
                <dd>NN <span className="meter__unit">do 1 kV</span></dd>
              </div>
              <div className="meter__cell">
                <dt>Vysoké napětí</dt>
                <dd>VN <span className="meter__unit">1–52 kV</span></dd>
              </div>
              <div className="meter__cell">
                <dt>Velmi vysoké</dt>
                <dd>VVN <span className="meter__unit">nad 52 kV</span></dd>
              </div>
            </dl>
          </div>

          <figure className="hero__figure">
            <img
              src="/hero.webp"
              alt="Rozvodné pole vysokého napětí připravené k revizi"
              className="hero__img"
              width={880}
              height={1040}
            />
            <figcaption className="hero__tag">
              <span className="hero__tag-dot" aria-hidden="true" />
              Zpráva o revizi na výstupu z každé zakázky
            </figcaption>
          </figure>
        </div>
      </header>

      {/* SEKCE 1 — služby, číslované jako reálný sled kroků revize/servisu */}
      <section className="work" aria-labelledby="work-title">
        <div className="section-head">
          <p className="eyebrow">Co pro vás uděláme</p>
          <h2 id="work-title" className="section-title">Od měření po odstranění závady</h2>
          <p className="section-intro">
            Pracujeme na rozvodech a rozvodných zařízeních — rozvodnách,
            transformovnách i spínacích stanicích. Výsledkem je revizní zpráva;
            zjištěné závady po dohodě rovnou odstraníme.
          </p>
        </div>

        <ol className="services">
          {services.map((s) => (
            <li className="service" key={s.n} style={{ "--i": s.n } as CSSProperties}>
              <span className="service__num">{s.n}</span>
              <div className="service__body">
                <h3 className="service__title">{s.title}</h3>
                <p className="service__text">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="work__figure">
          <img
            src="/section-1.webp"
            alt="Detail práce na rozvodném zařízení vysokého napětí"
            className="work__img"
            width={1280}
            height={720}
          />
        </figure>
      </section>

      {/* SEKCE 2 — důvěra / o nás + kontaktní realita */}
      <section className="trust" aria-labelledby="trust-title">
        <div className="trust__grid">
          <figure className="trust__figure">
            <img
              src="/section-2.webp"
              alt="Termosnímkování a kontrola energetického zařízení v provozu"
              className="trust__img"
              width={1040}
              height={780}
            />
          </figure>

          <div className="trust__copy">
            <p className="eyebrow">Proč právě my</p>
            <h2 id="trust-title" className="section-title">Čtyřicet let na napětí, které nepromíjí chyby</h2>
            <p className="section-intro">
              Firmu vede jednatel Zdeněk Červinka. Za sebou máme řadu
              specializovaných školení a měříme nejmodernější technikou Megger.
              Bez napětí zvládneme i servis, termosnímkování a manipulace na zařízení.
            </p>

            <ul className="facts">
              <li className="fact"><strong>40 let</strong> praxe v revizích na NN, VN a VVN</li>
              <li className="fact"><strong>Megger</strong> — přesná měřicí technika</li>
              <li className="fact"><strong>Ex prostředí</strong> — pracujeme i v prostorách s nebezpečím výbuchu</li>
              <li className="fact"><strong>Termosnímkování</strong> s vyhodnocením pro provozy bez obsluhy</li>
            </ul>

            <div className="contact">
              <p className="contact__line">
                <span className="contact__label">Kontaktní osoba</span>
                Zdeněk Červinka — jednatel
              </p>
              <p className="contact__line">
                <span className="contact__label">Dílna a sídlo</span>
                Krejčího 163/26, 627 00 Brno-Slatina
              </p>
              <div className="contact__phones">
                <a className="chip" href="tel:+420603423176">+420 603 423 176</a>
                <a className="chip" href="tel:+420736721429">+420 736 721 429</a>
                <a className="chip" href="tel:+420545226257">+420 545 226 257</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const services = [
  {
    n: "01",
    title: "Elektrorevize NN, VN a VVN",
    text: "Revize na rozvodech a rozvodných zařízeních včetně ochrany před bleskem a přepětím. Pracujeme i v prostorách s nebezpečím výbuchu.",
  },
  {
    n: "02",
    title: "Servis elektro zařízení",
    text: "Servisní práce dle pokynů výrobců, nejlépe společně s revizí v beznapěťovém stavu. Vyhledáním rizik zvýšíte spolehlivost zařízení.",
  },
  {
    n: "03",
    title: "Termosnímkování",
    text: "Pravidelné kontroly s termosnímkováním a vyhodnocením pro provozy bez obsluhy. Po dohodě zajistíme i manipulace na zařízení.",
  },
  {
    n: "04",
    title: "Rekonstrukce a instalace",
    text: "Rekonstrukce i instalace nového energetického zařízení — od projektové dokumentace až po uvedení do provozu.",
  },
  {
    n: "05",
    title: "Vytýčení sítí",
    text: "Vytyčení tras kabelů a jejich zanesení do dokumentace, případně vyhledání poruch na kabelových trasách.",
  },
  {
    n: "06",
    title: "Revizní zpráva a odstranění závad",
    text: "Výstupem je revizní zpráva. Závady technické i v dokumentaci po dohodě rovnou odstraníme dle aktuální legislativy.",
  },
];

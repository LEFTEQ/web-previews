import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main className="pv">
      {/* HERO */}
      <header className="pv-hero">
        <div className="pv-topbar">
          <a className="pv-wordmark" href="#" aria-label="Paulservis, revize elektro Ústí nad Labem">
            <span className="pv-mark" aria-hidden="true">
              <span className="pv-mark__bolt">/</span>
            </span>
            <span className="pv-wordmark__text">
              Paul<span className="pv-wordmark__accent">servis</span>
            </span>
          </a>
          <nav className="pv-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Revize a služby</a>
            <a href="#duvera">O firmě</a>
            <a className="pv-nav__phone" href="tel:+420773333004">
              <span className="pv-nav__dot" aria-hidden="true" /> 773 333 004
            </a>
          </nav>
        </div>

        <div className="pv-hero__grid">
          <div className="pv-hero__copy">
            <p className="pv-eyebrow">
              <span className="pv-eyebrow__code">§ 6a</span> Revize elektro dle ČSN 33 1500 · Ústí nad Labem
            </p>
            <h1 className="pv-hero__title">
              Razítko, které
              <br />
              znamená, že to
              <br />
              <span className="pv-hero__title--hl">nezhasne ani nehoří.</span>
            </h1>
            <p className="pv-hero__lead">
              Výchozí a pravidelné revize elektroinstalací, hromosvodů a spotřebičů pro
              domácnosti, firmy a bytové domy. Změříme, sepíšeme závady a vystavíme platnou
              revizní zprávu — tu, kterou po vás chce pojišťovna i hasič.
            </p>
            <div className="pv-hero__actions">
              <a className="pv-btn pv-btn--primary" href="tel:+420773333004">
                Objednat revizi
              </a>
              <a className="pv-btn pv-btn--ghost" href="#sluzby">
                Co všechno reviduji
              </a>
            </div>
            <dl className="pv-hero__meta">
              <div>
                <dt>Oprávnění</dt>
                <dd>EG-A / E1B, TIČR</dd>
              </div>
              <div>
                <dt>Výjezd</dt>
                <dd>Ústecko, do 24 h</dd>
              </div>
              <div>
                <dt>Zpráva</dt>
                <dd>do 3 pracovních dnů</dd>
              </div>
            </dl>
          </div>

          <figure className="pv-hero__figure">
            <img
              src="/hero.webp"
              alt="Revizní technik měří izolační stav rozvaděče multimetrem"
              className="pv-hero__img"
              width={720}
              height={880}
              loading="eager"
            />
            <figcaption className="pv-hero__stamp" aria-hidden="true">
              <span className="pv-stamp__line">REVIZE PROVEDENA</span>
              <span className="pv-stamp__ok">VYHOVUJE</span>
              <span className="pv-stamp__line">ČSN 33 2000-6</span>
            </figcaption>
          </figure>
        </div>
      </header>

      {/* SLUŽBY — revizní protokol */}
      <section id="sluzby" className="pv-sec pv-services" aria-labelledby="sluzby-nadpis">
        <div className="pv-sec__head">
          <p className="pv-sec__eyebrow">Předmět revize</p>
          <h2 id="sluzby-nadpis" className="pv-sec__title">
            Čtyři věci, u kterých se vyplatí mít papír
          </h2>
          <p className="pv-sec__intro">
            Ke každé zakázce dostanete revizní zprávu s výsledkem, seznamem závad a lhůtou
            další kontroly. Žádné „mělo by to být v pořádku“ — buď to vyhoví, nebo víte, co
            spravit.
          </p>
        </div>

        <ol className="pv-checklist">
          {services.map((s, i) => (
            <li className="pv-check" key={s.code} style={{ ["--i" as string]: i } as CSSProperties}>
              <div className="pv-check__code">{s.code}</div>
              <div className="pv-check__body">
                <h3 className="pv-check__title">{s.title}</h3>
                <p className="pv-check__desc">{s.desc}</p>
                <p className="pv-check__norm">{s.norm}</p>
              </div>
              <div className="pv-check__box" aria-hidden="true">
                <span className="pv-check__tick">✓</span>
              </div>
            </li>
          ))}
        </ol>

        <div className="pv-services__foot">
          <p>
            Nevíte, kterou revizi zrovna potřebujete? Zavolejte a popište, co máte —
            poradím podle stáří instalace a účelu (kolaudace, pojistná událost, prodej
            nemovitosti).
          </p>
          <a className="pv-btn pv-btn--primary" href="tel:+420773333004">
            Zavolat 773 333 004
          </a>
        </div>
      </section>

      {/* DŮVĚRA — o firmě */}
      <section id="duvera" className="pv-sec pv-trust" aria-labelledby="duvera-nadpis">
        <div className="pv-trust__grid">
          <figure className="pv-trust__figure">
            <img
              src="/section-1.webp"
              alt="Otevřený domovní rozvaděč s přehledně popsanými jističi"
              className="pv-trust__img"
              width={640}
              height={760}
              loading="lazy"
            />
          </figure>

          <div className="pv-trust__copy">
            <p className="pv-sec__eyebrow">O firmě</p>
            <h2 id="duvera-nadpis" className="pv-sec__title">
              Paulservis dělá revize v Ústí od roku 2014
            </h2>
            <p className="pv-trust__lead">
              Sídlíme v Chabařovicích a jezdíme po celém Ústecku. Za tu dobu prošly rukama
              stovky rozvaděčů — od panelákových bytů po výrobní haly. Práci beru tak, že vám
              po ní dám jasnou zprávu a řeknu na rovinu, co snese čas a co ne.
            </p>

            <ul className="pv-trust__points">
              <li>
                <span className="pv-trust__k">Platné oprávnění</span>
                <span className="pv-trust__v">
                  Osvědčení a oprávnění od TIČR, pravidelné školení a přezkoušení.
                </span>
              </li>
              <li>
                <span className="pv-trust__k">Zpráva, co obstojí</span>
                <span className="pv-trust__v">
                  Revizní zprávu uznají pojišťovny, kolaudace i hasičský dohled.
                </span>
              </li>
              <li>
                <span className="pv-trust__k">Bez zbytečné práce</span>
                <span className="pv-trust__v">
                  Doporučím jen to, co má vliv na bezpečnost — ne aby narostla faktura.
                </span>
              </li>
            </ul>

            <blockquote className="pv-quote">
              <p>
                „Přijel na čas, změřil, vysvětlil, kde je uzemnění na hraně, a zprávu poslal
                do dvou dnů. Pojišťovna ji vzala bez řečí.“
              </p>
              <cite>— správce bytového domu, Ústí nad Labem-Střekov</cite>
            </blockquote>
          </div>
        </div>

        <div className="pv-trust__strip">
          <img
            src="/section-2.webp"
            alt="Revizní technik kontroluje svorkovnici v elektrorozvaděči"
            className="pv-trust__stripimg"
            width={1200}
            height={420}
            loading="lazy"
          />
          <div className="pv-trust__stripcard">
            <p className="pv-trust__stripk">Kdy volat</p>
            <p className="pv-trust__stripv">
              Blíží se konec platnosti staré revize, kupujete nemovitost, nebo vám vypadávají
              jističe? To je přesně chvíle na kontrolu.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

const services = [
  {
    code: "01",
    title: "Revize elektroinstalace",
    desc: "Výchozí revize u nové instalace i pravidelná kontrola stávajících rozvodů v bytě, domě i provozovně. Změření izolačního stavu, odporu ochranných vodičů a funkce proudových chráničů.",
    norm: "ČSN 33 2000-6 · ČSN 33 1500",
  },
  {
    code: "02",
    title: "Revize hromosvodu",
    desc: "Kontrola svodů, zemničů a přechodových odporů u hromosvodů a systémů ochrany před bleskem. Doklad, který u starších objektů řeší pojišťovna po každé bouřce.",
    norm: "ČSN EN 62305 · ČSN 33 1500",
  },
  {
    code: "03",
    title: "Revize spotřebičů a nářadí",
    desc: "Revize elektrických spotřebičů a ručního nářadí na pracovišti — prodlužovačky, stroje, IT technika. Ideální před kontrolou z inspektorátu práce.",
    norm: "ČSN 33 1600 ed. 2",
  },
  {
    code: "04",
    title: "Odstranění závad z revize",
    desc: "Našla revize závadu? Umím ji rovnou i opravit — dotažení svorek, výměna jističe, doplnění chrániče — a po opravě vystavit zprávu s výsledkem „vyhovuje“.",
    norm: "drobné elektromontáže NN",
  },
];

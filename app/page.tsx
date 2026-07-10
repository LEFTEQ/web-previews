import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gramon Print — výroba reklam, navigační systémy a velkoplošný tisk v Praze',
  description:
    'Gramon Print vyrábí navigační a orientační systémy, světelnou reklamu, polepy a velkoformátový tisk. Návrh, výroba i precizní montáž — dílna v Praze 4-Michli.',
};

const services = [
  {
    num: 'A—Z',
    title: 'Navigace a orientace',
    items: [
      'Reklamní totemy a stojany',
      'Označení pater a budov',
      'Navigační výstrče',
      'Únikové a bezpečnostní značení',
      'Dveřní tabulky a jmenovky',
      'Gravírování a frézování',
    ],
  },
  {
    num: 'ZÁŘÍ',
    title: 'Světelná reklama',
    items: [
      'Světelná loga a nápisy',
      'Světelné panely a totemy',
      'Světelné výstrče',
      '3D loga a nápisy',
      'Mechové stěny',
      'Reklamní výstrče',
    ],
  },
  {
    num: 'TISK',
    title: 'Tisk a polepy',
    items: [
      'Velkoformátové bannery a plachty',
      'Polepy skleněných příček',
      'Polepy na auto a vozový park',
      'Fototapety a polepy stěn',
      'Vizitky, letáky, brožury',
      'Vlajky, cedule, plakáty',
    ],
  },
];

export default function Page() {
  return (
    <main>
      <header className="gm-top">
        <div className="wrap gm-top-inner">
          <a className="gm-mark" href="#" aria-label="Gramon Print — domů">
            <span className="glint" aria-hidden="true" />
            GRAMON <span className="thin">print</span>
          </a>
          <nav className="gm-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Služby</a>
            <a href="#onas">O nás</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
          <a className="gm-top-cta" href="#kontakt">Poptat výrobu</a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-img-wrap" aria-hidden="true">
          <img
            src="/hero.webp"
            alt="Výroba reklamy v dílně Gramon Print — světelné nápisy a navigační prvky"
          />
        </div>
        <div className="wrap hero-inner">
          <p className="hero-tag rise d1">Výroba reklam · Praha 4 – Michle</p>
          <h1 className="rise d2">
            Váš nápis, <span className="lit">který svítí</span> a <span className="arr">ukazuje</span> správný směr
          </h1>
          <p className="hero-sub rise d3">
            Od návrhu přes výrobu až po montáž ve výškách. Děláme navigační
            systémy, světelná loga, polepy a velkoplošný tisk — celé pod jednou
            střechou v Michli.
          </p>
          <div className="hero-actions rise d4">
            <a className="btn-primary" href="#kontakt">
              Poptat výrobu
              <span aria-hidden="true">→</span>
            </a>
            <a className="btn-ghost" href="#sluzby">Prohlédnout, co umíme</a>
          </div>
        </div>
        <div className="hero-strip">
          <div className="wrap">
            <div className="hero-strip-inner">
              <div className="hero-strip-item">
                <b>Návrh</b>
                <span>grafická příprava</span>
              </div>
              <div className="hero-strip-item">
                <b>Výroba</b>
                <span>vlastní dílna</span>
              </div>
              <div className="hero-strip-item">
                <b>Montáž</b>
                <span>na místě i ve výškách</span>
              </div>
              <div className="hero-strip-item">
                <b>Revize</b>
                <span>projekty ORS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="sluzby">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <p className="sec-eyebrow">Co pro vás vyrobíme</p>
              <h2>Tři dílny, jeden dodavatel</h2>
            </div>
            <p>
              Nemusíte obvolávat pět firem. Ceduli, světelné logo i polep auta
              navrhneme, vyrobíme a namontujeme my.
            </p>
          </div>
          <div className="svc-grid">
            {services.map((s) => (
              <article className="svc" key={s.title}>
                <div className="svc-num">{s.num}</div>
                <h3>{s.title}</h3>
                <ul>
                  {s.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" id="onas">
        <div className="wrap trust-grid">
          <div className="trust-img">
            <img
              src="/section-1.webp"
              alt="Montáž reklamních prvků a instalace navigačního systému týmem Gramon Print"
            />
            <div className="stamp">
              <b>1993</b>
              řemeslo z Michle
            </div>
          </div>
          <div className="trust-copy">
            <p className="sec-eyebrow">Proč Gramon Print</p>
            <h2>Zaměříme, vyrobíme, pověsíme — a je to.</h2>
            <p>
              Jsme pražská výrobna reklamy se sídlem Na Záhonech v Michli. Od
              grafického návrhu po precizní instalaci děláme každý krok sami, ať
              jde o orientační systém v administrativní budově nebo o světelný
              nápis na fasádě.
            </p>
            <p>
              Ke každé zakázce zajistíme zaměření na místě, potřebnou techniku i
              projekty a revize orientačních systémů. Vy řešíte jeden telefon,
              zbytek je na nás.
            </p>
            <ul className="trust-facts" id="kontakt">
              <li>
                <span className="k">Dílna</span>
                <span className="v">Na Záhonech 1261/50, 141 00 Praha 4 – Michle</span>
              </li>
              <li>
                <span className="k">Telefon</span>
                <span className="v">+420 185 765 228</span>
              </li>
              <li>
                <span className="k">Firma</span>
                <span className="v">Gramon print s.r.o., IČO 61856592</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="wrap" style={{ marginTop: '56px' }}>
          <img
            src="/section-2.webp"
            alt="Ukázka realizované světelné reklamy a velkoplošného polepu od Gramon Print"
            style={{ width: '100%', display: 'block' }}
          />
        </div>
      </section>
    </main>
  );
}

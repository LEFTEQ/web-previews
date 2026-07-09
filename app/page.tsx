import type {ReactNode} from 'react';

const sluzby: {no: string; nazev: string; popis: string; tag: string}[] = [
  {
    no: '01',
    nazev: 'Křídlové a posuvné brány s pohonem',
    popis: 'Vjezdové brány na míru — od svařené konstrukce po instalaci a nastavení automatického pohonu, ovládání a bezpečnostních prvků.',
    tag: 'Brány',
  },
  {
    no: '02',
    nazev: 'Oplocení sportovišť a pozemků',
    popis: 'Robustní ploty kolem hřišť, firemních areálů i soukromých zahrad — pozinkované, žárově upravené, připravené na ostravské počasí.',
    tag: 'Oplocení',
  },
  {
    no: '03',
    nazev: 'Zábradlí, balkony, přístřešky',
    popis: 'Ocelová a nerezová zábradlí schodišť i balkonů, přístřešky a pergoly. Řešíme detail svaru i finální povrch, aby dílo vydrželo desítky let.',
    tag: 'Konstrukce',
  },
  {
    no: '04',
    nazev: 'Mechanické zabezpečení objektů',
    popis: 'Mříže, uzávěry, bezpečnostní prvky pro domy, provozovny i sklady. Pevné, přesně padnoucí a nenápadné tam, kde to má být.',
    tag: 'Zabezpečení',
  },
  {
    no: '05',
    nazev: 'Reklamní tabule a poutače',
    popis: 'Nosné rámy, stojany a ocelové konstrukce pro reklamu — svařené tak, aby držely váhu i vítr nad frekventovanou silnicí.',
    tag: 'Reklama',
  },
  {
    no: '06',
    nazev: 'Ocelové konstrukce a zámečnické výrobky',
    popis: 'Atypické zakázky, na které jinde nemají čas. Přijedeme, zaměříme a vyrobíme přesně to, co potřebujete.',
    tag: 'Na míru',
  },
];

export default function Page(): ReactNode {
  return (
    <main>
      <header className="rk-nav">
        <div className="rk-nav-inner">
          <a className="rk-mark" href="#top" aria-label="RUKOV Moravia — zámečnictví Ostrava">
            RUK<b>O</b>V<span>Zámečnictví · Ostrava</span>
          </a>
          <nav className="rk-nav-links" aria-label="Hlavní navigace">
            <a href="#sluzby">Co vyrábíme</a>
            <a href="#onas">O dílně</a>
            <a className="rk-nav-call" href="tel:+420724127494">Zavolat</a>
          </nav>
        </div>
      </header>

      <section className="rk-hero" id="top">
        <div className="rk-hero-grid">
          <div className="rk-hero-left">
            <span className="rk-eyebrow rk-reveal rk-d1">Zámečnická dílna · Stará Bělá</span>
            <h1 className="rk-h1 rk-reveal rk-d2">
              Ocel, která<br /><em>drží slovo.</em>
            </h1>
            <p className="rk-hero-sub rk-reveal rk-d3">
              Svařujeme brány, ploty, zábradlí a konstrukce na míru pro Ostravu
              a okolí. Zaměříme, vyrobíme, namontujeme — bez kompromisů na kvalitě svaru.
            </p>
            <div className="rk-hero-cta rk-reveal rk-d4">
              <a className="rk-btn rk-btn-primary" href="tel:+420724127494">Zavolat Jakubovi →</a>
              <a className="rk-btn rk-btn-ghost" href="#sluzby">Prohlédnout práce</a>
            </div>
            <div className="rk-hero-facts rk-reveal rk-d5">
              <div className="rk-fact"><b>25+ let</b><span>praxe v oboru</span></div>
              <div className="rk-fact"><b>Ostrava</b><span>dílna ve Staré Bělé</span></div>
              <div className="rk-fact"><b>Na míru</b><span>od zaměření po montáž</span></div>
            </div>
          </div>
          <div className="rk-hero-right">
            <img className="rk-hero-img" src="/hero.webp" alt="Svařování ocelové konstrukce v zámečnické dílně RUKOV Moravia" />
          </div>
        </div>
        <div className="rk-hero-mobimg">
          <img src="/hero.webp" alt="Svařování ocelové konstrukce v dílně RUKOV Moravia" />
        </div>
      </section>

      <section className="rk-sec rk-services" id="sluzby">
        <div className="rk-wrap">
          <div className="rk-sec-head">
            <div className="rk-kicker">Co vyrábíme</div>
            <h2 className="rk-h2">Šest věcí, které umíme svařit líp než ostatní</h2>
            <p className="rk-lead">
              Od jednoduchého plotu po automatickou vjezdovou bránu. Každou zakázku
              bereme jako kus, který vám má sloužit desítky let — proto ji děláme pořádně od začátku.
            </p>
          </div>
          <div className="rk-svc-list">
            {sluzby.map((s) => (
              <article className="rk-svc" key={s.no}>
                <div className="rk-svc-no">{s.no}</div>
                <div className="rk-svc-body">
                  <h3>{s.nazev}</h3>
                  <p>{s.popis}</p>
                </div>
                <div className="rk-svc-tag">{s.tag}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rk-sec rk-about" id="onas">
        <div className="rk-wrap">
          <div className="rk-about-grid">
            <div className="rk-about-txt">
              <div className="rk-kicker">O dílně</div>
              <h2 className="rk-h2">Firmu vedeme od roku 2014. Řemeslo umíme přes 25 let.</h2>
              <p>
                RUKOV Moravia jsme založili v roce 2014, ale naši lidé stáli u
                svářečky dávno předtím — dohromady mají <strong>víc než 25 let
                praxe</strong> v zámečnině. To se pozná na každém svaru.
              </p>
              <p>
                Neděláme kompromisy. Věříme, že <strong>kvalita, spolehlivost
                a zkušenost</strong> jsou nejlepší zárukou, že se k nám vrátíte —
                a doporučíte nás dál. Přijedeme, zaměříme na místě a řekneme rovnou,
                co dává smysl.
              </p>
              <div className="rk-stats">
                <div className="rk-stat"><b>2014</b><span>rok založení firmy</span></div>
                <div className="rk-stat"><b>25+</b><span>let praxe v oboru</span></div>
                <div className="rk-stat"><b>0</b><span>kompromisů na kvalitě</span></div>
                <div className="rk-stat"><b>Ostrava</b><span>a celý Moravskoslezský kraj</span></div>
              </div>
              <div className="rk-contact-card">
                <div className="rk-cc-info">
                  <b>Jakub Ružbašan — kontaktní osoba</b>
                  <a href="tel:+420724127494">+420 724 127 494</a>
                </div>
                <div className="rk-cc-addr">
                  Provozovna:<br />Nádražní 138a, 702 00 Ostrava<br />
                  <a href="mailto:info@rukov.cz" style={{color:'#ff7a3d',textDecoration:'none',fontWeight:700}}>info@rukov.cz</a>
                </div>
              </div>
            </div>
            <div className="rk-about-media">
              <img src="/section-1.webp" alt="Hotová ocelová konstrukce — pergola a přístřešek od RUKOV Moravia" />
              <div className="rk-media-cap">
                <b>Pergoly a přístřešky</b>
                <span>Ukázka z našich realizací v okolí Ostravy</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

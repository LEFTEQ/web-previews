import './globals.css';

export const metadata = {
  title: 'A NEON — světelná reklama a 3D písmena, Ústí nad Labem',
  description:
    'Vyrábíme a montujeme světelná písmena, LED boxy, 3D nápisy a reklamní pylony. Na klíč, z Trmic u Ústí nad Labem. Prohlédněte si naši práci a napište nám.',
};

const sluzby = [
  {
    kind: 'Světelná & 3D písmena',
    size: 'od pár cm do ~3 m',
    text:
      'Prosvětlená písmena na nosné konstrukci, LED zdroje, do interiéru i exteriéru. Frézovaná 3D písmena, když má být firma vidět už z dálky.',
  },
  {
    kind: 'Světelné boxy',
    size: 'takřka bez limitu velikosti',
    text:
      'Jedno- i oboustranné boxy vystrčené do prostoru, libovolný tvar. Varianta, kde svítí jen vyfrézovaná písmena v čele.',
  },
  {
    kind: 'Tabule & polepy',
    size: 'jakýkoli rozměr i tvar',
    text:
      'Levnější nesvětelná nástěnná reklama, i s nasvícením. Polepy vozidel, výloh a reklamních pylonů. Dovnitř i ven.',
  },
];

const reference = [
  {
    zakaznik: 'Husky',
    obor: 'outdoor — stany, spacáky, oblečení',
    typ: 'Světelný box',
    rozmer: '3 × 1 m',
    popis: 'Prosvětlený box, ve kterém svítí jen písmena vyfrézovaná do čelní plochy.',
  },
  {
    zakaznik: 'Pierburg, s.r.o.',
    obor: 'komponenty pro motory v automobilovém průmyslu',
    typ: 'Reklamní pylon',
    rozmer: '4 × 1 m',
    popis: 'Prosvícený pylon u vjezdu do areálu — první, co návštěvník uvidí.',
  },
  {
    zakaznik: 'Fans',
    obor: 'výstavba a rekonstrukce chladicích věží',
    typ: 'Světelná písmena',
    rozmer: '2 × 0,5 m',
    popis: 'Diodami prosvětlená písmena na nosné konstrukci, montáž na fasádu.',
  },
];

const klienti = ['RAVEL, spol. s r.o.', 'ZOO Ústí nad Labem', 'Pierburg, s.r.o.', 'Husky'];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="A NEON — světelná reklama">
          <span className="wordmark__tube">A</span>
          <span className="wordmark__neon">NEON</span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#reference">Naše práce</a>
          <a href="tel:+420603803999" className="nav__call">603&nbsp;803&nbsp;999</a>
        </nav>
      </header>

      <section className="hero">
        <img
          className="hero__img"
          src="/hero.webp"
          alt="Prosvětlená písmena z dílny A NEON svítící na fasádě po setmění"
        />
        <div className="hero__scrim" aria-hidden="true" />
        <div className="hero__copy">
          <p className="hero__eyebrow">Ústí nad Labem · Trmice · od roku 1998</p>
          <h1 className="hero__title">
            Vyrábíme jméno,
            <br />
            které <span className="glow">svítí</span> po setmění.
          </h1>
          <p className="hero__lead">
            Světelná a 3D písmena, LED boxy a reklamní pylony. Od návrhu přes frézování
            po montáž na fasádu — celé u nás, na klíč.
          </p>
          <div className="hero__cta">
            <a className="btn btn--solid" href="#reference">Prohlédnout naši práci</a>
            <a className="btn btn--ghost" href="mailto:info@aneon.cz">Poslat poptávku</a>
          </div>
        </div>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="sec-head">
          <p className="eyebrow">Co pro vás rozsvítíme</p>
          <h2 id="sluzby-nadpis">Reklama, kterou je vidět — dovnitř i ven</h2>
          <p className="sec-lead">
            Všechno dodáváme na klíč: rozměry, tvary i LED zdroje řešíme podle vaší fasády,
            ne podle katalogu.
          </p>
        </div>
        <ul className="cards">
          {sluzby.map((s, i) => (
            <li className="card" key={s.kind}>
              <span className="card__num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="card__kind">{s.kind}</h3>
              <p className="card__size">{s.size}</p>
              <p className="card__text">{s.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="reference" id="reference" aria-labelledby="ref-nadpis">
        <div className="reference__grid">
          <div className="reference__intro">
            <p className="eyebrow eyebrow--light">Vybrané realizace</p>
            <h2 id="ref-nadpis">Kousek Ústí, který svítí naší prací</h2>
            <p className="sec-lead sec-lead--light">
              Od pylonu u příjezdové cesty po písmena na fasádě haly. Každá zakázka má
              jiné rozměry, materiál i podklad — tady je pár, které rádi ukazujeme.
            </p>
            <img
              className="reference__photo"
              src="/section-1.webp"
              alt="Detail výroby a montáže světelné reklamy v dílně A NEON"
            />
            <p className="klienti__label">Spolupracujeme mimo jiné s:</p>
            <ul className="klienti">
              {klienti.map((k) => (
                <li key={k}>{k}</li>
              ))}
            </ul>
          </div>

          <ul className="ref-list">
            {reference.map((r) => (
              <li className="ref-item" key={r.zakaznik}>
                <div className="ref-item__top">
                  <span className="ref-item__typ">{r.typ}</span>
                  <span className="ref-item__rozmer">{r.rozmer}</span>
                </div>
                <p className="ref-item__zak">{r.zakaznik}</p>
                <p className="ref-item__obor">{r.obor}</p>
                <p className="ref-item__popis">{r.popis}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

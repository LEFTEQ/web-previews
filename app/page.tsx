import './globals.css';

export const metadata = {
  title: 'Plážový klub Pískomil — beachvolejbal v Olomouci',
  description:
    'Písek, síť a olomoucké léto. Rezervace hřišť, tréninky pro děti i dospělé, kempy a Hobby Tour. Plážový klub Pískomil, Olomouc.',
  openGraph: {
    title: 'Plážový klub Pískomil — beachvolejbal v Olomouci',
    description:
      'Rezervuj si hřiště, přijď na trénink nebo se přidej na Hobby Tour. Beachvolejbal pro celou rodinu v Olomouci.',
    type: 'website',
    locale: 'cs_CZ',
    images: ['/hero.webp'],
  },
};

const kurzy = [
  {
    cislo: 'Po–Pá',
    nazev: 'Tréninky pro veřejnost',
    popis:
      'Od května do konce září. Přijdeš, dostaneš míč, trenér tě postaví na správnou stranu sítě. Bez ohledu na to, jestli hraješ deset let nebo poprvé.',
    detail: 'Květen – září',
  },
  {
    cislo: '7–13',
    nazev: 'Příměstský tábor s Pískomilem',
    popis:
      'Sportovní příměstský tábor pro děti od 7 do 13 let. Celý týden na písku, ráno je předáš, odpoledne si vyzvedneš unavené a spokojené.',
    detail: 'Léto v Olomouci',
  },
  {
    cislo: 'Víkend',
    nazev: 'Beachkempy',
    popis:
      'Tradiční víkendové kempy v beachvolejbale pro hráče všech úrovní. Dva dny, spousta odehraných míčů a lidí, kteří to hrají rádi.',
    detail: 'Sezóna 2026',
  },
  {
    cislo: 'Open',
    nazev: 'Pískomil Hobby Tour',
    popis:
      'Chceš si zahrát beachvolejbal bez ohledu na úroveň? Hobby Tour je série turnajů, kam patří i ti, co nikdy nehráli na krajském poháru.',
    detail: 'Turnaje přes celou sezónu',
  },
];

export default function Page() {
  return (
    <main className="pm">
      <header className="pm-nav" aria-label="Hlavní navigace">
        <a className="pm-brand" href="#top" aria-label="Plážový klub Pískomil, domů">
          <span className="pm-brand-mark" aria-hidden="true">·:·</span>
          <span className="pm-brand-word">
            Pískomil
            <em>plážový klub · Olomouc</em>
          </span>
        </a>
        <nav className="pm-links">
          <a href="#kurzy">Co hrajeme</a>
          <a href="#klub">O klubu</a>
          <a className="pm-cta" href="#rezervace">Rezervovat hřiště</a>
        </nav>
      </header>

      <section className="pm-hero" id="top">
        <div className="pm-hero-media">
          <img
            src="/hero.webp"
            alt="Beachvolejbalové hřiště Pískomilu v Olomouci — písek, síť a hráči při rozehře"
            className="pm-hero-img"
          />
        </div>
        <div className="pm-hero-body">
          <p className="pm-eyebrow">Olomouc · beachvolejbal od roku 2011</p>
          <h1 className="pm-hero-title">
            Nazutí bot<br />
            si tu <span className="pm-hl">nikdo</span><br />
            nedělá.
          </h1>
          <p className="pm-hero-lede">
            Písek, síť a olomoucké léto. Rezervuj si hřiště na hodinu, přijď
            na trénink nebo přiveď děti na tábor. Bosou nohou to jde líp.
          </p>
          <div className="pm-hero-actions">
            <a className="pm-btn" href="#rezervace">Rezervovat hřiště</a>
            <a className="pm-btn pm-btn-ghost" href="#kurzy">
              Přijít na trénink
            </a>
          </div>
        </div>
      </section>

      <section className="pm-section" id="kurzy" aria-labelledby="kurzy-nadpis">
        <div className="pm-section-head">
          <p className="pm-eyebrow">Co u nás na písku jde</p>
          <h2 id="kurzy-nadpis">Od prvního odbití po Hobby Tour</h2>
          <p className="pm-section-lede">
            Trénujeme děti i dospělé a pořádáme akce, na které se každý rok
            vrací pořád ti samí lidé. Vyber si, kam přijdeš.
          </p>
        </div>
        <ul className="pm-cards">
          {kurzy.map((k) => (
            <li className="pm-card" key={k.nazev}>
              <span className="pm-card-tag">{k.cislo}</span>
              <h3>{k.nazev}</h3>
              <p>{k.popis}</p>
              <span className="pm-card-detail">{k.detail}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="pm-klub" id="klub" aria-labelledby="klub-nadpis">
        <div className="pm-klub-media">
          <img
            src="/section-1.webp"
            alt="Mladí hráči Pískomilu při tréninku na beachvolejbalovém kurtu"
          />
        </div>
        <div className="pm-klub-body">
          <p className="pm-eyebrow">O klubu</p>
          <h2 id="klub-nadpis">
            Trénujeme děti i dospělé a pořádáme akce už přes deset let
          </h2>
          <p>
            Pískomil je olomoucký plážový klub, kde se hraje beachvolejbal
            celou sezónu — od května do konce září. Máme trenéry pro mládež
            i pro dospělé, kteří to chtějí hrát líp, a hřiště, na která si
            může kdokoli rezervovat hodinu.
          </p>
          <dl className="pm-facts">
            <div>
              <dt>Kde</dt>
              <dd>Olomouc, na písku Pískomilu</dd>
            </div>
            <div>
              <dt>Kdy</dt>
              <dd>Sezóna květen–září</dd>
            </div>
            <div>
              <dt>Pro koho</dt>
              <dd>Děti 7–13, mládež, dospělí</dd>
            </div>
          </dl>
          <figure className="pm-quote">
            <blockquote>
              „Chceš si zahrát beachvolejbal bez ohledu na úroveň? U nás
              patří na kurt každý.“
            </blockquote>
            <figcaption>— trenéři Pískomilu</figcaption>
          </figure>
        </div>
      </section>

      <section className="pm-rezervace" id="rezervace" aria-labelledby="rez-nadpis">
        <img
          src="/section-2.webp"
          alt="Volné beachvolejbalové kurty Pískomilu připravené k rezervaci"
          className="pm-rez-img"
        />
        <div className="pm-rez-body">
          <p className="pm-eyebrow">Online rezervace</p>
          <h2 id="rez-nadpis">Vezmi partu a zaber si hřiště na hodinu</h2>
          <p>
            Rezervace běží online — vybereš si den, čas a volný kurt.
            Nikoho nemusíš shánět, stačí přijít v botách, které stejně
            vyzuješ.
          </p>
          <a className="pm-btn" href="#rezervace">Rezervovat hřiště</a>
        </div>
      </section>
    </main>
  );
}

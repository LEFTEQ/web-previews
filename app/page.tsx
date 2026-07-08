export default function Page() {
  const specializace = [
    {
      cislo: "01",
      obor: "Obchodní a korporátní právo",
      popis: "Zakládání a přeměny společností, smlouvy, valné hromady, prodeje podílů. Vedeme firmu od první listiny k podpisu.",
    },
    {
      cislo: "02",
      obor: "Nemovitosti a stavební právo",
      popis: "Kupní a nájemní smlouvy, věcná břemena, převody, stavební řízení. Úschova kupní ceny v advokátní úschově.",
    },
    {
      cislo: "03",
      obor: "Občanské a pracovní právo",
      popis: "Spory ze smluv, náhrada škody, ukončení pracovního poměru, náhrady mezd. Řešíme věci lidí i firem.",
    },
    {
      cislo: "04",
      obor: "Sporná agenda a směnky",
      popis: "Zastupování před soudy a rozhodci, vymáhání pohledávek, směnečné řízení. Jdeme až k pravomocnému rozsudku.",
    },
    {
      cislo: "05",
      obor: "Insolvence a pohledávky",
      popis: "Přihlášky do insolvence, incidenční spory, řešení předlužení. Hlídáme lhůty, které se nedají vrátit.",
    },
    {
      cislo: "06",
      obor: "Trestní a správní právo",
      popis: "Obhajoba, přestupky, zastupování ve správním řízení, ústavní stížnosti. Stojíme na vaší straně od výslechu dál.",
    },
  ];

  const zasady = [
    {
      teze: "Neříkáme, že to nejde.",
      text: "Nejdřív hledáme řešení. Teprve když ho po poctivém rozboru není, řekneme vám to na rovinu — a proč.",
    },
    {
      teze: "Vysvětlíme to bez paragrafů.",
      text: "Právo je náš jazyk, ne váš. Dostanete jasné stanovisko, kterému rozumíte, a víte, co bude následovat.",
    },
    {
      teze: "Jeden advokát, celý případ.",
      text: "Zastupitelnost v týmu funguje, ale svého člověka poznáte jménem. Nepředáváme vás dokola.",
    },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Muzikář — advokátní kancelář, úvod">
          <span className="wordmark__name">Muzikář</span>
          <span className="wordmark__tag">advokátní kancelář · Brno</span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#sluzby">Právní služby</a>
          <a href="#o-nas">O kanceláři</a>
          <a className="topnav__phone" href="tel:+420543236362">543 236 362</a>
        </nav>
      </header>

      <section className="hero" id="hero">
        <div className="hero__frame">
          <img
            className="hero__img"
            src="/hero.webp"
            alt="Interiér advokátní kanceláře Muzikář na Havlíčkově ulici v Brně"
          />
          <div className="hero__stamp" aria-hidden="true">
            <span className="hero__stamp-est">EST.</span>
            <span className="hero__stamp-year">1992</span>
          </div>
        </div>

        <div className="hero__text">
          <p className="eyebrow">Havlíčkova 13 · 602 00 Brno</p>
          <h1 className="hero__title">
            Neříkáme,<br />
            <em>že to nejde.</em>
          </h1>
          <p className="hero__lead">
            Advokátní kancelář JUDr. Vladimíra Muzikáře. Přes třicet let
            zastupujeme brněnské firmy i jednotlivce — od první smlouvy až
            k pravomocnému rozsudku. Nejdřív hledáme řešení.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="tel:+420543236362">
              Zavolat kanceláři
            </a>
            <a className="btn btn--ghost" href="mailto:sekretariat@mpak.cz">
              Napsat sekretariátu
            </a>
          </div>
          <dl className="hero__meta">
            <div>
              <dt>Praxe</dt>
              <dd>od roku 1992</dd>
            </div>
            <div>
              <dt>Parkování</dt>
              <dd>zóna C zdarma, 6–17 h</dd>
            </div>
            <div>
              <dt>Jazyky</dt>
              <dd>česky · anglicky</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="sluzby" id="sluzby">
        <div className="section-head">
          <p className="eyebrow">Rejstřík specializací</p>
          <h2 className="section-title">Dvanáct oborů práva. Jeden tým, který se v nich vyzná.</h2>
          <p className="section-note">
            Kancelář stojí na interní specializaci a vzájemné zastupitelnosti —
            svého advokáta neztratíte ani na dovolené. Vyberte oblast, která se
            týká vašeho případu.
          </p>
        </div>

        <ol className="docket">
          {specializace.map((s) => (
            <li className="docket__item" key={s.cislo}>
              <span className="docket__num" aria-hidden="true">
                § {s.cislo}
              </span>
              <h3 className="docket__obor">{s.obor}</h3>
              <p className="docket__popis">{s.popis}</p>
            </li>
          ))}
        </ol>

        <p className="docket__more">
          Řešíte i zdravotní právo, IT a duševní vlastnictví, ústavní či evropské
          právo? Zastoupíme vás i tam — <a href="mailto:sekretariat@mpak.cz">napište nám</a>, o jakou věc jde.
        </p>
      </section>

      <section className="o-nas" id="o-nas">
        <div className="o-nas__media">
          <img
            className="o-nas__img"
            src="/section-1.webp"
            alt="Advokát JUDr. Vladimír Muzikář při jednání v kanceláři"
          />
          <img
            className="o-nas__img o-nas__img--sec"
            src="/section-2.webp"
            alt="Detail spisů a právních dokumentů v kanceláři Muzikář v Brně"
          />
        </div>

        <div className="o-nas__body">
          <p className="eyebrow">Jak pracujeme</p>
          <h2 className="section-title">
            Renomovaná brněnská kancelář s&nbsp;osobním přístupem.
          </h2>
          <p className="o-nas__intro">
            Patříme mezi nejvýznamnější advokátní kanceláře v Brně. Přes třicet
            let si budujeme pověst na vysoké profesionalitě a osobním jednání —
            pro českou i zahraniční klientelu. Přesvědčte se sami.
          </p>

          <ul className="zasady">
            {zasady.map((z, i) => (
              <li className="zasady__item" key={i}>
                <p className="zasady__teze">{z.teze}</p>
                <p className="zasady__text">{z.text}</p>
              </li>
            ))}
          </ul>

          <div className="kontakt-card">
            <p className="kontakt-card__label">Jste na správné adrese</p>
            <p className="kontakt-card__adresa">
              Havlíčkova 13, 602 00 Brno
            </p>
            <p className="kontakt-card__radek">
              <a href="tel:+420543236362">543 236 362</a>
              <span aria-hidden="true"> · </span>
              <a href="tel:+420606644864">606 644 864</a>
            </p>
            <p className="kontakt-card__radek">
              <a href="mailto:sekretariat@mpak.cz">sekretariat@mpak.cz</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

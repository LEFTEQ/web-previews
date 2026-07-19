import { AiImage } from "./_ui";
import { HeroTag, StampRow } from "./motion";

// International laundry-care glyphs, repurposed as FAJN sekáč's icon language.
function GWash() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3.5 9.5 6 19.2a1.2 1.2 0 0 0 1.15.8h9.7a1.2 1.2 0 0 0 1.15-.8L20.5 9.5" />
      <path d="M3 9.5C4.5 7.5 6 7.5 7.5 9.5S10.5 11.5 12 9.5 15 7.5 16.5 9.5 19.5 11.5 21 9.5" />
    </svg>
  );
}
function GBleach() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3.5 20.5 19H3.5Z" />
    </svg>
  );
}
function GDry() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="5" width="16" height="14" rx="1.5" />
      <circle cx="12" cy="12" r="4.2" />
    </svg>
  );
}
function GIron() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 16.5 21 13.4C19.4 8.8 15 7.6 11 8.7L3.6 10.7Z" />
      <path d="M3.4 16.7 14 16.7" />
    </svg>
  );
}
function GClean() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
    </svg>
  );
}

const catalog = [
  {
    code: "2ND·LIFE·001",
    Glyph: GWash,
    title: "Ručně vytříděné kousky",
    body: "Každý kus bereme do ruky, prohlédneme švy i materiál a rozhodneme, jestli je fajn. V regálech skončí jen to nejlepší.",
    tag: "nejvyšší kvalita",
  },
  {
    code: "2ND·LIFE·002",
    Glyph: GBleach,
    title: "Značky za zlomek ceny",
    body: "Vzpomeň si na jakoukoli trendy značku — u nás ji nejspíš najdeš z druhé ruky, za desetinu původní cenovky.",
    tag: "originál, ne kopie",
  },
  {
    code: "2ND·LIFE·003",
    Glyph: GDry,
    title: "Sport a outdoor",
    body: "Na hory, do haly i na běžky. Funkční vrstvy, bundy a boty prověřené předchozím majitelem — a připravené na další sezónu.",
    tag: "na hory i do města",
  },
  {
    code: "2ND·LIFE·004",
    Glyph: GIron,
    title: "Sezónní naskladnění",
    body: "Léto, podzim, zima — sortiment se točí každý týden. Přijď dvakrát a nikdy neuvidíš stejný věšák dvakrát.",
    tag: "čerstvě naskladněno",
  },
];

const prodejny = [
  { code: "STORE·OVA", mesto: "Ostrava", detail: "Ukázková 123, Ostrava", note: "vlajková prodejna" },
  { code: "STORE·OLC", mesto: "Olomouc", detail: "otevřeno po–ne, 8:30–19:00", note: "nová adresa" },
  { code: "STORE·BNO", mesto: "Brno", detail: "nově otevřeno v centru", note: "přijď na otvíračku" },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <span className="topbar-mark">FAJN<span>·</span>sekáč</span>
        <nav className="topbar-nav" aria-label="Hlavní navigace">
          <a href="#katalog">Katalog</a>
          <a href="#prodejny">Prodejny</a>
          <a href="#onas">O nás</a>
        </nav>
      </header>

      {/* HERO — the swing-tag drops on its string and settles */}
      <section className="hero section" aria-labelledby="hero-title">
        <div className="hero-string" aria-hidden="true" />
        <HeroTag>
          <span className="grommet" aria-hidden="true" />
          <p className="eyebrow">EST. OSTRAVA · SLOW FASHION · SECOND HAND</p>
          <h1 id="hero-title" className="wordmark">
            <span className="wordmark-heavy">FAJN</span>
            <span className="wordmark-light">sekáč</span>
          </h1>
          <p className="hero-lead">Dáváme oblečení druhou šanci. Recyklace je fajn — a nosit se dá s ní elegantně.</p>
          <StampRow>
            <span className="glyph"><GWash /></span>
            <span className="glyph"><GBleach /></span>
            <span className="glyph"><GDry /></span>
            <span className="glyph"><GIron /></span>
            <span className="glyph"><GClean /></span>
          </StampRow>
          <p className="care-note">PÉČE O ŠATNÍK · KUPUJ MÉNĚ, VYBÍREJ LÉPE · MADE FOR REUSE</p>
        </HeroTag>
      </section>

      {/* CATALOG — every module is a care label */}
      <section id="katalog" className="section" aria-labelledby="katalog-title">
        <div className="section-head">
          <p className="eyebrow">CO U NÁS NAJDEŠ</p>
          <h2 id="katalog-title" className="section-title">Katalog druhé šance</h2>
          <p className="section-sub">Žádná náhoda a žádná hromada. Čtyři linie, ze kterých plníme regály — každý kus prošel kontrolou jako přes pračku na 40°.</p>
        </div>
        <ul className="catalog">
          {catalog.map(({ code, Glyph, title, body, tag }) => (
            <li key={code} className="swing-tag catalog-item">
              <span className="grommet grommet-sm" aria-hidden="true" />
              <div className="catalog-top">
                <span className="code">{code}</span>
                <span className="catalog-glyph"><Glyph /></span>
              </div>
              <h3 className="catalog-title">{title}</h3>
              <p className="catalog-body">{body}</p>
              <span className="catalog-tag">{tag}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* TRUST — the water stat as a stamped care-label stat + about + stores */}
      <section id="onas" className="section trust" aria-labelledby="onas-title">
        <div className="trust-grid">
          <div className="about swing-tag">
            <span className="grommet grommet-sm" aria-hidden="true" />
            <p className="eyebrow">O NÁS · PROČ SEKÁČ</p>
            <h2 id="onas-title" className="section-title">Nakupování v sekáči může být fajn</h2>
            <p className="about-body">V našich prodejnách najdeš jen pečlivě vytříděné kousky nejvyšší kvality, které jinde jen tak neuvidíš. Každý kus posuzujeme jednotlivě — bere se do ruky, prohlédne a schválí. Jsme víc než jen sekáč.</p>
            <p className="about-body">Přijď se přesvědčit, že móda z druhé ruky vypadá dobře a šetří vodu, peníze i planetu.</p>
          </div>

          <div className="stat swing-tag">
            <span className="grommet grommet-sm" aria-hidden="true" />
            <p className="stat-stamp">SPOTŘEBA VODY · NOVÉ TRIČKO</p>
            <p className="stat-number">2500<span className="stat-unit"> litrů</span></p>
            <p className="stat-body">Tolik vody spotřebuje výroba jediného nového trička — skoro 278 balení balené vody. Každý kousek z druhé ruky je voda, která nemusela odtéct.</p>
            <div className="stat-care" aria-hidden="true">
              <span className="glyph glyph-green"><GWash /></span>
              <span className="glyph glyph-green"><GClean /></span>
            </div>
          </div>
        </div>

        <div id="prodejny" className="stores">
          <p className="eyebrow">NAŠE FAJN PRODEJNY</p>
          <ul className="store-list">
            {prodejny.map(({ code, mesto, detail, note }) => (
              <li key={code} className="swing-tag store-item">
                <span className="grommet grommet-sm" aria-hidden="true" />
                <span className="code">{code}</span>
                <h3 className="store-city">{mesto}</h3>
                <p className="store-detail">{detail}</p>
                <span className="store-note">{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

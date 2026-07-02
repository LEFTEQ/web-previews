// V-PODLAHY, s.r.o. — Plzeň — parkety
// Signature: typografické hero postavené jako pokládka parket — „rybina“ (herringbone)
// z pruhů dřevěných odstínů, do které je vsazený nadpis. Celý web stojí na vrstvách dřeva.

const sluzby = [
  {
    krok: "Pokládka",
    nazev: "Masivní a třívrstvé parkety",
    popis:
      "Dub, jasan, ořech. Klasické vlysy, rybinu i francouzský vzor pokládáme na lepení i plovoucím způsobem — podle podkladu a provozu ve vaší místnosti.",
    detail: "vlys · rybina · prkno",
  },
  {
    krok: "Renovace",
    nazev: "Broušení a nová povrchová úprava",
    popis:
      "Starou podlahu přebrousíme na čisté dřevo, vytmelíme spáry a zakončíme olejem nebo lakem. Většinu bytových pokojů zvládneme za dva až tři dny.",
    detail: "bezprašné broušení",
  },
  {
    krok: "Podklad",
    nazev: "Vyrovnání a příprava podlahy",
    popis:
      "Změříme vlhkost a rovinnost, uděláme stěrku nebo samonivelaci. Bez správného podkladu neručí za parkety nikdo — proto s ním vždy začínáme.",
    detail: "měření vlhkosti zdarma",
  },
  {
    krok: "Údržba",
    nazev: "Olejování a péče o dřevo",
    popis:
      "Poradíme, čím podlahu mýt a kdy ji znovu naolejovat. Na požádání provedeme údržbový nátěr — podlaha pak vydrží další roky bez renovace.",
    detail: "oleje Osmo a Bona",
  },
];

const reference = [
  {
    misto: "Byt na Slovanech, Plzeň",
    text:
      "Rybina z dubu v obýváku a ložnici. Pánové přišli přesně, položeno za čtyři dny včetně lišt. Podlaha je rovná a spáry nikde.",
    jmeno: "rodina Šimánkova",
  },
  {
    misto: "Rodinný dům, Starý Plzenec",
    text:
      "Renovace padesát let starých vlysů po babičce. Mysleli jsme, že půjdou vyhodit — po přebroušení a naolejování vypadají líp než nové.",
    jmeno: "pan Kraus",
  },
  {
    misto: "Ordinace, Plzeň-Bory",
    text:
      "Potřebovali jsme podlahu do provozu s vysokou zátěží. Doporučili třívrstvý dub s tvrdým lakem, položili o víkendu, v pondělí jsme ordinovali.",
    jmeno: "MUDr. Vlachová",
  },
];

export default function Page() {
  return (
    <main className="vp">
      {/* ============ HERO ============ */}
      <header className="vp-hero">
        <div className="vp-hero-top">
          <span className="vp-wordmark">
            <span className="vp-wordmark-v">V—</span>PODLAHY
          </span>
          <span className="vp-hero-loc">Plzeň · parketářství</span>
        </div>

        {/* signature: herringbone z CSS pruhů */}
        <div className="vp-herring" aria-hidden="true">
          <div className="vp-herring-row">
            <span className="h1a" /><span className="h2a" /><span className="h3a" /><span className="h4a" /><span className="h1a" /><span className="h2a" /><span className="h3a" /><span className="h4a" /><span className="h1a" /><span className="h2a" />
          </div>
          <div className="vp-herring-row vp-herring-row--alt">
            <span className="h3a" /><span className="h1a" /><span className="h4a" /><span className="h2a" /><span className="h3a" /><span className="h1a" /><span className="h4a" /><span className="h2a" /><span className="h3a" /><span className="h1a" />
          </div>
        </div>

        <h1 className="vp-hero-title">
          <span className="vp-hero-line vp-hero-line--1">Dřevo pod nohama,</span>
          <span className="vp-hero-line vp-hero-line--2">položené <em>na jistotu.</em></span>
        </h1>

        <p className="vp-hero-sub">
          Pokládáme a renovujeme parketové podlahy v Plzni a okolí. Od změření
          podkladu po poslední lištu — jedna parta, jeden podpis, záruka na práci.
        </p>

        <div className="vp-hero-facts">
          <div className="vp-fact">
            <strong>od r. 2004</strong>
            <span>parketářské řemeslo</span>
          </div>
          <div className="vp-fact">
            <strong>dub · jasan · ořech</strong>
            <span>masiv i třívrstvé</span>
          </div>
          <div className="vp-fact">
            <strong>Plzeň a okolí</strong>
            <span>zaměření zdarma do 30 km</span>
          </div>
        </div>
      </header>

      {/* ============ SLUŽBY ============ */}
      <section className="vp-sluzby" aria-labelledby="sluzby-h">
        <div className="vp-section-head">
          <span className="vp-eyebrow">Co pro vás uděláme</span>
          <h2 id="sluzby-h">
            Podlaha vzniká po vrstvách.
            <br />
            My hlídáme každou z nich.
          </h2>
        </div>

        <div className="vp-sluzby-grid">
          {sluzby.map((s) => (
            <article className="vp-karta" key={s.krok}>
              <div className="vp-karta-head">
                <span className="vp-karta-krok">{s.krok}</span>
                <span className="vp-karta-detail">{s.detail}</span>
              </div>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
            </article>
          ))}
        </div>

        <p className="vp-sluzby-note">
          Nevíte, jestli váš podklad parkety unese? Přijedeme, změříme vlhkost a
          rovinnost a řekneme vám to na rovinu — zaměření je v Plzni a okolí zdarma.
        </p>
      </section>

      {/* ============ REFERENCE ============ */}
      <section className="vp-reference" aria-labelledby="reference-h">
        <div className="vp-section-head vp-section-head--light">
          <span className="vp-eyebrow">Reference z Plzeňska</span>
          <h2 id="reference-h">Po našich podlahách se chodí roky.</h2>
          <p className="vp-section-perex">
            Většina zakázek k nám přichází na doporučení. Tady je pár posledních —
            adresy rádi upřesníme, majitelé vás k podlaze klidně pustí.
          </p>
        </div>

        <div className="vp-ref-grid">
          {reference.map((r) => (
            <figure className="vp-ref" key={r.misto}>
              <figcaption className="vp-ref-misto">{r.misto}</figcaption>
              <blockquote>
                <p>„{r.text}“</p>
              </blockquote>
              <span className="vp-ref-jmeno">— {r.jmeno}</span>
            </figure>
          ))}
        </div>

        <div className="vp-duvera">
          <div className="vp-duvera-item">
            <strong>Záruka 5 let</strong>
            <span>na pokládku i renovaci, písemně ve smlouvě</span>
          </div>
          <div className="vp-duvera-item">
            <strong>Pevná cena předem</strong>
            <span>rozpočet po zaměření, žádné položky navíc</span>
          </div>
          <div className="vp-duvera-item">
            <strong>Uklizeno po nás</strong>
            <span>bezprašné broušení, odvoz staré podlahy</span>
          </div>
        </div>
      </section>
    </main>
  );
}

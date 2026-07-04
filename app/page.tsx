import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CANIS SAFETY — pracovní obuv, Plzeň",
  description:
    "Certifikovaná pracovní a bezpečnostní obuv pro montáž, stavbu i chladné provozy. Poradenství, měření a výdej přímo v Plzni.",
};

const standardy = [
  {
    kod: "SB",
    nazev: "Základní ochrana",
    popis:
      "Bezpečnostní tužinka do 200 J. Pro lehčí provozy, sklady a manipulaci, kde stačí ochrana špičky.",
  },
  {
    kod: "S1P",
    nazev: "Špička + protiskluz + planžeta",
    popis:
      "Antistatika, olejivzdorná podešev a průřezová vložka proti propíchnutí. Nejžádanější třída na dílny a montáže.",
  },
  {
    kod: "S3",
    nazev: "Voděodolná stavební",
    popis:
      "Ochrana proti průsaku vody, profilovaná podešev a zpevněná pata. Do bláta, na lešení a venkovní stavby.",
  },
  {
    kod: "S7S",
    nazev: "Zimní a chladné provozy",
    popis:
      "Zateplení, hřejivá stélka a podešev odolná mrazu i sněhu. Pro mrazírny a práci venku přes zimu.",
  },
];

const kroky = [
  {
    n: "01",
    titulek: "Změříme nohu",
    text:
      "Přijdete na prodejnu Na Roudné v Plzni. Změříme délku i šířku a vezmeme v úvahu vaše vložky a otoky ke konci směny.",
  },
  {
    n: "02",
    titulek: "Vybereme třídu podle rizika",
    text:
      "Podle vašeho provozu — svařování, chemie, mokro, mráz — doporučíme správnou bezpečnostní třídu, ne jen velikost.",
  },
  {
    n: "03",
    titulek: "Vyzkoušíte a odejdete obutí",
    text:
      "Skladem držíme velikosti 36–49. Co máme na prodejně, obujete hned. Pro firmy zařídíme hromadný výdej i fakturaci.",
  },
];

export default function Page() {
  return (
    <main className="pg">
      <header className="nav" aria-label="Hlavní">
        <a className="brand" href="#" aria-label="CANIS SAFETY, úvod">
          <span className="brand-mark" aria-hidden="true">
            <span className="brand-toe" />
          </span>
          <span className="brand-name">
            CANIS<span className="brand-thin">SAFETY</span>
          </span>
        </a>
        <span className="nav-loc">Plzeň · Na Roudné</span>
      </header>

      <section className="hero" aria-labelledby="hero-nadpis">
        <div className="hero-grid" aria-hidden="true">
          <div className="tread">
            {Array.from({ length: 44 }).map((_, i) => (
              <span key={i} style={{ animationDelay: `${(i % 11) * 0.03 + 0.2}s` }} />
            ))}
          </div>
        </div>

        <div className="hero-inner">
          <p className="eyebrow">
            <span className="eb-dot" aria-hidden="true" />
            Pracovní a bezpečnostní obuv · od roku 1993
          </p>

          <h1 id="hero-nadpis" className="hero-h1">
            Obuv, která<br />
            <span className="hero-accent">unese</span> celou směnu.
          </h1>

          <p className="hero-lead">
            V Plzni obujeme montéry, stavbaře i lidi z chladných provozů.
            Vybíráme podle rizika a tvaru vaší nohy — ne podle katalogu.
          </p>

          <div className="hero-cta">
            <a className="btn btn-solid" href="#nabidka">
              Prohlédnout třídy obuvi
            </a>
            <a className="btn btn-line" href="#jak">
              Jak vybíráme velikost
            </a>
          </div>

          <dl className="hero-stats">
            <div>
              <dt>Skladem</dt>
              <dd>36–49</dd>
            </div>
            <div>
              <dt>Nárazová ochrana</dt>
              <dd>200 J</dd>
            </div>
            <div>
              <dt>Normy</dt>
              <dd>EN&nbsp;ISO&nbsp;20345</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="sekce nabidka" id="nabidka" aria-labelledby="nabidka-nadpis">
        <div className="sekce-head">
          <p className="sekce-eyebrow">Podešev napoví, co obuv zvládne</p>
          <h2 id="nabidka-nadpis">Bezpečnostní třídy, kterým rozumíme za vás</h2>
          <p className="sekce-lead">
            Kód na jazyku boty rozhoduje o tom, jestli vydrží svařovací jiskry,
            hřebík nebo mráz. Tady je, co pro vás znamená v praxi.
          </p>
        </div>

        <ul className="karty">
          {standardy.map((s) => (
            <li key={s.kod} className="karta">
              <span className="karta-kod">{s.kod}</span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="sekce jak" id="jak" aria-labelledby="jak-nadpis">
        <div className="sekce-head">
          <p className="sekce-eyebrow">Jak to u nás chodí</p>
          <h2 id="jak-nadpis">Od změření nohy k první směně</h2>
          <p className="sekce-lead">
            Špatně padnoucí bezpečnostní obuv nebolí jen nohy — člověk ji sundá
            a přestane být chráněný. Proto začínáme měřením, ne prodejem.
          </p>
        </div>

        <ol className="kroky">
          {kroky.map((k) => (
            <li key={k.n} className="krok">
              <span className="krok-n" aria-hidden="true">
                {k.n}
              </span>
              <div className="krok-txt">
                <h3>{k.titulek}</h3>
                <p>{k.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="duvera">
          <p className="duvera-txt">
            „Firmám ušetříme reklamace tím, že správnou třídu vybereme hned
            napoprvé. Certifikáty i faktury dodáme na jeden podpis.“
          </p>
          <p className="duvera-kdo">
            Provozovna CANIS SAFETY · Na Roudné, Plzeň · po–pá 7:00–15:00
          </p>
        </div>
      </section>
    </main>
  );
}

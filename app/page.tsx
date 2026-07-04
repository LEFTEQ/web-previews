import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Molnár Tibor — pokládka a renovace masivních parket v Praze",
  description:
    "Od roku 1995 pokládáme, brousíme a lakujeme masivní dřevěné podlahy v Praze. Rošt, klasické vzory i renovace starých parket — s citem pro dřevo a přesnou prací.",
  openGraph: {
    title: "Molnár Tibor — parkety Praha",
    description:
      "Masivní parkety od roku 1995. Pokládka, broušení, lakování a renovace v Praze.",
    type: "website",
    locale: "cs_CZ",
  },
};

const vzory = [
  {
    kod: "01",
    nazev: "Rybí kost",
    popis:
      "Klasický parketový vzor, který drží tvar i po desetiletích. Klademe ho v původních bytech i v novostavbách.",
  },
  {
    kod: "02",
    nazev: "Francouzská jelení kost",
    popis:
      "Řezané konce pod úhlem, přesné spáry. Náročnější na pokládku — a právě proto ho děláme rádi.",
  },
  {
    kod: "03",
    nazev: "Paluba a kazety",
    popis:
      "Dlouhé lamely nebo ruční intarzované kazety. Vybereme dřevinu i směr podle světla v místnosti.",
  },
];

const sluzby = [
  {
    nazev: "Pokládka masivních parket",
    detail:
      "Dub, jasan, buk, ořech. Lepení i pokládka na rošt, včetně přípravy podkladu a měření vlhkosti.",
  },
  {
    nazev: "Broušení a renovace",
    detail:
      "Sundáme desítky let laku a poškrábání. Ze staré, tmavé podlahy uděláme znovu tu původní.",
  },
  {
    nazev: "Lakování a olejování",
    detail:
      "Tvrdý lak do provozu nebo přírodní olej pro matný, dýchající povrch. Poradíme, co vydrží u vás.",
  },
  {
    nazev: "Oprava a doplnění",
    detail:
      "Vyměníme prasklé lamely, doplníme chybějící kusy, srovnáme vrzající místa. Bez bourání celé podlahy.",
  },
];

export default function Page() {
  return (
    <main className="mt">
      <header className="mt-nav">
        <a className="mt-wordmark" href="#" aria-label="Molnár Tibor — parkety">
          <span className="mt-wordmark-name">Molnár</span>
          <span className="mt-wordmark-sub">Tibor · parkety</span>
        </a>
        <a className="mt-nav-link" href="tel:+420777000000">
          Zavolat
        </a>
      </header>

      <section className="mt-hero" aria-labelledby="hero-title">
        <div className="mt-hero-grain" aria-hidden="true">
          <div className="mt-plank mt-plank-1" />
          <div className="mt-plank mt-plank-2" />
          <div className="mt-plank mt-plank-3" />
          <div className="mt-plank mt-plank-4" />
          <div className="mt-plank mt-plank-5" />
          <div className="mt-plank mt-plank-6" />
        </div>
        <div className="mt-hero-inner">
          <p className="mt-eyebrow">Praha · masivní dřevo · od roku 1995</p>
          <h1 id="hero-title" className="mt-hero-title">
            Podlaha, po&nbsp;které
            <span className="mt-hero-title-em"> chodíte třicet let</span>
            <span className="mt-hero-title-line"> a pořád vypadá jako nová.</span>
          </h1>
          <p className="mt-hero-lead">
            Pokládáme a renovujeme masivní parkety v pražských bytech,
            vilách i kancelářích. Každou podlahu bereme jako kus dřeva,
            který přežije nábytek i nájemníky.
          </p>
          <div className="mt-hero-actions">
            <a className="mt-btn mt-btn-primary" href="tel:+420777000000">
              Zavolat a domluvit prohlídku
            </a>
            <a className="mt-btn mt-btn-ghost" href="#sluzby">
              Co děláme
            </a>
          </div>
        </div>
      </section>

      <section className="mt-section" id="sluzby" aria-labelledby="sluzby-title">
        <div className="mt-section-head">
          <p className="mt-eyebrow mt-eyebrow-dark">Řemeslo</p>
          <h2 id="sluzby-title" className="mt-section-title">
            Od holé mazaniny po hotovou podlahu
          </h2>
          <p className="mt-section-lead">
            Děláme celý proces, ne jen jeho části. Přijedeme se podívat,
            změříme vlhkost a stav podkladu a řekneme rovnou, co dává smysl
            — a co ne.
          </p>
        </div>

        <div className="mt-patterns">
          {vzory.map((v) => (
            <article className="mt-pattern" key={v.kod}>
              <span className={`mt-pattern-mark mt-pattern-mark-${v.kod}`} aria-hidden="true" />
              <div className="mt-pattern-body">
                <p className="mt-pattern-kod">Vzor {v.kod}</p>
                <h3 className="mt-pattern-name">{v.nazev}</h3>
                <p className="mt-pattern-popis">{v.popis}</p>
              </div>
            </article>
          ))}
        </div>

        <ul className="mt-services">
          {sluzby.map((s) => (
            <li className="mt-service" key={s.nazev}>
              <h3 className="mt-service-name">{s.nazev}</h3>
              <p className="mt-service-detail">{s.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-section mt-section-trust" aria-labelledby="onas-title">
        <div className="mt-trust-grid">
          <div className="mt-trust-text">
            <p className="mt-eyebrow mt-eyebrow-dark">O nás</p>
            <h2 id="onas-title" className="mt-section-title">
              Malá česká dílna. Velký respekt ke&nbsp;dřevu.
            </h2>
            <p className="mt-section-lead">
              Jsme malá firma z Prahy, která parketám rozumí od roku 1995.
              Většinu zakázek děláme sami, na některé se spojíme s partnery,
              se kterými spolupracujeme dlouhá léta. Nespěcháme — dřevo
              nemá rádo zbrklou práci.
            </p>
            <p className="mt-section-lead">
              Poradíme vám, jaká dřevina se hodí do vaší místnosti a jak
              se o hotovou podlahu starat, aby vydržela další generaci.
            </p>
          </div>

          <dl className="mt-facts">
            <div className="mt-fact">
              <dt>Pokládáme a renovujeme od roku</dt>
              <dd>1995</dd>
            </div>
            <div className="mt-fact">
              <dt>Nejčastější dřeviny</dt>
              <dd>dub · jasan · buk · ořech</dd>
            </div>
            <div className="mt-fact">
              <dt>Kde pracujeme</dt>
              <dd>Praha a okolí</dd>
            </div>
            <div className="mt-fact">
              <dt>Povrchy</dt>
              <dd>tvrdý lak · přírodní olej</dd>
            </div>
          </dl>
        </div>

        <blockquote className="mt-quote">
          <p>Milujeme parkety a parkety milují nás.</p>
          <cite>— jak to říkáme sami mezi sebou v dílně</cite>
        </blockquote>
      </section>
    </main>
  );
}

export const metadata = {
  title: "Flow Jet s.r.o. — Řízené protlaky a zemní práce, Brno",
  description:
    "Řízené horizontální protlaky pod silnicí, kolejemi i řekou bez rozkopání povrchu. Zemní práce a pokládka sítí v Brně a na jižní Moravě. Flow Jet s.r.o., Výstavní 34, Brno.",
  openGraph: {
    title: "Flow Jet s.r.o. — Protlak pod silnicí bez rozkopání",
    description:
      "Řízené protlaky, zemní práce a pokládka inženýrských sítí. Brno a jižní Morava.",
    locale: "cs_CZ",
    type: "website",
  },
};

const sluzby = [
  {
    id: "protlak",
    hloubka: "1,2–6 m",
    nazev: "Řízené horizontální protlaky",
    popis:
      "Protáhneme chráničku nebo potrubí pod silnicí, tramvajovou tratí, řekou i zástavbou — bez překopu a bez uzavírky. Vrtná hlava je řízená, trasu sledujeme lokátorem s přesností na centimetry.",
    parametry: ["průměr DN 63 – DN 400", "délka protlaku až 120 m", "bez zásahu do povrchu"],
  },
  {
    id: "site",
    hloubka: "0,8–2 m",
    nazev: "Pokládka inženýrských sítí",
    popis:
      "Vodovody, kanalizace, plynovody, optické a silové kabely. Výkop, pískové lože, pokládka, obsyp, hutnění po vrstvách a uvedení povrchu do původního stavu — vše na jednu objednávku.",
    parametry: ["voda, plyn, kanalizace", "optika a NN/VN kabely", "včetně geodetického zaměření"],
  },
  {
    id: "zemni",
    hloubka: "0–4 m",
    nazev: "Zemní a výkopové práce",
    popis:
      "Výkopy základů a přípojek, terénní úpravy, srovnání pozemku, odvoz zeminy. Pásové bagry od 1,8 do 14 tun — dostaneme se i na zahradu za rodinným domem v řadové zástavbě.",
    parametry: ["bagry 1,8 t – 14 t", "odvoz a uložení zeminy", "vjezd od šířky 1,9 m"],
  },
];

const duvody = [
  {
    titulek: "Silnici neuzavíráme",
    text: "Protlak vede pod vozovkou. Doprava jede dál, nemusíte řešit uzavírku, objízdné trasy ani povolení k překopu komunikace.",
  },
  {
    titulek: "Přes 20 let pod Brnem",
    text: "Firmu jsme založili v roce 2000. Protlaky jsme vedli pod Svitavou, pod tramvajovými tratěmi i pod výpadovkami na D1 a D2.",
  },
  {
    titulek: "Jedna parta, celá zakázka",
    text: "Od vytyčení sítí přes výkop startovací jámy po protokol o hutnění. Nepředáváme vás subdodavatelům — na stavbě potkáte pořád stejné lidi.",
  },
  {
    titulek: "Cenu řekneme předem",
    text: "Přijedeme na místo, posoudíme podloží a délku trasy a do tří dnů pošleme závaznou nabídku. Bez položek navíc na konci stavby.",
  },
];

export default function Page() {
  return (
    <main className="fj">
      {/* ===== HERO ===== */}
      <section className="fj-hero" aria-label="Flow Jet — řízené protlaky a zemní práce">
        <header className="fj-topbar">
          <span className="fj-wordmark">
            FLOW<span className="fj-wordmark-jet">JET</span>
            <span className="fj-wordmark-sub">zemní práce · Brno</span>
          </span>
          <a className="fj-topbar-tel" href="tel:+420602790492">
            +420 602 790 492
          </a>
        </header>

        <div className="fj-hero-grid">
          <div className="fj-hero-text">
            <p className="fj-hero-eyebrow">Řízené horizontální protlaky · jižní Morava</p>
            <h1 className="fj-hero-title">
              <span className="fj-hero-line1">Pod silnicí,</span>
              <span className="fj-hero-line2">ne skrz ni.</span>
            </h1>
            <p className="fj-hero-lead">
              Protáhneme vodu, plyn i optiku pod vozovkou, kolejemi nebo řekou —
              bez překopu, bez uzavírky, bez rozbitého asfaltu. Zemní práce
              a pokládka sítí v Brně a okolí od roku 2000.
            </p>
            <div className="fj-hero-cta">
              <a className="fj-btn fj-btn-primary" href="tel:+420602790492">
                Zavolat na stavbu
              </a>
              <a className="fj-btn fj-btn-ghost" href="mailto:flowjet@seznam.cz">
                Poslat poptávku
              </a>
            </div>
          </div>

          {/* Signature: řez terénem s trasou protlaku */}
          <figure className="fj-cut" aria-hidden="true">
            <div className="fj-cut-surface">
              <span className="fj-cut-road">vozovka — jede se dál</span>
            </div>
            <div className="fj-cut-ground">
              <div className="fj-strata fj-strata-1"><span>ornice</span></div>
              <div className="fj-strata fj-strata-2"><span>jíl</span></div>
              <div className="fj-strata fj-strata-3"><span>štěrkopísek</span></div>
              <svg className="fj-bore" viewBox="0 0 600 260" preserveAspectRatio="none">
                <path
                  className="fj-bore-path"
                  d="M -10 30 C 120 30, 160 180, 300 180 C 440 180, 480 30, 610 30"
                  fill="none"
                />
                <path
                  className="fj-bore-glow"
                  d="M -10 30 C 120 30, 160 180, 300 180 C 440 180, 480 30, 610 30"
                  fill="none"
                />
                <circle className="fj-bore-head" r="9" cx="300" cy="180" />
              </svg>
              <span className="fj-cut-label fj-cut-label-dn">DN 63 – DN 400</span>
              <span className="fj-cut-label fj-cut-label-len">až 120 m jedním tahem</span>
            </div>
            <figcaption className="fj-cut-caption">
              Řez terénem: trasa řízeného protlaku pod komunikací
            </figcaption>
          </figure>
        </div>

        <div className="fj-hero-strip" role="list" aria-label="Klíčové údaje">
          <span role="listitem"><strong>od 2000</strong> na jižní Moravě</span>
          <span role="listitem"><strong>DN 63–400</strong> průměry protlaků</span>
          <span role="listitem"><strong>120 m</strong> délka jedním tahem</span>
          <span role="listitem"><strong>0</strong> uzavírek kvůli nám</span>
        </div>
      </section>

      {/* ===== SLUŽBY ===== */}
      <section className="fj-sluzby" aria-labelledby="sluzby-h">
        <div className="fj-section-head">
          <h2 id="sluzby-h">Co pro vás uděláme</h2>
          <p>
            Tři věci děláme pořádně: protlaky, sítě a výkopy. U každé služby
            uvádíme hloubku, ve které se běžně pohybujeme.
          </p>
        </div>

        <div className="fj-sluzby-grid">
          {sluzby.map((s) => (
            <article className="fj-karta" key={s.id}>
              <div className="fj-karta-hloubka">
                <span className="fj-karta-hloubka-cislo">{s.hloubka}</span>
                <span className="fj-karta-hloubka-popisek">hloubka záběru</span>
              </div>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <ul className="fj-karta-parametry">
                {s.parametry.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="fj-duvera" aria-labelledby="duvera-h">
        <div className="fj-duvera-inner">
          <div className="fj-duvera-head">
            <h2 id="duvera-h">
              Proč stavbaři z Brna volají nám
            </h2>
            <p>
              Většina zakázek k nám chodí na doporučení — od stavebních firem,
              obcí a správců sítí, se kterými děláme opakovaně.
            </p>
          </div>

          <div className="fj-duvody">
            {duvody.map((d) => (
              <div className="fj-duvod" key={d.titulek}>
                <h3>{d.titulek}</h3>
                <p>{d.text}</p>
              </div>
            ))}
          </div>

          <blockquote className="fj-citace">
            <p>
              „Potřebovali jsme dostat vodovodní přípojku pod krajskou silnici
              u Šlapanic. Flow Jet přijel v pondělí, ve středu byla chránička
              pod cestou a řidiči si ničeho nevšimli.“
            </p>
            <cite>— stavbyvedoucí, výstavba RD Šlapanice, 2024</cite>
          </blockquote>

          <p className="fj-duvera-pata">
            Flow Jet s.r.o. · Výstavní 34, 603 00 Brno · IČO 26227703 ·
            zapsáno u Krajského soudu v Brně, sp. zn. C 38415
          </p>
        </div>
      </section>
    </main>
  );
}

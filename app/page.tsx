export const metadata = {
  title: "Břevnovská Lékárna — lékárna na Bělohorské, Praha 6",
  description:
    "Břevnovská Lékárna na Bělohorské v Praze 6. Recepty na počkání, poradenství u táry, magistraliter příprava mastí a kapek, kontrola lékových interakcí. Otevřeno každý všední den.",
  openGraph: {
    title: "Břevnovská Lékárna — Praha 6, Břevnov",
    description:
      "Vaše lékárna na Bělohorské. Recepty, poradenství, vlastní příprava léčiv podle receptury.",
    type: "website",
    locale: "cs_CZ",
  },
};

const sluzby = [
  {
    rx: "Rp.",
    nazev: "Výdej na recept i eRecept",
    text: "Kód z SMS nebo průkazka pojištěnce stačí. Recept vydáme na počkání a rovnou vám řekneme, jak lék užívat, s čím ho nekombinovat a co dělat, když dávku zapomenete.",
    signatura: "D.S. na počkání, bez objednání",
  },
  {
    rx: "Mag.",
    nazev: "Magistraliter — příprava na míru",
    text: "Masti, čípky, kapky a roztoky připravujeme přímo v naší laboratoři podle receptury od lékaře. Dermatologické a pediatrické přípravky, které v krabičce nekoupíte.",
    signatura: "M.f. ungt. — připravíme do druhého dne",
  },
  {
    rx: "Cons.",
    nazev: "Poradenství u táry",
    text: "Berete víc léků najednou? Projdeme je s vámi a pohlídáme interakce. Poradíme s volným prodejem, doplňky stravy i s tím, co pro vaši potíž opravdu dává smysl.",
    signatura: "Diskrétně, bez fronty na kase",
  },
  {
    rx: "Vac.",
    nazev: "Měření a prevence",
    text: "Změříme vám tlak zdarma, poradíme s cestovní lékárničkou před dovolenou a v sezóně vás upozorníme, kdy je čas na očkování proti chřipce.",
    signatura: "Přijďte kdykoli v otevírací době",
  },
];

const duvody = [
  {
    cislo: "27",
    jednotka: "let",
    text: "sloužíme Břevnovu na stejné adrese. Známe své pacienty jménem — a oni znají nás.",
  },
  {
    cislo: "4",
    jednotka: "magistry",
    text: "za tárou každý všední den. Vždy máte s kým probrat, co vás trápí.",
  },
  {
    cislo: "24",
    jednotka: "hodin",
    text: "maximálně čekáte na lék, který nemáme skladem. Objednáváme dvakrát denně.",
  },
];

export default function Page() {
  return (
    <main className="bl">
      {/* ===== HERO ===== */}
      <header className="bl-hero">
        <div className="bl-hero-inner">
          <div className="bl-hero-text">
            <p className="bl-wordmark" aria-label="Břevnovská Lékárna">
              <span className="bl-wordmark-cross" aria-hidden="true">✚</span>
              Břevnovská <em>Lékárna</em>
            </p>

            <h1 className="bl-h1">
              Lékárna, kde vám lék <span className="bl-h1-mark">vysvětlí</span>,
              ne jen vydají.
            </h1>

            <p className="bl-lead">
              Rodinná lékárna na Bělohorské v Praze&nbsp;6. Recepty vyřídíme na
              počkání, masti a kapky připravíme ve vlastní laboratoři a u táry
              si na vás vždycky uděláme čas.
            </p>

            <div className="bl-hero-akce">
              <a className="bl-btn" href="#sluzby">
                Co u nás vyřídíte
              </a>
              <a className="bl-btn bl-btn-ghost" href="#lekarna">
                Poznejte naši lékárnu
              </a>
            </div>

            <dl className="bl-oteviraci">
              <div>
                <dt>Po–Pá</dt>
                <dd>8.00–18.30</dd>
              </div>
              <div>
                <dt>Sobota</dt>
                <dd>9.00–12.00</dd>
              </div>
              <div>
                <dt>Kde</dt>
                <dd>Bělohorská, Praha 6 — Břevnov</dd>
              </div>
            </dl>
          </div>

          <div className="bl-hero-obraz">
            <img
              src="/hero.webp"
              alt="Interiér Břevnovské Lékárny — dřevěná tára a police s léčivy"
            />
            <p className="bl-hero-stitek">
              <strong>Dnes otevřeno</strong> do 18.30
            </p>
          </div>
        </div>
      </header>

      {/* ===== SLUŽBY — receptové karty ===== */}
      <section className="bl-sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="bl-sekce-hlava">
          <p className="bl-eyebrow">Co u nás vyřídíte</p>
          <h2 className="bl-h2" id="sluzby-nadpis">
            Čtyři věci, se kterými k nám Břevnov chodí
          </h2>
        </div>

        <ul className="bl-recepty">
          {sluzby.map((s) => (
            <li className="bl-recept" key={s.rx}>
              <p className="bl-recept-rx" aria-hidden="true">
                {s.rx}
              </p>
              <h3>{s.nazev}</h3>
              <p className="bl-recept-text">{s.text}</p>
              <p className="bl-recept-sig">{s.signatura}</p>
            </li>
          ))}
        </ul>

        <figure className="bl-sluzby-obraz">
          <img
            src="/section-1.webp"
            alt="Lékárnice připravuje magistraliter mast v laboratoři lékárny"
          />
          <figcaption>
            Naše laboratoř: tady vznikají masti a kapky přesně podle receptury
            vašeho lékaře.
          </figcaption>
        </figure>
      </section>

      {/* ===== DŮVĚRA / O NÁS ===== */}
      <section className="bl-onas" id="lekarna" aria-labelledby="onas-nadpis">
        <div className="bl-onas-inner">
          <div className="bl-onas-obraz">
            <img
              src="/section-2.webp"
              alt="Průčelí Břevnovské Lékárny na Bělohorské ulici v Praze 6"
            />
          </div>

          <div className="bl-onas-text">
            <p className="bl-eyebrow bl-eyebrow-svetly">Naše lékárna</p>
            <h2 className="bl-h2" id="onas-nadpis">
              Sousedská lékárna, ne výdejní okénko
            </h2>
            <p>
              Stojíme na Bělohorské, pár minut od Břevnovského kláštera, a
              většinu našich pacientů známe roky. Když přijdete s receptem,
              nedostanete jen krabičku — dostanete odpověď na všechno, co vás
              k léku napadne. A když si nebudete jistí, jestli k lékaři vůbec
              jít, upřímně vám to řekneme.
            </p>

            <ul className="bl-duvody">
              {duvody.map((d) => (
                <li key={d.cislo + d.jednotka}>
                  <p className="bl-duvod-cislo">
                    {d.cislo} <span>{d.jednotka}</span>
                  </p>
                  <p className="bl-duvod-text">{d.text}</p>
                </li>
              ))}
            </ul>

            <blockquote className="bl-citace">
              <p>
                „Paní magistra mi jako jediná dala dohromady všech osm léků,
                které beru, a dvě věci rovnou vyřadila po domluvě s doktorem.
                Jinam už nechodím.“
              </p>
              <footer>— paní Věra, Břevnov, pacientka od roku 2011</footer>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}

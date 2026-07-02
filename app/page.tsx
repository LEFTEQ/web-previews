export default function Page() {
  const sluzby = [
    {
      id: "FVE",
      nazev: "Fotovoltaika na klíč",
      popis:
        "Od prvního výpočtu po přifázování k síti. Navrhneme počet panelů podle sklonu a orientace vaší střechy a spočítáme, kolik z vlastní elektřiny reálně spotřebujete.",
      detail: "Panely, střídač, revize, připojení k ČEZ Distribuce",
    },
    {
      id: "TČ",
      nazev: "Tepelná čerpadla",
      popis:
        "V podhůří Jizerských hor topná sezóna trvá déle. Dimenzujeme čerpadlo na skutečné tepelné ztráty vašeho domu, ne od stolu — spočítáme je místnost po místnosti.",
      detail: "Vzduch–voda i země–voda, včetně regulace",
    },
    {
      id: "SOL",
      nazev: "Solární ohřev vody",
      popis:
        "Solární kolektory montujeme přes dvacet let — dřív, než se fotovoltaice začalo říkat fotovoltaika. Ohřejí vodu pro rodinu od jara do podzimu prakticky zdarma.",
      detail: "Trubicové i ploché kolektory, zásobníky, výměníky",
    },
    {
      id: "ROZ",
      nazev: "Rozvodné skříně a regulace",
      popis:
        "Rozváděče si vyrábíme sami ve vlastní dílně. Když se něco pokazí, víme přesně, co je uvnitř — a opravíme to my, ne anonymní servisní linka.",
      detail: "Vlastní výroba, elektroinstalace, servis do 48 hodin",
    },
  ];

  const kroky = [
    {
      cas: "1. týden",
      titul: "Přijedeme a změříme",
      text: "Zdarma. Střecha, jističe, spotřeba za poslední rok. Do týdne máte návrh s reálnou návratností — bez přehnaných slibů.",
    },
    {
      cas: "2.–3. týden",
      titul: "Projekt a dotace",
      text: "Zpracujeme projektovou dokumentaci a žádost o dotaci Nová zelená úsporám. Papíry vyřizujeme my, vy jen podepisujete.",
    },
    {
      cas: "4.–6. týden",
      titul: "Montáž za 2–3 dny",
      text: "Montujeme vlastními lidmi, žádné najaté party. Po nás zůstane čistá střecha, revizní zpráva a funkční aplikace v telefonu.",
    },
    {
      cas: "dál",
      titul: "Servis, dokud svítí slunce",
      text: "Jsme z Liberce a nikam se nestěhujeme. Na panely dáváme záruku výkonu 25 let a servisní telefon bereme i v sobotu.",
    },
  ];

  return (
    <main className="sk">
      {/* ===== HERO ===== */}
      <header className="sk-hero">
        <div className="sk-hero__inner">
          <div className="sk-topbar">
            <span className="sk-wordmark">
              SEKOM<span className="sk-wordmark__hs">HS</span>
            </span>
            <span className="sk-topbar__meta">Liberec · od roku 1999</span>
          </div>

          <h1 className="sk-hero__title">
            <span className="sk-hero__line sk-hero__line--1">Slunce nad</span>
            <span className="sk-hero__line sk-hero__line--2">Ještědem</span>
            <span className="sk-hero__line sk-hero__line--3">
              platí <em>vaše účty.</em>
            </span>
          </h1>

          <p className="sk-hero__lead">
            Fotovoltaiku, solární kolektory a tepelná čerpadla montujeme
            v Liberci a okolí pětadvacet let. Spočítáme, navrhneme,
            namontujeme — a pak jsme na telefonu, když nás potřebujete.
          </p>

          <dl className="sk-hero__facts">
            <div className="sk-fact">
              <dt>Instalací v kraji</dt>
              <dd>800+</dd>
            </div>
            <div className="sk-fact">
              <dt>Záruka výkonu panelů</dt>
              <dd>25 let</dd>
            </div>
            <div className="sk-fact">
              <dt>Servisní výjezd</dt>
              <dd>do 48 h</dd>
            </div>
          </dl>
        </div>

        {/* Signature: pole fotovoltaických článků — mřížka panelu jako grafický motiv */}
        <div className="sk-panel" aria-hidden="true">
          <div className="sk-panel__grid">
            {Array.from({ length: 48 }).map((_, i) => (
              <span
                key={i}
                className={`sk-cell${[5, 12, 19, 26, 33, 40].includes(i) ? " sk-cell--sun" : ""}`}
                style={{ ["--d" as string]: `${(i % 8) * 60 + Math.floor(i / 8) * 90}ms` }}
              />
            ))}
          </div>
          <span className="sk-panel__label">FV modul · 48 článků · 21,3 % účinnost</span>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sk-sluzby" aria-labelledby="sluzby-h">
        <div className="sk-section-head">
          <span className="sk-eyebrow">Co pro vás uděláme</span>
          <h2 id="sluzby-h">
            Jedna firma na celou střechu — od panelu po jistič.
          </h2>
        </div>

        <div className="sk-sluzby__grid">
          {sluzby.map((s) => (
            <article className="sk-karta" key={s.id}>
              <span className="sk-karta__tag">{s.id}</span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <p className="sk-karta__detail">{s.detail}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== JAK TO PROBÍHÁ / DŮVĚRA ===== */}
      <section className="sk-proces" aria-labelledby="proces-h">
        <div className="sk-section-head sk-section-head--light">
          <span className="sk-eyebrow sk-eyebrow--light">Jak to u nás chodí</span>
          <h2 id="proces-h">Od zaměření po první vlastní kilowatthodinu.</h2>
          <p className="sk-proces__lead">
            Žádní obchodní zástupci na provizi. Přijede technik, který instalaci
            sám navrhne a pak na ni dohlédne. V Liberci nás potkáte na střechách
            od Ruprechtic po Vratislavice.
          </p>
        </div>

        <ol className="sk-kroky">
          {kroky.map((k) => (
            <li className="sk-krok" key={k.titul}>
              <span className="sk-krok__cas">{k.cas}</span>
              <h3>{k.titul}</h3>
              <p>{k.text}</p>
            </li>
          ))}
        </ol>

        <figure className="sk-reference">
          <blockquote>
            „Sekom nám v roce 2008 montoval solární kolektory na ohřev vody.
            Loni jsme se vrátili pro fotovoltaiku — a přijel ten samý pan
            technik. To o firmě řekne víc než jakákoli reklama.“
          </blockquote>
          <figcaption>rodina Hendrychova, Liberec-Ruprechtice</figcaption>
        </figure>
      </section>
    </main>
  );
}

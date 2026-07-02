export default function Page() {
  const sluzby = [
    {
      nazev: "Zasklívání",
      popis: "Okna, dveře, vitríny i výlohy. Po dohodě přijedeme a zasklíme přímo u vás — v bytě, na chalupě i v provozovně.",
      stitek: "i v terénu",
    },
    {
      nazev: "Broušení a fazetování hran",
      popis: "Hrany brousíme na pásové brusce, děláme C-hrany, fazety i ozdobné mušlování. Sklo, které vezmete do ruky bez obav.",
      stitek: "C-hrana / fazeta",
    },
    {
      nazev: "Zrcadla na míru",
      popis: "Řežeme, brousíme a lepíme zrcadla přesně podle vašich rozměrů. Vzorovaná, barevná i bezpečnostní provedení.",
      stitek: "vč. lepení na stěnu",
    },
    {
      nazev: "Pískování skel a zrcadel",
      popis: "Matné vzory, ornamenty, monogramy nebo firemní motiv. Pískujeme podle vaší předlohy i vlastních návrhů.",
      stitek: "ornamenty",
    },
    {
      nazev: "Lepení akvárií a terárií",
      popis: "Lepíme akvária a terária na míru, včetně oprav. Přesné spoje lepíme i UV lampou — drží a nejsou vidět.",
      stitek: "UV lepení",
    },
    {
      nazev: "Rámování a paspartování",
      popis: "Obrazy, fotografie, diplomy. Vybereme s vámi lištu i paspartu a zasklíme tak, aby vynikl obsah, ne rám.",
      stitek: "na počkání dle rozsahu",
    },
    {
      nazev: "Vrtání a řezy diamantovou pilou",
      popis: "Otvory pro kování, průchodky i atypické tvary. Diamantovou pilou zvládneme i silná a kalená skla.",
      stitek: "přesné otvory",
    },
    {
      nazev: "Izolační skla a obklady",
      popis: "Vyrábíme izolační dvojskla a lepíme skleněné obklady do kuchyní a koupelen — čistá stěna bez spár.",
      stitek: "výroba izo skel",
    },
  ];

  const tloustky = ["2", "3", "4", "5", "6", "8", "10", "12"];

  return (
    <main className="sklo">
      {/* ================= HERO ================= */}
      <section className="hero" aria-label="Sklenářství Jeník, Praha">
        <div className="hero-inner">
          <header className="hero-top">
            <div className="wordmark">
              <span className="wordmark-jenik">JENÍK</span>
              <span className="wordmark-sub">sklenářství · Jan Černý · Praha</span>
            </div>
            <a className="hero-tel" href="tel:+420602000000">
              <span className="hero-tel-label">Zavolat do dílny</span>
              <span className="hero-tel-num">602 000 000</span>
            </a>
          </header>

          <div className="hero-main">
            <p className="hero-eyebrow">Sklenářská dílna v Praze — řemeslo, ne e-shop</p>
            <h1 className="hero-title">
              <span className="hero-line hero-line-1">Sklo řežeme,</span>
              <span className="hero-line hero-line-2">brousíme <em>a&nbsp;pískujeme</em></span>
              <span className="hero-line hero-line-3">na milimetr přesně.</span>
            </h1>
            <p className="hero-lede">
              Od zasklení rozbitého okna po zrcadlo s&nbsp;fazetou na míru. Menší práce
              uděláme na počkání, se zasklíváním přijedeme i&nbsp;k&nbsp;vám.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="tel:+420602000000">Zavolat: 602 000 000</a>
              <a className="btn btn-ghost" href="mailto:info@sklenarstvi-jenik.cz">Napsat e-mail</a>
            </div>
          </div>

          {/* Signature: pravítko tlouštěk skla — reálný sortiment dílny */}
          <div className="gauge" role="img" aria-label="Sortiment skla od 2 do 12 milimetrů, silnější na objednání">
            <span className="gauge-label">sortiment skla</span>
            <div className="gauge-track">
              {tloustky.map((t, i) => (
                <span className="gauge-step" key={t} style={{ ['--i' as string]: i }}>
                  <span className="gauge-bar" style={{ ['--mm' as string]: t }} aria-hidden="true" />
                  <span className="gauge-num">{t}</span>
                </span>
              ))}
              <span className="gauge-step gauge-step-plus" style={{ ['--i' as string]: 8 }}>
                <span className="gauge-bar gauge-bar-plus" aria-hidden="true" />
                <span className="gauge-num">+</span>
              </span>
            </div>
            <span className="gauge-label gauge-label-end">mm · silnější na objednání</span>
          </div>
        </div>

        {/* šikmý „řez sklem" — dělicí linie hero sekce */}
        <div className="hero-cut" aria-hidden="true" />
      </section>

      {/* ================= SLUŽBY ================= */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <h2 id="sluzby-h">Co u nás vyřídíte</h2>
          <p>
            Jedna dílna, celé sklenářské řemeslo. Přineste rozměry nebo starý kus —
            zbytek zařídíme.
          </p>
        </div>
        <ul className="sluzby-grid">
          {sluzby.map((s) => (
            <li className="karta" key={s.nazev}>
              <div className="karta-hrana" aria-hidden="true" />
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <span className="karta-stitek">{s.stitek}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ================= DŮVĚRA / JAK TO U NÁS CHODÍ ================= */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="duvera-inner">
          <div className="duvera-text">
            <h2 id="duvera-h">Rodinná dílna, kde sklo projde rukama</h2>
            <p>
              Sklenářství Jeník vede Jan Černý — každou zakázku bere do ruky sám nebo
              ji hlídá od řezu po předání. Žádná výrobní linka: pásová bruska, diamantová
              pila, pískovací kabina a&nbsp;letitá zkušenost, kdy sklo povolí a&nbsp;kdy drží.
            </p>
            <p>
              Vedle běžného čirého skla máme skladem široký výběr zrcadel, vzorovaných,
              barevných i&nbsp;bezpečnostních skel. Když si nevíte rady s&nbsp;tloušťkou nebo
              typem skla, poradíme po telefonu — ušetříte si cestu.
            </p>
            <ul className="duvera-body">
              <li>
                <strong>Přijedeme k&nbsp;vám.</strong> Zasklívání po dohodě děláme v&nbsp;terénu
                po celé Praze a&nbsp;okolí.
              </li>
              <li>
                <strong>Drobné práce na počkání.</strong> Říznutí skla, obroušení hrany
                nebo zasklení rámečku vyřešíme, zatímco počkáte.
              </li>
              <li>
                <strong>Poradíme zdarma.</strong> Tloušťku, typ skla i&nbsp;způsob uchycení
                probereme předem, ať neplatíte nic navíc.
              </li>
            </ul>
          </div>

          <div className="duvera-refs">
            <h3 className="refs-title">Co říkají zákazníci</h3>
            <figure className="ref">
              <blockquote>
                „Prasklá výplň dveří v&nbsp;neděli, v&nbsp;pondělí ráno telefon, odpoledne
                zaskleno u&nbsp;nás doma. Rychlejší to být nemohlo.“
              </blockquote>
              <figcaption>— paní Horáková, Praha 4</figcaption>
            </figure>
            <figure className="ref">
              <blockquote>
                „Lepené akvárium 240&nbsp;litrů na míru. Spoje přes UV lampu skoro nejsou
                vidět a&nbsp;po dvou letech drží bez jediného průsaku.“
              </blockquote>
              <figcaption>— pan Beneš, akvarista, Praha 10</figcaption>
            </figure>
            <figure className="ref">
              <blockquote>
                „Zrcadlo s&nbsp;fazetou a&nbsp;pískovaným ornamentem do předsíně. Vypadá jako
                ze starožitnictví — přesně to jsme chtěli.“
              </blockquote>
              <figcaption>— manželé Švecovi, Vinohrady</figcaption>
            </figure>
            <p className="refs-note">
              Dílna funguje v&nbsp;Praze přes 25&nbsp;let — velkou část zakázek k&nbsp;nám posílají
              zákazníci, kterým jsme už něco zasklili.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

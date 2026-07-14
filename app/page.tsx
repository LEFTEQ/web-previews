export default function Page() {
  const sluzby = [
    {
      chip: "Au 585 · 750",
      titul: "Zásnubní a snubní prsteny",
      text: "Společně vybereme kov, kámen i velikost. Prsten na míru míváme hotový za tři až čtyři týdny.",
    },
    {
      chip: "Au · Ag · Pt",
      titul: "Šperky na míru",
      text: "Přinesete nápad, náčrt nebo starý šperk po babičce. My z něj u ponku uděláme kus, který nikdo jiný nemá.",
    },
    {
      chip: "granát",
      titul: "Český granát",
      text: "Náušnice, prsteny a přívěsky z pravého českého granátu — červený kámen, který se k Čechám váže po staletí.",
    },
    {
      chip: "servis",
      titul: "Opravy a úpravy",
      text: "Přetržený řetízek, zúžení prstenu, nový zámeček nebo dopnutý kamínek. Drobnosti zvládneme obvykle do týdne.",
    },
    {
      chip: "ruční",
      titul: "Rytí a gravírování",
      text: "Datum, jméno nebo krátký vzkaz vyryjeme ručně přímo v dílně — do prstenu, přívěsku i hodinek.",
    },
    {
      chip: "zdarma",
      titul: "Čištění a kontrola",
      text: "Zastavte se a nechte si šperk vyčistit a zkontrolovat uchycení kamenů. U nás zakoupené kousky zdarma.",
    },
  ];

  const duvera = [
    {
      chip: "punc",
      titul: "Pod puncem",
      text: "Každý zlatý a stříbrný šperk od nás nese státní puncovní značku, která ručí za ryzost kovu. Žádné dohady o tom, co držíte v ruce.",
    },
    {
      chip: "dílna",
      titul: "Nic neposíláme pryč",
      text: "Opravy i zakázky děláme sami v dílně za prodejnou. Váš šperk nepobíhá po prostřednících — pracuje na něm jeden zlatník od začátku do konce.",
    },
    {
      chip: "na rovinu",
      titul: "Poradíme upřímně",
      text: "Když se oprava nevyplatí nebo kámen do šperku nesedí, řekneme vám to dřív, než cokoli zaplatíte.",
    },
  ];

  return (
    <main className="site">
      <header className="topbar">
        <a className="wm" href="#top" aria-label="Zlatnictví U Zámku, úvod">
          <span className="wm-top">Zlatnictví</span>
          <span className="wm-main">U&nbsp;Zámku</span>
        </a>
        <div className="topbar-right">
          <span className="topbar-adr">Ústí nad Labem · centrum</span>
          <a className="btn btn-gold btn-sm" href="#nabidka">Objednat se do dílny</a>
        </div>
      </header>

      <section className="hero" id="top">
        <img
          className="hero-img"
          src="/hero.webp"
          alt="Ruční výroba šperku u ponku v dílně Zlatnictví U Zámku v Ústí nad Labem"
        />
        <div className="hero-scrim" aria-hidden="true" />
        <div className="hero-inner">
          <p className="eyebrow eyebrow-light reveal r1">
            Rodinné zlatnictví · Ústí nad Labem
          </p>
          <h1 className="hero-title">
            <span className="line reveal r2">U ponku,</span>
            <span className="line reveal r3">
              <em>ne</em> u pásu.
            </span>
          </h1>
          <p className="hero-lead reveal r4">
            Zásnubní prsteny, šperky na míru i opravy. V Ústí nad Labem je
            razíme puncem a děláme rukou — kus po kuse, ne po tisících.
          </p>
          <div className="hero-cta reveal r5">
            <a className="btn btn-gold" href="#nabidka">Objednat se do dílny</a>
            <a className="btn btn-ghost" href="#onas">Kdo vám šperk udělá</a>
          </div>
          <div className="hallmarks reveal r6" aria-label="Ryzost, kterou razíme">
            <span className="hm-label">Ryzost, kterou razíme</span>
            <ul className="hm-row">
              <li className="hm">Au&nbsp;585</li>
              <li className="hm">Au&nbsp;750</li>
              <li className="hm">Ag&nbsp;925</li>
              <li className="hm">Pt&nbsp;950</li>
              <li className="hm hm-stone">český granát</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="band band-ivory" id="nabidka">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Co u nás pořídíte</p>
            <h2 className="sec-title">
              Od zásnubního prstenu po spravený řetízek.
            </h2>
            <p className="sec-lead">
              Většinu šperků nekupujeme v krabici od dodavatele. Vyrábíme,
              upravujeme a opravujeme je přímo tady, u ponku v centru Ústí.
              Přijďte s nápadem i s rozbitým řetízkem.
            </p>
          </div>

          <figure className="sec-figure">
            <img
              src="/section-1.webp"
              alt="Detail zlatých a stříbrných šperků z nabídky Zlatnictví U Zámku"
            />
          </figure>

          <ul className="svc-grid">
            {sluzby.map((s) => (
              <li className="svc" key={s.titul}>
                <span className="chip">{s.chip}</span>
                <h3 className="svc-title">{s.titul}</h3>
                <p className="svc-text">{s.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band band-garnet" id="onas">
        <div className="wrap onas-grid">
          <figure className="onas-figure">
            <img
              src="/section-2.webp"
              alt="Prodejna a dílna Zlatnictví U Zámku v centru Ústí nad Labem"
            />
          </figure>

          <div className="onas-copy">
            <p className="eyebrow eyebrow-light">Proč právě k nám</p>
            <h2 className="sec-title sec-title-light">
              Zlatnictví, kde zlatníka potkáte u ponku.
            </h2>
            <p className="sec-lead sec-lead-light">
              Jsme malé rodinné zlatnictví kousek od zámku v Ústí nad Labem.
              Šperky děláme rukama, ne ve velkém — proto u nás jednáte přímo
              s člověkem, který vaši zakázku piluje, pájí a leští.
            </p>

            <ul className="trust">
              {duvera.map((d) => (
                <li className="trust-item" key={d.titul}>
                  <span className="chip chip-gold">{d.chip}</span>
                  <div>
                    <h3 className="trust-title">{d.titul}</h3>
                    <p className="trust-text">{d.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="onas-note">
              Najdete nás v centru Ústí nad Labem, pár kroků od zámku. Zastavte
              se bez objednání — na zakázku a delší poradenství si ale raději
              domluvte čas.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

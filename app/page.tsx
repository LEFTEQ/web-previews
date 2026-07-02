const vrstvy = [
  { n: "Nosné zdivo", d: "Stávající stěna domu — panel, cihla nebo tvárnice. Před zateplením ji zkontrolujeme a opravíme trhliny." },
  { n: "Lepicí hmota", d: "Celoplošné nebo rámečkové lepení podle podkladu. Drží izolant na místě po celou životnost fasády." },
  { n: "Izolant", d: "Polystyren EPS nebo minerální vata — tloušťku navrhneme podle výpočtu, ne od oka. Obvykle 140–200 mm." },
  { n: "Hmoždinky + perlinka", d: "Mechanické kotvení a výztužná síťovina ve stěrce. To, co rozhoduje, jestli fasáda vydrží 30 let, nebo popraská." },
  { n: "Omítka", d: "Silikonová probarvená omítka odolná řasám a libereckému počasí. Barvu a zrnitost vybíráte vy." },
];

const sluzby = [
  {
    t: "Zateplení fasády",
    d: "Kompletní zateplovací systém ETICS od lešení po finální omítku. Panelové domy, rodinné domky i bytovky. Pomůžeme s podklady pro dotaci Nová zelená úsporám.",
    tag: "EPS / minerální vata",
  },
  {
    t: "Oprava a rekonstrukce fasád",
    d: "Opadaná omítka, trhliny, vlhkost u soklu. Fasádu opravíme, sjednotíme a natřeme — i tam, kde zateplení není potřeba nebo možné.",
    tag: "sanace / nátěry",
  },
  {
    t: "Rekonstrukce bytů a jader",
    d: "Koupelny, bytová jádra i celé byty. Obklady, dlažby, sádrokarton, elektro s revizí, voda, topení, podlahy. Jedna parta, jeden termín, jedna odpovědnost.",
    tag: "na klíč",
  },
  {
    t: "Rodinné domy a venkovní práce",
    d: "Domy na klíč, přístavby, opěrné zdi, ploty, inženýrské sítě a zemní práce. Od výkopu po položení střechy — jak říkáme u nás na stavbě.",
    tag: "od základů",
  },
];

const duvody = [
  {
    t: "Vlastní lidé, ne subdodávky",
    d: "Zedníci, obkladači, elektrikář i topenář jsou naši. Na stavbě se domluvíte s jedním stavbyvedoucím, ne s pěti firmami.",
  },
  {
    t: "Známe liberecké domy",
    d: "Panelové domy v Rochlici, prvorepublikové vily v Ruprechticích i novostavby ve Vratislavicích. Víme, co která stavba snese a co potřebuje.",
  },
  {
    t: "Rozpočet bez hvězdiček",
    d: "Před podpisem dostanete položkový rozpočet po vrstvách — víte, za co platíte. Vícepráce jen po odsouhlasení, nikdy zpětně.",
  },
];

export default function Page() {
  return (
    <main className="zs">
      {/* ===== HERO ===== */}
      <header className="zs-hero">
        <div className="zs-topbar">
          <span className="zs-mark" aria-label="ZE stavby">
            <span className="zs-mark-ze">ZE</span>
            <span className="zs-mark-stavby">stavby</span>
          </span>
          <span className="zs-topbar-loc">Liberec · stavební firma</span>
          <a className="zs-topbar-tel" href="tel:+420485123456">
            485 123 456
          </a>
        </div>

        <div className="zs-hero-grid">
          <div className="zs-hero-copy">
            <p className="zs-eyebrow">Zateplování fasád a stavební práce</p>
            <h1 className="zs-h1">
              Dům drží teplo{" "}
              <span className="zs-h1-accent">po&nbsp;vrstvách.</span>
              <br />
              My je umíme všechny.
            </h1>
            <p className="zs-lead">
              Zateplíme váš dům v Liberci a okolí — od lepidla po finální
              omítku, vlastními lidmi a s rozpočtem, který platí. Až o 40 %
              nižší účet za teplo už první zimu.
            </p>
            <div className="zs-hero-cta">
              <a className="zs-btn zs-btn-solid" href="tel:+420485123456">
                Zavolat: 485 123 456
              </a>
              <a className="zs-btn zs-btn-line" href="mailto:info@zestavby.cz">
                Napsat e-mail
              </a>
            </div>
            <p className="zs-hero-note">
              Prohlídku domu a orientační nabídku děláme zdarma, obvykle do
              týdne.
            </p>
          </div>

          {/* Signature: řez zateplovacím souvrstvím */}
          <div className="zs-cut" role="img" aria-label="Schéma vrstev zateplení fasády: zdivo, lepidlo, izolant, výztužná vrstva, omítka">
            <div className="zs-cut-layers">
              <div className="zs-cut-layer zs-l1"><span>zdivo</span></div>
              <div className="zs-cut-layer zs-l2"><span>lepidlo</span></div>
              <div className="zs-cut-layer zs-l3"><span>izolant 160&nbsp;mm</span></div>
              <div className="zs-cut-layer zs-l4"><span>perlinka</span></div>
              <div className="zs-cut-layer zs-l5"><span>omítka</span></div>
            </div>
            <div className="zs-cut-caption">
              Řez zateplenou fasádou — přesně takhle vypadá naše práce pod
              povrchem.
            </div>
          </div>
        </div>
      </header>

      {/* ===== SEKCE 1: VRSTVY / JAK ZATEPLUJEME ===== */}
      <section className="zs-section zs-section-vrstvy" aria-labelledby="vrstvy-h">
        <div className="zs-section-head">
          <p className="zs-eyebrow">Jak zateplujeme</p>
          <h2 id="vrstvy-h" className="zs-h2">
            Pět vrstev, na kterých stojí každá dobrá fasáda
          </h2>
          <p className="zs-section-lead">
            Zateplení není jen „nalepit polystyren“. Je to souvrství, kde každá
            vrstva má svou práci — a kde se nejvíc kazí to, co pak není vidět.
          </p>
        </div>

        <ol className="zs-vrstvy">
          {vrstvy.map((v, i) => (
            <li className="zs-vrstva" key={v.n}>
              <span className={`zs-vrstva-chip zs-chip-${i + 1}`} aria-hidden="true" />
              <div className="zs-vrstva-body">
                <h3 className="zs-h3">
                  <span className="zs-vrstva-num">{i + 1}. vrstva</span>
                  {v.n}
                </h3>
                <p>{v.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ===== SEKCE 2: SLUŽBY + DŮVĚRA ===== */}
      <section className="zs-section zs-section-sluzby" aria-labelledby="sluzby-h">
        <div className="zs-section-head">
          <p className="zs-eyebrow">Co pro vás postavíme</p>
          <h2 id="sluzby-h" className="zs-h2">
            Od výkopu po položení střechy
          </h2>
          <p className="zs-section-lead">
            Fasády jsou naše hlavní řemeslo, ale zvládneme celou stavbu — bez
            přehazování mezi firmami.
          </p>
        </div>

        <div className="zs-sluzby-grid">
          {sluzby.map((s) => (
            <article className="zs-karta" key={s.t}>
              <p className="zs-karta-tag">{s.tag}</p>
              <h3 className="zs-h3">{s.t}</h3>
              <p>{s.d}</p>
            </article>
          ))}
        </div>

        <div className="zs-duvera" aria-labelledby="duvera-h">
          <h2 id="duvera-h" className="zs-h2 zs-h2-inverse">
            Proč Liberečáci volají nám
          </h2>
          <div className="zs-duvera-grid">
            {duvody.map((d) => (
              <div className="zs-duvod" key={d.t}>
                <h3 className="zs-h3">{d.t}</h3>
                <p>{d.d}</p>
              </div>
            ))}
          </div>
          <p className="zs-duvera-pozn">
            ZE stavby s.r.o. · Liberec — stavíme a zateplujeme v Liberci,
            Jablonci nad Nisou a okolí.
          </p>
        </div>
      </section>
    </main>
  );
}

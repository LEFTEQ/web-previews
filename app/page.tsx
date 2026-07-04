import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      code: "01",
      title: "Kompletní rekonstrukce bytu na klíč",
      body: "Od návrhu až po předání klíčů. Přesný rozpočet, jasný termín a jeden člověk, který řídí celou realizaci. Vy víte, co se kdy děje.",
    },
    {
      code: "02",
      title: "Koupelny a bytová jádra",
      body: "Navrhneme do posledního centimetru — niky, úložné prostory, praktické detaily. Panelové jádro často dokážeme i zvětšit.",
    },
    {
      code: "03",
      title: "Kuchyně na míru",
      body: "Kuchyň i stavební přípravu — vodu, elektro, montáž — řešíme jako jeden celek. Žádné předávání zodpovědnosti mezi firmami.",
    },
    {
      code: "04",
      title: "Návrh od bytového architekta",
      body: "Využijeme každý metr podle toho, jak opravdu žijete. Často bez navýšení ceny — a rekonstrukce dostane úplně jinou úroveň.",
    },
  ];

  const references = [
    {
      quote:
        "V pražském panelovém bytě nám dělali rekonstrukci koupelny. Spokojeni jsme byli s kvalitou i s mimořádně jednoduchou přípravou zakázky a dodržením termínu.",
      author: "Vrbová",
      job: "Rekonstrukce koupelny",
    },
    {
      quote:
        "Nabídli nám náhradní ubytování — tím vyhráli na celé čáře před konkurencí. Kvalita řemeslných prací byla vynikající a dodrželi domovní řád, takže žádné stížnosti od sousedů.",
      author: "Opustil",
      job: "Rekonstrukce bytového jádra",
    },
    {
      quote:
        "V rozpočtu bylo všechno, co jsme chtěli, termíny dodrželi, vícepráce splnili bez problému. Naprostá spokojenost.",
      author: "Vlach",
      job: "Rekonstrukce celého bytu",
    },
  ];

  return (
    <main className="pr">
      <header className="pr-top">
        <a className="pr-mark" href="#" aria-label="PANELREKO — rekonstrukce bytů">
          <span className="pr-mark-a">PANEL</span>
          <span className="pr-mark-b">REKO</span>
        </a>
        <nav className="pr-nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#duvera">Reference</a>
          <a className="pr-call" href="tel:+420602168459">Zavolat 602&nbsp;168&nbsp;459</a>
        </nav>
      </header>

      <section className="pr-hero" aria-labelledby="pr-hero-title">
        <div className="pr-hero-grid" aria-hidden="true">
          <span className="pr-wall pr-wall-1" />
          <span className="pr-wall pr-wall-2" />
          <span className="pr-wall pr-wall-3" />
        </div>

        <div className="pr-hero-inner">
          <p className="pr-eyebrow">
            <span className="pr-dot" /> Rekonstrukce bytů &middot; Praha, České Budějovice, Plzeň
          </p>

          <h1 id="pr-hero-title" className="pr-h1">
            <span className="pr-line pr-line-1">Rekonstrukce,</span>
            <span className="pr-line pr-line-2">která proběhne</span>
            <span className="pr-line pr-line-3">
              <em>podle&nbsp;plánu</em>
            </span>
          </h1>

          <p className="pr-lede">
            Jasný termín, pečlivá příprava a jeden člověk, který řídí celou
            rekonstrukci od prvního návrhu až po předání klíčů. Bez chaosu,
            bez překvapení v rozpočtu.
          </p>

          <div className="pr-hero-actions">
            <a className="pr-btn" href="#sluzby">Spočítat cenu rekonstrukce</a>
            <a className="pr-btn pr-btn-ghost" href="tel:+420602168459">Zavolat 602 168 459</a>
          </div>

          <dl className="pr-stats">
            <div>
              <dt>Zrealizovaných rekonstrukcí</dt>
              <dd>2000+</dd>
            </div>
            <div>
              <dt>Let na trhu</dt>
              <dd>25</dd>
            </div>
            <div>
              <dt>Vedoucí projektu na zakázku</dt>
              <dd>1</dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="sluzby" className="pr-sec pr-services" aria-labelledby="pr-services-title">
        <div className="pr-sec-head">
          <p className="pr-kicker">Co u nás objednáte</p>
          <h2 id="pr-services-title" className="pr-h2">
            Kompletní servis pod jednou střechou
          </h2>
          <p className="pr-sec-lede">
            Návrh, bourání, rozvody, obklady i finální úklid řešíme jako jeden
            celek. Vy jednáte s jedním člověkem — ne se šesti řemeslníky.
          </p>
        </div>

        <ol className="pr-cards">
          {services.map((s) => (
            <li key={s.code} className="pr-card">
              <span className="pr-card-code">{s.code}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="duvera" className="pr-sec pr-trust" aria-labelledby="pr-trust-title">
        <div className="pr-sec-head">
          <p className="pr-kicker">Proč nám lidé věří</p>
          <h2 id="pr-trust-title" className="pr-h2">
            Náhradní bydlení, dodržené termíny, jeden odpovědný člověk
          </h2>
          <p className="pr-sec-lede">
            Během rekonstrukce vám nabídneme náhradní bydlení v našich vlastních
            bytech — plnohodnotné, ne provizorní. Nemusíte řešit, kde budete bydlet.
          </p>
        </div>

        <div className="pr-quotes">
          {references.map((r) => (
            <figure key={r.author} className="pr-quote">
              <blockquote>{r.quote}</blockquote>
              <figcaption>
                <span className="pr-quote-name">{r.author}</span>
                <span className="pr-quote-job">{r.job}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}

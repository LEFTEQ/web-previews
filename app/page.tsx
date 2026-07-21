import { AiImage } from "./_ui";

const sortiment = [
  {
    tag: "Gastro",
    title: "Skleněné gastro",
    body: "Talíře, mísy, tácy a servírovací nádobí pro restaurace, hotely a catering. Tavené naplocho, aby snesly provoz i myčku.",
    a: "var(--cobalt)",
    b: "var(--amber)",
  },
  {
    tag: "Dekor",
    title: "Svícny a dekorace",
    body: "Do bytu, kanceláře i jako dárek. Barevné vrstvy, které na světle ožijí a vrhají barvu dál po stole.",
    a: "var(--amber)",
    b: "var(--ember)",
  },
  {
    tag: "Ocenění",
    title: "Trofeje a reklamní sklo",
    body: "S vaším logem nebo vlastním motivem. Ceny a plakety, které nechcete schovat do šuplíku.",
    a: "var(--ember)",
    b: "var(--cobalt)",
  },
  {
    tag: "Interiér",
    title: "Sklo do interiéru",
    body: "Výplně dveří, obklady a skleněné stěny. I strukturované sklo, které napodobuje historické výplňové tabule.",
    a: "var(--glass-green)",
    b: "var(--cobalt)",
  },
];

const zaruky = [
  "Ruční práce",
  "Vlastní autorský design",
  "Výroba na zakázku",
  "Téměř bezodpadová výroba",
  "Lidský přístup",
];

export default function Page() {
  return (
    <main>
      <section className="hero" id="nahoru">
        <div className="container hero-grid">
          <div className="hero-text">
            <p className="eyebrow">Autorské tavené sklo · dílna u Hradce Králové</p>
            <p className="wordmark">
              BDK<span className="wordmark-dot">·</span>GLASS
            </p>
            <h1>
              Barvu nenanášíme. <br />
              <em>Zapékáme</em> ji do skla.
            </h1>
            <p className="lede">
              Jsme rodinná sklářská dílna. Přes třicet let tavíme ploché sklo
              technologií fusing do talířů, dekorací a trofejí, které jinde
              nekoupíte — protože každý kus skládáme z vrstev barevného skla a
              spékáme v peci do jednoho originálu.
            </p>
            <div className="hero-actions">
              <a className="btn" href="#sortiment">
                Prohlédnout sortiment
              </a>
              <a className="btn-ghost" href="#dilna">
                O naší dílně
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <AiImage
              className="hero-img"
              src="/hero.webp"
              alt="Barevné tavené sklo z dílny BDK-GLASS — vrstvy skla spečené technologií fusing"
            />
            <div className="fuse-stack" aria-hidden="true">
              <span className="panel p-cobalt" />
              <span className="panel p-amber" />
              <span className="panel p-ember" />
            </div>
          </div>
        </div>
      </section>

      <div className="seam" role="presentation" />

      <section className="section" id="sortiment">
        <div className="container">
          <header className="section-head">
            <p className="eyebrow">Sortiment</p>
            <h2>Čtyři světy, jedna technologie</h2>
            <p className="section-lede">
              Vyberte si z toho, co vyrábíme, nebo přijďte s vlastním nápadem —
              vždycky najdeme cestu, jak ho proměnit ve sklo. Každou kategorii
              značí vlastní překryv barev, přesně jak se míchají v peci.
            </p>
          </header>

          <div className="cards">
            {sortiment.map((s) => (
              <article className="card" key={s.title}>
                <span
                  className="chip"
                  aria-hidden="true"
                  style={{ ["--a" as string]: s.a, ["--b" as string]: s.b }}
                >
                  <span className="chip-a" />
                  <span className="chip-b" />
                </span>
                <p className="card-tag">{s.tag}</p>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>

          <figure className="section-figure">
            <AiImage
              className="figure-img"
              src="/section-1.webp"
              alt="Skleněné gastro nádobí a servírovací tácy z tavené ho skla"
            />
          </figure>
        </div>
      </section>

      <div className="seam" role="presentation" />

      <section className="section" id="dilna">
        <div className="container split">
          <figure className="split-figure">
            <AiImage
              className="figure-img"
              src="/section-2.webp"
              alt="Sklář při práci u pece — ruční zpracování tavené ho skla v dílně BDK-GLASS"
            />
          </figure>

          <div className="split-text">
            <p className="eyebrow">O dílně</p>
            <h2>Řemeslo, které vidíte na každém kusu</h2>
            <p>
              Na trhu přesyceném standardním zbožím — často z Asie — děláme
              opak: vlastní autorský design, ruční zpracování a širokou
              variabilitu tvarů i barev. Odřezky skla putují zpět do výroby,
              takže je naše výroba téměř bezodpadová a ceny přesto zůstávají
              příznivé.
            </p>
            <p>
              Naše sklo si oblíbily restaurace, catering, hotely i velkoobchody
              napříč Evropou, v Severní Americe i v Japonsku. Stejně rádi ale
              tavíme pro města, firmy hledající originální dárek i pro jednoho
              člověka, který chce domů něco výjimečného.
            </p>

            <ul className="badges">
              {zaruky.map((z) => (
                <li key={z}>{z}</li>
              ))}
            </ul>

            <p className="seen">
              Viděli jste nás v pořadu <strong>Toulavá kamera</strong> na ČT1 a
              každoročně na veletrhu <strong>AMBIENTE</strong> ve Frankfurtu nad
              Mohanem.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

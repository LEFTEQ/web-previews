import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      vzorek: "#F4F1EA",
      nazev: "Interiéry a byty",
      popis:
        "Ložnice, obývák i dětský pokoj vymalujeme za jediný den — nábytek zakryjeme, hrany olepíme a po sobě uklidíme. Vy ráno odejdete do práce, večer se vrátíte do čistého bytu.",
      detail: "od 35 Kč / m²",
    },
    {
      vzorek: "#C7DCEF",
      nazev: "Fasády rodinných domů",
      popis:
        "Fasádní nátěry odolné moravskoslezskému počasí — od Ostravy po Beskydy. Tlakové mytí, penetrace a dvojnásobný nátěr, který drží roky v mrazu i dešti.",
      detail: "na míru domu",
    },
    {
      vzorek: "#1E5AA8",
      nazev: "Firmy a provozovny",
      popis:
        "Kanceláře, ordinace, sklady i chodby bytových domů. Přijedeme mimo provozní dobu nebo o víkendu, aby vám práce nezastavila den.",
      detail: "cenová nabídka do 24 h",
    },
  ];

  const kroky = [
    {
      c: "01",
      nadpis: "Zavoláte, přijedeme změřit",
      text:
        "Domluvíme si nezávaznou návštěvu u vás. Změříme plochy, poradíme s odstínem a řekneme přesnou cenu — bez skrytých položek.",
    },
    {
      c: "02",
      nadpis: "Zakryjeme a připravíme",
      text:
        "Podlahy i nábytek zakryjeme fólií, praskliny zatmelíme a stěny přebrousíme. O čistotu se staráme od první minuty.",
    },
    {
      c: "03",
      nadpis: "Vymalujeme a uklidíme",
      text:
        "Dvojnásobný nátěr kvalitními barvami bez zápachu. Než odejdeme, uklidíme a vy se vracíte do hotového.",
    },
  ];

  return (
    <main className="paint">
      <header className="paint-topbar">
        <a className="paint-logo" href="#uvod" aria-label="Dobrý malíř, domů">
          <span className="paint-logo-brush" aria-hidden="true">
            <span className="paint-logo-swipe" />
          </span>
          <span className="paint-logo-text">
            Dobrý<span className="paint-logo-accent">malíř</span>
          </span>
        </a>
        <nav className="paint-nav" aria-label="Hlavní">
          <a href="#sluzby">Co maluju</a>
          <a href="#postup">Jak to chodí</a>
          <a className="paint-nav-call" href="tel:800226226">
            800 226 226
          </a>
        </nav>
      </header>

      <section className="paint-hero" id="uvod">
        <div className="paint-hero-copy">
          <p className="paint-eyebrow">Malíř &amp; natěrač · Moravskoslezský kraj</p>
          <h1 className="paint-hero-title">
            Vymalováno
            <br />
            <span className="paint-hero-title-accent">za jediný den.</span>
          </h1>
          <p className="paint-hero-lead">
            Přijedeme k vám ráno, večer odcházíme z čistého bytu. Byty, fasády i
            provozovny na Ostravsku, Havířovsku a v Beskydech — s barvami, které
            nezapáchají a schnou i v topné sezóně.
          </p>
          <div className="paint-hero-actions">
            <a className="paint-btn" href="tel:800226226">
              Zavolat 800 226 226
            </a>
            <a className="paint-btn paint-btn-ghost" href="#sluzby">
              Co všechno maluju
            </a>
          </div>
          <dl className="paint-hero-facts">
            <div>
              <dt>Sídlíme</dt>
              <dd>Havířov</dd>
            </div>
            <div>
              <dt>Byt vymalujeme</dt>
              <dd>za 1 den</dd>
            </div>
            <div>
              <dt>Nabídka do</dt>
              <dd>24 hodin</dd>
            </div>
          </dl>
        </div>
        <figure className="paint-hero-figure">
          <img
            src="/hero.webp"
            alt="Malíř s válečkem nanáší čistě bílou barvu na stěnu pokoje"
            className="paint-hero-img"
            width={900}
            height={1100}
          />
          <figcaption className="paint-hero-swatch" aria-hidden="true">
            <span style={{ background: "#F4F1EA" }} />
            <span style={{ background: "#C7DCEF" }} />
            <span style={{ background: "#1E5AA8" }} />
            <span style={{ background: "#12305A" }} />
          </figcaption>
        </figure>
      </section>

      <section className="paint-sluzby" id="sluzby">
        <div className="paint-section-head">
          <p className="paint-eyebrow">Co u nás objednáte</p>
          <h2 className="paint-section-title">
            Tři plochy, jeden řemeslník, který si stojí za prací.
          </h2>
        </div>
        <div className="paint-cards">
          {sluzby.map((s) => (
            <article className="paint-card" key={s.nazev}>
              <span
                className="paint-card-swatch"
                style={{ "--swatch": s.vzorek } as CSSProperties}
                aria-hidden="true"
              />
              <h3 className="paint-card-title">{s.nazev}</h3>
              <p className="paint-card-text">{s.popis}</p>
              <p className="paint-card-price">{s.detail}</p>
            </article>
          ))}
        </div>
        <figure className="paint-sluzby-figure">
          <img
            src="/section-1.webp"
            alt="Čerstvě vymalovaný světlý obývací pokoj po práci malíře"
            width={1200}
            height={720}
          />
        </figure>
      </section>

      <section className="paint-postup" id="postup">
        <div className="paint-postup-grid">
          <div className="paint-postup-copy">
            <p className="paint-eyebrow">Jak to u nás chodí</p>
            <h2 className="paint-section-title">
              Tři kroky od telefonu k hotovému bytu.
            </h2>
            <ol className="paint-steps">
              {kroky.map((k) => (
                <li className="paint-step" key={k.c}>
                  <span className="paint-step-num" aria-hidden="true">
                    {k.c}
                  </span>
                  <div>
                    <h3 className="paint-step-title">{k.nadpis}</h3>
                    <p className="paint-step-text">{k.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="paint-faq">
              <details>
                <summary>Je zima, mám počkat s malováním?</summary>
                <p>
                  Nemusíte. V topné sezóně schne malba dokonce lépe — stěny jsou
                  vytopené. Moderní barvy nezapáchají a nejsou zdraví škodlivé,
                  větrání ani úniku tepla se bát nemusíte.
                </p>
              </details>
              <details>
                <summary>Jak často by se mělo malovat?</summary>
                <p>
                  Ideálně každé 2 až 5 let. Nejde jen o vzhled — na zdech se
                  usazuje mastnota, prach a plísně, které zdraví nesvědčí.
                </p>
              </details>
              <details>
                <summary>Vyplatí se to zvládnout svépomocí?</summary>
                <p>
                  Sami byt vymalujete zhruba za čtyři dny. My to zvládneme za
                  jeden a ještě po sobě uklidíme — ušetříte čas i nervy.
                </p>
              </details>
            </div>
          </div>

          <aside className="paint-postup-aside">
            <figure className="paint-postup-figure">
              <img
                src="/section-2.webp"
                alt="Detail malířského válečku a bílé barvy na stěně"
                width={720}
                height={880}
              />
            </figure>
            <div className="paint-postup-card">
              <p className="paint-postup-card-lead">
                „Nechcete riskovat špatně vymalované stěny? Pozvěte si
                profesionály.“
              </p>
              <dl className="paint-kontakt">
                <div>
                  <dt>Přijeďte za námi</dt>
                  <dd>U Stromovky 339/38, 736 01 Havířov</dd>
                </div>
                <div>
                  <dt>Zavolejte</dt>
                  <dd>
                    <a href="tel:800226226">800 226 226</a>
                  </dd>
                </div>
                <div>
                  <dt>Napište</dt>
                  <dd>
                    <a href="mailto:info@maliri-nateraci.cz">
                      info@maliri-nateraci.cz
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

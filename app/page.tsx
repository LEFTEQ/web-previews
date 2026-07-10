import type { CSSProperties } from "react";

export default function Page() {
  const trips = [
    {
      country: "Srí Lanka",
      title: "Přírodní bohatství Srí Lanky",
      note: "Privátní okruh s odletem kdykoli. Safari, trek do hor, lodí za velrybami a delfíny, sloni a mořské želvy.",
      price: "52 700",
      tag: "Privátní okruh",
    },
    {
      country: "Vietnam",
      title: "Nejzářivější perly Vietnamu",
      note: "Nejoblíbenější okruh celou zemí od severu k jihu, se zastavením u moře. Výborné recenze klientů.",
      price: "76 400",
      tag: "Okruh se stálou skupinou",
    },
    {
      country: "Indonésie",
      title: "Bali a země Torajů",
      note: "Z turistického Bali dál do světa neobvyklých tradic na ostrov Sulawesi mezi lid Torajů.",
      price: "63 700",
      tag: "Kontrastní poznávání",
    },
    {
      country: "Jižní Korea",
      title: "Na skok do Soulu",
      note: "Čtyři dny v moderním městě plném památek. Ideální prodloužený víkend na druhém konci světa.",
      price: "37 400",
      tag: "Pobyt ve městě",
    },
  ];

  const buildSteps = [
    {
      n: "01",
      head: "Řeknete, kam vás to táhne",
      body: "Napíšete nám destinace, termín, délku i styl cesty. Klidně kombinaci zemí, kterou nikde jinde nenajdete.",
    },
    {
      n: "02",
      head: "Sestavíme trasu na míru",
      body: "Poskládáme letenky na pravidelných linkách, ubytování a transfery. Nepřeprodáváme cizí produkt — cestu tvoříme sami.",
    },
    {
      n: "03",
      head: "Vysvětlíme podmínky vstupu",
      body: "Než odletíte, projdeme s vámi víza, očkování a všechny povinné náležitosti pro každou zemi na trase.",
    },
  ];

  return (
    <main className="nt">
      <header className="nt-top">
        <a className="nt-mark" href="#top" aria-label="Nirvana Travel — domů">
          <span className="nt-mark-nirvana">Nirvana</span>
          <span className="nt-mark-travel">Travel</span>
        </a>
        <nav className="nt-nav" aria-label="Hlavní nabídka">
          <a href="#nabidka">Zájezdy</a>
          <a href="#namiru">Na míru</a>
          <a href="#duvera">O nás</a>
        </nav>
        <a className="nt-phone" href="tel:+420702094885">702 094 885</a>
      </header>

      <section className="nt-hero" id="top">
        <img
          className="nt-hero-img"
          src="/hero.webp"
          alt="Sloni u vodopádu v bujné krajině Srí Lanky"
        />
        <div className="nt-hero-scrim" aria-hidden="true" />
        <div className="nt-hero-inner">
          <p className="nt-eyebrow">Cestovní kancelář · Praha</p>
          <h1 className="nt-hero-title">
            Když víte, kam chcete,
            <br />
            <em>tam vás dostaneme.</em>
          </h1>
          <p className="nt-hero-lead">
            Specialisté na individuální exotiku. Trasu vám poskládáme přesně na
            míru — Srí Lanka, Vietnam, Indonésie, Kostarika, Keňa i Jordánsko,
            přesně ve dnech a kombinaci, jakou si přejete.
          </p>
          <div className="nt-hero-cta">
            <a className="nt-btn" href="#namiru">Sestavit zájezd na míru</a>
            <a className="nt-btn nt-btn-ghost" href="#nabidka">Prohlédnout cesty</a>
          </div>
        </div>
        <div className="nt-hero-strip" aria-hidden="true">
          <span>Safari</span>
          <span>·</span>
          <span>Trek do hor</span>
          <span>·</span>
          <span>Za velrybami</span>
          <span>·</span>
          <span>Chrámy a tržnice</span>
          <span>·</span>
          <span>Odlet kdykoli</span>
        </div>
      </section>

      <section className="nt-section nt-nabidka" id="nabidka">
        <div className="nt-sec-head">
          <p className="nt-eyebrow nt-eyebrow-dark">Vybrané cesty</p>
          <h2 className="nt-h2">Kam právě teď posíláme klienty</h2>
          <p className="nt-sec-lead">
            Každá z těchto tras je odzkoušená a dá se upravit — prodloužit,
            zkrátit, přesunout odlet nebo přidat další zemi.
          </p>
        </div>

        <ul className="nt-grid">
          {trips.map((t, i) => (
            <li className="nt-card" key={t.title}>
              {i < 2 && (
                <img
                  className="nt-card-img"
                  src={i === 0 ? "/section-1.webp" : "/section-2.webp"}
                  alt={
                    i === 0
                      ? "Vodopád a divoká zeleň na Srí Lance"
                      : "Krajina a moře ve Vietnamu"
                  }
                />
              )}
              <div className="nt-card-body">
                <p className="nt-card-country">{t.country}</p>
                <h3 className="nt-card-title">{t.title}</h3>
                <p className="nt-card-tag">{t.tag}</p>
                <p className="nt-card-note">{t.note}</p>
                <div className="nt-card-foot">
                  <span className="nt-price">
                    <span className="nt-price-from">od</span>
                    <span className="nt-price-num">{t.price}</span>
                    <span className="nt-price-cur">Kč</span>
                  </span>
                  <a className="nt-link" href="#namiru">
                    Chci vědět víc
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <p className="nt-note-lastminute">
          Sháníte něco v exotice napřímo? Zajistíme také Kostariku, Mexiko,
          Kubu, Dominikánskou republiku, Keňu, Tanzánii, Réunion nebo Jordánsko.
        </p>
      </section>

      <section className="nt-section nt-duvera" id="duvera">
        <div className="nt-duvera-grid">
          <div className="nt-duvera-lead" id="namiru">
            <p className="nt-eyebrow nt-eyebrow-dark">Jak to u nás chodí</p>
            <h2 className="nt-h2">
              Váš specialista na cesty,
              <br />
              které nekoupíte v katalogu
            </h2>
            <p className="nt-sec-lead">
              Nepřeprodáváme hotové balíčky jiných kanceláří. Každou cestu
              skládáme sami z letenek na pravidelných linkách, ověřeného
              ubytování a transferů — přesně podle vašich představ.
            </p>
            <a className="nt-btn nt-btn-dark" href="tel:+420702094885">
              Zavolat na 702 094 885
            </a>
          </div>

          <ol className="nt-steps">
            {buildSteps.map((s) => (
              <li className="nt-step" key={s.n}>
                <span className="nt-step-n" aria-hidden="true">
                  {s.n}
                </span>
                <div>
                  <h3 className="nt-step-head">{s.head}</h3>
                  <p className="nt-step-body">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <blockquote className="nt-quote">
          <p>„Když víte, co chcete, u Nirvany to dostanete.“</p>
          <cite>— z recenze našeho klienta</cite>
        </blockquote>
      </section>
    </main>
  );
}

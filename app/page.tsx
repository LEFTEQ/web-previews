import type { CSSProperties } from "react";

export default function Page() {
  const ordinace = [
    {
      mesto: "Fulnek",
      adresa: "Palackého 291, Fulnek 742 45",
      hodiny: [
        { den: "Pondělí", casy: ["16:00–17:00"] },
        { den: "Úterý", casy: ["12:30–13:30", "16:30–17:30"] },
        { den: "Středa", casy: ["12:30–13:30"] },
        { den: "Čtvrtek", casy: ["12:30–13:30", "16:30–17:30"] },
        { den: "Pátek", casy: ["08:00–09:00"] },
      ],
    },
    {
      mesto: "Polanka nad Odrou",
      adresa: "K Vydralinám 114/5, Polanka nad Odrou 742 25",
      pozn: "Ordinace v budově zemědělského družstva.",
      hodiny: [
        { den: "Pondělí", casy: ["10:00–11:00"] },
        { den: "Úterý", casy: ["14:00–15:45"] },
        { den: "Středa", casy: ["—"] },
        { den: "Čtvrtek", casy: ["14:00–15:45"] },
        { den: "Pátek", casy: ["11:00–12:00"] },
      ],
    },
  ];

  const situace = [
    {
      titul: "Ordinační hodiny vám nesedí",
      text: "Domluvíme návštěvu u vás doma nebo mimo běžné časy. Stačí zavolat a najdeme termín.",
    },
    {
      titul: "Čeká vás složitější zákrok",
      text: "Před operací nebo náročnějším vyšetřením se rád domluvím předem, ať máme na zvíře klid a čas.",
    },
    {
      titul: "Něco se stalo hned teď",
      text: "Úraz, porod, náhlé zhoršení — volejte přímo. Neodkladné případy řeším přednostně.",
    },
  ];

  return (
    <main className="vet">
      <header className="vet-top">
        <a className="vet-mark" href="#uvod" aria-label="MVDr. Rudolf Šetka — veterinář Ostrava">
          <span className="vet-mark__pulse" aria-hidden="true" />
          <span className="vet-mark__name">
            <span className="vet-mark__dr">MVDr.</span> Rudolf Šetka
          </span>
        </a>
        <nav className="vet-nav" aria-label="Hlavní navigace">
          <a href="#ordinace">Ordinace</a>
          <a href="#situace">Kdy volat</a>
          <a className="vet-nav__call" href="tel:+420602760940">Zavolat</a>
        </nav>
      </header>

      <section className="vet-hero" id="uvod">
        <div className="vet-hero__copy">
          <p className="vet-eyebrow">Veterinární ordinace · Ostrava a okolí</p>
          <h1 className="vet-hero__title">
            Zvířatům
            <br />
            rozumím<span className="vet-hero__dot">.</span>
            <br />
            Vám taky.
          </h1>
          <p className="vet-hero__lead">
            Malá zvířata i hospodářská, ošetření v ordinaci i výjezd k vám domů.
            Dvě ordinace — ve Fulneku a v Polance nad Odrou — a telefon, který
            zvednu i pro neodkladné případy.
          </p>
          <div className="vet-hero__actions">
            <a className="vet-btn" href="tel:+420602760940">
              Zavolat — 602 760 940
            </a>
            <a className="vet-btn vet-btn--ghost" href="#ordinace">
              Kdy mám otevřeno
            </a>
          </div>
        </div>
        <figure className="vet-hero__media">
          <img
            src="/hero.webp"
            alt="MVDr. Rudolf Šetka při ošetření zvířete v ordinaci"
            className="vet-hero__img"
          />
          <figcaption className="vet-hero__card">
            <span className="vet-hero__card-label">Neodkladné případy</span>
            <span className="vet-hero__card-value">Volejte kdykoli</span>
          </figcaption>
        </figure>
      </section>

      <section className="vet-section vet-ordinace" id="ordinace">
        <div className="vet-section__head">
          <p className="vet-eyebrow">Ordinace</p>
          <h2 className="vet-section__title">Dvě ordinace, jeden veterinář</h2>
          <p className="vet-section__intro">
            Přijďte bez objednání v ordinačních hodinách, nebo se ozvěte a
            domluvíme se jinak. Adresy i časy najdete tady.
          </p>
        </div>

        <div className="vet-cards">
          {ordinace.map((o) => (
            <article className="vet-card" key={o.mesto}>
              <header className="vet-card__head">
                <h3 className="vet-card__city">{o.mesto}</h3>
                <address className="vet-card__addr">{o.adresa}</address>
              </header>
              <table className="vet-hours">
                <caption className="vet-visually-hidden">
                  Ordinační hodiny — {o.mesto}
                </caption>
                <tbody>
                  {o.hodiny.map((h) => (
                    <tr key={h.den}>
                      <th scope="row">{h.den}</th>
                      <td>
                        {h.casy.map((c, i) => (
                          <span className="vet-hours__slot" key={i}>
                            {c}
                          </span>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {o.pozn ? <p className="vet-card__note">{o.pozn}</p> : null}
            </article>
          ))}
        </div>

        <figure className="vet-strip">
          <img
            src="/section-1.webp"
            alt="Vyšetření domácího mazlíčka ve veterinární ordinaci"
            className="vet-strip__img"
          />
        </figure>
      </section>

      <section className="vet-section vet-situace" id="situace">
        <div className="vet-situace__grid">
          <div className="vet-situace__intro">
            <p className="vet-eyebrow">Kdy zavolat předem</p>
            <h2 className="vet-section__title">
              Někdy je lepší
              <br />
              nejdřív zavolat
            </h2>
            <p className="vet-section__intro">
              Telefonickou konzultaci doporučuji ve třech situacích. Ušetří
              vám i zvířeti čekání a mně umožní se na vás připravit.
            </p>
            <a className="vet-btn" href="tel:+420602760940">
              Zavolat — 602 760 940
            </a>
          </div>

          <ol className="vet-steps">
            {situace.map((s, i) => (
              <li className="vet-step" key={s.titul}>
                <span
                  className="vet-step__num"
                  style={{ "--i": i } as CSSProperties}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="vet-step__title">{s.titul}</h3>
                  <p className="vet-step__text">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <figure className="vet-about">
          <img
            src="/section-2.webp"
            alt="MVDr. Rudolf Šetka, veterinář z Nového Jičína"
            className="vet-about__img"
          />
          <figcaption className="vet-about__copy">
            <p className="vet-eyebrow">O mně</p>
            <p className="vet-about__text">
              Jsem MVDr. Rudolf Šetka. Léčím zvířata na Novojičínsku a
              Ostravsku už řadu let — psy, kočky i hospodářská zvířata.
              Nejraději pracuji tam, kde je klid: doma u vás nebo v ordinaci
              bez zbytečného spěchu.
            </p>
            <dl className="vet-contact">
              <div>
                <dt>Telefon</dt>
                <dd>
                  <a href="tel:+420602760940">+420 602 760 940</a>
                </dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd>
                  <a href="mailto:rudolfsetka@centrum.cz">
                    rudolfsetka@centrum.cz
                  </a>
                </dd>
              </div>
              <div>
                <dt>Sídlo</dt>
                <dd>Myslbekova 1821/30, Nový Jičín 741 01</dd>
              </div>
            </dl>
          </figcaption>
        </figure>
      </section>
    </main>
  );
}

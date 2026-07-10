import type { CSSProperties } from "react";

const steps = [
  {
    no: "01",
    title: "Konzultace a 3D snímek",
    text: "Sejdeme se, prohlédneme si ústa a pořídíme 3D rentgen čelisti. Na obrazovce vám ukážeme, kde přesně chybí kost a kam implantát zavedeme.",
  },
  {
    no: "02",
    title: "Zavedení implantátu",
    text: "Čelistní chirurg MUDr. Toušek zavede titanový šroub do čelistní kosti. Zákrok probíhá v lokální anestezii, obvykle za 30–60 minut a bez bolesti.",
  },
  {
    no: "03",
    title: "Hojení a vhojení",
    text: "Kost během tří až šesti měsíců sroste s povrchem implantátu. Po tuto dobu nosíte provizorní náhradu, se kterou se běžně najíte i usmějete.",
  },
  {
    no: "04",
    title: "Nasazení korunky",
    text: "Když je implantát pevně vhojený, zubní lékařka MUDr. Toušková nasadí korunku nebo můstek. Nový zub vypadá i funguje jako vlastní.",
  },
];

const implants = [
  {
    name: "Straumann",
    origin: "Švýcarsko",
    note: "Prémiový systém pro nejnáročnější případy. Rychlejší vhojení díky povrchu SLActive, doživotní záruka výrobce na implantát.",
  },
  {
    name: "Nobel Biocare",
    origin: "Švédsko",
    note: "Zakladatel oboru dentální implantologie. Osvědčené řešení pro jednotlivé zuby i pro můstky přes celou čelist.",
  },
  {
    name: "MIS",
    origin: "Izrael",
    note: "Spolehlivý implantát s výborným poměrem cena/výkon. Volíme ho tam, kde chcete jistotu za rozumnou cenu.",
  },
];

export default function Page() {
  return (
    <main className="td">
      <header className="td-nav">
        <a className="td-logo" href="#uvod" aria-label="Toudent — zubní implantáty Hradec Králové">
          <span className="td-logo-mark" aria-hidden="true">
            <span className="td-logo-tooth" />
          </span>
          <span className="td-logo-word">
            <span className="td-logo-name">Toudent</span>
            <span className="td-logo-sub">implantologie · Hradec Králové</span>
          </span>
        </a>
        <nav className="td-menu" aria-label="Hlavní navigace">
          <a href="#postup">Jak to probíhá</a>
          <a href="#implantaty">Implantáty</a>
          <a href="#tym">Náš tým</a>
        </nav>
        <a className="td-nav-cta" href="tel:+420495865412">Objednat se</a>
      </header>

      <section className="td-hero" id="uvod">
        <div className="td-hero-media">
          <img
            src="/hero.webp"
            alt="Ordinace Toudent v Hradci Králové připravená k zavedení zubního implantátu"
            className="td-hero-img"
          />
          <div className="td-hero-veil" aria-hidden="true" />
        </div>

        <div className="td-hero-inner">
          <p className="td-eyebrow">Zubní lékařka a čelistní chirurg pod jednou střechou</p>
          <h1 className="td-hero-title">
            Chybějící zub<br />
            <span className="td-hero-em">vrátíme na kořen</span>
          </h1>
          <p className="td-hero-lede">
            V ordinaci Toudent v Hradci Králové zavádíme titanové implantáty, které v čelisti
            drží jako vlastní zub. Kousejte tvrdé, mluvte i smějte se bez ostychu — nový zub
            pozná jen váš zubař.
          </p>
          <div className="td-hero-actions">
            <a className="td-btn" href="tel:+420495865412">Zavolat 495&nbsp;865&nbsp;412</a>
            <a className="td-btn td-btn-ghost" href="#postup">Jak zavedení probíhá</a>
          </div>
        </div>

        <dl className="td-hero-facts" aria-label="Základní údaje o implantátu">
          <div className="td-fact">
            <dt>materiál</dt>
            <dd>titan Ti-6Al-4V</dd>
          </div>
          <div className="td-fact">
            <dt>vhojení do kosti</dt>
            <dd>3–6 měsíců</dd>
          </div>
          <div className="td-fact">
            <dt>zákrok v anestezii</dt>
            <dd>bez bolesti</dd>
          </div>
        </dl>
      </section>

      <section className="td-section td-steps" id="postup">
        <div className="td-section-head">
          <p className="td-eyebrow">Krok za krokem</p>
          <h2 className="td-h2">Od prvního snímku po nový úsměv</h2>
          <p className="td-section-lede">
            Implantát není zákrok na jedno odpoledne — a to je dobře. Každá fáze má svůj čas,
            aby zub držel roky. Tady je, co vás čeká.
          </p>
        </div>

        <ol className="td-timeline">
          {steps.map((s) => (
            <li className="td-step" key={s.no}>
              <span className="td-step-no" aria-hidden="true">{s.no}</span>
              <div className="td-step-body">
                <h3 className="td-step-title">{s.title}</h3>
                <p className="td-step-text">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="td-figure">
          <img
            src="/section-1.webp"
            alt="Detail zubního implantátu s korunkou v čelistní kosti"
            className="td-figure-img"
          />
          <figcaption>
            Řez implantátem: titanový kořen v kosti, nad ním abutment a korunka. Sílu skusu
            přenáší přímo do čelisti — proto neubývá kost jako pod snímací protézou.
          </figcaption>
        </figure>
      </section>

      <section className="td-section td-trust" id="implantaty">
        <div className="td-trust-grid">
          <div className="td-trust-copy">
            <p className="td-eyebrow">Čím pracujeme</p>
            <h2 className="td-h2">Implantáty, kterým věříme</h2>
            <p className="td-section-lede">
              Nezakládáme kvalitu na jedné značce. Podle vaší situace i rozpočtu vybereme
              systém, který nejlépe sedne — od švýcarské špičky po spolehlivou střední třídu.
            </p>

            <ul className="td-brands">
              {implants.map((b) => (
                <li className="td-brand" key={b.name}>
                  <div className="td-brand-top">
                    <span className="td-brand-name">{b.name}</span>
                    <span className="td-brand-origin">{b.origin}</span>
                  </div>
                  <p className="td-brand-note">{b.note}</p>
                </li>
              ))}
            </ul>
          </div>

          <figure className="td-trust-figure">
            <img
              src="/section-2.webp"
              alt="Různé typy zubních implantátů používaných v ordinaci Toudent"
              className="td-trust-img"
            />
          </figure>
        </div>

        <div className="td-team" id="tym">
          <div className="td-team-card">
            <p className="td-team-role">Zubní lékařka</p>
            <p className="td-team-name">MUDr. Pavla Toušková</p>
            <p className="td-team-text">
              Zhotovuje korunky, můstky a protetiku nesenou implantáty. Postará se, aby nový
              zub ladil s ostatními tvarem i barvou.
            </p>
          </div>
          <div className="td-team-card">
            <p className="td-team-role">Čelistní chirurg</p>
            <p className="td-team-name">MUDr. Martin Toušek</p>
            <p className="td-team-text">
              Zavádí implantáty a řeší i náročnější případy s úbytkem kosti. Operuje šetrně,
              v lokální anestezii.
            </p>
          </div>
          <div className="td-team-card td-team-card--wide">
            <p className="td-team-role">Kde nás najdete</p>
            <p className="td-team-name">Bratří Štefanů 895, Hradec Králové</p>
            <p className="td-team-text">
              Lékařka a chirurg pracují v sousedních ordinacích — celou léčbu tedy zvládnete
              na jednom místě. Objednat se můžete na{" "}
              <a className="td-link" href="tel:+420495865412">495&nbsp;865&nbsp;412</a> nebo{" "}
              <a className="td-link" href="mailto:tousemar45@centrum.cz">tousemar45@centrum.cz</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

const SLATS = Array.from({ length: 16 });

const STEPS = [
  {
    n: "01",
    t: "Návrh a projekce",
    d: "Přijedeme, změříme tepelné ztráty a navrhneme výkon i umístění jednotek. Cenovou nabídku dostanete zdarma.",
  },
  {
    n: "02",
    t: "Montáž",
    d: "Čistá instalace, měděné rozvody chladiva, tlaková zkouška a zaškolení obsluhy. Uklidíme po sobě.",
  },
  {
    n: "03",
    t: "Servis a údržba",
    d: "Pravidelné čištění, kontrola chladiva a těsnosti. Prodloužíme životnost i platnost záruky.",
  },
  {
    n: "04",
    t: "Pohotovost",
    d: "Když jednotka vypoví službu, přijedeme rychle. Běžné náhradní díly vozíme s sebou.",
  },
];

export default function Page() {
  return (
    <main className="ck">
      <header className="ck-nav">
        <a className="ck-wordmark" href="#top" aria-label="Komfortní klimatizace, Ostrava">
          <span className="ck-wordmark__name">Komfortní klimatizace</span>
          <span className="ck-wordmark__plate">Ostrava · od 2010</span>
        </a>
        <nav className="ck-nav__links" aria-label="Hlavní navigace">
          <a href="#sluzby">Služby</a>
          <a href="#onas">O nás</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <section className="ck-hero" id="top">
        <div className="ck-hero__inner">
          <p className="ck-eyebrow ck-eyebrow--ondark">Ostrava · chladí i topí</p>
          <h1 className="ck-hero__title">
            Klimatizace<br />a tepelná<br />čerpadla
          </h1>
          <p className="ck-hero__lead">
            Od návrhu přes montáž až po servis. Certifikovaní technici na Toshiba,
            Daikin a Haier — pro váš byt, dům i firmu.
          </p>
          <div className="ck-hero__actions">
            <a className="ck-btn" href="tel:+420603889863">Zavolat 603 88 98 63</a>
            <a className="ck-btn ck-btn--ghost" href="#sluzby">Prohlédnout služby</a>
          </div>
        </div>
        <div className="ck-louver" aria-hidden="true">
          {SLATS.map((_, i) => (
            <span
              className="ck-louver__slat"
              key={i}
              style={{ animationDelay: `${0.35 + i * 0.045}s` }}
            />
          ))}
        </div>
      </section>

      <div className="ck-band" aria-hidden="true" />

      <section className="ck-section" id="sluzby">
        <div className="ck-head">
          <p className="ck-eyebrow">
            <span className="ck-num">01</span> Co děláme
          </p>
          <h2 className="ck-h2">
            Jedno zařízení, které v létě chladí a v zimě topí
          </h2>
        </div>

        <div className="ck-duo">
          <article className="ck-mode">
            <p className="ck-mode__tag ck-mode__tag--cool">Chlazení</p>
            <h3 className="ck-h3">Klimatizace</h3>
            <p className="ck-mode__lead">
              Nástěnné, kazetové a kanálové jednotky i multisplity pro celý byt.
              Tiché, s filtrací vzduchu a odvlhčováním.
            </p>
            <ul className="ck-list">
              <li>Byty, kanceláře i serverovny</li>
              <li>Regulace přes aplikaci v telefonu</li>
              <li>Odvlhčování a čištění vzduchu</li>
            </ul>
          </article>

          <div className="ck-scale" aria-hidden="true">
            <span className="ck-scale__cap ck-scale__cap--top">chladí</span>
            <span className="ck-scale__cap ck-scale__cap--bot">topí</span>
          </div>

          <article className="ck-mode">
            <p className="ck-mode__tag ck-mode__tag--warm">Vytápění</p>
            <h3 className="ck-h3">Tepelná čerpadla</h3>
            <p className="ck-mode__lead">
              Systémy vzduch-voda i vzduch-vzduch. Jeden zdroj tepla na celý rok,
              nižší účty za topení i ohřev vody.
            </p>
            <ul className="ck-list">
              <li>Novostavby i rekonstrukce</li>
              <li>Ohřev vody a podpora vytápění</li>
              <li>Poradíme s dotací Nová zelená úsporám</li>
            </ul>
          </article>
        </div>

        <ol className="ck-steps" aria-label="Od projektu až po servis">
          {STEPS.map((s) => (
            <li className="ck-step" key={s.n}>
              <span className="ck-step__n">{s.n}</span>
              <h4 className="ck-step__t">{s.t}</h4>
              <p className="ck-step__d">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <div className="ck-band ck-band--warm" aria-hidden="true" />

      <section className="ck-section ck-section--dark" id="onas">
        <div className="ck-about">
          <div className="ck-about__text">
            <p className="ck-eyebrow ck-eyebrow--ondark">
              <span className="ck-num ck-num--ondark">02</span> Proč my
            </p>
            <h2 className="ck-h2 ck-h2--ondark">
              Certifikovaní na značky, které vám montujeme
            </h2>
            <p className="ck-about__p">
              Jsme specialisté na klimatizace, tepelná čerpadla a vzduchotechniku
              pro domácnosti i firmy v Ostravě a okolí. Zakázku vedeme od prvního
              návrhu přes projekci a montáž až po dlouhodobý servis — nemusíte
              obvolávat víc firem.
            </p>
            <p className="ck-about__p">
              Dodáváme a instalujeme značky Toshiba, Daikin a Haier a držíme jejich
              certifikace. Kromě montáže zajišťujeme preventivní prohlídky
              i pohotovostní opravy.
            </p>
            <ul className="ck-plates" aria-label="Certifikace dodavatelů">
              <li className="ck-plate">Toshiba</li>
              <li className="ck-plate">Daikin</li>
              <li className="ck-plate">Haier</li>
            </ul>
          </div>

          <aside className="ck-card" id="kontakt" aria-label="Kontakt">
            <p className="ck-card__label">Kontakt · rating plate</p>
            <dl className="ck-spec">
              <div className="ck-spec__row">
                <dt>Telefon</dt>
                <dd>
                  <a href="tel:+420603889863">603 88 98 63</a>
                  <a href="tel:+420603525937">603 52 59 37</a>
                </dd>
              </div>
              <div className="ck-spec__row">
                <dt>E-mail</dt>
                <dd>
                  <a href="mailto:info@komfortklim.com">info@komfortklim.com</a>
                </dd>
              </div>
              <div className="ck-spec__row">
                <dt>Dílna</dt>
                <dd>Junácká 510, 724 00 Ostrava</dd>
              </div>
              <div className="ck-spec__row">
                <dt>Otevřeno</dt>
                <dd>Po–Pá 6:00–14:30<br />So–Ne zavřeno</dd>
              </div>
              <div className="ck-spec__row">
                <dt>IČO</dt>
                <dd>278 23 547</dd>
              </div>
            </dl>
            <a className="ck-btn ck-btn--full" href="tel:+420603889863">
              Zavolat technikovi
            </a>
          </aside>
        </div>
      </section>
    </main>
  );
}

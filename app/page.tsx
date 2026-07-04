import type { CSSProperties } from "react";

export default function Page() {
  const rooms = [
    {
      code: "M",
      name: "Metrážové koberce",
      desc: "Zátěžové i bytové v šíři 4 a 5 metrů. Změříme, nařežeme na rozměr místnosti a položíme bez viditelných spojů.",
      note: "obývák · ložnice · schody",
    },
    {
      code: "V",
      name: "Vinylové podlahy",
      desc: "Klik i lepené vinyly, které snesou vlhko v kuchyni i koupelně. Vypadají jako dřevo, chodí se po nich jako po podlaze.",
      note: "kuchyň · předsíň · celý byt",
    },
    {
      code: "P",
      name: "PVC a lino",
      desc: "Praktické krytiny v roli, snadná údržba a slušná cena. Ideální do dětského pokoje i do provozovny.",
      note: "dětský pokoj · chodba · ordinace",
    },
    {
      code: "K",
      name: "Kusové koberce",
      desc: "Do ruky si vezmete stovky vzorů a rozměrů. Doladí pokoj tam, kde nechcete zakrývat celou podlahu.",
      note: "obývák · pod jídelní stůl",
    },
  ];

  const steps = [
    {
      n: "01",
      title: "Přijdete si sáhnout",
      text: "Na Tyršově vedle OBI v Trmicích máte vzorky pod rukama. Osaháte si vlas, ohnete vinyl, srovnáte odstíny na denním světle.",
    },
    {
      n: "02",
      title: "Zaměříme u vás",
      text: "Přijedeme s metrem, spočítáme metry čtvereční i lišty. Řekneme rovnou, kolik materiálu koupíte a kolik ušetříte na odřezcích.",
    },
    {
      n: "03",
      title: "Položíme a uklidíme",
      text: "Podklad, řez, spoje, lišty. Odvezeme starou krytinu i odpad. Odcházíte do místnosti, do které se dá hned nastěhovat.",
    },
  ];

  return (
    <main className="brn">
      <header className="brn-top">
        <a className="brn-mark" href="#" aria-label="Koberce Breno Ústí nad Labem — domů">
          <span className="brn-mark__k">Koberce</span>
          <span className="brn-mark__b">BRENO</span>
          <span className="brn-mark__city">Ústí n. L.</span>
        </a>
        <a className="brn-phone" href="tel:+420724444235">
          <span className="brn-phone__label">Prodejna Trmice</span>
          <span className="brn-phone__num">724 444 235</span>
        </a>
      </header>

      <section className="brn-hero">
        <div className="brn-hero__img">
          <img
            src="/hero.webp"
            alt="Role metrážových koberců a vinylových podlah srovnané ve vzorkovně"
            width={1600}
            height={1100}
            loading="eager"
          />
        </div>
        <div className="brn-hero__panel">
          <p className="brn-eyebrow">Podlahářství · Tyršova 884, Ústí nad Labem</p>
          <h1 className="brn-h1">
            Vyberte krytinu z&nbsp;role.
            <span className="brn-h1__accent">My ji položíme na&nbsp;centimetr.</span>
          </h1>
          <p className="brn-lede">
            Metrážové koberce, vinyl, PVC i lino od nařezaného metru po hotovou
            místnost. Vzorkovna vedle OBI v&nbsp;Trmicích, pokládka po celém Ústecku.
          </p>
          <div className="brn-hero__actions">
            <a className="brn-btn brn-btn--solid" href="tel:+420724444235">
              Zavolat na prodejnu
            </a>
            <a className="brn-btn brn-btn--ghost" href="#nabidka">
              Prohlédnout krytiny
            </a>
          </div>
          <dl className="brn-facts">
            <div>
              <dt>Otevřeno</dt>
              <dd>Po–Ne 9–19</dd>
            </div>
            <div>
              <dt>Zaměření</dt>
              <dd>u vás doma</dd>
            </div>
            <div>
              <dt>Parkování</dt>
              <dd>u prodejny</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="brn-sec" id="nabidka" aria-labelledby="nabidka-h">
        <div className="brn-sec__head">
          <p className="brn-eyebrow">Co u nás rozvinete</p>
          <h2 className="brn-h2" id="nabidka-h">
            Čtyři druhy krytin, jedna parta, co je položí
          </h2>
          <p className="brn-sec__intro">
            Neprodáváme obrázky z katalogu. Krytinu si osaháte ve vzorkovně,
            odneseme ji z role a doma ji spojíme tak, aby přechody nikdo nenašel.
          </p>
        </div>

        <ol className="brn-rolls">
          {rooms.map((r) => (
            <li className="brn-roll" key={r.code}>
              <span className="brn-roll__code" aria-hidden="true">
                {r.code}
              </span>
              <div className="brn-roll__body">
                <h3 className="brn-roll__name">{r.name}</h3>
                <p className="brn-roll__desc">{r.desc}</p>
                <p className="brn-roll__note">{r.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="brn-trust" aria-labelledby="trust-h">
        <div className="brn-trust__media">
          <img
            src="/section-1.webp"
            alt="Podlahář ukládá metrážový koberec a zařezává ho podél stěny"
            width={1200}
            height={900}
            loading="lazy"
          />
        </div>
        <div className="brn-trust__text">
          <p className="brn-eyebrow">Jak to u nás chodí</p>
          <h2 className="brn-h2" id="trust-h">
            Od vzorku k hotové podlaze ve třech krocích
          </h2>
          <ol className="brn-steps">
            {steps.map((s) => (
              <li className="brn-step" key={s.n}>
                <span className="brn-step__n">{s.n}</span>
                <div>
                  <h3 className="brn-step__title">{s.title}</h3>
                  <p className="brn-step__text">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <figure className="brn-quote">
            <blockquote>
              „Přišli jsme jen okouknout vinyl a odešli s termínem pokládky.
              Spoje v předsíni od chodby nepoznáte.“
            </blockquote>
            <figcaption>— zákazník prodejny Ústí nad Labem</figcaption>
          </figure>

          <div className="brn-visit" style={{ "--rev": "1" } as CSSProperties}>
            <img
              src="/section-2.webp"
              alt="Vzorkovna Koberce Breno s regály vzorků koberců a podlah"
              width={1000}
              height={700}
              loading="lazy"
            />
            <div className="brn-visit__card">
              <p className="brn-eyebrow">Zastavte se</p>
              <p className="brn-visit__addr">
                Tyršova 884, 400 04 Ústí nad Labem — Trmice, vedle OBI
              </p>
              <p className="brn-visit__hours">
                Autobusem 2, 3, 7, 18 nebo trolejbusem 61, 62 na zastávku
                Trmice Globus. Parkování u prodejny.
              </p>
              <a className="brn-btn brn-btn--solid" href="tel:+420724444235">
                Domluvit zaměření
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import type { ReactNode } from "react";

const kroky = [
  {
    n: "01",
    t: "Vstupní prohlídka a foto",
    d: "Projdeme každý zub, změříme dásně a nafotíme výchozí stav. Uvidíte přesně to, co vidíme my — a kam míříme.",
  },
  {
    n: "02",
    t: "Odstranění zubního kamene",
    d: "Šetrně ultrazvukem rozpustíme kámen nad i pod dásní. Žádné drhnutí silou, žádný spěch.",
  },
  {
    n: "03",
    t: "Pískování AirFlow",
    d: "Jemný proud vody a prášku sundá pigment od kávy, čaje i cigaret. Sklovina se vrátí ke svému tónu.",
  },
  {
    n: "04",
    t: "Leštění, fluorid a nácvik",
    d: "Vyhladíme povrch, posílíme sklovinu fluoridem a ukážeme techniku čištění přesně na vašich zubech.",
  },
];

export default function Page(): ReactNode {
  return (
    <main className="ph">
      <header className="ph-top">
        <a className="ph-mark" href="#uvod" aria-label="Dentální hygiena Podještědská poliklinika">
          <span className="ph-mark-tooth">◗</span>
          <span className="ph-mark-name">
            Hygiena<span className="ph-mark-dot">·</span>Podještědská
          </span>
        </a>
        <a className="ph-top-call" href="tel:+420774437470">Objednat&nbsp;774&nbsp;437&nbsp;470</a>
      </header>

      <section className="ph-hero" id="uvod">
        <div className="ph-hero-copy">
          <p className="ph-eyebrow">Dentální hygiena &middot; Liberec, Podještědská poliklinika</p>
          <h1 className="ph-h1">
            Hladká sklovina,<br />
            <em>kterou ucítíte jazykem</em>
          </h1>
          <p className="ph-lead">
            Profesionální dentální hygiena pro dospělé i děti — od odstranění
            kamene po nácvik čištění, který doma opravdu udržíte. Klidné tempo,
            jedno křeslo, plná pozornost.
          </p>
          <div className="ph-hero-actions">
            <a className="ph-btn" href="tel:+420482360703">Zavolat na recepci</a>
            <a className="ph-btn ph-btn-ghost" href="mailto:info@poliklinikaliberec.cz">
              Napsat e-mail
            </a>
          </div>
          <p className="ph-hero-note">
            Objednávky na recepci pondělí–čtvrtek 7–13 h &middot; 482&nbsp;360&nbsp;703
          </p>
        </div>
        <figure className="ph-hero-fig">
          <img
            src="/hero.webp"
            alt="Dentální hygienistka při ošetření pacienta v ordinaci"
            className="ph-hero-img"
            width={960}
            height={1200}
          />
        </figure>
      </section>

      <section className="ph-steps" aria-labelledby="steps-h">
        <div className="ph-sec-head">
          <p className="ph-eyebrow">Jak vypadá návštěva</p>
          <h2 className="ph-h2" id="steps-h">
            Čtyři kroky, vždy ve stejném pořadí
          </h2>
          <p className="ph-sec-sub">
            Hygiena u nás trvá zhruba 60 minut a má jasnou strukturu. Nikam
            nespěcháme — každý krok navazuje na předchozí.
          </p>
        </div>

        <ol className="ph-step-list">
          {kroky.map((k) => (
            <li className="ph-step" key={k.n}>
              <span className="ph-step-n" aria-hidden="true">
                {k.n}
              </span>
              <div className="ph-step-body">
                <h3 className="ph-step-t">{k.t}</h3>
                <p className="ph-step-d">{k.d}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="ph-steps-fig">
          <img
            src="/section-1.webp"
            alt="Detail nástrojů pro dentální hygienu a ošetření zubů"
            className="ph-steps-img"
            width={1200}
            height={720}
          />
          <figcaption className="ph-cap">
            Ultrazvuk, AirFlow i ruční nástroje — sterilní sada pro každého
            pacienta zvlášť.
          </figcaption>
        </figure>
      </section>

      <section className="ph-trust" aria-labelledby="trust-h">
        <figure className="ph-trust-fig">
          <img
            src="/section-2.webp"
            alt="Recepce a prostředí Podještědské polikliniky v Liberci"
            className="ph-trust-img"
            width={1000}
            height={1100}
          />
        </figure>
        <div className="ph-trust-copy">
          <p className="ph-eyebrow">Proč k nám</p>
          <h2 className="ph-h2" id="trust-h">
            Součást polikliniky v&nbsp;Liberci od&nbsp;roku 1996
          </h2>
          <p className="ph-trust-lead">
            Dentální hygiena je u nás napojená na zubní ordinace pod jednou
            střechou. Když najdeme kaz nebo problém s dásní, předáme vás kolegům
            hned — bez objíždění města a opakovaného objednávání.
          </p>

          <dl className="ph-facts">
            <div className="ph-fact">
              <dt>Kde nás najdete</dt>
              <dd>Podještědská poliklinika, Liberec</dd>
            </div>
            <div className="ph-fact">
              <dt>Objednání</dt>
              <dd>
                <a href="tel:+420482360703">482&nbsp;360&nbsp;703</a> &middot;{" "}
                <a href="tel:+420774437470">774&nbsp;437&nbsp;470</a>
              </dd>
            </div>
            <div className="ph-fact">
              <dt>Recepce</dt>
              <dd>Pondělí–čtvrtek 7–13 h</dd>
            </div>
            <div className="ph-fact">
              <dt>E-mail</dt>
              <dd>
                <a href="mailto:info@poliklinikaliberec.cz">
                  info@poliklinikaliberec.cz
                </a>
              </dd>
            </div>
          </dl>

          <p className="ph-trust-note">
            Ošetření dentální hygieny není hrazené ze zdravotního pojištění —
            cenu vám řekneme předem, bez překvapení na konci.
          </p>
        </div>
      </section>
    </main>
  );
}

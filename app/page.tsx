import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      cislo: "01",
      nazev: "Izolační dvojskla a trojskla",
      popis:
        "Vyrobíme skla přesně na míru vašich oken. Lepší tepelná izolace, méně orosených ránních skel, tišší byt u rušné ulice.",
    },
    {
      cislo: "02",
      nazev: "Skleněné stěny a posuvné dveře",
      popis:
        "Prosvětlené příčky do kanceláří i bytů. Zaměříme, vyrobíme a osadíme kalené sklo tak, aby drželo a bezpečně se otevíralo.",
    },
    {
      cislo: "03",
      nazev: "Vrtání, broušení, fazetování",
      popis:
        "Opracování plochého skla na míru — otvory na kování, broušené hrany, fazety na zrcadla. Přesnost, kde je vidět každý milimetr.",
    },
    {
      cislo: "04",
      nazev: "Pískování a leptání",
      popis:
        "Matné vzory, loga i celoplošné mléčné sklo do koupelen a dveří. Soukromí bez ztráty světla.",
    },
    {
      cislo: "05",
      nazev: "Zasklívání oken a výloh",
      popis:
        "Rozbitá výloha nebo prasklé okno? Přijedeme, přeměříme a zasklíme — v Praze i okolí, rychle a čistě.",
    },
    {
      cislo: "06",
      nazev: "Skleněné obklady kuchyní a vitráže",
      popis:
        "Obklad za linku bez spár, do kterého se dá koukat. A když chcete něco osobitého, vyrobíme i vitráž.",
    },
  ];

  const hodiny = [
    { den: "Pondělí", cas: "9:00–12:00 · 12:30–17:00" },
    { den: "Úterý", cas: "9:00–12:00 · 12:30–17:00" },
    { den: "Středa", cas: "9:00–12:00 · 12:30–17:00" },
    { den: "Čtvrtek", cas: "9:00–12:00 · 12:30–18:00" },
    { den: "Pátek", cas: "9:00–12:00 · 12:30–14:00" },
  ];

  return (
    <main className="pd">
      <header className="pd-top">
        <a className="pd-mark" href="#" aria-label="Sklenářství Pudil, domů">
          <span className="pd-mark__pane" aria-hidden="true" />
          <span className="pd-mark__text">
            Sklenářství <strong>Pudil</strong>
          </span>
        </a>
        <a className="pd-tel" href="tel:+420603454401">
          603&nbsp;454&nbsp;401
        </a>
      </header>

      <section className="pd-hero">
        <div className="pd-hero__frame">
          <img
            className="pd-hero__img"
            src="/hero.webp"
            alt="Řez tabulí čirého plochého skla v dílně Sklenářství Pudil"
          />
          <div className="pd-hero__edge" aria-hidden="true" />
        </div>

        <div className="pd-hero__body">
          <p className="pd-eyebrow">
            Sklenářská dílna · Praha 12, U&nbsp;Kamýku
          </p>
          <h1 className="pd-hero__title">
            Ploché sklo
            <span className="pd-hero__title-line">řezané na&nbsp;přesnost,</span>
            <span className="pd-hero__title-em">ne&nbsp;na&nbsp;přibližně.</span>
          </h1>
          <p className="pd-hero__lede">
            Izolační dvojskla i celé skleněné stěny, obklady do kuchyní,
            zasklení rozbité výlohy. Zaměříme u vás, vyrobíme v&nbsp;dílně
            a osadíme tak, aby to sedlo na první pokus.
          </p>
          <div className="pd-hero__cta">
            <a className="pd-btn pd-btn--solid" href="tel:+420603454401">
              Zavolat do dílny
            </a>
            <a className="pd-btn pd-btn--ghost" href="#sluzby">
              Co vyrobíme
            </a>
          </div>
        </div>

        <dl className="pd-facts">
          <div className="pd-fact">
            <dt>Dílna</dt>
            <dd>U&nbsp;Kamýku 871/4, Praha 12</dd>
          </div>
          <div className="pd-fact">
            <dt>Působíme</dt>
            <dd>Praha a&nbsp;celý Pražský kraj</dd>
          </div>
          <div className="pd-fact">
            <dt>Zaměření</dt>
            <dd>na místě, zdarma</dd>
          </div>
        </dl>
      </section>

      <section className="pd-sec pd-sec--services" id="sluzby">
        <div className="pd-sec__head">
          <p className="pd-eyebrow">Co u nás objednáte</p>
          <h2 className="pd-sec__title">
            Od jedné tabule po&nbsp;kompletní realizaci
          </h2>
          <p className="pd-sec__intro">
            Řežeme, brousíme, kalíme, pískujeme a osazujeme. Většinu
            zakázek zvládneme od zaměření po montáž vlastními lidmi —
            nemusíte hlídat tři různé firmy.
          </p>
        </div>

        <ol className="pd-grid">
          {sluzby.map((s) => (
            <li className="pd-card" key={s.cislo}>
              <span className="pd-card__num" aria-hidden="true">
                {s.cislo}
              </span>
              <h3 className="pd-card__name">{s.nazev}</h3>
              <p className="pd-card__text">{s.popis}</p>
            </li>
          ))}
        </ol>

        <figure className="pd-shot">
          <img
            src="/section-1.webp"
            alt="Realizace skleněné zástěny a interiéru ze skla od Sklenářství Pudil"
            loading="lazy"
          />
          <figcaption className="pd-shot__cap">
            Skleněná zástěna z realizace v&nbsp;pražském interiéru
          </figcaption>
        </figure>
      </section>

      <section className="pd-sec pd-sec--about" id="o-nas">
        <div className="pd-about">
          <figure className="pd-about__img">
            <img
              src="/section-2.webp"
              alt="Pískované sklo s matným vzorem vyrobené v dílně Pudil"
              loading="lazy"
            />
          </figure>

          <div className="pd-about__body">
            <p className="pd-eyebrow">Proč lidé chodí zrovna k nám</p>
            <h2 className="pd-sec__title">
              Malá dílna, dlouhá praxe
            </h2>
            <p className="pd-about__text">
              Sklo zpracováváme roky a viděli jsme, co se u něj kazí —
              proto měříme dvakrát a řežeme jednou. Přijedeme se podívat,
              řekneme rovnou, co dává smysl, a domluvíme termín, který
              platí. Naši práci najdete v&nbsp;bytech, kancelářích
              i&nbsp;výlohách po&nbsp;celé Praze.
            </p>

            <div className="pd-hours" aria-label="Otevírací doba dílny">
              <h3 className="pd-hours__title">Kdy nás zastihnete</h3>
              <ul className="pd-hours__list">
                {hodiny.map((h) => (
                  <li className="pd-hours__row" key={h.den}>
                    <span className="pd-hours__day">{h.den}</span>
                    <span className="pd-hours__time">{h.cas}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pd-contact">
              <a className="pd-contact__item" href="tel:+420603454401">
                <span className="pd-contact__label">Telefon</span>
                <span className="pd-contact__val">603 454 401</span>
              </a>
              <a className="pd-contact__item" href="mailto:pudil@email.cz">
                <span className="pd-contact__label">E-mail</span>
                <span className="pd-contact__val">pudil@email.cz</span>
              </a>
              <a
                className="pd-contact__item"
                href="https://mapy.cz/?q=U+Kamýku+871/4+Praha"
                target="_blank"
                rel="noreferrer"
              >
                <span className="pd-contact__label">Dílna</span>
                <span className="pd-contact__val">U Kamýku 871/4, Praha 12</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

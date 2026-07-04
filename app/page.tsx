import type { CSSProperties } from "react";

export default function Page() {
  const models = [
    {
      code: "HEVN HOME",
      title: "Nabíječka domů na zeď",
      desc: "Kompaktní wallbox pro rodinný dům. Nabijete přes noc, ráno vyjíždíte na plno. Zapojíme na váš stávající rozvaděč.",
      power: "do 22 kW",
    },
    {
      code: "HEVN SOLAR",
      title: "Nabíjení z vlastní fotovoltaiky",
      desc: "Řízené nabíjení podle přebytků z panelů. Auto dobíjí, když svítí slunce a elektřina je zdarma.",
      power: "do 22 kW",
    },
    {
      code: "HEVN POST",
      title: "Stojan na parkoviště",
      desc: "Samostojný sloupek pro firmu nebo bytový dům. Odolný nárazům i olomouckému počasí, dva vozy najednou.",
      power: "2× 22 kW",
    },
    {
      code: "HEVN CITY",
      title: "Veřejná stanice do města",
      desc: "Rychlonabíjení pro veřejný prostor s odečtem a platbou. Provoz hlídáme dálkově z HEVN Cloudu.",
      power: "do 50 kW",
    },
  ];

  const steps = [
    {
      n: "01",
      title: "Přijedeme a změříme",
      desc: "Podíváme se na rozvaděč, jistič i trasu kabelu. Řekneme rovnou, co jde a co ne — bez planých slibů.",
    },
    {
      n: "02",
      title: "Zapojíme a zrevidujeme",
      desc: "Montáž, jištění, chránič a výchozí revize. Vše podle normy, s razítkem revizního technika.",
    },
    {
      n: "03",
      title: "Nastavíme a pohlídáme",
      desc: "Připojíme přes Ethernet nebo LTE modem, nastavíme HEVN Cloud a servis řešíme dálkově.",
    },
  ];

  return (
    <main className="hg">
      <header className="hg-topbar">
        <a className="hg-mark" href="#top" aria-label="Heger-eu, elektrikář a nabíjecí stanice, Olomouc">
          <span className="hg-mark__phase" aria-hidden="true">L1</span>
          <span className="hg-mark__name">Heger<span className="hg-mark__eu">-eu</span></span>
          <span className="hg-mark__sub">elektro · Olomouc</span>
        </a>
        <a className="hg-call" href="tel:+420601126994">Zavolat 601 126 994</a>
      </header>

      <section className="hg-hero" id="top">
        <div className="hg-hero__grid">
          <div className="hg-hero__text">
            <p className="hg-eyebrow"><span className="hg-eyebrow__dot" aria-hidden="true" />Elektroinstalace &amp; nabíjecí stanice HEVN</p>
            <h1 className="hg-hero__title">
              Připojíme vaše<br />auto na proud.
            </h1>
            <p className="hg-hero__lead">
              Vyvíjíme, vyrábíme a montujeme nabíjecí stanice HEVN pro elektromobily — od wallboxu na garáž
              po veřejný stojan. Sídlíme v Olomouci na 17. listopadu, servis jezdíme po celém Česku i na Slovensko.
            </p>
            <div className="hg-hero__actions">
              <a className="hg-btn hg-btn--solid" href="#modely">Vybrat nabíječku</a>
              <a className="hg-btn hg-btn--ghost" href="#postup">Jak to probíhá</a>
            </div>
            <dl className="hg-specs">
              <div className="hg-specs__item">
                <dt>Výkon</dt>
                <dd>3,7&ndash;50 kW</dd>
              </div>
              <div className="hg-specs__item">
                <dt>Připojení</dt>
                <dd>Ethernet / LTE</dd>
              </div>
              <div className="hg-specs__item">
                <dt>Servis</dt>
                <dd>CZ &amp; SK</dd>
              </div>
            </dl>
          </div>
          <figure className="hg-hero__media">
            <img
              src="/hero.webp"
              alt="Nabíjecí stanice HEVN s připojeným elektromobilem"
              className="hg-hero__img"
              width={960}
              height={1200}
            />
            <figcaption className="hg-hero__tag">
              <span className="hg-hero__tag-line" aria-hidden="true" />
              Stanice HEVN — vlastní vývoj a výroba
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="hg-section hg-section--models" id="modely">
        <div className="hg-section__head">
          <p className="hg-eyebrow"><span className="hg-eyebrow__dot" aria-hidden="true" />Řada HEVN</p>
          <h2 className="hg-section__title">Nabíječka na míru vašemu odběru</h2>
          <p className="hg-section__intro">
            Stanice stavíme jako otevřený systém — každý kus doladíme na váš jistič, počet aut i způsob
            platby. Poradíme i s dotací na pořízení vozu nebo nabíječky pro živnostníky a malé firmy.
          </p>
        </div>

        <ul className="hg-models">
          {models.map((m) => (
            <li className="hg-model" key={m.code}>
              <div className="hg-model__top">
                <span className="hg-model__code">{m.code}</span>
                <span className="hg-model__power">{m.power}</span>
              </div>
              <h3 className="hg-model__title">{m.title}</h3>
              <p className="hg-model__desc">{m.desc}</p>
            </li>
          ))}
        </ul>

        <figure className="hg-band">
          <img
            src="/section-1.webp"
            alt="Detail komponent nabíjecí stanice HEVN připravených k montáži"
            className="hg-band__img"
            width={1600}
            height={720}
          />
          <figcaption className="hg-band__cap">
            Komponenty testované a certifikované předními evropskými výrobci aut.
          </figcaption>
        </figure>
      </section>

      <section className="hg-section hg-section--trust" id="postup">
        <div className="hg-trust">
          <div className="hg-trust__intro">
            <p className="hg-eyebrow"><span className="hg-eyebrow__dot" aria-hidden="true" />Od poptávky k proudu</p>
            <h2 className="hg-section__title">Tři kroky, jeden termín a revize v ruce</h2>
            <p className="hg-section__intro">
              Nejsme jen prodejce boxu. Jsme elektrikáři — přijedeme, zapojíme, zrevidujeme a stanici
              vám pak hlídáme dálkově přes HEVN Cloud.
            </p>
            <figure className="hg-trust__media">
              <img
                src="/section-2.webp"
                alt="Elektrikář Heger-eu při montáži nabíjecí stanice"
                className="hg-trust__img"
                width={1000}
                height={760}
              />
            </figure>
          </div>

          <ol className="hg-steps">
            {steps.map((s) => (
              <li className="hg-step" key={s.n}>
                <span className="hg-step__n" aria-hidden="true">{s.n}</span>
                <div className="hg-step__body">
                  <h3 className="hg-step__title">{s.title}</h3>
                  <p className="hg-step__desc">{s.desc}</p>
                </div>
              </li>
            ))}
            <li className="hg-cloud">
              <p className="hg-cloud__label">HEVN Cloud vám ukáže</p>
              <ul className="hg-cloud__list">
                <li>přehled každého nabíjení a jeho ceny</li>
                <li>řízení přístupu a provozních hodin</li>
                <li>vzdálenou pomoc, když něco zlobí</li>
                <li>stav všech stanic na jednom místě</li>
              </ul>
            </li>
          </ol>
        </div>

        <address className="hg-contact">
          <div className="hg-contact__item">
            <span className="hg-contact__label">Kde nás najdete</span>
            <span className="hg-contact__val">17. listopadu 1215/2a<br />779 00 Olomouc</span>
          </div>
          <div className="hg-contact__item">
            <span className="hg-contact__label">Zavolejte</span>
            <a className="hg-contact__val hg-contact__link" href="tel:+420601126994">+420 601 126 994</a>
          </div>
          <div className="hg-contact__item">
            <span className="hg-contact__label">Napište</span>
            <a className="hg-contact__val hg-contact__link" href="mailto:info@heger-eu.com">info@heger-eu.com</a>
          </div>
        </address>
      </section>
    </main>
  );
}

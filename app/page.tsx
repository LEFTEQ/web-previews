import type { CSSProperties } from "react";

export default function Page() {
  const kroky = [
    {
      c: "01",
      t: "Vstupní prohlídka a plán",
      p: "Projdeme spolu stav dásní i zubů, ukážeme, kde se drží plak, a domluvíme, jak často chodit. Nic neděláme naslepo.",
    },
    {
      c: "02",
      t: "Odstranění zubního kamene",
      p: "Ultrazvukem i ručně sundáme kámen nad i pod dásní. Tam, kde běžný kartáček nedosáhne.",
    },
    {
      c: "03",
      t: "Air-flow a pískování",
      p: "Jemný proud prášku a vody rozpustí pigmentace od kávy, čaje i cigaret. Zuby zůstanou hladké a světlejší.",
    },
    {
      c: "04",
      t: "Nácvik čištění doma",
      p: "Ukážeme techniku přesně na vašich zubech — kartáček, mezizubní kartáčky, flossy. Aby výsledek vydržel.",
    },
  ];

  const cenik = [
    { s: "Dentální hygiena — první návštěva", c: "1 200 Kč" },
    { s: "Dentální hygiena — opakovaná", c: "1 000 Kč" },
    { s: "Air-flow pískování", c: "400 Kč" },
    { s: "Hygiena u dětí do 15 let", c: "700 Kč" },
  ];

  return (
    <main className="dz">
      <header className="dz-nav">
        <a className="dz-brand" href="#" aria-label="Dentální Centrum Z — úvod">
          <span className="dz-mark" aria-hidden="true">Z</span>
          <span className="dz-brand-txt">
            <span className="dz-brand-1">Dentální Centrum</span>
            <span className="dz-brand-2">Hradec Králové</span>
          </span>
        </a>
        <nav className="dz-links" aria-label="Hlavní navigace">
          <a href="#pece">Péče</a>
          <a href="#cenik">Ceník</a>
          <a href="#onas">O nás</a>
        </nav>
        <a className="dz-cta-top" href="tel:+420777298458">Objednat se</a>
      </header>

      <section className="dz-hero" aria-labelledby="dz-h1">
        <div className="dz-hero-grid">
          <div className="dz-hero-copy">
            <p className="dz-eyebrow">Dentální hygiena · Antonína Dvořáka, HK</p>
            <h1 id="dz-h1">
              Zuby, které
              <span className="dz-hl"> skřípou čistotou.</span>
            </h1>
            <p className="dz-lede">
              Profesionální hygiena, kterou poznáte jazykem hned po odchodu z křesla.
              Sundáme kámen, vypískujeme pigmentace a naučíme vás čistit tak,
              aby vydržely mezi návštěvami zdravé.
            </p>
            <div className="dz-hero-actions">
              <a className="dz-cta" href="tel:+420777298458">Zavolat +420 777 298 458</a>
              <a className="dz-ghost" href="#pece">Jak probíhá návštěva</a>
            </div>
            <dl className="dz-hours">
              <div><dt>Po–Čt</dt><dd>8:00–16:00</dd></div>
              <div><dt>Pátek</dt><dd>8:00–13:00</dd></div>
              <div><dt>Kde</dt><dd>Antonína Dvořáka 592</dd></div>
            </dl>
          </div>
          <div className="dz-hero-media">
            <img
              src="/hero.webp"
              alt="Ordinace dentální hygieny Dentálního Centra Z v Hradci Králové"
              className="dz-hero-img"
              width={720}
              height={880}
            />
            <span className="dz-hero-tag">Vlastní parkoviště u ordinace</span>
          </div>
        </div>
      </section>

      <section className="dz-pece" id="pece" aria-labelledby="dz-pece-h">
        <div className="dz-sec-head">
          <p className="dz-eyebrow dz-eyebrow-dark">Průběh návštěvy</p>
          <h2 id="dz-pece-h">Čtyři kroky, po kterých je rozdíl cítit</h2>
          <p className="dz-sec-sub">
            Návštěva trvá zhruba hodinu. Nespěcháme — od prohlídky až po nácvik
            čištění jdeme popořadě, ať víte, co se s vašimi zuby děje.
          </p>
        </div>
        <div className="dz-pece-body">
          <ol className="dz-steps">
            {kroky.map((k) => (
              <li key={k.c} className="dz-step">
                <span className="dz-step-num" aria-hidden="true">{k.c}</span>
                <div>
                  <h3>{k.t}</h3>
                  <p>{k.p}</p>
                </div>
              </li>
            ))}
          </ol>
          <figure className="dz-pece-fig">
            <img
              src="/section-1.webp"
              alt="Ošetření dentální hygienistkou — čištění zubů ultrazvukem"
              width={640}
              height={720}
            />
            <figcaption>Ultrazvuk i air-flow — na kámen nad i pod dásní.</figcaption>
          </figure>
        </div>
      </section>

      <section className="dz-trust" id="onas" aria-labelledby="dz-trust-h">
        <div className="dz-trust-grid">
          <figure className="dz-trust-fig">
            <img
              src="/section-2.webp"
              alt="Recepce a prostředí Dentálního Centra Z v Hradci Králové"
              width={640}
              height={720}
            />
          </figure>
          <div className="dz-trust-copy">
            <p className="dz-eyebrow dz-eyebrow-dark">O nás</p>
            <h2 id="dz-trust-h">Centrum na Antonína Dvořáka, kam se lidé vracejí</h2>
            <p>
              Jsme dentální centrum v Hradci Králové, kousek od Terminálu
              hromadné dopravy. K nám se dá dojet i zaparkovat bez kroužení —
              vlastní parkoviště máte přímo u dveří, vjezd z ulice Antonína
              Dvořáka směrem do centra.
            </p>
            <p>
              Hygienu bereme jako řemeslo, které má být vidět i cítit.
              Pracujeme šetrně, vysvětlujeme každý krok a domluvíme interval,
              který sedí právě vám.
            </p>
            <div id="cenik" className="dz-cenik">
              <h3>Ceník</h3>
              <ul>
                {cenik.map((r) => (
                  <li key={r.s}>
                    <span>{r.s}</span>
                    <span className="dz-cena">{r.c}</span>
                  </li>
                ))}
              </ul>
              <p className="dz-cenik-note">
                Ceny jsou orientační. Přesnou částku vám řekneme po prohlídce,
                než cokoliv začneme.
              </p>
            </div>
            <a className="dz-cta dz-cta-dark" href="tel:+420777298458">
              Objednat termín telefonicky
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

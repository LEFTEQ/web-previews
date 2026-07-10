import type { CSSProperties } from "react";

export default function Page() {
  const rooms = [
    {
      code: "1+1",
      plocha: "do 40 m²",
      cena: "6 490",
      popis: "Garsonka nebo malý byt. Stěny i strop, dvě vrstvy.",
    },
    {
      code: "2+1",
      plocha: "do 55 m²",
      cena: "7 390",
      popis: "Klasický brněnský byt. Zakrytí nábytku v ceně.",
    },
    {
      code: "3+1",
      plocha: "do 70 m²",
      cena: "10 570",
      popis: "Rodinný byt. Úklid a odvoz nepořádku po nás.",
    },
  ];

  const postup = [
    {
      c: "01",
      nadpis: "Zavoláte nebo napíšete",
      text: "Řekneme si, co potřebujete vymalovat. Prohlídku interiéru zvládneme i online, zdarma.",
    },
    {
      c: "02",
      nadpis: "Přesná kalkulace předem",
      text: "Dostanete konečnou cenu na papíře, ne odhad. Žádné dopočítávání po skončení práce.",
    },
    {
      c: "03",
      nadpis: "Přijedeme a vymalujeme",
      text: "Zakryjeme nábytek i podlahy, natáhneme dvě vrstvy a držíme domluvený termín.",
    },
    {
      c: "04",
      nadpis: "Uklidíme a odvezeme",
      text: "Po sobě vše pečlivě uklidíme a nepořádek odvezeme. Vracíte se do hotového bytu.",
    },
  ];

  return (
    <main className="mg">
      {/* HERO */}
      <header className="mg-top">
        <a className="mg-mark" href="#" aria-label="Gilányi — malířství Brno">
          <span className="mg-mark__name">Gilányi</span>
          <span className="mg-mark__sub">malířství &amp; natěračství · Brno</span>
        </a>
        <a className="mg-tel" href="tel:+420733189529">
          <span className="mg-tel__label">Zavolat</span>
          <span className="mg-tel__num">733 189 529</span>
        </a>
      </header>

      <section className="mg-hero" aria-labelledby="hero-nadpis">
        <div className="mg-hero__grid">
          <div className="mg-hero__text">
            <p className="mg-eyebrow">Malíř pokojů · Brno a okolí</p>
            <h1 id="hero-nadpis" className="mg-h1">
              Dvě vrstvy,
              <br />
              <span className="mg-h1__accent">rovná hrana,</span>
              <br />
              čistý byt.
            </h1>
            <p className="mg-lede">
              Vymalujeme vám byt, dům i kancelář v&nbsp;Brně tak, jak to má
              vypadat — s&nbsp;precizním nátěrem, ostrým přechodem u&nbsp;lišt
              a&nbsp;uklizeným prostorem, do kterého se vracíte.
            </p>
            <div className="mg-hero__cta">
              <a className="mg-btn" href="tel:+420733189529">
                Zavolat 733&nbsp;189&nbsp;529
              </a>
              <a className="mg-btn mg-btn--ghost" href="#cenik">
                Zjistit cenu
              </a>
            </div>
            <ul className="mg-swatches" aria-label="Odstíny, se kterými pracujeme">
              <li>
                <span className="mg-swatch" style={{ "--c": "#F4F0E6" } as CSSProperties} />
                Bílá klasik
              </li>
              <li>
                <span className="mg-swatch" style={{ "--c": "#C9D6DE" } as CSSProperties} />
                Šedomodrá
              </li>
              <li>
                <span className="mg-swatch" style={{ "--c": "#D8A24A" } as CSSProperties} />
                Okrová
              </li>
              <li>
                <span className="mg-swatch" style={{ "--c": "#1B3A6B" } as CSSProperties} />
                Petrolej
              </li>
            </ul>
          </div>

          <figure className="mg-hero__figure">
            <img
              className="mg-hero__img"
              src="/hero.webp"
              alt="Malíř Gilányi při práci — čerstvě vymalovaný pokoj v Brně"
              width={880}
              height={1040}
              loading="eager"
            />
            <figcaption className="mg-hero__cap">
              Michal Gilányi · majitel a&nbsp;malíř
            </figcaption>
          </figure>
        </div>
      </section>

      {/* SEKCE 1 — CENÍK / SLUŽBY */}
      <section className="mg-sec mg-cenik" id="cenik" aria-labelledby="cenik-nadpis">
        <div className="mg-sec__head">
          <p className="mg-eyebrow mg-eyebrow--dark">Ceník · akce do 31.&nbsp;8.</p>
          <h2 id="cenik-nadpis" className="mg-h2">Kolik stojí vymalovat byt</h2>
          <p className="mg-sec__lede">
            Konkrétní cena za kompletní vymalování — stěny i&nbsp;strop, dvě
            vrstvy, zakrytí a&nbsp;úklid v&nbsp;ceně. Bez dopočítávání na konci.
          </p>
        </div>

        <ol className="mg-cards">
          {rooms.map((r) => (
            <li key={r.code} className="mg-card">
              <span className="mg-card__code">{r.code}</span>
              <span className="mg-card__plocha">{r.plocha}</span>
              <p className="mg-card__popis">{r.popis}</p>
              <span className="mg-card__cena">
                {r.cena} <small>Kč</small>
              </span>
            </li>
          ))}
        </ol>

        <div className="mg-note">
          <div className="mg-note__img">
            <img
              src="/section-1.webp"
              alt="Detail rovného přechodu barvy u stropní lišty"
              width={720}
              height={520}
              loading="lazy"
            />
          </div>
          <div className="mg-note__text">
            <h3 className="mg-h3">Máte levnější nabídku? Ukažte nám ji.</h3>
            <p>
              Pošlete cenu od jiné firmy a&nbsp;připravíme vám výhodnější
              řešení. Kromě malování zvládneme i&nbsp;tapetování, stěrky,
              natěračské práce a&nbsp;nátěry fasád včetně výškových prací.
            </p>
            <ul className="mg-tags">
              <li>Tapetování</li>
              <li>Stěrky</li>
              <li>Natěračství</li>
              <li>Fasády</li>
              <li>Kanceláře</li>
            </ul>
            <a className="mg-btn" href="mailto:infogilanyi@email.cz">
              Poslat nabídku ke srovnání
            </a>
          </div>
        </div>
      </section>

      {/* SEKCE 2 — POSTUP / O NÁS */}
      <section className="mg-sec mg-about" aria-labelledby="about-nadpis">
        <div className="mg-about__grid">
          <div className="mg-about__intro">
            <p className="mg-eyebrow">Jak to u&nbsp;nás chodí</p>
            <h2 id="about-nadpis" className="mg-h2 mg-h2--light">
              Od telefonu k&nbsp;hotovému bytu ve čtyřech krocích
            </h2>
            <figure className="mg-about__quote">
              <img
                src="/section-2.webp"
                alt="Michal Gilányi, majitel malířské firmy z Brna"
                width={640}
                height={640}
                loading="lazy"
              />
              <figcaption>
                <p>
                  „Malování dělám tak, abych se za výsledek nemusel stydět —
                  a&nbsp;abyste se vy nemuseli ptát, co bude stát navíc.“
                </p>
                <span className="mg-about__author">
                  Michal Gilányi — majitel, Stará 59/11, Brno-Zábrdovice
                </span>
              </figcaption>
            </figure>
          </div>

          <ol className="mg-steps">
            {postup.map((s) => (
              <li key={s.c} className="mg-step">
                <span className="mg-step__num">{s.c}</span>
                <div>
                  <h3 className="mg-step__h">{s.nadpis}</h3>
                  <p className="mg-step__t">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <ul className="mg-trust">
          <li>Přesná kalkulace zdarma</li>
          <li>Čistota při práci i&nbsp;po ní</li>
          <li>Dodržujeme termíny</li>
          <li>Ověřené materiály</li>
          <li>Férové jednání</li>
        </ul>
      </section>
    </main>
  );
}

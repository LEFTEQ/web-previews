import React from "react";

const services = [
  {
    n: "Střih 01",
    title: "Splývavé letní šaty",
    text: "Boho-chic i puntíkovaná klasika. Áčkové střihy z lehoučkých, krásně splývavých látek — Simeone, Lorae, Shira, Zahra. Pohodlí do města i na procházku.",
    chips: ["#b7476a", "#6b7159", "#c69a4a"],
  },
  {
    n: "Střih 02",
    title: "Palazzo kalhoty",
    text: "Široké nohavice, ve kterých se cítíte svobodně. Zarah a Shayma v béžové, tmavě modré, hnědé i cihlové — gramážově kvalitní látka na horké dny.",
    chips: ["#e5d8c6", "#2b3247", "#5a3a2a", "#9a3b28"],
  },
  {
    n: "Střih 03",
    title: "Univerzální kousky",
    text: "Rafinované šaty Asja, které se přizpůsobí náladě. Pět barev od mentolu po tmavě růžovou — sázka na jistotu, co nevyjde z módy.",
    chips: ["#e5d8c6", "#d98fa8", "#6b7159", "#8fd0b8"],
  },
];

const quotes = [
  {
    q: "Šaty seděly na první dobrou a látka je opravdu lehoučká. Objednávka dorazila do Ostravy za dva dny.",
    a: "Jana K., Ostrava-Poruba",
  },
  {
    q: "Holky mi poradily velikost přes zprávu a nespletly se. Palazzo kalhoty nosím celé léto.",
    a: "Lucie M., Frýdek-Místek",
  },
];

export default function Page() {
  return (
    <main>
      <header className="top">
        <div className="mark">
          <span style={{ marginTop: 0, marginBottom: 4 }}>Ostrava · dámská móda</span>
          Victoria <b>Style</b>
        </div>
        <nav aria-label="Hlavní">
          <a href="#saty">Šaty</a>
          <a href="#kalhoty">Kalhoty</a>
          <a href="#o-nas">O nás</a>
        </nav>
      </header>

      <section className="hero" aria-label="Úvod">
        <div className="hero-grid">
          <div className="hero-copy reveal d1">
            <div className="eyebrow">Nová letní kolekce · skladem</div>
            <h1>
              Ušité na míru<br />
              vašemu <em>dni.</em>
            </h1>
            <p className="lead">
              Dámské oblečení, ve kterém vypadáte podle nejnovějších trendů
              a přitom se celý den cítíte pohodlně — do práce, do města
              i jen tak na procházku.
            </p>
            <div className="hero-cta">
              <a className="btn" href="#saty">Prohlédnout kolekci</a>
              <a className="btn btn-ghost" href="#o-nas">Jak nakupovat</a>
            </div>
          </div>

          <div className="hero-fig reveal d2">
            <div className="tape" aria-hidden="true">
              <div className="ticks">
                {Array.from({ length: 22 }).map((_, i) => (
                  <i
                    key={i}
                    style={{ top: `${(i * 100) / 22}%`, width: i % 5 === 0 ? "18px" : "10px" }}
                  />
                ))}
              </div>
              <span className="lbl">Krejčovská míra · Victoria Style</span>
            </div>
            <img
              src="/hero.webp"
              alt="Modelka v letních šatech z kolekce Victoria Style"
            />
          </div>
        </div>
      </section>

      <section className="services" id="saty" aria-label="Nabídka">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="eyebrow">Co u nás najdete</div>
              <h2>Tři střihy, které<br />si zamilujete</h2>
            </div>
            <p>
              Vybíráme kousky, které dobře sednou i vydrží. Ceny od 399 Kč,
              většina modelů skladem a odesíláme do druhého dne.
            </p>
          </div>

          <div className="swatches" id="kalhoty">
            {services.map((s, i) => (
              <article className={`swatch reveal d${i + 1}`} key={s.title}>
                <div className="num">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <div className="chips" aria-hidden="true">
                  {s.chips.map((c, j) => (
                    <span key={j} style={{ background: c }} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about" id="o-nas" aria-label="O nás">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="eyebrow" style={{ color: "var(--gold)" }}>
                Victoria Style · Ostrava
              </div>
              <h2>Malý obchod<br />s velkou péčí</h2>
            </div>
            <p style={{ color: "#d9cfc8" }}>
              Nejsme anonymní e-shop. Poradíme s velikostí, materiálem
              i tím, k čemu se který kousek hodí.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-copy reveal d1">
              <p>
                Oblékáme Ostravanky i zákaznice z celého Moravskoslezského kraje.
                Každý model si <strong>osaháme a vyzkoušíme</strong>, než ho
                dáme do nabídky — chceme, aby látka byla příjemná a střih
                lichotil postavě.
              </p>
              <p>
                Napište nám a rády poradíme s výběrem velikosti. Objednávku
                zabalíme a odešleme obvykle <strong>do druhého pracovního dne</strong>,
                s bezpečným platebním připojením a možností vrácení.
              </p>
              <div className="stats">
                <div className="stat">
                  <b>399+</b>
                  <span>Kč za kousek</span>
                </div>
                <div className="stat">
                  <b>1–2</b>
                  <span>dny na doručení</span>
                </div>
                <div className="stat">
                  <b>14</b>
                  <span>dní na vrácení</span>
                </div>
              </div>

              <div className="quotes">
                {quotes.map((qt) => (
                  <figure className="quote" key={qt.a}>
                    <p>„{qt.q}“</p>
                    <cite>{qt.a}</cite>
                  </figure>
                ))}
              </div>
            </div>

            <div className="about-fig reveal d2">
              <img
                src="/section-1.webp"
                alt="Detail látky a šatů z nabídky Victoria Style"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

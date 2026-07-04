import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      no: "01",
      title: "Byty a domy na klíč",
      body: "Kompletní rekonstrukce od bourání po úklid. Přijedeme, zaměříme, navrhneme řešení a předáme hotový byt, do kterého se dá nastěhovat.",
    },
    {
      no: "02",
      title: "Bytová jádra a koupelny",
      body: "Vybouráme staré umakartové jádro a postavíme koupelnu podle vás — od obkladů přes rozvody až po zařizovací předměty.",
    },
    {
      no: "03",
      title: "Kuchyně na míru",
      body: "Vyrobíme a osadíme kuchyň včetně spotřebičů. Vlastní truhlárna znamená, že padne na milimetr do vašeho prostoru.",
    },
    {
      no: "04",
      title: "Vestavěné skříně a schodiště",
      body: "Truhlářská práce na míru — vestavěné skříně do šikmin i rovných stěn a masivní schodiště, která vydrží.",
    },
    {
      no: "05",
      title: "Podkroví a sádrokarton",
      body: "Zateplení, montáž sádrokartonů a proměna nevyužitého podkroví v obytný prostor.",
    },
    {
      no: "06",
      title: "Obchody a kanceláře",
      body: "Rekonstrukce provozoven a kanceláří na klíč — s ohledem na provoz a termíny.",
    },
  ];

  const steps = [
    { k: "Zaměříme", v: "Přijedeme k vám, změříme prostor a probereme, co potřebujete." },
    { k: "Navrhneme", v: "Zpracujeme 3D vizualizaci — při realizaci zakázky zdarma." },
    { k: "Postavíme", v: "Práce vedeme na klíč. Vy se nemusíte starat o nic." },
  ];

  return (
    <main className="jk">
      <a className="jk-skip" href="#sluzby">Přeskočit na služby</a>

      <header className="jk-top">
        <span className="jk-mark" aria-label="Jiří Kejst">
          <span className="jk-mark-l">JK</span>
          <span className="jk-mark-r">Jiří Kejst · rekonstrukce</span>
        </span>
        <span className="jk-since">od 2005</span>
      </header>

      <section className="jk-hero" aria-labelledby="jk-h1">
        <div className="jk-plan" aria-hidden="true">
          <span className="jk-plan-tag">půdorys 2+kk</span>
          <span className="jk-room jk-room-a">obývací pokoj</span>
          <span className="jk-room jk-room-b">kuchyň</span>
          <span className="jk-room jk-room-c">koupelna</span>
          <span className="jk-dim jk-dim-w">4,20 m</span>
          <span className="jk-dim jk-dim-h">3,05 m</span>
        </div>

        <div className="jk-hero-text">
          <p className="jk-eyebrow">Karlovy Vary · Tašovice</p>
          <h1 id="jk-h1" className="jk-h1">
            <span className="jk-line jk-l1">Vybouráme</span>
            <span className="jk-line jk-l2">staré.</span>
            <span className="jk-line jk-l3">Postavíme</span>
            <span className="jk-line jk-l4">nové.</span>
          </h1>
          <p className="jk-lead">
            Rekonstrukce bytů a domů na klíč. Bytová jádra, kuchyně,
            koupelny a truhlářská práce na míru — v Karlových Varech,
            Ostrově, Sokolově a okolí už od roku 2005.
          </p>
          <div className="jk-cta">
            <a className="jk-btn" href="tel:+420777117964">Zavolat 777 117 964</a>
            <a className="jk-btn jk-btn-ghost" href="#sluzby">Co umíme</a>
          </div>
        </div>
      </section>

      <section id="sluzby" className="jk-sec" aria-labelledby="jk-sl">
        <div className="jk-sec-head">
          <h2 id="jk-sl" className="jk-h2">Co pro vás uděláme</h2>
          <p className="jk-sub">
            Stavební i truhlářská práce pod jednou střechou — takže na sebe
            řemesla nečekají a zakázka drží termín.
          </p>
        </div>
        <ul className="jk-grid">
          {services.map((s) => (
            <li key={s.no} className="jk-card">
              <span className="jk-card-no">{s.no}</span>
              <h3 className="jk-card-t">{s.title}</h3>
              <p className="jk-card-b">{s.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="jk-sec jk-trust" aria-labelledby="jk-tr">
        <div className="jk-trust-inner">
          <div className="jk-trust-lead">
            <p className="jk-eyebrow jk-eyebrow-dark">Jak to u nás chodí</p>
            <h2 id="jk-tr" className="jk-h2">Přijedeme, zaměříme, postavíme</h2>
            <p className="jk-sub">
              Skoro dvacet let stavíme interiéry na Karlovarsku. Vlastní
              truhlárna, vedení zakázky na klíč a 3D návrh zdarma —
              staráme se o vše, ať se máte kam vrátit.
            </p>
          </div>

          <ol className="jk-steps">
            {steps.map((st, i) => (
              <li key={st.k} className="jk-step">
                <span className="jk-step-no">{i + 1}</span>
                <div>
                  <h3 className="jk-step-t">{st.k}</h3>
                  <p className="jk-step-b">{st.v}</p>
                </div>
              </li>
            ))}
          </ol>

          <dl className="jk-facts">
            <div className="jk-fact">
              <dt>Působíme od</dt>
              <dd>2005</dd>
            </div>
            <div className="jk-fact">
              <dt>Kde stavíme</dt>
              <dd>Karlovy Vary, Ostrov, Sokolov a okolí</dd>
            </div>
            <div className="jk-fact">
              <dt>3D vizualizace</dt>
              <dd>Při realizaci zdarma</dd>
            </div>
            <div className="jk-fact jk-fact-wide">
              <dt>Dílna a kontakt</dt>
              <dd>
                Řadová 260, Tašovice, 360 18 Karlovy Vary
                <br />
                <a href="tel:+420777117964">+420 777 117 964</a> ·{" "}
                <a href="mailto:jiri.kejst@seznam.cz">jiri.kejst@seznam.cz</a>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}

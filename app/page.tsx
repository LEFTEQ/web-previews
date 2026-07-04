import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      code: "CZ",
      label: "Do 3,5 t · Vnitrostátní",
      title: "Rozvoz po celé ČR",
      copy: "Zásilku vyzvedneme dnes a doručíme napříč republikou. Ideální pro paletové zboží, náhradní díly a expresní zakázky, kde záleží na každé hodině.",
    },
    {
      code: "EU",
      label: "Do 3,5 t · Mezinárodní",
      title: "Přeprava po Evropské unii",
      copy: "Náklad z Ústí do Drážďan, Vídně nebo Rotterdamu? Vyřídíme papíry i trasu. Jedeme přes hranice pravidelně, nikoliv výjimečně.",
    },
    {
      code: "INS",
      label: "Pojištění · GPS",
      title: "Pojištěný a hlídaný náklad",
      copy: "Každá dodávka je pojištěná a vybavená GPS lokátorem. Kdykoliv vám řekneme, kde vaše zásilka právě je — na minuty přesně.",
    },
  ];

  const proof = [
    { k: "Vozový park", v: "do 3,5 t", note: "dodávky s GPS a pojištěním nákladu" },
    { k: "Základna", v: "Ústí n. L.", note: "srdce trasy Praha — Drážďany" },
    { k: "Dojezd", v: "CZ + EU", note: "vnitrostátně i přes hranice" },
  ];

  return (
    <main className="pm">
      <header className="pm-top">
        <a className="pm-mark" href="#" aria-label="Petmar sped, kurýrní služby Ústí nad Labem">
          <span className="pm-mark-pet">Petmar</span>
          <span className="pm-mark-sped">sped</span>
        </a>
        <a className="pm-call" href="tel:+420601108130">
          <span className="pm-call-label">Dispečink</span>
          <span className="pm-call-num">601&nbsp;108&nbsp;130</span>
        </a>
      </header>

      <section className="pm-hero" aria-labelledby="pm-hero-h">
        <div className="pm-hero-media">
          <img
            src="/hero.webp"
            alt="Dodávka Petmar sped naložená na cestě za doručením zásilky"
            className="pm-hero-img"
          />
          <div className="pm-hero-tape" aria-hidden="true">
            <span>ÚSTÍ&nbsp;NAD&nbsp;LABEM → PRAHA → DRÁŽĎANY → VÍDEŇ → ÚSTÍ&nbsp;NAD&nbsp;LABEM →&nbsp;</span>
            <span>ÚSTÍ&nbsp;NAD&nbsp;LABEM → PRAHA → DRÁŽĎANY → VÍDEŇ → ÚSTÍ&nbsp;NAD&nbsp;LABEM →&nbsp;</span>
          </div>
        </div>

        <div className="pm-hero-body">
          <p className="pm-eyebrow">Kurýrní přeprava do 3,5 t · Ústí nad Labem</p>
          <h1 id="pm-hero-h" className="pm-hero-h">
            Vyzvednem&nbsp;dnes,
            <br />
            <em>doručíme,</em> než
            <br />
            se&nbsp;stačíte&nbsp;ptát&nbsp;kde&nbsp;je.
          </h1>
          <p className="pm-hero-lead">
            Petmar sped vozí zásilky po celé České republice i přes hranice do
            Evropské unie. Malá firma z Ústí, které zvednete telefon a mluvíte
            rovnou s tím, kdo za volantem sedí.
          </p>
          <div className="pm-hero-cta">
            <a className="pm-btn" href="tel:+420601108130">Zavolat dispečink</a>
            <a className="pm-btn pm-btn-ghost" href="mailto:info@petmarsped.cz">Poslat poptávku e-mailem</a>
          </div>
        </div>
      </section>

      <section className="pm-services" aria-labelledby="pm-serv-h">
        <div className="pm-serv-head">
          <h2 id="pm-serv-h" className="pm-sec-h">Co pro vás odvezeme</h2>
          <p className="pm-sec-sub">
            Tři věci, na kterých firmu poznáte: dojedeme, kam potřebujete, a po
            celou cestu víte, kde vaše zásilka je.
          </p>
        </div>

        <ol className="pm-serv-list">
          {services.map((s, i) => (
            <li className="pm-serv" key={s.code} style={{ "--d": `${i * 90}ms` } as CSSProperties}>
              <span className="pm-serv-code" aria-hidden="true">{s.code}</span>
              <div className="pm-serv-txt">
                <p className="pm-serv-label">{s.label}</p>
                <h3 className="pm-serv-title">{s.title}</h3>
                <p className="pm-serv-copy">{s.copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="pm-trust" aria-labelledby="pm-trust-h">
        <div className="pm-trust-media">
          <img
            src="/section-1.webp"
            alt="Naložený náklad připravený k odjezdu ve voze Petmar sped"
            className="pm-trust-img"
          />
        </div>
        <div className="pm-trust-body">
          <h2 id="pm-trust-h" className="pm-sec-h">Váš náklad je u nás hlídaný</h2>
          <p className="pm-trust-lead">
            Všechna auta mají pojištění nákladu a GPS lokátor, který ukáže
            přesnou polohu vozu. Nemusíte se ptát, jestli to dojede — my vám
            rovnou řekneme, kdy a kam.
          </p>
          <dl className="pm-facts">
            {proof.map((p) => (
              <div className="pm-fact" key={p.k}>
                <dt className="pm-fact-k">{p.k}</dt>
                <dd className="pm-fact-v">{p.v}</dd>
                <dd className="pm-fact-note">{p.note}</dd>
              </div>
            ))}
          </dl>
          <img
            src="/section-2.webp"
            alt="Vůz Petmar sped na trase mezi Ústím nad Labem a evropskou destinací"
            className="pm-trust-img2"
          />
        </div>
      </section>
    </main>
  );
}

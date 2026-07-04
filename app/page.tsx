import type { CSSProperties } from "react";

export default function Page() {
  const zony = [
    {
      cislo: "01",
      nazev: "Návrh a projekt",
      popis:
        "Zaměříme pozemek, spočítáme tlak a průtok z vaší přípojky a nakreslíme rozmístění postřikovačů tak, aby se okruhy překrývaly a nezůstala suchá místa. Dostanete plán, ne odhad.",
      detail: "Hydraulický výpočet · plán sekcí · rozpočet předem",
    },
    {
      cislo: "02",
      nazev: "Instalace systému",
      popis:
        "Položíme rozvody do rýh, osadíme výsuvné postřikovače, kapkovací hadice k záhonům a elektroventily do ventilových šachet. Trávník uvedeme do původního stavu — po pár dnech není poznat, že se kopalo.",
      detail: "Rotační i sprejové trysky · kapková závlaha · šachty",
    },
    {
      cislo: "03",
      nazev: "Řídicí jednotka a čidla",
      popis:
        "Zapojíme ovládací jednotku s programem po sekcích a čidlem srážek, které závlahu vypne, když prší. Zálivku spustíte i z mobilu — nebo se o ni nemusíte starat vůbec.",
      detail: "Programy po zónách · čidlo deště · ovládání z telefonu",
    },
    {
      cislo: "04",
      nazev: "Servis a zazimování",
      popis:
        "Na podzim systém profoukneme kompresorem, aby voda v potrubí přes zimu nezamrzla a nepraskla. Na jaře znovu spustíme, seřídíme trysky a zkontrolujeme tlak.",
      detail: "Profouknutí kompresorem · jarní start · seřízení trysek",
    },
  ];

  const duvery = [
    { k: "18 let", v: "závlahy v Praze a Středočeském kraji" },
    { k: "400+", v: "zahrad a trávníků pod pravidelným servisem" },
    { k: "Hunter · Rain Bird", v: "komponenty s dostupnými náhradními díly" },
  ];

  return (
    <main className="zs">
      <a className="zs-skip" href="#nabidka">
        Přejít na obsah
      </a>

      <header className="zs-top">
        <span className="zs-mark" aria-label="Závlahy-servis">
          <span className="zs-mark-drop" aria-hidden="true" />
          <span className="zs-mark-txt">
            závlahy<span className="zs-mark-thin">·servis</span>
          </span>
        </span>
        <span className="zs-top-meta">Praha · od roku 2007</span>
      </header>

      <section className="zs-hero" aria-labelledby="zs-h1">
        <div className="zs-hero-grid" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, r) =>
            Array.from({ length: 9 }).map((_, c) => {
              const style = { "--i": r * 9 + c } as CSSProperties;
              return (
                <span
                  key={`${r}-${c}`}
                  className="zs-spray"
                  style={style}
                />
              );
            })
          )}
        </div>

        <div className="zs-hero-inner">
          <p className="zs-eyebrow">Automatické závlahové systémy · Praha</p>
          <h1 id="zs-h1" className="zs-h1">
            Trávník, který
            <br />
            <span className="zs-h1-accent">zaléváme za vás.</span>
          </h1>
          <p className="zs-lead">
            Navrhneme, položíme a udržujeme automatický postřik pro zahrady,
            trávníky i firemní areály. Vy jen chodíte po zelené trávě — o
            zbytek se stará systém a naše každoroční kontrola.
          </p>
          <div className="zs-hero-cta">
            <a className="zs-btn" href="tel:+420224900900">
              Zavolat 224 900 900
            </a>
            <a className="zs-btn zs-btn-ghost" href="#nabidka">
              Jak to probíhá
            </a>
          </div>
          <dl className="zs-hero-facts">
            <div>
              <dt>Kryjeme</dt>
              <dd>Praha a okolí do 40 km</dd>
            </div>
            <div>
              <dt>Zaměření zdarma</dt>
              <dd>přijedeme a spočítáme tlak</dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="nabidka" className="zs-sekce" aria-labelledby="zs-nabidka-h">
        <div className="zs-sekce-head">
          <p className="zs-eyebrow zs-eyebrow-dark">Od návrhu po podzim</p>
          <h2 id="zs-nabidka-h">Čtyři kroky k závlaze, o kterou se nestaráte</h2>
          <p className="zs-sekce-lead">
            Každý systém vedeme stejnou cestou. Nic nepřeskakujeme — proto
            trysky drží tlak a potrubí v zimě nepraská.
          </p>
        </div>

        <ol className="zs-zony">
          {zony.map((z) => (
            <li key={z.cislo} className="zs-zona">
              <span className="zs-zona-cislo" aria-hidden="true">
                {z.cislo}
              </span>
              <div className="zs-zona-body">
                <h3>{z.nazev}</h3>
                <p>{z.popis}</p>
                <p className="zs-zona-detail">{z.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="zs-sekce zs-sekce-alt" aria-labelledby="zs-duvera-h">
        <div className="zs-sekce-head">
          <p className="zs-eyebrow">Kdo vám to montuje</p>
          <h2 id="zs-duvera-h">
            Malá pražská firma, která u své práce zůstává
          </h2>
          <p className="zs-sekce-lead">
            Nejsme montážní řetězec. Systém, který vám položíme, u nás zůstane
            v servisu — a na jaře i na podzim víte, kdo přijede.
          </p>
        </div>

        <dl className="zs-duvery">
          {duvery.map((d) => (
            <div key={d.k} className="zs-duvera">
              <dt>{d.k}</dt>
              <dd>{d.v}</dd>
            </div>
          ))}
        </dl>

        <blockquote className="zs-cit">
          <p>
            „Objednali jsme závlahu na tři sta metrů trávníku u kanceláří.
            Naprogramovali ji na noc, přes den o ní nevíme a tráva je pořád
            zelená i v srpnu. Na podzim přijeli sami a systém profoukli.“
          </p>
          <footer>— správce areálu, Praha-Zbraslav</footer>
        </blockquote>

        <p className="zs-updated">Ceník a termíny aktuální k dubnu 2025.</p>
      </section>
    </main>
  );
}

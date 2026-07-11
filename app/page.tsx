import styles from "next/font/local";

export default function Page() {
  const nabidka = [
    {
      cislo: "01",
      nazev: "Food truck",
      lead: "Pojízdná kuchyně, se kterou přijedeme kamkoliv.",
      text: "Svatby, oslavy, firemní akce i meetingy na netradičních místech. Rozbalíme profesionální kuchyni tam, kam byste ji nečekali — a uvaříme jako v restauraci.",
    },
    {
      cislo: "02",
      nazev: "Mobilní kuchyně",
      lead: "Přeneseme Grill Pub z Olomouce přímo k vám.",
      text: "Grilujeme i vaříme na místě. Šéfkuchař Zdeněk Svoboda pracuje s čerstvými lokálními surovinami, nejraději na otevřeném ohni.",
    },
    {
      cislo: "03",
      nazev: "Rauty s odvozem",
      lead: "Připravíme v kuchyni Grill Pub a dovezeme k vám.",
      text: "Excelentní rauty na klíč. Obsluha se postará o každý detail, abyste se mohli soustředit na svůj velký den.",
    },
    {
      cislo: "04",
      nazev: "Soukromé degustace",
      lead: "Chuck roll, Flank, Rump, Baltip. Že nevíte, co to je?",
      text: "Tak to ochutnejte. Gastronomické dobrodružství připravené přímo šéfkuchařem — unikátní chutě a umělecké kreace u otevřeného ohně.",
    },
    {
      cislo: "05",
      nazev: "Hostina na klíč",
      lead: "Chybí vám reprezentativní prostory?",
      text: "Zapůjčíme vám slavnostní sál v Grill Pub. Svatba, oslava, firemní akce i setkání s přáteli — postaráme se o jídlo i o prostor.",
    },
  ];

  return (
    <main className="ft">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Food truck Svoboda — grilování na otevřeném ohni u pojízdné kuchyně"
            className="hero-img"
          />
          <div className="hero-scrim" aria-hidden="true" />
        </div>

        <div className="hero-inner">
          <div className="brand" aria-label="Food Truck Svoboda">
            <span className="brand-svoboda">Svoboda</span>
            <span className="brand-sub">FOOD&nbsp;TRUCK&nbsp;·&nbsp;OLOMOUC</span>
          </div>

          <h1 id="hero-title" className="hero-title">
            Kuchyně, která<br />
            <em>přijede za vámi.</em>
          </h1>

          <p className="hero-lead">
            Profesionální catering na netradičních místech. Grilujeme na
            otevřeném ohni tam, kam si řeknete — svatby, oslavy i firemní akce.
          </p>

          <div className="hero-cta">
            <a className="btn btn-primary" href="tel:+420585000000">
              Zavolat šéfkuchaři
            </a>
            <a className="btn btn-ghost" href="#nabidka">
              Prohlédnout nabídku
            </a>
          </div>

          <dl className="hero-facts">
            <div>
              <dt>Základna</dt>
              <dd>Grill Pub, Olomouc</dd>
            </div>
            <div>
              <dt>Dojezd</dt>
              <dd>Kamkoliv za vámi</dd>
            </div>
            <div>
              <dt>Oheň</dt>
              <dd>Grilujeme naživo</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="nabidka" id="nabidka" aria-labelledby="nabidka-title">
        <header className="sec-head">
          <p className="eyebrow">Co pro vás uvaříme</p>
          <h2 id="nabidka-title" className="sec-title">Pět způsobů, jak vás nakrmit</h2>
          <p className="sec-note">
            Od pojízdného grilu po hostinu v sále — vyberte formát podle své akce,
            zbytek vymyslíme společně.
          </p>
        </header>

        <ol className="menu-list">
          {nabidka.map((s) => (
            <li className="menu-item" key={s.cislo}>
              <span className="menu-num" aria-hidden="true">{s.cislo}</span>
              <div className="menu-body">
                <h3 className="menu-name">{s.nazev}</h3>
                <p className="menu-lead">{s.lead}</p>
                <p className="menu-text">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="menu-figure">
          <img
            src="/section-1.webp"
            alt="Připravené menu z mobilní kuchyně Food Truck Svoboda"
            className="figure-img"
          />
        </figure>
      </section>

      <section className="chef" aria-labelledby="chef-title">
        <figure className="chef-figure">
          <img
            src="/section-2.webp"
            alt="Šéfkuchař Zdeněk Svoboda u grilu"
            className="figure-img"
          />
        </figure>

        <div className="chef-body">
          <p className="eyebrow">Kdo vaří</p>
          <h2 id="chef-title" className="sec-title">
            Zdeněk Svoboda<span className="chef-role">šéfkuchař &amp; zakladatel</span>
          </h2>

          <blockquote className="chef-quote">
            „Baví mě vaření z čerstvých lokálních surovin, ideálně na otevřeném
            ohni. Rád cestuji, a tak jsou má jídla ovlivněná i chutěmi
            cizokrajných kuchyní. Rád si pohrávám s chutí, kořením i úpravou.“
          </blockquote>

          <p className="chef-text">
            Grill Pub v Olomouci provozuji už desátým rokem a stále ho rozvíjím —
            o Food Truck, ubytování Rooms Svoboda i obchůdek Be Chef s poctivými
            řemeslnými potravinami. Řadu z nich si vyrábíme sami, zbytek bereme od
            ověřených výrobců.
          </p>

          <ul className="chef-badges" aria-label="Proč nám důvěřovat">
            <li><strong>10 let</strong> Grill Pub Olomouc</li>
            <li><strong>Otevřený oheň</strong> naše specialita</li>
            <li><strong>Lokální suroviny</strong> od poctivých výrobců</li>
          </ul>

          <a className="btn btn-primary" href="tel:+420585000000">
            Domluvit termín a menu
          </a>
        </div>
      </section>
    </main>
  );
}

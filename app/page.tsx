import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      code: "A",
      title: "Technická správa",
      desc: "Revize výtahů, kotelen a elektro, pravidelné odečty, řešení havárií i běžná údržba. Držíme vaše domy v provozu bez zbytečných výpadků.",
      items: ["Revize a servisní smlouvy", "Havarijní služba 24/7", "Odečty vody, tepla a energií"],
    },
    {
      code: "B",
      title: "Ekonomická správa",
      desc: "Předpisy záloh, roční vyúčtování, vedení účetnictví SVJ i bytových družstev. Každá koruna dohledatelná, každý fond pod kontrolou.",
      items: ["Vyúčtování služeb", "Vedení účetnictví SVJ a BD", "Fond oprav a rozpočty"],
    },
    {
      code: "C",
      title: "Administrativa a schůze",
      desc: "Příprava a vedení shromáždění, zápisy, evidence vlastníků, korespondence. Odneseme z vás papírování, vy rozhodujete o svém domě.",
      items: ["Organizace shromáždění", "Evidence a smlouvy", "Komunikace s vlastníky"],
    },
  ];

  const facts = [
    { k: "Domy v Olomouci a okolí", v: "58" },
    { k: "Spravovaných bytových jednotek", v: "2 140" },
    { k: "Havarijní linka", v: "24/7" },
  ];

  return (
    <main className="sb">
      <header className="sb-nav" aria-label="Hlavní">
        <a className="sb-mark" href="#top" aria-label="Správa Budov Olomouc, domů">
          <span className="sb-mark-a">SPRÁVA</span>
          <span className="sb-mark-b">BUDOV</span>
          <span className="sb-mark-c">OLOMOUC</span>
        </a>
        <span className="sb-nav-note">Člen skupiny Old House Capital</span>
      </header>

      <section className="sb-hero" id="top">
        <img
          className="sb-hero-img"
          src="/hero.webp"
          alt="Fasáda spravovaného činžovního domu v centru Olomouce"
        />
        <div className="sb-hero-grid" aria-hidden="true">
          <span /><span /><span /><span /><span /><span />
        </div>
        <div className="sb-hero-inner">
          <p className="sb-eyebrow">Správa nemovitostí · Olomouc</p>
          <h1 className="sb-h1">
            Váš dům má<br />
            <span className="sb-h1-em">svého správce.</span>
          </h1>
          <p className="sb-lede">
            Staráme se o bytové domy, SVJ a družstva v Olomouci a okolí —
            od revize kotelny po roční vyúčtování. Jeden telefon, jedna
            odpovědnost, žádné výmluvy.
          </p>
          <div className="sb-hero-cta">
            <a className="sb-btn" href="#sluzby">Prohlédnout správu</a>
            <a className="sb-btn sb-btn-ghost" href="#kdo">Kdo jsme</a>
          </div>
        </div>
        <ul className="sb-hero-facts">
          {facts.map((f) => (
            <li key={f.k}>
              <strong>{f.v}</strong>
              <span>{f.k}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="sb-services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="sb-sec-head">
          <p className="sb-eyebrow sb-eyebrow-dark">Co pro dům zařídíme</p>
          <h2 id="sluzby-h" className="sb-h2">Tři sloupy správy</h2>
          <p className="sb-sec-note">
            Technika, peníze, papíry. Rozdělili jsme správu domu na tři
            oblasti, které dělají největší starosti — a každou vzali za svou.
          </p>
        </div>
        <ol className="sb-cards">
          {services.map((s) => (
            <li className="sb-card" key={s.code}>
              <span className="sb-card-code" aria-hidden="true">{s.code}</span>
              <h3 className="sb-card-title">{s.title}</h3>
              <p className="sb-card-desc">{s.desc}</p>
              <ul className="sb-card-list">
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
        <figure className="sb-services-fig">
          <img
            src="/section-1.webp"
            alt="Technik při pravidelné kontrole domovní technologie"
          />
        </figure>
      </section>

      <section className="sb-about" id="kdo" aria-labelledby="kdo-h">
        <figure className="sb-about-fig">
          <img
            src="/section-2.webp"
            alt="Klíče a dokumentace ke spravovaným domům na pracovním stole"
          />
        </figure>
        <div className="sb-about-body">
          <p className="sb-eyebrow sb-eyebrow-dark">Kdo se o dům stará</p>
          <h2 id="kdo-h" className="sb-h2">
            Místní správce, ne vzdálená kancelář
          </h2>
          <p className="sb-about-lede">
            Sídlíme v Olomouci a domy, které spravujeme, známe osobně.
            Jako člen skupiny Old House Capital máme za sebou zázemí
            i zkušenost s péčí o starší i nové budovy — od Hejčína
            po Nové Sady.
          </p>
          <dl className="sb-promises">
            <div>
              <dt>Odpovíme do 24 hodin</dt>
              <dd>Na běžné dotazy vlastníků i výbor SVJ reagujeme týž nebo následující pracovní den.</dd>
            </div>
            <div>
              <dt>Vyúčtování bez otazníků</dt>
              <dd>Každou položku vysvětlíme a doložíme. Fond oprav vidíte průběžně, ne až v květnu.</dd>
            </div>
            <div>
              <dt>Jeden kontakt na váš dům</dt>
              <dd>Nebloudíte mezi odděleními — máte svého správce, který váš dům zná.</dd>
            </div>
          </dl>
          <p className="sb-quote">
            „Převzali dům po předchozí firmě během měsíce a poprvé
            jsme rozuměli tomu, kam jdou naše peníze.“
            <span>— výbor SVJ, Olomouc-Povel</span>
          </p>
        </div>
      </section>
    </main>
  );
}

export const dynamic = "force-static";
void ({} as CSSProperties);

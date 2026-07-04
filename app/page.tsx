import type { CSSProperties } from "react";

export default function Page() {
  const projekce = [
    {
      kod: "ČSN 33 2000-5-51 ed.3",
      nazev: "Určování vnějších vlivů",
      popis:
        "Než se položí první kabel, řekneme přesně, čemu bude vystaven — vlhkost, teplota, prach, koroze. Z toho vyplyne krytí i materiál.",
    },
    {
      kod: "ČSN EN 62305-2 ed.2",
      nazev: "Analýza rizik před bleskem",
      popis:
        "Spočítáme pravděpodobnost škody úderem blesku a navrhneme ochranu tak, aby dávala smysl technicky i finančně.",
    },
    {
      kod: "Studie proveditelnosti",
      nazev: "Připojení zdroje do sítě",
      popis:
        "Posoudíme, zda a jak lze vaši výrobnu paralelně připojit k distribuční soustavě — od žádosti u provozovatele po dokumentaci skutečného stavu.",
    },
  ];

  const realizace = [
    {
      cislo: "01",
      titul: "Fotovoltaika pro rodinné domy",
      shrnuti:
        "Systém na míru podle vaší reálné spotřeby — od hybridu s baterií po ostrovní režim, který dům napájí i při výpadku sítě.",
      detail:
        "Vyjdeme z rozboru vaší stávající spotřeby, propojíme fotovoltaiku s tepelným čerpadlem, klimatizací i ohřevem vody a vyřídíme za vás dotaci Nová zelená úsporám — od žádosti po vyplacení.",
      strida: "Fronius · SMA · GoodWe · Solaredge",
    },
    {
      cislo: "02",
      titul: "Servis a údržba solárních parků",
      shrnuti:
        "Preventivní prohlídky, které výpadky odhalí dřív, než vás začnou stát vyrobené kilowatthodiny.",
      detail:
        "Kontrolujeme přechodové odpory, síťové parametry, výkonové rozvaděče i kompenzátory. Termosnímkováním najdeme přehřáté spoje, kde i malý odpor může vést ke značné škodě nebo ke vznícení.",
      strida: "Profylaxe · Revize · Diagnostika",
    },
    {
      cislo: "03",
      titul: "Energetické poradenství",
      shrnuti:
        "Síťovým analyzátorem dlouhodobě změříme tok energie ve vašem odběrném místě.",
      detail:
        "Z naměřených dat optimalizujeme velikost hlavního jističe, rezervovaný příkon i kapacitu. Uvidíte harmonické složky i skutečnou kvalitu elektřiny, za kterou platíte.",
      strida: "Měření · Monitoring · Optimalizace",
    },
  ];

  return (
    <main className="en">
      <header className="en-top">
        <a className="en-mark" href="#uvod" aria-label="EnServis, elektromontáže Pardubice">
          <span className="en-mark__en">En</span>
          <span className="en-mark__servis">Servis</span>
          <span className="en-mark__phase" aria-hidden="true">
            <i></i><i></i><i></i>
          </span>
        </a>
        <nav className="en-nav" aria-label="Hlavní">
          <a href="#delame">Co děláme</a>
          <a href="#realizace">Realizace</a>
          <a className="en-nav__call" href="tel:+420332000551">Zavolat</a>
        </nav>
      </header>

      <section className="en-hero" id="uvod">
        <div className="en-hero__frame">
          <img
            className="en-hero__img"
            src="/hero.webp"
            alt="Technik EnServisu při montáži fotovoltaické elektrárny na střeše rodinného domu"
          />
          <span className="en-hero__tag">Pardubice a okolí · od projektu po revizi</span>
        </div>
        <div className="en-hero__copy">
          <p className="en-eyebrow">Projekce · montáž · servis vyhrazených elektrických zařízení</p>
          <h1 className="en-h1">
            I nás pohání
            <span className="en-h1__accent"> energie.</span>
          </h1>
          <p className="en-lead">
            Stavíme fotovoltaické elektrárny s baterií, připojujeme je k síti a
            staráme se o ně po celý životní cyklus. Kvalifikovaní montéři,
            revizní technici a čísla, která sedí.
          </p>
          <div className="en-hero__actions">
            <a className="en-btn en-btn--solid" href="tel:+420332000551">Zavolat elektrikáři</a>
            <a className="en-btn en-btn--ghost" href="#delame">Co pro vás uděláme</a>
          </div>
          <dl className="en-facts">
            <div>
              <dt>Dotace</dt>
              <dd>Nová zelená úsporám — vyřídíme za vás</dd>
            </div>
            <div>
              <dt>Členství</dt>
              <dd>Česká fotovoltaická asociace</dd>
            </div>
            <div>
              <dt>Kvalifikace</dt>
              <dd>Elektromontér fotovoltaických systémů</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="en-section en-delame" id="delame" aria-labelledby="delame-h">
        <div className="en-section__head">
          <p className="en-eyebrow">Než něco zapojíme, spočítáme to</p>
          <h2 className="en-h2" id="delame-h">Podle norem, ne od oka</h2>
          <p className="en-section__intro">
            Elektrárna je jen tak dobrá jako projekt pod ní. Každý návrh
            opíráme o platné české a evropské normy — tady jsou ty, podle
            kterých pracujeme dennodenně.
          </p>
        </div>
        <ul className="en-norms">
          {projekce.map((p) => (
            <li className="en-norm" key={p.kod}>
              <span className="en-norm__code">{p.kod}</span>
              <h3 className="en-norm__title">{p.nazev}</h3>
              <p className="en-norm__text">{p.popis}</p>
            </li>
          ))}
        </ul>
        <figure className="en-figure">
          <img
            src="/section-1.webp"
            alt="Rozvaděč fotovoltaické elektrárny s měničem a jističi během montáže"
          />
          <figcaption>
            Dodáváme střídače Fronius, SMA, Growatt, GoodWe, RCT i Solaredge —
            renomovaných výrobců, ke kterým seženeme náhradní díly i za pět let.
          </figcaption>
        </figure>
      </section>

      <section className="en-section en-realizace" id="realizace" aria-labelledby="realizace-h">
        <div className="en-section__head">
          <p className="en-eyebrow">Tři věci, které od nás nejčastěji chcete</p>
          <h2 className="en-h2" id="realizace-h">Příklady realizací</h2>
        </div>
        <figure className="en-figure en-figure--wide">
          <img
            src="/section-2.webp"
            alt="Rozsáhlý fotovoltaický park spravovaný EnServisem"
          />
        </figure>
        <ol className="en-cards">
          {realizace.map((r) => (
            <li className="en-card" key={r.cislo}>
              <span className="en-card__num" aria-hidden="true">{r.cislo}</span>
              <div className="en-card__body">
                <h3 className="en-card__title">{r.titul}</h3>
                <p className="en-card__lead">{r.shrnuti}</p>
                <p className="en-card__detail">{r.detail}</p>
                <p className="en-card__meta">{r.strida}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="en-trust">
          Vaše elektrárna neskončí po předání — děláme záruční i pozáruční
          servis, revize a poradenství tak dlouho, dokud vyrábí. EnServis
          s.r.o., Pardubice · <a href="mailto:enservis@enservis.cz">enservis@enservis.cz</a>
        </p>
      </section>
    </main>
  );
}

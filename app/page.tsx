import React from "react";

export default function Page() {
  const trades = [
    {
      no: "01",
      name: "Zednické práce",
      body: "Stavíme rodinné domy na klíč, děláme kompletní rekonstrukce domů i bytů, přestavby bytových jader, koupelen i zateplení fasád. Od základů po omítku.",
    },
    {
      no: "02",
      name: "Střechy",
      body: "Nové střešní pláště i celkové rekonstrukce — šikmé i ploché střechy, včetně všech navazujících řemesel.",
    },
    {
      no: "03",
      name: "Klempířství",
      body: "Veškeré stavební klempířské práce. Od drážkovaných krytin po drobné fasádní prvky. Vyrobíme i namontujeme zámečnické prvky.",
    },
    {
      no: "04",
      name: "Tesařství",
      body: "Krovy, altány, otevřená garážová stání. Přiznané pohledové tesařské prvky, interiérové práce, rekonstrukce roubenek.",
    },
    {
      no: "05",
      name: "Pokrývačství",
      body: "Pokládáme krytiny na šikmé i ploché střechy. Poradíme, která krytina se hodí právě na Vaši střechu.",
    },
    {
      no: "06",
      name: "Izolace",
      body: "Zlepšíme tepelně izolační vlastnosti Vašeho domu. Společně vybereme nejvhodnější variantu zateplení.",
    },
  ];

  const jobs = [
    {
      place: "Kostel sv. Kateřiny, Stráž nad Nisou",
      year: "2023",
      body: "Rekonstrukce krytiny střešního pláště. Demontovali jsme dosluhující pálenou Bobrovku a nahradili ji stejným formátem od výrobce Tondach.",
    },
    {
      place: "Rodinný dům, Liberec",
      year: "2023",
      body: "Kompletní výměna střešního pláště včetně klempířských prvků a záklopu.",
    },
    {
      place: "Novostavba, Jablonec n. N. — Vrkoslavice",
      year: "2023",
      body: "Provedení střešního pláště a fasádních klempířských prvků na novostavbě rodinného domu.",
    },
  ];

  return (
    <main className="pg">
      <header className="nav">
        <a className="wordmark" href="#" aria-label="Stejskal Stavby — úvod">
          <span className="wm-line1">STEJSKAL</span>
          <span className="wm-line2">STAVBY <span className="wm-dot">·</span> LIBEREC</span>
        </a>
        <a className="nav-tel" href="tel:+420604117074">+420&nbsp;604&nbsp;117&nbsp;074</a>
      </header>

      <section className="hero">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Zedník Stejskal Stavby při práci na hrubé stavbě v Liberci"
            className="hero-img"
          />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Zednictví &amp; střechy · od základů po hřeben</p>
          <h1 className="hero-h1">
            Postavíme to<br />
            <span className="hero-em">rovně</span> a natvrdo.
          </h1>
          <p className="hero-sub">
            Rodinné domy na klíč, rekonstrukce, střechy a zateplení v Liberci
            a okolí. Bereme stavbu jako generální dodavatel i drobné zakázky —
            důležitý je výsledek, který vydrží.
          </p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="tel:+420604117074">Zavolat</a>
            <a className="btn btn-line" href="mailto:stejskal@stejskalstavby.cz">Napsat e-mail</a>
          </div>
          <ul className="course" aria-label="Čím se zabýváme">
            <li>Zednictví</li>
            <li>Střechy</li>
            <li>Klempířství</li>
            <li>Tesařství</li>
            <li>Izolace</li>
          </ul>
        </div>
      </section>

      <section className="trades" aria-labelledby="trades-h">
        <div className="sec-head">
          <p className="eyebrow">Řemesla pod jednou střechou</p>
          <h2 id="trades-h" className="sec-h">Šest řad, jedna parta</h2>
          <p className="sec-lead">
            Děláme všechna řemesla zednického charakteru — a to, co neuděláme
            sami, koordinujeme jako generální dodavatel. Vy jednáte s jedním
            partnerem.
          </p>
        </div>
        <ol className="courses">
          {trades.map((t) => (
            <li className="course-row" key={t.no}>
              <span className="course-no">{t.no}</span>
              <div className="course-text">
                <h3 className="course-name">{t.name}</h3>
                <p className="course-body">{t.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="trades-media">
          <img
            src="/section-1.webp"
            alt="Detail zdiva a nové omítky na rekonstrukci v Liberci"
            className="blk-img"
          />
        </div>
      </section>

      <section className="work" aria-labelledby="work-h">
        <div className="work-media">
          <img
            src="/section-2.webp"
            alt="Nová střešní krytina a klempířské prvky na rodinném domě"
            className="blk-img"
          />
        </div>
        <div className="work-copy">
          <p className="eyebrow">Z realizací</p>
          <h2 id="work-h" className="sec-h">Co jsme letos<br />postavili a spravili</h2>
          <p className="sec-lead">
            Od kostelní střechy po novostavbu na kraji Jizerek. Podívejte se,
            jak vypadá naše práce, když je hotovo.
          </p>
          <ul className="logbook">
            {jobs.map((j) => (
              <li className="log-row" key={j.place}>
                <span className="log-year">{j.year}</span>
                <div className="log-text">
                  <h3 className="log-place">{j.place}</h3>
                  <p className="log-body">{j.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="work-note">
            Firma se stavební činností v Liberci — vše od velkých staveb na
            klíč po drobné zakázky. Pracujeme samostatně i v součinnosti
            s dalšími firmami.
          </p>
        </div>
      </section>
    </main>
  );
}

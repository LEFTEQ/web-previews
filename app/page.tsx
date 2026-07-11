import React from "react";

export default function Page() {
  const drawers = [
    {
      no: "01",
      name: "Spojovací materiál",
      detail:
        "Šrouby, vruty, matice, hmoždinky, závitové tyče. Od jednoho kusu po celé balení — a když nevíte, co potřebujete, přineste starý kus a vybereme spolu.",
    },
    {
      no: "02",
      name: "Zámky, vložky a klíče",
      detail:
        "Výroba klíčů na počkání, přestavby vložek na jeden klíč, bezpečnostní kování. Cylindrické vložky srovnáme tak, aby vám k domu stačil jeden klíč.",
    },
    {
      no: "03",
      name: "Tmely, lepidla, ředidla",
      detail:
        "Montážní i sanitární tmely, dvousložková lepidla, ředidla, mazací oleje a těsnění. Poradíme, co drží na čem a co po ránu neuteče.",
    },
    {
      no: "04",
      name: "Nářadí — hobby i profi",
      detail:
        "Elektrické ruční nářadí, brusivo, kotouče, pily, štětce, ochranné pomůcky. Štafle, žebříky, kolečka, rudly i zahradní program.",
    },
  ];

  const wares = [
    "spojovací materiál",
    "lepidla a tmely",
    "ředidla",
    "mazací oleje",
    "zámky a vložky",
    "kování",
    "výroba klíčů",
    "přestavby vložek",
    "štafle a žebříky",
    "kolečka, vozíky, rudly",
    "hadice",
    "zahradní program",
    "řemeslnické potřeby",
    "profi i hobby nářadí",
    "štětky a štětce",
    "ochranné pomůcky",
    "domácí potřeby",
    "těsnění",
    "schránky",
    "kouřovody",
    "kamna a příslušenství",
    "brusivo a kotouče",
    "pily",
    "elektrické nářadí",
    "elektro",
    "košťata a smetáky",
  ];

  return (
    <main className="zm">
      <header className="zm-top">
        <a className="zm-mark" href="#" aria-label="Železářství Modřany — domů">
          <span className="zm-mark-key" aria-hidden="true">✚</span>
          <span className="zm-mark-txt">
            <span className="zm-mark-1">Železářství</span>
            <span className="zm-mark-2">Modřany</span>
          </span>
        </a>
        <div className="zm-top-meta">
          <a href="tel:+420244401072">+420 244 401 072</a>
          <span className="zm-dot" aria-hidden="true">·</span>
          <span>U Kina 44/1, Praha 4 – Modřany</span>
        </div>
      </header>

      <section className="zm-hero">
        <div className="zm-hero-copy">
          <p className="zm-eyebrow">Krámek na rohu &nbsp;·&nbsp; U Kina 44/1 &nbsp;·&nbsp; od roku 1992</p>
          <h1 className="zm-h1">
            Přineste ten<br />
            <span className="zm-h1-em">jeden šroubek,</span><br />
            zbytek najdeme my.
          </h1>
          <p className="zm-lead">
            Železářství, kde se ještě chodí k pultu a ptá se. Šuplíky plné vrutů,
            matic a hmoždinek, klíče na počkání a člověk, který ví, co na co drží.
            Malý obchod v Modřanech, který přežil i povodeň — a pořád stojí za rohem.
          </p>
          <div className="zm-hero-cta">
            <a className="zm-btn" href="tel:+420244401072">Zavolat do obchodu</a>
            <a className="zm-btn-ghost" href="#sortiment">Co u nás najdete</a>
          </div>
          <dl className="zm-hours">
            <div>
              <dt>Otevřeno</dt>
              <dd>Po–Pá 7–18 h</dd>
            </div>
            <div>
              <dt>Od 1. 4. 2026</dt>
              <dd>Po–Pá 7–17 h</dd>
            </div>
            <div>
              <dt>Svátky</dt>
              <dd>Zavřeno</dd>
            </div>
          </dl>
        </div>
        <figure className="zm-hero-fig">
          <img
            src="/hero.webp"
            alt="Nasypané šrouby, vruty a matice — spojovací materiál z pultu železářství"
            width={900}
            height={1100}
            loading="eager"
          />
          <figcaption>
            <span className="zm-fig-count">tisíce položek</span>
            <span className="zm-fig-note">a k tomu vše na objednávku dle vašeho přání</span>
          </figcaption>
        </figure>
      </section>

      <section className="zm-drawers" id="sortiment" aria-labelledby="sortiment-h">
        <div className="zm-sec-head">
          <p className="zm-eyebrow">Vytáhněte šuplík</p>
          <h2 className="zm-h2" id="sortiment-h">Čtyři pulty, u kterých vás obsloužíme</h2>
          <p className="zm-sec-note">
            Sortiment máme srovnaný jako doma v dílně — v přihrádkách. Tady je
            nejžádanější čtveřice; pod ní pak celý regál toho ostatního.
          </p>
        </div>

        <ol className="zm-drawer-list">
          {drawers.map((d) => (
            <li className="zm-drawer" key={d.no}>
              <span className="zm-drawer-no" aria-hidden="true">{d.no}</span>
              <div className="zm-drawer-body">
                <h3>{d.name}</h3>
                <p>{d.detail}</p>
              </div>
              <span className="zm-drawer-pull" aria-hidden="true" />
            </li>
          ))}
        </ol>

        <div className="zm-shelf">
          <img
            src="/section-1.webp"
            alt="Regály a přihrádky se spojovacím materiálem a nářadím v prodejně"
            width={1200}
            height={720}
            loading="lazy"
          />
          <div className="zm-shelf-tags" aria-label="Další sortiment na skladě">
            <span className="zm-shelf-title">A ještě k tomu:</span>
            <ul>
              {wares.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
            <p className="zm-shelf-foot">
              …a spousta dalšího. Co nemáme skladem, objednáme dle vašeho přání.
            </p>
          </div>
        </div>
      </section>

      <section className="zm-story" aria-labelledby="story-h">
        <figure className="zm-story-fig">
          <img
            src="/section-2.webp"
            alt="Interiér tradičního železářství v Modřanech s pultem a zásuvkami"
            width={1000}
            height={1200}
            loading="lazy"
          />
        </figure>
        <div className="zm-story-copy">
          <p className="zm-eyebrow">Od roku 1992 na stejném místě</p>
          <h2 className="zm-h2" id="story-h">Obchod, který vydržel — i tři týdny po povodni</h2>

          <ol className="zm-timeline">
            <li>
              <span className="zm-year">1992</span>
              <p>
                Josef Štolba otevírá v Modřanech prodejnu se smíšeným zbožím.
                Mezi tím vším i železářství.
              </p>
            </li>
            <li>
              <span className="zm-year">1997</span>
              <p>
                Větší plocha a jasné rozhodnutí: jedna komodita pořádně.
                Od té chvíle jsme železářství tělem i duší.
              </p>
            </li>
            <li>
              <span className="zm-year">2002</span>
              <p>
                Povodně vzaly celý obchod. Za tři týdny jsme měli znovu otevřeno
                a rozjeto na plné obrátky.
              </p>
            </li>
            <li>
              <span className="zm-year">2019</span>
              <p>
                Prodejnu přebírá nový provozovatel — ve spolupráci s původním
                majitelem. Tradici i kouzlo krámku držíme dál.
              </p>
            </li>
          </ol>

          <div className="zm-story-card">
            <p className="zm-card-line">
              Zastavte se osobně — poradíme, srovnáme vložky na jeden klíč
              a klíče uděláme na počkání.
            </p>
            <div className="zm-card-meta">
              <a href="tel:+420244401072">+420 244 401 072</a>
              <a href="mailto:zelezarstvimodrany@seznam.cz">zelezarstvimodrany@seznam.cz</a>
              <span>U Kina 44/1, 140 00 Praha 4 – Modřany</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

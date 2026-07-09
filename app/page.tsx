import type { CSSProperties } from "react";

const produkty = [
  {
    kod: "SPC",
    nazev: "Rigidní SPC",
    popis:
      "Nejodolnější z podlah — proti vlhkosti i zátěži, klidně i do koupelny. Pokládá se bez podložky a ochranná vrstva drží proti oděru a poškrábání dlouhá léta.",
    vlastnost: "voděodolná",
  },
  {
    kod: "DŘE",
    nazev: "Dřevěné podlahy",
    popis:
      "Masivní i vrstvené, do skoro každého interiéru. Příjemná na nohy, drží teplo. Vybíráte z druhů dřevin, dekorů i povrchových úprav — a když sešla léty, umíme ji zrenovovat.",
    vlastnost: "renovujeme",
  },
  {
    kod: "VIN",
    nazev: "Vinyl",
    popis:
      "Nejnovější výroba, design a komfort do všech prostor. Klademe celoplošným lepením nebo volně, plovoucím způsobem — podle podkladu a provozu.",
    vlastnost: "do všech prostor",
  },
  {
    kod: "PVC",
    nazev: "PVC",
    popis:
      "Dlouhá životnost, vysoká odolnost a široký výběr moderních vzorů. Dobře tlumí hluk, je hygienické, voděodolné a nenáročné na údržbu — doma i v komerci.",
    vlastnost: "tlumí hluk",
  },
  {
    kod: "LAM",
    nazev: "Laminát",
    popis:
      "Dřevovláknitá HDF deska a laminát s dekorativním potiskem pod krycí vrstvou. Vysoká zatížitelnost, stabilita a snadná montáž i údržba.",
    vlastnost: "snadná montáž",
  },
  {
    kod: "KOB",
    nazev: "Koberce",
    popis:
      "Útulnost a měkkost pod nohy. Široká škála barev a materiálů, každý se hodí do jiné místnosti — pomůžeme vybrat ten pravý pro vaše prostory.",
    vlastnost: "na míru",
  },
];

const kroky = [
  {
    cislo: "01",
    nazev: "Návrh vhodného řešení",
    popis:
      "Domov, nebo místo s vysokým pohybem osob — komerce, hotel? Novostavba, nebo starší budova? Zjistíme klíčové potřeby a navrhneme řešení na míru prostorám i peněžence.",
  },
  {
    cislo: "02",
    nazev: "Vyrovnání a příprava podkladu",
    popis:
      "Změříme vlhkost, očistíme podklad od starých podlah, lepidel a dalších vrstev, přebrousíme a vyrovnáme adekvátní vrstvou nivelace. Bez rovného podkladu nedrží nic.",
  },
  {
    cislo: "03",
    nazev: "Pokládka podlah",
    popis:
      "Dílce i role naměříme, nařežeme, položíme a zalištujeme přímo u vás tak, aby výsledek seděl do posledního rohu.",
  },
  {
    cislo: "04",
    nazev: "Renovace a čištění",
    popis:
      "Zašlý, poškozený nebo zbarvený dřevěný povrch kompletně zrenovujeme. Výkonným strojem vyčistíme podlahy i dřevěné terasy do hloubky.",
  },
];

export default function Page() {
  return (
    <main className="shk">
      <header className="shk-nav">
        <a className="shk-brand" href="#top" aria-label="SHK Podlahy — domů">
          <span className="shk-brand-mark">SHK</span>
          <span className="shk-brand-word">Podlahy</span>
        </a>
        <nav className="shk-nav-links" aria-label="Hlavní navigace">
          <a href="#produkty">Produkty</a>
          <a href="#postup">Jak to děláme</a>
          <a className="shk-nav-call" href="tel:+420">Zavolat</a>
        </nav>
      </header>

      <section className="shk-hero" id="top">
        <div className="shk-hero-text">
          <p className="shk-eyebrow">Podlahářství · Hradec Králové</p>
          <h1 className="shk-hero-title">
            Nová podlaha,<br />
            nebo <em>renovace</em>?
          </h1>
          <p className="shk-hero-lead">
            Návrh řešení, příprava podkladu a pokládka. Laminát, vinyl, PVC,
            dřevo, hybridní i rigidní SPC podlahy nebo koberce. Vše u vás
            připravíme, nařežeme, položíme a zalištujeme.
          </p>
          <p className="shk-hero-sign">Vaše podlahářství, SHK Podlahy s.r.o.</p>
          <div className="shk-hero-actions">
            <a className="shk-btn shk-btn-primary" href="tel:+420">Zavolat a domluvit termín</a>
            <a className="shk-btn shk-btn-ghost" href="#produkty">Prohlédnout podlahy</a>
          </div>
        </div>
        <figure className="shk-hero-media">
          <img
            src="/hero.webp"
            alt="Čerstvě položená podlaha v interiéru od SHK Podlahy"
            className="shk-hero-img"
          />
          <figcaption className="shk-hero-tag">Připravíme · nařežeme · položíme · zalištujeme</figcaption>
        </figure>
      </section>

      <section className="shk-products" id="produkty">
        <div className="shk-section-head">
          <p className="shk-eyebrow">Produkty</p>
          <h2 className="shk-section-title">Šest povrchů, jedna partie</h2>
          <p className="shk-section-note">
            Vzorky vozíme k vám domů. Poradíme, co se hodí do dětského pokoje,
            do koupelny i do provozu, kde denně projdou stovky lidí.
          </p>
        </div>

        <ul className="shk-swatches">
          {produkty.map((p) => (
            <li className="shk-swatch" key={p.kod}>
              <span className="shk-swatch-code" aria-hidden="true">{p.kod}</span>
              <h3 className="shk-swatch-name">{p.nazev}</h3>
              <p className="shk-swatch-desc">{p.popis}</p>
              <span className="shk-swatch-tag">{p.vlastnost}</span>
            </li>
          ))}
        </ul>

        <figure className="shk-band">
          <img
            src="/section-1.webp"
            alt="Detail spár a dekoru položené podlahy"
            className="shk-band-img"
          />
        </figure>
      </section>

      <section className="shk-process" id="postup">
        <div className="shk-process-grid">
          <div className="shk-process-intro">
            <p className="shk-eyebrow shk-eyebrow-light">Naše služby</p>
            <h2 className="shk-section-title shk-title-light">
              Od prvního měření po poslední lištu
            </h2>
            <p className="shk-process-lead">
              Nepřijedeme jen položit balík z e-shopu. Čtyři kroky, které
              rozhodují, jestli podlaha vydrží — každý si u nás pohlídáme sami.
            </p>
            <figure className="shk-process-media">
              <img
                src="/section-2.webp"
                alt="Řezání a příprava podlahové krytiny při pokládce"
                className="shk-process-img"
              />
            </figure>
          </div>

          <ol className="shk-steps">
            {kroky.map((k, i) => (
              <li
                className="shk-step"
                key={k.cislo}
                style={{ "--i": i } as CSSProperties}
              >
                <span className="shk-step-num">{k.cislo}</span>
                <div className="shk-step-body">
                  <h3 className="shk-step-name">{k.nazev}</h3>
                  <p className="shk-step-desc">{k.popis}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}

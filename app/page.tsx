import type { CSSProperties } from "react";

export default function Page() {
  const sortiment = [
    { skupina: "Světlo", polozky: ["LED zdroje a svítidla", "LED pásky a sestavy na klíč", "žárovky, výbojky, zářivky", "lustry, bodovky, venkovní lampy", "ruční svítilny"] },
    { skupina: "Jištění", polozky: ["jističe a pojistky", "proudové chrániče", "stykače a relé", "transformátory", "kondenzátory, tlumivky"] },
    { skupina: "Rozvody", polozky: ["kabely a vodiče", "lišty, žlaby, trubky", "rozvodnice a skříně", "vypínače a zásuvky", "svorkovnice"] },
    { skupina: "Slaboproud", polozky: ["domácí telefony", "pohybová čidla", "požární hlásiče a kouřová čidla", "dálková ovládání", "vodiče pro EZP a EZS"] },
    { skupina: "Ochrana", polozky: ["hromosvodový materiál", "ventilátory", "předřadníky", "vývodky, vruty, hmoždinky", "úložný materiál"] },
    { skupina: "Na zakázku", polozky: ["rozvaděče na míru", "solární panely a měniče", "baterie a autobaterie", "baterie GP a Energizer", "nářadí pro elektrikáře"] }
  ];

  return (
    <main className="eim">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="EIM elektro, domů">
          <span className="wm-e">EIM</span>
          <span className="wm-rest">elektro</span>
          <span className="wm-live" aria-hidden="true" />
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#sortiment">Sortiment</a>
          <a href="#duvera">O nás</a>
          <a className="nav-call" href="tel:+420541212560">541 212 560</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media">
          <img src="/hero.webp" alt="Regály s elektroinstalačním materiálem v prodejně EIM elektro na Tábore v Brně" />
        </div>
        <div className="hero-panel">
          <p className="eyebrow">Prodejna elektro · Brno, Tábor 26</p>
          <h1 id="hero-title">
            Fáze,<br /> nula,<br /> ochranný.
          </h1>
          <p className="lede">
            Kompletní sortiment pro domovní i průmyslové instalace. Od jednoho
            jističe po rozvaděč na míru — přes pult i na objednávku od kohokoliv
            z oboru silnoproud a slaboproud.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="tel:+420541212560">Zavolat na prodejnu</a>
            <a className="btn-ghost" href="#sortiment">Co máme skladem</a>
          </div>
          <ul className="hero-facts">
            <li><span>Otevřeno</span> Po–Pá pro řemeslo i domácnost</li>
            <li><span>Poradíme</span> vybereme správný chránič i průřez</li>
          </ul>
        </div>
      </section>

      <section id="sortiment" className="sortiment" aria-labelledby="sort-title">
        <div className="sort-head">
          <p className="eyebrow">Skladem či na objednávku</p>
          <h2 id="sort-title">Šest okruhů, ze kterých se skládá instalace</h2>
          <p className="sort-lede">
            Neprodáváme „všechno možné". Prodáváme to, co potřebujete, aby
            obvod fungoval a byl bezpečný — a co nemáme na regálu, sehnáme.
          </p>
        </div>
        <ol className="grid-sort">
          {sortiment.map((s, i) => (
            <li className="card" key={s.skupina} style={{ ["--i" as keyof CSSProperties]: String(i) } as CSSProperties}>
              <span className="card-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.skupina}</h3>
              <ul>
                {s.polozky.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
        <div className="sort-foot">
          <img src="/section-1.webp" alt="Detail rozvaděče s jističi a proudovými chrániči" />
          <div>
            <h3>Rozvaděče stavíme na míru</h3>
            <p>
              Přinesete projekt nebo jen popis, co dům či dílna potřebuje.
              Osadíme jističe, chrániče, stykače i přepěťovou ochranu a
              předáme zapojené a označené. Na objednávku i solární panely,
              měniče a baterie.
            </p>
            <a className="btn-primary" href="tel:+420725801011">Poptat rozvaděč</a>
          </div>
        </div>
      </section>

      <section id="duvera" className="duvera" aria-labelledby="duv-title">
        <div className="duv-media">
          <img src="/section-2.webp" alt="Prodejna EIM elektro s obsluhou u pultu" />
        </div>
        <div className="duv-body">
          <p className="eyebrow">O nás</p>
          <h2 id="duv-title">Kamenná prodejna, kde vám u pultu poradí člověk</h2>
          <p>
            EIM elektro najdete na adrese <strong>Tábor 26, 602 00 Brno</strong>.
            Jsme prodejna elektroinstalačního materiálu, kam chodí elektrikáři
            pro to, co jim zrovna chybí do party, i lidé, kteří potřebují
            vyměnit vypínač a chtějí to udělat správně.
          </p>
          <ul className="duv-list">
            <li>
              <strong>Poradíme, ne odbudeme</strong>
              Řekneme, jaký chránič, jaký průřez kabelu a proč — a co si
              troufnete zapojit sami a na co zavolat elektrikáře.
            </li>
            <li>
              <strong>Seženeme i to, co nevidíte</strong>
              Na objednávku výrobky jakýchkoliv značek z oboru elektro,
              silnoproud i slaboproud, bílá i černá technika.
            </li>
            <li>
              <strong>Aktuální nabídka</strong>
              Ke dni 24.&nbsp;7.&nbsp;2024 jsme ukončili výrobu klíčů. Zbytek
              sortimentu jede dál a doplňujeme ho průběžně.
            </li>
          </ul>
          <div className="kontakt-box">
            <p className="kontakt-title">Rychlý kontakt</p>
            <p><a href="tel:+420541212560">+420 541 212 560</a> · <a href="tel:+420725801011">+420 725 801 011</a></p>
            <p><a href="mailto:elektro@eimelektro.cz">elektro@eimelektro.cz</a></p>
            <p className="kontakt-addr">Tábor 26, 602 00 Brno</p>
          </div>
        </div>
      </section>
    </main>
  );
}

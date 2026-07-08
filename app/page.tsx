import type { CSSProperties } from "react";

export default function Page() {
  const metody = [
    {
      kod: "HIL",
      nazev: "Vysokovýkonový laser HIL",
      popis:
        "Hloubkový laser pro rychlé zklidnění bolesti, zánětů a otoků. Sáhne hlouběji než běžné přístroje — dobrý na akutní úrazy i zapouzdřené chronické potíže.",
    },
    {
      kod: "MAG",
      nazev: "Vysokofrekvenční magnet",
      popis:
        "Magnetoterapie, která podpoří hojení tkání, prokrvení a regeneraci. Ideální doplněk po operacích a při dlouhodobých bolestech kloubů.",
    },
    {
      kod: "IMV",
      nazev: "IMoove — řízený pohyb",
      popis:
        "Plošina, která v elipsovitém pohybu aktivuje hluboký stabilizační systém páteře. Trénuje rovnováhu a držení těla, aniž byste přetěžovali klouby.",
    },
    {
      kod: "FYZ",
      nazev: "Fyzikální terapie",
      popis:
        "Celé spektrum technik — elektroléčba, ultrazvuk, teplo i chlad. Jádro našeho přístupu k perifernim parézám, který u nás rozvíjel Mgr. Josef Urban.",
    },
  ];

  const komu = [
    "Měli jste úraz nebo vás trápí chronická bolest pohybového aparátu",
    "Bolí vás záda, ramena nebo klouby při sportu i běžném dni",
    "Vaše dítě má skoliózu, pohybové nebo dýchací potíže",
    "Chcete své tělo regenerovat a vrátit do formy",
  ];

  return (
    <main className="fm">
      <header className="fm-top">
        <a className="fm-mark" href="#" aria-label="Fyziomed Olomouc — domů">
          <span className="fm-mark-fyzio">fyzio</span>
          <span className="fm-mark-med">med</span>
          <span className="fm-mark-plus" aria-hidden="true">+</span>
        </a>
        <nav className="fm-nav" aria-label="Hlavní">
          <a href="#metody">Léčebné metody</a>
          <a href="#kdo">Kdo za tím stojí</a>
          <a className="fm-nav-tel" href="tel:+420606900080">606 900 080</a>
        </nav>
      </header>

      <section className="fm-hero" aria-labelledby="hero-nadpis">
        <div className="fm-hero-copy">
          <p className="fm-eyebrow">Rehabilitace &middot; Horní lán, Olomouc</p>
          <h1 id="hero-nadpis">
            Bolest má&nbsp;svou <span className="fm-hl">frekvenci</span>.
            <br />
            My&nbsp;jí umíme naslouchat.
          </h1>
          <p className="fm-lead">
            Fyzikální terapii dotahujeme na maximum — vysokovýkonový laser,
            vysokofrekvenční magnet a řízený pohyb v&nbsp;rukou terapeutů, kteří
            tyhle přístroje pomáhali dostat do české praxe.
          </p>
          <div className="fm-hero-cta">
            <a className="fm-btn" href="tel:+420606900080">Objednat se telefonicky</a>
            <a className="fm-btn-ghost" href="#metody">Naše léčebné metody</a>
          </div>
          <dl className="fm-facts">
            <div>
              <dt>Ordinujeme</dt>
              <dd>Po–Pá, 7:00–20:00</dd>
            </div>
            <div>
              <dt>Kde</dt>
              <dd>Horní lán 445/1, Olomouc</dd>
            </div>
            <div>
              <dt>Pojišťovny</dt>
              <dd>VoZP &middot; ZP MV &middot; RBP</dd>
            </div>
          </dl>
        </div>
        <figure className="fm-hero-media">
          <img
            src="/hero.webp"
            alt="Fyzioterapie v ordinaci Fyziomed — terapeut pracuje s pacientem"
            width={720}
            height={900}
          />
          <figcaption>
            <span className="fm-wave" aria-hidden="true">
              <span></span><span></span><span></span><span></span><span></span>
              <span></span><span></span><span></span><span></span>
            </span>
            Výukové pracoviště Fakulty tělesné kultury UP
          </figcaption>
        </figure>
      </section>

      <section className="fm-metody" id="metody" aria-labelledby="metody-nadpis">
        <div className="fm-sec-head">
          <p className="fm-eyebrow">Léčebné metody</p>
          <h2 id="metody-nadpis">
            Přístroje volíme podle diagnózy, ne&nbsp;podle ceníku.
          </h2>
          <p className="fm-sec-lead">
            Registrovaný poskytovatel zdravotních služeb pro poruchy pohybového
            aparátu dospělých i&nbsp;dětí. Odborným garantem je Mgr.&nbsp;Eliška
            Drábková.
          </p>
        </div>

        <ol className="fm-cards">
          {metody.map((m) => (
            <li className="fm-card" key={m.kod}>
              <span className="fm-card-kod" aria-hidden="true">
                {m.kod}
              </span>
              <h3>{m.nazev}</h3>
              <p>{m.popis}</p>
            </li>
          ))}
        </ol>

        <figure className="fm-metody-media">
          <img
            src="/section-1.webp"
            alt="Moderní přístroje pro fyzikální terapii v ordinaci Fyziomed"
            width={1200}
            height={620}
          />
        </figure>
      </section>

      <section className="fm-kdo" id="kdo" aria-labelledby="kdo-nadpis">
        <figure className="fm-kdo-media">
          <img
            src="/section-2.webp"
            alt="Tým terapeutů Fyziomed v Olomouci"
            width={720}
            height={820}
          />
        </figure>
        <div className="fm-kdo-copy">
          <p className="fm-eyebrow">Kdo za tím stojí</p>
          <h2 id="kdo-nadpis">
            Tradice, kterou u&nbsp;nás nezaložil marketing, ale praxe.
          </h2>
          <p>
            Koncept využití fyzikální terapie ve&nbsp;fyzioterapii propagoval a
            rozvíjel zakladatel Mgr.&nbsp;Josef&nbsp;Urban. Na&nbsp;vývoji řady
            přístrojů se osobně podílel a&nbsp;pomáhal je zavádět
            do&nbsp;klinické praxe. V&nbsp;této tradici péče o&nbsp;pacienty
            s&nbsp;periferními parézami pokračujeme dál.
          </p>

          <p className="fm-komu-nadpis">Přijďte, pokud&nbsp;vás poznáváte:</p>
          <ul className="fm-komu">
            {komu.map((k) => (
              <li key={k}>{k}</li>
            ))}
          </ul>

          <div className="fm-kontakt">
            <a className="fm-btn" href="tel:+420606900080">
              Zavolat: 606&nbsp;900&nbsp;080
            </a>
            <a className="fm-btn-ghost" href="mailto:fyziomed@fyziomed.cz">
              fyziomed@fyziomed.cz
            </a>
          </div>
          <p className="fm-poznamka">
            Objednáváme po&nbsp;telefonické domluvě. Osobní údaje zpracováváme
            podle GDPR (nařízení EU 2016/679).
          </p>
        </div>
      </section>
    </main>
  );
}

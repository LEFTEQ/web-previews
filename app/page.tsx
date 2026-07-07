import type { CSSProperties } from "react";

export default function Page() {
  const materialy = [
    {
      kod: "CIH",
      nazev: "Cihly KLIMABLOC",
      popis: "Broušené cihly na lepidlo, pěnu i maltu, k tomu překlady. U založení na pěnu nebo lepidlo řešíme první řadu s vámi přímo na stavbě.",
      detail: "na lepidlo · na pěnu · na maltu",
    },
    {
      kod: "STR",
      nazev: "Stropy SPIROLL",
      popis: "Předpjaté stropní panely s dopravou a osazením. Fotky z reálných montáží vám ukážeme na prodejně, ať víte, do čeho jdete.",
      detail: "panely · věncovky U / I · osazení HR",
    },
    {
      kod: "KOM",
      nazev: "Komíny ROHR-KAMIN",
      popis: "Kompletní komínový systém včetně montážního návodu. Poradíme průměr i výšku podle vašeho spotřebiče a typu střechy.",
      detail: "jednoprůduch · s ventilací",
    },
    {
      kod: "IZO",
      nazev: "Izolace a hydroizolace",
      popis: "Asfaltové pásy proti vodě, tlakové vodě i radonu, minerální vata Woolard 0,035 a 0,039, sádrokartony do příček, podlah i střech.",
      detail: "pásy · vata · SDK",
    },
    {
      kod: "BET",
      nazev: "Beton a železo",
      popis: "Beton do základů v mixu i s pumpou, kari sítě a roxory, štěrky a drtě. Nově vozíme kamenivo přímo na desku.",
      detail: "mix · kari sítě · štěrky",
    },
    {
      kod: "EXT",
      nazev: "Zahrada a exteriér",
      popis: "Zámkové, vymývané a terasové dlažby, betonové ploty, obrubníky a zahradní architektura EXTERIER BETON — od největšího výrobce vymývaných výrobků v ČR.",
      detail: "dlažba · ploty · palisády",
    },
  ];

  const duvera = [
    { cislo: "1999", popis: "prodáváme a radíme se stavebninami" },
    { cislo: "Po–Ne", popis: "sklad Hůry, odběr kdykoli po domluvě" },
    { cislo: "celá ČR", popis: "levná doprava s hydraulickou rukou" },
  ];

  return (
    <main className="sb">
      <header className="sb-top">
        <a className="sb-brand" href="#" aria-label="Stavebniny Přemysl Tůma, domů">
          <span className="sb-brand-mark" aria-hidden="true">
            <span className="sb-brand-course" />
            <span className="sb-brand-course" />
            <span className="sb-brand-course" />
          </span>
          <span className="sb-brand-text">
            <span className="sb-brand-name">STAVEBNINY</span>
            <span className="sb-brand-sub">Přemysl&nbsp;Tůma&nbsp;s.r.o.</span>
          </span>
        </a>
        <a className="sb-phone" href="tel:+420601581881">
          <span className="sb-phone-label">Volejte 8–17</span>
          <span className="sb-phone-num">601 581 881</span>
        </a>
      </header>

      <section className="sb-hero" aria-labelledby="sb-hero-nadpis">
        <div className="sb-hero-media">
          <img
            src="/hero.webp"
            alt="Skladová plocha stavebnin Přemysl Tůma s paletami cihel a betonových výrobků"
            className="sb-hero-img"
          />
          <div className="sb-hero-shade" aria-hidden="true" />
        </div>

        <div className="sb-hero-inner">
          <p className="sb-eyebrow">Sklad Hůry u&nbsp;Českých&nbsp;Budějovic · od roku 1999</p>
          <h1 id="sb-hero-nadpis" className="sb-hero-nadpis">
            Materiál na&nbsp;dům
            <br />
            <span className="sb-hero-accent">naskládáme za&nbsp;vás</span>
          </h1>
          <p className="sb-hero-lead">
            Cihly, stropy, komíny, beton i&nbsp;dlažba — celá stavba z&nbsp;jednoho
            skladu, k&nbsp;okamžitému odběru. Než začnete stavět, projdeme s&nbsp;vámi
            výběr materiálu a&nbsp;spočítáme, kolik ho opravdu potřebujete.
          </p>
          <div className="sb-hero-actions">
            <a className="sb-btn" href="tel:+420601581881">Zavolat a&nbsp;poradit se</a>
            <a className="sb-btn sb-btn-ghost" href="#materialy">Co vozíme</a>
          </div>
        </div>

        <dl className="sb-hero-strip">
          {duvera.map((d) => (
            <div className="sb-strip-item" key={d.cislo}>
              <dt>{d.cislo}</dt>
              <dd>{d.popis}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="sb-mat" id="materialy" aria-labelledby="sb-mat-nadpis">
        <div className="sb-mat-head">
          <p className="sb-eyebrow sb-eyebrow-dark">Nabídka skladem</p>
          <h2 id="sb-mat-nadpis" className="sb-sec-nadpis">
            Šest vrstev jedné stavby
          </h2>
          <p className="sb-sec-lead">
            Od základové desky po plot kolem zahrady. Neposíláme vás sem a&nbsp;tam —
            na cenovou nabídku všech těchto materiálů stačí jeden telefon.
          </p>
        </div>

        <ul className="sb-mat-grid">
          {materialy.map((m) => (
            <li className="sb-card" key={m.kod}>
              <span className="sb-card-kod" aria-hidden="true">{m.kod}</span>
              <h3 className="sb-card-nazev">{m.nazev}</h3>
              <p className="sb-card-popis">{m.popis}</p>
              <p className="sb-card-detail">{m.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="sb-onas" aria-labelledby="sb-onas-nadpis">
        <div className="sb-onas-media">
          <img
            src="/section-2.webp"
            alt="Betonové ploty a zámková dlažba z nabídky stavebnin Přemysl Tůma"
            className="sb-onas-img"
          />
        </div>

        <div className="sb-onas-body">
          <p className="sb-eyebrow sb-eyebrow-dark">Proč k&nbsp;nám</p>
          <h2 id="sb-onas-nadpis" className="sb-sec-nadpis">
            Poradíme dřív,
            <br />než koupíte
          </h2>
          <p className="sb-sec-lead">
            Stavebniny na&nbsp;Lišovské v&nbsp;Hůrách vedeme od&nbsp;roku 1999. Nejsme jen
            výdejní okno — u&nbsp;cihel KLIMABLOC vám pomůžeme se&nbsp;založením první řady
            a&nbsp;po celou stavbu můžeme dělat technický dozor.
          </p>

          <ul className="sb-sluzby">
            <li>
              <span className="sb-sluzby-znak" aria-hidden="true" />
              <div>
                <strong>Technický dozor a&nbsp;termokamera</strong>
                <span>Dohlédneme na&nbsp;založení stavby, revize proměříme termokamerou.</span>
              </div>
            </li>
            <li>
              <span className="sb-sluzby-znak" aria-hidden="true" />
              <div>
                <strong>Půjčovna nářadí</strong>
                <span>Vibrační deska, zakládací rámy, nivelák, PB hořák — půjčíte u&nbsp;nás.</span>
              </div>
            </li>
            <li>
              <span className="sb-sluzby-znak" aria-hidden="true" />
              <div>
                <strong>Doprava s&nbsp;hydraulickou rukou</strong>
                <span>Materiál složíme přesně tam, kde ho na&nbsp;stavbě potřebujete.</span>
              </div>
            </li>
          </ul>

          <address className="sb-adresa">
            <span>STAVEBNINY - Přemysl Tůma s.r.o.</span>
            <span>Lišovská 42, 373 71 Hůry</span>
            <span>IČ 08557713 · plátci DPH · zápis KS v&nbsp;Českých Budějovicích</span>
          </address>
        </div>
      </section>
    </main>
  );
}

import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      kod: "KLIMA",
      nazev: "Klimatizace do bytu i kanceláře",
      popis:
        "Split i multisplit jednotky Daikin, Mitsubishi a LG. Přijedeme, změříme tepelnou zátěž místnosti a navrhneme výkon, který v létě chladí a v přechodném období levně přitápí.",
      detail: ["nástěnné i kazetové jednotky", "tichý provoz v ložnici", "chlazení i topení jedním strojem"],
    },
    {
      kod: "ČERPADLA",
      nazev: "Tepelná čerpadla vzduch–voda",
      popis:
        "Kompletní návrh a montáž tepelného čerpadla pro rodinný dům včetně napojení na stávající topení. Poradíme i s dotací Nová zelená úsporám.",
      detail: ["návrh na míru domu", "pomoc s dotací", "napojení na radiátory i podlahovku"],
    },
    {
      kod: "REKUP",
      nazev: "Rekuperace a větrání",
      popis:
        "Řízené větrání s rekuperací tepla do novostaveb i rekonstrukcí. Čerstvý vzduch bez otevírání oken a bez zbytečných tepelných ztrát.",
      detail: ["filtrovaný čerstvý vzduch", "úspora za vytápění", "tišší dům bez pylů"],
    },
    {
      kod: "SERVIS",
      nazev: "Servis, revize a čištění",
      popis:
        "Pravidelné čištění a kontrola těsnosti chladiva. Servisujeme i jednotky, které jsme nemontovali. Povinné revize dle zákona o F-plynech vyřešíme za vás.",
      detail: ["kontrola těsnosti chladiva", "dezinfekce výparníku", "revize F-plynů"],
    },
  ];

  const tym = [
    { jmeno: "Martin Vlk", role: "projekty, servis, montáže, revize" },
    { jmeno: "František Vlk", role: "montáže TZB, servis" },
    { jmeno: "ing. Miroslav Bartoň", role: "projekty TZB a chlazení" },
    { jmeno: "Tomáš Schneider", role: "servis, elektrotechnik" },
    { jmeno: "Petr Jahnel", role: "montáže topení a reaktorů" },
    { jmeno: "Jiří Pojsl", role: "specialista na PP" },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Chlazení VLK, domovská stránka">
          <span className="wordmark__chill">Chlazení</span>
          <span className="wordmark__vlk">VLK</span>
        </a>
        <a className="topbar__tel" href="tel:+420602558964">
          <span className="topbar__telLabel">Nonstop servis</span>
          <span className="topbar__telNum">602 558 964</span>
        </a>
      </header>

      <section className="hero">
        <div className="hero__media">
          <img
            className="hero__img"
            src="/hero.webp"
            alt="Montáž klimatizační jednotky technikem Chlazení VLK"
            width={1600}
            height={1100}
          />
          <div className="hero__gauge" aria-hidden="true">
            <span className="hero__gaugeVal">21°C</span>
            <span className="hero__gaugeLabel">nastaveno</span>
          </div>
        </div>
        <div className="hero__text">
          <p className="hero__eyebrow">Klimatizace &amp; tepelná čerpadla · Liberec a okolí</p>
          <h1 className="hero__title">
            Venku <span className="hero__hot">34°</span>,<br />
            u vás <span className="hero__cool">21°</span>.
          </h1>
          <p className="hero__lead">
            Od návrhu po revizi vám postaráme o chlazení, které v létě spolehlivě táhne a v zimě
            umí i přitopit. Montujeme značkové jednotky a servisujeme i ty, které jsme neinstalovali —
            po Liberecku i v Ústeckém kraji.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="mailto:servis@chlazenivlk.cz?subject=Nez%C3%A1vazn%C3%A1%20popt%C3%A1vka%20klimatizace">
              Chci nezávaznou nabídku
            </a>
            <a className="btn btn--ghost" href="tel:+420602558964">Zavolat technikovi</a>
          </div>
          <ul className="hero__facts">
            <li><b>Daikin · Mitsubishi · LG</b><span>montujeme značky, ne no-name</span></li>
            <li><b>Revize F-plynů</b><span>splníme za vás zákonnou povinnost</span></li>
            <li><b>Nová zelená úsporám</b><span>pomůžeme s dotací na čerpadlo</span></li>
          </ul>
        </div>
      </section>

      <section className="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="section-head">
          <p className="section-head__eyebrow">Co pro vás uděláme</p>
          <h2 id="sluzby-nadpis" className="section-head__title">
            Čtyři věci, které umíme pořádně
          </h2>
          <p className="section-head__note">
            Nepředstíráme, že děláme všechno. Držíme se chlazení, tepla a vzduchu — a v tom jsme doma.
          </p>
        </div>

        <div className="sluzby__grid">
          {sluzby.map((s) => (
            <article className="karta" key={s.kod}>
              <span className="karta__kod">{s.kod}</span>
              <h3 className="karta__nazev">{s.nazev}</h3>
              <p className="karta__popis">{s.popis}</p>
              <ul className="karta__detail">
                {s.detail.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="onas" aria-labelledby="onas-nadpis">
        <div className="onas__media">
          <img
            src="/section-1.webp"
            alt="Venkovní klimatizační jednotka nainstalovaná na fasádě domu"
            width={1200}
            height={900}
          />
          <img
            className="onas__img2"
            src="/section-2.webp"
            alt="Detail servisu chladicího okruhu s měřicími přístroji"
            width={1200}
            height={900}
          />
        </div>
        <div className="onas__text">
          <p className="section-head__eyebrow">Rodinná firma z Liberce</p>
          <h2 id="onas-nadpis" className="section-head__title">
            U Vlků řemeslo nezaniklo s prací u zákazníka
          </h2>
          <p className="onas__lead">
            Provozovnu máme v Liberci-Vesci a druhou v Ústí nad Labem, takže na poruchu
            dorazíme, i když je venku čtyřicet. Montér, který vám jednotku pověsil, ji za dva roky
            přijede i zkontrolovat — u nás se lidi nemění každou sezónu.
          </p>

          <ul className="onas__team">
            {tym.map((t) => (
              <li key={t.jmeno} className="onas__member">
                <span className="onas__memberName">{t.jmeno}</span>
                <span className="onas__memberRole">{t.role}</span>
              </li>
            ))}
          </ul>

          <div className="onas__pobocky">
            <div className="pobocka">
              <span className="pobocka__label">Provozovna Liberec</span>
              <span className="pobocka__addr">Lomová 197, 463 12 Liberec 25 – Vesec</span>
            </div>
            <div className="pobocka">
              <span className="pobocka__label">Sídlo Ústí nad Labem</span>
              <span className="pobocka__addr">U Skladiště 421, 400 01 Ústí n. L. – Předlice</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

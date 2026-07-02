// Autosklaservis Weber s.r.o. — Most / Teplice
// Koncept: „Prasklina zastavená včas." Hero staví na grafickém motivu
// vrstveného skla a lomové linky — nejcharakterističtější věci v oboru autoskel.
// Signature prvek: diagonální „crack line" (SVG polyline), která se na hero
// vykreslí při načtení a v sekci služeb odděluje opravu od výměny.

const SERVICES_REPAIR = [
  {
    name: "Oprava odštípnutí od kamínku",
    detail:
      "Poškození do velikosti dvoukoruny mimo zorné pole řidiče zapravíme pryskyřicí. Sklo zůstává původní, výsledek je téměř neviditelný.",
    time: "cca 30 minut, na počkání",
  },
  {
    name: "Zastavení praskliny",
    detail:
      "Krátkou prasklinu zafixujeme dřív, než se roztáhne přes celé sklo. Čím dřív přijedete, tím větší šance, že výměnu nebudete potřebovat.",
    time: "na počkání",
  },
  {
    name: "Renovace světlometů",
    detail:
      "Zmatnělé kryty světel vybrousíme a zapečetíme. Světla svítí jako nová a projdete s nimi na STK.",
    time: "do 2 hodin",
  },
];

const SERVICES_REPLACE = [
  {
    name: "Výměna čelního skla",
    detail:
      "Osobní i nákladní vozy, všechny značky. Používáme skla v OEM kvalitě a lepidla s krátkou dobou odjezdu — většinou odjíždíte tentýž den.",
    time: "tentýž den",
  },
  {
    name: "Boční a zadní skla",
    detail:
      "Po vloupání nebo vandalismu vyměníme boční či zadní sklo včetně vysátí střepů z interiéru a dveří.",
    time: "dle skladové dostupnosti",
  },
  {
    name: "Bezpečnostní pískování VIN",
    detail:
      "Vypískování identifikačního kódu na všechna skla vozu — účinná ochrana proti krádeži, kterou zohledňují i pojišťovny.",
    time: "do 1 hodiny",
  },
];

const EXTRAS = [
  "Autofólie a tónování skel",
  "Tažná zařízení — montáž i zápis",
  "Zámek zpátečky",
  "Čištění interiéru vozu",
];

const INSURANCE_STEPS = [
  {
    step: "Zavoláte nám",
    text: "Popíšete poškození po telefonu nebo pošlete fotku. Rovnou vám řekneme, jestli sklo půjde opravit, nebo je potřeba výměna.",
  },
  {
    step: "Pojišťovnu vyřídíme za vás",
    text: "Jsme smluvní partner pojišťoven. Škodu nahlásíme, doložíme fotodokumentaci a domluvíme krytí — z připojištění skel i z povinného ručení viníka.",
  },
  {
    step: "Přijedete a odjedete",
    text: "Vy jen přistavíte vůz. Při krytí z pojistky u nás většinou neplatíte nic, případně jen spoluúčast.",
  },
];

export default function Page() {
  return (
    <main className="aw">
      {/* ============ HERO ============ */}
      <header className="aw-hero">
        <div className="aw-topbar">
          <span className="aw-wordmark" aria-label="Autosklaservis Weber">
            <span className="aw-wordmark-main">WEBER</span>
            <span className="aw-wordmark-sub">autosklaservis</span>
          </span>
          <div className="aw-topbar-contacts">
            <a className="aw-phone" href="tel:+420723126543">
              <span className="aw-phone-city">Most</span> 723 126 543
            </a>
            <a className="aw-phone" href="tel:+420608976666">
              <span className="aw-phone-city">Teplice</span> 608 976 666
            </a>
          </div>
        </div>

        <div className="aw-hero-inner">
          <p className="aw-hero-eyebrow">
            Autosklo Most &amp; Teplice · Po–Pá 8:00–16:30
          </p>
          <h1 className="aw-hero-title">
            <span className="aw-line aw-line-1">Prasklé sklo</span>
            <span className="aw-line aw-line-2">nepočká.</span>
            <span className="aw-line aw-line-3">My taky ne.</span>
          </h1>
          <p className="aw-hero-lead">
            Odštípnutí od kamínku opravíme na počkání, čelní sklo vyměníme
            zpravidla tentýž den. Pojistnou událost nahlásíme a vyřídíme za vás
            — jsme smluvní partner pojišťoven.
          </p>
          <div className="aw-hero-actions">
            <a className="aw-btn aw-btn-solid" href="tel:+420723126543">
              Zavolat Most
            </a>
            <a className="aw-btn aw-btn-ghost" href="tel:+420608976666">
              Zavolat Teplice
            </a>
          </div>

          {/* Signature: lomová linka skla */}
          <svg
            className="aw-crack"
            viewBox="0 0 1200 320"
            preserveAspectRatio="none"
            aria-hidden="true"
            focusable="false"
          >
            <polyline
              className="aw-crack-main"
              points="0,240 210,196 340,214 470,150 640,168 760,96 930,118 1060,52 1200,70"
            />
            <polyline
              className="aw-crack-branch"
              points="470,150 520,220 585,238"
            />
            <polyline
              className="aw-crack-branch aw-crack-branch-2"
              points="760,96 800,40 872,26"
            />
            <circle className="aw-crack-impact" cx="470" cy="150" r="7" />
          </svg>
        </div>

        <div className="aw-hero-strip" role="list" aria-label="Proč k nám">
          <span role="listitem">Oprava kamínku na počkání</span>
          <span role="listitem">Osobní i nákladní vozy</span>
          <span role="listitem">Pojistku vyřídíme za vás</span>
          <span role="listitem">2 provozovny — Most a Teplice</span>
        </div>
      </header>

      {/* ============ SLUŽBY ============ */}
      <section className="aw-services" aria-labelledby="sluzby-h">
        <div className="aw-section-head">
          <h2 id="sluzby-h">
            Opravit, nebo vyměnit?
            <span className="aw-section-sub">
              Poradíme podle poškození — a vždy zvolíme levnější cestu, která
              je bezpečná.
            </span>
          </h2>
        </div>

        <div className="aw-service-split">
          <div className="aw-service-col aw-service-col-repair">
            <h3 className="aw-col-label">
              <span className="aw-col-tag aw-tag-repair">Oprava</span>
              Když sklo ještě jde zachránit
            </h3>
            <ul className="aw-service-list">
              {SERVICES_REPAIR.map((s) => (
                <li key={s.name} className="aw-service-item">
                  <h4>{s.name}</h4>
                  <p>{s.detail}</p>
                  <span className="aw-service-time">{s.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="aw-service-divider" aria-hidden="true">
            <svg viewBox="0 0 40 600" preserveAspectRatio="none">
              <polyline
                points="20,0 12,90 26,170 10,260 28,340 14,430 24,520 20,600"
                className="aw-divider-line"
              />
            </svg>
          </div>

          <div className="aw-service-col aw-service-col-replace">
            <h3 className="aw-col-label">
              <span className="aw-col-tag aw-tag-replace">Výměna</span>
              Když už oprava nestačí
            </h3>
            <ul className="aw-service-list">
              {SERVICES_REPLACE.map((s) => (
                <li key={s.name} className="aw-service-item">
                  <h4>{s.name}</h4>
                  <p>{s.detail}</p>
                  <span className="aw-service-time">{s.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="aw-extras">
          <span className="aw-extras-label">Když už jste u nás:</span>
          <ul>
            {EXTRAS.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ POJIŠTĚNÍ + PROVOZOVNY ============ */}
      <section className="aw-trust" aria-labelledby="pojistka-h">
        <div className="aw-trust-inner">
          <div className="aw-insurance">
            <h2 id="pojistka-h">
              Pojistná událost?
              <span className="aw-section-sub aw-section-sub-light">
                Papírování necháte nám. Takhle to u nás probíhá:
              </span>
            </h2>
            <ol className="aw-steps">
              {INSURANCE_STEPS.map((s, i) => (
                <li key={s.step} className="aw-step">
                  <span className="aw-step-num" aria-hidden="true">
                    {i + 1}
                  </span>
                  <div>
                    <h3>{s.step}</h3>
                    <p>{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="aw-insurance-note">
              Máte-li připojištění skel, oprava kamínku vás většinou nestojí
              ani korunu — a nepřijdete o bonus.
            </p>
          </div>

          <div className="aw-branches">
            <h3 className="aw-branches-title">Kde nás najdete</h3>
            <article className="aw-branch">
              <h4>Most</h4>
              <p className="aw-branch-addr">
                Žatecká 3304, 434 01 Most
                <span className="aw-branch-hint"> (u nemocnice)</span>
              </p>
              <p className="aw-branch-hours">Po–Pá 8:00–16:30</p>
              <p className="aw-branch-contact">
                <a href="tel:+420476705362">476 705 362</a>
                {" · "}
                <a href="tel:+420723126543">723 126 543</a>
                <br />
                <a href="mailto:most@autosklaservis.cz">
                  most@autosklaservis.cz
                </a>
              </p>
            </article>
            <article className="aw-branch">
              <h4>Teplice</h4>
              <p className="aw-branch-addr">Nákladní 1983, 415 01 Teplice</p>
              <p className="aw-branch-hours">Po–Pá 8:00–16:30</p>
              <p className="aw-branch-contact">
                <a href="tel:+420608976666">608 976 666</a>
                <br />
                <a href="mailto:teplice@autosklaservis.cz">
                  teplice@autosklaservis.cz
                </a>
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

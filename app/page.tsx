import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      code: "01",
      title: "Návrh a projekt",
      lead: "Změříme tepelnou zátěž místnosti a navrhneme jednotku na míru — ne předdimenzovanou, ne poddimenzovanou.",
      points: [
        "Výpočet chladicího výkonu podle prosklení a orientace",
        "Výběr nástěnné, kazetové nebo multisplit jednotky",
        "Cenová nabídka do tří pracovních dnů",
      ],
    },
    {
      code: "02",
      title: "Montáž s certifikací",
      lead: "Instalujeme s oprávněním pro práci s chladivy. Vrtání, vakuování okruhu, plnění — vše podle normy.",
      points: [
        "Jádrové vrtání prostupů bez prachu a nepořádku",
        "Tlaková zkouška a vakuování před spuštěním",
        "Skryté vedení trasy, čistý spoj u venkovní jednotky",
      ],
    },
    {
      code: "03",
      title: "Servis a čištění",
      lead: "Pravidelná údržba drží výkon a zdravý vzduch. Vyčistíme výparník, zkontrolujeme těsnost okruhu.",
      points: [
        "Dezinfekce a čištění filtrů i výparníku",
        "Doplnění chladiva a kontrola úniků",
        "Servis do 48 hodin v okrese Liberec",
      ],
    },
  ];

  const trust = [
    { big: "18", unit: "°C–26 °C", label: "rozsah, který nastavíme podle vašeho pocitu, ne podle katalogu" },
    { big: "48", unit: "hodin", label: "nejzazší reakce na poruchu v Liberci a okolí" },
    { big: "F-plyny", unit: "osvědčení", label: "certifikace pro manipulaci s chladivy" },
  ];

  return (
    <main className="pk">
      <header className="pk-top">
        <a className="pk-mark" href="#" aria-label="PULSKLIMA – klimatizace Liberec">
          <span className="pk-mark-puls">PULS</span><span className="pk-mark-klima">KLIMA</span>
          <span className="pk-mark-dot" aria-hidden="true" />
        </a>
        <nav className="pk-nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#duvera">O nás</a>
          <a className="pk-call" href="tel:+420480000000">Zavolat</a>
        </nav>
      </header>

      <section className="pk-hero" aria-labelledby="pk-hero-h">
        <div className="pk-hero-media">
          <img src="/hero.webp" alt="Nástěnná klimatizační jednotka v prosvětleném interiéru" />
          <div className="pk-hero-scrim" aria-hidden="true" />
        </div>
        <div className="pk-hero-body">
          <p className="pk-eyebrow">Klimatizace &middot; Liberec a okolí</p>
          <h1 id="pk-hero-h">
            Ať je venku <span className="pk-warm">36&nbsp;°C</span>,<br />
            uvnitř má být <span className="pk-cool">příjemně</span>.
          </h1>
          <p className="pk-lead">
            Navrhneme, namontujeme a udržíme klimatizaci do bytu, kanceláře i provozovny.
            Tiše, čistě a s certifikací pro práci s chladivy — od domu pod Ještědem po celý Liberecký kraj.
          </p>
          <div className="pk-actions">
            <a className="pk-btn" href="tel:+420480000000">Zavolat a domluvit měření</a>
            <a className="pk-btn-ghost" href="#sluzby">Jak to probíhá</a>
          </div>
          <div className="pk-dial" aria-hidden="true">
            <span className="pk-dial-out">36°</span>
            <span className="pk-dial-arrow" />
            <span className="pk-dial-in">23°</span>
          </div>
        </div>
      </section>

      <section className="pk-sec" id="sluzby" aria-labelledby="pk-sluzby-h">
        <div className="pk-sec-head">
          <p className="pk-eyebrow">Od nabídky po servis</p>
          <h2 id="pk-sluzby-h">Tři kroky k chladné hlavě</h2>
          <p className="pk-sec-sub">
            Klimatizace není spotřebič z krabice. Provedeme vás celou cestou — a zůstaneme i potom.
          </p>
        </div>

        <ol className="pk-steps">
          {services.map((s) => (
            <li className="pk-step" key={s.code}>
              <span className="pk-step-code" aria-hidden="true">{s.code}</span>
              <h3>{s.title}</h3>
              <p className="pk-step-lead">{s.lead}</p>
              <ul className="pk-step-list">
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <figure className="pk-figure">
          <img src="/section-1.webp" alt="Montáž venkovní klimatizační jednotky na fasádu domu" />
          <figcaption>
            Venkovní jednotku umístíme tak, aby netáhla hluk do ložnice ani do oken sousedů.
          </figcaption>
        </figure>
      </section>

      <section className="pk-sec pk-sec-trust" id="duvera" aria-labelledby="pk-duvera-h">
        <div className="pk-trust-grid">
          <div className="pk-trust-copy">
            <p className="pk-eyebrow">O firmě</p>
            <h2 id="pk-duvera-h">Místní parta, která k vám dojede</h2>
            <p className="pk-sec-sub">
              PULSKLIMA je liberecká firma zaměřená na klimatizaci a chlazení. Montujeme značkové
              jednotky do bytů i firem, děláme pravidelný servis a hlavně po instalaci nezmizíme —
              telefon zvedáme i po sezoně.
            </p>
            <dl className="pk-stats">
              {trust.map((t) => (
                <div className="pk-stat" key={t.label}>
                  <dt>
                    <span className="pk-stat-big">{t.big}</span>
                    <span className="pk-stat-unit">{t.unit}</span>
                  </dt>
                  <dd>{t.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <figure className="pk-trust-fig">
            <img src="/section-2.webp" alt="Technik PULSKLIMA při servisu klimatizační jednotky" />
          </figure>
        </div>

        <blockquote className="pk-quote">
          <p>
            „Přijeli, změřili, poradili nám menší jednotku, než jsme čekali — a v létě to v podkroví
            konečně jde vydržet. Servis si hlídají sami.“
          </p>
          <cite>Rodina Markova, byt v Liberci-Rochlicích</cite>
        </blockquote>
      </section>
    </main>
  );
}

// typový import ponechán kvůli konzistenci; nevyužité styly řeší CSS
void ({} as CSSProperties);

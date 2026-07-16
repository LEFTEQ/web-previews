export default function Page() {
  const cenik = [
    { s: "Vstupní prohlídka a plán ošetření", p: "500 Kč" },
    { s: "Dentální hygiena s instruktáží", p: "1 200 Kč" },
    { s: "Bílá výplň (fotokompozit)", p: "od 1 400 Kč" },
    { s: "Ošetření kořenových kanálků", p: "od 2 500 Kč" },
    { s: "Celokeramická korunka", p: "od 5 500 Kč" },
    { s: "Šetrné bělení zubů", p: "od 4 000 Kč" },
  ];

  const hodiny = [
    { d: "Pondělí", h: "7:00 – 15:00" },
    { d: "Úterý", h: "7:00 – 15:00" },
    { d: "Středa", h: "7:00 – 18:00" },
    { d: "Čtvrtek", h: "7:00 – 15:00" },
    { d: "Pátek", h: "7:00 – 13:00" },
  ];

  return (
    <>
      <header className="nav">
        <a className="wordmark" href="#uvod" aria-label="Stomatologická ambulance Komenského, úvod">
          <span className="wordmark-face" aria-hidden="true">
            <span className="wm-eye" />
            <span className="wm-eye" />
            <span className="wm-smile" />
          </span>
          <span className="wordmark-text">
            Ambulance<span className="wordmark-sub">Komenského · Olomouc</span>
          </span>
        </a>
        <nav className="nav-links" aria-label="Hlavní navigace">
          <a href="#cenik">Ceník</a>
          <a href="#filozofie">Filozofie</a>
          <a href="#hodiny">Otevírací doba</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <main id="uvod">
        <section className="band hero" aria-labelledby="hero-nadpis">
          <p className="eyebrow">Zubní ordinace v centru Olomouce</p>

          <div className="smiley" aria-hidden="true">
            <div className="eyes">
              <span className="eye" />
              <span className="eye" />
            </div>
            <svg className="arc" viewBox="0 0 1000 300" preserveAspectRatio="xMidYMid meet" role="presentation">
              <path
                className="arc-path"
                pathLength={1}
                d="M40 66 Q500 300 960 66"
                fill="none"
              />
            </svg>
          </div>

          <h1 id="hero-nadpis" className="hero-title">
            Vždy <span className="hero-accent">s úsměvem</span>
          </h1>

          <p className="hero-lead">
            K nám na křeslo se nemusíte bát. Ošetřujeme klidně, srozumitelně
            vysvětlíme každý krok a bolest řešíme dřív, než začne.
          </p>

          <p className="hero-status">
            <span className="status-dot" aria-hidden="true" />
            Přijímáme nové pacienty · Komenského 8, kousek od Dómu sv. Václava
          </p>
        </section>

        <section className="band services reveal" id="cenik" aria-labelledby="cenik-nadpis">
          <div className="section-head">
            <p className="eyebrow eyebrow--coral">Co u nás zvládneme</p>
            <h2 id="cenik-nadpis">Péče o zuby i orientační ceník</h2>
            <p className="section-intro">
              Od preventivní prohlídky po celokeramickou korunku. Ceny jsou
              orientační — přesnou částku vždy uslyšíte předem, žádná překvapení
              na konci ošetření.
            </p>
          </div>

          <ul className="cenik-list">
            {cenik.map((r) => (
              <li className="cenik-row" key={r.s}>
                <span className="mark" aria-hidden="true" />
                <span className="cenik-service">{r.s}</span>
                <span className="cenik-dots" aria-hidden="true" />
                <span className="cenik-price">{r.p}</span>
              </li>
            ))}
          </ul>

          <p className="note">
            Máme smlouvy se všemi velkými pojišťovnami (VZP, ZPMV, OZP, ČPZP).
            Prevence dvakrát ročně je hrazená z pojištění.
          </p>
        </section>

        <section className="band trust reveal" id="filozofie" aria-labelledby="filozofie-nadpis">
          <div className="trust-grid">
            <div className="trust-main">
              <p className="eyebrow">Naše filozofie</p>
              <h2 id="filozofie-nadpis">
                Malá ordinace, kde vás známe jménem
              </h2>
              <p>
                Nejsme řetězec ani továrna na pacienty. Dvě zubní lékařky a
                dentální hygienistka se v centru Olomouce staráme o rodiny, které
                k nám chodí i po letech. Necháváme si na vás čas, ošetřujeme
                šetrně a moderními materiály — a když se bojíte, o to víc
                vysvětlujeme.
              </p>

              <ul className="promise-list">
                <li className="promise"><span className="mark" aria-hidden="true" />Objednáváme na přesný čas, nečekáte v přeplněné čekárně.</li>
                <li className="promise"><span className="mark" aria-hidden="true" />Cenu za ošetření vždy řekneme dopředu.</li>
                <li className="promise"><span className="mark" aria-hidden="true" />Akutní bolest zubu se u nás snažíme vyřešit ještě týž den.</li>
              </ul>

              <blockquote className="quote">
                „Poprvně v životě jsem u zubaře nebyla nervózní. Všechno mi v
                klidu vysvětlili a vůbec to nebolelo.“
                <cite>— Lenka H., pacientka z Nových Sadů</cite>
              </blockquote>
            </div>

            <div className="trust-cards">
              <div className="card" id="hodiny">
                <h3>Otevírací doba</h3>
                <dl className="hours">
                  {hodiny.map((h) => (
                    <div className="hours-row" key={h.d}>
                      <dt>{h.d}</dt>
                      <dd>{h.h}</dd>
                    </div>
                  ))}
                </dl>
                <p className="card-note">Ve středu ordinujeme i odpoledne pro pracující.</p>
              </div>

              <div className="card card--soft" id="kontakt">
                <h3>Kde nás najdete</h3>
                <p className="card-line">Komenského 8, 779 00 Olomouc</p>
                <p className="card-line">
                  <a href="tel:+420585223344">585 223 344</a>
                </p>
                <p className="card-line">
                  <a href="mailto:recepce@ambulancekomenskeho.cz">recepce@ambulancekomenskeho.cz</a>
                </p>
                <p className="card-note">
                  Zaparkujete zdarma ve dvoře z ulice Komenského, tramvají
                  vystoupíte na zastávce U Dómu.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

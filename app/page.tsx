import type { CSSProperties } from "react";

export default function Page() {
  const fyzicka = [
    "Ostraha průmyslových objektů",
    "Ostraha obchodů a obchodních center",
    "Specializovaná ostraha",
    "Detektivní činnost",
    "Ostraha osob",
  ];
  const elektronicka = [
    "Připojení na pult centralizované ochrany",
    "Dočasná ostraha prostor",
    "Elektronická ostraha objektů",
  ];
  const poradenstvi = [
    "Bezpečnostní projekty na míru",
    "Zajištění BOZP a PO",
    "Poradenská a školicí činnost",
  ];
  const zasah = [
    "Převozy hotovosti a cenin",
    "Převozy luxusního zboží a materiálů",
    "Výjezdové zásahové skupiny",
  ];

  const sluzby = [
    { kod: "F", nadpis: "Fyzická ostraha", body: fyzicka, pop: "Lidé v uniformě na místě — brány, recepce, obchod, osoba." },
    { kod: "E", nadpis: "Elektronická ostraha", body: elektronicka, pop: "Střežíme technikou napojenou na náš pult centralizované ochrany." },
    { kod: "P", nadpis: "Bezpečnostní poradenství", body: poradenstvi, pop: "Nastavíme režim, projekt i školení podle vašeho objektu." },
    { kod: "Z", nadpis: "Zásahové skupiny", body: zasah, pop: "Vyjedeme při poplachu, doprovodíme hotovost i cennosti." },
  ];

  return (
    <main className="ha">
      <header className="ha-nav">
        <a className="ha-mark" href="#" aria-label="Bezpečnostní agentura HB">
          <span className="ha-mark-hb">HB</span>
          <span className="ha-mark-txt">
            Bezpečnostní<br />agentura
          </span>
        </a>
        <nav className="ha-links" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#firma">O firmě</a>
          <a href="tel:+420605907536" className="ha-nav-tel">+420 605 907 536</a>
        </nav>
      </header>

      <section className="ha-hero">
        <img className="ha-hero-img" src="/hero.webp" alt="Pracovník ostrahy Bezpečnostní agentury HB při noční službě v Ostravě" />
        <div className="ha-hero-scrim" aria-hidden="true" />
        <div className="ha-hero-in">
          <p className="ha-eyebrow"><span className="ha-dot" aria-hidden="true" />Pult centralizované ochrany · Ostrava</p>
          <h1 className="ha-h1">
            Někdo musí<br />
            <span className="ha-h1-em">zůstat vzhůru.</span>
          </h1>
          <p className="ha-lead">
            Fyzická i elektronická ostraha, výjezdové skupiny a doprovody hotovosti
            pro firmy i objekty na Ostravsku. Střežíme, když vy nemůžete.
          </p>
          <div className="ha-cta">
            <a className="ha-btn" href="tel:+420605907536">Zavolat dispečink</a>
            <a className="ha-btn ha-btn-ghost" href="#sluzby">Co střežíme</a>
          </div>
        </div>
        <div className="ha-status" role="note">
          <span className="ha-status-led" aria-hidden="true" />
          <span>Dispečink v provozu <strong>24 / 7 / 365</strong></span>
        </div>
      </section>

      <section className="ha-sec" id="sluzby" aria-labelledby="sluzby-h">
        <div className="ha-sec-head">
          <p className="ha-kicker">Rozsah služby</p>
          <h2 className="ha-h2" id="sluzby-h">Čtyři úrovně ochrany</h2>
          <p className="ha-sec-sub">
            Vyberte jednu, nebo je poskládáme do jednoho režimu na míru vašemu objektu.
            Každou zajišťujeme s vlastními proškolenými lidmi a technikou.
          </p>
        </div>

        <div className="ha-grid">
          {sluzby.map((s, i) => (
            <article className="ha-card" key={s.kod} style={{ ["--i" as any]: i } as CSSProperties}>
              <div className="ha-card-top">
                <span className="ha-card-kod" aria-hidden="true">{s.kod}</span>
                <h3 className="ha-card-h">{s.nadpis}</h3>
              </div>
              <p className="ha-card-pop">{s.pop}</p>
              <ul className="ha-card-list">
                {s.body.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <figure className="ha-band">
          <img src="/section-1.webp" alt="Kamerový dohled a monitoring objektu Bezpečnostní agentury HB" />
          <figcaption>
            <span className="ha-band-tag">Elektronická ostraha</span>
            Poplach z čidla máme na pultu do sekund. Zbytek je otázka výjezdu.
          </figcaption>
        </figure>
      </section>

      <section className="ha-sec ha-firma" id="firma" aria-labelledby="firma-h">
        <div className="ha-firma-grid">
          <div className="ha-firma-text">
            <p className="ha-kicker ha-kicker-light">O agentuře</p>
            <h2 className="ha-h2" id="firma-h">Ostravská agentura, která bere směnu vážně</h2>
            <p className="ha-firma-p">
              Jsme flexibilní a vyjdeme vám vstříc — od jednorázové ostrahy akce
              po stálou ochranu průmyslového areálu. Máme dostupné ceny a hlavně
              tým, který si sami školíme a prověřujeme.
            </p>

            <dl className="ha-facts">
              <div className="ha-fact">
                <dt>Zkoušky</dt>
                <dd>Profesní kvalifikace strážného — školíme vlastní i cizí</dd>
              </div>
              <div className="ha-fact">
                <dt>Certifikáty</dt>
                <dd>Doložená odbornost, BOZP a PO v pořádku</dd>
              </div>
              <div className="ha-fact">
                <dt>Kde působíme</dt>
                <dd>Ostrava a Moravskoslezský kraj</dd>
              </div>
            </dl>

            <a className="ha-btn ha-btn-inv" href="mailto:management@bezpecnosthb.cz">Napsat na management@bezpecnosthb.cz</a>
          </div>

          <figure className="ha-firma-fig">
            <img src="/section-2.webp" alt="Tým strážných Bezpečnostní agentury HB připravený k výjezdu" />
            <figcaption>Proškolený tým — prověřený, v uniformě, na místě včas.</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}

import React from "react";

const services = [
  { code: "P0", name: "Autodiagnostika", note: "Načtení chybových kódů z řídicí jednotky a výklad, co znamenají." },
  { code: "01", name: "3D geometrie kol", note: "Přesné seřízení sbíhavosti a odklonu, ať auto nedře gumy." },
  { code: "02", name: "Regenerace DPF/FAP", note: "Renovace ucpaného filtru pevných částic bez výměny za nový." },
  { code: "03", name: "Servis a oprava brzd", note: "Kotouče, destičky, kapalina — zkontrolujeme celý okruh." },
  { code: "04", name: "Oprava motorů", note: "Od rozvodů po hlavu válců. Řekneme reálný rozsah práce." },
  { code: "05", name: "Výměna olejů a kapalin", note: "Motorový olej, chladicí i brzdová kapalina podle předpisu." },
  { code: "06", name: "Plnění klimatizace", note: "Doplnění chladiva a kontrola těsnosti okruhu." },
  { code: "07", name: "Čištění ozonem", note: "Hloubkové odstranění pachů z interiéru a klimatizace." },
  { code: "08", name: "Příprava na STK", note: "Projedeme vozidlo dřív, než to udělá stanice technické kontroly." },
];

export default function Page() {
  return (
    <main>
      <header className="k-top">
        <div className="k-top-inner">
          <a className="k-mark" href="#">
            KRÖHN<b>.</b><span>Autoservis · Ostrava</span>
          </a>
          <div className="k-top-meta">
            <div>Po–Pá <strong>8:00–17:00</strong></div>
            <div>Edisonova 1668/8, <strong>Ostrava-Hrabůvka</strong></div>
          </div>
          <a className="k-call" href="tel:+420731731370">Zavolat 731 731 370</a>
        </div>
      </header>

      <section className="k-hero">
        <div className="k-hero-media">
          <img src="/hero.webp" alt="Diagnostika vozidla v Autoservisu Kröhn v Ostravě" />
        </div>
        <div className="k-hero-inner">
          <div className="k-eyebrow">Diagnostika vozidel · Ostrava-Hrabůvka</div>
          <h1 className="k-h1">
            Nejdřív zjistíme,
            <em>co vozu opravdu chybí.</em>
          </h1>

          <div className="k-readout" role="group" aria-label="Ukázka diagnostického protokolu">
            <div className="k-readout-head">
              <span><i className="k-dot" aria-hidden="true" />Diagnostický protokol · OBD-II</span>
              <span>KRÖHN</span>
            </div>
            <ul>
              <li><span className="code">01</span><span className="name">Řídicí jednotka motoru</span><span className="stat ok">V pořádku</span></li>
              <li><span className="code">02</span><span className="name">Tlak ve filtru DPF</span><span className="stat watch">Ke sledování</span></li>
              <li><span className="code">03</span><span className="name">Snímač NOx</span><span className="stat fault">Chyba P229F</span></li>
              <li><span className="code">04</span><span className="name">Brzdový okruh</span><span className="stat ok">V pořádku</span></li>
            </ul>
          </div>

          <div className="k-hero-cta">
            <a className="k-btn k-btn-primary" href="tel:+420731731370">Objednat na diagnostiku</a>
            <a className="k-btn k-btn-ghost" href="#sluzby">Prohlédnout služby</a>
          </div>
        </div>
      </section>

      <section className="k-sec" id="sluzby">
        <div className="k-wrap">
          <div className="k-sec-head">
            <div>
              <div className="k-kicker">Co u nás vyřešíte</div>
              <h2 className="k-sec-title">Kompletní auto i pneuservis pod jednou střechou</h2>
            </div>
            <p className="k-sec-note">Začínáme diagnostikou, protože bez ní se hádá. Teprve pak řekneme, co má smysl opravit — a co ne.</p>
          </div>

          <div className="k-grid">
            {services.map((s) => (
              <article className="k-card" key={s.code} tabIndex={0}>
                <div className="k-card-idx">{s.code}</div>
                <div className="bar" aria-hidden="true" />
                <h3>{s.name}</h3>
                <p>{s.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="k-sec" id="onas" style={{ borderBottom: "none" }}>
        <div className="k-wrap">
          <div className="k-sec-head">
            <div>
              <div className="k-kicker">Proč Kröhn</div>
              <h2 className="k-sec-title">Cena odpovídá práci. Žádná překvapení na faktuře.</h2>
            </div>
            <p className="k-sec-note">Rodinný autoservis v Ostravě-Hrabůvce. Řekneme rovnou, co vůz potřebuje teď a co počká.</p>
          </div>

          <div className="k-about">
            <div className="k-about-img">
              <img src="/section-1.webp" alt="Mechanik Autoservisu Kröhn při práci na voze" />
            </div>
            <div className="k-about-body">
              <p className="k-lede">Hledáte v Ostravě servis, kde cena za opravu reálně odpovídá kvalitě práce a přitom nezatíží rodinný rozpočet? To je přesně naše parketa.</p>
              <p>Než na cokoli sáhneme, přečteme si vůz diagnostikou. Zákazník tak předem ví, co ho čeká, kolik to bude stát a proč. Nic se „nenajde“ až po rozdělání.</p>
              <ol className="k-steps">
                <li><span className="n">1</span><span><b>Napište nám</b><small>Popište závadu — nejlépe i s tím, kdy a jak se projevuje.</small></span></li>
                <li><span className="n">2</span><span><b>Přiložte fotku</b><small>Rozsvícená kontrolka nebo místo úniku nám ušetří dohady.</small></span></li>
                <li><span className="n">3</span><span><b>Zavoláme zpátky</b><small>Domluvíme termín a řekneme odhad rozsahu i ceny.</small></span></li>
              </ol>
            </div>
          </div>

          <div className="k-facts">
            <div className="k-fact"><b>12</b><span>oborů servisu</span></div>
            <div className="k-fact"><b>OBD-II</b><span>diagnostika každé zakázky</span></div>
            <div className="k-fact"><b>Po–Pá</b><span>8:00–17:00</span></div>
            <div className="k-fact"><b>Hrabůvka</b><span>Edisonova 1668/8</span></div>
          </div>
        </div>
      </section>
    </main>
  );
}

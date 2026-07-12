import React from "react";

const sluzby = [
  {
    kod: "A",
    nazev: "Ekonomická správa",
    popis:
      "Předpis a evidence záloh, vyúčtování služeb, upomínky dlužníků, roční účetní závěrka domu i podklady pro shromáždění vlastníků.",
    body: ["Vyúčtování služeb do 30. 4.", "Evidence a vymáhání pohledávek", "Fond oprav pod kontrolou"],
  },
  {
    kod: "B",
    nazev: "Technická správa",
    popis:
      "Pravidelné revize výtahů, plynu, elektro a hasicích přístrojů, odečty měřidel, zajištění řemeslníků a dohled nad opravami.",
    body: ["Hlídání termínů revizí", "Prověření dodavatelé", "Zápisy z prohlídek domu"],
  },
  {
    kod: "C",
    nazev: "Havarijní služba",
    popis:
      "Prasklá stoupačka v neděli večer? Jedno telefonní číslo, které bere 24 hodin denně, 7 dní v týdnu, po celé Ostravě.",
    body: ["Nonstop dispečink", "Výjezd do 60 minut", "Voda, topení, elektro"],
  },
  {
    kod: "D",
    nazev: "Právní a organizační servis",
    popis:
      "Příprava a vedení shromáždění SVJ, hlasování per rollam, smlouvy s dodavateli a zastupování domu v běžné agendě.",
    body: ["Svolání a vedení schůzí", "Zápisy a usnesení", "Smluvní agenda"],
  },
];

export default function Page() {
  return (
    <main className="sdf">
      <header className="sdf-top">
        <a className="sdf-mark" href="#" aria-label="Správa domovního fondu, domovská stránka">
          <span className="sdf-mark-key" aria-hidden="true">SDF</span>
          <span className="sdf-mark-full">Správa domovního fondu</span>
        </a>
        <a className="sdf-call" href="tel:+420731505771">
          <span className="sdf-call-label">Bereme to nonstop</span>
          <span className="sdf-call-num">731&nbsp;505&nbsp;771</span>
        </a>
      </header>

      <section className="sdf-hero" aria-labelledby="hero-title">
        <div className="sdf-hero-media">
          <img
            src="/hero.webp"
            alt="Bytový dům ve správě v Ostravě, pohled na vchod a fasádu"
            className="sdf-hero-img"
          />
        </div>
        <div className="sdf-hero-panel">
          <p className="sdf-eyebrow">Ostrava &amp; okolí · od roku 1998</p>
          <h1 id="hero-title" className="sdf-hero-title">
            Váš dům<br />
            do našich<br />
            <span className="sdf-hl">rukou.</span>
          </h1>
          <p className="sdf-hero-lead">
            Vedeme účetnictví domu, hlídáme revize, sháníme řemeslníky a bereme
            telefon, když v noci praskne stoupačka. Vy máte klid, dům má pořádek.
          </p>
          <div className="sdf-hero-actions">
            <a className="sdf-btn" href="tel:+420731505771">Zavolat 731&nbsp;505&nbsp;771</a>
            <a className="sdf-btn sdf-btn-ghost" href="mailto:info@spravadomovnihofondu.cz">
              Napsat e-mail
            </a>
          </div>
        </div>

        <dl className="sdf-ledger" aria-label="Čísla o naší správě">
          <div className="sdf-ledger-row">
            <dt>Domů ve správě</dt>
            <dd>140+</dd>
          </div>
          <div className="sdf-ledger-row">
            <dt>Let na trhu</dt>
            <dd>26</dd>
          </div>
          <div className="sdf-ledger-row">
            <dt>Havarijní linka</dt>
            <dd>24/7</dd>
          </div>
        </dl>
      </section>

      <section className="sdf-services" aria-labelledby="services-title">
        <div className="sdf-sec-head">
          <p className="sdf-eyebrow sdf-eyebrow-dark">Co pro dům děláme</p>
          <h2 id="services-title" className="sdf-sec-title">
            Čtyři sloupce správy,<br /> jedna dvojka na obálce.
          </h2>
          <p className="sdf-sec-lead">
            Ať jste výbor SVJ, předseda družstva nebo majitel činžovního domu,
            přebíráme agendu, kterou nikdo nechce dělat po večerech.
          </p>
        </div>

        <ol className="sdf-cards">
          {sluzby.map((s) => (
            <li className="sdf-card" key={s.kod}>
              <span className="sdf-card-kod" aria-hidden="true">{s.kod}</span>
              <h3 className="sdf-card-title">{s.nazev}</h3>
              <p className="sdf-card-text">{s.popis}</p>
              <ul className="sdf-card-list">
                {s.body.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="sdf-trust" aria-labelledby="trust-title">
        <div className="sdf-trust-media">
          <img
            src="/section-1.webp"
            alt="Tým Správy domovního fondu při kontrolní prohlídce domu"
            className="sdf-trust-img"
          />
          <img
            src="/section-2.webp"
            alt="Detail dokumentace a klíčů při předání správy domu"
            className="sdf-trust-img sdf-trust-img-b"
          />
        </div>
        <div className="sdf-trust-body">
          <p className="sdf-eyebrow sdf-eyebrow-dark">Proč nám domy věří</p>
          <h2 id="trust-title" className="sdf-sec-title">
            Správce, kterého<br /> znáte jménem.
          </h2>
          <p className="sdf-trust-lead">
            Nejsme call centrum. Každý dům má u nás konkrétního správce, který zná
            jeho stoupačky, sousedské spory i termín příští revize výtahu. Sídlíme
            v Ostravě a jsme tu, kde jsou vaše domy.
          </p>

          <ul className="sdf-facts">
            <li>
              <strong>Jasné vyúčtování.</strong> Dostanete přehled, kterému
              rozumí i ten, kdo účetnictví nikdy nedělal.
            </li>
            <li>
              <strong>Vlastní údržba SDF Servis.</strong> Drobné opravy zvládneme
              sami, na velké máme prověřené partnery.
            </li>
            <li>
              <strong>Bez ztraceného telefonátu.</strong> Voláte člověku, ne
              lince — a on zavolá zpátky.
            </li>
          </ul>

          <div className="sdf-hours" aria-label="Otevírací doba kanceláře">
            <p className="sdf-hours-title">Kancelář v Ostravě</p>
            <table className="sdf-hours-table">
              <tbody>
                <tr>
                  <th scope="row">Pondělí</th>
                  <td>8:00–9:00 bez objednání · 10:00–17:00 objednaní</td>
                </tr>
                <tr>
                  <th scope="row">Středa</th>
                  <td>8:00–9:00 bez objednání · 10:00–17:00 objednaní</td>
                </tr>
                <tr>
                  <th scope="row">Út · Čt · Pá</th>
                  <td>Telefon a e-mail 9:00–15:00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}

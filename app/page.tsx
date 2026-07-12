import React from "react";

const sluzby = [
  {
    kod: "01",
    nazev: "Vedení účetnictví domu",
    popis:
      "Roční vyúčtování služeb, evidence plateb do fondu oprav, přehled dlužníků a podklady pro schůzi. Vlastníci vidí, kde stojí každá koruna.",
  },
  {
    kod: "02",
    nazev: "Technická správa a údržba",
    popis:
      "Revize výtahů, hasicích přístrojů a plynu hlídáme za vás. Domlouváme řemeslníky, hlídáme termíny a přebíráme provedenou práci.",
  },
  {
    kod: "03",
    nazev: "Havárie 24 hodin",
    popis:
      "Prasklá stoupačka o víkendu nebo výpadek výtahu v noci — jeden telefon a řešíme. Máme prověřené havarijní partnery po celé Ostravě.",
  },
  {
    kod: "04",
    nazev: "Právní a organizační servis",
    popis:
      "Svoláme shromáždění vlastníků, zapíšeme usnesení, ohlídáme lhůty na katastru a vymáhání pohledávek. Papírování zůstává u nás.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="top">
        <a className="wordmark" href="#" aria-label="Správa domovního fondu, domů">
          <span className="wordmark-mark" aria-hidden="true">
            <span className="floor floor-3" />
            <span className="floor floor-2" />
            <span className="floor floor-1" />
          </span>
          <span className="wordmark-text">
            <strong>Domovní&nbsp;fond</strong>
            <em>správa nemovitostí · Ostrava</em>
          </span>
        </a>
        <nav className="top-nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#duvera">O nás</a>
          <a className="top-call" href="tel:+420731505771">
            731&nbsp;505&nbsp;771
          </a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Váš dům do našich rukou</p>
          <h1 id="hero-title">
            Staráme se o&nbsp;domy, ve&nbsp;kterých se{" "}
            <span className="hl">v Ostravě bydlí</span>.
          </h1>
          <p className="hero-lead">
            Od účetnictví přes revize výtahů až po havárii ve tři ráno. Vlastníci
            i&nbsp;družstva v&nbsp;nás mají jednoho partnera pro celý dům — a&nbsp;jeden
            přehledný účet, kde je vidět každá koruna z&nbsp;fondu oprav.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420731505771">
              Zavolat 731&nbsp;505&nbsp;771
            </a>
            <a className="btn btn-ghost" href="mailto:info@spravadomovnihofondu.cz">
              Napsat e-mail
            </a>
          </div>
          <dl className="hero-facts">
            <div>
              <dt>V péči</dt>
              <dd>domy po celé Ostravě</dd>
            </div>
            <div>
              <dt>Havárie</dt>
              <dd>nonstop, i o víkendu</dd>
            </div>
            <div>
              <dt>Bez objednávky</dt>
              <dd>Po a St, 8–9&nbsp;h</dd>
            </div>
          </dl>
        </div>
        <figure className="hero-figure">
          <img
            src="/hero.webp"
            alt="Bytový dům v Ostravě, o který pečuje správa domovního fondu"
            width={720}
            height={900}
            loading="eager"
          />
          <figcaption>Jeden správce pro celý dům — od sklepa po střechu.</figcaption>
        </figure>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-title">
        <div className="section-head">
          <p className="eyebrow">Co pro dům zajišťujeme</p>
          <h2 id="sluzby-title">Čtyři patra jedné správy</h2>
          <p className="section-note">
            Nemusíte skládat řemeslníky, účetní a právníka dohromady sami. Vezmeme si
            na starost všechna „patra“ provozu domu — a&nbsp;vy schvalujete, ne řešíte.
          </p>
        </div>

        <div className="sluzby-grid">
          <ol className="sluzby-list">
            {sluzby.map((s) => (
              <li key={s.kod} className="sluzba">
                <span className="sluzba-kod" aria-hidden="true">
                  {s.kod}
                </span>
                <div className="sluzba-body">
                  <h3>{s.nazev}</h3>
                  <p>{s.popis}</p>
                </div>
              </li>
            ))}
          </ol>
          <figure className="sluzby-figure">
            <img
              src="/section-1.webp"
              alt="Detail technické správy a údržby bytového domu"
              width={640}
              height={720}
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      <section className="duvera" id="duvera" aria-labelledby="duvera-title">
        <figure className="duvera-figure">
          <img
            src="/section-2.webp"
            alt="Tým správy domovního fondu při jednání s vlastníky bytů"
            width={640}
            height={720}
            loading="lazy"
          />
        </figure>
        <div className="duvera-copy">
          <p className="eyebrow">Proč nám dům svěřit</p>
          <h2 id="duvera-title">Ostravu známe dům od domu</h2>
          <p>
            Správa domovního fondu, s.r.o. spolu s&nbsp;SDF SERVIS s.r.o. spravuje bytové
            domy, SVJ i&nbsp;družstva v&nbsp;Ostravě. Nejsme call centrum odjinud —
            revizního technika i&nbsp;instalatéra znáte jménem a&nbsp;víme, kde v&nbsp;domě
            vede která stoupačka.
          </p>
          <ul className="duvera-points">
            <li>
              <strong>Přehled místo šanonů.</strong> Platby, revize i&nbsp;faktury
              vedeme na jednom místě a&nbsp;kdykoli je ukážeme výboru.
            </li>
            <li>
              <strong>Termíny hlídáme za vás.</strong> Revize výtahu, plynu i&nbsp;kotle
              hlásíme dopředu, ne až po propadlé lhůtě.
            </li>
            <li>
              <strong>Jednáme za dům.</strong> Svoláme shromáždění, sepíšeme zápis
              a&nbsp;dořešíme dlužníky i&nbsp;pojistné události.
            </li>
          </ul>

          <div className="hodiny" aria-label="Kdy nás zastihnete">
            <p className="hodiny-title">Kdy nás zastihnete</p>
            <ul>
              <li>
                <span>Pondělí</span>
                <span>8–9 bez objednávky · 10–17 objednaní</span>
              </li>
              <li>
                <span>Středa</span>
                <span>8–9 bez objednávky · 10–17 objednaní</span>
              </li>
              <li>
                <span>Út a Čt</span>
                <span>9–15 telefon a e-mail</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

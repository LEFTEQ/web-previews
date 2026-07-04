import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mgr. Dušan Petrlík, advokát — vymáhání pohledávek a oddlužení | České Budějovice",
  description:
    "Advokátní kancelář Mgr. Dušana Petrlíka v Českých Budějovicích. Specializace na vymáhání pohledávek a insolvenční právo (oddlužení). Zápis ČAK č. 13637.",
};

const oblasti = [
  {
    cislo: "§ 1",
    nazev: "Vymáhání pohledávek",
    popis:
      "Naše hlavní specializace. Od upomínky přes žalobu až po zastoupení v exekuci — postaráme se, aby dlužné peníze doputovaly zpět k vám.",
    znaceni: "Specializace kanceláře",
  },
  {
    cislo: "§ 2",
    nazev: "Insolvence a oddlužení",
    popis:
      "Provedeme vás oddlužením fyzických osob od prvního výpočtu splátek až po osvobození od dluhů. Podrobnosti také na oddluzeni-cb.cz.",
    znaceni: "Specializace kanceláře",
  },
  {
    cislo: "§ 3",
    nazev: "Nemovitosti a smlouvy",
    popis:
      "Kupní a darovací smlouvy, věcná břemena, převody bytů a pozemků. Připravíme listiny tak, aby v katastru prošly bez zádrhelů.",
    znaceni: "Občanské právo",
  },
  {
    cislo: "§ 4",
    nazev: "Obchodní právo",
    popis:
      "Zakládání a změny obchodních společností, závazkové vztahy, obchodní smlouvy. Právní jistota pro váš byznys.",
    znaceni: "Právo společností",
  },
  {
    cislo: "§ 5",
    nazev: "Rodinné právo",
    popis:
      "Rozvody, péče o děti, výživné a vypořádání majetku. Citlivé věci řešíme věcně a s ohledem na to, co je pro vás důležité.",
    znaceni: "Občanské právo",
  },
  {
    cislo: "§ 6",
    nazev: "Zastupování před soudy",
    popis:
      "Žaloby, odvolání a další podání. Zastoupíme vás před soudy i správními orgány a povedeme spor od začátku do konce.",
    znaceni: "Sporná agenda",
  },
];

const postup = [
  {
    krok: "01",
    nazev: "Nezávazná konzultace",
    popis:
      "Zavolejte nebo napište. Vyslechneme si věc, řekneme rovnou, jak stojíte, a co má a nemá smysl.",
  },
  {
    krok: "02",
    nazev: "Strategie a cena",
    popis:
      "Navrhneme postup a dopředu se domluvíme na odměně. Žádná překvapení na konci.",
  },
  {
    krok: "03",
    nazev: "Řešení věci",
    popis:
      "Sepíšeme listiny, podáme, jednáme a zastupujeme vás — od upomínky až po vymožené peníze nebo osvobození od dluhů.",
  },
];

export default function Page() {
  return (
    <main className="ak">
      <header className="ak-nav" aria-label="Hlavní">
        <a className="ak-mark" href="#uvod" aria-label="Mgr. Dušan Petrlík, advokát — úvod">
          <span className="ak-mark-glyph" aria-hidden="true">§</span>
          <span className="ak-mark-name">
            <span className="ak-mark-line1">Petrlík</span>
            <span className="ak-mark-line2">advokát · České Budějovice</span>
          </span>
        </a>
        <nav className="ak-nav-links">
          <a href="#oblasti">Právní oblasti</a>
          <a href="#kancelar">Kancelář</a>
          <a className="ak-nav-cta" href="tel:+420776625970">Zavolat</a>
        </nav>
      </header>

      <section className="ak-hero" id="uvod">
        <img
          className="ak-hero-img"
          src="/hero.webp"
          alt="Advokátní kancelář Mgr. Dušana Petrlíka v Českých Budějovicích"
          width={1600}
          height={1000}
        />
        <div className="ak-hero-veil" aria-hidden="true" />
        <div className="ak-hero-inner">
          <p className="ak-hero-eyebrow">ČAK č. 13637 · Mánesova 11, České Budějovice</p>
          <h1 className="ak-hero-title">
            Dlužník mlčí.<br />
            <span className="ak-hero-accent">My ne.</span>
          </h1>
          <p className="ak-hero-lead">
            Advokátní kancelář Mgr. Dušana Petrlíka. Specializujeme se na
            vymáhání pohledávek a oddlužení — vezmeme si vaši věc za svou
            a dotáhneme ji do konce.
          </p>
          <div className="ak-hero-actions">
            <a className="ak-btn ak-btn-primary" href="tel:+420776625970">
              Zavolat 776 625 970
            </a>
            <a className="ak-btn ak-btn-ghost" href="#oblasti">
              Právní oblasti
            </a>
          </div>
          <dl className="ak-hero-facts">
            <div>
              <dt>Zápis v ČAK</dt>
              <dd>č. 13637</dd>
            </div>
            <div>
              <dt>Sídlo</dt>
              <dd>České Budějovice</dd>
            </div>
            <div>
              <dt>Kontakt do</dt>
              <dd>24 hodin</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="ak-oblasti" id="oblasti" aria-labelledby="oblasti-nadpis">
        <div className="ak-section-head">
          <p className="ak-section-kicker">Právní oblasti</p>
          <h2 id="oblasti-nadpis" className="ak-section-title">
            Kde vám dokážeme pomoct
          </h2>
          <p className="ak-section-note">
            Poskytujeme komplexní právní servis. Nejsilnější jsme tam, kde jde
            o peníze a dluhy — vymáhání pohledávek a insolvenci.
          </p>
        </div>
        <ul className="ak-grid">
          {oblasti.map((o) => (
            <li className="ak-card" key={o.cislo}>
              <span className="ak-card-num" aria-hidden="true">
                {o.cislo}
              </span>
              <span className="ak-card-tag">{o.znaceni}</span>
              <h3 className="ak-card-title">{o.nazev}</h3>
              <p className="ak-card-text">{o.popis}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="ak-kancelar" id="kancelar" aria-labelledby="kancelar-nadpis">
        <div className="ak-kancelar-grid">
          <div className="ak-kancelar-media">
            <img
              src="/section-1.webp"
              alt="Mgr. Dušan Petrlík, advokát v Českých Budějovicích"
              width={900}
              height={1100}
            />
          </div>
          <div className="ak-kancelar-body">
            <p className="ak-section-kicker">Kancelář</p>
            <h2 id="kancelar-nadpis" className="ak-section-title">
              Advokát, který mluví lidsky
            </h2>
            <p className="ak-kancelar-lead">
              Právo neděláme kvůli paragrafům, ale kvůli výsledku. Mgr. Dušan
              Petrlík je zapsán v seznamu České advokátní komory pod č. 13637.
              U nás vám nikdo neřekne „to nejde“, aniž by dodal, co jde.
            </p>
            <p className="ak-kancelar-lead">
              Spolupracujeme s exekutory, notáři a soudními znalci různých
              oborů, takže vaši věc pokryjeme od začátku do konce na jednom
              místě.
            </p>

            <ol className="ak-postup">
              {postup.map((p) => (
                <li className="ak-postup-item" key={p.krok}>
                  <span className="ak-postup-num" aria-hidden="true">
                    {p.krok}
                  </span>
                  <div>
                    <h3 className="ak-postup-title">{p.nazev}</h3>
                    <p className="ak-postup-text">{p.popis}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="ak-kontakt-karta">
              <img
                className="ak-kontakt-img"
                src="/section-2.webp"
                alt="Sídlo kanceláře na Mánesově ulici v Českých Budějovicích"
                width={800}
                height={520}
              />
              <dl className="ak-kontakt-list">
                <div>
                  <dt>Adresa</dt>
                  <dd>Mánesova 11/3b, 370 01 České Budějovice</dd>
                </div>
                <div>
                  <dt>Telefon / WhatsApp</dt>
                  <dd>
                    <a href="tel:+420776625970">+420 776 625 970</a>
                  </dd>
                </div>
                <div>
                  <dt>E-mail</dt>
                  <dd>
                    <a href="mailto:petrlik@ak-petrlik.cz">
                      petrlik@ak-petrlik.cz
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>Datová schránka</dt>
                  <dd>hyugmqh</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

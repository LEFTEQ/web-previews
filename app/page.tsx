import type { CSSProperties } from "react";

export const metadata = {
  title: "JUDr. Martina Švejdová — advokátka v Pardubicích",
  description:
    "Advokátní kancelář JUDr. Martiny Švejdové v centru Pardubic. Rodinné, občanské, dědické, pracovní i trestní právo. Osobní přístup, jasná domluva o odměně.",
};

const oblasti = [
  {
    cislo: "§ 01",
    nazev: "Rodinné právo",
    popis:
      "Rozvod, péče o děti a výživné, vypořádání společného jmění. Provedu Vás rozhodnutími, která se dělají jednou za život, s klidem a bez zbytečného konfliktu.",
  },
  {
    cislo: "§ 02",
    nazev: "Dědické právo",
    popis:
      "Dědické řízení, závěti a vydědění, spory mezi dědici. Poradím, jak majetek uspořádat dopředu, aby po Vás nezůstaly hádky.",
  },
  {
    cislo: "§ 03",
    nazev: "Právo nemovitostí",
    popis:
      "Kupní a darovací smlouvy, věcná břemena, advokátní úschova kupní ceny. Převod bytu i domu ošetřím tak, aby o peníze ani nemovitost nešlo přijít.",
  },
  {
    cislo: "§ 04",
    nazev: "Občanské právo",
    popis:
      "Smlouvy, náhrada škody, sousedské a spotřebitelské spory. Řeknu Vám rovnou, kdy se vyplatí soud a kdy je lepší se dohodnout.",
  },
  {
    cislo: "§ 05",
    nazev: "Pracovní právo",
    popis:
      "Neplatná výpověď, nevyplacená mzda, odstupné. Zastupuji zaměstnance i zaměstnavatele — vždy jen jednu stranu sporu.",
  },
  {
    cislo: "§ 06",
    nazev: "Obchodní a insolvenční právo",
    popis:
      "Zakládání firem, obchodní smlouvy, vymáhání pohledávek a oddlužení. Praktická právní opora pro podnikání i cestu z dluhů.",
  },
];

const pilire = [
  {
    stitek: "Jeden právník",
    text: "Od první schůzky až k rozsudku jednáte pořád se mnou, ne se stážistou. Vím, co je ve Vašem spisu.",
  },
  {
    stitek: "Cena předem",
    text: "Odměnu si domluvíme na začátku — hodinově, nebo pevnou částkou za celou věc. Žádné překvapení ve faktuře.",
  },
  {
    stitek: "V centru Pardubic",
    text: "Kancelář v ulici Svaté Anežky České, pár kroků od Zelené brány. Osobní schůzka, ne jen e‑maily.",
  },
];

export default function Page() {
  return (
    <main className="ak">
      <header className="ak-top">
        <a className="ak-brand" href="#uvod" aria-label="JUDr. Martina Švejdová, advokátka — úvod">
          <span className="ak-brand-mark" aria-hidden="true">§</span>
          <span className="ak-brand-name">
            <span className="ak-brand-line1">Martina Švejdová</span>
            <span className="ak-brand-line2">advokátní kancelář · Pardubice</span>
          </span>
        </a>
        <nav className="ak-nav" aria-label="Hlavní navigace">
          <a href="#oblasti">Právní oblasti</a>
          <a href="#omne">O mně</a>
          <a className="ak-nav-call" href="tel:+420605880822">
            Zavolat 605 880 822
          </a>
        </nav>
      </header>

      <section className="ak-hero" id="uvod">
        <div className="ak-hero-text">
          <p className="ak-eyebrow">JUDr. Martina Švejdová · advokátka</p>
          <h1 className="ak-hero-title">
            Najdeme společně
            <br />
            a včas východisko
            <br />
            <em>z Vašich problémů.</em>
          </h1>
          <p className="ak-hero-lead">
            Advokátní kancelář v centru Pardubic. Vezmu si Váš případ osobně —
            vysvětlím, jak to celé bude probíhat, kolik to bude stát a co pro Vás
            udělám ještě dnes.
          </p>
          <div className="ak-hero-actions">
            <a className="ak-btn ak-btn-primary" href="tel:+420605880822">
              Zavolat 605 880 822
            </a>
            <a className="ak-btn ak-btn-ghost" href="mailto:svejdova@aksvejdova.cz">
              Napsat e‑mail
            </a>
          </div>
          <dl className="ak-hero-facts">
            <div>
              <dt>Adresa</dt>
              <dd>Svaté Anežky České 32, 530 02 Pardubice</dd>
            </div>
            <div>
              <dt>Osobní konzultace</dt>
              <dd>po telefonické domluvě</dd>
            </div>
          </dl>
        </div>
        <figure className="ak-hero-figure">
          <img
            src="/hero.webp"
            alt="Pracovna advokátní kanceláře JUDr. Martiny Švejdové v Pardubicích"
            className="ak-hero-img"
            width={880}
            height={1040}
          />
          <figcaption className="ak-hero-cap">
            Kancelář · Svaté Anežky České, Pardubice
          </figcaption>
        </figure>
      </section>

      <section className="ak-oblasti" id="oblasti" aria-labelledby="oblasti-nadpis">
        <div className="ak-section-head">
          <p className="ak-eyebrow">Právní oblasti</p>
          <h2 id="oblasti-nadpis" className="ak-h2">
            Šest oblastí, ve kterých Vás zastoupím
          </h2>
          <p className="ak-section-note">
            Nezáleží, jestli řešíte rozvod, dědictví po rodičích, nebo prodej
            bytu — každou věc beru jako jednu konkrétní situaci, ne jako
            paragraf. Vyberte, co se týká Vás.
          </p>
        </div>
        <ol className="ak-grid">
          {oblasti.map((o) => (
            <li className="ak-card" key={o.cislo}>
              <span className="ak-card-num" aria-hidden="true">
                {o.cislo}
              </span>
              <h3 className="ak-card-title">{o.nazev}</h3>
              <p className="ak-card-text">{o.popis}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="ak-omne" id="omne" aria-labelledby="omne-nadpis">
        <figure className="ak-omne-figure">
          <img
            src="/section-1.webp"
            alt="JUDr. Martina Švejdová při práci ve své advokátní kanceláři"
            className="ak-omne-img"
            width={760}
            height={900}
          />
        </figure>
        <div className="ak-omne-text">
          <p className="ak-eyebrow">O mně</p>
          <h2 id="omne-nadpis" className="ak-h2">
            S kým vlastně budete jednat
          </h2>
          <p className="ak-omne-lead">
            Jsem advokátka zapsaná v seznamu České advokátní komory a už řadu let
            vedu vlastní kancelář v Pardubicích. Klienty neberu na běžícím pásu —
            proto vím, jak Váš případ stojí, když se ozvete potřetí.
          </p>
          <div className="ak-pilire">
            {pilire.map((p) => (
              <div className="ak-pilir" key={p.stitek}>
                <h3 className="ak-pilir-title">{p.stitek}</h3>
                <p className="ak-pilir-text">{p.text}</p>
              </div>
            ))}
          </div>
          <figure className="ak-cite">
            <blockquote>
              „Klientovi musí být po první schůzce jasné, co ho čeká a kolik to
              bude stát. Bez toho není důvěra.“
            </blockquote>
            <figcaption>— JUDr. Martina Švejdová</figcaption>
          </figure>
          <img
            src="/section-2.webp"
            alt="Detail podpisu smlouvy v advokátní kanceláři v Pardubicích"
            className="ak-omne-img-2"
            width={760}
            height={480}
          />
        </div>
      </section>
    </main>
  );
}

export const dynamic = "force-static";

// (typ importován pro budoucí rozšíření, ponecháno kvůli přehlednosti)
void (0 as unknown as CSSProperties);

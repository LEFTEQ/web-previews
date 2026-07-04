import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Icbreality — pronájem a prodej nemovitostí v centru Brna",
  description:
    "Realitní kancelář se sídlem na Václavské 6 ve Starém Brně. Až 300 jednotek na jednom místě, komerční prostory, parkovací stání a investiční nemovitosti v samém srdci Brna.",
};

const nabidka = [
  {
    kod: "01",
    stitek: "Bydlení",
    nazev: "Pronájem jednotek",
    text: "Zařízené jednotky všech velikostí u Mendlova náměstí a na Vídeňské. Pro studenty, páry, young professionals i firmy — od jednoho semestru po dlouhodobý pronájem.",
    pro: ["Studenti a Erasmus", "Young professionals", "Firmy a agentury"],
  },
  {
    kod: "02",
    stitek: "Byznys",
    nazev: "Komerční prostory",
    text: "Kanceláře, obchody na uliční frontě, showroomy, gastro provozy i sklady. Ať potřebujete sídlo firmy nebo malou kancelář, aktuální nabídku pošleme obratem.",
    pro: ["Kanceláře a obchody", "Showroom a gastro", "Sklady a plochy"],
  },
  {
    kod: "03",
    stitek: "Auto",
    nazev: "Parkovací stání",
    text: "Krátkodobý i výhodný dlouhodobý vjezd do areálu mezi Mendlovým náměstím a Hybešovou. Kousek od Sv. Anny, BVV, Rondа i Starobrněnského pivovaru.",
    pro: ["Krátkodobý vjezd", "Dlouhodobé stání", "Centrum na dosah"],
  },
  {
    kod: "04",
    stitek: "Investice",
    nazev: "Prodej a investice",
    text: "Prodej realit z vlastního portfolia s kompletním servisem. Hledáme také zajímavé příležitosti — pozemky, činžovní domy, komerční budovy. Máte nabídku? Ozvěte se.",
    pro: ["Prodej s plným servisem", "Pozemky a činžáky", "Investiční příležitosti"],
  },
];

export default function Page() {
  return (
    <main className="ic">
      <header className="ic-nav" aria-label="Hlavní">
        <a className="ic-mark" href="#" aria-label="Icbreality — domů">
          <span className="ic-mark__i">icb</span>
          <span className="ic-mark__r">reality</span>
        </a>
        <nav className="ic-nav__links">
          <a href="#nabidka">Nabídka</a>
          <a href="#onas">O nás</a>
          <a className="ic-nav__tel" href="tel:+420605229922">605 229 922</a>
        </nav>
      </header>

      <section className="ic-hero" aria-labelledby="hero-h">
        <div className="ic-hero__grid" aria-hidden="true">
          {Array.from({ length: 300 }).map((_, i) => (
            <span key={i} className={`ic-cell ${lit.has(i) ? "is-lit" : ""}`} />
          ))}
        </div>
        <div className="ic-hero__inner">
          <p className="ic-eyebrow">Václavská 6 · Staré Brno</p>
          <h1 id="hero-h" className="ic-hero__title">
            <span className="ln">Až</span>
            <span className="ln ic-huge">300</span>
            <span className="ln">jednotek</span>
            <span className="ln ic-thin">na jednom místě v centru Brna.</span>
          </h1>
          <p className="ic-hero__lede">
            Bydlení, kanceláře, parkování i investice — celé portfolio spravujeme
            sami, pár minut od Mendlova náměstí. Zavolejte, do večera víte, co je
            volné.
          </p>
          <div className="ic-hero__cta">
            <a className="ic-btn" href="tel:+420605229922">Zavolat 605 229 922</a>
            <a className="ic-btn ic-btn--ghost" href="#nabidka">
              Prohlédnout nabídku
            </a>
          </div>
        </div>
      </section>

      <section className="ic-sec" id="nabidka" aria-labelledby="nab-h">
        <div className="ic-sec__head">
          <h2 id="nab-h">Co u nás najdete</h2>
          <p>
            Čtyři cesty, jak s námi bydlet nebo podnikat. Vždycky ze skutečného
            portfolia, které známe do posledního metru.
          </p>
        </div>
        <div className="ic-cards">
          {nabidka.map((n) => (
            <article className="ic-card" key={n.kod}>
              <div className="ic-card__top">
                <span className="ic-card__kod">{n.kod}</span>
                <span className="ic-card__stitek">{n.stitek}</span>
              </div>
              <h3>{n.nazev}</h3>
              <p>{n.text}</p>
              <ul>
                {n.pro.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="ic-onas" id="onas" aria-labelledby="onas-h">
        <div className="ic-onas__grid">
          <div className="ic-onas__text">
            <p className="ic-eyebrow ic-eyebrow--light">O nás</p>
            <h2 id="onas-h">
              Dynamický kolektiv s domovskou adresou na Starém Brně.
            </h2>
            <p>
              Pronájmu, prodeji a správě nemovitostí se věnujeme dlouhá léta —
              od obchodních ploch a kanceláří po sklady, pozemky a reklamní
              plochy. K dlouhodobému pronájmu máme jednotky všech velikostí pro
              jednotlivce, skupiny i firemní zaměstnance.
            </p>
            <p>
              Vaše kontakty nikam neposíláme a osobní údaje zpracováváme podle
              platných předpisů. Jsme tu pro vás — stačí se ozvat.
            </p>
          </div>
          <div className="ic-onas__facts">
            <dl>
              <div>
                <dt>Sídlo</dt>
                <dd>Václavská 237/6, Staré Brno, 603 00</dd>
              </div>
              <div>
                <dt>Telefon</dt>
                <dd>
                  <a href="tel:+420605229922">+420 605 229 922</a>
                </dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd>
                  <a href="mailto:reality@icb.as">reality@icb.as</a>
                </dd>
              </div>
              <div>
                <dt>Úřední hodiny</dt>
                <dd>Čtvrtek 14:00–17:00 (příjem plateb)</dd>
              </div>
              <div>
                <dt>Areál</dt>
                <dd>Mezi Mendlovým nám. a Hybešovou — 15 min do centra pěšky</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}

// Předvýpočet rozsvícených buněk hero mřížky (deterministicky) —
// pár „obsazených" jednotek v ploše 300 volných.
function buildLit(): Set<number> {
  const s = new Set<number>();
  let seed = 7;
  for (let k = 0; k < 46; k++) {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    s.add(seed % 300);
  }
  return s;
}
const lit = buildLit();

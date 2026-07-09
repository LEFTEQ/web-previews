import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      code: "P0",
      title: "Diagnostika řídicích jednotek",
      desc: "Načteme paměť závad ze všech řídicích jednotek vozu — motor, převodovka, ABS, airbagy. Řekneme vám, co kód znamená a co s tím, ne jen číslo z přístroje.",
      meta: "OBD-II · CAN · UDS",
    },
    {
      code: "P1",
      title: "Hledání příčiny, ne jen příznaku",
      desc: "Kontrolka svítí znovu po měsíci? Měříme živá data za jízdy, tlaky a signály čidel, dokud nenajdeme skutečnou příčinu — ne abychom jen smazali chybu.",
      meta: "měření naživo · osciloskop",
    },
    {
      code: "P2",
      title: "Emise, DPF a AdBlue",
      desc: "Zvýšená spotřeba, ucpaný filtr pevných částic, hláška o AdBlue. Prověříme systém, provedeme regeneraci a poradíme, jestli se oprava vyplatí.",
      meta: "DPF · EGR · SCR",
    },
    {
      code: "P3",
      title: "Kontrola před koupí ojetiny",
      desc: "Než podepíšete kupní smlouvu, projedeme vůz diagnostikou a odhalíme skryté závady i přepisované najeté kilometry. Vyplatí se to.",
      meta: "protokol na místě",
    },
  ];

  return (
    <main className="page">
      <header className="nav">
        <a className="brand" href="#top" aria-label="HK auto, domů">
          <span className="brand-mark" aria-hidden="true">
            <span className="brand-scan" />
          </span>
          <span className="brand-text">
            <span className="brand-name">HK auto</span>
            <span className="brand-sub">diagnostika vozidel · Brno</span>
          </span>
        </a>
        <nav className="nav-links" aria-label="Hlavní">
          <a href="#sluzby">Co umíme</a>
          <a href="#duvera">Proč my</a>
          <a className="nav-call" href="tel:+420548532519">Zavolat 548 532 519</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Diagnostický přístroj připojený do zásuvky OBD pod volantem vozu"
            className="hero-img"
          />
          <div className="hero-grid" aria-hidden="true" />
        </div>
        <div className="hero-body">
          <p className="eyebrow">Autoservis · Olomoucká 4, Brno</p>
          <h1 className="hero-title">
            Kontrolka <span className="hl">svítí</span>.<br />
            My víme <span className="hl">proč</span>.
          </h1>
          <p className="hero-lead">
            Připojíme se do vaší řídicí jednotky, přečteme každý chybový kód a
            přeložíme ho do lidské řeči — s jasnou cenou opravy dřív, než něco
            rozděláme. Přes dvacet let u aut na jednom místě v Brně.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420548532519">
              Objednat diagnostiku
            </a>
            <a className="btn btn-ghost" href="mailto:hkauto@hkauto.cz">
              hkauto@hkauto.cz
            </a>
          </div>
          <dl className="hero-facts">
            <div>
              <dt>Odečet chyb</dt>
              <dd>na počkání</dd>
            </div>
            <div>
              <dt>Značky</dt>
              <dd>osobní i užitkové</dd>
            </div>
            <div>
              <dt>Od roku</dt>
              <dd>1998 v Brně</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="services" id="sluzby">
        <div className="section-head">
          <p className="eyebrow">Chybové kódy, které umíme přečíst</p>
          <h2>Od hlášky na palubce k hotové opravě</h2>
          <p className="section-lead">
            Diagnostika není smazání kontrolky. U nás je to postup: zjistit, změřit,
            opravit, ověřit. Tady je, čím se každý den zabýváme.
          </p>
        </div>
        <ol className="cards">
          {services.map((s) => (
            <li className="card" key={s.code}>
              <span className="card-code" aria-hidden="true">
                {s.code}
              </span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="card-meta">{s.meta}</span>
            </li>
          ))}
        </ol>
        <figure className="service-figure">
          <img
            src="/section-1.webp"
            alt="Technik připojuje diagnostický počítač k vozidlu v servisní hale"
            className="figure-img"
          />
          <figcaption>
            Diagnostické stanoviště v naší hale na Olomoucké — každé auto tu
            projde měřením naživo, ne jen odečtem z konektoru.
          </figcaption>
        </figure>
      </section>

      <section className="trust" id="duvera">
        <div className="trust-media">
          <img
            src="/section-2.webp"
            alt="Detail motorového prostoru vozidla během kontroly v dílně HK auto"
            className="trust-img"
          />
        </div>
        <div className="trust-body">
          <p className="eyebrow">Proč lidé jezdí zrovna k nám</p>
          <h2>Malá dílna, kde vás poznají podle SPZ</h2>
          <p className="trust-lead">
            Jsme rodinný autoservis na Olomoucké 4 v Brně. Nemáme call centrum ani
            cizí čekárnu — mluvíte přímo s tím, kdo se vám do auta dívá. A dřív, než
            cokoli rozebereme, znáte cenu.
          </p>
          <ul className="trust-list">
            <li>
              <span className="t-k">Cena předem</span>
              <span className="t-v">
                Rozpočet opravy odsouhlasíte, než sáhneme na nářadí. Žádné
                překvapení na faktuře.
              </span>
            </li>
            <li>
              <span className="t-k">Vysvětlíme to</span>
              <span className="t-v">
                Ukážeme vám naměřená data a řekneme srozumitelně, co je vážné a co
                počká do příště.
              </span>
            </li>
            <li>
              <span className="t-k">Přijedete včas</span>
              <span className="t-v">
                Objednáváme na konkrétní čas, ne „přijeďte ráno a čekejte“.
                Diagnostiku často zvládneme hned.
              </span>
            </li>
          </ul>
          <address className="trust-contact">
            <p>
              <strong>HK auto s.r.o.</strong>
              <br />
              Olomoucká 4, 618 00 Brno
            </p>
            <p>
              <a href="tel:+420548532519">548 532 519</a>
              {" · "}
              <a href="mailto:hkauto@hkauto.cz">hkauto@hkauto.cz</a>
            </p>
          </address>
        </div>
      </section>
    </main>
  );
}

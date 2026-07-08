import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      km: "01",
      nazev: "Skladování a logistika",
      popis:
        "Tři vlastní areály u dálničního exitu D3 v Českých Budějovicích, dohromady 85 000 m². Ve skladech o rozloze 45 000 m² držíme přísné standardy vašeho zboží — od naskladnění po expedici.",
      cislo: "45 000 m²",
      cislo_label: "skladové plochy",
    },
    {
      km: "02",
      nazev: "Nákladní doprava",
      popis:
        "„Váš termín je náš cíl.“ Vozíme po celé ČR i do zahraničí, plánujeme trasy tak, aby zásilka dorazila včas a nepoškozená. Vlastní dispečink hlídá každý kilometr.",
      cislo: "celá EU",
      cislo_label: "dosah přeprav",
    },
    {
      km: "03",
      nazev: "Sklápěcí přeprava",
      popis:
        "Naše historicky první oddělení. Od roku 1990 vozíme sypké směsi pro stavbu jihočeských silnic — písek, štěrk, kamenivo tam, kde je zrovna potřeba.",
      cislo: "od 1990",
      cislo_label: "první divize",
    },
    {
      km: "04",
      nazev: "Rezervace časových oken — Hůry",
      popis:
        "Přehledná rezervace oken pro vykládku a nakládku v logistickém areálu D Hůry. Přijedete přesně na svůj čas, bez front a čekání na rampě.",
      cislo: "areál D",
      cislo_label: "Hůry u Budějovic",
    },
    {
      km: "05",
      nazev: "Mytí průmyslových obalů",
      popis:
        "Splňujeme nejpřísnější požadavky automobilového průmyslu na čistotu vratných obalů. KLT boxy i palety vám vrátíme připravené rovnou do výroby.",
      cislo: "automotive",
      cislo_label: "kvalita pro výrobu",
    },
    {
      km: "06",
      nazev: "Čerpací stanice",
      popis:
        "PHM výhradně od OMV a Unipetrolu. Natural 95, Diesel, HVO100 i AdBlue — pro naši flotilu i pro vás.",
      cislo: "OMV · Unipetrol",
      cislo_label: "jen ověření dodavatelé",
    },
  ];

  const ceny = [
    { palivo: "Natural 95", cena: "37,90" },
    { palivo: "Diesel", cena: "33,90" },
    { palivo: "HVO100 Diesel", cena: "45,00" },
    { palivo: "AdBlue", cena: "15,00" },
  ];

  return (
    <main className="laf">
      <header className="laf-top">
        <a className="laf-mark" href="#" aria-label="Lašek spol. s r.o. — úvod">
          <span className="laf-mark-word">LAŠEK</span>
          <span className="laf-mark-sub">spol. s r.o. · od 1990</span>
        </a>
        <nav className="laf-nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#firma">O firmě</a>
          <a href="#kontakt" className="laf-nav-cta">Poptat přepravu</a>
        </nav>
      </header>

      <section className="laf-hero" aria-labelledby="hero-nadpis">
        <img
          className="laf-hero-img"
          src="/hero.webp"
          alt="Kamiony firmy Lašek na logistickém areálu u dálnice D3"
          width={1600}
          height={1000}
          decoding="async"
        />
        <div className="laf-hero-veil" aria-hidden="true" />

        <div className="laf-hero-inner">
          <p className="laf-eyebrow">Autodoprava &amp; logistika · České Budějovice</p>
          <h1 id="hero-nadpis" className="laf-hero-title">
            Váš termín<br />je náš cíl.
          </h1>
          <p className="laf-hero-lead">
            Rodinná firma s vlastními kamiony, sklady a čerpací stanicí. Od roku 1990
            vozíme z jihu Čech přesně tam, kde vás zboží čeká.
          </p>
          <div className="laf-hero-actions">
            <a href="#kontakt" className="laf-btn">Domluvit přepravu</a>
            <a href="#sluzby" className="laf-btn-ghost">Co všechno vozíme</a>
          </div>
        </div>

        <div className="laf-strip" aria-hidden="true">
          <div className="laf-strip-track">
            <span>85 000 m² AREÁLŮ</span><span className="laf-dot" />
            <span>U EXITU D3</span><span className="laf-dot" />
            <span>OD ROKU 1990</span><span className="laf-dot" />
            <span>CERTIFIKACE ISO</span><span className="laf-dot" />
            <span>DOPRAVA PO CELÉ EU</span><span className="laf-dot" />
            <span>85 000 m² AREÁLŮ</span><span className="laf-dot" />
            <span>U EXITU D3</span><span className="laf-dot" />
            <span>OD ROKU 1990</span><span className="laf-dot" />
            <span>CERTIFIKACE ISO</span><span className="laf-dot" />
            <span>DOPRAVA PO CELÉ EU</span><span className="laf-dot" />
          </div>
        </div>
      </section>

      <section id="sluzby" className="laf-sluzby" aria-labelledby="sluzby-nadpis">
        <div className="laf-sec-head">
          <p className="laf-eyebrow laf-eyebrow-dark">Nákladní list</p>
          <h2 id="sluzby-nadpis">Šest divizí pod jednou střechou</h2>
          <p className="laf-sec-lead">
            Nemusíte volat pěti firmám. U nás naložíte, převezete, uskladníte, umyjete
            obaly i natankujete — každá položka má svého člověka.
          </p>
        </div>

        <ol className="laf-list">
          {sluzby.map((s) => (
            <li key={s.km} className="laf-row">
              <span className="laf-row-km" aria-hidden="true">{s.km}</span>
              <div className="laf-row-body">
                <h3>{s.nazev}</h3>
                <p>{s.popis}</p>
              </div>
              <div className="laf-row-meta">
                <span className="laf-row-fig">{s.cislo}</span>
                <span className="laf-row-lab">{s.cislo_label}</span>
              </div>
            </li>
          ))}
        </ol>

        <div className="laf-panel" aria-labelledby="ceny-nadpis">
          <img
            className="laf-panel-img"
            src="/section-1.webp"
            alt="Čerpací stanice firmy Lašek s cenami pohonných hmot"
            width={900}
            height={640}
            loading="lazy"
            decoding="async"
          />
          <div className="laf-panel-body">
            <h3 id="ceny-nadpis" className="laf-panel-title">Ceny u pumpy</h3>
            <p className="laf-panel-note">Aktuální ceny na naší stanici · v Kč za litr</p>
            <table className="laf-ceny">
              <caption className="laf-sr">Ceník pohonných hmot v Kč za litr</caption>
              <tbody>
                {ceny.map((c) => (
                  <tr key={c.palivo}>
                    <th scope="row">{c.palivo}</th>
                    <td>
                      <span className="laf-cena-num">{c.cena}</span>
                      <span className="laf-cena-unit">Kč/l</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="firma" className="laf-firma" aria-labelledby="firma-nadpis">
        <div className="laf-firma-media">
          <img
            src="/section-2.webp"
            alt="Logistický areál a zázemí firmy Lašek u Českých Budějovic"
            width={1200}
            height={900}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="laf-firma-text">
          <p className="laf-eyebrow laf-eyebrow-dark">Kdo řídí</p>
          <h2 id="firma-nadpis">
            Postaveno od nuly.<br />Poctivou prací.
          </h2>
          <p>
            Vznikli jsme „od nuly“ — bez privatizace, bez restituce. Krok za krokem
            jsme se propracovali mezi přední poskytovatele komplexní přepravy a
            logistiky v České republice.
          </p>
          <p>
            Jsme rodinná firma a řada kolegů je s námi přes dvacet let. Držíme se
            tradice, ale zůstáváme pružní a pořád se učíme — proto vám dokážeme
            vyjít vstříc i s netypickým nákladem nebo termínem.
          </p>

          <dl className="laf-fakta">
            <div>
              <dt>Sídlo</dt>
              <dd>České Budějovice, u exitu D3</dd>
            </div>
            <div>
              <dt>V provozu</dt>
              <dd>od roku 1990</dd>
            </div>
            <div>
              <dt>Kvalita</dt>
              <dd>certifikace ISO</dd>
            </div>
          </dl>

          <blockquote className="laf-cit">
            „Pokud k nám přijdeš pracovat, máš šanci se hodně naučit — logistika je
            součástí praktického života.“
          </blockquote>
        </div>
      </section>
    </main>
  );
}

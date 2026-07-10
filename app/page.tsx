import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      cislo: "01",
      nazev: "Gel lak",
      popis: "Klasika, která vydrží. Napevno zapečený lak s vysokým leskem, který nepraská a drží tři až čtyři týdny bez odloupnutí.",
      cena: "od 490 Kč",
      cas: "60 min",
    },
    {
      cislo: "02",
      nazev: "Modeláž akrygelem",
      popis: "Zpevnění a prodloužení vlastního nehtu. Přirozený tvar, pevná ploška a nehet, který sám o sobě neuráží ani po měsíci.",
      cena: "od 790 Kč",
      cas: "90 min",
    },
    {
      cislo: "03",
      nazev: "Japonská manikúra",
      popis: "Bez laku, jen leštěná ploška a včelí vosk. Pro ruce, které chtějí zdravý lesk a pořádnou péči o kůžičku a okolí.",
      cena: "od 450 Kč",
      cas: "45 min",
    },
    {
      cislo: "04",
      nazev: "Nail art na míru",
      popis: "Chrom, kočičí oko, francie na milimetr přesně nebo ručně malovaný motiv. Řekněte inspiraci, my domalujeme zbytek.",
      cena: "od 90 Kč / nehet",
      cas: "dle motivu",
    },
  ];

  const salony = [
    {
      mesto: "OC Olympia Plzeň",
      adresa: "Písecká 972/1, 326 00 Plzeň",
      hodiny: "Denně 9:00–21:00",
    },
    {
      mesto: "OC Tesco Plzeň",
      adresa: "Rokycanská třída 1424/128, Plzeň",
      hodiny: "Denně 9:00–21:00",
    },
  ];

  return (
    <main className="pn">
      <header className="pn-nav" aria-label="Hlavní">
        <a className="pn-logo" href="#">
          <span className="pn-logo-mark" aria-hidden="true">✦</span>
          <span className="pn-logo-text">
            Pro<span className="pn-logo-thin"> Nails&nbsp;&&nbsp;Beauty</span>
          </span>
        </a>
        <nav className="pn-links">
          <a href="#sluzby">Služby</a>
          <a href="#studio">Studio</a>
          <a className="pn-nav-cta" href="#rezervace">Rezervovat</a>
        </nav>
      </header>

      <section className="pn-hero" aria-labelledby="hero-nadpis">
        <div className="pn-hero-copy">
          <p className="pn-eyebrow">Nehtové studio · Plzeň</p>
          <h1 id="hero-nadpis" className="pn-hero-title">
            Ruce, které si
            <span className="pn-hero-accent">pamatují</span>
            i po čtyřech týdnech.
          </h1>
          <p className="pn-hero-lead">
            Gel lak, modeláž i japonská manikúra od nehtařek, které tvarují
            podle vaší ruky — ne podle šablony. Dvě studia v Plzni, otevřeno
            každý den do devíti večer.
          </p>
          <div className="pn-hero-actions">
            <a className="pn-btn" href="#rezervace" id="rezervace">
              Rezervovat termín
            </a>
            <a className="pn-btn-ghost" href="#sluzby">
              Prohlédnout služby
            </a>
          </div>
          <dl className="pn-hero-meta">
            <div>
              <dt>Otevřeno</dt>
              <dd>Po–Ne, 9–21</dd>
            </div>
            <div>
              <dt>Studia</dt>
              <dd>Olympia &amp; Tesco</dd>
            </div>
            <div>
              <dt>Výdrž lakování</dt>
              <dd>3–4 týdny</dd>
            </div>
          </dl>
        </div>
        <figure className="pn-hero-figure">
          <img
            src="/hero.webp"
            alt="Detail nalakovaných nehtů s vysokým leskem v plzeňském studiu Pro Nails & Beauty"
            className="pn-hero-img"
            width={720}
            height={900}
          />
          <figcaption className="pn-hero-caption">
            Chrom &amp; francie · práce našeho studia
          </figcaption>
        </figure>
      </section>

      <section className="pn-services" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="pn-section-head">
          <p className="pn-eyebrow">Ceník &amp; služby</p>
          <h2 id="sluzby-nadpis">Čtyři věci, které umíme naslepo.</h2>
          <p className="pn-section-lead">
            Ceny jsou orientační podle délky a stavu nehtů. Přesnou částku vám
            řekneme hned na začátku, než se cokoliv pustí.
          </p>
        </div>
        <ol className="pn-service-grid">
          {sluzby.map((s) => (
            <li key={s.cislo} className="pn-service">
              <span className="pn-service-num" aria-hidden="true">
                {s.cislo}
              </span>
              <div className="pn-service-body">
                <h3>{s.nazev}</h3>
                <p>{s.popis}</p>
              </div>
              <div className="pn-service-foot">
                <span className="pn-service-cena">{s.cena}</span>
                <span className="pn-service-cas">{s.cas}</span>
              </div>
            </li>
          ))}
        </ol>
        <figure className="pn-service-figure">
          <img
            src="/section-1.webp"
            alt="Nehtařka pracuje na modeláži nehtů zákaznice ve studiu Pro Nails & Beauty"
            width={1200}
            height={720}
          />
        </figure>
      </section>

      <section className="pn-about" id="studio" aria-labelledby="studio-nadpis">
        <figure className="pn-about-figure">
          <img
            src="/section-2.webp"
            alt="Interiér nehtového studia Pro Nails & Beauty s pracovními místy pro manikúru"
            width={1000}
            height={1100}
          />
        </figure>
        <div className="pn-about-copy">
          <p className="pn-eyebrow">O studiu</p>
          <h2 id="studio-nadpis">
            Přijdete na kávu, odejdete s rukama, které se hodí ukázat.
          </h2>
          <p>
            Jsme malý tým nehtařek v Plzni, který dělá jednu věc a dělá ji
            poctivě. Pracujeme s odsáváním prachu, sterilizovanými nástroji a
            materiály bez zbytečné agresivity — vaše přirozené nehty jsou pro
            nás základ, ne překážka.
          </p>
          <ul className="pn-about-list">
            <li>
              <span aria-hidden="true">·</span> Nasazení baby boomer, francie a
              chrom bez příplatku za "složitost"
            </li>
            <li>
              <span aria-hidden="true">·</span> Sterilizace nástrojů v autoklávu
              po každém klientovi
            </li>
            <li>
              <span aria-hidden="true">·</span> Poradíme s výdrží i domácí péčí,
              ne jen odbavíme
            </li>
          </ul>
          <div className="pn-salons">
            {salony.map((sal) => (
              <div key={sal.mesto} className="pn-salon">
                <h3>{sal.mesto}</h3>
                <p className="pn-salon-adr">{sal.adresa}</p>
                <p className="pn-salon-hod">{sal.hodiny}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export const dynamic = "force-static";

// utility typ ponechán kvůli případnému rozšíření
export type _Style = CSSProperties;

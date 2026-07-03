import type { CSSProperties } from "react";

export const metadata = {
  title: "Transpan – kamionová doprava a logistika z Liberce",
  description:
    "Transpan, s.r.o. z Liberce vozí váš náklad po celé ČR i Evropě už 30 let. Vlastní vozový park, 5 500 m² krytých skladů, pneuservis a nakládací technika. Zavolejte nebo napište.",
};

type Sluzba = {
  cislo: string;
  nazev: string;
  popis: string;
};

const sluzby: Sluzba[] = [
  {
    cislo: "01",
    nazev: "Mezinárodní a vnitrostátní kamionová doprava",
    popis:
      "Celovozové i dokládkové přepravy po celé ČR a Evropě. Vlastní tahače, řidiči, kteří znají trasy, a dispečink, který zvedá telefon.",
  },
  {
    cislo: "02",
    nazev: "Logistika a skladování",
    popis:
      "5 500 m² krytých, plně vybavených hal v Liberci. Naskladníme, ohlídáme a vyexpedujeme podle vašeho tempa.",
  },
  {
    cislo: "03",
    nazev: "Pneuservis pro nákladní, užitková i osobní vozidla",
    popis:
      "Přezutí, opravy a hlídání stavu pneumatik ve vlastním technickém zázemí. Aby kola nikdy nestála zbytečně.",
  },
  {
    cislo: "04",
    nazev: "Plnění a diagnostika klimatizací",
    popis:
      "Kontrola, doplnění chladiva a diagnostika klimatizací – pro kabinu, ve které se dá odjezdit dlouhá směna.",
  },
  {
    cislo: "05",
    nazev: "Speciální nakládací technika",
    popis:
      "Tam, kde běžná rampa nestačí. Naložíme i to, co jinde odmítnou, s technikou postavenou přesně na míru.",
  },
];

const fakta = [
  { hodnota: "30", jednotka: "let", popis: "na cestách po Evropě" },
  { hodnota: "5 500", jednotka: "m²", popis: "krytých skladovacích ploch" },
  { hodnota: "5", jednotka: "služeb", popis: "pod jednou střechou" },
];

export default function Page() {
  return (
    <main className="tp">
      <header className="tp-topbar">
        <a className="tp-wordmark" href="#" aria-label="Transpan, s.r.o. – úvod">
          TRANS<span className="tp-wordmark-slash">/</span>PAN
        </a>
        <a className="tp-topbar-call" href="tel:+420482739211">
          <span className="tp-topbar-call-label">Dispečink</span>
          <span className="tp-topbar-call-num">+420&nbsp;482&nbsp;739&nbsp;211</span>
        </a>
      </header>

      <section className="tp-hero" aria-labelledby="tp-hero-title">
        <div className="tp-hero-lane" aria-hidden="true">
          <span className="tp-dash" />
          <span className="tp-dash" />
          <span className="tp-dash" />
          <span className="tp-dash" />
          <span className="tp-dash" />
        </div>

        <div className="tp-hero-inner">
          <p className="tp-eyebrow">Autodoprava · Liberec · od roku 1994</p>
          <h1 id="tp-hero-title" className="tp-hero-title">
            <span className="tp-hero-line tp-hero-line--a">Váš náklad</span>
            <span className="tp-hero-line tp-hero-line--b">dojede</span>
            <span className="tp-hero-line tp-hero-line--c">
              včas<span className="tp-hero-dot">.</span>
            </span>
          </h1>
          <p className="tp-hero-sub">
            Vlastní vozový park, vlastní technické zázemí a dispečink z Liberce,
            který za váš náklad ručí od nakládky až po vyskladnění – po celé ČR i Evropě.
          </p>

          <div className="tp-hero-actions">
            <a className="tp-btn tp-btn--solid" href="tel:+420604250342">
              Zavolat dispečink
            </a>
            <a className="tp-btn tp-btn--ghost" href="mailto:dolezal@transpan.cz">
              Napsat e-mail
            </a>
          </div>
        </div>

        <ul className="tp-hero-facts" aria-label="Transpan v číslech">
          {fakta.map((f) => (
            <li className="tp-fact" key={f.popis}>
              <span className="tp-fact-num">{f.hodnota}</span>
              <span className="tp-fact-unit">{f.jednotka}</span>
              <span className="tp-fact-desc">{f.popis}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="tp-services" aria-labelledby="tp-services-title">
        <div className="tp-section-head">
          <p className="tp-eyebrow tp-eyebrow--dark">Co u nás naložíte</p>
          <h2 id="tp-services-title" className="tp-section-title">
            Pět služeb, jedna adresa
          </h2>
          <p className="tp-section-lead">
            Využijte je samostatně, nebo je poskládejte do přepravního řešení na
            klíč. Vždycky podle toho, co váš náklad potřebuje.
          </p>
        </div>

        <ol className="tp-manifest">
          {sluzby.map((s) => (
            <li className="tp-manifest-row" key={s.cislo}>
              <span className="tp-manifest-num">{s.cislo}</span>
              <div className="tp-manifest-body">
                <h3 className="tp-manifest-name">{s.nazev}</h3>
                <p className="tp-manifest-desc">{s.popis}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="tp-service-figure">
          <img
            src="/section-1.webp"
            alt="Návěsy vozového parku Transpan připravené k výjezdu"
            className="tp-figure-img"
            loading="lazy"
          />
        </figure>
      </section>

      <section className="tp-trust" aria-labelledby="tp-trust-title">
        <figure className="tp-trust-figure">
          <img
            src="/section-2.webp"
            alt="Kryté skladovací haly Transpan v Liberci"
            className="tp-figure-img"
            loading="lazy"
          />
        </figure>

        <div className="tp-trust-body">
          <p className="tp-eyebrow">O nás</p>
          <h2 id="tp-trust-title" className="tp-section-title tp-section-title--light">
            Za třicet let jsme nezmeškali důvod, proč jezdit
          </h2>
          <p className="tp-trust-lead">
            Jsme rodinná libereckář firma se stálým dispečinkem, vlastními auty a
            techniky, kteří je udrží na cestě. Nemluvíme o zásilkách jako o
            číslech – víme, komu je vezeme a kdy je čeká.
          </p>

          <ul className="tp-values">
            <li className="tp-value">
              <span className="tp-value-word">Spolehlivost</span>
              <span className="tp-value-note">Termín, který slíbíme, dovezeme.</span>
            </li>
            <li className="tp-value">
              <span className="tp-value-word">Osobní přístup</span>
              <span className="tp-value-note">Voláte lidem, ne callcentru.</span>
            </li>
            <li className="tp-value">
              <span className="tp-value-word">Flexibilita</span>
              <span className="tp-value-note">Od jedné palety po projekt na klíč.</span>
            </li>
            <li className="tp-value">
              <span className="tp-value-word">Certifikace</span>
              <span className="tp-value-note">Zázemí a papíry, na kterých stojí.</span>
            </li>
          </ul>

          <div className="tp-contacts">
            <div className="tp-contact">
              <p className="tp-contact-name">Petr Doležal</p>
              <a className="tp-contact-link" href="tel:+420604250342">
                +420&nbsp;604&nbsp;250&nbsp;342
              </a>
              <a className="tp-contact-link" href="mailto:dolezal@transpan.cz">
                dolezal@transpan.cz
              </a>
            </div>
            <div className="tp-contact">
              <p className="tp-contact-name">Jiří Kabelka</p>
              <a className="tp-contact-link" href="tel:+420737245780">
                +420&nbsp;737&nbsp;245&nbsp;780
              </a>
              <a className="tp-contact-link" href="mailto:kabelka@transpan.cz">
                kabelka@transpan.cz
              </a>
            </div>
          </div>

          <p className="tp-address">
            TRANSPAN, s.r.o. · Doubská 339/14, Liberec
          </p>
        </div>
      </section>
    </main>
  );
}

export const dynamic = "force-static";

// keep import used for potential inline style typing
const _unused: CSSProperties = {};
void _unused;

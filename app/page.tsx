import type { CSSProperties } from "react";

type Service = {
  title: string;
  body: string;
  copper?: boolean;
};

const services: Service[] = [
  {
    title: "Servis",
    body: "Záruční i pozáruční opravy praček, myček, sušiček, sporáků a trub. Přijedeme k vám, nebo spotřebič přinesete na dílnu na Střekově.",
  },
  {
    title: "Prodej",
    body: "Nový spotřebič vybereme podle vaší kuchyně, přivezeme a rovnou odborně namontujeme a zapojíme.",
  },
  {
    title: "Náhradní díly",
    body: "Originální díly, příslušenství a čisticí prostředky, které spotřebiči prodlouží život a udrží ho v kondici.",
  },
  {
    title: "Ohříváky Dražice",
    body: "Specializace na servis a topná tělesa tuzemských zásobníkových ohřívačů vody Dražice — od odvápnění po výměnu.",
    copper: true,
  },
];

const brands = [
  "Whirlpool",
  "Bosch",
  "Gorenje",
  "Electrolux",
  "AEG",
  "Zanussi",
  "Beko",
  "LG",
  "Mora",
  "Indesit",
  "Ariston",
  "Eta",
  "Siguro",
  "Sharp",
  "Philco",
  "Dražice",
];

const hours: [string, string][] = [
  ["Pondělí", "8:00 – 16:00"],
  ["Úterý", "8:00 – 16:00"],
  ["Středa", "8:00 – 16:00"],
  ["Čtvrtek", "8:00 – 16:00"],
  ["Pátek", "8:00 – 15:00"],
];

export default function Page() {
  return (
    <main className="page">
      {/* ——— HERO: the master enamel plaque ——— */}
      <header className="hero section">
        <p className="eyebrow">
          Elektroservis <span className="dot" aria-hidden="true">·</span> Ústí nad Labem–Střekov
          <span className="dot" aria-hidden="true">·</span> od roku 1991
        </p>

        <div className="plaque plaque-hero" role="img" aria-label="Strojsmalt Seos">
          <span className="gloss" aria-hidden="true" />
          <span className="chip" aria-hidden="true" />
          <span className="wordmark">
            <span className="wordmark-1">Strojsmalt</span>
            <span className="wordmark-2">Seos</span>
          </span>
        </div>

        <p className="etymology">
          <b>stroj</b> + <b>smalt</b> — spotřebič a jeho smaltová duše.
        </p>

        <p className="hero-sub">
          Opravíme vám pračku, myčku i troubu — a ohříváky vody Dražice. Otevíráme kryty
          domácích spotřebičů v Ústí nad Labem už{" "}
          <b>třicet pět let</b>.
        </p>
      </header>

      {/* ——— SECTION 1: what you can sort out here ——— */}
      <section className="section services" aria-labelledby="h-sluzby">
        <div className="plaque plaque-title">
          <h2 id="h-sluzby">Co u nás vyřídíte</h2>
        </div>

        <ul className="service-grid">
          {services.map((s) => (
            <li key={s.title} className={"service" + (s.copper ? " service-copper" : "")}>
              <div className="plaque plaque-sm">
                <span className="gloss" aria-hidden="true" />
                <h3>{s.title}</h3>
              </div>
              <p>{s.body}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ——— SECTION 2: 35 years of trust ——— */}
      <section className="section trust" aria-labelledby="h-onas">
        <div className="plaque plaque-title">
          <h2 id="h-onas">Třicet pět let u jednoho ponku</h2>
        </div>

        <div className="trust-grid">
          <div className="trust-copy">
            <p>
              Spravujeme domácí spotřebiče v Ústí nad Labem od roku 1991. Za tu dobu jsme
              otevřeli tisíce krytů a víme, kde která značka nejčastěji zlobí — a co se
              vyplatí opravit místo vyhazovat.
            </p>
            <p className="trust-note">
              Značky, které běžně servisujeme a pro které držíme díly:
            </p>
            <ul className="badges" aria-label="Servisované značky">
              {brands.map((b) => (
                <li key={b} className="badge">
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <aside className="info-card" aria-label="Otevírací doba a kontakt">
            <h3 className="info-title">Otevírací doba</h3>
            <dl className="hours">
              {hours.map(([day, time]) => (
                <div className="hours-row" key={day}>
                  <dt>{day}</dt>
                  <dd>{time}</dd>
                </div>
              ))}
            </dl>

            <h3 className="info-title">Dílna a příjem</h3>
            <address className="contact">
              Ukázková 123, Ústí nad Labem
              <br />
              <a href="tel:+420777111222">777 111 222</a>
              <br />
              <a href="mailto:info@example.cz">info@example.cz</a>
            </address>
          </aside>
        </div>
      </section>
    </main>
  );
}

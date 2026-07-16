import { TargetCycle } from "./motion";

type Glyph = "rat" | "bug" | "microbe" | "pigeon" | "crate";

const services: {
  serial: string;
  service: string;
  target: string;
  method: string;
  glyph: Glyph;
  eco?: boolean;
}[] = [
  {
    serial: "DER-01 · CHODOV · P4",
    service: "Deratizace",
    target: "potkan / myš / krysa / kuna",
    method: "Monitorovací staničky a zajištěné nástrahy proti zahnízdění hlodavců.",
    glyph: "rat",
  },
  {
    serial: "DEZ-02 · CHODOV · P4",
    service: "Dezinsekce",
    target: "štěnice / šváb / blecha / mravenec",
    method: "Cílený postřik i horkovzdušné ošetření lezoucího a létajícího hmyzu.",
    glyph: "bug",
  },
  {
    serial: "DEZ-03 · CHODOV · P4",
    service: "Dezinfekce",
    target: "plísně / bakterie / viry",
    method: "Chemické i fyzikální ničení mikroorganizmů, jímek, žump i po zemřelých.",
    glyph: "microbe",
  },
  {
    serial: "HOL-04 · CHODOV · P4",
    service: "Holubí zábrany",
    target: "holub",
    method: "Instalace sítí a hrotů, čištění a asanace prostor znečištěných trusem.",
    glyph: "pigeon",
  },
  {
    serial: "VYK-05 · CHODOV · P4",
    service: "Vyklízení",
    target: "půdy / sklepy",
    method: "Vyklízení a asanace zanesených prostor před zásahem i po něm.",
    glyph: "crate",
  },
];

const log: { label: string; value: string; note: string; eco?: boolean }[] = [
  { label: "ROK ZALOŽENÍ", value: "2005", note: "přes 15 let v terénu" },
  { label: "DOJEZD", value: "≤ 2 HOD", note: "od zavolání na místo" },
  { label: "ZÁRUKA", value: "100 %", note: "po třetím zásahu" },
  { label: "BEZPEČNOST", value: "OK", note: "bezpečné pro děti i mazlíčky", eco: true },
];

const objects = [
  "BYTY",
  "RODINNÉ DOMY",
  "RESTAURACE",
  "POTRAVINÁŘSTVÍ",
  "ŠKOLY",
  "HOTELY",
  "KANCELÁŘE",
  "NÁDRAŽÍ",
];

function ServiceGlyph({ kind }: { kind: Glyph }) {
  const common = {
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (kind) {
    case "rat":
      return (
        <svg {...common}>
          <circle cx="28" cy="27" r="10" />
          <circle cx="40" cy="24" r="5" />
          <circle cx="39" cy="18" r="3" />
          <path d="M44 23h3" />
          <circle cx="41" cy="24" r="0.7" fill="currentColor" stroke="none" />
          <path d="M18 31C9 35 7 42 3 43" />
        </svg>
      );
    case "bug":
      return (
        <svg {...common}>
          <ellipse cx="24" cy="30" rx="7" ry="11" />
          <circle cx="24" cy="16" r="4" />
          <circle cx="24" cy="9" r="2.6" />
          <path d="M22 7l-4-5M26 7l4-5" />
          <path d="M17 21l-9-4M17 27h-9M17 33l-9 4" />
          <path d="M31 21l9-4M31 27h9M31 33l9 4" />
        </svg>
      );
    case "microbe":
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="10" />
          <circle cx="20" cy="22" r="2.4" />
          <circle cx="28" cy="27" r="1.9" />
          <circle cx="27" cy="20" r="1.3" />
          <path d="M24 14V9M24 34v5M14 24H9M34 24h5M17 17l-3.5-3.5M31 31l3.5 3.5M31 17l3.5-3.5M17 31l-3.5 3.5" />
        </svg>
      );
    case "pigeon":
      return (
        <svg {...common}>
          <ellipse cx="22" cy="27" rx="12" ry="8" />
          <circle cx="34" cy="18" r="5" />
          <path d="M39 17l5 1-5 2.4" />
          <path d="M11 25C4 22 2 30 8 32" />
          <path d="M18 22C22 14 30 16 30 23" />
          <path d="M22 35v6M27 34v6" />
        </svg>
      );
    case "crate":
      return (
        <svg {...common}>
          <rect x="9" y="16" width="30" height="22" rx="1" />
          <path d="M9 24h30M24 16v22" />
          <path d="M13 20h6M29 32h6" />
        </svg>
      );
  }
}

export default function Page() {
  return (
    <main className="fc">
      <section className="fc-hero" aria-labelledby="fc-hero-title">
        <div className="fc-wrap">
          <div className="fc-station-bar">
            <span className="fc-mono">DERATIZACE PRAHA · DDD OPERÁTOR</span>
            <span className="fc-mono fc-station-bar-r">
              50.0281 N · 14.4930 E — P4 / CHODOV
            </span>
          </div>

          <p className="fc-eyebrow">
            <span className="fc-tick" aria-hidden="true" />
            Deratizace · Dezinsekce · Dezinfekce
          </p>

          <h1 id="fc-hero-title" className="fc-hero-title">
            <span className="fc-hero-lead">Provádíme</span>
            <span className="fc-target-host">
              <TargetCycle />
            </span>
            <span className="fc-hero-tail">pro Prahu&nbsp;4 a okolí.</span>
          </h1>

          <p className="fc-hero-desc">
            Licencovaný operátor pro likvidaci hlodavců, hmyzu a mikroorganizmů.
            Přijedeme zpravidla do dvou hodin od zavolání, pracujeme s prostředky
            bezpečnými pro děti i mazlíčky. Po třetím zásahu dáváme 100% záruku.
          </p>

          <div className="fc-hero-actions">
            <a className="fc-cta" href="tel:+420736261309">
              Zavolat 736 261 309
            </a>
            <span className="fc-mono fc-hero-addr">
              Čenětická 2131/8, 149 00 Praha 4-Chodov
            </span>
          </div>
        </div>
      </section>

      <section className="fc-services" aria-labelledby="fc-services-title">
        <div className="fc-wrap">
          <header className="fc-sec-head">
            <span className="fc-mono fc-sec-index">LOG 01 — SLUŽBY</span>
            <h2 id="fc-services-title" className="fc-sec-title">
              Kontrolní list zásahů
            </h2>
            <p className="fc-sec-sub">
              Každá služba je vedená jako záznam z terénu — cíl, metoda a stanoviště.
              Od akutního zásahu po preventivní monitoring.
            </p>
          </header>

          <ul className="fc-tags">
            {services.map((s) => (
              <li key={s.serial} className="fc-tag">
                <span className="fc-tag-stripe" aria-hidden="true" />
                <div className="fc-tag-inner">
                  <span className="fc-mono fc-tag-serial">{s.serial}</span>
                  <span className="fc-tag-glyph">
                    <ServiceGlyph kind={s.glyph} />
                  </span>
                  <h3 className="fc-tag-service">{s.service}</h3>
                  <p className="fc-mono fc-tag-target">
                    <span className="fc-tag-target-k">CÍL</span> {s.target}
                  </p>
                  <p className="fc-tag-method">{s.method}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="fc-trust" aria-labelledby="fc-trust-title">
        <div className="fc-wrap">
          <header className="fc-sec-head">
            <span className="fc-mono fc-sec-index">LOG 02 — ZÁZNAM O FIRMĚ</span>
            <h2 id="fc-trust-title" className="fc-sec-title">
              Proč pustit do domu právě nás
            </h2>
            <p className="fc-sec-sub">
              Rozumíme řemeslu a máme ho zapsané. Zvolíme nejvhodnější postup,
              vysvětlíme ho a poptávku zpracujeme zdarma.
            </p>
          </header>

          <dl className="fc-log">
            {log.map((row) => (
              <div
                key={row.label}
                className={"fc-log-row" + (row.eco ? " fc-log-eco" : "")}
              >
                <dt className="fc-mono fc-log-label">{row.label}</dt>
                <dd className="fc-log-value">{row.value}</dd>
                <dd className="fc-log-note">{row.note}</dd>
              </div>
            ))}
          </dl>

          <div className="fc-refs">
            <p className="fc-refs-lead">
              Zasahujeme v domácnostech i provozech po celé Praze — v obytných
              prostorách, ve stravování i potravinářství, ve školách, hotelech
              a veřejných budovách.
            </p>
            <ul className="fc-chips" aria-label="Kde zasahujeme">
              {objects.map((o) => (
                <li key={o} className="fc-mono fc-chip">
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

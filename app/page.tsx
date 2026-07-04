import type { CSSProperties } from "react";

export const metadata = {
  title: "Schwarzer — montáž zabezpečení Praha | EZS, kamery, přístup",
  description:
    "Autorizovaná montáž zabezpečovacích systémů v Praze. Alarmy Jablotron, kamery HIKVISION, přístupové a docházkové systémy. Přes 15 let praxe, pojištěná odpovědnost.",
};

type Zone = {
  code: string;
  name: string;
  detail: string;
  spec: string;
};

const zones: Zone[] = [
  {
    code: "EZS",
    name: "Zabezpečovací alarmy",
    detail:
      "Elektronický systém odhalí vloupání a včas spustí poplach. Škody na majetku i zdraví držíme na minimu díky rychlému varování.",
    spec: "Jablotron · Videx",
  },
  {
    code: "CCTV",
    name: "Kamerové systémy",
    detail:
      "Střežíme objekt v obraze a záznam poslouží jako důkaz. Detekce pohybu umí zastoupit i funkci alarmu.",
    spec: "HIKVISION · Avtech · NUUO",
  },
  {
    code: "ACS",
    name: "Přístup a docházka",
    detail:
      "Kdo smí dovnitř a kudy chodí. Řídíme vstup do objektu i pohyb uvnitř a znesnadňujeme cestu nezvaným.",
    spec: "Karty · čipy · kódy",
  },
  {
    code: "VDT",
    name: "Zvonky a videotelefony",
    detail:
      "Domovní dorozumívání pro byty i kanceláře. Zvonek s kamerou zastane i část práce kamerového systému.",
    spec: "Audio · video",
  },
  {
    code: "CAR",
    name: "Autoalarmy Jablotron",
    detail:
      "Vozidlo ochrání GSM a GPS autoalarm Jablotron nebo klasický autoalarm. Odbornou montáž bereme jako samozřejmost.",
    spec: "GSM · GPS",
  },
  {
    code: "LAN",
    name: "Kabeláž, LAN a WiFi",
    detail:
      "Strukturovaná kabeláž propojí uživatele v síti. Navrhneme a postavíme LAN i WiFi včetně technologií a servisu.",
    spec: "Rozvody · WiFi",
  },
];

type Proof = {
  k: string;
  v: string;
};

const proof: Proof[] = [
  { k: "15+", v: "let v oboru zabezpečení" },
  { k: "5", v: "autorizovaných značek" },
  { k: "Kooperativa", v: "pojištěná odpovědnost za škodu" },
];

export default function Page() {
  return (
    <main className="sw">
      <header className="sw-top">
        <a className="sw-mark" href="#" aria-label="Schwarzer — úvod">
          <span className="sw-mark__lock" aria-hidden="true">
            <span className="sw-mark__shackle" />
          </span>
          <span className="sw-mark__word">SCHWARZER</span>
        </a>
        <span className="sw-top__tag">montáž zabezpečení · Praha</span>
      </header>

      <section className="sw-hero" aria-labelledby="sw-hero-h">
        <div className="sw-hero__grid" aria-hidden="true">
          <div className="sw-beam" />
          <div className="sw-beam sw-beam--2" />
          <div className="sw-beam sw-beam--3" />
          <span className="sw-node sw-node--a" />
          <span className="sw-node sw-node--b" />
          <span className="sw-node sw-node--c" />
        </div>

        <p className="sw-hero__eyebrow">
          <span className="sw-hero__dot" aria-hidden="true" />
          Objekt střežen
        </p>

        <h1 id="sw-hero-h" className="sw-hero__title">
          <span className="sw-hero__line">Váš objekt</span>
          <span className="sw-hero__line sw-hero__line--em">pod dohledem,</span>
          <span className="sw-hero__line">ne pod tlakem.</span>
        </h1>

        <p className="sw-hero__lead">
          Autorizovaná montáž alarmů, kamer a přístupových systémů v Praze.
          Zabezpečíme byt, kancelář, dům i celou továrnu — od návrhu po servis,
          na jedné ruce.
        </p>

        <div className="sw-hero__cta">
          <a className="sw-btn sw-btn--solid" href="tel:+420602471478">
            Zavolat +420 602 471 478
          </a>
          <a className="sw-btn sw-btn--ghost" href="#nabidka">
            Chci nezávaznou nabídku
          </a>
        </div>

        <ul className="sw-hero__strip" aria-label="Autorizované značky">
          <li>Jablotron</li>
          <li>HIKVISION</li>
          <li>Videx</li>
          <li>NUUO</li>
          <li>Avtech</li>
        </ul>
      </section>

      <section className="sw-sec" id="nabidka" aria-labelledby="sw-sec1-h">
        <div className="sw-sec__head">
          <p className="sw-sec__kicker">Co pro vás zapojíme</p>
          <h2 id="sw-sec1-h" className="sw-sec__title">
            Šest okruhů, jeden systém
          </h2>
          <p className="sw-sec__intro">
            Doporučíme nejvhodnější kombinaci pro konkrétní objekt — a všechno
            propojíme tak, aby to spolu skutečně mluvilo.
          </p>
        </div>

        <ul className="sw-zones">
          {zones.map((z) => (
            <li className="sw-zone" key={z.code}>
              <span className="sw-zone__code" aria-hidden="true">
                {z.code}
              </span>
              <div className="sw-zone__body">
                <h3 className="sw-zone__name">{z.name}</h3>
                <p className="sw-zone__detail">{z.detail}</p>
                <p className="sw-zone__spec">{z.spec}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="sw-trust" aria-labelledby="sw-sec2-h">
        <div className="sw-trust__inner">
          <div className="sw-trust__lead">
            <p className="sw-sec__kicker sw-sec__kicker--light">O firmě</p>
            <h2 id="sw-sec2-h" className="sw-trust__title">
              Ryze česká firma, která u zakázky zůstane
            </h2>
            <p className="sw-trust__text">
              Přes patnáct let stavíme komplexní zabezpečení majetku i osob.
              Specializujeme se na bytové domy a kanceláře, ale zvládneme objekt
              jakékoli velikosti — od chaty po továrnu. Flexibilní tým se
              přizpůsobí a poradí, kde má zabezpečení skutečně smysl.
            </p>
            <p className="sw-trust__text">
              Dodavatele máme zavedené a lety prověřené, komponenty ve špičkových
              parametrech. Poměr kvalita–výkon–cena držíme příznivý a poctivý.
            </p>
          </div>

          <dl className="sw-stats">
            {proof.map((p) => (
              <div className="sw-stat" key={p.k}>
                <dt className="sw-stat__k">{p.k}</dt>
                <dd className="sw-stat__v">{p.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="sw-offer" style={{ ["--i" as keyof CSSProperties]: 0 } as CSSProperties}>
          <p className="sw-offer__label">Konkrétní nabídka zdarma</p>
          <p className="sw-offer__text">
            Na vyžádání zpracujeme návrh na vybraný systém včetně cenového
            rozpočtu. Zeptejte se na cokoli — rádi to s vámi vyřešíme.
          </p>
          <div className="sw-offer__contacts">
            <a href="tel:+420602471478">+420 602 471 478</a>
            <a href="mailto:info@schwarzer.cz">info@schwarzer.cz</a>
            <span>Plickova 553/21, Praha 4</span>
          </div>
        </div>
      </section>
    </main>
  );
}

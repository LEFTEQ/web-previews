import type { CSSProperties } from "react";

type Discipline = {
  code: string;
  title: string;
  lead: string;
  items: string[];
};

type Project = {
  name: string;
  scope: string;
  date: string;
  value?: string;
};

const disciplines: Discipline[] = [
  {
    code: "SIL",
    title: "Silnoproud",
    lead: "Rozvody, které utáhnou celý objekt — od uzemnění po záložní zdroj.",
    items: [
      "Uzemnění a hromosvody",
      "Vnější rozvody nn a přípojky",
      "Vnitřní zásuvkové a světelné okruhy",
      "Rozvaděče na míru",
      "Veřejné osvětlení",
      "Záložní zdroje",
    ],
  },
  {
    code: "SLP",
    title: "Slaboproud",
    lead: "Data, kamery, přístup a zabezpečení — nervová soustava budovy.",
    items: [
      "Strukturovaná kabeláž a datové sítě",
      "PZTS — zabezpečovací a tísňové systémy",
      "EPS — elektrická požární signalizace",
      "CCTV a kontrola vstupu (EKV)",
      "VoIP, telefonní rozvody, STA",
      "Evakuační a provozní rozhlas (NZS)",
    ],
  },
  {
    code: "MaR",
    title: "Měření, regulace a Loxone",
    lead: "Chytrá instalace, která se stará sama — jsme certifikovaný partner Loxone.",
    items: [
      "Systémy MaR: Siemens, AMIT, Domat",
      "Inteligentní instalace Loxone",
      "Řízení osvětlení a vytápění",
      "Integrace stínění a bezpečnosti",
    ],
  },
  {
    code: "PD",
    title: "Projekt, revize a servis",
    lead: "Od prvního výkresu po pravidelnou revizi — bez papírové administrativy na vás.",
    items: [
      "Projektová dokumentace ve všech stupních",
      "PD i pro další profese (ASŘ, PBŘ, VZT, ZTI)",
      "Výchozí i opakované revize",
      "Profylaktické prohlídky technologií",
    ],
  },
];

const projects: Project[] = [
  { name: "FN Brno — páteřní datové rozvody", scope: "Slaboproud", date: "11/2022", value: "22 000 000" },
  { name: "MERO ČR — systém plynové detekce", scope: "Rekonstrukce", date: "05/2020", value: "20 000 000" },
  { name: "pk Solvent, DC Olomouc", scope: "Elektroinstalace", date: "04/2016", value: "15 500 000" },
  { name: "Plynovod Moravia", scope: "Technická ochrana", date: "11/2023", value: "10 500 000" },
  { name: "Národní situační centrum ochrany hranic", scope: "Elektroinstalace", date: "12/2018", value: "8 500 000" },
  { name: "Hala Gienger, Ostrava", scope: "Elektroinstalace", date: "05/2017", value: "7 000 000" },
  { name: "Zámek Moravský Krumlov", scope: "Slaboproud", date: "12/2021", value: "6 000 000" },
  { name: "FN Brno — JIP KIGOPL", scope: "Elektroinstalace", date: "12/2023", value: "5 200 000" },
  { name: "Inventec Slatina", scope: "CCTV, PZTS/EKV, VO", date: "06/2021", value: "5 500 000" },
  { name: "OC Futurum Brno — osvětlení fasády", scope: "Silnoproud", date: "04/2021", value: "2 000 000" },
];

const running = [
  { name: "Pod Hády — VO, přípojky NN", since: "od 02/2025" },
  { name: "MÚ Šumperk — zabezpečení serveroven", since: "01/2025" },
  { name: "ZŠ Čebín — elektroinstalace", since: "od 11/2024" },
  { name: "Minerva Boskovice — osvětlení haly", since: "12/2024" },
];

export default function Page() {
  return (
    <main className="vt">
      <header className="vt-topbar">
        <a className="vt-mark" href="#top" aria-label="VOLTEGO elektroinstalace, úvod">
          <span className="vt-mark__bolt" aria-hidden="true">
            <svg viewBox="0 0 24 40" width="18" height="30" role="img" aria-label="blesk">
              <path d="M13 0 0 24h8L6 40 24 14h-9l3-14z" fill="currentColor" />
            </svg>
          </span>
          <span className="vt-mark__word">
            VOLT<span className="vt-mark__ego">EGO</span>
          </span>
        </a>
        <nav className="vt-nav" aria-label="Hlavní navigace">
          <a href="#disciplines">Co umíme</a>
          <a href="#reference">Reference</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
        <a className="vt-phone" href="tel:+420725503342">+420 725 503 342</a>
      </header>

      <section className="vt-hero" id="top">
        <div className="vt-hero__grid">
          <div className="vt-hero__copy">
            <p className="vt-eyebrow">Elektroinstalace · Brno · od projektu po revizi</p>
            <h1 className="vt-hero__title">
              Vedeme proud<br />
              tam, kde má<br />
              <span className="vt-hl">být napětí.</span>
            </h1>
            <p className="vt-hero__lead">
              Silnoproud i slaboproud pod jednou střechou. Připravíme projekt,
              vybereme technologii, natáhneme kabely a předáme revizi —
              od nemocnic a nádraží po zámky a haly.
            </p>
            <div className="vt-hero__cta">
              <a className="vt-btn" href="#disciplines">Co pro vás uděláme</a>
              <a className="vt-btn vt-btn--ghost" href="tel:+420725503342">Zavolat elektrikáři</a>
            </div>
            <dl className="vt-hero__stats">
              <div>
                <dt>Loxone</dt>
                <dd>certifikovaný partner</dd>
              </div>
              <div>
                <dt>SIL · SLP · MaR</dt>
                <dd>komplet pod jednou firmou</dd>
              </div>
              <div>
                <dt>Brno</dt>
                <dd>Nejedlého 373/1</dd>
              </div>
            </dl>
          </div>
          <figure className="vt-hero__media">
            <img
              src="/hero.webp"
              alt="Elektroinstalace VOLTEGO — rozvaděče a kabeláž v realizaci"
              loading="eager"
            />
            <figcaption>V terénu, ne jen na papíře.</figcaption>
          </figure>
        </div>
      </section>

      <section className="vt-section vt-disciplines" id="disciplines" aria-labelledby="disc-h">
        <div className="vt-section__head">
          <p className="vt-eyebrow">Fáze zakázky</p>
          <h2 id="disc-h">Čtyři profese, jedna parta na stavbě</h2>
          <p className="vt-section__lead">
            Nemusíte skládat dodavatele. Projekt, silnoproud, slaboproud i chytrá
            instalace jdou od nás jako jeden celek — a administrativu zakázky
            uzavřeme za vás.
          </p>
        </div>
        <ol className="vt-cards">
          {disciplines.map((d) => (
            <li className="vt-card" key={d.code}>
              <div className="vt-card__code" aria-hidden="true">{d.code}</div>
              <h3 className="vt-card__title">{d.title}</h3>
              <p className="vt-card__lead">{d.lead}</p>
              <ul className="vt-card__list">
                {d.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
        <figure className="vt-band">
          <img
            src="/section-1.webp"
            alt="Detail zapojení rozvaděče a strukturované kabeláže"
            loading="lazy"
          />
        </figure>
      </section>

      <section className="vt-section vt-trust" id="reference" aria-labelledby="ref-h">
        <div className="vt-trust__grid">
          <div className="vt-trust__intro">
            <p className="vt-eyebrow">Reference</p>
            <h2 id="ref-h">Stavby, kde už svítí, střeží a měří naše instalace</h2>
            <p className="vt-section__lead">
              Podíleli jsme se na desítkách realizací od roku 2015 — od datových
              páteří ve fakultních nemocnicích po slaboproud na zámcích.
              Vybrané zakázky podle rozsahu:
            </p>
            <figure className="vt-trust__media">
              <img
                src="/section-2.webp"
                alt="Realizace elektroinstalace VOLTEGO na stavbě"
                loading="lazy"
              />
            </figure>
            <div className="vt-running">
              <p className="vt-running__title">Právě běží</p>
              <ul>
                {running.map((r) => (
                  <li key={r.name}>
                    <span className="vt-running__dot" aria-hidden="true" />
                    <span>{r.name}</span>
                    <span className="vt-running__since">{r.since}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="vt-ledger" role="region" aria-label="Vybrané reference podle rozsahu">
            <div className="vt-ledger__head" aria-hidden="true">
              <span>Stavba</span>
              <span>Rozsah</span>
              <span>Kč</span>
            </div>
            <ul>
              {projects.map((p) => (
                <li className="vt-ledger__row" key={p.name}>
                  <span className="vt-ledger__name">
                    {p.name}
                    <span className="vt-ledger__date">{p.date}</span>
                  </span>
                  <span className="vt-ledger__scope">{p.scope}</span>
                  <span className="vt-ledger__value">
                    {p.value ? p.value : "—"}
                  </span>
                </li>
              ))}
            </ul>
            <p className="vt-ledger__note">
              Hodnoty v Kč bez DPH. Kompletní seznam realizací rádi doložíme.
            </p>
          </div>
        </div>

        <div className="vt-contact" id="kontakt">
          <div className="vt-contact__card">
            <p className="vt-eyebrow">Kontakt</p>
            <h3>Máte stavbu? Ozvěte se panu Holoubkovi.</h3>
            <div className="vt-contact__rows">
              <a href="tel:+420725503342">+420 725 503 342</a>
              <a href="mailto:holoubek@voltego.cz">holoubek@voltego.cz</a>
            </div>
            <address className="vt-contact__addr">
              VOLTEGO elektroinstalace s.r.o.<br />
              Nejedlého 373/1, 638 00 Brno<br />
              IČ 21483345 · DIČ CZ21483345
            </address>
          </div>
        </div>
      </section>
    </main>
  );
}

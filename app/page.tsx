import type { CSSProperties } from "react";

const services = [
  {
    tag: "Fasády & zateplení",
    name: "Revitalizace bytových domů",
    desc:
      "Zateplení, nová fasáda, oprava balkonů a lodžií. Panelák i cihlový dům dostane nový kabát a vy nižší účty za teplo.",
  },
  {
    tag: "Domy & byty",
    name: "Rekonstrukce domů, bytů a interiérů",
    desc:
      "Od jedné místnosti po celý dům. Zbouráme, vyzdíme, omítneme a předáme uklizeno.",
  },
  {
    tag: "Provozovny",
    name: "Úpravy podnikatelských prostor",
    desc:
      "Ordinace, kanceláře, sklady i výrobní haly upravíme na míru provozu — s ohledem na termín otevření.",
  },
  {
    tag: "Izolace",
    name: "Hydroizolace teras, balkonů a plochých střech",
    desc:
      "Zatéká vám? Najdeme příčinu a uděláme izolaci, která vydrží roky — ne jednu sezónu.",
  },
  {
    tag: "Koupelny",
    name: "Rekonstrukce koupelen a bytových jader",
    desc:
      "Staré jádro vyměníme za novou koupelnu: obklady, rozvody i zařizovací předměty v dohodnutém termínu.",
  },
  {
    tag: "Elektro",
    name: "Elektroinstalace — silnoproud i slaboproud",
    desc:
      "Nové rozvody, zásuvky tam, kde je opravdu potřebujete, i revize hotové instalace.",
  },
  {
    tag: "Voda & topení",
    name: "Vodoinstalace a topení",
    desc:
      "Rozvody vody, odpady, radiátory i podlahové topení — od výměny kohoutku po celý dům.",
  },
];

const litWindows = new Set([
  1, 4, 7, 10, 14, 19, 22, 26, 29, 33, 37, 40, 44, 47, 50, 53,
]);
const facade = Array.from({ length: 54 }, (_, i) => i);

const trustPoints = [
  {
    k: "Vede to majitel",
    v: "Josef Kubelka domlouvá zakázku i dohlíží na stavbu osobně. Žádné call centrum.",
  },
  {
    k: "Domácí v Ústí",
    v: "Roky práce v Ústí nad Labem a okolí — víme, jak stavěly zdejší paneláky i staré činžáky.",
  },
  {
    k: "Uvidíte naši práci",
    v: "Ke každé referenci pár fotek z realizace. Rámcovou představu si uděláte hned.",
  },
  {
    k: "Držíme slovo",
    v: "Napíšeme, kdy přijedeme — a přijedeme. Slíbíme jen to, co splníme.",
  },
];

export default function Page() {
  return (
    <main className="vc-main">
      <div className="vc-top">
        <header className="vc-nav">
          <a className="vc-logo" href="#" aria-label="VECOM — stavební firma Ústí nad Labem">
            <span className="vc-logo-mark" aria-hidden="true" />
            <span className="vc-logo-name">VECOM</span>
            <span className="vc-logo-sub">stavby · Ústí n. L.</span>
          </a>
          <a className="vc-nav-call" href="tel:+420608707357">
            <span className="vc-nav-call-label">Zavolat</span>
            <span className="vc-nav-call-num">608 707 357</span>
          </a>
        </header>

        <section className="vc-hero" aria-labelledby="vc-hero-title">
          <div className="vc-hero-text">
            <p className="vc-eyebrow">Stavební firma — Ústí nad Labem</p>
            <h1 className="vc-hero-title" id="vc-hero-title">
              Děláme to,
              <br />
              co umíme.
              <br />
              A umíme to <span className="vc-accent">dobře.</span>
            </h1>
            <p className="vc-hero-lead">
              Revitalizace bytových domů, rekonstrukce bytů a koupelen,
              hydroizolace střech i balkonů. Spolehlivá parta, která v Ústí
              staví a opravuje už řadu let.
            </p>
            <div className="vc-hero-cta">
              <a className="vc-btn" href="tel:+420608707357">
                Zavolat 608 707 357
              </a>
              <span className="vc-hero-note">Po–Pá · poradíme i s postupem</span>
            </div>
          </div>

          <div className="vc-facade-wrap">
            <div className="vc-facade" role="img" aria-label="Fasáda bytového domu s rozsvícenými okny">
              {facade.map((i) => (
                <span
                  key={i}
                  className="vc-win"
                  data-lit={litWindows.has(i) ? "true" : "false"}
                  style={{ "--i": i } as CSSProperties}
                />
              ))}
            </div>
            <p className="vc-facade-cap">Revitalizace bytových domů — náš denní chleba</p>
          </div>
        </section>
      </div>

      <section className="vc-section vc-services" aria-labelledby="vc-services-title">
        <div className="vc-wrap">
          <div className="vc-head">
            <p className="vc-eyebrow vc-eyebrow--dark">Nabídka · sedm oborů pod jednou firmou</p>
            <h2 className="vc-h2" id="vc-services-title">
              Co u nás postavíme a opravíme
            </h2>
          </div>

          <ul className="vc-grid">
            {services.map((s) => (
              <li className="vc-card" key={s.name}>
                <span className="vc-card-tag">{s.tag}</span>
                <h3 className="vc-card-name">{s.name}</h3>
                <p className="vc-card-desc">{s.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="vc-section vc-trust" aria-labelledby="vc-trust-title">
        <div className="vc-wrap vc-trust-grid">
          <div className="vc-trust-intro">
            <p className="vc-eyebrow vc-eyebrow--dark">Proč VECOM</p>
            <h2 className="vc-h2" id="vc-trust-title">
              Spolehlivá firma, kterou v Ústí poznáte podle práce
            </h2>
            <p className="vc-trust-body">
              Hledáte spolehlivou a kvalitně pracující firmu? Jste tu správně.
              VECOM vede Josef Kubelka a za ta léta jsme v Ústí nad Labem a
              okolí opravili spoustu domů, bytů i provozoven. Nabízíme
              profesionální práci firmy s dlouholetými zkušenostmi — a co
              postavíme, za to se nestydíme.
            </p>
            <blockquote className="vc-quote">
              „Přijedu, kouknu na to s vámi a řeknu vám na rovinu, co to obnáší.
              Bez keců.“
              <cite>Josef Kubelka, majitel</cite>
            </blockquote>
          </div>

          <div className="vc-trust-side">
            <ul className="vc-points">
              {trustPoints.map((p) => (
                <li className="vc-point" key={p.k}>
                  <span className="vc-point-k">{p.k}</span>
                  <span className="vc-point-v">{p.v}</span>
                </li>
              ))}
            </ul>

            <div className="vc-contact">
              <p className="vc-contact-title">Ozvěte se</p>
              <a className="vc-contact-row" href="tel:+420608707357">
                <span className="vc-contact-role">Majitel</span>
                <span className="vc-contact-num">608 707 357</span>
              </a>
              <a className="vc-contact-row" href="tel:+420778422181">
                <span className="vc-contact-role">Kancelář</span>
                <span className="vc-contact-num">778 422 181</span>
              </a>
              <a className="vc-contact-row" href="mailto:info@vecom-ul.cz">
                <span className="vc-contact-role">E-mail</span>
                <span className="vc-contact-num">info@vecom-ul.cz</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

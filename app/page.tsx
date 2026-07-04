import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GIGACOMPUTER — servis a opravy počítačů Ostrava",
  description:
    "Servis notebooků, počítačů a monitorů v Ostravě. Diagnostika zdarma, oprava do 48 hodin, záruka na práci. Přineste nemocný stroj, vrátíme ho živý.",
};

const diagnostika = [
  {
    kod: "E:01",
    nazev: "Nenastartuje / černá obrazovka",
    popis:
      "Počítač zapnete a nic. Nebo naskočí ventilátor a víc už se neděje. Změříme napájení, otestujeme paměti a základní desku a řekneme vám rovnou, co je špatně.",
    cas: "od 2 hodin",
  },
  {
    kod: "E:02",
    nazev: "Zpomalil, přehřívá se, hučí",
    popis:
      "Notebook se topí a vypíná uprostřed práce. Vyčistíme chladič, vyměníme teplovodivou pastu a přepastujeme čipy. Teploty klesnou o desítky stupňů.",
    cas: "do 24 hodin",
  },
  {
    kod: "E:03",
    nazev: "Rozlitá káva, pád, prasklý displej",
    popis:
      "Klávesnice po kávě, rozbité sklo, ohnutý pant. Rozebereme, vyčistíme desku ultrazvukem a osadíme nový panel. Většinu dílů máme na skladě v Ostravě.",
    cas: "1–3 dny",
  },
  {
    kod: "E:04",
    nazev: "Data pryč, disk klape",
    popis:
      "Disk cvaká, systém nenajede, fotky a dokumenty nikde. Vytáhneme, co jde zachránit, a přeneseme na nový SSD. Bez záchrany dat neplatíte za záchranu dat.",
    cas: "dle rozsahu",
  },
];

const pilire = [
  {
    cislo: "14",
    jednotka: "let",
    text: "opravujeme počítače v Ostravě — od studentských notebooků po firemní pracovní stanice",
  },
  {
    cislo: "48",
    jednotka: "hodin",
    text: "běžná doba opravy; expresní servis do druhého dne řešíme po telefonu",
  },
  {
    cislo: "0",
    jednotka: "Kč",
    text: "za diagnostiku, když opravu neprovedete — nejdřív zjistíte cenu, pak se rozhodnete",
  },
];

export default function Page() {
  return (
    <main className="gc">
      <header className="gc-top">
        <a className="gc-mark" href="#" aria-label="GIGACOMPUTER — úvod">
          <span className="gc-mark-prompt" aria-hidden="true">&gt;_</span>
          <span className="gc-mark-name">
            GIGA<span className="gc-mark-accent">COMPUTER</span>
          </span>
        </a>
        <div className="gc-top-right">
          <span className="gc-status" aria-hidden="true" />
          <span className="gc-top-loc">servis Ostrava · Po–Pá 9–17</span>
          <a className="gc-top-tel" href="tel:+420721400500">
            +420 721 400 500
          </a>
        </div>
      </header>

      <section className="gc-hero" aria-labelledby="gc-hero-title">
        <div className="gc-hero-text">
          <p className="gc-eyebrow">
            <span className="gc-eyebrow-dot" aria-hidden="true" />
            Servis a opravy počítačů · Ostrava
          </p>
          <h1 id="gc-hero-title" className="gc-hero-title">
            Váš počítač <span className="gc-strike">neběží</span>
            <span className="gc-cursor">běží</span>.
            <br />
            Do dvou dnů zpátky u vás.
          </h1>
          <p className="gc-hero-lead">
            Přineste nemocný notebook nebo stolní počítač na naši dílnu
            v Ostravě. Řekneme vám rovnou a předem, co je špatně a kolik to
            stojí. Diagnostika zdarma, na opravu záruka.
          </p>
          <div className="gc-hero-actions">
            <a className="gc-btn gc-btn-primary" href="tel:+420721400500">
              Zavolat na servis
            </a>
            <a
              className="gc-btn gc-btn-ghost"
              href="mailto:podpora@gigacomputer.cz"
            >
              Popsat závadu e-mailem
            </a>
          </div>
          <dl className="gc-hero-meta">
            <div>
              <dt>Přijmeme dnes</dt>
              <dd>notebooky · PC · monitory · herní sestavy</dd>
            </div>
            <div>
              <dt>Neopravíme?</dt>
              <dd>diagnostiku neplatíte</dd>
            </div>
          </dl>
        </div>
        <figure className="gc-hero-media">
          <img
            src="/hero.webp"
            alt="Technik GIGACOMPUTER pod mikroskopem opravuje základní desku notebooku v ostravské dílně"
            className="gc-hero-img"
            width={880}
            height={1000}
          />
          <figcaption className="gc-hero-cap">
            <span className="gc-hero-cap-code">PING</span>
            dílna Ostrava · pracovní stůl č. 3
          </figcaption>
        </figure>
      </section>

      <section className="gc-diag" aria-labelledby="gc-diag-title">
        <div className="gc-section-head">
          <p className="gc-eyebrow">
            <span className="gc-eyebrow-dot" aria-hidden="true" />
            Co obvykle spravujeme
          </p>
          <h2 id="gc-diag-title" className="gc-section-title">
            Popište příznaky. My najdeme příčinu.
          </h2>
          <p className="gc-section-lead">
            Nejčastější závady, se kterými k nám lidé chodí. Cenu
            uslyšíte dřív, než technik sáhne po šroubováku.
          </p>
        </div>

        <ul className="gc-diag-list">
          {diagnostika.map((d) => (
            <li className="gc-diag-item" key={d.kod}>
              <span className="gc-diag-code">{d.kod}</span>
              <div className="gc-diag-body">
                <h3 className="gc-diag-name">{d.nazev}</h3>
                <p className="gc-diag-desc">{d.popis}</p>
              </div>
              <span className="gc-diag-cas">{d.cas}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="gc-trust" aria-labelledby="gc-trust-title">
        <figure className="gc-trust-media">
          <img
            src="/section-1.webp"
            alt="Detail dílny GIGACOMPUTER — rozebraný notebook, nářadí a náhradní díly připravené k opravě"
            className="gc-trust-img"
            width={900}
            height={640}
          />
        </figure>
        <div className="gc-trust-text">
          <p className="gc-eyebrow">
            <span className="gc-eyebrow-dot" aria-hidden="true" />
            Proč nám lidé nosí stroje
          </p>
          <h2 id="gc-trust-title" className="gc-section-title">
            Malá dílna v Ostravě, kde ví, co dělá.
          </h2>
          <p className="gc-section-lead">
            Nejsme e-shop, který vás pošle na reklamační formulář. Počítač
            si u nás rozebere člověk, který ho pak sám poskládá zpět —
            a zavolá vám, když najde něco navíc.
          </p>

          <div className="gc-stats">
            {pilire.map((p) => (
              <div className="gc-stat" key={p.jednotka}>
                <span className="gc-stat-num">
                  {p.cislo}
                  <span className="gc-stat-unit">{p.jednotka}</span>
                </span>
                <p className="gc-stat-text">{p.text}</p>
              </div>
            ))}
          </div>

          <blockquote className="gc-quote">
            <p>
              „Přinesl jsem notebook s rozlitou kávou, čekal jsem že je
              odepsaný. Vyčistili desku a vrátili mi ho i s daty. Za třetinu
              ceny nového.“
            </p>
            <cite>— Martin K., Ostrava-Poruba</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HB Automateriál — autoklempířství České Budějovice",
  description:
    "Autoklempířství v Českých Budějovicích. Rovnáme bourané karoserie, opravujeme boule i prorezlé prahy a vracíme lak do původního stavu. Přijeďte na nezávaznou prohlídku vozu.",
  openGraph: {
    title: "HB Automateriál — autoklempířství České Budějovice",
    description:
      "Rovnání karoserie po nehodě, oprava bulí a rzi, příprava pod lak. Klempírna v Českých Budějovicích.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const sluzby = [
  {
    kod: "01",
    nazev: "Rovnání po nehodě",
    popis:
      "Zdeformovaný bok, roztržený blatník, posunutý rám dveří. Vytáhneme plech na rovnací stolici do původní geometrie a vůz předáme připravený pod lak.",
    detail: "Bourané karoserie",
  },
  {
    kod: "02",
    nazev: "Boule a promáčkliny",
    popis:
      "Kroupy, vozík z parkoviště, ťuknutý roh na parkovišti. Menší boule vytlačíme bez broušení a stříkání metodou PDR, tam kde už lak popraskal, plech vyklepeme a vyplníme.",
    detail: "Bez zbytečného přeplácení",
  },
  {
    kod: "03",
    nazev: "Rez a prorezlé prahy",
    popis:
      "Prahy, lemy blatníků, spodky dveří. Prorezlý plech vyřízneme, navaříme nový a ošetříme proti další korozi — aby to na STK prošlo a další zimu vydrželo.",
    detail: "Svařování a antikoroze",
  },
  {
    kod: "04",
    nazev: "Příprava pod lak",
    popis:
      "Broušení, tmelení, plnič a nastavení spár. Karoserii připravíme tak, aby výsledný lak seděl barevně i tvarově a přechody nebyly poznat.",
    detail: "Předání lakovně",
  },
];

const duvody = [
  {
    cislo: "27",
    jednotka: "let v oboru",
    text: "Klempírnu v Budějovicích vedeme od devadesátek. Přes ruce nám prošly škodovky i dovozy, veteráni i dodávky.",
  },
  {
    cislo: "3",
    jednotka: "dny obvyklá oprava",
    text: "U běžné boule nebo prahu si vůz vyzvednete do tří pracovních dnů. Termín řekneme dopředu, ne až po týdnu.",
  },
  {
    cislo: "0",
    jednotka: "Kč za prohlídku",
    text: "Přijeďte, poškození si spolu prohlédneme a řekneme cenu i postup na místě. Za odhad nic neplatíte.",
  },
];

export default function Page() {
  return (
    <main className="hb">
      <header className="hb-nav">
        <a className="hb-logo" href="#" aria-label="HB Automateriál, domovská stránka">
          <span className="hb-logo-mark" aria-hidden="true">HB</span>
          <span className="hb-logo-text">
            Automateriál
            <span className="hb-logo-sub">autoklempířství · České Budějovice</span>
          </span>
        </a>
        <a className="hb-nav-call" href="tel:+420387000000">
          Zavolat klempírně
        </a>
      </header>

      <section className="hb-hero">
        <div className="hb-hero-media">
          <img
            src="/hero.webp"
            alt="Autoklempíř rovná zdeformovaný plech karoserie v dílně"
            className="hb-hero-img"
            width={1600}
            height={1000}
          />
          <span className="hb-hero-tag" aria-hidden="true">DÍLNA Č. 1</span>
        </div>

        <div className="hb-hero-body">
          <p className="hb-eyebrow">Klempírna · České Budějovice</p>
          <h1 className="hb-hero-title">
            Vyklepeme,
            <br />
            <span className="hb-hero-title-em">narovnáme</span>
            <br />
            a vrátíme
            <br />
            do tvaru.
          </h1>
          <p className="hb-hero-lede">
            Bourané boky, kroupami potlučené kapoty, prorezlé prahy.
            V HB Automateriál dostáváme plech zpátky do původní geometrie —
            připravený pod lak, ne jen zamázlý.
          </p>
          <div className="hb-hero-actions">
            <a className="hb-btn" href="tel:+420387000000">
              Zavolat: 387 00 00 00
            </a>
            <a className="hb-btn hb-btn-ghost" href="mailto:dilna@hbautomaterial.cz">
              Napsat na dílnu
            </a>
          </div>
          <p className="hb-hero-note">
            Rudolfovská tř., České Budějovice · po–pá 7–16 h
          </p>
        </div>
      </section>

      <section className="hb-services" aria-labelledby="sluzby-nadpis">
        <div className="hb-section-head">
          <p className="hb-eyebrow">Co u nás na stole opravíme</p>
          <h2 id="sluzby-nadpis" className="hb-h2">Práce s plechem</h2>
        </div>

        <div className="hb-services-grid">
          <div className="hb-services-list">
            {sluzby.map((s) => (
              <article className="hb-card" key={s.kod}>
                <div className="hb-card-kod" aria-hidden="true">{s.kod}</div>
                <div className="hb-card-body">
                  <h3 className="hb-card-nazev">{s.nazev}</h3>
                  <p className="hb-card-popis">{s.popis}</p>
                  <p className="hb-card-detail">{s.detail}</p>
                </div>
              </article>
            ))}
          </div>

          <figure className="hb-services-fig">
            <img
              src="/section-1.webp"
              alt="Detail opravovaného blatníku po vytažení plechu, připravený k broušení"
              className="hb-fig-img"
              width={900}
              height={1100}
            />
            <figcaption className="hb-fig-cap">
              Blatník po vytažení na stolici — před tmelením a plničem.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="hb-trust" aria-labelledby="onas-nadpis">
        <div className="hb-trust-media">
          <img
            src="/section-2.webp"
            alt="Interiér autoklempířské dílny s nářadím a rozpracovaným vozem"
            className="hb-trust-img"
            width={1200}
            height={900}
          />
        </div>

        <div className="hb-trust-body">
          <p className="hb-eyebrow">Proč k nám</p>
          <h2 id="onas-nadpis" className="hb-h2">
            Malá dílna,
            <br />ve které vás znají jménem.
          </h2>
          <p className="hb-trust-lede">
            Žádná pobočková síť. Vůz vám přebírá ten, kdo na něm bude
            pracovat, a ten vám taky zavolá, když při rozebrání najdeme
            něco navíc — dřív, než to začneme dělat.
          </p>

          <dl className="hb-stats">
            {duvody.map((d) => (
              <div className="hb-stat" key={d.jednotka}>
                <dt className="hb-stat-num">{d.cislo}</dt>
                <dd className="hb-stat-txt">
                  <span className="hb-stat-unit">{d.jednotka}</span>
                  {d.text}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}

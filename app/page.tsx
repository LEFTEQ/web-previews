import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DAP-LIBEREC a.s. — vzduchotechnika, klimatizace a tepelná čerpadla",
  description:
    "Montáž a servis klimatizací, vzduchotechniky a tepelných čerpadel v Liberci a okolí. Daikin, Toshiba, Panasonic, Midea. Přes 20 let na trhu.",
};

const services = [
  {
    kod: "VZT",
    nazev: "Vzduchotechnika",
    popis:
      "Přívod čerstvého a odvod znehodnoceného vzduchu — od kanceláří po výrobní haly. Montovali jsme systémy VRV Daikin pro budovy Komerční banky v Liberci a Jablonci nad Nisou.",
    detail: ["Kanálové a podstropní jednotky", "Vzduchotechnické sestavy na míru", "Měření a regulace (MaR)"],
  },
  {
    kod: "KLIMA",
    nazev: "Klimatizace",
    popis:
      "Split, multisplit, VRV i VRF jednotky pro pohodu prostředí v létě i v zimě. Dodáváme a montujeme Daikin, Toshiba, Panasonic a Midea, staráme se o servis a čištění.",
    detail: ["Nástěnné, kazetové i podstropní jednotky", "Čištění a dezinfekce výparníku", "Záruční i pozáruční servis"],
  },
  {
    kod: "TČ",
    nazev: "Tepelná čerpadla",
    popis:
      "Vzduch-vzduch a vzduch-voda od LG a Toshiba, i do rodinných domů. S rostoucí výstavbou pasivních domů řešíme také řízené větrání s rekuperací.",
    detail: ["Vytápění i ohřev vody", "Rekuperace pro nízkoenergetické domy", "Návrh podle spotřeby domu"],
  },
];

const chladiva = [
  "Odsátí chladiva a ekologická likvidace",
  "Výrobníky chladné vody",
  "Opravy jednotek split, VRV a VRF",
  "Cenová nabídka podle vaší projektové dokumentace",
];

export default function Page() {
  return (
    <main className="dap">
      <header className="dap-top">
        <a className="dap-mark" href="#uvod" aria-label="DAP-LIBEREC, úvod">
          <span className="dap-mark__dap">DAP</span>
          <span className="dap-mark__sep" aria-hidden="true" />
          <span className="dap-mark__loc">LIBEREC</span>
        </a>
        <a className="dap-phone" href="tel:+420485151121">+420 485 151 121</a>
      </header>

      <section className="dap-hero" id="uvod">
        <div className="dap-hero__media">
          <img src="/hero.webp" alt="Montáž venkovní klimatizační jednotky technikem DAP-LIBEREC" />
          <div className="dap-hero__grille" aria-hidden="true">
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} />
            ))}
          </div>
        </div>
        <div className="dap-hero__copy">
          <p className="dap-eyebrow">Vzduchotechnika · Liberec · od roku 1996</p>
          <h1 className="dap-h1">
            Přivádíme <em>čerstvý vzduch</em> tam, kde se pracuje i bydlí.
          </h1>
          <p className="dap-lede">
            DAP-LIBEREC a.s. dodává, montuje a servisuje klimatizace, vzduchotechniku
            a tepelná čerpadla. Nejčastěji v okolí Liberce, po celé České republice.
          </p>
          <div className="dap-hero__cta">
            <a className="dap-btn" href="tel:+420485151121">Zavolat technikovi</a>
            <a className="dap-btn dap-btn--ghost" href="#sluzby">Co montujeme</a>
          </div>
          <dl className="dap-facts">
            <div><dt>Na trhu</dt><dd>28+ let</dd></div>
            <div><dt>Značky</dt><dd>Daikin · Toshiba · Midea</dd></div>
            <div><dt>Sídlo</dt><dd>Vilová 297/6, Liberec</dd></div>
          </dl>
        </div>
      </section>

      <section className="dap-services" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="dap-section-head">
          <h2 id="sluzby-nadpis">Tři obory, jeden dodavatel</h2>
          <p>
            Od návrhu přes montáž až po servis. Nepředáváme vás mezi firmami —
            vzduchotechniku, chlazení i topení řešíme pod jednou střechou.
          </p>
        </div>
        <ul className="dap-cards">
          {services.map((s) => (
            <li className="dap-card" key={s.kod}>
              <span className="dap-card__kod" aria-hidden="true">{s.kod}</span>
              <h3>{s.nazev}</h3>
              <p className="dap-card__popis">{s.popis}</p>
              <ul className="dap-card__list">
                {s.detail.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <figure className="dap-figure">
          <img src="/section-1.webp" alt="Vzduchotechnické rozvody a klimatizační jednotky v technické místnosti" />
          <figcaption>
            Systémy VRV Daikin i řízené větrání s rekuperací — od bankovních budov
            po rodinné domy.
          </figcaption>
        </figure>
        <div className="dap-strip">
          <p className="dap-strip__nadpis">Zajistíme také</p>
          <ul>
            {chladiva.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="dap-about" id="o-nas" aria-labelledby="o-nas-nadpis">
        <figure className="dap-about__media">
          <img src="/section-2.webp" alt="Tým DAP-LIBEREC při realizaci klimatizace" />
        </figure>
        <div className="dap-about__copy">
          <p className="dap-eyebrow">O společnosti</p>
          <h2 id="o-nas-nadpis">
            Čerpáme z více než dvaceti let zkušeností.
          </h2>
          <p>
            Jsme liberecká firma, která ví, co obnáší postavit vzduchotechniku do
            provozu, kde se nesmí nic zastavit. Poradíme s návrhem, vypracujeme
            cenovou nabídku podle vaší dokumentace a postaráme se i o záruční a
            pozáruční servis.
          </p>
          <ul className="dap-people">
            <li>
              <span className="dap-people__jmeno">Ing. Jan Řáha</span>
              <span className="dap-people__role">Ředitel, rozpočty a realizace zakázek</span>
              <a href="tel:+420737248510">+420 737 248 510</a>
            </li>
            <li>
              <span className="dap-people__jmeno">Petr Hliněný</span>
              <span className="dap-people__role">Manažer — rozpočty a realizace</span>
              <a href="tel:+420733372644">+420 733 372 644</a>
            </li>
            <li>
              <span className="dap-people__jmeno">Lenka Hajíčková</span>
              <span className="dap-people__role">Asistentka, fakturace, servis</span>
              <a href="tel:+420725828488">+420 725 828 488</a>
            </li>
          </ul>
          <p className="dap-adresa">
            DAP-LIBEREC a.s. · Vilová 297/6, 460 10 Liberec · IČO 63145197
          </p>
        </div>
      </section>
    </main>
  );
}

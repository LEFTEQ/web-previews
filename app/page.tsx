import type { CSSProperties } from "react";

const sluzby = [
  {
    kod: "01",
    nazev: "Vytápění a rozvody",
    popis:
      "Návrh a montáž otopné soustavy na klíč — radiátory, měděné i plastové rozvody, vyvážení větví a hydraulické seřízení, aby topilo všude stejně.",
  },
  {
    kod: "02",
    nazev: "Kotle a jejich výměna",
    popis:
      "Plynové kondenzační kotle i elektrokotle. Demontáž starého zdroje, montáž nového, napojení, revize a uvedení do provozu během jednoho dne.",
  },
  {
    kod: "03",
    nazev: "Tepelná čerpadla",
    popis:
      "Vzduch-voda pro rodinné domy v Budějovicích i okolí. Spočítáme výkon na váš dům, ne na katalog, a propojíme s podlahovým vytápěním.",
  },
  {
    kod: "04",
    nazev: "Podlahové vytápění",
    popis:
      "Teplovodní podlahovka do novostaveb i rekonstrukcí. Rozdělovače, smyčky, regulace po místnostech — nízká teplota vody, nízké účty.",
  },
  {
    kod: "05",
    nazev: "Servis a havárie",
    popis:
      "Netopí kotel, kape spoj, padá tlak? Přijedeme, najdeme příčinu a opravíme. Pravidelné servisní prohlídky držíme v termínu za vás.",
  },
];

export default function Page() {
  return (
    <main className="hs">
      <header className="hs-top">
        <a className="hs-mark" href="#" aria-label="HRUBINSTAL, topenářství České Budějovice">
          <span className="hs-mark-icon" aria-hidden="true" />
          <span className="hs-mark-text">
            HRUBIN<span className="hs-mark-thin">STAL</span>
          </span>
        </a>
        <span className="hs-loc">topenářství · České Budějovice</span>
      </header>

      <section className="hs-hero">
        <div className="hs-hero-media">
          <img
            src="/hero.webp"
            alt="Měděné rozvody topení a kotel připravené k zapojení v rozdělovači"
            className="hs-hero-img"
          />
          <div className="hs-gauge" role="img" aria-label="Teplota topné vody 62 stupňů">
            <div className="hs-gauge-dial">
              <span className="hs-needle" />
            </div>
            <div className="hs-gauge-read">
              <strong>62</strong>
              <span>°C na výstupu</span>
            </div>
          </div>
        </div>

        <div className="hs-hero-copy">
          <p className="hs-eyebrow">studená voda jde dovnitř — teplý dům ven</p>
          <h1>
            Topení, které drží<br />
            tlak i v lednu.
          </h1>
          <p className="hs-lead">
            HRUBINSTAL je topenářská firma z Českých Budějovic. Postavíme vám
            otopnou soustavu od kotle po poslední radiátor, seřídíme ji a
            staráme se, aby topila roky bez starostí.
          </p>
          <div className="hs-cta">
            <a className="hs-btn" href="tel:+420380000000">Zavolat topenáři</a>
            <span className="hs-cta-note">Po–Pá 7–17 · výjezd po Budějovicku</span>
          </div>
        </div>
      </section>

      <section className="hs-sec hs-services" aria-labelledby="sluzby-nadpis">
        <div className="hs-sec-head">
          <p className="hs-eyebrow">co u nás objednáte</p>
          <h2 id="sluzby-nadpis">Od první trubky po teplý radiátor</h2>
        </div>
        <ol className="hs-list">
          {sluzby.map((s) => (
            <li className="hs-item" key={s.kod}>
              <span className="hs-item-kod" aria-hidden="true">{s.kod}</span>
              <div className="hs-item-body">
                <h3>{s.nazev}</h3>
                <p>{s.popis}</p>
              </div>
            </li>
          ))}
        </ol>
        <figure className="hs-fig">
          <img
            src="/section-1.webp"
            alt="Detail montáže rozdělovače a oběhových čerpadel topné soustavy"
          />
        </figure>
      </section>

      <section className="hs-sec hs-about" aria-labelledby="o-nas-nadpis">
        <figure className="hs-fig hs-fig-about">
          <img
            src="/section-2.webp"
            alt="Topenář při seřizování kondenzačního kotle v technické místnosti"
          />
        </figure>
        <div className="hs-about-copy">
          <p className="hs-eyebrow">proč lidé volají právě nám</p>
          <h2 id="o-nas-nadpis">Místní řemeslo, ne anonymní montéři</h2>
          <p>
            Topíme po Českých Budějovicích a okolních obcích. Přijedeme,
            podíváme se na váš dům i staré rozvody a poradíme řešení, které
            dává smysl pro vás — ne to nejdražší z katalogu.
          </p>
          <ul className="hs-facts">
            <li>
              <strong>18 let</strong>
              <span>v topenářském řemesle na jihu Čech</span>
            </li>
            <li>
              <strong>1 den</strong>
              <span>obvyklá výměna kondenzačního kotle</span>
            </li>
            <li>
              <strong>Revize</strong>
              <span>plynu i tlakové zkoušky pod jednou střechou</span>
            </li>
          </ul>
          <blockquote className="hs-quote">
            „Vyměnili nám kotel za dopoledne a večer už jsme topili. Vše
            uklizené, vysvětlené, tlak drží.“
            <cite>— rodina Markových, Rožnov u Č. Budějovic</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}

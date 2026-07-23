import { AiImage } from "./_ui";
import { Heat } from "./motion";

const services = [
  {
    id: "kotle",
    name: "Kotle",
    full: "Plynové a kondenzační kotle",
    desc: "Montáž nového zdroje, výměna dosluhujícího kotle a roční servis s revizí. Vyberu výkon na míru vaší tepelné ztrátě, ne z katalogu.",
    spec: "12–35 kW",
    specLabel: "výkon zdroje",
  },
  {
    id: "radiatory",
    name: "Radiátory",
    full: "Radiátory a otopná tělesa",
    desc: "Výměna starých článků, přepojení, odvzdušnění a doladění tak, aby topilo v každém pokoji stejně. Ocel, litina i hliník.",
    spec: "55/45 °C",
    specLabel: "teplotní spád",
  },
  {
    id: "podlahovka",
    name: "Podlahové vytápění",
    full: "Podlahové vytápění",
    desc: "Návrh okruhů, pokládka a napojení na rozdělovač. Nízkoteplotní systém, který se skvěle snese s kondenzačním kotlem i tepelným čerpadlem.",
    spec: "do 40 °C",
    specLabel: "otopná voda",
  },
  {
    id: "rozvody",
    name: "Rozvody",
    full: "Rozvody vody a plynu",
    desc: "Nové rozvody i rekonstrukce ve stávajícím domě. Měď, plast i lisovaný spoj — vždy s tlakovou zkouškou a revizní zprávou.",
    spec: "měď · plast",
    specLabel: "materiál",
  },
];

const references = [
  {
    quote:
      "Vyměnil nám starý plynový kotel za kondenzační a přepojil radiátory. Přijel na čas, po sobě uklidil a topení konečně reaguje, jak má.",
    who: "Jana H.",
    where: "Rožnov, České Budějovice",
  },
  {
    quote:
      "Podlahové topení v přístavbě zvládl od návrhu po zkoušku za dva dny. Vysvětlil každý krok a doporučil, kde neutrácet zbytečně.",
    who: "Petr M.",
    where: "Litvínovice",
  },
];

export default function Page() {
  return (
    <main className="page" id="top">
      <Heat />

      <header className="masthead">
        <a className="wordmark" href="#top">
          <span className="wordmark__name">ZOUREK</span>
          <span className="wordmark__trade">topenářství · České Budějovice</span>
        </a>
        <a className="call" href="#kontakt" aria-label="Zavolat Martinovi">
          <span className="call__dot" aria-hidden="true" />
          Zavolat —
        </a>
      </header>

      <section className="section hero" aria-labelledby="hero-title">
        <div className="hero__glow" aria-hidden="true" />
        <div className="hero__inner">
          <p className="eyebrow">
            <span className="eyebrow__mark" aria-hidden="true" />
            Topenář · rodinné domy a byty v Českých Budějovicích
          </p>
          <h1 className="hero__title" id="hero-title">
            Topení, které drží
            <br />
            teplotu i v tuhém
            <span className="hero__title-accent"> lednu.</span>
          </h1>
          <p className="hero__lede">
            Jsem Martin Zourek. Zapojuji kotle, radiátory a podlahové vytápění
            na míru vašemu domu — od výpočtu tepelné ztráty po revizi a tlakovou
            zkoušku. Přijedu, změřím a rozehřeju to pořádně.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#kontakt">
              Zavolat —
            </a>
            <a className="btn btn--ghost" href="#sluzby">
              Co dokážu zapojit
            </a>
          </div>
          <dl className="hero__specs">
            <div className="spec">
              <dt>V oboru</dt>
              <dd className="num">18 let</dd>
            </div>
            <div className="spec">
              <dt>Dojezd</dt>
              <dd className="num">do 40 km</dd>
            </div>
            <div className="spec">
              <dt>Havárie topení</dt>
              <dd className="num">do 24 h</dd>
            </div>
          </dl>
        </div>
        <figure className="hero__media">
          <AiImage
            src="/hero.webp"
            alt="Martin Zourek při montáži plynového kondenzačního kotle"
            className="hero__img"
          />
        </figure>
      </section>

      <section className="section circuit" id="sluzby" aria-labelledby="sluzby-title">
        <header className="sec-head">
          <p className="eyebrow">
            <span className="eyebrow__mark" aria-hidden="true" />
            Otopný okruh
          </p>
          <h2 className="sec-head__title" id="sluzby-title">
            Každá služba visí na jednom potrubí
          </h2>
          <p className="sec-head__note">
            Tak, jak doopravdy vede otopná soustava domem — od zdroje tepla
            přes rozvody až k poslednímu tělesu. Zapojím celý okruh, nebo jen
            větev, kterou potřebujete.
          </p>
        </header>

        <ol className="circuit__list">
          {services.map((s, i) => (
            <li className="node" key={s.id} id={s.id}>
              <span className="node__fitting" aria-hidden="true" />
              <div className="node__body">
                <p className="node__index num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="node__name">{s.full}</h3>
                <p className="node__desc">{s.desc}</p>
                <p className="node__spec">
                  <span className="node__spec-val num">{s.spec}</span>
                  <span className="node__spec-label">{s.specLabel}</span>
                </p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="circuit__shot">
          <AiImage
            src="/section-1.webp"
            alt="Nové měděné rozvody topení a rozdělovač podlahového vytápění"
            className="circuit__shot-img"
          />
          <figcaption>Z poslední zakázky: rozdělovač podlahovky a nové rozvody v novostavbě u Budějovic.</figcaption>
        </figure>
      </section>

      <section className="section trust" id="o-mne" aria-labelledby="trust-title">
        <div className="trust__grid">
          <div className="trust__text">
            <p className="eyebrow">
              <span className="eyebrow__mark" aria-hidden="true" />
              Řemeslo, ne šablona
            </p>
            <h2 className="sec-head__title" id="trust-title">
              Topení dělám osmnáct let a pořád sám
            </h2>
            <p className="trust__lede">
              Žádná směna montérů, které vidíte poprvé. K vám přijdu já, poradím
              se s vámi nad kotlem i účtem za plyn a odvedu práci, za kterou
              ručím. Pracuji po Českých Budějovicích a okolí zhruba do 40 km.
            </p>
            <ul className="trust__list">
              <li>Výpočet tepelné ztráty, ne odhad podle metrů</li>
              <li>Tlaková zkouška a revizní zpráva ke každé plynové práci</li>
              <li>Servis kotle, který jsem zapojil, i po letech</li>
            </ul>
            <dl className="trust__stats">
              <div className="spec">
                <dt>Zapojených kotlů</dt>
                <dd className="num">400+</dd>
              </div>
              <div className="spec">
                <dt>Práce v okolí</dt>
                <dd className="num">40 km</dd>
              </div>
            </dl>
          </div>
          <figure className="trust__media">
            <AiImage
              src="/section-2.webp"
              alt="Martin Zourek kontroluje tlak v otopné soustavě"
              className="trust__img"
            />
          </figure>
        </div>

        <div className="trust__refs">
          {references.map((r) => (
            <blockquote className="ref" key={r.who}>
              <span className="ref__mark" aria-hidden="true" />
              <p className="ref__quote">{r.quote}</p>
              <footer className="ref__by">
                <span className="ref__who">{r.who}</span>
                <span className="ref__where">{r.where}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
    </main>
  );
}

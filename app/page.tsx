import React from "react";

const services = [
  {
    id: "01",
    name: "Tepelná čerpadla",
    tag: "vzduch–voda / země–voda",
    text: "Zemní, nebo vzduchové? Spočítáme, který typ se u vás vyplatí, a napojíme ho na vaši otopnou soustavu.",
  },
  {
    id: "02",
    name: "Rekuperace",
    tag: "Zehnder",
    text: "Čerstvý vzduch bez otevírání oken. Lepší spánek, snazší soustředění a méně vlhkosti v domě.",
  },
  {
    id: "03",
    name: "Klimatizace",
    tag: "Daikin",
    text: "Tepelné čerpadlo vzduch–vzduch. V létě chladí, v přechodných měsících levně přitápí.",
  },
  {
    id: "04",
    name: "Systémy vytápění",
    tag: "návrh na míru",
    text: "Navrhneme a namontujeme celou otopnou soustavu tak, aby čerpadlo pracovalo co nejúsporněji.",
  },
  {
    id: "05",
    name: "Fotovoltaika",
    tag: "vlastní elektřina",
    text: "Panely na střechu, které pohánějí vaše čerpadlo. Méně nakoupené energie, rychlejší návratnost.",
  },
];

const steps = [
  {
    n: "01",
    title: "Návrh",
    text: "Přijedeme, změříme dům a připravíme nabídku šitou na míru — bez tlaku a nezávazně.",
  },
  {
    n: "02",
    title: "Dotace",
    text: "Papírování vezmeme na sebe. Zákazníkům jsme takto vyřídili přes 17 milionů korun.",
  },
  {
    n: "03",
    title: "Montáž",
    text: "Instaluje vlastní tým, ne subdodavatel. Za sebou máme přes 1 400 hotových čerpadel.",
  },
  {
    n: "04",
    title: "Servis",
    text: "Samostatné servisní oddělení, které pružně reaguje. Autorizovaný servis IVT, Zehnder i Daikin.",
  },
];

const stats = [
  { value: "30", unit: "let", label: "zkušeností na Vysočině" },
  { value: "1 400+", unit: "ks", label: "instalovaných čerpadel" },
  { value: "17 mil.+", unit: "Kč", label: "vyřízených dotací" },
  { value: "1 800+", unit: "", label: "spokojených domácností" },
];

export default function Page() {
  return (
    <main className="tc">
      {/* HERO — studená strana */}
      <section className="tc-hero" aria-labelledby="tc-hero-title">
        <header className="tc-topbar">
          <a className="tc-wordmark" href="#" aria-label="Tepelná čerpadla Jihlava — domů">
            <span className="tc-mono" aria-hidden="true">tč</span>
            <span className="tc-wordmark-text">
              Tepelná čerpadla
              <em>Jihlava</em>
            </span>
          </a>
          <a className="tc-phone" href="tel:+420777324528">
            <span className="tc-phone-label">Zavolejte specialistovi</span>
            <span className="tc-phone-num">+420 777 324 528</span>
          </a>
        </header>

        <div className="tc-hero-grid">
          <div className="tc-hero-copy">
            <p className="tc-eyebrow tc-rise">Jihlava · celá Vysočina · topíme 30 let</p>
            <h1 id="tc-hero-title" className="tc-rise">
              Z mrazivého vzduchu <em>uděláme teplo</em> pro celý váš dům.
            </h1>
            <p className="tc-lede tc-rise">
              Tepelná čerpadla, rekuperace, klimatizace i fotovoltaika. Navrhneme,
              vyřídíme dotaci, namontujeme — a pak se staráme o servis.
            </p>
            <div className="tc-hero-meta tc-rise">
              <span>Fritzova 4258/2, 586 01 Jihlava</span>
              <span aria-hidden="true">·</span>
              <span>sysel@tc-jihlava.cz</span>
            </div>
          </div>

          <figure className="tc-hero-media tc-rise">
            <img
              src="/hero.webp"
              alt="Venkovní jednotka tepelného čerpadla nainstalovaná u rodinného domu na Vysočině"
              width={880}
              height={720}
              loading="eager"
            />
            <figcaption className="tc-gauge">
              <span className="tc-gauge-cop">COP 4,8</span>
              <span className="tc-gauge-flow">−15 °C&nbsp;→&nbsp;+55 °C</span>
            </figcaption>
          </figure>
        </div>

        {/* SIGNATURE — teplotní stupnice */}
        <div className="tc-scale" role="img" aria-label="Tepelné čerpadlo přenáší teplo z mrazivého venkovního vzduchu při −15 °C na topnou vodu o teplotě +55 °C">
          <div className="tc-scale-end tc-scale-cold">
            <span className="tc-scale-temp">−15 °C</span>
            <span className="tc-scale-note">mrazivý vzduch venku</span>
          </div>
          <div className="tc-scale-bar">
            <span className="tc-scale-fill" />
            <span className="tc-scale-ticks" aria-hidden="true">
              {Array.from({ length: 15 }).map((_, i) => (
                <span key={i} />
              ))}
            </span>
          </div>
          <div className="tc-scale-end tc-scale-warm">
            <span className="tc-scale-temp">+55 °C</span>
            <span className="tc-scale-note">topná voda v domě</span>
          </div>
        </div>
      </section>

      {/* SEKCE 1 — Nabídka / strojovna */}
      <section className="tc-offer" aria-labelledby="tc-offer-title">
        <div className="tc-offer-head">
          <p className="tc-section-eyebrow">Co pro vás uděláme</p>
          <h2 id="tc-offer-title">Komplexní řešení vytápění a chlazení</h2>
          <p className="tc-offer-intro">
            Neprodáváme jeden krabicový produkt. Podle domu i rozpočtu poskládáme
            systém, který spolu ladí od zdroje tepla až po poslední radiátor.
          </p>
        </div>

        <div className="tc-offer-body">
          <ul className="tc-cards">
            {services.map((s) => (
              <li key={s.id} className="tc-card">
                <span className="tc-card-id">{s.id}</span>
                <div className="tc-card-main">
                  <h3>{s.name}</h3>
                  <p>{s.text}</p>
                </div>
                <span className="tc-card-tag">{s.tag}</span>
              </li>
            ))}
          </ul>

          <figure className="tc-offer-media">
            <img
              src="/section-1.webp"
              alt="Detail vnitřní jednotky a rozvodů tepelného čerpadla během montáže"
              width={720}
              height={900}
              loading="lazy"
            />
            <figcaption>
              Švédská tepelná čerpadla IVT, rekuperace Zehnder a klimatizace Daikin
              — montujeme a servisujeme značky, kterým věříme.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* SEKCE 2 — Důvěra / teplá strana */}
      <section className="tc-trust" aria-labelledby="tc-trust-title">
        <div className="tc-trust-grid">
          <figure className="tc-trust-media">
            <img
              src="/section-2.webp"
              alt="Technik firmy při servisní kontrole tepelného čerpadla"
              width={720}
              height={880}
              loading="lazy"
            />
          </figure>

          <div className="tc-trust-copy">
            <p className="tc-section-eyebrow tc-eyebrow-warm">Proč lidé na Vysočině volají nám</p>
            <h2 id="tc-trust-title">Naše práce nekončí montáží</h2>
            <p className="tc-trust-intro">
              Od prvního návrhu až po servis za pár let jednáte pořád s jednou firmou
              z Jihlavy. Nikoho si nepřehazujeme — a to poznáte, až budete něco potřebovat.
            </p>

            <ol className="tc-steps">
              {steps.map((step) => (
                <li key={step.n}>
                  <span className="tc-step-n">{step.n}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <dl className="tc-stats" aria-label="Naše čísla">
          {stats.map((st) => (
            <div key={st.label} className="tc-stat">
              <dt>
                <span className="tc-stat-value">{st.value}</span>
                {st.unit ? <span className="tc-stat-unit">{st.unit}</span> : null}
              </dt>
              <dd>{st.label}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}

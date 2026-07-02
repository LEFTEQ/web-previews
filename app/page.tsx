const sluzby = [
  {
    nazev: "Kuchyně na míru",
    popis:
      "Kuchyň navrhneme přesně na vaše zdi, spotřebiče i výšku pracovní desky. Od zaměření po montáž vše řešíme my — vy jen vaříte.",
    material: "lamino / dýha / lak",
    doba: "6–8 týdnů od návrhu",
  },
  {
    nazev: "Vestavěné skříně",
    popis:
      "Skříň od podlahy ke stropu, do niky i pod šikminu. Vnitřek rozvrhneme podle toho, co skutečně věšíte a skládáte.",
    material: "posuvné i pantové dveře",
    doba: "4–6 týdnů od návrhu",
  },
  {
    nazev: "Obývací stěny a knihovny",
    popis:
      "Nábytek kolem televize, krbu nebo pracovního koutu. Skryjeme kabely, přiznáme dřevo a necháme prostor dýchat.",
    material: "dýhované masivní hrany",
    doba: "5–7 týdnů od návrhu",
  },
  {
    nazev: "Koupelnový nábytek",
    popis:
      "Skříňky pod umyvadlo i závěsné sestavy z materiálů, které vlhkost vydrží. Přesně na vaše rozvody a obklady.",
    material: "voděodolné desky, ABS hrany",
    doba: "4–5 týdnů od návrhu",
  },
];

const kroky = [
  {
    krok: "Zaměření",
    text: "Přijedeme k vám v Liberci a okolí, změříme prostor laserem na milimetr a probereme, jak nábytek budete používat.",
  },
  {
    krok: "Návrh",
    text: "Do týdne dostanete 3D vizualizaci a přesnou cenu. Návrh ladíme, dokud nesedí — bez příplatků za změny.",
  },
  {
    krok: "Výroba",
    text: "Řežeme a olepujeme ve vlastní dílně. Každý korpus před expedicí sestavíme a zkontrolujeme kování.",
  },
  {
    krok: "Montáž",
    text: "Namontujeme, seřídíme dvířka, uklidíme po sobě. Odvoz starého nábytku domluvíme předem.",
  },
];

export default function Page() {
  return (
    <main className="id-main">
      {/* ===== HERO ===== */}
      <section className="id-hero" aria-label="Interiery Design — nábytek na míru, Liberec">
        <header className="id-topbar">
          <div className="id-wordmark" aria-label="Interiery Design">
            <span className="id-wordmark-top">INTERIERY</span>
            <span className="id-wordmark-bottom">DESIGN</span>
          </div>
          <p className="id-topbar-loc">truhlárna · Liberec</p>
        </header>

        <div className="id-hero-grid">
          <div className="id-hero-copy">
            <p className="id-eyebrow">Nábytek na míru z liberecké dílny</p>
            <h1 className="id-hero-title">
              <span className="id-line id-line-1">Na milimetr</span>
              <span className="id-line id-line-2">přesně do</span>
              <span className="id-line id-line-3">
                vašeho <em>bytu.</em>
              </span>
            </h1>
            <p className="id-hero-sub">
              Kuchyně, vestavěné skříně a nábytek, který sedí do niky, pod šikminu
              i kolem křivé zdi. Zaměříme, navrhneme ve 3D, vyrobíme a namontujeme
              — vše pod jednou střechou v Liberci.
            </p>
            <div className="id-hero-actions">
              <a className="id-btn id-btn-solid" href="tel:+420485100100">
                Zavolat do dílny
              </a>
              <a className="id-btn id-btn-line" href="mailto:info@interierydesign.cz">
                Poslat rozměry e-mailem
              </a>
            </div>
          </div>

          {/* Signature: kótovaný "výkres" skříně — svět truhlářské dílny */}
          <div className="id-blueprint" aria-hidden="true">
            <div className="id-bp-frame">
              <span className="id-bp-dim id-bp-dim-top">
                <i className="id-bp-tick" />
                2 640 mm
                <i className="id-bp-tick" />
              </span>
              <span className="id-bp-dim id-bp-dim-side">
                <i className="id-bp-tick" />
                2 380 mm
                <i className="id-bp-tick" />
              </span>
              <div className="id-bp-cabinet">
                <div className="id-bp-door id-bp-door-a" />
                <div className="id-bp-door id-bp-door-b" />
                <div className="id-bp-shelfrow">
                  <div className="id-bp-shelf" />
                  <div className="id-bp-shelf" />
                  <div className="id-bp-shelf id-bp-shelf-wood" />
                </div>
              </div>
              <p className="id-bp-note">skříň č. 214 — nika, ložnice, Ruprechtice</p>
            </div>
          </div>
        </div>

        <div className="id-hero-strip" role="list" aria-label="Proč Interiery Design">
          <p role="listitem"><strong>18 let</strong> vlastní výroby</p>
          <p role="listitem"><strong>3D návrh</strong> a cena do týdne</p>
          <p role="listitem"><strong>Liberec</strong> a okolí do 40 km</p>
          <p role="listitem"><strong>5 let</strong> záruka na korpusy</p>
        </div>
      </section>

      {/* ===== SLUŽBY ===== */}
      <section className="id-sluzby" aria-labelledby="sluzby-h">
        <div className="id-section-head">
          <p className="id-eyebrow">Co vyrábíme</p>
          <h2 id="sluzby-h">
            Čtyři věci, které umíme <em>opravdu dobře.</em>
          </h2>
        </div>

        <div className="id-sluzby-grid">
          {sluzby.map((s) => (
            <article className="id-karta" key={s.nazev}>
              <h3>{s.nazev}</h3>
              <p className="id-karta-popis">{s.popis}</p>
              <dl className="id-karta-meta">
                <div>
                  <dt>Materiál</dt>
                  <dd>{s.material}</dd>
                </div>
                <div>
                  <dt>Termín</dt>
                  <dd>{s.doba}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      {/* ===== JAK PRACUJEME + DŮVĚRA ===== */}
      <section className="id-proces" aria-labelledby="proces-h">
        <div className="id-section-head">
          <p className="id-eyebrow id-eyebrow-light">Od zaměření po montáž</p>
          <h2 id="proces-h">
            Jedna dílna, <em>žádné předávání</em> mezi firmami.
          </h2>
        </div>

        <ol className="id-kroky">
          {kroky.map((k, i) => (
            <li className="id-krok" key={k.krok}>
              <span className="id-krok-cislo">{String(i + 1).padStart(2, "0")}</span>
              <h3>{k.krok}</h3>
              <p>{k.text}</p>
            </li>
          ))}
        </ol>

        <figure className="id-reference">
          <blockquote>
            „Kuchyň do starého paneláku v Rochlici, kde není rovná ani jedna zeď.
            Pánové ji zaměřili, o tři centimetry uhnuli lištou — a nikdo nic nepozná.
            Montáž za jeden den, večer jsme vařili.“
          </blockquote>
          <figcaption>— rodina Hoškova, Liberec-Rochlice, kuchyň 2023</figcaption>
        </figure>
      </section>
    </main>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "M & T color — prášková lakovna a kovovýroba Brno",
  description:
    "Prášková lakovna v Brně: povrchová úprava kovů komaxitem až do 3 metrů, celý vzorník RAL, reflexní a strukturní efekty. K tomu vlastní kovovýroba — brány, zábradlí, konstrukce, zimní zahrady.",
  openGraph: {
    title: "M & T color — prášková lakovna a kovovýroba Brno",
    description:
      "Komaxit až do 3 metrů, celý vzorník RAL a speciální efekty. Kovovýroba na míru z Kaštanové v Brně.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Prášková lakovna M & T color v Brně" }],
  },
};

const rals = [
  { code: "RAL 3020", name: "dopravní červená", hex: "#C1121C" },
  { code: "RAL 5010", name: "enciánová modrá", hex: "#0E4C92" },
  { code: "RAL 6018", name: "žlutozelená", hex: "#57A639" },
  { code: "RAL 1023", name: "dopravní žlutá", hex: "#F7B500" },
  { code: "RAL 9005", name: "černá hluboká", hex: "#0A0A0A" },
  { code: "RAL 7016", name: "antracit", hex: "#293133" },
  { code: "RAL 2004", name: "oranžová", hex: "#E75B12" },
  { code: "RAL 9016", name: "dopravní bílá", hex: "#F1F0EA" },
];

const services = [
  {
    no: "01",
    title: "Prášková lakovna",
    lead: "Komaxit — polyesterová prášková barva vypálená v peci až do délky 3 metrů.",
    body:
      "Nanášíme celý vzorník RAL i speciální efekty: reflexní barvy, struktury, metalízy. Povrch je odolný proti počasí, pružný a tvrdý zároveň — vydrží na plotě i na disku kola.",
    tags: ["do 3 metrů", "celý RAL", "reflexní & struktury"],
  },
  {
    no: "02",
    title: "Kovovýroba",
    lead: "Stavební zámečnictví a konstrukce na míru — od brány po zimní zahradu.",
    body:
      "Vyrábíme brány, zábradlí, schody, mříže, kovové police, dveře, zastřešení teras i světlíky z polykarbonátu podle vašeho zadání. A rovnou to nalakujeme do barvy, kterou si vyberete.",
    tags: ["brány & zábradlí", "konstrukce", "zastřešení"],
  },
];

const uses = [
  "stavební zámečnictví",
  "kovový nábytek",
  "elektrická zařízení",
  "nástroje a nářadí",
  "disky kol a díly aut",
  "zahradní nářadí",
];

export default function Page() {
  return (
    <main className="mt">
      <header className="mt-top">
        <a className="mt-wordmark" href="#" aria-label="M & T color, domů">
          <span className="mt-wordmark__mark" aria-hidden="true">
            M<span className="mt-wordmark__amp">&amp;</span>T
          </span>
          <span className="mt-wordmark__word">color</span>
        </a>
        <nav className="mt-nav" aria-label="Hlavní">
          <a href="#sluzby">Lakovna</a>
          <a href="#sluzby">Kovovýroba</a>
          <a href="#vzornik">Vzorník RAL</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <section className="mt-hero" aria-labelledby="hero-title">
        <div className="mt-hero__media">
          <img
            src="/hero.webp"
            alt="Kovové díly zavěšené v práškové lakovně M & T color před vypálením v peci"
            className="mt-hero__img"
            width={1600}
            height={1100}
          />
        </div>
        <div className="mt-hero__panel">
          <p className="mt-eyebrow">Prášková lakovna &amp; kovovýroba · Brno</p>
          <h1 id="hero-title" className="mt-hero__title">
            Život není šedivý.
            <br />
            <span className="mt-hero__title--accent">Děláme svět barevnější.</span>
          </h1>
          <p className="mt-hero__sub">
            Přinesete kov, my ho očistíme, nalakujeme komaxitem a vypálíme.
            Odejde v barvě z vašeho vzorníku — a vydrží roky venku.
          </p>
          <div className="mt-hero__cta">
            <a className="mt-btn" href="#kontakt">Poptat lakování</a>
            <a className="mt-btn mt-btn--ghost" href="#vzornik">Vybrat barvu</a>
          </div>
          <dl className="mt-facts">
            <div>
              <dt>Délka dílu</dt>
              <dd>až 3 m</dd>
            </div>
            <div>
              <dt>Technologie</dt>
              <dd>komaxit</dd>
            </div>
            <div>
              <dt>Odstíny</dt>
              <dd>celý RAL</dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="sluzby" className="mt-services" aria-labelledby="services-title">
        <h2 id="services-title" className="mt-section-title">Co u nás pořídíte</h2>
        <div className="mt-services__grid">
          {services.map((s, i) => (
            <article className="mt-card" key={s.no}>
              <span className="mt-card__no" aria-hidden="true">{s.no}</span>
              <h3 className="mt-card__title">{s.title}</h3>
              <p className="mt-card__lead">{s.lead}</p>
              <p className="mt-card__body">{s.body}</p>
              <ul className="mt-card__tags">
                {s.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <img
                src={i === 0 ? "/section-1.webp" : "/section-2.webp"}
                alt={
                  i === 0
                    ? "Detail nalakovaného kovového dílu v lesklé barvě"
                    : "Svařovaná kovová konstrukce z brněnské kovovýroby"
                }
                className="mt-card__img"
                width={900}
                height={640}
                loading="lazy"
              />
            </article>
          ))}
        </div>

        <div className="mt-uses">
          <p className="mt-uses__label">Lakujeme mimo jiné</p>
          <ul className="mt-uses__list">
            {uses.map((u) => (
              <li key={u}>{u}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="vzornik" className="mt-trust" aria-labelledby="trust-title">
        <div className="mt-trust__head">
          <p className="mt-eyebrow">Vzorník RAL</p>
          <h2 id="trust-title" className="mt-section-title">
            Ukažte prstem na barvu. My ji namícháme z prášku.
          </h2>
          <p className="mt-trust__lead">
            Nejde jen o odstín. Komaxit umí matný i vysoký lesk, jemnou strukturu
            i reflexní efekt. Když si nejste jistí, přineste vzorek — porovnáme
            ho přímo u pece na Kaštanové.
          </p>
        </div>

        <ul className="mt-swatches" aria-label="Ukázky odstínů RAL">
          {rals.map((r) => (
            <li className="mt-swatch" key={r.code}>
              <span
                className="mt-swatch__chip"
                style={{ background: r.hex }}
                aria-hidden="true"
              />
              <span className="mt-swatch__code">{r.code}</span>
              <span className="mt-swatch__name">{r.name}</span>
            </li>
          ))}
        </ul>

        <div id="kontakt" className="mt-contact">
          <div className="mt-contact__col">
            <h3>Kde nás najdete</h3>
            <p>Kaštanová 435 / 127<br />620 00 Brno</p>
          </div>
          <div className="mt-contact__col">
            <h3>Lakovna</h3>
            <p>
              <a href="tel:+420604324440">+420 604 324 440</a>
            </p>
          </div>
          <div className="mt-contact__col">
            <h3>Kovovýroba</h3>
            <p>
              <a href="tel:+420602793004">+420 602 793 004</a>
            </p>
          </div>
          <div className="mt-contact__col">
            <h3>E-mail</h3>
            <p>
              <a href="mailto:terschova@seznam.cz">terschova@seznam.cz</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

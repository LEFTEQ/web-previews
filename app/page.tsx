import type { ReactElement } from "react";

const surfaces = [
  {
    id: "VL",
    name: "Vysoký lesk",
    note: "Zrcadlo. Odráží okno i vaši kuchyni celou.",
    gloss: 96,
  },
  {
    id: "SL",
    name: "Standard lesk",
    note: "Hebký lesk do domácnosti, kde se vaří každý den.",
    gloss: 62,
  },
  {
    id: "KM",
    name: "Klasik mat",
    note: "Klidný, matný povrch bez zbytečných odlesků.",
    gloss: 24,
  },
  {
    id: "SM",
    name: "Super mat",
    note: "Bezotiskový. Dáte do něj prsty a nezůstane stopa.",
    gloss: 6,
  },
];

const paths = [
  {
    letter: "A",
    tag: "Na klíč",
    title: "Chci to mít hotové",
    body: "Naklikáte tvar a odstín, my vás propojíme s ověřeným stolařem poblíž. Zaměří, postaví i namontuje — nezávazně, nic předem neplatíte.",
    cta: "Nezávazně poptat kuchyni",
  },
  {
    letter: "B",
    tag: "Nová čela",
    title: "Jsem kutil",
    body: "Korpusy ještě slouží, klidně z IKEA, a chce to jen nový kabát? Vyměníte za víkend jen čela ve svém odstínu. Panty navrtáme my, záruka na povrch vám zůstane.",
    cta: "Jak na to krok za krokem",
  },
  {
    letter: "C",
    tag: "Rychlá cena",
    title: "Zatím jen koukám",
    body: "Žádné telefonáty, žádný formulář. Naklikáte tvar, povrch, barvu a rozměr — orientační cenu vidíte za dvě minuty.",
    cta: "Otevřít konfigurátor",
  },
];

const steps = [
  {
    n: "1",
    title: "Vyberete tvar a odstín",
    body: "15 tvarů dvířek a přes 10 000 odstínů z NCS, RAL i RAL Design.",
  },
  {
    n: "2",
    title: "Spočítáte cenu",
    body: "Konfigurátor spočítá orientační cenu hned a nezávazně.",
  },
  {
    n: "3",
    title: "Pošlete poptávku",
    body: "Připojíte rozměry nebo kusovník. Ozveme se do 24 hodin se závazným termínem.",
  },
  {
    n: "4",
    title: "Vyrobíme a dodáme",
    body: "Ruční lakování v Brně, dodání po ČR, SK i do Rakouska.",
  },
];

export default function Page(): ReactElement {
  return (
    <main className="cld">
      <header className="cld-nav">
        <a className="cld-mark" href="#" aria-label="color lakdesiGn, výrobce lakovaných dvířek z Brna">
          <span className="cld-mark-color">color</span>
          <span className="cld-mark-lak">lakdesi<span className="cld-mark-g">G</span>n</span>
        </a>
        <nav className="cld-links" aria-label="Hlavní">
          <a href="#povrchy">Povrchy</a>
          <a href="#cesty">Jak na kuchyni</a>
          <a href="#kvalita">Kvalita</a>
        </nav>
        <a className="cld-nav-cta" href="#cesty">Zaslat poptávku</a>
      </header>

      <section className="cld-hero">
        <div className="cld-hero-copy">
          <p className="cld-eyebrow">Ruční lakovaná dvířka na míru · Brno</p>
          <h1 className="cld-h1">
            Bezúchytková dvířka,<br />
            do kterých <em>vážně</em> dáte prsty.
          </h1>
          <p className="cld-lead">
            Jsme výrobce, ne překupník. 9–10 vrstev laku, čtyři povrchy od zrcadlového lesku
            po bezotiskový super mat. Vlastní lakovna v Brně, dodáváme do ČR, SK i Rakouska.
          </p>
          <div className="cld-hero-actions">
            <a className="cld-btn cld-btn-primary" href="#cesty">Zaslat poptávku</a>
            <a className="cld-btn cld-btn-ghost" href="#povrchy">Prohlédnout povrchy</a>
          </div>
          <dl className="cld-promises">
            <div>
              <dt>do 24 h</dt>
              <dd>závazný termín předem</dd>
            </div>
            <div>
              <dt>4 povrchy</dt>
              <dd>lesk i bezotiskový mat</dd>
            </div>
            <div>
              <dt>10 000+</dt>
              <dd>odstínů RAL, NCS, RAL Design</dd>
            </div>
          </dl>
        </div>
        <figure className="cld-hero-figure">
          <img
            src="/hero.webp"
            alt="Lakovaná bezúchytková dvířka na míru ve vysokém lesku z lakovny v Brně"
            width={1200}
            height={1500}
            loading="eager"
            decoding="async"
          />
          <figcaption>Vlastní lakovna, Brno</figcaption>
        </figure>
      </section>

      <section className="cld-surfaces" id="povrchy" aria-labelledby="povrchy-h">
        <div className="cld-sec-head">
          <p className="cld-eyebrow">Čtyři povrchy · sáhněte si</p>
          <h2 id="povrchy-h" className="cld-h2">Od zrcadla po bezotiskový mat</h2>
          <p className="cld-sec-lead">
            Každý povrch držíme v garanci odstínu podle vzorku nebo vzorníku. Kvalitu drží
            10 vrstev laku, ruční broušení a leštění.
          </p>
        </div>

        <ol className="cld-gloss" aria-label="Škála lesku od nejvyššího po nejnižší">
          {surfaces.map((s) => (
            <li key={s.id} className="cld-gloss-item">
              <span
                className="cld-gloss-swatch"
                style={{ ["--g" as string]: String(s.gloss) }}
                aria-hidden="true"
              />
              <div className="cld-gloss-text">
                <p className="cld-gloss-value">
                  {s.gloss}<span> lesk</span>
                </p>
                <h3>{s.name}</h3>
                <p>{s.note}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="cld-surface-figure">
          <img
            src="/section-1.webp"
            alt="Detail vysoce lesklého lakovaného povrchu nábytkových dvířek"
            width={1200}
            height={800}
            loading="lazy"
            decoding="async"
          />
          <figcaption>Vysoký lesk odráží okno jako zrcadlo — a přesto na něm neuvidíte otisk.</figcaption>
        </figure>
      </section>

      <section className="cld-paths" id="cesty" aria-labelledby="cesty-h">
        <div className="cld-sec-head">
          <p className="cld-eyebrow">Tři cesty k novým dvířkům</p>
          <h2 id="cesty-h" className="cld-h2">Vyberte, co vás vystihuje</h2>
          <p className="cld-sec-lead">
            Konec je vždycky stejný — kuchyně, ze které nespustíte oči. Liší se jen to,
            kolik toho chcete řešit sami.
          </p>
        </div>

        <div className="cld-path-grid">
          {paths.map((p) => (
            <article key={p.letter} className="cld-path">
              <span className="cld-path-letter" aria-hidden="true">{p.letter}</span>
              <p className="cld-path-tag">Cesta {p.letter} · {p.tag}</p>
              <h3>{p.title}</h3>
              <p className="cld-path-body">{p.body}</p>
              <a className="cld-path-link" href="#kvalita">{p.cta} →</a>
            </article>
          ))}
        </div>

        <ol className="cld-steps" aria-label="Objednání ve čtyřech krocích">
          {steps.map((st) => (
            <li key={st.n}>
              <span className="cld-step-n" aria-hidden="true">{st.n}</span>
              <h4>{st.title}</h4>
              <p>{st.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="cld-quality" id="kvalita" aria-labelledby="kvalita-h">
        <figure className="cld-quality-figure">
          <img
            src="/section-2.webp"
            alt="Ruční kontrola a leštění lakovaných nábytkových dílců ve výrobě v Brně"
            width={1200}
            height={900}
            loading="lazy"
            decoding="async"
          />
        </figure>
        <div className="cld-quality-copy">
          <p className="cld-eyebrow">Garance kvality · vlastní výroba</p>
          <h2 id="kvalita-h" className="cld-h2">Každý díl projde výstupní kontrolou</h2>
          <p className="cld-sec-lead">
            V lakování nábytkových dílců patříme k jedničkám v oboru — lakujeme pro tuzemský
            i zahraniční trh. Dokonalý povrch garantujeme v lesku i matu.
          </p>
          <ul className="cld-quality-list">
            <li>10 vrstev laku, speciální broušení a následné leštění.</li>
            <li>Dvířka na míru v 15 tvarech, přesně na milimetr.</li>
            <li>Garance odstínu dle vzorku nebo vzorníku RAL a NCS.</li>
            <li>Vlastní kosmetika Laq&nbsp;Clean pro každodenní údržbu.</li>
          </ul>
          <p className="cld-contact">
            <a href="tel:+420777926247">+420&nbsp;777&nbsp;926&nbsp;247</a>
            <span aria-hidden="true">·</span>
            <a href="mailto:info@colorlakdesign.cz">info@colorlakdesign.cz</a>
          </p>
        </div>
      </section>
    </main>
  );
}

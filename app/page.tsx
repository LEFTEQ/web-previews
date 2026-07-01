import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NEXT ELEKTRO — elektroinstalace Pardubice | revize, přípojky, rekonstrukce",
  description:
    "Elektroinstalatéři z Pardubic. Kompletní elektroinstalace novostaveb i rekonstrukcí, přípojky, rozvaděče a revize s protokolem. Přijedeme, změříme, uděláme čistě.",
};

const sluzby = [
  {
    faze: "L1",
    nazev: "Nová elektroinstalace",
    popis:
      "Kompletní rozvody od přívodu po zásuvku. Novostavby, půdní vestavby, byty i firemní provozy v Pardubicích a okolí.",
    body: ["Rozvaděče a jištění", "Silnoproud i slaboproud", "Chráničky, drážky, omítnutí"],
  },
  {
    faze: "L2",
    nazev: "Rekonstrukce rozvodů",
    popis:
      "Vyměníme hliníkové rozvody z panelů a starých činžáků za měď. Přesně naplánujeme okruhy, ať nevypadává jistič při vaření a praní.",
    body: ["Výměna hliník → měď", "Nové zásuvkové okruhy", "Přesun a přidání vypínačů"],
  },
  {
    faze: "L3",
    nazev: "Přípojky a rozvaděče",
    popis:
      "Domovní přípojka, elektroměrový rozvaděč, připojení k síti ČEZ. Vyřídíme papíry i koordinaci s distributorem.",
    body: ["Přípojkové skříně", "Elektroměrové rozvaděče", "Podklady pro připojení"],
  },
  {
    faze: "L4",
    nazev: "Revize a měření",
    popis:
      "Výchozí i pravidelné revize s razítkem. Najdeme, kde uniká proud, a vystavíme protokol, který uznají pojišťovna i kolaudace.",
    body: ["Revizní protokol", "Měření izolačního stavu", "Kontrola hromosvodu"],
  },
];

const duvody = [
  { cislo: "18", jednotka: "let", text: "v pardubických bytech, halách i rodinných domech" },
  { cislo: "24", jednotka: "h", text: "reakce na havárii — bez proudu vás nenecháme přes noc" },
  { cislo: "0", jednotka: "Kč", text: "za výjezd na cenovou nabídku po Pardubicku" },
];

export default function Page() {
  return (
    <main className="ne">
      <header className="ne-topbar">
        <a className="ne-wordmark" href="#" aria-label="NEXT ELEKTRO, úvodní stránka">
          <span className="ne-wordmark__next">NEXT</span>
          <span className="ne-wordmark__spark" aria-hidden="true" />
          <span className="ne-wordmark__elektro">ELEKTRO</span>
        </a>
        <a className="ne-topbar__call" href="tel:+420777123456">
          <span className="ne-topbar__label">Nonstop dispečink</span>
          <span className="ne-topbar__num">777 123 456</span>
        </a>
      </header>

      <section className="ne-hero">
        <div className="ne-hero__media">
          <img
            src="/hero.webp"
            alt="Elektrikář z NEXT ELEKTRO zapojuje domovní rozvaděč s jističi a chráničemi"
            className="ne-hero__img"
          />
          <div className="ne-hero__scan" aria-hidden="true" />
        </div>

        <div className="ne-hero__panel">
          <p className="ne-hero__eyebrow">
            <span className="ne-live" aria-hidden="true" />
            Elektroinstalace · Pardubice a okolí
          </p>
          <h1 className="ne-hero__title">
            Dáme vašemu domu
            <span className="ne-hero__accent"> pod napětí</span>
            <br />
            bezpečně a načas.
          </h1>
          <p className="ne-hero__lead">
            Kompletní elektroinstalace, rekonstrukce rozvodů a revize s protokolem.
            Přijedeme k vám, změříme, poradíme řešení a uklidíme po sobě.
          </p>
          <div className="ne-hero__cta">
            <a className="ne-btn ne-btn--primary" href="tel:+420777123456">
              Zavolat elektrikáři
            </a>
            <a className="ne-btn ne-btn--ghost" href="mailto:info@next-elektro.cz">
              Napsat na e-mail
            </a>
          </div>
          <dl className="ne-hero__meta">
            <div>
              <dt>Napětí sítě</dt>
              <dd>230 / 400 V</dd>
            </div>
            <div>
              <dt>Revize</dt>
              <dd>s razítkem</dd>
            </div>
            <div>
              <dt>Havárie</dt>
              <dd>nonstop</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="ne-services" aria-labelledby="sluzby-nadpis">
        <div className="ne-section-head">
          <p className="ne-eyebrow">Co pro vás zapojíme</p>
          <h2 id="sluzby-nadpis">Od přívodu k poslední zásuvce</h2>
        </div>
        <ol className="ne-circuit">
          {sluzby.map((s) => (
            <li key={s.faze} className="ne-circuit__item">
              <div className="ne-circuit__marker" aria-hidden="true">
                <span>{s.faze}</span>
              </div>
              <div className="ne-circuit__body">
                <h3>{s.nazev}</h3>
                <p>{s.popis}</p>
                <ul className="ne-tags">
                  {s.body.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="ne-trust" aria-labelledby="duvera-nadpis">
        <div className="ne-trust__media">
          <img
            src="/section-2.webp"
            alt="Detail úhledně zapojeného rozvaděče od NEXT ELEKTRO s popsanými jističi"
            className="ne-trust__img"
          />
        </div>
        <div className="ne-trust__content">
          <p className="ne-eyebrow">Proč NEXT ELEKTRO</p>
          <h2 id="duvera-nadpis">Práci vidíte, i když je schovaná ve zdi</h2>
          <p className="ne-trust__lead">
            Jsme parta elektrikářů z Pardubic. Každý okruh popíšeme, každý spoj
            dotáhneme a rozvaděč vám předáme s dokumentací, ne s chaosem drátů.
            Když se za rok něco přidává, ví se, co kudy vede.
          </p>
          <dl className="ne-stats">
            {duvody.map((d) => (
              <div key={d.cislo} className="ne-stat">
                <dt className="ne-stat__num">
                  {d.cislo}
                  <span className="ne-stat__unit">{d.jednotka}</span>
                </dt>
                <dd>{d.text}</dd>
              </div>
            ))}
          </dl>
          <p className="ne-trust__note">
            Pracujeme v Pardubicích, Chrudimi, Holicích a přilehlých obcích.
            Máte plánek nebo starý rozvaděč k výměně? Pošlete fotku, ozveme se.
          </p>
        </div>
      </section>
    </main>
  );
}

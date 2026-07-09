import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pohřebnictví Nostalgie — pohřební služba Brno",
  description:
    "Pohřební služba Nostalgie v Brně. Kremace s obřadem i bez obřadu, pohřeb do země, převoz zesnulých nonstop. Provázíme vás klidně a s úctou celým rozloučením.",
  openGraph: {
    title: "Pohřebnictví Nostalgie — pohřební služba Brno",
    description:
      "Kremace, pohřeb do země i převoz zesnulých nonstop. Pomůžeme vám s rozloučením klidně a s úctou. Náměstí 28. dubna, Brno.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const sluzby = [
  {
    id: "kremace-obrad",
    nazev: "Kremace s obřadem",
    popis:
      "Poslední rozloučení v obřadní síni — se smuteční hudbou, řečníkem i vaším vlastním slovem. Pomůžeme vybrat květiny, oznámení i hudbu, kterou měl blízký rád.",
    detail: "Obřadní síně v Brně a Modřicích",
  },
  {
    id: "kremace-bez",
    nazev: "Kremace bez obřadu",
    popis:
      "Tichá varianta bez veřejného rozloučení. Postaráme se o vše potřebné a urnu vám v klidu předáme. Vhodné, když si přejete rozloučení jen v úzkém kruhu.",
    detail: "Předání urny osobně",
  },
  {
    id: "pohreb-zeme",
    nazev: "Pohřeb do země",
    popis:
      "Uložení do hrobu na brněnských i okolních hřbitovech. Zajistíme rakev, výkop, obřad u hrobu i veškerá jednání se správou pohřebiště.",
    detail: "Hřbitovy Brno a okolí",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#uvod" aria-label="Pohřebnictví Nostalgie, domů">
          <span className="wordmark-name">Nostalgie</span>
          <span className="wordmark-sub">pohřební služba · Brno</span>
        </a>
        <a className="topbar-call" href="tel:+420602891347">
          <span className="topbar-call-label">Dispečink nonstop</span>
          <span className="topbar-call-num">602 891 347</span>
        </a>
      </header>

      <section className="hero" id="uvod">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Tichý les v ranní mlze — místo pro klidné rozloučení"
            className="hero-img"
          />
        </div>
        <div className="hero-inner">
          <p className="eyebrow">Pohřební služba v Brně od roku 1996</p>
          <h1 className="hero-title">
            Zůstane jen<br />
            <em>to dobré</em>, na co<br />
            se vzpomíná.
          </h1>
          <p className="hero-lead">
            Když odejde někdo blízký, nemusíte to zvládat sami. Postaráme se
            o převoz, obřad i všechna úřední jednání — vy máte prostor truchlit
            a být s rodinou.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420602891347">
              Zavolat dispečink
            </a>
            <a className="btn btn-ghost" href="mailto:dispecink@nostalgie.cz">
              Napsat e-mail
            </a>
          </div>
          <p className="hero-note">
            Zavolat můžete kdykoli, ve dne i v noci — převoz zesnulého
            zajišťujeme nepřetržitě.
          </p>
        </div>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="section-head">
          <p className="eyebrow">Jak se dá rozloučit</p>
          <h2 id="sluzby-nadpis" className="section-title">
            Tři způsoby rozloučení
          </h2>
          <p className="section-lead">
            Nemusíte se rozhodovat hned a nemusíte tomu rozumět předem.
            Projdeme s vámi možnosti v klidu a poradíme, co bývá pro rodinu
            nejsnazší.
          </p>
        </div>

        <ol className="sluzby-grid">
          {sluzby.map((s, i) => (
            <li className="sluzba" key={s.id}>
              <span className="sluzba-num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="sluzba-nazev">{s.nazev}</h3>
              <p className="sluzba-popis">{s.popis}</p>
              <p className="sluzba-detail">{s.detail}</p>
            </li>
          ))}
        </ol>

        <div className="sluzby-media">
          <img
            src="/section-1.webp"
            alt="Obřadní síň připravená na poslední rozloučení"
            className="framed-img"
          />
          <p className="media-caption">
            Obřadní síň v Modřicích, Chrlická 661 — nová a světlá, s místem
            pro celou rodinu i přátele.
          </p>
        </div>
      </section>

      <section className="o-nas" id="o-nas" aria-labelledby="onas-nadpis">
        <div className="o-nas-media">
          <img
            src="/section-2.webp"
            alt="Cesta lesem v tichém ranním světle"
            className="framed-img"
          />
        </div>
        <div className="o-nas-text">
          <p className="eyebrow">Kdo vás doprovodí</p>
          <h2 id="onas-nadpis" className="section-title">
            Jsme tu pro vás,
            <br />
            když je nejhůř
          </h2>
          <p className="o-nas-lead">
            Pohřebnictví Nostalgie působí v Brně už přes pětadvacet let.
            Provázíme rodiny celým rozloučením — od prvního telefonátu
            po předání urny nebo uložení do hrobu.
          </p>

          <dl className="fakta">
            <div className="fakt">
              <dt>Dispečink</dt>
              <dd>Nonstop, i o víkendech a svátcích</dd>
            </div>
            <div className="fakt">
              <dt>Kde nás najdete</dt>
              <dd>Náměstí 28. dubna 238/25, 635 00 Brno</dd>
            </div>
            <div className="fakt">
              <dt>Vlastní krematorium</dt>
              <dd>Hustopeče — moderní a šetrné</dd>
            </div>
          </dl>

          <blockquote className="citace">
            „Nehledejme slzy a smutek — vzpomínejme při rozloučení jen na to
            dobré. Náš blízký zůstává v myšlenkách s námi.“
          </blockquote>

          <div className="o-nas-actions">
            <a className="btn btn-primary" href="tel:+420602891347">
              Zavolat 602 891 347
            </a>
            <a className="btn btn-ghost" href="mailto:dispecink@nostalgie.cz">
              dispecink@nostalgie.cz
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

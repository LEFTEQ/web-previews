import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DM Solutions — grafika, tisk a distribuce pod jednou střechou | Hradec Králové",
  description:
    "Reklamní agentura v Hradci Králové. Grafické studio, tisková výroba a kompletační dílna s distribučním terminálem — od corporate identity po velkoformát a rozesílku.",
  openGraph: {
    title: "DM Solutions — celý příběh vaší značky pod jednou střechou",
    description:
      "Grafické studio, tiskárna a kompletační dílna s distribučním terminálem v Hradci Králové. Návrh, tisk i rozeslání bez předávání mezi dodavateli.",
    type: "website",
    locale: "cs_CZ",
    images: ["/hero.webp"],
  },
};

const linka = [
  {
    fáze: "Studio",
    název: "Grafické studio",
    popis:
      "Corporate identity, logo, firemní tiskoviny, sazba katalogů, návrhy velkoformátu i webu. Data připravíme rovnou do tisku — žádné dohadování s externí grafikou.",
  },
  {
    fáze: "Výroba",
    název: "Tisková výroba",
    popis:
      "Digitální i velkoformátový tisk, bannery, polepy, plakáty, vizitky a brožury. Barvu vidíme na první nátisk, ne až po expedici.",
  },
  {
    fáze: "Expedice",
    název: "Kompletace a distribuce",
    popis:
      "Kompletační dílna a distribuční terminál. Materiály zabalíme, adresujeme a rozešleme — z jednoho místa až do schránek vašich zákazníků.",
  },
];

const služby = [
  "Corporate identity a logo",
  "Firemní tiskoviny a sazba",
  "Velkoformátová reklama",
  "Webové stránky",
  "Audio a videospoty",
  "Rozesílka a distribuce",
  "Zajištění firemních akcí",
];

export default function Page() {
  return (
    <main className="dm">
      <header className="dm-top">
        <a className="dm-mark" href="#" aria-label="DM Solutions, domů">
          <span className="dm-mark__d">DM</span>
          <span className="dm-mark__word">Solutions</span>
          <span className="dm-mark__reg">Hradec Králové</span>
        </a>
        <nav className="dm-nav" aria-label="Hlavní">
          <a href="#linka">Jak to u nás funguje</a>
          <a href="#sluzby">Nabídka služeb</a>
          <a href="#pribeh">Váš příběh</a>
        </nav>
      </header>

      <section className="dm-hero" aria-labelledby="hero-nadpis">
        <div className="dm-hero__copy">
          <p className="dm-eyebrow">Reklamní agentura · Hradec Králové · od návrhu po schránku</p>
          <h1 id="hero-nadpis" className="dm-hero__title">
            Návrh, tisk i&nbsp;rozeslání
            <br />
            <span className="dm-hero__accent">pod jednou střechou.</span>
          </h1>
          <p className="dm-hero__lead">
            Grafické studio, tiskovou výrobu a kompletační dílnu s distribučním
            terminálem máme na jednom místě. Vaše zakázka nikde nečeká na předání
            mezi dodavateli — a proto reagujeme rychle a pružně.
          </p>
          <div className="dm-hero__cta">
            <a className="dm-btn dm-btn--primary" href="#linka">
              Projít celou linku
            </a>
            <a className="dm-btn dm-btn--ghost" href="#sluzby">
              Co všechno uděláme
            </a>
          </div>
        </div>
        <figure className="dm-hero__media">
          <img
            src="/hero.webp"
            alt="Grafické studio a tisková výroba DM Solutions v Hradci Králové"
            width={1200}
            height={900}
            loading="eager"
          />
          <figcaption className="dm-hero__tag">
            <span>Studio → Tiskárna → Distribuce</span>
          </figcaption>
        </figure>
      </section>

      <section className="dm-linka" id="linka" aria-labelledby="linka-nadpis">
        <div className="dm-section-head">
          <p className="dm-eyebrow">Tři dílny, jedna adresa</p>
          <h2 id="linka-nadpis">
            Sledujte zakázku od prvního návrhu až po expedici
          </h2>
          <p className="dm-section-lead">
            Většina agentur pošle grafiku do jedné tiskárny a rozesílku zadá
            jinam. My máme všechny tři kroky pod kontrolou — proto víme, kdy je
            hotovo, a ne kdy „to poslal někdo jiný“.
          </p>
        </div>

        <ol className="dm-flow">
          {linka.map((krok, i) => (
            <li className="dm-flow__step" key={krok.název}>
              <span className="dm-flow__num">{String(i + 1).padStart(2, "0")}</span>
              <span className="dm-flow__phase">{krok.fáze}</span>
              <h3 className="dm-flow__title">{krok.název}</h3>
              <p className="dm-flow__text">{krok.popis}</p>
            </li>
          ))}
        </ol>

        <figure className="dm-linka__media">
          <img
            src="/section-1.webp"
            alt="Velkoformátový tisk a příprava zakázky ve výrobě DM Solutions"
            width={1200}
            height={720}
            loading="lazy"
          />
        </figure>
      </section>

      <section className="dm-pribeh" id="pribeh" aria-labelledby="pribeh-nadpis">
        <figure className="dm-pribeh__media">
          <img
            src="/section-2.webp"
            alt="Kompletace a distribuce reklamních materiálů u DM Solutions"
            width={1000}
            height={1100}
            loading="lazy"
          />
        </figure>
        <div className="dm-pribeh__copy">
          <p className="dm-eyebrow">Proč vlastně tiskneme</p>
          <h2 id="pribeh-nadpis">
            Kvalitní produkt je základ. Jak ho vyprávíte, rozhoduje o&nbsp;zbytku.
          </h2>
          <p>
            Adidas neprodává jenom boty — prodává úspěch. Budvar není jen pivo,
            ale posezení s přáteli. Značky, které si pamatujeme, stojí na
            jednom srozumitelném příběhu. I vaše firma takový příběh má: ve
            vizi, v přístupu k zákazníkům, ve vašich výsledcích.
          </p>
          <p>
            Naším úkolem je ten příběh vytáhnout ven a dát mu formu, kterou
            zákazník uvidí, vezme do ruky a najde ve schránce. Bude nám ctí, když
            nás k tomu přizvete.
          </p>

          <h3 className="dm-pribeh__subhead" id="sluzby">
            Co pro vás uděláme na klíč
          </h3>
          <ul className="dm-tags">
            {služby.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feromat Brno — hutní a spojovací materiál, stříhání a ohýbání",
  description:
    "Železářství v Brně: hutní materiál, spojovací materiál, stříhání plechů na CNC nůžkách do 12 mm a ohýbání betonářské oceli. Výdej ze skladu, řezné plány, e‑shop.",
  openGraph: {
    title: "Feromat Brno — hutní a spojovací materiál",
    description:
      "Stříháme plechy do 12 mm, ohýbáme roxory, prodáváme spojovací materiál. Sklad v Brně, výdej na míru.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const sluzby = [
  {
    kod: "P",
    nazev: "Stříhání plechů na CNC nůžkách",
    detail:
      "Rovný, čistý řez až do tloušťky 12 mm. Nastříháme přesně na váš rozměr — od jednoho kusu po sérii.",
    parametr: "do 12 mm",
  },
  {
    kod: "O",
    nazev: "Ohýbání betonářské oceli",
    detail:
      "Roxory a výztuž do betonu ohneme podle vašeho tvaru. Zvládneme i pásoviny, kulatiny a hranoly.",
    parametr: "výztuž, roxory",
  },
  {
    kod: "H",
    nazev: "Hutní materiál ze skladu",
    detail:
      "Tyče, profily, plechy a jekly skladem. Připravíme řezný plán tak, aby zbylo co nejméně odpadu.",
    parametr: "řezné plány",
  },
  {
    kod: "S",
    nazev: "Spojovací materiál",
    detail:
      "Šrouby, matice, podložky a hmoždinky podle norem. Nevíte, který díl? Použijte náš převodník norem.",
    parametr: "převodník norem",
  },
];

export default function Page() {
  return (
    <main className="fm">
      <header className="fm-top">
        <a className="fm-mark" href="#" aria-label="Feromat Brno, domů">
          <span className="fm-mark-fe">Fero</span>
          <span className="fm-mark-mat">mat</span>
          <span className="fm-mark-loc">Brno</span>
        </a>
        <a className="fm-tel" href="tel:+420545235841">
          <span className="fm-tel-label">Objednat řez</span>
          <span className="fm-tel-num">545 235 841</span>
        </a>
      </header>

      <section className="fm-hero" aria-labelledby="hero-nadpis">
        <div className="fm-hero-media">
          <img
            src="/hero.webp"
            alt="Svazky ocelových tyčí a profilů uskladněné na regálech ve skladu železářství"
            className="fm-hero-img"
          />
          <span className="fm-hero-tag">Sklad · Brno</span>
        </div>

        <div className="fm-hero-text">
          <p className="fm-eyebrow">Železářství &amp; hutní materiál</p>
          <h1 id="hero-nadpis">
            Ocel<span className="fm-cut" aria-hidden="true">|</span>nařezaná
            <br />
            na váš rozměr.
          </h1>
          <p className="fm-lede">
            Nechcete celou tyč? Přijedete si pro kus. Stříháme plechy na CNC
            nůžkách do 12 mm, ohýbáme roxory a spojovací materiál dodáme přesně
            podle normy. Vše ze skladu v Brně.
          </p>
          <div className="fm-hero-cta">
            <a className="fm-btn" href="tel:+420545235841">
              Zavolat na sklad
            </a>
            <a className="fm-btn fm-btn-ghost" href="mailto:obchod@feromat.cz">
              Poptat materiál
            </a>
          </div>
        </div>
      </section>

      <section className="fm-services" aria-labelledby="sluzby-nadpis">
        <div className="fm-sec-head">
          <p className="fm-eyebrow">Co u nás pořídíte</p>
          <h2 id="sluzby-nadpis">Čtyři věci, kvůli kterým sem lidé jezdí</h2>
        </div>

        <ul className="fm-grid">
          {sluzby.map((s) => (
            <li className="fm-card" key={s.kod}>
              <span className="fm-card-kod" aria-hidden="true">
                {s.kod}
              </span>
              <div className="fm-card-body">
                <h3>{s.nazev}</h3>
                <p>{s.detail}</p>
                <span className="fm-chip">{s.parametr}</span>
              </div>
            </li>
          ))}
        </ul>

        <figure className="fm-figure">
          <img
            src="/section-1.webp"
            alt="Nařezané ocelové profily a plechy připravené k výdeji zákazníkovi"
            className="fm-figure-img"
          />
          <figcaption>
            Řezný plán tyčí i plán střihu plechů vám spočítáme tak, ať platíte
            jen za materiál, který si odvezete.
          </figcaption>
        </figure>
      </section>

      <section className="fm-about" aria-labelledby="o-nas-nadpis">
        <div className="fm-about-media">
          <img
            src="/section-2.webp"
            alt="Interiér brněnského skladu železářství s regály plnými hutního materiálu"
            className="fm-about-img"
          />
        </div>
        <div className="fm-about-text">
          <p className="fm-eyebrow">Feromat Brno, s.r.o.</p>
          <h2 id="o-nas-nadpis">Brněnský sklad, kde vám poradí u pultu</h2>
          <p>
            Prodáváme hutní a spojovací materiál řemeslníkům, firmám i lidem,
            kteří zrovna něco svařují na dvorku. Neposíláme vás jinam — plech
            nastříháme, roxor ohneme a šroub najdeme podle normy na místě.
          </p>
          <dl className="fm-facts">
            <div>
              <dt>Kde</dt>
              <dd>Sklad a prodejna v Brně</dd>
            </div>
            <div>
              <dt>Telefon</dt>
              <dd>
                <a href="tel:+420545235841">545 235 841</a>
              </dd>
            </div>
            <div>
              <dt>E‑mail</dt>
              <dd>
                <a href="mailto:obchod@feromat.cz">obchod@feromat.cz</a>
              </dd>
            </div>
            <div>
              <dt>Vyřídíte online</dt>
              <dd>E‑shop, převodník norem, řezné plány</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}

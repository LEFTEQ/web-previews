import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Levné Potraviny — Ústí nad Labem, Mírové náměstí",
  description:
    "Kamenná prodejna Levné Potraviny na Mírovém náměstí v Ústí nad Labem. Základní potraviny za nízké ceny, otevřeno denně 7:00–19:00.",
  openGraph: {
    title: "Levné Potraviny — Ústí nad Labem",
    description:
      "Základní potraviny za nízké ceny na Mírovém náměstí. Otevřeno denně 7:00–19:00.",
    images: ["/hero.webp"],
    type: "website",
    locale: "cs_CZ",
  },
};

const regaly = [
  {
    kod: "01",
    nazev: "Pečivo a základ",
    popis:
      "Chleba, rohlíky, mouka, cukr, olej, rýže, těstoviny. To, co doma dojde jako první a co u nás vždycky najdete.",
  },
  {
    kod: "02",
    nazev: "Chlazené a mléčné",
    popis:
      "Mléko, jogurty, máslo, sýry, uzeniny. Denně doplňujeme, ať máte čerstvé i večer před zavíračkou.",
  },
  {
    kod: "03",
    nazev: "Konzervy a trvanlivé",
    popis:
      "Paštiky, luštěniny, kompoty, polévky. Spíž, která vydrží, za ceny, které nezabolí.",
  },
  {
    kod: "04",
    nazev: "Nápoje a drogerie",
    popis:
      "Voda, limo, káva, prací prášek, mýdlo. Nakoupíte i to nepotravinové, co doma taky dojde.",
  },
];

export default function Page() {
  return (
    <main className="shop">
      <header className="shop-nav">
        <a className="wordmark" href="#top" aria-label="Levné Potraviny, domů">
          <span className="wordmark-price">
            <span className="wordmark-czk">Kč</span>
            <span className="wordmark-num">levné</span>
          </span>
          <span className="wordmark-word">POTRAVINY</span>
        </a>
        <nav className="shop-nav-links" aria-label="Hlavní">
          <a href="#regaly">Co vedeme</a>
          <a href="#prodejna">Prodejna</a>
          <a className="nav-call" href="tel:+420774582286">
            Zavolat
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Regály prodejny Levné Potraviny s pečivem a základními potravinami"
            className="hero-img"
            width={1600}
            height={1200}
          />
        </div>
        <div className="hero-panel">
          <p className="hero-eyebrow">Mírové náměstí · Ústí nad Labem</p>
          <h1 className="hero-title">
            Nákup, u kterého
            <br />
            nemusíte<span className="hero-accent"> počítat</span>.
          </h1>
          <p className="hero-lede">
            Kamenná prodejna se základními potravinami za nízké ceny. Bez
            slev, které za týden skončí — prostě denně dostupný chleba, mléko a
            spíž, aniž byste otočili každou korunu.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#prodejna">
              Kde nás najdete
            </a>
            <a className="btn btn-ghost" href="tel:+420774582286">
              Zavolat na prodejnu
            </a>
          </div>
        </div>

        <div className="hours-strip" aria-label="Otevírací doba">
          <span className="hours-open">Otevřeno teď</span>
          <span className="hours-sep" aria-hidden="true" />
          <span className="hours-days">Po–Ne</span>
          <span className="hours-time">7:00 – 19:00</span>
        </div>
      </section>

      <section className="regaly" id="regaly">
        <div className="section-head">
          <p className="section-eyebrow">Co u nás projdete</p>
          <h2 className="section-title">
            Čtyři uličky, žádné bloudění
          </h2>
          <p className="section-intro">
            Malá prodejna má výhodu: víte, kam sáhnout. Tady je, co v regálech
            drží stálou nabídku každý den.
          </p>
        </div>

        <ol className="regal-list">
          {regaly.map((r) => (
            <li className="regal" key={r.kod}>
              <span className="regal-tag" aria-hidden="true">
                {r.kod}
              </span>
              <div className="regal-body">
                <h3 className="regal-name">{r.nazev}</h3>
                <p className="regal-desc">{r.popis}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="regaly-figure">
          <img
            src="/section-1.webp"
            alt="Pult a regály prodejny Levné Potraviny se zbožím k prodeji"
            width={1600}
            height={1000}
          />
          <figcaption>Naše prodejna na Mírovém náměstí 101/25.</figcaption>
        </figure>
      </section>

      <section className="prodejna" id="prodejna">
        <figure className="prodejna-figure">
          <img
            src="/section-2.webp"
            alt="Vstup do prodejny Levné Potraviny v Ústí nad Labem"
            width={1400}
            height={1600}
          />
        </figure>

        <div className="prodejna-panel">
          <p className="section-eyebrow section-eyebrow-light">
            Přijďte nakoupit
          </p>
          <h2 className="section-title section-title-light">
            Najdete nás v centru Ústí
          </h2>
          <p className="prodejna-intro">
            Pár kroků od zastávek na Mírovém náměstí. Zavolejte a rovnou se
            zeptejte, jestli máme, co sháníte — vezmeme telefon.
          </p>

          <dl className="info-grid">
            <div className="info-item">
              <dt>Adresa</dt>
              <dd>
                Mírové nám. 101/25
                <br />
                Ústí nad Labem
              </dd>
            </div>
            <div className="info-item">
              <dt>Otevřeno</dt>
              <dd>
                Po–Ne
                <br />
                7:00 – 19:00
              </dd>
            </div>
            <div className="info-item">
              <dt>Telefon</dt>
              <dd>
                <a href="tel:+420774582286">+420 774 582 286</a>
              </dd>
            </div>
            <div className="info-item">
              <dt>Napište nám</dt>
              <dd>
                <a href="mailto:obchod@levnepotraviny.cz">
                  obchod@levnepotraviny.cz
                </a>
              </dd>
            </div>
          </dl>

          <div className="prodejna-cta">
            <a className="btn btn-primary" href="tel:+420774582286">
              Zavolat na prodejnu
            </a>
            <a
              className="btn btn-ghost btn-ghost-light"
              href="mailto:obchod@levnepotraviny.cz"
            >
              Napsat e-mail
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

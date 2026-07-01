import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MVP Solar — fotovoltaika na míru pro jižní Čechy | České Budějovice",
  description:
    "Navrhneme, nainstalujeme a spustíme vaši fotovoltaiku v Českých Budějovicích a okolí. Panely, baterie, wallbox i vyřízení dotace — od první schůzky po první vyrobenou kilowatthodinu.",
  openGraph: {
    title: "MVP Solar — fotovoltaika na míru pro jižní Čechy",
    description:
      "Panely, baterie a wallbox na klíč. Návrh podle vaší střechy a spotřeby, montáž vlastními techniky, servis po telefonu z Budějovic.",
    images: ["/hero.webp"],
    locale: "cs_CZ",
    type: "website",
  },
};

const kroky = [
  {
    cislo: "01",
    nazev: "Výjezd a zaměření",
    text: "Přijedeme se podívat na střechu, změříme sklon i orientaci a spočítáme, kolik z ní reálně vytáhneme. Bez toho žádné číslo neslibujeme.",
  },
  {
    cislo: "02",
    nazev: "Návrh a dotace",
    text: "Naladíme počet panelů a velikost baterie na vaši skutečnou spotřebu. Papíry na Novou zelenou úsporám vyřídíme za vás.",
  },
  {
    cislo: "03",
    nazev: "Montáž na klíč",
    text: "Panely, měnič, baterie i wallbox montují naši lidé, ne subdodavatel odjinud. Většinu domů máme hotové za dva dny.",
  },
  {
    cislo: "04",
    nazev: "Připojení a servis",
    text: "Vyřídíme připojení k distribuci, spustíme systém a ukážeme vám aplikaci. Když něco pípne, voláte přímo do Budějovic.",
  },
];

const duvery = [
  {
    hodnota: "9,8 kWp",
    popis: "typická sestava na rodinný dům v Boršově — 22 panelů a baterie 11,6 kWh",
  },
  {
    hodnota: "2 dny",
    popis: "obvyklá doba montáže od přijezdu na střechu po první vyrobenou energii",
  },
  {
    hodnota: "jižní Čechy",
    popis: "jezdíme po Budějovicku, Hlubocku, Trhosvinensku i k Českému Krumlovu",
  },
];

export default function Page() {
  return (
    <main className="sol">
      <header className="sol-top">
        <a className="sol-mark" href="#" aria-label="MVP Solar, úvodní stránka">
          <span className="sol-mark__mvp">MVP</span>
          <span className="sol-mark__dot" aria-hidden="true" />
          <span className="sol-mark__solar">Solar</span>
        </a>
        <span className="sol-top__place">České Budějovice</span>
      </header>

      <section className="sol-hero" aria-labelledby="hero-nadpis">
        <div className="sol-hero__frame">
          <img
            className="sol-hero__img"
            src="/hero.webp"
            alt="Fotovoltaické panely na střeše rodinného domu v jižních Čechách za jasného dne"
            width={1600}
            height={1100}
          />
          <div className="sol-hero__grid" aria-hidden="true">
            <span /><span /><span /><span />
            <span /><span /><span /><span />
          </div>
        </div>

        <div className="sol-hero__copy">
          <p className="sol-eyebrow">Fotovoltaika na klíč · jižní Čechy</p>
          <h1 id="hero-nadpis" className="sol-hero__title">
            Vaše střecha už teď
            <br />
            <em>svítí zbytečně.</em>
          </h1>
          <p className="sol-hero__lead">
            Přeměníme jihočeské slunce na proud, který spotřebujete
            doma — panely, baterie i nabíječku na auto navrhneme podle
            vaší střechy a účtu za elektřinu, ne podle katalogu.
          </p>
          <div className="sol-hero__actions">
            <a className="sol-btn sol-btn--sun" href="tel:+420720000000">
              Zavolat a domluvit výjezd
            </a>
            <a className="sol-btn sol-btn--ghost" href="mailto:info@mvp-solar.cz">
              Napsat e-mail
            </a>
          </div>
          <p className="sol-hero__note">
            Výjezd a nezávazný návrh po Budějovicku zdarma.
          </p>
        </div>
      </section>

      <section className="sol-steps" aria-labelledby="steps-nadpis">
        <div className="sol-steps__head">
          <p className="sol-eyebrow">Jak to u nás běží</p>
          <h2 id="steps-nadpis">Od první schůzky po první kilowatthodinu.</h2>
          <p className="sol-steps__intro">
            Nic nepředáváme cizím firmám. Celou cestu od zaměření
            po servis držíme my — a vy máte jedno telefonní číslo
            na všechno.
          </p>
        </div>

        <ol className="sol-steps__list">
          {kroky.map((k) => (
            <li key={k.cislo} className="sol-step">
              <span className="sol-step__num" aria-hidden="true">
                {k.cislo}
              </span>
              <div className="sol-step__body">
                <h3>{k.nazev}</h3>
                <p>{k.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <img
          className="sol-steps__img"
          src="/section-1.webp"
          alt="Technik MVP Solar při montáži fotovoltaických panelů na střeše"
          width={1400}
          height={900}
          loading="lazy"
        />
      </section>

      <section className="sol-trust" aria-labelledby="trust-nadpis">
        <div className="sol-trust__media">
          <img
            src="/section-2.webp"
            alt="Střídač a bateriové úložiště fotovoltaiky nainstalované v technické místnosti domu"
            width={1400}
            height={1000}
            loading="lazy"
          />
        </div>

        <div className="sol-trust__copy">
          <p className="sol-eyebrow">Proč lidé z okolí volají nám</p>
          <h2 id="trust-nadpis">
            Místní firma, která zvedne telefon.
          </h2>
          <p className="sol-trust__lead">
            Sídlíme v Českých Budějovicích a montujeme tady, kde
            bydlíme. Když potřebujete poradit s aplikací nebo se
            po roce ozve měnič, nevoláte na infolinku — voláte
            k nám do dílny.
          </p>

          <dl className="sol-facts">
            {duvery.map((d) => (
              <div key={d.hodnota} className="sol-fact">
                <dt>{d.hodnota}</dt>
                <dd>{d.popis}</dd>
              </div>
            ))}
          </dl>

          <blockquote className="sol-quote">
            <p>
              „Přijeli, zaměřili střechu a za tři týdny nám na ní
              svítily panely. Baterie nám drží večerní vaření
              i po západu slunce.“
            </p>
            <cite>Rodina Markových, Rudolfov</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}

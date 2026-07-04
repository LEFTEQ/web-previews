import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Malíři Natěrači CZ — malování bytů a domů v Praze",
  description:
    "Pražská malířská parta s 25 lety praxe. Vymalujeme byt, ložnici i celý dům — nábytek odsuneme, zakryjeme a po sobě uklidíme. Nezávazná kalkulace zdarma.",
  openGraph: {
    title: "Malíři Natěrači CZ — malování bytů a domů v Praze",
    description:
      "Čisté malování bez starostí. Odsun nábytku, zakrytí i úklid v ceně. Praha a okolí, 25 let praxe.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Malování interiéru v Praze" }],
  },
};

const sluzby = [
  {
    kod: "01",
    nazev: "Malby stěn a stropů",
    popis:
      "Otěruvzdorné interiérové barvy, čisté hrany kolem lišt i zárubní. Jeden pokoj i celý byt před stěhováním.",
  },
  {
    kod: "02",
    nazev: "Tapety a fototapety",
    popis:
      "Strhneme staré tapety, srovnáme podklad a nalepíme nové — od jednobarevných po velkoformátovou fototapetu na míru.",
  },
  {
    kod: "03",
    nazev: "Nátěry a broušení",
    popis:
      "Nátěry radiátorů, dveří, zárubní a podlah. Přebroušení a vyspravení stěn tam, kde předchozí malba popraskala.",
  },
  {
    kod: "04",
    nazev: "Dekorativní techniky",
    popis:
      "Barevné akcenty, stropní kazety a nástřiky bytových jader. Poradíme s odstínem přímo u vás doma.",
  },
];

const duvody = [
  {
    cislo: "25",
    jednotka: "let",
    tvrzeni: "malujeme od roku 2000",
    detail:
      "Čtvrt století v pražských bytech, panelácích i cihlových domech. Víme, jak se chová každá stěna.",
  },
  {
    cislo: "0",
    jednotka: "Kč",
    tvrzeni: "za odsun nábytku a úklid",
    detail:
      "Nábytek odsuneme a zakryjeme, podlahy ochráníme a po práci uklidíme. Vracíte se do hotového pokoje.",
  },
  {
    cislo: "1",
    jednotka: "den",
    tvrzeni: "běžný byt bez čekání",
    detail:
      "Většinu bytů zvládneme za jeden pracovní den. Termín potvrdíme dopředu a dodržíme ho.",
  },
];

export default function Page() {
  return (
    <main className="mn">
      <header className="mn-top">
        <a className="mn-brand" href="#" aria-label="Malíři Natěrači CZ — domů">
          <span className="mn-brand-swatch" aria-hidden="true" />
          <span className="mn-brand-name">
            Malíři<span className="mn-brand-thin">Natěrači</span>
            <span className="mn-brand-cz">CZ</span>
          </span>
        </a>
        <a className="mn-phone" href="tel:800226226">
          <span className="mn-phone-label">Volejte zdarma</span>
          <span className="mn-phone-num">800 226 226</span>
        </a>
      </header>

      <section className="mn-hero" aria-labelledby="mn-hero-title">
        <div className="mn-hero-media">
          <img
            src="/hero.webp"
            alt="Malíř natírá válečkem stěnu pražského bytu čerstvou bílou barvou"
            width={1600}
            height={1200}
            className="mn-hero-img"
          />
        </div>
        <div className="mn-hero-body">
          <p className="mn-eyebrow">Malířská parta · Praha a okolí</p>
          <h1 id="mn-hero-title" className="mn-hero-title">
            Vymalujeme,
            <br />
            <span className="mn-hero-accent">zakryjeme</span> a
            <br />
            uklidíme po sobě.
          </h1>
          <p className="mn-hero-lead">
            Přijedeme, odsuneme nábytek, ochráníme podlahy a stěny dostanou čistý
            nový nátěr. Vy se večer vrátíte do hotového pokoje — bez prachu a
            nepořádku.
          </p>
          <div className="mn-hero-actions">
            <a className="mn-btn" href="tel:800226226">
              Zavolat a domluvit termín
            </a>
            <a className="mn-btn mn-btn-ghost" href="#sluzby">
              Co všechno malujeme
            </a>
          </div>
          <p className="mn-hero-note">
            Nezávazná kalkulace zdarma · přijedeme změřit i poradit s odstínem
          </p>
        </div>
      </section>

      <section className="mn-sluzby" id="sluzby" aria-labelledby="mn-sluzby-title">
        <div className="mn-sec-head">
          <p className="mn-eyebrow">Nabídka</p>
          <h2 id="mn-sluzby-title" className="mn-sec-title">
            Od jedné stěny po celý byt před stěhováním
          </h2>
          <p className="mn-sec-intro">
            Řekněte nám, co potřebujete oživit. Cenu spočítáme podle plochy a
            stavu stěn — žádné překvapení na faktuře.
          </p>
        </div>

        <div className="mn-sluzby-grid">
          <ul className="mn-cards">
            {sluzby.map((s) => (
              <li className="mn-card" key={s.kod}>
                <span className="mn-card-kod" aria-hidden="true">
                  {s.kod}
                </span>
                <h3 className="mn-card-nazev">{s.nazev}</h3>
                <p className="mn-card-popis">{s.popis}</p>
              </li>
            ))}
          </ul>
          <figure className="mn-sluzby-fig">
            <img
              src="/section-1.webp"
              alt="Vymalovaný obývací pokoj s čistě natřenými stěnami a ostrými hranami u stropu"
              width={900}
              height={1100}
              className="mn-fig-img"
            />
            <figcaption className="mn-fig-cap">
              Obývací pokoj na Žižkově — dvě vrstvy otěruvzdorné barvy, hotovo za den.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="mn-duvera" aria-labelledby="mn-duvera-title">
        <div className="mn-duvera-inner">
          <figure className="mn-duvera-fig">
            <img
              src="/section-2.webp"
              alt="Malíř zakrývá nábytek fólií a lepí krycí pásku před malováním"
              width={900}
              height={1100}
              className="mn-fig-img"
            />
          </figure>
          <div className="mn-duvera-body">
            <p className="mn-eyebrow">Proč zrovna my</p>
            <h2 id="mn-duvera-title" className="mn-sec-title">
              25 let čistého malování v Praze
            </h2>
            <p className="mn-sec-intro">
              Nejsme na trhu první rok. Za tu dobu jsme si zvykli pracovat tak,
              aby vám po nás zůstal jen nový nátěr — a dobrá reference.
            </p>

            <dl className="mn-metrics">
              {duvody.map((d) => (
                <div className="mn-metric" key={d.tvrzeni}>
                  <dt className="mn-metric-num">
                    <span className="mn-metric-val">{d.cislo}</span>
                    <span className="mn-metric-unit">{d.jednotka}</span>
                  </dt>
                  <dd className="mn-metric-def">
                    <strong>{d.tvrzeni}</strong>
                    <span>{d.detail}</span>
                  </dd>
                </div>
              ))}
            </dl>

            <blockquote className="mn-quote">
              <p>
                „Přijeli na čas, byt zakryli tak, že jsem se nemusela ničeho
                bát, a po malování bylo uklizeno. Malovali jsme kuchyň i
                ložnici — vypadá to skvěle.“
              </p>
              <cite>— Jana Petrů, zákaznice z Prahy 3</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}

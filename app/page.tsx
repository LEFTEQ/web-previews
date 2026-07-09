import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "P.i. Parket — pokládka a renovace dřevěných podlah, Brno",
  description:
    "Rodinná parketářská dílna v Brně. Pokládáme masivní a vícevrstvé dřevěné podlahy, laminát, sportovní a exteriérové povrchy. Renovace, broušení, olejování. Vlastní stolařská dílna.",
  openGraph: {
    title: "P.i. Parket — dřevěné podlahy z Brna",
    description:
      "Pokládka, renovace a servis dřevěných podlah v Brně a okolí. Masiv, vícevrstvé plovoucí podlahy, sportovní i exteriérové povrchy.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const druhy = [
  {
    cislo: "01",
    nazev: "Masivní dřevěné podlahy",
    popis:
      "Prkna z jednoho kusu dřeva — dub, jasan, ořech. Broušené, olejované nebo lakované přímo u vás na míru prostoru. Podlaha, kterou lze přebrousit ještě vašim vnukům.",
    detail: "Dub · jasan · ořech",
  },
  {
    cislo: "02",
    nazev: "Vícevrstvé plovoucí podlahy",
    popis:
      "Vzhled pravého dřeva se stabilitou vrstvené konstrukce. Rychlá pokládka, klidná i nad podlahovým topením. Vhodné do bytů i kanceláří.",
    detail: "Klik systém · nad topení",
  },
  {
    cislo: "03",
    nazev: "Laminát a povlakové krytiny",
    popis:
      "Odolné laminátové plovoucí podlahy a povlakové krytiny tam, kde má být povrch nenáročný na údržbu a přesto pěkný. Připravíme podklad i lišty.",
    detail: "Vysoký provoz · snadná údržba",
  },
  {
    cislo: "04",
    nazev: "Sportovní a exteriérové povrchy",
    popis:
      "Pružné sportovní podlahy do tělocvičen a terasové dřevo kolem bazénů, na balkony a pergoly — odolné vodě, hnilobě a slunci.",
    detail: "Terasy · bazény · tělocvičny",
  },
];

const kroky = [
  {
    fclass: "broušení",
    text: "Zaměříme prostor, poradíme dřevo i finální úpravu a připravíme rovný podklad.",
  },
  {
    fclass: "pokládka",
    text: "Klademe prkno po prknu s ohledem na kresbu dřeva, dilatace a přechody mezi místnostmi.",
  },
  {
    fclass: "olej",
    text: "Přebrousíme, olejujeme nebo lakujeme a osadíme lišty. Ukážeme, jak podlahu ošetřovat.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="P.i. Parket, domovská stránka">
          <span className="wordmark__grain" aria-hidden="true" />
          <span className="wordmark__text">
            P.i.<em>Parket</em>
          </span>
        </a>
        <p className="topbar__meta">Parketářská dílna · Brno</p>
      </header>

      <section className="hero" aria-labelledby="hero-nadpis">
        <div className="hero__copy">
          <p className="eyebrow">Pokládka · renovace · vlastní stolařská dílna</p>
          <h1 id="hero-nadpis" className="hero__title">
            Dřevo, které <em>drží pod nohama</em> celé generace.
          </h1>
          <p className="hero__lead">
            Jsme brněnská parketářská dílna. Pokládáme masivní i vícevrstvé
            dřevěné podlahy, brousíme a olejujeme staré parkety a vyrábíme lišty
            i truhlářské doplňky přímo na míru.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#nabidka">
              Prohlédnout druhy podlah
            </a>
            <a className="btn btn--ghost" href="#firma">
              Jak pracujeme
            </a>
          </div>
          <dl className="hero__facts">
            <div>
              <dt>Materiál</dt>
              <dd>dub · jasan · ořech</dd>
            </div>
            <div>
              <dt>Značky, se kterými pracujeme</dt>
              <dd>Bona · Murexin · Uzin</dd>
            </div>
            <div>
              <dt>Kde pokládáme</dt>
              <dd>Brno a okolí</dd>
            </div>
          </dl>
        </div>
        <figure className="hero__figure">
          <img
            src="/hero.webp"
            alt="Detail čerstvě položené dřevěné podlahy s viditelnou kresbou letokruhů"
            className="hero__img"
            width={1200}
            height={1400}
          />
          <figcaption className="hero__caption">
            <span className="hero__ring" aria-hidden="true" />
            Každé prkno má vlastní kresbu — skládáme je tak, aby podlaha vypadala
            jako jeden kus dřeva.
          </figcaption>
        </figure>
      </section>

      <section className="nabidka" id="nabidka" aria-labelledby="nabidka-nadpis">
        <div className="section-head">
          <p className="eyebrow">Co pokládáme</p>
          <h2 id="nabidka-nadpis">Podlahy podle prostoru, ne podle katalogu</h2>
          <p className="section-head__lead">
            Od obýváku po tělocvičnu — poradíme, jaké dřevo a úprava vydrží právě
            u vás, a řekneme to na rovinu i tam, kde stačí levnější řešení.
          </p>
        </div>
        <ul className="cards">
          {druhy.map((d) => (
            <li className="card" key={d.cislo}>
              <span className="card__num" aria-hidden="true">
                {d.cislo}
              </span>
              <h3 className="card__title">{d.nazev}</h3>
              <p className="card__text">{d.popis}</p>
              <p className="card__detail">{d.detail}</p>
            </li>
          ))}
        </ul>
        <p className="nabidka__note">
          Renovujete starou parketovou podlahu? Přebrousíme, doplníme chybějící
          kusy z vlastní dílny a znovu naolejujeme — bez nutnosti vše trhat.
        </p>
      </section>

      <section className="firma" id="firma" aria-labelledby="firma-nadpis">
        <figure className="firma__figure">
          <img
            src="/section-1.webp"
            alt="Parketář při ruční pokládce dřevěné podlahy v prosvětlené místnosti"
            className="firma__img"
            width={1000}
            height={1200}
          />
        </figure>
        <div className="firma__copy">
          <p className="eyebrow">O dílně</p>
          <h2 id="firma-nadpis">Řemeslo, které začíná a končí u nás</h2>
          <p>
            P.i. Parket vede jedna dílna v Brně — od zaměření přes pokládku až po
            finální olej neručí subdodavatel, ale lidé, které u vás doma
            potkáte. Chybějící lišty i truhlářské doplňky vyrobíme sami na míru
            ve vlastní stolařské dílně.
          </p>
          <ol className="steps">
            {kroky.map((k, i) => (
              <li className="step" key={k.fclass}>
                <span className="step__mark" aria-hidden="true">
                  {i + 1}
                </span>
                <span className="step__label">{k.fclass}</span>
                <span className="step__text">{k.text}</span>
              </li>
            ))}
          </ol>
          <figure className="quote">
            <blockquote>
              „Přišli přesně, uklidili po sobě a dubová podlaha v ordinaci vypadá
              po pěti letech provozu pořád skvěle. Broušení jsme vůbec
              neřešili.“
            </blockquote>
            <figcaption>— zákazník, zubní ordinace v Brně-Žabovřeskách</figcaption>
          </figure>
          <figure className="firma__figure firma__figure--inline">
            <img
              src="/section-2.webp"
              alt="Hotová dřevěná podlaha v obytném prostoru se světlým denním osvětlením"
              className="firma__img"
              width={1000}
              height={700}
            />
          </figure>
        </div>
      </section>
    </main>
  );
}

import type { CSSProperties } from "react";

export const metadata = {
  title: "BP Parket plus — dřevěné podlahy a parkety, Praha",
  description:
    "Pokládka, renovace a broušení dřevěných podlah v Praze. Masivní parkety, vlysy, mozaiky i rybí kost. Řemeslo, které vydrží generace.",
};

type Species = {
  cz: string;
  lat: string;
  hardness: string;
  note: string;
  swatch: string;
};

const species: Species[] = [
  {
    cz: "Dub",
    lat: "Quercus robur",
    hardness: "3700 N",
    note: "Klasika do každé pražské bytovky. Výrazná kresba, stálá tvrdost.",
    swatch: "#a9793f",
  },
  {
    cz: "Jasan",
    lat: "Fraxinus excelsior",
    hardness: "4000 N",
    note: "Světlý a pružný. Prosvětlí i sklepní byt do dvora.",
    swatch: "#c7a563",
  },
  {
    cz: "Ořech",
    lat: "Juglans regia",
    hardness: "3900 N",
    note: "Tmavý, teplý tón do reprezentativních místností.",
    swatch: "#5c3b23",
  },
  {
    cz: "Buk",
    lat: "Fagus sylvatica",
    hardness: "3800 N",
    note: "Hladká rovnoměrná plocha, ideál na parní ohýbané vzory.",
    swatch: "#b98a5a",
  },
];

type Step = {
  no: string;
  title: string;
  body: string;
};

const steps: Step[] = [
  {
    no: "01",
    title: "Zaměření u vás doma",
    body: "Přijedeme do bytu, změříme vlhkost podkladu vlhkoměrem a poradíme dřevinu i vzor podle světla v místnosti. Kalkulace do tří dnů.",
  },
  {
    no: "02",
    title: "Pokládka vlysů a dílců",
    body: "Lepíme na tmel, klademe do rybí kosti, do stromečku i francouzský vzor. Každý vlys sedne na sraz — spáry po nás nehledejte.",
  },
  {
    no: "03",
    title: "Broušení bezprašnou bruskou",
    body: "Tříkolové přebroušení do hladka, odsávané přímo od kotouče. Prach nekončí ve vaší knihovně ani v obraze na zdi.",
  },
  {
    no: "04",
    title: "Olej, nebo lak — vaše volba",
    body: "Tvrdý olej pro matný, hmatatelný povrch, který se dá lokálně opravit. Nebo lak, když chcete jednou provždy hotovo.",
  },
];

type Ref = {
  place: string;
  work: string;
  year: string;
};

const references: Ref[] = [
  { place: "Činžovní byt, Vinohrady", work: "Renovace původních dubových vlysů, 78 m²", year: "2023" },
  { place: "Kancelář, Karlín", work: "Nová pokládka jasanu v rybí kosti, 140 m²", year: "2023" },
  { place: "Rodinný dům, Zbraslav", work: "Ořechová mozaika + olejování, 210 m²", year: "2022" },
];

export default function Page() {
  return (
    <main className="bpp">
      <header className="bpp-topbar">
        <a className="bpp-wordmark" href="#top" aria-label="BP Parket plus — úvod">
          <span className="bpp-wordmark__bp">BP</span>
          <span className="bpp-wordmark__rest">Parket&nbsp;plus</span>
        </a>
        <p className="bpp-topbar__where">Dřevěné podlahy · Praha</p>
      </header>

      <section className="bpp-hero" id="top">
        <div className="bpp-hero__media">
          <img
            src="/hero.webp"
            alt="Detail pokládaných dubových vlysů ve vzoru rybí kost"
            className="bpp-hero__img"
          />
        </div>
        <div className="bpp-hero__panel">
          <p className="bpp-eyebrow">Řez letokruhem · pokládka od roku 1994</p>
          <h1 className="bpp-hero__title">
            Podlaha, po které<br />
            budou chodit<br />
            <span className="bpp-hero__accent">vaše vnoučata.</span>
          </h1>
          <p className="bpp-hero__lead">
            Klademe a renovujeme masivní parkety v pražských bytech i domech.
            Rybí kost, stromeček, francouzský vzor — z dubu, jasanu, ořechu i buku.
            Bezprašné broušení, olej i lak. Jedno řemeslo, dělané pořádně.
          </p>
          <div className="bpp-hero__cta">
            <a className="bpp-btn" href="#sluzby">Prohlédnout, co děláme</a>
            <span className="bpp-hero__meta">Vlhkost podkladu měříme vždy před pokládkou</span>
          </div>
        </div>
      </section>

      <section className="bpp-section bpp-species" id="sluzby" aria-labelledby="sluzby-h">
        <div className="bpp-section__head">
          <p className="bpp-eyebrow">Vzorník dřevin</p>
          <h2 className="bpp-h2" id="sluzby-h">Vybíráme podle světla, ne podle katalogu</h2>
          <p className="bpp-section__intro">
            Každá dřevina stárne jinak a jinak nese světlo. Než něco položíme,
            ukážeme vám u vás doma reálné vzorky v tom správném denním osvětlení.
            Čísla tvrdosti podle Brinella jsou tu, abyste věděli, co vydrží podpatky i pes.
          </p>
        </div>

        <ul className="bpp-swatches">
          {species.map((s) => (
            <li className="bpp-swatch" key={s.cz}>
              <span
                className="bpp-swatch__chip"
                style={{ "--chip": s.swatch } as CSSProperties}
                aria-hidden="true"
              />
              <div className="bpp-swatch__body">
                <div className="bpp-swatch__row">
                  <h3 className="bpp-swatch__name">{s.cz}</h3>
                  <span className="bpp-swatch__hard">{s.hardness}</span>
                </div>
                <p className="bpp-swatch__lat">{s.lat}</p>
                <p className="bpp-swatch__note">{s.note}</p>
              </div>
            </li>
          ))}
        </ul>

        <figure className="bpp-figure">
          <img
            src="/section-1.webp"
            alt="Řemeslník brousí dřevěnou podlahu bezprašnou bruskou"
            className="bpp-figure__img"
          />
          <figcaption className="bpp-figure__cap">
            Bezprašné broušení odsává piliny přímo od kotouče — prach nekončí v bytě.
          </figcaption>
        </figure>

        <ol className="bpp-steps">
          {steps.map((st) => (
            <li className="bpp-step" key={st.no}>
              <span className="bpp-step__no">{st.no}</span>
              <div>
                <h3 className="bpp-step__title">{st.title}</h3>
                <p className="bpp-step__body">{st.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bpp-section bpp-trust" aria-labelledby="trust-h">
        <div className="bpp-trust__grid">
          <div className="bpp-trust__text">
            <p className="bpp-eyebrow">Kdo to skládá</p>
            <h2 className="bpp-h2" id="trust-h">
              Třicet let na pražských podlahách
            </h2>
            <p className="bpp-trust__lead">
              BP Parket plus je rodinná dílna, která pokládá a renovuje dřevěné
              podlahy po celé Praze od poloviny devadesátých let. Nebereme deset
              zakázek najednou — bereme tolik, kolik jich sami odvedeme rukou.
            </p>
            <p className="bpp-trust__body">
              Zvládneme sundat starý koberec z panelákového bytu i zachránit
              stoleté vlysy v secesním činžáku na Vinohradech. K vlhkosti podkladu
              přistupujeme vážně — právě od ní se pozná, jestli podlaha za dva
              roky nezačne pracovat.
            </p>
            <ul className="bpp-refs">
              {references.map((r) => (
                <li className="bpp-ref" key={r.place}>
                  <span className="bpp-ref__year">{r.year}</span>
                  <div>
                    <p className="bpp-ref__place">{r.place}</p>
                    <p className="bpp-ref__work">{r.work}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <figure className="bpp-trust__media">
            <img
              src="/section-2.webp"
              alt="Hotová dřevěná podlaba v pražském bytě s výrazným vzorem parket"
              className="bpp-trust__img"
            />
            <figcaption className="bpp-trust__cap">
              Dokončená dubová podlaha po olejování — matný povrch, který se dá
              kdykoli lokálně opravit.
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}

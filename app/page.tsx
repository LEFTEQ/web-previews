import type { ReactNode } from "react";

type Service = {
  tag: string;
  title: string;
  body: string;
};

const services: Service[] = [
  {
    tag: "Fólie",
    title: "Celopřevleky · colorchange",
    body: "Změna barvy laku fólií KPMF a Avery — chameleon, mat, satin i metallic. Žádný přestřik, žádný nevratný krok: pod fólií zůstává původní lak nedotčený.",
  },
  {
    tag: "Polep",
    title: "Reklamní polepy vozidel",
    body: "Od jednoho nápisu na dveřích po celý vůz. Návrh, tisk, řezaná grafika i aplikace u nás v dílně — s citem pro každý přechod a hranu.",
  },
  {
    tag: "Ochrana",
    title: "Ochranná fólie laku (stoneprotect)",
    body: "Průhledná fólie proti odletujícím kamínkům, oděru a drobným škrábancům. Nejvíc namáhané partie vozu zůstanou jako nové.",
  },
  {
    tag: "Flotily",
    title: "Dodávky, skříňová auta, autobusy",
    body: "Jednotný design přes celou flotilu — aby vaše vozy poznali na silnici dřív, než přečtou telefon. Řešíme i speciální projekty a atypické tvary.",
  },
  {
    tag: "Tisk",
    title: "Výroba reklamy",
    body: "Reklamní tabule, plachty, bannery, samolepky, okenní grafika i velkoplošný tisk. Vše sladěné s polepem vozu do jednoho vizuálu.",
  },
  {
    tag: "Design",
    title: "Grafický návrh na míru",
    body: "Vlastní grafické studio. Vymyslíme, navrhneme a nalepíme. Klienti k nám jezdí i přes 200 km právě kvůli nápadům, které jinde nenajdou.",
  },
];

type Review = {
  quote: string;
  name: string;
  detail: string;
};

const reviews: Review[] = [
  {
    quote:
      "Musím říct, že to, co jste navrhli, je zatím jediné, co mě zaujalo — je to decentní, máte cit. Klobouk dolů.",
    name: "Karel Novák",
    detail: "osobní vůz, změna barvy",
  },
  {
    quote: "Už počtvrté špičkově odvedená práce. Za sebe rozhodně doporučuji.",
    name: "Marek Veselý",
    detail: "flotila dodávek",
  },
  {
    quote: "Dobrý nápady a čisté provedení. Přesně to jsme hledali.",
    name: "Ladislav Jůna",
    detail: "reklama na skříňové auto",
  },
];

const brands = [
  "KPMF",
  "3M",
  "AVERY",
  "ARLON",
  "APA",
  "ORACAL",
  "HEXIS",
  "TECKWRAP",
  "PWF",
];

function Stat({ value, label }: { value: string; label: string }): ReactNode {
  return (
    <div className="stat">
      <span className="stat__value">{value}</span>
      <span className="stat__label">{label}</span>
    </div>
  );
}

export default function Page() {
  return (
    <main>
      <header className="site-head">
        <div className="wrap site-head__inner">
          <a className="brand" href="#top" aria-label="Studio Aleš — domů">
            <span className="brand__studio">STUDIO</span>
            <span className="brand__ales">ALEŠ</span>
            <span className="brand__cut" aria-hidden="true" />
          </a>
          <a className="site-head__phone" href="tel:+420777302011">
            <span className="site-head__phoneLabel">Dílna Ústí n. L.</span>
            777&nbsp;302&nbsp;011
          </a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero__grid" aria-hidden="true" />
        <div className="wrap hero__inner">
          <p className="eyebrow">
            Polepy aut · Ústí nad Labem · v oboru od roku 1992
          </p>
          <h1 className="hero__title">
            <span className="hero__line">REKLAMA,</span>
            <span className="hero__line">KTERÁ MĚNÍ</span>
            <span className="hero__line">
              <span className="cc" data-text="BARVU">
                BARVU
              </span>
            </span>
          </h1>
          <p className="hero__lede">
            Sledujte, jak lak přejede pod stěrkou z fialové do tyrkysové —
            přesně to je chameleon colorchange od KPMF, který lepíme na vozy
            každý týden. Celopřevleky, reklamní polepy i ochranné fólie,
            navržené a nalepené u nás v dílně.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="tel:+420777302011">
              Zavolat do dílny
            </a>
            <a className="btn btn--ghost" href="mailto:grafika@studio-ales.cz">
              Poslat poptávku
            </a>
          </div>
          <div className="hero__facts">
            <Stat value="1992" label="lepíme fólie od roku" />
            <Stat value="5–10 let" label="životnost polepu" />
            <Stat value="200+ km" label="za námi jezdí klienti" />
          </div>
        </div>
        <div className="squeegee" aria-hidden="true" />
      </section>

      <section className="band band--services" aria-labelledby="nabidka">
        <div className="wrap">
          <div className="band__head">
            <p className="eyebrow eyebrow--violet">Co u nás vyřešíte</p>
            <h2 className="band__title" id="nabidka">
              Od jednoho nápisu po celý vůz v nové barvě
            </h2>
            <p className="band__intro">
              Používáme výhradně osvědčené wrapping vinyly předních světových
              výrobců. Každou aplikaci děláme s ohledem na detail — hrany,
              přechody, lišty i kliky.
            </p>
          </div>
          <ul className="cards">
            {services.map((s) => (
              <li className="card" key={s.title}>
                <span className="card__tag">{s.tag}</span>
                <h3 className="card__title">{s.title}</h3>
                <p className="card__body">{s.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band band--trust" aria-labelledby="duvera">
        <div className="wrap">
          <div className="band__head">
            <p className="eyebrow eyebrow--teal">Proč k nám jezdí přes půl republiky</p>
            <h2 className="band__title" id="duvera">
              Jde jim o nápady a design, které v okolí nenajdou
            </h2>
            <p className="band__intro">
              Jsme tým lidí, kteří se v oboru pohybují od roku 1992 a skvěle se
              doplňují. Cit pro detail, představivost a nápady — to je to, co
              nás dělá výjimečnými.
            </p>
          </div>

          <div className="reviews">
            {reviews.map((r) => (
              <figure className="review" key={r.name}>
                <blockquote className="review__quote">{r.quote}</blockquote>
                <figcaption className="review__by">
                  <span className="review__name">{r.name}</span>
                  <span className="review__detail">{r.detail}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="brands">
            <p className="brands__label">Lepíme jen prověřené vinyly</p>
            <ul className="brands__list">
              {brands.map((b) => (
                <li className="brands__item" key={b}>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="faq">
            <h3 className="faq__q">Jaká je životnost polepu?</h3>
            <p className="faq__a">
              Fólie mají podle provedení a klimatu životnost 7 až 10 let. Po
              zhruba šesti letech doporučujeme fólii sundat kvůli snadné a
              bezpracné demontáži. Když se při aplikaci pracuje správně, vydrží
              na voze bez problémů minimálně pět let — a lak pod ní zůstává jako
              nový.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

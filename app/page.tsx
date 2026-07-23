import { AiImage } from "./_ui";

const services = [
  {
    title: "Nová nákladní vozidla",
    text: "Odvezeme vámi koupené tahače a valníky rovnou z výrobního závodu — po celé EU i do Ruské federace. Bez rizika, v dohodnutém termínu.",
  },
  {
    title: "Ojeté LKW",
    text: "Postaráme se o převoz starších nákladních vozů kamkoli po Evropě. Naložíme, zajistíme, doručíme — profesionálně a bez škrábnutí.",
  },
  {
    title: "Návěsy a přívěsy",
    text: "Přepravíme návěsy i přívěsy všech typů a velikostí. Rychle a bezpečně napříč kontinentem, na Balkán i do RF.",
  },
  {
    title: "Hlídané parkoviště 3 500 m²",
    text: "Vlastní zabezpečená plocha u Olomouce přímo na dopravním uzlu. Snadný příjezd pro všechny typy LKW.",
  },
];

const chips = [
  "Řidiči se zkušenostmi na evropských trasách",
  "Vlastní hlídané parkoviště 3 500 m²",
  "Přeprava do EU, na Balkán i do Ruské federace",
];

export default function Page() {
  return (
    <div className="road">
      <span className="lane" aria-hidden="true" />

      <header className="site-head">
        <div className="wordmark">
          <span className="wordmark__plate">AD</span>
          <span className="wordmark__name">PNTH</span>
          <span className="wordmark__sub">Autodoprava · Olomouc</span>
        </div>
      </header>

      {/* HERO */}
      <section className="band band--dark hero" id="uvod">
        <div className="inner hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">
              <span className="plate plate--sm">E442</span>
              Nákladní přeprava napříč Evropou
            </p>
            <h1 className="hero__title">
              Nákladní vozy dovezeme
              <br />
              přes celou Evropu.
            </h1>
            <p className="lede">
              Nová i ojetá LKW z výrobních závodů, návěsy a přívěsy —
              z Olomouce na Balkán i do Ruské federace. K tomu vlastní
              hlídané parkoviště přímo na dálničním uzlu.
            </p>
            <a className="btn" href="#sluzby">Naše služby</a>
            <div className="route-strip" aria-label="Naše hlavní koridory">
              <span className="plate">E442</span>
              <span className="plate">E462</span>
              <span className="plate">46</span>
              <span className="plate">55</span>
            </div>
          </div>
          <figure className="hero__media">
            <AiImage
              src="/hero.webp"
              alt="Tahač AD PNTH na evropské dálnici"
              className="media media--hero"
            />
          </figure>
        </div>
      </section>

      {/* SLUŽBY */}
      <section className="band band--light" id="sluzby">
        <div className="inner">
          <div className="band-head">
            <span className="plate plate--marker">E462</span>
            <h2 className="band-title">Co pro vás zajistíme</h2>
          </div>
          <p className="band-lede">
            Od jednoho vozu z výrobní linky po celé soupravy — plánujeme
            trasu, hlídáme náklad a jedeme, dokud není na místě.
          </p>

          <div className="cards">
            {services.map((s) => (
              <article className="card" key={s.title}>
                <h3 className="card__title">{s.title}</h3>
                <p className="card__text">{s.text}</p>
              </article>
            ))}
          </div>

          <figure className="figure">
            <AiImage
              src="/section-1.webp"
              alt="Nakládka nákladního vozidla na návěs"
              className="media media--wide"
            />
          </figure>
        </div>
      </section>

      {/* O NÁS / DŮVĚRA */}
      <section className="band band--dark" id="onas">
        <div className="inner about__grid">
          <div className="about__copy">
            <div className="band-head">
              <span className="plate plate--marker">46</span>
              <span className="plate plate--marker">55</span>
              <h2 className="band-title">Partner na dlouhé trasy</h2>
            </div>
            <p className="band-lede">
              AD PNTH vozí nákladní vozidla po evropských dálnicích řadu
              let. Naši řidiči znají cesty na Balkán i do Ruské federace
              a vědí, jak dovézt náklad včas a bez poškození.
            </p>
            <p className="band-lede">
              Naše logistické parkoviště o rozloze 3 500 m² leží u
              Olomouce přímo na uzlu rychlostních silnic E442, E462, 46
              a 55 — bezproblémový příjezd pro všechny typy LKW a
              zabezpečené odstavení mezi jednotlivými etapami.
            </p>
            <ul className="chips">
              {chips.map((c) => (
                <li className="chip" key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <figure className="about__media">
            <AiImage
              src="/section-2.webp"
              alt="Zabezpečené parkoviště pro nákladní vozidla u Olomouce"
              className="media media--tall"
            />
          </figure>
        </div>
      </section>
    </div>
  );
}

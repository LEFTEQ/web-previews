import { HeroWord, CurrentSection } from "./motion";

const CELLS = [
  {
    id: "01 / PV",
    title: "Fotovoltaické elektrárny",
    body: "Panely, měnič, baterie i měření na klíč. Výkon navrhneme přesně na vaši spotřebu a plochu střechy — ne na katalog.",
    spec: "3–12 kWp",
  },
  {
    id: "02 / SMART",
    title: "Chytrá domácnost LOXONE",
    body: "Světla, topení, žaluzie i zabezpečení řídí jeden Miniserver. Ovládáte z telefonu, o zbytek se dům postará sám.",
    spec: "1× Miniserver",
  },
  {
    id: "03 / ELEC",
    title: "Elektroinstalace a zabezpečení",
    body: "Kompletní rozvody 230/400 V, rozvaděče, alarmy i kamery. Revize a papíry vždy v pořádku a předané.",
    spec: "230 / 400 V",
  },
  {
    id: "04 / HEAT",
    title: "Tepelná čerpadla",
    body: "Vytápění a ohřev vody čerpadlem vzduch–voda. Nižší účty, tichý chod, dotaci vám vyřídíme za vás.",
    spec: "COP 4,8",
  },
];

const REASONS = [
  {
    k: "A",
    title: "Jeden dodavatel, celý dům",
    body: "Fotovoltaiku, elektroinstalaci, chytrou domácnost i tepelné čerpadlo uděláme pod jednou smlouvou. Nekoordinujete pět firem, které si navzájem ukazují na chyby.",
  },
  {
    k: "B",
    title: "Vidíte, co dům opravdu vyrobí",
    body: "Instalaci zapojíme do měření a monitoringu. V aplikaci sledujete výrobu i spotřebu v reálných kWh — ne v odhadech z prospektu.",
  },
  {
    k: "C",
    title: "Jsme z Plzně",
    body: "Montujeme v Plzni a okolí, na servis i reklamaci k vám dojedeme. Sídlíme v areálu bývalého K&V elektro, kde nás snadno najdete.",
  },
];

export default function Page() {
  return (
    <main>
      <section className="section hero">
        <div className="wrap">
          <p className="wordmark">
            MIDA<span className="wm-node" aria-hidden="true" />TECH
            <span className="wm-sub mono">s.r.o. · Plzeň</span>
          </p>

          <p className="eyebrow mono">Fotovoltaika · elektroinstalace · chytrá domácnost</p>

          <h1 className="hero-title">
            Jsme Váš partner
            <br />
            ve světě <HeroWord />
          </h1>

          <p className="lead">
            Kompletní řešení vašich elektroinstalací — od panelu na střeše
            po poslední zásuvku. Navrhneme, zapojíme a změříme celý systém
            tak, aby na sebe díly seděly.
          </p>

          <ul className="chips" aria-label="Klíčové parametry">
            <li className="chip">
              <span className="chip-val mono">12 kWp</span>
              <span className="chip-lab">typický výkon systému</span>
            </li>
            <li className="chip">
              <span className="chip-val mono">≤ 6 týdnů</span>
              <span className="chip-lab">od návrhu k provozu</span>
            </li>
            <li className="chip">
              <span className="chip-val mono">10 let</span>
              <span className="chip-lab">záruka na montáž</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section services">
        <div className="wrap">
          <header className="sec-head">
            <p className="eyebrow mono">Specifikace / služby</p>
            <h2 className="sec-title">Čtyři moduly jednoho systému</h2>
            <p className="sec-note">
              Každá služba je článek na jednom listu — propojený stejnou
              stříbrnou sběrnicí jako panely na střeše. Proud jde po jedné
              lince.
            </p>
          </header>

          <CurrentSection className="bus-wrap">
            <span className="bus" aria-hidden="true" />
            <span className="spark" aria-hidden="true" />
            {CELLS.map((c) => (
              <article className="cell" key={c.id}>
                <span className="connector" aria-hidden="true" />
                <span className="dot" aria-hidden="true" />
                <div className="cell-top">
                  <span className="cell-id mono">{c.id}</span>
                  <span className="cell-spec mono">{c.spec}</span>
                </div>
                <h3 className="cell-title">{c.title}</h3>
                <p className="cell-body">{c.body}</p>
              </article>
            ))}
          </CurrentSection>
        </div>
      </section>

      <section className="section trust">
        <div className="wrap">
          <header className="sec-head">
            <p className="eyebrow mono copper">MIDATECH · Plzeň</p>
            <h2 className="sec-title">Proč s námi spolupracovat</h2>
          </header>

          <ol className="reasons">
            {REASONS.map((r) => (
              <li className="reason" key={r.k}>
                <span className="reason-k mono">{r.k}</span>
                <div>
                  <h3 className="reason-title">{r.title}</h3>
                  <p className="reason-body">{r.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="place">
            <p className="place-lab mono">Kde nás najdete</p>
            <p className="place-addr">Ukázková 123, Plzeň</p>
            <p className="place-note">
              V areálu bývalého K&amp;V elektro, vedle zákaznického centra
              Skupiny ČEZ. Zaparkujete pohodlně přímo u dílny.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

import { HeroDescent } from "./motion";

function Corners() {
  return (
    <span className="pr-corners" aria-hidden="true">
      <span className="c tl" />
      <span className="c tr" />
      <span className="c bl" />
      <span className="c br" />
    </span>
  );
}

const services = [
  {
    tag: "PRODEJ · KOUPĚ · PRONÁJEM",
    title: "Realitní činnost",
    desc: "Provedeme vás celým obchodem — od první prohlídky po předání klíčů a přepis na katastru.",
  },
  {
    tag: "OCENĚNÍ",
    title: "Tržní odhad ceny",
    desc: "Zjistíte reálnou cenu své nemovitosti podle skutečných prodejů v okolí, ne podle přání.",
  },
  {
    tag: "HYPOTÉKY",
    title: "Financování",
    desc: "Porovnáme nabídky bank a najdeme splátku, která vám sedne. Poradenství je zdarma.",
  },
  {
    tag: "SMLOUVY · ÚSCHOVA",
    title: "Právní servis",
    desc: "Kupní smlouvy, advokátní úschova i podání na katastr pod dohledem právníka.",
  },
  {
    tag: "VIDEO · 3D",
    title: "Video a 3D prohlídky",
    desc: "Nemovitost si prohlédne kdokoli, odkudkoli — dřív, než přijede osobně.",
  },
  {
    tag: "INVESTICE",
    title: "Výkup nemovitostí",
    desc: "Potřebujete prodat rychle? Vykoupíme přímo, bez čekání na kupce z inzerátu.",
  },
];

const listings = [
  {
    coord: "49.8092°N 18.3446°E",
    loc: "OSTRAVA — SLEZSKÁ OSTRAVA",
    type: "Rodinný dům · 6+1",
    title: "Frýdecká",
    desc: "Prostorný dům u hlavní silnice, vhodný k bydlení i podnikání. Dvě podlaží, dílna, zahrada.",
    price: "6 500 000 Kč",
  },
  {
    coord: "49.7898°N 18.3231°E",
    loc: "OSTRAVA — KUNČICE",
    type: "Stavební pozemek · 835 m²",
    title: "OV-Kunčice",
    desc: "Rovinatý pozemek se sítěmi na hranici, ideální pro novostavbu rodinného domu.",
    price: "1 500 000 Kč",
  },
  {
    coord: "49.8462°N 18.1078°E",
    loc: "JISTEBNÍK",
    type: "Stavební pozemek · 1 045 m²",
    title: "Jistebník, parc. 752/96",
    desc: "Klidná obec 15 minut od Ostravy. Jižní orientace, výhled na rybníky, přístupová cesta.",
    price: "2 850 000 Kč",
  },
];

export default function Page() {
  return (
    <main className="pr">
      <HeroDescent />

      <section className="pr-section" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="pr-wrap">
          <header className="pr-head reveal">
            <p className="pr-eyebrow">
              <span className="pr-tick" aria-hidden="true" />
              KOMPLETNÍ REALITNÍ SERVIS
            </p>
            <h2 id="sluzby-nadpis" className="pr-h2">
              Co pro vás uděláme
            </h2>
            <p className="pr-sub">
              Odbornost, zkušenost, spolehlivost. Postaráme se o celý obchod, aby
              vás nic nepřekvapilo — od odhadu ceny po podpis smlouvy.
            </p>
          </header>

          <div className="pr-grid">
            {services.map((s) => (
              <article className="pr-svc reveal" key={s.title}>
                <span className="pr-svc-tag">{s.tag}</span>
                <h3 className="pr-svc-title">{s.title}</h3>
                <p className="pr-svc-desc">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pr-section pr-section--dark" id="nabidka" aria-labelledby="nabidka-nadpis">
        <div className="pr-wrap">
          <header className="pr-head reveal">
            <p className="pr-eyebrow pr-eyebrow--light">
              <span className="pr-tick" aria-hidden="true" />
              Z NAŠÍ NABÍDKY · OSTRAVSKO
            </p>
            <h2 id="nabidka-nadpis" className="pr-h2 pr-h2--light">
              Každá nemovitost přesně zaměřená
            </h2>
            <p className="pr-sub pr-sub--light">
              Trh v Ostravě a okolí známe od roku 1997. Každou nabídku zaměříme,
              nafotíme a popíšeme tak, jak byste to čekali sami od sebe.
            </p>
          </header>

          <div className="pr-cards">
            {listings.map((l) => (
              <article className="pr-card reveal" key={l.title}>
                <Corners />
                <div className="pr-card-head">
                  <span className="pr-card-coord">{l.coord}</span>
                  <span className="pr-card-loc">{l.loc}</span>
                </div>
                <div className="pr-card-body">
                  <p className="pr-card-type">{l.type}</p>
                  <h3 className="pr-card-title">{l.title}</h3>
                  <p className="pr-card-desc">{l.desc}</p>
                </div>
                <div className="pr-card-foot">
                  <span className="pr-price">{l.price}</span>
                  <span className="pr-card-more">Detail →</span>
                </div>
              </article>
            ))}
          </div>

          <p className="pr-note reveal">
            Hledáte něco konkrétního? Řekněte nám lokalitu a rozpočet — ozveme se
            s tím, co se na inzertní portály často ani nedostane.
          </p>
        </div>
      </section>
    </main>
  );
}

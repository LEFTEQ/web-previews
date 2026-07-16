import { AiImage } from "./_ui";
import { SpotlightPlate, HeroReveal } from "./motion";

const categories = [
  {
    label: "KUCHYNĚ · MODERNÍ",
    title: "Moderní kuchyně",
    desc: "Bezúchytkové fronty v matném laku, dubová dýha, integrované spotřebiče. Ostrý, čistý výraz do novostaveb i loftů.",
    prompt: "Modern handleless matte anthracite kitchen with warm oak veneer, integrated appliances, dark atelier lighting, single spotlight from above, deep shadows, Ostrava loft interior, photographic, moody",
    alt: "Moderní bezúchytková kuchyně v matném antracitu s dubovou dýhou"
  },
  {
    label: "KUCHYNĚ · KLASIKA",
    title: "Klasické kuchyně",
    desc: "Rámová dvířka, frézované detaily, tlumená šalvějová zeleň a mosazné úchyty. Teplo, které se nepřežene.",
    prompt: "Classic shaker framed kitchen with muted sage green matte doors and brushed brass handles, oak worktop, warm single overhead light on dark background, cozy, photographic",
    alt: "Klasická rámová kuchyně v šalvějové zeleni s mosaznými úchyty"
  },
  {
    label: "KOUPELNA",
    title: "Koupelnový nábytek",
    desc: "Skříňky pod umyvadlo odolné vlhku, dýha i lak, mosazné úchyty. Ladí s kuchyní do posledního detailu.",
    prompt: "Bespoke bathroom vanity cabinet in oak veneer with brass handles, stone top, dark elegant bathroom, single spotlight, deep shadows, photographic",
    alt: "Koupelnová skříňka pod umyvadlo z dubové dýhy s mosaznými úchyty"
  },
  {
    label: "KANCELÁŘ",
    title: "Kancelářský nábytek",
    desc: "Pracovny a home office na míru — úložné stěny, psací desky, kabely schované z dohledu.",
    prompt: "Bespoke home office cabinetry, oak veneer storage wall with integrated desk, dark warm interior, single directional light, photographic, minimal",
    alt: "Pracovna na míru s dubovou úložnou stěnou a psacím stolem"
  },
  {
    label: "OSTATNÍ",
    title: "Ostatní nábytek",
    desc: "Vestavěné skříně, knihovny, jídelní stoly. Cokoliv, co doplní interiér ve stejném rukopisu.",
    prompt: "Built-in wardrobe and bookshelf in oak veneer, bespoke dining table, dark atelier interior, one warm spotlight, deep shadow, photographic",
    alt: "Vestavěná dubová knihovna a jídelní stůl na míru"
  }
];

const steps = [
  {
    n: "01",
    title: "Návrh a vizualizace",
    desc: "Zaměříme prostor přímo u vás, navrhneme dispozici a ukážeme 3D vizualizaci — vidíte kuchyni dřív, než ji začneme vyrábět."
  },
  {
    n: "02",
    title: "Výroba na míru",
    desc: "Fronty, korpusy i atypické díly vyrábíme podle vašeho zaměření. Materiály volíme tak, aby vydržely desítky let běžného provozu."
  },
  {
    n: "03",
    title: "Montáž a předání",
    desc: "Starou kuchyni odvezeme, novou smontujeme a seřídíme. Předáváme uklizeno a připraveno k prvnímu vaření."
  }
];

export default function Page() {
  return (
    <main className="nest">
      <header className="nest-top">
        <a className="nest-logo" href="#uvod" aria-label="Kuchyně NEST, úvod">
          <span className="nest-logo__glyph" aria-hidden="true" />
          <span className="nest-logo__word">NEST</span>
          <span className="nest-logo__sub">kuchyně · Ostrava</span>
        </a>
        <a className="nest-call" href="tel:+420773304285">Zavolat 773 304 285</a>
      </header>

      <section className="nest-hero" id="uvod">
        <HeroReveal>
          <p className="nest-hero__eyebrow">Kuchyňské studio · Retail Park Ostrava</p>
          <div className="nest-hero__frame">
            <h1 className="nest-hero__title">
              Kuchyně na&nbsp;míru,
              <br />
              spojené <span className="nest-oak">na&nbsp;pokos.</span>
            </h1>
          </div>
          <p className="nest-hero__lead">
            Navrhneme, vyrobíme a&nbsp;smontujeme nábytek, který drží tvar i&nbsp;po letech.
            Každý spoj sedí přesně — stejně jako mitrovaný roh pracovní desky, ze kterého
            vychází i&nbsp;naše značka.
          </p>
          <div className="nest-hero__cta">
            <a className="nest-btn" href="#nabidka">Prohlédnout realizace</a>
            <a className="nest-btn nest-btn--ghost" href="#showroom">Přijít do showroomu</a>
          </div>
        </HeroReveal>
      </section>

      <section className="nest-section" id="nabidka" aria-labelledby="nabidka-h">
        <div className="nest-head">
          <span className="nest-mark" aria-hidden="true" />
          <div>
            <p className="nest-eyebrow">Co vyrábíme</p>
            <h2 className="nest-h2" id="nabidka-h">Pět rukopisů, jeden spoj</h2>
          </div>
        </div>
        <p className="nest-intro">
          Neděláme jednu kuchyni pořád dokola. Podle prostoru i&nbsp;povahy domácnosti
          volíme mezi ostře moderním a&nbsp;tlumeně klasickým výrazem — a&nbsp;stejný
          řemeslný standard přenášíme do koupelny, pracovny i&nbsp;obývacího pokoje.
        </p>

        <div className="nest-grid">
          {categories.map((c) => (
            <SpotlightPlate key={c.title} label={c.label} title={c.title} desc={c.desc}>
              <AiImage
                src={c.prompt}
                alt={c.alt}
                className="nest-img"
              />
            </SpotlightPlate>
          ))}
        </div>
      </section>

      <section className="nest-section nest-section--alt" id="showroom" aria-labelledby="about-h">
        <div className="nest-head">
          <span className="nest-mark" aria-hidden="true" />
          <div>
            <p className="nest-eyebrow">Jak to u nás chodí</p>
            <h2 className="nest-h2" id="about-h">Od zaměření po první večeři</h2>
          </div>
        </div>

        <p className="nest-intro">
          NEST je ostravské studio zaměřené hlavně na kuchyně na míru. Vedeme vás celou
          cestou — od prvního náčrtu po den, kdy si zapnete indukci. Vzorky front, dýh
          i&nbsp;úchytů si osaháte v&nbsp;showroomu ve Varenské ulici.
        </p>

        <ol className="nest-steps">
          {steps.map((s) => (
            <li className="nest-step" key={s.n}>
              <span className="nest-step__n">{s.n}</span>
              <h3 className="nest-step__t">{s.title}</h3>
              <p className="nest-step__d">{s.desc}</p>
            </li>
          ))}
        </ol>

        <div className="nest-facts">
          <div className="nest-fact">
            <p className="nest-fact__k">Showroom</p>
            <p className="nest-fact__v">
              Retail Park Ostrava<br />
              Varenská 3309<br />
              Moravská Ostrava, 702&nbsp;00
            </p>
          </div>
          <div className="nest-fact">
            <p className="nest-fact__k">Spojte se</p>
            <p className="nest-fact__v">
              <a href="tel:+420773304285">+420&nbsp;773&nbsp;304&nbsp;285</a><br />
              <a href="mailto:info@kuchynenest.cz">info@kuchynenest.cz</a>
            </p>
          </div>
          <div className="nest-fact">
            <p className="nest-fact__k">Záruka rukou</p>
            <p className="nest-fact__v">
              Vyrábíme z&nbsp;materiálů stavěných na&nbsp;desítky let. Za&nbsp;spoje, které
              utáhneme, ručíme.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

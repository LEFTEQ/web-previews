import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kafíčko 33 — čajovna a kavárna v Praze",
  description:
    "Čajovna Kafíčko 33 v Praze: sypané čaje z celého světa, poctivá káva a domácí koláče. Místo, kam se rádi vracíte na klidný šálek.",
  openGraph: {
    title: "Kafíčko 33 — čajovna v Praze",
    description:
      "Sypané čaje, poctivá káva a domácí koláče v klidné pražské čajovně. Pojďte se posadit.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", alt: "Konvička čaje a šálek v čajovně Kafíčko 33" }],
  },
};

const caje = [
  {
    cislo: "01",
    nazev: "Bílé a zelené",
    puvod: "Fu-ťien · Uči",
    popis:
      "Jemné sypané čaje louhované u stolu ve skleněné konvičce. Přineseme přesýpací hodiny, ať poznáte, kdy je čas nalít.",
    louhovani: "70–80 °C",
  },
  {
    cislo: "02",
    nazev: "Oolong a pu-erh",
    puvod: "Wu-i · Jün-nan",
    popis:
      "Polozelené a tmavé čaje, které vydrží pět a víc nálevů. Sedněte si na dýl, každý nálev chutná jinak.",
    louhovani: "90–95 °C",
  },
  {
    cislo: "03",
    nazev: "Bylinné směsi",
    puvod: "míchané u nás",
    popis:
      "Máta, meduňka, lípa a šípek z okolí Prahy. Bez kofeinu, na večer i pro děti, které přišly s rodiči.",
    louhovani: "100 °C",
  },
  {
    cislo: "04",
    nazev: "Káva a koláče",
    puvod: "pražírna v Holešovicích",
    popis:
      "Když máte spíš na kávu: espresso i filtr. K tomu domácí tvarohový koláč a makový závin, pečeme každé ráno.",
    louhovani: "92 °C",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a href="#" className="wordmark" aria-label="Kafíčko 33, domů">
          <span className="wordmark__name">Kafíčko</span>
          <span className="wordmark__num">33</span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#nabidka">Čajový lístek</a>
          <a href="#onas">O čajovně</a>
          <a href="#onas" className="nav__cta">Rezervovat stůl</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero__copy">
          <p className="eyebrow">Čajovna &amp; kavárna · Praha</p>
          <h1 className="hero__title">
            Nechte čaj<br />
            <span className="hero__title--em">louhovat</span><br />
            a čas plynout.
          </h1>
          <p className="hero__lede">
            Sypané čaje z celého světa, poctivá káva a koláče z vlastní
            pece. Kafíčko 33 je klidný stůl kousek od shonu — sedněte si,
            druhý nálev je vždycky lepší.
          </p>
          <div className="hero__actions">
            <a href="#nabidka" className="btn btn--solid">Prohlédnout čaje</a>
            <a href="#onas" className="btn btn--ghost">Kde nás najdete</a>
          </div>
        </div>
        <figure className="hero__figure">
          <img
            src="/hero.webp"
            alt="Konvička sypaného čaje a šálek na stole v čajovně Kafíčko 33"
            className="hero__img"
            width={1200}
            height={1400}
          />
          <figcaption className="hero__steam">
            <span>první nálev</span>
            <span className="dot" aria-hidden="true">·</span>
            <span>2:30</span>
          </figcaption>
        </figure>
      </section>

      <section className="nabidka" id="nabidka" aria-labelledby="nabidka-h">
        <div className="section-head">
          <p className="eyebrow">Co nalejeme</p>
          <h2 id="nabidka-h">Čtyři police čaje,<br /> jedna vůně kávy</h2>
          <p className="section-head__note">
            Řadíme podle teploty vody — od nejjemnějších bílých čajů po
            vroucí bylinky. U každého poznáte, jak dlouho louhovat.
          </p>
        </div>

        <ul className="caje">
          {caje.map((c) => (
            <li className="caj" key={c.cislo}>
              <span className="caj__cislo" aria-hidden="true">{c.cislo}</span>
              <div className="caj__body">
                <h3 className="caj__nazev">{c.nazev}</h3>
                <p className="caj__puvod">{c.puvod}</p>
                <p className="caj__popis">{c.popis}</p>
              </div>
              <span className="caj__teplota">{c.louhovani}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="onas" id="onas" aria-labelledby="onas-h">
        <figure className="onas__figure">
          <img
            src="/section-1.webp"
            alt="Interiér čajovny Kafíčko 33 s dřevěnými stoly"
            className="onas__img"
            width={1000}
            height={1200}
          />
          <img
            src="/section-2.webp"
            alt="Talíř domácích koláčů podávaných v Kafíčku 33"
            className="onas__img onas__img--sm"
            width={800}
            height={800}
          />
        </figure>

        <div className="onas__copy">
          <p className="eyebrow">O čajovně</p>
          <h2 id="onas-h">Místo, kam se rádi vracíte</h2>
          <p>
            Kafíčko 33 vzniklo z jednoduché touhy: mít v Praze stůl, kde se
            nespěchá. Čaj vážíme na váze, vodu hlídáme na stupně a koláče
            pečeme sami každé ráno. Žádný automat, žádný spěch — jen dobrá
            konvička a chvíle klidu.
          </p>

          <dl className="fakta">
            <div>
              <dt>Kde</dt>
              <dd>Praha · pár kroků od tramvaje</dd>
            </div>
            <div>
              <dt>Otevřeno</dt>
              <dd>Út–Ne, 9:00–20:00</dd>
            </div>
            <div>
              <dt>Na výběr</dt>
              <dd>přes 40 druhů sypaného čaje</dd>
            </div>
          </dl>

          <blockquote className="citace">
            „Přišla jsem na jeden čaj a zůstala tři hodiny s knížkou.
            Přesně tohle jsem v Praze hledala.“
            <cite>— Markéta, stálá hostka</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}

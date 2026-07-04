import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Isofen Power — elektrikář a fotovoltaika, České Budějovice",
  description:
    "Elektromontážní firma z Českých Budějovic. Fotovoltaika, elektroinstalace, tepelná čerpadla, dobíjecí stanice a projekční práce. Vyřídíme i dotaci Nová zelená úsporám.",
};

const sluzby = [
  {
    kod: "L1",
    nazev: "Fotovoltaické elektrárny",
    popis:
      "Návrh a montáž FVE na rodinné i bytové domy a firemní objekty. Od prvního výpočtu přes připojení k distribuční síti až po spuštění.",
  },
  {
    kod: "L2",
    nazev: "Elektroinstalace a hromosvody",
    popis:
      "Kompletní silnoproudé i slaboproudé rozvody, rozvaděče, revize a hromosvodová ochrana. Nové stavby i rekonstrukce.",
  },
  {
    kod: "L3",
    nazev: "Tepelná čerpadla a klimatizace",
    popis:
      "Dodávka a zapojení tepelných čerpadel a klimatizací. Ušetříte za vytápění a v létě zchladíte.",
  },
  {
    kod: "L4",
    nazev: "Dobíjecí stanice a trafostanice",
    popis:
      "Wallboxy pro domácnost i firemní dobíjecí body a trafostanice. Připraveno na elektromobil, který teprve přijde.",
  },
  {
    kod: "L5",
    nazev: "Fotovoltaický ohřev vody",
    popis:
      "Solární ohřev teplé vody — jednodušší cesta k úsporám, ideální i pro menší střechy a nižší rozpočet.",
  },
  {
    kod: "L6",
    nazev: "Projekční a inženýrská činnost",
    popis:
      "Zpracujeme projekt, vyřídíme povolení i připojení. Papírování necháte na nás.",
  },
];

const reference = [
  {
    jmeno: "Radka Karvánková",
    datum: "prosinec 2023",
    text:
      "Od začátku, přes vyřízení dotace až po samotnou realizaci FVE na rodinný dům jsme byli velmi spokojení. Profesionální přístup, s ničím nebyl problém. Vše funguje tak, jak má.",
  },
  {
    jmeno: "Tomáš Bočas",
    datum: "září 2022",
    text:
      "Na čem jsme se dohodli, to vždy platilo. Všichni dělníci byli pečliví a bylo vidět, že svému oboru rozumí. Skvělá zkušenost s lidmi, kteří tomu rozumí.",
  },
  {
    jmeno: "Jana C.",
    datum: "leden 2024",
    text:
      "Objednali jsme si velmi specifickou elektrárnu a Isofen byla jediná firma ochotná nám vybrané produkty sehnat a nainstalovat. Celé jednání i provedení bylo rychlé.",
  },
];

const postup = [
  { c: "01", t: "Navrhneme řešení", d: "Poradíme s výběrem komponentů podle vaší střechy a spotřeby." },
  { c: "02", t: "Vyřídíme dotaci", d: "Kompletní administrativu Nové zelené úsporám zařídíme za vás." },
  { c: "03", t: "Realizace do měsíce", d: "U fotovoltaiky montujeme do jednoho měsíce od schválení dotace." },
];

export default function Page() {
  return (
    <main className="ip">
      <header className="ip-top">
        <a className="ip-mark" href="#" aria-label="Isofen Power — úvod">
          <span className="ip-mark__iso">ISOFEN</span>
          <span className="ip-mark__pow">POWER</span>
          <span className="ip-mark__loc">Elektro · České Budějovice</span>
        </a>
        <a className="ip-tel" href="tel:+420387240800">
          <span className="ip-tel__label">Zavolat</span>
          <span className="ip-tel__num">+420 387 240 800</span>
        </a>
      </header>

      <section className="ip-hero" aria-labelledby="hero-nadpis">
        <div className="ip-hero__grid" aria-hidden="true">
          <div className="ip-hero__phase ip-hero__phase--l1">L1</div>
          <div className="ip-hero__phase ip-hero__phase--l2">L2</div>
          <div className="ip-hero__phase ip-hero__phase--l3">L3</div>
          <div className="ip-hero__phase ip-hero__phase--n">N</div>
        </div>

        <p className="ip-eyebrow">Elektromontážní firma · Novohradská 1145/99</p>
        <h1 id="hero-nadpis" className="ip-hero__title">
          <span className="ip-line ip-line--1">Energie,</span>
          <span className="ip-line ip-line--2">která vám</span>
          <span className="ip-line ip-line--3">
            <em>vydrží</em> léta
          </span>
        </h1>
        <p className="ip-hero__lead">
          Fotovoltaika, elektroinstalace, tepelná čerpadla a dobíjecí stanice.
          Od prvního výpočtu přes vyřízení dotace až po připojení k síti —
          všechno pod jednou firmou z Budějovic.
        </p>
        <div className="ip-hero__actions">
          <a className="ip-btn ip-btn--solid" href="#nabidka">
            Prohlédnout služby
          </a>
          <a className="ip-btn ip-btn--ghost" href="mailto:info@isofen.cz">
            Nezávazná poptávka
          </a>
        </div>
      </section>

      <section className="ip-section" id="nabidka" aria-labelledby="nabidka-nadpis">
        <div className="ip-section__head">
          <p className="ip-eyebrow">Naše nabídka</p>
          <h2 id="nabidka-nadpis" className="ip-section__title">
            Zapojíme celý dům
          </h2>
          <p className="ip-section__intro">
            Šest okruhů, jeden dodavatel. Kódy vlevo si můžete představit jako
            fáze na rozvaděči — každá vede jinam, ale sbíhají se u vás.
          </p>
        </div>

        <ul className="ip-cards">
          {sluzby.map((s) => (
            <li className="ip-card" key={s.kod}>
              <span className="ip-card__code" aria-hidden="true">
                {s.kod}
              </span>
              <h3 className="ip-card__title">{s.nazev}</h3>
              <p className="ip-card__text">{s.popis}</p>
            </li>
          ))}
        </ul>

        <div className="ip-dotace">
          <div className="ip-dotace__item">
            <p className="ip-dotace__kc">až 140 000 Kč</p>
            <p className="ip-dotace__name">Nová zelená úsporám na fotovoltaiku</p>
            <p className="ip-dotace__note">
              Na tepelná čerpadla až 90 000 Kč, k tomu kombinovaný bonus.
            </p>
          </div>
          <div className="ip-dotace__item">
            <p className="ip-dotace__kc">až 70 000 Kč</p>
            <p className="ip-dotace__name">Nová zelená úsporám Light</p>
            <p className="ip-dotace__note">
              Na solární ohřev vody pro nízkopříjmové domácnosti.
            </p>
          </div>
        </div>
      </section>

      <section className="ip-section ip-section--dark" aria-labelledby="onas-nadpis">
        <div className="ip-section__head">
          <p className="ip-eyebrow ip-eyebrow--light">O nás a reference</p>
          <h2 id="onas-nadpis" className="ip-section__title">
            Firma, které lidé v kraji věří
          </h2>
          <p className="ip-section__intro">
            Jsme elektromontážní firma se sídlem v Českých Budějovicích.
            Děláme komplexní projekty pro rodinné domy, bytovky i firmy —
            spolehlivě, bezpečně a s papíry v pořádku.
          </p>
        </div>

        <ol className="ip-steps">
          {postup.map((p) => (
            <li className="ip-step" key={p.c}>
              <span className="ip-step__num" aria-hidden="true">
                {p.c}
              </span>
              <h3 className="ip-step__title">{p.t}</h3>
              <p className="ip-step__text">{p.d}</p>
            </li>
          ))}
        </ol>

        <ul className="ip-refs">
          {reference.map((r) => (
            <li className="ip-ref" key={r.jmeno}>
              <p className="ip-ref__text">„{r.text}“</p>
              <p className="ip-ref__meta">
                <span className="ip-ref__name">{r.jmeno}</span>
                <span className="ip-ref__date">{r.datum}</span>
              </p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

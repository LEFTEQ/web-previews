import type { CSSProperties } from "react";

export default function Page() {
  const products = [
    {
      code: "01",
      name: "Chrom3D",
      claim: "Zrcadlový chrom, který se leskne jako kov",
      body: "Naše vlajková etiketa. Vypadá jako broušený kov, přitom je to pružná polyuretanová vrstva. Odolá slunci, mrazu i mytí a drží tvar do výšky 12 mm.",
    },
    {
      code: "02",
      name: "3D Mikro",
      claim: "Malý formát, který přesto vystoupí z povrchu",
      body: "Když máte na produktu jen pár milimetrů místa. Trojrozměrný efekt zvedne značku nad plochu a znásobí její viditelnost i na drobných výrobcích.",
    },
    {
      code: "03",
      name: "Technické etikety",
      claim: "Popisky ovládání, které přežijí provoz",
      body: "Označení funkcí, displeje na elektroniku, štítky na nářadí. Vyrábíme just-in-time v přesném čase i množství — tak, jak to potřebuje výrobní linka.",
    },
    {
      code: "04",
      name: "Magnetky a klíčenky",
      claim: "Reklamní předměty s tím samým 3D reliéfem",
      body: "Stejná technologie, jiný nosič. Magnetky, klíčenky i notesové štítky Notestix, které zákazník rád vezme do ruky a nechá si je.",
    },
  ];

  const references = [
    {
      client: "Eibenstock",
      role: "Torsten Georgi, Productmanager",
      quote:
        "Už rok označujeme profesionální nářadí Eibenstock etiketami 2HHOLINGER. Perfektní lepivost a 3D efekt naše výrobky dodatečně zhodnocují.",
    },
    {
      client: "LINET",
      role: "Eva Jungmanová, Strategic Purchaser",
      quote:
        "Dodávají štítky přesně v čase i množství a podílejí se na vývoji nových etiket. Oceňujeme profesionální přístup a flexibilitu.",
    },
    {
      client: "Moravia Propag",
      role: "Gabriela Kafková, Purchase Manager",
      quote:
        "Spolupracujeme řadu let, realizovali jsme spolu i velké množství zakázek pro Coca-Colu. Zvládnou i velmi rychlé termíny dodání.",
    },
  ];

  return (
    <main className="h-page">
      <header className="h-topbar">
        <a className="h-wordmark" href="#" aria-label="2HHOLINGER — domů">
          <span className="h-wordmark-2">2H</span>
          <span className="h-wordmark-name">HOLINGER</span>
        </a>
        <nav className="h-nav" aria-label="Hlavní">
          <a href="#produkty">Etikety</a>
          <a href="#reference">Reference</a>
          <a href="#kontakt">Poptávka</a>
        </nav>
      </header>

      <section className="h-hero" aria-labelledby="hero-title">
        <div className="h-hero-media">
          <img
            src="/hero.webp"
            alt="Detail chromové 3D etikety s výrazným reliéfem a zrcadlovým leskem"
            width={1600}
            height={1100}
          />
        </div>
        <div className="h-hero-copy">
          <p className="h-eyebrow">Výroba 3D etiket · Ústí nad Labem · od 1995</p>
          <h1 id="hero-title">
            Etikety, které nejsou <em>tištěné</em>.
            <br />
            Jsou <span className="h-reliefword">vytlačené</span> do prostoru.
          </h1>
          <p className="h-lede">
            Děláme reliéfní a chromové 3D etikety, které vystoupí z povrchu
            a produkt povýší. Vlastní provoz, materiál, který drží roky —
            a lesk, který se nedá vytisknout.
          </p>
          <div className="h-hero-actions">
            <a className="h-btn h-btn-primary" href="#kontakt">
              Poslat poptávku
            </a>
            <a className="h-btn h-btn-ghost" href="#produkty">
              Prohlédnout etikety
            </a>
          </div>
        </div>
      </section>

      <section className="h-section" id="produkty" aria-labelledby="prod-title">
        <div className="h-section-head">
          <p className="h-eyebrow">Co vytlačujeme</p>
          <h2 id="prod-title">Čtyři výšky reliéfu, jeden řemeslný postup</h2>
          <p className="h-section-lede">
            Každou etiketu stavíme ve vrstvách přímo tady v Ústí nad Labem.
            Vyberte podle toho, kolik místa na produktu máte a jak výrazně
            má značka vystoupit.
          </p>
        </div>

        <div className="h-cards">
          {products.map((p) => (
            <article className="h-card" key={p.code}>
              <span className="h-card-code" aria-hidden="true">
                {p.code}
              </span>
              <h3 className="h-card-name">{p.name}</h3>
              <p className="h-card-claim">{p.claim}</p>
              <p className="h-card-body">{p.body}</p>
            </article>
          ))}
        </div>

        <figure className="h-figure">
          <img
            src="/section-1.webp"
            alt="Archy hotových 3D etiket připravené k expedici ve výrobě 2HHOLINGER"
            width={1600}
            height={900}
          />
          <figcaption>
            Veškerá výroba probíhá výhradně v našich vlastních provozech —
            od návrhu reliéfu po expedici.
          </figcaption>
        </figure>
      </section>

      <section className="h-section h-section-dark" id="reference" aria-labelledby="ref-title">
        <div className="h-ref-grid">
          <div className="h-ref-intro">
            <p className="h-eyebrow h-eyebrow-light">Kdo nám věří</p>
            <h2 id="ref-title">
              Od nářadí přes nemocniční lůžka až po Coca-Colu
            </h2>
            <p className="h-section-lede">
              Naše etikety najdete na profesionálním nářadí, zdravotnické
              technice i na spotřebním zboží. Dodáváme just-in-time a rádi
              se zapojíme už do vývoje vašeho štítku.
            </p>
            <img
              className="h-ref-photo"
              src="/section-2.webp"
              alt="Chromová 3D etiketa nalepená na profesionálním výrobku"
              width={1200}
              height={900}
            />
          </div>

          <ul className="h-quotes">
            {references.map((r, i) => (
              <li className="h-quote" key={r.client} style={{ "--i": i } as CSSProperties}>
                <p className="h-quote-text">{r.quote}</p>
                <p className="h-quote-by">
                  <span className="h-quote-client">{r.client}</span>
                  <span className="h-quote-role">{r.role}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

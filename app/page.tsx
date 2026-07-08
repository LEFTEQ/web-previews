import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Řeznictví a uzenářství Oldřich Čejka — Pardubice",
  description:
    "Rodinné řeznictví ze Skutče a Pardubic. Poctivé staročeské uzeniny podle receptur po dědečcích, více než 20 ocenění, čtvrtá generace za pultem.",
};

const pulty = [
  {
    cislo: "01",
    nazev: "Domácí jitrnice a jelítka",
    popis:
      "Vařené na páře, plněné ručně jako u babičky. Mouku najdete jen tady a v sekané — protože jinam nepatří.",
  },
  {
    cislo: "02",
    nazev: "Vyzrálé hovězí",
    popis:
      "Rozborovaná čtvrť z českých chovů, dozrálá v komoře. Roštěná, svíčková i steaky nakrájíme podle vás.",
  },
  {
    cislo: "03",
    nazev: "Staročeské uzeniny",
    popis:
      "Šunka od kosti, klobásy a špekáčky uzené nad bukovým dřevem. Bez náhražek, bez zbytečných éček.",
  },
  {
    cislo: "04",
    nazev: "Paštiky a lahůdky",
    popis:
      "Kachní paštika s brusinkami, tlačenka i sekaná. To, co si u nás lidé kupují domů na neděli.",
  },
];

const duvery = [
  {
    stitek: "od 1923",
    text: "Josef Pátek otevřel rodinné řeznictví v Bratroňově. Řemeslo drží rodina přes sto let.",
  },
  {
    stitek: "20+ ocenění",
    text: "Regionální potravina i ocenění za chuť. Důkaz visí u nás na zdi, ne v reklamě.",
  },
  {
    stitek: "4. generace",
    text: "Za pultem dnes stojí Oldřich, Martin i Eva Čejkovi. Vnoučata zatím jako malí degustátoři.",
  },
];

export default function Page() {
  return (
    <main className="cj">
      <header className="cj-top">
        <a className="cj-brand" href="#" aria-label="Řeznictví Čejka, Pardubice">
          <span className="cj-brand-mark">Č</span>
          <span className="cj-brand-word">
            <span className="cj-brand-name">Čejka</span>
            <span className="cj-brand-sub">řeznictví &amp; uzenářství · Pardubice</span>
          </span>
        </a>
        <nav className="cj-nav" aria-label="Hlavní">
          <a href="#pult">Z pultu</a>
          <a href="#rodina">Rodina</a>
          <a className="cj-nav-cta" href="tel:+420469319499">Zavolat na prodejnu</a>
        </nav>
      </header>

      <section className="cj-hero" aria-labelledby="cj-hero-nadpis">
        <div className="cj-hero-text">
          <p className="cj-eyebrow">Poctivě už přes sto let · Skuteč &amp; Pardubice</p>
          <h1 id="cj-hero-nadpis">
            Řeznická generace,
            <br />
            která <span className="cj-hl">ctí tradici</span>
            <br />
            a nevzdává se.
          </h1>
          <p className="cj-lede">
            Rodinné řeznictví Čejků. Vaříme, udíme a bouráme sami — podle
            receptur, které jsme převzali od dědečků a babiček. Přijďte na
            čerstvou jitrnici, vyzrálé hovězí i šunku od kosti.
          </p>
          <div className="cj-hero-akce">
            <a className="cj-btn" href="#pult">Podívat se, co máme na pultě</a>
            <a className="cj-btn cj-btn-ghost" href="tel:+420469319499">
              +420 469 319 499
            </a>
          </div>
          <p className="cj-podpis">
            „Jsme řeznická generace, která ctí tradici, riskuje a nevzdává se.“
            <span>— Oldřich Čejka, jednatel</span>
          </p>
        </div>
        <figure className="cj-hero-obraz">
          <img
            src="/hero.webp"
            width={1200}
            height={1500}
            alt="Čerstvé uzeniny a maso z řeznictví Čejka na pultě"
          />
        </figure>
      </section>

      <section className="cj-sekce" id="pult" aria-labelledby="cj-pult-nadpis">
        <div className="cj-sekce-hlava">
          <p className="cj-eyebrow">Co si u nás naberete</p>
          <h2 id="cj-pult-nadpis">Z pultu Čejků</h2>
          <p className="cj-sekce-lede">
            Žádné náhražky ani zbytečná éčka. Vybíráme podle chuti — a rádi
            poradíme, co se k čemu hodí.
          </p>
        </div>

        <div className="cj-pult-layout">
          <ul className="cj-pult">
            {pulty.map((p) => (
              <li className="cj-pult-item" key={p.cislo}>
                <span className="cj-pult-cislo" aria-hidden="true">
                  {p.cislo}
                </span>
                <div>
                  <h3>{p.nazev}</h3>
                  <p>{p.popis}</p>
                </div>
              </li>
            ))}
          </ul>
          <figure className="cj-sekce-obraz">
            <img
              src="/section-1.webp"
              width={900}
              height={1100}
              alt="Nabídka masa a uzenin z řeznictví Čejka"
            />
            <figcaption>Vytiskneme i jídelní lístek a akce týdne — ptejte se u pultu.</figcaption>
          </figure>
        </div>
      </section>

      <section className="cj-rodina" id="rodina" aria-labelledby="cj-rodina-nadpis">
        <figure className="cj-sekce-obraz cj-sekce-obraz-l">
          <img
            src="/section-2.webp"
            width={900}
            height={1100}
            alt="Rodinné řeznictví Čejka — výroba tradičních uzenin"
          />
        </figure>
        <div className="cj-rodina-text">
          <p className="cj-eyebrow">Kdo za tím stojí</p>
          <h2 id="cj-rodina-nadpis">Rodina, ne řetězec</h2>
          <p className="cj-sekce-lede">
            Náš příběh se začal psát na přelomu 19. a 20. století. Přes
            hospodářské krize i komunismus jsme řemeslo udrželi v rodině —
            dnes ho vede už čtvrtá generace.
          </p>
          <dl className="cj-fakta">
            {duvery.map((d) => (
              <div className="cj-fakt" key={d.stitek}>
                <dt>{d.stitek}</dt>
                <dd>{d.text}</dd>
              </div>
            ))}
          </dl>
          <div className="cj-adresa">
            <p>
              <strong>Prodejna Pardubice</strong>
              <br />
              17. listopadu 180, Zelené předměstí, 530 02 Pardubice
            </p>
            <a className="cj-btn" href="tel:+420469319499">Zavolat a objednat</a>
          </div>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tetragon — výroba oken a dveří v Českých Budějovicích",
  description:
    "Plastová a hliníková okna, dveře i prosklené fasády z vlastní výroby v Českých Budějovicích. Zaměření, výroba, montáž i servis. Atypy a speciály, které jinde neseženete.",
  openGraph: {
    title: "Tetragon — okna z Českých Budějovic",
    description:
      "Zakázková výroba plastových a hliníkových oken, dveří a fasád. Vlastní výroba, žádné zboží nejasného původu z ciziny.",
    images: ["/hero.webp"],
    locale: "cs_CZ",
    type: "website",
  },
};

const atypy = [
  {
    kod: "HST",
    nazev: "Zdvižně-posuvné dveře",
    popis:
      "Velké prosklené plochy, které se lehce odsunou stranou. Terasa a obývák splynou v jeden prostor.",
  },
  {
    kod: "MONO",
    nazev: "Monoštulpová okna",
    popis:
      "Dvoukřídlé okno s velmi úzkou profilovou kombinací uprostřed. Víc skla, míň rámu, víc světla.",
  },
  {
    kod: "ALU",
    nazev: "Plast s hliníkovým opláštěním",
    popis:
      "Teplo plastu uvnitř, odolnost hliníku venku. Fasáda, která snese počasí i roky.",
  },
  {
    kod: "HIST",
    nazev: "Okrasné profily do starých domů",
    popis:
      "Šambrány a členění, které sedí k historické budově. Nové okno, které vypadá, že tam bylo vždycky.",
  },
  {
    kod: "SKRYT",
    nazev: "Skryté kování",
    popis:
      "Panty schované uvnitř rámu. Čistá linie křídla bez viditelných závěsů.",
  },
  {
    kod: "KUBUS",
    nazev: "Profil KUBUS",
    popis:
      "Jako jedni z mála v ČR jsme splnili podmínky pro zpracování tohoto nového profilového systému.",
  },
];

export default function Page() {
  return (
    <main className="tg">
      <header className="tg-nav">
        <a className="tg-mark" href="#" aria-label="Tetragon, domů">
          <span className="tg-mark__glyph" aria-hidden="true">
            <span className="tg-mark__frame" />
          </span>
          <span className="tg-mark__word">
            TETRA<span className="tg-mark__accent">GON</span>
          </span>
        </a>
        <nav className="tg-nav__links" aria-label="Hlavní">
          <a href="#vyroba">Co vyrábíme</a>
          <a href="#firma">O firmě</a>
          <a className="tg-nav__call" href="tel:+420387000000">
            Zavolat
          </a>
        </nav>
      </header>

      <section className="tg-hero" aria-labelledby="hero-nadpis">
        <div className="tg-hero__media">
          <img
            src="/hero.webp"
            alt="Detail okenního profilu a zasklení z výroby Tetragon v Českých Budějovicích"
            className="tg-hero__img"
          />
        </div>
        <div className="tg-hero__panel">
          <p className="tg-eyebrow">Vlastní výroba · České Budějovice · od 1991</p>
          <h1 id="hero-nadpis" className="tg-hero__title">
            Okno se měří
            <br />
            <span className="tg-hero__title--em">na milimetr.</span>
            <br />
            Vyrobíme ho tak.
          </h1>
          <p className="tg-hero__lead">
            Plastová a hliníková okna, dveře i prosklené fasády. Zaměříme,
            vyrobíme přímo tady u nás, dovezeme, namontujeme a postaráme se i
            o servis. Od jednoho sklepního okna po zakázku za deset milionů.
          </p>
          <div className="tg-hero__actions">
            <a className="tg-btn tg-btn--solid" href="tel:+420387000000">
              Zavolat a domluvit zaměření
            </a>
            <a className="tg-btn tg-btn--ghost" href="mailto:info@tetragon-cb.cz">
              Napsat e-mail
            </a>
          </div>
          <dl className="tg-hero__meta">
            <div>
              <dt>Ročně vyrobíme</dt>
              <dd>tisíce oken na míru</dd>
            </div>
            <div>
              <dt>Ve firmě je</dt>
              <dd>≈ 40 lidí celoročně</dd>
            </div>
            <div>
              <dt>Výroba stojí</dt>
              <dd>přímo v Č. Budějovicích</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="tg-sec tg-vyroba" id="vyroba" aria-labelledby="vyroba-nadpis">
        <div className="tg-sec__head">
          <p className="tg-eyebrow">Naše výsada</p>
          <h2 id="vyroba-nadpis" className="tg-sec__title">
            Atypy, které jinde neuděláte
          </h2>
          <p className="tg-sec__intro">
            Běžné okno umí každý. Nás si zákazníci pamatují kvůli tomu, co je
            navíc — profily a řešení, u kterých většina výrobců řekne, že to
            nejde. My to vyrábíme sami, takže to jde.
          </p>
        </div>
        <ul className="tg-grid" role="list">
          {atypy.map((a) => (
            <li className="tg-card" key={a.kod}>
              <span className="tg-card__kod" aria-hidden="true">
                {a.kod}
              </span>
              <h3 className="tg-card__title">{a.nazev}</h3>
              <p className="tg-card__text">{a.popis}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="tg-sec tg-firma" id="firma" aria-labelledby="firma-nadpis">
        <div className="tg-firma__media">
          <img
            src="/section-1.webp"
            alt="Pohled do výrobní haly firmy Tetragon při zpracování okenních profilů"
            className="tg-firma__img"
          />
        </div>
        <div className="tg-firma__body">
          <p className="tg-eyebrow">O firmě · založeno 1991</p>
          <h2 id="firma-nadpis" className="tg-sec__title">
            Neinzerujeme přehnaně.
            <br />
            Opíráme se o hotová okna.
          </h2>
          <p className="tg-firma__text">
            Tetragon vznikl v roce 1991. Přes stavební a inženýrskou činnost
            jsme se v roce 1998 dostali k tomu, co nás baví nejvíc — výrobě
            plastových a hliníkových výplní. Všechno děláme zakázkově, podle
            konkrétního zadání zákazníka.
          </p>
          <p className="tg-firma__text">
            Zásadně neprodáváme cizí zboží nejasného původu z ciziny, za které
            se nedá ručit. Každé okno pochází z naší vlastní výroby v Českých
            Budějovicích — víme, z čeho je a jak je udělané.
          </p>
          <ul className="tg-slova" role="list">
            <li>Zaměření u vás</li>
            <li>Vlastní výroba</li>
            <li>Dodání a montáž</li>
            <li>Následný servis</li>
          </ul>
          <p className="tg-firma__cit">
            „Hlavní cíl je spokojený zákazník, který nás doporučí dál.“
          </p>
        </div>
      </section>
    </main>
  );
}

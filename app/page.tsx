import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sprilux — žaluzie a rolety na míru, Ostrava",
  description:
    "Rodinná dílna z Ostravy. Zaměříme okno, ušijeme lamelu na milimetr a namontujeme tak, aby stínění drželo léta. Interiérové i venkovní žaluzie, rolety, plisé, sítě proti hmyzu.",
  openGraph: {
    title: "Sprilux — stínění na míru z Ostravy",
    description:
      "Žaluzie, rolety, plisé a sítě proti hmyzu měřené na každé okno. Zaměření zdarma po celé Ostravě.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const rozmery = [
  { cislo: "01", krok: "Zaměření", popis: "Přijedeme k vám s metrem a laserem. Změříme každé okno zvlášť — šířku, výšku, hloubku rámu, kování." },
  { cislo: "02", krok: "Výroba na míru", popis: "Lamely, tkanice i profily řežeme přesně na váš rozměr. Nic univerzálního, nic zkracovaného na místě." },
  { cislo: "03", krok: "Montáž", popis: "Uchytíme, srovnáme do vodováhy a vyzkoušíme chod. Odejdeme, až žaluzie jezdí hladce." },
];

const sortiment = [
  {
    nadpis: "Interiérové žaluzie",
    text: "Horizontální hliníkové i dřevěné lamely. Ovládáte řetízkem nebo šňůrou, sklápíte proti slunci i zvědavým pohledům.",
    detail: "hliník · dřevo · 16–50 mm lamela",
  },
  {
    nadpis: "Vertikální žaluzie",
    text: "Látkové lamely pro velká okna kanceláří a obýváků. Rozhrnou se do strany, natočí světlo přesně tam, kam chcete.",
    detail: "šíře lamely 89 a 127 mm",
  },
  {
    nadpis: "Plisé a rolety",
    text: "Skládaná plisé do atypických oken i střešních šikmin, textilní rolety den a noc. Vzorník látek přivezeme domů.",
    detail: "zatemňovací i průsvitné látky",
  },
  {
    nadpis: "Venkovní stínění",
    text: "Předokenní rolety a exteriérové žaluzie, které drží teplo venku a v zimě uvnitř. K tomu markýzy nad terasu.",
    detail: "rolety · exteriér · markýzy",
  },
  {
    nadpis: "Sítě proti hmyzu",
    text: "Rámečky do oken, dveřní rámy i rolovací sítě. V létě otevřete a komár zůstane venku.",
    detail: "okenní · dveřní · rolovací",
  },
  {
    nadpis: "Parapety a doplňky",
    text: "Vnitřní i venkovní parapety, posuvné japonské stěny, shrnovací dveře. Dořešíme okno od podlahy ke stropu.",
    detail: "parapety · posuvné stěny",
  },
];

export default function Page() {
  return (
    <main className="sx">
      <header className="sx-top">
        <a className="sx-mark" href="#" aria-label="Sprilux, úvodní strana">
          <span className="sx-mark-slats" aria-hidden="true">
            <i /><i /><i /><i />
          </span>
          <span className="sx-mark-name">Sprilux</span>
        </a>
        <nav className="sx-nav" aria-label="Hlavní">
          <a href="#sortiment">Co vyrábíme</a>
          <a href="#jak">Jak to chodí</a>
          <a className="sx-nav-call" href="tel:+420596000000">Zavolat do dílny</a>
        </nav>
      </header>

      <section className="sx-hero" aria-labelledby="sx-hero-h">
        <div className="sx-hero-img">
          <img
            src="/hero.webp"
            alt="Interiérové žaluzie sklopené proti dennímu světlu, pruhy slunce na stěně pokoje"
            width={1200}
            height={800}
          />
        </div>
        <div className="sx-hero-body">
          <p className="sx-eyebrow">Žaluzie a rolety · Ostrava</p>
          <h1 id="sx-hero-h">
            Světlo<br />
            <span className="sx-hero-em">natočené</span><br />
            přesně na milimetr.
          </h1>
          <p className="sx-lede">
            Sprilux je rodinná dílna, která žaluzie neprodává z krabice. Zaměříme každé
            vaše okno, ušijeme lamelu na míru a namontujeme tak, aby stínění tiše jezdilo
            ještě za deset let.
          </p>
          <div className="sx-hero-cta">
            <a className="sx-btn" href="#sortiment">Prohlédnout sortiment</a>
            <a className="sx-btn sx-btn-ghost" href="tel:+420596000000">Domluvit zaměření</a>
          </div>
        </div>
      </section>

      <section className="sx-section" id="sortiment" aria-labelledby="sx-sort-h">
        <div className="sx-sec-head">
          <p className="sx-eyebrow">Sortiment</p>
          <h2 id="sx-sort-h">Stínění pro každé okno v domě</h2>
          <p className="sx-sec-lede">
            Od chodby po podkroví, od bytu po kancelář. Vnitřní i venkovní, na míru
            konkrétnímu rámu — nikdy „skoro pasuje“.
          </p>
        </div>

        <div className="sx-visual">
          <img
            src="/section-1.webp"
            alt="Vertikální látkové žaluzie ve velkém okně, lamely natočené do stran"
            width={1000}
            height={700}
          />
        </div>

        <ul className="sx-grid">
          {sortiment.map((s) => (
            <li key={s.nadpis} className="sx-card">
              <h3>{s.nadpis}</h3>
              <p>{s.text}</p>
              <p className="sx-card-tag">{s.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="sx-section sx-jak" id="jak" aria-labelledby="sx-jak-h">
        <div className="sx-jak-inner">
          <div className="sx-jak-text">
            <p className="sx-eyebrow">Jak to u nás chodí</p>
            <h2 id="sx-jak-h">Tři kroky, žádné překvapení v ceně</h2>
            <p className="sx-sec-lede">
              Děláme stínění v Ostravě a okolí přes dvacet let. Přijedeme, změříme,
              vyrobíme a namontujeme — a co si odsouhlasíte při zaměření, to zaplatíte.
            </p>

            <ol className="sx-steps">
              {rozmery.map((r) => (
                <li key={r.cislo} className="sx-step">
                  <span className="sx-step-num">{r.cislo}</span>
                  <div>
                    <h3>{r.krok}</h3>
                    <p>{r.popis}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="sx-trust">
              <p className="sx-trust-line"><strong>Zaměření zdarma</strong> po celé Ostravě a okolí</p>
              <p className="sx-trust-line"><strong>Vzorník látek</strong> přivezeme až k vám domů</p>
              <p className="sx-trust-line"><strong>Vlastní montéři</strong>, žádní subdodavatelé</p>
            </div>
          </div>

          <div className="sx-jak-visual">
            <img
              src="/section-2.webp"
              alt="Detail montáže žaluzie u okna, ruce srovnávají lamely"
              width={900}
              height={1100}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

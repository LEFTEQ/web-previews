import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daniel Čvirk — kontejnerová doprava a sypké materiály, Ústí nad Labem",
  description:
    "Kontejnerová autodoprava v Ústí nad Labem. Přivezeme štěrk, písek i beton, odvezeme stavební suť a zeminu. Mobilní sběr odpadu. Zavolejte a přistavíme kontejner.",
};

const sluzby = [
  {
    tuna: "3–5 t",
    nazev: "Štěrky, písky, beton",
    popis:
      "Frakce od jemného písku po hrubý štěrk, betonová směs na místo stavby. Naložíme na váze, dovezeme tolik, kolik potřebujete — bez zbytečné rezervy navíc.",
  },
  {
    tuna: "do 10 t",
    nazev: "Odvoz suti a zeminy",
    popis:
      "Přistavíme kontejner na stavební suť, výkopovou zeminu nebo demoliční odpad. Odvezeme na certifikovanou skládku a doklad o uložení dostanete s fakturou.",
  },
  {
    tuna: "dle svozu",
    nazev: "Mobilní sběr odpadu",
    popis:
      "Kontejner k domu, chatě i firmě na jarní úklid, vyklizení nebo rekonstrukci. Přijedeme podle domluvy, naplněný kontejner odvezeme a prázdný můžeme nechat dál.",
  },
];

const duvody = [
  {
    cislo: "01",
    titulek: "Jeden řidič, jedno slovo",
    text:
      "Za volantem sedím já. Domluvíte se přímo s tím, kdo přijede — žádná dispečerská linka, žádné přehazování termínů.",
  },
  {
    cislo: "02",
    titulek: "Známe každou ulici v Ústí",
    text:
      "Klíše, Střekov, Neštěmice, Trmice i vršky nad městem. Poradíme, kam kontejner postavit, aby nepřekážel a nebránil vjezdu.",
  },
  {
    cislo: "03",
    titulek: "Přistavíme obvykle do druhého dne",
    text:
      "Zavolejte dopoledne a často stíháme ještě týž den. Řekneme rovnou cenu za dovoz i odvoz, ne odhad, který se pak mění.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="brand" href="#" aria-label="Daniel Čvirk — kontejnerová doprava">
          <span className="brand__name">ČVIRK</span>
          <span className="brand__sub">kontejnerová doprava · Ústí n. L.</span>
        </a>
        <a className="topbar__tel" href="tel:+420704608138">
          <span className="topbar__tel-label">Volejte</span>
          <span className="topbar__tel-num">704 608 138</span>
        </a>
      </header>

      <section className="hero">
        <img
          className="hero__img"
          src="/hero.webp"
          alt="Nákladní vůz s kontejnerem na štěrk a suť v Ústí nad Labem"
          width={1600}
          height={1000}
        />
        <div className="hero__panel">
          <p className="hero__eyebrow">Autodoprava · Ústí nad Labem</p>
          <h1 className="hero__title">
            Přivezu <em>štěrk</em>,<br />
            odvezu <em>suť</em>.
          </h1>
          <p className="hero__lead">
            Kontejnerová doprava sypkých materiálů a stavebního odpadu.
            Přistavím kontejner, naložím a odvezu — vy máte na dvoře čisto.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="tel:+420704608138">
              Zavolat: 704 608 138
            </a>
            <a className="btn btn--ghost" href="#sluzby">
              Co vozím
            </a>
          </div>
          <ul className="hero__chips">
            <li>Štěrky · písky · beton</li>
            <li>Suť a zemina</li>
            <li>Mobilní sběr odpadu</li>
          </ul>
        </div>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="section-head">
          <p className="kicker">Ceník podle nákladu</p>
          <h2 className="section-title" id="sluzby-nadpis">
            Co naložím na korbu
          </h2>
        </div>

        <div className="sluzby__grid">
          {sluzby.map((s, i) => (
            <article className="karta" key={s.nazev}>
              <div className="karta__load" aria-hidden="true">
                <span className="karta__tuna">{s.tuna}</span>
              </div>
              <h3 className="karta__nazev">{s.nazev}</h3>
              <p className="karta__popis">{s.popis}</p>
              <span className="karta__idx" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
            </article>
          ))}
        </div>

        <figure className="sluzby__foto">
          <img
            src="/section-1.webp"
            alt="Vysypání štěrku z kontejneru na místě stavby"
            width={1400}
            height={900}
          />
          <figcaption>
            Nakládka na váze — platíte za tuny, které opravdu odvezu.
          </figcaption>
        </figure>
      </section>

      <section className="onas" aria-labelledby="onas-nadpis">
        <div className="onas__foto">
          <img
            src="/section-2.webp"
            alt="Daniel Čvirk u svého nákladního vozu v Ústí nad Labem"
            width={1400}
            height={1100}
          />
        </div>
        <div className="onas__text">
          <p className="kicker">Proč jezdit se mnou</p>
          <h2 className="section-title" id="onas-nadpis">
            Daniel Čvirk za volantem
          </h2>
          <p className="onas__lead">
            Vozím sypké materiály a odpad po Ústí nad Labem a okolí už léta.
            Práce mě baví, když je hotová včas a bez řečí — a přesně tak ji
            dělám.
          </p>
          <ol className="duvody">
            {duvody.map((d) => (
              <li className="duvod" key={d.cislo}>
                <span className="duvod__cislo" aria-hidden="true">
                  {d.cislo}
                </span>
                <div>
                  <h3 className="duvod__titulek">{d.titulek}</h3>
                  <p className="duvod__text">{d.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dobrá čajovna — Ústí nad Labem",
  description:
    "Čajovna v Ústí nad Labem. Sypané čaje z čínských a japonských zahrad, klid u konvičky a lidé, co čaji rozumí.",
};

const caje = [
  {
    puvod: "Č\u00edna · Fu-ťien",
    nazev: "Long Jing „Tygří pramen\u201c",
    typ: "zelen\u00fd",
    popis:
      "Plochý pražený list, chuť pražených ořechů a čerstvé trávy. Naléváme na 80 °C, vydrží čtyři nálevy.",
    cena: "98 Kč / konvice",
  },
  {
    puvod: "Taiwan · Nan-tchou",
    nazev: "Formosa Oriental Beauty",
    typ: "oolong",
    popis:
      "Silně oxidovaný, medově sladký oolong z listů okousaných cikádkami. Voní po zralém ovoci a mědi.",
    cena: "120 Kč / konvice",
  },
  {
    puvod: "Indie · Darjeeling",
    nazev: "Darjeeling First Flush",
    typ: "čern\u00fd",
    popis:
      "Jarní sběr z úbočí Himálaje. Světlý nálev, muškátový tón a svěží hořkost horského vzduchu.",
    cena: "110 Kč / konvice",
  },
  {
    puvod: "Japonsko · Kagošima",
    nazev: "Shincha — první jarní čaj",
    typ: "zelen\u00fd",
    popis:
      "Nejčerstvější japonská zeleň roku. Sytě zelený nálev, chuť řas a sladké smetany. Pít mladý.",
    cena: "135 Kč / konvice",
  },
];

const obrady = [
  {
    krok: "I",
    nazev: "Vyberete si list",
    text:
      "Přineseme plechovky, otevřeme, přivoníte. Poradíme podle nálady i denní doby — nemusíte se v čajích vyznat.",
  },
  {
    krok: "II",
    nazev: "Připravíme nálev",
    text:
      "Každý čaj má svou teplotu vody a svůj čas. Přinášíme konvičku, přesýpací hodiny a vodu na dolévání.",
  },
  {
    krok: "III",
    nazev: "Zůstanete, jak dlouho chcete",
    text:
      "U jedné konvičky se dá vydržet celé odpoledne. Bez hudby v uších, bez spěchu, s knihou nebo s lidmi.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="top">
        <a className="wordmark" href="#" aria-label="Dobrá čajovna, domovská stránka">
          <span className="wordmark__dobra">Dobrá</span>
          <span className="wordmark__cajovna">čajovna</span>
          <span className="wordmark__misto">Ústí nad Labem</span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#listek">Čajový lístek</a>
          <a href="#obrad">Jak to u nás chodí</a>
          <a className="nav__cta" href="#navstiva">Otevřeno dnes</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero__frame">
          <img
            className="hero__img"
            src="/hero.webp"
            width={1600}
            height={1100}
            alt="Konvička sypaného čaje a rozehřáté šálky na nízkém stole v čajovně"
          />
          <div className="hero__steam" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="hero__copy">
          <p className="eyebrow">Čajovna v podloubí · Ústí nad Labem</p>
          <h1 className="hero__title">
            Sedněte si.<br />
            Voda se už <em>hřeje</em>.
          </h1>
          <p className="hero__lede">
            Sypané čaje z čínských, japonských a himálajských zahrad. Nízké
            stoly, měkké světlo a čas, který nikdo neměří. Přijďte na jednu
            konvičku a zůstaňte, jak dlouho vám bude dobře.
          </p>
          <div className="hero__meta">
            <span>Po–Čt 14–22 · Pá–So 14–24 · Ne 15–21</span>
            <span>Mírové náměstí, Ústí nad Labem</span>
          </div>
        </div>
      </section>

      <section className="listek" id="listek" aria-labelledby="listek-nadpis">
        <div className="section-head">
          <p className="eyebrow">Z plechovek na regálu</p>
          <h2 id="listek-nadpis" className="section-title">
            Co dnes stojí za nálev
          </h2>
          <p className="section-sub">
            Nabídka se mění podle sběru a ročního období. Tohle jsou čaje, které
            teď doporučujeme nejvíc — všechny prošly společnou degustací u pultu.
          </p>
        </div>

        <ul className="caje">
          {caje.map((c) => (
            <li className="caj" key={c.nazev}>
              <div className="caj__horni">
                <span className="caj__typ" data-typ={c.typ}>
                  {c.typ}
                </span>
                <span className="caj__puvod">{c.puvod}</span>
              </div>
              <h3 className="caj__nazev">{c.nazev}</h3>
              <p className="caj__popis">{c.popis}</p>
              <p className="caj__cena">{c.cena}</p>
            </li>
          ))}
        </ul>

        <figure className="listek__foto">
          <img
            src="/section-1.webp"
            width={1400}
            height={900}
            alt="Otevřené plechovky sypaného čaje s odměrkou u pultu čajovny"
            loading="lazy"
          />
          <figcaption>
            Přes sto druhů sypaného čaje. Vážíme na váze, ne z automatu — a
            klidně vám dáme přivonět dřív, než se rozhodnete.
          </figcaption>
        </figure>
      </section>

      <section className="obrad" id="obrad" aria-labelledby="obrad-nadpis">
        <div className="obrad__foto">
          <img
            src="/section-2.webp"
            width={1200}
            height={1400}
            alt="Klidný koutek čajovny s polštáři, nízkým stolkem a tlumeným světlem"
            loading="lazy"
          />
        </div>
        <div className="obrad__telo">
          <div className="section-head">
            <p className="eyebrow">Jak to u nás chodí</p>
            <h2 id="obrad-nadpis" className="section-title">
              Konvička jako celé odpoledne
            </h2>
            <p className="section-sub">
              U nás se nespěchá. Čaj se u nás připravuje po vzoru dobrých
              čajoven — pomalu, s dolévanou vodou a s prostorem být sám nebo ve
              dvou.
            </p>
          </div>

          <ol className="kroky">
            {obrady.map((o) => (
              <li className="krok" key={o.krok}>
                <span className="krok__cislo" aria-hidden="true">
                  {o.krok}
                </span>
                <div>
                  <h3 className="krok__nazev">{o.nazev}</h3>
                  <p className="krok__text">{o.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="navstiva" id="navstiva">
            <p className="navstiva__text">
              Vhodné pro samotáře i pro maminky s dětmi. Rezervace neděláme —
              místo se skoro vždy najde.
            </p>
            <p className="navstiva__adresa">
              Mírové náměstí, Ústí nad Labem · <span>475 200 200</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

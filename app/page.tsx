import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "David Alčer — zemní a výkopové práce minibagrem Kubota U-25 | Ostrava",
  description:
    "Výkopy inženýrských sítí, základů, bazénů i terénní úpravy minibagrem Kubota U-25. Projedu úzkou brankou, otočím se ve dvoře a nezavadím o dlažbu. Ostrava a Moravskoslezský kraj.",
  openGraph: {
    title: "David Alčer — výkopy minibagrem, Ostrava",
    description:
      "Kompaktní minibagr Kubota U-25 tam, kde velký stroj neprojede. Výkopy sítí, základů a bazénů v Ostravě a okolí.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const prace = [
  {
    kod: "Ø 1,50 m",
    nazev: "Kudy neprojede velký stroj",
    text: "Minibagr má šířku, s jakou projede běžnou brankou i průjezdem za domem. Oplocené pozemky, úzké příjezdy, uzavřené dvory — dostanu se tam, kam by jinak musela lopata a kolečko.",
  },
  {
    kod: "0 mm",
    nazev: "Nulový přesah zádě",
    text: "Kabina se při otáčení vejde do půdorysu pásů. Stroj se otočí v místě a nezavadí o zeď, plot ani auto. Kopu i těsně podél zdiva díky vybočení výložníku stranou.",
  },
  {
    kod: "guma",
    nazev: "Šetrné gumové pásy",
    text: "Přejedu vám po zámkové dlažbě i zatravnění bez rýh a promáčklin. Když je potřeba, dlažbu rozeberu, vykopu a poskládám zpátky — vozím i autodopravu na odvoz zeminy a sutě.",
  },
];

const vykopy = [
  "Výkopy pro inženýrské sítě — voda, kanalizace, elektro, plyn",
  "Základy staveb, garáží a plotů",
  "Hloubení bazénů a jezírek",
  "Zahradní a terénní úpravy, srovnání pozemku",
  "Pokládka a rozebrání zámkové dlažby",
  "Autodoprava — odvoz zeminy a sutě, návoz materiálu",
];

export default function Page() {
  return (
    <main className="da">
      <header className="da-top">
        <a className="da-mark" href="#" aria-label="David Alčer, zemní práce">
          <span className="da-mark-name">DAVID ALČER</span>
          <span className="da-mark-sub">ZEMNÍ&nbsp;PRÁCE&nbsp;·&nbsp;OSTRAVA</span>
        </a>
        <a className="da-call" href="tel:+420000000000">
          <span className="da-call-dot" aria-hidden="true" />
          Zavolat
        </a>
      </header>

      <section className="da-hero">
        <div className="da-hero-media">
          <img
            src="/hero.webp"
            alt="Minibagr Kubota U-25 při výkopových pracích na staveništi"
            className="da-hero-img"
          />
        </div>

        <div className="da-hero-copy">
          <p className="da-eyebrow">Kubota U-25 · minibagr na dosah</p>
          <h1 className="da-h1">
            Vykopu tam, kde se<br />
            velký bagr <em>ani neotočí.</em>
          </h1>
          <p className="da-lead">
            Zemní a výkopové práce minibagrem po Ostravě a celém
            Moravskoslezském kraji. Projedu brankou, otočím se ve dvoře
            a odjedu, aniž byste na zahradě poznali, že tam bagr byl.
          </p>
          <div className="da-actions">
            <a className="da-btn da-btn-primary" href="tel:+420000000000">
              Zavolat a domluvit termín
            </a>
            <a className="da-btn da-btn-ghost" href="#sluzby">
              Co všechno vykopu
            </a>
          </div>
          <p className="da-hero-note">
            Ostrava a okolí · po dohodě i mimo kraj
          </p>
        </div>
      </section>

      <section className="da-sec" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="da-sec-head">
          <p className="da-eyebrow">Přednosti stroje</p>
          <h2 className="da-h2" id="sluzby-nadpis">
            Malý rozměr, který na stavbě rozhoduje
          </h2>
        </div>

        <div className="da-cards">
          {prace.map((p) => (
            <article className="da-card" key={p.nazev}>
              <span className="da-card-kod">{p.kod}</span>
              <h3 className="da-card-nazev">{p.nazev}</h3>
              <p className="da-card-text">{p.text}</p>
            </article>
          ))}
        </div>

        <div className="da-list-wrap">
          <img
            src="/section-1.webp"
            alt="Detail výkopu inženýrských sítí minibagrem v úzkém prostoru"
            className="da-list-img"
          />
          <div className="da-list-body">
            <p className="da-eyebrow">Na co si mě lidé volají</p>
            <ul className="da-list">
              {vykopy.map((v) => (
                <li className="da-list-item" key={v}>
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="da-sec da-sec-dark" aria-labelledby="ostroji-nadpis">
        <div className="da-stroj">
          <img
            src="/section-2.webp"
            alt="Minibagr Kubota U-25 na gumových pásech připravený k práci"
            className="da-stroj-img"
          />
          <div className="da-stroj-body">
            <p className="da-eyebrow da-eyebrow-light">Stroj a člověk za ním</p>
            <h2 className="da-h2 da-h2-light" id="ostroji-nadpis">
              Jeden minibagr, jeden strojník, žádné dohady
            </h2>
            <p className="da-stroj-text">
              Bagruju sám na svém stroji, takže víte, kdo přijede a kdo
              práci odvede. Kubota U-25 je kompaktní minibagr s mimoosým
              vybočením výložníku — kopu základy, sítě i bazény přesně
              a těsně podél zdí. Domluva je stručná: co, kde a kdy.
            </p>
            <dl className="da-fakta">
              <div className="da-fakt">
                <dt>Kde pracuji</dt>
                <dd>Ostrava a Moravskoslezský kraj</dd>
              </div>
              <div className="da-fakt">
                <dt>Stroj</dt>
                <dd>Minibagr Kubota U-25, gumové pásy</dd>
              </div>
              <div className="da-fakt">
                <dt>Domluva</dt>
                <dd>Telefonicky, obhlídku zdarma</dd>
              </div>
            </dl>
            <a className="da-btn da-btn-primary" href="tel:+420000000000">
              Zavolat Davidovi
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

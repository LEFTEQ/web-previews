import type { CSSProperties } from "react";

export const metadata = {
  title: "Antonínovo pekařství — pečeme před vašima očima | Praha",
  description:
    "Poctivé kvašené pečivo z pražské pekárny Antonínovo. Chleba, koláče i voňavá káva. Sedm poboček — Vinohrady, Vršovice, Karlín, Holešovice, Dejvice, Smíchov.",
  openGraph: {
    title: "Antonínovo pekařství — pečeme před vašima očima",
    description:
      "Zatímco ještě spíte, naši pekaři už zadělávají těsto. Ráno na vás čekají křupavé bochníky. Sedm pekařství v Praze.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

type Pobocka = {
  cislo: string;
  ctvrt: string;
  adresa: string;
  tel: string;
};

const pobocky: Pobocka[] = [
  { cislo: "P2", ctvrt: "Vinohrady", adresa: "Náměstí Míru 585/11", tel: "603 816 942" },
  { cislo: "P3", ctvrt: "Vinohrady", adresa: "Laubova 4", tel: "605 202 861" },
  { cislo: "P5", ctvrt: "Smíchov", adresa: "Štefánikova 339/39", tel: "734 140 650" },
  { cislo: "P6", ctvrt: "Bubeneč", adresa: "Československé armády 729/28", tel: "739 027 750" },
  { cislo: "P7", ctvrt: "Holešovice", adresa: "Strossmayerovo náměstí 11", tel: "734 783 443" },
  { cislo: "P8", ctvrt: "Karlín", adresa: "Sokolovská 55", tel: "731 611 812" },
  { cislo: "P10", ctvrt: "Vršovice", adresa: "Moskevská 38", tel: "733 593 925" },
];

type Denne = {
  hodina: string;
  akce: string;
  detail: string;
};

// Rozvrh pekařského dne — struktura sekce je skutečná časová osa, ne dekorace.
const denniRozvrh: Denne[] = [
  {
    hodina: "2:40",
    akce: "Zaděláváme těsto",
    detail: "Žitný kvas si žije vlastním životem už od včerejška. Přidáváme mouku, vodu, sůl a čas.",
  },
  {
    hodina: "4:15",
    akce: "Tvarujeme bochníky",
    detail: "Rukama, jeden po druhém. Každý dostane svůj košík a jde odpočívat do chladu.",
  },
  {
    hodina: "5:30",
    akce: "Sázíme do pece",
    detail: "Kamenná pec má 250 °C. Zapařujeme, aby kůrka praskala a zpívala, když vychládá.",
  },
  {
    hodina: "6:45",
    akce: "Otevíráme dveře",
    detail: "Chleba, croissanty, koláče i káva. Voní to až na ulici — a to je celý smysl.",
  },
];

export default function Page() {
  return (
    <main className="pk">
      {/* HERO — nejcharakterističtější věc pekárny: brzké ráno a pec */}
      <section className="pk-hero" aria-labelledby="pk-hero-title">
        <img
          className="pk-hero__img"
          src="/hero.webp"
          alt="Čerstvě upečené bochníky chleba s křupavou kůrkou vytažené z pece"
          width={1600}
          height={1000}
        />
        <div className="pk-hero__scrim" aria-hidden="true" />

        <div className="pk-hero__inner">
          <p className="pk-eyebrow pk-hero__eyebrow">
            <span className="pk-eyebrow__dot" aria-hidden="true" />
            Praha · pečeme přímo před vašima očima
          </p>

          <h1 id="pk-hero-title" className="pk-hero__title">
            <span className="pk-hero__line pk-hero__line--muted">Zatímco ještě spíte,</span>
            <span className="pk-hero__line pk-hero__line--big">my už zaděláváme</span>
            <span className="pk-hero__line pk-hero__line--script">chleba.</span>
          </h1>

          <p className="pk-hero__lead">
            Antonínovo pekařství. Žitný kvas, kamenná pec a ruce, které ho v noci
            hlídají — aby na vás ráno čekaly první voňavé a křupavé bochníky.
          </p>

          <a className="pk-btn pk-btn--light" href="#nabidka">
            Pojďte dál
          </a>
        </div>

        <p className="pk-hero__mark" aria-hidden="true">
          od 2:40 do vyprodání
        </p>
      </section>

      {/* SEKCE 1 — časová osa pekařského dne = aktuální nabídka & řemeslo */}
      <section className="pk-day" id="nabidka" aria-labelledby="pk-day-title">
        <div className="pk-day__head">
          <p className="pk-eyebrow">
            <span className="pk-eyebrow__dot" aria-hidden="true" />
            Náš den
          </p>
          <h2 id="pk-day-title" className="pk-h2">
            Než si dáte první sousto,<br />
            máme za sebou půl dne v pekárně.
          </h2>
          <p className="pk-day__lead">
            Nepřivážíme zmražené polotovary. Kvasíme pomalu, tvarujeme rukama a
            pečeme až v noci — proto to ráno tak voní.
          </p>
        </div>

        <div className="pk-day__grid">
          <ol className="pk-time">
            {denniRozvrh.map((k) => (
              <li className="pk-time__item" key={k.hodina}>
                <span className="pk-time__clock">{k.hodina}</span>
                <div className="pk-time__body">
                  <h3 className="pk-time__akce">{k.akce}</h3>
                  <p className="pk-time__detail">{k.detail}</p>
                </div>
              </li>
            ))}
          </ol>

          <figure className="pk-day__figure">
            <img
              className="pk-day__img"
              src="/section-1.webp"
              alt="Pekař tvaruje bochník těsta v pekárně brzy ráno"
              width={900}
              height={1100}
              loading="lazy"
            />
            <figcaption className="pk-day__cap">
              K čerstvému pečivu si u nás dáte i dobrou kávu. Přijďte si posedět —
              nebo si necháte něco dobrého zabalit domů.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* SEKCE 2 — sedm pekařství = důvěra & lokalita */}
      <section className="pk-shops" id="pobocky" aria-labelledby="pk-shops-title">
        <div className="pk-shops__intro">
          <img
            className="pk-shops__img"
            src="/section-2.webp"
            alt="Regál plný čerstvého pečiva v prodejně Antonínova pekařství"
            width={1200}
            height={800}
            loading="lazy"
          />
          <div className="pk-shops__intro-text">
            <p className="pk-eyebrow pk-eyebrow--dark">
              <span className="pk-eyebrow__dot" aria-hidden="true" />
              Kudy k nám
            </p>
            <h2 id="pk-shops-title" className="pk-h2 pk-h2--dark">
              Už nás v Praze najdete{" "}
              <span className="pk-count">sedmkrát.</span>
            </h2>
            <p className="pk-shops__lead">
              Vinohrady, Vršovice, Karlín, Holešovice, Dejvice a nově i Smíchov.
              Nemáte cestu okolo? Pošleme dobroty až domů přes Wolt i Bolt Food.
            </p>
          </div>
        </div>

        <ul className="pk-list">
          {pobocky.map((p) => (
            <li className="pk-shop" key={p.cislo + p.adresa}>
              <span className="pk-shop__badge">{p.cislo}</span>
              <div className="pk-shop__info">
                <h3 className="pk-shop__ctvrt">{p.ctvrt}</h3>
                <p className="pk-shop__adresa">{p.adresa}</p>
              </div>
              <a className="pk-shop__tel" href={`tel:+420${p.tel.replace(/\s/g, "")}`}>
                +420 {p.tel}
              </a>
            </li>
          ))}
          <li className="pk-shop pk-shop--cafe">
            <span className="pk-shop__badge pk-shop__badge--cafe">☕</span>
            <div className="pk-shop__info">
              <h3 className="pk-shop__ctvrt">Antonínova kavárna</h3>
              <p className="pk-shop__adresa">Vršovice, Košická 32/17</p>
            </div>
            <a className="pk-shop__tel" href="tel:+420739083241">
              +420 739 083 241
            </a>
          </li>
        </ul>

        <p className="pk-shops__hire">
          Máte chuť dělat poctivé řemeslo?{" "}
          <a className="pk-inline-link" href="mailto:info@antoninovopekarstvi.cz?subject=Hled%C3%A1m%20pr%C3%A1ci%20pek%C5%99e">
            Hledáme pekaře →
          </a>
        </p>
      </section>
    </main>
  );
}

// (drženo pro případné rozšíření, nepoužito jinak)
export type _Style = CSSProperties;

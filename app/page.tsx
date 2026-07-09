import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BRYKA — elektroinstalace Brno | silnoproud, slaboproud, revize",
  description:
    "Elektroinstalace pro rodinné domy i velké objekty v Brně. Od projektu přes montáž až po revizní zkoušky. Kamery, alarmy Jablotron, chytré instalace Loxone.",
  openGraph: {
    title: "BRYKA — elektroinstalace Brno",
    description:
      "Silnoproud i slaboproud od projektu po revizi. Kamery, alarmy, chytré instalace. Košuličova 39, Brno.",
    images: ["/hero.webp"],
    type: "website",
    locale: "cs_CZ",
  },
};

const faze = [
  {
    cislo: "01",
    nazev: "Projektová dokumentace",
    popis:
      "Než se natáhne první kabel, nakreslíme rozvody, dimenzujeme jištění a naplánujeme okruhy podle toho, jak v objektu opravdu žijete nebo pracujete.",
  },
  {
    cislo: "02",
    nazev: "Montáž a instalace",
    popis:
      "Silnoproud i slaboproud — rozvaděče, zásuvkové a světelné okruhy, datové rozvody. Od rodinného domu po administrativní budovu, hotel nebo halu.",
  },
  {
    cislo: "03",
    nazev: "Revizní zkoušky",
    popis:
      "Dílo předáme se zprávou o revizi. Máte na papíře, že instalace je bezpečná a odpovídá normě — pro pojišťovnu, kolaudaci i vlastní klid.",
  },
];

const systemy = [
  {
    znacka: "JABLOTRON",
    typ: "Alarmy",
    popis:
      "Poplachové systémy českého výrobce s certifikací. Nainstalujeme, zapojíme a naučíme vás ovládat přes appku.",
  },
  {
    znacka: "HIKVISION · SAMSUNG · CP PLUS",
    typ: "Kamerové systémy",
    popis:
      "Montáž, instalace i servis. Po dokončení vás zaškolíme v ovládání. Záruka výrobce 2 roky na prvky, rok na naši montáž.",
  },
  {
    znacka: "LOXONE",
    typ: "Chytré instalace",
    popis:
      "Inteligentní elektroinstalace českého výrobce. Světla, topení, stínění a bezpečnost pod jedním ovládáním.",
  },
];

export default function Page() {
  return (
    <main className="pg">
      <header className="top">
        <a className="wordmark" href="#" aria-label="BRYKA — domů">
          <span className="wordmark__b">BRY</span>
          <span className="wordmark__k">KA</span>
          <span className="wordmark__dot" aria-hidden="true" />
        </a>
        <div className="top__meta">
          <span className="top__loc">Brno · Košuličova 39</span>
          <a className="top__tel" href="tel:+420739071114">
            +420 739 071 114
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="hero__grid">
          <div className="hero__text">
            <p className="eyebrow">
              <span className="eyebrow__live" aria-hidden="true" />
              Silnoproud i slaboproud · Brno a okolí
            </p>
            <h1 className="hero__title">
              Zapojíme to,
              <br />
              <span className="hero__accent">na čem stojí</span>
              <br />
              celý provoz.
            </h1>
            <p className="hero__lead">
              Elektroinstalace od rodinných domů po hotely, haly a
              administrativní budovy. Vedeme dílo od projektu přes montáž až
              po revizní zprávu — vždycky pod napětím máme přehled.
            </p>
            <div className="hero__cta">
              <a className="btn btn--primary" href="tel:+420739071114">
                Zavolat elektrikáři
              </a>
              <a className="btn btn--ghost" href="mailto:info@bryka.cz">
                Poslat poptávku
              </a>
            </div>
          </div>
          <figure className="hero__figure">
            <img
              className="hero__img"
              src="/hero.webp"
              alt="Rozvaděč s pečlivě zapojenými a označenými vodiči — elektroinstalace BRYKA"
              width={880}
              height={1040}
            />
            <figcaption className="hero__cap">
              <span className="hero__cap-k">Fáze L1 · L2 · L3</span>
              Každý okruh popsaný, změřený a v pořádku předaný.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="phases" aria-labelledby="phases-h">
        <div className="section-head">
          <p className="eyebrow">Jak to u nás běží</p>
          <h2 id="phases-h" className="section-title">
            Tři fáze od návrhu k revizi
          </h2>
          <p className="section-sub">
            Nepřebíráme rozdělanou práci po někom jiném — vedeme celou
            zakázku, takže víte, kdo za instalaci ručí.
          </p>
        </div>
        <ol className="phase-list">
          {faze.map((f) => (
            <li key={f.cislo} className="phase">
              <span className="phase__num" aria-hidden="true">
                {f.cislo}
              </span>
              <div className="phase__body">
                <h3 className="phase__name">{f.nazev}</h3>
                <p className="phase__desc">{f.popis}</p>
              </div>
            </li>
          ))}
        </ol>
        <figure className="phases__figure">
          <img
            className="phases__img"
            src="/section-1.webp"
            alt="Elektrikář BRYKA při montáži rozvodů v novostavbě"
            width={1200}
            height={720}
          />
        </figure>
      </section>

      <section className="systems" aria-labelledby="systems-h">
        <div className="systems__grid">
          <div className="systems__intro">
            <p className="eyebrow">Slaboproud a chytrá domácnost</p>
            <h2 id="systems-h" className="section-title">
              Nejen zásuvky.
              <br />
              Taky zabezpečení a chytré ovládání.
            </h2>
            <p className="section-sub">
              Zapojujeme značky, kterým důvěřujeme a se kterými umíme
              servisovat. Po montáži vás vždy zaškolíme, ať systém zvládnete
              ovládat sami.
            </p>
            <figure className="systems__figure">
              <img
                className="systems__img"
                src="/section-2.webp"
                alt="Kamerový a zabezpečovací systém instalovaný firmou BRYKA"
                width={900}
                height={640}
              />
            </figure>
          </div>
          <ul className="sys-list">
            {systemy.map((s) => (
              <li key={s.znacka} className="sys">
                <p className="sys__typ">{s.typ}</p>
                <p className="sys__znacka">{s.znacka}</p>
                <p className="sys__popis">{s.popis}</p>
              </li>
            ))}
            <li className="sys sys--note">
              <p className="sys__typ">Záruka</p>
              <p className="sys__note">
                2 roky výrobce na prvky systému, 1 rok BRYKA na provedení
                montáže. Poptávky na{" "}
                <a href="mailto:info@bryka.cz">info@bryka.cz</a>.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
